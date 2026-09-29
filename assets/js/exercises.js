/* Moteur d'exercices : QCM, textes à trous, remise en ordre, compréhension orale, dictée.
   Utilisé par les leçons (mode « practice » : correction immédiate) et les tests de niveau (mode « test »). */
(function () {
  'use strict';
  const LE = window.LE;
  const { esc, rich, LETTERS } = LE;

  const TYPE_LABEL = {
    mcq: 'Choisis la bonne réponse',
    gap: 'Complète la phrase',
    order: 'Remets les mots dans l’ordre',
    listen: 'Écoute et réponds',
    dictation: 'Écoute et écris'
  };

  // Découpe la phrase d'un exercice « order » en étiquettes.
  function orderWords(answer) {
    const words = String(answer).replace(/[.!?]+$/, '').trim().split(/\s+/);
    return words.map((w, i) => {
      if (i === 0 && !/^I(\b|')/.test(w) && /^[A-Z][a-z]/.test(w) && !/^[A-Z][a-z]+[A-Z]/.test(w)) return w.charAt(0).toLowerCase() + w.slice(1);
      return w;
    });
  }

  function isCorrect(ex, given) {
    switch (ex.type) {
      case 'mcq':
      case 'listen':
        return given === ex.answer;
      case 'gap':
        return LE.matches(given, ex.answers);
      case 'dictation':
        return LE.matches(given, ex.answers, true);
      case 'order': {
        const all = [ex.answer].concat(ex.alts || []);
        return LE.matches(given, all, true);
      }
    }
    return false;
  }

  function correctText(ex) {
    switch (ex.type) {
      case 'mcq':
      case 'listen':
        return `${LETTERS[ex.answer]}. ${rich(ex.options[ex.answer])}`;
      case 'gap':
      case 'dictation':
        return ex.answers.map((a) => `<b>${esc(a)}</b>`).join(' ou ');
      case 'order':
        return `<b>${esc(ex.answer)}</b>`;
    }
    return '';
  }

  function givenText(ex, given) {
    if (given == null || given === '') return '<i>(pas de réponse)</i>';
    if (ex.type === 'mcq' || ex.type === 'listen') return `${LETTERS[given]}. ${rich(ex.options[given])}`;
    return esc(given);
  }

  function questionHtml(ex) {
    if (ex.type === 'gap') {
      const [a, b] = String(ex.q).split('___');
      return `${rich(a)}<span class="blank"></span>${rich(b || '')}`;
    }
    if (ex.type === 'order') return `« ${esc(ex.fr)} »`;
    if (ex.type === 'dictation') return 'Écris la phrase que tu entends.';
    return rich(ex.q);
  }

  /**
   * Lance une série d'exercices dans `root`.
   * opts : { mode: 'practice'|'test', title, subtitle, onFinish(result, root), onQuit, shuffle }
   */
  LE.runExercises = function (root, exercises, opts) {
    opts = opts || {};
    const mode = opts.mode || 'practice';
    const list = opts.shuffle ? LE.shuffle(exercises) : exercises.slice();
    const results = [];
    let i = 0;

    function render() {
      LE.speech.stop();
      if (i >= list.length) return finish();
      const ex = list[i];
      const pct = Math.round((i / list.length) * 100);
      root.innerHTML = `
        <div class="runner">
          <div class="runner-head">
            <button class="btn small secondary" data-act="quit" type="button" aria-label="Quitter">✕</button>
            <div class="progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
            <div class="count">${i + 1} / ${list.length}</div>
          </div>
          ${opts.title ? `<div class="muted" style="margin-bottom:8px;font-weight:600">${esc(opts.title)}</div>` : ''}
          <div class="q-card">
            <div class="q-type">${TYPE_LABEL[ex.type] || ''}${ex.level && mode === 'test' ? ` · niveau ${esc(ex.level)}` : ''}</div>
            <div class="q-body"></div>
            <div class="q-feedback"></div>
            <div class="btn-row q-actions"></div>
          </div>
        </div>`;
      root.querySelector('[data-act="quit"]').onclick = () => {
        if (i === 0 || confirm('Quitter l’exercice ? Ta progression sur cette série ne sera pas enregistrée.')) {
          LE.speech.stop();
          if (opts.onQuit) opts.onQuit();
        }
      };
      const body = root.querySelector('.q-body');
      const actions = root.querySelector('.q-actions');
      renderers[ex.type](ex, body, actions, (given) => answered(ex, given));
      const focus = body.querySelector('input');
      if (focus && window.matchMedia('(pointer: fine)').matches) focus.focus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function answered(ex, given) {
      const ok = isCorrect(ex, given);
      results.push({ ex, given, ok });
      LE.logActivity(1);
      const body = root.querySelector('.q-body');
      body.querySelectorAll('button.opt, button.chip, input, textarea').forEach((b) => (b.disabled = true));
      const actions = root.querySelector('.q-actions');
      if (mode === 'practice') {
        // Coloration des options
        if (ex.type === 'mcq' || ex.type === 'listen') {
          body.querySelectorAll('button.opt').forEach((b) => {
            const k = Number(b.dataset.k);
            if (k === ex.answer) b.classList.add('correct');
            else if (k === given) b.classList.add('wrong');
          });
        } else {
          const inp = body.querySelector('input');
          if (inp) inp.classList.add(ok ? 'correct' : 'wrong');
        }
        const fb = root.querySelector('.q-feedback');
        fb.innerHTML = `
          <div class="feedback ${ok ? 'ok' : 'ko'}">
            <div class="fb-title">${ok ? '✅ Bravo !' : '❌ Pas tout à fait…'}</div>
            ${ok && (ex.type === 'mcq' || ex.type === 'listen') ? '' : `<div class="fb-answer">Réponse : ${correctText(ex)}</div>`}
            ${ex.type === 'listen' || ex.type === 'dictation' ? `<div class="fb-answer">Tu as entendu : <i>${esc(ex.say)}</i> ${LE.speakBtn(ex.say, { accent: ex.accent })}</div>` : ''}
            <div>${rich(ex.explain)}</div>
          </div>`;
        actions.innerHTML = `<button class="btn" type="button" data-act="next">${i + 1 < list.length ? 'Suivant →' : 'Voir mon score'}</button>`;
        const next = actions.querySelector('[data-act="next"]');
        next.onclick = () => { i++; render(); };
        next.focus({ preventScroll: true });
      } else {
        i++;
        render();
      }
    }

    function finish() {
      const correct = results.filter((r) => r.ok).length;
      const res = { correct, total: results.length, results };
      if (opts.onFinish) opts.onFinish(res, root);
      else LE.renderScore(root, res, opts);
    }

    render();
  };

  // Écran de résultats standard (réutilisable).
  LE.renderScore = function (root, res, opts) {
    opts = opts || {};
    const ratio = res.total ? res.correct / res.total : 0;
    const msg = ratio >= 0.9 ? 'Excellent ! 🎉' : ratio >= 0.75 ? 'Très bien ! 👏' : ratio >= LE.PASS ? 'C’est validé ! 👍' : 'Encore un petit effort 💪';
    const mistakes = res.results.filter((r) => !r.ok);
    root.innerHTML = `
      <div class="runner">
        <div class="card result">
          <div class="muted">${esc(opts.title || 'Résultat')}</div>
          <div class="score-big">${res.correct}<small> / ${res.total}</small></div>
          <div style="font-size:1.2rem;font-weight:700">${msg}</div>
          <p class="muted">${ratio >= LE.PASS ? 'Leçon validée (60 % minimum).' : 'Il faut 60 % pour valider : relis la leçon et réessaie, c’est comme ça qu’on progresse.'}</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" type="button" data-act="retry">↻ Recommencer</button>
            ${opts.backLabel ? `<button class="btn secondary" type="button" data-act="back">${esc(opts.backLabel)}</button>` : ''}
          </div>
          ${mistakes.length ? `<div class="review-list"><h3>À revoir (${mistakes.length})</h3>${mistakes.map((r) => reviewItem(r)).join('')}</div>` : ''}
        </div>
      </div>`;
    const retry = root.querySelector('[data-act="retry"]');
    if (retry) retry.onclick = () => opts.onRetry && opts.onRetry();
    const back = root.querySelector('[data-act="back"]');
    if (back) back.onclick = () => opts.onBack && opts.onBack();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function reviewItem(r) {
    const ex = r.ex;
    const q = ex.type === 'listen' || ex.type === 'dictation'
      ? `🔊 <i>${esc(ex.say)}</i>${ex.q ? ' — ' + rich(ex.q) : ''}`
      : ex.type === 'order' ? `Ordre : « ${esc(ex.fr)} »` : rich(ex.q);
    return `<div class="review-item">
      <div class="ri-q">${q}</div>
      <div class="ri-a">Ta réponse : ${givenText(ex, r.given)}<br>Bonne réponse : ${correctText(ex)}</div>
      <div class="ri-a muted">${rich(ex.explain)}</div>
    </div>`;
  }
  LE.reviewItem = reviewItem;

  /* ---------- Rendus par type ---------- */
  function optionsHtml(options, compact) {
    return `<div class="options${compact ? ' compact' : ''}">${options.map((o, k) => `
      <button class="opt" type="button" data-k="${k}"><span class="letter">${LETTERS[k]}</span><span>${rich(o)}</span></button>`).join('')}</div>`;
  }
  function bindOptions(body, done) {
    body.querySelectorAll('button.opt').forEach((b) => {
      b.onclick = () => { b.classList.add('selected'); done(Number(b.dataset.k)); };
    });
  }

  const renderers = {
    mcq(ex, body, actions, done) {
      body.innerHTML = `<div class="q-text">${questionHtml(ex)}</div>${optionsHtml(ex.options)}`;
      bindOptions(body, done);
    },
    listen(ex, body, actions, done) {
      body.innerHTML = `
        <div class="listen-zone">${LE.speakBtn(ex.say, { big: true, accent: ex.accent })}<span class="hint">Appuie pour (ré)écouter</span></div>
        <div class="q-text">${rich(ex.q)}</div>${optionsHtml(ex.options)}`;
      bindOptions(body, done);
      if (LE.state.settings.autoplay) setTimeout(() => body.querySelector('.speak').click(), 250);
    },
    gap(ex, body, actions, done) {
      body.innerHTML = `
        <div class="q-text">${questionHtml(ex)}</div>
        ${ex.hint ? `<p class="muted">Indice : ${rich(ex.hint)}</p>` : ''}
        <form class="gap-input" autocomplete="off">
          <input type="text" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Ta réponse" placeholder="Ta réponse…">
          <button class="btn" type="submit">Valider</button>
        </form>`;
      const form = body.querySelector('form');
      form.onsubmit = (e) => {
        e.preventDefault();
        const v = form.querySelector('input').value;
        if (!v.trim()) { form.querySelector('input').focus(); return; }
        done(v);
      };
    },
    dictation(ex, body, actions, done) {
      body.innerHTML = `
        <div class="listen-zone">${LE.speakBtn(ex.say, { big: true, accent: ex.accent })}<span class="hint">Appuie pour (ré)écouter — autant de fois que tu veux</span></div>
        <div class="q-text">${questionHtml(ex)}</div>
        <form class="gap-input" autocomplete="off">
          <input type="text" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Ce que tu entends" placeholder="Écris ce que tu entends…">
          <button class="btn" type="submit">Valider</button>
        </form>`;
      const form = body.querySelector('form');
      form.onsubmit = (e) => {
        e.preventDefault();
        const v = form.querySelector('input').value;
        if (!v.trim()) return;
        done(v);
      };
      if (LE.state.settings.autoplay) setTimeout(() => body.querySelector('.speak').click(), 250);
    },
    order(ex, body, actions, done) {
      const words = orderWords(ex.answer);
      const bag = LE.shuffle(words.map((w, k) => ({ w, k })));
      // Évite de proposer les mots déjà dans le bon ordre.
      if (bag.every((x, j) => x.k === j) && bag.length > 1) bag.push(bag.shift());
      const picked = [];
      body.innerHTML = `
        <div class="q-text">${questionHtml(ex)}</div>
        <div class="chips answer" aria-label="Ta phrase"></div>
        <div class="chips pool">${bag.map((x, j) => `<button class="chip" type="button" data-j="${j}">${esc(x.w)}</button>`).join('')}</div>`;
      actions.innerHTML = `<button class="btn secondary" type="button" data-act="clear">Effacer</button><button class="btn" type="button" data-act="check" disabled>Valider</button>`;
      const ans = body.querySelector('.chips.answer');
      const check = actions.querySelector('[data-act="check"]');
      const sync = () => {
        ans.innerHTML = picked.map((j, pos) => `<button class="chip" type="button" data-pos="${pos}">${esc(bag[j].w)}</button>`).join('');
        body.querySelectorAll('.chips.pool .chip').forEach((c) => c.classList.toggle('used', picked.includes(Number(c.dataset.j))));
        check.disabled = picked.length !== bag.length;
        ans.querySelectorAll('.chip').forEach((c) => {
          c.onclick = () => { picked.splice(Number(c.dataset.pos), 1); sync(); };
        });
      };
      body.querySelectorAll('.chips.pool .chip').forEach((c) => {
        c.onclick = () => { const j = Number(c.dataset.j); if (!picked.includes(j)) { picked.push(j); sync(); } };
      });
      actions.querySelector('[data-act="clear"]').onclick = () => { picked.length = 0; sync(); };
      check.onclick = () => {
        const sentence = picked.map((j) => bag[j].w).join(' ');
        actions.innerHTML = '';
        ans.querySelectorAll('.chip').forEach((c) => (c.disabled = true));
        done(sentence);
      };
    }
  };
  LE.exerciseRenderers = renderers;

  // Raccourcis clavier : A-D ou 1-4 pour choisir une option, Entrée pour passer à la suite.
  document.addEventListener('keydown', (ev) => {
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    const tag = (ev.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    const runner = document.querySelector('.runner');
    if (!runner) return;
    if (ev.key === 'Enter') {
      const next = runner.querySelector('[data-act="next"], [data-act="check"]:not(:disabled)');
      if (next && document.activeElement !== next) { ev.preventDefault(); next.click(); }
      return;
    }
    const k = 'abcdef'.indexOf(ev.key.toLowerCase());
    const n = '123456'.indexOf(ev.key);
    const idx = k >= 0 ? k : n;
    if (idx < 0) return;
    // Premier groupe d'options encore sans réponse (une question à la fois).
    const groups = Array.from(runner.querySelectorAll('.options')).filter((g) => !g.querySelector('.opt.selected, .opt:disabled'));
    const target = groups.length ? groups[0].querySelectorAll('button.opt')[idx] : null;
    if (target && !target.disabled) { ev.preventDefault(); target.click(); }
  });
  LE.isCorrect = isCorrect;
})();
