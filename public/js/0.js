webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(524),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-831f5044", Component.options)
  } else {
    hotAPI.reload("data-v-831f5044", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-carousel v0.6.5
 * (c) 2017 todd.beauchamp@ssense.com
 * https://github.com/ssense/vue-carousel#readme
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCarousel=t():e.VueCarousel=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Slide=t.Carousel=void 0;var i=n(1),r=a(i),o=n(21),s=a(o),u=function(e){e.component("carousel",r["default"]),e.component("slide",s["default"])};t["default"]={install:u},t.Carousel=r["default"],t.Slide=s["default"]},function(e,t,n){function a(e){n(2)}var i=n(7)(n(8),n(26),a,null,null);e.exports=i.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);n(5)("70056466",a,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel{position:relative}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:flex;flex-direction:row;backface-visibility:hidden}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(a[r]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=d[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(r(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(r(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:o}}}}function i(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(h)return v;a.parentNode.removeChild(a)}if(g){var r=p++;a=f||(f=i()),t=o.bind(null,a,r,!1),n=o.bind(null,a,r,!0)}else a=i(),t=s.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function o(e,t,n,a){var i=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function s(e,t){var n=t.css,a=t.media,i=t.sourceMap;if(a&&e.setAttribute("media",a),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,l=n(6),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=l(e,t);return a(i),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r],s=d[o.id];s.refs--,n.push(s)}t?(i=l(e,t),a(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],a={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],u=r[2],l=r[3],d={id:e+":"+i,css:s,media:u,sourceMap:l};a[o]?a[o].parts.push(d):n.push(a[o]={id:o,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,a,i){var r,o=e=e||{},s=typeof e["default"];"object"!==s&&"function"!==s||(r=e,o=e["default"]);var u="function"==typeof o?o.options:o;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),a&&(u._scopeId=a);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,c=d?u.render:u.beforeCreate;d?u.render=function(e,t){return l.call(t),c(e,t)}:u.beforeCreate=c?[].concat(c,l):[l]}return{esModule:r,exports:o,options:u}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),r=a(i),o=n(10),s=a(o),u=n(11),l=a(u),d=n(16),c=a(d),f=n(21),p=a(f);t["default"]={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:l["default"],Pagination:c["default"],Slide:p["default"]},data:function(){return{browserWidth:null,carouselWidth:null,currentPage:0,dragOffset:0,dragStartX:0,mousedown:!1,slideCount:0}},mixins:[r["default"]],props:{easing:{type:String,"default":"ease"},minSwipeDistance:{type:Number,"default":8},navigationClickTargetSize:{type:Number,"default":8},navigationEnabled:{type:Boolean,"default":!1},navigationNextLabel:{type:String,"default":"▶"},navigationPrevLabel:{type:String,"default":"◀"},paginationActiveColor:{type:String,"default":"#000000"},paginationColor:{type:String,"default":"#efefef"},paginationEnabled:{type:Boolean,"default":!0},paginationPadding:{type:Number,"default":10},paginationSize:{type:Number,"default":10},perPage:{type:Number,"default":2},perPageCustom:{type:Array},scrollPerPage:{type:Boolean,"default":!1},speed:{type:Number,"default":500},loop:{type:Boolean,"default":!1}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var e=this.perPageCustom,t=this.browserWidth,n=e.sort(function(e,t){return e[0]>t[0]?-1:1}),a=n.filter(function(e){return t>=e[0]}),i=a[0]&&a[0][1];return i||this.perPage},canAdvanceForward:function(){return this.loop||this.currentPage<this.pageCount-1},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){var e=this.currentPage,t=this.slideWidth,n=this.dragOffset,a=this.scrollPerPage?e*t*this.currentPerPage:e*t;return(a+n)*-1},isHidden:function(){return this.carouselWidth<=0},pageCount:function(){var e=this.slideCount,t=this.currentPerPage;if(this.scrollPerPage){var n=Math.ceil(e/t);return n<1?1:n}return e-(this.currentPerPage-1)},slideWidth:function(){var e=this.carouselWidth,t=this.currentPerPage;return e/t},transitionStyle:function(){return this.speed/1e3+"s "+this.easing+" transform"}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(e){e&&"backward"===e&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage()):(!e||e&&"backward"!==e)&&this.canAdvanceForward&&this.goToPage(this.getNextPage())},attachMutationObserver:function(){var e=this,t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(t){var n={attributes:!0,data:!0};this.mutationObserver=new t(function(){e.$nextTick(function(){e.computeCarouselWidth()})}),this.$parent.$el&&this.mutationObserver.observe(this.$parent.$el,n)}},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){return this.carouselWidth=this.$el&&this.$el.clientWidth||0,this.carouselWidth},getSlideCount:function(){this.slideCount=this.$slots&&this.$slots["default"]&&this.$slots["default"].filter(function(e){return e.tag&&e.tag.indexOf("slide")>-1}).length||0},goToPage:function(e){e>=0&&e<=this.pageCount&&(this.currentPage=e,this.$emit("pageChange",this.currentPage))},handleMousedown:function(e){e.touches||e.preventDefault(),this.mousedown=!0,this.dragStartX="ontouchstart"in window?e.touches[0].clientX:e.clientX},handleMouseup:function(){this.mousedown=!1,this.dragOffset=0},handleMousemove:function(e){if(this.mousedown){var t="ontouchstart"in window?e.touches[0].clientX:e.clientX,n=this.dragStartX-t;this.dragOffset=n,this.dragOffset>this.minSwipeDistance?(this.handleMouseup(),this.advancePage()):this.dragOffset<-this.minSwipeDistance&&(this.handleMouseup(),this.advancePage("backward"))}},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward){var e=this.pageCount-1;this.currentPage=e>=0?e:0}}},mounted:function(){this.$isServer||(window.addEventListener("resize",(0,s["default"])(this.computeCarouselWidth,16)),"ontouchstart"in window?(this.$el.addEventListener("touchstart",this.handleMousedown),this.$el.addEventListener("touchend",this.handleMouseup),this.$el.addEventListener("touchmove",this.handleMousemove)):(this.$el.addEventListener("mousedown",this.handleMousedown),this.$el.addEventListener("mouseup",this.handleMouseup),this.$el.addEventListener("mousemove",this.handleMousemove))),this.attachMutationObserver(),this.computeCarouselWidth()},destroyed:function(){this.$isServer||(this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),"ontouchstart"in window?this.$el.removeEventListener("touchmove",this.handleMousemove):this.$el.removeEventListener("mousemove",this.handleMousemove))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{autoplay:{type:Boolean,"default":!1},autoplayTimeout:{type:Number,"default":2e3},autoplayHoverPause:{type:Boolean,"default":!0}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.advancePage,this.autoplayTimeout))}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};t["default"]=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var a=void 0;return function(){var i=void 0,r=function(){a=null,n||e.apply(i)},o=n&&!a;clearTimeout(a),a=setTimeout(r,t),o&&e.apply(i)}};t["default"]=n},function(e,t,n){function a(e){n(12)}var i=n(7)(n(14),n(15),a,"data-v-7fed18e9",null);e.exports=i.exports},function(e,t,n){var a=n(13);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);n(5)("58a44a73",a,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel-navigation-button[data-v-7fed18e9]{position:absolute;top:50%;box-sizing:border-box;color:#000;text-decoration:none}.VueCarousel-navigation-next[data-v-7fed18e9]{right:0;transform:translateY(-50%) translateX(100%)}.VueCarousel-navigation-prev[data-v-7fed18e9]{left:0;transform:translateY(-50%) translateX(-100%)}.VueCarousel-navigation--disabled[data-v-7fed18e9]{opacity:.5;cursor:default}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"navigation",data:function(){return{parentContainer:this.$parent}},props:{clickTargetSize:{type:Number,"default":8},nextLabel:{type:String,"default":"▶"},prevLabel:{type:String,"default":"◀"}},computed:{canAdvanceForward:function(){return this.parentContainer.canAdvanceForward||!1},canAdvanceBackward:function(){return this.parentContainer.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(e){e?this.$parent.advancePage(e):this.$parent.advancePage()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VueCarousel-navigation"},[n("a",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev","class":{"VueCarousel-navigation--disabled":!e.canAdvanceBackward},style:"padding: "+e.clickTargetSize+"px; margin-right: -"+e.clickTargetSize+"px;",attrs:{href:"#"},domProps:{innerHTML:e._s(e.prevLabel)},on:{click:function(t){t.preventDefault(),e.triggerPageAdvance("backward")}}}),e._v(" "),n("a",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next","class":{"VueCarousel-navigation--disabled":!e.canAdvanceForward},style:"padding: "+e.clickTargetSize+"px; margin-left: -"+e.clickTargetSize+"px;",attrs:{href:"#"},domProps:{innerHTML:e._s(e.nextLabel)},on:{click:function(t){t.preventDefault(),e.triggerPageAdvance()}}})])},staticRenderFns:[]}},function(e,t,n){function a(e){n(17)}var i=n(7)(n(19),n(20),a,"data-v-7e42136f",null);e.exports=i.exports},function(e,t,n){var a=n(18);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);n(5)("cc30be7c",a,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel-pagination[data-v-7e42136f]{width:100%;float:left;text-align:center}.VueCarousel-dot-container[data-v-7e42136f]{display:inline-block;margin:0 auto}.VueCarousel-dot[data-v-7e42136f]{float:left;cursor:pointer}.VueCarousel-dot-inner[data-v-7e42136f]{border-radius:100%}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"pagination",data:function(){return{parentContainer:this.$parent}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.parentContainer.pageCount>1,expression:"parentContainer.pageCount > 1"}],staticClass:"VueCarousel-pagination"},[n("div",{staticClass:"VueCarousel-dot-container"},e._l(e.parentContainer.pageCount,function(t,a){return n("div",{staticClass:"VueCarousel-dot","class":{"VueCarousel-dot--active":a===e.parentContainer.currentPage},style:"\n        margin-top: "+2*e.parentContainer.paginationPadding+"px;\n        padding: "+e.parentContainer.paginationPadding+"px;\n      ",on:{click:function(t){e.parentContainer.goToPage(a)}}},[n("div",{staticClass:"VueCarousel-dot-inner",style:"\n          width: "+e.parentContainer.paginationSize+"px;\n          height: "+e.parentContainer.paginationSize+"px;\n          background: "+(a===e.parentContainer.currentPage?e.parentContainer.paginationActiveColor:e.parentContainer.paginationColor)+";\n        "})])}))])},staticRenderFns:[]}},function(e,t,n){function a(e){n(22)}var i=n(7)(n(24),n(25),a,null,null);e.exports=i.exports},function(e,t,n){var a=n(23);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);n(5)("647f10ac",a,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel-slide{flex-basis:inherit;flex-grow:0;flex-shrink:0;user-select:none}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"slide",data:function(){return{width:null}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VueCarousel-slide"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VueCarousel"},[n("div",{staticClass:"VueCarousel-wrapper"},[n("div",{staticClass:"VueCarousel-inner",style:"\n        transform: translateX("+e.currentOffset+"px);\n        transition: "+e.transitionStyle+";\n        flex-basis: "+e.slideWidth+"px;\n        visibility: "+(e.slideWidth?"visible":"hidden")+"\n      "},[e._t("default")],2)]),e._v(" "),e.paginationEnabled&&e.pageCount>0?n("pagination"):e._e(),e._v(" "),e.navigationEnabled?n("navigation",{attrs:{clickTargetSize:e.navigationClickTargetSize,nextLabel:e.navigationNextLabel,prevLabel:e.navigationPrevLabel}}):e._e()],1)},staticRenderFns:[]}}])});

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports['default'] = {
    props: ['icon', 'rule', 'text', 'max', 'interval'],
    data: function data() {
        return {
            count: 0
        };
    },
    mounted: function mounted() {
        var _this = this;

        window.setInterval(function () {
            if (_this.count < _this.max) {
                _this.count++;
            } else {
                _this.count = 0;
            }
        }, this.interval);
    }
};

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Counter = __webpack_require__(484);

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    components: {
        'psg-counter': _Counter2['default']
    },
    computed: {
        housed: function housed() {
            if (this.$cookie.get('language') === 'es') {
                return 'Alojado';
            } else {
                return 'Housed';
            }
        },
        vocRehab: function vocRehab() {
            if (this.$cookie.get('language') === 'es') {
                return 'Rehabilitación Vocacional';
            } else {
                return 'Voc Rehab';
            }
        },
        outpatients: function outpatients() {
            if (this.$cookie.get('language') === 'es') {
                return 'Pacientes ambulatorios';
            } else {
                return 'Outpatients';
            }
        },
        counseled: function counseled() {
            if (this.$cookie.get('language') === 'es') {
                return 'Aconsejado';
            } else {
                return 'Counseled';
            }
        },
        educated: function educated() {
            if (this.$cookie.get('language') === 'es') {
                return 'Educado';
            } else {
                return 'Educated';
            }
        },
        volunteerHours: function volunteerHours() {
            if (this.$cookie.get('language') === 'es') {
                return 'Horas de Voluntariado';
            } else {
                return 'Volunteer Hours';
            }
        }
    }
}; //
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
//

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueCarousel = __webpack_require__(441);

var _TextToSpeech = __webpack_require__(96);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

exports['default'] = {
    data: function data() {
        return {
            events: []
        };
    },

    computed: {
        readMore: function readMore() {
            if (this.$cookie.get('language') === 'es') {
                return 'Lee mas...';
            } else {
                return 'Read More...';
            }
        }
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        http.get('/carousel')
        //.use(saCache)
        .then(function (response) {
            var events = response.body.events;
            var reformatted = [];

            if (_this.$cookie.get('language') === 'es') {
                events.forEach(function (event) {
                    reformatted.push({
                        headline: event.es_headline,
                        hero_text: event.es_hero_text,
                        category: {
                            category_name: event.category.es_category_name
                        },
                        slug: event.slug,
                        image: event.image,
                        link: event.link
                    });
                });
            } else {
                events.forEach(function (event) {
                    reformatted.push({
                        headline: event.en_headline,
                        hero_text: event.en_hero_text,
                        category: {
                            category_name: event.category.en_category_name
                        },
                        slug: event.slug,
                        image: event.image,
                        link: event.link
                    });
                });
            }

            _this.events = reformatted;
            _this.loading = false;
        })['catch'](function (error) {
            console.error(error);
        });
    },

    methods: {
        copy: function copy(headline, heroText) {
            return headline + ' ' + heroText;
        }
    },
    components: {
        Carousel: _vueCarousel.Carousel,
        Slide: _vueCarousel.Slide,
        'psg-speak': _TextToSpeech2['default']
    }
};

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(96);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    props: ['box'],
    components: {
        'psg-speak': _TextToSpeech2['default']
    },
    computed: {
        title: function title() {
            if (this.$cookie.get('language') === 'es') {
                return this.box.es_title;
            } else {
                return this.box.en_title;
            }
        },
        copy: function copy() {
            if (this.$cookie.get('language') === 'es') {
                return this.box.es_copy;
            } else {
                return this.box.en_copy;
            }
        }
    }
}; //
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

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _InfoBox = __webpack_require__(487);

