(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9251d2e4"],{7944:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("BaseCard",{attrs:{heading:"Text - Text alignment"}},[n("TextAlignment")],1),n("BaseCard",{attrs:{heading:"Text  - Text wrapping and overflow"}},[n("TextWrappingOverflow")],1),n("BaseCard",{attrs:{heading:"Text  - Text transform"}},[n("TextTransform")],1),n("BaseCard",{attrs:{heading:"Text  - Font weights and italics"}},[n("TextFontweightsItalics")],1),n("BaseCard",{attrs:{heading:"Text  - Text opacity"}},[n("Textopacity")],1),n("BaseCard",{attrs:{heading:"Text  - RTL Alignment"}},[n("TextRTLAlignment")],1)],1)],1)],1)},r=[],i=(n("845c"),{name:"Text",data:function(){return{page:{title:"Text"},breadcrumbs:[{text:"Style & Animation",disabled:!1,to:"#"},{text:"Text",disabled:!0}]}},components:{TextAlignment:function(){return n.e("chunk-2d0ce78d").then(n.bind(null,"6030"))},TextWrappingOverflow:function(){return n.e("chunk-731c3c20").then(n.bind(null,"6f87"))},TextTransform:function(){return n.e("chunk-2d22c361").then(n.bind(null,"f1ee"))},TextFontweightsItalics:function(){return n.e("chunk-2d0c1978").then(n.bind(null,"4765"))},Textopacity:function(){return n.e("chunk-2d0e523a").then(n.bind(null,"92e0"))},TextRTLAlignment:function(){return n.e("chunk-2d210685").then(n.bind(null,"b881"))}}}),s=i,o=n("c701"),c=n("7033"),d=n.n(c),l=n("30b0"),u=n("a93b"),f=n("ff00"),p=Object(o["a"])(s,a,r,!1,null,null,null);e["default"]=p.exports;d()(p,{VCol:l["a"],VContainer:u["a"],VRow:f["a"]})},a93b:function(t,e,n){"use strict";n("a3b6"),n("9658");var a=n("a593");function r(t){return a["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:i}=a;if(i){a.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,r)}})}var i=n("39c3");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:a}){let r;const{attrs:s}=n;return s&&(n.attrs={},r=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(i["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),a)}})}}]);
//# sourceMappingURL=chunk-9251d2e4.e3735ae5.js.map