if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>c(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BWv7eQbeUBzKUPqd9fcqv/_buildManifest.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/BWv7eQbeUBzKUPqd9fcqv/_middlewareManifest.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/BWv7eQbeUBzKUPqd9fcqv/_ssgManifest.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/1606726a-32ef115292a7640a.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/163-680e223abf0adc22.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/18a18bb5-c8f2ac930bc7130a.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/350-7a2f0cad173c4769.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/400-2cc3464310394d02.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/439-58dd3ff25fa2cf97.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/527-ad904970e511674f.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/562-b5a11ddf1679c1ba.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/612-a09de9976f3c41d7.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/70-7da14c5e86283551.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/aa74d784-f347b69f1969a741.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/main-e0ad8c5426e4fdd2.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/400-b40811db1922586c.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/404-0f6f85dc128eaa89.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/_app-097d72dc0e744908.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/_error-8de20d31869d38e0.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/address/%5Bid%5D-943f3e4bc53e312b.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/create/post-308b14c0ccce2271.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/create/profile-b39663436e92f70a.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/create/socialdao-ce0b25e29b4a3d9d.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/discussion/%5Bid%5D-8df2fc5d6e258df2.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/discussions/%5Bid%5D-6fa316b25a59e88d.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/home-48368d16e89be86a.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/index-b22186831f1ed4e5.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/me-305c28760cc23bfb.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-e97d3021788176ce.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/profile/%5Bid%5D-e6b7a7a2426622f9.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/recommandations-30aac9d9cd1f17d4.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/revenue-42de8700c3bae878.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/search-637efe082ff69233.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/settings-3b3008194d8691ad.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/social-1421298e7b735a3e.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/social/%5Bid%5D-221fb57c649a0828.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/status-2008e8cfb339f173.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/subject/%5Bid%5D-1ec5a4a9d938800a.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/timeline-17df0176184a6ee9.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/pages/update/profile-1478fa802263b82c.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/chunks/webpack-5761f3a204ffdf4a.js",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/css/7755605b960a4e1f.css",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/_next/static/css/f6c2e128ee8a3113.css",revision:"BWv7eQbeUBzKUPqd9fcqv"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/ClashGrotesk-Variable.woff2",revision:"218f4f81bdee5932a127929c6d693f0c"},{url:"/fonts/EBGaramond-Italic.woff2",revision:"37065ed1d1d45e38294ab2557c87678b"},{url:"/fonts/EBGaramond-Regular.woff2",revision:"2991454d3c47031208b423c6acfc5157"},{url:"/fonts/Satoshi-Variable.ttf",revision:"bc0207192e408b721fa14151690c6a66"},{url:"/fonts/Satoshi-Variable.woff2",revision:"70880e42f07b0386e261974cd14820a1"},{url:"/img/bond.webp",revision:"9d6ffb41f31b15b8e8062e1e4829c616"},{url:"/img/dinosaur.png",revision:"d3f91937329cee2123940365b539cb2a"},{url:"/img/logo.svg",revision:"81f6b30db802e4082b7a8a12ff86f9c1"},{url:"/img/logo.webp",revision:"3e904722b2fdd4664d67d40744e77ff2"},{url:"/manifest.json",revision:"a8bfed1d59547aff04c56b57982a47d4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
