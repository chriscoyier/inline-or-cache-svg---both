self.addEventListener("fetch", event => {
  let request = event.request;

  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request);
    })
  );
});
