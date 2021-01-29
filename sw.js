var cacheName = 'code-fair-final';
var filesToCache = [
    '/',
    '/main.html',
    '/plan.html',
    '/styles/responsive.css',
    '/styles/font-awesome.css',
    '/scripts/explore.js',
    '/scripts/dest-requests.js',
    '/scripts/todo.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});