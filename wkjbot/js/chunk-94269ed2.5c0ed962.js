(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94269ed2"],{"096c":function(t,e,i){},"0fbc":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" A window bar with window controls and status info. ")]),i("div",{staticClass:"mt-4"},[i("v-system-bar",{attrs:{window:"",dark:""}},[i("v-icon",[t._v("mdi-message")]),i("span",[t._v("10 unread messages")]),i("v-spacer"),i("v-icon",[t._v("mdi-minus")]),i("v-icon",[t._v("mdi-checkbox-blank-outline")]),i("v-icon",[t._v("mdi-close")])],1)],1)],1)},a=[],n={name:"SystembarWindowBar",data:function(){return{}}},o=n,c=i("c701"),r=i("7033"),h=i.n(r),p=i("afe4"),l=i("d9e4"),d=i("36c9"),u=i("7c16"),m=Object(c["a"])(o,s,a,!1,null,null,null);e["default"]=m.exports;h()(m,{VIcon:p["a"],VListItemSubtitle:l["c"],VSpacer:d["a"],VSystemBar:u["a"]})},6301:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("f99d"),a=i("5ab5");function n(t,e=[]){return Object(a["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"7c16":function(t,e,i){"use strict";i("096c");var s=i("6301"),a=i("9a87"),n=i("0765"),o=i("5ab5"),c=i("5a4f");e["a"]=Object(o["a"])(Object(s["a"])("bar",["height","window"]),a["a"],n["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes(){return{"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window,...this.themeClasses}},computedHeight(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles(){return{height:Object(c["h"])(this.computedHeight)}}},methods:{updateApplication(){return this.$el?this.$el.clientHeight:this.computedHeight}},render(t){const e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(c["t"])(this))}})}}]);
//# sourceMappingURL=chunk-94269ed2.5c0ed962.js.map