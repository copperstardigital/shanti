webpackJsonp([19],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                _this.events = response.body.events;
            }).catch(function (error) {
                console.error(error);
            });
        },
        getPosts: function getPosts() {
            var _this2 = this;

            http.get('/posts').then(function (response) {
                _this2.posts = response.body.posts;
            }).catch(function (error) {
                console.error(error);
            });
        }
    },
    mounted: function mounted() {
        this.getPosts();
        this.getEvents();
    }
});

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article
    }
  }, [_c('div', {
    slot: "copy"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('h3', [_vm._v("Home")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("About")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/mission"
    }
  }, [_vm._v("Mission")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/getting-started"
    }
  }, [_vm._v("Getting Started")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/history"
    }
  }, [_vm._v("History")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/cultural-competency"
    }
  }, [_vm._v("Cultural Competency")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/about/privacy-policy"
    }
  }, [_vm._v("Privacy Policy")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("Services")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/services/housing"
    }
  }, [_vm._v("Housing")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/services/hiv"
    }
  }, [_vm._v("HIV Services")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("Support")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/donate"
    }
  }, [_vm._v("Donate")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/volunteer"
    }
  }, [_vm._v("Volunteer")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/support/resources"
    }
  }, [_vm._v("Resources")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
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
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("Events")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/events"
    }
  }, [_vm._v("Events")])], 1), _vm._v(" "), _vm._l((_vm.events), function(event, index) {
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
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("Store")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://store.shantiaz.org",
      "target": "_blank"
    }
  }, [_vm._v("2nd Chances Store")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h3', [_vm._v("Contact")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/contact/office"
    }
  }, [_vm._v("Contact")])], 1)], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ddae0134", module.exports)
  }
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(168),
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