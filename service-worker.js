const CACHE_NAME = 'rolling-puppy-v1';
const ASSETS = [
  '/RollingPuppy/',
  '/RollingPuppy/index.html',
  '/RollingPuppy/manifest.json'
];

// Install event: caching the basic files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch event: required for PWA "Installable" status
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
