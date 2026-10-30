// ==========================================
// FAKER (GUESS THE IMPOSTER) - SERVICE WORKER
// 100% Offline Cache & Instant Startup
// ==========================================

const CACHE_NAME = 'faker-cache-v1.4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css?v=1.4',
  './js/app.js',
  './js/audio.js',
  './js/data_roles.js',
  './js/data_categories.js',
  './assets/icons/app_logo.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-192.png',
  './assets/icons/favicon.png',
  './assets/images/techcombank_logo.png',
  './assets/images/vietqr_donate.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Cache-First strategy with Network Fallback
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