var _InfoBox2 = _interopRequireDefault(_InfoBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            infoBoxes: []
        };
    },

    methods: {
        getInfoBoxes: function getInfoBoxes() {
            var _this = this;

            http.get('/info-boxes')
            //.use(saCache)
            .then(function (response) {
                _this.infoBoxes = response.body.info_boxes;
            })['catch'](function (error) {
                console.error(error);
            });
        }
    },
    created: function created() {
        this.getInfoBoxes();
    },

    components: {
        'psg-info-box': _InfoBox2['default']
    }
}; //
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

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(96);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    components: {
        'psg-speak': _TextToSpeech2['default']
    }
}; //
//
//
//
//
//
//
//

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueCarousel = __webpack_require__(441);

exports['default'] = {
    components: {
        Carousel: _vueCarousel.Carousel,
        Slide: _vueCarousel.Slide
    },
    computed: {
        ourSupporters: function ourSupporters() {
            if (this.$cookie.get('language') === 'es') {
                return 'Nuestros partidarios';
            } else {
                return 'Our Supporters';
            }
        }
    }
}; //
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

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ProgressBars = __webpack_require__(494);

var _ProgressBars2 = _interopRequireDefault(_ProgressBars);

var _TextToSpeech = __webpack_require__(96);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

exports['default'] = {
    components: {
        'psg-progress-bars': _ProgressBars2['default'],
        'psg-speak': _TextToSpeech2['default']
    },
    computed: {
        ourAgency: function ourAgency() {
            if (this.$cookie.get('language') === 'es') {
                return 'Nuestra Agencia';
            } else {
                return 'Our Agency';
            }
        },
        ourExpertise: function ourExpertise() {
            if (this.$cookie.get('language') === 'es') {
                return 'Nuestra Experiencia';
            } else {
                return 'Our Expertise';
            }
        },
        treeOfLife: function treeOfLife() {
            if (this.$cookie.get('language') === 'es') {
                return 'Shanti Árbol de la vida';
            } else {
                return 'Shanti Tree of Life';
            }
        },
        treeOfLifeText: function treeOfLifeText() {
            if (this.$cookie.get('language') === 'es') {
                return '\n' + 'El Shanti Tree of Life, que predomina en la sala de terapia de grupo de Shanti, simboliza a muchos hombres y mujeres que hemos perdido ante la enfermedad del VIH / SIDA.';
            } else {
                return 'The Shanti Tree of Life, which predominates the group therapy room at Shanti, symbolizes the many men and women we have lost to the disease of HIV/AIDS.';
            }
        },
        ourExpertiseText: function ourExpertiseText() {
            if (this.$cookie.get('language') === 'es') {
                return 'Desde el comienzo de la pandemia del VIH / SIDA, el Grupo Phoenix Shanti ha estado proporcionando un salvavidas a hombres y mujeres en el Valle del Sol, proporcionando servicios de hospicio a la vivienda durante sus décadas de existencia.';
            } else {
                return 'Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence.';
            }
        },
        bullet1: function bullet1() {
            if (this.$cookie.get('language') === 'es') {
                return 'Ayudamos a hombres y mujeres VIH + a morir con dignidad';
            } else {
                return 'We helped HIV+ men and women die with dignity';
            }
        },
        bullet2: function bullet2() {
            if (this.$cookie.get('language') === 'es') {
                return 'Ayudamos a las enfermeras a cuidarlas';
            } else {
                return 'We trained nurse assists to care for them';
            }
        },
        bullet3: function bullet3() {
            if (this.$cookie.get('language') === 'es') {
                return 'Ayudamos a los adictos a recuperar sus vidas';
            } else {
                return 'We helped addicts recover their lives';
            }
        },
        bullet4: function bullet4() {
            if (this.$cookie.get('language') === 'es') {
                return 'Albergamos a los desamparados cuando nadie más';
            } else {
                return 'We housed the homeless when no one else would';
            }
        }
    }
};

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports['default'] = {
    props: ['bar', 'now', 'goal'],
    data: function data() {
        return {
            width: 0
        };
    },
    mounted: function mounted() {
        var _this = this;

        window.setInterval(function () {
            if (_this.width < _this.now / _this.goal * 100) {
                _this.width++;
            } else {
                _this.width = 0;
            }
        }, 100);
    }
};

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ProgressBar = __webpack_require__(493);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _TextToSpeech = __webpack_require__(96);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
//
//
//
//
//
//
//

