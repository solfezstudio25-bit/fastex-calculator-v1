const CACHE='fastex-v3-pwa';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{if(e.request.method==='GET'){e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))}});