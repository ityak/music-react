"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","5ad62004c7a91729c596730e02dbaee1"],["/static/css/main.b082fdb9.css","2ec88c98821ec75652a05078af9b227a"],["/static/js/0.0ed504da.chunk.js","6a213fc66ac64e93181046b5d0ffe59a"],["/static/js/1.32d4178c.chunk.js","5cae8bbbf89b1e0861f537d27c60d987"],["/static/js/10.d644e0f8.chunk.js","631c9d07b58433d1d42cfbe0d1a056fb"],["/static/js/11.4aad8084.chunk.js","9d1debceb09304714e06cbf2e4c08fc1"],["/static/js/12.43f59ded.chunk.js","3d8a8928c04ca578b2d5112b6556b996"],["/static/js/13.e9b17900.chunk.js","687edcc37dfd086350df7dac49d03c5c"],["/static/js/14.339ca59c.chunk.js","d6aad72060237f1a1c7f4ad79020f4e6"],["/static/js/15.b3342d0b.chunk.js","6821d8d5047716309a1b7a7d589f376f"],["/static/js/16.2be304c6.chunk.js","92746db720ac237c6d2583a60f0497ac"],["/static/js/17.478395e5.chunk.js","3423f4b0dee41942a8afa546bd6ee696"],["/static/js/18.833924d0.chunk.js","16067ac81fd8dbaf37a7aca413ff7cc0"],["/static/js/19.e5eb36eb.chunk.js","1905b74d80de7edbb62b9a5b42860190"],["/static/js/2.dbf2d5bc.chunk.js","cb4b83aace862aadf7d16a145ddfba6f"],["/static/js/3.95ee92ed.chunk.js","e4caa62f41891fbcf9f375b156128d59"],["/static/js/4.2ab8f079.chunk.js","cebcaf530abc6fdd27ef583b55c2febc"],["/static/js/5.46e67542.chunk.js","1c20598f28c6936df9b5f6bb7a466e8a"],["/static/js/6.d15dbff0.chunk.js","59403bb8df91e885ce81b46e3ef988a6"],["/static/js/7.4ba4f018.chunk.js","629e10dd998e756d2dfef59b30fd8512"],["/static/js/8.881c053c.chunk.js","d0092b3a0480d6731ec5c0e0534f9df2"],["/static/js/9.e1b1f8a8.chunk.js","f3e0d5c874e664cfa99739b300baaf96"],["/static/js/main.2fe5a31f.js","ee75632a42be898da12ab16f7b21315c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});