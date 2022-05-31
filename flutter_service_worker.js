'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "89468ebb622c603f4f3db816ff897233",
".git/config": "810489cbfa627a3e966d999c6ee9c41f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eaa18517723f421abbb43991f0a56ee0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "667a5b18b82abe66c9dbfe07778dacbf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fbe0aa7717b927d69a57bae1801e0fe4",
".git/logs/refs/heads/master": "fbe0aa7717b927d69a57bae1801e0fe4",
".git/logs/refs/remotes/origin/master": "36709d0bf8e8349c84f54625b72feeeb",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/9280916cef9ef3e0a8061c26834409b27e5fcb": "d3557195a90c276b565f9e197e16eea7",
".git/objects/11/0556c84c5f3937a7930bed765502c8067db217": "70cc99c6c146dcdd28ea4633b7cae9f8",
".git/objects/15/b22a7875335b81fdfc49210f9a2fe033ed0d21": "6e7cf72ed33740a4e13cb718ff1ee765",
".git/objects/1b/bec9e971cca75bf705ce81770d53aae7befa9f": "e16b4724def52268e9b85410f0c35d49",
".git/objects/26/515145fdf06e0cf16246440d3ac2dbb7f82962": "f17f908fb42c2d36bec38c595a92649f",
".git/objects/29/15a8300049c3cbf1bba70c4003abb4f7f09939": "6dbe1b2ed45a4e90af43d05f7ba271b4",
".git/objects/2e/1b6815d326892bf269c73d734a6084031a1c0e": "7073a0f295bb69b005a4f22b4ce61134",
".git/objects/30/6177ece2fa0a7877f41d4b09d7745b89c7c99b": "ca882e55750287ddd7041d6d92515aa3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/93f51c3a7c18511a7dfc8db8a4c3d8a3fb2194": "e5ee86c78fc5ca7fadb04eaddfd6074c",
".git/objects/3b/5c15e29c55d50f0b783ec664505e188d79c455": "e82a6d157176686383c9a84dfa730eeb",
".git/objects/3d/195a93998d2247389c3133154d4f16bb467f25": "5249fb425b25b7894a7e6a36dc47230b",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/40/0c4f42392f9f3714a849e0dd42ebdb71cdcd1c": "8399bbad00078acad98da3348e143358",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/93547763a17c2a6ba846315f48063d8afb488d": "141d660366e33d7979a1009085790a48",
".git/objects/59/77d614800e960325a98c64ecef8a1fbc9a5d50": "c798eacd1eaa376d9a7d4077e31cc25f",
".git/objects/5b/14ffff6ebd52edbfeff09ab73be20b1683f8ea": "8334d43004b69aa9350071a75a80e4ec",
".git/objects/5e/5a8acb6a238445d3169beea9377d6cc287de96": "a4204d8bba0fd2f1462c004b520aef22",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/39eefdeb337670a4c678c733e9a013afcce4c4": "80ca13221f56b24e40ee9987e924e9d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/95750da6338c5bd54d514a98c338a0e2925442": "c44c3eaa08558ca09d62d90d8d30f6b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a8aa405130e21ec0ed889de44b43ef51bea914": "8f610f133aa28ab9f9c3a09b3faeb4fc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/22597a23d357c5b262272c8f4d058882182f9a": "bcbe170498314d8f2c51a5d43fda1592",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/7f44bcd1c4ebc152fceb18936aeee2bb3e2b4d": "0b67967cb2a816da67f4d12992076015",
".git/objects/b6/45605871d0ff9ee540f120be3b54d942818017": "be56a900965c74939b6ad354190bffc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cd81c4cb73b2be578703005d20d10607dbb33a": "c909bd6f4349cd2351cad5a06a2985ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/c9ee490adaa547b43770e5a07c9f7927f1ef29": "ad0011e95efd4066d4b96bafdc8a038e",
".git/objects/c2/301ff7840f27e55c288158ec83db03afc6c842": "42c869423f7e791d8b03edefc6be5041",
".git/objects/c8/a84af9055f7ac8d5e6598648ba4f88d3486e5a": "ee0a0bf475302adfdd136d036461e16d",
".git/objects/d0/51920c1092512294511e35fea9dae4d88923d0": "c60dd6f356691c5867a1b8584b67edfa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/6d772af448fdbe29e737be3e3905b8d3912695": "96f32c2ffbd1c0c9df07da8ea6fd3028",
".git/objects/e2/0172d64e14344f5914ce9f2adb7fbfe73a4333": "3e232c06a588a329a7a72700797dc0ea",
".git/objects/e4/6e4ba1f5e72be26da43698b795fd11f12c609a": "cac59867cb645e22df23a0642b664e04",
".git/objects/e5/4a46ee94b40e0999485acfc806c049b3b19caf": "52af1ab7a421e1949c8129a2224adbf7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8c563e908434b86ca42364b230a372d1ab42e6": "440ce67118524ff5f672fe5f099e48e2",
".git/refs/heads/master": "2de2acc093885c9adf6727f1d35735f1",
".git/refs/remotes/origin/master": "2de2acc093885c9adf6727f1d35735f1",
"assets/AssetManifest.json": "c752d14befe24d2e6c963c657d003133",
"assets/FontManifest.json": "a5d42d613d13dbf6174f7a16d0a2d35f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/ttf/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/fonts/ttf/JetBrainsMono-BoldItalic.ttf": "b91689d7bbb1eec1e1c839d7ef9a0340",
"assets/fonts/ttf/JetBrainsMono-Italic.ttf": "342fa9d499e506144959ab12673ae0c4",
"assets/fonts/ttf/JetBrainsMono-Regular.ttf": "a7151c5349c1aa20beefb3c5430c3a79",
"assets/NOTICES": "8e827bb4062920cb1d6a9e6bc1444654",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1da4b3a5e552a334a98301a9616cb1b1",
"/": "1da4b3a5e552a334a98301a9616cb1b1",
"main.dart.js": "0bd70cbdc9b4a901d4d97d97d403ff7a",
"manifest.json": "faec91b602d8773e3c99c1cabb51df4a",
"version.json": "a1e918c97d0c734be1f63c7ea451ea32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
