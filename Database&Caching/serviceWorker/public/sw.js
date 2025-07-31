const CACHE_NAME = "my-cache-v1";
const urlsToCache = ["/", "index.html", "/styles.css", "/app.js", "/imageGif.gif"];

self.addEventListener("install", (event) => {
  //installing mode
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)) //put the urls inside the cache
  );
});

self.addEventListener("fetch", (event) => { //If someone is looking at the data then please check in your cache first 
  event.respondWith(
    caches.match(event.request).then((response) => { //if it matches with the cache please return it otherwise make a actual fetch request, get the data put it in the cache 
      return response || fetch(event.request);
    })
  );
});
