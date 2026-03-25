self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vulcan-v1').then((cache) => {
      return cache.addAll(['index.html', 'manifest.json', 'icon.png']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});