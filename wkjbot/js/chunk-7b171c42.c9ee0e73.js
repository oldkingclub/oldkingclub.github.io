(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b171c42"],{6700:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" It is possible to update the appearance of a toolbar in response to changes in app state. In this example, the color and content of the toolbar changes in response to user selections in the "),n("code",[t._v("v-select")]),t._v(". ")]),n("div",{staticClass:"mt-4"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[n("v-toolbar",{attrs:{color:t.selection.length?"grey darken-4":"success",dark:""}},[t.selection.length?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.selection=[]}}},[n("v-icon",[t._v("mdi-close")])],1):n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v(" "+t._s(t.selection.length?t.selection.length+" selected":"Photos")+" ")]),n("v-spacer"),n("v-scale-transition",[t.selection.length?n("v-btn",{key:"export",attrs:{icon:""}},[n("v-icon",[t._v("mdi-export-variant")])],1):t._e()],1),n("v-scale-transition",[t.selection.length?n("v-btn",{key:"delete",attrs:{icon:""}},[n("v-icon",[t._v("mdi-delete")])],1):t._e()],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("v-card-text",[n("v-select",{attrs:{items:t.items,multiple:"",label:"Select an option"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1)],1)],1)],1)},c=[],o={name:"ToolbarContextualActionbar",data:function(){return{selection:[],items:["Foo","Bar","Fizz","Buzz"]}}},s=o,i=n("c701"),r=n("7033"),l=n.n(r),d=n("76e3"),v=n("fd3f"),u=n("dbcd"),b=n("6e06"),p=n("afe4"),f=n("d9e4"),_=n("d65c"),m=n("0b3f"),h=n("36c9"),x=n("331e"),V=n("5e30"),g=Object(i["a"])(s,a,c,!1,null,null,null);e["default"]=g.exports;l()(g,{VAppBarNavIcon:d["a"],VBtn:v["a"],VCard:u["a"],VCardText:b["c"],VIcon:p["a"],VListItemSubtitle:f["c"],VScaleTransition:_["e"],VSelect:m["a"],VSpacer:h["a"],VToolbar:x["a"],VToolbarTitle:V["b"]})},"6e06":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r}));var a=n("dbcd"),c=n("5a4f");const o=Object(c["j"])("v-card__actions"),s=Object(c["j"])("v-card__subtitle"),i=Object(c["j"])("v-card__text"),r=Object(c["j"])("v-card__title");a["a"]},"76e3":function(t,e,n){"use strict";var a=n("a474"),c=n("fd3f"),o=n("a593");e["a"]=o["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:o,data:s}){const i=Object.assign(s,{staticClass:("v-app-bar__nav-icon "+(s.staticClass||"")).trim(),props:{...o,icon:!0},on:n}),r=e().default;return t(c["a"],i,r||[t(a["a"],"$menu")])}})}}]);
//# sourceMappingURL=chunk-7b171c42.c9ee0e73.js.map