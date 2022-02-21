'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ef537fc3d4edf9f6fbbc7748cd3c57ce",
".git/config": "521c8d12a573e4df2f45a95443b1ffbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9b3797d0a583c641b22538b18c6d32fc",
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
".git/index": "707f062b34d4c51743ec947fab887765",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "962fad05b3971d0a14b72509f810c138",
".git/logs/refs/heads/master": "0b58575a10ba5b1dc0dae211349d5bcf",
".git/logs/refs/remotes/origin/master": "6356afeb05de39968afd946eff17bf9a",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/9280916cef9ef3e0a8061c26834409b27e5fcb": "d3557195a90c276b565f9e197e16eea7",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/11/0556c84c5f3937a7930bed765502c8067db217": "70cc99c6c146dcdd28ea4633b7cae9f8",
".git/objects/18/38379518c18a554c494365266096937ec7e154": "192b94926fbd61448a9c1e5d3d5ba318",
".git/objects/1b/bec9e971cca75bf705ce81770d53aae7befa9f": "e16b4724def52268e9b85410f0c35d49",
".git/objects/1e/1a17208e00fe60660ff794805de9866d88533c": "e263c274ed31cb2825f81b5e5df41ad5",
".git/objects/26/515145fdf06e0cf16246440d3ac2dbb7f82962": "f17f908fb42c2d36bec38c595a92649f",
".git/objects/30/6177ece2fa0a7877f41d4b09d7745b89c7c99b": "ca882e55750287ddd7041d6d92515aa3",
".git/objects/31/38d9958f0a7f7cba0c381a58c9c2d8da5bd952": "c3a5d4c59d893a7d75093d2198c9465e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/84b51d0b20e31c426f429f4b8048b026666a59": "664f5283d2fc82c5c6b34d325f8fe043",
".git/objects/36/93f51c3a7c18511a7dfc8db8a4c3d8a3fb2194": "e5ee86c78fc5ca7fadb04eaddfd6074c",
".git/objects/3d/195a93998d2247389c3133154d4f16bb467f25": "5249fb425b25b7894a7e6a36dc47230b",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/43/ddc30a80e7fb27226461f40b230fa12056460a": "2c8461a221323a6eae5370dc32106a0a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/59/77d614800e960325a98c64ecef8a1fbc9a5d50": "c798eacd1eaa376d9a7d4077e31cc25f",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/70/82942cabe37e674802f4d68fa1b996b41f249f": "59bbe9087e4b90b3e61b2ee18bac1231",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/39eefdeb337670a4c678c733e9a013afcce4c4": "80ca13221f56b24e40ee9987e924e9d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a8aa405130e21ec0ed889de44b43ef51bea914": "8f610f133aa28ab9f9c3a09b3faeb4fc",
".git/objects/91/207e697824a8f2b0fa538f4a8fcddfaa06d262": "61ddeab46bbae5abb201f9c66a2fc11f",
".git/objects/9a/3392413a29593a0a49dea7d8f36c921de6a916": "b2e703beb79c45989a339960310258f4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/bcdeb153b40c56a77d30bd993877d2c83fc281": "77dbb7bcbf962bbcc4c148f1942ac81a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/22597a23d357c5b262272c8f4d058882182f9a": "bcbe170498314d8f2c51a5d43fda1592",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b6/45605871d0ff9ee540f120be3b54d942818017": "be56a900965c74939b6ad354190bffc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cd81c4cb73b2be578703005d20d10607dbb33a": "c909bd6f4349cd2351cad5a06a2985ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/c9ee490adaa547b43770e5a07c9f7927f1ef29": "ad0011e95efd4066d4b96bafdc8a038e",
".git/objects/c2/301ff7840f27e55c288158ec83db03afc6c842": "42c869423f7e791d8b03edefc6be5041",
".git/objects/c3/34c6db31b69bf6a42591191637201110876765": "f926c0799a2673a13e6412fe7ee3e63d",
".git/objects/d0/51920c1092512294511e35fea9dae4d88923d0": "c60dd6f356691c5867a1b8584b67edfa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ff873d718c7b275af14b6b0cae4d35dc39361d": "dfdff84bac8b9a692202b9c5bd496859",
".git/objects/e1/123c432eb0aa05875577b646cf92b6267e9336": "cf6825aa4e851fa7fadc29bb4b41be21",
".git/objects/e2/0172d64e14344f5914ce9f2adb7fbfe73a4333": "3e232c06a588a329a7a72700797dc0ea",
".git/objects/e4/6e4ba1f5e72be26da43698b795fd11f12c609a": "cac59867cb645e22df23a0642b664e04",
".git/objects/e5/4a46ee94b40e0999485acfc806c049b3b19caf": "52af1ab7a421e1949c8129a2224adbf7",
".git/objects/e5/533f30be8c672be536752b07d5e8da80a11854": "efacab03be0f771cedfa3e24b4ffb934",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/7c2feea5185707e9eca1ea97fabfda5595137e": "dae796148dc17deefbdd9d6a8bf847b1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/465b977380552c229941feaf493f82a7c724ee": "b9f61382975ac1b763046274056765ff",
".git/ORIG_HEAD": "a82df1fed2565acb46a70f9a8a6de085",
".git/REBASE_HEAD": "a82df1fed2565acb46a70f9a8a6de085",
".git/refs/heads/master": "e551954e5aa31ec737e7a2586ae7417c",
".git/refs/remotes/origin/master": "e551954e5aa31ec737e7a2586ae7417c",
"assets/AssetManifest.json": "c752d14befe24d2e6c963c657d003133",
"assets/FontManifest.json": "a5d42d613d13dbf6174f7a16d0a2d35f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/ttf/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/fonts/ttf/JetBrainsMono-BoldItalic.ttf": "b91689d7bbb1eec1e1c839d7ef9a0340",
"assets/fonts/ttf/JetBrainsMono-Italic.ttf": "342fa9d499e506144959ab12673ae0c4",
"assets/fonts/ttf/JetBrainsMono-Regular.ttf": "a7151c5349c1aa20beefb3c5430c3a79",
"assets/NOTICES": "caf6677e00763f38b1340139f281dd6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f5774f408595a9198e90551a98c2f7a",
"/": "8f5774f408595a9198e90551a98c2f7a",
"main.dart.js": "25874c95b894ce7aca013e6f7dfa31b7",
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
