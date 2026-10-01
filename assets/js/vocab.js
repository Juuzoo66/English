/* Vocabulaire : fiches thématiques, flashcards à répétition espacée (Leitner), quiz, verbes irréguliers. */
(function () {
  'use strict';
  const LE = window.LE;
  const { esc, rich } = LE;

  const POS = { n: 'nom', v: 'verbe', adj: 'adj.', adv: 'adv.', prep: 'prép.', conj: 'conj.', pron: 'pron.', det: 'dét.', num: 'nombre', expr: 'expression', pv: 'phrasal verb', int: 'interj.' };
  LE.POS = POS;
  const INTERVALS = [0, 1, 3, 7, 14, 30]; // jours d'attente selon la boîte

  const wordKey = (themeId, w) => themeId + '|' + w.en;
  LE.wordKey = wordKey;
  LE.allWords = (theme) => theme.groups.flatMap((g) => g.words.map((w) => Object.assign({ theme: theme.id }, w)));

  LE.srsInfo = function (themeId, w) { return LE.state.srs[wordKey(themeId, w)] || null; };
  function rate(key, knew) {
    const s = LE.state.srs[key] || { b: 0, seen: 0, lapses: 0 };
    s.seen++;
    if (knew) s.b = Math.min(5, s.b + 1);
    else { s.b = 1; s.lapses++; }
    s.due = LE.addDays(LE.today(), knew ? INTERVALS[s.b] : 0);
    LE.state.srs[key] = s;
    LE.logActivity(1);
    LE.save();
    return s;
  }

  LE.themeStats = function (theme) {
    const words = LE.allWords(theme);
    let seen = 0, mastered = 0, due = 0;
    const t = LE.today();
    words.forEach((w) => {
      const s = LE.state.srs[wordKey(theme.id, w)];
      if (!s) return;
      seen++;
      if (s.b >= 4) mastered++;
      if (s.due <= t) due++;
    });
    return { total: words.length, seen, mastered, due };
  };

  // Nombre total de cartes à réviser aujourd'hui (sans charger les fichiers).
  LE.dueCount = function () {
    const t = LE.today();
    let n = 0;
    for (const k in LE.state.srs) if (LE.state.srs[k].due <= t) n++;
    for (const k in LE.state.verbs) if (LE.state.verbs[k].due <= t) n++;
    return n;
  };
  LE.learnedCount = function () {
    let n = 0;
    for (const k in LE.state.srs) if (LE.state.srs[k].b >= 2) n++;
    return n;
  };

  /* ---------- Page d'un thème ---------- */
  LE.renderVocabTheme = function (root, theme) {
    const st = LE.themeStats(theme);
    const ls = LE.lessonState(theme.id);
    const dot = (w) => {
      const s = LE.srsInfo(theme.id, w);
      if (!s) return '<span class="lvl" title="Pas encore vu"></span>';
      const c = s.b >= 4 ? 'l3' : s.b >= 2 ? 'l2' : 'l1';
      return `<span class="lvl ${c}" title="Boîte ${s.b}/5"></span>`;
    };
    root.innerHTML = `
      <div class="breadcrumb"><a href="#/vocab">Vocabulaire</a> › ${esc(theme.title)}</div>
      <div class="lesson-head">
        <div class="meta"><span class="badge ${theme.level}">${theme.level}</span><span>${st.total} mots</span>${ls.done ? '<span class="badge done">✓ Quiz validé</span>' : ''}</div>
        <h1>${esc(theme.title)}</h1>
        <div class="subtitle">${esc(theme.subtitle)}</div>
      </div>
      <p>${rich(theme.intro)}</p>
      <div class="card">
        <div class="row between"><b>Ta mémorisation</b><span class="muted">${st.seen}/${st.total} vus · ${st.mastered} maîtrisés</span></div>
        <div class="progress mt" style="margin-top:8px"><span style="width:${Math.round((st.mastered / st.total) * 100)}%"></span></div>
        <div class="btn-row">
          <a class="btn" href="#/vocab/${theme.id}/cartes">🃏 Flashcards${st.due ? ` (${st.due} à revoir)` : ''}</a>
          <a class="btn secondary" href="#/vocab/${theme.id}/quiz/en-fr">QCM anglais → français</a>
          <a class="btn secondary" href="#/vocab/${theme.id}/quiz/fr-en">QCM français → anglais</a>
          <a class="btn secondary" href="#/vocab/${theme.id}/quiz/ecoute">🎧 Écoute</a>
          <a class="btn secondary" href="#/vocab/${theme.id}/quiz/ecrire">✍️ Écrire</a>
        </div>
      </div>
      ${theme.groups.map((g) => `
        <h2>${esc(g.title)}</h2>
        <ul class="word-list">${g.words.map((w) => `
          <li>${dot(w)}${LE.speakBtn(w.en)}
            <div class="w-main">
              <div><span class="w-en">${esc(w.en)}</span><span class="w-pos">${POS[w.pos] || esc(w.pos)}</span></div>
              <div class="w-fr">${LE.nb(esc(w.fr))}</div>
              <div class="w-ex">${esc(w.ex)} ${LE.speakBtn(w.ex).replace('class="speak"', 'class="speak" style="width:26px;height:26px;min-width:26px;font-size:12px;vertical-align:middle"')}<br><i>${LE.nb(esc(w.exfr))}</i></div>
              ${w.note ? `<div class="w-note">💡 ${rich(w.note)}</div>` : ''}
            </div>
          </li>`).join('')}
        </ul>`).join('')}
      ${(theme.tips || []).map((b) => LE.renderBlock(Object.assign({ type: 'box' }, b))).join('')}
      <div class="btn-row"><a class="btn" href="#/vocab/${theme.id}/cartes">🃏 Apprendre avec les flashcards</a><a class="btn secondary" href="#/vocab">← Tous les thèmes</a></div>`;
  };

  /* ---------- Flashcards ---------- */
  // cards : [{key, w}] ; opts : {title, onDone}
  LE.runFlashcards = function (root, cards, opts) {
    opts = opts || {};
    const queue = cards.slice();
    const again = new Set();
    let known = 0, done = 0;
    let reverse = !!LE.state.settings.cardsReverse;

    function render() {
      LE.speech.stop();
      if (!queue.length) return finish();
      const c = queue[0];
      const w = c.w;
      const front = reverse
        ? `<div class="fc-word" style="font-size:1.6rem">${esc(w.fr)}</div><div class="fc-pos">${LE.POS[w.pos] || ''}</div>`
        : `<div class="fc-word">${esc(w.en)}</div><div class="fc-pos">${LE.POS[w.pos] || ''}</div>`;
      const back = `<div class="fc-word" style="font-size:1.5rem">${reverse ? esc(w.en) : esc(w.fr)}</div>
        <div class="fc-pos">${reverse ? esc(w.fr) : esc(w.en)}</div>
        <div class="fc-ex">${esc(w.ex)}</div><div class="fc-exfr">${esc(w.exfr)}</div>
        ${w.note ? `<div class="fc-exfr">💡 ${rich(w.note)}</div>` : ''}`;
      root.innerHTML = `
        <div class="runner">
          <div class="runner-head">
            <button class="btn small secondary" data-act="quit" type="button" aria-label="Quitter">✕</button>
            <div class="progress"><span style="width:${Math.round((done / (done + queue.length)) * 100)}%"></span></div>
            <div class="count">${queue.length} restante${queue.length > 1 ? 's' : ''}</div>
          </div>
          <div class="row between" style="margin-bottom:10px">
            <span class="muted" style="font-weight:600">${esc(opts.title || 'Flashcards')}</span>
            <label class="switch"><input type="checkbox" data-act="rev"${reverse ? ' checked' : ''}> Français → anglais</label>
          </div>
          <div class="flashcard-wrap"><div class="flashcard" tabindex="0" role="button" aria-label="Retourner la carte">
            <div class="face front">${front}<div class="fc-hint">Touche la carte pour la retourner</div></div>
            <div class="face back">${back}</div>
          </div></div>
          <div class="row" style="justify-content:center;margin-bottom:14px">${LE.speakBtn(w.en, { big: true })}</div>
          <div class="fc-actions hidden" data-role="rate">
            <button class="btn no" type="button" data-act="no">✗ À revoir</button>
            <button class="btn yes" type="button" data-act="yes">✓ Je savais</button>
          </div>
          <div class="center" data-role="flip-hint"><button class="btn" type="button" data-act="flip">Voir la réponse</button></div>
        </div>`;
      const card = root.querySelector('.flashcard');
      const flip = () => {
        card.classList.add('flipped');
        root.querySelector('[data-role="rate"]').classList.remove('hidden');
        root.querySelector('[data-role="flip-hint"]').classList.add('hidden');
        if (reverse) LE.speech.say(w.en);
      };
      card.onclick = () => (card.classList.contains('flipped') ? card.classList.remove('flipped') : flip());
      card.onkeydown = (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
      root.querySelector('[data-act="flip"]').onclick = flip;
      root.querySelector('[data-act="rev"]').onchange = (e) => { reverse = LE.state.settings.cardsReverse = e.target.checked; LE.save(); render(); };
      root.querySelector('[data-act="quit"]').onclick = () => { LE.speech.stop(); opts.onDone && opts.onDone(); };
      const answer = (knew) => {
        const cur = queue.shift();
        if (cur.verb) LE.rateVerb(cur.verb.base, knew); else rate(cur.key, knew);
        if (knew) { known++; done++; } else if (!again.has(cur.key)) { again.add(cur.key); queue.push(cur); } else done++;
        render();
      };
      root.querySelector('[data-act="no"]').onclick = () => answer(false);
      root.querySelector('[data-act="yes"]').onclick = () => answer(true);
      if (!reverse && LE.state.settings.autoplay) setTimeout(() => LE.speech.say(w.en), 200);
    }

    function finish() {
      root.innerHTML = `<div class="runner"><div class="card result">
        <div class="score-big">🎉</div>
        <h2 class="mt0">Session terminée !</h2>
        <p>${cards.length} carte${cards.length > 1 ? 's' : ''} révisée${cards.length > 1 ? 's' : ''}, ${known} connue${known > 1 ? 's' : ''} du premier coup.</p>
        <p class="muted">Les cartes reviendront automatiquement au bon moment : 1 jour, 3 jours, 1 semaine, 2 semaines puis 1 mois. C’est la répétition espacée : le meilleur moyen de retenir durablement.</p>
        <div class="btn-row" style="justify-content:center"><button class="btn" type="button" data-act="done">Terminer</button></div>
      </div></div>`;
      root.querySelector('[data-act="done"]').onclick = () => opts.onDone && opts.onDone();
    }
    if (!cards.length) {
      root.innerHTML = `<div class="runner"><div class="card empty"><div style="font-size:40px">✅</div><h2>Rien à réviser pour l’instant</h2><p>Reviens demain, ou apprends de nouveaux mots dans un thème.</p><div class="btn-row" style="justify-content:center"><a class="btn" href="#/vocab">Voir les thèmes</a></div></div></div>`;
      return;
    }
    render();
  };

  // Sélection des cartes d'un thème : d'abord celles à revoir, puis des nouvelles (limite par jour).
  LE.themeCards = function (theme, maxNew) {
    const t = LE.today();
    const words = LE.allWords(theme);
    const due = [], fresh = [];
    words.forEach((w) => {
      const k = wordKey(theme.id, w);
      const s = LE.state.srs[k];
      if (!s) fresh.push({ key: k, w });
      else if (s.due <= t) due.push({ key: k, w });
    });
    const n = maxNew || LE.state.settings.newPerDay || 15;
    return LE.shuffle(due).concat(fresh.slice(0, n));
  };

  /* ---------- Quiz de vocabulaire ---------- */
  function variants(en) {
    const base = String(en).replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
    const out = new Set([base]);
    base.split(/\s*[\/;]\s*/).forEach((p) => p && out.add(p.trim()));
    [...out].forEach((v) => { if (/^to /i.test(v)) out.add(v.replace(/^to /i, '')); });
    return [...out].filter(Boolean);
  }
  LE.buildVocabQuiz = function (theme, mode, n) {
    const words = LE.shuffle(LE.allWords(theme)).slice(0, n || 12);
    const all = LE.allWords(theme);
    const distract = (w, field) => LE.shuffle(all.filter((x) => x[field] !== w[field] && x.en !== w.en)).slice(0, 3).map((x) => x[field]);
    return words.map((w) => {
      const exp = `<b>${esc(w.en)}</b> = ${esc(w.fr)}<br><i>${esc(w.ex)}</i><br>${esc(w.exfr)}`;
      if (mode === 'fr-en') {
        const opts = LE.shuffle([w.en].concat(distract(w, 'en')));
        return { type: 'mcq', q: `Comment dit-on « <b>${esc(w.fr)}</b> » en anglais ?`, options: opts.map(esc), answer: opts.indexOf(w.en), explain: exp };
      }
      if (mode === 'ecoute') {
        const opts = LE.shuffle([w.fr].concat(distract(w, 'fr')));
        return { type: 'listen', say: w.en, q: 'Que veut dire le mot entendu ?', options: opts.map(esc), answer: opts.indexOf(w.fr), explain: exp };
      }
      if (mode === 'ecrire') {
        return { type: 'gap', q: `« <b>${esc(w.fr)}</b> » (${LE.POS[w.pos] || w.pos}) en anglais : ___`, answers: variants(w.en), explain: exp };
      }
      const opts = LE.shuffle([w.fr].concat(distract(w, 'fr')));
      return { type: 'mcq', q: `Que veut dire « <b>${esc(w.en)}</b> » ?`, options: opts.map(esc), answer: opts.indexOf(w.fr), explain: exp };
    });
  };

  /* ---------- Verbes irréguliers ---------- */
  LE.rateVerb = function (base, knew) {
    const s = LE.state.verbs[base] || { b: 0 };
    s.b = knew ? Math.min(5, s.b + 1) : 1;
    s.due = LE.addDays(LE.today(), knew ? INTERVALS[s.b] : 0);
    LE.state.verbs[base] = s;
    LE.logActivity(1);
    LE.save();
  };
  LE.verbForms = (s) => String(s).split('/').map((x) => x.trim()).filter(Boolean);

  LE.renderVerbs = function (root, ref, rank, query) {
    const q = (query || '').trim().toLowerCase();
    const rows = ref.verbs.filter((v) => (rank === 'all' || String(v.rank) === String(rank)) && (!q || [v.base, v.past, v.pp, v.fr].join(' ').toLowerCase().includes(q)));
    const counts = [1, 2, 3].map((r) => ref.verbs.filter((v) => v.rank === r).length);
    root.innerHTML = `
      <div class="breadcrumb"><a href="#/cours">Cours</a> › Verbes irréguliers</div>
      <h1>${esc(ref.title)}</h1>
      <p>${rich(ref.intro)}</p>
      <div class="pill-tabs">
        <a href="#/verbes/1" class="${String(rank) === '1' ? 'active' : ''}">⭐ Essentiels (${counts[0]})</a>
        <a href="#/verbes/2" class="${String(rank) === '2' ? 'active' : ''}">Courants (${counts[1]})</a>
        <a href="#/verbes/3" class="${String(rank) === '3' ? 'active' : ''}">Autres (${counts[2]})</a>
        <a href="#/verbes/all" class="${rank === 'all' ? 'active' : ''}">Tous</a>
      </div>
      <div class="btn-row" style="margin-top:0;margin-bottom:14px">
        <a class="btn" href="#/verbes/${rank}/quiz">✍️ S’entraîner (10 verbes)</a>
        <a class="btn secondary" href="#/verbes/${rank}/cartes">🃏 Flashcards</a>
      </div>
      <input type="text" placeholder="Rechercher un verbe (anglais ou français)…" value="${esc(query || '')}" data-act="search" style="margin-bottom:12px">
      <div class="table-wrap"><table class="t verbs-table">
        <thead><tr><th>Base</th><th>Prétérit</th><th>Participe passé</th><th>Français</th><th></th></tr></thead>
        <tbody>${rows.map((v) => `<tr><td>${esc(v.base)}</td><td>${esc(v.past)}</td><td>${esc(v.pp)}</td><td>${esc(v.fr)}</td><td>${LE.speakBtn(`${v.base}, ${LE.verbForms(v.past).join(' or ')}, ${LE.verbForms(v.pp).join(' or ')}`)}</td></tr>`).join('') || '<tr><td colspan="5" class="muted">Aucun verbe trouvé.</td></tr>'}</tbody>
      </table></div>`;
    const input = root.querySelector('[data-act="search"]');
    input.oninput = () => {
      const pos = input.selectionStart;
      LE.renderVerbs(root, ref, rank, input.value);
      const again = root.querySelector('[data-act="search"]');
      again.focus();
      again.setSelectionRange(pos, pos);
    };
  };

  LE.runVerbQuiz = function (root, ref, rank, onDone) {
    const pool = ref.verbs.filter((v) => rank === 'all' || String(v.rank) === String(rank));
    const list = LE.shuffle(pool).slice(0, 10);
    let i = 0, correct = 0;
    const mistakes = [];
    function render() {
      if (i >= list.length) return finish();
      const v = list[i];
      root.innerHTML = `
        <div class="runner">
          <div class="runner-head">
            <button class="btn small secondary" data-act="quit" type="button">✕</button>
            <div class="progress"><span style="width:${Math.round((i / list.length) * 100)}%"></span></div>
            <div class="count">${i + 1} / ${list.length}</div>
          </div>
          <div class="q-card">
            <div class="q-type">Verbes irréguliers</div>
            <div class="q-text"><span style="font-size:1.5rem">${esc(v.base)}</span> <span class="muted">(${esc(v.fr)})</span> ${LE.speakBtn(v.base)}</div>
            <form autocomplete="off">
              <label class="field"><span>Prétérit</span><input type="text" name="past" autocapitalize="off" autocorrect="off" spellcheck="false"></label>
              <label class="field"><span>Participe passé</span><input type="text" name="pp" autocapitalize="off" autocorrect="off" spellcheck="false"></label>
              <button class="btn" type="submit">Valider</button>
            </form>
            <div class="q-feedback"></div>
          </div>
        </div>`;
      root.querySelector('[data-act="quit"]').onclick = () => onDone && onDone();
      const form = root.querySelector('form');
      if (window.matchMedia('(pointer: fine)').matches) form.past.focus();
      form.onsubmit = (e) => {
        e.preventDefault();
        const okPast = LE.matches(form.past.value, LE.verbForms(v.past).concat([v.past]));
        const okPp = LE.matches(form.pp.value, LE.verbForms(v.pp).concat([v.pp]));
        const ok = okPast && okPp;
        if (ok) correct++; else mistakes.push({ v, past: form.past.value, pp: form.pp.value });
        LE.rateVerb(v.base, ok);
        form.past.classList.add(okPast ? 'correct' : 'wrong');
        form.pp.classList.add(okPp ? 'correct' : 'wrong');
        form.querySelectorAll('input,button').forEach((x) => (x.disabled = true));
        root.querySelector('.q-feedback').innerHTML = `<div class="feedback ${ok ? 'ok' : 'ko'}"><div class="fb-title">${ok ? '✅ Parfait !' : '❌ Presque…'}</div><div><b>${esc(v.base)}, ${esc(v.past)}, ${esc(v.pp)}</b> ${LE.speakBtn(`${v.base}, ${LE.verbForms(v.past).join(' or ')}, ${LE.verbForms(v.pp).join(' or ')}`)}</div></div>
          <div class="btn-row"><button class="btn" type="button" data-act="next">${i + 1 < list.length ? 'Suivant →' : 'Voir mon score'}</button></div>`;
        const nx = root.querySelector('[data-act="next"]');
        nx.onclick = () => { i++; render(); };
        nx.focus();
      };
    }
    function finish() {
      const prev = LE.lessonState('r01');
      LE.state.lessons.r01 = Object.assign(prev, { read: true, best: Math.max(prev.best || 0, correct / list.length), last: LE.today() });
      LE.save();
      root.innerHTML = `<div class="runner"><div class="card result">
        <div class="score-big">${correct}<small> / ${list.length}</small></div>
        <p>${correct === list.length ? 'Sans faute ! 🎉' : 'Revois les verbes ci-dessous puis recommence.'}</p>
        ${mistakes.length ? `<div class="review-list">${mistakes.map((m) => `<div class="review-item"><b>${esc(m.v.base)}, ${esc(m.v.past)}, ${esc(m.v.pp)}</b> <span class="muted">(${esc(m.v.fr)})</span><div class="ri-a muted">Ta réponse : ${esc(m.past || '(vide)')} / ${esc(m.pp || '(vide)')}</div></div>`).join('')}</div>` : ''}
        <div class="btn-row" style="justify-content:center"><button class="btn" type="button" data-act="retry">↻ 10 autres verbes</button><button class="btn secondary" type="button" data-act="back">Retour à la liste</button></div>
      </div></div>`;
      root.querySelector('[data-act="retry"]').onclick = () => LE.runVerbQuiz(root, ref, rank, onDone);
      root.querySelector('[data-act="back"]').onclick = () => onDone && onDone();
    }
    render();
  };

  LE.verbCards = function (ref, rank, max) {
    const t = LE.today();
    const pool = ref.verbs.filter((v) => rank === 'all' || String(v.rank) === String(rank));
    const due = [], fresh = [];
    pool.forEach((v) => {
      const s = LE.state.verbs[v.base];
      const card = { key: 'verb|' + v.base, verb: v, w: { en: `${v.base}, ${v.past}, ${v.pp}`, fr: v.fr, pos: 'v', ex: `${v.base} → ${v.past} → ${v.pp}`, exfr: v.fr } };
      if (!s) fresh.push(card); else if (s.due <= t) due.push(card);
    });
    return LE.shuffle(due).concat(fresh.slice(0, Math.max(0, (max || 15) - due.length)));
  };
})();
