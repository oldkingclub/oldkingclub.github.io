(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeb771f6"],{"096c":function(t,e,i){},6301:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("f99d"),a=i("5ab5");function r(t,e=[]){return Object(a["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"7c16":function(t,e,i){"use strict";i("096c");var s=i("6301"),a=i("9a87"),r=i("0765"),n=i("5ab5"),o=i("5a4f");e["a"]=Object(n["a"])(Object(s["a"])("bar",["height","window"]),a["a"],r["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes(){return{"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window,...this.themeClasses}},computedHeight(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles(){return{height:Object(o["h"])(this.computedHeight)}}},methods:{updateApplication(){return this.$el?this.$el.clientHeight:this.computedHeight}},render(t){const e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(o["t"])(this))}})},"919f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" You can optionally change the color of the "),i("code",[t._v("v-system-bar")]),t._v(" by using the "),i("code",[t._v("color")]),t._v(" prop. ")]),i("div",{staticClass:"mt-4"},[i("v-system-bar",{attrs:{dark:"",color:"primary"}},[i("v-spacer"),i("v-icon",[t._v("mdi-wifi-strength-4")]),i("v-icon",[t._v("mdi-signal-cellular-outline")]),i("v-icon",[t._v("mdi-battery")]),i("span",[t._v("12:30")])],1),i("br"),i("v-system-bar",{attrs:{dark:"",color:"success"}},[i("v-spacer"),i("v-icon",[t._v("mdi-wifi-strength-4")]),i("v-icon",[t._v("mdi-signal-cellular-outline")]),i("v-icon",[t._v("mdi-battery")]),i("span",[t._v("12:30")])],1),i("br"),i("v-system-bar",{attrs:{dark:"",color:"warning"}},[i("v-spacer"),i("v-icon",[t._v("mdi-wifi-strength-4")]),i("v-icon",[t._v("mdi-signal-cellular-outline")]),i("v-icon",[t._v("mdi-battery")]),i("span",[t._v("12:30")])],1)],1)],1)},a=[],r={name:"SystembarColoredBar",data:function(){return{}}},n=r,o=i("c701"),c=i("7033"),l=i.n(c),p=i("afe4"),h=i("d9e4"),u=i("36c9"),d=i("7c16"),v=Object(o["a"])(n,s,a,!1,null,null,null);e["default"]=v.exports;l()(v,{VIcon:p["a"],VListItemSubtitle:h["c"],VSpacer:u["a"],VSystemBar:d["a"]})}}]);
//# sourceMappingURL=chunk-aeb771f6.d2990140.js.map