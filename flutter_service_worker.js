'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c4041d9b796817f604abc81bc846c73d",
"version.json": "ebd53082ea33bda07fdaf67b9cb5ee9c",
"index.html": "565116e98c409ce183e16c0113e6ef9f",
"/": "565116e98c409ce183e16c0113e6ef9f",
"main.dart.js": "fd17c6d68c579cd1db61a7e431e7282b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "a31ce20c2f8accb48c84f9c9b20eb31c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb136953a979a27667082c1c28e24d87",
"assets/AssetManifest.json": "5abb75761e1f3c031fff0838fed284c5",
"assets/NOTICES": "2d8656952e69ce99f326ff602541afcb",
"assets/FontManifest.json": "bb854dff22c36872b4bb2cf65a27872e",
"assets/AssetManifest.bin.json": "28da12122deb7554ab30a78198f4d7d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "14b69ab32a709e4749d3afada903e1a6",
"assets/fonts/SofiaSans-VariableFont_wght.ttf": "87bc342dfe5178b9500aa9b7f2e55b2e",
"assets/fonts/Ephesis-Regular.ttf": "13edaad8288d4cc98e17f8134f730df6",
"assets/fonts/MaterialIcons-Regular.otf": "fb75bdfcad15dc8e41a606b0dd21cf95",
"assets/fonts/AlbertSans-VariableFont_wght.ttf": "d1c03b710a9131f50e98a379dfceac50",
"assets/fonts/Sora-VariableFont_wght.ttf": "66b18d93676517197641202e352191eb",
"assets/assets/images/white_image.png": "af16b04cb28294aeed99923f40e0d5ae",
"assets/assets/images/SCRI.png": "97c3fc27456155410ae2f5add714bd01",
"assets/assets/images/quote2.jpg": "91bbbf304488f4c73c44db7e54ce02bb",
"assets/assets/images/quote1.jpg": "296acdb7f45031cf618f86e7abf85523",
"assets/assets/images/Rectangle_69.jpg": "87be3f9ddefa4be4501a64049b1a4398",
"assets/assets/Icons/email.png": "ff315425047e9f46a2761c66dd98e878",
"assets/assets/Icons/bell.png": "7b6fc2e6e7f16247543ebe2a3027b460",
"assets/assets/Icons/pin.png": "60bb9d147357851322b7cfba7028d128",
"assets/assets/Icons/contact-mail.png": "0d741ab723d0a918dbe2aad8c6ed7235",
"assets/assets/Icons/instagram.png": "f610550da9d0095a48d86987e9fcec25",
"assets/assets/Icons/message-pink.png": "669e2488ce1a233b64036ce89b51fcbe",
"assets/assets/Icons/message-blue.png": "eaac9c23720c7a8da3f04f5cadc998d4",
"assets/assets/Icons/github.png": "f40a6024447e144f703899b5c14da2e3",
"assets/assets/Icons/smartphone.png": "ecb65cdcc9d1afef7e3f41307cebc9dd",
"assets/assets/Icons/linkedin-logo.png": "28ce1b55f82bb8827479251e099a46dc",
"assets/assets/Icons/menu.png": "7777bd0a549e245607ebc0cad73cb093",
"assets/assets/Icons/mobile-notch.svg": "6e91a1a6194bba51de5d26fc161c3b2b",
"assets/assets/Icons/twitter.png": "1b61783169ab1289ad50b3af043fd0f3",
"assets/assets/Icons/linkedin.png": "1025aa223d0e7eccc5a8ee03aa797610",
"assets/assets/Icons/add-user.png": "5d3c22ad7d5c675799bb850d27442849",
"assets/assets/Icons/paper-plane-pink.png": "d959a9eebd09a514a315e2cf1f1132e8",
"assets/assets/Icons/paper-plane-blue.png": "4ea18b4817d9e8cde2f5c599437e2af5",
"assets/assets/Icons/message-white.png": "f472250a351b600d92431ad47e6e2b7a",
"assets/assets/Icons/whatsapp.png": "7611f02494be1e121a6f6a391d3eafdc",
"assets/assets/Icons/facebook.png": "c42518e360c007b738bc6d18a0523d96",
"assets/assets/Icons/back.png": "61cb08fedace27cfed82d89632c27066",
"assets/assets/Icons/scri_logo.png": "a8cde2e7b8ea594580763c5fd7e91980",
"assets/assets/Icons/close.png": "7e6a2261acbfe6de5c848b4f8e080f40",
"assets/assets/animations/loading_ball.json": "902676e1680d5dace4b1ebfc3e910a67",
"assets/assets/animations/points.json": "68453190a8d0337f0e3b0965d32ca2a4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
