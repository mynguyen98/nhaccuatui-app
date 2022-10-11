// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import nhaccuatui from 'nhaccuatui-api-full';
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
//////////////////////////////////////////////
var _modelJs = require("./model.js");
var _songviewJs = require("./views/songview.js");
var _songviewJsDefault = parcelHelpers.interopDefault(_songviewJs);
// import controlTimeView from './views/controlTimeView.js';
var _controlPlayViewJs = require("./views/controlPlayView.js");
var _controlPlayViewJsDefault = parcelHelpers.interopDefault(_controlPlayViewJs);
var _showCaseViewJs = require("./views/homeView/showCaseView.js");
var _showCaseViewJsDefault = parcelHelpers.interopDefault(_showCaseViewJs);
var _topicEventsViewJs = require("./views/homeView/topicEventsView.js");
var _topicEventsViewJsDefault = parcelHelpers.interopDefault(_topicEventsViewJs);
var _playlistSideViewJs = require("./views/playlistSideView.js");
var _playlistSideViewJsDefault = parcelHelpers.interopDefault(_playlistSideViewJs);
// import controlPlayView from './views/controlPlayView.js';
var _songOnplayViewJs = require("./views/songOnplayView.js");
var _songOnplayViewJsDefault = parcelHelpers.interopDefault(_songOnplayViewJs);
var _newReleaseViewJs = require("./views/homeView/newReleaseView.js");
var _newReleaseViewJsDefault = parcelHelpers.interopDefault(_newReleaseViewJs);
var _rankingViewJs = require("./views/homeView/rankingView.js");
var _rankingViewJsDefault = parcelHelpers.interopDefault(_rankingViewJs);
var _videoViewJs = require("./views/homeView/videoView.js");
var _videoViewJsDefault = parcelHelpers.interopDefault(_videoViewJs);
var _homeSongViewJs = require("./views/homeView/homeSongView.js");
var _homeSongViewJsDefault = parcelHelpers.interopDefault(_homeSongViewJs);
var _hotTopicViewJs = require("./views/homeView/hotTopicView.js");
var _hotTopicViewJsDefault = parcelHelpers.interopDefault(_hotTopicViewJs);
var _topViewJs = require("./views/homeView/topView.js");
var _topViewJsDefault = parcelHelpers.interopDefault(_topViewJs);
var _lyricsViewJs = require("./views/lyricsView.js");
var _lyricsViewJsDefault = parcelHelpers.interopDefault(_lyricsViewJs);
var _waitingSongViewJs = require("./views/waitingSongView.js");
var _waitingSongViewJsDefault = parcelHelpers.interopDefault(_waitingSongViewJs);
var _controlSlideJs = require("./controlSlide.js");
////////////// Search View //////////////////////
var _topKeywordViewJs = require("./views/searchView/topKeywordView.js");
var _topKeywordViewJsDefault = parcelHelpers.interopDefault(_topKeywordViewJs);
var _searchViewJs = require("./views/searchView/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _recommendViewJs = require("./views/searchView/recommendView.js");
var _recommendViewJsDefault = parcelHelpers.interopDefault(_recommendViewJs);
var _resultSongViewJs = require("./views/searchView/resultSongView.js");
var _resultSongViewJsDefault = parcelHelpers.interopDefault(_resultSongViewJs);
var _resultPlaylistViewJs = require("./views/searchView/resultPlaylistView.js");
var _resultPlaylistViewJsDefault = parcelHelpers.interopDefault(_resultPlaylistViewJs);
var _historyViewJs = require("./views/searchView/historyView.js");
var _historyViewJsDefault = parcelHelpers.interopDefault(_historyViewJs);
//////////////////////////////////////////////
/////////////////NAVIGATION////////////////////
var _navViewJs = require("./views/navView.js");
var _navViewJsDefault = parcelHelpers.interopDefault(_navViewJs);
/////////////////LOVE SONG ///////////////////
var _loveSongViewJs = require("./views/loveSongView.js");
var _loveSongViewJsDefault = parcelHelpers.interopDefault(_loveSongViewJs);
var _loveSongListViewJs = require("./views/nhaccuatuiView/loveSongListView.js");
var _loveSongListViewJsDefault = parcelHelpers.interopDefault(_loveSongListViewJs);
var _toastMessageViewJs = require("./views/toastMessageView.js");
var _toastMessageViewJsDefault = parcelHelpers.interopDefault(_toastMessageViewJs);
// let currentIndex = 0;
function selectAudio() {
    return document.querySelector("audio");
}
const nextSongEl = document.querySelector(".next-song");
const prevSongEl = document.querySelector(".prev-song");
const randomSongEl = document.querySelector(".random");
const loopEl = document.querySelector(".loop-song");
const audioEl = document.querySelector("audio");
const btnPause = document.querySelector(".pause-song");
const volumnIcon = document.querySelector(".volumn-icon-wrapper");
const wellComeEl = document.querySelector(".well-come-to-play");
const playlistWaiting = document.querySelector(".playlist-waiting");
const controlSong = async function(key) {
    try {
        // 1 Load Song
        await _modelJs.loadSong(key);
        (0, _controlPlayViewJsDefault.default).controlModalSong(_modelJs.state.song.streamUrl);
        if (!_modelJs.state.song.streamUrl) return;
        // 2 renderSong to left sidebar
        (0, _songOnplayViewJsDefault.default).render(_modelJs.state.song);
        (0, _songviewJsDefault.default).render(_modelJs.state.song);
        // controlTimeView.render(model.state.song);
        // 3 control song
        const audio = selectAudio();
        (0, _controlPlayViewJsDefault.default).autoPlay(audio);
        (0, _controlPlayViewJsDefault.default).addHandlerEvent(audio);
        (0, _controlPlayViewJsDefault.default).addHandlerSong(audio);
        (0, _playlistSideViewJsDefault.default).removeWellCome();
    } catch (err) {
        throw err;
    }
};
controlLyric = async function(key) {
    try {
        await _modelJs.loadLyric(key);
        // render the lyrics and display to the overview
        (0, _lyricsViewJsDefault.default).render(_modelJs.state.lyric);
    } catch (err) {
        throw err;
    }
};
const controlHome = async function() {
    try {
        // 1 Load Home
        await _modelJs.loadHome();
        // await model.loadLyric('9OYtk1NPKMrE');
        // console.log(model.state.lyric);
        // 2 render content
        (0, _showCaseViewJsDefault.default).render(_modelJs.state.home);
        (0, _topicEventsViewJsDefault.default).render(_modelJs.state.home);
        (0, _newReleaseViewJsDefault.default).render(_modelJs.state.home.newRelease.song);
        // render top 100
        (0, _topViewJsDefault.default).render(_modelJs.state.home.top100);
        // 3 add control for home
        _controlSlideJs.controlSlide();
        // controlSlickSlide.controlSlider.initSlider();
        _controlSlideJs.slickSlider();
        (0, _newReleaseViewJsDefault.default).addHandlerActiveContent();
        // ranking List
        // 4 load ranking song
        await _modelJs.loadRankingList();
        (0, _rankingViewJsDefault.default).render(_modelJs.state.home.rankingList);
        (0, _rankingViewJsDefault.default).handlerMouseOverEvent();
        // 5 Control playlist View
        (0, _controlPlayViewJsDefault.default).addHanderClickPlayevent(controlPlaylist);
        // load song
        await _modelJs.loadHomeSong(_modelJs.state.home.song);
        (0, _homeSongViewJsDefault.default).render(_modelJs.state.home.songsHome);
        controlPlayList.clickToSong("song-home-item-content", "main");
        controlPlayList.clickToSong("new-song-item", "main");
        (0, _lyricsViewJsDefault.default).addHandlerClickShowLyric(controlLyric, ".song-list-item-home");
        (0, _controlPlayViewJsDefault.default).addHandlerDownloadSong(controlDownSong, ".song-list-item-home");
        (0, _loveSongViewJsDefault.default).addHandlerAddLoveSong(_modelJs.addToLoveSong, ".song-list-item-home");
        // load video view
        (0, _videoViewJsDefault.default).render(_modelJs.state.home.video);
        // render hot topic
        (0, _hotTopicViewJsDefault.default).render(_modelJs.state.home.topic);
    } catch (err) {
        throw err;
    }
};
// const addHanderClickPlayevent = async handler => {
//   let playEvents = document.querySelectorAll('.home-play-btn');
//   let key;
//   console.log(playEvents);
//   playEvents.forEach(playEvent => {
//     playEvent.addEventListener('click', e => {
//       const item = e.target.closest('.spot-item-container');
//       if (!item) return;
//       key = item.id;
//       console.log(key);
//       // this.addHandlerActiveSpotItem(item);
//     });
//   });
//   let legnthList = await handler(key);
// };
const controlPlayList = {
    currentIndex: 0,
    currentWaiting: 0,
    isPlaying: false,
    isRandom: _modelJs.state.config.isRandom,
    isRepeat: _modelJs.state.config.isRepeat,
    isLoopList: _modelJs.state.config.isLoopList,
    numSongWaiting: 0,
    prevSong () {
        this.currentIndex--;
        if (this.currentIndex < 0) this.currentIndex = _modelJs.state.sidePlaylist.songs.length - 1;
        this.loadCurrentSong();
    },
    nextSong () {
        this.currentIndex++;
        if (this.currentIndex >= _modelJs.state.sidePlaylist.songs.length) this.currentIndex = 0;
        this.loadCurrentSong();
    },
    autoPlayAList () {
        this.currentIndex++;
        if (this.currentIndex < _modelJs.state.sidePlaylist.songs.length) this.loadCurrentSong();
        else btnPause.click();
    },
    resetConfig () {
        this.currentIndex = 0;
    },
    randomSong () {
        let randomNum;
        randomNum = Math.floor(Math.random() * _modelJs.state.sidePlaylist.songs.length);
        this.currentIndex = randomNum;
        this.loadCurrentSong();
    },
    repeatSong () {
        // this.currentIndex = this.currentIndex;
        // this.loadCurrentSong();
        const audio = selectAudio();
        audio.load();
        audio.play();
    },
    ////////////////////Handler for playlist side left ///////////////////
    clickToSong (classEl, locate) {
        let songListEl = document.querySelectorAll(`.${classEl}`);
        // playlist song-item-content
        // home song-home-item-content
        songListEl.forEach((song)=>{
            song.addEventListener("click", (e)=>{
                if (e.target.className !== "icon-more-option" && e.target.className !== "fa-solid fa-ellipsis-vertical") {
                    let itemEl = e.target.closest(".song-list-item--data");
                    if (locate === "side-play") {
                        let order = +itemEl.dataset.order;
                        this.currentIndex = order;
                        this.loadCurrentSong();
                    } else if (locate === "main") {
                        let key = itemEl.id;
                        controlSong(key);
                        this.currentIndex = this.currentIndex;
                        // remove active song
                        let songListEl = document.querySelectorAll(".song-list-item--data");
                        songListEl.forEach((song)=>{
                            song.classList.remove("song-item--active");
                        });
                    }
                }
            });
        });
    },
    addHandlerActiveSong () {
        let songListEl = document.querySelectorAll(".song-list-item--data");
        songListEl.forEach((song)=>{
            song.classList.remove("song-item--active");
        });
        songListEl[this.currentIndex].classList.add("song-item--active");
    },
    controlShowRandom () {
        if (this.isRandom) randomSongEl.classList.add("random-active");
        else randomSongEl.classList.remove("random-active");
    },
    showLoop () {
        if (this.isRepeat === false && this.isLoopList === false) {
            loopEl.classList.remove("loop-1-song");
            loopEl.classList.remove("loop-alist-song");
        } else if (this.isRepeat === false && this.isLoopList === true) {
            loopEl.classList.add("loop-alist-song");
            loopEl.classList.remove("loop-1-song");
        } else if (this.isRepeat === true && this.isLoopList === false) {
            loopEl.classList.add("loop-1-song");
            loopEl.classList.remove("loop-alist-song");
        }
    },
    controlshowLoop () {
        const audio = selectAudio();
        if (this.isRepeat === false && this.isLoopList === false) {
            loopEl.classList.add("loop-alist-song");
            this.isLoopList = true;
        } else if (this.isRepeat === false && this.isLoopList === true) {
            loopEl.classList.add("loop-1-song");
            loopEl.classList.remove("loop-alist-song");
            this.isRepeat = true;
            this.isLoopList = false;
        } else if (this.isRepeat === true && this.isLoopList === false) {
            loopEl.classList.remove("loop-1-song");
            loopEl.classList.remove("loop-alist-song");
            this.isRepeat = false;
        }
        audio.loop = this.isRepeat;
    },
    initConfig () {
        this.showLoop();
        this.controlShowRandom();
        if (_modelJs.state.config.isFirstTime) {
            (0, _playlistSideViewJsDefault.default).addHandlerShowWellCome();
            _modelJs.state.config.isFirstTime = false;
            _modelJs.persisIsFirstTime();
        }
        controlPlaylist(_modelJs.state.config.currentPlaylistKey, false, false);
        controlSong(_modelJs.state.config.currentSongKey);
    },
    // /////////////////HANDLER EVENT GLOBAL //////////////////////
    handleEvents () {
        _this = this;
        nextSongEl.addEventListener("click", ()=>{
            if (_this.isRandom === true && _this.isRepeat === false) _this.randomSong();
            if (_this.isRepeat === true) _this.repeatSong();
            else _this.nextSong();
        });
        prevSongEl.addEventListener("click", ()=>{
            if (_this.isRandom === true && _this.isRepeat === false) _this.randomSong();
            if (_this.isRepeat === true) _this.repeatSong();
            else _this.prevSong();
        });
        randomSongEl.addEventListener("click", ()=>{
            _this.isRandom = !_this.isRandom;
            _this.controlShowRandom();
            _modelJs.state.config.isRandom = _this.isRandom;
            _modelJs.persisRandom();
        });
        loopEl.addEventListener("click", ()=>{
            _this.controlshowLoop();
            _modelJs.state.config.isRepeat = _this.isRepeat;
            _modelJs.state.config.isLoopList = _this.isLoopList;
            _modelJs.persisLoopList();
            _modelJs.persisLoopSong();
        });
        // audioEl.addEventListener('loadedmetadata', () => {
        audioEl.addEventListener("ended", ()=>{
            if (_this.isRepeat === true) _this.repeatSong();
            else if (_this.isRandom === true) _this.randomSong();
            else if (_this.isLoopList === true) _this.nextSong();
            else _this.autoPlayAList();
        });
        // });
        // ///////////// HANDLER GLOABAL song options///////////////////////
        window.addEventListener("click", (e)=>{
            const songOptions = document.querySelectorAll(".song-options");
            if (e.target.className === "icon-more-option" || e.target.className === "fa-solid fa-ellipsis-vertical") {
                const songOption = e.target.closest(".song-list-item").querySelector(".song-options");
                if (songOption.classList.contains("hidden")) {
                    songOptions.forEach((songOption)=>{
                        songOption.classList.add("hidden");
                    });
                    songOption.classList.remove("hidden");
                    return;
                }
                if (!songOption.classList.contains("hidden")) songOption.classList.add("hidden");
            } else songOptions.forEach((songOption)=>{
                songOption.classList.add("hidden");
            });
        });
    },
    loadCurrentSong () {
        let key = _modelJs.state.sidePlaylist.songs[this.currentIndex].key;
        controlSong(key);
        this.addHandlerActiveSong();
    }
};
const controlSidePlaylist = function(playFirstSong) {
    (0, _playlistSideViewJsDefault.default).render(_modelJs.state.sidePlaylist);
    // 3 handler playlist
    // playlistSideView.addHandlerPlayFirstSong(controlSong);
    if (playFirstSong) (0, _playlistSideViewJsDefault.default).addHandlerPlayFirstSong(controlSong);
    (0, _lyricsViewJsDefault.default).addHandlerClickShowLyric(controlLyric, ".song-list-item-leftside");
    (0, _controlPlayViewJsDefault.default).addHandlerDownloadSong(controlDownSong, ".song-list-item-leftside");
    (0, _loveSongViewJsDefault.default).addHandlerAddLoveSong(_modelJs.addToLoveSong, ".song-list-item-leftside");
    controlPlayList.resetConfig();
    controlPlayList.clickToSong("song-playlist-item", "side-play");
};
const controlPlaylist = async function(playlistKey, item, playFirstSong = true) {
    try {
        // 1 Load playlist
        await _modelJs.loadPlaylist(playlistKey);
        if (item) (0, _controlPlayViewJsDefault.default).controlModal(_modelJs.state.sidePlaylist.lengthSongs, item);
        // addHandlerActiveSpotItem(model.state.sidePlaylist.lengthSongs);
        if (!_modelJs.state.sidePlaylist.lengthSongs) return;
        controlSidePlaylist(playFirstSong);
    } catch (err) {
        throw err;
    }
};
// /////////////////////CONTROL SEARCH //////////////////////
const controlSearchResult = async function(keyword) {
    try {
        // let keyword = searchView.getQuery();
        // if (!keyword) return;
        let isPlank = await _modelJs.loadSearchKeyword(keyword);
        if (isPlank) return;
        // handler show result
        (0, _searchViewJsDefault.default).addHandlerShowResult();
        (0, _recommendViewJsDefault.default).renderClearFirst(_modelJs.state.searchData.recommend);
        (0, _resultSongViewJsDefault.default).renderClearFirst(_modelJs.state.searchData.song);
        (0, _resultPlaylistViewJsDefault.default).renderClearFirst(_modelJs.state.searchData.playlist);
        // add handler for song and playlist
        (0, _controlPlayViewJsDefault.default).addHanderClickPlayevent(controlPlaylist);
        controlPlayList.clickToSong("recommend-song", "main");
        controlPlayList.clickToSong("song-item-content", "main");
        (0, _lyricsViewJsDefault.default).addHandlerClickShowLyric(controlLyric, ".song-list-item-home");
        (0, _controlPlayViewJsDefault.default).addHandlerDownloadSong(controlDownSong, ".song-list-item-home");
        (0, _loveSongViewJsDefault.default).addHandlerAddLoveSong(_modelJs.addToLoveSong, ".song-list-item-home");
        // add to history search
        _modelJs.addToHistorySearch(keyword);
    } catch (err) {
        throw err;
    }
};
//control the initial render when click to tab view
const controlSearchTab = async function() {
    try {
        await _modelJs.loadTopKeyword();
        (0, _topKeywordViewJsDefault.default).render(_modelJs.state.topKeyWord);
        (0, _historyViewJsDefault.default).render(_modelJs.state.clouds.searchHistory);
        (0, _searchViewJsDefault.default).addHandlerClickToTopSearch(controlSearchResult);
        (0, _historyViewJsDefault.default).addHanlerRemoveOneHistory(_modelJs.removeOneHistorySearch);
        (0, _historyViewJsDefault.default).addHanlerRemoveAllHistory(_modelJs.removeAllHistorySearch);
    } catch (err) {
        throw err;
    }
};
const controlDownSong = async function(key) {
    try {
        const streamUrl = await _modelJs.getLinkSong(key);
        if (!streamUrl) {
            (0, _toastMessageViewJsDefault.default).displayToast("B\xe0i h\xe1t hiện chưa c\xf3 sẵn để tải về");
            return;
        }
        window.open(streamUrl);
    } catch (err) {
        throw err;
    }
};
const initSearch = ()=>{
    controlSearchTab();
    (0, _searchViewJsDefault.default).initShowFirst();
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResult);
};
const initHome = ()=>{
    controlHome();
};
const initGlobal = function() {
    controlPlayList.initConfig();
    controlPlayList.handleEvents();
    (0, _controlPlayViewJsDefault.default).addHanderClickModal();
    (0, _lyricsViewJsDefault.default).addHanderClickLyricModal();
    (0, _controlPlayViewJsDefault.default).addHandlerShowPlayList();
};
// initGlobal();
// initHome();
const initLoveSong = async function() {
    (0, _loveSongListViewJsDefault.default).render(_modelJs.state.loveSongs);
    controlPlayList.clickToSong("song-item-content", "main");
    (0, _lyricsViewJsDefault.default).addHandlerClickShowLyric(controlLyric, ".love-song-list-item");
    (0, _controlPlayViewJsDefault.default).addHandlerDownloadSong(controlDownSong, ".love-song-list-item");
    (0, _loveSongListViewJsDefault.default).addHandlerplayAllList(_modelJs.state.sidePlaylist, _modelJs.state.loveSongs, controlSidePlaylist);
    (0, _loveSongListViewJsDefault.default).addHandlerDeleteSong(_modelJs.removeLoveSong);
};
const controlNav = function() {
    (0, _navViewJsDefault.default).addHandlerNavigation(initHome, initSearch, initLoveSong);
};
initHome();
controlNav();
initGlobal();

},{"core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","./model.js":"Y4A21","./views/songview.js":"boDTA","./views/controlPlayView.js":"byYSU","./views/homeView/showCaseView.js":"gc6H5","./views/homeView/topicEventsView.js":"bokN1","./views/playlistSideView.js":"2GV6u","./views/songOnplayView.js":"64ACV","./views/homeView/newReleaseView.js":"9m4T9","./views/homeView/rankingView.js":"YN9U0","./views/homeView/videoView.js":"etImA","./views/homeView/homeSongView.js":"aKV33","./views/homeView/hotTopicView.js":"6UTeq","./views/homeView/topView.js":"jJP9x","./views/lyricsView.js":"2twQW","./views/waitingSongView.js":"2cgvm","./controlSlide.js":"e1huP","./views/searchView/topKeywordView.js":"6kJkE","./views/searchView/searchView.js":"2uhv5","./views/searchView/recommendView.js":"9MY7T","./views/searchView/resultSongView.js":"889hu","./views/searchView/resultPlaylistView.js":"3e0zU","./views/searchView/historyView.js":"bYSrc","./views/navView.js":"82Kie","./views/loveSongView.js":"fKNDs","./views/nhaccuatuiView/loveSongListView.js":"7EZIG","./views/toastMessageView.js":"bSz4f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("../modules/web.clear-immediate");
require("../modules/web.set-immediate");

},{"../modules/web.clear-immediate":"fOGFr","../modules/web.set-immediate":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var clearImmediate = require("../internals/task").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("../internals/global");
var getOwnPropertyDescriptor = require("../internals/object-get-own-property-descriptor").f;
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var defineBuiltIn = require("../internals/define-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
var copyConstructorProperties = require("../internals/copy-constructor-properties");
var isForced = require("../internals/is-forced");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"i8HOC","../internals/object-get-own-property-descriptor":"lk5NI","../internals/create-non-enumerable-property":"8CL42","../internals/define-built-in":"6XwEX","../internals/define-global-property":"ggjnO","../internals/copy-constructor-properties":"9Z12i","../internals/is-forced":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var call = require("../internals/function-call");
var propertyIsEnumerableModule = require("../internals/object-property-is-enumerable");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
var toIndexedObject = require("../internals/to-indexed-object");
var toPropertyKey = require("../internals/to-property-key");
var hasOwn = require("../internals/has-own-property");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"92ZIi","../internals/function-call":"d7JlP","../internals/object-property-is-enumerable":"7SuiS","../internals/create-property-descriptor":"1lpav","../internals/to-indexed-object":"jLWwQ","../internals/to-property-key":"5XWKd","../internals/has-own-property":"gC2Q5","../internals/ie8-dom-define":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require("../internals/fails");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("../internals/fails");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"../internals/fails":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("../internals/indexed-object");
var requireObjectCoercible = require("../internals/require-object-coercible");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"kPk5h","../internals/require-object-coercible":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var fails = require("../internals/fails");
var classof = require("../internals/classof-raw");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"../internals/function-uncurry-this":"7GlkT","../internals/fails":"hL6D2","../internals/classof-raw":"bdfmm"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);
module.exports = NATIVE_BIND ? function(fn) {
    return fn && uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"i16Dq"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("../internals/is-null-or-undefined");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/is-null-or-undefined":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("../internals/to-primitive");
var isSymbol = require("../internals/is-symbol");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("../internals/function-call");
var isObject = require("../internals/is-object");
var isSymbol = require("../internals/is-symbol");
var getMethod = require("../internals/get-method");
var ordinaryToPrimitive = require("../internals/ordinary-to-primitive");
var wellKnownSymbol = require("../internals/well-known-symbol");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":"d7JlP","../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn","../internals/document-all":"5MHqB"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"../internals/document-all":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var isCallable = require("../internals/is-callable");
var isPrototypeOf = require("../internals/object-is-prototype-of");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":"6ZUSY","../internals/is-callable":"l3Kyn","../internals/object-is-prototype-of":"3jtKQ","../internals/use-symbol-as-uid":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"../internals/symbol-constructor-detection":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("../internals/engine-v8-version");
var fails = require("../internals/fails");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("../internals/global");
var userAgent = require("../internals/engine-user-agent");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"../internals/get-built-in":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("../internals/a-callable");
var isNullOrUndefined = require("../internals/is-null-or-undefined");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir","../internals/is-null-or-undefined":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var tryToString = require("../internals/try-to-string");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("../internals/function-call");
var isCallable = require("../internals/is-callable");
var isObject = require("../internals/is-object");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":"d7JlP","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("../internals/global");
var shared = require("../internals/shared");
var hasOwn = require("../internals/has-own-property");
var uid = require("../internals/uid");
var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has-own-property":"gC2Q5","../internals/uid":"a3SEE","../internals/symbol-constructor-detection":"8KyTD","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("../internals/is-pure");
var store = require("../internals/shared-store");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.25.3",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require("../internals/global");
var defineGlobalProperty = require("../internals/define-global-property");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/define-global-property":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("../internals/global");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toObject = require("../internals/to-object");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/to-object":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("../internals/require-object-coercible");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
var createElement = require("../internals/document-create-element");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var definePropertyModule = require("../internals/object-define-property");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
var V8_PROTOTYPE_DEFINE_BUG = require("../internals/v8-prototype-define-bug");
var anObject = require("../internals/an-object");
var toPropertyKey = require("../internals/to-property-key");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/v8-prototype-define-bug":"ka1Un","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("../internals/is-object");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"../internals/is-object":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var definePropertyModule = require("../internals/object-define-property");
var makeBuiltIn = require("../internals/make-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"../internals/is-callable":"l3Kyn","../internals/object-define-property":"iJR4w","../internals/make-built-in":"cTB4k","../internals/define-global-property":"ggjnO"}],"cTB4k":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var DESCRIPTORS = require("../internals/descriptors");
var CONFIGURABLE_FUNCTION_NAME = require("../internals/function-name").CONFIGURABLE;
var inspectSource = require("../internals/inspect-source");
var InternalStateModule = require("../internals/internal-state");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/descriptors":"92ZIi","../internals/function-name":"l6Kgd","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var hasOwn = require("../internals/has-own-property");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has-own-property":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var isCallable = require("../internals/is-callable");
var store = require("../internals/shared-store");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"7GlkT","../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("../internals/weak-map-basic-detection");
var global = require("../internals/global");
var uncurryThis = require("../internals/function-uncurry-this");
var isObject = require("../internals/is-object");
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var hasOwn = require("../internals/has-own-property");
var shared = require("../internals/shared-store");
var sharedKey = require("../internals/shared-key");
var hiddenKeys = require("../internals/hidden-keys");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = uncurryThis(store.get);
    var wmhas = uncurryThis(store.has);
    var wmset = uncurryThis(store.set);
    set = function(it, metadata) {
        if (wmhas(store, it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
    };
    get = function(it) {
        return wmget(store, it) || {};
    };
    has = function(it) {
        return wmhas(store, it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/weak-map-basic-detection":"2PZTl","../internals/global":"i8HOC","../internals/function-uncurry-this":"7GlkT","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has-own-property":"gC2Q5","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
var shared = require("../internals/shared");
var uid = require("../internals/uid");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("../internals/has-own-property");
var ownKeys = require("../internals/own-keys");
var getOwnPropertyDescriptorModule = require("../internals/object-get-own-property-descriptor");
var definePropertyModule = require("../internals/object-define-property");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"gC2Q5","../internals/own-keys":"1CX1A","../internals/object-get-own-property-descriptor":"lk5NI","../internals/object-define-property":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var uncurryThis = require("../internals/function-uncurry-this");
var getOwnPropertyNamesModule = require("../internals/object-get-own-property-names");
var getOwnPropertySymbolsModule = require("../internals/object-get-own-property-symbols");
var anObject = require("../internals/an-object");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6ZUSY","../internals/function-uncurry-this":"7GlkT","../internals/object-get-own-property-names":"fjY04","../internals/object-get-own-property-symbols":"4DWO3","../internals/an-object":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("../internals/object-keys-internal");
var enumBugKeys = require("../internals/enum-bug-keys");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var hasOwn = require("../internals/has-own-property");
var toIndexedObject = require("../internals/to-indexed-object");
var indexOf = require("../internals/array-includes").indexOf;
var hiddenKeys = require("../internals/hidden-keys");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/has-own-property":"gC2Q5","../internals/to-indexed-object":"jLWwQ","../internals/array-includes":"n5IsC","../internals/hidden-keys":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("../internals/to-indexed-object");
var toAbsoluteIndex = require("../internals/to-absolute-index");
var lengthOfArrayLike = require("../internals/length-of-array-like");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"jLWwQ","../internals/to-absolute-index":"5yh27","../internals/length-of-array-like":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("../internals/math-trunc");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("../internals/to-length");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("../internals/global");
var apply = require("../internals/function-apply");
var bind = require("../internals/function-bind-context");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var fails = require("../internals/fails");
var html = require("../internals/html");
var arraySlice = require("../internals/array-slice");
var createElement = require("../internals/document-create-element");
var validateArgumentsLength = require("../internals/validate-arguments-length");
var IS_IOS = require("../internals/engine-is-ios");
var IS_NODE = require("../internals/engine-is-node");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
} catch (error) {}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(post)) {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"i8HOC","../internals/function-apply":"148ka","../internals/function-bind-context":"7vpmS","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/fails":"hL6D2","../internals/html":"2pze4","../internals/array-slice":"RsFXo","../internals/document-create-element":"4bOHl","../internals/validate-arguments-length":"b9O3D","../internals/engine-is-ios":"bzGah","../internals/engine-is-node":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var aCallable = require("../internals/a-callable");
var NATIVE_BIND = require("../internals/function-bind-native");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/a-callable":"gOMir","../internals/function-bind-native":"i16Dq"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("document", "documentElement");

},{"../internals/get-built-in":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("../internals/engine-user-agent");
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require("../internals/classof-raw");
var global = require("../internals/global");
module.exports = classof(global.process) == "process";

},{"../internals/classof-raw":"bdfmm","../internals/global":"i8HOC"}],"l7FDS":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var setImmediate = require("../internals/task").set;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "persisLoopSong", ()=>persisLoopSong);
parcelHelpers.export(exports, "persisLoopList", ()=>persisLoopList);
parcelHelpers.export(exports, "persisRandom", ()=>persisRandom);
parcelHelpers.export(exports, "persisIsFirstTime", ()=>persisIsFirstTime);
parcelHelpers.export(exports, "loadSong", ()=>loadSong);
parcelHelpers.export(exports, "loadLyric", ()=>loadLyric);
parcelHelpers.export(exports, "getLinkSong", ()=>getLinkSong);
parcelHelpers.export(exports, "loadHome", ()=>loadHome);
parcelHelpers.export(exports, "loadHomeSong", ()=>loadHomeSong);
parcelHelpers.export(exports, "loadRankingList", ()=>loadRankingList);
parcelHelpers.export(exports, "loadPlaylist", ()=>loadPlaylist);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
parcelHelpers.export(exports, "loadSearchKeyword", ()=>loadSearchKeyword);
parcelHelpers.export(exports, "loadTopKeyword", ()=>loadTopKeyword);
parcelHelpers.export(exports, "addToHistorySearch", ()=>addToHistorySearch);
parcelHelpers.export(exports, "removeOneHistorySearch", ()=>removeOneHistorySearch);
parcelHelpers.export(exports, "removeAllHistorySearch", ()=>removeAllHistorySearch);
parcelHelpers.export(exports, "addToLoveSong", ()=>addToLoveSong);
parcelHelpers.export(exports, "removeLoveSong", ()=>removeLoveSong);
parcelHelpers.export(exports, "initLoveSong", ()=>initLoveSong);
// import nhaccuatui from 'nhaccuatui-api-full';
var _nhaccuatuiApiFull = require("nhaccuatui-api-full");
var _toastMessageViewJs = require("./views/toastMessageView.js");
var _toastMessageViewJsDefault = parcelHelpers.interopDefault(_toastMessageViewJs);
const state = {
    home: {},
    searchData: {},
    song: {},
    lyric: "",
    sidePlaylist: {},
    topKeyWord: [],
    loveSongs: [],
    clouds: {
        currentSong: {},
        loveSongKey: [],
        loveSong: [],
        playHistory: {},
        searchHistory: []
    },
    songPlay: [],
    config: {
        isRepeat: false,
        isLoopList: false,
        isRandom: false,
        isFirstTime: true
    }
};
const persisCurrentSong = ()=>{
    localStorage.setItem("currentSong", JSON.stringify(state.config.currentSongKey));
};
const persisCurrentPlaylist = ()=>{
    localStorage.setItem("currentPlaylist", JSON.stringify(state.config.currentPlaylistKey));
};
const persisLoopSong = ()=>{
    localStorage.setItem("isRepeat", JSON.stringify(state.config.isRepeat));
};
const persisLoopList = ()=>{
    localStorage.setItem("isLoopList", JSON.stringify(state.config.isLoopList));
};
const persisRandom = ()=>{
    localStorage.setItem("isRandom", JSON.stringify(state.config.isRandom));
};
const persisIsFirstTime = ()=>{
    localStorage.setItem("isFirstTime", JSON.stringify(state.config.isFirstTime));
};
const initConfig = ()=>{
    let initRepeat = localStorage.getItem("isRepeat");
    if (initRepeat) state.config.isRepeat = JSON.parse(initRepeat);
    let initLoopList = localStorage.getItem("isLoopList");
    if (initLoopList) state.config.isLoopList = JSON.parse(initLoopList);
    let initRandom = localStorage.getItem("isRandom");
    if (initRandom) state.config.isRandom = JSON.parse(initRandom);
    let initFirstTime = localStorage.getItem("isFirstTime");
    if (initFirstTime) state.config.isFirstTime = JSON.parse(initFirstTime);
    let initCurrentSong = localStorage.getItem("currentSong");
    if (initCurrentSong) state.config.currentSongKey = JSON.parse(initCurrentSong);
    let initCurrentPlaylist = localStorage.getItem("currentPlaylist");
    if (initCurrentPlaylist) state.config.currentPlaylistKey = JSON.parse(initCurrentPlaylist);
};
initConfig();
const createSongObject = function(song) {
    return {
        artists: song.artists,
        duration: song.duration,
        // isMyPlayList: song.isMyPlaylist,
        key: song.key,
        streamUrl: song.streamUrls.length > 0 ? song.streamUrls[0].streamUrl : undefined,
        thumbnail: song.thumbnail ? song.thumbnail : "https://stc-id.nixcdn.com/v12/static/media/nowplaying_default.f54ac018.png",
        title: song.title
    };
};
const createPlaylistSongObj = function(song) {
    return {
        artists: song.artists,
        // isMyPlayList: song.isMyPlaylist,
        key: song.key,
        title: song.title,
        thumbnail: song.thumbnail
    };
};
const waitData = async (getData, key)=>{
    try {
        let isOk = "error";
        let data;
        while(isOk === "error"){
            data = await getData(key);
            isOk = data.status;
        }
        return data;
    } catch (err) {
        throw err;
    }
};
const loadSong = async function(id) {
    try {
        const songData = await waitData((0, _nhaccuatuiApiFull.getSong), id);
        if (songData.status === "error") throw new Error(`${songData.error.message}`);
        let { song  } = songData;
        state.song = createSongObject(song);
        state.config.currentSongKey = id;
        persisCurrentSong();
    } catch (err) {
        throw err;
    }
};
const loadLyric = async function(id) {
    try {
        const lyricData = await waitData((0, _nhaccuatuiApiFull.getLyric), id);
        if (lyricData.status === "error") throw new Error(`${lyricData.error.message}`);
        let { lyric  } = lyricData;
        if (lyric.lyric === "") state.lyric = "Lời b\xe0i h\xe1t chưa được cập nhật";
        else state.lyric = lyric.lyric;
    } catch (err) {
        throw err;
    }
};
const getLinkSong = async function(id) {
    try {
        const song = await waitData((0, _nhaccuatuiApiFull.getSong), id);
        if (song.status === "error") throw new Error(`${song.error.message}`);
        return song.song.streamUrls.length > 0 ? song.song.streamUrls[0].streamUrl : undefined;
    } catch (err) {
        throw err;
    }
};
const loadHome = async function() {
    try {
        // let homeData;
        // let isOk = 'error';
        // while (isOk === 'error') {
        //   homeData = await getHome();
        //   isOk = homeData.status;
        // }
        homeData = await waitData((0, _nhaccuatuiApiFull.getHome));
        if (homeData.status === "error") throw new Error(homeData.error.message);
        state.home = homeData;
    } catch (err) {
        throw err;
    }
};
const loadHomeSong = async function(songs) {
    const songsPlay = await Promise.all(songs.map(async (song)=>{
        const songPlay = await waitData((0, _nhaccuatuiApiFull.getSong), song.key);
        return songPlay.song;
    }));
    state.home.songsHome = songsPlay;
};
const getRankingData = (data)=>{
    let dataFilled = {
        key: data.playlist.key,
        songs: []
    };
    data.playlist.songs;
    for(let i = 0; i < 3; i++)dataFilled.songs.push(createPlaylistSongObj(data.playlist.songs[i]));
    return dataFilled;
};
const loadRankingList = async function() {
    try {
        const vnRank = await waitData((0, _nhaccuatuiApiFull.getPlaylistDetail), "taNakaGUJ7k9");
        const koreanRank = await waitData((0, _nhaccuatuiApiFull.getPlaylistDetail), "aUBTYVhm6Aqf");
        const usRank = await waitData((0, _nhaccuatuiApiFull.getPlaylistDetail), "S5neMcFsBED5");
        const vn = getRankingData(vnRank);
        const korean = getRankingData(koreanRank);
        const us = getRankingData(usRank);
        vn.title = "Viet Nam";
        korean.title = "Korean";
        us.title = "US-UK";
        state.home.rankingList = [
            vn,
            us,
            korean
        ];
    } catch (err) {}
};
const loadPlaylist = async function(key) {
    try {
        const playlistData = await waitData((0, _nhaccuatuiApiFull.getPlaylistDetail), key);
        if (playlistData.status === "error") throw new Error(playlistData.error.message);
        let playlist = playlistData.playlist;
        // get each song from playlist
        const songsPlay = await Promise.all(playlist.songs.map(async (song)=>{
            const songPlay = await waitData((0, _nhaccuatuiApiFull.getSong), song.key);
            return songPlay;
        }));
        // format the infor of song that needed
        const songs = songsPlay.map((songData)=>{
            if (songData.song.streamUrls[0]?.streamUrl) return createPlaylistSongObj(songData.song);
            return;
        }).filter((song)=>song != undefined);
        state.sidePlaylist = {
            title: playlist.title,
            key: playlist.key,
            thumbnail: playlist.thumbnail,
            songs: songs,
            lengthSongs: songs.length
        };
        // const playListDetail = await getTopics();
        state.config.currentPlaylistKey = key;
        persisCurrentPlaylist();
    } catch (err) {
        throw err;
    }
};
const CreateRecommendSearch = function(data) {
    return {
        artist: data.artists.map((artist)=>artist.name),
        key: data.key,
        duration: data.duration,
        thumbnail: data.thumbnail,
        title: data.title,
        type: data.type
    };
};
const isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};
const loadSearchKeyword = async function(key) {
    try {
        const data = await waitData((0, _nhaccuatuiApiFull.searchByKeyword), key);
        /////////////////CLEAR OLD SEARCH RESULT //////////////////////////////////
        state.searchData = {};
        let playlistSearch = data.search.playlist.playlist;
        let songlistSearch = data.search.song.song;
        let recommendSearch = data.recommend;
        if (Object.keys(recommendSearch).length === 0 && playlistSearch.length === 0 && songlistSearch.length === 0) {
            (0, _toastMessageViewJsDefault.default).displayToast("Nội dung t\xecm kiếm kh\xf4ng c\xf3, vui l\xf2ng kiểm tra lại c\xfa ph\xe1p");
            return true;
        }
        if (Object.keys(data.recommend).length !== 0) {
            // let recommend =
            //   data.recommend[Object.keys(data.recommend)[0]].length !== 0
            //     ? data.recommend[Object.keys(data.recommend)[0]][0]
            //     : data.recommend[Object.keys(data.recommend)[1]][0];
            //   state.searchData.recommend = CreateRecommendSearch(recommend);
            let recommend;
            let recommend1 = data.recommend[Object.keys(data.recommend)[0]];
            let recommend2 = data.recommend[Object.keys(data.recommend)[0]];
            if (recommend1.length !== 0) recommend = CreateRecommendSearch(recommend1[0]);
            else if (recommend2.length !== 0) recommend = CreateRecommendSearch(recommend2[0]);
            else recommend = undefined;
            state.searchData.recommend = recommend;
        } else state.searchData.recommend = undefined;
        state.searchData.playlist = playlistSearch.length !== 0 ? playlistSearch.map((playlist)=>createPlaylistSongObj(playlist)) : undefined;
        state.searchData.song = songlistSearch !== 0 ? songlistSearch.map((song)=>createSongObject(song)) : undefined;
    } catch (err) {
        throw err;
    }
};
const loadTopKeyword = async function() {
    try {
        const kwData = await waitData((0, _nhaccuatuiApiFull.getTopKeyword));
        keywords = kwData.listKeyValue.map((data)=>{
            return data.title;
        });
        state.topKeyWord = keywords;
    } catch (err) {
        throw err;
    }
};
const init = function() {
    const historySearch = localStorage.getItem("historySearch");
    if (historySearch) state.clouds.searchHistory = JSON.parse(historySearch);
};
init();
const updateToLocalHistorySearch = ()=>{
    localStorage.setItem("historySearch", JSON.stringify(state.clouds.searchHistory));
};
const addToHistorySearch = function(keyword) {
    state.clouds.searchHistory.includes(keyword) ? state.clouds.searchHistory : state.clouds.searchHistory.push(keyword);
    updateToLocalHistorySearch();
};
const removeOneHistorySearch = function(index) {
    state.clouds.searchHistory.splice(index, 1);
    updateToLocalHistorySearch();
};
const removeAllHistorySearch = function() {
    state.clouds.searchHistory = [];
    updateToLocalHistorySearch();
};
//////////////// ADD to love song //////////////////
const updateToLocalLoveSong = ()=>{
    localStorage.setItem("loveSongKey", JSON.stringify(state.clouds.loveSongKey));
};
const addToLoveSong = async function(key) {
    try {
        if (state.clouds.loveSongKey.includes(key)) {
            (0, _toastMessageViewJsDefault.default).render("Đ\xe3 tồn tại b\xe0i h\xe1t n\xe0y danh s\xe1ch y\xeau th\xedch");
            return;
        }
        state.clouds.loveSongKey.push(key);
        let loveSong = await waitData((0, _nhaccuatuiApiFull.getSong), key);
        updateToLocalLoveSong();
        state.loveSongs.push(createSongObject(loveSong.song));
        (0, _toastMessageViewJsDefault.default).render("Bạn đ\xe3 th\xeam b\xe0i h\xe1t v\xe0o danh s\xe1ch y\xeau th\xedch");
    } catch (err) {
        throw err;
    }
};
const removeLoveSong = function(order) {
    state.clouds.loveSongKey.splice(order, 1);
    state.loveSongs.splice(order, 1);
    updateToLocalLoveSong();
};
const loadLoveSong = async function() {
    try {
        state.loveSongs = await Promise.all(state.clouds.loveSongKey.map(async (key)=>{
            const loveSong = await waitData((0, _nhaccuatuiApiFull.getSong), key);
            return createSongObject(loveSong.song);
        }));
    } catch (err) {
        throw err;
    }
};
const initLoveSong = async function() {
    const loveSongKey = localStorage.getItem("loveSongKey");
    if (loveSongKey) state.clouds.loveSongKey = JSON.parse(loveSongKey);
    // load all love song at the beginning through key array
    await loadLoveSong();
};
initLoveSong(); // initLoveSong();
 // const addToLocalWaiting = () => {
 //   localStorage.setItem(
 //     'waitingSongs',
 //     JSON.stringify(state.clouds.waitingSongs)
 //   );
 // };
 // export const addToWaitings = async function (songId) {
 //   try {
 //     // add to songclouds
 //     if (state.clouds.waitingSongs.includes(songId)) {
 //       alert('this song already exists in waitinglist');
 //       return;
 //     }
 //     //check song exist in wait yet
 //     state.clouds.waitingSongs.push(songId);
 //     // push to wait song
 //     const songAddWaitData = await getSong(songId);
 //     console.log(songAddWaitData.song);
 //     const songAddWait = createPlaylistSongObj(songAddWaitData.song);
 //     state.waitingSongs.unshift(songAddWait);
 //     // add to Localstorage
 //     alert('Bạn đã thêm bài hát vào danh sách chờ');
 //     return songAddWait;
 //   } catch (e) {
 //     throw e;
 //   }
 // };

},{"nhaccuatui-api-full":"lLufk","./views/toastMessageView.js":"bSz4f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLufk":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.explore = exports.getArtistDetail = exports.exploreArtists = exports.getTrendingArtists = exports.getTopKeyword = exports.searchByKeyword = exports.getTop100 = exports.getChart = exports.getTopicDetail = exports.getTopics = exports.getVideoDetail = exports.getLyric = exports.getPlaylistDetail = exports.getPlaylists = exports.getSong = exports.getHome = void 0;
const axios_1 = __importDefault(require("axios"));
const js_sha512_1 = require("js-sha512");
const PROXY_URL = "https://nct.napdev.workers.dev/";
const API_URL = "https://beta.nhaccuatui.com/api";
const API_KEY = "e3afd4b6c89147258a56a641af16cc79";
const SECRET_KEY = "6847f1a4fc2f4eb6ab13f9084e082ef4";
const client = axios_1.default.create({
    baseURL: typeof window === "object" ? PROXY_URL + API_URL : API_URL,
    params: {
        a: API_KEY
    }
});
client.interceptors.request.use((config)=>{
    const now = String(Date.now());
    const hash = js_sha512_1.sha512.hmac(SECRET_KEY, now);
    config.params.t = now;
    config.params.s = hash;
    return config;
});
client.interceptors.response.use((res)=>res.data);
const joinQueryString = (obj)=>Object.entries(obj).map(([key, value])=>`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`).join("&");
const getHome = ()=>client.post("home");
exports.getHome = getHome;
const getSong = (songId)=>client.post("media/info", joinQueryString({
        key: songId,
        type: "song"
    }));
exports.getSong = getSong;
const getPlaylists = ()=>client.post("tags");
exports.getPlaylists = getPlaylists;
const getPlaylistDetail = (playlistId)=>client.post("media/info", joinQueryString({
        key: playlistId,
        type: "playlist"
    }));
exports.getPlaylistDetail = getPlaylistDetail;
const getLyric = (songId)=>client.post("lyric", joinQueryString({
        key: songId,
        type: "song"
    }));
exports.getLyric = getLyric;
const getVideoDetail = (videoId)=>client.post("media/info", joinQueryString({
        key: videoId,
        type: "video"
    }));
exports.getVideoDetail = getVideoDetail;
const getTopics = ()=>client.post("topic");
exports.getTopics = getTopics;
const getTopicDetail = (topicId)=>client.post("topic/detail", joinQueryString({
        key: topicId
    }));
exports.getTopicDetail = getTopicDetail;
const getChart = ({ category ="nhac-viet" , time ,  } = {
    category: "nhac-viet"
})=>client.post("ranking/top20", joinQueryString({
        category,
        type: "song",
        size: 20,
        week: (time === null || time === void 0 ? void 0 : time.week) || undefined,
        year: (time === null || time === void 0 ? void 0 : time.year) || undefined
    }));
exports.getChart = getChart;
const getTop100 = (top100Id)=>client.post("top100", joinQueryString({
        key: top100Id
    }));
exports.getTop100 = getTop100;
const searchByKeyword = (keyword)=>client.post("search/all", joinQueryString({
        key: keyword
    }));
exports.searchByKeyword = searchByKeyword;
const getTopKeyword = ()=>client.post("search/topkeyword");
exports.getTopKeyword = getTopKeyword;
const getTrendingArtists = ()=>client.post("ranking/artist", joinQueryString({
        size: 10
    }));
exports.getTrendingArtists = getTrendingArtists;
const exploreArtists = ({ nation ="hot" , gender =1 ,  } = {
    nation: "hot",
    gender: 1
})=>client.post("artist", joinQueryString({
        nation,
        gender
    }));
exports.exploreArtists = exploreArtists;
const getArtistDetail = (artistId)=>client.post("artist/detail", joinQueryString({
        shortLink: artistId,
        type: "all",
        size: 20,
        index: 1,
        sort: 0
    }));
exports.getArtistDetail = getArtistDetail;
const explore = ({ type , key ="moi-hot" , page =1 , pageSize =36 ,  })=>client.post("genre", joinQueryString({
        type,
        key,
        order: 1,
        pageIndex: page,
        pageSize
    }));
exports.explore = explore;
exports.default = {
    getHome: exports.getHome,
    getSong: exports.getSong,
    getPlaylists: exports.getPlaylists,
    getPlaylistDetail: exports.getPlaylistDetail,
    getLyric: exports.getLyric,
    getVideoDetail: exports.getVideoDetail,
    getTopics: exports.getTopics,
    getTopicDetail: exports.getTopicDetail,
    getChart: exports.getChart,
    getTop100: exports.getTop100,
    searchByKeyword: exports.searchByKeyword,
    getTopKeyword: exports.getTopKeyword,
    getTrendingArtists: exports.getTrendingArtists,
    exploreArtists: exports.exploreArtists,
    getArtistDetail: exports.getArtistDetail,
    explore: exports.explore
};

},{"axios":"jo6P5","js-sha512":"aWoFA"}],"jo6P5":[function(require,module,exports) {
module.exports = require("./lib/axios");

},{"./lib/axios":"63MyY"}],"63MyY":[function(require,module,exports) {
"use strict";
var utils = require("./utils");
var bind = require("./helpers/bind");
var Axios = require("./core/Axios");
var mergeConfig = require("./core/mergeConfig");
var defaults = require("./defaults");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require("./cancel/Cancel");
axios.CancelToken = require("./cancel/CancelToken");
axios.isCancel = require("./cancel/isCancel");
axios.VERSION = require("./env/data").version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require("./helpers/spread");
// Expose isAxiosError
axios.isAxiosError = require("./helpers/isAxiosError");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"5By4s","./helpers/bind":"haRQb","./core/Axios":"cpqD8","./core/mergeConfig":"b85oP","./defaults":"lTJJ4","./cancel/Cancel":"kjMy2","./cancel/CancelToken":"45wzn","./cancel/isCancel":"a0VmF","./env/data":"h29L9","./helpers/spread":"dyQ8N","./helpers/isAxiosError":"eyiLq"}],"5By4s":[function(require,module,exports) {
"use strict";
var bind = require("./helpers/bind");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === "[object Array]";
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === "[object Date]";
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === "[object File]";
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === "[object Blob]";
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"./helpers/bind":"haRQb"}],"haRQb":[function(require,module,exports) {
"use strict";
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var buildURL = require("../helpers/buildURL");
var InterceptorManager = require("./InterceptorManager");
var dispatchRequest = require("./dispatchRequest");
var mergeConfig = require("./mergeConfig");
var validator = require("../helpers/validator");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else config = config || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = "get";
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error1) {
        return Promise.reject(error1);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
// Provide aliases for supported request methods
utils.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"./../utils":"5By4s","../helpers/buildURL":"3bwC2","./InterceptorManager":"1VRIM","./dispatchRequest":"6sjJ6","./mergeConfig":"b85oP","../helpers/validator":"9vgkY"}],"3bwC2":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") return;
            if (utils.isArray(val)) key = key + "[]";
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + "=" + encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};

},{"./../utils":"5By4s"}],"1VRIM":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"./../utils":"5By4s"}],"6sjJ6":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var transformData = require("./transformData");
var isCancel = require("../cancel/isCancel");
var defaults = require("../defaults");
var Cancel = require("../cancel/Cancel");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel("canceled");
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"./../utils":"5By4s","./transformData":"eRqJY","../cancel/isCancel":"a0VmF","../defaults":"lTJJ4","../cancel/Cancel":"kjMy2"}],"eRqJY":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var defaults = require("./../defaults");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"./../utils":"5By4s","./../defaults":"lTJJ4"}],"lTJJ4":[function(require,module,exports) {
"use strict";
var process = require("process");
var utils = require("./utils");
var normalizeHeaderName = require("./helpers/normalizeHeaderName");
var enhanceError = require("./core/enhanceError");
var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = require("./adapters/xhr");
    else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
    adapter = require("./adapters/http");
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
                setContentTypeIfUnset(headers, "application/json");
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === "SyntaxError") throw enhanceError(e, this, "E_JSON_PARSE");
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
utils.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"process":"d5jf4","./utils":"5By4s","./helpers/normalizeHeaderName":"adBZo","./core/enhanceError":"itUQr","./adapters/xhr":"ldm57","./adapters/http":"ldm57"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"adBZo":[function(require,module,exports) {
"use strict";
var utils = require("../utils");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"../utils":"5By4s"}],"itUQr":[function(require,module,exports) {
"use strict";
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"ldm57":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
var settle = require("./../core/settle");
var cookies = require("./../helpers/cookies");
var buildURL = require("./../helpers/buildURL");
var buildFullPath = require("../core/buildFullPath");
var parseHeaders = require("./../helpers/parseHeaders");
var isURLSameOrigin = require("./../helpers/isURLSameOrigin");
var createError = require("../core/createError");
var defaults = require("../defaults");
var Cancel = require("../cancel/Cancel");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders["Content-Type"]; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ("setRequestHeader" in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"./../utils":"5By4s","./../core/settle":"dD9aC","./../helpers/cookies":"4WJjt","./../helpers/buildURL":"3bwC2","../core/buildFullPath":"1I5TW","./../helpers/parseHeaders":"kqDd5","./../helpers/isURLSameOrigin":"lxXtv","../core/createError":"5nVS9","../defaults":"lTJJ4","../cancel/Cancel":"kjMy2"}],"dD9aC":[function(require,module,exports) {
"use strict";
var createError = require("./createError");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
};

},{"./createError":"5nVS9"}],"5nVS9":[function(require,module,exports) {
"use strict";
var enhanceError = require("./enhanceError");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"itUQr"}],"4WJjt":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push("path=" + path);
            if (utils.isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils":"5By4s"}],"1I5TW":[function(require,module,exports) {
"use strict";
var isAbsoluteURL = require("../helpers/isAbsoluteURL");
var combineURLs = require("../helpers/combineURLs");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"../helpers/isAbsoluteURL":"jD6NM","../helpers/combineURLs":"brOWK"}],"jD6NM":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};

},{"./../utils":"5By4s"}],"lxXtv":[function(require,module,exports) {
"use strict";
var utils = require("./../utils");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils":"5By4s"}],"kjMy2":[function(require,module,exports) {
"use strict";
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"a0VmF":[function(require,module,exports) {
"use strict";
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
"use strict";
var utils = require("../utils");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"../utils":"5By4s"}],"9vgkY":[function(require,module,exports) {
"use strict";
var VERSION = require("../env/data").version;
var validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new TypeError("options must be an object");
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError("option " + opt + " must be " + result);
            continue;
        }
        if (allowUnknown !== true) throw Error("Unknown option " + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"../env/data":"h29L9"}],"h29L9":[function(require,module,exports) {
module.exports = {
    "version": "0.24.0"
};

},{}],"45wzn":[function(require,module,exports) {
"use strict";
var Cancel = require("./Cancel");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"./Cancel":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
"use strict";
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
};

},{}],"aWoFA":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2018
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    "use strict";
    var INPUT_ERROR = "input is invalid type";
    var FINALIZE_ERROR = "finalize already called";
    var WINDOW = typeof window === "object";
    var root = WINDOW ? window : {};
    if (root.JS_SHA512_NO_WINDOW) WINDOW = false;
    var WEB_WORKER = !WINDOW && typeof self === "object";
    var NODE_JS = !root.JS_SHA512_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
    if (NODE_JS) root = global;
    else if (WEB_WORKER) root = self;
    var COMMON_JS = !root.JS_SHA512_NO_COMMON_JS && true && module.exports;
    var AMD = typeof define === "function" && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
    var HEX_CHARS = "0123456789abcdef".split("");
    var EXTRA = [
        -2147483648,
        8388608,
        32768,
        128
    ];
    var SHIFT = [
        24,
        16,
        8,
        0
    ];
    var K = [
        0x428A2F98,
        0xD728AE22,
        0x71374491,
        0x23EF65CD,
        0xB5C0FBCF,
        0xEC4D3B2F,
        0xE9B5DBA5,
        0x8189DBBC,
        0x3956C25B,
        0xF348B538,
        0x59F111F1,
        0xB605D019,
        0x923F82A4,
        0xAF194F9B,
        0xAB1C5ED5,
        0xDA6D8118,
        0xD807AA98,
        0xA3030242,
        0x12835B01,
        0x45706FBE,
        0x243185BE,
        0x4EE4B28C,
        0x550C7DC3,
        0xD5FFB4E2,
        0x72BE5D74,
        0xF27B896F,
        0x80DEB1FE,
        0x3B1696B1,
        0x9BDC06A7,
        0x25C71235,
        0xC19BF174,
        0xCF692694,
        0xE49B69C1,
        0x9EF14AD2,
        0xEFBE4786,
        0x384F25E3,
        0x0FC19DC6,
        0x8B8CD5B5,
        0x240CA1CC,
        0x77AC9C65,
        0x2DE92C6F,
        0x592B0275,
        0x4A7484AA,
        0x6EA6E483,
        0x5CB0A9DC,
        0xBD41FBD4,
        0x76F988DA,
        0x831153B5,
        0x983E5152,
        0xEE66DFAB,
        0xA831C66D,
        0x2DB43210,
        0xB00327C8,
        0x98FB213F,
        0xBF597FC7,
        0xBEEF0EE4,
        0xC6E00BF3,
        0x3DA88FC2,
        0xD5A79147,
        0x930AA725,
        0x06CA6351,
        0xE003826F,
        0x14292967,
        0x0A0E6E70,
        0x27B70A85,
        0x46D22FFC,
        0x2E1B2138,
        0x5C26C926,
        0x4D2C6DFC,
        0x5AC42AED,
        0x53380D13,
        0x9D95B3DF,
        0x650A7354,
        0x8BAF63DE,
        0x766A0ABB,
        0x3C77B2A8,
        0x81C2C92E,
        0x47EDAEE6,
        0x92722C85,
        0x1482353B,
        0xA2BFE8A1,
        0x4CF10364,
        0xA81A664B,
        0xBC423001,
        0xC24B8B70,
        0xD0F89791,
        0xC76C51A3,
        0x0654BE30,
        0xD192E819,
        0xD6EF5218,
        0xD6990624,
        0x5565A910,
        0xF40E3585,
        0x5771202A,
        0x106AA070,
        0x32BBD1B8,
        0x19A4C116,
        0xB8D2D0C8,
        0x1E376C08,
        0x5141AB53,
        0x2748774C,
        0xDF8EEB99,
        0x34B0BCB5,
        0xE19B48A8,
        0x391C0CB3,
        0xC5C95A63,
        0x4ED8AA4A,
        0xE3418ACB,
        0x5B9CCA4F,
        0x7763E373,
        0x682E6FF3,
        0xD6B2B8A3,
        0x748F82EE,
        0x5DEFB2FC,
        0x78A5636F,
        0x43172F60,
        0x84C87814,
        0xA1F0AB72,
        0x8CC70208,
        0x1A6439EC,
        0x90BEFFFA,
        0x23631E28,
        0xA4506CEB,
        0xDE82BDE9,
        0xBEF9A3F7,
        0xB2C67915,
        0xC67178F2,
        0xE372532B,
        0xCA273ECE,
        0xEA26619C,
        0xD186B8C7,
        0x21C0C207,
        0xEADA7DD6,
        0xCDE0EB1E,
        0xF57D4F7F,
        0xEE6ED178,
        0x06F067AA,
        0x72176FBA,
        0x0A637DC5,
        0xA2C898A6,
        0x113F9804,
        0xBEF90DAE,
        0x1B710B35,
        0x131C471B,
        0x28DB77F5,
        0x23047D84,
        0x32CAAB7B,
        0x40C72493,
        0x3C9EBE0A,
        0x15C9BEBC,
        0x431D67C4,
        0x9C100D4C,
        0x4CC5D4BE,
        0xCB3E42B6,
        0x597F299C,
        0xFC657E2A,
        0x5FCB6FAB,
        0x3AD6FAEC,
        0x6C44198C,
        0x4A475817
    ];
    var OUTPUT_TYPES = [
        "hex",
        "array",
        "digest",
        "arrayBuffer"
    ];
    var blocks = [];
    if (root.JS_SHA512_NO_NODE_JS || !Array.isArray) Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    if (ARRAY_BUFFER && (root.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) ArrayBuffer.isView = function(obj) {
        return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
    var createOutputMethod = function(outputType, bits) {
        return function(message) {
            return new Sha512(bits, true).update(message)[outputType]();
        };
    };
    var createMethod = function(bits) {
        var method = createOutputMethod("hex", bits);
        method.create = function() {
            return new Sha512(bits);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, bits);
        }
        return method;
    };
    var createHmacOutputMethod = function(outputType, bits) {
        return function(key, message) {
            return new HmacSha512(key, bits, true).update(message)[outputType]();
        };
    };
    var createHmacMethod = function(bits) {
        var method = createHmacOutputMethod("hex", bits);
        method.create = function(key) {
            return new HmacSha512(key, bits);
        };
        method.update = function(key, message) {
            return method.create(key).update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, bits);
        }
        return method;
    };
    function Sha512(bits, sharedMemory) {
        if (sharedMemory) {
            blocks[0] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = blocks[16] = blocks[17] = blocks[18] = blocks[19] = blocks[20] = blocks[21] = blocks[22] = blocks[23] = blocks[24] = blocks[25] = blocks[26] = blocks[27] = blocks[28] = blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
            this.blocks = blocks;
        } else this.blocks = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        if (bits == 384) {
            this.h0h = 0xCBBB9D5D;
            this.h0l = 0xC1059ED8;
            this.h1h = 0x629A292A;
            this.h1l = 0x367CD507;
            this.h2h = 0x9159015A;
            this.h2l = 0x3070DD17;
            this.h3h = 0x152FECD8;
            this.h3l = 0xF70E5939;
            this.h4h = 0x67332667;
            this.h4l = 0xFFC00B31;
            this.h5h = 0x8EB44A87;
            this.h5l = 0x68581511;
            this.h6h = 0xDB0C2E0D;
            this.h6l = 0x64F98FA7;
            this.h7h = 0x47B5481D;
            this.h7l = 0xBEFA4FA4;
        } else if (bits == 256) {
            this.h0h = 0x22312194;
            this.h0l = 0xFC2BF72C;
            this.h1h = 0x9F555FA3;
            this.h1l = 0xC84C64C2;
            this.h2h = 0x2393B86B;
            this.h2l = 0x6F53B151;
            this.h3h = 0x96387719;
            this.h3l = 0x5940EABD;
            this.h4h = 0x96283EE2;
            this.h4l = 0xA88EFFE3;
            this.h5h = 0xBE5E1E25;
            this.h5l = 0x53863992;
            this.h6h = 0x2B0199FC;
            this.h6l = 0x2C85B8AA;
            this.h7h = 0x0EB72DDC;
            this.h7l = 0x81C52CA2;
        } else if (bits == 224) {
            this.h0h = 0x8C3D37C8;
            this.h0l = 0x19544DA2;
            this.h1h = 0x73E19966;
            this.h1l = 0x89DCD4D6;
            this.h2h = 0x1DFAB7AE;
            this.h2l = 0x32FF9C82;
            this.h3h = 0x679DD514;
            this.h3l = 0x582F9FCF;
            this.h4h = 0x0F6D2B69;
            this.h4l = 0x7BD44DA8;
            this.h5h = 0x77E36F73;
            this.h5l = 0x04C48942;
            this.h6h = 0x3F9D85A8;
            this.h6l = 0x6A1D36C8;
            this.h7h = 0x1112E6AD;
            this.h7l = 0x91D692A1;
        } else {
            this.h0h = 0x6A09E667;
            this.h0l = 0xF3BCC908;
            this.h1h = 0xBB67AE85;
            this.h1l = 0x84CAA73B;
            this.h2h = 0x3C6EF372;
            this.h2l = 0xFE94F82B;
            this.h3h = 0xA54FF53A;
            this.h3l = 0x5F1D36F1;
            this.h4h = 0x510E527F;
            this.h4l = 0xADE682D1;
            this.h5h = 0x9B05688C;
            this.h5l = 0x2B3E6C1F;
            this.h6h = 0x1F83D9AB;
            this.h6l = 0xFB41BD6B;
            this.h7h = 0x5BE0CD19;
            this.h7l = 0x137E2179;
        }
        this.bits = bits;
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
    }
    Sha512.prototype.update = function(message) {
        if (this.finalized) throw new Error(FINALIZE_ERROR);
        var notString, type = typeof message;
        if (type !== "string") {
            if (type === "object") {
                if (message === null) throw new Error(INPUT_ERROR);
                else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) message = new Uint8Array(message);
                else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) throw new Error(INPUT_ERROR);
                }
            } else throw new Error(INPUT_ERROR);
            notString = true;
        }
        var code, index = 0, i, length = message.length, blocks = this.blocks;
        while(index < length){
            if (this.hashed) {
                this.hashed = false;
                blocks[0] = this.block;
                blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = blocks[16] = blocks[17] = blocks[18] = blocks[19] = blocks[20] = blocks[21] = blocks[22] = blocks[23] = blocks[24] = blocks[25] = blocks[26] = blocks[27] = blocks[28] = blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
            }
            if (notString) for(i = this.start; index < length && i < 128; ++index)blocks[i >> 2] |= message[index] << SHIFT[(i++) & 3];
            else for(i = this.start; index < length && i < 128; ++index){
                code = message.charCodeAt(index);
                if (code < 0x80) blocks[i >> 2] |= code << SHIFT[(i++) & 3];
                else if (code < 0x800) {
                    blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[(i++) & 3];
                } else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[(i++) & 3];
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                    blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[(i++) & 3];
                }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 128) {
                this.block = blocks[32];
                this.start = i - 128;
                this.hash();
                this.hashed = true;
            } else this.start = i;
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    Sha512.prototype.finalize = function() {
        if (this.finalized) return;
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex;
        blocks[32] = this.block;
        blocks[i >> 2] |= EXTRA[i & 3];
        this.block = blocks[32];
        if (i >= 112) {
            if (!this.hashed) this.hash();
            blocks[0] = this.block;
            blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = blocks[16] = blocks[17] = blocks[18] = blocks[19] = blocks[20] = blocks[21] = blocks[22] = blocks[23] = blocks[24] = blocks[25] = blocks[26] = blocks[27] = blocks[28] = blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
        }
        blocks[30] = this.hBytes << 3 | this.bytes >>> 29;
        blocks[31] = this.bytes << 3;
        this.hash();
    };
    Sha512.prototype.hash = function() {
        var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, blocks = this.blocks, j, s0h, s0l, s1h, s1l, c1, c2, c3, c4, abh, abl, dah, dal, cdh, cdl, bch, bcl, majh, majl, t1h, t1l, t2h, t2l, chh, chl;
        for(j = 32; j < 160; j += 2){
            t1h = blocks[j - 30];
            t1l = blocks[j - 29];
            s0h = (t1h >>> 1 | t1l << 31) ^ (t1h >>> 8 | t1l << 24) ^ t1h >>> 7;
            s0l = (t1l >>> 1 | t1h << 31) ^ (t1l >>> 8 | t1h << 24) ^ (t1l >>> 7 | t1h << 25);
            t1h = blocks[j - 4];
            t1l = blocks[j - 3];
            s1h = (t1h >>> 19 | t1l << 13) ^ (t1l >>> 29 | t1h << 3) ^ t1h >>> 6;
            s1l = (t1l >>> 19 | t1h << 13) ^ (t1h >>> 29 | t1l << 3) ^ (t1l >>> 6 | t1h << 26);
            t1h = blocks[j - 32];
            t1l = blocks[j - 31];
            t2h = blocks[j - 14];
            t2l = blocks[j - 13];
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (s0l & 0xFFFF) + (s1l & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (s0h & 0xFFFF) + (s1h & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);
            blocks[j] = c4 << 16 | c3 & 0xFFFF;
            blocks[j + 1] = c2 << 16 | c1 & 0xFFFF;
        }
        var ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
        bch = bh & ch;
        bcl = bl & cl;
        for(j = 0; j < 160; j += 8){
            s0h = (ah >>> 28 | al << 4) ^ (al >>> 2 | ah << 30) ^ (al >>> 7 | ah << 25);
            s0l = (al >>> 28 | ah << 4) ^ (ah >>> 2 | al << 30) ^ (ah >>> 7 | al << 25);
            s1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (el >>> 9 | eh << 23);
            s1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (eh >>> 9 | el << 23);
            abh = ah & bh;
            abl = al & bl;
            majh = abh ^ ah & ch ^ bch;
            majl = abl ^ al & cl ^ bcl;
            chh = eh & fh ^ ~eh & gh;
            chl = el & fl ^ ~el & gl;
            t1h = blocks[j];
            t1l = blocks[j + 1];
            t2h = K[j];
            t2l = K[j + 1];
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (hl & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 0xFFFF;
            t1l = c2 << 16 | c1 & 0xFFFF;
            c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 0xFFFF;
            t2l = c2 << 16 | c1 & 0xFFFF;
            c1 = (dl & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (dh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            hh = c4 << 16 | c3 & 0xFFFF;
            hl = c2 << 16 | c1 & 0xFFFF;
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            dh = c4 << 16 | c3 & 0xFFFF;
            dl = c2 << 16 | c1 & 0xFFFF;
            s0h = (dh >>> 28 | dl << 4) ^ (dl >>> 2 | dh << 30) ^ (dl >>> 7 | dh << 25);
            s0l = (dl >>> 28 | dh << 4) ^ (dh >>> 2 | dl << 30) ^ (dh >>> 7 | dl << 25);
            s1h = (hh >>> 14 | hl << 18) ^ (hh >>> 18 | hl << 14) ^ (hl >>> 9 | hh << 23);
            s1l = (hl >>> 14 | hh << 18) ^ (hl >>> 18 | hh << 14) ^ (hh >>> 9 | hl << 23);
            dah = dh & ah;
            dal = dl & al;
            majh = dah ^ dh & bh ^ abh;
            majl = dal ^ dl & bl ^ abl;
            chh = hh & eh ^ ~hh & fh;
            chl = hl & el ^ ~hl & fl;
            t1h = blocks[j + 2];
            t1l = blocks[j + 3];
            t2h = K[j + 2];
            t2l = K[j + 3];
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (gl & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 0xFFFF;
            t1l = c2 << 16 | c1 & 0xFFFF;
            c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 0xFFFF;
            t2l = c2 << 16 | c1 & 0xFFFF;
            c1 = (cl & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (ch & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            gh = c4 << 16 | c3 & 0xFFFF;
            gl = c2 << 16 | c1 & 0xFFFF;
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ch = c4 << 16 | c3 & 0xFFFF;
            cl = c2 << 16 | c1 & 0xFFFF;
            s0h = (ch >>> 28 | cl << 4) ^ (cl >>> 2 | ch << 30) ^ (cl >>> 7 | ch << 25);
            s0l = (cl >>> 28 | ch << 4) ^ (ch >>> 2 | cl << 30) ^ (ch >>> 7 | cl << 25);
            s1h = (gh >>> 14 | gl << 18) ^ (gh >>> 18 | gl << 14) ^ (gl >>> 9 | gh << 23);
            s1l = (gl >>> 14 | gh << 18) ^ (gl >>> 18 | gh << 14) ^ (gh >>> 9 | gl << 23);
            cdh = ch & dh;
            cdl = cl & dl;
            majh = cdh ^ ch & ah ^ dah;
            majl = cdl ^ cl & al ^ dal;
            chh = gh & hh ^ ~gh & eh;
            chl = gl & hl ^ ~gl & el;
            t1h = blocks[j + 4];
            t1l = blocks[j + 5];
            t2h = K[j + 4];
            t2l = K[j + 5];
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (fl & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 0xFFFF;
            t1l = c2 << 16 | c1 & 0xFFFF;
            c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 0xFFFF;
            t2l = c2 << 16 | c1 & 0xFFFF;
            c1 = (bl & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (bh & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            fh = c4 << 16 | c3 & 0xFFFF;
            fl = c2 << 16 | c1 & 0xFFFF;
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            bh = c4 << 16 | c3 & 0xFFFF;
            bl = c2 << 16 | c1 & 0xFFFF;
            s0h = (bh >>> 28 | bl << 4) ^ (bl >>> 2 | bh << 30) ^ (bl >>> 7 | bh << 25);
            s0l = (bl >>> 28 | bh << 4) ^ (bh >>> 2 | bl << 30) ^ (bh >>> 7 | bl << 25);
            s1h = (fh >>> 14 | fl << 18) ^ (fh >>> 18 | fl << 14) ^ (fl >>> 9 | fh << 23);
            s1l = (fl >>> 14 | fh << 18) ^ (fl >>> 18 | fh << 14) ^ (fh >>> 9 | fl << 23);
            bch = bh & ch;
            bcl = bl & cl;
            majh = bch ^ bh & dh ^ cdh;
            majl = bcl ^ bl & dl ^ cdl;
            chh = fh & gh ^ ~fh & hh;
            chl = fl & gl ^ ~fl & hl;
            t1h = blocks[j + 6];
            t1l = blocks[j + 7];
            t2h = K[j + 6];
            t2l = K[j + 7];
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF) + (chl & 0xFFFF) + (s1l & 0xFFFF) + (el & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (chh & 0xFFFF) + (s1h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 0xFFFF;
            t1l = c2 << 16 | c1 & 0xFFFF;
            c1 = (majl & 0xFFFF) + (s0l & 0xFFFF);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 0xFFFF) + (s0h & 0xFFFF) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 0xFFFF;
            t2l = c2 << 16 | c1 & 0xFFFF;
            c1 = (al & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (ah & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            eh = c4 << 16 | c3 & 0xFFFF;
            el = c2 << 16 | c1 & 0xFFFF;
            c1 = (t2l & 0xFFFF) + (t1l & 0xFFFF);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 0xFFFF) + (t1h & 0xFFFF) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ah = c4 << 16 | c3 & 0xFFFF;
            al = c2 << 16 | c1 & 0xFFFF;
        }
        c1 = (h0l & 0xFFFF) + (al & 0xFFFF);
        c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
        c3 = (h0h & 0xFFFF) + (ah & 0xFFFF) + (c2 >>> 16);
        c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);
        this.h0h = c4 << 16 | c3 & 0xFFFF;
        this.h0l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h1l & 0xFFFF) + (bl & 0xFFFF);
        c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
        c3 = (h1h & 0xFFFF) + (bh & 0xFFFF) + (c2 >>> 16);
        c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);
        this.h1h = c4 << 16 | c3 & 0xFFFF;
        this.h1l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h2l & 0xFFFF) + (cl & 0xFFFF);
        c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
        c3 = (h2h & 0xFFFF) + (ch & 0xFFFF) + (c2 >>> 16);
        c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);
        this.h2h = c4 << 16 | c3 & 0xFFFF;
        this.h2l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h3l & 0xFFFF) + (dl & 0xFFFF);
        c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
        c3 = (h3h & 0xFFFF) + (dh & 0xFFFF) + (c2 >>> 16);
        c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);
        this.h3h = c4 << 16 | c3 & 0xFFFF;
        this.h3l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h4l & 0xFFFF) + (el & 0xFFFF);
        c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
        c3 = (h4h & 0xFFFF) + (eh & 0xFFFF) + (c2 >>> 16);
        c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);
        this.h4h = c4 << 16 | c3 & 0xFFFF;
        this.h4l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h5l & 0xFFFF) + (fl & 0xFFFF);
        c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
        c3 = (h5h & 0xFFFF) + (fh & 0xFFFF) + (c2 >>> 16);
        c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);
        this.h5h = c4 << 16 | c3 & 0xFFFF;
        this.h5l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h6l & 0xFFFF) + (gl & 0xFFFF);
        c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
        c3 = (h6h & 0xFFFF) + (gh & 0xFFFF) + (c2 >>> 16);
        c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);
        this.h6h = c4 << 16 | c3 & 0xFFFF;
        this.h6l = c2 << 16 | c1 & 0xFFFF;
        c1 = (h7l & 0xFFFF) + (hl & 0xFFFF);
        c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
        c3 = (h7h & 0xFFFF) + (hh & 0xFFFF) + (c2 >>> 16);
        c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);
        this.h7h = c4 << 16 | c3 & 0xFFFF;
        this.h7l = c2 << 16 | c1 & 0xFFFF;
    };
    Sha512.prototype.hex = function() {
        this.finalize();
        var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, bits = this.bits;
        var hex = HEX_CHARS[h0h >> 28 & 0x0F] + HEX_CHARS[h0h >> 24 & 0x0F] + HEX_CHARS[h0h >> 20 & 0x0F] + HEX_CHARS[h0h >> 16 & 0x0F] + HEX_CHARS[h0h >> 12 & 0x0F] + HEX_CHARS[h0h >> 8 & 0x0F] + HEX_CHARS[h0h >> 4 & 0x0F] + HEX_CHARS[h0h & 0x0F] + HEX_CHARS[h0l >> 28 & 0x0F] + HEX_CHARS[h0l >> 24 & 0x0F] + HEX_CHARS[h0l >> 20 & 0x0F] + HEX_CHARS[h0l >> 16 & 0x0F] + HEX_CHARS[h0l >> 12 & 0x0F] + HEX_CHARS[h0l >> 8 & 0x0F] + HEX_CHARS[h0l >> 4 & 0x0F] + HEX_CHARS[h0l & 0x0F] + HEX_CHARS[h1h >> 28 & 0x0F] + HEX_CHARS[h1h >> 24 & 0x0F] + HEX_CHARS[h1h >> 20 & 0x0F] + HEX_CHARS[h1h >> 16 & 0x0F] + HEX_CHARS[h1h >> 12 & 0x0F] + HEX_CHARS[h1h >> 8 & 0x0F] + HEX_CHARS[h1h >> 4 & 0x0F] + HEX_CHARS[h1h & 0x0F] + HEX_CHARS[h1l >> 28 & 0x0F] + HEX_CHARS[h1l >> 24 & 0x0F] + HEX_CHARS[h1l >> 20 & 0x0F] + HEX_CHARS[h1l >> 16 & 0x0F] + HEX_CHARS[h1l >> 12 & 0x0F] + HEX_CHARS[h1l >> 8 & 0x0F] + HEX_CHARS[h1l >> 4 & 0x0F] + HEX_CHARS[h1l & 0x0F] + HEX_CHARS[h2h >> 28 & 0x0F] + HEX_CHARS[h2h >> 24 & 0x0F] + HEX_CHARS[h2h >> 20 & 0x0F] + HEX_CHARS[h2h >> 16 & 0x0F] + HEX_CHARS[h2h >> 12 & 0x0F] + HEX_CHARS[h2h >> 8 & 0x0F] + HEX_CHARS[h2h >> 4 & 0x0F] + HEX_CHARS[h2h & 0x0F] + HEX_CHARS[h2l >> 28 & 0x0F] + HEX_CHARS[h2l >> 24 & 0x0F] + HEX_CHARS[h2l >> 20 & 0x0F] + HEX_CHARS[h2l >> 16 & 0x0F] + HEX_CHARS[h2l >> 12 & 0x0F] + HEX_CHARS[h2l >> 8 & 0x0F] + HEX_CHARS[h2l >> 4 & 0x0F] + HEX_CHARS[h2l & 0x0F] + HEX_CHARS[h3h >> 28 & 0x0F] + HEX_CHARS[h3h >> 24 & 0x0F] + HEX_CHARS[h3h >> 20 & 0x0F] + HEX_CHARS[h3h >> 16 & 0x0F] + HEX_CHARS[h3h >> 12 & 0x0F] + HEX_CHARS[h3h >> 8 & 0x0F] + HEX_CHARS[h3h >> 4 & 0x0F] + HEX_CHARS[h3h & 0x0F];
        if (bits >= 256) hex += HEX_CHARS[h3l >> 28 & 0x0F] + HEX_CHARS[h3l >> 24 & 0x0F] + HEX_CHARS[h3l >> 20 & 0x0F] + HEX_CHARS[h3l >> 16 & 0x0F] + HEX_CHARS[h3l >> 12 & 0x0F] + HEX_CHARS[h3l >> 8 & 0x0F] + HEX_CHARS[h3l >> 4 & 0x0F] + HEX_CHARS[h3l & 0x0F];
        if (bits >= 384) hex += HEX_CHARS[h4h >> 28 & 0x0F] + HEX_CHARS[h4h >> 24 & 0x0F] + HEX_CHARS[h4h >> 20 & 0x0F] + HEX_CHARS[h4h >> 16 & 0x0F] + HEX_CHARS[h4h >> 12 & 0x0F] + HEX_CHARS[h4h >> 8 & 0x0F] + HEX_CHARS[h4h >> 4 & 0x0F] + HEX_CHARS[h4h & 0x0F] + HEX_CHARS[h4l >> 28 & 0x0F] + HEX_CHARS[h4l >> 24 & 0x0F] + HEX_CHARS[h4l >> 20 & 0x0F] + HEX_CHARS[h4l >> 16 & 0x0F] + HEX_CHARS[h4l >> 12 & 0x0F] + HEX_CHARS[h4l >> 8 & 0x0F] + HEX_CHARS[h4l >> 4 & 0x0F] + HEX_CHARS[h4l & 0x0F] + HEX_CHARS[h5h >> 28 & 0x0F] + HEX_CHARS[h5h >> 24 & 0x0F] + HEX_CHARS[h5h >> 20 & 0x0F] + HEX_CHARS[h5h >> 16 & 0x0F] + HEX_CHARS[h5h >> 12 & 0x0F] + HEX_CHARS[h5h >> 8 & 0x0F] + HEX_CHARS[h5h >> 4 & 0x0F] + HEX_CHARS[h5h & 0x0F] + HEX_CHARS[h5l >> 28 & 0x0F] + HEX_CHARS[h5l >> 24 & 0x0F] + HEX_CHARS[h5l >> 20 & 0x0F] + HEX_CHARS[h5l >> 16 & 0x0F] + HEX_CHARS[h5l >> 12 & 0x0F] + HEX_CHARS[h5l >> 8 & 0x0F] + HEX_CHARS[h5l >> 4 & 0x0F] + HEX_CHARS[h5l & 0x0F];
        if (bits == 512) hex += HEX_CHARS[h6h >> 28 & 0x0F] + HEX_CHARS[h6h >> 24 & 0x0F] + HEX_CHARS[h6h >> 20 & 0x0F] + HEX_CHARS[h6h >> 16 & 0x0F] + HEX_CHARS[h6h >> 12 & 0x0F] + HEX_CHARS[h6h >> 8 & 0x0F] + HEX_CHARS[h6h >> 4 & 0x0F] + HEX_CHARS[h6h & 0x0F] + HEX_CHARS[h6l >> 28 & 0x0F] + HEX_CHARS[h6l >> 24 & 0x0F] + HEX_CHARS[h6l >> 20 & 0x0F] + HEX_CHARS[h6l >> 16 & 0x0F] + HEX_CHARS[h6l >> 12 & 0x0F] + HEX_CHARS[h6l >> 8 & 0x0F] + HEX_CHARS[h6l >> 4 & 0x0F] + HEX_CHARS[h6l & 0x0F] + HEX_CHARS[h7h >> 28 & 0x0F] + HEX_CHARS[h7h >> 24 & 0x0F] + HEX_CHARS[h7h >> 20 & 0x0F] + HEX_CHARS[h7h >> 16 & 0x0F] + HEX_CHARS[h7h >> 12 & 0x0F] + HEX_CHARS[h7h >> 8 & 0x0F] + HEX_CHARS[h7h >> 4 & 0x0F] + HEX_CHARS[h7h & 0x0F] + HEX_CHARS[h7l >> 28 & 0x0F] + HEX_CHARS[h7l >> 24 & 0x0F] + HEX_CHARS[h7l >> 20 & 0x0F] + HEX_CHARS[h7l >> 16 & 0x0F] + HEX_CHARS[h7l >> 12 & 0x0F] + HEX_CHARS[h7l >> 8 & 0x0F] + HEX_CHARS[h7l >> 4 & 0x0F] + HEX_CHARS[h7l & 0x0F];
        return hex;
    };
    Sha512.prototype.toString = Sha512.prototype.hex;
    Sha512.prototype.digest = function() {
        this.finalize();
        var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, bits = this.bits;
        var arr = [
            h0h >> 24 & 0xFF,
            h0h >> 16 & 0xFF,
            h0h >> 8 & 0xFF,
            h0h & 0xFF,
            h0l >> 24 & 0xFF,
            h0l >> 16 & 0xFF,
            h0l >> 8 & 0xFF,
            h0l & 0xFF,
            h1h >> 24 & 0xFF,
            h1h >> 16 & 0xFF,
            h1h >> 8 & 0xFF,
            h1h & 0xFF,
            h1l >> 24 & 0xFF,
            h1l >> 16 & 0xFF,
            h1l >> 8 & 0xFF,
            h1l & 0xFF,
            h2h >> 24 & 0xFF,
            h2h >> 16 & 0xFF,
            h2h >> 8 & 0xFF,
            h2h & 0xFF,
            h2l >> 24 & 0xFF,
            h2l >> 16 & 0xFF,
            h2l >> 8 & 0xFF,
            h2l & 0xFF,
            h3h >> 24 & 0xFF,
            h3h >> 16 & 0xFF,
            h3h >> 8 & 0xFF,
            h3h & 0xFF
        ];
        if (bits >= 256) arr.push(h3l >> 24 & 0xFF, h3l >> 16 & 0xFF, h3l >> 8 & 0xFF, h3l & 0xFF);
        if (bits >= 384) arr.push(h4h >> 24 & 0xFF, h4h >> 16 & 0xFF, h4h >> 8 & 0xFF, h4h & 0xFF, h4l >> 24 & 0xFF, h4l >> 16 & 0xFF, h4l >> 8 & 0xFF, h4l & 0xFF, h5h >> 24 & 0xFF, h5h >> 16 & 0xFF, h5h >> 8 & 0xFF, h5h & 0xFF, h5l >> 24 & 0xFF, h5l >> 16 & 0xFF, h5l >> 8 & 0xFF, h5l & 0xFF);
        if (bits == 512) arr.push(h6h >> 24 & 0xFF, h6h >> 16 & 0xFF, h6h >> 8 & 0xFF, h6h & 0xFF, h6l >> 24 & 0xFF, h6l >> 16 & 0xFF, h6l >> 8 & 0xFF, h6l & 0xFF, h7h >> 24 & 0xFF, h7h >> 16 & 0xFF, h7h >> 8 & 0xFF, h7h & 0xFF, h7l >> 24 & 0xFF, h7l >> 16 & 0xFF, h7l >> 8 & 0xFF, h7l & 0xFF);
        return arr;
    };
    Sha512.prototype.array = Sha512.prototype.digest;
    Sha512.prototype.arrayBuffer = function() {
        this.finalize();
        var bits = this.bits;
        var buffer = new ArrayBuffer(bits / 8);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0h);
        dataView.setUint32(4, this.h0l);
        dataView.setUint32(8, this.h1h);
        dataView.setUint32(12, this.h1l);
        dataView.setUint32(16, this.h2h);
        dataView.setUint32(20, this.h2l);
        dataView.setUint32(24, this.h3h);
        if (bits >= 256) dataView.setUint32(28, this.h3l);
        if (bits >= 384) {
            dataView.setUint32(32, this.h4h);
            dataView.setUint32(36, this.h4l);
            dataView.setUint32(40, this.h5h);
            dataView.setUint32(44, this.h5l);
        }
        if (bits == 512) {
            dataView.setUint32(48, this.h6h);
            dataView.setUint32(52, this.h6l);
            dataView.setUint32(56, this.h7h);
            dataView.setUint32(60, this.h7l);
        }
        return buffer;
    };
    Sha512.prototype.clone = function() {
        var hash = new Sha512(this.bits, false);
        this.copyTo(hash);
        return hash;
    };
    Sha512.prototype.copyTo = function(hash) {
        var i = 0, attrs = [
            "h0h",
            "h0l",
            "h1h",
            "h1l",
            "h2h",
            "h2l",
            "h3h",
            "h3l",
            "h4h",
            "h4l",
            "h5h",
            "h5l",
            "h6h",
            "h6l",
            "h7h",
            "h7l",
            "start",
            "bytes",
            "hBytes",
            "finalized",
            "hashed",
            "lastByteIndex"
        ];
        for(i = 0; i < attrs.length; ++i)hash[attrs[i]] = this[attrs[i]];
        for(i = 0; i < this.blocks.length; ++i)hash.blocks[i] = this.blocks[i];
    };
    function HmacSha512(key, bits, sharedMemory) {
        var notString, type = typeof key;
        if (type !== "string") {
            if (type === "object") {
                if (key === null) throw new Error(INPUT_ERROR);
                else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) key = new Uint8Array(key);
                else if (!Array.isArray(key)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) throw new Error(INPUT_ERROR);
                }
            } else throw new Error(INPUT_ERROR);
            notString = true;
        }
        var length = key.length;
        if (!notString) {
            var bytes = [], length = key.length, index = 0, code;
            for(var i = 0; i < length; ++i){
                code = key.charCodeAt(i);
                if (code < 0x80) bytes[index++] = code;
                else if (code < 0x800) {
                    bytes[index++] = 0xc0 | code >> 6;
                    bytes[index++] = 0x80 | code & 0x3f;
                } else if (code < 0xd800 || code >= 0xe000) {
                    bytes[index++] = 0xe0 | code >> 12;
                    bytes[index++] = 0x80 | code >> 6 & 0x3f;
                    bytes[index++] = 0x80 | code & 0x3f;
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
                    bytes[index++] = 0xf0 | code >> 18;
                    bytes[index++] = 0x80 | code >> 12 & 0x3f;
                    bytes[index++] = 0x80 | code >> 6 & 0x3f;
                    bytes[index++] = 0x80 | code & 0x3f;
                }
            }
            key = bytes;
        }
        if (key.length > 128) key = new Sha512(bits, true).update(key).array();
        var oKeyPad = [], iKeyPad = [];
        for(var i = 0; i < 128; ++i){
            var b = key[i] || 0;
            oKeyPad[i] = 0x5c ^ b;
            iKeyPad[i] = 0x36 ^ b;
        }
        Sha512.call(this, bits, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
    }
    HmacSha512.prototype = new Sha512();
    HmacSha512.prototype.finalize = function() {
        Sha512.prototype.finalize.call(this);
        if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha512.call(this, this.bits, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha512.prototype.finalize.call(this);
        }
    };
    HmacSha512.prototype.clone = function() {
        var hash = new HmacSha512([], this.bits, false);
        this.copyTo(hash);
        hash.inner = this.inner;
        for(var i = 0; i < this.oKeyPad.length; ++i)hash.oKeyPad[i] = this.oKeyPad[i];
        return hash;
    };
    var exports = createMethod(512);
    exports.sha512 = exports;
    exports.sha384 = createMethod(384);
    exports.sha512_256 = createMethod(256);
    exports.sha512_224 = createMethod(224);
    exports.sha512.hmac = createHmacMethod(512);
    exports.sha384.hmac = createHmacMethod(384);
    exports.sha512_256.hmac = createHmacMethod(256);
    exports.sha512_224.hmac = createHmacMethod(224);
    if (COMMON_JS) module.exports = exports;
    else {
        root.sha512 = exports.sha512;
        root.sha384 = exports.sha384;
        root.sha512_256 = exports.sha512_256;
        root.sha512_224 = exports.sha512_224;
        if (AMD) define(function() {
            return exports;
        });
    }
})();

},{"process":"d5jf4"}],"bSz4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ToastMessageView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".toast-container");
    displayToast(message) {
        this.render(message);
        const closeToastEl = document.querySelector(".toast-close");
        closeToastEl.addEventListener("click", (e)=>{
            e.target.closest(".toast").remove();
        });
    }
    generateMarkup() {
        return `
    <div class="toast">
    <p class= "message">${this._data}</p>
    <div class="toast-close"><i class="fa-solid fa-circle-xmark"></i></div>
  </div>
    `;
    }
}
exports.default = new ToastMessageView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        this._data = data; // copy to work with it more in other function
        if (!this._data) return;
        // console.log(this._data);
        const markup = this.generateMarkup();
        // console.log(markup);
        this.clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderClearFirst(data) {
        this._data = data; // copy to work with it more in other function
        this.clear();
        if (!this._data) return;
        // console.log(this._data);
        const markup = this.generateMarkup();
        // console.log(markup);
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"boDTA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const timeSong = document.querySelector(".time-song");
class SongView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".left-side-description");
    _audioEl = document.querySelector("audio");
    generateMarkup() {
        this._audioEl.src = `${this._data.streamUrl}`;
        timeSong.textContent = this._data.duration;
        return `
    <div class="left-side-song-des">
     <div class="left-side-img-container">
       <img
         src="${this._data.thumbnail}"
         alt="Song play image"
         class="left-side-img"
       />
     </div>
     <a href="#" class="song-play-name common-link">${this._data.title}</a>
     <a href="#" class="song-play-singer"
       >          
       ${this._data.artists.map((artist, i)=>{
            return i + 1 === this._data.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
        }).join("")}
     </a>
   </div>
    `;
    }
}
exports.default = new SongView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byYSU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const btnPlay = document.querySelector(".play-song");
const btnPause = document.querySelector(".pause-song");
const modal = document.querySelector(".overlay");
const modalBtn = document.querySelector(".btn--close-modal");
const btnControlList = document.querySelector(".btn-control-list");
const playlistSide = document.querySelector(".playlist-side");
const btnClosePlaylist = document.querySelector(".icon-hide-playlist-side");
const seekSlider = document.querySelector("#seek-slider");
const volumeSlider = document.getElementById("volume-slider");
const volumeUnmute = document.querySelector(".volumn-icon--unmute");
const volumemute = document.querySelector(".volumn-icon--mute");
const currentTimeContainer = document.querySelector(".time-passed");
const btnLoop = document.querySelector(".loop-song");
const wellComeEl = document.querySelector(".well-come-to-play");
let currentVolumn;
let oldVolumn;
class ContronPlayView {
    addHandlerEvent(audio) {
        btnPlay.addEventListener("click", ()=>{
            audio.play();
            this.playBtn();
        });
        btnPause.addEventListener("click", ()=>{
            audio.pause();
            this.pauseBtn();
        });
    }
    playBtn() {
        // clear all listeners
        btnPlay.classList.remove("show");
        btnPause.classList.remove("show");
        // add to btn pause
        btnPause.classList.add("show");
    }
    pauseBtn() {
        // clear all listeners
        btnPlay.classList.remove("show");
        btnPause.classList.remove("show");
        // add to btn pause
        btnPlay.classList.add("show");
    }
    autoPlay(audio) {
        audio.play();
        this.playBtn();
    }
    addHandlerActiveSpotItem(item) {
        let spotItemsContainerEl = document.querySelectorAll(".spot-item-container");
        spotItemsContainerEl.forEach((spotItem)=>{
            spotItem.classList.remove("spot-item-active");
        });
        item.classList.add("spot-item-active");
    }
    addHandlerDownloadSong(handler, classEl) {
        const downloadItems = document.querySelectorAll(".song-options--download");
        downloadItems.forEach((item)=>{
            item.addEventListener("click", (e)=>{
                let key = e.target.closest(classEl).id;
                handler(key);
            });
        });
    }
    controlModalSong(data) {
        if (!data) {
            this.addHandlerShowModal();
            return;
        }
    }
    controlModal(data, item) {
        if (!data) {
            this.addHandlerShowModal();
            return;
        }
        this.addHandlerActiveSpotItem(item);
    }
    addHanderClickPlayevent(handler) {
        let playEvents = document.querySelectorAll(".home-play-btn");
        playEvents.forEach((playEvent)=>{
            playEvent.addEventListener("click", (e)=>{
                const item = e.target.closest(".spot-item-container") || e.target.closest(".ranking-item");
                if (!item) return;
                const key = item.id;
                handler(key, item);
            });
        });
    }
    addHandlerShowModal() {
        modal.classList.remove("hidden");
    }
    addHanderClickModal() {
        modal.addEventListener("click", ()=>{
            modal.classList.add("hidden");
        });
        modalBtn.addEventListener("click", ()=>{
            modal.classList.add("hidden");
        });
    }
    addHandlerShowPlayList() {
        btnControlList.addEventListener("click", ()=>{
            playlistSide.classList.toggle("hidden");
        });
        btnClosePlaylist.addEventListener("click", ()=>{
            playlistSide.classList.add("hidden");
        });
    }
    // CONTROL SONG
    addHandlerSong(audio) {
        audio.addEventListener("loadedmetadata", ()=>{
            this.setSliderMax(audio.duration);
            this.addHandlerSeekSlider(audio);
            this.audioTimeUpdate(audio);
            this.volumnUpdate(audio);
        });
    }
    audioTimeUpdate(audio) {
        audio.addEventListener("timeupdate", ()=>{
            seekSlider.value = Math.floor(audio.currentTime);
            currentTimeContainer.textContent = this.calculateTime(seekSlider.value);
        });
    }
    calculateTime(secs) {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }
    setSliderMax(secs) {
        seekSlider.max = Math.floor(secs);
    }
    addHandlerSeekSlider(audio) {
        seekSlider.addEventListener("input", ()=>{
            currentTimeContainer.textContent = this.calculateTime(seekSlider.value);
        });
        seekSlider.addEventListener("change", ()=>{
            audio.currentTime = seekSlider.value;
        });
    }
    //  Control volumn
    volumnChangeMute() {
        volumeUnmute.classList.add("hidden");
        volumemute.classList.remove("hidden");
    }
    volumnChangeUnmute() {
        volumeUnmute.classList.remove("hidden");
        volumemute.classList.add("hidden");
    }
    volumnUpdate(audio) {
        volumeSlider.addEventListener("input", (e)=>{
            const value = +e.target.value;
            if (value === 0) this.volumnChangeMute();
            if (value > 0) this.volumnChangeUnmute();
            audio.volume = value / 100;
        });
        this.volumnClick(audio);
    }
    volumnClick(audio) {
        volumeUnmute.addEventListener("click", ()=>{
            currentVolumn = audio.volume;
            this.volumnChangeMute();
            console.log(currentVolumn);
            volumeSlider.value = 0;
            audio.volume = 0;
        });
        volumemute.addEventListener("click", ()=>{
            this.volumnChangeUnmute();
            // console.log(currentVolumn);
            volumeSlider.value = currentVolumn * 100;
            audio.volume = currentVolumn;
        });
    }
}
exports.default = new ContronPlayView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gc6H5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ShowCaseView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".slider-container");
    generateMarkup() {
        return `<div class="main-container">
    <div class="slider">
    ${this._data.showcase.map((show, i)=>`
      <div class="slider-top ${i === 0 ? "slide-active" : ""} ">
      <img src="${show.imageUrl}" alt="${show.description}" />
      </div>
      `).join("")}
    </div>
    <div class="slide-scrolls">
      <button class="slide-prev">
        <i class="fa-solid fa-chevron-left icon-scroll"></i>
      </button>
      <button class="slide-next">
        <i class="fa-solid fa-chevron-right icon-scroll"></i>
      </button>
    </div>
    <div class="container-dot"></div>
  </div>
    `;
    }
}
exports.default = new ShowCaseView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bokN1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class TopicEventsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".topic-event");
    generateMarkup() {
        return `
      ${this._data.topicEvent.map((topic, i)=>`
    <div class="home-event-${i} home-item">
      <h2 class="topic-description header-second">
      ${topic.groupName.split("_")[0]}
      </h2>
      <div class="control-slick">
        <div class="control-left">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="control-right">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
      
      <div class="spot-gallery slick-list">
        ${topic.listPlaylist.map((playlist)=>`
            <div class="spot-item slick-item">
                <div class="spot-item-container item-container-play" id="${playlist.key}">
                  <button class="home-play-btn">
                    <i class="fa-solid fa-circle-play"></i>
                  </button>

                  <div class="spot-img-play">
                    <img
                      src="${playlist.thumbnail}"
                      alt=""
                    />
                  </div>
                  <button class="spot-item-onplay-btn">
                  <i class="fa-solid fa-headphones"></i>
                </button>
                </div>
                <h3 class="header-third">${playlist.title}</h3>
              </div>
        `).join("\n")}
      </div>
    </div>
      `).join("\n")}
    `;
    }
}
exports.default = new TopicEventsView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2GV6u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const leftSideAlbumName = document.querySelector(".left-side-album-text");
let currentIndex = 0;
const wellCome = document.querySelector(".well-come-to-play");
class PlaylistSideView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".playlist-play");
    getKeyFirstSong() {
        const firstSong = document.querySelectorAll(".song-list-item--data")[0];
        if (!firstSong) return;
        // active fist song
        firstSong.classList.add("song-item--active");
        return firstSong.id;
    }
    addHandlerPlayFirstSong(handler) {
        let key = this.getKeyFirstSong();
        if (!key) return;
        handler(key);
    }
    addHandlerShowWellCome() {
        wellCome.classList.remove("hidden");
    }
    removeWellCome() {
        wellCome.classList.add("hidden");
    }
    addHandlerOptions() {
        window.addEventListener("click", (e)=>{
            const songOptions = document.querySelectorAll(".song-options");
            if (e.target.className === "icon-more-option" || e.target.className === "fa-solid fa-ellipsis-vertical") {
                const songOption = e.target.closest(".song-list-item").querySelector(".song-options");
                if (songOption.classList.contains("hidden")) {
                    songOptions.forEach((songOption)=>{
                        songOption.classList.add("hidden");
                    });
                    songOption.classList.remove("hidden");
                    return;
                }
                if (!songOption.classList.contains("hidden")) songOption.classList.add("hidden");
            } else songOptions.forEach((songOption)=>{
                songOption.classList.add("hidden");
            });
        });
    }
    addHandlerAddToCloud(handler) {
        const btnAddItemsClouds = document.querySelectorAll(".song-option-item--cloud");
        btnAddItemsClouds.forEach((btnAddItemsCloud)=>{
            btnAddItemsCloud.addEventListener("click", (e)=>{
                const key = e.target.closest(".song-list-item").id;
                handler(key);
            });
        });
    }
    generateMarkup() {
        leftSideAlbumName.textContent = `Playlist: ${this._data.title ? this._data.title : "B\xe0i h\xe1t y\xeau th\xedch"}`;
        return `
    <h2 class="playlist-descript">Danh sách bài hát</h2>
    <div class="playlist-item-border"></div>
    <div class="list-item">
    ${this._data.songs.map((song, index)=>`
    <div class="song-list-item song-list-item-leftside song-list-item--data" data-order="${index}" id=${song.key}>
    <div class="song-options hidden">
      <ul class="song-option-list">
        <li class="song-option-item song-option-item--cloud">
          <i class="fa-solid fa-heart"></i>
          <p class="add-to">Thêm vào yêu thích</p>
        </li>
        <li class="song-option-item song-options--download">
        <i class="fa-solid fa-download"></i>
          <p class="add-to">Tải bài hát</p>
        </li>
        <li class="song-option-item song-option-item--lyric">
        <i class="fa-solid fa-book"></i>
        <p class="add-to">Lời bài hát</p>
        </li>
      </ul>
    </div>
    <div class="icon-more-option">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div class="song-item-content song-playlist-item">
      <div>
      <div class="link-subject song-item-name song-item-name-leftside">
        ${song.title}
      </div>
      <div class="singer-name">
      ${song.artists.map((artist, i)=>{
                return i + 1 === song.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
      </div>
      </div>
    </div>
  </div>
    
    `).join("")}
  </div>
    `;
    }
}
exports.default = new PlaylistSideView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64ACV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SongOnplayView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".playlist-onplay");
    generateMarkup() {
        return `
   <h2 class="playlist-descript">Đang Phát</h2>
              <div class="song-list-item song-list-item-leftside " id=${this._data.key}>
                <div class="song-options hidden">
                  <ul class="song-option-list">
                    <li class="song-option-item">
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                      <p class="add-to">Thêm vào cloud</p>
                    </li>
                    <li class="song-option-item">
                      <i class="fa-regular fa-square-plus"></i>
                      <p class="add-to">Thêm vào chờ phát</p>
                    </li>
                  </ul>
                </div>

                <div class="song-item-content">
                  <div class="song-item-img">
                    <img
                      src="${this._data.thumbnail}"
                      alt=""
                    />
                  </div>
                  <div>
                  <div
                    class="link-subject song-item-name song-item-name-leftside"
                  >
                  ${this._data.title}
                  </div>
                  <div class="singer-name leftside-singer-name">
                  ${this._data.artists.map((artist, i)=>{
            return i + 1 === this._data.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
        }).join("")}
                  </div>
                </div>
                </div>
              </div>
    `;
    }
}
exports.default = new SongOnplayView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9m4T9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
let itemActive = 0;
let newSongInterval;
class NewReleaseView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".new-songs-container");
    activeSong(songContent) {
        songContent.forEach((songContent)=>{
            songContent.classList.remove("active");
        });
        songContent[itemActive].classList.add("active");
    // newSongItems.forEach(newSongItem => {
    //     newSongItem.classList.remove('active');
    //   });
    // newSongItems[itemActive].classList.add('active');
    }
    addHandlerActiveContent() {
        const newSongItems = document.querySelectorAll(".new-song-item");
        const songContent = document.querySelectorAll(".new-song-content-item");
        const songPointEl = document.querySelector(".new-songs-list--point");
        let songItemWidth = newSongItems[0].clientWidth;
        //auto active content after each 3s
        clearInterval(newSongInterval);
        this.autoActiveContent(songContent, newSongItems);
        newSongItems.forEach((newSongItem)=>{
            newSongItem.addEventListener("mouseover", ()=>{
                itemActive = newSongItem.dataset.newsong;
                this.activeSong(songContent);
                this.activeSong(newSongItems);
                songPointEl.style.transform = `translateX(${songItemWidth * itemActive}px)`;
            });
        });
    }
    autoActiveContent(songContent, newSongItems) {
        const songPointEl = document.querySelector(".new-songs-list--point");
        let songItemWidth = newSongItems[0].clientWidth;
        // console.log(itemActive);
        if (newSongInterval) clearInterval(newSongInterval);
        newSongInterval = setInterval(()=>{
            this.activeSong(songContent);
            this.activeSong(newSongItems);
            songPointEl.style.transform = `translateX(${songItemWidth * itemActive}px)`;
            itemActive++;
            if (itemActive > songContent.length - 1) itemActive = 0;
        }, 3000);
    }
    generateMarkup() {
        console.log(this._data);
        return `
    <div class="new-song-content">
    ${this._data.map((song, index)=>{
            return `
        <div class="new-song-content-item " data-newsong=${index}>
        <div class="new-song-content-item--wrapper">
          <div class="new-song-img">
            <img
              src="${song.thumbnail}"
              alt=""
            />
          </div>
          <div class="new-song-description">
            <a href="#" class="new-song-name header-third"
              >${song.title}</a>
            <div class="new-song-singer">
              <div class="singer-avatar-container">
                ${song.artists.map((artist)=>{
                return `                    
              
                        <img 
                        src="${artist.imageUrl ? artist.imageUrl : "https://kenhtao.net/wp-content/uploads/2018/04/hack-vip-nhaccuatui-ios.jpg"}"
                        alt=""
                        />

                    `;
            }).join("")}
              </div>
              <div class="singer-name">
                ${song.artists.map((artist, i)=>{
                return i + 1 === song.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
                </div>
            </div>
            <div class="song-date-release">
              <i class="fa-solid fa-calendar-days"></i>
              <span> Ngày phát hành: ${new Date(song.dateCreate).toLocaleDateString()}</span>
            </div>
          </div>
          </div>
          
          </div>
          `;
        }).join("")}
  </div>
  <div class="new-songs-list">
    <div class="new-songs-list--point"></div>
    ${this._data.map((song, index)=>`
        <div class="new-song-item song-list-item--data" data-newsong="${index}" id="${song.key}">
            <button class="button-play-album button-play-song">
                <i class="fa-solid fa-circle-play"></i>
            </button>
            <img
                src="${song.thumbnail}"
                alt=""
            />
        </div>
    
    `).join("")}
  </div>

    `;
    }
}
exports.default = new NewReleaseView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YN9U0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class RankingView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".ranking-containter");
    handlerMouseOverEvent() {
        const rankingImgs = document.querySelectorAll(".ranking-img-item");
        rankingImgs.forEach((rankingImg)=>{
            rankingImg.addEventListener("mouseover", (e)=>{
                let order = rankingImg.dataset.order;
                let songItems = e.target.closest(".ranking-item").querySelectorAll(".ranking-song-content-item");
                songItems.forEach((songItem)=>{
                    songItem.classList.remove("active");
                });
                songItems[order].classList.add("active");
                e.target.closest(".ranking-item").querySelector(".ranking-position").textContent = `#${+order + 1}`;
            });
        });
    }
    generateMarkup() {
        return `
    ${this._data.map((playlist)=>{
            return `
        <div class="ranking-item" id="${playlist.key}">
        <div class="ranking-img-list">
        ${playlist.songs.map((song, i)=>{
                return `
                <div class="ranking-img-item" data-order="${i}">
                <img
                    src="${song.thumbnail}"
                    alt=""
                    class=""
                />
                </div>                    
            `;
            }).join("")}
        </div>
        <div class="ranking-background ranking-bg-item-1">
          <p class="ranking-name">${playlist.title}</p>
        </div>
        <div class="ranking-song-content">
            ${playlist.songs.map((song, i)=>{
                return `
                <div class="ranking-song-content-item ${i === 0 ? "active" : ""}" data-order="${i}">
                  <h3 class="ranking-song-name">${song.title}</h3>
                  <div class="ranking-song-singer">
                  ${song.artists.map((artist, i)=>{
                    return i + 1 === song.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
                }).join("")}
                  </div>           
                </div>                
                `;
            }).join("")}

          <div class="home-play-btn play-rank-btn">
          <i class="fa-solid fa-circle-play"></i>
          </div>
          <p class="ranking-position ">#1</p>
        </div>
      </div>
            
        `;
        }).join("")}
    `;
    }
}
exports.default = new RankingView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etImA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class VideoView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".video-list");
    generateMarkup() {
        return `
        ${this._data.map((video)=>{
            return `
                <div class="video-item">
            <div class="item-container-play">
                <div class="video-duration">${video.duration}</div>
                <button class="home-play-btn">
                <i class="fa-solid fa-circle-play"></i>
                </button>

                <div class="spot-img-play">
                <img
                    src="${video.thumbnail}"
                    alt=""
                />
                </div>
            </div>
            <div class="video-content">
                <a href="#" class="link-subject">
                ${video.title}
                </a>
                <p class="video-singer">
                ${video.artists.map((artist, i)=>{
                return i + 1 === video.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
                </p>
            </div>
            </div>
                
            `;
        }).join("")}
    `;
    }
}
exports.default = new VideoView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aKV33":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class HomeSongView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".home-song-list");
    generateMarkup() {
        return `
        ${this._data.map((song)=>{
            return `
                <div class="song-list-item song-list-item-home song-list-item--data" id="${song.key}">
                ${song.streamUrls.length === 0 ? `<div class="vip-icon"><i class="fa-solid fa-crown"></i></div>` : ""}
                <div class="song-options hidden">
                <ul class="song-option-list">
                    ${song.streamUrls.length > 0 ? `                  
                     <li class="song-option-item song-option-item--cloud">
                     <i class="fa-solid fa-heart"></i>
                    <p class="add-to">Thêm vào yêu thích</p>
                    </li>
                    <li class="song-option-item song-options--download">
                    <i class="fa-solid fa-download"></i>
                      <p class="add-to">Tải bài hát</p>
                    </li>
                    ` : ""}
                    <li class="song-option-item song-option-item--lyric">
                    <i class="fa-solid fa-book"></i>
                    <p class="add-to">Lời bài hát</p>
                    </li>
                </ul>
                </div>
                <div class="icon-more-option">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div class="song-home-item-content song-item-content">
                <div class="song-item-img">
                    <img
                    src="${song.thumbnail}"
                    alt=""
                    />
                </div>

                <div class = "song-description-container">
                    <h3 class="link-subject song-item-name">
                    ${song.title}
                    </h3>
                    <div class="singer-name">
                    ${song.artists.map((artist, i)=>{
                return i + 1 === song.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
                    </div>
                </div>
                </div>
            </div>
                
            `;
        }).join("")}
    `;
    }
}
exports.default = new HomeSongView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6UTeq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class HotTopicView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".hot-subject-container");
    generateMarkup() {
        return `
        ${this._data.map((topic, i)=>{
            return `
          ${i < 6 ? `<div class="hot-subject-item">
          <div class="spot-item-container">
            <div class="spot-img-play">
              <img
                src="${topic.thumbURL}"
                alt=""
              />
            </div>
          </div>
        </div>` : ""}           
            `;
        }).join("")}
    `;
    }
}
exports.default = new HotTopicView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jJP9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class TopView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".top-subject-container");
    generateMarkup() {
        return `    
        ${this._data.map((top100, i)=>`
            ${i < 6 ? ` <div class=" hot-subject-item">
            <div class="spot-item-container item-container-play" id="${top100.key}">
              <button class="home-play-btn">
                <i class="fa-solid fa-circle-play"></i>
              </button>

              <div class="spot-img-play">
                <img
                  src="${top100.thumbnail}"
                  alt=""
                />
              </div>
              <button class="spot-item-onplay-btn">
              <i class="fa-solid fa-headphones"></i>
            </button>
            </div>
          </div>` : ""}
        `).join("")}
    `;
    }
}
exports.default = new TopView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2twQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const lyricModal = document.querySelector(".lyric");
const modalBtn = document.querySelector(".btn--close-modal");
class LyricView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".lyric-word");
    addHandlerClickShowLyric(handler, classEl) {
        const lyricItems = document.querySelectorAll(".song-option-item--lyric");
        lyricItems.forEach((lyric)=>{
            lyric.addEventListener("click", (e)=>{
                let key = e.target.closest(classEl).id;
                console.log(e.target.closest(classEl));
                this.addHandlerShowLyricsModal();
                handler(key);
            });
        });
    }
    addHandlerShowLyricsModal() {
        lyricModal.classList.remove("hidden");
    }
    addHanderClickLyricModal() {
        window.onclick = function(event) {
            if (event.target == lyricModal || event.target.classList.contains("btn--close-modal")) lyricModal.classList.add("hidden");
        };
    // modalBtn.addEventListener('click', () => {
    //   lyricModal.classList.add('hidden');
    // });
    }
    generateMarkup() {
        return `
    ${this._data ? `<div>${this._data}</div>` : "Lời b\xe0i h\xe1t chưa được cập nhật"}
    `;
    }
}
exports.default = new LyricView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2cgvm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const bodyEl = document.querySelector("body");
class WaitingSongView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".playlist-waiting");
    getKeyFirstSong() {
        const firstSong = document.querySelectorAll(".song-list-item--data")[0];
        if (!firstSong) return;
        console.log(firstSong);
        return firstSong.id;
    }
    addHandlerPlayFirstSong(handler) {
        let key = this.getKeyFirstSong();
        if (!key) return;
        handler(key);
    }
    addHandlerAddToCloud(handler) {
        const btnAddItemsClouds = document.querySelectorAll(".song-option-item--cloud");
        btnAddItemsClouds.forEach((btnAddItemsCloud)=>{
            btnAddItemsCloud.addEventListener("click", (e)=>{
                const key = e.target.closest(".song-list-item").id;
                console.log(key);
                handler(key);
            });
        });
    }
    addHandlerAddToWaitings(handler) {
        const btnAddItemsWaitings = document.querySelectorAll(".song-option-item--waiting");
        btnAddItemsWaitings.forEach((btnAddItemsWaiting)=>{
            btnAddItemsWaiting.addEventListener("click", (e)=>{
                const key = e.target.closest(".song-list-item").id;
                console.log(key);
                handler(key);
            });
        });
    }
    renderWatingSong(data, index) {
        this._data = data; // copy to work with it more in other function
        const markup = this.generateMarkup(index);
        this._parentElement.insertAdjacentHTML("beforeend", markup);
    }
    generateMarkup(index) {
        return `
    <div class="song-list-item song-list-item-leftside queue-list" data-queue = '${index}'>
    <div class="song-options hidden">
      <ul class="song-option-list">
        <li class="song-option-item">
          <i class="fa-solid fa-cloud-arrow-up"></i>
          <p class="add-to">Thêm vào cloud</p>
        </li>
        <li class="song-option-item">
          <i class="fa-regular fa-square-plus"></i>
          <p class="add-to">Xóa Khỏi chờ phát</p>
        </li>
      </ul>
    </div>
    <div class="icon-more-option">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div class="song-item-content song-item-content--waiting">
      <div>
        <div class="link-subject song-item-name">
          ${this._data.title}
        </div>
        <div class="singer-name">
        ${this._data.artists.map((artist, i)=>{
            return i + 1 === this._data.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
        }).join("")}
        </div>
      </div>
    </div>
  </div>
    `;
    }
}
exports.default = new WaitingSongView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1huP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controlSlide", ()=>controlSlide);
parcelHelpers.export(exports, "slickSlider", ()=>slickSlider) // export const controlSlider = {
 //   getSelector() {
 //     this.slideContainer = document.querySelector('.main-container');
 //     this.slider = document.querySelector('.slider');
 //     this.dotContainer = document.querySelector('.container-dot');
 //     this.nextBtn = document.querySelector('.slide-next');
 //     this.prevBtn = document.querySelector('.slide-prev');
 //     this.slides = document.querySelectorAll('.slider-top');
 //   },
 //   index: 1,
 //   interval: 2000,
 //   // slideId,
 //   // firstClone,
 //   // lastClone,
 //   cloneSlide() {
 //     this.firstClone = this.slides[0].cloneNode(true);
 //     this.lastClone = this.slides[this.slides.length - 1].cloneNode(true);
 //     this.firstClone.id = 'first-clone';
 //     this.lastClone.id = 'last-clone';
 //     this.slider.append(this.firstClone);
 //     this.slider.prepend(this.lastClone);
 //   },
 //   createDot() {
 //     this.dotContainer.innerHTML = '';
 //     this.slides.forEach((slide, i) => {
 //       slide.dataset.slide = i;
 //       this.dotContainer.insertAdjacentHTML(
 //         'beforeend',
 //         `<button class="dots__dot" data-slide="${i}"></button>`
 //       );
 //     });
 //   },
 //   activeDotImg(slideNum) {
 //     if (slideNum === this.slides.length + 1) slideNum = 1;
 //     if (slideNum === 0) slideNum = this.slides.length;
 //     /////////////  remove active from dot and slide /////////
 //     document.querySelectorAll('.dots__dot').forEach(dot => {
 //       dot.classList.remove('active-dot');
 //     });
 //     document.querySelectorAll('.slider-top').forEach(slide => {
 //       slide.classList.remove('slide-active');
 //     });
 //     /////////////  add active to current dot and slide /////////
 //     document
 //       .querySelector(`.dots__dot[data-slide = "${slideNum - 1}"]`)
 //       .classList.add('active-dot');
 //     document
 //       .querySelector(`.slider-top[data-slide = "${slideNum - 1}"]`)
 //       .classList.add('slide-active');
 //   },
 //   getSlides() {
 //     return document.querySelectorAll('.slider-top');
 //   },
 //   moveToNextSlide(i) {
 //     console.log(this.index);
 //     let slides = this.getSlides();
 //     if (this.index >= slides.length - 1) return; // guard for javascript timing. when click too fast and index not update yet
 //     //   index = i === undefined ? index++ : i+1
 //     if (i === undefined) {
 //       this.index++;
 //     } else {
 //       this.index = i + 1;
 //     }
 //     let slideWidth = slides[this.index].clientWidth;
 //     this.slider.style.transition = '0.7s';
 //     this.slider.style.transform = `translateX(${-slideWidth * this.index}px)`;
 //     this.activeDotImg(this.index);
 //   },
 //   moveToPrevSlide() {
 //     if (this.index <= 0) return;
 //     this.index--;
 //     this.slider.style.transition = '.7s';
 //     this.slider.style.transform = `translateX(${-slideWidth * this.index}px)`;
 //     this.activeDotImg(this.index);
 //   },
 //   startSlide() {
 //     let _this = this;
 //     this.slideId = setInterval(() => {
 //       this.moveToNextSlide();
 //     }, _this.interval);
 //   },
 //   handlerSlider() {
 //     let _this = this;
 //     _this.slider.addEventListener('transitionend', () => {
 //       let slides = _this.getSlides();
 //       if (slides[_this.index].id === _this.firstClone.id) {
 //         _this.index = 1;
 //       }
 //       if (slides[_this.index].id === _this.lastClone.id) {
 //         _this.index = slides.length - 2;
 //       }
 //       let slideWidth = slides[_this.index].clientWidth;
 //       _this.slider.style.transition = 'none';
 //       _this.slider.style.transform = `translateX(${
 //         -slideWidth * _this.index
 //       }px)`;
 //     });
 //     _this.nextBtn.addEventListener('click', () => {
 //       _this.moveToNextSlide();
 //       clearInterval(_this.slideId);
 //     });
 //     _this.prevBtn.addEventListener('click', _this.moveToPrevSlide);
 //     _this.slideContainer.addEventListener('mouseover', () => {
 //       clearInterval(_this.slideId);
 //     });
 //     _this.slideContainer.addEventListener('mouseleave', _this.startSlide);
 //     _this.dotContainer.addEventListener('click', e => {
 //       if (e.target.classList.contains('dots__dot')) {
 //         const slideNum = e.target.dataset.slide;
 //         _this.moveToNextSlide(+slideNum);
 //       }
 //     });
 //   },
 //   initSlider() {
 //     this.getSelector();
 //     this.createDot();
 //     this.cloneSlide();
 //     this.startSlide();
 //     this.handlerSlider();
 //   },
 // };
