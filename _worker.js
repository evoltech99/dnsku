 @ts-ignore
import { connect } from 'cloudflare:sockets';
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

// Daftar domain yang dilarang (blacklist)
const blacklist = ['xnxx.com', 'line.me'];

async function handleRequest(request) {
  const { url } = request;
  const { hostname } = new URL(url);

  // Cek apakah domain dalam blacklist
  if (blacklist.includes(hostname)) {
    // Return response with blocked message
    return new Response('Domain ini diblokir.', {
      status: 403
    });
  }

  // Jika domain tidak dalam blacklist, lanjutkan dengan permintaan asli
  return fetch(request);
}
