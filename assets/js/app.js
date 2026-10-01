/* Routeur (hash) et démarrage de l'application. */
(function () {
  'use strict';
  const LE = window.LE;
  LE.version = '1';
  const V = LE.views;

  LE.applyTheme = function () {
    const t = LE.state.settings.theme;
    if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  };

  const NAV_OF = { '': 'home', plan: 'plan', cours: 'cours', lecon: 'cours', verbes: 'cours', vocab: 'vocab', revisions: 'vocab', toeic: 'toeic', blanc: 'toeic', test: 'toeic', progres: 'progres' };

  LE.route = async function () {
    const root = document.getElementById('main');
    const parts = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
    const [page = '', a, b, c] = parts;
    LE.speech && LE.speech.stop();
    document.title = 'Learn English · Objectif TOEIC';

    let nav = NAV_OF[page] || '';
    if (page === 'lecon' && a === 't00') nav = 'toeic';
    if (page === 'lecon' && a === 'a00') nav = 'home';
    document.querySelectorAll('#nav a').forEach((x) => x.classList.toggle('active', x.dataset.nav === nav));

    try {
      switch (page) {
        case '': V.home(root); break;
        case 'plan': V.plan(root); break;
        case 'cours': V.cours(root, a); break;
        case 'lecon': await V.lesson(root, a, b); break;
        case 'vocab': a ? await V.vocabTheme(root, a, b, c) : await V.vocabList(root); break;
        case 'revisions': await V.review(root); break;
        case 'verbes': await V.verbs(root, a, b); break;
        case 'toeic': a ? await V.toeicPart(root, a, b, c) : V.toeic(root); break;
        case 'blanc': await V.mock(root, a); break;
        case 'test': await V.test(root, a, b); break;
        case 'progres': await V.progress(root); break;
        default: V.notFound(root);
      }
    } catch (err) {
      console.error(err);
      root.innerHTML = `<div class="card empty"><div style="font-size:40px">😕</div><h2>Oups, un problème est survenu</h2><p class="muted">${LE.esc(err.message)}</p><a class="btn" href="#/">Retour à l’accueil</a></div>`;
    }
    if (!/runner/.test(root.innerHTML.slice(0, 200))) window.scrollTo(0, 0);
  };

  window.addEventListener('hashchange', LE.route);
  window.addEventListener('DOMContentLoaded', () => {
    LE.applyTheme();
    LE.route();
    if (!LE.state.onboarded) LE.onboarding();
  });

  // Hors ligne : mise en cache des pages déjà visitées (réseau d'abord).
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
