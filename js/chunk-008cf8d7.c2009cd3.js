(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-008cf8d7"],{"040a":function(t,e,i){t.exports=i.p+"img/logo-light-text.b26e2a4d.png"},"1f1b":function(t,e,i){t.exports=i.p+"img/odklogo.1d1e0bd1.png"},"20f0":function(t,e,i){},2673:function(t,e,i){"use strict";var s=i("2681"),o=i("a593");e["a"]=o["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:i,mobileBreakpoint:s}=this.$vuetify.breakpoint;if(s===this.mobileBreakpoint)return t;const o=parseInt(this.mobileBreakpoint,10),r=!isNaN(o);return r?e<o:i===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(s["d"])("mobile-break-point","mobile-breakpoint",this)}})},3764:function(t,e,i){"use strict";i("944c")},"4b58":function(t,e,i){},"63fa":function(t,e,i){"use strict";i("e9ca")},7161:function(t,e,i){"use strict";i("fc12")},"8a4f":function(t,e,i){},9036:function(t,e,i){"use strict";i("4b58")},9205:function(t,e,i){},"944c":function(t,e,i){},"9bf4":function(t,e,i){"use strict";i("8a4f");var s=i("9a87"),o=i("0765"),r=i("f9d0"),a=i("5ab5"),n=Object(a["a"])(s["a"],o["a"],r["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),l=n,c=i("5a4f"),h=i("a593");e["a"]=h["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new l({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(c["u"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(c["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c["y"].up,c["y"].pageup],i=[c["y"].down,c["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){const t=this.$refs.dialog,e=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(e,t))||this.shouldScroll(t,i)}for(let s=0;s<e.length;s++){const t=e[s];if(t===document)return!0;if(t===document.documentElement)return!0;if(t===this.$refs.content)return!0;if(this.hasScrollbar(t))return this.shouldScroll(t,i)}return!0},composedPath(t){if(t.composedPath)return t.composedPath();const e=[];let i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(c["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},a93b:function(t,e,i){"use strict";i("a3b6"),i("9658");var s=i("a593");function o(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:o}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:r}=s;if(r){s.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,o)}})}var r=i("39c3");e["a"]=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let o;const{attrs:a}=i;return a&&(i.attrs={},o=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),s)}})},aa0f:function(t,e,i){},ba99:function(t,e,i){},d226:function(t,e,i){"use strict";var s=i("5a4f");const o=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:o}=t,r=.5,a=16;t.offsetX=i-e,t.offsetY=o-s,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&o<s-a&&t.up(t),t.down&&o>s+a&&t.down(t))};function r(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),o(e)}function n(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>a(t,e),touchmove:t=>n(t,e)}}function c(t,e,i){const o=e.value,r=o.parent?t.parentElement:t,a=o.options||{passive:!0};if(!r)return;const n=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=n,Object(s["z"])(n).forEach(t=>{r.addEventListener(t,n[t],a)})}function h(t,e,i){const o=e.value.parent?t.parentElement:t;if(!o||!o._touchHandlers)return;const r=o._touchHandlers[i.context._uid];Object(s["z"])(r).forEach(t=>{o.removeEventListener(t,r[t])}),delete o._touchHandlers[i.context._uid]}const d={inserted:c,unbind:h};e["a"]=d},d24a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("Header",{model:{value:t.expandOnHover,callback:function(e){t.expandOnHover=e},expression:"expandOnHover"}}),i("v-content",[i("v-container",{staticClass:"page-wrapper",attrs:{fluid:""}},[i("router-view"),i("v-btn",{attrs:{bottom:"",color:"success",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){return e.stopPropagation(),t.setCustomizerDrawer(!t.Customizer_drawer)}}},[i("v-icon",[t._v("mdi-help")])],1)],1)],1),i("Sidebar",{attrs:{"expand-on-hover":t.expandOnHover},on:{"update:expandOnHover":function(e){t.expandOnHover=e},"update:expand-on-hover":function(e){t.expandOnHover=e}}}),i("Customizer",{model:{value:t.expandOnHover,callback:function(e){t.expandOnHover=e},expression:"expandOnHover"}}),i("Footer")],1)},o=[],r=i("d211"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{attrs:{app:"","clipped-left":"","clipped-right":"",color:"primary",dark:""}},[s("v-toolbar-title",{staticClass:"align-center d-flex"},[s("span",{staticClass:"logo-icon "},[s("img",{attrs:{src:i("1f1b")}})]),s("span",{staticClass:"logo-text ml-2",class:t.showLogo?"":"hidelogo"},[s("img",{staticClass:"mt-2",attrs:{src:i("040a")}})])]),s("div",{on:{click:t.showhideLogo}},[s("v-app-bar-nav-icon",{on:{click:function(e){t.$vuetify.breakpoint.smAndDown?t.setSidebarDrawer(!t.Sidebar_drawer):t.$emit("input",!t.value)}}})],1),s("v-btn",{staticClass:"mr-1 d-sm-block d-none",attrs:{dark:"",icon:""},on:{click:t.searchbox}},[s("v-icon",[t._v("mdi-magnify")])],1),t.showSearch?s("div",{staticClass:"searchinput primary"},[[s("v-text-field",{staticClass:"mt-3 mb-0",attrs:{placeholder:"Search & hit enter","append-icon":"mdi-close"},on:{"click:append":t.searchbox}})]],2):t._e(),s("v-spacer"),s("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-btn",t._g({staticClass:"mr-1",attrs:{dark:"",icon:""}},i),[s("v-avatar",{attrs:{size:"40"}},[s("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1)]}}])},[s("v-list",t._l(t.userprofile,(function(e,i){return s("v-list-item",{key:i,on:{click:function(i){return t.href(e)}}},[s("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1)},n=[],l=i("9f3a"),c=i("84b5"),h={name:"Header",components:{},props:{value:{type:Boolean,default:!1}},data:function(){return{showLogo:!0,showSearch:!1,notifications:[{title:"Launch Admin",iconbg:"error",icon:"mdi-link-variant",desc:"Just see the my new admin!",time:"9:30AM"},{title:"Event today",iconbg:"success",icon:"mdi-calendar-check",desc:"Just a reminder that you have event",time:"10:30AM"},{title:"Settings",iconbg:"info",icon:"mdi-cog",desc:"You can customize this template as you want",time:"11:30AM"},{title:"Pavan Kumar",iconbg:"indigo",icon:"mdi-account",desc:"Sent you an notification",time:"12:30AM"}],messages:[{title:"Sonu Nigam",avatar:"1",avatarstatus:"success",desc:"Singing Show tonigh at 9pm!",time:"9:30AM"},{title:"Sonu Nigam",avatar:"2",avatarstatus:"error",desc:"The greate malody songs ever sung",time:"10:30AM"},{title:"Arijit singh",avatar:"3",avatarstatus:"warning",desc:"You can customize this template as you want",time:"11:30AM"},{title:"Pavan Kumar",avatar:"4",avatarstatus:"success",desc:"Sent you an notification",time:"12:30AM"}],href:function(t){this.$router.push({path:t.path})}}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["Sidebar_drawer"])),{},{isLogin:Object(c["b"])("user/islogin"),userprofile:function(){if(this.isLogin){var t=[{title:"个人资料",path:"/user/userinfo"},{title:"登出",path:"/user/logout"}];return t}var e=[{title:"登陆",path:"/user/login"}];return e}}),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])({setSidebarDrawer:"SET_SIDEBAR_DRAWER"})),{},{showhideLogo:function(){this.showLogo=!this.showLogo},searchbox:function(){this.showSearch=!this.showSearch}})},d=h,u=(i("7161"),i("c701")),p=i("7033"),m=i.n(p),v=(i("9205"),i("331e"));function g(t,e){const{self:i=!1}=e.modifiers||{},s=e.value,o="object"===typeof s&&s.options||{passive:!0},r="function"===typeof s||"handleEvent"in s?s:s.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",r,o),t._onScroll={handler:r,options:o,target:i?void 0:a})}function f(t){if(!t._onScroll)return;const{handler:e,options:i,target:s=t}=t._onScroll;s.removeEventListener("scroll",e,i),delete t._onScroll}const b={inserted:g,unbind:f};var y=b,S=i("f99d"),w=i("5ab5");function O(t,e=[]){return Object(w["a"])(Object(S["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var x=i("2681"),C=i("a593"),j=C["a"].extend({name:"scrollable",directives:{Scroll:b},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(x["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),_=C["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}}),A=i("f9d0"),$=i("5a4f");const T=Object(w["a"])(v["a"],j,_,A["a"],O("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var k=T.extend({name:"v-app-bar",directives:{Scroll:y},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return j.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...v["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return v["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,s=i-e,o=s/this.computedScrollThreshold,r=this.currentScroll*o;return Math.max(e,i-r)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=v["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:v["a"].options.computed.isCollapsed.call(this)},isProminent(){return v["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...v["a"].options.computed.styles.call(this),fontSize:Object($["g"])(this.computedFontSize,"rem"),marginTop:Object($["g"])(this.computedMarginTop),transform:`translateY(${Object($["g"])(this.computedTransform)})`,left:Object($["g"])(this.computedLeft),right:Object($["g"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=v["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=v["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),B=i("a474"),E=i("fd3f"),M=C["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:o}){const r=Object.assign(o,{staticClass:("v-app-bar__nav-icon "+(o.staticClass||"")).trim(),props:{...s,icon:!0},on:i}),a=e().default;return t(E["a"],r,a||[t(B["a"],"$menu")])}}),H=i("cc74"),L=i("afe4"),N=i("fb99"),R=i("8a89"),V=i("d9e4"),P=i("5a84"),I=i("36c9"),z=i("a0cb"),D=i("5e30"),X=Object(u["a"])(d,a,n,!1,null,null,null),Y=X.exports;m()(X,{VAppBar:k,VAppBarNavIcon:M,VAvatar:H["a"],VBtn:E["a"],VIcon:L["a"],VList:N["a"],VListItem:R["a"],VListItemTitle:V["b"],VMenu:P["a"],VSpacer:I["a"],VTextField:z["a"],VToolbarTitle:D["a"]});var F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{directives:[{name:"bar",rawName:"v-bar"}],attrs:{dark:"white"!==t.SidebarColor,color:t.SidebarColor,"mobile-break-point":"960",clipped:"",right:t.$vuetify.rtl,"mini-variant-width":"70","expand-on-hover":t.expandOnHover,app:"",id:"main-sidebar"},model:{value:t.Sidebar_drawer,callback:function(e){t.Sidebar_drawer=e},expression:"Sidebar_drawer"}},[i("v-list",{staticClass:"mt-1",attrs:{expand:"",nav:""}},[t._l(t.items,(function(e,s){return[e.header?i("v-row",{key:e.header,attrs:{align:"center"}},[i("v-col",{attrs:{cols:"12"}},[e.header?i("v-subheader",{staticClass:"d-block text-truncate"},[t._v(t._s(e.header))]):t._e()],1)],1):e.children?i("BaseItemGroup",{key:"group-"+s,attrs:{item:e}}):i("BaseItem",{key:"item-"+s,attrs:{item:e}})]}))],2),i("v-divider")],1)},W=[],U=[{header:"量化交易"},{group:"/dbm",model:!1,icon:"mdi-gauge",title:"量化交易",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"},{icon:"mdi-adjust",title:"交易所配置",to:"exconfig"},{icon:"mdi-adjust",title:"添加交易对",to:"addconfig"},{icon:"mdi-adjust",title:"下单记录及利润统计",to:"profit"},{icon:"mdi-adjust",title:"自助续费",to:"renewal"},{icon:"mdi-adjust",title:"帮助中心",to:"wellcome"}]},{header:"智能定投"},{group:"/tim",model:!1,icon:"mdi-gauge",title:"智能定投",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"},{icon:"mdi-adjust",title:"添加策略",to:"addconfig"}]},{header:"智能波段"},{group:"/dtm",model:!1,icon:"mdi-gauge",title:"智能波段",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"},{icon:"mdi-adjust",title:"添加策略",to:"addconfig"}]}],Z=[{header:"量化交易"},{group:"/dbm",model:!1,icon:"mdi-gauge",title:"量化交易",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"},{icon:"mdi-adjust",title:"交易所配置",to:"exconfig"},{icon:"mdi-adjust",title:"添加交易对",to:"addconfig"},{icon:"mdi-adjust",title:"下单记录及利润统计",to:"profit"},{icon:"mdi-adjust",title:"自助续费",to:"renewal"},{icon:"mdi-adjust",title:"帮助中心",to:"wellcome"}]},{header:"智能定投"},{group:"/tim",model:!1,icon:"mdi-gauge",title:"智能定投",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"},{icon:"mdi-adjust",title:"添加策略",to:"addconfig"}]},{header:"智能波段"},{group:"/dtm",model:!1,icon:"mdi-gauge",title:"智能波段",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"},{icon:"mdi-adjust",title:"添加策略",to:"addconfig"}]},{header:"智能搬砖"},{group:"/bp",model:!1,icon:"mdi-gauge",title:"智能搬砖",children:[{icon:"mdi-adjust",title:"控制中心",to:"panel"}]},{header:"管理员工具"},{group:"/admin",model:!1,icon:"mdi-gauge",title:"管理员工具",children:[{icon:"mdi-adjust",title:"ODK数据编码",to:"encode"},{icon:"mdi-adjust",title:"ExBot激活管理",to:"exbotactive"},{icon:"mdi-adjust",title:"DBM用户订单",to:"dbmorders"}]},{header:"Trx链上管理"},{group:"/trx",model:!1,icon:"mdi-gauge",title:"Trx链上管理",children:[{icon:"mdi-adjust",title:"TRX链上转账",to:"transfer"},{icon:"mdi-adjust",title:"TRC10转账记录",to:"trc10history"},{icon:"mdi-adjust",title:"TRC10通证持有者",to:"trc10holders"}]},{header:"数据库管理"},{group:"/dbmanager",model:!1,icon:"mdi-gauge",title:"数据库管理",children:[{icon:"mdi-adjust",title:"数据查询",to:"dbview"},{icon:"mdi-adjust",title:"数据上传",to:"upload"},{icon:"mdi-adjust",title:"数据库配置",to:"config"}]}],q={name:"Sidebar",props:{expandOnHover:{type:Boolean,default:!1}},data:function(){return{}},computed:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["SidebarColor","SidebarBg"])),{},{userauthgrade:Object(c["b"])("user/userauthgrade"),items:function(){return this.userauthgrade>=10?Z:U},Sidebar_drawer:{get:function(){return this.$store.state.Sidebar_drawer},set:function(t){this.$store.commit("SET_SIDEBAR_DRAWER",t)}}}),watch:{"$vuetify.breakpoint.smAndDown":function(t){this.$emit("update:expandOnHover",!t)}},methods:{}},J=q,K=(i("9036"),i("30b0")),G=i("a4cd"),Q=(i("20f0"),i("046f")),tt=i("9a87"),et=i("4d1a"),it=i("2673"),st=i("9bf4"),ot=i("0765"),rt=i("98ab"),at=i("85c5"),nt=i("d226");const lt=Object(w["a"])(O("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),tt["a"],et["a"],it["a"],st["a"],_,ot["a"]);var ct=lt.extend({name:"v-navigation-drawer",directives:{ClickOutside:rt["a"],Resize:at["a"],Touch:nt["a"]},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&it["a"].options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:Object($["g"])(this.height),top:this.isBottom?"auto":Object($["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object($["g"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object($["g"])(this.computedTransform,"%")})`,width:Object($["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(Q["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),this.expandOnHover&&(t.mouseenter=()=>this.isMouseover=!0,t.mouseleave=()=>this.isMouseover=!1),t},genPosition(t){const e=Object($["s"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__"+t},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object($["s"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),ht=i("ff00"),dt=i("b7a4"),ut=Object(u["a"])(J,F,W,!1,null,null,null),pt=ut.exports;m()(ut,{VCol:K["a"],VDivider:G["a"],VList:N["a"],VNavigationDrawer:ct,VRow:ht["a"],VSubheader:dt["a"]});var mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"footerpart",attrs:{app:"",inset:""}},[i("v-col",{attrs:{cols:"12"}},[i("span",[t._v("© "+t._s((new Date).getFullYear())+" — 龟速致富群 1051675012")])])],1)},vt=[],gt={name:"Footer",data:function(){return{}}},ft=gt,bt=(i("3764"),i("aa0f"),i("f492")),yt=Object(w["a"])(bt["a"],O("footer",["height","inset"]),_).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...bt["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...bt["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object($["g"])(t),left:Object($["g"])(this.computedLeft),right:Object($["g"])(this.computedRight),bottom:Object($["g"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),St=Object(u["a"])(ft,mt,vt,!1,null,null,null),wt=St.exports;m()(St,{VCol:K["a"],VFooter:yt});var Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{app:"",temporary:"",right:!t.$vuetify.rtl},model:{value:t.Customizer_drawer,callback:function(e){t.Customizer_drawer=e},expression:"Customizer_drawer"}},[i("div",{staticClass:"px-4 py-4"},[i("a",{attrs:{href:"/user/login"}},[t._v(" 登录/注册")])]),i("div",{staticClass:"px-4 py-4"},[i("a",{attrs:{href:"/user/userinfo"}},[t._v(" 个人资料")])]),i("v-divider"),i("div",{staticClass:"px-4 py-4"},[i("a",{attrs:{href:"/help/help/readme.html"}},[t._v(" 帮助中心")])]),i("v-divider"),i("div",{staticClass:"px-4 py-4"},[i("a",{attrs:{href:"https://www.wkj.link/register?invit=ZXCHBW"}},[t._v(" 玩客家交易所")])]),i("v-divider")],1)},xt=[],Ct=i("073c"),jt={name:"Customizer",mixins:[Ct["a"]],data:function(){return{right:!1,SidebarColor:"",SidebarColors:["white","#2b2b2b","rgb(44, 59, 164)","rgb(96, 44, 164)","rgb(151, 210, 219)","rgb(77, 86, 100)"],themecolor:"#1e88e5",themecolors:["#1e88e6","#21c1d6","#fc4b6c","#563dea","#9C27b0","#ff9800"]}},computed:{Customizer_drawer:{get:function(){return this.$store.state.Customizer_drawer},set:function(t){this.$store.commit("SET_CUSTOMIZER_DRAWER",t)}},setSidebarColor:{get:function(){return this.$store.state.SidebarColor},set:function(t){this.$store.commit("SET_SIDEBAR_COLOR",t)}}},watch:{themecolor:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t,this.$vuetify.theme.themes[this.isLight?"light":"dark"].primary=t},setSidebarColor:function(t){this.$store.commit("SET_SIDEBAR_COLOR",t)}},methods:{}},_t=jt,At=(i("63fa"),Object(u["a"])(_t,Ot,xt,!1,null,null,null)),$t=At.exports;m()(At,{VDivider:G["a"],VNavigationDrawer:ct});var Tt={name:"Layout",components:{Header:Y,Sidebar:pt,Footer:wt,Customizer:$t},props:{source:String},data:function(){return{expandOnHover:!1}},computed:Object(r["a"])({},Object(l["c"])(["Customizer_drawer"])),methods:Object(r["a"])({},Object(l["b"])({setCustomizerDrawer:"SET_CUSTOMIZER_DRAWER"}))},kt=Tt,Bt=i("05f7"),Et=i("a93b"),Mt=(i("ba99"),_.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:s,insetFooter:o,bottom:r,left:a}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:i+"px",paddingBottom:s+o+r+"px",paddingLeft:a+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),Ht=Mt.extend({name:"v-main",created(){Object(x["d"])("v-content","v-main",this)},render(t){const e=Mt.options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}}),Lt=Object(u["a"])(kt,s,o,!1,null,null,null);e["default"]=Lt.exports;m()(Lt,{VApp:Bt["a"],VBtn:E["a"],VContainer:Et["a"],VContent:Ht,VIcon:L["a"]})},e9ca:function(t,e,i){},fc12:function(t,e,i){}}]);
//# sourceMappingURL=chunk-008cf8d7.c2009cd3.js.map