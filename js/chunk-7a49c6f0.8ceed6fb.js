(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a49c6f0"],{a93b:function(e,n,t){"use strict";t("a3b6"),t("9658");var i=t("a593");function a(e){return i["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:t,data:i,children:a}){i.staticClass=`${e} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const e=Object.keys(r).filter(e=>{if("slot"===e)return!1;const n=r[e];return e.startsWith("data-")?(i.attrs[e]=n,!1):n||"string"===typeof n});e.length&&(i.staticClass+=" "+e.join(" "))}return t.id&&(i.domProps=i.domProps||{},i.domProps.id=t.id),n(t.tag,i,a)}})}var r=t("39c3");n["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:n,data:t,children:i}){let a;const{attrs:s}=t;return s&&(t.attrs={},a=Object.keys(s).filter(e=>{if("slot"===e)return!1;const n=s[e];return e.startsWith("data-")?(t.attrs[e]=n,!1):n||"string"===typeof n})),n.id&&(t.domProps=t.domProps||{},t.domProps.id=n.id),e(n.tag,Object(r["a"])(t,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),i)}})},de87:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"down-top-padding",attrs:{fluid:""}},[t("BaseBreadcrumb",{attrs:{title:e.page.title,icon:e.page.icon,breadcrumbs:e.breadcrumbs}}),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12"}},[t("BaseCard",{attrs:{heading:"Timeline - Small dots"}},[t("TimelineSmallDots")],1),t("BaseCard",{attrs:{heading:"Timeline - Icon dots"}},[t("TimelineIconDots")],1),t("BaseCard",{attrs:{heading:"Timeline - Reverse direction"}},[t("TimelineReverseDir")],1),t("BaseCard",{attrs:{heading:"Timeline - Timeline card"}},[t("TimelineCard")],1),t("BaseCard",{attrs:{heading:"Timeline - Dense alert"}},[t("TimelineDenseAlert")],1),t("BaseCard",{attrs:{heading:"Timeline - Opposite slot"}},[t("TimelineOppositeSlot")],1),t("BaseCard",{attrs:{heading:"Timeline - Avatar dots"}},[t("TimelineAvatarDots")],1),t("BaseCard",{attrs:{heading:"Timeline - Colored dots"}},[t("TimelineColouredDots")],1),t("BaseCard",{attrs:{heading:"Timeline - Advanced"}},[t("TimelineAdvanced")],1)],1)],1)],1)},a=[],r=(t("845c"),{name:"Timeline",data:function(){return{page:{title:"Timeline"},breadcrumbs:[{text:"UI Components",disabled:!1,to:"#"},{text:"Timeline",disabled:!0}]}},components:{TimelineSmallDots:function(){return t.e("chunk-0822867a").then(t.bind(null,"33c2"))},TimelineIconDots:function(){return t.e("chunk-35280e02").then(t.bind(null,"e4fa"))},TimelineReverseDir:function(){return t.e("chunk-2edd8cee").then(t.bind(null,"2b88"))},TimelineCard:function(){return t.e("chunk-7ca737bd").then(t.bind(null,"56f1"))},TimelineDenseAlert:function(){return t.e("chunk-dd485092").then(t.bind(null,"3cd7"))},TimelineOppositeSlot:function(){return t.e("chunk-7456bfef").then(t.bind(null,"ead0"))},TimelineAvatarDots:function(){return t.e("chunk-19530068").then(t.bind(null,"43ac"))},TimelineColouredDots:function(){return t.e("chunk-1ecfc38c").then(t.bind(null,"55c2"))},TimelineAdvanced:function(){return Promise.all([t.e("chunk-7b54f9ef"),t.e("chunk-3f4e7667")]).then(t.bind(null,"79d3"))}}}),s=r,l=t("c701"),d=t("7033"),o=t.n(d),c=t("30b0"),u=t("a93b"),m=t("ff00"),f=Object(l["a"])(s,i,a,!1,null,null,null);n["default"]=f.exports;o()(f,{VCol:c["a"],VContainer:u["a"],VRow:m["a"]})}}]);
//# sourceMappingURL=chunk-7a49c6f0.8ceed6fb.js.map