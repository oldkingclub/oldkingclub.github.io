(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40fdbc77"],{"9cf5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[n("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[n("BaseCard",{attrs:{heading:"Bottomsheet - Persistent"}},[n("BottomsheetPersistent")],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[n("BaseCard",{attrs:{heading:"Bottomsheet - v-model control"}},[n("BottomsheetVmodelControl")],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[n("BaseCard",{attrs:{heading:"Bottomsheet - Music Player"}},[n("BottomsheetMusicplayer")],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[n("BaseCard",{attrs:{heading:"Bottomsheet - Open in list"}},[n("BottomsheetOpenList")],1)],1),n("v-col",{attrs:{cols:"12",sm:"12",lg:"6"}},[n("BaseCard",{attrs:{heading:"Bottomsheet - Inset"}},[n("BottomsheetInset")],1)],1)],1)],1)},o=[],a=(n("845c"),{name:"Bottomsheet",data:function(){return{page:{title:"Bottomsheet"},breadcrumbs:[{text:"UI Components",disabled:!1,to:"#"},{text:"Bottomsheet",disabled:!0}]}},components:{BottomsheetPersistent:function(){return Promise.all([n.e("chunk-7947db51"),n.e("chunk-2d0b37de")]).then(n.bind(null,"2934"))},BottomsheetVmodelControl:function(){return Promise.all([n.e("chunk-7947db51"),n.e("chunk-2d22630b")]).then(n.bind(null,"e835"))},BottomsheetMusicplayer:function(){return Promise.all([n.e("chunk-7947db51"),n.e("chunk-2d0b8b00")]).then(n.bind(null,"306c"))},BottomsheetOpenList:function(){return Promise.all([n.e("chunk-7947db51"),n.e("chunk-12a62d7c")]).then(n.bind(null,"9f42"))},BottomsheetInset:function(){return Promise.all([n.e("chunk-7947db51"),n.e("chunk-2d0ac193")]).then(n.bind(null,"17a8"))}}}),r=a,i=n("c701"),l=n("7033"),c=n.n(l),d=n("30b0"),u=n("a93b"),m=n("ff00"),h=Object(i["a"])(r,s,o,!1,null,null,null);e["default"]=h.exports;c()(h,{VCol:d["a"],VContainer:u["a"],VRow:m["a"]})},a93b:function(t,e,n){"use strict";n("a3b6"),n("9658");var s=n("a593");function o(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:s,children:o}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:a}=s;if(a){s.attrs={};const t=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,o)}})}var a=n("39c3");e["a"]=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:s}){let o;const{attrs:r}=n;return r&&(n.attrs={},o=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(a["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),s)}})}}]);
//# sourceMappingURL=chunk-40fdbc77.3d200061.js.map