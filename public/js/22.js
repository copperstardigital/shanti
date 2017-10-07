webpackJsonp([22],{

/***/ 128:
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

exports['default'] = {
    data: function data() {
        return {
            article: {
                headline: 'Site Map',
                subhead: 'Available Pages',
                callout: 'Below is a list of available pages. Please refer to one of them to find your resource. You may also use the search function at the top of the page, if your resource is not listed.'
            },
            posts: [],
            events: []
        };
    },

    methods: {
        getEvents: function getEvents() {
            var _this = this;

            http.get('/events').then(function (response) {
                var events = response.body.events;

                var reformatted = [];

                if (_this.$cookie.get('language') === 'es') {
                    events.forEach(function (event) {
                        reformatted.push({
                            event_name: event.es_event_name,
                            slug: event.slug
                        });
                    });
                } else {
                    events.forEach(function (event) {
                        reformatted.push({
                            event_name: event.en_event_name,
                            slug: event.slug
                        });
                    });
                }

                _this.events = reformatted;
            })['catch'](function (error) {
                console.error(error);
            });
        },
        getPosts: function getPosts() {
            var _this2 = this;

            http.get('/posts').then(function (response) {
                var posts = response.body.posts;

                var reformatted = [];

                if (_this2.$cookie.get('language') === 'es') {
                    posts.forEach(function (post) {
                        reformatted.push({
                            headline: post.es_headline,
                            slug: post.slug
                        });
                    });
                } else {
                    posts.forEach(function (post) {
                        reformatted.push({
                            headline: post.en_headline,
                            slug: post.slug
                        });
                    });
                }

                _this2.posts = reformatted;
            })['catch'](function (error) {
                console.error(error);
            });
        }
    },
    mounted: function mounted() {
        this.getPosts();
        this.getEvents();
    },

    computed: {
        home: function home() {
            if (this.$cookie.get('language') === 'es') {
                return 'Casa';
            } else {
                return 'Home';
            }
        },
        about: function about() {
            if (this.$cookie.get('language') === 'es') {
                return 'Acerca de';
            } else {
                return 'About';
            }
        },
        mission: function mission() {
            if (this.$cookie.get('language') === 'es') {
                return 'Misión';
            } else {
                return 'Mission';
            }
        },
        gettingStarted: function gettingStarted() {
            if (this.$cookie.get('language') === 'es') {
                return 'Empezando';
            } else {
                return 'Getting Started';
            }
        },
        history: function history() {
            if (this.$cookie.get('language') === 'es') {
                return 'Historia';
            } else {
                return 'History';
            }
        },
        culturalCompetency: function culturalCompetency() {
            if (this.$cookie.get('language') === 'es') {
                return 'Competencia cultural';
            } else {
                return 'Cultural Competency';
            }
        },
        privacyPolicy: function privacyPolicy() {
            if (this.$cookie.get('language') === 'es') {
                return '';
            } else {
                return 'Privacy Policy';
            }
        },
        services: function services() {
            if (this.$cookie.get('language') === 'es') {
                return 'Política de privacidad\n';
            } else {
                return 'Services';
            }
        },
        housing: function housing() {
            if (this.$cookie.get('language') === 'es') {
                return 'Alojamiento';
            } else {
                return 'Housing';
            }
        },
        hivServices: function hivServices() {
            if (this.$cookie.get('language') === 'es') {
                return 'Servicios de VIH';
            } else {
                return 'HIV Services';
            }
        },
        support: function support() {
            if (this.$cookie.get('language') === 'es') {
                return 'Apoyo';
            } else {
                return 'Support';
            }
        },
        donate: function donate() {
            if (this.$cookie.get('language') === 'es') {
                return 'Donar';
            } else {
                return 'Donate';
            }
        },
        volunteer: function volunteer() {
            if (this.$cookie.get('language') === 'es') {
                return 'Ofrecerse';
            } else {
                return 'Volunteer';
            }
        },
        resources: function resources() {
            if (this.$cookie.get('language') === 'es') {
                return 'Recursos';
            } else {
                return 'Resources';
            }
        },
        contribute: function contribute() {
            if (this.$cookie.get('language') === 'es') {
                return 'Contribuir';
            } else {
                return 'Contribute';
            }
        },
        eventsHeader: function eventsHeader() {
            if (this.$cookie.get('language') === 'es') {
                return 'Eventos';
            } else {
                return 'Events';
            }
        },
        gallery: function gallery() {
            if (this.$cookie.get('language') === 'es') {
                return 'Galería';
            } else {
                return 'Gallery';
            }
        },
        store: function store() {
            if (this.$cookie.get('language') === 'es') {
                return 'Tienda';
            } else {
                return 'Store';
            }
        },
        secondChances: function secondChances() {
            if (this.$cookie.get('language') === 'es') {
                return 'Tienda de 2nd Chances';
            } else {
                return '2nd Chances Store';
            }
        },
        contact: function contact() {
            if (this.$cookie.get('language') === 'es') {
                return 'Contacto';
            } else {
                return 'Contact';
            }
        },
        mainOffice: function mainOffice() {
            if (this.$cookie.get('language') === 'es') {
                return 'Oficina principal';
            } else {
                return 'Main Office';
            }
        },
        staff: function staff() {
            if (this.$cookie.get('language') === 'es') {
                return 'Personal';
            } else {
                return 'Staff';
            }
        },
        board: function board() {
            if (this.$cookie.get('language') === 'es') {
                return 'Junta directiva';
            } else {
                return 'Board';
            }
        }
    }
};

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article
    }
  }, [_c('div', {
    attrs: {
      "slot": "copy"
    },
    slot: "copy"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4 col-sm-offset-2"
  }, [_c('h3', [_vm._v("Home")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v(_vm._s(_vm.home))])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.about))]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/mission"
    }
  }, [_vm._v(_vm._s(_vm.mission))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/getting-started"
    }
  }, [_vm._v(_vm._s(_vm.gettingStarted))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/history"
    }
  }, [_vm._v(_vm._s(_vm.history))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/cultural-competency"
    }
  }, [_vm._v(_vm._s(_vm.culturalCompetency))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/privacy-policy"
    }
  }, [_vm._v(_vm._s(_vm.privacyPolicy))])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.services))]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/services/housing"
    }
  }, [_vm._v(_vm._s(_vm.housing))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/services/hiv"
    }
  }, [_vm._v(_vm._s(_vm.hivServices))])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.support))]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/donate"
    }
  }, [_vm._v(_vm._s(_vm.donate))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/volunteer"
    }
  }, [_vm._v(_vm._s(_vm.volunteer))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/resources"
    }
  }, [_vm._v(_vm._s(_vm.resources))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/contribute"
    }
  }, [_vm._v(_vm._s(_vm.contribute))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('h3', [_vm._v("Blog")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Blog")])], 1), _vm._v(" "), _vm._l((_vm.posts), function(post, index) {
    return _c('div', {
      key: "index"
    }, [_c('p', [_c('router-link', {
      attrs: {
        "to": {
          name: 'blog/view',
          params: {
            slug: post.slug
          }
        }
      }
    }, [_vm._v(_vm._s(post.headline))])], 1)])
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.eventsHeader))]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/events"
    }
  }, [_vm._v(_vm._s(_vm.eventsHeader))])], 1), _vm._v(" "), _vm._l((_vm.events), function(event, index) {
    return _c('div', {
      key: "index"
    }, [_c('p', [_c('router-link', {
      attrs: {
        "to": {
          name: 'event/view',
          params: {
            slug: event.slug
          }
        }
      }
    }, [_vm._v(_vm._s(event.event_name))])], 1)])
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.store))]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://store.shantiaz.org",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.secondChances))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v(_vm._s(_vm.contact))]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/contact/office"
    }
  }, [_vm._v(_vm._s(_vm.mainOffice))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/contact/staff"
    }
  }, [_vm._v(_vm._s(_vm.staff))])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/contact/board"
    }
  }, [_vm._v(_vm._s(_vm.board))])], 1)], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ddae0134", module.exports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(203),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/SiteMap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SiteMap.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ddae0134", Component.options)
  } else {
    hotAPI.reload("data-v-ddae0134", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});