webpackJsonp([24],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(456),
  /* template */
  __webpack_require__(507),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/NotFound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NotFound.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3836d024", Component.options)
  } else {
    hotAPI.reload("data-v-3836d024", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 456:
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

exports['default'] = {
    data: function data() {
        return {
            article: {
                headline: this.$cookie.get('language') === 'es' ? 'Página no encontrada' : 'Page Not Found',
                subhead: this.$cookie.get('language') === 'es' ? 'error 404' : '404 Error',
                callout: this.$cookie.get('language') === 'es' ? 'Lo sentimos, pero no hemos podido encontrar la página para la que está buscando. Tal vez usted ha seguido un vínculo obsoleto, o tal vez la página se ha movido. Por favor, inténtelo de nuevo más tarde.' : 'We\'re sorry but we could not find the page for which you are looking. Perhaps you have followed an outdated link, or maybe the page has moved. Please try again later.',
                body: this.$cookie.get('language') === 'es' ? '' : ''
            }
        };
    },

    computed: {
        refer: function refer() {
            if (this.$cookie.get('language') === 'es') {
                return 'Por favor, consulte nuestro mapa del sitio para obtener una lista de las páginas disponibles:';
            } else {
                return 'Please refer to our site map for a list of available pages:';
            }
        },
        siteMap: function siteMap() {
            if (this.$cookie.get('language') === 'es') {
                return 'Mapa de sitio';
            } else {
                return 'Site Map';
            }
        }
    }
};

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article
    }
  }, [_c('div', {
    slot: "copy"
  }, [_vm._v("\n        " + _vm._s(_vm.refer) + " "), _c('router-link', {
    attrs: {
      "to": "/site-map"
    }
  }, [_vm._v(_vm._s(_vm.siteMap) + ".")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3836d024", module.exports)
  }
}

/***/ })

});