webpackJsonp([19],{256:function(e,t,a){var s=a(75)(a(665),a(723),null,null);e.exports=s.exports},665:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(166),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{article:{}}},created:function(){var e=this;this.loading=!0,http.get("/articles/1").then(function(t){var a=t.body.article;e.article={headline:a.en_headline,subhead:a.en_subhead,callout:a.en_callout,body:a.en_body},"es"===e.$cookie.get("language")&&(e.article={headline:a.es_headline,subhead:a.es_subhead,callout:a.es_callout,body:a.es_body}),e.loading=!1}).catch(function(e){})},components:{"psg-speak":i.default}}},723:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("psg-page",{attrs:{article:e.article,loading:e.loading}},[a("div",{slot:"copy"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[a("img",{staticClass:"img-responsive",attrs:{src:"/img/first_step.jpg",alt:"First Step"}})])]),e._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{domProps:{innerHTML:e._s(e.article.body)}}),e._v(" "),a("psg-speak",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{text:e.article.body,primary:"true"}})],1)])])])},staticRenderFns:[]}}});