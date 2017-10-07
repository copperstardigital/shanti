webpackJsonp([15],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(48)(
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
                var posts = response.body.posts;

                var reformatted = [];

                if (_this.$cookie.get('language') === 'es') {
                    posts.forEach(function (post) {
                        reformatted.push({
                            headline: post.es_headline,
                            hero_text: post.es_hero_text,
                            slug: post.slug,
                            image: post.image,
                            link: post.link
                        });
                    });
                } else {
                    posts.forEach(function (post) {
                        reformatted.push({
                            headline: post.en_headline,
                            hero_text: post.en_hero_text,
                            slug: post.slug,
                            image: post.image,
                            link: post.link
                        });
                    });
                }

                _this.posts = reformatted;
            })['catch'](function (error) {
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
            })['catch'](function (error) {
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
        'psg-speak': _TextToSpeech2['default']
    },
    computed: {
        readMore: function readMore() {
            if (this.$cookie.get('language') === 'es') {
                return 'Lee más...';
            } else {
                return 'Read more...';
            }
        },
        moreInfo: function moreInfo() {
            if (this.$cookie.get('language') === 'es') {
                return 'Más información';
            } else {
                return 'More Information';
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
      "slot": "posts"
    },
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
        "src": '/uploads/events/' + post.image,
        "alt": post.headline
      }
    })])]) : _vm._e(), _vm._v(" "), (post.image && !post.link) ? _c('div', [_c('router-link', {
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": '/uploads/events/' + post.image,
        "alt": post.headline
      }
    })])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "col-md-8"
    }, [_c('h1', [_vm._v(_vm._s(post.headline))]), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(post.hero_text)
      }
    }), _vm._v(" "), (post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v(_vm._s(_vm.readMore))]), _vm._v(" "), _c('a', {
      staticClass: "btn btn-default pull-right",
      attrs: {
        "href": post.link
      }
    }, [_vm._v(_vm._s(_vm.moreInfo))])], 1) : _vm._e(), _vm._v(" "), (!post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v(_vm._s(_vm.readMore))])], 1) : _vm._e(), _vm._v(" "), _c('psg-speak', {
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
        "innerHTML": _vm._s(post.hero_text)
      }
    }), _vm._v(" "), (post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v(_vm._s(_vm.readMore))]), _vm._v(" "), _c('a', {
      staticClass: "btn btn-default pull-right",
      attrs: {
        "href": post.link
      }
    }, [_vm._v(_vm._s(_vm.moreInfo))])], 1) : _vm._e(), _vm._v(" "), (!post.link) ? _c('div', [_c('router-link', {
      staticClass: "btn btn-color pull-right",
      attrs: {
        "to": '/blog/' + post.slug
      }
    }, [_vm._v(_vm._s(_vm.readMore))])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('br', {
      staticStyle: {
        "clear": "both"
      }
    }), _vm._v(" "), _c('hr')])
  }))])
},staticRenderFns: []}

/***/ })

});