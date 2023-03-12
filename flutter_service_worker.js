'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "233d4c699cfca20dd4c9e6aaca97bc23",
"index.html": "4874e8623774b409572a9595f4314f60",
"/": "4874e8623774b409572a9595f4314f60",
"main.dart.js": "0e727fdd9b5aefd42b276c97c5fafe39",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"README.md": "8f2345ed613d5618fedc5475a859e06d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e4b124f5977f4703d292efbf502ab1a",
".git/config": "4e44fdde6ef2ce8f24d982ba977471cb",
".git/objects/61/2463691951ff42767bdd95008d3330a9a112b9": "eedeb2155ee8766882afd7d628442554",
".git/objects/0d/d5870365132c8462fa1cc5fcbdcb676815b1da": "9d4efd6894bac6bae998e0b3a4d898f7",
".git/objects/0c/b76e713059222dc35bef45f20781debde79590": "ab8fbacf5b7ac33b7cd606129be9d785",
".git/objects/0c/7ebd08b0d991d071223b1ebedf4b40f6ebd60d": "c0c21088dbbcd9263b0bd056361c5798",
".git/objects/50/c65dd60a1fd2e236ff779236fcec74f38d9e8a": "b7180e5c77e3c35fd303092a9d8be4fb",
".git/objects/68/4505a02aaa3be928959dc3551c46d42bf86dc1": "08bbe99dc122b980f110e8305fa4e9ba",
".git/objects/57/4e6dff4920ff7edc2862e885eae84f6d3aa225": "0d239c0be62be0b12727e1bfa1fa3751",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/58/67248fa3aecb9f88ffe2ced1afbe8f0a61246f": "e5382e392ed00b67e95a520dea0ec133",
".git/objects/0e/c3874ef42711ac3de07c3a2becf78a190a861a": "8a87955a0af79bf6c5782b6fffa6a344",
".git/objects/0e/6d7692591f7b9292033b90908d0d20d3c8052d": "ee5df2d535289781276f9b44833cf70e",
".git/objects/d0/d357ca1a9e00201616de85e12dfa14b7284319": "d6bfe4a75e717d667f66d15b63dfd00f",
".git/objects/be/a6a24af3de85769f90e054e7f26557d6bccac9": "64bea169cec9c9e903ebcecaf7cbf2c3",
".git/objects/b4/c4c49e73939b71618fedf10beed7a53940cf74": "6139108c0efc8bcec9392dec14d5eb81",
".git/objects/bd/8fc45e9902b283289b2692d43922364ebe60d5": "1bbc51f4f419a9c7c0f1204db07a5a11",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/463ce2efdcb3010fa24a431c00db2dd1d3011b": "f1eae9f7aa060fa37b959fbb60de66e2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/dfd16529adc03d442e84013735cf5d88e4c9c7": "a113d2590307618f8793e02649416c61",
".git/objects/f3/2d4b293a31fc904689750f97c492b69b9e4e1b": "75d1366da0a6a65af9c9eec8d7eacd2a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7382c9010311f14254dd5b0efd4f13f616f266": "d041f568860b64b79e461c117f036eb4",
".git/objects/f5/82531b5181eb845a00ecd73cf21b974c4458dc": "cd4e5031181e65401640bbebe10a0c29",
".git/objects/fe/751fb2ea2e29aab9bc03a684114c19cabcf7da": "0250f0daec3dfd997c004025e1159eca",
".git/objects/c8/c6cfdba826a09a99a8832f73791c0bdf027543": "43144fe26701fab34226d8c8299fce47",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/db930f8eb20eafb2965817dcf1d0535513066b": "141dcb2860d6ab83d0c4c9548e665e1e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/09946453fddc138efc1e292267846865379713": "81d64d859b71f62173e651dbb22efef5",
".git/objects/74/56364e69390604b53bbcab2d602503a2fcf854": "25f5d6392520e641ded0186f05402fc4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/2a961ae03de2ab8e96d67207a827c8cfd359f8": "7f9d15f30f6e7061b42af9df29bbd703",
".git/objects/21/6b9fd64564b3f8229c6ef7296551eaa13eb348": "d3c21dc2d8714ed4f5c8270760ce1832",
".git/objects/44/275323e8294333524c96ca3a19b62b77c4783f": "69f5ea815e101782074d89b97e9d2ea0",
".git/objects/2f/155f710d99f63ebeb3ef93f37a7d1cd718beae": "8edf5199108cee3e111174a4508b0d3d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/dfab0ed3c676f43e391c7966510cd913998880": "ffc4f0acdc78892775ac3ed27efb7e9a",
".git/objects/38/96ae8f3a48b8432167504285d3e1bfee9046d7": "02f50cdd7a09de258fa964e97ca0513a",
".git/objects/00/ba58966de610e4d24c9033f8206b953c67a7cb": "aecb7e00ee09476fcd27db74502994eb",
".git/objects/6e/3b80b5eab306c0ba50d1a0d538029c7637d0a5": "f6bf8f98707013cd9b08e69904aa41ce",
".git/objects/09/c406d4381ffba81459ddcc05298e44997f56d4": "357fb1032f2427fe72341e936dce24de",
".git/objects/31/ddf93c22a0d7bb0f6c6627ebe81e3671d22993": "0dd6f4f596a1719aa19c3dd076d5d536",
".git/objects/62/d4bf44c5dbada4015880c99200f24f5c9d6617": "43dba95366758f710890f0b52e1c7828",
".git/objects/3a/e667eb452ae241d7e01a7f70d34e7668e3798b": "c1ba63f5ae5ff6504e2527d98901182b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6c/8eb9a67407ee38615650ccb4e6b1d9dd5876ea": "39274aeafc9373d1f5c38081983ebd02",
".git/objects/39/6fd306b24eca0761f9a70b74956314bf54b350": "282f2e3d168d712b472689a90a609ea8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/c2aa89ede7a13e26fd707d86832d03a5effca1": "a7c6a4b488b6e31dcff7844b41f1305e",
".git/objects/64/b32384e1775265478d643887876dce1bb73223": "08b0ab5b7a36728052c2f05e35bf2554",
".git/objects/a0/fc2604d76e593c85ce2be45f4d583372da8d9b": "8a600d7fc6963e0919a054e1731575cb",
".git/objects/a7/76b14e88585218aeeb4c320b6bb9ba67247933": "fd10de233ce85ce7718ebc409b02d945",
".git/objects/b8/945c3901615be6e9ea86380a10204bf1dbfcd5": "ce61cb47e30d411a0e4fbc08d5ea1dc5",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/1f161010fbdffdccfb56ff4a31e3d2875b2864": "3b46fa4b4688f424e177c252af58225e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/c9075b9c52bed7aaf8390fcb6593c40b5803b0": "193a30ac562ff6ce0af3306e57b6c578",
".git/objects/a6/c722ef65a306feb7ef042c4c4a2d338aa4f76d": "b8b937021ada79fdc90485d3cceb3ede",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/a34ddc527e0a98e31d5ed456754350c85e1ba4": "8e77dc3d09a3a896cd27b8311d5632c3",
".git/objects/e1/efef2dc3170c9a72ec89665f2c1288519b6b16": "ebc6dc0cd51bfd722b261e824cdf1b52",
".git/objects/f9/8d7aeb03e54c8a82643fd840e3a5406b60b863": "20fe0f0863e1690fd8c421d38b9e146a",
".git/objects/c2/ea3037ec1a68476ea2bf197cac571799e20552": "99560792f92f6367bd8352e9a269f135",
".git/objects/f6/429c4c0e656cd3c778115ea2caa9e9a4e67931": "a52b04bd33af36b5b311ea611a8e2c92",
".git/objects/cb/8b95f3dd960286ad193600af4ca6d40f78e3e4": "96eed87768ca3a32e80b27f4fee8f90f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/572929a36eb13b3b69cc3c833821b78f5844c6": "30141c58e34fbca24842d3f57b123f4d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/158d1c9a5b0f7a6cafbce18758ca67a05c42b6": "42f83c2866be577d92b6063a42c3b3ef",
".git/objects/41/2cc811b63959ad9e0bb10f436eb745a372721a": "eeb7b919e06924853010ebaf760b90a6",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/2ea0d47815556f24bc3abe38496479d30a081e": "e58f9b990a548f71e3bc0cef58173185",
".git/objects/24/75b4d502bd2f931c97000bda878ea4aa0779c2": "1bbed48e3facfe2d8d8436af7103062a",
".git/objects/15/21051d579bb0789eca3c1a3d078cf9862f246f": "b1b882bf16c20e382071dce24cfeec06",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/e6e33c60ca441144ed4e745bad3989142ce88e": "a76c0922acc2ba9daef35471526345e0",
".git/objects/85/10af856409fe33751ce2780e4f48e83dd5ac7d": "c44bd0655d6446e245d518c9fc3ea81d",
".git/objects/82/925dd0139067d652b77549597a9d1dddb617a3": "379b2665dfda10c67f7dca4b074b4431",
".git/objects/25/138182fbfd6338e23d79f00c8830571b912c5d": "d3e59b001a84503103030ba289363528",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "e884f9a59fa1e4686b0addab43a70391",
".git/logs/refs/heads/main": "cac5094568fa310db16e4076c588fb0a",
".git/logs/refs/remotes/origin/HEAD": "f1e54b285bb1e90d596df8986831b27b",
".git/logs/refs/remotes/origin/main": "1fb8b6963f0dea386975cb3cbd1a1ee3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "43c06e70731340a73bd037d18b323811",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "43c06e70731340a73bd037d18b323811",
".git/index": "1d26867bde68c768be75e7165510fac1",
".git/COMMIT_EDITMSG": "95d116c1252a30e55b5f6b2493209b67",
".git/FETCH_HEAD": "352e6d09046564e9f9219cfaa7c54f52",
"assets/AssetManifest.json": "ceb3163357dcbaa53950b00b89fb807f",
"assets/NOTICES": "f4c5c543b3cea0bfe641a6870d0f7922",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/icon.png": "bc64058b37896ab27ebfb9735803307b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
