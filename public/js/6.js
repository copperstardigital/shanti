webpackJsonp([6],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(484),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/support/Volunteer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Volunteer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1772fe5b", Component.options)
  } else {
    hotAPI.reload("data-v-1772fe5b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueStrap = __webpack_require__(96);

var _TextToSpeech = __webpack_require__(95);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            firstName: '',
            lastName: '',
            emailAddress: '',
            phone: '',
            position: '',
            comments: '',
            showTop: false,
            sending: false,
            type: 'success',
            flash: '',
            article: {},
            formSubmitted: false
        };
    },

    methods: {
        validateBeforeSubmit: function validateBeforeSubmit(e) {
            this.$validator.validateAll();
            if (!this.errors.any()) {
                this.volunteer();
            }
        },
        volunteer: function volunteer() {
            var _this = this;

            this.sending = true;
            this.formSubmitted = true;

            axios.post('/volunteer/form', {
                name: this.firstName + ' ' + this.lastName,
                email: this.emailAddress,
                phone: this.phone,
                position: this.position,
                comments: this.comments
            }).then(function (response) {
                _this.showTop = true;
                _this.flash = 'Thank you for contacting Shanti about our volunteer opportunities. We will be in touch shortly.';
                _this.firstName = '';
                _this.lastName = '';
                _this.emailAddress = '';
                _this.phone = '';
                _this.position = 'None';
                _this.comments = '';

                _this.sending = false;
            }).catch(function (error) {
                _this.showTop = true;
                _this.type = 'danger';
                _this.flash = error.message;
            });
        }
    },
    components: {
        alert: _vueStrap.alert,
        'psg-speak': _TextToSpeech2.default
    },
    computed: {
        becomeAVolunteer: function becomeAVolunteer() {
            if (this.$cookie.get('language') === 'es') {
                return 'Conviértase en voluntario';
            } else {
                return 'Become a Volunteer';
            }
        },
        formInstructions: function formInstructions() {
            if (this.$cookie.get('language') === 'es') {
                return 'Llene el siguiente formulario para informarse sobre las oportunidades de voluntariado.';
            } else {
                return 'Fill out the form below to inquire about volunteer opportunities.';
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
        },
        required: function required() {
            if (this.$cookie.get('language') === 'es') {
                return 'Necesario';
            } else {
                return 'Required';
            }
        },
        volunteerAt: function volunteerAt() {
            if (this.$cookie.get('language') === 'es') {
                return 'Ofrecerse';
            } else {
                return 'Volunteer';
            }
        },
        selectOne: function selectOne() {
            if (this.$cookie.get('language') === 'es') {
                return 'Seleccione uno ...';
            } else {
                return 'Select one...';
            }
        },
        positionAt: function positionAt() {
            if (this.$cookie.get('language') === 'es') {
                return 'Oficio';
            } else {
                return 'Position';
            }
        },
        foodPantry: function foodPantry() {
            if (this.$cookie.get('language') === 'es') {
                return 'Despensa de alimentos';
            } else {
                return 'Food Pantry';
            }
        },
        hygienePantry: function hygienePantry() {
            if (this.$cookie.get('language') === 'es') {
                return 'Despensa de higiene personal';
            } else {
                return 'Personal Hygiene Pantry';
            }
        },
        shelterConstruction: function shelterConstruction() {
            if (this.$cookie.get('language') === 'es') {
                return 'Construcción / Reparación de Refugios';
            } else {
                return 'Shelter Construction/Repair';
            }
        },
        specialEvents: function specialEvents() {
            if (this.$cookie.get('language') === 'es') {
                return 'Despensa de alimentos';
            } else {
                return 'Special Events Coordinator';
            }
        },
        traditionalMedia: function traditionalMedia() {
            if (this.$cookie.get('language') === 'es') {
                return 'Coordinador de Medios Tradicionales';
            } else {
                return 'Traditional Media Coordinator';
            }
        },
        socialMedia: function socialMedia() {
            if (this.$cookie.get('language') === 'es') {
                return 'Coordinador de Medios Sociales';
            } else {
                return 'Social Media Coordinator';
            }
        },
        legalAssistance: function legalAssistance() {
            if (this.$cookie.get('language') === 'es') {
                return 'Coordinador de Asistencia Legal';
            } else {
                return 'Legal Assistance Coordinator';
            }
        },
        corporateIncentives: function corporateIncentives() {
            if (this.$cookie.get('language') === 'es') {
                return 'Coordinador de Incentivos Corporativos';
            } else {
                return 'Corporate Incentives Coordinator';
            }
        },
        other: function other() {
            if (this.$cookie.get('language') === 'es') {
                return 'Otro';
            } else {
                return 'Other';
            }
        },
        firstRequired: function firstRequired() {
            if (this.$cookie.get('language') === 'es') {
                return 'Se requiere el primer nombre.';
            } else {
                return 'The first name is required.';
            }
        },
        lastRequired: function lastRequired() {
            if (this.$cookie.get('language') === 'es') {
                return 'El apellido es obligatorio.';
            } else {
                return 'The last name is required.';
            }
        },
        emailRequired: function emailRequired() {
            if (this.$cookie.get('language') === 'es') {
                return 'Se requiere una dirección de correo electrónico válida.';
            } else {
                return 'A valid email address is required.';
            }
        },
        positionRequired: function positionRequired() {
            if (this.$cookie.get('language') === 'es') {
                return 'La posición es necesaria.';
            } else {
                return 'The position is required.';
            }
        }
    },
    created: function created() {
        var _this2 = this;

        this.loading = true;

        http.get('/articles/9')
        //.use(saCache)
        .then(function (response) {
            var article = response.body.article;

            _this2.article = {
                headline: article.en_headline,
                subhead: article.en_subhead,
                callout: article.en_callout,
                body: article.en_body
            };

            if (_this2.$cookie.get('language') === 'es') {
                _this2.article = {
                    headline: article.es_headline,
                    subhead: article.es_subhead,
                    callout: article.es_callout,
                    body: article.es_body
                };
            }

            _this2.loading = false;
        }).catch(function (error) {
            console.error(error);
        });
    }
};

