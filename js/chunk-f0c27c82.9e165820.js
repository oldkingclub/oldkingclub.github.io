(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0c27c82"],{a93b:function(t,a,e){"use strict";e("a3b6"),e("9658");var r=e("a593");function n(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(a,{props:e,data:r,children:n}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const a=s[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a});t.length&&(r.staticClass+=" "+t.join(" "))}return e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),a(e.tag,r,n)}})}var s=e("39c3");a["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:e,children:r}){let n;const{attrs:o}=e;return o&&(e.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const a=o[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(e.domProps=e.domProps||{},e.domProps.id=a.id),t(a.tag,Object(s["a"])(e,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),r)}})},d225:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[e("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("BaseCard",{attrs:{heading:"TableDataIterators - Slots"}},[e("TableDataIteratorsSlots")],1),e("BaseCard",{attrs:{heading:"TableDataIterators - Expand"}},[e("TableDataIteratorsExpand")],1),e("BaseCard",{attrs:{heading:"TableDataIterators - Filter"}},[e("TableDataIteratorsFilter")],1)],1)],1)],1)},n=[],s=(e("845c"),{name:"TableDataIterators",data:function(){return{page:{title:"Table DataIterators"},breadcrumbs:[{text:"Tables",disabled:!1,to:"#"},{text:"Table DataIterators",disabled:!0}]}},components:{TableDataIteratorsSlots:function(){return Promise.all([e.e("chunk-7b54f9ef"),e.e("chunk-917d7aa8"),e.e("chunk-79a99085"),e.e("chunk-48bcde60")]).then(e.bind(null,"20ae"))},TableDataIteratorsExpand:function(){return Promise.all([e.e("chunk-7b54f9ef"),e.e("chunk-917d7aa8"),e.e("chunk-79a99085"),e.e("chunk-9e525a6c")]).then(e.bind(null,"3cd5"))},TableDataIteratorsFilter:function(){return Promise.all([e.e("chunk-7b54f9ef"),e.e("chunk-917d7aa8"),e.e("chunk-79a99085"),e.e("chunk-7c711841")]).then(e.bind(null,"1bc5"))}}}),o=s,i=e("c701"),c=e("7033"),l=e.n(c),d=e("30b0"),u=e("a93b"),b=e("ff00"),f=Object(i["a"])(o,r,n,!1,null,null,null);a["default"]=f.exports;l()(f,{VCol:d["a"],VContainer:u["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-f0c27c82.9e165820.js.map