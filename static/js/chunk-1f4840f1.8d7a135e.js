(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f4840f1"],{"7cf9":function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[n("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[n("BpRunStatus")],1)],1)],1)},e=[],s=(n("845c"),{name:"BpPanel",data:function(){return{filter_cols:"4",page:{title:"控制中心"},breadcrumbs:[{text:"搬砖量化",disabled:!1,to:"#"},{text:"控制中心",disabled:!0}]}},components:{BpRunStatus:function(){return Promise.all([n.e("chunk-7621c527"),n.e("chunk-2d2264d9")]).then(n.bind(null,"e7a2"))}}}),i=s,o=n("c701"),c=n("7033"),d=n.n(c),l=n("30b0"),u=n("a93b"),p=n("ff00"),f=Object(o["a"])(i,r,e,!1,null,null,null);a["default"]=f.exports;d()(f,{VCol:l["a"],VContainer:u["a"],VRow:p["a"]})},a93b:function(t,a,n){"use strict";n("a3b6"),n("9658");var r=n("a593");function e(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:n,data:r,children:e}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const a=s[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a});t.length&&(r.staticClass+=" "+t.join(" "))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),a(n.tag,r,e)}})}var s=n("39c3");a["a"]=e("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:n,children:r}){let e;const{attrs:i}=n;return i&&(n.attrs={},e=Object.keys(i).filter(t=>{if("slot"===t)return!1;const a=i[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(e||[])}),r)}})}}]);
//# sourceMappingURL=chunk-1f4840f1.8d7a135e.js.map