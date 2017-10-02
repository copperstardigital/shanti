webpackJsonp([18],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_strap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_strap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_strap__);
//
//
//
//
//
//
//
//
//
//
//
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
            article: {}
        };
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        http.get('/articles/2')
        //.use(saCache)
        .then(function (response) {
            var article = response.body.article;

            _this.article = {
                headline: article.en_headline,
                subhead: article.en_subhead,
                callout: article.en_callout,
                body: _this.replaceYearCount(article.en_body)
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

    computed: {
        yearsSinceFounding: function yearsSinceFounding() {
            return new Date().getFullYear() - new Date('1987-09-01').getFullYear();
        },
        whatWeDo: function whatWeDo() {
            if (this.$cookie.get('language') === 'es') {
                return 'Qué hacemos';
            } else {
                return 'What We Do';
            }
        },
        whyChooseUs: function whyChooseUs() {
            if (this.$cookie.get('language') === 'es') {
                return '¿Por qué elegirnos?';
            } else {
                return 'Why Choose Us?';
            }
        },
        whatMakesUsSpecial: function whatMakesUsSpecial() {
            if (this.$cookie.get('language') === 'es') {
                return 'Lo que nos hace especiales';
            } else {
                return 'What Makes Us Special';
            }
        },
        testimonials: function testimonials() {
            if (this.$cookie.get('language') === 'es') {
                return 'Testimonios';
            } else {
                return 'Testimonials';
            }
        },
        whatWeDoText: function whatWeDoText() {
            if (this.$cookie.get('language') === 'es') {
                return 'El grupo Phoenix Shanti proporciona apoyo, asesoramiento, vivienda y otros servicios a las personas infectadas o afectadas por el VIH / SIDA. De una forma u otra, Shanti ha estado sirviendo a la comunidad del VIH en el metro Phoenix durante 30 años.';
            } else {
                return 'The Phoenix Shanti Group provides support, counseling, housing and other services to people infected with or affected by HIV/AIDS. In one form or another, Shanti has been serving the the HIV community in metro Phoenix for 30 years.';
            }
        },
        whyChooseUsText: function whyChooseUsText() {
            if (this.$cookie.get('language') === 'es') {
                return 'Shanti proporciona un acercamiento vertical a los servicios del VIH. Algunos de nuestros clientes están sin hogar cuando entran en el programa Shanti. La mayoría de los clientes, pero no todos, entran en los servicios de vivienda al entrar en Shanti. En la vivienda, los clientes pueden relacionarse con otras personas que viven con el VIH. Algunos están recién infectados, otros han estado viviendo con el virus durante muchos años. A través del asesoramiento, la medicación y el apoyo de los compañeros, los clientes aprenden a volver a entrar en el mundo, sin tener que depender de las drogas y el alcohol. En nuestro programa de rehabilitación vocacional, los clientes obtienen valiosas habilidades de trabajo y experiencia. Para cuando se gradúan, los clientes están listos para enfrentarse al mundo de nuevo.';
            } else {
                return 'Shanti provides a stem-to-stern approach to HIV services. Some of our clients are homeless when they enter the Shanti program. Most clients, but not all, enter housing services upon entry to Shanti. In housing, clients can relate to other people living with HIV. Some are newly infected, others have been living with the virus for many years. Through counseling, medication and peer support, clients learn how to re-enter the world, without having to rely on drugs and alcohol. In our vocational rehabilitation program, clients gain valuable work skills and experience. By the time they graduate, clients are ready to take on the world anew.';
            }
        },
        whatMakesUsSpecialText: function whatMakesUsSpecialText() {
            if (this.$cookie.get('language') === 'es') {
                return 'A través del apoyo ilimitado proporcionado por Shanti, muchos clientes se vuelven muy aficionados de la agencia y su personal. Shanti tiene un sentimiento familiar. Muchos de los clientes se hacen amigos. Después de la graduación, algunos antiguos clientes vuelven a ayudar a la organización de varias maneras. Algunos sirven en la Junta. Otros se ofrecen como voluntarios para los comités. Este sitio web fue creado por un antiguo cliente, quien redimió su vida a través del programa Shanti. En Shanti, a través de su plan de estudios, muchos clientes han abordado cuestiones de por vida y ahora que están limpios y sobrios, sienten un inmenso sentido de gratitud que quieren pagar.';
            } else {
                return 'Through the boundless support provided by Shanti, many clients become quite fond of the agency and its staff. There is a familial feeling to Shanti. Many of the clients become friends. After graduation, some former clients come back to help the organization in various ways. Some serve on the Board. Others volunteer for committees. This website was created by a former client, who redeemed his life through the Shanti program. At Shanti, through its curriculum, many clients have tackled lifelong issues and now that they are clean and sober, they feel an immense sense of gratitude that they want to pay forward.';
            }
        }
    },
    methods: {
        replaceYearCount: function replaceYearCount(text) {
            var yearsSinceFounding = new Date().getFullYear() - new Date('1987-09-01').getFullYear();
            return text.replace('{{ yearsSinceFounding }}', yearsSinceFounding);
        }
    },
    components: {
        'psg-speak': __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech___default.a,
        tabs: __WEBPACK_IMPORTED_MODULE_1_vue_strap__["tabs"],
        tab: __WEBPACK_IMPORTED_MODULE_1_vue_strap__["tab"]
    }
});

/***/ }),

/***/ 157:
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
  }), _vm._v(" "), _c('tabs', {
    attrs: {
      "nav-style": "tabs",
      "justified": ""
    }
  }, [_c('tab', {
    attrs: {
      "header": _vm.whatWeDo
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.whatWeDoText))])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": _vm.whyChooseUs
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.whyChooseUsText))])]), _vm._v(" "), _c('tab', {
    attrs: {
      "header": _vm.whatMakesUsSpecial
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.whatMakesUsSpecialText))])])], 1), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": _vm.article.body,
      "loading": _vm.loading,
      "primary": "true"
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f6372ca", module.exports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(157),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/about/Mission.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Mission.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6372ca", Component.options)
  } else {
    hotAPI.reload("data-v-2f6372ca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});