globalThis.oninstall = () => globalThis.skipWaiting()

globalThis.onactivate = event => event.waitUntil(globalThis.clients.claim())

globalThis.onfetch = event =>
{
    const pathname = new globalThis.URL(event.request.url).pathname
    if (globalThis.Object.is(pathname, '/ajax')) event.respondWith((async request => await globalThis.fetch('https://backend.chaowenguo.eu.org/web' + pathname, {method:request.method, body:await request.text()}))(event.request))
}
