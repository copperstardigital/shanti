webpackJsonp([16],{

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(92)(
  /* script */
  __webpack_require__(465),
  /* template */
  __webpack_require__(501),
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

var _TextToSpeech = __webpack_require__(334);

var _TextToSpeech2 = _interopRequireDefault(_TextToSpeech);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
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
                if (_this.$cookie.get('language') === 'es') {
                    if (post !== null) {
                        _this.article = {
                            headline: post.es_headline,
                            subhead: post.category.es_category_name,
                            callout: post.es_hero_text,
                            image: post.image,
                            link: post.link,
                            body: post.es_body
                        };

                        _this.post = {
                            headline: post.es_headline,
                            image: post.image,
                            link: post.link,
                            body: post.es_body
                        };
                    } else {
                        _this.article = {
                            headline: 'Mensaje no encontrado',
                            subhead: 'Error 404',
                            callout: 'Lo sentimos, pero no hemos podido encontrar la publicación para la que estás buscando. Tal vez sigas un enlace obsoleto, o la entrada se ha eliminado o desactivado.',
                            body: ''
                        };
                    }
                } else {
                    if (post !== null) {
                        _this.article = {
                            headline: post.en_headline,
                            subhead: post.category.en_category_name,
                            callout: post.en_hero_text
                        };

                        _this.post = {
                            headline: post.en_headline,
                            image: post.image,
                            link: post.link,
                            body: post.en_body
                        };
                    } else {
                        _this.article = {
                            headline: 'Post Not Found',
                            subhead: '404 Error',
                            callout: 'We\'re sorry, but we could not find the post for which you are looking. Perhaps you are following an outdated link, or the post has been deleted or deactivated.',
                            body: ''
                        };
                    }
                }

                _this.loading = false;
            })['catch'](function (error) {
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
//
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

/***/ 501:
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
      "src": '/uploads/events/' + _vm.post.image,
      "alt": _vm.post.headline
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.post.image && !_vm.post.link) ? _c('div', [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": '/uploads/events/' + _vm.post.image,
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

/***/ })

});