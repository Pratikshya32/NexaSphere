// Request Deduplication Cache
// Fixes duplicate concurrent GET requests for the same endpoint
const _inFlight = new Map();

export async function deduplicatedFetch(url, options = {}) {
  const method = (options.method || 'GET').toUpperCase();
  if (method !== 'GET') return fetch(url, options);

  if (_inFlight.has(url)) {
    return _inFlight.get(url);
  }

  const promise = fetch(url, options).finally(() => {
    _inFlight.delete(url);
  });

  _inFlight.set(url, promise);
  return promise;
}
