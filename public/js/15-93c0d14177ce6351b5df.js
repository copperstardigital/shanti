webpackJsonp([15],{140:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(6),n=function(t){return t&&t.__esModule?t:{"default":t}}(i);e["default"]={data:function(){return{article:{},posts:[]}},methods:{getPosts:function(){var t=this;http.get("/posts").then(function(e){var s=e.body.posts,i=[];"es"===t.$cookie.get("language")?s.forEach(function(t){i.push({headline:t.es_headline,hero_text:t.es_hero_text,slug:t.slug,image:t.image,link:t.link})}):s.forEach(function(t){i.push({headline:t.en_headline,hero_text:t.en_hero_text,slug:t.slug,image:t.image,link:t.link})}),t.posts=i})["catch"](function(t){})},getArticle:function(){var t=this;http.get("/articles/11").then(function(e){var s=e.body.article;t.article={headline:s.en_headline,subhead:s.en_subhead,callout:s.en_callout,body:s.en_body},t.loading=!1})["catch"](function(t){})},copy:function(t,e){return t+" "+e}},beforeMount:function(){this.getArticle(),this.getPosts()},created:function(){this.loading=!0},components:{"psg-speak":n["default"]},computed:{readMore:function(){return"es"===this.$cookie.get("language")?"Lee más...":"Read more..."},moreInfo:function(){return"es"===this.$cookie.get("language")?"Más información":"More Information"}}}},186:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("psg-page",{attrs:{article:t.article,loading:t.loading}},[s("div",{attrs:{slot:"posts"},slot:"posts"},t._l(t.posts,function(e,i){return s("div",{key:"index"},[e.image?s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[e.link?s("div",[s("a",{attrs:{href:e.link,target:"_blank"}},[s("img",{staticClass:"img-responsive",attrs:{src:"/uploads/events/"+e.image,alt:e.headline}})])]):t._e(),t._v(" "),e.image&&!e.link?s("div",[s("router-link",{attrs:{to:"/blog/"+e.slug}},[s("img",{staticClass:"img-responsive",attrs:{src:"/uploads/events/"+e.image,alt:e.headline}})])],1):t._e()]),t._v(" "),s("div",{staticClass:"col-md-8"},[s("h1",[t._v(t._s(e.headline))]),t._v(" "),s("div",{domProps:{innerHTML:t._s(e.hero_text)}}),t._v(" "),e.link?s("div",[s("router-link",{staticClass:"btn btn-color pull-right",attrs:{to:"/blog/"+e.slug}},[t._v(t._s(t.readMore))]),t._v(" "),s("a",{staticClass:"btn btn-default pull-right",attrs:{href:e.link}},[t._v(t._s(t.moreInfo))])],1):t._e(),t._v(" "),e.link?t._e():s("div",[s("router-link",{staticClass:"btn btn-color pull-right",attrs:{to:"/blog/"+e.slug}},[t._v(t._s(t.readMore))])],1),t._v(" "),s("psg-speak",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{text:t.copy(e.headline,e.body),primary:"true"}})],1)])]):t._e(),t._v(" "),e.image?t._e():s("div",[s("h1",[t._v(t._s(e.headline))]),t._v(" "),s("div",{domProps:{innerHTML:t._s(e.hero_text)}}),t._v(" "),e.link?s("div",[s("router-link",{staticClass:"btn btn-color pull-right",attrs:{to:"/blog/"+e.slug}},[t._v(t._s(t.readMore))]),t._v(" "),s("a",{staticClass:"btn btn-default pull-right",attrs:{href:e.link}},[t._v(t._s(t.moreInfo))])],1):t._e(),t._v(" "),e.link?t._e():s("div",[s("router-link",{staticClass:"btn btn-color pull-right",attrs:{to:"/blog/"+e.slug}},[t._v(t._s(t.readMore))])],1)]),t._v(" "),s("br",{staticStyle:{clear:"both"}}),t._v(" "),s("hr")])}))])},staticRenderFns:[]}},35:function(t,e,s){var i=s(1)(s(140),s(186),null,null);t.exports=i.exports}});