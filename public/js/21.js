webpackJsonp([21],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_strap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_strap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_strap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_misc_TextToSpeech__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_misc_TextToSpeech___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_misc_TextToSpeech__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            firstName: '',
            lastName: '',
            emailAddress: '',
            phone: '',
            comments: '',
            showTop: false,
            type: 'success',
            flash: '',
            loading: false,
            article: {
                headline: this.$cookie.get('language') === 'es' ? 'Gala del trigésimo aniversario' : 'Thirtieth Anniversary Gala',
                subhead: this.$cookie.get('language') === 'es' ? '9 de diciembre en Encanto Park Clubhouse' : 'Dec. 9 at Encanto Park Clubhouse',
                callout: this.$cookie.get('language') === 'es' ? 'El Grupo Phoenix Shanti está celebrando 30 años de servir a la comunidad de VIH / SIDA <br /> en el Valle del Sol con un evento aniversario especial el 9 de diciembre en el Parque Encanto. Usted puede confirmar más abajo. <strong> RSVP ahora </ strong>, ya que el espacio es limitado.' : 'The Phoenix Shanti Group is celebrating 30 years of serving the HIV/AIDS community <br />in the Valley of the Sun with a special anniversary event on Dec. 9 at Encanto Park. You can RSVP below. <strong>RSVP now</strong>, as space is limited.',
                body: ''
            }
        };
    },

    methods: {
        rsvp: function rsvp() {
            var _this = this;

            this.loading = true;
            axios.post('/30th-anniversary', {
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.emailAddress,
                phone: this.phone,
                position: this.position,
                comments: this.comments
            }).then(function (response) {
                _this.showTop = true;
                _this.flash = 'Thank you for RSVPing for our Thirtieth Anniversary Gala. You will receive a confirmation email shortly.';
                _this.firstName = '';
                _this.lastName = '';
                _this.emailAddress = '';
                _this.phone = '';
                _this.position = 'None';
                _this.comments = '';

                _this.loading = false;
            }).catch(function (error) {
                _this.showTop = true;
                _this.type = 'danger';
                _this.flash = error.message;
            });
        }
    },
    components: {
        alert: __WEBPACK_IMPORTED_MODULE_0_vue_strap__["alert"],
        'psg-speak': __WEBPACK_IMPORTED_MODULE_1__components_misc_TextToSpeech___default.a
    },
    computed: {
        rsvpHeader: function rsvpHeader() {
            if (this.$cookie.get('language') === 'es') {
                return 'RSVP para la Gala del 30º Aniversario';
            } else {
                return 'RSVP for 30th Anniversary Gala';
            }
        },
        date: function date() {
            if (this.$cookie.get('language') === 'es') {
                return '9 de diciembre en Encanto Park Clubhouse, de 4 pm a 8 pm';
            } else {
                return 'Dec. 9 at Encanto Park Clubhouse, 4 pm to 8 pm';
            }
        },
        instructions: function instructions() {
            if (this.$cookie.get('language') === 'es') {
                return 'Llene el siguiente formulario para confirmar la fecha de la gala del 30 aniversario.';
            } else {
                return 'Fill out the form below to RSVP for the 30th Anniversary Gala.';
            }
        },
        first: function first() {
            if (this.$cookie.get('language') === 'es') {
                return 'Nombre de pila';
            } else {
                return 'First Name';
            }
        },
        last: function last() {
            if (this.$cookie.get('language') === 'es') {
                return 'Apellido';
            } else {
                return 'Last Name';
            }
        },
        emailAddy: function emailAddy() {
            if (this.$cookie.get('language') === 'es') {
                return 'Dirección de correo electrónico';
            } else {
                return 'Email Address';
            }
        },
        phoneNumber: function phoneNumber() {
            if (this.$cookie.get('language') === 'es') {
                return 'Número de teléfono';
            } else {
                return 'Phone Number';
            }
        },
        message: function message() {
            if (this.$cookie.get('language') === 'es') {
                return 'Comentarios';
            } else {
                return 'Comments';
            }
        }
    }
});

/***/ }),

/***/ 160:
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('iframe', {
    staticStyle: {
      "border": "0"
    },
    attrs: {
      "src": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3041.158503327335!2d-112.09135435000675!3d33.47740223550215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1253c82c4907%3A0xc29f66f2ac0ff98c!2sEncanto+Park!5e0!3m2!1sen!2sus!4v1505936613455",
      "width": "100%",
      "height": "600",
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h1', [_vm._v(_vm._s(_vm.rsvpHeader))]), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": "RSVP for 30th Anniversary Gala, Dec. 9 at Encanto Park Clubhouse, 4 pm to 8 pm. Fill out the form below to RSVP for the 30th Anniversary Gala.",
      "primary": "true"
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.instructions))]), _vm._v(" "), _c('alert', {
    attrs: {
      "placement": "top-right",
      "duration": "10000",
      "type": _vm.type,
      "width": "500px",
      "dismissable": ""
    },
    model: {
      value: (_vm.showTop),
      callback: function($$v) {
        _vm.showTop = $$v
      },
      expression: "showTop"
    }
  }, [_c('span', {
    staticClass: "icon-ok-circled alert-icon-float-left"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.flash))])]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "first_name"
    }
  }, [_vm._v(_vm._s(_vm.first))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.firstName),
      expression: "firstName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "first_name"
    },
    domProps: {
      "value": (_vm.firstName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.firstName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "last_name"
    }
  }, [_vm._v(_vm._s(_vm.last))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lastName),
      expression: "lastName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "last_name"
    },
    domProps: {
      "value": (_vm.lastName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lastName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v(_vm._s(_vm.emailAddy))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.emailAddress),
      expression: "emailAddress"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "email"
    },
    domProps: {
      "value": (_vm.emailAddress)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.emailAddress = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "phone"
    }
  }, [_vm._v(_vm._s(_vm.phoneNumber))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "phone"
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "comments"
    }
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comments),
      expression: "comments"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "comments",
      "rows": "7"
    },
    domProps: {
      "value": (_vm.comments)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comments = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-color pull-right",
    attrs: {
      "type": "button",
      "disabled": _vm.loading
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.rsvp($event)
      }
    }
  }, [_vm._v("RSVP "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "fa fa-refresh fa-spin"
  })])])])], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e05b2f0", module.exports)
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(160),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/ThirtiethAnniversary.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ThirtiethAnniversary.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e05b2f0", Component.options)
  } else {
    hotAPI.reload("data-v-3e05b2f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});