(function(e){function t(t){for(var r,u,s=t[0],i=t[1],l=t[2],p=0,f=[];p<s.length;p++)u=s[p],a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("p",[n("router-view")],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"/"}},[e._v("NavBar")]),n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",[n("router-link",{attrs:{to:"/menu1"}},[e._v("menu1")]),n("router-link",{attrs:{to:"/menu2"}},[e._v("menu2")])],1)],1)],1)],1)},s=[],i={name:"Header"},l=i,c=(n("f653"),n("2877")),p=Object(c["a"])(l,u,s,!1,null,"58e55721",null),f=p.exports,d={name:"app",components:{Header:f}},v=d,b=Object(c["a"])(v,a,o,!1,null,null,null),h=b.exports,m=n("9f7b"),g=n.n(m),_=n("8c4f"),w=(n("f9e3"),n("2dd8"),n("bc3a")),y=n.n(w),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{attrs:{header:"Menu1"}},e._l(e.news,function(t){return n("div",{key:t.id},[e._v(e._s(t.title))])}),0)],1)},O=[],x={name:"Menu1",data:function(){return{news:[]}},mounted:function(){this.getNews()},methods:{getNews:function(){var e=this,t="https://api.hnpwa.com/v0/news/1.json";this.$http.get("".concat(t)).then(function(t){e.news=t.data})}}},M=x,$=Object(c["a"])(M,j,O,!1,null,null,null),k=$.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{attrs:{header:"Menu2"}},[n("b-table",{attrs:{striped:"",hover:"",items:e.users}})],1)],1)},S=[],E={name:"Menu2",data:function(){return{users:[]}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this,t="/user/api/list";this.$http.get("".concat(t)).then(function(t){e.users=t.data})}}},H=E,N=Object(c["a"])(H,P,S,!1,null,null,null),T=N.exports;r["a"].config.productionTip=!1,r["a"].use(g.a),r["a"].use(_["a"]),r["a"].prototype.$http=y.a;var J=[{path:"/menu1",component:k},{path:"/menu2",component:T}],U=new _["a"]({mode:"history",routes:J});new r["a"]({render:function(e){return e(h)},router:U}).$mount("#app")},e3b0:function(e,t,n){},f653:function(e,t,n){"use strict";var r=n("e3b0"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4d293d8d.js.map