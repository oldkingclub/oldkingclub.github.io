(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a1e9aba"],{"85a1":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[e("BaseBreadcrumb",{attrs:{title:t.page.title,icon:t.page.icon,breadcrumbs:t.breadcrumbs}}),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("BaseCard",{attrs:{heading:"Grids - Auto sizing columns"}},[e("GridsAutosizeColumns")],1),e("BaseCard",{attrs:{heading:"Grids - Equal width columns"}},[e("GridsEqualWidthColumns")],1),e("BaseCard",{attrs:{heading:"Grids - One column width"}},[e("GridsOnecolumnWidth")],1),e("BaseCard",{attrs:{heading:"Grids - Variable content width"}},[e("GridsVariableContentWidth")],1),e("BaseCard",{attrs:{heading:"Grids - Grow and Shrink"}},[e("GridsGrowShrink")],1),e("BaseCard",{attrs:{heading:"Grids - Row and column breakpoints"}},[e("GridsRowColumnBreakpoints")],1),e("BaseCard",{attrs:{heading:"Grids - Unique layouts"}},[e("GridsUniqueLayouts")],1),e("BaseCard",{attrs:{heading:"Grids - Vertical alignment"}},[e("GridsVerticalAlign")],1),e("BaseCard",{attrs:{heading:"Textfields - Horizontal alignment"}},[e("GridsHorizontalAlign")],1),e("BaseCard",{attrs:{heading:"Textfields - No gutters"}},[e("GridsNoGutters")],1),e("BaseCard",{attrs:{heading:"Textfields - Column wrapping"}},[e("GridsColumnWrapping")],1),e("BaseCard",{attrs:{heading:"Textfields - Order classes"}},[e("GridsOrderClasses")],1),e("BaseCard",{attrs:{heading:"Textfields - Order last / first"}},[e("GridsOrderFirstLast")],1),e("BaseCard",{attrs:{heading:"Textfields - Offset"}},[e("GridsOffset")],1),e("BaseCard",{attrs:{heading:"Textfields - Offset breakpoint"}},[e("GridsOffsetBreakpoint")],1),e("BaseCard",{attrs:{heading:"Textfields - Margin utilities"}},[e("GridsMarginUtilities")],1),e("BaseCard",{attrs:{heading:"Textfields - Nested grid"}},[e("GridsNested")],1),e("BaseCard",{attrs:{heading:"Textfields - Spacers"}},[e("GridsSpacers")],1)],1)],1)],1)},i=[],a=(e("845c"),{name:"Grids",data:function(){return{page:{title:"Grids"},breadcrumbs:[{text:"UI Components",disabled:!1,to:"#"},{text:"Grids",disabled:!0}]}},components:{GridsAutosizeColumns:function(){return e.e("chunk-2d0deca5").then(e.bind(null,"86c4"))},GridsEqualWidthColumns:function(){return e.e("chunk-2d0b252b").then(e.bind(null,"242e"))},GridsOnecolumnWidth:function(){return e.e("chunk-2d0d3265").then(e.bind(null,"5c12"))},GridsVariableContentWidth:function(){return e.e("chunk-2d0c9aaf").then(e.bind(null,"59b7"))},GridsGrowShrink:function(){return e.e("chunk-2d21b2c9").then(e.bind(null,"bf3b"))},GridsRowColumnBreakpoints:function(){return e.e("chunk-2d0aad7a").then(e.bind(null,"1379"))},GridsUniqueLayouts:function(){return e.e("chunk-2d0b92bf").then(e.bind(null,"328b"))},GridsVerticalAlign:function(){return e.e("chunk-2d0b9d6b").then(e.bind(null,"353f"))},GridsHorizontalAlign:function(){return e.e("chunk-2d0e96e4").then(e.bind(null,"8e01"))},GridsNoGutters:function(){return e.e("chunk-2d0f00cf").then(e.bind(null,"9b5e"))},GridsColumnWrapping:function(){return e.e("chunk-2d0b2b44").then(e.bind(null,"24f2"))},GridsOrderClasses:function(){return e.e("chunk-2d0e5b04").then(e.bind(null,"960a"))},GridsOrderFirstLast:function(){return e.e("chunk-2d0c1d29").then(e.bind(null,"484c"))},GridsOffsetBreakpoint:function(){return e.e("chunk-2d0c5b1c").then(e.bind(null,"3fd7"))},GridsOffset:function(){return e.e("chunk-2d21de22").then(e.bind(null,"d2ca"))},GridsMarginUtilities:function(){return e.e("chunk-2d0db2a4").then(e.bind(null,"6f64"))},GridsNested:function(){return e.e("chunk-2d0c9aca").then(e.bind(null,"59c3"))},GridsSpacers:function(){return e.e("chunk-2d2380d3").then(e.bind(null,"fe75"))}}}),s=a,d=e("c701"),u=e("7033"),l=e.n(u),o=e("30b0"),c=e("a93b"),f=e("ff00"),h=Object(d["a"])(s,r,i,!1,null,null,null);n["default"]=h.exports;l()(h,{VCol:o["a"],VContainer:c["a"],VRow:f["a"]})},a93b:function(t,n,e){"use strict";e("a3b6"),e("9658");var r=e("a593");function i(t){return r["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:e,data:r,children:i}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:a}=r;if(a){r.attrs={};const t=Object.keys(a).filter(t=>{if("slot"===t)return!1;const n=a[t];return t.startsWith("data-")?(r.attrs[t]=n,!1):n||"string"===typeof n});t.length&&(r.staticClass+=" "+t.join(" "))}return e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),n(e.tag,r,i)}})}var a=e("39c3");n["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:n,data:e,children:r}){let i;const{attrs:s}=e;return s&&(e.attrs={},i=Object.keys(s).filter(t=>{if("slot"===t)return!1;const n=s[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n})),n.id&&(e.domProps=e.domProps||{},e.domProps.id=n.id),t(n.tag,Object(a["a"])(e,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),r)}})}}]);
//# sourceMappingURL=chunk-1a1e9aba.db7d4014.js.map