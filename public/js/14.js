webpackJsonp([14],{156:function(e,t,a){var i=a(47)(a(463),a(510),null,null);e.exports=i.exports},463:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(96),r=function(e){return e&&e.__esModule?e:{"default":e}}(i);t["default"]={data:function(){return{article:{}}},created:function(){var e=this;this.loading=!0,http.get("/articles/13").then(function(t){var a=t.body.article;e.article={headline:a.en_headline,subhead:a.en_subhead,callout:a.en_callout,body:a.en_body},"es"===e.$cookie.get("language")&&(e.article={headline:a.es_headline,subhead:a.es_subhead,callout:a.es_callout,body:a.es_body}),e.loading=!1})["catch"](function(e){})},components:{"psg-speak":r["default"]},computed:{chairman:function(){return"es"===this.$cookie.get("language")?"Presidente":"Chairman"},secretary:function(){return"es"===this.$cookie.get("language")?"Secretario":"Secretary"},treasurer:function(){return"es"===this.$cookie.get("language")?"Tesorero":"Treasurer"},member:function(){return"es"===this.$cookie.get("language")?"Miembro":"Member"},affiliation:function(){return"es"===this.$cookie.get("language")?"Afiliación":"Affiliation"}}}},510:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("psg-page",{attrs:{article:e.article,loading:e.loading}},[a("div",{attrs:{slot:"copy"},slot:"copy"},[a("div",{domProps:{innerHTML:e._s(e.article.body)}}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 col-sm-offset-2"},[a("h3",[e._v(e._s(e.chairman))]),e._v(" "),a("h5",[e._v("Rudy Navarro")]),e._v(" "),a("p",[e._v(e._s(e.affiliation)+": Arizona State University, Phoenix College")]),e._v(" "),a("hr"),e._v(" "),a("h3",[e._v(e._s(e.secretary))]),e._v(" "),a("h5",[e._v("Trent Tripp")]),e._v(" "),a("p",[e._v(e._s(e.affiliation)+": Rehab Specialists")]),e._v(" "),a("hr"),e._v(" "),a("h3",[e._v(e._s(e.treasurer))]),e._v(" "),a("h5",[e._v("Open")]),e._v(" "),a("hr",{staticClass:"visible-xs"})]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("h3",[e._v("Director")]),e._v(" "),a("h5",[e._v("Dr. Charles Boag")]),e._v(" "),a("hr"),e._v(" "),a("h3",[e._v(e._s(e.member))]),e._v(" "),a("h5",[e._v("Wayne Tormala")]),e._v(" "),a("p",[e._v(e._s(e.affiliation)+": Chief of the Tobacco and Chronic Disease Division of AZ Department of Health Services (ADHS)")])])]),e._v(" "),a("psg-speak",{attrs:{text:"Rudy Navarro is the chairman. Trent Tripp is the secretary. The treasurer position is open. Dr. Charles Boag is the director. Wayne Tormala is a member.",loading:e.loading,primary:"true"}})],1)])},staticRenderFns:[]}}});