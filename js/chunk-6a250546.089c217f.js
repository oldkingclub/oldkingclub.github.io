(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a250546"],{"6e06":function(e,s,t){"use strict";t.d(s,"a",(function(){return a})),t.d(s,"b",(function(){return c})),t.d(s,"c",(function(){return r}));var n=t("dbcd"),o=t("5a4f");const a=Object(o["i"])("v-card__actions"),i=Object(o["i"])("v-card__subtitle"),c=Object(o["i"])("v-card__text"),r=Object(o["i"])("v-card__title");n["a"]},cd00:function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-card",[t("v-card-text",[t("v-card-title",[t("span",[e._v("更新运行中的交易对参数")])]),t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[t("span",[e._v("策略:"+e._s(e.filename))])]),t("v-col",{attrs:{cols:"12",xs:"6",sm:"6",lg:"4"}},[t("span",[e._v("已买金额:"+e._s(e.buymoney))])]),t("v-col",{attrs:{cols:"12",xs:"6",sm:"6",lg:"4"}},[t("span",[e._v("已买数量:"+e._s(e.buyamount))])]),t("v-col",{attrs:{cols:"12",xs:"6",sm:"6",lg:"4"}},[t("span",[e._v("买入均价:"+e._s(e.buyavgprice))])]),t("v-col",{attrs:{cols:"12",xs:"6",sm:"6",lg:"4"}},[t("span",[e._v("当前价值:"+e._s(e.currencyasset))])]),t("v-col",{attrs:{cols:"12",xs:"6",sm:"6",lg:"4"}},[t("span",[e._v("当前盈利:"+e._s(e.currencyprofit))])]),t("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[t("v-text-field",{attrs:{outlined:"","hide-details":"",label:"下单周期(分钟)"},model:{value:e.sepminutes,callback:function(s){e.sepminutes=s},expression:"sepminutes"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[t("v-text-field",{attrs:{outlined:"","hide-details":"",label:"买入金额(元)"},model:{value:e.onehandmoney,callback:function(s){e.onehandmoney=s},expression:"onehandmoney"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[t("v-text-field",{attrs:{outlined:"","hide-details":"",label:"最大买入金额(元)"},model:{value:e.maxmoneyonecycle,callback:function(s){e.maxmoneyonecycle=s},expression:"maxmoneyonecycle"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[t("v-text-field",{attrs:{outlined:"","hide-details":"",disabled:"",label:"最大下跌幅度"},model:{value:e.maxdownratio,callback:function(s){e.maxdownratio=s},expression:"maxdownratio"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[t("v-text-field",{attrs:{outlined:"","hide-details":"",label:"刷新间隔(秒)"},model:{value:e.sepseconds,callback:function(s){e.sepseconds=s},expression:"sepseconds"}})],1)],1)],1),t("v-card-actions",[t("v-btn",{attrs:{color:"success",dark:""},on:{click:e.update}},[e._v("更新")])],1)],1)],1)},o=[],a=(t("4798"),t("ca39")),i=t("84b5"),c={data:function(){return{sepminutes:1440,onehandmoney:15,maxmoneyonecycle:50,sepseconds:5,ExName:"WKJ"}},computed:{upexconfig:Object(i["b"])("exbot/updtmconfig"),maxdownratio:function(){return this.upexconfig.maxdownratio},tarCoin:function(){return this.upexconfig.tarcoin},baseCoin:function(){return this.upexconfig.basecoin},buyamount:function(){return this.upexconfig.buyamount},buymoney:function(){return this.upexconfig.buymoney},buyavgprice:function(){return this.upexconfig.buyavgprice},currencyasset:function(){return this.upexconfig.currencyasset},currencyprofit:function(){return this.upexconfig.currencyprofit},filename:function(){return this.upexconfig.filename},email:Object(i["b"])("user/email"),isLogin:Object(i["b"])("user/islogin"),username:Object(i["b"])("user/username"),exbotisexpire:Object(i["b"])("user/exbotisexpire")},methods:{update:function(){var e=this;if(this.isLogin)if(this.exbotisexpire)this.$store.dispatch("msglog/push_msg",{message:"软件已过期，请联系管理员",type:"error"});else{var s={username:this.username,exname:this.ExName,tarcoin:this.tarCoin,basecoin:this.baseCoin,sepminutes:Number(this.sepminutes),onehandmoney:Number(this.onehandmoney),maxmoneyonecycle:Number(this.maxmoneyonecycle),maxdownratio:Number(this.maxdownratio),notifyemail:this.email,sepseconds:Number(this.sepseconds),filename:this.filename};a["x"](s).then((function(s){200==s.code?e.$store.dispatch("msglog/push_msg",{message:s.msg,type:"success"}):e.$store.dispatch("msglog/push_msg",{message:s.msg+s.error,type:"error"})}))}else this.$store.dispatch("msglog/push_msg",{message:"用户未登陆，请登陆后重试",type:"error"})}}},r=c,l=t("c701"),u=t("7033"),m=t.n(u),d=t("fd3f"),p=t("dbcd"),b=t("6e06"),f=t("30b0"),x=t("a93b"),h=t("ff00"),v=t("a0cb"),g=Object(l["a"])(r,n,o,!1,null,null,null);s["default"]=g.exports;m()(g,{VBtn:d["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:f["a"],VContainer:x["a"],VRow:h["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-6a250546.089c217f.js.map