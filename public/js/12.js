webpackJsonp([12],{

/***/ 110:
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            article: {
                headline: '',
                category: {
                    category_name: ''
                },
                hero_text: '',
                body: ''
            },
            post: {},
            loading: false
        };
    },

    methods: {
        getPost: function getPost(slug) {
            var _this = this;

            this.loading = true;

            axios.get('/posts/' + slug).then(function (response) {
                var post = response.data.post;

                if (post !== null) {
                    _this.article = {
                        headline: post.headline,
                        subhead: post.category.category_name,
                        callout: post.hero_text,
                        body: ''
                    };

                    _this.post = post;
                } else {
                    _this.article = {
                        headline: 'Post Not Found',
                        subhead: '404 Error',
                        callout: 'We\'re sorry, but we could not find the post for which you are looking. Perhaps you are following an outdated link, or the post has been deleted or inactivated.',
                        body: ''
                    };
                }

                _this.loading = false;
            }).catch(function (error) {
                return console.log(error);
            });
        },
        copy: function copy(headline, _copy) {
            return headline + ' ' + _copy;
        }
    },
    watch: {
        '$route': function $route(to, from) {
            this.getPost(to.params.slug);
        }
    },
    mounted: function mounted() {
        this.getPost(this.$route.params.slug);
    },

    components: {
        'psg-speak': __WEBPACK_IMPORTED_MODULE_0__components_misc_TextToSpeech___default.a
    }
});

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('psg-page', {
    attrs: {
      "article": _vm.article,
      "loading": _vm.loading
    }
  }, [_c('div', {
    slot: "copy"
  }, [(_vm.post.image) ? _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [(_vm.post.link) ? _c('div', [_c('a', {
    attrs: {
      "href": _vm.post.link,
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": '/uploads/' + _vm.post.image,
      "alt": _vm.post.headline
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.post.image && !_vm.post.link) ? _c('div', [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": '/uploads/' + _vm.post.image,
      "alt": _vm.post.headline
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('h1', [_vm._v(_vm._s(_vm.post.headline))]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.body)
    }
  }), _vm._v(" "), (_vm.post.link) ? _c('div', [_c('a', {
    staticClass: "btn btn-color pull-right",
    attrs: {
      "href": _vm.post.link
    }
  }, [_vm._v("More Information")])]) : _vm._e(), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.copy(_vm.post.headline, _vm.post.body),
      "primary": "true"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), (!_vm.post.image) ? _c('div', [_c('h1', [_vm._v(_vm._s(_vm.post.headline))]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.body)
    }
  }), _vm._v(" "), (_vm.post.link) ? _c('div', [_c('a', {
    staticClass: "btn btn-color pull-right",
    attrs: {
      "href": _vm.post.link
    }
  }, [_vm._v("More Information")])]) : _vm._e(), _vm._v(" "), _c('psg-speak', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    attrs: {
      "text": _vm.copy(_vm.post.headline, _vm.post.body),
      "primary": "true"
    }
  })], 1) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13311084", module.exports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/piscean/Sites/shanti/resources/assets/js/views/blog/Post.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Post.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13311084", Component.options)
  } else {
    hotAPI.reload("data-v-13311084", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});