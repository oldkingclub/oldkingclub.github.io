(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7599e976"],{"0403":function(t,e,s){t.exports=s.p+"img/3.61d29bb1.jpg"},"0c34":function(t,e,s){},"1af7":function(t,e,s){"use strict";s("4c24");var i=s("9a87"),a=s("0765"),n=s("5ab5"),r=s("5a4f"),l=Object(n["a"])(a["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:s,listeners:n,props:l}=e,o={staticClass:"v-label",class:{"v-label--active":l.value,"v-label--is-disabled":l.disabled,...Object(a["b"])(e)},attrs:{for:l.for,"aria-hidden":!l.for},on:n,style:{left:Object(r["h"])(l.left),right:Object(r["h"])(l.right),position:l.absolute?"absolute":"relative"},ref:"label"};return t("label",i["a"].options.methods.setTextColor(l.focused&&l.color,o),s)}});e["a"]=l},"1bde":function(t,e,s){t.exports=s.p+"img/8.a606f50a.jpg"},2073:function(t,e,s){},"224e":function(t,e,s){t.exports=s.p+"img/d4.b3b27094.jpg"},"2ad2":function(t,e,s){"use strict";var i=s("727c"),a=s("a593");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"2f12":function(t,e,s){"use strict";var i=s("9a87"),a=s("0765"),n=s("ab87"),r=s("5a4f"),l=s("2681"),o=s("5ab5");const c=Object(o["a"])(i["a"],Object(n["a"])("form"),a["a"]);e["a"]=c.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){Object(r["k"])(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(t=!1,e){const s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],a="function"===typeof t?t(e):t;!1===a||"string"===typeof a?s.push(a||""):"boolean"!==typeof a&&Object(l["b"])(`Rules should return a string or boolean, received '${typeof a}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}})},"3a59":function(t,e,s){},"3fed":function(t,e,s){t.exports=s.p+"img/1.cb88fb01.jpg"},4959:function(t,e,s){"use strict";s("5a82");var i=s("5ab5"),a=s("d65c"),n=s("a474"),r=s("9a87"),l=s("035d"),o=s("0765"),c=s("f9d0"),h=s("9d74"),u=s("b09d"),d=s("2681");e["a"]=Object(i["a"])(r["a"],u["a"],h["a"],o["a"],Object(l["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(d["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const a=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(a,i),e)}})},"4c24":function(t,e,s){},"5a82":function(t,e,s){},"5a8f":function(t,e,s){var i={"./1-default.jpg":"ceec","./1.jpg":"3fed","./2.jpg":"828e","./3.jpg":"0403","./4.jpg":"7278","./5.jpg":"b4d8","./6.jpg":"b3ac","./7.jpg":"660f","./8.jpg":"1bde","./d1.jpg":"84c8","./d2.jpg":"fa19","./d3.jpg":"f175","./d4.jpg":"224e","./d5.jpg":"e4a3","./profile.png":"e350"};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="5a8f"},"633a":function(t,e,s){"use strict";var i=s("a593"),a=s("5a4f");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["k"]}}})},"660f":function(t,e,s){t.exports=s.p+"img/7.103c0884.jpg"},"6e06":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return l})),s.d(e,"d",(function(){return o}));var i=s("dbcd"),a=s("5a4f");const n=Object(a["j"])("v-card__actions"),r=Object(a["j"])("v-card__subtitle"),l=Object(a["j"])("v-card__text"),o=Object(a["j"])("v-card__title");i["a"]},7278:function(t,e,s){t.exports=s.p+"img/4.94c9a5cc.jpg"},"7ae6":function(t,e,s){},"828e":function(t,e,s){t.exports=s.p+"img/2.29c23ad1.jpg"},"84c8":function(t,e,s){t.exports=s.p+"img/d1.684208f5.jpg"},"9ce8":function(t,e,s){"use strict";var i=s("a87e");e["a"]=i["a"]},a87e:function(t,e,s){"use strict";s("3a59");var i=s("a474"),a=s("1af7"),n=(s("2073"),s("9a87")),r=s("0765"),l=s("5ab5"),o=s("5a4f"),c=Object(l["a"])(n["a"],r["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(o["t"])(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),h=c,u=s("a301"),d=s("2f12"),p=s("39c3");const g=Object(l["a"])(u["a"],d["a"]);e["a"]=g.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""}).filter(t=>""!==t):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,s={}){const a=this[t+"Icon"],n="click:"+Object(o["y"])(t),r=!(!this.listeners$[n]&&!e),l=Object(p["a"])({attrs:{"aria-label":r?Object(o["y"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(n,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--"+Object(o["y"])(t):void 0},[this.$createElement(i["a"],l,a)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(o["h"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(a["a"],{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(h,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>Object(o["t"])(this,"message",t)}}):null},genSlot(t,e,s){if(!s.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:"v-input__"+i,ref:i},s)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}})},b22a:function(t,e,s){"use strict";s("7ae6"),s("0c34");var i=s("a474"),a=s("9ce8"),n=s("ba8b");e["a"]=n["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},b3ac:function(t,e,s){t.exports=s.p+"img/6.80cd2f74.jpg"},b4d8:function(t,e,s){t.exports=s.p+"img/5.764ff046.jpg"},b6ed:function(t,e,s){},ba8b:function(t,e,s){"use strict";s.d(e,"b",(function(){return l}));var i=s("9ce8"),a=s("2ad2"),n=s("633a"),r=s("5ab5");function l(t){t.preventDefault()}e["a"]=Object(r["a"])(i["a"],a["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})},be4e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mb-7",attrs:{flat:""}},[i("v-card-text",{staticClass:"pa-5"},[i("div",{staticClass:"d-sm-flex align-center"},[i("div",[i("h3",{staticClass:"title font-weight-regular"},[t._v("To do List")]),i("h6",{staticClass:"subtitle-2 font-weight-light"},[t._v("List of your next task to complete")])]),i("v-spacer"),i("div",{staticClass:"ml-auto"},[i("v-chip",{staticClass:"ma-2",attrs:{color:"info"}},[i("i",{staticClass:"mr-2 ti-pencil"}),i("span",{staticClass:"mr-2"},[t._v("Total Tasks:")]),i("v-fade-transition",{attrs:{"leave-absolute":""}},[i("span",{key:"tasks-"+t.tasks.length},[t._v(t._s(t.tasks.length))])])],1)],1)],1)]),i("div",{staticClass:"blue lighten-4 px-3"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"Add new tasks from here"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.create(e)}},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}},[i("v-fade-transition",{scopedSlots:t._u([{key:"append",fn:function(){return[t.task?i("i",{staticClass:"ti-plus",on:{click:t.create}}):t._e()]},proxy:!0}])})],1)],1)],1),i("v-row",{staticClass:"pb-4",attrs:{align:"center"}},[i("strong",{staticClass:"mx-4 info--text font-weight-medium"},[t._v("Remaining: "+t._s(t.remainingTasks))]),i("v-divider",{attrs:{vertical:""}}),i("strong",{staticClass:"mx-4 success--text font-weight-medium"},[t._v("Completed: "+t._s(t.completedTasks))]),i("v-spacer"),i("v-progress-circular",{staticClass:"mx-2",attrs:{value:t.progress,color:"warning"}})],1)],1),i("v-card-text",{staticClass:"pa-0"},[t.tasks.length>0?i("v-card",{directives:[{name:"bar",rawName:"v-bar"}],staticClass:"elevation-0 vs-scrollable",staticStyle:{height:"400px"}},[i("v-slide-y-transition",{staticClass:"py-0",attrs:{group:""}},[t._l(t.tasks,(function(e,a){return[0!==a?i("v-divider",{key:a+"-divider"}):t._e(),i("v-list-item",{key:a+"-"+e.text,staticClass:"d-block py-3"},[i("div",{staticClass:"d-flex align-center"},[i("v-list-item-action",[i("v-checkbox",{attrs:{color:e.done?"grey":"success"},scopedSlots:t._u([{key:"label",fn:function(){return[i("div",{staticClass:"ml-4",class:e.done?"grey--text text-decoration-line":"",domProps:{textContent:t._s(e.text)}}),i("div",{staticClass:"ml-1"},[i("v-chip",{staticClass:"display-none",class:[e.badgebg,e.badgedisplay],attrs:{small:"",label:""}},[t._v(t._s(e.badgetext))])],1)]},proxy:!0}],null,!0),model:{value:e.done,callback:function(s){t.$set(e,"done",s)},expression:"task.done"}})],1),i("v-spacer"),i("v-scroll-x-transition",[e.done?i("v-icon",{attrs:{color:"success"}},[t._v("mdi-check")]):t._e()],1)],1),i("div",{class:[e.assigntoperson]},[i("div",{staticClass:"assignedto d-flex ml-7 pl-2"},t._l(e.tagbtns,(function(e){return i("div",{key:e.tagbtntitle,staticClass:"mr-2",attrs:{tagbtn:e}},[i("v-chip",t._g({attrs:{pill:""}}),[i("v-avatar",{attrs:{left:""}},[i("v-img",{attrs:{src:s("5a8f")("./"+[e.userimg])}})],1),t._v(" "+t._s(e.username)+" ")],1)],1)})),0)]),i("span",{staticClass:"ml-10 blue-grey--text text--lighten-2",class:[e.date]},[t._v(t._s(e.datetext))])])]}))],2)],1):t._e()],1)],1)},a=[],n=(s("2c78"),{name:"TheTodoList",data:function(){return{tasks:[{done:!1,text:"Schedule meeting with",assigntoperson:"display-block",tagbtns:[{userimg:"1.jpg",username:"Steave"},{userimg:"2.jpg",username:"Jessica"}],badgedisplay:"display-none",badgebg:"",badgetext:""},{done:!1,text:"Give Purchase report to",badgedisplay:"display-block",badgebg:"error",badgetext:"Today",assigntoperson:"display-block",tagbtns:[{userimg:"4.jpg",username:"John"}]},{done:!1,text:"Book flight for holiday",badgedisplay:"display-none",assigntoperson:"display-none",date:"display-block",datetext:"26 jun 2017"},{done:!1,text:"Forward all tasks",badgedisplay:"display-block",badgebg:"warning",badgetext:"2 Weeks",assigntoperson:"display-none",date:"display-block",datetext:"26 jun 2017"},{done:!1,text:"Send payment today",badgedisplay:"display-none",assigntoperson:"display-block",tagbtns:[{userimg:"1.jpg",username:"Steave"},{userimg:"2.jpg",username:"Jessica"}],date:"display-none"}],task:null}},computed:{completedTasks:function(){return this.tasks.filter((function(t){return t.done})).length},progress:function(){return this.completedTasks/this.tasks.length*100},remainingTasks:function(){return this.tasks.length-this.completedTasks}},methods:{create:function(){this.tasks.push({done:!1,text:this.task}),this.task=null}}}),r=n,l=(s("fee6"),s("c701")),o=s("7033"),c=s.n(o),h=s("cc74"),u=s("dbcd"),d=s("6e06"),p=s("b22a"),g=s("4959"),v=s("30b0"),m=s("a4cd"),f=s("d65c"),b=s("afe4"),y=s("046f"),k=s("8a89"),C=s("580c"),x=s("cc13"),S=s("ff00"),j=s("36c9"),_=s("a0cb"),V=Object(l["a"])(r,i,a,!1,null,"206d7ad8",null);e["default"]=V.exports;c()(V,{VAvatar:h["a"],VCard:u["a"],VCardText:d["c"],VCheckbox:p["a"],VChip:g["a"],VCol:v["a"],VDivider:m["a"],VFadeTransition:f["d"],VIcon:b["a"],VImg:y["a"],VListItem:k["a"],VListItemAction:C["a"],VProgressCircular:x["a"],VRow:S["a"],VScrollXTransition:f["f"],VSlideYTransition:f["j"],VSpacer:j["a"],VTextField:_["a"]})},ceec:function(t,e,s){t.exports=s.p+"img/1-default.8d409d88.jpg"},e350:function(t,e,s){t.exports=s.p+"img/profile.57e156c9.png"},e4a3:function(t,e,s){t.exports=s.p+"img/d5.60ed622c.jpg"},f175:function(t,e,s){t.exports=s.p+"img/d3.7c850108.jpg"},fa19:function(t,e,s){t.exports=s.p+"img/d2.2d553b44.jpg"},fee6:function(t,e,s){"use strict";s("b6ed")}}]);
//# sourceMappingURL=chunk-7599e976.c10044f2.js.map