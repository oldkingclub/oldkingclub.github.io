(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0882efce"],{"5ec9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("单井平均产油/注水能力")]),a("v-spacer"),a("v-btn",{attrs:{color:"success"},on:{click:t.update_line_data}},[t._v("更新曲线")])],1),a("v-divider"),a("div",{ref:"ProdInjeAvgElement",staticClass:"ProdInjeAvgClass"},[a("VegaChartView",{key:t.chartId,attrs:{id:t.chartId,chartId:t.chartIdStr,chartSource:t.prodInjeAvgData.prodInjeAvgData,chartNum:t.chartNum}})],1)],1)},r=[],c=(a("233a"),a("845c"),a("72fb"),a("84b5")),o={prodInjeAvgData:{$schema:"https://vega.github.io/schema/vega-lite/v4.17.0.json",data:{name:"prodInjeAvgData"},height:500,datasets:{prodInjeAvgData:[{COLOR:"2011",X:"2012-6-1",Y:323},{COLOR:"2011",X:"2012-7-1",Y:919}]},encoding:{color:{field:"COLOR",title:"图例",type:"nominal",scale:{domain:["DOILAVG","DIWATERAVG"],range:["red","blue"]}},x:{field:"X",title:"时间",type:"temporal"},y:{field:"Y",title:"产量水平(方/天)",type:"quantitative"}},mark:"line",selection:{selector008:{bind:"scales",encodings:["x","y"],type:"interval"}}}},i=a("ca39"),d={name:"ProdInjeAvg",data:function(){return{prodInjeAvgData:o,chartNum:0,title:"",titles:[{text:"产油量",value:"MOIL"},{text:"产液量",value:"MLIQUID"},{text:"产水量",value:"MWATER"}],chartIdStr:"#ProdInjeAvgLine",chartId:"ProdInjeAvgLine"}},computed:{screenWidth:Object(c["b"])("app/screenWidth"),blockname:Object(c["b"])("peproject/blockname")},methods:{update_line_data:function(){var t=this;i["B"]({blockname:this.blockname,collection:"waterreportmonth",title:"MIWATER"}).then((function(e){200==e.code?(t.prodInjeAvgData.prodInjeAvgData.datasets.prodInjeAvgData=e.data,t.chart()):(console.log("返回错误",e.code),t.$store.dispatch("msglog/push_msg",{message:e.msg+e.error,type:"error"},{root:!0}))}))},setChartId:function(){var t=Math.random().toString(36).slice(-8);this.chartId=t,this.chartIdStr="#"+t,console.log("ProdInjeAvgLine ",this.chartId,this.chartIdStr)},chart:function(){console.log("宽度:",this.$refs.ProdInjeAvgElement.clientWidth),this.prodInjeAvgData.prodInjeAvgData.width=this.$refs.ProdInjeAvgElement.clientWidth-150,this.chartNum=this.chartNum+1}},watch:{screenWidth:function(){this.setChartId(),setTimeout(this.chart,2e3)}},components:{VegaChartView:function(){return a.e("chunk-04c0a60a").then(a.bind(null,"e942"))}}},s=d,l=(a("ff2d"),a("c701")),h=a("7033"),u=a.n(h),v=a("fd3f"),g=a("dbcd"),p=a("a4cd"),I=a("36c9"),m=a("331e"),f=a("5e30"),b=Object(l["a"])(s,n,r,!1,null,null,null);e["default"]=b.exports;u()(b,{VBtn:v["a"],VCard:g["a"],VDivider:p["a"],VSpacer:I["a"],VToolbar:m["a"],VToolbarTitle:f["a"]})},b5c7:function(t,e,a){},ff2d:function(t,e,a){"use strict";a("b5c7")}}]);
//# sourceMappingURL=chunk-0882efce.9b1f896f.js.map