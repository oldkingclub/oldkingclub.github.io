(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6402afa5"],{"92f8":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[e("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[e("DbmUpdate")],1)],1)],1)},r=[],s=(e("845c"),{name:"DbmUpdateConfig",data:function(){return{filter_cols:"4",page:{title:"更新交易对配置"},breadcrumbs:[{text:"动态平衡模型",disabled:!1,to:"#"},{text:"更新交易对配置",disabled:!0}]}},components:{DbmUpdate:function(){return Promise.all([e.e("chunk-7b54f9ef"),e.e("chunk-eed41000")]).then(e.bind(null,"3f54"))}}}),i=s,o=e("c701"),c=e("7033"),d=e.n(c),l=e("30b0"),u=e("a93b"),p=e("ff00"),f=Object(o["a"])(i,n,r,!1,null,null,null);a["default"]=f.exports;d()(f,{VCol:l["a"],VContainer:u["a"],VRow:p["a"]})},a93b:function(t,a,e){"use strict";e("a3b6"),e("9658");var n=e("a593");function r(t){return n["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:e,data:n,children:r}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:s}=n;if(s){n.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const a=s[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a});t.length&&(n.staticClass+=" "+t.join(" "))}return e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),a(e.tag,n,r)}})}var s=e("39c3");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:e,children:n}){let r;const{attrs:i}=e;return i&&(e.attrs={},r=Object.keys(i).filter(t=>{if("slot"===t)return!1;const a=i[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(e.domProps=e.domProps||{},e.domProps.id=a.id),t(a.tag,Object(s["a"])(e,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(r||[])}),n)}})}}]);
//# sourceMappingURL=chunk-6402afa5.96d71a6d.js.map