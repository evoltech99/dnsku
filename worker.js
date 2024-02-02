addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

// Daftar domain yang dilarang (blacklist)
const blacklist = ['https://xnxx.com', 'line.me'];

async function handleRequest(request) {
  const { url } = request;
  const { hostname } = new URL(url);

  // Cek apakah domain dalam blacklist
  if (blacklist.includes(hostname)) {
    // Redirect ke contoh.com
    return Response.redirect('https://facebook.com', 302);
  }

  // Jika domain tidak dalam blacklist, lanjutkan dengan permintaan asli
  return fetch(request);
}
