(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e17b5"],{"7b2f":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("v-container",{staticClass:"fill-height justify-center",attrs:{id:"login",tag:"section"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{lg:"11",sm:"8",xl:"7"}},[a("v-card",{staticClass:"elevation-4"},[a("v-row",[a("v-col",{staticClass:"pr-0",attrs:{lg:"5"}},[a("div",{staticClass:"pa-7 pa-sm-12"},[a("img",{attrs:{src:t("1f1b")}}),a("h2",{staticClass:"font-weight-bold mt-4 blue-grey--text text--darken-2"},[e._v("重置密码")]),a("h6",{staticClass:"subtitle-1"},[e._v(" 已经有账户? "),a("a",{attrs:{href:"#"},on:{click:e.gotologin}},[e._v("登陆")])]),a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{staticClass:"mt-4",attrs:{rules:e.fnameRules,label:"用户名",required:"",outlined:""},model:{value:e.fname,callback:function(s){e.fname=s},expression:"fname"}}),a("v-text-field",{attrs:{rules:e.passwordRules,label:"密码",required:"",outlined:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),a("v-text-field",{attrs:{rules:e.passwordRules,label:"请再次输入密码",required:"",outlined:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password"},model:{value:e.password1,callback:function(s){e.password1=s},expression:"password1"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"QQ邮箱",required:"",outlined:""},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"info",block:""},on:{click:e.sendemailcode}},[e._v("发送验证码")]),a("v-text-field",{attrs:{label:"邮箱验证码",required:"",outlined:""},model:{value:e.emailcode,callback:function(s){e.emailcode=s},expression:"emailcode"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"info",block:"",submit:""},on:{click:e.submit}},[e._v("重置密码")])],1)],1)]),a("v-col",{staticClass:"info d-none d-md-flex align-center justify-center",attrs:{lg:"7"}},[a("div",{staticClass:"d-none d-sm-block"},[a("div",{staticClass:"d-flex align-center pa-10"},[a("div",[a("h2",{staticClass:"display-1 white--text font-weight-medium"},[e._v("老王帮你做交易")]),a("h6",{staticClass:"subtitle-1 mt-4 white--text op-5 font-weight-regular"},[e._v("老王帮你做交易.")]),a("v-btn",{staticClass:"mt-4 text-capitalize",attrs:{"x-large":"",outlined:"",color:"white"}},[e._v("了解更多")])],1)])])])],1)],1)],1)],1)],1)},i=[],o=t("ca39"),l=t("897d"),r=t.n(l),n={name:"BoxedRegister",data:function(){return{password:"",show1:!1,passwordRules:[function(e){return!!e||"请输入密码"},function(e){return e&&e.length<=20||"密码必须小于20位"}],password1:"",email:"",emailRules:[function(e){return!!e||"请输入邮箱"},function(e){return/.+@.+\..+/.test(e)||"请输入邮箱"}],emailcode:"",checkbox:!1,fname:"",fnameRules:[function(e){return!!e||"请输入用户名"},function(e){return e&&e.length<=20||"请输入用户名"}]}},methods:{gotologin:function(){this.$router.push({path:"/user/login"})},sendemailcode:function(){var e=this;this.email?o["I"]({mailto:this.email}).then((function(s){200==s.code?e.$store.dispatch("msglog/push_msg",{message:s.msg,type:"success"}):e.$store.dispatch("msglog/push_msg",{message:s.msg+s.error,type:"error"})})):this.$store.dispatch("msglog/push_msg",{message:"请输入有效邮箱",type:"error"})},submit:function(){var e=this;if(this.$refs.form.validate(),this.$refs.form.validate(!0))if(this.password==this.password1){var s={username:this.fname,password:r()(this.password),email:this.email,emailcode:this.emailcode};o["ob"](s).then((function(s){200==s.code?e.$store.dispatch("msglog/push_msg",{message:s.msg,type:"success"}):e.$store.dispatch("msglog/push_msg",{message:s.msg+s.error,type:"error"})}))}else this.$store.dispatch("msglog/push_msg",{message:"两次输入密码不一致",type:"error"})}}},c=n,d=t("c701"),u=t("7033"),m=t.n(u),f=t("fd3f"),p=t("dbcd"),h=t("30b0"),g=t("a93b"),v=t("20d2"),w=t("ff00"),b=t("a0cb"),x=Object(d["a"])(c,a,i,!1,null,null,null);s["default"]=x.exports;m()(x,{VBtn:f["a"],VCard:p["a"],VCol:h["a"],VContainer:g["a"],VForm:v["a"],VRow:w["a"],VTextField:b["a"]})}}]);
//# sourceMappingURL=chunk-2d0e17b5.768f10e9.js.map