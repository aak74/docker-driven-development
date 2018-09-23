/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "df35ac0197c177b753a1c072a6990f36"
  },
  {
    "url": "assets/css/1.styles.babd7481.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.1bc76466.css",
    "revision": "6600e995de39af4887367399ace93a4a"
  },
  {
    "url": "assets/css/styles.160ab6e4.css",
    "revision": "b554a7d4be03fe50af9eff699a744567"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.babd7481.js",
    "revision": "87b26c931f15723340e79b7706f16a71"
  },
  {
    "url": "assets/js/10.507cd805.js",
    "revision": "6e4d9759c022313abb52f07f81878725"
  },
  {
    "url": "assets/js/11.5b977379.js",
    "revision": "01c576c97ec84eb9d948f2155ef8349f"
  },
  {
    "url": "assets/js/12.e34004d5.js",
    "revision": "ab3496e110d4aa0503996f696d7f3fe4"
  },
  {
    "url": "assets/js/13.e6527ed4.js",
    "revision": "d9b0b808e0fa0384d221c0c6d7834748"
  },
  {
    "url": "assets/js/14.c1ca858d.js",
    "revision": "8f9827d041475c281dd809cc2e1ee66f"
  },
  {
    "url": "assets/js/15.e075a09a.js",
    "revision": "2ba3dbae9d15487fdfe33c0e01ae7f34"
  },
  {
    "url": "assets/js/16.03d5fdc0.js",
    "revision": "a05c20ec9651b1ac5674ef5b233bee5d"
  },
  {
    "url": "assets/js/17.6eedae71.js",
    "revision": "074bfb68d354953b7dbc3cafdcfd25db"
  },
  {
    "url": "assets/js/18.b391c345.js",
    "revision": "87f70a7917a90c6efed1441d3e77ff65"
  },
  {
    "url": "assets/js/19.701c4214.js",
    "revision": "e083b13a961722476e1e8a83935db1a9"
  },
  {
    "url": "assets/js/2.1bc76466.js",
    "revision": "fa2cb8557bf13439901f079a58ffb485"
  },
  {
    "url": "assets/js/20.b7806461.js",
    "revision": "4ef77a5bf85bd14a25e456dc4299625f"
  },
  {
    "url": "assets/js/21.7e6357ab.js",
    "revision": "5c107815731524a6138b4083ecf77c43"
  },
  {
    "url": "assets/js/22.66d8a85c.js",
    "revision": "14e7305f7cd5f82b9659cdf1f08d4103"
  },
  {
    "url": "assets/js/23.25bb53a7.js",
    "revision": "297d2d98fb9fcbe3905f703ca69a6192"
  },
  {
    "url": "assets/js/3.a44f7e52.js",
    "revision": "633f06a7de3887ff55a161f9a08ddfab"
  },
  {
    "url": "assets/js/4.2a240cef.js",
    "revision": "faf1baecbd6e2667129cd792777888df"
  },
  {
    "url": "assets/js/5.3e6a4876.js",
    "revision": "b288f15d43010a4013a96babe2dc2eec"
  },
  {
    "url": "assets/js/6.1d3892a7.js",
    "revision": "af3116d5baf04844db5d7e05a9cf6ad0"
  },
  {
    "url": "assets/js/7.1ccb3dcf.js",
    "revision": "f5ff3d8fa74004bad6362ba2e24f3ed5"
  },
  {
    "url": "assets/js/8.ba7dd04a.js",
    "revision": "2dea629e235a6931ce9f538966cdb0b1"
  },
  {
    "url": "assets/js/9.cfb16597.js",
    "revision": "cb8f5ddbb98902b4bee21ccb600964a4"
  },
  {
    "url": "assets/js/app.160ab6e4.js",
    "revision": "8c0380b68663462c6dbd2eedbea3786f"
  },
  {
    "url": "examples/ex0/index.html",
    "revision": "e74825edb657dd82ebd16f4293d64c7e"
  },
  {
    "url": "examples/ex10/index.html",
    "revision": "069c641f5f0abfefb231b2f17c249a79"
  },
  {
    "url": "examples/ex11/index.html",
    "revision": "d2b12e17287b021494d5978397f1e07c"
  },
  {
    "url": "examples/ex12/index.html",
    "revision": "e0141deb3bc1febd5385995aeb4397c1"
  },
  {
    "url": "examples/ex13/index.html",
    "revision": "c405e5dbb0e1b82fd3e2e678c59fc467"
  },
  {
    "url": "examples/ex14/index.html",
    "revision": "f0902ed6ffe76f3fcd8d44dd81f395ca"
  },
  {
    "url": "examples/ex2/index.html",
    "revision": "28830ac7dba0e17b907b92c7fd296983"
  },
  {
    "url": "examples/ex20/index.html",
    "revision": "722d538075b8a52bbda2aea6e0a3e186"
  },
  {
    "url": "examples/ex3/index.html",
    "revision": "2bfbf8081b5855e9d192514b11348dae"
  },
  {
    "url": "examples/ex5/index.html",
    "revision": "121967d061298952505878c0c4b7e940"
  },
  {
    "url": "examples/ex7/index.html",
    "revision": "5d4e3324a5f38e02295b13754c20011b"
  },
  {
    "url": "examples/ex8/index.html",
    "revision": "b0637d8cc5fc1136730f9d485c876e7f"
  },
  {
    "url": "examples/ex9/index.html",
    "revision": "1b584e52a59f1f774f89646a91ad8e02"
  },
  {
    "url": "examples/index.html",
    "revision": "0450ed8d793fd6aae605c1d52f3fba4a"
  },
  {
    "url": "extra/index.html",
    "revision": "83d6ae9f7c938d3c482b44a625ddefb5"
  },
  {
    "url": "history/index.html",
    "revision": "0807d1d66bd271dfe450009862158099"
  },
  {
    "url": "how-to-install/index.html",
    "revision": "be2a7196fcfaad271f8d2aad8e18c458"
  },
  {
    "url": "index.html",
    "revision": "432d674390088c426ff4022b6f486fb2"
  },
  {
    "url": "summary/index.html",
    "revision": "08445c31df5aa58d272322f10a6590c6"
  },
  {
    "url": "weaknesses/index.html",
    "revision": "d27d643207f60671d5a4ecba0f92fcb4"
  },
  {
    "url": "what-to-do/index.html",
    "revision": "bdd4376afc421d34f54a919dcf1bfbff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
