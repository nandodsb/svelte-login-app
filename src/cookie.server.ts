import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch = (async ({ event, request, fetch }) => {
  if (request.url.startsWith('http://localhost:4000/api/auth/')) {
    request.headers.set('cookie', event.request.headers.get('cookie'));
  }
  console.log(fetch)
  return fetch(request);
}) satisfies HandleFetch;