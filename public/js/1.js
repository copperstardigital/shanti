webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_stripe_elements__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_stripe_elements__);
//
//
//
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
            stripe: "pk_test_9TYE3j407ZxseYV9K84om2tc",
            complete: false,
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
            }
        };
    },


    components: { Card: __WEBPACK_IMPORTED_MODULE_0_vue_stripe_elements__["Card"] },

    props: ['paying'],

    methods: {
        pay: function pay() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vue_stripe_elements__["createToken"])().then(function (data) {
                var stripeToken = data.token.id;
                window.bus.$emit('stripe-token', stripeToken);
            });
        }
    }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_misc_Stripe__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_misc_Stripe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_misc_Stripe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_strap__ = __webpack_require__(4);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            donation: {
                state: '',
                donation_id: '',
                newsletter: 1
            },
            type: 'success',
            showTop: false,
            flash: '',
            donating: false
        };
    },

    components: {
        'psg-stripe': __WEBPACK_IMPORTED_MODULE_0__components_misc_Stripe___default.a,
        alert: __WEBPACK_IMPORTED_MODULE_1_vue_strap__["alert"]
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        http.get('/articles/8')
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
        donate: function donate() {
            var vm = this;
            this.donating = true;

            window.bus.$on('stripe-token', function (token) {
                axios.post('/support/donate', {
                    stripe_token: token,
                    first_name: vm.donation.first_name,
                    last_name: vm.donation.last_name,
                    email: vm.donation.email,
                    address: vm.donation.address,
                    city: vm.donation.city,
                    state: vm.donation.state,
                    zip_code: vm.donation.zip_code,
                    password: vm.donation.password,
                    newsletter: vm.donation.newsletter,
                    donation_id: vm.donation.donation_id,
                    other_business: vm.donation.other_business,
                    other_individual: vm.donation.other_individual
                }).then(function (response) {
                    if (!response.data.success) {
                        vm.type = 'danger';
                    }

                    vm.showTop = true;
                    vm.flash = response.data.message;

                    vm.donating = false;
                }).catch(function (error) {
                    console.log(error);
                    vm.showTop = true;
                    // vm.flash = error.data.error;
                });
            });
        }
    }
});

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)();
exports.push([module.i, "\n.stripe-card.complete {\n    border-color: green;\n}\n", ""]);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(176),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/components/misc/Stripe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Stripe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7dc2656", Component.options)
  } else {
    hotAPI.reload("data-v-d7dc2656", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("Credit or Debit Card")]), _vm._v(" "), _c('card', {
    staticClass: "stripe-card",
    class: {
      complete: _vm.complete
    },
    attrs: {
      "stripe": _vm.stripe
    },
    on: {
      "change": function($event) {
        _vm.complete = $event.complete
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "pay-with-stripe btn btn-color pull-right",
    attrs: {
      "disabled": _vm.paying || !_vm.complete
    },
    on: {
      "click": _vm.pay
    }
  }, [_vm._v("Donate "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.paying),
      expression: "paying"
    }],
    staticClass: "fa fa-refresh fa-spin"
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d7dc2656", module.exports)
  }
}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading
    }
  }, [_c('div', {
    slot: "copy"
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "40px"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.article.body)
    }
  }), _vm._v(" "), _c('alert', {
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
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.flash))])]), _vm._v(" "), _c('form', {
    attrs: {
      "action": "/support/donate",
      "id": "payment-form",
      "method": "POST"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.donate($event)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('fieldset', [_c('legend', [_vm._v("Donor Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "first_name"
    }
  }, [_vm._v("First Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.first_name),
      expression: "donation.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "first_name"
    },
    domProps: {
      "value": (_vm.donation.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.first_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "last_name"
    }
  }, [_vm._v("Last Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.last_name),
      expression: "donation.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "last_name"
    },
    domProps: {
      "value": (_vm.donation.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.last_name = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email Address")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.email),
      expression: "donation.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email"
    },
    domProps: {
      "value": (_vm.donation.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "phone_number"
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.phone_number),
      expression: "donation.phone_number"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "phone_number"
    },
    domProps: {
      "value": (_vm.donation.phone_number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.phone_number = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "address"
    }
  }, [_vm._v("Address")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.address),
      expression: "donation.address"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "address"
    },
    domProps: {
      "value": (_vm.donation.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.address = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "city"
    }
  }, [_vm._v("City")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.city),
      expression: "donation.city"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "city"
    },
    domProps: {
      "value": (_vm.donation.city)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.city = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "state"
    }
  }, [_vm._v("State")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.state),
      expression: "donation.state"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "state",
      "id": "state"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.donation.state = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select one...")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AL"
    }
  }, [_vm._v("Alabama")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AK"
    }
  }, [_vm._v("Alaska")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AZ"
    }
  }, [_vm._v("Arizona")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AR"
    }
  }, [_vm._v("Arkansas")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CA"
    }
  }, [_vm._v("California")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CO"
    }
  }, [_vm._v("Colorado")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CT"
    }
  }, [_vm._v("Connecticut")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DE"
    }
  }, [_vm._v("Delaware")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DC"
    }
  }, [_vm._v("District of Columbia")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FL"
    }
  }, [_vm._v("Florida")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GA"
    }
  }, [_vm._v("Georgia")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HI"
    }
  }, [_vm._v("Hawaii")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ID"
    }
  }, [_vm._v("Idaho")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IL"
    }
  }, [_vm._v("Illinois")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IN"
    }
  }, [_vm._v("Indiana")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IA"
    }
  }, [_vm._v("Iowa")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KS"
    }
  }, [_vm._v("Kansas")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KY"
    }
  }, [_vm._v("Kentucky")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LA"
    }
  }, [_vm._v("Louisiana")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ME"
    }
  }, [_vm._v("Maine")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MD"
    }
  }, [_vm._v("Maryland")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MA"
    }
  }, [_vm._v("Massachusetts")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MI"
    }
  }, [_vm._v("Michigan")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MN"
    }
  }, [_vm._v("Minnesota")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MS"
    }
  }, [_vm._v("Mississippi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MO"
    }
  }, [_vm._v("Missouri")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MT"
    }
  }, [_vm._v("Montana")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NE"
    }
  }, [_vm._v("Nebraska")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NV"
    }
  }, [_vm._v("Nevada")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NH"
    }
  }, [_vm._v("New Hampshire")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NJ"
    }
  }, [_vm._v("New Jersey")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NM"
    }
  }, [_vm._v("New Mexico")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NY"
    }
  }, [_vm._v("New York")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NC"
    }
  }, [_vm._v("North Carolina")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ND"
    }
  }, [_vm._v("North Dakota")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OH"
    }
  }, [_vm._v("Ohio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OK"
    }
  }, [_vm._v("Oklahoma")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OR"
    }
  }, [_vm._v("Oregon")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PA"
    }
  }, [_vm._v("Pennsylvania")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PR"
    }
  }, [_vm._v("Puerto Rico")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "RI"
    }
  }, [_vm._v("Rhode Island")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SC"
    }
  }, [_vm._v("South Carolina")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SD"
    }
  }, [_vm._v("South Dakota")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TN"
    }
  }, [_vm._v("Tennessee")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "TX"
    }
  }, [_vm._v("Texas")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "UT"
    }
  }, [_vm._v("Utah")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VT"
    }
  }, [_vm._v("Vermont")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VA"
    }
  }, [_vm._v("Virginia")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "WA"
    }
  }, [_vm._v("Washington")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "WV"
    }
  }, [_vm._v("West Virginia")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "WI"
    }
  }, [_vm._v("Wisconsin")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "WY"
    }
  }, [_vm._v("Wyoming")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "zip_code"
    }
  }, [_vm._v("Zip Code")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.zip_code),
      expression: "donation.zip_code"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "zip_code"
    },
    domProps: {
      "value": (_vm.donation.zip_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.zip_code = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.password),
      expression: "donation.password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "password"
    },
    domProps: {
      "value": (_vm.donation.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "password_confirmation"
    }
  }, [_vm._v("Password Confirmation")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.password_confirmation),
      expression: "donation.password_confirmation"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "password_confirmation"
    },
    domProps: {
      "value": (_vm.donation.password_confirmation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.password_confirmation = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('fieldset', {
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('legend', [_vm._v("Donation Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "donation_id"
    }
  }, [_vm._v("Recurring Donation")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.donation_id),
      expression: "donation.donation_id"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "donation_id",
      "id": "donation_id"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.donation.donation_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select one...")]), _vm._v(" "), _c('optgroup', {
    attrs: {
      "label": "Business Donations"
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Gold ($500 per month)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Silver ($100 per month)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Bronze ($50 per month)")])]), _vm._v(" "), _c('optgroup', {
    attrs: {
      "label": "Individual Donations"
    }
  }, [_c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Gold ($30 per month)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Silver ($20 per month)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Bronze ($10 per month)")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "other_business"
    }
  }, [_vm._v("Recurring Business Donation")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.other_business),
      expression: "donation.other_business"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "other_business"
    },
    domProps: {
      "value": (_vm.donation.other_business)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.other_business = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "other_individual"
    }
  }, [_vm._v("Recurring Individual Donation")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.other_individual),
      expression: "donation.other_individual"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "other_individual"
    },
    domProps: {
      "value": (_vm.donation.other_individual)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.donation.other_individual = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('fieldset', {
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c('legend', [_vm._v("Weekly Newsletter")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.donation.newsletter),
      expression: "donation.newsletter"
    }],
    attrs: {
      "type": "checkbox",
      "name": "newsletter",
      "value": "1",
      "checked": "checked"
    },
    domProps: {
      "checked": Array.isArray(_vm.donation.newsletter) ? _vm._i(_vm.donation.newsletter, "1") > -1 : (_vm.donation.newsletter)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.donation.newsletter,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.donation.newsletter = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.donation.newsletter = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.donation.newsletter = $$c
        }
      }
    }
  }), _vm._v(" Opt into weekly newsletter?")])])])])])]), _vm._v(" "), _c('fieldset', [_c('legend', [_vm._v("Credit Card Information")]), _vm._v(" "), _c('psg-stripe', {
    attrs: {
      "paying": _vm.donating
    }
  })], 1)])])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ed8a8a24", module.exports)
  }
}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(1);var r=n(2),u=n(3),i=o(u),s=n(11),l=o(s),c=n(14),f=o(c),a=n(17),p=o(a),d=n(20),m=o(d);e.exports={Card:i.default,CardNumber:p.default,CardExpiry:l.default,CardCvc:f.default,PostalCode:m.default,baseStyle:r.baseStyle,get instance(){return r.Stripe.instance},get createToken(){return r.Stripe.createToken}}},function(e,t){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),o=1;o<arguments.length;o++){var r=arguments[o];if(null!=r)for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(n[u]=r[u])}return n}),e.exports=Object.assign},function(e,t){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===("undefined"==typeof e?"undefined":u(e))&&"function"==typeof e.elements&&(i.instance=e),void 0===window.Stripe&&null===i.instance?console.error("Stripe V3 library not loaded!"):null===i.instance&&(i.instance=window.Stripe(e)),i.instance.elements?null===i.elements&&(i.elements=i.instance.elements(t)):console.error("Stripe V3 library not loaded!")}function o(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n(t,o.elements||{}),o.style=Object.assign(s,o.style||{});var r=i.elements.create(e,o);return i.createToken=function(e){return i.instance.createToken(r,e)},r}function r(){i.instance=null,i.elements=null,i.createToken=null}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.create=o,t.destroy=r;var i=t.Stripe={instance:null,createToken:null,elements:null},s=t.baseStyle={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},function(e,t,n){var o=n(4)(n(5),n(10),null,null);e.exports=o.exports},function(e,t){e.exports=function(e,t,n,o){var r,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,u=e.default);var s="function"==typeof u?u.options:u;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var l=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];l[e]=function(){return t}})}return{esModule:r,exports:u,options:s}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1}}},function(e,t,n){var o=n(4)(n(8),n(9),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(2);t.default={props:Object.assign({type:{type:String,required:!0}},u.default),beforeMount:function(){var e=this;this._element=(0,i.create)(this.type,this.stripe,this.options),this._element.on("blur",function(t){return e.$emit("blur")}),this._element.on("focus",function(t){return e.$emit("focus")}),this._element.on("change",function(t){return e.$emit("change",t)})},mounted:function(){var e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy:function(){this._element.unmount(),this._element.destroy(),(0,i.destroy)()},methods:{blur:function(){this._element.blur()},focus:function(){this._element.focus()},update:function(){this._element.update()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(12),n(13),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(15),n(16),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(18),n(19),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]}},function(e,t,n){var o=n(4)(n(21),n(22),null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),u=o(r),i=n(7),s=o(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("stripe-element",{attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},empty:function(t){e.$emit("empty")},complete:function(t){e.$emit("complete")},brand:function(t){e.$emit("brand",t)},error:function(t){e.$emit("error",t)},value:function(t){e.$emit("value",t)}}})},staticRenderFns:[]}}])});

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(181)("0d365257", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d7dc2656\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Stripe.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d7dc2656\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Stripe.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 181:
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

var listToStyles = __webpack_require__(182)

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

/***/ 182:
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(178),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/support/Donate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Donate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed8a8a24", Component.options)
  } else {
    hotAPI.reload("data-v-ed8a8a24", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ })

});