;
let slideId;
function controlSlide() {
    const slideContainer = document.querySelector(".main-container");
    const slider = document.querySelector(".slider");
    const dotContainer = document.querySelector(".container-dot");
    const nextBtn = document.querySelector(".slide-next");
    const prevBtn = document.querySelector(".slide-prev");
    let slides = document.querySelectorAll(".slider-top");
    let index = 1;
    let interval = 2000;
    // let slideId;
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";
    slider.append(firstClone);
    slider.prepend(lastClone);
    //////////// function to generate and active DOT at slide /////////////////////
    const createDot = function() {
        dotContainer.innerHTML = "";
        slides.forEach((slide, i)=>{
            slide.dataset.slide = i;
            dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };
    const activeDotImg = function(slideNum) {
        if (slideNum === slides.length + 1) slideNum = 1;
        if (slideNum === 0) slideNum = slides.length;
        /////////////  remove active from dot and slide /////////
        document.querySelectorAll(".dots__dot").forEach((dot)=>{
            dot.classList.remove("active-dot");
        });
        document.querySelectorAll(".slider-top").forEach((slide)=>{
            slide.classList.remove("slide-active");
        });
        /////////////  add active to current dot and slide /////////
        document.querySelector(`.dots__dot[data-slide = "${slideNum - 1}"]`).classList.add("active-dot");
        document.querySelector(`.slider-top[data-slide = "${slideNum - 1}"]`).classList.add("slide-active");
    };
    let slideWidth = slides[index].clientWidth;
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
    /////////// move to next or prev slide ////////////////////
    getSlides = function() {
        return document.querySelectorAll(".slider-top");
    };
    const moveToNextSlide = (i)=>{
        let slides = getSlides();
        if (index >= slides.length - 1) return; // guard for javascript timing. when click too fast and index not update yet
        //   index = i === undefined ? index++ : i+1
        if (i === undefined) index++;
        else index = i + 1;
        let slideWidth = slides[index].clientWidth;
        slider.style.transition = "0.7s";
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
        activeDotImg(index);
    };
    const moveToPrevSlide = ()=>{
        if (index <= 0) return;
        index--;
        slider.style.transition = ".7s";
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
        activeDotImg(index);
    };
    const startSlide = ()=>{
        if (slideId) clearInterval(slideId);
        slideId = setInterval(()=>{
            moveToNextSlide();
        }, interval);
    };
    /////////// listen event ////////////////
    slider.addEventListener("transitionend", ()=>{
        let slides = getSlides();
        if (slides[index].id === firstClone.id) index = 1;
        if (slides[index].id === lastClone.id) index = slides.length - 2;
        let slideWidth = slides[index].clientWidth;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
    });
    nextBtn.addEventListener("click", ()=>{
        moveToNextSlide();
    });
    prevBtn.addEventListener("click", moveToPrevSlide);
    slideContainer.addEventListener("mouseover", ()=>{
        clearInterval(slideId);
    });
    slideContainer.addEventListener("mouseleave", startSlide);
    dotContainer.addEventListener("click", (e)=>{
        if (e.target.classList.contains("dots__dot")) {
            const slideNum = e.target.dataset.slide;
            moveToNextSlide(+slideNum);
        }
    });
    ///////////////// init slide ///////////////////
    createDot();
    startSlide();
}
///////////////// Slick slide product ///////////////////
function controlSlick(parent) {
    const slickItems = parent.querySelectorAll(".slick-item");
    const slickList = parent.querySelector(".slick-list");
    const controlLeft = parent.querySelector(".control-left");
    const controlRight = parent.querySelector(".control-right");
    let numSlideShow = 4;
    let currentSlide = 0;
    let numItems = slickItems.length;
    let lastSlide = numSlideShow * (Math.floor(numItems / numSlideShow) - 1) + numItems % numSlideShow;
    // console.log(calcLastSlide());
    const slickAddDataset = ()=>{
        // slickItems[0].classList.add('current-slide');
        slickItems.forEach((slickItem, i)=>{
            slickItem.dataset.slickNum = i;
        });
    };
    slickAddDataset();
    // display slide at the beginning
    const displaySlide = (numslideShow)=>{
        for(let j = 0; j < numslideShow; j++)// console.log(slickItems);
        slickItems[j].classList.add("slick-active");
    };
    const controlActiveSlide = (fromSlide, toSlide)=>{
        slickItems.forEach((slickItem, i)=>{
            if (i < fromSlide || i > toSlide) slickItem.classList.remove("slick-active");
            if (i >= fromSlide && i <= toSlide) slickItem.classList.add("slick-active");
        });
    };
    displaySlide(numSlideShow);
    const activeControlSlide = ()=>{
        if (currentSlide === 0) {
            controlRight.classList.add("control-active");
            controlLeft.classList.remove("control-active");
        }
        if (currentSlide > 0 && currentSlide < lastSlide) {
            controlRight.classList.add("control-active");
            controlLeft.classList.add("control-active");
        }
        if (currentSlide === lastSlide) {
            controlRight.classList.remove("control-active");
            controlLeft.classList.add("control-active");
        }
    };
    activeControlSlide();
    const transateSlide = (numSlideTranslate)=>{
        let widthItem = slickItems[0].clientWidth;
        slickList.style.transition = ".7s";
        slickList.style.transform = `translateX(${-widthItem * numSlideTranslate}px)`;
    };
    ///////////// THE WAY 1 ////////////////////////
    const controlRightSlide = ()=>{
        let remainItems = numItems - numSlideShow - currentSlide;
        if (remainItems <= numSlideShow) {
            transateSlide(currentSlide + remainItems);
            controlActiveSlide(currentSlide + remainItems, numItems - 1);
            currentSlide = currentSlide + remainItems;
        }
        if (remainItems > numSlideShow) {
            transateSlide(currentSlide + numSlideShow);
            controlActiveSlide(currentSlide + numSlideShow, (currentSlide + numSlideShow) * 2 - 1);
            currentSlide = currentSlide + numSlideShow;
        }
    };
    ///////////// THE WAY 2 ////////////////////////
    const controlLeftSlide = ()=>{
        const surSlide = currentSlide % numSlideShow;
        if (currentSlide === lastSlide && surSlide > 0 && currentSlide != 0) {
            transateSlide(lastSlide - surSlide);
            controlActiveSlide(currentSlide - surSlide, numItems - surSlide);
            currentSlide = currentSlide - surSlide;
        }
        if (surSlide === 0 && currentSlide != 0) {
            transateSlide(currentSlide - numSlideShow);
            controlActiveSlide(currentSlide - numSlideShow, currentSlide - 1);
            currentSlide = currentSlide - numSlideShow;
        }
    };
    //  ADD EVENT LISTENER
    controlRight.addEventListener("click", ()=>{
        controlRightSlide();
        activeControlSlide();
    });
    controlLeft.addEventListener("click", ()=>{
        controlLeftSlide();
        activeControlSlide();
    });
    window.addEventListener("resize", ()=>{
        transateSlide(0);
        displaySlide(numSlideShow);
    });
}
function slickSlider() {
    const homeItems = document.querySelectorAll(".home-item");
    homeItems.forEach((homeItem)=>{
        controlSlick(homeItem);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6kJkE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class TopKeywordView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".searching-list-item");
    generateMarkup() {
        console.log(this._data);
        return `
    ${this._data.map((keyword, i)=>{
            return `
      <li class="searching-item searching-keyword" id="${keyword}">
      <div><span>#${i}</span><p class="value-search-top">${keyword}</p></div>
    </li>
        `;
        }).join("")}
    `;
    }
}
exports.default = new TopKeywordView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uhv5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const searchingContainerEl = document.querySelector(".searching-container");
const searchingResultEl = document.querySelector(".searching-results");
const searchIcon = document.querySelector(".icon-searching");
class SearchView {
    _parentEl = document.querySelector(".input-search");
    getQuery() {
        const query = this._parentEl.querySelector(".search-field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector(".search-field").value = "";
    }
    searchQuery(e, handler) {
        e.preventDefault();
        console.log(searchingContainerEl);
        let keyword = this.getQuery();
        console.log(keyword);
        if (!keyword) return;
        handler(keyword);
    }
    addHandlerShowResult() {
        searchingContainerEl.classList.add("hidden");
        searchingResultEl.classList.remove("hidden");
    }
    initShowFirst() {
        searchingContainerEl.classList.remove("hidden");
        searchingResultEl.classList.add("hidden");
    }
    addHandlerSearch(handler) {
        let _this = this;
        this._parentEl.addEventListener("submit", function(e) {
            _this.searchQuery(e, handler);
        });
        searchIcon.addEventListener("click", function(e) {
            _this.searchQuery(e, handler);
        });
    }
    addHandlerClickToTopSearch(handler) {
        const searchingTopItem = document.querySelectorAll(".searching-keyword");
        searchingTopItem.forEach((item)=>{
            item.addEventListener("click", ()=>{
                let keyword = item.id;
                handler(keyword);
                searchingContainerEl.classList.add("hidden");
                searchingResultEl.classList.remove("hidden");
            });
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MY7T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class RecommendView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".recommend-search");
    generateMarkup() {
        console.log(this._data);
        return `
    <h2 class="header-second recommend-search-header">Top Tìm Kiếm</h2>
    <div class="recommend-container">
      <div
        class="${this._data.type === "PLAYLIST" ? `spot-item-container item-container-play recommend-item` : `song-list-item--data item-container-play recommend-song`}" id=${this._data.key}
      >
        <button class="home-play-btn">
          <i class="fa-solid fa-circle-play"></i>
        </button>

        <div class="spot-img-play">
          <img
            src="${this._data.thumbnail ? this._data.thumbnail : "https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png"}"
            alt=""
          />
        </div>
        <button class="spot-item-onplay-btn">
          <i class="fa-solid fa-headphones"></i>
        </button>
      </div>
      <div class="recommend-content">
        <p class="recommend-stt">#1</p>
        <p class="recommend-name">${this._data.title}</p>
        <div class="recommend-singer-name">
      ${this._data.artist.map((artist, i)=>{
            return i + 1 === this._data.artist.length ? `<span class="common-link"> ${artist}</span>` : `<span class="common-link"> ${artist},</span>`;
        }).join("")}
      </div>
        <p class="recommend-type">${this._data.type}</p>
      </div>
    </div>
    `;
    }
}
exports.default = new RecommendView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"889hu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ResultSongView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".search-song");
    generateMarkup() {
        return `
    <h2 class="header-second">Bài Hát</h2>
    <div class="search-song-container">
    ${this._data.map((song)=>{
            return `
            <div class="song-list-item song-list-item-home song-list-item-search song-list-item--data" id="${song.key}">
            <div class="song-options hidden">
            <ul class="song-option-list">
            
                 <li class="song-option-item song-option-item--cloud">
                 <i class="fa-solid fa-heart"></i>
                <p class="add-to">Thêm vào yêu thích</p>
                </li>
                <li class="song-option-item song-options--download">
                <i class="fa-solid fa-download"></i>
                  <p class="add-to">Tải bài hát</p>
                </li>
                <li class="song-option-item song-option-item--lyric">
                <i class="fa-solid fa-book"></i>
                <p class="add-to">Lời bài hát</p>
                </li>
            </ul>
            </div>
            <div class="icon-more-option">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div class="song-home-item-content song-item-content">
            <div class="song-item-img">
                <img
                src="${song.thumbnail ? song.thumbnail : "https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png"}"
                alt=""
                />
            </div>

            <div class="song-description-container">
                <div class="link-subject song-item-name">
                ${song.title}
                </div>
                <div class="singer-name">
                ${song.artists.map((artist, i)=>{
                return i + 1 === song.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
                </div>
            </div>
            </div>
        </div>
            
        `;
        }).join("")}
    </div>
    `;
    }
}
exports.default = new ResultSongView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3e0zU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class resultPlaylistView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".search-video");
    generateMarkup() {
        return `
    <h2 class="header-second search-video-header">Playlist</h2>
            <div class="search-video-container">
                ${this._data.map((playlist)=>{
            return `
                    <div class="spot-item video-search-item">
                <div
                  class="spot-item-container item-container-play video-search-item-container" id=${playlist.key}
                >
                  <button class="home-play-btn">
                    <i class="fa-solid fa-circle-play"></i>
                  </button>

                  <div class="spot-img-play">
                    <img
                      src="${playlist.thumbnail ? playlist.thumbnail : "https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png"}"
                      alt=""
                    />
                  </div>
                  <button class="spot-item-onplay-btn">
                  <i class="fa-solid fa-headphones"></i>
                </button>
                </div>
                <h3 class="header-third">${playlist.title}</h3>
                <div class="singer-name playlist-search-singer">
                ${playlist.artists.map((artist, i)=>{
                return i + 1 === playlist.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
                </div>
              </div>
                    `;
        }).join("")}
            
            </div>
    `;
    }
}
exports.default = new resultPlaylistView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYSrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class historySearchView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".history-searching");
    addHanlerRemoveOneHistory(handler) {
        const removeIcons = document.querySelectorAll(".trash-icon");
        removeIcons.forEach((icon)=>{
            icon.addEventListener("click", (e)=>{
                let historyItem = e.target.closest(".searching-history-item");
                let index = historyItem.dataset.order;
                historyItem.remove();
                handler(index);
            });
        });
    }
    addHanlerRemoveAllHistory(handler) {
        const deleteAll = document.querySelector(".delete-all-history");
        deleteAll.addEventListener("click", (e)=>{
            let listItem = e.target.closest(".history-searching").querySelector(".searching-history-list");
            listItem.remove();
            handler();
            deleteAll.classList.remove("active-history");
            deleteAll.textContent = "Chưa c\xf3 lịch sử t\xecm kiếm";
        });
    }
    generateMarkup() {
        return `
    ${this._data.length > 0 ? '<p class="delete-all-history active-history">X\xf3a tất cả</p>' : '<p class="delete-all-history ">Chưa c\xf3 lịch sử t\xecm kiếm</p>'}
            <h2 class="history-search-header header-second">
              Lịch Sử Tìm Kiếm
            </h2>
            <ul class="searching-history-list">
            ${this._data.map((keyword, i)=>{
            return `
                  <li class="searching-history-item searching-keyword" data-order="${i}" id="${keyword}">
                  <p>${keyword}</p>
                  <div class="trash-icon">
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </li>
                  `;
        }).join("")}
            </ul>
    `;
    }
}
exports.default = new historySearchView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82Kie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const searchingMain = document.querySelector(".search-main");
const homeMain = document.querySelector(".home-main");
const loveMain = document.querySelector(".love-main");
const navBar = document.querySelectorAll(".main-nav-item");
const mainContents = document.querySelectorAll(".main-content");
class navView {
    // _parentEl = document.querySelector('.input-search');
    addHandlerNavigation(handlerHome, handlerSearch, handlerLove) {
        navBar.forEach((nav)=>{
            nav.addEventListener("click", ()=>{
                if (!nav.id) return;
                navBar.forEach((navItem)=>{
                    navItem.classList.remove("active-nav");
                });
                nav.classList.add("active-nav");
                if (nav.id === "home-nav") {
                    this.controlActiveMain(homeMain);
                    handlerHome();
                }
                if (nav.id === "search-nav") {
                    this.controlActiveMain(searchingMain);
                    handlerSearch();
                }
                if (nav.id === "love-nav") {
                    this.controlActiveMain(loveMain);
                    handlerLove();
                }
            });
        });
    }
    controlActiveMain(activeEl) {
        mainContents.forEach((main)=>{
            main.classList.remove("main-content--active");
        });
        activeEl.classList.add("main-content--active");
    }
}
exports.default = new navView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKNDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class LoveSongView extends (0, _viewJsDefault.default) {
    // _parentElement = document.querySelector('.left-side-description');
    addHandlerAddLoveSong(handler, classEl) {
        const addLoveBtn = document.querySelectorAll(".song-option-item--cloud");
        addLoveBtn.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                let key = e.target.closest(classEl).id;
                handler(key);
            });
        });
    }
    generateMarkup() {
        return `
      
    `;
    }
}
exports.default = new LoveSongView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EZIG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
const playLoveListBtn = document.querySelector(".love-song-play-btn");
class loveSongListView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".love-song-list-container");
    addHandlerplayAllList(dataPlaylist, dataLoveSong, handler) {
        playLoveListBtn.addEventListener("click", ()=>{
            dataPlaylist.songs = dataLoveSong;
            handler(true);
        });
    }
    addHandlerDeleteSong(handler) {
        const deleteBtns = document.querySelectorAll(".song-options--remove-love");
        deleteBtns.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                let removeEl = e.target.closest(".love-song-list-item");
                let orderEl = removeEl.dataset.order;
                handler(orderEl);
                removeEl.remove();
            });
        });
    }
    generateMarkup() {
        return `
    ${this._data.map((song, i)=>{
            return `
        <div class="song-list-item love-song-list-item song-list-item--data" id="${song.key}" data-order="${i}">
        <div class="love-song-list-item-container">
    
          <div class="song-options hidden ">
            <ul class="song-option-list">
              <li class="song-option-item song-options--remove-love">
              <i class="fa-solid fa-trash-can"></i>
                <p class="add-to">Xóa khỏi yêu thích</p>
              </li>
              <li class="song-option-item song-options--download">
              <i class="fa-solid fa-download"></i>
                <p class="add-to">Tải bài hát</p>
              </li>
              <li class="song-option-item song-option-item--lyric">
              <i class="fa-solid fa-book"></i>
              <p class="add-to">Lời bài hát</p>
              </li>
            </ul>
          </div>
          <div class="icon-more-option">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div class="song-home-item-content song-item-content love-song-item-content">
            <div class="song-item-img">
              <img class ="love-song-item-img"
                src="${song.thumbnail}"
                alt=""
              />
            </div>
    
            <div>
              <h3 class="link-subject song-item-name love-song-item-name">
                ${song.title}
              </h3>
            </div>
          </div>
        </div>
        <div class="singer-name love-song-singer-name">
        ${song.artists.map((artist, i)=>{
                return i + 1 === song.artists.length ? `<span class="common-link"> ${artist.name}</span>` : `<span class="common-link"> ${artist.name},</span>`;
            }).join("")}
        </div>
        <div class="love-song-time"><p class="love-song-time-num">${song.duration}</p></div>
      </div>
            
        `;
        }).join("")}
    `;
    }
}
exports.default = new loveSongListView();

},{"../view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequiredc47")

//# sourceMappingURL=index.e37f48ea.js.map
