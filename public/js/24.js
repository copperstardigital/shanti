webpackJsonp([24],{

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(92)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(507),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 455:
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
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article
    }
  }, [_c('div', {
    attrs: {
      "slot": "copy"
    },
    slot: "copy"
  }, [_vm._v("\n        " + _vm._s(_vm.refer) + " "), _c('router-link', {
    attrs: {
      "to": "/site-map"
    }
  }, [_vm._v(_vm._s(_vm.siteMap) + ".")])], 1)])
},staticRenderFns: []}

/***/ })

});