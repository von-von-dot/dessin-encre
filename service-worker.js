
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('encre-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
