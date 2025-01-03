'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a54e07dc9c1341234fdac79990c2af1f",
"version.json": "ebd53082ea33bda07fdaf67b9cb5ee9c",
"index.html": "565116e98c409ce183e16c0113e6ef9f",
"/": "565116e98c409ce183e16c0113e6ef9f",
"main.dart.js": "1e33e3299edf6ac836dcd2afe4d734d0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "a31ce20c2f8accb48c84f9c9b20eb31c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb136953a979a27667082c1c28e24d87",
".git/config": "441bfdd765465c95fc5e561bb2b34f35",
".git/objects/95/a0ba2a000d41600ded0e87174793886372842d": "83f3b1dc2e0be48e8df1b9b8432db00a",
".git/objects/0c/85dd72fb87cccbdae7c37c3a7e61fad8dc4faa": "8a06909a91115ee87e38e0337f590f61",
".git/objects/3e/b637fc20794a913904f5034ada344021fd6155": "f384852da93c449ebb282754f7c8ec38",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/9c76d3b2b231164ca6f266b6fa9622fbda23e0": "f171c0e176834e43cb3b7eae3f1d7be1",
".git/objects/3b/15af12589e73605ddc085ccbd2395ef409f6c9": "b06c20370b22e84297bc2d2db1409250",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/56/738338668712d631fda76fc7b7c1eaa9d1dc3c": "caa58969e166189d33ea1deeb08e13ef",
".git/objects/3d/df6ba2a2be434ffe22b0e0cfe8b8857f71ffa8": "71b9d4807d61bf4b8ad16d156f99f55d",
".git/objects/58/ce1d78550a9d93ff78dc01c33718c195236f78": "e693c2e3beb00bde1b163a41721297ca",
".git/objects/94/21e3ab5996621c7dbe2bd216a0df3cfadc215b": "ab216b48eea0d5851205e6a0445e42d1",
".git/objects/33/5ecc2ef332c4234b9e266b3f79b62db58f5378": "3c18d2dec9336fde32fc35ad1eafc93e",
".git/objects/a4/0ea984bcf88816c28f56d10bc9bdda0518e775": "b90927bc744bc29dedc715d58e8fcc12",
".git/objects/ad/2e74e18c98c7d15207e8363159a7a1e6cd39db": "2f2027e6d71f0f43ce7a0d2dfb54835f",
".git/objects/d7/8e18dba5efa3f607346bc2f93dfa258dd4a545": "a70d4b7839929e1223d0e71d5f99a53d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/4b623d5e83c7701d5c16237eddb0675b663f19": "39ebbc71aed628878c7e3dfdcf94f936",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/58b9182d78200339cc74db7d54f1a5a9579f9d": "1e636784976f473394cfe1b36a4bea8d",
".git/objects/a2/4853f94878341797fe4e22e560467cc92df303": "466af62ccdc9d291fc9a3a65268a34db",
".git/objects/a2/2cc90665738a8ef503f0eb271f3f2cdb4ebeeb": "7fc030f6089eb395bf51534ad377354b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/54577e68739d6def782082eca332c723892919": "595fc18463aa1847cc6ca4fb728c1439",
".git/objects/d8/aaa6c0ced03a90424a06c3a29d7dc369a7daee": "019292801dac9823556b7560853bae5a",
".git/objects/e2/b3d4d7aceeab48c32027b6cdfcd579895fc478": "da87a3ee983e1eb0f5a9135946575e85",
".git/objects/e2/8ace0519d75634651e1065ecc0a937a22b5d90": "5354ae1ad0871707e9b19f8d150f2745",
".git/objects/f3/1f10d722a27b0c1432ca45a6290e9503626202": "7af5b704f17407ee1f4e0799c15067a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/c8a9f8c70f44043b4ecb451f51bdde948fb07b": "d6956035115a2ae995987e48522c99e1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/4e/1f98d005713a6ba3c9f2cae8f26c46d75b31d8": "4b5a4a3a4ee9dfd456e0eb3a506906fa",
".git/objects/20/1f3c42ee4e2a10f9c574ae0e363f35bd35e018": "b2f4fe8053d05163e6e90ae81aa1b471",
".git/objects/20/964f7695dd39b75b780c1bfe51b98b3b7f21b7": "7889ab2a8b33f81f2dad6b3f05a2e9a1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/8a8eb3a025465c21c91156952ec23e5614bf55": "f2d49bb9ede240ac9b2f1252eb2f7de9",
".git/objects/74/86865f91e3bde12ccc2a3ebc804cef2e67e6f7": "4ddf41d70e85084b3f32957ed78275f3",
".git/objects/28/729fd3e8e95d9bf8b09de2c2c0fc8efbb19aa6": "f21fa17bf638ab11ea71d694e6c0d99d",
".git/objects/8f/8b75e790180db3dea0d9c58b40913599bd9472": "da531b76f24dcdac54efab163b3ec324",
".git/objects/7e/9f82435b3ffab8e18b1907c4847db1b7c9f644": "84880a43b00e89381b19dc7e37e60a7b",
".git/objects/7e/d4eb5d87aa56e8fab31a4132a62e9fc3562244": "7bb7767833d0e896fabd7ee084e09e2b",
".git/objects/10/46bf0ceaef90449d46e78ead91d09ed36892ff": "727273a5478bdf3fbeeefd4256dafec8",
".git/objects/10/29626424608afd99d8423cbf74fde26e65560c": "58477201b343ccf19d747440892132fc",
".git/objects/19/ad2d4a86603084d51261f50dd18557ee6fa3f4": "38a81c87181fe47cda1fb310aff9cba0",
".git/objects/21/716fd1c52d7cfd07e58a3f84d7aff8c738f3d5": "4f45821feb3a73c7eaf06bcd374871be",
".git/objects/75/fbe5d3ab348f72d8550c9740fb0c1d09f9fdb6": "cb070eb0ceb7dc4b9f3e9296af3567c6",
".git/objects/81/7b37cc9d74207a96b30558b8ff4b1b61f46a36": "4e116c2672fdd2b6a1413131776719ca",
".git/objects/72/a4970c669be3e9923e3611ee7d22f60755b913": "c6bc40e2c7b6d71d1c49ed2932846bd5",
".git/objects/44/e39c4fd28c85fff63446966688e4951860a114": "6e917173edbfd9c21696ce2dc9e77670",
".git/objects/44/efc0a39b0cf046512f97ebd2802bd32bcffff4": "faf68f495bf099b032243a721725bb85",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/b49e15d0aab0e01955d2b855cf55e487679478": "4bb1e853f9ae3a312986beefe5a969aa",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/6cf3462e14247d0c30b5a2fc34d28d77d90560": "fa1d3b9258dc049fd412d5b900c8e28c",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/ae8db4f74aae1232f1c8379a2b962b58eba6c0": "e270a313ff2f7c7e4dcacfada49d541f",
".git/objects/6c/f731b4562712b9fa3e4996321393a2fc1fcf10": "fc9c8659410177113eb253555cc8ba29",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f1c26fd99187000a410bce3965773b0137a2b0": "43e7d82818778ce81163567630e3817d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/89de73af1d3d0930c99813bb0076e6b82a452e": "389fa29e89ac896c44672b20aa0a481e",
".git/objects/f0/2a01f6297a1d6b78239856f4c0b8be44b5338f": "d038f2ebc1ea0dd119d27367d2b0f1de",
".git/objects/ff/de88822eb7e80a8b5d521c1c3bc6a3933ce6f0": "249e8fcf4447b099033841ad4af4ea87",
".git/objects/cb/e281eab6597fab5cbd9e1b01f24bcb8f93c9ef": "59e456d2fda1bf9878225811b6b32901",
".git/objects/f8/fbc7ec43050b42d9b7b1c89251441275866f13": "89b7e8d03de2d6743d97771b06a1cf6c",
".git/objects/ce/d999720cf8a624e45bb464336dd841451290e0": "32889edb2c17a3c2f6d52a223f2948c0",
".git/objects/83/045c12401b1cc34ca245a609a0a8967094d190": "8167d6c60ceeb157f3397d75ae84a497",
".git/objects/83/715e97754fe1cf01b77cd41a413a7b68c935c8": "f323d7d66c160d65258739a394e21d7b",
".git/objects/48/a56a24066f8ff066d3588f9d36c248429d4225": "6149137197dddba7db09d59679766347",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8c/89bb8fb3c73008122ff3cf6aa7798589a1056d": "9421ae8805276562b5bb77241e7dc316",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/d990e42a74f6443e1ea09cb8bc837f641fc713": "3efca656f4d19f9e7ac0149b09e9c539",
".git/objects/49/950b036aecb1ae8cb51fe7a761812d0811cc8f": "938dcdfb5df70b4d7eeb958d15a4301e",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/78/07a937a7ed417624cda1c83c289c5ec14813b3": "83a547f79e5ef1a155393671a76eb5b5",
".git/objects/13/5fafd67b7f5f57f1fde539c3e6d43d5f07d03b": "41a57f831384542472b72f203cb2c1bc",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0cd0fe9316d57cf91898653996701ec6",
".git/logs/refs/heads/main": "09f6546e8cac843ae0d640f32f1a4fc8",
".git/logs/refs/remotes/origin/main": "1209f4d78a9d7d419c28ec71cf4f2c63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dc9526e708122aa892b2ad10527fa7e3",
".git/refs/remotes/origin/main": "dc9526e708122aa892b2ad10527fa7e3",
".git/index": "1a7c3814dd0ea887397fd6882e33621e",
".git/COMMIT_EDITMSG": "b30c825a737a09cd93489b5172b2735d",
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
