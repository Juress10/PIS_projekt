(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"034f":function(e,n,t){"use strict";var r=t("c4ee"),a=t.n(r);a.a},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),a=t.n(r),o=(t("a481"),t("96cf"),t("fa84")),u=t.n(o),i=(t("e54f"),t("985d"),t("0047"),t("2b0e")),s=t("1f91"),c=t("42d2"),l=t("b05d"),p=t("24e8"),f=t("7f67");i["a"].use(l["a"],{config:{},lang:s["a"],iconSet:c["a"],components:{QDialog:p["a"]},directives:{ClosePopup:f["a"]}});var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},h=[],b={name:"App"},m=b,w=(t("034f"),t("2877")),g=Object(w["a"])(m,d,h,!1,null,null,null),v=g.exports,x=t("4360"),k=t("8c4f"),y=(t("7f7f"),t("4360")),P=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"8b24"))},name:"home"},{path:"/login",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"c6f7"))},name:"login"},{path:"/employee",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"1a4a"))},name:"employee",beforeEnter:function(e,n,t){"login"===n.name&&"home"===n.name||y.default.getters["store/isLogged"]?t():(console.log("niesi prihlaseny"),t("login"))}},{path:"/udalost/:id",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"9d10"))},name:"udalost",beforeEnter:function(e,n,t){"login"===n.name&&"home"===n.name||y.default.getters["store/isLogged"]?t():(console.log("niesi prihlaseny"),t("login"))}}]}];P.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"e51e"))}});var L=P;i["a"].use(k["a"]);var U=function(){var e=new k["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:L,mode:"hash",base:""});return e},E=function(){return R.apply(this,arguments)};function R(){return R=u()(a.a.mark((function e(){var n,t,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof x["default"]){e.next=6;break}return e.next=3,Object(x["default"])({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=x["default"];case 7:if(n=e.t0,"function"!==typeof U){e.next=14;break}return e.next=11,U({Vue:i["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=U;case 15:return t=e.t1,n.$router=t,r={el:"#q-app",router:t,store:n,render:function(e){return e(v)}},e.abrupt("return",{app:r,store:n,router:t});case 19:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var V=t("bc3a"),$=t.n(V);function j(){return q.apply(this,arguments)}function q(){return q=u()(a.a.mark((function e(){var n,t,r,o,u,s,c,l,p;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:n=e.sent,t=n.app,r=n.store,o=n.router,u=!0,s=function(e){u=!1,window.location.href=e},c=window.location.href.replace(window.location.origin,""),l=[void 0],p=0;case 11:if(!(!0===u&&p<l.length)){e.next=29;break}if("function"===typeof l[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[p]({app:t,router:o,store:r,Vue:i["a"],ssrContext:null,redirect:s,urlPath:c});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:new i["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),q.apply(this,arguments)}i["a"].prototype.$axios=$.a,j()},4360:function(e,n,t){"use strict";t.r(n);var r=t("2b0e"),a=t("2f62"),o={URL:"http://localhost:5001/ezcar-insurance/us-central1/app",user:null},u={getURL:function(e){return e.URL},isLogged:function(e){return null!=e.user}},i={setUser:function(e,n){e.user=n}},s={setAsyncUser:function(e,n){e.dispatch("setUser",n)}},c={namespaced:!0,getters:u,mutations:i,actions:s,state:o};r["a"].use(a["a"]);var l=new a["a"].Store({modules:{store:c},strict:!1});n["default"]=l},c4ee:function(e,n,t){}},[[0,2,0]]]);