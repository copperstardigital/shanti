webpackJsonp([0],{250:function(e,t,a){var n=a(75)(a(659),a(727),null,null);e.exports=n.exports},642:function(e,t,a){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}var s,r,o,i=a(32),l=n(i),u=a(7),c=n(u);!function(a,n){"object"==(0,c.default)(t)&&"object"==(0,c.default)(e)?e.exports=n():(r=[],s=n,void 0!==(o="function"==typeof s?s.apply(t,r):s)&&(e.exports=o))}(0,function(){return function(e){function t(n){if(a[n])return a[n].exports;var s=a[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Slide=t.Carousel=void 0;var s=a(1),r=n(s),o=a(21),i=n(o),l=function(e){e.component("carousel",r.default),e.component("slide",i.default)};t.default={install:l},t.Carousel=r.default,t.Slide=i.default},function(e,t,a){function n(e){a(2)}var s=a(7)(a(8),a(26),n,null,null);e.exports=s.exports},function(e,t,a){var n=a(3);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(5)("70056466",n,!0)},function(e,t,a){t=e.exports=a(4)(),t.push([e.id,".VueCarousel{position:relative}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:flex;flex-direction:row;backface-visibility:hidden}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&n[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=d[a.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(r(a.parts[s]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var o=[],s=0;s<a.parts.length;s++)o.push(r(a.parts[s]));d[a.id]={id:a.id,refs:1,parts:o}}}}function s(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function r(e){var t,a,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(v)return g;n.parentNode.removeChild(n)}if(m){var r=h++;n=f||(f=s()),t=o.bind(null,n,r,!1),a=o.bind(null,n,r,!0)}else n=s(),t=i.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function o(e,t,a,n){var s=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,s);else{var r=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function i(e,t){var a=t.css,n=t.media,s=t.sourceMap;if(n&&e.setAttribute("media",n),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent((0,l.default)(s))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var u="undefined"!=typeof document,c=a(6),d={},p=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,v=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a){v=a;var s=c(e,t);return n(s),function(t){for(var a=[],r=0;r<s.length;r++){var o=s[r],i=d[o.id];i.refs--,a.push(i)}t?(s=c(e,t),n(s)):s=[];for(var r=0;r<a.length;r++){var i=a[r];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete d[i.id]}}}};var _=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],n={},s=0;s<t.length;s++){var r=t[s],o=r[0],i=r[1],l=r[2],u=r[3],c={id:e+":"+s,css:i,media:l,sourceMap:u};n[o]?n[o].parts.push(c):a.push(n[o]={id:o,parts:[c]})}return a}},function(e,t){e.exports=function(e,t,a,n,s){var r,o=e=e||{},i=(0,c.default)(e.default);"object"!==i&&"function"!==i||(r=e,o=e.default);var l="function"==typeof o?o.options:o;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n);var u;if(s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):a&&(u=a),u){var d=l.functional,p=d?l.render:l.beforeCreate;d?l.render=function(e,t){return u.call(t),p(e,t)}:l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:r,exports:o,options:l}}},function(e,t,a){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(9),r=n(s),o=a(10),i=n(o),l=a(11),u=n(l),c=a(16),d=n(c),p=a(21),f=n(p);t.default={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:u.default,Pagination:d.default,Slide:f.default},data:function(){return{browserWidth:null,carouselWidth:null,currentPage:0,dragOffset:0,dragStartX:0,mousedown:!1,slideCount:0}},mixins:[r.default],props:{easing:{type:String,default:"ease"},minSwipeDistance:{type:Number,default:8},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"▶"},navigationPrevLabel:{type:String,default:"◀"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},scrollPerPage:{type:Boolean,default:!1},speed:{type:Number,default:500},loop:{type:Boolean,default:!1}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var e=this.perPageCustom,t=this.browserWidth,a=e.sort(function(e,t){return e[0]>t[0]?-1:1}),n=a.filter(function(e){return t>=e[0]});return n[0]&&n[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.currentPage<this.pageCount-1},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){var e=this.currentPage,t=this.slideWidth,a=this.dragOffset;return-1*((this.scrollPerPage?e*t*this.currentPerPage:e*t)+a)},isHidden:function(){return this.carouselWidth<=0},pageCount:function(){var e=this.slideCount,t=this.currentPerPage;if(this.scrollPerPage){var a=Math.ceil(e/t);return a<1?1:a}return e-(this.currentPerPage-1)},slideWidth:function(){return this.carouselWidth/this.currentPerPage},transitionStyle:function(){return this.speed/1e3+"s "+this.easing+" transform"}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(e){e&&"backward"===e&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage()):(!e||e&&"backward"!==e)&&this.canAdvanceForward&&this.goToPage(this.getNextPage())},attachMutationObserver:function(){var e=this,t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(t){var a={attributes:!0,data:!0};this.mutationObserver=new t(function(){e.$nextTick(function(){e.computeCarouselWidth()})}),this.$parent.$el&&this.mutationObserver.observe(this.$parent.$el,a)}},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){return this.carouselWidth=this.$el&&this.$el.clientWidth||0,this.carouselWidth},getSlideCount:function(){this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter(function(e){return e.tag&&e.tag.indexOf("slide")>-1}).length||0},goToPage:function(e){e>=0&&e<=this.pageCount&&(this.currentPage=e,this.$emit("pageChange",this.currentPage))},handleMousedown:function(e){e.touches||e.preventDefault(),this.mousedown=!0,this.dragStartX="ontouchstart"in window?e.touches[0].clientX:e.clientX},handleMouseup:function(){this.mousedown=!1,this.dragOffset=0},handleMousemove:function(e){if(this.mousedown){var t="ontouchstart"in window?e.touches[0].clientX:e.clientX,a=this.dragStartX-t;this.dragOffset=a,this.dragOffset>this.minSwipeDistance?(this.handleMouseup(),this.advancePage()):this.dragOffset<-this.minSwipeDistance&&(this.handleMouseup(),this.advancePage("backward"))}},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward){var e=this.pageCount-1;this.currentPage=e>=0?e:0}}},mounted:function(){this.$isServer||(window.addEventListener("resize",(0,i.default)(this.computeCarouselWidth,16)),"ontouchstart"in window?(this.$el.addEventListener("touchstart",this.handleMousedown),this.$el.addEventListener("touchend",this.handleMouseup),this.$el.addEventListener("touchmove",this.handleMousemove)):(this.$el.addEventListener("mousedown",this.handleMousedown),this.$el.addEventListener("mouseup",this.handleMouseup),this.$el.addEventListener("mousemove",this.handleMousemove))),this.attachMutationObserver(),this.computeCarouselWidth()},destroyed:function(){this.$isServer||(this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),"ontouchstart"in window?this.$el.removeEventListener("touchmove",this.handleMousemove):this.$el.removeEventListener("mousemove",this.handleMousemove))}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.advancePage,this.autoplayTimeout))}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};t.default=a},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){var n=void 0;return function(){var s=void 0,r=function(){n=null,a||e.apply(s)},o=a&&!n;clearTimeout(n),n=setTimeout(r,t),o&&e.apply(s)}};t.default=a},function(e,t,a){function n(e){a(12)}var s=a(7)(a(14),a(15),n,"data-v-7fed18e9",null);e.exports=s.exports},function(e,t,a){var n=a(13);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(5)("58a44a73",n,!0)},function(e,t,a){t=e.exports=a(4)(),t.push([e.id,".VueCarousel-navigation-button[data-v-7fed18e9]{position:absolute;top:50%;box-sizing:border-box;color:#000;text-decoration:none}.VueCarousel-navigation-next[data-v-7fed18e9]{right:0;transform:translateY(-50%) translateX(100%)}.VueCarousel-navigation-prev[data-v-7fed18e9]{left:0;transform:translateY(-50%) translateX(-100%)}.VueCarousel-navigation--disabled[data-v-7fed18e9]{opacity:.5;cursor:default}",""])},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navigation",data:function(){return{parentContainer:this.$parent}},props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"▶"},prevLabel:{type:String,default:"◀"}},computed:{canAdvanceForward:function(){return this.parentContainer.canAdvanceForward||!1},canAdvanceBackward:function(){return this.parentContainer.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(e){e?this.$parent.advancePage(e):this.$parent.advancePage()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"VueCarousel-navigation"},[a("a",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!e.canAdvanceBackward},style:"padding: "+e.clickTargetSize+"px; margin-right: -"+e.clickTargetSize+"px;",attrs:{href:"#"},domProps:{innerHTML:e._s(e.prevLabel)},on:{click:function(t){t.preventDefault(),e.triggerPageAdvance("backward")}}}),e._v(" "),a("a",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!e.canAdvanceForward},style:"padding: "+e.clickTargetSize+"px; margin-left: -"+e.clickTargetSize+"px;",attrs:{href:"#"},domProps:{innerHTML:e._s(e.nextLabel)},on:{click:function(t){t.preventDefault(),e.triggerPageAdvance()}}})])},staticRenderFns:[]}},function(e,t,a){function n(e){a(17)}var s=a(7)(a(19),a(20),n,"data-v-7e42136f",null);e.exports=s.exports},function(e,t,a){var n=a(18);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(5)("cc30be7c",n,!0)},function(e,t,a){t=e.exports=a(4)(),t.push([e.id,".VueCarousel-pagination[data-v-7e42136f]{width:100%;float:left;text-align:center}.VueCarousel-dot-container[data-v-7e42136f]{display:inline-block;margin:0 auto}.VueCarousel-dot[data-v-7e42136f]{float:left;cursor:pointer}.VueCarousel-dot-inner[data-v-7e42136f]{border-radius:100%}",""])},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pagination",data:function(){return{parentContainer:this.$parent}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.parentContainer.pageCount>1,expression:"parentContainer.pageCount > 1"}],staticClass:"VueCarousel-pagination"},[a("div",{staticClass:"VueCarousel-dot-container"},e._l(e.parentContainer.pageCount,function(t,n){return a("div",{staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":n===e.parentContainer.currentPage},style:"\n        margin-top: "+2*e.parentContainer.paginationPadding+"px;\n        padding: "+e.parentContainer.paginationPadding+"px;\n      ",on:{click:function(t){e.parentContainer.goToPage(n)}}},[a("div",{staticClass:"VueCarousel-dot-inner",style:"\n          width: "+e.parentContainer.paginationSize+"px;\n          height: "+e.parentContainer.paginationSize+"px;\n          background: "+(n===e.parentContainer.currentPage?e.parentContainer.paginationActiveColor:e.parentContainer.paginationColor)+";\n        "})])}))])},staticRenderFns:[]}},function(e,t,a){function n(e){a(22)}var s=a(7)(a(24),a(25),n,null,null);e.exports=s.exports},function(e,t,a){var n=a(23);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(5)("647f10ac",n,!0)},function(e,t,a){t=e.exports=a(4)(),t.push([e.id,".VueCarousel-slide{flex-basis:inherit;flex-grow:0;flex-shrink:0;user-select:none}",""])},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"slide",data:function(){return{width:null}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"VueCarousel-slide"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"VueCarousel"},[a("div",{staticClass:"VueCarousel-wrapper"},[a("div",{staticClass:"VueCarousel-inner",style:"\n        transform: translateX("+e.currentOffset+"px);\n        transition: "+e.transitionStyle+";\n        flex-basis: "+e.slideWidth+"px;\n        visibility: "+(e.slideWidth?"visible":"hidden")+"\n      "},[e._t("default")],2)]),e._v(" "),e.paginationEnabled&&e.pageCount>0?a("pagination"):e._e(),e._v(" "),e.navigationEnabled?a("navigation",{attrs:{clickTargetSize:e.navigationClickTargetSize,nextLabel:e.navigationNextLabel,prevLabel:e.navigationPrevLabel}}):e._e()],1)},staticRenderFns:[]}}])})}).call(t,a(88)(e))},648:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["icon","rule","text","max","interval"],data:function(){return{count:0}},mounted:function(){var e=this;window.setInterval(function(){e.count<e.max?e.count++:e.count=0},this.interval)}}},649:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(687),s=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={components:{"psg-counter":s.default},computed:{housed:function(){return"es"===this.$cookie.get("language")?"Alojado":"Housed"},vocRehab:function(){return"es"===this.$cookie.get("language")?"Rehabilitación Vocacional":"Voc Rehab"},outpatients:function(){return"es"===this.$cookie.get("language")?"Pacientes ambulatorios":"Outpatients"},counseled:function(){return"es"===this.$cookie.get("language")?"Aconsejado":"Counseled"},educated:function(){return"es"===this.$cookie.get("language")?"Educado":"Educated"},volunteerHours:function(){return"es"===this.$cookie.get("language")?"Horas de Voluntariado":"Volunteer Hours"}}}},650:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(642),s=a(166),r=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{events:[]}},computed:{readMore:function(){return"es"===this.$cookie.get("language")?"Lee mas...":"Read More..."}},created:function(){var e=this;this.loading=!0,http.get("/carousel").then(function(t){var a=t.body.events,n=[];"es"===e.$cookie.get("language")?a.forEach(function(e){n.push({headline:e.es_headline,hero_text:e.es_hero_text,category:{category_name:e.category.es_category_name},slug:e.slug,image:e.image,link:e.link})}):a.forEach(function(e){n.push({headline:e.en_headline,hero_text:e.en_hero_text,category:{category_name:e.category.en_category_name},slug:e.slug,image:e.image,link:e.link})}),e.events=n,e.loading=!1}).catch(function(e){})},methods:{copy:function(e,t){return e+" "+t}},components:{Carousel:n.Carousel,Slide:n.Slide,"psg-speak":r.default}}},651:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(166),s=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={props:["box"],components:{"psg-speak":s.default},computed:{title:function(){return"es"===this.$cookie.get("language")?this.box.es_title:this.box.en_title},copy:function(){return"es"===this.$cookie.get("language")?this.box.es_copy:this.box.en_copy}}}},652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(690),s=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={data:function(){return{infoBoxes:[]}},methods:{getInfoBoxes:function(){var e=this;http.get("/info-boxes").then(function(t){e.infoBoxes=t.body.info_boxes}).catch(function(e){})}},created:function(){this.getInfoBoxes()},components:{"psg-info-box":s.default}}},653:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(166),s=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={components:{"psg-speak":s.default}}},654:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(642);t.default={components:{Carousel:n.Carousel,Slide:n.Slide},computed:{ourSupporters:function(){return"es"===this.$cookie.get("language")?"Nuestros partidarios":"Our Supporters"}}}},655:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(697),r=n(s),o=a(166),i=n(o);t.default={components:{"psg-progress-bars":r.default,"psg-speak":i.default},computed:{ourAgency:function(){return"es"===this.$cookie.get("language")?"Nuestra Agencia":"Our Agency"},ourExpertise:function(){return"es"===this.$cookie.get("language")?"Nuestra Experiencia":"Our Expertise"},treeOfLife:function(){return"es"===this.$cookie.get("language")?"Shanti Árbol de la vida":"Shanti Tree of Life"},treeOfLifeText:function(){return"es"===this.$cookie.get("language")?"\nEl Shanti Tree of Life, que predomina en la sala de terapia de grupo de Shanti, simboliza a muchos hombres y mujeres que hemos perdido ante la enfermedad del VIH / SIDA.":"The Shanti Tree of Life, which predominates the group therapy room at Shanti, symbolizes the many men and women we have lost to the disease of HIV/AIDS."},ourExpertiseText:function(){return"es"===this.$cookie.get("language")?"Desde el comienzo de la pandemia del VIH / SIDA, el Grupo Phoenix Shanti ha estado proporcionando un salvavidas a hombres y mujeres en el Valle del Sol, proporcionando servicios de hospicio a la vivienda durante sus décadas de existencia.":"Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence."},bullet1:function(){return"es"===this.$cookie.get("language")?"Ayudamos a hombres y mujeres VIH + a morir con dignidad":"We helped HIV+ men and women die with dignity"},bullet2:function(){return"es"===this.$cookie.get("language")?"Ayudamos a las enfermeras a cuidarlas":"We trained nurse assists to care for them"},bullet3:function(){return"es"===this.$cookie.get("language")?"Ayudamos a los adictos a recuperar sus vidas":"We helped addicts recover their lives"},bullet4:function(){return"es"===this.$cookie.get("language")?"Albergamos a los desamparados cuando nadie más":"We housed the homeless when no one else would"}}}},656:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["bar","now","goal"],data:function(){return{width:0}},mounted:function(){var e=this;window.setInterval(function(){e.width<e.now/e.goal*100?e.width++:e.width=0},100)}}},657:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(696),r=n(s),o=a(166),i=n(o);t.default={components:{"psg-progress-bar":r.default,"psg-speak":i.default},computed:{ourFundraising:function(){return"es"===this.$cookie.get("language")?"Nuestra recaudación de fondos":"Our Fundraising"},ourFundraisingText:function(){return"es"===this.$cookie.get("language")?"Phoenix Shanti Group tiene una historia de recaudar fondos para la comunidad de VIH / SIDA. He aquí un desglose de algunos de sus esfuerzos este año.":"Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year."},generalFunds:function(){return"es"===this.$cookie.get("language")?"Fondos Generales":"General Funds"},aidsWalkArizona:function(){return"es"===this.$cookie.get("language")?"Caminata del SIDA Arizona":"AIDS Walk Arizona"},eventDollarsRaised:function(){return"es"===this.$cookie.get("language")?"Evento Dólares Recaudados":"Event Dollars Raised"}}}},659:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(642),r=a(689),o=n(r),i=a(691),l=n(i),u=a(688),c=n(u),d=a(692),p=n(d),f=a(693),h=n(f),v=a(695),g=n(v),m=a(694),_=n(m);t.default={methods:{},components:{Carousel:s.Carousel,Slide:s.Slide,"psg-event-carousel":o.default,"psg-info-boxes":l.default,"psg-counters":c.default,"psg-intro-text":p.default,"psg-our-expertise":_.default,"psg-logo-carousel":h.default,"psg-our-team":g.default}}},687:function(e,t,a){var n=a(75)(a(648),a(729),null,null);e.exports=n.exports},688:function(e,t,a){var n=a(75)(a(649),a(734),null,null);e.exports=n.exports},689:function(e,t,a){var n=a(75)(a(650),a(702),null,null);e.exports=n.exports},690:function(e,t,a){var n=a(75)(a(651),a(730),null,null);e.exports=n.exports},691:function(e,t,a){var n=a(75)(a(652),a(720),null,null);e.exports=n.exports},692:function(e,t,a){var n=a(75)(a(653),a(731),null,null);e.exports=n.exports},693:function(e,t,a){var n=a(75)(a(654),a(719),null,null);e.exports=n.exports},694:function(e,t,a){var n=a(75)(a(655),a(703),null,null);e.exports=n.exports},695:function(e,t,a){var n=a(75)(null,a(701),null,null);e.exports=n.exports},696:function(e,t,a){var n=a(75)(a(656),a(725),null,null);e.exports=n.exports},697:function(e,t,a){var n=a(75)(a(657),a(713),null,null);e.exports=n.exports},701:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("br")])}]}},702:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-center"},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-refresh fa-spin fa-5x color"})]),e._v(" "),a("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:7e3,perPage:1,navigationEnabled:!0}},e._l(e.events,function(t,n){return a("slide",{key:n,staticClass:"pale-purple"},[a("div",{staticClass:"event-header"},[a("h4",[e._v(e._s(t.category.category_name))])]),e._v(" "),a("div",{staticClass:"carousel-container"},[t.image?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5"},[t.image&&t.link?a("div",[a("a",{attrs:{href:t.link,target:"_blank"}},[a("img",{staticClass:"thumbnail img-responsive",attrs:{src:"/uploads/events/"+t.image,alt:t.headline}})])]):t.image&&!t.link?a("div",[a("a",{attrs:{href:t.link,target:"_blank"}},[a("router-link",{attrs:{to:{name:"blog/view",params:{slug:t.slug}}}},[a("img",{staticClass:"thumbnail img-responsive",attrs:{src:"/uploads/events/"+t.image,alt:t.headline}})])],1)]):e._e()]),e._v(" "),a("div",{staticClass:"col-md-7"},[a("h1",[e._v(e._s(t.headline))]),e._v(" "),a("hr"),e._v(" "),a("div",{domProps:{innerHTML:e._s(t.hero_text)}}),e._v(" "),a("br"),e._v(" "),a("router-link",{staticClass:"btn btn-color pull-right",attrs:{to:{name:"blog/view",params:{slug:t.slug}}}},[e._v(e._s(e.readMore))]),e._v(" "),a("psg-speak",{attrs:{text:e.copy(t.headline,t.hero_text)}})],1)])]):e._e(),e._v(" "),t.image?e._e():a("div",[a("h1",[e._v(e._s(t.headline))]),e._v(" "),a("hr"),e._v(" "),a("div",{domProps:{innerHTML:e._s(t.hero_text)}}),e._v(" "),a("br"),e._v(" "),a("router-link",{staticClass:"btn btn-color pull-right",attrs:{to:{name:"blog/view",params:{slug:t.slug}}}},[e._v(e._s(e.readMore))]),e._v(" "),a("psg-speak",{attrs:{text:e.copy(t.headline,t.hero_text)}})],1)])])}))],1)},staticRenderFns:[]}},703:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"block-heading-two text-center"},[a("h3",{staticClass:"color"},[a("span",[e._v(e._s(e.ourAgency))])])]),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-6"},[a("h4",{staticClass:"color"},[e._v(e._s(e.ourExpertise))]),e._v(" "),a("p",[e._v(e._s(e.ourExpertiseText))]),e._v(" "),a("ul",{staticClass:"list-2"},[a("li",[e._v(e._s(e.bullet1))]),e._v(" "),a("li",[e._v(e._s(e.bullet2))]),e._v(" "),a("li",[e._v(e._s(e.bullet3))]),e._v(" "),a("li",[e._v(e._s(e.bullet4))])]),e._v(" "),a("br"),e._v(" "),a("psg-speak",{attrs:{text:"Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence.",primary:"true"}})],1),e._v(" "),a("div",{staticClass:"col-md-4 col-sm-6"},[a("h4",{staticClass:"color"},[e._v(e._s(e.treeOfLife))]),e._v(" "),a("img",{staticClass:"img-responsive",attrs:{src:"/img/tree.jpg",alt:"Tree of Life"}}),e._v(" "),a("p",[e._v(e._s(e.treeOfLifeText))]),e._v(" "),a("psg-speak",{attrs:{text:e.treeOfLifeText,primary:"true"}})],1),e._v(" "),a("psg-progress-bars")],1)])},staticRenderFns:[]}},713:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-4 col-sm-6"},[a("h4",{staticClass:"color"},[e._v(e._s(e.ourFundraising))]),e._v(" "),a("p",[e._v(e._s(e.ourFundraisingText))]),e._v(" "),a("psg-speak",{attrs:{text:"Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year.",primary:"true"}}),e._v(" "),a("h6",[e._v(e._s(e.generalFunds))]),e._v(" "),a("psg-progress-bar",{attrs:{bar:"progress-bar progress-bar-red",now:"16300",goal:"30000"}}),e._v(" "),a("h6",[e._v(e._s(e.aidsWalkArizona))]),e._v(" "),a("psg-progress-bar",{attrs:{bar:"progress-bar progress-bar-green",now:"1995",goal:"1500"}}),e._v(" "),a("h6",[e._v(e._s(e.eventDollarsRaised))]),e._v(" "),a("psg-progress-bar",{attrs:{bar:"progress-bar progress-bar-lblue",now:"50",goal:"1000"}})],1)},staticRenderFns:[]}},719:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"block-heading-six",staticStyle:{"margin-bottom":"0"}},[a("h4",{staticClass:"bg-color",staticStyle:{"margin-bottom":"0",width:"98%"}},[e._v(e._s(e.ourSupporters))])]),e._v(" "),a("div",{staticClass:"client-three",staticStyle:{"margin-top":"0"}},[a("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:7e3,perPage:1,navigationEnabled:!0}},[a("slide",{staticClass:"pale-purple"},[a("div",{staticClass:"carousel-container less-padding"},[a("div",{staticClass:"row frame"},[a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://www.auntritas.org/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/aunt_ritas.png",alt:"Aunt Rita's Foundation"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"https://vsuw.org",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/united_way.jpeg",alt:"Valley of the Sun United Way"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"https://elizabethtayloraidsfoundation.org/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/elizabeth_taylor.png",alt:"Elizabeth Taylor AIDS Foundation"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"https://broadwaycares.org/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/broadway_cares.jpeg",alt:"Broadway Cares"}})])])])])]),e._v(" "),a("slide",{staticClass:"pale-purple"},[a("div",{staticClass:"carousel-container logo-carousel less-padding"},[a("div",{staticClass:"row frame"},[a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://www.macys.com",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/macys.jpeg",alt:"Macy's"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"https://www.aidshealth.org/#/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/AHF.png",alt:"AIDS Healthcare Foundation"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://www.topazsystems.com/index.html",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/topaz.png",alt:"Topaz Systems"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://triyoung.com/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/triyoung.png",alt:"TriYoung Business Solutions"}})])])])])]),e._v(" "),a("slide",{staticClass:"pale-purple"},[a("div",{staticClass:"carousel-container logo-carousel less-padding"},[a("div",{staticClass:"row frame"},[a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"https://www.copperstardigital.com",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/copper_star.png",alt:"Copper Star Digital"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://www.la-z-boy.com/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/lazboy.png",alt:"La-Z-Boy"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://www.buffaloexchange.com",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/buffalo_exchange.jpeg",alt:"Buffalo Exchange"}})])]),e._v(" "),a("div",{staticClass:"col-md-3"},[a("a",{attrs:{href:"http://www.trashcity.com/",target:"_blank"}},[a("img",{staticClass:"logo-carousel",attrs:{src:"/uploads/sponsors/trash_city.jpg",alt:"Trash City Beads"}})])])])])])],1)],1)])},staticRenderFns:[]}},720:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-boxes"},[a("div",{staticClass:"icon-box-8 text-center"},[a("div",{staticClass:"row"},e._l(e.infoBoxes,function(e,t){return a("div",{key:t},[a("psg-info-box",{attrs:{box:e}})],1)})),e._v(" "),a("br")])])},staticRenderFns:[]}},725:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"progress pb-sm"},[a("div",{staticClass:"progress"},[a("div",{class:e.bar,style:{width:e.width+"%"},attrs:{role:"progressbar","aria-valuenow":e.now,"aria-valuemin":"0","aria-valuemax":"100"}},[a("span",{staticClass:"sr-only"},[e._v("% Complete (success)")])])])])},staticRenderFns:[]}},727:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-block"},[a("div",{staticClass:"container"},[a("psg-event-carousel",{attrs:{color:"pale-purple"}}),e._v(" "),a("br"),e._v(" "),a("psg-info-boxes"),e._v(" "),a("div",{staticClass:"divider-1"}),e._v(" "),a("psg-our-expertise"),e._v(" "),a("hr"),e._v(" "),a("psg-counters")],1),e._v(" "),a("div",{staticClass:"container"},[a("psg-our-team"),e._v(" "),a("div",{staticClass:"divider-1"}),e._v(" "),a("psg-logo-carousel")],1)])},staticRenderFns:[]}},729:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"counter-item"},[a("i",{class:e.icon}),e._v(" "),a("span",{staticClass:"number-count"},[e._v(e._s(e.count))]),e._v(" "),a("hr",{class:e.rule}),e._v(" "),a("h5",[e._v(e._s(e.text))])])])},staticRenderFns:[]}},730:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-3 col-sm-6 info-box"},[a("div",{staticClass:"icon-box-8-item",class:e.box.color},[a("div",{staticClass:"icon-box-8-icon"},[a("a",{staticClass:"icon-box-8-icon-top",attrs:{href:"#"}},[a("i",{class:e.box.icon})]),e._v(" "),e._m(0)]),e._v(" "),e.box.link.match("http")?a("div",[a("h4",[a("a",{attrs:{href:e.box.link,target:"_blank"}},[e._v(e._s(e.title))])])]):e.box.link.match("http")?e._e():a("div",[a("h4",[a("router-link",{attrs:{to:e.box.link}},[e._v(e._s(e.title))])],1)]),e._v(" "),a("p",[e._v(e._s(e.copy))]),e._v(" "),a("psg-speak",{attrs:{text:e.copy}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"icon-box-8-icon-bottom",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-heart"})])}]}},731:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[e._m(0),e._v(" "),a("p",[e._v("Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.")]),e._v(" "),a("psg-speak",{attrs:{text:"Phoenix Shanti Group. Most Amazing HIV Agency in the Valley. Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.",primary:"true"}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("span",{staticClass:"color"},[e._v("Phoenix Shanti Group")]),e._v(". Most Amazing HIV Agency in the Valley. "),a("span",{staticClass:"color"},[e._v("Literally")]),e._v(".")])}]}},734:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"counter-one text-center"},[a("div",{staticClass:"counter-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 col-sm-4 col-xs-6"},[a("psg-counter",{attrs:{icon:"fa fa-home red",rule:"br-red",text:e.housed,max:"58",interval:"1000"}})],1),e._v(" "),a("div",{staticClass:"col-md-2 col-sm-4 col-xs-6"},[a("psg-counter",{attrs:{icon:"fa fa-briefcase green",rule:"br-green",text:e.vocRehab,max:"146",interval:"500"}})],1),e._v(" "),a("div",{staticClass:"col-md-2 col-sm-4 col-xs-6"},[a("psg-counter",{attrs:{icon:"fa fa-ambulance lblue",rule:"br-lblue",text:e.outpatients,max:"146",interval:"500"}})],1),e._v(" "),a("div",{staticClass:"col-md-2 col-sm-4 col-xs-6"},[a("psg-counter",{attrs:{icon:"fa fa-heart yellow",rule:"br-yellow",text:e.counseled,max:"146",interval:"500"}})],1),e._v(" "),a("div",{staticClass:"col-md-2 col-sm-4 col-xs-6"},[a("psg-counter",{attrs:{icon:"fa fa-book purple",rule:"br-purple",text:e.educated,max:"146",interval:"500"}})],1),e._v(" "),a("div",{staticClass:"col-md-2 col-sm-4 col-xs-6"},[a("psg-counter",{attrs:{icon:"fa fa-clock-o brown",rule:"br-brown",text:e.volunteerHours,max:"1200",interval:"100"}})],1)])])])},staticRenderFns:[]}}});