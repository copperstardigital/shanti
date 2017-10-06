webpackJsonp([13],{153:function(e,s,a){var t=a(47)(a(450),a(493),null,null);e.exports=t.exports},450:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a(95);s.default={data:function(){return{article:{},name:"",emailAddress:"",phone:"",subject:"",message:"",showTop:!1,type:"success",flash:"",formSubmitted:!1}},methods:{validateBeforeSubmit:function(e){this.$validator.validateAll(),this.errors.any()||this.sendMessage()},sendMessage:function(){var e=this;this.formSubmitted=!0,axios.post("/contact",{name:this.name,email:this.emailAddress,phone:this.phone,subject:this.subject,message:this.message}).then(function(s){e.showTop=!0,e.flash="Thank you for contacting Shanti. We will be in touch shortly."}).catch(function(s){e.showTop=!0,e.type="danger",e.flash=s.message})}},created:function(){var e=this;this.loading=!0,http.get("/articles/12").then(function(s){var a=s.body.article;e.article={headline:a.en_headline,subhead:a.en_subhead,callout:a.en_callout,body:a.en_body},"es"===e.$cookie.get("language")&&(e.article={headline:a.es_headline,subhead:a.es_subhead,callout:a.es_callout,body:a.es_body}),e.loading=!1}).catch(function(e){})},components:{alert:t.alert}}},493:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("psg-page",{attrs:{article:e.article,loading:e.loading}},[a("div",{attrs:{slot:"copy"},slot:"copy"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.326600321518!2d-112.11022!3d33.538261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd063606639b3257!2sShanti+Group+Inc!5e0!3m2!1sen!2sus!4v1500435531942",width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})]),e._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"about-us-three"},[a("alert",{attrs:{placement:"top-right",duration:"10000",type:e.type,width:"500px",dismissable:""},model:{value:e.showTop,callback:function(s){e.showTop=s},expression:"showTop"}},[a("span",{staticClass:"icon-ok-circled alert-icon-float-left"}),e._v(" "),a("p",[e._v(e._s(e.flash))])]),e._v(" "),a("h1",[e._v("Contact Us")]),e._v(" "),e.formSubmitted?e._e():a("form",{on:{submit:function(s){s.preventDefault(),e.validateBeforeSubmit(s)}}},[a("div",{staticClass:"form-group",class:{"has-error":e.errors.has("emailAddress")}},[a("label",{attrs:{for:"name"}},[e._v("Name:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate.initial",value:e.name,expression:"name",modifiers:{initial:!0}}],staticClass:"form-control",attrs:{type:"text",name:"text",id:"name","data-vv-rules":"required"},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}}),e._v(" "),e.errors.has("name")?a("p",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("name")))]):e._e(),e._v(" "),a("p",{staticClass:"help-block"},[e._v("Required")])]),e._v(" "),a("div",{staticClass:"form-group",class:{"has-error":e.errors.has("emailAddress")}},[a("label",{attrs:{for:"emailAddress"}},[e._v("Email:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailAddress,expression:"emailAddress"},{name:"validate",rawName:"v-validate.initial",value:e.emailAddress,expression:"emailAddress",modifiers:{initial:!0}}],staticClass:"form-control",attrs:{type:"email",name:"emailAddress",id:"emailAddress","data-vv-rules":"required|email"},domProps:{value:e.emailAddress},on:{input:function(s){s.target.composing||(e.emailAddress=s.target.value)}}}),e._v(" "),e.errors.has("emailAddress")?a("p",{staticClass:"text-danger"},[e._v("A valid email address is required.")]):e._e(),e._v(" "),a("p",{staticClass:"help-block"},[e._v("Required")])]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phone"}},[e._v("Phone:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"email",name:"phone",id:"phone"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group",class:{"has-error":e.errors.has("subject")}},[a("label",{attrs:{for:"subject"}},[e._v("Subject:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"},{name:"validate",rawName:"v-validate.initial",value:e.subject,expression:"subject",modifiers:{initial:!0}}],staticClass:"form-control",attrs:{type:"text",name:"subject",id:"subject","data-vv-rules":"required"},domProps:{value:e.subject},on:{input:function(s){s.target.composing||(e.subject=s.target.value)}}}),e._v(" "),e.errors.has("subject")?a("p",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("subject")))]):e._e(),e._v(" "),a("p",{staticClass:"help-block"},[e._v("Required")])]),e._v(" "),a("div",{staticClass:"form-group",class:{"has-error":e.errors.has("message")}},[a("label",{attrs:{for:"message"}},[e._v("Message:")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"},{name:"validate",rawName:"v-validate.initial",value:e.message,expression:"message",modifiers:{initial:!0}}],staticClass:"form-control",attrs:{id:"message",name:"message",rows:"10","data-vv-rules":"required"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}}),e._v(" "),e.errors.has("message")?a("p",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("message")))]):e._e(),e._v(" "),a("p",{staticClass:"help-block"},[e._v("Required")])]),e._v(" "),a("button",{staticClass:"btn btn-color pull-right",attrs:{type:"submit"}},[e._v("Send Message")])])],1)])])])])},staticRenderFns:[]}}});