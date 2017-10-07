webpackJsonp([8],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(5);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            article: {}
        };
    },

    computed: {
        frysHeader: function frysHeader() {
            if (this.$cookie.get('language') === 'es') {
                return 'Recompensas comunitarias de Fry\'s';
            } else {
                return 'Fry\'s Community Rewards';
            }
        },
        amazonSmile: function amazonSmile() {
            if (this.$cookie.get('language') === 'es') {
                return '\n' + 'Como parte de sus esfuerzos filantrópicos comunitarios, Amazon ha creado un programa para ayudar a las organizaciones sin fines de lucro a recaudar dinero a través de compras en su sitio web. El programa se llama Amazon Smile y se encuentra en <a href="https://smile.amazon.com/ch/86-0592079" target="_blank"> esta ubicación </a>. Primero, vincule su cuenta de Amazon al grupo de Phoenix Shanti en un proceso de instalación fácil. Entonces, cada vez que hagas compras en este acoplamiento, Amazon contribuirá el 0.5% del precio de compra a Shanti.';
            } else {
                return 'As part of its community philanthropic efforts, Amazon has created a program to help non-profits raise money through purchases on its website. The program is called Amazon Smile and is located at <a href="https://smile.amazon.com/ch/86-0592079" target="_blank">this location</a>. First, link your Amazon account to the Phoenix Shanti Group in an easy setup process. Then, every time you shop at this link, Amazon will contribute 0.5% of the purchase price to Shanti.';
            }
        },
        frys: function frys() {
            if (this.$cookie.get('language') === 'es') {
                return 'Tan fácil como es configurar su cuenta de Amazon para beneficiar a Shanti, la creación de su tarjeta de Fry para ayudar a Shanti es aún más fácil. Simplemente siga los tres pasos en el gráfico de la izquierda. Entonces, cada vez que hagas una compra en Fry\'s, una porción de ella ayudará a Shanti. Para obtener más información, vaya a <a href="http://www.fryscommunityrewards.com" target="_blank"> su sitio web </a>.';
            } else {
                return 'As easy as it is to set up your Amazon account to benefit Shanti, setting up your Fry\'s card to help Shanti is even easier. Just follow the the three steps on the graphic at left. Then, every time you make a purchase at Fry\'s, a portion of it will help Shanti. For more information, go to <a href="http://www.fryscommunityrewards.com" target="_blank">their website</a>.';
            }
        }
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        http.get('/articles/15')
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
        })['catch'](function (error) {
            console.error(error);
        });
    },

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading
    }
  }, [_c('div', {
    attrs: {
      "slot": "copy"
    },
    slot: "copy"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.article.body)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('a', {
    attrs: {
      "href": "https://smile.amazon.com/ch/86-0592079"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/img/amazon.png",
      "alt": "Amazon Smile"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('h1', [_vm._v("Amazon Smile")]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.amazonSmile)
    }
  })])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('a', {
    attrs: {
      "href": "http://www.fryscommunityrewards.com",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/img/frys.jpg",
      "alt": "Fry's Community Rewards"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('h1', [_vm._v(_vm._s(_vm.frysHeader))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.frys)
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d3aa46c", module.exports)
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(175),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/support/Contribute.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Contribute.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d3aa46c", Component.options)
  } else {
    hotAPI.reload("data-v-1d3aa46c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});