(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-185c9316"],{3506:function(t,e,s){},"372c":function(t,e,s){"use strict";s("3506");var i=s("0b3f"),n=s("a0cb"),a=s("39c3"),o=s("5a4f");const l={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(o["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=i["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===o["y"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===o["y"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==o["y"].backspace&&t!==o["y"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=t!==i-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n},clearableCallback(){this.internalSearch=void 0,i["a"].options.methods.clearableCallback.call(this)},genInput(){const t=n["a"].options.methods.genInput.call(this);return t.data=Object(a["a"])(t.data,{attrs:{"aria-activedescendant":Object(o["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(o["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}})},"6e06":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return r}));var i=s("dbcd"),n=s("5a4f");const a=Object(n["i"])("v-card__actions"),o=Object(n["i"])("v-card__subtitle"),l=Object(n["i"])("v-card__text"),r=Object(n["i"])("v-card__title");i["a"]},"8f68":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-toolbar",{attrs:{flat:""}},[s("v-toolbar-title",[t._v("开发规划项目管理")])],1),s("v-divider"),s("v-combobox",{attrs:{items:t.db_blocknames,label:"选择区块"},model:{value:t.blockname,callback:function(e){t.blockname=e},expression:"blockname"}}),s("v-card-actions"),s("v-row",[s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("span",[t._v("油井月报状态:"+t._s(t.oil_month_report_status))])]),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("v-btn",{attrs:{color:"success",dark:""},on:{click:t.download_oil_month_report}},[t._v("下载油井月报")])],1),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("span",[t._v("水井月报状态:"+t._s(t.water_month_report_status))])]),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("v-btn",{attrs:{color:"success",dark:""},on:{click:t.download_water_month_report}},[t._v("下载水井月报")])],1),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("span",[t._v("油井日报状态:"+t._s(t.oil_day_report_status))])]),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("v-btn",{attrs:{color:"success",dark:""},on:{click:t.download_oil_day_report}},[t._v("下载油井日报")])],1),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("span",[t._v("水井日报状态:"+t._s(t.water_day_report_status))])]),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("v-btn",{attrs:{color:"success",dark:""},on:{click:t.download_water_day_report}},[t._v("下载水井日报")])],1),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("v-btn",{attrs:{color:"success",dark:""},on:{click:t.update_csv_status}},[t._v("刷新状态")])],1),s("v-col",{attrs:{cols:"12",sm:"0",lg:"6"}},[s("v-btn",{attrs:{disabled:!t.canload_group,color:"success",dark:""},on:{click:t.load_block_group_data2mem}},[t._v("加载数据到内存中")])],1)],1)],1)},n=[],a=s("84b5"),o=s("ca39"),l={name:"PorjectManagerView",data:function(){return{blockname:""}},computed:{db_blocknames:Object(a["b"])("peproject/db_blocknames"),oil_day_report_status:Object(a["b"])("peproject/oil_day_report_status"),oil_month_report_status:Object(a["b"])("peproject/oil_month_report_status"),water_day_report_status:Object(a["b"])("peproject/water_day_report_status"),water_month_report_status:Object(a["b"])("peproject/water_month_report_status"),canload_group:function(){return!(!this.oil_month_report_status||!this.water_month_report_status)}},methods:{update_csv_status:function(){this.$store.dispatch("peproject/update_blockname",this.blockname)},download_oil_day_report:function(){var t=this;o["q"]({blockname:this.blockname,collection:"oilreportday"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},download_oil_month_report:function(){var t=this;o["q"]({blockname:this.blockname,collection:"oilreportmonth"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},download_water_day_report:function(){var t=this;o["q"]({blockname:this.blockname,collection:"waterreportday"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},download_water_month_report:function(){var t=this;o["q"]({blockname:this.blockname,collection:"waterreportmonth"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},load_block_group_data2mem:function(){var t=this;o["P"]({blockname:this.blockname,collection:"oilreportmonth"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))})),o["P"]({blockname:this.blockname,collection:"waterreportmonth"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))})),o["Q"]({blockname:this.blockname,collection:"waterreportmonth"}).then((function(e){200==e.code&&(200==e.code?t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):t.$store.dispatch("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))}},watch:{blockname:function(){this.$store.dispatch("peproject/update_blockname",this.blockname)}}},r=l,c=s("c701"),h=s("7033"),d=s.n(h),u=s("fd3f"),p=s("dbcd"),m=s("6e06"),g=s("30b0"),_=s("a5b6"),I=s("a4cd"),b=s("ff00"),v=s("331e"),f=s("5e30"),S=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=S.exports;d()(S,{VBtn:u["a"],VCard:p["a"],VCardActions:m["a"],VCol:g["a"],VCombobox:_["a"],VDivider:I["a"],VRow:b["a"],VToolbar:v["a"],VToolbarTitle:f["a"]})},a5b6:function(t,e,s){"use strict";s("3506");var i=s("0b3f"),n=s("372c"),a=s("5a4f");e["a"]=n["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return i["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged(t){if(t&&this.multiple&&this.delimiters.length){const e=this.delimiters.find(e=>t.endsWith(e));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const t=n["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection(t,e){const s=i["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(s.componentOptions.listeners={...s.componentOptions.listeners,dblclick:()=>{this.editingIndex=e,this.internalSearch=this.getText(t),this.selectedIndex=-1}}),s},onChipInput(t){i["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged(t,e){this.autoSelectFirst&&n["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown(t){const e=t.keyCode;i["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===a["y"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===a["y"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();n["a"].options.methods.onTabDown.call(this,t)},selectItem(t){this.editingIndex>-1?this.updateEditing():n["a"].options.methods.selectItem.call(this,t)},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(t){var e;i["a"].options.methods.setValue.call(this,null!=(e=t)?e:this.internalSearch)},updateEditing(){const t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox(){const t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const t=this.getMenuIndex();if(t<0&&!this.searchIsDirty)return;if(this.editingIndex>-1)return this.updateEditing();const e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){const t=this.internalValue.slice();t.splice(e,1),this.setValue(t)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null},onPaste(t){var e;if(!this.multiple||this.searchIsDirty)return;const s=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");s&&-1===this.findExistingIndex(s)&&(t.preventDefault(),i["a"].options.methods.selectItem.call(this,s))}}})}}]);
//# sourceMappingURL=chunk-185c9316.9885054c.js.map