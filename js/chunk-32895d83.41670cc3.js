(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32895d83"],{"802e":function(t,e,s){},eeec:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-snackbar",{attrs:{bottom:"bottom"===t.y,color:t.msg_color,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.msg_timeout,top:"top"===t.y,vertical:"vertical"===t.mode},model:{value:t.msg_needshow,callback:function(e){t.msg_needshow=e},expression:"msg_needshow"}},[t._v(" "+t._s(t.msg_text)+" "),s("v-btn",{attrs:{dark:"",text:""},on:{click:t.close_snarckbar}},[t._v(" 关闭 ")])],1)},o=[],a=s("84b5"),n={data:function(){return{x:null,y:"top",top:!1,right:!0,bottom:!0,left:!1,mode:""}},computed:{msg_color:Object(a["b"])("msglog/msg_color"),msg_text:Object(a["b"])("msglog/msg_text"),msg_timeout:Object(a["d"])("msglog/msg_timeout"),msg_needshow:Object(a["d"])("msglog/msg_needshow")},methods:{close_snarckbar:function(){this.$store.dispatch("msglog/update_msg_needshow",!1)}}},c=n,r=s("4023"),l=s("aeb5"),h=s.n(l),u=s("6178"),m=(s("802e"),s("0aef")),d=s("c015"),g=s("3d6f"),p=s("71ea"),v=s("146e"),b=s("5184"),k=s("7f0b"),_=s("53fb"),f=Object(b["a"])(m["a"],d["a"],p["a"],Object(v["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:g["a"].options.computed.isDark.call(this)},styles(){if(this.absolute)return{};const{bar:t,bottom:e,footer:s,insetFooter:i,left:o,right:a,top:n}=this.$vuetify.application;return{paddingBottom:Object(k["g"])(e+s+i),paddingLeft:this.app?Object(k["g"])(o):void 0,paddingRight:this.app?Object(k["g"])(a):void 0,paddingTop:Object(k["g"])(t+n)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(_["e"])("auto-height",this),0==this.timeout&&Object(_["d"])('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(k["r"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(k["r"])(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:m["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),w=Object(r["a"])(c,i,o,!1,null,null,null);e["default"]=w.exports;h()(w,{VBtn:u["a"],VSnackbar:f})}}]);
//# sourceMappingURL=chunk-32895d83.41670cc3.js.map