webpackJsonp([7],{168:function(e,t,n){var a=n(47)(n(476),n(507),null,null);e.exports=a.exports},476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(96),l=function(e){return e&&e.__esModule?e:{"default":e}}(a);t["default"]={data:function(){return{article:{}}},created:function(){var e=this;this.loading=!0,http.get("/articles/10").then(function(t){var n=t.body.article;e.article={headline:n.en_headline,subhead:n.en_subhead,callout:n.en_callout,body:n.en_body},"es"===e.$cookie.get("language")&&(e.article={headline:n.es_headline,subhead:n.es_subhead,callout:n.es_callout,body:n.es_body}),e.loading=!1})["catch"](function(e){})},components:{"psg-speak":l["default"]}}},507:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("psg-page",{attrs:{article:e.article,loading:e.loading}},[n("div",{slot:"copy"},[n("div",{domProps:{innerHTML:e._s(e.article.body)}})])])},staticRenderFns:[]}}});