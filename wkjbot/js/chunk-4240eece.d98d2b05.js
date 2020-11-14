(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4240eece"],{"5c8f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[e._v(" The "),n("code",[e._v("v-edit-dialog")]),e._v(" component can be used for editing data directly within a "),n("code",[e._v("v-data-table")]),e._v(". You can block the closing of the "),n("code",[e._v("v-edit-dialog")]),e._v(" when clicked outside by adding the persistent prop. ")]),n("div",{staticClass:"mt-4"},[n("v-data-table",{staticClass:"border elevation-0",attrs:{headers:e.headers,items:e.desserts},scopedSlots:e._u([{key:"item.name",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.name},on:{"update:returnValue":function(n){return e.$set(t.item,"name",n)},"update:return-value":function(n){return e.$set(t.item,"name",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit","single-line":"",counter:""},model:{value:t.item.name,callback:function(n){e.$set(t.item,"name",n)},expression:"props.item.name"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(t.item.name)+" ")])]}},{key:"item.iron",fn:function(t){return[n("v-edit-dialog",{attrs:{"return-value":t.item.iron,large:"",persistent:""},on:{"update:returnValue":function(n){return e.$set(t.item,"iron",n)},"update:return-value":function(n){return e.$set(t.item,"iron",n)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.iron,callback:function(n){e.$set(t.item,"iron",n)},expression:"props.item.iron"}})]},proxy:!0}],null,!0)},[n("div",[e._v(e._s(t.item.iron))])])]}}])}),n("v-snackbar",{attrs:{timeout:3e3,color:e.snackColor},model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v(" "+e._s(e.snackText)+" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.snack=!1}}},[e._v("Close")])],1)],1)],1)},s=[],i={name:"DatatablesContentEditing",data:function(){return{snack:!1,snackColor:"",snackText:"",max25chars:function(e){return e.length<=25||"Input too long!"},pagination:{},headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}},methods:{save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")}}},o=i,r=n("c701"),c=n("7033"),l=n.n(c),u=n("fd3f"),d=n("f017"),v=(n("6bff"),n("cbdf")),m=n("0765"),h=n("5a4f"),p=n("ff02"),f=n("f60a"),g=n("5ab5"),b=Object(g["a"])(v["a"],m["a"]).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data(){return{isActive:!1}},watch:{isActive(e){e?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel(){this.isActive=!1,this.$emit("cancel")},focus(){const e=this.$refs.content.querySelector("input");e&&e.focus()},genButton(e,t){return this.$createElement(p["a"],{props:{text:!0,color:"primary",light:!0},on:{click:e}},t)},genActions(){return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton(()=>{this.save(this.returnValue),this.$emit("save")},this.saveText)])},genContent(){return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:e=>{e.keyCode===h["z"].esc&&this.cancel(),e.keyCode===h["z"].enter&&(this.save(this.returnValue),this.$emit("save"))}},ref:"content"},[this.$slots.input])}},render(e){return e(f["a"],{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:e=>this.isActive=e},scopedSlots:{activator:({on:t})=>e("div",{staticClass:"v-small-dialog__activator",on:t},[e("span",{staticClass:"v-small-dialog__activator__content"},this.$slots.default)])}},[this.genContent(),this.large?this.genActions():null])}}),k=n("d9e4"),x=n("384a"),_=n("a0cb"),C=Object(r["a"])(o,a,s,!1,null,null,null);t["default"]=C.exports;l()(C,{VBtn:u["a"],VDataTable:d["a"],VEditDialog:b,VListItemSubtitle:k["c"],VSnackbar:x["a"],VTextField:_["a"]})},"6bff":function(e,t,n){}}]);
//# sourceMappingURL=chunk-4240eece.d98d2b05.js.map