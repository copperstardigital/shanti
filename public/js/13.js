webpackJsonp([13],{

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(466),
  /* template */
  __webpack_require__(510),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 466:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { alert } from 'vue-strap';

exports['default'] = {
    data: function data() {
        return {
            article: {},
            name: '',
            emailAddress: '',
            phone: '',
            subject: '',
            message: '',
            showTop: false,
            type: 'success',
            flash: '',
            formSubmitted: false
        };
    },

    methods: {
        validateBeforeSubmit: function validateBeforeSubmit(e) {
            this.$validator.validateAll();
            if (!this.errors.any()) {
                this.sendMessage();
            }
        },
        sendMessage: function sendMessage() {
            var _this = this;

            this.formSubmitted = true;

            axios.post('/contact', {
                name: this.name,
                email: this.emailAddress,
                phone: this.phone,
                subject: this.subject,
                message: this.message
            }).then(function (response) {
                _this.showTop = true;
                _this.flash = 'Thank you for contacting Shanti. We will be in touch shortly.';
            })['catch'](function (error) {
                _this.showTop = true;
                _this.type = 'danger';
                _this.flash = error.message;
            });
        }
    },
    created: function created() {
        var _this2 = this;

        this.loading = true;

        http.get('/articles/12')
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
        })['catch'](function (error) {
            console.error(error);
        });
    },

    components: {
        // alert: alert
    }
};

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

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
    staticClass: "col-sm-6"
  }, [_c('iframe', {
    staticStyle: {
      "border": "0"
    },
    attrs: {
      "src": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.326600321518!2d-112.11022!3d33.538261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd063606639b3257!2sShanti+Group+Inc!5e0!3m2!1sen!2sus!4v1500435531942",
      "width": "100%",
      "height": "450",
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "about-us-three"
  }, [_c('h1', [_vm._v("Contact Us")]), _vm._v(" "), (!_vm.formSubmitted) ? _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group",
    "class": {
      'has-error': _vm.errors.has('emailAddress')
    }
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.name),
      expression: "name",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "text",
      "id": "name",
      "data-vv-rules": "required"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.errors.has('name')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('name')))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v("Required")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": {
      'has-error': _vm.errors.has('emailAddress')
    }
  }, [_c('label', {
    attrs: {
      "for": "emailAddress"
    }
  }, [_vm._v("Email:")]), _vm._v(" "), _c('input', {
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
      "type": "email",
      "name": "emailAddress",
      "id": "emailAddress",
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
  }, [_vm._v("A valid email address is required.")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v("Required")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "phone"
    }
  }, [_vm._v("Phone:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "name": "phone",
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
    "class": {
      'has-error': _vm.errors.has('subject')
    }
  }, [_c('label', {
    attrs: {
      "for": "subject"
    }
  }, [_vm._v("Subject:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.subject),
      expression: "subject"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.subject),
      expression: "subject",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "subject",
      "id": "subject",
      "data-vv-rules": "required"
    },
    domProps: {
      "value": (_vm.subject)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.subject = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.errors.has('subject')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('subject')))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v("Required")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    "class": {
      'has-error': _vm.errors.has('message')
    }
  }, [_c('label', {
    attrs: {
      "for": "message"
    }
  }, [_vm._v("Message:")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.message),
      expression: "message"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.message),
      expression: "message",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "message",
      "name": "message",
      "rows": "10",
      "data-vv-rules": "required"
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.errors.has('message')) ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('message')))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v("Required")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-color pull-right",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Send Message")])]) : _vm._e()])])])])])
},staticRenderFns: []}

/***/ })

});