(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26e16a88"],{"1b95":function(e,t,i){},4267:function(e,t,i){"use strict";i("1b95");var s=i("d65c"),n=i("afe4"),h=i("ab87"),d=i("9a87"),a=i("5ab5"),c=i("5a4f");const o=Object(a["a"])(d["a"],Object(h["a"])("treeview")),l={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)}},r=o.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{level:Number,item:{type:Object,default:()=>null},parentIsDisabled:Boolean,...l},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return Object(c["q"])(this.item,this.itemDisabled)||this.parentIsDisabled&&"leaf"===this.selectionType},key(){return Object(c["q"])(this.item,this.itemKey)},children(){const e=Object(c["q"])(this.item,this.itemChildren);return e&&e.filter(e=>!this.treeview.isExcluded(Object(c["q"])(e,this.itemKey)))},text(){return Object(c["q"])(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise(e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))}).then(()=>{this.isLoading=!1,this.hasLoaded=!0})},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent(){const e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(n["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>this.open())}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(n["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>{this.$nextTick(()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()})})}}},[this.computedIcon])},genLevel(e){return Object(c["i"])(e).map(()=>this.$createElement("div",{staticClass:"v-treeview-node__level"}))},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren?e.unshift(this.genToggle()):e.unshift(...this.genLevel(1)),e.unshift(...this.genLevel(this.level)),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.openOnClick&&this.hasChildren?this.checkChildren().then(this.open):this.activatable&&!this.disabled&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive())}}}),e)},genChild(e,t){return this.$createElement(r,{key:Object(c["q"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map(e=>this.genChild(e,this.disabled))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(s["a"],[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}});var p=r,m=i("0765"),u=i("2681");function v(e,t,i){const s=Object(c["q"])(e,i);return s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function b(e,t,i,s,n,h,d){if(e(t,i,n))return!0;const a=Object(c["q"])(t,h);if(a){let t=!1;for(let c=0;c<a.length;c++)b(e,a[c],i,s,n,h,d)&&(t=!0);if(t)return!0}return d.add(Object(c["q"])(t,s)),!1}t["a"]=Object(a["a"])(Object(h["b"])("treeview"),m["a"]).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:()=>[]},...l},data:()=>({level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)b(this.filter||v,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map(e=>Object(c["q"])(this.nodes[e].item,this.itemKey)),t=this.getKeys(this.items),i=Object(c["c"])(t,e);if(!i.length&&t.length<e.length)return;i.forEach(e=>delete this.nodes[e]);const s=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(c["k"])(s,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){const e=e=>this.returnObject?Object(c["q"])(e,this.itemKey):e;this.buildTree(this.items);for(const t of this.value.map(e))this.updateSelected(t,!0,!0);for(const t of this.active.map(e))this.updateActive(t,!0)},mounted(){(this.$slots.prepend||this.$slots.append)&&Object(u["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach(e=>this.updateOpen(this.returnObject?Object(c["q"])(e,this.itemKey):e,!0)),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach(t=>this.updateOpen(Object(c["q"])(this.nodes[t].item,this.itemKey),e)),this.emitOpen()},getKeys(e,t=[]){for(let i=0;i<e.length;i++){const s=Object(c["q"])(e[i],this.itemKey);t.push(s);const n=Object(c["q"])(e[i],this.itemChildren);n&&t.push(...this.getKeys(n))}return t},buildTree(e,t=null){for(let i=0;i<e.length;i++){const s=e[i],n=Object(c["q"])(s,this.itemKey),h=Object(c["q"])(s,this.itemChildren,[]),d=this.nodes.hasOwnProperty(n)?this.nodes[n]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},a={vnode:d.vnode,parent:t,children:h.map(e=>Object(c["q"])(e,this.itemKey)),item:s};if(this.buildTree(h,n),!this.nodes.hasOwnProperty(n)&&null!==t&&this.nodes.hasOwnProperty(t)?a.isSelected=this.nodes[t].isSelected:(a.isSelected=d.isSelected,a.isIndeterminate=d.isIndeterminate),a.isActive=d.isActive,a.isOpen=d.isOpen,this.nodes[n]=a,h.length){const{isSelected:e,isIndeterminate:t}=this.calculateState(n,this.nodes);a.isSelected=e,a.isIndeterminate=t}!this.nodes[n].isSelected||"independent"!==this.selectionType&&0!==a.children.length||this.selectedCache.add(n),this.nodes[n].isActive&&this.activeCache.add(n),this.nodes[n].isOpen&&this.openCache.add(n),this.updateVnodeState(n)}},calculateState(e,t){const i=t[e].children,s=i.reduce((e,i)=>(e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e),[0,0]),n=!!i.length&&s[0]===i.length,h=!n&&(s[0]>0||s[1]>0);return{isSelected:n,isIndeterminate:h}},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map(e=>this.nodes[e].item):[...t])},handleNodeCacheWatcher(e,t,i,s){e=this.returnObject?e.map(e=>Object(c["q"])(e,this.itemKey)):e;const n=[...t];Object(c["k"])(n,e)||(n.forEach(e=>i(e,!1)),e.forEach(e=>i(e,!0)),s())},getDescendants(e,t=[]){const i=this.nodes[e].children;t.push(...i);for(let s=0;s<i.length;s++)t=this.getDescendants(i[s],t);return t},getParents(e){let t=this.nodes[e].parent;const i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register(e){const t=Object(c["q"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=Object(c["q"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach(e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)});const i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))},updateSelected(e,t,i=!1){if(!this.nodes.hasOwnProperty(e))return;const s=new Map;if("independent"!==this.selectionType){for(const h of this.getDescendants(e))Object(c["q"])(this.nodes[h].item,this.itemDisabled)&&!i||(this.nodes[h].isSelected=t,this.nodes[h].isIndeterminate=!1,s.set(h,t));const n=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=n.isIndeterminate,s.set(e,t);for(const t of this.getParents(e)){const e=this.calculateState(t,this.nodes);this.nodes[t].isSelected=e.isSelected,this.nodes[t].isIndeterminate=e.isIndeterminate,s.set(t,e.isSelected)}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,s.set(e,t);for(const[n,h]of s.entries())this.updateVnodeState(n),"leaf"===this.selectionType&&this.isParent(n)||(!0===h?this.selectedCache.add(n):this.selectedCache.delete(n))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=this.nodes[e],s=Object(c["q"])(i.item,this.itemChildren);s&&!s.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then(()=>this.updateOpen(e,t)):s&&s.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.filter(e=>!this.isExcluded(Object(c["q"])(e,this.itemKey))).map(e=>{const t=p.options.methods.genChild.bind(this);return t(e,Object(c["q"])(e,this.itemDisabled))}):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}})},bf13:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(" You can easily select treeview nodes and children. ")]),i("div",{staticClass:"mt-4"},[i("v-treeview",{attrs:{selectable:"",items:e.items}})],1)],1)},n=[],h={name:"TreeviewSelectable",data:function(){return{items:[{id:1,name:"Applications :",children:[{id:2,name:"Calendar : app"},{id:3,name:"Chrome : app"},{id:4,name:"Webstorm : app"}]},{id:5,name:"Documents :",children:[{id:6,name:"vuetify :",children:[{id:7,name:"src :",children:[{id:8,name:"index : ts"},{id:9,name:"bootstrap : ts"}]}]},{id:10,name:"material2 :",children:[{id:11,name:"src :",children:[{id:12,name:"v-btn : ts"},{id:13,name:"v-card : ts"},{id:14,name:"v-window : ts"}]}]}]},{id:15,name:"Downloads :",children:[{id:16,name:"October : pdf"},{id:17,name:"November : pdf"},{id:18,name:"Tutorial : html"}]},{id:19,name:"Videos :",children:[{id:20,name:"Tutorials :",children:[{id:21,name:"Basic layouts : mp4"},{id:22,name:"Advanced techniques : mp4"},{id:23,name:"All about app : dir"}]},{id:24,name:"Intro : mov"},{id:25,name:"Conference introduction : avi"}]}]}}},d=h,a=i("c701"),c=i("7033"),o=i.n(c),l=i("d9e4"),r=i("4267"),p=Object(a["a"])(d,s,n,!1,null,null,null);t["default"]=p.exports;o()(p,{VListItemSubtitle:l["c"],VTreeview:r["a"]})}}]);
//# sourceMappingURL=chunk-26e16a88.3c2de031.js.map