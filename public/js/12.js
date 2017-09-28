webpackJsonp([12],{

/***/ 115:
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
//
//
//
//
//
//
//
//
//
//
//
//
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
            posts: []
        };
    },

    methods: {
        getPosts: function getPosts() {
            var _this = this;

            http.get('/posts')
            //.use(saCache)
            .then(function (response) {
                _this.posts = response.body.posts;
            }).catch(function (error) {
                console.error(error);
            });
        },
        getArticle: function getArticle() {
            var _this2 = this;

            http.get('/articles/11')
            //.use(saCache)
            .then(function (response) {
                var article = response.body.article;

                _this2.article = {
                    headline: article.en_headline,
                    subhead: article.en_subhead,
                    callout: article.en_callout,
                    body: article.en_body
                };

                _this2.loading = false;
            }).catch(function (error) {
                console.error(error);
            });
        },
        copy: function copy(headline, _copy) {
            return headline + ' ' + _copy;
        }
    },
    beforeMount: function beforeMount() {
        this.getArticle();
        this.getPosts();
    },
    created: function created() {
        this.loading = true;
    },

    components: {
        'psg-speak': __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech___default.a
    }
});

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading
    }
  }, [_c('div', {
    slot: "posts"
  }, _vm._l((_vm.posts), function(post, index) {
    return _c('div', {
      key: "index"
    }, [(post.image) ? _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-4"
    }, [(post.link) ? _c('div', [_c('a', {
      attrs: {
        "href": post.link,
        "target": "_blank"
      }
    }, [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": '/uploads/' + post.image,
        "alt": post.headline
      }
    })])]) : _vm._e(), _vm._v(" "), (post.image && !post.link) ? _c('div', [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": '/uploads/' + post.image,
        "alt": post.headline
      }
    })]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "col-md-8"
    }, [_c('h1', [_vm._v(_vm._s(post.headline))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(post.body)
      }
    }), _vm._v(" "), (post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v("Read Post")]), _vm._v(" "), _c('a', {
      staticClass: "btn btn-default pull-right",
      attrs: {
        "href": post.link
      }
    }, [_vm._v("More Information")])], 1) : _vm._e(), _vm._v(" "), (!post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v("Read Post")])], 1) : _vm._e(), _vm._v(" "), _c('psg-speak', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!_vm.loading),
        expression: "!loading"
      }],
      attrs: {
        "text": _vm.copy(post.headline, post.body),
        "primary": "true"
      }
    })], 1)])]) : _vm._e(), _vm._v(" "), (!post.image) ? _c('div', [_c('h1', [_vm._v(_vm._s(post.headline))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(post.body)
      }
    }), _vm._v(" "), (post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v("Read Post")]), _vm._v(" "), _c('a', {
      staticClass: "btn btn-default pull-right",
      attrs: {
        "href": post.link
      }
    }, [_vm._v("More Information")])], 1) : _vm._e(), _vm._v(" "), (!post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v("Read Post")])], 1) : _vm._e()]) : _vm._e()])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b99bdb6", module.exports)
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(157),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/blog/Posts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Posts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b99bdb6", Component.options)
  } else {
    hotAPI.reload("data-v-4b99bdb6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});