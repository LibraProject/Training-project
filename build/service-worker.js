"use strict";var precacheConfig=[["/index.html","6f0d504252b9d7a2d534b45339a9157b"],["/static/css/main.0f0786b7.css","1284c5ce9831f39549203ed996ce8aa0"],["/static/js/0.982894bd.chunk.js","c0bf045d41279d981827dd0addb591ca"],["/static/js/1.669ba1bf.chunk.js","2ebe1b09a5a4caded92f905fb001da88"],["/static/js/10.e3cbc36e.chunk.js","5de074a066d6864a236e8e0c65d94793"],["/static/js/11.93e59794.chunk.js","0bd9336ca8aa45775b7dbcdea2f2642b"],["/static/js/12.4258926a.chunk.js","b62cd709d5fdee1be2f8ec857f708700"],["/static/js/13.753592df.chunk.js","c242a8f8d87c318a95cf993aafdd7bae"],["/static/js/14.ccb9805b.chunk.js","c91dba3894b696ddcc043a313f4142ff"],["/static/js/15.dd8d80cd.chunk.js","ad41928f708dd62ad6924073f68cfff7"],["/static/js/16.35b61949.chunk.js","9981b9e6405ba66011cfc3941098705d"],["/static/js/2.fd2a08d6.chunk.js","2b97bad932d22892de3717c222ece2f2"],["/static/js/3.bb6efe44.chunk.js","d2f7971e6ccdfe4ebee599b06085c3a0"],["/static/js/4.ccf82387.chunk.js","4759ef176494a9a09aada3140c7e9f08"],["/static/js/5.6fd0b425.chunk.js","e8abde54eddb3d4f1e51133745673a14"],["/static/js/6.f2ebcf12.chunk.js","975165a5c692bfefde71a1d4d965d880"],["/static/js/7.58034251.chunk.js","29031c9446deccac13d082ffd43304cd"],["/static/js/8.fec17bc6.chunk.js","e20d2548f37eb7c443f84d47bd81579f"],["/static/js/9.18a407ba.chunk.js","0b064a126ced4c7dba16cd2ec004dcb1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});