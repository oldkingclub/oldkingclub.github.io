(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fce36764"],{"26d3":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" Here we combine v-list-item-avatar and v-list-item-icon in a single-line list. ")]),e("div",{staticClass:"mt-4"},[e("v-toolbar",{attrs:{color:"cyan",dark:""}},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[t._v("New Chat")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-magnify")])],1)],1),e("v-list",{attrs:{subheader:""}},[e("v-subheader",[t._v("Recent chat")]),t._l(t.items,(function(a){return e("v-list-item",{key:a.title,on:{click:function(t){t.stopPropagation()}}},[e("v-list-item-avatar",[e("v-img",{attrs:{src:a.avatar}})],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.title)}})],1),e("v-list-item-icon",[e("v-icon",{attrs:{color:a.active?"info":"grey"}},[t._v("mdi-comment-text-outline")])],1)],1)}))],2),e("v-divider"),e("v-list",{attrs:{subheader:""}},[e("v-subheader",[t._v("Previous chats")]),t._l(t.items2,(function(a){return e("v-list-item",{key:a.title,on:{click:function(t){t.stopPropagation()}}},[e("v-list-item-avatar",[e("v-img",{attrs:{src:a.avatar}})],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.title)}})],1)],1)}))],2)],1)],1)},s=[],n={name:"ListsAvatarwithTitleAction",data:function(){return{items:[{active:!0,title:"Jason Oner",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{active:!0,title:"Ranee Carlson",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{title:"Cindy Baker",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{title:"Ali Connors",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"}],items2:[{title:"Travis Howard",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg"}]}}},r=n,o=e("c701"),c=e("7033"),l=e.n(c),v=e("76e3"),m=e("fd3f"),u=e("a4cd"),d=e("afe4"),p=e("046f"),f=e("fb99"),b=e("8a89"),h=e("f84f"),g=e("d9e4"),V=e("8543"),_=e("36c9"),j=e("b7a4"),C=e("331e"),w=e("5e30"),y=Object(o["a"])(r,i,s,!1,null,null,null);a["default"]=y.exports;l()(y,{VAppBarNavIcon:v["a"],VBtn:m["a"],VDivider:u["a"],VIcon:d["a"],VImg:p["a"],VList:f["a"],VListItem:b["a"],VListItemAvatar:h["a"],VListItemContent:g["b"],VListItemIcon:V["a"],VListItemSubtitle:g["c"],VListItemTitle:g["d"],VSpacer:_["a"],VSubheader:j["a"],VToolbar:C["a"],VToolbarTitle:w["b"]})},4717:function(t,a,e){},"76e3":function(t,a,e){"use strict";var i=e("a474"),s=e("fd3f"),n=e("a593");a["a"]=n["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:a,listeners:e,props:n,data:r}){const o=Object.assign(r,{staticClass:("v-app-bar__nav-icon "+(r.staticClass||"")).trim(),props:{...n,icon:!0},on:e}),c=a().default;return t(s["a"],o,c||[t(i["a"],"$menu")])}})},b7a4:function(t,a,e){"use strict";e("4717");var i=e("0765"),s=e("5ab5");a["a"]=Object(s["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-fce36764.51780f3f.js.map