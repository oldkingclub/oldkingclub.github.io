(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f515e94"],{3052:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[e("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[e("DbmConfig")],1),e("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[e("GetBalance")],1)],1)],1)},r=[],s=(e("845c"),{name:"DbmExchangeApi",data:function(){return{filter_cols:"4",page:{title:"交易所配置"},breadcrumbs:[{text:"动态平衡模型",disabled:!1,to:"#"},{text:"交易所配置",disabled:!0}]}},components:{DbmConfig:function(){return Promise.all([e.e("chunk-7621c527"),e.e("chunk-1718cad8")]).then(e.bind(null,"964a"))},GetBalance:function(){return Promise.all([e.e("chunk-7621c527"),e.e("chunk-a9db8b08"),e.e("chunk-0587af1c"),e.e("chunk-2cfe033e")]).then(e.bind(null,"27be"))}}}),i=s,c=e("c701"),o=e("7033"),l=e.n(o),d=e("30b0"),u=e("a93b"),f=e("ff00"),p=Object(c["a"])(i,a,r,!1,null,null,null);n["default"]=p.exports;l()(p,{VCol:d["a"],VContainer:u["a"],VRow:f["a"]})},a93b:function(t,n,e){"use strict";e("a3b6"),e("9658");var a=e("a593");function r(t){return a["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:e,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const n=s[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n});t.length&&(a.staticClass+=" "+t.join(" "))}return e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),n(e.tag,a,r)}})}var s=e("39c3");n["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:n,data:e,children:a}){let r;const{attrs:i}=e;return i&&(e.attrs={},r=Object.keys(i).filter(t=>{if("slot"===t)return!1;const n=i[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n})),n.id&&(e.domProps=e.domProps||{},e.domProps.id=n.id),t(n.tag,Object(s["a"])(e,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),a)}})}}]);
//# sourceMappingURL=chunk-1f515e94.1589280b.js.map