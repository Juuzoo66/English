/* Pages du site. Chaque vue reçoit l'élément racine (<main>) et les paramètres de la route. */
(function () {
  'use strict';
  const LE = window.LE;
  const { esc, rich } = LE;
  const V = (LE.views = {});
  const cat = () => LE.catalog;

  /* ---------- Blocs de leçon ---------- */
  const BOX_ICON = { tip: '💡', warn: '⚠️', key: '✅', info: '🎯' };
  const BOX_TITLE = { tip: 'Astuce', warn: 'Attention', key: 'À retenir', info: 'Au TOEIC' };
  LE.renderBlock = function (b) {
    switch (b.type) {
      case 'h': return `<h3 class="blk-h">${rich(b.text)}</h3>`;
      case 'p': return `<p>${rich(b.html)}</p>`;
      case 'list': {
        const tag = b.ordered ? 'ol' : 'ul';
        return `<${tag}>${b.items.map((x) => `<li>${rich(x)}</li>`).join('')}</${tag}>`;
      }
      case 'examples':
        return `<ul class="examples">${b.items.map((x) => `<li>${LE.speakBtn(stripTags(x.en), { accent: x.accent || b.accent })}<div class="ex-text"><span class="en">${rich(x.en)}</span><span class="fr">${rich(x.fr)}</span>${x.note ? `<span class="note">${rich(x.note)}</span>` : ''}</div></li>`).join('')}</ul>`;
      case 'table':
        return `<div class="table-wrap"><table class="t"><thead><tr>${b.head.map((h) => `<th>${rich(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>${b.caption ? `<div class="table-caption">${rich(b.caption)}</div>` : ''}</div>`;
      case 'box':
        return `<div class="box ${b.style}"><div class="box-title">${BOX_ICON[b.style] || ''} ${rich(b.title || BOX_TITLE[b.style] || '')}</div><div class="box-body">${rich(b.html)}</div></div>`;
      case 'dialog': {
        const id = 'dlg' + Math.random().toString(36).slice(2, 8);
        return `<div class="dialog" id="${id}" data-accent="${b.accent || ''}">
          <div class="dlg-head"><b>💬 ${esc(b.title || 'Dialogue')}</b><span class="row"><label class="switch" style="font-size:13px"><input type="checkbox" data-act="dlg-fr" checked> FR</label><button class="btn small" type="button" data-act="dlg-play">▶ Écouter</button></span></div>
          ${b.lines.map((l, k) => `<div class="dlg-line" data-k="${k}" data-speaker="${l.speaker}"><span class="who ${l.speaker}">${esc(l.speaker)}</span><div class="dlg-text"><span class="en">${esc(l.en)}</span><span class="fr">${esc(l.fr)}</span></div>${LE.speakBtn(l.en, { speaker: l.speaker, accent: b.accent })}</div>`).join('')}
        </div>`;
      }
      case 'pairs':
        return `<div class="pairs">${b.items.map((p) => `<div class="pair"><span class="w">${LE.speakBtn(p.a)}${esc(p.a)}</span><span class="vs">≠</span><span class="w">${LE.speakBtn(p.b)}${esc(p.b)}</span>${p.note ? `<span class="pnote">${rich(p.note)}</span>` : ''}</div>`).join('')}</div>`;
    }
    return '';
  };
  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ''); }

  // Dialogues : lecture à plusieurs voix + masquage de la traduction
  document.addEventListener('click', (ev) => {
    const play = ev.target.closest('[data-act="dlg-play"]');
    if (play) {
      const d = play.closest('.dialog');
      const lines = LE.$$('.dlg-line', d);
      if (play.dataset.playing) { LE.speech.stop(); return; }
      play.dataset.playing = '1';
      play.textContent = '■ Stop';
      LE.speech.play(lines.map((l) => ({ text: l.querySelector('.en').textContent, speaker: l.dataset.speaker, accent: d.dataset.accent || undefined, pause: 300 })), (k) => {
        lines.forEach((l, j) => l.classList.toggle('speaking', j === k));
      }).then(() => {
        delete play.dataset.playing;
        play.textContent = '▶ Écouter';
        lines.forEach((l) => l.classList.remove('speaking'));
      });
    }
  });
  document.addEventListener('change', (ev) => {
    const t = ev.target.closest('[data-act="dlg-fr"]');
    if (t) t.closest('.dialog').classList.toggle('hide-fr', !t.checked);
  });

  /* ---------- Tâches du programme ---------- */
  const GROUP_ICON = { guide: '🧭', grammar: '📘', pron: '🗣️', vocab: '🧠', ref: '🔁', toeic: '🎯', mock: '🏁', placement: '📏' };
  LE.taskKey = (t) => (t.ref ? (t.set ? `${t.ref}:${t.set}` : t.ref) : t.key);
  LE.taskInfo = function (t, weekN) {
    const key = LE.taskKey(t);
    const manual = !!(LE.state.plan['w' + weekN] || {})[key];
    if (!t.ref) return { key, title: t.text, icon: '✍️', href: null, auto: false, manual, done: manual, free: true };
    const e = LE.entry(t.ref);
    if (!e) return { key, title: t.ref, icon: '•', href: null, auto: false, manual, done: manual };
    const S = LE.state;
    let href, sub = '', auto = false, title = e.title;
    switch (e.group) {
      case 'guide':
        href = `#/lecon/${e.id}`; sub = 'Guide'; auto = !!(S.lessons[e.id] || {}).read; break;
      case 'grammar':
        href = `#/lecon/${e.id}`; sub = `Grammaire · ${e.level}`; auto = !!(S.lessons[e.id] || {}).done; break;
      case 'pron':
        href = `#/lecon/${e.id}`; sub = `Prononciation · ${e.level}`; auto = !!(S.lessons[e.id] || {}).done; break;
      case 'vocab':
        href = `#/vocab/${e.id}`; sub = 'Vocabulaire · flashcards + quiz validé'; auto = !!(S.lessons[e.id] || {}).done; break;
      case 'ref':
        href = '#/verbes/1'; sub = 'Référence · quiz des verbes essentiels'; auto = (S.lessons[e.id] || {}).best > 0; break;
      case 'toeic':
        if (t.set) {
          href = `#/toeic/${e.id}/serie/${t.set}`; title = `${e.title} · série ${t.set}`; sub = 'Entraînement TOEIC';
          auto = !!S.sets[`${e.id}:${t.set}`];
        } else {
          href = `#/toeic/${e.id}`; title = `${e.title} : la méthode`; sub = 'Stratégie TOEIC'; auto = !!(S.lessons[e.id] || {}).read;
        }
        break;
      case 'mock':
        href = `#/blanc/${e.id}`; sub = 'TOEIC blanc · ≈ 1 h'; auto = S.mocks.some((m) => m.id === e.id); break;
      case 'placement':
        href = `#/test/${e.id}`; sub = 'Test de niveau · 25 min'; auto = S.tests.some((m) => m.id === e.id); break;
    }
    return { key, title, sub, href, icon: GROUP_ICON[e.group] || '•', auto, manual, done: auto || manual };
  };
  function toggleTask(weekN, key) {
    const w = (LE.state.plan['w' + weekN] = LE.state.plan['w' + weekN] || {});
    if (w[key]) delete w[key]; else w[key] = true;
    LE.save();
  }
  function taskLi(t, weekN) {
    const i = LE.taskInfo(t, weekN);
    return `<li class="task${i.done ? ' is-done' : ''}">
      <button class="check${i.done ? ' on' : ''}" type="button" data-week="${weekN}" data-key="${esc(i.key)}" aria-label="${i.done ? 'Marquer comme non fait' : 'Marquer comme fait'}" title="${i.auto ? 'Validé automatiquement' : 'Cocher / décocher'}">${i.done ? '✓' : ''}</button>
      <span class="t-ico" aria-hidden="true">${i.icon}</span>
      <div class="t-main">${i.href ? `<a class="t-title" href="${i.href}">${esc(i.title)}</a>` : `<span class="t-title">${esc(i.title)}</span>`}${i.sub ? `<div class="t-sub">${esc(i.sub)}</div>` : ''}</div>
    </li>`;
  }
  function bindTasks(root, rerender) {
    root.querySelectorAll('.task .check').forEach((b) => {
      b.onclick = () => {
        const w = Number(b.dataset.week);
        const week = LE.plan.weeks.find((x) => x.n === w);
        const t = week.tasks.find((x) => LE.taskKey(x) === b.dataset.key);
        const info = LE.taskInfo(t, w);
        if (info.auto) { LE.toast('Cette tâche est validée automatiquement quand tu la termines.'); return; }
        toggleTask(w, b.dataset.key);
        rerender();
      };
    });
  }
  LE.weekProgress = function (week) {
    const infos = week.tasks.map((t) => LE.taskInfo(t, week.n));
    return { done: infos.filter((x) => x.done).length, total: infos.length };
  };
  LE.phaseOf = (n) => LE.plan.phases.find((p) => n >= p.weeks[0] && n <= p.weeks[1]);

  /* ---------- Accueil ---------- */
  V.home = function (root) {
    LE.ensureDates();
    const S = LE.state;
    const wk = LE.currentWeek();
    const week = LE.plan.weeks.find((w) => w.n === wk);
    const phase = LE.phaseOf(wk);
    const left = LE.daysLeft();
    const allWeeks = LE.plan.weeks;
    const totalTasks = allWeeks.reduce((a, w) => a + w.tasks.length, 0);
    const doneTasks = allWeeks.reduce((a, w) => a + LE.weekProgress(w).done, 0);
    const late = allWeeks.filter((w) => w.n < wk).reduce((a, w) => a + (LE.weekProgress(w).total - LE.weekProgress(w).done), 0);
    const due = LE.dueCount();
    const lastMock = S.mocks[S.mocks.length - 1];
    const lastTest = S.tests[S.tests.length - 1];
    const gramDone = cat().grammar.filter((e) => (S.lessons[e.id] || {}).done).length;
    const hour = new Date().getHours();
    const hello = hour < 18 ? 'Hello' : 'Good evening';

    // Prochaines tâches : d'abord la semaine en cours, puis les retards.
    const next = [];
    [week].concat(allWeeks.filter((w) => w.n < wk)).forEach((w) => w.tasks.forEach((t) => {
      const i = LE.taskInfo(t, w.n);
      if (!i.done && i.href && next.length < 3) next.push(i);
    }));

    root.innerHTML = `
      <section class="hero">
        <h1>${hello}${S.profile.name ? ' ' + esc(S.profile.name) : ''} ! 👋</h1>
        <p>Semaine <b>${wk}</b> / 30 · Phase ${phase.id} « ${esc(phase.name)} » (${esc(phase.goal)})</p>
        <div class="hero-stats">
          <div class="hstat"><b>${left >= 0 ? 'J-' + left : 'Passé'}</b><span>avant le TOEIC</span></div>
          <div class="hstat"><b>🔥 ${LE.streak()}</b><span>jour${LE.streak() > 1 ? 's' : ''} de suite</span></div>
          <div class="hstat"><b>${gramDone}/${cat().grammar.length}</b><span>leçons de grammaire</span></div>
          <div class="hstat"><b>${LE.learnedCount()}</b><span>mots appris</span></div>
        </div>
        <div class="progress" title="Programme complet"><span style="width:${Math.round((doneTasks / totalTasks) * 100)}%"></span></div>
        <p style="font-size:13px;margin-top:6px">${doneTasks} / ${totalTasks} tâches du programme · TOEIC prévu le ${LE.fmtDate(S.profile.examDate)}</p>
      </section>

      ${!S.tests.length ? `<div class="card" style="border-color:var(--primary)"><h3 class="mt0">📏 Commence par le test de niveau</h3><p>25 minutes pour savoir d’où tu pars. Pas de stress : c’est juste un point de départ, et tu pourras le refaire plus tard pour mesurer tes progrès.</p><a class="btn" href="#/test/x01">Faire le test de niveau</a></div>` : ''}

      <div class="card">
        <h2 class="mt0">☀️ Ta séance du jour</h2>
        <ul class="task-list">
          <li class="task"><span class="t-ico">🃏</span><div class="t-main"><a class="t-title" href="#/revisions">Révisions flashcards</a><div class="t-sub">${due ? `${due} carte${due > 1 ? 's' : ''} à revoir aujourd’hui · ≈ ${Math.max(2, Math.round(due / 3))} min` : 'Rien à revoir : apprends de nouveaux mots dans un thème de vocabulaire'}</div></div></li>
          ${next.map((i) => `<li class="task"><span class="t-ico">${i.icon}</span><div class="t-main"><a class="t-title" href="${i.href}">${esc(i.title)}</a><div class="t-sub">${esc(i.sub || '')}</div></div></li>`).join('')}
          <li class="task"><span class="t-ico">🎧</span><div class="t-main"><span class="t-title">10 minutes d’immersion</span><div class="t-sub">${esc(immersionTip(wk))}</div></div></li>
        </ul>
        ${!next.length ? '<p class="muted mt">Toutes les tâches de la semaine sont faites 🎉 Tu peux prendre de l’avance sur la semaine suivante dans le Programme.</p>' : ''}
      </div>

      <div class="card">
        <div class="row between"><h2 class="mt0" style="margin:0">🗓️ Semaine ${wk} : ${esc(week.title)}</h2><a class="btn small ghost" href="#/plan">Tout le programme →</a></div>
        <p class="muted" style="margin-top:6px">${esc(week.goal)}</p>
        <ul class="task-list">${week.tasks.map((t) => taskLi(t, wk)).join('')}</ul>
        ${late ? `<p class="mt" style="margin-bottom:0">⏳ ${late} tâche${late > 1 ? 's' : ''} des semaines précédentes ${late > 1 ? 'sont' : 'est'} encore à faire. <a href="#/plan">Voir le programme</a></p>` : ''}
      </div>

      <div class="stat-tiles">
        <div class="tile"><b>${lastTest ? esc(lastTest.level) : 'Pas encore'}</b><span>Dernier test de niveau</span></div>
        <div class="tile"><b>${lastMock ? lastMock.total : 'Pas encore'}</b><span>Dernier TOEIC blanc /990</span></div>
        <div class="tile"><b>${Object.keys(S.sets).length}</b><span>Séries TOEIC faites</span></div>
        <div class="tile"><b>${Object.values(S.activity).reduce((a, b) => a + b, 0)}</b><span>Réponses données</span></div>
      </div>`;
    bindTasks(root, () => V.home(root));
  };

  function immersionTip(wk) {
    const tips = [
      'Une vidéo courte « BBC Learning English » avec les sous-titres anglais.',
      'Écoute un épisode de « 6 Minute English » (BBC) en lisant la transcription.',
      'Regarde 10 min d’une série que tu connais en VO, sous-titres anglais.',
      'Lis à voix haute les exemples d’une leçon déjà faite, en imitant la voix.',
      'Écoute une chanson en anglais avec les paroles sous les yeux.',
      'Change la langue d’une appli que tu utilises tous les jours en anglais.',
      'Décris ta journée en 5 phrases en anglais (à l’écrit ou à voix haute).'
    ];
    const d = new Date().getDay();
    return tips[(d + wk) % tips.length];
  }

  /* ---------- Programme ---------- */
  V.plan = function (root) {
    LE.ensureDates();
    const wk = LE.currentWeek();
    const S = LE.state;
    root.innerHTML = `
      <h1>🗓️ Ton programme sur 30 semaines</h1>
      <p>Du <b>${LE.fmtDate(S.profile.startDate)}</b> au TOEIC du <b>${LE.fmtDate(S.profile.examDate)}</b>. Rythme : <b>45 à 60 minutes par jour</b>, 6 jours sur 7. Les leçons se valident automatiquement (60 % aux exercices), les tâches libres se cochent à la main.</p>
      <div class="card">
        <b>Ta routine quotidienne idéale</b>
        <ul class="task-list">${LE.plan.daily.map((d) => `<li class="task"><span class="t-ico">⏱️</span><div class="t-main"><span class="t-title">${d.min} min</span><div class="t-sub">${esc(d.text)}</div></div></li>`).join('')}</ul>
        <p class="muted" style="margin:8px 0 0;font-size:14px">Tu peux modifier tes dates dans <a href="#/progres">Progrès › Réglages</a>.</p>
      </div>
      ${LE.plan.phases.map((p) => `
        <div class="phase-head"><span class="dot" style="background:${p.color}"></span><h2>Phase ${p.id} · ${esc(p.name)} <small class="muted">(semaines ${p.weeks[0]} à ${p.weeks[1]} · ${esc(p.goal)})</small></h2></div>
        <p class="muted">${esc(p.desc)}</p>
        ${LE.plan.weeks.filter((w) => w.n >= p.weeks[0] && w.n <= p.weeks[1]).map((w) => {
          const pr = LE.weekProgress(w);
          const start = LE.addDays(S.profile.startDate, (w.n - 1) * 7);
          const cls = (w.n === wk ? ' current' : '') + (pr.done === pr.total ? ' complete' : '');
          return `<details class="week${cls}"${w.n === wk ? ' open' : ''} id="w${w.n}">
            <summary><span class="wnum">${pr.done === pr.total ? '✓' : 'S' + w.n}</span>
              <span class="wtitle"><b>${esc(w.title)}</b><small class="muted">Semaine ${w.n} · à partir du ${LE.fmtDate(start)} · ${pr.done}/${pr.total}</small></span>
              <span class="wprog"><span class="progress${pr.done === pr.total ? ' ok' : ''}"><span style="width:${Math.round((pr.done / pr.total) * 100)}%"></span></span></span>
            </summary>
            <div class="wbody"><p class="muted" style="margin-bottom:4px">${esc(w.goal)}</p><ul class="task-list">${w.tasks.map((t) => taskLi(t, w.n)).join('')}</ul></div>
          </details>`;
        }).join('')}`).join('')}`;
    bindTasks(root, () => {
      const open = LE.$$('details.week[open]', root).map((d) => d.id);
      V.plan(root);
      open.forEach((id) => { const d = document.getElementById(id); if (d) d.open = true; });
    });
    const cur = document.getElementById('w' + wk);
    if (cur && !LE._planScrolled) { LE._planScrolled = true; setTimeout(() => cur.scrollIntoView({ block: 'center' }), 50); }
  };

  /* ---------- Listes ---------- */
  function itemCard(e, href, extra) {
    const s = LE.state.lessons[e.id] || {};
    const num = e.id.replace(/^[a-z]0?/, '');
    return `<a class="item${s.done ? ' done' : ''}" href="${href}">
      <span class="num">${s.done ? '✓' : esc(num)}</span>
      <span class="it-main"><span class="it-title">${esc(e.title)}</span>
        <span class="it-sub">${e.level ? `<span class="badge ${e.level}">${e.level}</span>` : ''}${s.best != null ? `<span>Meilleur score : ${LE.pct(s.best)}</span>` : s.read ? '<span>Lue</span>' : ''}${extra || ''}</span>
      </span></a>`;
  }
  LE.itemCard = itemCard;

  V.memo = async function (root) {
    root.innerHTML = '<div class="loading">Chargement des fiches…</div>';
    const list = cat().grammar.concat(cat().pron);
    const lessons = await LE.loadMany(list.map((e) => e.id));
    root.innerHTML = `
      <div class="breadcrumb"><a href="#/cours">Cours</a> › Fiches « À retenir »</div>
      <h1>📌 Fiches « À retenir »</h1>
      <p>L’essentiel de chaque leçon sur une seule page : idéal pour réviser en 20 minutes avant un TOEIC blanc ou le jour J. Clique sur un titre pour revoir la leçon complète.</p>
      <div class="btn-row" style="margin-top:0;margin-bottom:16px"><button class="btn secondary small" type="button" onclick="window.print()">🖨️ Imprimer</button></div>
      ${lessons.map((L, k) => {
        if (!L) return '';
        const keys = L.blocks.filter((b) => b.type === 'box' && b.style === 'key');
        if (!keys.length) return '';
        return `<div class="card"><div class="row between"><h3 class="mt0" style="margin:0"><a href="#/lecon/${L.id}">${esc(L.title)}</a></h3><span class="badge ${L.level}">${L.level}</span></div>
          <div class="mt">${keys.map((b) => `<div class="box-body">${rich(b.html)}</div>`).join('<hr>')}</div></div>`;
      }).join('')}`;
  };

  V.cours = function (root, tab) {
    if (tab === 'fiches') return V.memo(root);
    tab = tab || 'grammaire';
    const S = LE.state;
    const g = cat().grammar;
    const phases = [
      { name: 'Phase 1 · Fondations (A1)', list: g.slice(0, 15) },
      { name: 'Phase 2 · Construire (A2)', list: g.slice(15, 30) },
      { name: 'Phase 3 · Accélérer (B1 → B2)', list: g.slice(30) }
    ];
    const done = (list) => list.filter((e) => (S.lessons[e.id] || {}).done).length;
    let body = '';
    if (tab === 'grammaire') {
      body = phases.map((p) => `<div class="section-title"><h2>${esc(p.name)}</h2><span class="muted">${done(p.list)}/${p.list.length}</span></div>
        <div class="item-list">${p.list.map((e) => itemCard(e, `#/lecon/${e.id}`)).join('')}</div>`).join('');
    } else if (tab === 'prononciation') {
      body = `<p class="mt">L’oral du TOEIC représente la moitié du score. Ces leçons t’apprennent à <b>reconnaître</b> les sons de l’anglais (et à te faire comprendre). Chaque exemple s’écoute avec la synthèse vocale de ton appareil.</p>
        <div class="item-list">${cat().pron.map((e) => itemCard(e, `#/lecon/${e.id}`)).join('')}</div>`;
    } else {
      body = `<div class="item-list mt">
        ${cat().guide.map((e) => itemCard(e, `#/lecon/${e.id}`)).join('')}
        ${itemCard(Object.assign({}, cat().ref[0], { level: 'A2' }), '#/verbes/1')}
      </div>`;
    }
    root.innerHTML = `
      <h1>📘 Cours</h1>
      <p>La grammaire expliquée simplement, en français, avec des exemples à écouter et des exercices corrigés. Une leçon est validée à partir de <b>60 %</b> de bonnes réponses.</p>
      <div class="pill-tabs">
        <a href="#/cours/grammaire" class="${tab === 'grammaire' ? 'active' : ''}">Grammaire (${done(g)}/${g.length})</a>
        <a href="#/cours/prononciation" class="${tab === 'prononciation' ? 'active' : ''}">Prononciation (${done(cat().pron)}/${cat().pron.length})</a>
        <a href="#/cours/outils" class="${tab === 'outils' ? 'active' : ''}">Guides et verbes irréguliers</a>
        <a href="#/cours/fiches">📌 Fiches « À retenir »</a>
      </div>
      ${body}`;
  };

  /* ---------- Leçon ---------- */
  function neighbors(id) {
    const e = LE.entry(id);
    const list = cat()[e.group];
    const k = list.findIndex((x) => x.id === id);
    return { prev: list[k - 1], next: list[k + 1], group: e.group };
  }
  const GROUP_BACK = { grammar: ['#/cours/grammaire', 'Grammaire'], pron: ['#/cours/prononciation', 'Prononciation'], guide: ['#/cours/outils', 'Guides'] };

  V.lesson = async function (root, id, sub) {
    const e = LE.entry(id);
    if (!e) return V.notFound(root);
    let L;
    try { L = await LE.load(id); } catch (err) { return V.missing(root, e); }
    const [backHref, backLabel] = id === 't00' ? ['#/toeic', 'TOEIC'] : GROUP_BACK[e.group] || ['#/cours', 'Cours'];
    const nb = neighbors(id);
    const nextHref = nb.next ? `#/lecon/${nb.next.id}` : null;
    document.title = `${L.title} · Learn English`;

    if (sub === 'exercices' && L.exercises && L.exercises.length) {
      const run = () => LE.runExercises(root, L.exercises, {
        mode: 'practice',
        title: L.title,
        onQuit: () => (location.hash = `#/lecon/${id}`),
        onFinish: (res) => {
          LE.recordLesson(id, res.correct, res.total);
          LE.renderScore(root, res, {
            title: L.title,
            backLabel: nextHref ? 'Leçon suivante →' : 'Retour',
            onRetry: run,
            onBack: () => (location.hash = nextHref || backHref)
          });
          const card = root.querySelector('.result .btn-row');
          if (card) card.insertAdjacentHTML('beforeend', `<a class="btn ghost" href="#/lecon/${id}">Relire la leçon</a>`);
        }
      });
      run();
      return;
    }

    LE.markRead(id);
    const s = LE.lessonState(id);
    const nEx = (L.exercises || []).length;
    root.innerHTML = `
      <div class="breadcrumb"><a href="${backHref}">${backLabel}</a> › ${esc(L.title)}</div>
      <header class="lesson-head">
        <div class="meta"><span class="badge ${L.level}">${L.level}</span><span>⏱ ${L.minutes} min</span>${s.done ? '<span class="badge done">✓ Validée</span>' : ''}${s.best != null ? `<span>Meilleur score : ${LE.pct(s.best)}</span>` : ''}</div>
        <h1>${esc(L.title)}</h1>
        <div class="subtitle">${esc(L.subtitle)}</div>
      </header>
      ${L.goals && L.goals.length ? `<div class="goals"><b>🎯 Dans cette leçon, tu vas apprendre à :</b><ul>${L.goals.map((g) => `<li>${rich(g)}</li>`).join('')}</ul></div>` : ''}
      <article class="lesson-body">${L.blocks.map(LE.renderBlock).join('')}</article>
      ${nEx ? `<div class="cta-bar"><div class="card"><div><b>Prête ?</b> <span class="muted">${nEx} exercices corrigés</span></div><a class="btn" href="#/lecon/${id}/exercices">✍️ Faire les exercices</a></div></div>` : ''}
      <div class="btn-row" style="justify-content:space-between;margin-top:24px">
        ${nb.prev ? `<a class="btn secondary" href="#/lecon/${nb.prev.id}">← ${esc(nb.prev.title)}</a>` : '<span></span>'}
        ${nb.next ? `<a class="btn secondary" href="#/lecon/${nb.next.id}">${esc(nb.next.title)} →</a>` : ''}
      </div>`;
  };

  V.missing = function (root, e) {
    root.innerHTML = `<div class="card empty"><div style="font-size:40px">🚧</div><h2>${esc(e.title)}</h2><p>Ce contenu n’est pas encore disponible.</p><a class="btn" href="#/">Retour à l’accueil</a></div>`;
  };
  V.notFound = function (root) {
    root.innerHTML = `<div class="card empty"><div style="font-size:40px">🤷</div><h2>Page introuvable</h2><a class="btn" href="#/">Retour à l’accueil</a></div>`;
  };

  /* ---------- Vocabulaire ---------- */
  V.vocabList = async function (root) {
    const list = cat().vocab;
    root.innerHTML = `<h1>🧠 Vocabulaire</h1><div class="loading">Chargement des thèmes…</div>`;
    const themes = await LE.loadMany(list.map((e) => e.id));
    const due = LE.dueCount();
    const totalWords = themes.filter(Boolean).reduce((a, t) => a + LE.allWords(t).length, 0);
    root.innerHTML = `
      <h1>🧠 Vocabulaire</h1>
      <p>${list.length} thèmes, ${totalWords} mots et expressions choisis pour le TOEIC. Pour chaque thème : lis la liste en écoutant les mots, apprends-les avec les <b>flashcards</b> (répétition espacée), puis valide le <b>quiz</b> (60 %).</p>
      <div class="card" style="border-color:var(--primary)">
        <div class="row between"><div><b>🃏 Révisions du jour</b><div class="muted">${due ? `${due} carte${due > 1 ? 's' : ''} à revoir aujourd’hui` : 'Aucune carte à revoir pour l’instant'}</div></div>
        <a class="btn" href="#/revisions">${due ? 'Réviser maintenant' : 'Ouvrir'}</a></div>
      </div>
      <input type="search" placeholder="🔎 Chercher un mot (anglais ou français)…" data-act="vsearch" aria-label="Chercher un mot" style="margin-bottom:12px">
      <div data-role="vresults"></div>
      <div class="item-list" data-role="vthemes">${list.map((e, k) => {
        const t = themes[k];
        if (!t) return `<div class="item missing"><span class="num">${k + 1}</span><span class="it-main"><span class="it-title">${esc(e.title)}</span><span class="it-sub">Bientôt disponible</span></span></div>`;
        const st = LE.themeStats(t);
        return itemCard(e, `#/vocab/${e.id}`, `<span>${st.mastered}/${st.total} maîtrisés</span>${st.due ? `<span class="badge">🃏 ${st.due}</span>` : ''}`);
      }).join('')}</div>`;
    // Recherche dans tous les thèmes (sans accents ni majuscules).
    const fold = (x) => String(x).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const index = themes.filter(Boolean).flatMap((t) => LE.allWords(t).map((w) => ({ w, t, key: fold(w.en + ' | ' + w.fr) })));
    const input = root.querySelector('[data-act="vsearch"]');
    const out = root.querySelector('[data-role="vresults"]');
    input.oninput = () => {
      const q = fold(input.value.trim());
      root.querySelector('[data-role="vthemes"]').classList.toggle('hidden', q.length >= 2);
      if (q.length < 2) { out.innerHTML = ''; return; }
      const hits = index.filter((x) => x.key.includes(q)).slice(0, 40);
      out.innerHTML = hits.length
        ? `<ul class="word-list">${hits.map(({ w, t }) => `<li>${LE.speakBtn(w.en)}<div class="w-main"><div><span class="w-en">${esc(w.en)}</span><span class="w-pos">${LE.POS[w.pos] || ''}</span></div><div class="w-fr">${esc(w.fr)}</div><div class="w-ex">${esc(w.ex)}</div><div class="w-ex"><a href="#/vocab/${t.id}">${esc(t.title)}</a></div></div></li>`).join('')}</ul>`
        : '<p class="muted">Aucun mot trouvé.</p>';
    };
  };

  V.vocabTheme = async function (root, id, sub, mode) {
    const e = LE.entry(id);
    if (!e) return V.notFound(root);
    let T;
    try { T = await LE.load(id); } catch (err) { return V.missing(root, e); }
    document.title = `${T.title} · Learn English`;
    if (sub === 'cartes') {
      return LE.runFlashcards(root, LE.themeCards(T), { title: T.title, onDone: () => (location.hash = `#/vocab/${id}`) });
    }
    if (sub === 'quiz') {
      const labels = { 'en-fr': 'QCM anglais → français', 'fr-en': 'QCM français → anglais', ecoute: 'Écoute', ecrire: 'Écrire le mot' };
      const run = () => LE.runExercises(root, LE.buildVocabQuiz(T, mode, 12), {
        mode: 'practice',
        title: `${T.title} · ${labels[mode] || ''}`,
        onQuit: () => (location.hash = `#/vocab/${id}`),
        onFinish: (res) => {
          LE.recordLesson(id, res.correct, res.total);
          LE.renderScore(root, res, { title: T.title, backLabel: 'Retour au thème', onRetry: run, onBack: () => (location.hash = `#/vocab/${id}`) });
        }
      });
      return run();
    }
    LE.renderVocabTheme(root, T);
  };

  V.review = async function (root) {
    root.innerHTML = '<div class="loading">Préparation des révisions…</div>';
    const t = LE.today();
    const themeIds = new Set(Object.keys(LE.state.srs).filter((k) => LE.state.srs[k].due <= t).map((k) => k.split('|')[0]));
    const themes = (await LE.loadMany([...themeIds])).filter(Boolean);
    let cards = [];
    themes.forEach((T) => LE.allWords(T).forEach((w) => {
      const k = LE.wordKey(T.id, w);
      const s = LE.state.srs[k];
      if (s && s.due <= t) cards.push({ key: k, w });
    }));
    const verbDue = Object.keys(LE.state.verbs).filter((b) => LE.state.verbs[b].due <= t);
    if (verbDue.length) {
      try {
        const ref = await LE.load('r01');
        LE.verbCards(ref, 'all', 0).forEach((c) => cards.push(c));
      } catch (e) { /* liste de verbes indisponible */ }
    }
    cards = LE.shuffle(cards).slice(0, 60);
    LE.runFlashcards(root, cards, { title: 'Révisions du jour', onDone: () => (location.hash = '#/vocab') });
  };

  V.verbs = async function (root, rank, sub) {
    rank = rank || '1';
    let ref;
    try { ref = await LE.load('r01'); } catch (err) { return V.missing(root, LE.entry('r01')); }
    if (sub === 'quiz') return LE.runVerbQuiz(root, ref, rank, () => (location.hash = `#/verbes/${rank}`));
    if (sub === 'cartes') return LE.runFlashcards(root, LE.verbCards(ref, rank, 15), { title: 'Verbes irréguliers', onDone: () => (location.hash = `#/verbes/${rank}`) });
    LE.renderVerbs(root, ref, rank, '');
  };

  /* ---------- TOEIC ---------- */
  V.toeic = function (root) {
    const S = LE.state;
    const lastMock = S.mocks[S.mocks.length - 1];
    root.innerHTML = `
      <h1>🎯 Le TOEIC</h1>
      <p>Le TOEIC Listening & Reading : 200 questions, 2 heures, un score sur 990. Objectif : <b>550 (B1)</b>, puis <b>785 (B2)</b>. Pour chaque partie : la méthode, les pièges, puis des séries d’entraînement corrigées.</p>
      <div class="grid grid-2">
        <a class="item" href="#/lecon/t00"><span class="num">🧭</span><span class="it-main"><span class="it-title">Le TOEIC de A à Z</span><span class="it-sub">Format, score, inscription, jour J</span></span></a>
        <a class="item" href="#/test/x01"><span class="num">📏</span><span class="it-main"><span class="it-title">Tests de niveau</span><span class="it-sub">${S.tests.length ? `Dernier résultat : ${esc(S.tests[S.tests.length - 1].level)}` : 'Savoir où tu en es (25 min)'}</span></span></a>
      </div>
      <div class="section-title"><h2>🎧 Listening</h2><span class="muted">Parties 1 à 4 · 100 questions · 45 min</span></div>
      <div class="item-list">${cat().toeic.filter((e) => e.part <= 4).map(partCard).join('')}</div>
      <div class="section-title"><h2>📖 Reading</h2><span class="muted">Parties 5 à 7 · 100 questions · 75 min</span></div>
      <div class="item-list">${cat().toeic.filter((e) => e.part >= 5).map(partCard).join('')}</div>
      <div class="section-title"><h2>🏁 TOEIC blancs</h2><span class="muted">≈ 100 questions · ≈ 1 h</span></div>
      <div class="item-list">${cat().mock.map((m) => {
        const res = S.mocks.filter((x) => x.id === m.id);
        const best = res.length ? Math.max(...res.map((x) => x.total)) : null;
        return `<a class="item${best != null ? ' done' : ''}" href="#/blanc/${m.id}"><span class="num">${best != null ? '✓' : '🏁'}</span><span class="it-main"><span class="it-title">${esc(m.title)}</span><span class="it-sub">${best != null ? `Meilleur score : ${best}/990` : 'Pas encore fait'}</span></span></a>`;
      }).join('')}</div>
      <div class="section-title"><h2>📏 Tests de niveau</h2></div>
      <div class="item-list">${cat().placement.map((m) => {
        const res = S.tests.filter((x) => x.id === m.id);
        const last = res[res.length - 1];
        return `<a class="item${last ? ' done' : ''}" href="#/test/${m.id}"><span class="num">${last ? '✓' : '📏'}</span><span class="it-main"><span class="it-title">${esc(m.title)}</span><span class="it-sub">${last ? `Dernier résultat : ${esc(last.level)} (${LE.fmtDate(last.date)})` : '48 questions · 25 min'}</span></span></a>`;
      }).join('')}</div>
      ${lastMock ? `<div class="card mt"><b>Ton dernier TOEIC blanc :</b> ${lastMock.total}/990 (Listening ${lastMock.scoreL}, Reading ${lastMock.scoreR}), niveau estimé ${lastMock.level}.</div>` : ''}`;
  };
  function partCard(e) {
    const S = LE.state;
    const keys = Object.keys(S.sets).filter((k) => k.startsWith(e.id + ':'));
    const sub = `<span>${LE.PART_INFO[e.part].icon} Partie ${e.part}</span>${keys.length ? `<span>${keys.length} série${keys.length > 1 ? 's' : ''} faite${keys.length > 1 ? 's' : ''}</span>` : ''}`;
    return itemCard(Object.assign({}, e, { level: e.level }), `#/toeic/${e.id}`, sub);
  }

  V.toeicPart = async function (root, id, sub, n) {
    const e = LE.entry(id);
    if (!e || e.group !== 'toeic') return id === 't00' ? (location.hash = '#/lecon/t00') : V.notFound(root);
    let P;
    try { P = await LE.load(id); } catch (err) { return V.missing(root, e); }
    document.title = `${P.title} · Learn English`;
    if (sub === 'serie') {
      const k = Number(n);
      const set = P.sets[k - 1];
      if (!set) return V.notFound(root);
      const run = () => LE.runToeicSet(root, P.part, set, {
        onQuit: () => (location.hash = `#/toeic/${id}`),
        onRetry: run,
        onFinish: (r) => { LE.recordSet(LE.setKey(id, k), r.correct, r.total); LE.markRead(id); }
      });
      return run();
    }
    LE.markRead(id);
    const nq = (it) => LE.toeicQuestions(P.part, it).length;
    root.innerHTML = `
      <div class="breadcrumb"><a href="#/toeic">TOEIC</a> › ${esc(P.title)}</div>
      <header class="lesson-head">
        <div class="meta"><span class="part-chip" style="width:32px;height:32px;border-radius:9px;font-size:14px">${P.part}</span><span class="badge ${P.level}">${P.level}</span><span>⏱ ${P.minutes || 40} min</span></div>
        <h1>${esc(P.title)}</h1>
        <div class="subtitle">${esc(P.subtitle)}</div>
      </header>
      <div class="card">
        <h2 class="mt0">🏋️ Séries d’entraînement</h2>
        ${Object.keys(LE.state.sets).some((k) => k.startsWith(id + ':')) ? '' : '<p class="muted">Première fois ? Lis d’abord <a href="#methode" data-act="to-method">la méthode ci-dessous</a> (10 minutes) : elle te fera gagner beaucoup de points.</p>'}
        <div class="item-list">${P.sets.map((s, k) => {
          const st = LE.state.sets[LE.setKey(id, k + 1)];
          const q = s.items.reduce((a, it) => a + nq(it), 0);
          return `<a class="item${st ? ' done' : ''}" href="#/toeic/${id}/serie/${k + 1}"><span class="num">${st ? '✓' : k + 1}</span><span class="it-main"><span class="it-title">${esc(s.title)}</span><span class="it-sub">${s.level ? `<span class="badge ${s.level}">${s.level}</span>` : ''}<span>${q} questions</span>${st ? `<span>Meilleur : ${LE.pct(st.best)}</span>` : ''}</span></span></a>`;
        }).join('')}</div>
      </div>
      ${P.goals && P.goals.length ? `<div class="goals"><b>🎯 Objectifs</b><ul>${P.goals.map((g) => `<li>${rich(g)}</li>`).join('')}</ul></div>` : ''}
      <h2 id="methode">📚 La méthode</h2>
      <article class="lesson-body">${P.blocks.map(LE.renderBlock).join('')}</article>
      <div class="card row between mt"><div><b>À toi de jouer !</b> <span class="muted">${P.sets.length} séries d’entraînement</span></div><a class="btn" href="#/toeic/${id}/serie/${Math.min(P.sets.length, 1 + P.sets.findIndex((s, k) => !LE.state.sets[LE.setKey(id, k + 1)])) || 1}">Commencer l’entraînement</a></div>`;
    const toMethod = root.querySelector('[data-act="to-method"]');
    if (toMethod) toMethod.onclick = (ev) => { ev.preventDefault(); document.getElementById('methode').scrollIntoView({ behavior: 'smooth' }); };
  };

  V.mock = async function (root, id) {
    const e = LE.entry(id);
    if (!e || e.group !== 'mock') return V.notFound(root);
    let M;
    try { M = await LE.load(id); } catch (err) { return V.missing(root, e); }
    if (!M.sections || M.sections.length < 2) return V.missing(root, e);
    const count = (sec) => sec.parts.reduce((a, p) => a + p.items.reduce((b, it) => b + LE.toeicQuestions(p.part, it).length, 0), 0);
    const L = M.sections.find((s) => s.section === 'listening');
    const R = M.sections.find((s) => s.section === 'reading');
    const past = LE.state.mocks.filter((m) => m.id === id);
    root.innerHTML = `
      <div class="breadcrumb"><a href="#/toeic">TOEIC</a> › ${esc(e.title)}</div>
      <h1>🏁 ${esc(e.title)}</h1>
      <div class="card">
        <p>Un TOEIC réduit (environ la moitié du vrai) dans les conditions de l’examen : <b>${count(L)} questions d’écoute</b> puis <b>${count(R)} questions de lecture en ${R.minutes || 38} minutes</b>. Compte environ <b>1 heure</b>, dans un endroit calme, avec des écouteurs.</p>
        <ul>
          <li>Les documents sonores sont lus par la synthèse vocale de ton appareil.</li>
          <li>Pas de correction pendant le test : tu vois tout à la fin, avec un <b>score estimé sur 990</b>.</li>
          <li>Il n’y a pas de points négatifs : réponds à toutes les questions.</li>
        </ul>
        <label class="switch"><input type="checkbox" data-act="real" checked> Conditions réelles : chaque audio n’est lu qu’<b>une seule fois</b></label>
        <div class="btn-row"><button class="btn" type="button" data-act="start">Commencer le TOEIC blanc</button><button class="btn secondary" type="button" data-act="voice">🔊 Tester le son</button></div>
      </div>
      ${past.length ? `<div class="card"><h3 class="mt0">Tes résultats</h3><div class="table-wrap"><table class="t"><thead><tr><th>Date</th><th>Listening</th><th>Reading</th><th>Total</th><th>Niveau</th></tr></thead><tbody>${past.map((m) => `<tr><td>${LE.fmtDate(m.date)}</td><td>${m.scoreL}</td><td>${m.scoreR}</td><td><b>${m.total}</b></td><td>${m.level}</td></tr>`).join('')}</tbody></table></div></div>` : ''}`;
    root.querySelector('[data-act="voice"]').onclick = () => LE.speech.say('Welcome to the TOEIC practice test. Please listen carefully.');
    root.querySelector('[data-act="start"]').onclick = () => {
      const real = root.querySelector('[data-act="real"]').checked;
      LE.runMock(root, M, { real, onQuit: () => (location.hash = '#/toeic'), onDone: () => (location.hash = '#/progres') });
    };
  };

  /* ---------- Test de niveau ---------- */
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const TOEIC_RANGE = { 'A1 (en cours)': 'moins de 225', A1: 'moins de 225', A2: '225 à 545', B1: '550 à 780', B2: '785 à 940' };
  V.test = async function (root, id, sub) {
    const e = LE.entry(id);
    if (!e || e.group !== 'placement') return V.notFound(root);
    let T;
    try { T = await LE.load(id); } catch (err) { return V.missing(root, e); }
    const past = LE.state.tests.filter((t) => t.id === id);
    if (sub !== 'go') {
      root.innerHTML = `
        <div class="breadcrumb"><a href="#/toeic">TOEIC</a> › ${esc(T.title)}</div>
        <h1>📏 ${esc(T.title)}</h1>
        <div class="card">
          <p>${rich(T.intro)}</p>
          <p class="muted">${T.questions.length} questions · environ ${T.minutes} minutes · pas de correction avant la fin.</p>
          <div class="btn-row"><a class="btn" href="#/test/${id}/go">Commencer</a>${cat().placement.filter((x) => x.id !== id).map((x) => `<a class="btn secondary" href="#/test/${x.id}">${esc(x.title)}</a>`).join('')}</div>
        </div>
        ${past.length ? `<div class="card"><h3 class="mt0">Tes résultats</h3><div class="table-wrap"><table class="t"><thead><tr><th>Date</th>${LEVELS.map((l) => `<th>${l}</th>`).join('')}<th>Niveau</th></tr></thead><tbody>${past.map((t) => `<tr><td>${LE.fmtDate(t.date)}</td>${LEVELS.map((l) => `<td>${t.byLevel[l] ? `${t.byLevel[l][0]}/${t.byLevel[l][1]}` : '-'}</td>`).join('')}<td><b>${esc(t.level)}</b></td></tr>`).join('')}</tbody></table></div></div>` : ''}`;
      return;
    }
    LE.runExercises(root, T.questions, {
      mode: 'test',
      title: T.title,
      onQuit: () => (location.hash = `#/test/${id}`),
      onFinish: (res) => {
        const byLevel = {};
        res.results.forEach((r) => {
          const l = r.ex.level;
          byLevel[l] = byLevel[l] || [0, 0];
          byLevel[l][1]++;
          if (r.ok) byLevel[l][0]++;
        });
        let level = 'A1 (en cours)';
        for (const l of LEVELS) {
          const s = byLevel[l];
          if (s && s[0] / s[1] >= 0.6) level = l; else break;
        }
        const rec = { id, date: LE.today(), byLevel, level, correct: res.correct, total: res.total };
        LE.state.tests.push(rec);
        LE.save(true);
        const advice = {
          'A1 (en cours)': 'Parfait point de départ pour le programme : suis-le dans l’ordre, dès la semaine 1. Chaque leçon est pensée pour toi.',
          A1: 'Tu as quelques bases. Suis le programme dans l’ordre : les premières semaines vont aller vite et consolider tes fondations.',
          A2: 'Bonne base ! Tu peux aller plus vite sur la phase 1 : fais directement les exercices des leçons 1 à 15 et ne relis que celles où tu as moins de 80 %.',
          B1: 'Tu as déjà le niveau B1 ! Concentre-toi sur les phases 2 et 3 et commence tôt l’entraînement TOEIC pour viser le B2.',
          B2: 'Excellent niveau ! Consacre l’essentiel de ton temps aux séries TOEIC, aux TOEIC blancs et au vocabulaire professionnel.'
        }[level];
        root.innerHTML = `
          <div class="runner">
            <div class="card result">
              <div class="muted">${esc(T.title)}</div>
              <div class="score-big">${esc(level)}</div>
              <p>${res.correct} bonnes réponses sur ${res.total}. Cela correspond environ à un score TOEIC de <b>${TOEIC_RANGE[level]}</b>.</p>
              <div class="table-wrap"><table class="t"><thead><tr><th>Niveau</th><th>Bonnes réponses</th><th></th></tr></thead><tbody>${LEVELS.map((l) => {
                const s = byLevel[l] || [0, 0];
                const r = s[1] ? s[0] / s[1] : 0;
                return `<tr><td><span class="badge ${l}">${l}</span></td><td>${s[0]} / ${s[1]}</td><td style="width:40%"><div class="progress${r >= 0.6 ? ' ok' : ''}"><span style="width:${Math.round(r * 100)}%"></span></div></td></tr>`;
              }).join('')}</tbody></table></div>
              <p style="text-align:left">${esc(advice)}</p>
              <div class="btn-row" style="justify-content:center"><a class="btn" href="#/">Aller à l’accueil</a><button class="btn secondary" type="button" data-act="review">Voir la correction</button></div>
              <div class="review-list hidden" data-role="review">${res.results.map((r) => `<div class="review-item" style="border-color:${r.ok ? 'var(--ok)' : 'var(--ko)'}">${LE.reviewItem(r).replace(/^<div class="review-item">|<\/div>$/g, '')}</div>`).join('')}</div>
            </div>
          </div>`;
        root.querySelector('[data-act="review"]').onclick = () => root.querySelector('[data-role="review"]').classList.toggle('hidden');
        window.scrollTo({ top: 0 });
      }
    });
  };

  /* ---------- Progrès et réglages ---------- */
  V.progress = async function (root) {
    const S = LE.state;
    const c = cat();
    const doneIn = (list) => list.filter((e) => (S.lessons[e.id] || {}).done).length;
    root.innerHTML = '<div class="loading">Calcul de ta progression…</div>';
    const parts = (await LE.loadMany(c.toeic.map((e) => e.id))).filter(Boolean);
    const totalSets = parts.reduce((a, p) => a + p.sets.length, 0);
    const doneSets = Object.keys(S.sets).length;
    const bars = [
      ['Grammaire', doneIn(c.grammar), c.grammar.length],
      ['Prononciation', doneIn(c.pron), c.pron.length],
      ['Vocabulaire (quiz)', doneIn(c.vocab), c.vocab.length],
      ['Séries TOEIC', doneSets, totalSets || 1],
      ['TOEIC blancs', new Set(S.mocks.map((m) => m.id)).size, c.mock.length]
    ];
    // Activité des 12 dernières semaines
    const days = [];
    for (let k = 83; k >= 0; k--) days.push(LE.addDays(LE.today(), -k));
    const heat = days.map((d) => {
      const n = S.activity[d] || 0;
      const cls = n === 0 ? '' : n < 15 ? 'h1' : n < 40 ? 'h2' : 'h3';
      return `<span class="${cls}" title="${LE.fmtDate(d)} : ${n} réponse${n > 1 ? 's' : ''}"></span>`;
    }).join('');
    const voices = LE.speech.voices();

    root.innerHTML = `
      <h1>📈 Ta progression</h1>
      <div class="stat-tiles">
        <div class="tile"><b>🔥 ${LE.streak()}</b><span>jours de suite</span></div>
        <div class="tile"><b>${LE.learnedCount()}</b><span>mots appris</span></div>
        <div class="tile"><b>${S.tests.length ? esc(S.tests[S.tests.length - 1].level) : 'Pas encore'}</b><span>niveau (dernier test)</span></div>
        <div class="tile"><b>${S.mocks.length ? S.mocks[S.mocks.length - 1].total : 'Pas encore'}</b><span>dernier TOEIC blanc</span></div>
      </div>
      <div class="card mt">
        <h2 class="mt0">Avancement</h2>
        <div class="bars">${bars.map(([n, d, t]) => `<div class="bar-row"><span>${n}</span><div class="progress${d >= t ? ' ok' : ''}"><span style="width:${Math.round((d / t) * 100)}%"></span></div><span class="muted">${d}/${t}</span></div>`).join('')}</div>
      </div>
      <div class="card">
        <h2 class="mt0">Régularité (12 dernières semaines)</h2>
        <div class="heat">${heat}</div>
        <p class="muted" style="font-size:13px;margin:8px 0 0">Chaque case = un jour. Plus elle est verte, plus tu as répondu à de questions. La régularité compte plus que la durée !</p>
      </div>
      ${S.mocks.length ? `<div class="card"><h2 class="mt0">TOEIC blancs</h2><div class="table-wrap"><table class="t"><thead><tr><th>Date</th><th>Test</th><th>Listening</th><th>Reading</th><th>Total</th><th>Niveau</th></tr></thead><tbody>${S.mocks.map((m) => `<tr><td>${LE.fmtDate(m.date)}</td><td>${esc((LE.entry(m.id) || {}).title || m.id)}</td><td>${m.scoreL}</td><td>${m.scoreR}</td><td><b>${m.total}</b></td><td>${m.level}</td></tr>`).join('')}</tbody></table></div></div>` : ''}
      ${S.tests.length ? `<div class="card"><h2 class="mt0">Tests de niveau</h2><div class="table-wrap"><table class="t"><thead><tr><th>Date</th><th>Test</th><th>Score</th><th>Niveau</th></tr></thead><tbody>${S.tests.map((t) => `<tr><td>${LE.fmtDate(t.date)}</td><td>${esc((LE.entry(t.id) || {}).title || t.id)}</td><td>${t.correct}/${t.total}</td><td><b>${esc(t.level)}</b></td></tr>`).join('')}</tbody></table></div></div>` : ''}

      <div class="card" id="reglages">
        <h2 class="mt0">⚙️ Réglages</h2>
        <form data-role="settings">
          <label class="field"><span>Ton prénom (facultatif)</span><input type="text" name="name" value="${esc(S.profile.name)}" maxlength="30"></label>
          <div class="grid grid-2">
            <label class="field"><span>Début du programme</span><input type="date" name="start" value="${esc(S.profile.startDate)}"></label>
            <label class="field"><span>Date du TOEIC</span><input type="date" name="exam" value="${esc(S.profile.examDate)}"></label>
          </div>
          <label class="field"><span>Vitesse de lecture de la voix : <b data-role="rate-v">${S.settings.rate}</b></span><input type="range" name="rate" min="0.6" max="1.2" step="0.05" value="${S.settings.rate}" style="width:100%"></label>
          <label class="field"><span>Voix préférée (${voices.length} voix anglaises disponibles)</span>
            <select name="voice"><option value="">Automatique (recommandé)</option>${voices.map((v) => `<option value="${esc(v.name)}"${v.name === S.settings.voice ? ' selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select></label>
          <div class="btn-row" style="margin-top:0;margin-bottom:12px"><button class="btn secondary small" type="button" data-act="test-voice">🔊 Tester la voix</button></div>
          <label class="field"><span>Nouvelles cartes par thème et par session</span><input type="number" name="newPerDay" min="5" max="40" value="${S.settings.newPerDay}"></label>
          <label class="switch" style="margin-bottom:8px"><input type="checkbox" name="autoplay"${S.settings.autoplay ? ' checked' : ''}> Lecture audio automatique dans les exercices</label>
          <label class="field"><span>Thème</span><select name="theme"><option value="auto"${S.settings.theme === 'auto' ? ' selected' : ''}>Automatique</option><option value="light"${S.settings.theme === 'light' ? ' selected' : ''}>Clair</option><option value="dark"${S.settings.theme === 'dark' ? ' selected' : ''}>Sombre</option></select></label>
          <button class="btn" type="submit">Enregistrer</button>
        </form>
        ${!LE.speech.supported ? '<p class="muted mt">⚠️ Ton navigateur ne propose pas de synthèse vocale : utilise Chrome, Edge ou Safari à jour pour les exercices d’écoute.</p>' : voices.length ? '' : '<p class="muted mt">⚠️ Aucune voix anglaise détectée pour l’instant. Sur Android, installe « Données vocales » anglaises dans les réglages de synthèse vocale ; sur iPhone, dans Réglages › Accessibilité › Contenu énoncé › Voix.</p>'}
      </div>

      <div class="card">
        <h2 class="mt0">💾 Sauvegarde</h2>
        <p>Ta progression est enregistrée <b>dans ce navigateur</b>. Pour changer d’appareil ou par sécurité, exporte-la régulièrement puis importe le fichier sur l’autre appareil.</p>
        <div class="btn-row">
          <button class="btn secondary" type="button" data-act="export">⬇️ Exporter ma progression</button>
          <label class="btn secondary" style="cursor:pointer">⬆️ Importer<input type="file" accept="application/json,.json" data-act="import" hidden></label>
          <button class="btn danger" type="button" data-act="reset">Tout effacer</button>
        </div>
      </div>`;

    const form = root.querySelector('[data-role="settings"]');
    form.rate.oninput = () => (root.querySelector('[data-role="rate-v"]').textContent = form.rate.value);
    root.querySelector('[data-act="test-voice"]').onclick = () => {
      S.settings.rate = Number(form.rate.value);
      S.settings.voice = form.voice.value;
      LE.speech.say('Hello! I am your English voice. Good luck with the TOEIC!');
    };
    form.onsubmit = (ev) => {
      ev.preventDefault();
      S.profile.name = form.name.value.trim();
      if (form.start.value) S.profile.startDate = form.start.value;
      if (form.exam.value) S.profile.examDate = form.exam.value;
      S.settings.rate = Number(form.rate.value);
      S.settings.voice = form.voice.value;
      S.settings.newPerDay = Math.max(5, Math.min(40, Number(form.newPerDay.value) || 15));
      S.settings.autoplay = form.autoplay.checked;
      S.settings.theme = form.theme.value;
      LE.applyTheme();
      LE.save(true);
      LE.toast('Réglages enregistrés ✓');
    };
    root.querySelector('[data-act="export"]').onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `learn-english-progression-${LE.today()}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    };
    root.querySelector('[data-act="import"]').onchange = (ev) => {
      const f = ev.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          LE.importState(JSON.parse(r.result));
          LE.applyTheme();
          LE.toast('Progression importée ✓');
          V.progress(root);
        } catch (e) { alert('Ce fichier n’est pas une sauvegarde valide.'); }
      };
      r.readAsText(f);
    };
    root.querySelector('[data-act="reset"]').onclick = () => {
      if (confirm('Effacer TOUTE ta progression ? Cette action est définitive.') && confirm('Vraiment sûre ? Pense à exporter ta progression avant.')) {
        LE.resetState();
        location.hash = '#/';
        location.reload();
      }
    };
  };

  /* ---------- Accueil de la première visite ---------- */
  LE.onboarding = function () {
    if (LE.state.onboarded) return;
    const start = LE.today();
    const exam = LE.addMonths(start, 7);
    const back = LE.el(`<div class="modal-back" role="dialog" aria-modal="true" aria-labelledby="ob-title">
      <div class="modal">
        <h2 id="ob-title" class="mt0">Welcome! 👋</h2>
        <p>Ce site va t’accompagner <b>de débutante à B1 / B2 au TOEIC en 7 mois</b> : un programme semaine par semaine, des leçons expliquées en français, du vocabulaire, de l’écoute et des TOEIC blancs.</p>
        <p>Il suffit de <b>45 minutes par jour</b>. Ta progression est enregistrée automatiquement dans ce navigateur.</p>
        <form>
          <label class="field"><span>Ton prénom (facultatif)</span><input type="text" name="name" maxlength="30" autocomplete="given-name"></label>
          <div class="grid grid-2">
            <label class="field"><span>Je commence le</span><input type="date" name="start" value="${start}"></label>
            <label class="field"><span>Mon TOEIC est prévu le</span><input type="date" name="exam" value="${exam}"></label>
          </div>
          <p class="muted" style="font-size:14px">Tu ne connais pas encore la date exacte ? Garde la date proposée (dans 7 mois) et modifie-la plus tard dans Progrès › Réglages.</p>
          <div class="btn-row"><button class="btn" type="submit">C’est parti ! 🚀</button></div>
        </form>
      </div></div>`);
    document.body.appendChild(back);
    const form = back.querySelector('form');
    form.onsubmit = (e) => {
      e.preventDefault();
      LE.state.profile.name = form.name.value.trim();
      LE.state.profile.startDate = form.start.value || start;
      LE.state.profile.examDate = form.exam.value || exam;
      LE.state.onboarded = true;
      LE.save(true);
      back.remove();
      LE.route();
    };
  };
})();
