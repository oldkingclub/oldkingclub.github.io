(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b353c4e0"],{a93b:function(t,e,a){"use strict";a("a3b6"),a("9658");var r=a("a593");function n(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:r,children:n}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(r.staticClass+=" "+t.join(" "))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,n)}})}var s=a("39c3");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:r}){let n;const{attrs:i}=a;return i&&(a.attrs={},n=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),r)}})},decb:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[a("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("BaseCard",{attrs:{heading:"Systembar - Colored bar"}},[a("SystembarColoredBar")],1),a("BaseCard",{attrs:{heading:"Systembar - Lights out"}},[a("SystembarLightsOut")],1),a("BaseCard",{attrs:{heading:"Systembar - Themes"}},[a("SystembarThemes")],1),a("BaseCard",{attrs:{heading:"Systembar - Window bar"}},[a("SystembarWindowBar")],1)],1)],1)],1)},n=[],s=(a("845c"),{name:"Systembar",data:function(){return{page:{title:"Systembar"},breadcrumbs:[{text:"UI Components",disabled:!1,to:"#"},{text:"Systembar",disabled:!0}]}},components:{SystembarColoredBar:function(){return a.e("chunk-aeb771f6").then(a.bind(null,"919f"))},SystembarLightsOut:function(){return a.e("chunk-001a1afc").then(a.bind(null,"d1ea"))},SystembarThemes:function(){return a.e("chunk-45fe8324").then(a.bind(null,"2d1f"))},SystembarWindowBar:function(){return a.e("chunk-94269ed2").then(a.bind(null,"0fbc"))}}}),i=s,o=a("c701"),d=a("7033"),c=a.n(d),u=a("30b0"),l=a("a93b"),b=a("ff00"),m=Object(o["a"])(i,r,n,!1,null,null,null);e["default"]=m.exports;c()(m,{VCol:u["a"],VContainer:l["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-b353c4e0.75ce60b6.js.map