exports['default'] = {
    components: {
        'psg-progress-bar': _ProgressBar2['default'],
        'psg-speak': _TextToSpeech2['default']
    },
    computed: {
        ourFundraising: function ourFundraising() {
            if (this.$cookie.get('language') === 'es') {
                return 'Nuestra recaudación de fondos';
            } else {
                return 'Our Fundraising';
            }
        },
        ourFundraisingText: function ourFundraisingText() {
            if (this.$cookie.get('language') === 'es') {
                return 'Phoenix Shanti Group tiene una historia de recaudar fondos para la comunidad de VIH / SIDA. He aquí un desglose de algunos de sus esfuerzos este año.';
            } else {
                return 'Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year.';
            }
        },
        generalFunds: function generalFunds() {
            if (this.$cookie.get('language') === 'es') {
                return 'Fondos Generales';
            } else {
                return 'General Funds';
            }
        },
        aidsWalkArizona: function aidsWalkArizona() {
            if (this.$cookie.get('language') === 'es') {
                return 'Caminata del SIDA Arizona';
            } else {
                return 'AIDS Walk Arizona';
            }
        },
        eventDollarsRaised: function eventDollarsRaised() {
            if (this.$cookie.get('language') === 'es') {
                return 'Evento Dólares Recaudados';
            } else {
                return 'Event Dollars Raised';
            }
        }
    }
};

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueCarousel = __webpack_require__(441);

