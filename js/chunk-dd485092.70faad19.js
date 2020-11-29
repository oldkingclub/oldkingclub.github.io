(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd485092"],{"03ab":function(t,e,i){},"3cd7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[i("code",[t._v("dense")]),t._v(" timelines position all content to the right. In this example, "),i("code",[t._v("v-alert")]),t._v(" replaces the card to provide a different design. ")]),i("div",{staticClass:"mt-4"},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[i("v-card-title",{staticClass:"success white--text"},[i("span",{staticClass:"title"},[t._v("Logs")]),i("v-spacer"),i("v-btn",{attrs:{outlined:null==t.interval,color:null==t.interval?"white":"primary",dark:"",depressed:""},on:{click:function(e){null==t.interval?t.start():t.stop()}}},[t._v(" Realtime Logging ")])],1),i("v-card-text",{staticClass:"py-0"},[i("v-timeline",{attrs:{dense:""}},[i("v-slide-x-reverse-transition",{attrs:{group:"","hide-on-leave":""}},t._l(t.items,(function(e){return i("v-timeline-item",{key:e.id,attrs:{color:e.color,small:"","fill-dot":""}},[i("v-alert",{staticClass:"white--text",attrs:{value:!0,color:e.color,icon:e.icon}},[t._v(" Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. ")])],1)})),1)],1)],1)],1)],1)],1)},n=[],o=["info","warning","error","success"],r={info:"mdi-information",warning:"mdi-alert",error:"mdi-alert-circle",success:"mdi-check-circle"},l={name:"TimelineDenseAlert",data:function(){return{interval:null,items:[{id:1,color:"info",icon:r["info"]}],nonce:2}},beforeDestroy:function(){this.stop()},methods:{addEvent:function(){var t=this.genAlert(),e=t.color,i=t.icon,s=this.items[0].color;while(s===e)e=this.genColor();this.items.unshift({id:this.nonce++,color:e,icon:i}),this.nonce>6&&this.items.pop()},genAlert:function(){var t=this.genColor();return{color:t,icon:this.genIcon(t)}},genColor:function(){return o[Math.floor(3*Math.random())]},genIcon:function(t){return r[t]},start:function(){this.interval=setInterval(this.addEvent,3e3)},stop:function(){clearInterval(this.interval),this.interval=null}}},a=l,c=i("c701"),d=i("7033"),h=i.n(d),u=i("49f8"),m=i("fd3f"),v=i("dbcd"),p=i("6e06"),f=i("d9e4"),g=i("d65c"),_=i("36c9"),b=i("8f4d"),C=i("ab61"),B=Object(c["a"])(a,s,n,!1,null,null,null);e["default"]=B.exports;h()(B,{VAlert:u["a"],VBtn:m["a"],VCard:v["a"],VCardText:p["c"],VCardTitle:p["d"],VListItemSubtitle:f["c"],VSlideXReverseTransition:g["h"],VSpacer:_["a"],VTimeline:b["a"],VTimelineItem:C["a"]})},4433:function(t,e,i){},"49f8":function(t,e,i){"use strict";i("03ab");var s=i("4eb7"),n=i("ff02"),o=i("a474"),r=i("f9d0"),l=i("0765"),a=i("6756"),c=i("5ab5"),d=i("2681");e["a"]=Object(c["a"])(s["a"],r["a"],a["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},6756:function(t,e,i){"use strict";var s=i("a593");e["a"]=s["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"6e06":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return l})),i.d(e,"d",(function(){return a}));var s=i("dbcd"),n=i("5a4f");const o=Object(n["j"])("v-card__actions"),r=Object(n["j"])("v-card__subtitle"),l=Object(n["j"])("v-card__text"),a=Object(n["j"])("v-card__title");s["a"]},"8f4d":function(t,e,i){"use strict";i("4433");var s=i("5ab5"),n=i("0765");e["a"]=Object(s["a"])(n["a"]).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})},ab61:function(t,e,i){"use strict";var s=i("5ab5"),n=i("a474"),o=i("0765"),r=i("9a87");const l=Object(s["a"])(r["a"],o["a"]);e["a"]=l.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(n["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}})},ff02:function(t,e,i){"use strict";var s=i("fd3f");e["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-dd485092.70faad19.js.map