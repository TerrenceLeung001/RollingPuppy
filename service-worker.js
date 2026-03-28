// Minimal Service Worker for PWA Installation Testing
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

// A fetch listener is REQUIRED for the install prompt to trigger
self.addEventListener('fetch', (event) => {
  // We don't need to do anything here for a basic test
});
