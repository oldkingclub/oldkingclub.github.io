(function(e){function t(t){for(var a,n,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],a=!0,n=1;n<o.length;n++){var c=o[n];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},n={app:0},r={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0db312":"fd35c14c","chunk-2fbda4c6":"6918d86a","chunk-614a2f4a":"ea6ec4f5","chunk-43add58b":"16f094fd","chunk-06404cc4":"52e52dbe","chunk-5b7ef5ca":"ea3b25c7","chunk-995d0970":"a9288336","chunk-a44cf5f8":"f7e195ee","chunk-adf42d36":"0495d051","chunk-d8df633c":"e04ec7a3","chunk-2d22e135":"305b81f0","chunk-c0912530":"26ee2b42","chunk-2d0b1db3":"323b9416","chunk-bc9e433e":"48d8ee8e","chunk-17894cec":"a4a3cc2a","chunk-32895d83":"41670cc3","chunk-412ae638":"3e0d03ec","chunk-b035edce":"ff0eca33","chunk-75dd71f0":"6265fcd8","chunk-adab517c":"83c4839b","chunk-9789c694":"4cb5a882"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={"chunk-2fbda4c6":1,"chunk-614a2f4a":1,"chunk-43add58b":1,"chunk-06404cc4":1,"chunk-5b7ef5ca":1,"chunk-995d0970":1,"chunk-a44cf5f8":1,"chunk-adf42d36":1,"chunk-d8df633c":1,"chunk-c0912530":1,"chunk-bc9e433e":1,"chunk-17894cec":1,"chunk-32895d83":1,"chunk-412ae638":1,"chunk-b035edce":1,"chunk-75dd71f0":1,"chunk-adab517c":1,"chunk-9789c694":1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0db312":"31d6cfe0","chunk-2fbda4c6":"7d421826","chunk-614a2f4a":"5e90a3ab","chunk-43add58b":"1d97b6a5","chunk-06404cc4":"b54308be","chunk-5b7ef5ca":"0cd78b2d","chunk-995d0970":"bcaac768","chunk-a44cf5f8":"3f701bcf","chunk-adf42d36":"68e6a77c","chunk-d8df633c":"d1c8ee93","chunk-2d22e135":"31d6cfe0","chunk-c0912530":"3f701bcf","chunk-2d0b1db3":"31d6cfe0","chunk-bc9e433e":"f60fcc0d","chunk-17894cec":"f97aaadc","chunk-32895d83":"bd9dffc5","chunk-412ae638":"7d887a01","chunk-b035edce":"9d21c0d7","chunk-75dd71f0":"0f354456","chunk-adab517c":"b4949792","chunk-9789c694":"0f354456"}[e]+".css",r=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],f.parentNode.removeChild(f),o(s)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,o){a=r[e]=[t,o]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var o=r[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"2ad0":function(e,t){var o={};function a(){1==o.websocket.readyState&&o.websocket.send("PING")}function n(){(new Date).getTime()-o.lastHeartBeat>o.overtime&&(console.log((new Date).getTime(),o.lastHeartBeat,o.overtime),r())}function r(){o.websocket.close(),console.log(o.wsurl,"连接断开，正在尝试重新建立连接"),o.init(o.wsurl)}o.wsurl="ws://cdn.oldking.club:2086/v1/miner/ws",o.overtime=5e3,o.hartbeettime=1e3,o.onopen=function(e){console.log("连接成功",o.wsurl,e.data)},o.onmessage=function(e){console.log(o.wsurl,"收到消息",e.data)},o.onclose=function(e){console.log(o.wsurl,"连接关闭",e.data),r()},o.onerror=function(e){console.log("连接错误",o.wsurl,e.data)},o.close=function(){o.websocket.close()},o.init=function(e){this.wsUri=e,this.lastHeartBeat=(new Date).getTime(),this.overtime=o.overtime,o.lastHeartBeat=(new Date).getTime(),o.websocket=new WebSocket(o.wsUri),o.websocket.onopen=o.onopen,o.websocket.onclose=o.onclose,o.websocket.onmessage=function(e){o.lastHeartBeat=(new Date).getTime(),o.onmessage(e)},o.websocket.onerror=o.onerror,setInterval(n,o.overtime),setInterval(a,o.hartbeettime)},t.WebSocket=o},"2d70":function(e){e.exports=JSON.parse('{"daedal-pro":{"title":"Daedal Theme Pro","description":"Daedal — is a carefully crafted multi-purpose, responsive, and gorgeous theme that showcases a clean interface for a sharp user experience. Built with Vue CLI, it comes with all of the tools that you need to start developing your application right now.","src":"https://cdn.vuetifyjs.com/images/themes/daedal/daedal-hero.png","price":"$60","url":"https://store.vuetifyjs.com/product/daedal-responsive-multi-purpose-theme-pro","demoUrl":[["Pro Demo","https://daedal-pro.zeroskillz.now.sh"],["Free Demo","https://daedal-free.zeroskillz.now.sh"]]},"dashboard-pro":{"title":"Material Dashboard Pro","description":"Vuetify Material Dashboard PRO is a beautiful theme built over Vuetify, Vuex and Vuejs. Vuetify Material Dashboard PRO is the official Vuejs version of the Original Material Dashboard PRO.","src":"https://cdn.vuetifyjs.com/images/starter/vuetify-admin-dashboard-pro.jpg","price":"$79","url":"https://www.creative-tim.com/product/vuetify-material-dashboard-pro","demoUrl":["https://demos.creative-tim.com/vuetify-material-dashboard-pro/"],"query":"&partner=116160"},"material-kit":{"title":"Material Kit","description":"A complete set of Material Inspired themes built with Vuetify on top of Vue CLI.","src":"https://cdn.vuetifyjs.com/images/starter/vuetify-material-kit.png","price":"$55","url":"https://store.vuetifyjs.com/product/material-kit-theme","demoUrl":["https://material-kit.vuetifyjs.com"]},"alpha-theme":{"title":"Alpha Theme","description":"Complete theme experience including enhanced Vue CLI, full documentation, 5 custom components and much more!","src":"https://cdn.vuetifyjs.com/images/starter/vuetify-alpha-theme.png","price":"$25","url":"https://store.vuetifyjs.com/product/alpha-theme","demoUrl":[["Construction","https://alpha-construction.vuetifyjs.com"],["Creative","https://alpha-creative.vuetifyjs.com"],["SaaS","https://alpha-saas.vuetifyjs.com"],["Ecommerce","https://alpha-ecommerce.vuetifyjs.com"]]},"dashboard":{"title":"Material Dashboard Free","description":"Vuetify Material Dashboard is a beautiful resource built over Vuetify, Vuex and Vuejs. It will help you get started developing dashboards in no time.","src":"https://cdn.vuetifyjs.com/images/starter/vuetify-admin-dashboard.jpg","free":true,"url":"https://www.creative-tim.com/product/vuetify-material-dashboard","demoUrl":["https://demos.creative-tim.com/vuetify-material-dashboard/#/dashboard"],"query":"&partner=116160"},"freelance":{"title":"Freelancer","description":"A single page Material inspired theme for Freelancers.","src":"https://cdn.vuetifyjs.com/images/starter/freelancer.png","free":true,"url":"https://github.com/vuetifyjs/theme-freelancer","demoUrl":[]},"parallax":{"title":"Parallax","description":"This beautiful single page parallax is a great home page for any application.","src":"https://cdn.vuetifyjs.com/images/starter/parallax-2020-large.png","free":true,"url":"https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/themes/parallax-starter/index.html","demoUrl":["/themes/parallax-starter"]},"blog":{"title":"Blog","description":"A simple template that features a clean interface for creating a blog or blog-like application.","src":"https://cdn.vuetifyjs.com/images/starter/blog.png","free":true,"url":"https://github.com/vuetifyjs/theme-blog","demoUrl":["https://free-blog.vuetifyjs.com"]}}')},"56d7":function(e,t,o){"use strict";o.r(t);var a={};o.r(a),o.d(a,"app",(function(){return ve})),o.d(a,"drawer",(function(){return xe})),o.d(a,"snackbar",(function(){return Se})),o.d(a,"log",(function(){return Ae})),o.d(a,"db",(function(){return tt})),o.d(a,"user",(function(){return st})),o.d(a,"msglog",(function(){return dt}));o("a133"),o("ed0d"),o("f09c"),o("e117");var n=o("0261"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-fade-transition",{attrs:{mode:"out-in"}},[o("router-view")],1)},s=[],c={name:"App",data:function(){return{}}},i=c,l=o("4023"),u=o("aeb5"),d=o.n(u),f=o("d514"),p=Object(l["a"])(i,r,s,!1,null,null,null),m=p.exports;d()(p,{VFadeTransition:f["d"]});var h=o("1ac8");n["a"].use(h["a"]);var g=new h["a"]({}),b=o("3f11"),v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("home-app-bar"),o("home-drawer"),o("home-right-drawer"),o("home-View"),o("home-Fab")],1)},w=[],k=(o("e18c"),{name:"Home",components:{HomeAppBar:function(){return o.e("chunk-995d0970").then(o.bind(null,"1b64"))},HomeDrawer:function(){return Promise.all([o.e("chunk-d8df633c"),o.e("chunk-c0912530")]).then(o.bind(null,"4d70"))},HomeRightDrawer:function(){return Promise.all([o.e("chunk-d8df633c"),o.e("chunk-2d22e135")]).then(o.bind(null,"f9e1"))},HomeFab:function(){return o.e("chunk-2d0db312").then(o.bind(null,"6f8d"))},HomeView:function(){return o.e("chunk-adf42d36").then(o.bind(null,"0dfe"))}}}),y=k,_=o("1041"),x=Object(l["a"])(y,v,w,!1,null,null,null),j=x.exports;d()(x,{VApp:_["a"]});var O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-layout",{attrs:{"justify-center":""}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[e._v("用户登陆")])],1),o("v-card-text",[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-text-field",{attrs:{rules:e.usernameRules,label:"用户名",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),o("v-text-field",{attrs:{"append-icon":e.showpassword?"visibility":"visibility_off",rules:e.passwordRules,type:e.showpassword?"text":"password",label:"密码",required:""},on:{"click:append":function(t){e.showpassword=!e.showpassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.SubmitLogin}},[e._v("登陆 ")]),o("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.GoRegister}},[e._v("注册 ")]),o("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.GoForgetPassword}},[e._v("忘记密码 ")])],1)],1)],1)],1)},C=[],V={name:"Login",data:function(){return{valid:!0,showpassword:!1,username:"",usernameRules:[function(e){return!!e||"请输入用户名!"},function(e){return e&&e.length>=6||"用户名长度需大于6"}],password:"",passwordRules:[function(e){return!!e||"请输入密码!"},function(e){return e&&e.length>=6||"密码长度需大于6"}],piccode:"",piccodeRules:[function(e){return!!e||"请输入验证码!"}]}},methods:{SubmitLogin:function(){var e={username:this.username,password:this.password,piccode:this.piccode};console.log("触发登陆按钮，调用登陆API,参数",e),this.$store.dispatch("user/login",e)},GoRegister:function(){this.$store.dispatch("user/logout")},GoForgetPassword:function(){this.$store.dispatch("user/update_userinfo")}},computed:{}},T=V,P=o("6178"),R=o("1656"),S=o("818b"),L=o("9777"),D=o("11cf"),E=o("802c"),q=o("dad0"),A=o("2b7d"),M=o("68c5"),B=o("eb51"),F=Object(l["a"])(T,O,C,!1,null,null,null),$=F.exports;d()(F,{VBtn:P["a"],VCard:R["a"],VCardActions:S["a"],VCardText:S["b"],VContainer:L["a"],VForm:D["a"],VLayout:E["a"],VSpacer:q["a"],VTextField:A["a"],VToolbar:M["a"],VToolbarTitle:B["a"]});var U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("退出登陆")])},I=[],H={},z=H,N=Object(l["a"])(z,U,I,!1,null,null,null),G=N.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{"fill-height":""}},[o("v-layout",{attrs:{"justify-center":""}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[o("v-toolbar-title",[e._v("用户注册")])],1),o("v-card-text",[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-text-field",{attrs:{rules:e.usernameRules,label:"用户名",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),o("v-text-field",{attrs:{"append-icon":e.showpassword?"visibility":"visibility_off",rules:e.passwordRules,type:e.showpassword?"text":"password",label:"密码",required:""},on:{"click:append":function(t){e.showpassword=!e.showpassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),o("v-text-field",{attrs:{"append-icon":e.showpassword?"visibility":"visibility_off",rules:e.checkpasswordRules,type:e.showpassword?"text":"password",label:"再次输入密码",required:""},on:{"click:append":function(t){e.showpassword=!e.showpassword}},model:{value:e.checkpassword,callback:function(t){e.checkpassword=t},expression:"checkpassword"}}),o("v-text-field",{attrs:{rules:e.emailRules,label:"邮箱",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),o("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.SendEmailCode}},[e._v("发送验证码")]),o("v-text-field",{attrs:{rules:e.emailcodeRules,label:"邮箱验证码",required:""},model:{value:e.emailcode,callback:function(t){e.emailcode=t},expression:"emailcode"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.SubmitRegister}},[e._v("注册 ")]),o("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.GoLogin}},[e._v("已有账号>>登陆 ")])],1)],1)],1)],1)},W=[],X=o("2ad0"),Y={name:"Register",data:function(){return{valid:!0,showpassword:!1,username:"",usernameRules:[function(e){return!!e||"请输入用户名!"},function(e){return e&&e.length>=6||"用户名长度需大于6"}],password:"",passwordRules:[function(e){return!!e||"请输入密码!"},function(e){return e&&e.length>=6||"密码长度需大于6"}],checkpassword:"",checkpasswordRules:[function(e){return!!e||"请输入密码!"}],email:"",emailRules:[function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"请输入正确的邮箱"}],emailcode:"",emailcodeRules:[function(e){return!!e||"请输入邮箱验证码!"}]}},methods:{GoLogin:function(){this.$router.resolve({name:"Login"})},SubmitRegister:function(){},SendEmailCode:function(){X["WebSocket"].init("wss://cdn.oldking.club:2096/v1/wsapi")}},computed:{}},K=Y,Q=Object(l["a"])(K,J,W,!1,null,null,null),Z=Q.exports;d()(Q,{VBtn:P["a"],VCard:R["a"],VCardActions:S["a"],VCardText:S["b"],VContainer:L["a"],VForm:D["a"],VLayout:E["a"],VSpacer:q["a"],VTextField:A["a"],VToolbar:M["a"],VToolbarTitle:B["a"]});var ee=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("collection-filter")],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("div",[o("extend-table")],1)])],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("div",[o("filter-group")],1)])],1),o("v-divider")],1)},te=[],oe={components:{CollectionFilter:function(){return Promise.all([o.e("chunk-2fbda4c6"),o.e("chunk-614a2f4a"),o.e("chunk-43add58b"),o.e("chunk-5b7ef5ca")]).then(o.bind(null,"059b"))},FilterGroup:function(){return o.e("chunk-a44cf5f8").then(o.bind(null,"b13f"))},ExtendTable:function(){return Promise.all([o.e("chunk-2fbda4c6"),o.e("chunk-614a2f4a"),o.e("chunk-43add58b"),o.e("chunk-06404cc4")]).then(o.bind(null,"b30c"))}}},ae=oe,ne=o("700c"),re=o("3eea"),se=o("e1b6"),ce=Object(l["a"])(ae,ee,te,!1,null,null,null),ie=ce.exports;d()(ce,{VCol:ne["a"],VContainer:L["a"],VDivider:re["a"],VRow:se["a"]}),n["a"].use(b["a"]);var le=[{path:"/",name:"Home",component:j},{path:"/user",name:"User",component:j,children:[{path:"login",name:"Login",component:$},{path:"logout",name:"Logout",component:G},{path:"register",name:"register",component:Z}]},{path:"/db",name:"Db",component:j,children:[{path:"dbview",name:"CollectionView",component:ie}]}],ue=new b["a"]({mode:"history",base:"/",routes:le}),de=ue,fe=o("ae8c"),pe=o("84b5"),me={currentVersion:null,drawer:null,isLoading:!1,releases:[],showlog:!1},he=pe["c"].mutations(me),ge={},be={breadcrumbs:function(e,t,o){if(!o.route)return[];var a=o.route.path,n=a;return[{text:n,to:n?"/".concat(n):void 0,disabled:!n},{text:n,to:a,disabled:!0}]}},ve={namespaced:!0,state:me,mutations:he,actions:ge,getters:be},we={deprecatedIn:o("cb16"),links:o("d098"),namespace:null,newIn:o("6ed0"),page:null,structure:null,templates:o("2d70"),toc:[]},ke=pe["c"].mutations(we),ye={},_e={},xe={namespaced:!0,state:we,mutations:ke,actions:ye,getters:_e},je=(o("15d9"),o("9b6e")),Oe=function(e){return function(t,o){return t[e]=o}},Ce=Object.freeze({color:"success",href:!1,msg:"",text:"Close",to:!1,timeout:6e3}),Ve={snackbar:Object(je["a"])({},Ce),value:!1},Te={setSnackbar:function(e,t){e.snackbar=Object.assign({},{color:"success",href:!1,msg:"",text:"Close",to:!1,timeout:6e3},t)},setValue:Oe("value")},Pe={},Re={},Se={namespaced:!0,state:Ve,mutations:Te,actions:Pe,getters:Re},Le={logmsg:{count:0,type:"info",message:"初始消息",show:!1},progress:{value:0,count:0,show:!0}},De={},Ee={pull_log_msg:function(e){return e.logmsg},pull_progress:function(e){return e.progress}},qe={push_log_msg:function(e,t){t.count=e.logmsg.count+1,e.logmsg=t},push_progress:function(e,t){t.count=e.progress.count+1,e.progress=t}},Ae={state:Le,actions:De,getters:Ee,mutations:qe},Me=(o("9302"),o("2eeb"),o("33dc")),Be=o("82ae"),Fe=o.n(Be),$e="/api/web",Ue=1e4,Ie="",He=Fe.a.create({baseURL:$e,timeout:Ue});He.interceptors.request.use((function(e){return e.headers.token=Ie,e}),(function(e){return Promise.reject(e)})),He.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var ze=function(){return He.get("/loginstatus").then((function(e){return e.data}))},Ne=function(){return He.get("/userinfo").then((function(e){return e.data}))},Ge=function(e){return He.post("/emailcode",e).then((function(e){return e.data}))},Je=function(e){return He.post("/login",e).then((function(e){return e.data}))},We=function(){return He.get("/logout").then((function(e){return e.data}))},Xe=function(e){return He.get("/db/getcollectionconfig",{params:{collection:e}}).then((function(e){return e.data}))},Ye=function(e,t){return He.get("/db/".concat(e,"/many"),{params:t}).then((function(e){return e.data}))},Ke={collection:"",show_fields:[],col_config_map:{},query:"",all_filter_values:{},collection_config:{},col_page_data:{},items_per_page_options:[5,100,500,1e3]},Qe=pe["c"].mutations(Ke),Ze=Object(je["a"])(Object(je["a"])(Object(je["a"])(Object(je["a"])(Object(je["a"])(Object(je["a"])(Object(je["a"])({},pe["c"].actions("all_filter_values")),pe["c"].actions("query")),pe["c"].actions("collection")),pe["c"].actions("collection_config")),pe["c"].actions("col_config_map")),pe["c"].actions("col_page_data")),{},{update_query:function(e,t){var o,a=e.dispatch,n=et.field_types(Ke),r=[],s=Object(Me["a"])(t);try{for(s.s();!(o=s.n()).done;){var c=o.value,i=c["field"],l=n[i],u=c["value"],d=c["filter_type"];l&&r.push(i+":"+u+":"+l+":"+d)}}catch(f){s.e(f)}finally{s.f()}a("setQuery",r.join(","))},update_filter_values:function(e,t){var o=e.dispatch,a=t.all_filter_values;a[t.field]=[{text:"key1",value:"value1"},{text:"key2",value:"value2"}],o("setAll_filter_values",a)},update_col_page_data:function(e,t){var o=e.dispatch,a=t.page,n=t.itemsPerPage;Ye(Ke.collection,{query:Ke.query,page:a,pagesize:n}).then((function(e){200==e.code?(console.log("更新分页成功",e),o("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}),o("setCol_page_data",e)):(console.log("更新分页失败",e),o("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},update_collection_config:function(e,t){var o=e.dispatch;console.log("更新数据库配置",t),Xe(t).then((function(e){if(200==e.code){console.log("更新数据库配置成功",e),o("msglog/push_msg",{message:e.msg,type:"success"},{root:!0});var a=Ke.col_config_map;a[t]=e.data,o("setCol_config_map",a),o("setCollection_config",e.data)}else console.log("更新数据库配置失败",e),o("msglog/push_msg",{message:e.msg,type:"error"},{root:!0})}))},update_collection:function(e,t){var o=e.dispatch;o("setCollection",t),o("setQuery","");var a=Ke.col_config_map[t];a?o("setCollection_config",a):o("update_collection_config",t)}}),et=Object(je["a"])(Object(je["a"])({},pe["c"].getters(Ke)),{},{filter_fields:function(e){if(e.collection_config.field2label){var t=e.collection_config.field2label,o=e.collection_config.indexfields.map((function(e){return{text:t[e],value:e}}));return o}return[]},field_types:function(e){return e.collection_config.fieldtype},headers:function(e){if(e.collection_config.field2label){var t=e.collection_config.field2label;return e.collection_config.allfields.map((function(e){return{text:t[e],value:e}}))}return[]},tabledata:function(e){return e.col_page_data.data?e.col_page_data.data:[]},total_rows:function(e){return e.col_page_data.total},page_size:function(e){return e.col_page_data.pagesize}}),tt={namespaced:!0,state:Ke,mutations:Qe,actions:Ze,getters:et},ot=(o("fe8a"),{islogin:!1,userinfo:{}}),at=pe["c"].mutations(ot),nt=Object(je["a"])(Object(je["a"])(Object(je["a"])({},pe["c"].actions("userinfo")),pe["c"].actions("islogin")),{},{update_loginstatus:function(e){var t=e.dispatch;ze().then((function(e){200==e.code?(console.log("更新登陆状态成功",e),t("msglog/push_msg",{message:e.msg,type:"success"},{root:!0})):(console.log("更新登陆状态失败",e),t("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},update_userinfo:function(e){var t=e.dispatch;Ne().then((function(e){200==e.code?(console.log("更新用户信息成功",e),t("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}),t("setUserinfo",e.data)):(console.log("更新用户信息失败",e),t("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},login:function(e,t){var o=e.dispatch;Je(t).then((function(e){200==e.code?(console.log("登陆成功",e),o("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}),o("update_userinfo"),o("setIslogin",!0)):(console.log("登陆失败",e),o("msglog/push_msg",{message:e.msg,type:"error"},{root:!0}))}))},logout:function(e){var t=e.dispatch;We(),t("setIslogin",!1),t("setUserinfo",{})},send_email_code:function(e,t){var o=e.dispatch;Ge(t).then((function(e){200==e.code?o("msglog/push_msg",{message:e.msg,type:"success"},{root:!0}):o("msglog/push_msg",{message:e.msg,type:"error"},{root:!0})}))}}),rt={collections:function(e){if(e.userinfo.collectionauth){var t=Object.keys(e.userinfo.collectionauth),o=t.map((function(e){return{text:e,value:e}}));return o}return[]},username:function(e){return e.userinfo.username}},st={namespaced:!0,state:ot,mutations:at,actions:nt,getters:rt},ct=(o("77ad"),{logtext:"",max_log_lines:10,msg:{},msgs:[],msg_timeout:5e3,msg_needshow:!1}),it=pe["c"].mutations(ct),lt=Object(je["a"])(Object(je["a"])(Object(je["a"])(Object(je["a"])(Object(je["a"])({},pe["c"].actions("msg")),pe["c"].actions("msgs")),pe["c"].actions("logtext")),pe["c"].actions("msg_needshow")),{},{push_msg:function(e,t){var o=e.dispatch,a=ct.max_log_lines,n=ct.msgs;t.type&&(t.color=t.type),t.message&&(t.text=t.message),n.push(t.color+":"+t.text),n.length>a&&(n=n.slice(n.length-a,n.length)),o("setMsg",t),o("setMsg_needshow",!0),o("setMsgs",n),o("setLogtext",n.join("\n"))},update_msg_needshow:function(e,t){var o=e.dispatch;o("setMsg_needshow",t)}}),ut={msg_color:function(e){return e.msg.color?e.msg.color:e.msg.type},msg_text:function(e){return e.msg.text}},dt={namespaced:!0,state:ct,mutations:it,actions:lt,getters:ut};n["a"].use(fe["a"]);var ft=new fe["a"].Store({modules:a,plugins:[pe["a"].plugin]}),pt=ft;o("4c66"),o("868d");n["a"].config.productionTip=!1,new n["a"]({vuetify:g,router:de,store:pt,render:function(e){return e(m)}}).$mount("#app")},"6ed0":function(e){e.exports=JSON.parse('{"props":{}}')},cb16:function(e){e.exports=JSON.parse('{"props":{"v-app":{"dark":false,"light":false},"v-autocomplete":{"activator":false,"closeOnClick":false,"closeOnContentClick":false,"nudgeBottom":false,"nudgeLeft":false,"nudgeRight":false,"nudgeTop":false,"nudgeWidth":false,"offsetX":false,"offsetY":false,"transition":false},"v-bottom-sheet":{"close-delay":false,"open-delay":false,"return-value":false},"v-combobox":{"activator":false,"closeOnClick":false,"closeOnContentClick":false,"nudgeBottom":false,"nudgeLeft":false,"nudgeRight":false,"nudgeTop":false,"nudgeWidth":false,"offsetX":false,"offsetY":false,"transition":false},"v-dialog":{"close-delay":false,"open-delay":false,"return-value":false},"v-overflow-btn":{"activator":false,"closeOnClick":false,"closeOnContentClick":false,"delimiters":false,"nudgeBottom":false,"nudgeLeft":false,"nudgeRight":false,"nudgeTop":false,"nudgeWidth":false,"offsetX":false,"offsetY":false,"transition":false},"v-checkbox":{"height":false},"v-radio":{"height":false},"v-radio-group":{"color":false,"height":false},"v-switch":{"height":false},"v-window":{"mandatory":false,"max":false,"multiple":false},"v-file-input":{"readonly":false}}}')},d098:function(e){e.exports=JSON.parse('[{"group":"config","text":"配置","icon":"mdi-cogs","children":[{"text":"accessibility","to":"accessibility"}]},{"group":"user","text":"用户管理","icon":"mdi-cogs","children":[{"text":"登陆","to":"login"},{"text":"登出","to":"logout"},{"text":"注册","to":"register"}]},{"group":"db","text":"数据库管理","icon":"mdi-cogs","children":[{"text":"数据查询","to":"dbview"}]}]')}});
//# sourceMappingURL=app.8cc236ab.js.map