'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "103fb4a95d9c87c6d883a6496f272c14",
"UnityLibrary/index.html": "2c79a32d03fe02d5d458376a25b29c44",
"UnityLibrary/TemplateData/MemoryProfiler.png": "90178b1c01bd4c66a21b9f2866091783",
"UnityLibrary/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"UnityLibrary/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"UnityLibrary/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"UnityLibrary/TemplateData/webmemd-icon.png": "e409a6f1c955c2babb36cd2153d418b5",
"UnityLibrary/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"UnityLibrary/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"UnityLibrary/TemplateData/style.css": "1981b5d803ea85e3a43d1adcb046b0ad",
"UnityLibrary/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"UnityLibrary/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"UnityLibrary/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"UnityLibrary/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"UnityLibrary/Build/UnityLibrary.data": "2deaaabcc59a048ff3fca9b8e4925f02",
"UnityLibrary/Build/UnityLibrary.wasm": "cec6a2ea129d1d9171c015859b220d16",
"UnityLibrary/Build/UnityLibrary.loader.js": "bb0d9ecdb05db3e84da20bd14a4f84dc",
"UnityLibrary/Build/UnityLibrary.framework.js": "821fee03a648a1775440353559819928",
"version.json": "6e5c8d4ee29eaddb6d0eb2214a6b39b7",
"index.html": "d149e3e6a312a2d9698ee998ec867d1b",
"/": "d149e3e6a312a2d9698ee998ec867d1b",
"main.dart.js": "a041fe9f31a01ed13db7842a47369145",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e41056907d0a480f090181bac41d16d7",
"assets/AssetManifest.json": "5e0ed21b44120016715a22b1be4c0c7e",
"assets/NOTICES": "9e8bd42a13abc305ae3e0d03b363dc23",
"assets/FontManifest.json": "5e79a7154a9c0743680ad7fe9f7d50c5",
"assets/AssetManifest.bin.json": "6d8f1d3cd195341ac32c41cf825a3d39",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fda0cb0b5ea12a0a2d6e448fdb189596",
"assets/fonts/MaterialIcons-Regular.otf": "7f2fb405c1b10d60b7a6d1720f9938e0",
"assets/assets/riv/voice_assistant_animation.riv": "9cc675576d523f35ecb340a20552cad0",
"assets/assets/images/selection_copy.svg": "3736a4e1ac73c0c4ec67b7db9a3e3b29",
"assets/assets/images/selection_collect.svg": "4a71383fcee6f3d9d4fb7a756786580f",
"assets/assets/images/loading_remixed.riv": "b8811949064b53fed43c92aeb2c9949a",
"assets/assets/images/btn_keyboard.svg": "a413cf6fc0c3abff4cc8813a308453af",
"assets/assets/images/page_wudingdan.png": "aace4eb4aa072325d3b824c3d4072d1c",
"assets/assets/images/vector.svg": "4c20e74315370e106cafba1098b132f7",
"assets/assets/images/img_chat_head.png": "93372597ce4588b6fa09f19654c197b7",
"assets/assets/images/btn_chat_scale.svg": "d0a7fa2a843b0296a2e8188815de7e55",
"assets/assets/images/voice_play.svg": "1da6f777f29296b98e73312b03e4c4b5",
"assets/assets/images/extendBtn.svg": "80fcd1287dc7d7ee5c897b8691f298a4",
"assets/assets/images/btn_add.svg": "a5b94d4c21db079bd8290754b3a3f2e3",
"assets/assets/images/btn_bottom_save.svg": "4c7ebc209bbf7ee554868a464f34062e",
"assets/assets/images/selection_share.svg": "f51e042aacbb442d711b4d5d71623771",
"assets/assets/images/btn_send_back.svg": "34c1a6ff5ed1a6e243209560ca6d71db",
"assets/assets/images/btn_voice_open.svg": "98589c4f73e0d6ff8ceb77a705a1d331",
"assets/assets/images/voice_begin_recording.png": "4efeb80eadbe3b049c3e51917661a233",
"assets/assets/images/voice.svg": "9a02b6f38f0c9629d4a686253d71c77b",
"assets/assets/images/btn_chat_stop.svg": "a6ff22709b50890352b4e1eebc292c8d",
"assets/assets/images/btn_voice.svg": "d38af2c39f40bcc2a141c752d3763452",
"assets/assets/images/btn_send_top.svg": "abd9ef13164357fb82e4dbffcee3a06e",
"assets/assets/images/btn_send_unavailable.svg": "6c5a1b48bec1be777390612a8ded482c",
"assets/assets/images/btn_chat_close.svg": "7d11fc317cf76e21322a1d34cc14419d",
"assets/assets/images/btn_chat_voice_open.svg": "a05fbec702ebb526d467b7fbea3e309f",
"assets/assets/images/btn_bottom_phone.svg": "8eb8b3ee2d8683d14791edb929614341",
"assets/assets/images/btn_chat_resume.svg": "3adb733c987bf0a501d2d4fd7516ae38",
"assets/assets/images/btn_voice_close.svg": "9a02b6f38f0c9629d4a686253d71c77b",
"assets/assets/images/btn_send.svg": "dc488ae51e3ec1b5d09993b003895160",
"assets/assets/images/voice_record.png": "9faa726b9503d9e6c17bc5b5d3a9729a",
"assets/assets/images/btn_chat_voice.png": "1afbcdfd1e674f5aadc700bdbebce86f",
"assets/assets/images/menu.svg": "2ec9f0829e70e1ebc2ad93c9a51a745e",
"assets/assets/images/selection_all.svg": "de80f12156366be864e37d31a1c94a11",
"assets/assets/images/bg.png": "ed1511acb57510daa957aaf25177f683",
"assets/assets/images/btn_chat_voice_close.svg": "43d49ee6ba78c8fbab4f8bfa550d0e08",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
