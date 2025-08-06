// Service Worker para Sentydos
const CACHE_NAME = 'sentydos-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './security-policy.html',
  './privacy-policy.html',
  './src/styles/style.css',
  './src/styles/responsive.css',
  './src/scripts/script.js',
  './public/assets/icons/fav.png',
  './config/manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  // Não interceptar requisições para APIs ou recursos externos
  if (event.request.url.startsWith('http') && !event.request.url.includes('fonts.googleapis.com') && 
      !event.request.url.includes('fonts.gstatic.com') && 
      !event.request.url.includes('cdnjs.cloudflare.com') && 
      !event.request.url.includes('cdn.jsdelivr.net')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Cache hit - retorna a resposta
          if (response) {
            return response;
          }

          // Clona a requisição
          const fetchRequest = event.request.clone();

          return fetch(fetchRequest).then(
            response => {
              // Verifica se recebemos uma resposta válida
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clona a resposta
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then(cache => {
                  // Não armazena em cache requisições com credenciais
                  if (!event.request.url.includes('credentials=include')) {
                    cache.put(event.request, responseToCache);
                  }
                });

              return response;
            }
          );
        })
    );
  }
});

// Evento de sincronização em segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Implementação de sincronização em segundo plano
      console.log('Sincronização em segundo plano')
    );
  }
});

// Evento de notificação push
self.addEventListener('push', event => {
  const title = 'Sentydos';
  const options = {
    body: event.data.text(),
    icon: './public/assets/icons/fav.png',
        badge: './public/assets/icons/fav.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Evento de clique em notificação
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://www.sentydos.com.br')
  );
});