const FILES_TO_CACHE = [
    './',
    './style.css',
    './main.js'
];

self.addEventListener('install', async evt => {
    const cache = await caches.open('hola-mundo');
    cache.addAll(FILES_TO_CACHE);
    return self.skipWaiting();
  });
  
self.addEventListener('activate', evt => {
  self.clients.claim();
}); 

self.addEventListener('fetch', evt => {
  const req = evt.request;
  evt.respondWith(cacheFirst(req));
}); 

async function cacheFirst(req) { 
    const catchedResponse = await caches.match(req);
    return catchedResponse || fetch(req);
 }