(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-156de1c8"],{"07be":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"error-box blue-grey lighten-5"},[e("div",{staticClass:"py-12"},[e("div",{staticClass:"text-center"},[e("h3",{staticClass:"text-uppercase error-subtitle"},[t._v(t._s(t.logouttext)+" ")]),e("v-btn",{attrs:{color:"info"},on:{click:t.gohome}},[t._v("重新登陆")])],1)])])},s=[],u={name:"Logout",data:function(){return{}},methods:{gohome:function(){this.$router.push({path:"/user/login"})},logout:function(){this.$store.dispatch("user/logout")}},computed:{logouttext:function(){return this.logout(),"注销中..."}},created:function(){this.logout(),console.log("正在注销...")}},c=u,i=(e("12a6"),e("c701")),r=e("7033"),a=e.n(r),l=e("fd3f"),d=Object(i["a"])(c,n,s,!1,null,null,null);o["default"]=d.exports;a()(d,{VBtn:l["a"]})},"12a6":function(t,o,e){"use strict";e("61ad")},"61ad":function(t,o,e){}}]);
//# sourceMappingURL=chunk-156de1c8.3f521900.js.map