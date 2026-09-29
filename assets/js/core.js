/* Noyau : registre de contenu, chargement paresseux, stockage de la progression, utilitaires. */
(function () {
  'use strict';
  const LE = (window.LE = window.LE || {});

  /* ---------- Registre et chargement des fichiers de données ---------- */
  LE.content = {};           // id → objet enregistré
  const pending = {};        // fichier → Promise

  LE.register = function (obj) {
    if (obj && obj.id) LE.content[obj.id] = obj;
  };

  function loadScript(file) {
    if (pending[file]) return pending[file];
    pending[file] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = file + (LE.version ? '?v=' + LE.version : '');
      s.onload = () => resolve();
      s.onerror = () => { delete pending[file]; reject(new Error('Impossible de charger ' + file)); };
      document.head.appendChild(s);
    });
    return pending[file];
  }

  // Trouve l'entrée du catalogue pour un id (et son groupe).
  LE.entry = function (id) {
    const cat = LE.catalog || {};
    for (const group of Object.keys(cat)) {
      const e = cat[group].find((x) => x.id === id);
      if (e) return Object.assign({ group }, e);
    }
    return null;
  };

  // Charge un contenu (ou les deux sections d'un TOEIC blanc). Renvoie l'objet (ou {L, R} pour un test blanc).
  LE.load = async function (id) {
    const e = LE.entry(id);
    if (!e) throw new Error('Contenu inconnu : ' + id);
    if (e.files) {
      await Promise.all(e.files.map(loadScript));
      const parts = e.files.map((f) => f.split('/').pop().replace('.js', ''));
      return { entry: e, sections: parts.map((p) => LE.content[p]).filter(Boolean) };
    }
    if (!LE.content[id]) await loadScript(e.file);
    if (!LE.content[id]) throw new Error('Contenu vide : ' + id);
    return LE.content[id];
  };

  LE.loadMany = function (ids) {
    return Promise.all(ids.map((id) => LE.load(id).catch(() => null)));
  };

  /* ---------- Stockage ---------- */
  const KEY = 'le-toeic-v1';
  const defaults = () => ({
    v: 1,
    profile: { name: '', startDate: null, examDate: null },
    settings: { rate: 0.95, theme: 'auto', voice: '', autoplay: true, newPerDay: 15 },
    lessons: {},   // id → {read, done, best, attempts, last}
    sets: {},      // 't05:1' → {best, attempts, last, correct, total}
    mocks: [],     // {id, date, L:[c,t], R:[c,t], parts:{}, scoreL, scoreR}
    tests: [],     // {id, date, byLevel:{A1:[c,t]}, level}
    srs: {},       // 'v11|stapler' → {b, due, seen, lapses}
    verbs: {},     // base → {b, due}
    plan: {},      // 'w3' → {taskKey: true}
    activity: {},  // 'YYYY-MM-DD' → nb de réponses
    onboarded: false
  });

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw || typeof raw !== 'object') return defaults();
      const d = defaults();
      for (const k of Object.keys(d)) {
        if (raw[k] === undefined) raw[k] = d[k];
        else if (d[k] && typeof d[k] === 'object' && !Array.isArray(d[k])) raw[k] = Object.assign({}, d[k], raw[k]);
      }
      return raw;
    } catch (e) {
      return defaults();
    }
  }

  LE.state = load();
  let saveTimer = null;
  LE.save = function (now) {
    const write = () => {
      try { localStorage.setItem(KEY, JSON.stringify(LE.state)); } catch (e) { /* stockage indisponible */ }
    };
    clearTimeout(saveTimer);
    if (now) write(); else saveTimer = setTimeout(write, 150);
  };
  window.addEventListener('pagehide', () => LE.save(true));
  LE.resetState = function () { LE.state = defaults(); LE.save(true); };
  LE.importState = function (obj) {
    if (!obj || typeof obj !== 'object' || obj.v !== 1) throw new Error('Fichier de sauvegarde invalide');
    localStorage.setItem(KEY, JSON.stringify(obj));
    LE.state = load();
  };

  /* ---------- Dates ---------- */
  const pad = (n) => String(n).padStart(2, '0');
  LE.today = function () {
    const d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  };
  LE.parseDate = function (s) {
    if (!s) return null;
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  LE.fmtDate = function (s) {
    const d = typeof s === 'string' ? LE.parseDate(s) : s;
    if (!d) return '';
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };
  LE.addDays = function (s, n) {
    const d = LE.parseDate(s);
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  };
  LE.addMonths = function (s, n) {
    const d = LE.parseDate(s);
    d.setMonth(d.getMonth() + n);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  };
  LE.daysBetween = function (a, b) {
    return Math.round((LE.parseDate(b) - LE.parseDate(a)) / 86400000);
  };

  /* ---------- Activité et série ---------- */
  LE.logActivity = function (n) {
    const t = LE.today();
    LE.state.activity[t] = (LE.state.activity[t] || 0) + (n || 1);
    LE.save();
  };
  LE.streak = function () {
    let d = LE.today();
    const act = LE.state.activity;
    if (!act[d]) d = LE.addDays(d, -1);
    let n = 0;
    while (act[d]) { n++; d = LE.addDays(d, -1); }
    return n;
  };

  /* ---------- Progression des contenus ---------- */
  LE.lessonState = (id) => LE.state.lessons[id] || {};
  LE.recordLesson = function (id, correct, total) {
    const ratio = total ? correct / total : 0;
    const s = (LE.state.lessons[id] = LE.state.lessons[id] || {});
    s.read = true;
    s.attempts = (s.attempts || 0) + 1;
    s.last = LE.today();
    s.lastScore = ratio;
    s.best = Math.max(s.best || 0, ratio);
    if (ratio >= LE.PASS) s.done = true;
    LE.save();
    return s;
  };
  LE.markRead = function (id) {
    const s = (LE.state.lessons[id] = LE.state.lessons[id] || {});
    if (!s.read) { s.read = true; LE.save(); }
  };
  LE.PASS = 0.6;
  LE.setKey = (id, n) => id + ':' + n;
  LE.recordSet = function (key, correct, total) {
    const s = (LE.state.sets[key] = LE.state.sets[key] || {});
    const ratio = total ? correct / total : 0;
    s.attempts = (s.attempts || 0) + 1;
    s.last = LE.today();
    s.best = Math.max(s.best || 0, ratio);
    s.lastScore = ratio;
    LE.save();
  };

  /* ---------- Utilitaires DOM ---------- */
  LE.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };
  // Le HTML des fichiers de données est restreint et validé (tools/validate.mjs) : on l'insère tel quel.
  LE.rich = (s) => (s == null ? '' : String(s));
  LE.$ = (sel, root) => (root || document).querySelector(sel);
  LE.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  LE.el = function (html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  LE.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  LE.pct = (x) => Math.round((x || 0) * 100) + ' %';
  LE.LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  let toastTimer = null;
  LE.toast = function (msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
  };

  /* ---------- Comparaison des réponses écrites ---------- */
  LE.normalize = function (s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[“”«»]/g, '"')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[.!?…]+$/g, '')
      .replace(/^["']+|["']+$/g, '')
      .trim();
  };
  // Développe les contractions pour que « doesn't » = « does not ».
  LE.expand = function (s) {
    return LE.normalize(s)
      .replace(/\bwon't\b/g, 'will not')
      .replace(/\bcan't\b/g, 'can not')
      .replace(/\bcannot\b/g, 'can not')
      .replace(/\bshan't\b/g, 'shall not')
      .replace(/\bain't\b/g, 'is not')
      .replace(/n't\b/g, ' not')
      .replace(/'m\b/g, ' am')
      .replace(/'re\b/g, ' are')
      .replace(/'ve\b/g, ' have')
      .replace(/'ll\b/g, ' will')
      .replace(/'d\b/g, ' would')
      .replace(/\s+/g, ' ')
      .trim();
  };
  LE.loose = (s) => LE.expand(s).replace(/[,;:"()\-–—]/g, ' ').replace(/[.!?]/g, '').replace(/\s+/g, ' ').trim();
  LE.matches = function (given, accepted, loose) {
    const f = loose ? LE.loose : LE.expand;
    const g = f(given);
    if (!g) return false;
    return accepted.some((a) => f(a) === g);
  };

  /* ---------- Plan / semaines ---------- */
  LE.ensureDates = function () {
    const p = LE.state.profile;
    if (!p.startDate) p.startDate = LE.today();
    if (!p.examDate) p.examDate = LE.addMonths(p.startDate, 7);
    LE.save();
  };
  LE.currentWeek = function () {
    LE.ensureDates();
    const total = (LE.plan && LE.plan.weeks.length) || 30;
    const d = LE.daysBetween(LE.state.profile.startDate, LE.today());
    return Math.max(1, Math.min(total, Math.floor(d / 7) + 1));
  };
  LE.daysLeft = function () {
    LE.ensureDates();
    return LE.daysBetween(LE.today(), LE.state.profile.examDate);
  };
})();
