(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-572197a3"],{a93b:function(n,t,e){"use strict";e("a3b6"),e("9658");var r=e("a593");function a(n){return r["a"].extend({name:"v-"+n,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:e,data:r,children:a}){r.staticClass=`${n} ${r.staticClass||""}`.trim();const{attrs:c}=r;if(c){r.attrs={};const n=Object.keys(c).filter(n=>{if("slot"===n)return!1;const t=c[n];return n.startsWith("data-")?(r.attrs[n]=t,!1):t||"string"===typeof t});n.length&&(r.staticClass+=" "+n.join(" "))}return e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,r,a)}})}var c=e("39c3");t["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(n,{props:t,data:e,children:r}){let a;const{attrs:i}=e;return i&&(e.attrs={},a=Object.keys(i).filter(n=>{if("slot"===n)return!1;const t=i[n];return n.startsWith("data-")?(e.attrs[n]=t,!1):t||"string"===typeof t})),t.id&&(e.domProps=e.domProps||{},e.domProps.id=t.id),n(t.tag,Object(c["a"])(e,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),r)}})},d551:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[e("BaseBreadcrumb",{attrs:{title:n.page.title,icon:n.page.icon,breadcrumbs:n.breadcrumbs}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",lg:"11"}},[e("WellNum")],1),e("v-col",{attrs:{cols:"12",sm:"12",lg:"11"}},[e("ProdInjeAvg")],1)],1)],1)},a=[],c=(e("845c"),{name:"DevelopIndexAnalysis",data:function(){return{filter_cols:"4",page:{title:"油田开发规划"},breadcrumbs:[{text:"油田开发规划",disabled:!1,to:"#"},{text:"原油产能核定",disabled:!0}]}},components:{ProdCompLine:function(){return Promise.all([e.e("chunk-7621c527"),e.e("chunk-f23a6e6c"),e.e("chunk-fd618f64"),e.e("chunk-2d0ae95a"),e.e("chunk-0ef82d54")]).then(e.bind(null,"aa48"))},InjeCompLine:function(){return Promise.all([e.e("chunk-2d0ae95a"),e.e("chunk-5d56c0b6")]).then(e.bind(null,"a458"))},MonthProdLine:function(){return Promise.all([e.e("chunk-7621c527"),e.e("chunk-f23a6e6c"),e.e("chunk-fd618f64"),e.e("chunk-3effa0ff")]).then(e.bind(null,"7880"))},MonthProdLineCusum:function(){return Promise.all([e.e("chunk-7621c527"),e.e("chunk-f23a6e6c"),e.e("chunk-fd618f64"),e.e("chunk-4cff9964")]).then(e.bind(null,"0930"))},WellNum:function(){return e.e("chunk-5fbf69ee").then(e.bind(null,"31f1"))},GradePie:function(){return e.e("chunk-de0fd592").then(e.bind(null,"2dd5"))},ProdInjeAvg:function(){return e.e("chunk-0882efce").then(e.bind(null,"5ec9"))}}}),i=c,o=e("c701"),s=e("7033"),u=e.n(s),l=e("30b0"),d=e("a93b"),f=e("ff00"),h=Object(o["a"])(i,r,a,!1,null,null,null);t["default"]=h.exports;u()(h,{VCol:l["a"],VContainer:d["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-572197a3.ce2709c2.js.map