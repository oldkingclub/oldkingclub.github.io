(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e40f36b"],{"8a1f":function(t,e,s){},"8fd9":function(t,e,s){"use strict";s("8a1f");var a=s("5a4f"),i=s("0765"),l=s("5ab5");e["a"]=Object(l["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},c076:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap mt-4"},[t._v(" Vuetify comes with a 12 point grid system built using Flexbox. Spacing is used to create specific layouts within an application's content. It consists of 5 media breakpoints used to target specific screen sizes or orientations: xs, sm, md, lg and xl. The default resolutions are defined below in the Viewport Breakpoints table and can be modified by customizing the breakpoint service config. ")]),s("div",{staticClass:"mt-4"},[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Device")]),s("th",{staticClass:"text-left"},[t._v("Code")]),s("th",{staticClass:"text-left"},[t._v("Types")]),s("th",{staticClass:"text-left"},[t._v("Range")])])]),s("tbody",t._l(t.desserts,(function(e){return s("tr",{key:e.device},[s("td",[t._v(t._s(e.device))]),s("td",{staticClass:"dark--text font-weight-bold"},[t._v(t._s(e.code))]),s("td",[t._v(t._s(e.types))]),s("td",[t._v(t._s(e.range))])])})),0)]},proxy:!0}])})],1)],1)},i=[],l={name:"SpacingBreakpoints",data:function(){return{desserts:[{device:"Extra Small",code:"xs",types:"small to large handset",range:"< 600px"},{device:"Small",code:"sm",types:"small to medium tablet",range:"600px > < 960px"},{device:"Medium",code:"md",types:"large tablet to laptop",range:"960px > < 1264px*"},{device:"Large",code:"lg",types:"desktop",range:"1264px* > < 1904px*"},{device:"Extra large",code:"xl",types:"4k and ultra-wides",range:"> 1904px*"}]}}},n=l,d=s("c701"),o=s("7033"),r=s.n(o),c=s("d9e4"),p=s("8fd9"),h=Object(d["a"])(n,a,i,!1,null,null,null);e["default"]=h.exports;r()(h,{VListItemSubtitle:c["c"],VSimpleTable:p["a"]})}}]);
//# sourceMappingURL=chunk-1e40f36b.a0fab39c.js.map