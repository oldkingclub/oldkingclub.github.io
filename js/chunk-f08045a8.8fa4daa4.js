(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f08045a8"],{"8b71":function(t,r,a){"use strict";a.r(r);var n=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[a("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[a("TrxTransfer")],1)],1)],1)},e=[],s=(a("845c"),{name:"AdminTrxTransfer",data:function(){return{filter_cols:"4",page:{title:"TRX链上转账"},breadcrumbs:[{text:"管理员工具",disabled:!1,to:"#"},{text:"TRX链上转账",disabled:!0}]}},components:{TrxTransfer:function(){return Promise.all([a.e("chunk-7b54f9ef"),a.e("chunk-917d7aa8"),a.e("chunk-79a99085"),a.e("chunk-3f1e1121")]).then(a.bind(null,"7837"))}}}),i=s,o=a("c701"),c=a("7033"),d=a.n(c),l=a("30b0"),u=a("a93b"),f=a("ff00"),p=Object(o["a"])(i,n,e,!1,null,null,null);r["default"]=p.exports;d()(p,{VCol:l["a"],VContainer:u["a"],VRow:f["a"]})},a93b:function(t,r,a){"use strict";a("a3b6"),a("9658");var n=a("a593");function e(t){return n["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(r,{props:a,data:n,children:e}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:s}=n;if(s){n.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const r=s[t];return t.startsWith("data-")?(n.attrs[t]=r,!1):r||"string"===typeof r});t.length&&(n.staticClass+=" "+t.join(" "))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),r(a.tag,n,e)}})}var s=a("39c3");r["a"]=e("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:r,data:a,children:n}){let e;const{attrs:i}=a;return i&&(a.attrs={},e=Object.keys(i).filter(t=>{if("slot"===t)return!1;const r=i[t];return t.startsWith("data-")?(a.attrs[t]=r,!1):r||"string"===typeof r})),r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),t(r.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),n)}})}}]);
//# sourceMappingURL=chunk-f08045a8.8fa4daa4.js.map