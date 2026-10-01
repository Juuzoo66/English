/* TOEIC : rendu des 7 parties, séries d'entraînement, TOEIC blancs et estimation du score. */
(function () {
  'use strict';
  const LE = window.LE;
  const { esc, rich, LETTERS } = LE;

  const PART_INFO = {
    1: { name: 'Photographies', section: 'L', icon: '📷' },
    2: { name: 'Questions-réponses', section: 'L', icon: '💬' },
    3: { name: 'Conversations', section: 'L', icon: '👥' },
    4: { name: 'Exposés', section: 'L', icon: '📢' },
    5: { name: 'Phrases à compléter', section: 'R', icon: '✏️' },
    6: { name: 'Textes à compléter', section: 'R', icon: '📝' },
    7: { name: 'Compréhension écrite', section: 'R', icon: '📄' }
  };
  const WHO = { M: 'Man', W: 'Woman', M2: 'Man 2', W2: 'Woman 2', A: 'A', B: 'B' };

  /* ---------- Questions d'un item ---------- */
  function questionsOf(part, it) {
    if (part === 1) return [{ options: it.statements, answer: it.answer, explain: it.explain, hideText: true }];
    if (part === 2) return [{ options: it.responses, answer: it.answer, explain: it.explain, hideText: true }];
    if (part === 5) return [{ q: it.q, options: it.options, answer: it.answer, explain: it.explain }];
    if (part === 6) return it.questions.map((q, k) => Object.assign({ q: `Trou (${k + 1})` }, q));
    return it.questions;
  }
  LE.toeicQuestions = questionsOf;

  /* ---------- Audio ---------- */
  function audioSegments(part, it) {
    const acc = it.accent;
    if (part === 1) {
      return it.statements.map((s, k) => ({ text: `${LETTERS[k]}. ${s}`, accent: acc, speaker: it.speaker || 'W', pause: 700 }));
    }
    if (part === 2) {
      const sp = it.speakers || ['W', 'M'];
      return [{ text: it.question, accent: acc, speaker: sp[0], pause: 900 }].concat(
        it.responses.map((r, k) => ({ text: `${LETTERS[k]}. ${r}`, accent: acc, speaker: sp[1] || sp[0], pause: 600 })));
    }
    if (part === 3) return it.lines.map((l) => ({ text: l.text, speaker: l.speaker, accent: l.accent || acc, pause: 250 }));
    if (part === 4) return [{ text: it.text, speaker: it.speaker, accent: acc }];
    return [];
  }

  function transcriptHtml(part, it) {
    if (part === 1) return it.statements.map((s, k) => `<div class="tr-line"><span class="tr-who">(${LETTERS[k]})</span>${esc(s)}</div>`).join('');
    if (part === 2) return `<div class="tr-line"><span class="tr-who">Q</span>${esc(it.question)}</div>` + it.responses.map((s, k) => `<div class="tr-line"><span class="tr-who">(${LETTERS[k]})</span>${esc(s)}</div>`).join('');
    if (part === 3) return it.lines.map((l) => `<div class="tr-line"><span class="tr-who">${WHO[l.speaker] || l.speaker}:</span>${esc(l.text)}</div>`).join('');
    if (part === 4) return `<div class="tr-line"><i>${esc(it.intro)}</i></div><div class="tr-line">${esc(it.text)}</div>`;
    return '';
  }

  function graphicHtml(g) {
    if (!g) return '';
    return `<div class="graphic"><div class="g-title">📊 ${esc(g.title)}</div><div class="table-wrap"><table class="t"><thead><tr>${g.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${g.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }

  function docText(t) {
    return rich(t).replace(/\{(\d)\}/g, '<span class="gapnum">($1)</span>');
  }

  // Contenu « stimulus » d'un item (hors questions).
  function stimulusHtml(part, it, opts) {
    const listen = part <= 4;
    let h = '';
    if (part === 1) {
      h += `<div class="photo"><div class="ph-label">📷 La photo (décrite)</div><div class="ph-text">${esc(it.scene)}</div></div>`;
    }
    if (part === 4) h += `<p class="muted"><i>${esc(it.intro)}</i></p>`;
    if (part === 3 || part === 4) h += graphicHtml(it.graphic);
    if (listen) {
      h += `<div class="listen-zone"><button class="speak big" type="button" data-act="play" aria-label="Écouter">🔊</button><span class="hint" data-role="play-hint">${opts.real ? 'Écoute unique, comme le jour du test' : 'Appuie pour écouter (autant de fois que tu veux)'}</span></div>`;
      if (!opts.real) h += `<label class="switch" style="justify-content:center;margin-bottom:8px"><input type="checkbox" data-act="show-tr"${opts.showTranscript ? ' checked' : ''}> Afficher la transcription (mode aidé)</label>`;
      h += `<div class="transcript${opts.showTranscript ? '' : ' hidden'}" data-role="tr">${transcriptHtml(part, it)}</div>`;
    }
    if (part === 6) h += `<div class="doc"><div class="doc-kind">${esc(it.title)}</div><div class="doc-text">${docText(it.text)}</div></div>`;
    if (part === 7) {
      h += it.docs.map((d, k) => `<div class="doc"><div class="doc-kind">${it.docs.length > 1 ? `Document ${k + 1} · ` : ''}${esc(d.kind)}</div>${d.title ? `<div class="doc-title">${rich(d.title)}</div>` : ''}<div class="doc-text">${docText(d.text)}</div></div>`).join('');
    }
    return h;
  }

  function questionBlock(part, q, k, n, opts) {
    const onlyLetters = q.hideText && !opts.revealed;
    return `<div class="tq" data-q="${k}">
      ${q.q && part !== 5 ? `<div class="tq-q">${n > 1 ? `${k + 1}. ` : ''}${rich(q.q)}</div>` : ''}
      ${part === 5 ? `<div class="q-text">${rich(q.q)}</div>` : ''}
      <div class="options${onlyLetters ? ' compact' : ''}">${q.options.map((o, j) => `
        <button class="opt" type="button" data-q="${k}" data-k="${j}"><span class="letter">${LETTERS[j]}</span>${onlyLetters ? '' : `<span>${rich(o)}</span>`}</button>`).join('')}</div>
      <div class="tq-fb"></div>
    </div>`;
  }

  /**
   * Affiche un item et gère la sélection des réponses.
   * opts : { real (écoute unique), showTranscript, feedback (bool), answers (tableau pré-rempli), onChange(answers), autoplay }
   */
  function mountItem(el, part, it, opts) {
    const qs = questionsOf(part, it);
    const answers = opts.answers || new Array(qs.length).fill(null);
    let plays = 0;
    el.innerHTML = `${stimulusHtml(part, it, opts)}<div class="tq-list">${qs.map((q, k) => questionBlock(part, q, k, qs.length, opts)).join('')}</div>`;

    // Réponses déjà données (navigation arrière dans un test blanc)
    answers.forEach((a, k) => {
      if (a != null) { const b = el.querySelector(`.opt[data-q="${k}"][data-k="${a}"]`); if (b) b.classList.add('selected'); }
    });

    const playBtn = el.querySelector('[data-act="play"]');
    const play = () => {
      if (opts.real && plays >= 1) return;
      plays++;
      playBtn.classList.add('playing');
      const lines = el.querySelectorAll('.transcript .tr-line');
      LE.speech.play(audioSegments(part, it)).then(() => {
        playBtn.classList.remove('playing');
        if (opts.real) {
          playBtn.disabled = true;
          const hint = el.querySelector('[data-role="play-hint"]');
          if (hint) hint.textContent = 'Audio terminé : réponds maintenant.';
        }
      });
      void lines;
    };
    if (playBtn) {
      playBtn.onclick = () => { if (playBtn.classList.contains('playing') && !opts.real) { LE.speech.stop(); playBtn.classList.remove('playing'); } else play(); };
      if (opts.autoplay) setTimeout(play, 300);
    }
    const trToggle = el.querySelector('[data-act="show-tr"]');
    if (trToggle) trToggle.onchange = () => {
      el.querySelector('[data-role="tr"]').classList.toggle('hidden', !trToggle.checked);
      LE.state.settings.showTranscript = trToggle.checked;
      LE.save();
    };

    el.querySelectorAll('.opt').forEach((b) => {
      b.onclick = () => {
        if (el.dataset.locked) return;
        const k = Number(b.dataset.q);
        answers[k] = Number(b.dataset.k);
        el.querySelectorAll(`.opt[data-q="${k}"]`).forEach((x) => x.classList.toggle('selected', x === b));
        if (opts.onChange) opts.onChange(answers, k);
      };
    });

    return {
      answers,
      questions: qs,
      reveal() {
        el.dataset.locked = '1';
        LE.speech.stop();
        qs.forEach((q, k) => {
          const block = el.querySelector(`.tq[data-q="${k}"]`);
          // Affiche le texte des options (parties 1 et 2) une fois la réponse donnée.
          if (q.hideText) {
            block.querySelector('.options').classList.remove('compact');
            block.querySelectorAll('.opt').forEach((b, j) => { b.innerHTML = `<span class="letter">${LETTERS[j]}</span><span>${esc(q.options[j])}</span>`; });
          }
          block.querySelectorAll('.opt').forEach((b) => {
            const j = Number(b.dataset.k);
            b.disabled = true;
            if (j === q.answer) b.classList.add('correct');
            else if (j === answers[k]) b.classList.add('wrong');
          });
          const ok = answers[k] === q.answer;
          block.querySelector('.tq-fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'ko'}"><div class="fb-title">${ok ? '✅ Correct' : `❌ La bonne réponse était ${LETTERS[q.answer]}`}</div><div>${rich(q.explain || it.explain || '')}</div></div>`;
        });
        const tr = el.querySelector('[data-role="tr"]');
        if (tr) tr.classList.remove('hidden');
        if (playBtn) playBtn.disabled = false;
      }
    };
  }
  LE.mountToeicItem = mountItem;

  /* ---------- Série d'entraînement ---------- */
  const TARGET_SEC = { 5: 20, 6: 30, 7: 60 };
  const fmtTime = (ms) => { const t = Math.round(ms / 1000); return `${Math.floor(t / 60)} min ${String(t % 60).padStart(2, '0')} s`; };
  LE.runToeicSet = function (root, part, set, opts) {
    const items = set.items;
    let i = 0;
    let correct = 0;
    let total = 0;
    const mistakes = [];
    const t0 = Date.now();
    let clock = null;
    const stopClock = () => clearInterval(clock);
    if (part >= 5) {
      clock = setInterval(() => {
        const el = root.querySelector('.timer');
        if (!el) return stopClock();
        el.textContent = '⏱ ' + fmtTime(Date.now() - t0).replace(' min ', ':').replace(' s', '');
      }, 1000);
    }

    function render() {
      LE.speech.stop();
      if (i >= items.length) return finish();
      const it = items[i];
      const pct = Math.round((i / items.length) * 100);
      root.innerHTML = `
        <div class="runner">
          <div class="runner-head">
            <button class="btn small secondary" data-act="quit" type="button" aria-label="Quitter">✕</button>
            <div class="progress"><span style="width:${pct}%"></span></div>
            ${part >= 5 ? '<span class="timer" title="Temps écoulé">⏱</span>' : ''}
            <div class="count">${i + 1} / ${items.length}</div>
          </div>
          <div class="muted" style="margin-bottom:8px;font-weight:600">${PART_INFO[part].icon} Partie ${part} · ${esc(set.title)}</div>
          <div class="q-card"><div class="item-zone"></div><div class="btn-row q-actions"></div></div>
        </div>`;
      root.querySelector('[data-act="quit"]').onclick = () => {
        if (i === 0 || confirm('Quitter la série ? Ton score ne sera pas enregistré.')) { stopClock(); LE.speech.stop(); opts.onQuit && opts.onQuit(); }
      };
      const zone = root.querySelector('.item-zone');
      const actions = root.querySelector('.q-actions');
      const single = part === 1 || part === 2 || part === 5;
      const ctrl = mountItem(zone, part, it, {
        showTranscript: !!LE.state.settings.showTranscript,
        autoplay: part <= 4 && LE.state.settings.autoplay && i > 0,
        onChange(ans) {
          if (single) validate();
          else actions.querySelector('[data-act="check"]').disabled = ans.some((a) => a == null);
        }
      });
      if (!single) {
        actions.innerHTML = `<button class="btn" type="button" data-act="check" disabled>Valider mes réponses</button>`;
        actions.querySelector('[data-act="check"]').onclick = validate;
      }
      function validate() {
        ctrl.reveal();
        ctrl.questions.forEach((q, k) => {
          total++;
          if (ctrl.answers[k] === q.answer) correct++;
          else mistakes.push({ part, it, q, given: ctrl.answers[k] });
        });
        LE.logActivity(ctrl.questions.length);
        actions.innerHTML = `<button class="btn" type="button" data-act="next">${i + 1 < items.length ? 'Suivant →' : 'Voir mon score'}</button>`;
        const nx = actions.querySelector('[data-act="next"]');
        nx.onclick = () => { i++; render(); };
        nx.focus({ preventScroll: true });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function finish() {
      stopClock();
      const elapsed = Date.now() - t0;
      opts.onFinish && opts.onFinish({ correct, total, elapsed });
      const ratio = total ? correct / total : 0;
      const target = TARGET_SEC[part];
      const perQ = total ? elapsed / 1000 / total : 0;
      const timing = target ? `<p class="muted">⏱ Temps : <b>${fmtTime(elapsed)}</b>, soit ${Math.round(perQ)} s par question (objectif le jour du TOEIC : ≈ ${target} s). ${perQ <= target ? 'Tu es dans le rythme ! 🚀' : 'La vitesse viendra avec l’entraînement : vise d’abord la justesse.'}</p>` : '';
      root.innerHTML = `
        <div class="runner"><div class="card result">
          <div class="muted">Partie ${part} · ${esc(set.title)}</div>
          <div class="score-big">${correct}<small> / ${total}</small></div>
          <div style="font-size:1.2rem;font-weight:700">${ratio >= 0.85 ? 'Excellent ! 🎉' : ratio >= 0.7 ? 'Très bien ! 👏' : ratio >= 0.5 ? 'Pas mal, continue ! 👍' : 'Courage, relis la stratégie et réessaie 💪'}</div>
          ${timing}
          <div class="btn-row" style="justify-content:center">
            <button class="btn" type="button" data-act="retry">↻ Recommencer</button>
            <button class="btn secondary" type="button" data-act="back">Retour à la partie ${part}</button>
          </div>
          ${mistakes.length ? `<div class="review-list"><h3>À revoir (${mistakes.length})</h3>${mistakes.map(mistakeHtml).join('')}</div>` : ''}
        </div></div>`;
      root.querySelector('[data-act="retry"]').onclick = () => opts.onRetry && opts.onRetry();
      root.querySelector('[data-act="back"]').onclick = () => opts.onQuit && opts.onQuit();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    render();
  };

  function mistakeHtml(m) {
    const { part, it, q, given } = m;
    let ctx = '';
    if (part === 1) ctx = `📷 ${esc(it.scene)}`;
    else if (part === 2) ctx = `💬 <i>${esc(it.question)}</i>`;
    else if (part === 3) ctx = `👥 ${esc(it.lines[0].text.slice(0, 80))}…`;
    else if (part === 4) ctx = `📢 ${esc(it.intro)}`;
    else if (part === 6) ctx = `📝 ${esc(it.title)} : ${esc(q.q || '')}`;
    else if (part === 7) ctx = `📄 ${esc(it.docs.map((d) => d.kind).join(' + '))}`;
    const qText = part === 5 ? rich(q.q) : part === 6 ? '' : q.q ? rich(q.q) : '';
    return `<div class="review-item">
      <div class="ri-q">${ctx}${qText ? `<br>${qText}` : ''}</div>
      <div class="ri-a">Ta réponse : ${given == null ? '<i>aucune</i>' : `${LETTERS[given]}. ${rich(q.options[given])}`}<br>Bonne réponse : <b>${LETTERS[q.answer]}. ${rich(q.options[q.answer])}</b></div>
      <div class="ri-a muted">${rich(q.explain || it.explain || '')}</div>
    </div>`;
  }
  LE.toeicMistakeHtml = mistakeHtml;

  /* ---------- Estimation du score ---------- */
  const CURVE = {
    L: [[0, 5], [0.2, 40], [0.3, 95], [0.4, 160], [0.5, 225], [0.6, 285], [0.7, 340], [0.8, 395], [0.9, 450], [1, 495]],
    R: [[0, 5], [0.2, 25], [0.3, 70], [0.4, 125], [0.5, 180], [0.6, 240], [0.7, 300], [0.8, 360], [0.9, 425], [1, 495]]
  };
  LE.estimateScore = function (section, ratio) {
    const pts = CURVE[section];
    for (let k = 1; k < pts.length; k++) {
      if (ratio <= pts[k][0]) {
        const [x0, y0] = pts[k - 1];
        const [x1, y1] = pts[k];
        const y = y0 + ((ratio - x0) / (x1 - x0)) * (y1 - y0);
        return Math.max(5, Math.min(495, Math.round(y / 5) * 5));
      }
    }
    return 495;
  };
  const CEFR = {
    L: [['C1', 490], ['B2', 400], ['B1', 275], ['A2', 110], ['A1', 60]],
    R: [['C1', 455], ['B2', 385], ['B1', 275], ['A2', 115], ['A1', 60]]
  };
  LE.cefrFor = function (section, score) {
    const row = CEFR[section].find(([, min]) => score >= min);
    return row ? row[0] : 'pré-A1';
  };
  LE.cefrTotal = function (sL, sR) {
    const order = ['pré-A1', 'A1', 'A2', 'B1', 'B2', 'C1'];
    const a = order.indexOf(LE.cefrFor('L', sL));
    const b = order.indexOf(LE.cefrFor('R', sR));
    return order[Math.min(a, b)];
  };
  LE.PART_INFO = PART_INFO;

  /* ---------- TOEIC blanc ---------- */
  LE.runMock = function (root, mock, opts) {
    const secL = mock.sections.find((s) => s.section === 'listening');
    const secR = mock.sections.find((s) => s.section === 'reading');
    const screens = [];
    let qCount = 0;
    [secL, secR].forEach((sec) => {
      if (!sec) return;
      sec.parts.forEach((p) => p.items.forEach((it) => {
        const n = questionsOf(p.part, it).length;
        screens.push({ section: sec.section === 'listening' ? 'L' : 'R', part: p.part, it, q0: qCount, n });
        qCount += n;
      }));
    });
    const answers = new Array(qCount).fill(null);
    const real = opts.real !== false;
    let s = 0;
    let deadline = null;
    let timerId = null;
    const firstR = screens.findIndex((x) => x.section === 'R');

    function intro(section) {
      LE.speech.stop();
      const isL = section === 'L';
      const n = screens.filter((x) => x.section === section).reduce((a, x) => a + x.n, 0);
      root.innerHTML = `<div class="runner"><div class="card">
        <h2 class="mt0">${isL ? '🎧 Section Listening' : '📖 Section Reading'}</h2>
        <p>${n} questions. ${isL
          ? `Chaque document est lu par la synthèse vocale${real ? ' <b>une seule fois</b>, comme le jour du test' : ''}. Les questions des parties 3 et 4 sont écrites : lis-les pendant que l’audio démarre. Pas de correction avant la fin.`
          : `Tu as <b>${secR.minutes || 38} minutes</b>. Le chronomètre démarre quand tu cliques. Tu peux revenir en arrière. À la fin du temps, le test se termine automatiquement.`}</p>
        <p class="muted">Conseil : ne reste jamais bloquée. Au TOEIC, il n’y a pas de points négatifs : réponds toujours.</p>
        <div class="btn-row"><button class="btn" type="button" data-act="go">Commencer</button><button class="btn secondary" type="button" data-act="quit">Abandonner</button></div>
      </div></div>`;
      root.querySelector('[data-act="go"]').onclick = () => {
        if (!isL) deadline = Date.now() + (secR.minutes || 38) * 60000;
        render();
      };
      root.querySelector('[data-act="quit"]').onclick = quit;
      window.scrollTo({ top: 0 });
    }

    function quit() {
      if (confirm('Abandonner le TOEIC blanc ? Tes réponses seront perdues.')) {
        clearInterval(timerId);
        LE.speech.stop();
        opts.onQuit && opts.onQuit();
      }
    }

    function tick() {
      const t = root.querySelector('.timer');
      if (!deadline || !t) return;
      const left = Math.max(0, deadline - Date.now());
      const m = Math.floor(left / 60000);
      const sec = Math.floor((left % 60000) / 1000);
      t.textContent = `⏱ ${m}:${String(sec).padStart(2, '0')}`;
      t.classList.toggle('low', left < 5 * 60000);
      if (left <= 0) { clearInterval(timerId); LE.toast('Temps écoulé !'); finish(); }
    }

    function render() {
      LE.speech.stop();
      if (s >= screens.length) return finish();
      const sc = screens[s];
      const isR = sc.section === 'R';
      const answeredCount = answers.filter((a) => a != null).length;
      root.innerHTML = `
        <div class="runner">
          <div class="runner-head">
            <button class="btn small secondary" data-act="quit" type="button" aria-label="Abandonner">✕</button>
            <div class="progress"><span style="width:${Math.round((sc.q0 / qCount) * 100)}%"></span></div>
            ${isR ? '<span class="timer">⏱</span>' : ''}
            <div class="count">Q${sc.q0 + 1}${sc.n > 1 ? '-' + (sc.q0 + sc.n) : ''}/${qCount}</div>
          </div>
          <div class="muted" style="margin-bottom:8px;font-weight:600">${PART_INFO[sc.part].icon} Partie ${sc.part} : ${PART_INFO[sc.part].name} · ${answeredCount} réponses</div>
          <div class="q-card"><div class="item-zone"></div>
            <div class="btn-row q-actions">
              ${isR && s > firstR ? '<button class="btn secondary" type="button" data-act="prev">← Précédent</button>' : ''}
              <button class="btn" type="button" data-act="next">${s + 1 < screens.length ? 'Suivant →' : 'Terminer le test'}</button>
            </div>
          </div>
        </div>`;
      root.querySelector('[data-act="quit"]').onclick = quit;
      const zone = root.querySelector('.item-zone');
      const current = answers.slice(sc.q0, sc.q0 + sc.n);
      mountItem(zone, sc.part, sc.it, {
        real,
        showTranscript: false,
        autoplay: !isR,
        answers: current,
        onChange(ans) { ans.forEach((a, k) => (answers[sc.q0 + k] = a)); }
      });
      const next = root.querySelector('[data-act="next"]');
      next.onclick = () => {
        if (current.some((a) => a == null) && !confirm('Tu n’as pas répondu à toutes les questions de cet écran. Continuer quand même ? (Au TOEIC, mieux vaut toujours répondre.)')) return;
        s++;
        if (s === firstR) intro('R');
        else if (s >= screens.length) {
          if (confirm('Terminer le test et voir les résultats ?')) finish(); else { s--; }
        } else render();
      };
      const prev = root.querySelector('[data-act="prev"]');
      if (prev) prev.onclick = () => { s--; render(); };
      if (isR) tick();
      window.scrollTo({ top: 0 });
    }

    function finish() {
      clearInterval(timerId);
      LE.speech.stop();
      const byPart = {};
      const bySec = { L: [0, 0], R: [0, 0] };
      const review = [];
      screens.forEach((sc) => {
        questionsOf(sc.part, sc.it).forEach((q, k) => {
          const given = answers[sc.q0 + k];
          const ok = given === q.answer;
          byPart[sc.part] = byPart[sc.part] || [0, 0];
          byPart[sc.part][1]++;
          bySec[sc.section][1]++;
          if (ok) { byPart[sc.part][0]++; bySec[sc.section][0]++; }
          review.push({ sc, q, k, given, ok });
        });
      });
      const ratioL = bySec.L[1] ? bySec.L[0] / bySec.L[1] : 0;
      const ratioR = bySec.R[1] ? bySec.R[0] / bySec.R[1] : 0;
      const scoreL = LE.estimateScore('L', ratioL);
      const scoreR = LE.estimateScore('R', ratioR);
      const result = { id: mock.entry.id, date: LE.today(), L: bySec.L, R: bySec.R, parts: byPart, scoreL, scoreR, total: scoreL + scoreR, level: LE.cefrTotal(scoreL, scoreR) };
      LE.state.mocks.push(result);
      LE.logActivity(qCount);
      LE.save(true);
      renderResults(result, review);
    }

    function renderResults(r, review) {
      const target = r.total >= 785 ? '🎉 Objectif B2 atteint !' : r.total >= 550 ? '✅ Niveau B1 atteint, cap sur le B2 !' : `Encore ${550 - r.total} points pour le B1 : tu vas y arriver.`;
      root.innerHTML = `
        <div class="runner">
          <div class="card result">
            <div class="muted">${esc(mock.entry.title)} · ${LE.fmtDate(r.date)}</div>
            <div class="score-big">${r.total}<small> / 990</small></div>
            <div style="font-size:1.1rem;font-weight:700">Niveau estimé : ${r.level}</div>
            <p>${target}</p>
            <p class="muted" style="font-size:14px">Estimation indicative calculée à partir de ton pourcentage de bonnes réponses sur ce test réduit (${qCount} questions). Le vrai TOEIC compte 200 questions.</p>
          </div>
          <div class="card">
            <h3 class="mt0">Détail</h3>
            <div class="table-wrap"><table class="t score-table"><thead><tr><th>Section / partie</th><th>Bonnes réponses</th><th>Score estimé</th></tr></thead><tbody>
              <tr><td><b>Listening</b></td><td>${r.L[0]} / ${r.L[1]}</td><td><b>${r.scoreL}</b> / 495 (${LE.cefrFor('L', r.scoreL)})</td></tr>
              ${[1, 2, 3, 4].filter((p) => r.parts[p]).map((p) => `<tr><td>Partie ${p} : ${PART_INFO[p].name}</td><td>${r.parts[p][0]} / ${r.parts[p][1]}</td><td>${LE.pct(r.parts[p][0] / r.parts[p][1])}</td></tr>`).join('')}
              <tr><td><b>Reading</b></td><td>${r.R[0]} / ${r.R[1]}</td><td><b>${r.scoreR}</b> / 495 (${LE.cefrFor('R', r.scoreR)})</td></tr>
              ${[5, 6, 7].filter((p) => r.parts[p]).map((p) => `<tr><td>Partie ${p} : ${PART_INFO[p].name}</td><td>${r.parts[p][0]} / ${r.parts[p][1]}</td><td>${LE.pct(r.parts[p][0] / r.parts[p][1])}</td></tr>`).join('')}
            </tbody></table></div>
            <p class="muted" style="font-size:14px">Repère ta partie la plus faible et refais les séries d’entraînement correspondantes dans l’onglet TOEIC.</p>
            <div class="btn-row"><button class="btn" type="button" data-act="back">Terminer</button><button class="btn secondary" type="button" data-act="toggle">Voir la correction détaillée</button></div>
          </div>
          <div class="card hidden" data-role="review">
            <h3 class="mt0">Correction détaillée</h3>
            ${[1, 2, 3, 4, 5, 6, 7].map((p) => {
              const rows = review.filter((x) => x.sc.part === p);
              if (!rows.length) return '';
              return `<details class="week"><summary><span class="part-chip">${p}</span><span class="wtitle"><b>Partie ${p} : ${PART_INFO[p].name}</b><small>${rows.filter((x) => x.ok).length} / ${rows.length} bonnes réponses</small></span></summary><div class="wbody">
                ${rows.map((x) => reviewRow(x)).join('')}
              </div></details>`;
            }).join('')}
          </div>
        </div>`;
      root.querySelector('[data-act="back"]').onclick = () => opts.onDone && opts.onDone(r);
      root.querySelector('[data-act="toggle"]').onclick = () => root.querySelector('[data-role="review"]').classList.toggle('hidden');
      window.scrollTo({ top: 0 });
    }

    function reviewRow(x) {
      const { sc, q, k, given, ok } = x;
      const first = k === 0;
      let ctx = '';
      if (first) {
        if (sc.part <= 4) ctx = `${sc.part === 1 ? `<div class="photo"><div class="ph-text">${esc(sc.it.scene)}</div></div>` : ''}${graphicHtml(sc.it.graphic)}<div class="transcript">${transcriptHtml(sc.part, sc.it)}</div>`;
        if (sc.part === 6) ctx = `<div class="doc"><div class="doc-kind">${esc(sc.it.title)}</div><div class="doc-text">${docText(sc.it.text)}</div></div>`;
        if (sc.part === 7) ctx = sc.it.docs.map((d) => `<div class="doc"><div class="doc-kind">${esc(d.kind)}</div><div class="doc-text">${docText(d.text)}</div></div>`).join('');
      }
      const qText = sc.part === 5 ? rich(q.q) : sc.part === 6 ? `Trou (${k + 1})` : q.q ? rich(q.q) : '';
      return `${ctx}<div class="review-item" style="border-color:${ok ? 'var(--ok)' : 'var(--ko)'}">
        <div class="ri-q">Q${sc.q0 + k + 1}. ${qText}</div>
        <div class="ri-a">${ok ? '✅' : '❌'} Ta réponse : ${given == null ? '<i>aucune</i>' : `${LETTERS[given]}. ${rich(q.options[given])}`}${ok ? '' : `<br>Bonne réponse : <b>${LETTERS[q.answer]}. ${rich(q.options[q.answer])}</b>`}</div>
        <div class="ri-a muted">${rich(q.explain || sc.it.explain || '')}</div>
      </div>`;
    }

    timerId = setInterval(tick, 1000);
    intro(screens[0] && screens[0].section === 'L' ? 'L' : 'R');
  };
})();
