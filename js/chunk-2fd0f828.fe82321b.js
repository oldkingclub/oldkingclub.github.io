(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd0f828"],{"4de8":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-card-title",[e("h2",[t._v("数据表")])]),e("v-card-text",{staticClass:"pa-5"},[e("v-data-table",{attrs:{headers:t.headers,items:t.tabledata,options:t.options,"no-data-text":"暂无数据",dense:"","server-items-length":t.total_rows,"footer-props":{"items-per-page-options":t.items_per_page_options,"show-first-last-page":!0}},on:{"update:options":function(a){t.options=a}},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{staticClass:"mb-8",attrs:{flat:""}},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6",lg:"9"}},[e("v-btn",{staticClass:"mb-2 text-capitalize",attrs:{color:"primary"},on:{click:t.update_col_page_data}},[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-reload")]),e("span",[t._v("刷新")])],1)],1),e("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[e("v-btn",{staticClass:"mb-2 text-capitalize",attrs:{color:"primary"},on:{click:t.download_page_data}},[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-cloud-download")]),e("span",[t._v("下载数据表")])],1)],1)],1)],1)]},proxy:!0}])})],1)],1)},s=[],d=e("84b5"),n={data:function(){return{table_data:[{field:"井号",filter_type:"等于",filter_value:"A10H"},{field:"区块",filter_type:"等于",filter_value:"南泥湾"}],header:[{text:"选择字段",value:"field"},{text:"筛选类型",value:"filter_type"},{text:"值",value:"filter_value"}],options:{}}},computed:{items_per_page_options:Object(d["d"])("db/items_per_page_options"),collection_config:Object(d["d"])("db/collection_config"),headers:Object(d["b"])("db/headers"),tabledata:Object(d["b"])("db/tabledata"),total_rows:Object(d["b"])("db/total_rows")},methods:{update_col_page_data:function(){console.log("update_col_page_data"),this.$store.dispatch("db/update_col_page_data",this.options)},download_page_data:function(){console.log("download_page_data"),this.$store.dispatch("db/get_download_url",this.options)},delete_filter_data:function(){}},watch:{options:{handler:function(){console.log("页面刷新",this.options),this.$store.dispatch("db/update_col_page_data",this.options)},deep:!0}}},c=n,i=e("c701"),l=e("7033"),r=e.n(l),p=e("fd3f"),_=e("dbcd"),u=e("6e06"),f=e("30b0"),b=e("f017"),v=e("afe4"),h=e("ff00"),g=e("331e"),m=Object(i["a"])(c,o,s,!1,null,null,null);a["default"]=m.exports;r()(m,{VBtn:p["a"],VCard:_["a"],VCardText:u["c"],VCardTitle:u["d"],VCol:f["a"],VDataTable:b["a"],VIcon:v["a"],VRow:h["a"],VToolbar:g["a"]})},"6e06":function(t,a,e){"use strict";e.d(a,"a",(function(){return d})),e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return c})),e.d(a,"d",(function(){return i}));var o=e("dbcd"),s=e("5a4f");const d=Object(s["j"])("v-card__actions"),n=Object(s["j"])("v-card__subtitle"),c=Object(s["j"])("v-card__text"),i=Object(s["j"])("v-card__title");o["a"]},ff02:function(t,a,e){"use strict";var o=e("fd3f");a["a"]=o["a"]}}]);
//# sourceMappingURL=chunk-2fd0f828.fe82321b.js.map