/***/ }),

/***/ 484:
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
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.article.body)
    }
  }), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.article.body
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "well"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/img/volunteer.jpg",
      "alt": "Volunteer"
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.becomeAVolunteer))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.formInstructions))]), _vm._v(" "), _c('alert', {
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
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.flash))])]), _vm._v(" "), (!_vm.formSubmitted) ? _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('firstName')
    }
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
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.firstName),
      expression: "firstName",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "first_name",
      "data-vv-rules": "required"
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
  }), _vm._v(" "), (_vm.errors.has('firstName')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.firstRequired))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.required))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('lastName')
    }
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
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.lastName),
      expression: "lastName",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "last_name",
      "data-vv-rules": "required"
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
  }), _vm._v(" "), (_vm.errors.has('lastName')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.lastRequired))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.required))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('emailAddress')
    }
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
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.emailAddress),
      expression: "emailAddress",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "email",
      "data-vv-rules": "required|email"
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
  }), _vm._v(" "), (_vm.errors.has('emailAddress')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.emailRequired))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.required))])]), _vm._v(" "), _c('div', {
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
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('position')
    }
  }, [_c('label', {
    attrs: {
      "for": "position"
    }
  }, [_vm._v(_vm._s(_vm.positionAt))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.position),
      expression: "position"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.position),
      expression: "position",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "position",
      "data-vv-rules": "required"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.position = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.selectOne))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Food Pantry"
    }
  }, [_vm._v(_vm._s(_vm.foodPantry))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Personal Hygiene Pantry"
    }
  }, [_vm._v(_vm._s(_vm.hygienePantry))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Shelter Construction/Repair"
    }
  }, [_vm._v(_vm._s(_vm.shelterConstruction))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Special Events Coordinator"
    }
  }, [_vm._v(_vm._s(_vm.specialEvents))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Traditional Media Coordinator"
    }
  }, [_vm._v(_vm._s(_vm.traditionalMedia))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Social Media Coordinator"
    }
  }, [_vm._v(_vm._s(_vm.socialMedia))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Legal Assistance Coordinator"
    }
  }, [_vm._v(_vm._s(_vm.legalAssistance))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Corporate Incentives Coordinator"
    }
  }, [_vm._v(_vm._s(_vm.corporateIncentives))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Other"
    }
  }, [_vm._v(_vm._s(_vm.other))])]), _vm._v(" "), (_vm.errors.has('position')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.positionRequired))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.required))])]), _vm._v(" "), _c('div', {
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
      "rows": "10"
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
      "type": "submit",
      "disabled": _vm.sending
    }
  }, [_vm._v(_vm._s(_vm.volunteerAt) + " "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sending),
      expression: "sending"
    }],
    staticClass: "fa fa-refresh fa-spin"
  })])])]) : _vm._e(), _vm._v(" "), _c('br', {
    staticStyle: {
      "clear": "both"
    }
  })], 1)])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1772fe5b", module.exports)
  }
}

/***/ })

});