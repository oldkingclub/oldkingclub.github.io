(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3443173a"],{"0fa9":function(e,t,a){"use strict";var i=a("86dd"),s=a("f9d0"),r=a("5ab5"),n=a("2681");t["a"]=Object(r["a"])(i["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(n["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(n["c"])("v-hover should only contain a single element",this),e)}})},"2ad2":function(e,t,a){"use strict";var i=a("727c"),s=a("a593");t["a"]=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},"6b37":function(e,t,a){"use strict";a("8a4f");var i=a("9a87"),s=a("0765"),r=a("f9d0"),n=a("5ab5");t["a"]=Object(n["a"])(i["a"],s["a"],r["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}})},"6e06":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l}));var i=a("dbcd"),s=a("5a4f");const r=Object(s["j"])("v-card__actions"),n=Object(s["j"])("v-card__subtitle"),o=Object(s["j"])("v-card__text"),l=Object(s["j"])("v-card__title");i["a"]},"86dd":function(e,t,a){"use strict";var i=a("a593");t["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const a=parseInt(this[e+"Delay"],10);this[e+"Timeout"]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),a)}}})},"8a4f":function(e,t,a){},"917e":function(e,t,a){"use strict";a("ea41");var i=a("a474"),s=a("9a87"),r=a("86dd"),n=a("b09d"),o=a("2ad2"),l=a("0765"),c=a("5a4f"),u=a("5ab5");t["a"]=Object(u["a"])(s["a"],r["a"],o["a"],n["a"],l["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:e,large:t,light:a,medium:i,small:s,size:r,xLarge:n,xSmall:o}=this.$props;return{dark:e,large:t,light:a,medium:i,size:r,small:s,xLarge:n,xSmall:o}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(e){e!==this.value&&this.$emit("input",e)},value(e){this.internalValue=e}},methods:{createClickFn(e){return t=>{if(this.readonly)return;const a=this.genHoverIndex(t,e);this.clearable&&this.internalValue===a?this.internalValue=0:this.internalValue=a}},createProps(e){const t={index:e,value:this.internalValue,click:this.createClickFn(e),isFilled:Math.floor(this.internalValue)>e,isHovered:Math.floor(this.hoverIndex)>e};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-e)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-e)%1>0),t},genHoverIndex(e,t){let a=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(a=!a),t+(a?.5:1)},getIconName(e){const t=this.isHovering?e.isHovered:e.isFilled,a=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:a?this.halfIcon:this.emptyIcon},getColor(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(e){if(this.halfIncrements){const t=e.target&&e.target.getBoundingClientRect();if(t&&e.pageX-t.left<t.width/2)return!0}return!1},onMouseEnter(e,t){this.runDelay("open",()=>{this.hoverIndex=this.genHoverIndex(e,t)})},onMouseLeave(){this.runDelay("close",()=>this.hoverIndex=-1)},genItem(e){const t=this.createProps(e);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);const a={click:t.click};return this.hover&&(a.mouseenter=t=>this.onMouseEnter(t,e),a.mouseleave=this.onMouseLeave,this.halfIncrements&&(a.mousemove=t=>this.onMouseEnter(t,e))),this.$createElement(i["a"],this.setTextColor(this.getColor(t),{attrs:{tabindex:-1},directives:this.directives,props:this.iconProps,on:a}),[this.getIconName(t)])}},render(e){const t=Object(c["i"])(Number(this.length)).map(e=>this.genItem(e));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},t)}})},b831:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(" Using the v-hover, we are able to add a nice scrim over the information card with additional actions the user can take. ")]),a("div",{staticClass:"mt-4"},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"}}),a("v-card-text",[a("h2",{staticClass:"title primary--text"},[e._v("Magento Forests")]),e._v(" Travel to the best outdoor experience on planet Earth. A vacation you will never forget! ")]),a("v-card-title",[a("v-rating",{staticClass:"mr-2",attrs:{value:4,dense:"",color:"orange","background-color":"orange",hover:""}}),a("span",{staticClass:"primary--text subtitle-2"},[e._v("64 Reviews")])],1),a("v-fade-transition",[i?a("v-overlay",{attrs:{absolute:"",color:"#036358"}},[a("v-btn",[e._v("See more info")])],1):e._e()],1)],1)]}}])})],1)],1)},s=[],r={name:"OverlayAdvanced",data:function(){return{overlay:!1}}},n=r,o=a("c701"),l=a("7033"),c=a.n(l),u=a("fd3f"),d=a("dbcd"),h=a("6e06"),v=a("d65c"),p=a("0fa9"),m=a("046f"),f=a("d9e4"),g=a("6b37"),y=a("917e"),b=Object(o["a"])(n,i,s,!1,null,null,null);t["default"]=b.exports;c()(b,{VBtn:u["a"],VCard:d["a"],VCardText:h["c"],VCardTitle:h["d"],VFadeTransition:v["d"],VHover:p["a"],VImg:m["a"],VListItemSubtitle:f["c"],VOverlay:g["a"],VRating:y["a"]})},ea41:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3443173a.22541570.js.map