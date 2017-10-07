webpackJsonp([11],{

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(92)(
  /* script */
  __webpack_require__(471),
  /* template */
  __webpack_require__(523),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextToSpeech = __webpack_require__(334);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    data: function data() {
        return {
            article: {
                headline: this.$cookie.get('language') === 'es' ? 'Eventos' : 'Events',
                subhead: this.$cookie.get('language') === 'es' ? 'Shanti en la Comunidad' : 'Shanti in the Community',
                callout: this.$cookie.get('language') === 'es' ? 'Shanti frecuentemente participa o participa en eventos en la comunidad local. Encontrará más información sobre ellos aquí.' : 'Shanti frequently puts on or participates in events in the local community. You will find more information about them here.'
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
                var events = response.body.events;
                var reformatted = [];

                if (_this.$cookie.get('language') === 'es') {
                    events.forEach(function (event) {
                        reformatted.push({
                            event_name: event.es_event_name,
                            event_callout: event.es_event_callout,
                            slug: event.slug,
                            image: event.image
                        });
                    });
                } else {
                    events.forEach(function (event) {
                        reformatted.push({
                            event_name: event.en_event_name,
                            event_callout: event.en_event_callout,
                            slug: event.slug,
                            image: event.image
                        });
                    });
                }

                _this.events = reformatted;

                _this.loading = false;
            })['catch'](function (error) {
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
        'psg-speak': _TextToSpeech2['default']
    },
    computed: {
        readMore: function readMore() {
            if (this.$cookie.get('language') === 'es') {
                return 'Lee más...';
            } else {
                return 'Read more...';
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

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading,
      "events": _vm.events
    }
  }, [_c('div', {
    attrs: {
      "slot": "copy"
    },
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
        "alt": event.event_name
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
    }, [_vm._v(_vm._s(_vm.readMore))]), _vm._v(" "), _c('psg-speak', {
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

/***/ })

});