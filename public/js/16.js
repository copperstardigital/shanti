webpackJsonp([16],{156:function(e,t,o){var a=o(47)(o(466),o(501),null,null);e.exports=a.exports},466:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(96),s=function(e){return e&&e.__esModule?e:{"default":e}}(a);t["default"]={data:function(){return{article:{headline:"",category:{category_name:""},hero_text:"",body:""},post:{},loading:!1}},methods:{getPost:function(e){var t=this;this.loading=!0,axios.get("/posts/"+e).then(function(e){var o=e.data.post;"es"===t.$cookie.get("language")?null!==o?(t.article={headline:o.es_headline,subhead:o.category.es_category_name,callout:o.es_hero_text,image:o.image,link:o.link,body:o.es_body},t.post={headline:o.es_headline,image:o.image,link:o.link,body:o.es_body}):t.article={headline:"Mensaje no encontrado",subhead:"Error 404",callout:"Lo sentimos, pero no hemos podido encontrar la publicación para la que estás buscando. Tal vez sigas un enlace obsoleto, o la entrada se ha eliminado o desactivado.",body:""}:null!==o?(t.article={headline:o.en_headline,subhead:o.category.en_category_name,callout:o.en_hero_text},t.post={headline:o.en_headline,image:o.image,link:o.link,body:o.en_body}):t.article={headline:"Post Not Found",subhead:"404 Error",callout:"We're sorry, but we could not find the post for which you are looking. Perhaps you are following an outdated link, or the post has been deleted or deactivated.",body:""},t.loading=!1})["catch"](function(e){})},copy:function(e,t){return e+" "+t}},watch:{$route:function(e,t){this.getPost(e.params.slug)}},mounted:function(){this.getPost(this.$route.params.slug)},components:{"psg-speak":s["default"]}}},501:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("psg-page",{attrs:{article:e.article,loading:e.loading}},[o("div",{slot:"copy"},[e.post.image?o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[e.post.link?o("div",[o("a",{attrs:{href:e.post.link,target:"_blank"}},[o("img",{staticClass:"img-responsive",attrs:{src:"/uploads/events/"+e.post.image,alt:e.post.headline}})])]):e._e(),e._v(" "),e.post.image&&!e.post.link?o("div",[o("img",{staticClass:"img-responsive",attrs:{src:"/uploads/events/"+e.post.image,alt:e.post.headline}})]):e._e()]),e._v(" "),o("div",{staticClass:"col-md-8"},[o("h1",[e._v(e._s(e.post.headline))]),e._v(" "),o("div",{domProps:{innerHTML:e._s(e.post.body)}}),e._v(" "),e.post.link?o("div",[o("a",{staticClass:"btn btn-color pull-right",attrs:{href:e.post.link}},[e._v("More Information")])]):e._e(),e._v(" "),o("psg-speak",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{text:e.copy(e.post.headline,e.post.body),primary:"true"}})],1)])]):e._e(),e._v(" "),e.post.image?e._e():o("div",[o("h1",[e._v(e._s(e.post.headline))]),e._v(" "),o("div",{domProps:{innerHTML:e._s(e.post.body)}}),e._v(" "),e.post.link?o("div",[o("a",{staticClass:"btn btn-color pull-right",attrs:{href:e.post.link}},[e._v("More Information")])]):e._e(),e._v(" "),o("psg-speak",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{text:e.copy(e.post.headline,e.post.body),primary:"true"}})],1)])])},staticRenderFns:[]}}});