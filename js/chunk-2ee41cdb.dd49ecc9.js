(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ee41cdb"],{"242d":function(e,t,s){},3506:function(e,t,s){},"372c":function(e,t,s){"use strict";s("3506");var i=s("0b3f"),n=s("a0cb"),a=s("39c3"),l=s("5a4f");const h={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>h},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l["s"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...h,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["z"].backspace&&e!==l["z"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=e!==i-1?e:e-1,a=this.selectedItems[n];a?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n},clearableCallback(){this.internalSearch=void 0,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=n["a"].options.methods.genInput.call(this);return e.data=Object(a["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["q"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onBlur(e){this.isFocused=!1,e&&this.$nextTick(()=>this.$emit("blur",e))},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}})},"79d4":function(e,t,s){"use strict";var i=s("372c");t["a"]=i["a"]},"9abc":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(" You can use "),s("code",[e._v("dense")]),e._v(" prop to reduce overflow button height and lower max height of list items. ")]),s("div",{staticClass:"mt-4"},[s("v-overflow-btn",{staticClass:"my-2",attrs:{items:e.items,label:"Overflow Btn - Dense",dense:""}})],1)],1)},n=[],a={name:"OverflowButtonsDense",data:function(){return{items:["Arial","Calibri","Courier","Verdana"]}}},l=a,h=s("c701"),o=s("7033"),r=s.n(o),c=s("d9e4"),d=s("ccc0"),u=Object(h["a"])(l,i,n,!1,null,null,null);t["default"]=u.exports;r()(u,{VListItemSubtitle:c["c"],VOverflowBtn:d["a"]})},ccc0:function(e,t,s){"use strict";s("242d");var i=s("0b3f"),n=s("79d4"),a=s("a0cb"),l=s("ff02"),h=s("2681");t["a"]=n["a"].extend({name:"v-overflow-btn",props:{editable:Boolean,segmented:Boolean},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable}},isAnyValueAllowed(){return this.editable||n["a"].options.computed.isAnyValueAllowed.call(this)},isSingle(){return!0},computedItems(){return this.segmented?this.allItems:this.filteredItems}},methods:{genSelections(){return this.editable?n["a"].options.methods.genSelections.call(this):i["a"].options.methods.genSelections.call(this)},genCommaSelection(e,t,s){return this.segmented?this.genSegmentedBtn(e):i["a"].options.methods.genCommaSelection.call(this,e,t,s)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=e.data||{},e.data.domProps.value=this.editable?this.internalSearch:"",e.data.attrs.readonly=!this.isAnyValueAllowed,e},genLabel(){if(this.editable&&this.isFocused)return null;const e=a["a"].options.methods.genLabel.call(this);return e?(e.data=e.data||{},e.data.style={},e):e},genSegmentedBtn(e){const t=this.getValue(e),s=this.computedItems.find(e=>this.getValue(e)===t)||e;return s.text&&s.callback?this.$createElement(l["a"],{props:{text:!0},on:{click(e){e.stopPropagation(),s.callback(e)}}},[s.text]):(Object(h["c"])('When using "segmented" prop without a selection slot, items must contain both a text and callback property',this),null)},updateValue(e){e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)}}})},ff02:function(e,t,s){"use strict";var i=s("fd3f");t["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-2ee41cdb.dd49ecc9.js.map