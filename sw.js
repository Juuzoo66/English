/* Service worker : réseau d'abord, cache en secours (pour réviser hors ligne les pages déjà ouvertes). */
const CACHE = 'le-toeic-v1';
const CORE = ['./', 'index.html', 'assets/css/style.css', 'assets/js/core.js', 'assets/js/speech.js', 'assets/js/exercises.js',
  'assets/js/toeic.js', 'assets/js/vocab.js', 'assets/js/views.js', 'assets/js/app.js', 'data/catalog.js', 'data/plan.js', 'assets/icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html')))
  );
});
