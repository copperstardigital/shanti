webpackJsonp([14],{264:function(e,a,t){var i=t(75)(t(674),t(719),null,null);e.exports=i.exports},674:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(166),r=function(e){return e&&e.__esModule?e:{default:e}}(i);a.default={data:function(){return{article:{}}},created:function(){var e=this;this.loading=!0,http.get("/articles/13").then(function(a){var t=a.body.article;e.article={headline:t.en_headline,subhead:t.en_subhead,callout:t.en_callout,body:t.en_body},"es"===e.$cookie.get("language")&&(e.article={headline:t.es_headline,subhead:t.es_subhead,callout:t.es_callout,body:t.es_body}),e.loading=!1}).catch(function(e){})},components:{"psg-speak":r.default},computed:{chairman:function(){return"es"===this.$cookie.get("language")?"Presidente":"Chairman"},secretary:function(){return"es"===this.$cookie.get("language")?"Secretario":"Secretary"},treasurer:function(){return"es"===this.$cookie.get("language")?"Tesorero":"Treasurer"},member:function(){return"es"===this.$cookie.get("language")?"Miembro":"Member"},affiliation:function(){return"es"===this.$cookie.get("language")?"Afiliación":"Affiliation"}}}},719:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("psg-page",{attrs:{article:e.article,loading:e.loading}},[t("div",{slot:"copy"},[t("div",{domProps:{innerHTML:e._s(e.article.body)}}),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-4 col-sm-offset-2"},[t("h3",[e._v(e._s(e.chairman))]),e._v(" "),t("h5",[e._v("Rudy Navarro")]),e._v(" "),t("p",[e._v(e._s(e.affiliation)+": Arizona State University, Phoenix College")]),e._v(" "),t("hr"),e._v(" "),t("h3",[e._v(e._s(e.secretary))]),e._v(" "),t("h5",[e._v("Trent Tripp")]),e._v(" "),t("p",[e._v(e._s(e.affiliation)+": Rehab Specialists")]),e._v(" "),t("hr"),e._v(" "),t("h3",[e._v(e._s(e.treasurer))]),e._v(" "),t("h5",[e._v("Open")]),e._v(" "),t("hr",{staticClass:"visible-xs"})]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("h3",[e._v("Director")]),e._v(" "),t("h5",[e._v("Dr. Charles Boag")]),e._v(" "),t("hr"),e._v(" "),t("h3",[e._v(e._s(e.member))]),e._v(" "),t("h5",[e._v("Wayne Tormala")]),e._v(" "),t("p",[e._v(e._s(e.affiliation)+": Chief of the Tobacco and Chronic Disease Division of AZ Department of Health Services (ADHS)")])])]),e._v(" "),t("psg-speak",{attrs:{text:"Rudy Navarro is the chairman. Trent Tripp is the secretary. The treasurer position is open. Dr. Charles Boag is the director. Wayne Tormala is a member.",loading:e.loading,primary:"true"}})],1)])},staticRenderFns:[]}}});