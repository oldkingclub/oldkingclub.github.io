(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a559458"],{"125c":function(t,e,n){},"6e06":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c}));var i=n("dbcd"),a=n("5a4f");const o=Object(a["j"])("v-card__actions"),s=Object(a["j"])("v-card__subtitle"),r=Object(a["j"])("v-card__text"),c=Object(a["j"])("v-card__title");i["a"]},"76e3":function(t,e,n){"use strict";var i=n("a474"),a=n("fd3f"),o=n("a593");e["a"]=o["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:n,props:o,data:s}){const r=Object.assign(s,{staticClass:("v-app-bar__nav-icon "+(s.staticClass||"")).trim(),props:{...o,icon:!0},on:n}),c=e().default;return t(a["a"],r,c||[t(i["a"],"$menu")])}})},"7f2b":function(t,e,n){"use strict";var i=n("fc3d"),a=n("035d"),o=n("d226"),s=n("5a4f"),r=n("5ab5");const c=Object(r["a"])(i["a"],Object(a["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(s["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(s["h"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"85c5":function(t,e,n){"use strict";function i(t,e){const n=e.value,i=e.options||{passive:!0};window.addEventListener("resize",n,i),t._onResize={callback:n,options:i},e.modifiers&&e.modifiers.quiet||n()}function a(t){if(!t._onResize)return;const{callback:e,options:n}=t._onResize;window.removeEventListener("resize",e,n),delete t._onResize}const o={inserted:i,unbind:a};e["a"]=o},b42f:function(t,e,n){"use strict";n("125c")},e352:function(t,e,n){"use strict";var i=n("7f2b");e["a"]=i["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=i["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},f695:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" When changing the default action of your button, it is recommended that you display a transition to signify a change. We do this by binding the "),n("code",[t._v("key")]),t._v(" prop to a piece of data that can properly signal a change in action to the Vue transition system. While you can use a custom transition for this, ensure that you set the "),n("code",[t._v("mode")]),t._v(" prop to "),n("span",{staticClass:"grey--text text--darken-4 font-weight-bold"},[t._v("out-in")]),t._v(". ")]),n("div",{staticClass:"mt-4"},[n("v-card",{attrs:{id:"lateral"}},[n("v-toolbar",{attrs:{dark:"",tabs:"",flat:"",color:"success"},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab",{attrs:{href:"#one"}},[t._v("Item One")]),n("v-tab",{attrs:{href:"#two"}},[t._v("Item Two")]),n("v-tab",{attrs:{href:"#three"}},[t._v("Item Three")]),n("v-tabs-slider",{attrs:{color:"info"}})],1)]},proxy:!0}])},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Page title")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("v-card-text",[n("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(["one","two","three"],(function(t){return n("v-tab-item",{key:t,attrs:{value:t}},[n("v-card",{attrs:{height:"200px",flat:""}})],1)})),1)],1),n("v-fab-transition",[n("v-btn",{key:t.activeFab.icon,staticClass:"v-btn--example",attrs:{color:t.activeFab.color,fab:"",large:"",dark:"",bottom:"",left:""}},[n("v-icon",[t._v(t._s(t.activeFab.icon))])],1)],1)],1)],1)],1)},a=[],o={name:"FabLateralScreen",data:function(){return{fab:!1,hidden:!1,tabs:null}},computed:{activeFab:function(){switch(this.tabs){case"one":return{color:"success",icon:"mdi-share-variant"};case"two":return{color:"error",icon:"mdi-lead-pencil"};case"three":return{color:"info",icon:"mdi-chevron-up"};default:return{}}}}},s=o,r=(n("b42f"),n("c701")),c=n("7033"),d=n.n(c),u=n("76e3"),l=n("fd3f"),v=n("dbcd"),h=n("6e06"),f=n("d65c"),b=n("afe4"),p=n("d9e4"),m=n("36c9"),w=n("6444"),T=n("e352"),_=n("36bd"),g=n("2c787"),y=n("29f0"),C=n("331e"),x=n("5e30"),V=Object(r["a"])(s,i,a,!1,null,null,null);e["default"]=V.exports;d()(V,{VAppBarNavIcon:u["a"],VBtn:l["a"],VCard:v["a"],VCardText:h["c"],VFabTransition:f["c"],VIcon:b["a"],VListItemSubtitle:p["c"],VSpacer:m["a"],VTab:w["a"],VTabItem:T["a"],VTabs:_["a"],VTabsItems:g["a"],VTabsSlider:y["a"],VToolbar:C["a"],VToolbarTitle:x["b"]})}}]);
//# sourceMappingURL=chunk-4a559458.66b4297b.js.map