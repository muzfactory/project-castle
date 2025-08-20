// 아주 단순한 캐시 (오프라인에 기본 페이지만 남김)
self.addEventListener('install', e => {
  e.waitUntil(caches.open('castle-v1').then(c => c.addAll(['./','./index.html'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
