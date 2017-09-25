webpackJsonp([9],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            article: {
                headline: 'Events',
                subhead: 'Shanti in the Community',
                callout: 'Shanti frequently puts on or participates in events in the local community. You will find more information about them here.'
            },
            loading: false,
            events: []
        };
    },

    methods: {
        getEvents: function getEvents() {
            var _this = this;

            this.loading = true;

            http.get('/events').then(function (response) {
                _this.events = response.body.events;

                _this.loading = false;
            }).catch(function (error) {
                console.error(error);
            });
        },
        copy: function copy(event, callout) {
            return event + ' ' + callout;
        }
    },
    mounted: function mounted() {
        this.getEvents();
    },

    components: {
        'psg-speak': __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech___default.a
    }
});

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading,
      "events": _vm.events
    }
  }, [_c('div', {
    slot: "copy"
  }, _vm._l((_vm.events), function(event, index) {
    return _c('div', {
      key: "index"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [(event.image) ? _c('div', [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": '/uploads/events/' + event.image,
        "alt": "event.event_name"
      }
    })]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('h1', [_vm._v(_vm._s(event.event_name))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(event.event_callout)
      }
    }), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": {
          name: 'event/view',
          params: {
            slug: event.slug
          }
        }
      }
    }, [_vm._v("Read More...")]), _vm._v(" "), _c('psg-speak', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!_vm.loading),
        expression: "!loading"
      }],
      attrs: {
        "text": _vm.copy(event.event_name, event.event_callout),
        "primary": "true"
      }
    })], 1)]), _vm._v(" "), _c('hr')])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78922e20", module.exports)
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(156),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/events/Events.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Events.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78922e20", Component.options)
  } else {
    hotAPI.reload("data-v-78922e20", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});