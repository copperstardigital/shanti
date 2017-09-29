webpackJsonp([3],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_dplayer__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_dplayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_dplayer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            article: {},
            video: {
                url: '/uploads/video/michael.mp4'
            },
            lang: 'en',
            autoplay: false,
            player: null,
            contextmenu: [],
            logo: '/img/shanti_logo_white.png',
            testimonials: [{
                name: 'Jose A.',
                clip: '/uploads/video/jose.mp4'
            }, {
                name: 'Jesse A.',
                clip: '/uploads/video/jesse.mp4'
            }, {
                name: 'Marlon G.',
                clip: '/uploads/video/marlon.mp4'
            }, {
                name: 'Scott H.',
                clip: '/uploads/video/scott.mp4'
            }, {
                name: 'Michael S.',
                clip: '/uploads/video/michael.mp4'
            }]
        };
    },

    components: {
        'd-player': __WEBPACK_IMPORTED_MODULE_0_vue_dplayer___default.a
    },
    mounted: function mounted() {
        this.player = this.$refs.player.dp;
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        http.get('/articles/14')
        //.use(saCache)
        .then(function (response) {
            var article = response.body.article;

            _this.article = {
                headline: article.en_headline,
                subhead: article.en_subhead,
                callout: article.en_callout,
                body: article.en_body
            };

            if (_this.$cookie.get('language') === 'es') {
                _this.article = {
                    headline: article.es_headline,
                    subhead: article.es_subhead,
                    callout: article.es_callout,
                    body: article.es_body
                };
            }

            _this.loading = false;
        }).catch(function (error) {
            console.error(error);
        });
    },

    methods: {
        play: function play() {
            // console.log('play callback')
        },
        switchVideo: function switchVideo(newVideo) {
            this.player.switchVideo({
                url: newVideo
            });
        }
    }
});

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDPlayer"] = factory();
	else
		root["VueDPlayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(6)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(5),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/sinchang/Documents/dev/vue/vue-dplayer/src/VueDPlayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueDPlayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cebd22e", Component.options)
  } else {
    hotAPI.reload("data-v-2cebd22e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1\n}\n.dplayer *{box-sizing:content-box\n}\n.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0\n}\n.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{animation:danmaku-center 6s linear;animation-play-state:paused\n}\n.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{animation:danmaku 8s linear;animation-play-state:paused\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{animation-play-state:running!important\n}\n@media (min-width:900px){\n.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0\n}\n.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1\n}\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block\n}\n.dplayer.dplayer-loading .dplayer-danmaku .dplayer-danmaku-move{animation-play-state:paused!important\n}\n.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;-ms-transform:translateY(100%);transform:translateY(100%)\n}\n.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1\n}\n.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%;height:100%\n}\n.dplayer.dplayer-mobile .dplayer-camera-icon,.dplayer.dplayer-mobile .dplayer-volume{display:none!important\n}\n.dplayer.dplayer-mobile .dplayer-full-in-icon{position:static!important;display:inline-block!important\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-input{width:200px\n}\n.dplayer.dplayer-mobile .dplayer-comment-setting-title{display:none\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box{left:17px\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-icon{width:40px\n}\n.dplayer .dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none\n}\n.dplayer .dplayer-mask.dplayer-mask-show{display:block\n}\n.dplayer .dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%\n}\n.dplayer .dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none\n}\n.dplayer .dplayer-video-wrap .dplayer-video-current{display:block\n}\n.dplayer .dplayer-video-wrap .dplayer-video-prepare{display:none\n}\n.dplayer .dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff\n}\n.dplayer .dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;text-shadow:.5px .5px .5px rgba(0,0,0,.5)\n}\n.dplayer .dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden\n}\n.dplayer .dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;-ms-transform:translateX(100%);transform:translateX(100%)\n}\n.dplayer .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;animation:danmaku 5s linear;animation-play-state:paused\n}\n@keyframes danmaku{\n0%{transform:translateX(100%)\n}\n}\n.dplayer .dplayer-danmaku .dplayer-danmaku-bottom,.dplayer .dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden\n}\n.dplayer .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;animation:danmaku-center 4s linear;animation-play-state:paused\n}\n@keyframes danmaku-center{\n0%{visibility:visible\n}\nto{visibility:visible\n}\n}\n.dplayer .dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none\n}\n.dplayer .dplayer-bezel .dplayer-fill{fill:hsla(0,0%,100%,.8)\n}\n.dplayer .dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none\n}\n.dplayer .dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{animation:bezel-hide .5s linear\n}\n@keyframes bezel-hide{\n0%{opacity:1;transform:scale(1)\n}\nto{opacity:0;transform:scale(2)\n}\n}\n.dplayer .dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;animation:my-face 5s infinite ease-in-out\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;fill:#fff;-ms-transform-origin:4px 4px;transform-origin:4px 4px\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{animation-delay:.7s\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{animation-delay:.6s\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{animation-delay:.5s\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{animation-delay:.4s\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{animation-delay:.3s\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{animation-delay:.2s\n}\n.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{animation-delay:.1s\n}\n@keyframes diplayer-loading-dot-fade{\n0%{opacity:.7;transform:scale(1.2)\n}\n50%{opacity:.25;transform:scale(.9)\n}\nto{opacity:.25;transform:scale(.85)\n}\n}\n.dplayer .dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%\n}\n.dplayer .dplayer-controller,.dplayer .dplayer-controller-mask{position:absolute;bottom:0;transition:all .3s ease\n}\n.dplayer .dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap:hover .dplayer-thumb{-ms-transform:scale(1)!important;transform:scale(1)!important\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;width:30px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;transition:opacity .1s ease-in-out;word-wrap:normal\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer!important\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:hsla(0,0%,100%,.4);height:3px;transition:all .5s ease;will-change:width\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width\n}\n.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;transition:all .3s ease-in-out;-ms-transform:scale(0);transform:scale(0)\n}\n.dplayer .dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0\n}\n.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px\n}\n.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px\n}\n.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px\n}\n.dplayer .dplayer-controller .dplayer-icons #dplayer-menu{stroke:#ddd;stroke-width:1px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;transition:all .2s ease-in-out;vertical-align:middle;box-sizing:border-box;display:inline-block\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-icon:hover{opacity:1\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon{color:#fff;width:auto;line-height:22px;font-size:14px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon{padding:10px 9px 9px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-fill{fill:#fff\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer!important;height:100%\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar{width:45px!important\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-thumb{-ms-transform:scale(1)!important;transform:scale(1)!important\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar{width:45px!important\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-thumb{-ms-transform:scale(1)!important;transform:scale(1)!important\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 5px 0 -5px;vertical-align:middle;height:100%\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;transition:all .3s ease-in-out\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;will-change:width\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;transition:all .3s ease-in-out;-ms-transform:scale(0);transform:scale(0)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting{display:inline-block;height:100%\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;-ms-transform:translateX(170px);transform:translateX(170px);width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;transition:all .3s ease-in-out;overflow:hidden;z-index:2\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{-ms-transform:translateX(0);transform:translateX(0)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;height:180px;text-align:center\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;transition:all .3s ease-in-out\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;background:#aaa;will-change:width\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;transition:all .3s ease-in-out;background:#aaa\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-full{display:inline-block;height:100%;position:relative\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon{display:block\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:absolute;top:-30px;z-index:1;display:none\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-quality{position:relative;display:inline-block;height:100%;z-index:2\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list,.dplayer .dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask{display:block\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask{display:none;position:absolute;bottom:38px;left:-18px;width:80px;padding-bottom:12px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list{display:none;font-size:12px;width:80px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;transition:all .3s ease-in-out;overflow:hidden;color:#fff;text-align:center\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item{height:25px;box-sizing:border-box;cursor:pointer;line-height:25px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover{background-color:hsla(0,0%,100%,.1)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment{display:inline-block;height:100%\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box{position:absolute;right:0;bottom:50px;-ms-transform:translateX(382px);transform:translateX(382px);border-radius:2px;transition:all .3s ease-in-out;z-index:2\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box.dplayer-comment-box-open{-ms-transform:translateX(0);transform:translateX(0)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon{height:24px;width:24px;position:absolute;top:5px;left:7px;padding:0;opacity:1\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon:hover .dplayer-fill{fill:#aaa\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon .dplayer-fill{transition:all .2s ease-in-out;fill:#ddd\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box{position:absolute;background:#fff;bottom:40px;left:-93px;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;transition:all .3s ease-in-out;-ms-transform:scale(0);transform:scale(0)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open{-ms-transform:scale(1);transform:scale(1)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-12px;background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 12\"><path fill=\"#FFF\" d=\"M23.7,0c-1.2,0-2.4,0.5-3.2,1.3l-7.7,7.8c-0.4,0.4-1.1,0.4-1.5,0L3.5,1.3C2.7,0.5,1.5,0,0.3,0\"/></svg>');width:24px;height:12px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box input[type=radio]{display:none\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box label{cursor:pointer\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title{font-size:14px;color:#555;padding:6px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type{font-size:0\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#555;border:1px solid #e4e4e6;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked+span{background:#e4e4e6\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color{font-size:0\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label{font-size:0;padding:6px;display:inline-block\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover{animation:my-face 5s infinite ease-in-out;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color input:checked+span{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);border:none!important\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;width:300px;background:#fff;margin:0;height:auto\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon{height:22px;width:22px;position:absolute;top:6px;right:7px;padding:0;opacity:1\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon:hover .dplayer-fill{fill:#aaa\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon .dplayer-fill{transition:all .2s ease-in-out;fill:#ddd\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:100%;text-align:center;display:inline-block;font-size:0;vertical-align:middle;float:right\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;transition:.2s ease-in-out\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:after,.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:\"\";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;transition:.2s ease-in-out\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)\n}\n.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px\n}\n.dplayer .dplayer-menu{position:absolute;width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;overflow:hidden;z-index:3;display:none\n}\n.dplayer .dplayer-menu.dplayer-menu-show{display:block\n}\n.dplayer .dplayer-menu .dplayer-menu-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer\n}\n.dplayer .dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)\n}\n.dplayer .dplayer-menu .dplayer-menu-item .dplayer-menu-label a{color:#eee;font-size:13px;display:inline-block;vertical-align:middle\n}\n.dplayer .dplayer-logo{pointer-events:none;position:absolute;left:20px;top:20px;max-width:50px;max-height:50px\n}\n.dplayer .dplayer-logo img{max-width:100%;max-height:100%;background:none\n}\n.dplayer .dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none\n}\n@keyframes my-face{\n2%{transform:translateY(1.5px) rotate(1.5deg)\n}\n4%{transform:translateY(-1.5px) rotate(-.5deg)\n}\n6%{transform:translateY(1.5px) rotate(-1.5deg)\n}\n8%{transform:translateY(-1.5px) rotate(-1.5deg)\n}\n10%{transform:translateY(2.5px) rotate(1.5deg)\n}\n12%{transform:translateY(-.5px) rotate(1.5deg)\n}\n14%{transform:translateY(-1.5px) rotate(1.5deg)\n}\n16%{transform:translateY(-.5px) rotate(-1.5deg)\n}\n18%{transform:translateY(.5px) rotate(-1.5deg)\n}\n20%{transform:translateY(-1.5px) rotate(2.5deg)\n}\n22%{transform:translateY(.5px) rotate(-1.5deg)\n}\n24%{transform:translateY(1.5px) rotate(1.5deg)\n}\n26%{transform:translateY(.5px) rotate(.5deg)\n}\n28%{transform:translateY(.5px) rotate(1.5deg)\n}\n30%{transform:translateY(-.5px) rotate(2.5deg)\n}\n32%{transform:translateY(1.5px) rotate(-.5deg)\n}\n34%{transform:translateY(1.5px) rotate(-.5deg)\n}\n36%{transform:translateY(-1.5px) rotate(2.5deg)\n}\n38%{transform:translateY(1.5px) rotate(-1.5deg)\n}\n40%{transform:translateY(-.5px) rotate(2.5deg)\n}\n42%{transform:translateY(2.5px) rotate(-1.5deg)\n}\n44%{transform:translateY(1.5px) rotate(.5deg)\n}\n46%{transform:translateY(-1.5px) rotate(2.5deg)\n}\n48%{transform:translateY(-.5px) rotate(.5deg)\n}\n50%{transform:translateY(.5px) rotate(.5deg)\n}\n52%{transform:translateY(2.5px) rotate(2.5deg)\n}\n54%{transform:translateY(-1.5px) rotate(1.5deg)\n}\n56%{transform:translateY(2.5px) rotate(2.5deg)\n}\n58%{transform:translateY(.5px) rotate(2.5deg)\n}\n60%{transform:translateY(2.5px) rotate(2.5deg)\n}\n62%{transform:translateY(-.5px) rotate(2.5deg)\n}\n64%{transform:translateY(-.5px) rotate(1.5deg)\n}\n66%{transform:translateY(1.5px) rotate(-.5deg)\n}\n68%{transform:translateY(-1.5px) rotate(-.5deg)\n}\n70%{transform:translateY(1.5px) rotate(.5deg)\n}\n72%{transform:translateY(2.5px) rotate(1.5deg)\n}\n74%{transform:translateY(-.5px) rotate(.5deg)\n}\n76%{transform:translateY(-.5px) rotate(2.5deg)\n}\n78%{transform:translateY(-.5px) rotate(1.5deg)\n}\n80%{transform:translateY(1.5px) rotate(1.5deg)\n}\n82%{transform:translateY(-.5px) rotate(.5deg)\n}\n84%{transform:translateY(1.5px) rotate(2.5deg)\n}\n86%{transform:translateY(-1.5px) rotate(-1.5deg)\n}\n88%{transform:translateY(-.5px) rotate(2.5deg)\n}\n90%{transform:translateY(2.5px) rotate(-.5deg)\n}\n92%{transform:translateY(.5px) rotate(-.5deg)\n}\n94%{transform:translateY(2.5px) rotate(.5deg)\n}\n96%{transform:translateY(-.5px) rotate(1.5deg)\n}\n98%{transform:translateY(-1.5px) rotate(-.5deg)\n}\n0%,to{transform:translate(0) rotate(0deg)\n}\n}", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("DPlayer",[],t):"object"==typeof exports?exports.DPlayer=t():e.DPlayer=t()})(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";var a={play:["0 0 16 32","M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],pause:["0 0 17 32","M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],"volume-up":["0 0 21 32","M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],"volume-down":["0 0 21 32","M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],"volume-off":["0 0 21 32","M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],loop:["0 0 32 32","M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z"],full:["0 0 32 33","M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"],"full-in":["0 0 32 33","M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"],setting:["0 0 32 28","M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"],right:["0 0 32 32","M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"],comment:["0 0 32 32","M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"],"comment-off":["0 0 32 32","M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"],send:["0 0 32 32","M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"],menu:["0 0 22 32","M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"],camera:["0 0 32 32","M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"]};e.exports=function(e){return'<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="'+a[e][0]+'" width="100%"><use xlink:href="#dplayer-'+e+'"></use><path class="dplayer-fill" d="'+a[e][1]+'" id="dplayer-'+e+'"></path></svg>\n'}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();console.log("%c DPlayer 1.5.0 %c http://dplayer.js.org ","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;"),n(2);var l=n(3),o=n(0),r=n(4),d=n(6),c=n(7),u=n(8),p=/mobile/i.test(window.navigator.userAgent),m=0,v=function(){function e(t){var n=this;a(this,e),this.option=r(t),this.option.element.classList.add("dplayer"),this.option.video.quality&&(this.qualityIndex=this.option.video.defaultQuality,this.quality=this.option.video.quality[this.option.video.defaultQuality]),this.tran=new d(this.option.lang).tran,this.updateBar=function(e,t,n){t=t>0?t:0,t=t<1?t:1,g[e+"Bar"].style[n]=100*t+"%"};var i=["play","pause","canplay","playing","ended","error"];this.event={};for(var s=0;s<i.length;s++)this.event[i[s]]=[];if(this.trigger=function(e){for(var t=0;t<n.event[e].length;t++)n.event[e][t]()},this.element=this.option.element,this.option.danmaku||this.element.classList.add("dplayer-no-danmaku"),p&&this.element.classList.add("dplayer-mobile"),this.element.innerHTML=c.main(t,m,this.tran),this.arrow=this.element.offsetWidth<=500,this.arrow){var v=document.createElement("style");v.innerHTML=".dplayer .dplayer-danmaku{font-size:18px}",document.head.appendChild(v)}this.video=new u(this.element.getElementsByClassName("dplayer-video-current")),this.initVideo(),this.bezel=this.element.getElementsByClassName("dplayer-bezel-icon")[0],this.bezel.addEventListener("animationend",function(){n.bezel.classList.remove("dplayer-bezel-transition")}),this.playButton=this.element.getElementsByClassName("dplayer-play-icon")[0],this.paused=!0,this.playButton.addEventListener("click",function(){n.toggle()});var y=this.element.getElementsByClassName("dplayer-video-wrap")[0],h=this.element.getElementsByClassName("dplayer-controller-mask")[0];if(p){var f=function(){n.element.classList.contains("dplayer-hide-controller")?n.element.classList.remove("dplayer-hide-controller"):n.element.classList.add("dplayer-hide-controller")};y.addEventListener("click",f),h.addEventListener("click",f)}else y.addEventListener("click",function(){n.toggle()}),h.addEventListener("click",function(){n.toggle()});var g={};g.playedBar=this.element.getElementsByClassName("dplayer-played")[0],g.loadedBar=this.element.getElementsByClassName("dplayer-loaded")[0];var k=this.element.getElementsByClassName("dplayer-bar-wrap")[0],b=this.element.getElementsByClassName("dplayer-bar-time")[0],w=void 0,L=0,E=0,x=!1;this.danmakuTime=!1,this.playedTime=!1,window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();var T=function(){n.checkLoading=setInterval(function(){E=n.video.currentTime(),!x&&E<L+.01&&!n.video.attr("paused")&&(n.element.classList.add("dplayer-loading"),x=!0),x&&E>L+.01&&!n.video.attr("paused")&&(n.element.classList.remove("dplayer-loading"),x=!1),L=E},100)},q=function(){clearInterval(n.checkLoading)};this.animationFrame=function(){if(n.playedTime&&(n.updateBar("played",n.video.currentTime()/n.video.duration,"width"),n.element.getElementsByClassName("dplayer-ptime")[0].innerHTML=l.secondToTime(n.video.currentTime()),n.trigger("playing")),n.danmakuTime&&n.option.danmaku&&Q&&n.dan){for(var e=n.dan[n.danIndex],t=[];e&&n.video.currentTime()>parseFloat(e.time);)t.push(e),e=n.dan[++n.danIndex];n.pushDanmaku(t)}window.requestAnimationFrame(n.animationFrame)},window.requestAnimationFrame(this.animationFrame),this.setTime=function(e){e?(n[e+"Time"]=!0,"played"===e&&T()):(n.danmakuTime=!0,n.playedTime=!0,T())},this.clearTime=function(e){e?(n[e+"Time"]=!1,"played"===e&&q()):(n.danmakuTime=!1,n.playedTime=!1,q())},k.addEventListener("click",function(e){var t=e||window.event;w=k.clientWidth;var a=(t.clientX-l.getElementViewLeft(k))/w;a=a>0?a:0,a=a<1?a:1,n.updateBar("played",a,"width"),n.video.seek(parseFloat(g.playedBar.style.width)/100*n.video.duration)}),this.isTipsShow=!1,this.timeTipsHandler=this.timeTipsHandler(k,b).bind(this),k.addEventListener("mousemove",this.timeTipsHandler),k.addEventListener("mouseover",this.timeTipsHandler),k.addEventListener("mouseenter",this.timeTipsHandler),k.addEventListener("mouseout",this.timeTipsHandler),k.addEventListener("mouseleave",this.timeTipsHandler);var B=function(e){var t=e||window.event,a=(t.clientX-l.getElementViewLeft(k))/w;a=a>0?a:0,a=a<1?a:1,n.updateBar("played",a,"width"),n.element.getElementsByClassName("dplayer-ptime")[0].innerHTML=l.secondToTime(a*n.video.duration)},C=function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",B),n.video.seek(parseFloat(g.playedBar.style.width)/100*n.video.duration),n.setTime()};k.addEventListener("mousedown",function(){w=k.clientWidth,n.clearTime(),document.addEventListener("mousemove",B),document.addEventListener("mouseup",C)}),g.volumeBar=this.element.getElementsByClassName("dplayer-volume-bar-inner")[0];var M=this.element.getElementsByClassName("dplayer-volume")[0],N=this.element.getElementsByClassName("dplayer-volume-bar-wrap")[0],z=this.element.getElementsByClassName("dplayer-volume-bar")[0],S=this.element.getElementsByClassName("dplayer-volume-icon")[0];this.switchVolumeIcon=function(){var e=n.element.getElementsByClassName("dplayer-volume-icon")[0];n.video.attr("volume")>=.8?e.innerHTML=o("volume-up"):n.video.attr("volume")>0?e.innerHTML=o("volume-down"):e.innerHTML=o("volume-off")};var D=function(e){var t=e||window.event,a=(t.clientX-l.getElementViewLeft(z)-5.5)/35;n.volume(a)},I=function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",D),M.classList.remove("dplayer-volume-active")};N.addEventListener("click",function(e){var t=e||window.event,a=(t.clientX-l.getElementViewLeft(z)-5.5)/35;n.volume(a)}),N.addEventListener("mousedown",function(){document.addEventListener("mousemove",D),document.addEventListener("mouseup",I),M.classList.add("dplayer-volume-active")}),S.addEventListener("click",function(){n.video.attr("muted")?(n.video.attr("muted",!1),n.switchVolumeIcon(),n.updateBar("volume",n.video.attr("volume"),"width")):(n.video.attr("muted",!0),S.innerHTML=o("volume-off"),n.updateBar("volume",0,"width"))});var H=0;if(!p){var A=function(){n.element.classList.remove("dplayer-hide-controller"),clearTimeout(H),H=setTimeout(function(){n.video.attr("played").length&&(n.element.classList.add("dplayer-hide-controller"),R(),le())},2e3)};this.element.addEventListener("mousemove",A),this.element.addEventListener("click",A)}this.danOpacity=localStorage.getItem("DPlayer-opacity")||.7;var F=c.setting(this.tran),P=this.element.getElementsByClassName("dplayer-setting-icon")[0],O=this.element.getElementsByClassName("dplayer-setting-box")[0],V=this.element.getElementsByClassName("dplayer-mask")[0];O.innerHTML=F.original;var R=function(){O.classList.contains("dplayer-setting-box-open")&&(O.classList.remove("dplayer-setting-box-open"),V.classList.remove("dplayer-mask-show"),setTimeout(function(){O.classList.remove("dplayer-setting-box-narrow"),O.innerHTML=F.original,W()},300))},j=function(){O.classList.add("dplayer-setting-box-open"),V.classList.add("dplayer-mask-show")};V.addEventListener("click",function(){R()}),P.addEventListener("click",function(){j()}),this.loop=this.option.loop;var X=this.element.getElementsByClassName("dplayer-danmaku")[0],Q=!0,W=function(){var e=n.element.getElementsByClassName("dplayer-setting-loop")[0],t=e.getElementsByClassName("dplayer-toggle-setting-input")[0];t.checked=n.loop,e.addEventListener("click",function(){t.checked=!t.checked,t.checked?n.loop=!0:n.loop=!1,R()});var a=n.element.getElementsByClassName("dplayer-setting-showdan")[0],i=a.getElementsByClassName("dplayer-showdan-setting-input")[0];if(i.checked=Q,a.addEventListener("click",function(){if(i.checked=!i.checked,i.checked){if(Q=!0,n.option.danmaku){for(var e=0;e<n.dan.length;e++){if(n.dan[e].time>=n.video.currentTime()){n.danIndex=e;break}n.danIndex=n.dan.length}n.paused||n.setTime("danmaku")}}else Q=!1,n.option.danmaku&&(n.clearTime("danmaku"),X.innerHTML="",n.danTunnel={right:{},top:{},bottom:{}});R()}),n.element.getElementsByClassName("dplayer-setting-speed")[0].addEventListener("click",function(){O.classList.add("dplayer-setting-box-narrow"),O.innerHTML=F.speed;for(var e=O.getElementsByClassName("dplayer-setting-speed-item"),t=0;t<e.length;t++)(function(t){e[t].addEventListener("click",function(){n.video.attr("playbackRate",e[t].dataset.speed),R()})})(t)}),n.option.danmaku){g.danmakuBar=n.element.getElementsByClassName("dplayer-danmaku-bar-inner")[0];var s=n.element.getElementsByClassName("dplayer-danmaku-bar-wrap")[0],o=n.element.getElementsByClassName("dplayer-danmaku-bar")[0],r=n.element.getElementsByClassName("dplayer-setting-danmaku")[0];n.updateBar("danmaku",n.danOpacity,"width");var d=function(e){var t=e||window.event,a=(t.clientX-l.getElementViewLeft(o))/130;a=a>0?a:0,a=a<1?a:1,n.updateBar("danmaku",a,"width");for(var i=n.element.getElementsByClassName("dplayer-danmaku-item"),s=0;s<i.length;s++)i[s].style.opacity=a;n.danOpacity=a,localStorage.setItem("DPlayer-opacity",n.danOpacity)},c=function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",d),r.classList.remove("dplayer-setting-danmaku-active")};s.addEventListener("click",function(e){var t=e||window.event,a=(t.clientX-l.getElementViewLeft(o))/130;a=a>0?a:0,a=a<1?a:1,n.updateBar("danmaku",a,"width");for(var i=n.element.getElementsByClassName("dplayer-danmaku-item"),s=0;s<i.length;s++)i[s].style.opacity=a;n.danOpacity=a,localStorage.setItem("DPlayer-opacity",n.danOpacity)}),s.addEventListener("mousedown",function(){document.addEventListener("mousemove",d),document.addEventListener("mouseup",c),r.classList.add("dplayer-setting-danmaku-active")})}};W(),1!==this.video.duration&&(this.element.getElementsByClassName("dplayer-dtime")[0].innerHTML=this.video.duration?l.secondToTime(this.video.duration):"00:00"),this.danTunnel={right:{},top:{},bottom:{}};var _=getComputedStyle(this.element.getElementsByClassName("dplayer-danmaku-item")[0],null),Y=document.createElement("canvas").getContext("2d");Y.font=_.getPropertyValue("font-size")+" "+_.getPropertyValue("font-family"),this.danmakuMeasure=function(e){return Y.measureText(e).width},this.option.danmaku?(this.danIndex=0,this.readDanmaku()):this.option.autoplay&&!p?this.play():p&&this.pause();var $=this.element.getElementsByClassName("dplayer-comment-input")[0],U=this.element.getElementsByClassName("dplayer-comment-icon")[0],J=this.element.getElementsByClassName("dplayer-comment-box")[0],G=this.element.getElementsByClassName("dplayer-comment-setting-icon")[0],K=this.element.getElementsByClassName("dplayer-comment-setting-box")[0],Z=this.element.getElementsByClassName("dplayer-send-icon")[0],ee=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")},te=function(){if($.blur(),!$.value.replace(/^\s+|\s+$/g,""))return void n.notice(n.tran("Please input danmaku content!"));var e={token:n.option.danmaku.token,player:n.option.danmaku.id,author:n.option.danmaku.user,time:n.video.currentTime(),text:$.value,color:n.element.querySelector(".dplayer-comment-setting-color input:checked").value,type:n.element.querySelector(".dplayer-comment-setting-type input:checked").value};n.option.apiBackend.send(n.option.danmaku.api,e),$.value="",le(),n.dan.splice(n.danIndex,0,e),n.danIndex++;var t={text:ee(e.text),color:e.color,type:e.type,border:"2px solid "+n.option.theme};n.pushDanmaku(t)},ne=function(){K.classList.contains("dplayer-comment-setting-open")&&K.classList.remove("dplayer-comment-setting-open")},ae=function(){K.classList.contains("dplayer-comment-setting-open")?K.classList.remove("dplayer-comment-setting-open"):K.classList.add("dplayer-comment-setting-open")},ie=0,se=0,le=function(){J.classList.contains("dplayer-comment-box-open")&&(J.classList.remove("dplayer-comment-box-open"),V.classList.remove("dplayer-mask-show"),n.element.classList.remove("dplayer-show-controller"),clearInterval(ie),clearTimeout(se),ne())},oe=function(){J.classList.contains("dplayer-comment-box-open")||(J.classList.add("dplayer-comment-box-open"),V.classList.add("dplayer-mask-show"),n.element.classList.add("dplayer-show-controller"),ie=setInterval(function(){clearTimeout(H)},1e3),se=setTimeout(function(){$.focus()},300))};V.addEventListener("click",function(){le()}),U.addEventListener("click",function(){oe()}),G.addEventListener("click",function(){ae()}),this.element.getElementsByClassName("dplayer-comment-setting-color")[0].addEventListener("click",function(){n.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span')&&(G.getElementsByClassName("dplayer-fill")[0].style.fill=n.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value)}),$.addEventListener("click",function(){ne()}),$.addEventListener("keydown",function(e){13===(e||window.event).keyCode&&te()}),Z.addEventListener("click",te);var re=function(){for(var e=X.offsetWidth,t=n.element.getElementsByClassName("dplayer-danmaku-item"),a=0;a<t.length;a++)t[a].style.transform="translateX(-"+e+"px)"};this.element.addEventListener("fullscreenchange",function(){re()}),this.element.addEventListener("mozfullscreenchange",function(){re()}),this.element.addEventListener("webkitfullscreenchange",function(){re()}),this.element.getElementsByClassName("dplayer-full-icon")[0].addEventListener("click",function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():n.element.requestFullscreen?n.element.requestFullscreen():n.element.mozRequestFullScreen?n.element.mozRequestFullScreen():n.element.webkitRequestFullscreen?n.element.webkitRequestFullscreen():n.video.attr("webkitEnterFullscreen")&&n.video.current.webkitEnterFullscreen(),re()}),this.element.getElementsByClassName("dplayer-full-in-icon")[0].addEventListener("click",function(){n.element.classList.contains("dplayer-fulled")?n.element.classList.remove("dplayer-fulled"):(n.element.classList.add("dplayer-fulled"),re())});var de=function(e){var t=document.activeElement.tagName.toUpperCase(),a=document.activeElement.getAttribute("contenteditable");if("INPUT"!==t&&"TEXTAREA"!==t&&""!==a&&"true"!==a){var i=e||window.event,s=void 0;switch(i.keyCode){case 32:i.preventDefault(),n.toggle();break;case 37:i.preventDefault(),n.video.seek(n.video.currentTime()-5);break;case 39:i.preventDefault(),n.video.seek(n.video.currentTime()+5);break;case 38:i.preventDefault(),s=n.video.attr("volume")+.1,n.volume(s);break;case 40:i.preventDefault(),s=n.video.attr("volume")-.1,n.volume(s)}}};this.option.hotkey&&document.addEventListener("keydown",de),document.addEventListener("keydown",function(e){switch((e||window.event).keyCode){case 27:n.element.classList.contains("dplayer-fulled")&&(n.element.classList.remove("dplayer-fulled"),re())}});var ce=this.element.getElementsByClassName("dplayer-menu")[0];if(this.element.addEventListener("contextmenu",function(e){var t=e||window.event;t.preventDefault(),ce.classList.add("dplayer-menu-show");var a=n.element.getBoundingClientRect(),i=t.clientX-a.left,s=t.clientY-a.top;i+ce.offsetWidth>=a.width?(ce.style.right=a.width-i+"px",ce.style.left="initial"):(ce.style.left=t.clientX-n.element.getBoundingClientRect().left+"px",ce.style.right="initial"),s+ce.offsetHeight>=a.height?(ce.style.bottom=a.height-s+"px",ce.style.top="initial"):(ce.style.top=t.clientY-n.element.getBoundingClientRect().top+"px",ce.style.bottom="initial"),V.classList.add("dplayer-mask-show"),V.addEventListener("click",function(){V.classList.remove("dplayer-mask-show"),ce.classList.remove("dplayer-menu-show")})}),this.option.video.quality&&this.element.getElementsByClassName("dplayer-quality-list")[0].addEventListener("click",function(e){e.target.classList.contains("dplayer-quality-item")&&n.switchQuality(e.target.dataset.index)}),this.option.screenshot){var ue=this.element.getElementsByClassName("dplayer-camera-icon")[0];ue.addEventListener("click",function(){var e=document.createElement("canvas");e.width=n.video.attr("videoWidth"),e.height=n.video.attr("videoHeight"),e.getContext("2d").drawImage(n.video.current,0,0,e.width,e.height),ue.href=e.toDataURL(),ue.download="DPlayer.png"})}m++}return s(e,[{key:"play",value:function(e){"[object Number]"===Object.prototype.toString.call(e)&&this.video.seek(e),this.paused=!1,this.video.attr("paused")&&(this.bezel.innerHTML=o("play"),this.bezel.classList.add("dplayer-bezel-transition")),this.playButton.innerHTML=o("pause"),this.video.play(),this.setTime(),this.element.classList.add("dplayer-playing"),this.trigger("play")}},{key:"pause",value:function(){this.paused=!0,this.element.classList.remove("dplayer-loading"),this.video.attr("paused")||(this.bezel.innerHTML=o("pause"),this.bezel.classList.add("dplayer-bezel-transition")),this.ended=!1,this.playButton.innerHTML=o("play"),this.video.pause(),this.clearTime(),this.element.classList.remove("dplayer-playing"),this.trigger("pause")}},{key:"volume",value:function(e){e=e>0?e:0,e=e<1?e:1,this.updateBar("volume",e,"width"),this.video.attr("volume",e),this.video.attr("muted")&&this.video.attr("muted",!1),this.switchVolumeIcon()}},{key:"toggle",value:function(){this.video.attr("paused")?this.play():this.pause()}},{key:"on",value:function(e,t){"function"==typeof t&&this.event[e].push(t)}},{key:"_readAllEndpoints",value:function(e,t){for(var n=this,a=[],i=0,s=0;s<e.length;++s)this.option.apiBackend.read(e[s],function(s){return function(l,o){if(++i,l?(l.response?n.notice(l.response.msg):n.notice("Request was unsuccessful: "+l.status),a[s]=[]):a[s]=o,i===e.length)return t(a)}}(s))}},{key:"readDanmaku",value:function(){var e=this,t=/mobile/i.test(window.navigator.userAgent),n=void 0;n=this.option.danmaku.maximum?this.option.danmaku.api+"?id="+this.option.danmaku.id+"&max="+this.option.danmaku.maximum:this.option.danmaku.api+"?id="+this.option.danmaku.id;var a=(this.option.danmaku.addition||[]).slice(0);a.push(n),this._readAllEndpoints(a,function(n){e.danIndex=0,e.dan=[].concat.apply([],n).sort(function(e,t){return e.time-t.time}),e.element.getElementsByClassName("dplayer-danloading")[0].style.display="none",e.option.autoplay&&!t?e.play():t&&e.pause()})}},{key:"pushDanmaku",value:function(e){var t=this,n=this.element.getElementsByClassName("dplayer-danmaku")[0],a=this.arrow?24:30,s=n.offsetWidth,l=n.offsetHeight,o=parseInt(l/a),r=function(e){var t=e.offsetWidth||parseInt(e.style.width),a=e.getBoundingClientRect().right||n.getBoundingClientRect().right+t;return n.getBoundingClientRect().right-a},d=function(e){return(s+e)/5},c=function(e,n,a){for(var l=s/d(a),c=0;;c++){var u=function(a){var i=t.danTunnel[n][a+""];if(!i||!i.length)return t.danTunnel[n][a+""]=[e],e.addEventListener("animationend",function(){t.danTunnel[n][a+""].splice(0,1)}),{v:a%o};for(var c=0;c<i.length;c++){var u=r(i[c])-10;if(u<=s-l*d(parseInt(i[c].style.width))||u<=0)break;if(c===i.length-1)return t.danTunnel[n][a+""].push(e),e.addEventListener("animationend",function(){t.danTunnel[n][a+""].splice(0,1)}),{v:a%o}}}(c);if("object"===(void 0===u?"undefined":i(u)))return u.v}};"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]);for(var u=document.createDocumentFragment(),p=0;p<e.length;p++)(function(i){e[i].type||(e[i].type="right"),e[i].color||(e[i].color="#fff");var l=document.createElement("div");l.classList.add("dplayer-danmaku-item"),l.classList.add("dplayer-danmaku-"+e[i].type),l.innerHTML=e[i].text,l.style.opacity=t.danOpacity,l.style.color=e[i].color,l.style.border=e[i].border,l.addEventListener("animationend",function(){n.removeChild(l)});var o=t.danmakuMeasure(e[i].text);switch(e[i].type){case"right":l.style.width=o+1+"px",l.style.top=a*c(l,e[i].type,o)+"px",l.style.transform="translateX(-"+s+"px)";break;case"top":l.style.top=a*c(l,e[i].type)+"px";break;case"bottom":l.style.bottom=a*c(l,e[i].type)+"px";break;default:console.error("Can't handled danmaku type: "+e[i].type)}l.classList.add("dplayer-danmaku-move"),u.appendChild(l)})(p);return n.appendChild(u),u}},{key:"switchVideo",value:function(e,t){this.video.attr("poster",e.pic?e.pic:""),this.video.attr("src",e.url),this.pause(),t&&(this.dan=[],this.danIndex=0,this.element.getElementsByClassName("dplayer-danloading")[0].style.display="block",this.updateBar("played",0,"width"),this.updateBar("loaded",0,"width"),this.element.getElementsByClassName("dplayer-ptime")[0].innerHTML="00:00",this.element.getElementsByClassName("dplayer-danmaku")[0].innerHTML="",this.danTuel={right:{},top:{},bottom:{}},this.option.danmaku=t,this.readDanmaku())}},{key:"initVideo",value:function(){var e=this;if(("auto"===this.option.video.type?/m3u8(#|\?|$)/i.exec(this.option.video.url):"hls"===this.option.video.type)&&Hls.isSupported()){var t=new Hls;t.attachMedia(this.video.current),t.on(Hls.Events.MEDIA_ATTACHED,function(){t.loadSource(e.option.video.url),t.on(Hls.Events.MANIFEST_PARSED,function(e,t){this.notice("manifest loaded, found "+t.levels.length+" quality level")})})}if(("auto"===this.option.video.type?/.flv(#|\?|$)/i.exec(this.option.video.url):"flv"===this.option.video.type)&&flvjs.isSupported()){var n=flvjs.createPlayer({type:"flv",url:this.option.video.url});n.attachMediaElement(this.video.current),n.load()}this.option.danmaku&&this.video.on("all","seeking",function(){for(var t=0;t<e.dan.length;t++){if(e.dan[t].time>=e.video.currentTime())return void(e.danIndex=t);e.danIndex=e.dan.length}}),this.video.on("all","durationchange",function(t,n){1!==n.duration&&(e.element.getElementsByClassName("dplayer-dtime")[0].innerHTML=l.secondToTime(e.video.duration))}),this.video.on("current","progress",function(t,n){var a=n.buffered.length?n.buffered.end(n.buffered.length-1)/n.duration:0;e.updateBar("loaded",a,"width")}),this.video.on("all","error",function(){e.notice(e.tran("This video fails to load"),-1),e.trigger("pause")}),this.video.on("current","canplay",function(){e.trigger("canplay")}),this.ended=!1,this.video.on("all","ended",function(t){t===e.video.videos.length-1&&(e.updateBar("played",1,"width"),e.loop?(e.video.switch(0),e.video.play()):(e.ended=!0,e.pause(),e.trigger("ended")),e.danIndex=0)}),this.video.on("current","play",function(){e.paused&&e.play()}),this.video.on("current","pause",function(){e.paused||e.pause()}),this.video.attr("volume",parseInt(this.element.getElementsByClassName("dplayer-volume-bar-inner")[0].style.width)/100)}},{key:"switchQuality",value:function(e){var t=this;if(this.qualityIndex!==e&&!this.switchingQuality){this.qualityIndex=e,this.switchingQuality=!0,this.quality=this.option.video.quality[e],this.element.getElementsByClassName("dplayer-quality-icon")[0].innerHTML=this.quality.name,this.video.pause();var n=c.video(!1,null,this.option.screenshot,"auto",this.quality.url),a=(new DOMParser).parseFromString(n,"text/html").body.firstChild,i=this.element.getElementsByClassName("dplayer-video-wrap")[0];i.insertBefore(a,i.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=new u([a],this.prevVideo.duration),this.initVideo(),this.video.seek(this.prevVideo.currentTime()),this.notice(this.tran("Switching to")+" "+this.quality.name+" "+this.tran("quality"),-1),this.video.on("current","canplay",function(){if(t.prevVideo){if(t.video.currentTime()!==t.prevVideo.currentTime())return void t.video.seek(t.prevVideo.currentTime());i.removeChild(t.prevVideo.current),t.video.current.classList.add("dplayer-video-current"),t.video.play(),t.prevVideo=null,t.notice(t.tran("Switched to")+" "+t.quality.name+" "+t.tran("quality")),t.switchingQuality=!1}})}}},{key:"timeTipsHandler",value:function(e,t){var n=this,a=function(e){var t=0,n=0;do{t+=e.offsetTop||0,n+=e.offsetLeft||0,e=e.offsetParent}while(e);return{top:t,left:n}};return function(i){if(n.video.duration){var s=i.clientX,o=a(e).left,r=s-o;switch(t.innerText=l.secondToTime(n.video.duration*(r/e.offsetWidth)),t.style.left=r-20+"px",i.type){case"mouseenter":case"mouseover":case"mousemove":if(n.isTipsShow)return;t.classList.remove("hidden"),n.isTipsShow=!0;break;case"mouseleave":case"mouseout":if(!n.isTipsShow)return;t.classList.add("hidden"),n.isTipsShow=!1}}}}},{key:"notice",value:function(e,t){var n=this.element.getElementsByClassName("dplayer-notice")[0];n.innerHTML=e,n.style.opacity=1,this.noticeTime&&clearTimeout(this.noticeTime),t&&t<0||(this.noticeTime=setTimeout(function(){n.style.opacity=0},t||2e3))}}]),e}();e.exports=v},function(e,t){},function(e,t,n){"use strict";e.exports={secondToTime:function(e){var t=function(e){return e<10?"0"+e:""+e},n=parseInt(e/60),a=parseInt(e-60*n);return t(n)+":"+t(a)},getElementViewLeft:function(e){var t=e.offsetLeft,n=e.offsetParent,a=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==n&&n!==e;)t+=n.offsetLeft,n=n.offsetParent;else for(;null!==n;)t+=n.offsetLeft,n=n.offsetParent;return t-a}}},function(e,t,n){"use strict";var a=n(5);e.exports=function(e){/mobile/i.test(window.navigator.userAgent)&&(e.autoplay=!1);var t={element:document.getElementsByClassName("dplayer")[0],autoplay:!1,theme:"#b7daff",loop:!1,lang:-1!==navigator.language.indexOf("zh")?"zh":"en",screenshot:!0,hotkey:!0,preload:"auto",apiBackend:a,contextmenu:[{text:"关于作者",link:"http://diygod.me"},{text:"播放器意见反馈",link:"https://github.com/DIYgod/DPlayer/issues"},{text:"关于 DPlayer 播放器",link:"https://github.com/DIYgod/DPlayer"}]};for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n]);return"[object Array]"!==Object.prototype.toString.call(e.video.url)&&(e.video.url=[e.video.url]),e.video&&!e.video.hasOwnProperty("type")&&(e.video.type="auto"),e.danmaku&&!e.danmaku.hasOwnProperty("user")&&(e.danmaku.user="DIYgod"),e.video.quality&&(e.video.url=[e.video.quality[e.video.defaultQuality].url]),e}},function(e,t,n){"use strict";var a=function(e,t,n,a,i){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4===s.readyState){if(s.status>=200&&s.status<300||304===s.status){var e=JSON.parse(s.responseText);return 1!==e.code?a(s,e):n(s,e)}i(s)}},s.open(null!==t?"POST":"GET",e,!0),s.send(null!==t?JSON.stringify(t):null)};e.exports={send:function(e,t){a(e,t,function(e,t){console.log("Post danmaku: ",t)},function(e,t){alert(t.msg)},function(e){console.log("Request was unsuccessful: "+e.status)})},read:function(e,t){a(e,null,function(e,n){t(null,n.danmaku)},function(e,n){t({status:e.status,response:n})},function(e){t({status:e.status,response:null})})}}},function(e,t,n){"use strict";var a={"Danmaku is loading":"弹幕加载中",Top:"顶部",Bottom:"底部",Rolling:"滚动","Input danmaku, hit Enter":"输入弹幕，回车发送","About author":"关于作者","DPlayer feedback":"播放器意见反馈","About DPlayer":"关于 DPlayer 播放器",Loop:"洗脑循环",Speed:"速度","Opacity for danmaku":"弹幕透明度",Normal:"正常","Please input danmaku content!":"要输入弹幕内容啊喂！","Set danmaku color":"设置弹幕颜色","Set danmaku type":"设置弹幕类型",Danmaku:"弹幕","This video fails to load":"视频加载失败","Switching to":"正在切换至","Switched to":"已经切换至",quality:"画质"};e.exports=function(e){var t=this;this.lang=e,this.tran=function(e){return"en"===t.lang?e:"zh"===t.lang?a[e]:void 0}}},function(e,t,n){"use strict";var a=n(0),i={main:function(e,t,n){for(var s="",l=0;l<e.video.url.length;l++)s+=i.video(0===l,e.video.pic,e.screenshot,e.video.url.length?"metadata":e.preload,e.video.url[l]);return'<div class="dplayer-mask"></div><div class="dplayer-video-wrap">'+s+(e.logo?'<div class="dplayer-logo"><img src="'+e.logo+'"></div>':"")+'<div class="dplayer-danmaku"><div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div></div><div class="dplayer-bezel"><span class="dplayer-bezel-icon"></span>'+(e.danmaku?'<span class="dplayer-danloading">'+n("Danmaku is loading")+"</span>":"")+'<span class="diplayer-loading-icon"><svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg></span></div></div><div class="dplayer-controller-mask"></div><div class="dplayer-controller"><div class="dplayer-icons dplayer-icons-left"><button class="dplayer-icon dplayer-play-icon">'+a("play")+'</button><div class="dplayer-volume"><button class="dplayer-icon dplayer-volume-icon">'+a("volume-down")+'</button><div class="dplayer-volume-bar-wrap"><div class="dplayer-volume-bar"><div class="dplayer-volume-bar-inner" style="width: 70%; background: '+e.theme+';"><span class="dplayer-thumb" style="background: '+e.theme+'"></span></div></div></div></div><span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span></div><div class="dplayer-icons dplayer-icons-right">'+(e.video.quality?'<div class="dplayer-quality"><button class="dplayer-icon dplayer-quality-icon">'+e.video.quality[e.video.defaultQuality].name+'</button><div class="dplayer-quality-mask">'+i.qualityList(e.video.quality)+"</div></div>":"")+(e.screenshot?'<a href="#" class="dplayer-icon dplayer-camera-icon">'+a("camera")+"</a>":"")+'<div class="dplayer-comment"><button class="dplayer-icon dplayer-comment-icon">'+a("comment")+'</button><div class="dplayer-comment-box"><button class="dplayer-icon dplayer-comment-setting-icon">'+a("menu")+'</button><div class="dplayer-comment-setting-box"><div class="dplayer-comment-setting-color"><div class="dplayer-comment-setting-title">'+n("Set danmaku color")+'</div><label><input type="radio" name="dplayer-danmaku-color-'+t+'" value="#fff" checked><span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span></label><label><input type="radio" name="dplayer-danmaku-color-'+t+'" value="#e54256"><span style="background: #e54256"></span></label><label><input type="radio" name="dplayer-danmaku-color-'+t+'" value="#ffe133"><span style="background: #ffe133"></span></label><label><input type="radio" name="dplayer-danmaku-color-'+t+'" value="#64DD17"><span style="background: #64DD17"></span></label><label><input type="radio" name="dplayer-danmaku-color-'+t+'" value="#39ccff"><span style="background: #39ccff"></span></label><label><input type="radio" name="dplayer-danmaku-color-'+t+'" value="#D500F9"><span style="background: #D500F9"></span></label></div><div class="dplayer-comment-setting-type"><div class="dplayer-comment-setting-title">'+n("Set danmaku type")+'</div><label><input type="radio" name="dplayer-danmaku-type-'+t+'" value="top"><span>'+n("Top")+'</span></label><label><input type="radio" name="dplayer-danmaku-type-'+t+'" value="right" checked><span>'+n("Rolling")+'</span></label><label><input type="radio" name="dplayer-danmaku-type-'+t+'" value="bottom"><span>'+n("Bottom")+'</span></label></div></div><input class="dplayer-comment-input" type="text" placeholder="'+n("Input danmaku, hit Enter")+'" maxlength="30"><button class="dplayer-icon dplayer-send-icon">'+a("send")+'</button></div></div><div class="dplayer-setting"><button class="dplayer-icon dplayer-setting-icon">'+a("setting")+'</button><div class="dplayer-setting-box"></div></div><div class="dplayer-full"><button class="dplayer-icon dplayer-full-in-icon">'+a("full-in")+'</button><button class="dplayer-icon dplayer-full-icon">'+a("full")+'</button></div></div><div class="dplayer-bar-wrap"><div class="dplayer-bar-time hidden">00:00</div><div class="dplayer-bar"><div class="dplayer-loaded" style="width: 0;"></div><div class="dplayer-played" style="width: 0; background: '+e.theme+'"><span class="dplayer-thumb" style="background: '+e.theme+'"></span></div></div></div></div>'+i.contextmenuList(e.contextmenu)+'<div class="dplayer-notice"></div>'},contextmenuList:function(e){for(var t='<div class="dplayer-menu">',n=0;n<e.length;n++)t+='<div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="'+e[n].link+'">'+e[n].text+"</a></span></div>";return t+="</div>"},qualityList:function(e){for(var t='<div class="dplayer-quality-list">',n=0;n<e.length;n++)t+='<div class="dplayer-quality-item" data-index="'+n+'">'+e[n].name+"</div>";return t+="</div>"},video:function(e,t,n,a,i){return'<video class="dplayer-video '+(e?'dplayer-video-current"':"")+'" '+(t?'poster="'+t+'"':"")+" webkit-playsinline playsinline "+(n?'crossorigin="anonymous"':"")+" "+(a?'preload="'+a+'"':"")+' src="'+i+'"></video>'},setting:function(e){return{original:'<div class="dplayer-setting-item dplayer-setting-speed"><span class="dplayer-label">'+e("Speed")+'</span><div class="dplayer-toggle">'+a("right")+'</div></div><div class="dplayer-setting-item dplayer-setting-loop"><span class="dplayer-label">'+e("Loop")+'</span><div class="dplayer-toggle"><input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle"><label for="dplayer-toggle"></label></div></div><div class="dplayer-setting-item dplayer-setting-showdan"><span class="dplayer-label">'+e("Danmaku")+'</span><div class="dplayer-toggle"><input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan"><label for="dplayer-toggle-dan"></label></div></div><div class="dplayer-setting-item dplayer-setting-danmaku"><span class="dplayer-label">'+e("Opacity for danmaku")+'</span><div class="dplayer-danmaku-bar-wrap"><div class="dplayer-danmaku-bar"><div class="dplayer-danmaku-bar-inner" style="width: '+100*(localStorage.getItem("DPlayer-opacity")||.7)+'%"><span class="dplayer-thumb"></span></div></div></div></div>',speed:'<div class="dplayer-setting-speed-item" data-speed="0.5"><span class="dplayer-label">0.5</span></div><div class="dplayer-setting-speed-item" data-speed="0.75"><span class="dplayer-label">0.75</span></div><div class="dplayer-setting-speed-item" data-speed="1"><span class="dplayer-label">'+e("Normal")+'</span></div><div class="dplayer-setting-speed-item" data-speed="1.25"><span class="dplayer-label">1.25</span></div><div class="dplayer-setting-speed-item" data-speed="1.5"><span class="dplayer-label">1.5</span></div><div class="dplayer-setting-speed-item" data-speed="2"><span class="dplayer-label">2</span></div>'}}};e.exports=i},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(){function e(t,n){var i=this;a(this,e),this.videos=t,this.multi=this.videos.length>1,this.index=0,this.current=this.videos[this.index],this.duration=n||0,this.durationArr=[],this.eventAll=[],this.eventCurrent=[],this.on("all","durationchange",function(e,t){1!==t.duration&&(i.durationArr[e]=t.duration,n||(i.duration=i.durationArr.reduce(function(e,t){return e+t})))}),this.on("current","end",function(){i.switch(i.index+1)})}return i(e,[{key:"switch",value:function(e,t){this.index!==e?(this.videos[e].classList.add("dplayer-video-current"),this.current.paused||this.videos[e].play(),this.current.classList.remove("dplayer-video-current"),this.current.pause(),this.index=e,this.current=this.videos[this.index],this.videos[e].currentTime=t||0):this.videos[e].currentTime=t||0}},{key:"on",value:function(e,t,n){var a=this;if("function"==typeof n&&("all"===e?(this.eventAll[t]||(this.eventAll[t]=[]),this.eventAll[t].push(n)):(this.eventCurrent[t]||(this.eventCurrent[t]=[]),this.eventCurrent[t].push(n)),-1===["seeking"].indexOf(t)))for(var i=0;i<this.videos.length;i++)(function(i){a.videos[i].addEventListener(t,function(){"all"!==e&&a.videos[i]!==a.current||n(i,a.videos[i])})})(i)}},{key:"trigger",value:function(e,t){var n="all"===e?this.eventAll:this.eventCurrent;if(n[t])for(var a=0;a<n[t].length;a++)n[t][a]()}},{key:"currentTime",value:function(){return this.durationArr.slice(0,this.index).length?this.durationArr.slice(0,this.index).reduce(function(e,t){return e+t})+this.current.currentTime:this.current.currentTime}},{key:"seek",value:function(e){e=Math.max(e,0),e=Math.min(e,this.duration);for(var t=0,n=0;n<=e;)n+=this.durationArr[t],t++;var a=void 0;a=this.durationArr.slice(0,this.index).length?e-this.durationArr.slice(0,t-1).reduce(function(e,t){return e+t}):e,this.switch(t-1,a),this.trigger("all","seeking")}},{key:"attr",value:function(e,t){if(void 0!==t)for(var n=0;n<this.videos.length;n++)this.videos[n][e]=t;return this.current[e]}},{key:"play",value:function(){this.current.play()}},{key:"pause",value:function(){this.current.pause()}},{key:"toggle",value:function(){this.current.paused?this.play():this.pause()}}]),e}();e.exports=s}])});
//# sourceMappingURL=DPlayer.min.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dplayer"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2cebd22e", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("fda7f360", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../.0.28.4@css-loader/index.js?-autoprefixer!../../.11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2cebd22e\",\"scoped\":false,\"hasInlineConfig\":false}!../../.1.3.3@postcss-loader/index.js!./DPlayer.min.css", function() {
     var newContent = require("!!../../.0.28.4@css-loader/index.js?-autoprefixer!../../.11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2cebd22e\",\"scoped\":false,\"hasInlineConfig\":false}!../../.1.3.3@postcss-loader/index.js!./DPlayer.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_DPlayer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_DPlayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_DPlayer__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: '#FADFA3'
    },
    loop: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: 'zh'
    },
    screenshot: {
      type: Boolean,
      default: false
    },
    hotkey: {
      type: Boolean,
      default: true
    },
    preload: {
      type: String,
      default: 'auto'
    },
    contextmenu: {
      type: Array
    },
    logo: {
      type: String
    },
    video: {
      type: Object,
      required: true,
      validator: function validator(value) {
        return typeof value.url === 'string';
      }
    }
  },
  data: function data() {
    return {
      dp: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var player = this.dp = new __WEBPACK_IMPORTED_MODULE_0_DPlayer___default.a({
      element: this.$el,
      autoplay: this.autoplay,
      theme: this.theme,
      loop: this.loop,
      lang: this.lang,
      screenshot: this.screenshot,
      hotkey: this.hotkey,
      preload: this.preload,
      contextmenu: this.contextmenu,
      logo: this.logo,
      video: {
        url: this.video.url,
        pic: this.video.pic,
        type: 'normal'
      }
    });

    player.on('play', function () {
      _this.$emit('play');
    });

    player.on('pause', function () {
      _this.$emit('pause');
    });

    player.on('canplay', function () {
      _this.$emit('canplay');
    });

    player.on('playing', function () {
      _this.$emit('playing');
    });

    player.on('ended', function () {
      _this.$emit('ended');
    });

    player.on('error', function () {
      _this.$emit('error');
    });
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading
    }
  }, [_c('div', {
    slot: "copy"
  }, [_c('d-player', {
    ref: "player",
    attrs: {
      "video": _vm.video,
      "lang": _vm.lang,
      "autoplay": _vm.autoplay,
      "contextmenu": _vm.contextmenu,
      "logo": _vm.logo,
      "screenshot": true
    },
    on: {
      "play": _vm.play
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _vm._l((_vm.testimonials), function(client, index) {
    return _c('span', {
      key: "index"
    }, [_c('button', {
      staticClass: "btn btn-color",
      staticStyle: {
        "margin-right": "10px"
      },
      on: {
        "click": function($event) {
          _vm.switchVideo(client.clip)
        }
      }
    }, [_vm._v("Watch " + _vm._s(client.name))])])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6867bb96", module.exports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(166),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/about/Testimonials.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Testimonials.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6867bb96", Component.options)
  } else {
    hotAPI.reload("data-v-6867bb96", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});