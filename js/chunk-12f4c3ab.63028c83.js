(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12f4c3ab"],{3506:function(t,e,s){},"372c":function(t,e,s){"use strict";s("3506");var i=s("0b3f"),n=s("a0cb"),a=s("39c3"),l=s("5a4f");const r={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(l["s"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=i["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l["z"].backspace&&t!==l["z"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=t!==i-1?t:t-1,a=this.selectedItems[n];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n},clearableCallback(){this.internalSearch=void 0,i["a"].options.methods.clearableCallback.call(this)},genInput(){const t=n["a"].options.methods.genInput.call(this);return t.data=Object(a["a"])(t.data,{attrs:{"aria-activedescendant":Object(l["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["q"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onBlur(t){this.isFocused=!1,t&&this.$nextTick(()=>this.$emit("blur",t))},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",n),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}})},"3aea":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" Easily hook up dynamic data and create a unique experience. The "),s("code",[t._v("v-autocomplete")]),t._v("'s expansive prop list makes it easy to fine tune every aspect of the input. ")]),s("div",{staticClass:"mt-4"},[s("v-card",{attrs:{color:"info",dark:""}},[s("v-card-title",{staticClass:"headline info darken-5"},[t._v(" Search for Public APIs ")]),s("v-card-text",[t._v(" Explore hundreds of free API's ready for consumption! For more information visit "),s("a",{staticClass:"grey--text text--lighten-3",attrs:{href:"https://github.com/toddmotto/public-apis",target:"_blank"}},[t._v("the Github repository")]),t._v(". ")]),s("v-card-text",[s("v-autocomplete",{attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"API",label:"Public APIs",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),s("v-divider"),s("v-expand-transition",[t.model?s("v-list",{staticClass:"info lighten-1"},t._l(t.fields,(function(e,i){return s("v-list-item",{key:i},[s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.value)}}),s("v-list-item-subtitle",{domProps:{textContent:t._s(e.key)}})],1)],1)})),1):t._e()],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:!t.model,color:"grey darken-3"},on:{click:function(e){t.model=null}}},[t._v(" Clear "),s("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle")])],1)],1)],1)],1)],1)},n=[],a=(s("02bf"),s("233a"),s("b8a1"),s("845c"),s("066a"),{name:"AutocompletesSearchAPI",data:function(){return{descriptionLimit:60,entries:[],isLoading:!1,model:null,search:null}},computed:{fields:function(){var t=this;return this.model?Object.keys(this.model).map((function(e){return{key:e,value:t.model[e]||"n/a"}})):[]},items:function(){var t=this;return this.entries.map((function(e){var s=e.Description.length>t.descriptionLimit?e.Description.slice(0,t.descriptionLimit)+"...":e.Description;return Object.assign({},e,{Description:s})}))}},watch:{search:function(){var t=this;this.items.length>0||this.isLoading||(this.isLoading=!0,fetch("https://api.publicapis.org/entries").then((function(t){return t.json()})).then((function(e){var s=e.count,i=e.entries;t.count=s,t.entries=i})).catch((function(t){console.log(t)})).finally((function(){return t.isLoading=!1})))}}}),l=a,r=s("c701"),c=s("7033"),o=s.n(c),h=s("372c"),d=s("fd3f"),u=s("dbcd"),p=s("6e06"),m=s("a4cd"),f=s("d65c"),v=s("afe4"),I=s("fb99"),g=s("8a89"),S=s("d9e4"),b=s("36c9"),x=Object(r["a"])(l,i,n,!1,null,null,null);e["default"]=x.exports;o()(x,{VAutocomplete:h["a"],VBtn:d["a"],VCard:u["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VDivider:m["a"],VExpandTransition:f["a"],VIcon:v["a"],VList:I["a"],VListItem:g["a"],VListItemContent:S["b"],VListItemSubtitle:S["c"],VListItemTitle:S["d"],VSpacer:b["a"]})},"6e06":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return c}));var i=s("dbcd"),n=s("5a4f");const a=Object(n["j"])("v-card__actions"),l=Object(n["j"])("v-card__subtitle"),r=Object(n["j"])("v-card__text"),c=Object(n["j"])("v-card__title");i["a"]}}]);
//# sourceMappingURL=chunk-12f4c3ab.63028c83.js.map