var _EventCarousel = __webpack_require__(486);

var _EventCarousel2 = _interopRequireDefault(_EventCarousel);

var _InfoBoxes = __webpack_require__(488);

var _InfoBoxes2 = _interopRequireDefault(_InfoBoxes);

var _Counters = __webpack_require__(485);

var _Counters2 = _interopRequireDefault(_Counters);

var _IntroText = __webpack_require__(489);

var _IntroText2 = _interopRequireDefault(_IntroText);

var _LogoCarousel = __webpack_require__(490);

var _LogoCarousel2 = _interopRequireDefault(_LogoCarousel);

var _OurTeam = __webpack_require__(492);

var _OurTeam2 = _interopRequireDefault(_OurTeam);

var _OurExpertise = __webpack_require__(491);

var _OurExpertise2 = _interopRequireDefault(_OurExpertise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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

exports['default'] = {
    methods: {
        //            getCarousel() {
        //                http
        //                    .get('/carousel')
        //                    .use(saCache)
        //                    .then(response => {
        //                        this.events = response.body.events;
        //                    }).catch(error => {
        //                        console.error(error);
        //                    });
        //            }
    },
    components: {
        Carousel: _vueCarousel.Carousel,
        Slide: _vueCarousel.Slide,
        'psg-event-carousel': _EventCarousel2['default'],
        'psg-info-boxes': _InfoBoxes2['default'],
        'psg-counters': _Counters2['default'],
        'psg-intro-text': _IntroText2['default'],
        'psg-our-expertise': _OurExpertise2['default'],
        'psg-logo-carousel': _LogoCarousel2['default'],
        'psg-our-team': _OurTeam2['default']
    }
};

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(526),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/Counter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Counter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a0d28d2", Component.options)
  } else {
    hotAPI.reload("data-v-8a0d28d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(445),
  /* template */
  __webpack_require__(531),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/Counters.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Counters.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b040af28", Component.options)
  } else {
    hotAPI.reload("data-v-b040af28", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(499),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/EventCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EventCarousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-058e7316", Component.options)
  } else {
    hotAPI.reload("data-v-058e7316", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(447),
  /* template */
  __webpack_require__(527),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/InfoBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InfoBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f4f7150", Component.options)
  } else {
    hotAPI.reload("data-v-8f4f7150", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(448),
  /* template */
  __webpack_require__(517),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/InfoBoxes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InfoBoxes.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60f41d06", Component.options)
  } else {
    hotAPI.reload("data-v-60f41d06", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(449),
  /* template */
  __webpack_require__(528),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/IntroText.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IntroText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e0477d8", Component.options)
  } else {
    hotAPI.reload("data-v-9e0477d8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(450),
  /* template */
  __webpack_require__(516),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/LogoCarousel.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LogoCarousel.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6087be20", Component.options)
  } else {
    hotAPI.reload("data-v-6087be20", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(451),
  /* template */
  __webpack_require__(500),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/OurExpertise.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OurExpertise.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f672dcc", Component.options)
  } else {
    hotAPI.reload("data-v-0f672dcc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  null,
  /* template */
  __webpack_require__(498),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/OurTeam.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OurTeam.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-052746e4", Component.options)
  } else {
    hotAPI.reload("data-v-052746e4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(452),
  /* template */
  __webpack_require__(522),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/ProgressBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProgressBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7580edc1", Component.options)
  } else {
    hotAPI.reload("data-v-7580edc1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(453),
  /* template */
  __webpack_require__(510),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/home/ProgressBars.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProgressBars.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e486b82", Component.options)
  } else {
    hotAPI.reload("data-v-3e486b82", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('br')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-052746e4", module.exports)
  }
}

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "text-center"
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "fa fa-refresh fa-spin fa-5x color"
  })]), _vm._v(" "), _c('carousel', {
    attrs: {
      "loop": true,
      "autoplay": true,
      "autoplayTimeout": 7000,
      "perPage": 1,
      "navigationEnabled": true
    }
  }, _vm._l((_vm.events), function(event, index) {
    return _c('slide', {
      key: index,
      staticClass: "pale-purple"
    }, [_c('div', {
      staticClass: "event-header"
    }, [_c('h4', [_vm._v(_vm._s(event.category.category_name))])]), _vm._v(" "), _c('div', {
      staticClass: "carousel-container"
    }, [(event.image) ? _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-5"
    }, [(event.image && event.link) ? _c('div', [_c('a', {
      attrs: {
        "href": event.link,
        "target": "_blank"
      }
    }, [_c('img', {
      staticClass: "thumbnail img-responsive",
      attrs: {
        "src": '/uploads/events/' + event.image,
        "alt": event.headline
      }
    })])]) : (event.image && !event.link) ? _c('div', [_c('a', {
      attrs: {
        "href": event.link,
        "target": "_blank"
      }
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'blog/view',
          params: {
            slug: event.slug
          }
        }
      }
    }, [_c('img', {
      staticClass: "thumbnail img-responsive",
      attrs: {
        "src": '/uploads/events/' + event.image,
        "alt": event.headline
      }
    })])], 1)]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "col-md-7"
    }, [_c('h1', [_vm._v(_vm._s(event.headline))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(event.hero_text)
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": {
          name: 'blog/view',
          params: {
            slug: event.slug
          }
        }
      }
    }, [_vm._v(_vm._s(_vm.readMore))]), _vm._v(" "), _c('psg-speak', {
      attrs: {
        "text": _vm.copy(event.headline, event.hero_text)
      }
    })], 1)])]) : _vm._e(), _vm._v(" "), (!event.image) ? _c('div', [_c('h1', [_vm._v(_vm._s(event.headline))]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(event.hero_text)
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": {
          name: 'blog/view',
          params: {
            slug: event.slug
          }
        }
      }
    }, [_vm._v(_vm._s(_vm.readMore))]), _vm._v(" "), _c('psg-speak', {
      attrs: {
        "text": _vm.copy(event.headline, event.hero_text)
      }
    })], 1) : _vm._e()])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-058e7316", module.exports)
  }
}

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "block-heading-two text-center"
  }, [_c('h3', {
    staticClass: "color"
  }, [_c('span', [_vm._v(_vm._s(_vm.ourAgency))])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4 col-sm-6"
  }, [_c('h4', {
    staticClass: "color"
  }, [_vm._v(_vm._s(_vm.ourExpertise))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.ourExpertiseText))]), _vm._v(" "), _c('ul', {
    staticClass: "list-2"
  }, [_c('li', [_vm._v(_vm._s(_vm.bullet1))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.bullet2))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.bullet3))]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.bullet4))])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": "Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence.",
      "primary": "true"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 col-sm-6"
  }, [_c('h4', {
    staticClass: "color"
  }, [_vm._v(_vm._s(_vm.treeOfLife))]), _vm._v(" "), _c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/img/tree.jpg",
      "alt": "Tree of Life"
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.treeOfLifeText))]), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": _vm.treeOfLifeText,
      "primary": "true"
    }
  })], 1), _vm._v(" "), _c('psg-progress-bars')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f672dcc", module.exports)
  }
}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-4 col-sm-6"
  }, [_c('h4', {
    staticClass: "color"
  }, [_vm._v(_vm._s(_vm.ourFundraising))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.ourFundraisingText))]), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": "Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year.",
      "primary": "true"
    }
  }), _vm._v(" "), _c('h6', [_vm._v(_vm._s(_vm.generalFunds))]), _vm._v(" "), _c('psg-progress-bar', {
    attrs: {
      "bar": "progress-bar progress-bar-red",
      "now": "16300",
      "goal": "30000"
    }
  }), _vm._v(" "), _c('h6', [_vm._v(_vm._s(_vm.aidsWalkArizona))]), _vm._v(" "), _c('psg-progress-bar', {
    attrs: {
      "bar": "progress-bar progress-bar-green",
      "now": "1995",
      "goal": "1500"
    }
  }), _vm._v(" "), _c('h6', [_vm._v(_vm._s(_vm.eventDollarsRaised))]), _vm._v(" "), _c('psg-progress-bar', {
    attrs: {
      "bar": "progress-bar progress-bar-lblue",
      "now": "50",
      "goal": "1000"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e486b82", module.exports)
  }
}

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "block-heading-six",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('h4', {
    staticClass: "bg-color",
    staticStyle: {
      "margin-bottom": "0",
      "width": "98%"
    }
  }, [_vm._v(_vm._s(_vm.ourSupporters))])]), _vm._v(" "), _c('div', {
    staticClass: "client-three",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_c('carousel', {
    attrs: {
      "loop": true,
      "autoplay": true,
      "autoplayTimeout": 7000,
      "perPage": 1,
      "navigationEnabled": true
    }
  }, [_c('slide', {
    staticClass: "pale-purple"
  }, [_c('div', {
    staticClass: "carousel-container less-padding"
  }, [_c('div', {
    staticClass: "row frame"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://www.auntritas.org/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/aunt_ritas.png",
      "alt": "Aunt Rita's Foundation"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "https://vsuw.org",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/united_way.jpeg",
      "alt": "Valley of the Sun United Way"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "https://elizabethtayloraidsfoundation.org/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/elizabeth_taylor.png",
      "alt": "Elizabeth Taylor AIDS Foundation"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "https://broadwaycares.org/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/broadway_cares.jpeg",
      "alt": "Broadway Cares"
    }
  })])])])])]), _vm._v(" "), _c('slide', {
    staticClass: "pale-purple"
  }, [_c('div', {
    staticClass: "carousel-container logo-carousel less-padding"
  }, [_c('div', {
    staticClass: "row frame"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://www.macys.com",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/macys.jpeg",
      "alt": "Macy's"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "https://www.aidshealth.org/#/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/AHF.png",
      "alt": "AIDS Healthcare Foundation"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://www.topazsystems.com/index.html",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/topaz.png",
      "alt": "Topaz Systems"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://triyoung.com/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/triyoung.png",
      "alt": "TriYoung Business Solutions"
    }
  })])])])])]), _vm._v(" "), _c('slide', {
    staticClass: "pale-purple"
  }, [_c('div', {
    staticClass: "carousel-container logo-carousel less-padding"
  }, [_c('div', {
    staticClass: "row frame"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "https://www.copperstardigital.com",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/copper_star.png",
      "alt": "Copper Star Digital"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://www.la-z-boy.com/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/lazboy.png",
      "alt": "La-Z-Boy"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://www.buffaloexchange.com",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/buffalo_exchange.jpeg",
      "alt": "Buffalo Exchange"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('a', {
    attrs: {
      "href": "http://www.trashcity.com/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "logo-carousel",
    attrs: {
      "src": "/uploads/sponsors/trash_city.jpg",
      "alt": "Trash City Beads"
    }
  })])])])])])], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6087be20", module.exports)
  }
}

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-boxes"
  }, [_c('div', {
    staticClass: "icon-box-8 text-center"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.infoBoxes), function(box, index) {
    return _c('div', {
      key: index
    }, [_c('psg-info-box', {
      attrs: {
        "box": box
      }
    })], 1)
  })), _vm._v(" "), _c('br')])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60f41d06", module.exports)
  }
}

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress pb-sm"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('div', {
    "class": _vm.bar,
    style: ({
      width: _vm.width + '%'
    }),
    attrs: {
      "role": "progressbar",
      "aria-valuenow": _vm.now,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("% Complete (success)")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7580edc1", module.exports)
  }
}

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-block"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('psg-event-carousel', {
    attrs: {
      "color": "pale-purple"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('psg-info-boxes'), _vm._v(" "), _c('div', {
    staticClass: "divider-1"
  }), _vm._v(" "), _c('psg-our-expertise'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('psg-counters')], 1), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('psg-our-team'), _vm._v(" "), _c('div', {
    staticClass: "divider-1"
  }), _vm._v(" "), _c('psg-logo-carousel')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-831f5044", module.exports)
  }
}

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "counter-item"
  }, [_c('i', {
    "class": _vm.icon
  }), _vm._v(" "), _c('span', {
    staticClass: "number-count"
  }, [_vm._v(_vm._s(_vm.count))]), _vm._v(" "), _c('hr', {
    "class": _vm.rule
  }), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.text))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8a0d28d2", module.exports)
  }
}

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-3 col-sm-6 info-box"
  }, [_c('div', {
    staticClass: "icon-box-8-item",
    "class": _vm.box.color
  }, [_c('div', {
    staticClass: "icon-box-8-icon"
  }, [_c('a', {
    staticClass: "icon-box-8-icon-top",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    "class": _vm.box.icon
  })]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), (_vm.box.link.match('http')) ? _c('div', [_c('h4', [_c('a', {
    attrs: {
      "href": _vm.box.link,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.title))])])]) : (!_vm.box.link.match('http')) ? _c('div', [_c('h4', [_c('router-link', {
    attrs: {
      "to": _vm.box.link
    }
  }, [_vm._v(_vm._s(_vm.title))])], 1)]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.copy))]), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": _vm.copy
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "icon-box-8-icon-bottom",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8f4f7150", module.exports)
  }
}

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-center"
  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v("Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.")]), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": "Phoenix Shanti Group. Most Amazing HIV Agency in the Valley. Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.",
      "primary": "true"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', {
    staticClass: "color"
  }, [_vm._v("Phoenix Shanti Group")]), _vm._v(". Most Amazing HIV Agency in the Valley. "), _c('span', {
    staticClass: "color"
  }, [_vm._v("Literally")]), _vm._v(".")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9e0477d8", module.exports)
  }
}

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-one text-center"
  }, [_c('div', {
    staticClass: "counter-content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-2 col-sm-4 col-xs-6"
  }, [_c('psg-counter', {
    attrs: {
      "icon": "fa fa-home red",
      "rule": "br-red",
      "text": _vm.housed,
      "max": "58",
      "interval": "1000"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 col-xs-6"
  }, [_c('psg-counter', {
    attrs: {
      "icon": "fa fa-briefcase green",
      "rule": "br-green",
      "text": _vm.vocRehab,
      "max": "146",
      "interval": "500"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 col-xs-6"
  }, [_c('psg-counter', {
    attrs: {
      "icon": "fa fa-ambulance lblue",
      "rule": "br-lblue",
      "text": _vm.outpatients,
      "max": "146",
      "interval": "500"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 col-xs-6"
  }, [_c('psg-counter', {
    attrs: {
      "icon": "fa fa-heart yellow",
      "rule": "br-yellow",
      "text": _vm.counseled,
      "max": "146",
      "interval": "500"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 col-xs-6"
  }, [_c('psg-counter', {
    attrs: {
      "icon": "fa fa-book purple",
      "rule": "br-purple",
      "text": _vm.educated,
      "max": "146",
      "interval": "500"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-2 col-sm-4 col-xs-6"
  }, [_c('psg-counter', {
    attrs: {
      "icon": "fa fa-clock-o brown",
      "rule": "br-brown",
      "text": _vm.volunteerHours,
      "max": "1200",
      "interval": "100"
    }
  })], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b040af28", module.exports)
  }
}

/***/ })

});