(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4716f02a"],{"0c34":function(t,e,s){},"1af7":function(t,e,s){"use strict";s("4c24");var i=s("9a87"),a=s("0765"),n=s("5ab5"),r=s("5a4f"),o=Object(n["a"])(a["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:s,listeners:n,props:o}=e,l={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...Object(a["b"])(e)},attrs:{for:o.for,"aria-hidden":!o.for},on:n,style:{left:Object(r["h"])(o.left),right:Object(r["h"])(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(o.focused&&o.color,l),s)}});e["a"]=o},2073:function(t,e,s){},"2ad2":function(t,e,s){"use strict";var i=s("727c"),a=s("a593");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"2f12":function(t,e,s){"use strict";var i=s("9a87"),a=s("0765"),n=s("ab87"),r=s("5a4f"),o=s("2681"),l=s("5ab5");const h=Object(l["a"])(i["a"],Object(n["a"])("form"),a["a"]);e["a"]=h.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(r["k"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],a="function"===typeof t?t(e):t;!1===a||"string"===typeof a?s.push(a||""):"boolean"!==typeof a&&Object(o["b"])(`Rules should return a string or boolean, received '${typeof a}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}})},"3a59":function(t,e,s){},"4c24":function(t,e,s){},6112:function(t,e,s){},"633a":function(t,e,s){"use strict";var i=s("a593"),a=s("5a4f");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["k"]}}})},"85c5":function(t,e,s){"use strict";function i(t,e){const s=e.value,i=e.options||{passive:!0};window.addEventListener("resize",s,i),t._onResize={callback:s,options:i},e.modifiers&&e.modifiers.quiet||s()}function a(t){if(!t._onResize)return;const{callback:e,options:s}=t._onResize;window.removeEventListener("resize",e,s),delete t._onResize}const n={inserted:i,unbind:a};e["a"]=n},"9ce8":function(t,e,s){"use strict";var i=s("a87e");e["a"]=i["a"]},"9d20":function(t,e,s){"use strict";s("0c34"),s("6112");var i=s("ba8b"),a=s("9ce8"),n=s("d226"),r=s("d65c"),o=s("cc13"),l=s("5a4f");e["a"]=i["a"].extend({name:"v-switch",directives:{Touch:n["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...this.attrs$}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(o["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===l["z"].left&&this.isActive||t.keyCode===l["z"].right&&!this.isActive)&&this.onChange()}}})},a87e:function(t,e,s){"use strict";s("3a59");var i=s("a474"),a=s("1af7"),n=(s("2073"),s("9a87")),r=s("0765"),o=s("5ab5"),l=s("5a4f"),h=Object(o["a"])(n["a"],r["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(l["t"])(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=h,c=s("a301"),d=s("2f12"),p=s("39c3");const g=Object(o["a"])(c["a"],d["a"]);e["a"]=g.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,s={}){const a=this[t+"Icon"],n="click:"+Object(l["y"])(t),r=!(!this.listeners$[n]&&!e),o=Object(p["a"])({attrs:{"aria-label":r?Object(l["y"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(n,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--"+Object(l["y"])(t):void 0},[this.$createElement(i["a"],o,a)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(l["h"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(a["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>Object(l["t"])(this,"message",t)}}):null},genSlot(t,e,s){if(!s.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:"v-input__"+i,ref:i},s)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}})},ba8b:function(t,e,s){"use strict";s.d(e,"b",(function(){return o}));var i=s("9ce8"),a=s("2ad2"),n=s("633a"),r=s("5ab5");function o(t){t.preventDefault()}e["a"]=Object(r["a"])(i["a"],a["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})},bdf8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" Menu can be offset by the X axis to make the activator visible. ")]),s("div",{staticClass:"mt-4 text-center"},[s("v-switch",{attrs:{label:"X offset"},model:{value:t.offset,callback:function(e){t.offset=e},expression:"offset"}}),s("v-menu",{attrs:{top:"","offset-x":t.offset},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-btn",t._g({attrs:{color:"primary",dark:""}},i),[t._v(" Dropdown ")])]}}])},[s("v-list",t._l(t.items,(function(e,i){return s("v-list-item",{key:i,on:{click:function(t){t.stopPropagation()}}},[s("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1)],1)},a=[],n={name:"MenusXoffset",data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],offset:!0}}},r=n,o=s("c701"),l=s("7033"),h=s.n(l),u=s("fd3f"),c=s("fb99"),d=s("8a89"),p=s("d9e4"),g=s("5a84"),v=s("9d20"),f=Object(o["a"])(r,i,a,!1,null,null,null);e["default"]=f.exports;h()(f,{VBtn:u["a"],VList:c["a"],VListItem:d["a"],VListItemSubtitle:p["c"],VListItemTitle:p["d"],VMenu:g["a"],VSwitch:v["a"]})},d226:function(t,e,s){"use strict";var i=s("5a4f");const a=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:a}=t,n=.5,r=16;t.offsetX=s-e,t.offsetY=a-i,Math.abs(t.offsetY)<n*Math.abs(t.offsetX)&&(t.left&&s<e-r&&t.left(t),t.right&&s>e+r&&t.right(t)),Math.abs(t.offsetX)<n*Math.abs(t.offsetY)&&(t.up&&a<i-r&&t.up(t),t.down&&a>i+r&&t.down(t))};function n(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function o(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>n(t,e),touchend:t=>r(t,e),touchmove:t=>o(t,e)}}function h(t,e,s){const a=e.value,n=a.parent?t.parentElement:t,r=a.options||{passive:!0};if(!n)return;const o=l(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[s.context._uid]=o,Object(i["A"])(o).forEach(t=>{n.addEventListener(t,o[t],r)})}function u(t,e,s){const a=e.value.parent?t.parentElement:t;if(!a||!a._touchHandlers)return;const n=a._touchHandlers[s.context._uid];Object(i["A"])(n).forEach(t=>{a.removeEventListener(t,n[t])}),delete a._touchHandlers[s.context._uid]}const c={inserted:h,unbind:u};e["a"]=c}}]);
//# sourceMappingURL=chunk-4716f02a.f81318cc.js.map