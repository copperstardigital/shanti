webpackJsonp([14],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(47)(
  /* script */
  __webpack_require__(465),
  /* template */
  __webpack_require__(512),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(96);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            article: {}
        };
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        http.get('/articles/13')
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
    },
    computed: {
        chairman: function chairman() {
            if (this.$cookie.get('language') === 'es') {
                return 'Presidente';
            } else {
                return 'Chairman';
            }
        },
        secretary: function secretary() {
            if (this.$cookie.get('language') === 'es') {
                return 'Secretario';
            } else {
                return 'Secretary';
            }
        },
        treasurer: function treasurer() {
            if (this.$cookie.get('language') === 'es') {
                return 'Tesorero';
            } else {
                return 'Treasurer';
            }
        },
        member: function member() {
            if (this.$cookie.get('language') === 'es') {
                return 'Miembro';
            } else {
                return 'Member';
            }
        },
        affiliation: function affiliation() {
            if (this.$cookie.get('language') === 'es') {
                return 'Afiliación';
            } else {
                return 'Affiliation';
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

/***/ }),

/***/ 512:
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
    domProps: {
      "innerHTML": _vm._s(_vm.article.body)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4 col-sm-offset-2"
  }, [_c('h3', [_vm._v(_vm._s(_vm.chairman))]), _vm._v(" "), _c('h5', [_vm._v("Rudy Navarro")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.affiliation) + ": Arizona State University, Phoenix College")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.secretary))]), _vm._v(" "), _c('h5', [_vm._v("Trent Tripp")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.affiliation) + ": Rehab Specialists")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.treasurer))]), _vm._v(" "), _c('h5', [_vm._v("Open")]), _vm._v(" "), _c('hr', {
    staticClass: "visible-xs"
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('h3', [_vm._v("Director")]), _vm._v(" "), _c('h5', [_vm._v("Dr. Charles Boag")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.member))]), _vm._v(" "), _c('h5', [_vm._v("Wayne Tormala")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.affiliation) + ": Chief of the Tobacco and Chronic Disease Division of AZ Department of Health Services (ADHS)")])])]), _vm._v(" "), _c('psg-speak', {
    attrs: {
      "text": "Rudy Navarro is the chairman. Trent Tripp is the secretary. The treasurer position is open. Dr. Charles Boag is the director. Wayne Tormala is a member.",
      "loading": _vm.loading,
      "primary": "true"
    }
  })], 1)])
},staticRenderFns: []}

/***/ })

});