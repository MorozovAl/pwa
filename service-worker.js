const cacheName = 'cache-v2';
const precacheResources = [
    '/',
    'index.html',
    'assets/css/style.css'
];

self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(precacheResources);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
