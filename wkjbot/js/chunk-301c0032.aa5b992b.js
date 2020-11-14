(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-301c0032"],{1895:function(t,e,i){"use strict";var r=i("a593");e["a"]=r["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},"207e":function(t,e,i){"use strict";var r=i("95b8"),o=i("2681"),s=i("a593");e["a"]=s["a"].extend({name:"scrollable",directives:{Scroll:r["a"]},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(o["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}})},"2d98":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" An "),i("code",[t._v("v-app-bar")]),t._v(" with the "),i("code",[t._v("prominent")]),t._v(" prop can opt to have its height shrunk as the user scrolls down. This provides a smooth transition to taking up less visual space when the user is scrolling through content. Shrink height has 2 possible options, "),i("span",{staticClass:"grey--text text--darken-4 font-weight-bold"},[t._v("dense")]),t._v(" (48px) and "),i("span",{staticClass:"grey--text text--darken-4 font-weight-bold"},[t._v("short")]),t._v(" (56px) sizes. ")]),i("div",{staticClass:"mt-4"},[i("v-card",{staticClass:"overflow-hidden"},[i("v-app-bar",{attrs:{absolute:"",color:"indigo darken-2",dark:"","shrink-on-scroll":"",prominent:"","scroll-target":"#scrolling-techniques"}},[i("v-app-bar-nav-icon"),i("v-toolbar-title",[t._v("Title")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-magnify")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-heart")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-dots-vertical")])],1)],1),i("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques","max-height":"300"}},[i("v-container",{staticStyle:{height:"1000px"}})],1)],1)],1)],1)},o=[],s={name:"AppbarProminentShrink",data:function(){return{}}},l=s,a=i("c701"),n=i("7033"),c=i.n(n),h=i("69a8"),p=i("76e3"),d=i("fd3f"),u=i("dbcd"),v=i("a93b"),m=i("afe4"),S=i("d9e4"),f=i("f492"),g=i("36c9"),b=i("5e30"),O=Object(a["a"])(l,r,o,!1,null,null,null);e["default"]=O.exports;c()(O,{VAppBar:h["a"],VAppBarNavIcon:p["a"],VBtn:d["a"],VCard:u["a"],VContainer:v["a"],VIcon:m["a"],VListItemSubtitle:S["c"],VSheet:f["a"],VSpacer:g["a"],VToolbarTitle:b["b"]})},6301:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var r=i("f99d"),o=i("5ab5");function s(t,e=[]){return Object(o["a"])(Object(r["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"69a8":function(t,e,i){"use strict";i("9205");var r=i("331e"),o=i("95b8"),s=i("6301"),l=i("207e"),a=i("1895"),n=i("f9d0"),c=i("5a4f"),h=i("5ab5");const p=Object(h["a"])(r["a"],l["a"],a["a"],n["a"],Object(s["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=p.extend({name:"v-app-bar",directives:{Scroll:o["b"]},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return l["a"].options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...r["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return r["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,s=o/this.computedScrollThreshold,l=this.currentScroll*s;return Math.max(e,i-l)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=r["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:r["a"].options.computed.isCollapsed.call(this)},isProminent(){return r["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...r["a"].options.computed.styles.call(this),fontSize:Object(c["h"])(this.computedFontSize,"rem"),marginTop:Object(c["h"])(this.computedMarginTop),transform:`translateY(${Object(c["h"])(this.computedTransform)})`,left:Object(c["h"])(this.computedLeft),right:Object(c["h"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=r["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=r["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"76e3":function(t,e,i){"use strict";var r=i("a474"),o=i("fd3f"),s=i("a593");e["a"]=s["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:l}){const a=Object.assign(l,{staticClass:("v-app-bar__nav-icon "+(l.staticClass||"")).trim(),props:{...s,icon:!0},on:i}),n=e().default;return t(o["a"],a,n||[t(r["a"],"$menu")])}})},9205:function(t,e,i){},"95b8":function(t,e,i){"use strict";function r(t,e){const{self:i=!1}=e.modifiers||{},r=e.value,o="object"===typeof r&&r.options||{passive:!0},s="function"===typeof r||"handleEvent"in r?r:r.handler,l=i?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",s,o),t._onScroll={handler:s,options:o,target:i?void 0:l})}function o(t){if(!t._onScroll)return;const{handler:e,options:i,target:r=t}=t._onScroll;r.removeEventListener("scroll",e,i),delete t._onScroll}i.d(e,"a",(function(){return s}));const s={inserted:r,unbind:o};e["b"]=s}}]);
//# sourceMappingURL=chunk-301c0032.aa5b992b.js.map