(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a57307b8"],{"04f2":function(t,e,s){"use strict";s("9b83");var i=s("9ce8"),a=s("d65c"),r=s("5ab5"),n=s("bd73"),l=s("98ab"),h=s("5a4f"),o=s("2681");e["a"]=Object(r["a"])(i["a"],n["a"]).extend({name:"v-slider",directives:{ClickOutside:l["a"]},mixins:[n["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,keyPressed:0,isFocused:!1,isActive:!1,noClick:!1}),computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.keyPressed>=2?"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){return(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",s=this.vertical?"height":"width",i=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:this.inputWidth+"%";return{transition:this.trackTransition,[t]:i,[e]:a,[s]:r}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",s="0px",i=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:s,[e]:i}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t}}},beforeMount(){this.internalValue=this.value},mounted(){this.app=document.querySelector("[data-app]")||Object(o["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onThumbMouseDown,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:this.isDisabled,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=Object(h["i"])(this.numTicks+1),s=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",i=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const a=e.map(e=>{const a=[];this.tickLabels[e]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const r=e*(100/this.numTicks),n=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":n},style:{width:t+"px",height:t+"px",[s]:`calc(${r}% - ${t/2}px)`,[i]:`calc(50% - ${t/2}px)`}},a)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,e,s,i,a,r,n,l="thumb"){const h=[this.genThumb()],o=this.genThumbLabelContent(t);return this.showThumbLabel&&h.push(this.genThumbLabel(o)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:l,key:l,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":s,"v-slider__thumb-container--focused":i,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal",...this.$attrs},on:{focus:r,blur:n,keydown:this.onKeyDown,keyup:this.onKeyUp,touchstart:a,mousedown:a}}),h)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=Object(h["h"])(this.thumbSize),s=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(a["e"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:s}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let s=this.$vuetify.rtl?100-t:t;return s=this.vertical?100-s:s,{transition:this.trackTransition,[e]:s+"%"}},onThumbMouseDown(t){t.preventDefault(),this.oldValue=this.internalValue,this.keyPressed=2,this.isActive=!0;const e=!h["D"]||{passive:!0,capture:!0},s=!!h["D"]&&{passive:!0};"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,s),Object(h["a"])(this.app,"touchend",this.onSliderMouseUp,e)):(this.app.addEventListener("mousemove",this.onMouseMove,s),Object(h["a"])(this.app,"mouseup",this.onSliderMouseUp,e)),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),this.keyPressed=0;const e=!!h["D"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(h["k"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){const{value:e}=this.parseMouseMove(t);this.internalValue=e},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onKeyUp(){this.keyPressed=0},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",s=this.vertical?"height":"width",i=this.vertical?"clientY":"clientX",{[e]:a,[s]:r}=this.$refs.track.getBoundingClientRect(),n="touches"in t?t.touches[0][i]:t[i];let l=Math.min(Math.max((n-a)/r,0),1)||0;this.vertical&&(l=1-l),this.$vuetify.rtl&&(l=1-l);const h=n>=a&&n<=a+r,o=parseFloat(this.min)+l*(this.maxValue-this.minValue);return{value:o,isInsideTrack:h}},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:s,pagedown:i,end:a,home:r,left:n,right:l,down:o,up:u}=h["z"];if(![s,i,a,r,n,l,o,u].includes(t.keyCode))return;t.preventDefault();const c=this.stepNumeric||1,d=(this.maxValue-this.minValue)/c;if([n,l,o,u].includes(t.keyCode)){this.keyPressed+=1;const s=this.$vuetify.rtl?[n,u]:[l,u],i=s.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;e+=i*c*a}else if(t.keyCode===r)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{const s=t.keyCode===i?1:-1;e-=s*c*(d>100?d/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),s=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,i=this.minValue%this.stepNumeric,a=Math.round((t-i)/this.stepNumeric)*this.stepNumeric+i;return parseFloat(Math.min(a,this.maxValue).toFixed(s))}}})},"1af7":function(t,e,s){"use strict";s("4c24");var i=s("9a87"),a=s("0765"),r=s("5ab5"),n=s("5a4f"),l=Object(r["a"])(a["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:s,listeners:r,props:l}=e,h={staticClass:"v-label",class:{"v-label--active":l.value,"v-label--is-disabled":l.disabled,...Object(a["b"])(e)},attrs:{for:l.for,"aria-hidden":!l.for},on:r,style:{left:Object(n["h"])(l.left),right:Object(n["h"])(l.right),position:l.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(l.focused&&l.color,h),s)}});e["a"]=l},2073:function(t,e,s){},"2f12":function(t,e,s){"use strict";var i=s("9a87"),a=s("0765"),r=s("ab87"),n=s("5a4f"),l=s("2681"),h=s("5ab5");const o=Object(h["a"])(i["a"],Object(r["a"])("form"),a["a"]);e["a"]=o.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(n["k"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],a="function"===typeof t?t(e):t;!1===a||"string"===typeof a?s.push(a||""):"boolean"!==typeof a&&Object(l["b"])(`Rules should return a string or boolean, received '${typeof a}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}})},"3a59":function(t,e,s){},4717:function(t,e,s){},"4c24":function(t,e,s){},"6e06":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return l})),s.d(e,"d",(function(){return h}));var i=s("dbcd"),a=s("5a4f");const r=Object(a["j"])("v-card__actions"),n=Object(a["j"])("v-card__subtitle"),l=Object(a["j"])("v-card__text"),h=Object(a["j"])("v-card__title");i["a"]},"98ab":function(t,e,s){"use strict";function i(){return!0}function a(t,e,s){const a="function"===typeof s.value?s.value:s.value.handler,r="object"===typeof s.value&&s.value.closeConditional||i;if(!t||!1===r(t))return;const n=("object"===typeof s.value&&s.value.include||(()=>[]))();n.push(e),!n.some(e=>e.contains(t.target))&&setTimeout(()=>{r(t)&&a&&a(t)},0)}const r={inserted(t,e){const s=s=>a(s,t,e),i=document.querySelector("[data-app]")||document.body;i.addEventListener("click",s,!0),t._clickOutside=s},unbind(t){if(!t._clickOutside)return;const e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}};e["a"]=r},"9b83":function(t,e,s){},"9ce8":function(t,e,s){"use strict";var i=s("a87e");e["a"]=i["a"]},a87e:function(t,e,s){"use strict";s("3a59");var i=s("a474"),a=s("1af7"),r=(s("2073"),s("9a87")),n=s("0765"),l=s("5ab5"),h=s("5a4f"),o=Object(l["a"])(r["a"],n["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(h["t"])(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=o,c=s("a301"),d=s("2f12"),p=s("39c3");const v=Object(l["a"])(c["a"],d["a"]);e["a"]=v.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,s={}){const a=this[t+"Icon"],r="click:"+Object(h["y"])(t),n=!(!this.listeners$[r]&&!e),l=Object(p["a"])({attrs:{"aria-label":n?Object(h["y"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:n?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(r,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--"+Object(h["y"])(t):void 0},[this.$createElement(i["a"],l,a)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(h["h"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(a["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>Object(h["t"])(this,"message",t)}}):null},genSlot(t,e,s){if(!s.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:"v-input__"+i,ref:i},s)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}})},b7a4:function(t,e,s){"use strict";s("4717");var i=s("0765"),a=s("5ab5");e["a"]=Object(a["a"])(i["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},fd62:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" Tick marks represent predetermined values to which the user can move the slider. ")]),s("div",{staticClass:"mt-4"},[s("v-subheader",[t._v("Show ticks when using slider")]),s("v-card-text",[s("v-slider",{attrs:{step:"10",ticks:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("v-subheader",[t._v("Always show ticks")]),s("v-card-text",[s("v-slider",{attrs:{step:"10",ticks:"always"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("v-subheader",[t._v("Tick size")]),s("v-card-text",[s("v-slider",{attrs:{step:"10",ticks:"always","tick-size":"4"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("v-subheader",[t._v("Tick labels")]),s("v-card-text",[s("v-slider",{attrs:{"tick-labels":t.ticksLabels,max:3,step:"1",ticks:"always","tick-size":"4"},model:{value:t.fruits,callback:function(e){t.fruits=e},expression:"fruits"}})],1)],1)],1)},a=[],r={name:"SlidersTicks",data:function(){return{value:0,fruits:0,ticksLabels:["Figs","Lemon","Pear","Apple"]}}},n=r,l=s("c701"),h=s("7033"),o=s.n(h),u=s("6e06"),c=s("d9e4"),d=s("04f2"),p=s("b7a4"),v=Object(l["a"])(n,i,a,!1,null,null,null);e["default"]=v.exports;o()(v,{VCardText:u["c"],VListItemSubtitle:c["c"],VSlider:d["a"],VSubheader:p["a"]})}}]);
//# sourceMappingURL=chunk-a57307b8.b1656545.js.map