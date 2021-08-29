// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nbody {\n    background: rgb(167, 216, 253);\n}\n.doraemon {\n    position: relative;\n    width: 500px;\n    height: 500px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n}\n.face {\n    border: 3px solid rgb(1, 21, 101);\n    position: absolute;\n    width: 350px;\n    height: 320px;\n    border-radius: 50%;\n    background: rgb(86, 198, 250);\n}\n.face::before {\n    content: \"\";\n    display: block;\n    width: 300px;\n    height: 270px;\n    background: white;\n    border-radius: 50%;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n}\n.face .eyes {\n    position: absolute;\n    top: 37px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.face .eyes .eyes_left {\n    border: 1px solid black;\n    float: left;\n    width: 60px;\n    height: 70px;\n    border-radius: 50%;\n    top: 0px;\n    left: 160px;\n    right: 0;\n    background: white;\n}\n.face .eyes .eyes_right {\n    border: 1px solid black;\n    float: right;\n    width: 60px;\n    height: 70px;\n    border-radius: 50%;\n    top: 0px;\n    left: 250px;\n    right: 0;\n    background: white;\n}\n.inner {\n    border: 1px solid black;\n    width: 28px;\n    height: 36px;\n    background: black;\n    border-radius: 45%;\n    position: relative;\n    top: 26px;\n    left: 3px;\n}\n.inner::before {\n    content: \"\";\n    display: block;\n    border: 1px solid white;\n    width: 12px;\n    height: 12px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    top: 8px;\n    left: 4px;\n}\n.nose {\n    position: absolute;\n    border: 1px solid black;\n    background: red;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    top: 81px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.nose::before {\n    content: \"\";\n    display: block;\n    border: 1px solid white;\n    width: 15px;\n    height: 15px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    top: 6px;\n    left: 4px;\n}\n.face_inner .nodeline {\n    position: relative;\n    top: 173px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    background: black;\n    height: 145px;\n    width: 0;\n}\n\n.face_inner .faceline_left .f1 {\n    position: relative;\n    top: -45px;\n    left: 40px;\n    transform: rotate(15deg);\n    border: 1px solid black;\n    background: black;\n    width: 80px;\n}\n.face_inner .faceline_left .f2 {\n    position: relative;\n    top: -20px;\n    left: 40px;\n    transform: rotate(0deg);\n    border: 1px solid black;\n    background: black;\n    width: 80px;\n}\n.face_inner .faceline_left .f3 {\n    position: relative;\n    top: 5px;\n    left: 40px;\n    transform: rotate(-15deg);\n    border: 1px solid black;\n    background: black;\n    width: 80px;\n}\n.face_inner .faceline_right .f1 {\n    position: relative;\n    top: -60px;\n    left: -20px;\n    transform: rotate(15deg) translateX(250px);\n    border: 1px solid black;\n    background: black;\n    width: 80px;\n}\n.face_inner .faceline_right .f2 {\n    position: relative;\n    top: -25px;\n    left: -30px;\n    transform: rotate(0deg) translateX(250px);\n    border: 1px solid black;\n    background: black;\n    width: 80px;\n}\n.face_inner .faceline_right .f3 {\n    position: relative;\n    top: 10px;\n    left: -20px;\n    transform: rotate(-15deg) translateX(250px);\n    border: 1px solid black;\n    background: black;\n    width: 80px;\n}\n.face_inner .mouth {\n    position: absolute;\n    border: 2px solid black;\n    width: 310px;\n    height: 400px;\n    top: 47px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    border-color: transparent transparent black;\n}\n.necklace {\n    border: 1px solid black;\n    width: 310px;\n    height: 28px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    transform: translate(-50%, -50%);\n    border-radius: 20px/20px;\n    background: red;\n}\n.necklace .ring {\n    border: 1px solid black;\n    width: 45px;\n    height: 45px;\n    position: relative;\n    left: 50%;\n    top: 15px;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: rgb(250, 153, 8);\n}\n.necklace .ring .up {\n    border: 1px solid black;\n    width: 50px;\n    height: 10px;\n    position: relative;\n    left: 50%;\n    top: 15px;\n    transform: translate(-50%, -50%);\n    border-radius: 20px/20px;\n    background: rgb(250, 153, 8);\n}\n.necklace .ring .down {\n    border: 1px solid black;\n    width: 15px;\n    height: 15px;\n    position: relative;\n    left: 50%;\n    top: 18px;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    background: black;\n}\n.necklace .ring .down::before {\n    content: \"\";\n    display: block;\n    border: 1px solid black;\n    width: 3px;\n    height: 12px;\n    position: relative;\n    left: 50%;\n    top: 16px;\n    transform: translate(-50%, -50%);\n    background: black;\n}\n";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#btnSlow": "slow",
        "#btnNormal": "normal",
        "#btnFast": "fast"
    },
    n: 1,
    init: function init() {
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key]; // pause/play/slow/normal/fast 都是字符串
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = _css2.default.substr(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: function play() {
        window.clearInterval(player.id);
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.time = 300;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 100;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    }
};

player.init();
},{"./css.js":"css.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58303' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.dd12640d.map