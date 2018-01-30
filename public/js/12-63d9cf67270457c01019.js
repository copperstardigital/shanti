webpackJsonp([12],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(6);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            article: {},
            loading: false
        };
    },

    methods: {
        copy: function copy(headline, _copy) {
            return headline + ' ' + _copy;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.loading = true;

        http.get('/events/' + this.$route.params.slug)
        //.use(saCache)
        .then(function (response) {
            var event = response.body.event;

            if (_this.$cookie.get('language') === 'es') {
                if (event !== null) {
                    _this.article = {
                        headline: event.es_event_name,
                        subhead: new Date(event.event_start).toLocaleDateString(),
                        callout: event.es_event_callout,
                        body: event.es_event_description,
                        map_link: event.map_link,
                        image: event.image,
                        event_url: event.event_url
                    };
                } else {
                    _this.article = {
                        headline: 'Event Not Found',
                        subhead: '404 Error',
                        callout: 'We\'re sorry, but we could not locate this event. Perhaps it has already passed or you are following a mistyped link.',
                        not_found: true
                    };
                }
            } else {
                if (event !== null) {
                    _this.article = {
                        headline: event.en_event_name,
                        subhead: new Date(event.event_start).toLocaleDateString(),
                        callout: event.en_event_callout,
                        body: event.en_event_description,
                        map_link: event.map_link,
                        image: event.image,
                        event_url: event.event_url
                    };
                } else {
                    _this.article = {
                        headline: 'Event Not Found',
                        subhead: '404 Error',
                        callout: 'We\'re sorry, but we could not locate this event. Perhaps it has already passed or you are following a mistyped link.',
                        not_found: true
                    };
                }
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

/***/ }),

/***/ 170:
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
  }, [(_vm.article.image && !_vm.article.map_link) ? _c('div', [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": '/uploads/events/' + _vm.article.image,
      "alt": "article.headline"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.article.map_link) ? _c('div', [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.article.map_link)
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [(!_vm.article.not_found) ? _c('div', [_c('h1', [_vm._v(_vm._s(_vm.article.headline))]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.article.body)
    }
  }), _vm._v(" "), (_vm.article.event_url) ? _c('div', [_c('a', {
    staticClass: "btn btn-color pull-right",
    attrs: {
      "href": _vm.article.event_url,
      "target": "_blank"
    }
  }, [_vm._v("Read More...")])]) : _vm._e(), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.copy(_vm.article.headline, _vm.article.body),
      "primary": "true"
    }
  })], 1) : _vm._e()])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03c55f63", module.exports)
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(170),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/brianwebb/Development/exponential/clients/shanti/resources/assets/js/views/events/Event.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Event.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03c55f63", Component.options)
  } else {
    hotAPI.reload("data-v-03c55f63", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});