(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-763f419c"],{"0f84":function(t,e,s){"use strict";s("cc04");var i=s("507e"),a=s("9a87"),n=s("5ab5");e["a"]=Object(n["a"])(i["a"],a["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const t=this.setTextColor(this.color,{...i["a"].options.methods.genData.call(this)});return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},"242d":function(t,e,s){},3506:function(t,e,s){},"372c":function(t,e,s){"use strict";s("3506");var i=s("0b3f"),a=s("a0cb"),n=s("39c3"),l=s("5a4f");const o={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(l["s"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...o,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=i["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["z"].backspace&&t!==l["z"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=t!==i-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=a},clearableCallback(){this.internalSearch=void 0,i["a"].options.methods.clearableCallback.call(this)},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["q"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})},"507e":function(t,e,s){"use strict";var i=s("fb93");e["a"]=i["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}})},"79d4":function(t,e,s){"use strict";var i=s("372c");e["a"]=i["a"]},cc04:function(t,e,s){},ccc0:function(t,e,s){"use strict";s("242d");var i=s("0b3f"),a=s("79d4"),n=s("a0cb"),l=s("ff02"),o=s("2681");e["a"]=a["a"].extend({name:"v-overflow-btn",props:{editable:Boolean,segmented:Boolean},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable}},isAnyValueAllowed(){return this.editable||a["a"].options.computed.isAnyValueAllowed.call(this)},isSingle(){return!0},computedItems(){return this.segmented?this.allItems:this.filteredItems}},methods:{genSelections(){return this.editable?a["a"].options.methods.genSelections.call(this):i["a"].options.methods.genSelections.call(this)},genCommaSelection(t,e,s){return this.segmented?this.genSegmentedBtn(t):i["a"].options.methods.genCommaSelection.call(this,t,e,s)},genInput(){const t=n["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.domProps.value=this.editable?this.internalSearch:"",t.data.attrs.readonly=!this.isAnyValueAllowed,t},genLabel(){if(this.editable&&this.isFocused)return null;const t=n["a"].options.methods.genLabel.call(this);return t?(t.data=t.data||{},t.data.style={},t):t},genSegmentedBtn(t){const e=this.getValue(t),s=this.computedItems.find(t=>this.getValue(t)===e)||t;return s.text&&s.callback?this.$createElement(l["a"],{props:{text:!0},on:{click(t){t.stopPropagation(),s.callback(t)}}},[s.text]):(Object(o["c"])('When using "segmented" prop without a selection slot, items must contain both a text and callback property',this),null)},updateValue(t){t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)}}})},d727:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" Easily integrate customized button solutions with a "),s("code",[t._v("v-toolbar")])]),s("div",{staticClass:"mt-4"},[s("v-toolbar",{attrs:{dense:""}},[s("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_font,label:"Select font","hide-details":""}}),t.$vuetify.breakpoint.mdAndUp?[s("v-divider",{attrs:{vertical:""}}),s("v-overflow-btn",{staticClass:"pa-0",attrs:{items:t.dropdown_edit,editable:"",label:"Select size","hide-details":"",overflow:""}}),s("v-divider",{attrs:{vertical:""}}),s("v-spacer"),s("v-btn-toggle",{attrs:{color:"primary",dense:"",group:"",multiple:""},model:{value:t.toggle_multiple,callback:function(e){t.toggle_multiple=e},expression:"toggle_multiple"}},[s("v-btn",{attrs:{value:1,text:""}},[s("v-icon",[t._v("mdi-format-bold")])],1),s("v-btn",{attrs:{value:2,text:""}},[s("v-icon",[t._v("mdi-format-italic")])],1),s("v-btn",{attrs:{value:3,text:""}},[s("v-icon",[t._v("mdi-format-underline")])],1),s("v-btn",{attrs:{value:4,text:""}},[s("v-icon",[t._v("mdi-format-color-fill")])],1)],1),s("div",{staticClass:"mx-4"}),s("v-btn-toggle",{attrs:{color:"primary",dense:"",group:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[s("v-btn",{attrs:{value:1,text:""}},[s("v-icon",[t._v("mdi-format-align-left")])],1),s("v-btn",{attrs:{value:2,text:""}},[s("v-icon",[t._v("mdi-format-align-center")])],1),s("v-btn",{attrs:{value:3,text:""}},[s("v-icon",[t._v("mdi-format-align-right")])],1),s("v-btn",{attrs:{value:4,text:""}},[s("v-icon",[t._v("mdi-format-align-justify")])],1)],1)]:t._e()],2)],1)],1)},a=[],n={name:"GrpButtonIntoolbar",data:function(){return{dropdown_font:[{text:"Arial"},{text:"Calibri"},{text:"Courier"},{text:"Verdana"}],dropdown_edit:[{text:"100%"},{text:"75%"},{text:"50%"},{text:"25%"},{text:"0%"}],toggle_exclusive:2,toggle_multiple:[1,2,3]}}},l=n,o=s("c701"),r=s("7033"),c=s.n(r),h=s("fd3f"),d=s("0f84"),u=s("a4cd"),m=s("afe4"),p=s("d9e4"),g=s("ccc0"),v=s("36c9"),f=s("331e"),b=Object(o["a"])(l,i,a,!1,null,null,null);e["default"]=b.exports;c()(b,{VBtn:h["a"],VBtnToggle:d["a"],VDivider:u["a"],VIcon:m["a"],VListItemSubtitle:p["c"],VOverflowBtn:g["a"],VSpacer:v["a"],VToolbar:f["a"]})},ff02:function(t,e,s){"use strict";var i=s("fd3f");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-763f419c.01c44c3e.js.map