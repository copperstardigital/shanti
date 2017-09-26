webpackJsonp([20],{

/***/ 101:
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
                headline: 'Search Results',
                subhead: 'Keywords: "' + this.$route.query.keywords + '"',
                callout: 'Below are the results of your search. If your expected information did not appear below, please try consulting our <a href="/#/site-map">site map</a>.',
                body: ''
            },
            articles: [],
            posts: [],
            events: []
        };
    },
    created: function created() {
        var _this = this;

        this.loading = true;

        axios.get('/search/?keywords=' + this.$route.query.keywords).then(function (response) {
            var articles = response.data.articles;
            var reformatted = [];

            if (_this.$cookie.get('lang') === 'es') {
                articles.forEach(function (article) {
                    reformatted.push({
                        headline: article.es_headline,
                        subhead: article.es_subhead,
                        callout: article.es_callout,
                        link: article.link
                    });
                });
            } else {
                articles.forEach(function (article) {
                    reformatted.push({
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        link: article.link
                    });
                });
            }

            _this.articles = reformatted;
            _this.posts = response.data.posts;
            _this.events = response.data.events;

            _this.loading = false;
        }).catch(function (error) {
            console.error(error);
        });
    }
});

/***/ }),

/***/ 134:
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
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [(!_vm.loading) ? _c('h1', [_vm._v("Articles")]) : _vm._e(), _vm._v(" "), (_vm.articles) ? _c('div', _vm._l((_vm.articles), function(article, index) {
    return _c('div', {
      key: "index"
    }, [_c('h3', [_vm._v(_vm._s(article.headline))]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(article.subhead))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(article.callout)
      }
    }), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": article.link
      }
    }, [_vm._v("Read More...")]), _vm._v(" "), _c('br', {
      staticStyle: {
        "clear": "both"
      }
    }), _vm._v(" "), _c('hr')], 1)
  })) : _vm._e(), _vm._v(" "), (!_vm.articles.length && !_vm.loading) ? _c('div', [_c('p', [_vm._v("Your search returned no articles.")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [(!_vm.loading) ? _c('h1', [_vm._v("Blog")]) : _vm._e(), _vm._v(" "), (_vm.posts) ? _c('div', _vm._l((_vm.posts), function(post, index) {
    return _c('div', {
      key: "index"
    }, [_c('h3', [_vm._v(_vm._s(post.headline))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(post.hero_text)
      }
    }), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v("Read More...")]), _vm._v(" "), _c('br', {
      staticStyle: {
        "clear": "both"
      }
    }), _vm._v(" "), _c('hr')], 1)
  })) : _vm._e(), _vm._v(" "), (!_vm.posts.length && !_vm.loading) ? _c('div', [_c('p', [_vm._v("Your search returned no blog posts.")])]) : _vm._e(), _vm._v(" "), (!_vm.loading) ? _c('hr') : _vm._e(), _vm._v(" "), (!_vm.loading) ? _c('h1', [_vm._v("Events")]) : _vm._e(), _vm._v(" "), (_vm.events) ? _c('div', _vm._l((_vm.events), function(event, index) {
    return _c('div', {
      key: "index"
    }, [_c('h3', [_vm._v(_vm._s(event.event_name))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(event.event_callout)
      }
    }), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/events/' + event.slug
      }
    }, [_vm._v("Read More...")]), _vm._v(" "), _c('br', {
      staticStyle: {
        "clear": "both"
      }
    }), _vm._v(" "), _c('hr')], 1)
  })) : _vm._e(), _vm._v(" "), (!_vm.posts.length && !_vm.loading) ? _c('div', [_c('p', [_vm._v("Your search returned no events.")])]) : _vm._e()])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-029068bf", module.exports)
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(134),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/SearchResults.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchResults.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-029068bf", Component.options)
  } else {
    hotAPI.reload("data-v-029068bf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});