(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46d1cb54"],{4959:function(t,e,i){"use strict";i("5a82");var s=i("5ab5"),a=i("d65c"),l=i("a474"),o=i("9a87"),n=i("035d"),c=i("0765"),r=i("f9d0"),h=i("9d74"),p=i("b09d"),u=i("2681");e["a"]=Object(s["a"])(o["a"],p["a"],h["a"],c["a"],Object(n["a"])("chipGroup"),Object(r["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(l["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose(){return this.$createElement(l["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}})},"5a82":function(t,e,i){},be4b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" Similar to other inputs, you can use the "),i("span",{staticClass:"grey--text text--darken-4 font-weight-bold"},[t._v("rules")]),t._v(" prop to can create your own custom validation parameters. ")]),i("div",{staticClass:"mt-4"},[i("v-file-input",{attrs:{rules:t.rules,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"}})],1)],1)},a=[],l={name:"FileInputsValidation",data:function(){return{rules:[function(t){return!t||t.size<2e6||"Avatar size should be less than 2 MB!"}]}}},o=l,n=i("c701"),c=i("7033"),r=i.n(c),h=i("7358"),p=i("d9e4"),u=Object(n["a"])(o,s,a,!1,null,null,null);e["default"]=u.exports;r()(u,{VFileInput:h["a"],VListItemSubtitle:p["c"]})}}]);
//# sourceMappingURL=chunk-46d1cb54.dd59932f.js.map