(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-168d9d2d"],{1895:function(t,e,i){"use strict";var a=i("a593");e["a"]=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},4717:function(t,e,i){},6301:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var a=i("f99d"),s=i("5ab5");function o(t,e=[]){return Object(s["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},aa0f:function(t,e,i){},b7a4:function(t,e,i){"use strict";i("4717");var a=i("0765"),s=i("5ab5");e["a"]=Object(s["a"])(a["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},c333:function(t,e,i){"use strict";i("aa0f");var a=i("f492"),s=i("6301"),o=i("1895"),r=i("5ab5"),n=i("5a4f");e["a"]=Object(r["a"])(a["a"],Object(s["a"])("footer",["height","inset"]),o["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...a["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...a["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(n["h"])(t),left:Object(n["h"])(this.computedLeft),right:Object(n["h"])(this.computedRight),bottom:Object(n["h"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},c9b9:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" A subheader can add context to what a user is looking at. ")]),i("div",{staticClass:"mt-4"},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[i("v-card",[i("v-toolbar",{attrs:{color:"white",flat:""}},[i("v-btn",{attrs:{icon:"",light:""}},[i("v-icon",{attrs:{color:"grey darken-2"}},[t._v("mdi-arrow-left")])],1),i("v-toolbar-title",{staticClass:"grey--text text--darken-4"},[t._v("Albums")]),i("v-spacer"),i("v-btn",{attrs:{icon:"",light:""}},[i("v-icon",{attrs:{color:"grey darken-2"}},[t._v("mdi-magnify")])],1)],1),i("v-subheader",[t._v("May")]),i("v-container",{attrs:{fluid:""}},[i("v-row",t._l(6,(function(t){return i("v-col",{key:t,attrs:{cols:"4"}},[i("img",{staticClass:"image",attrs:{src:"https://randomuser.me/api/portraits/men/"+(t+20)+".jpg",alt:"lorem",height:"100%",width:"100%"}})])})),1)],1),i("v-subheader",[t._v("June")]),i("v-container",{attrs:{fluid:""}},[i("v-row",t._l(6,(function(t){return i("v-col",{key:t,attrs:{cols:"4"}},[i("img",{staticClass:"image",attrs:{src:"https://randomuser.me/api/portraits/women/"+(t+5)+".jpg",alt:"lorem",height:"100%",width:"100%"}})])})),1)],1),i("v-footer",{staticClass:"mt-12"})],1)],1)],1)],1)],1)},s=[],o={name:"SubheadersGrid",data:function(){return{}}},r=o,n=i("c701"),l=i("7033"),c=i.n(l),p=i("fd3f"),h=i("dbcd"),d=i("30b0"),u=i("a93b"),f=i("c333"),v=i("afe4"),m=i("d9e4"),b=i("ff00"),g=i("36c9"),y=i("b7a4"),w=i("331e"),$=i("5e30"),x=Object(n["a"])(r,a,s,!1,null,null,null);e["default"]=x.exports;c()(x,{VBtn:p["a"],VCard:h["a"],VCol:d["a"],VContainer:u["a"],VFooter:f["a"],VIcon:v["a"],VListItemSubtitle:m["c"],VRow:b["a"],VSpacer:g["a"],VSubheader:y["a"],VToolbar:w["a"],VToolbarTitle:$["b"]})}}]);
//# sourceMappingURL=chunk-168d9d2d.6cb6fc4e.js.map