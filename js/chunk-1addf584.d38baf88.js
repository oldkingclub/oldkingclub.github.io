(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1addf584"],{"0243":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v(" You can also place any content inside of the parallax. This allows you to use the parallax as a hero image. ")]),s("div",{staticClass:"mt-4"},[s("v-parallax",{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("h1",{staticClass:"display-1 font-weight-thin mb-4"},[t._v("Vuetify.js")]),s("h4",{staticClass:"subheading"},[t._v("Build your application today!")])])],1)],1)],1)],1)},a=[],n={name:"ParallexContent",data:function(){return{}}},l=n,r=s("c701"),o=s("7033"),h=s.n(o),c=s("30b0"),d=s("d9e4"),p=s("2fe4"),u=s("ff00"),g=Object(r["a"])(l,i,a,!1,null,null,null);e["default"]=g.exports;h()(g,{VCol:c["a"],VListItemSubtitle:d["c"],VParallax:p["a"],VRow:u["a"]})},"2fe4":function(t,e,s){"use strict";s("889e");var i=s("a593"),a=i["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),n=s("5ab5");const l=Object(n["a"])(a);e["a"]=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[s,i])}})},"889e":function(t,e,s){}}]);
//# sourceMappingURL=chunk-1addf584.d38baf88.js.map