(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"432G":function(e,t,n){"use strict";n.r(t);n("nT0F");var r=n("MM9K"),a=n.n(r),o=(n("CXCZ"),n("hqwM")),c=n.n(o),i=(n("MaXC"),n("4IMT")),u=n.n(i),s=(n("cUip"),n("iJl9")),p=n.n(s),l=(n("FGdI"),n("Pbn2")),f=n.n(l),d=n("q1tI"),h=n.n(d),g=n("Vg22"),m=n("fvjX"),y=n("JRPe"),b=Object(y.d)({search:{id:"app.pages.HomePage.search",defaultMessage:"Search"},message:{id:"app.pages.HomePage.message",defaultMessage:"search users github repo with the input value you typed by click search button."},errorMsg:{id:"app.pages.HomePage.errorMsg",defaultMessage:"Not Found!"}}),v=(n("G4qV"),"CHANGE_USERNAME"),j="SEARCH_USERS_REPO",w="GITHUB_REPO_LOADED",O="GITHUB_REPO_ERROR";function E(e){return{type:w,repoData:e}}function R(e){return{type:O,errMsg:e}}var _=n("JPcv"),S=Object(_.fromJS)({name:"godotdotdot",repoData:null,loading:!1,error:!1});var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments[1];switch(t.type){case v:return e.set("name",t.name);case j:return e.set("loading",!0).set("error",!1);case O:return e.set("loading",!1).set("error",!0);case w:return e.set("repoData",t.repoData).set("loading",!1).set("error",!1);default:return e}},C=(n("tL+A"),n("QpBz")),P=n.n(C),x=n("oZtI"),M=n("F2qU"),T=regeneratorRuntime.mark(I),H=regeneratorRuntime.mark(q);function D(e){return e}function I(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(M.a)("https://api.github.com/users/"+e.name+"/repos?type=all&sort=updated");case 3:return t=n.sent,n.next=6,Object(x.a)(E(D(t)));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(x.a)(R(n.t0.message));case 12:P.a.error(n.t0.message);case 13:case"end":return n.stop()}},T,this,[[0,8]])}function q(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.b)(j,I);case 2:case"end":return e.stop()}},H,this)}var A=n("17x9"),U=n.n(A),N=n("2mql"),G=n.n(N),J=n("QLaP"),F=n.n(J),L=n("E+oP"),W=n.n(L),Q=n("lSCD"),B=n.n(Q),X=n("4qC0"),z=n.n(X),V=n("NLUh"),Z=n.n(V),K=n("GoyQ"),Y=n.n(K);function $(e){var t={dispatch:B.a,subscribe:B.a,getState:B.a,replaceReducer:B.a,runSaga:B.a,injectedReducers:Y.a,injectedSagas:Y.a};F()(Z()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var ee=n("TMAc");function te(e){return $(e),{injectReducer:function(e,t){return function(n,r){t||$(e),F()(z()(n)&&!W()(n)&&B()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(ee.a)(e.injectedReducers)))}}(e,!0)}}var ne=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function re(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ae="@@saga-injector/restart-on-remount",oe="@@saga-injector/daemon",ce="@@saga-injector/once-till-unmount",ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue=[ae,oe,ce],se=function(e){return F()(z()(e)&&!W()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},pe=function(e){var t={saga:B.a,mode:function(e){return z()(e)&&ue.includes(e)}};F()(Z()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function le(e){return $(e),{injectSaga:function(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments[2];t||$(e);var o=ie({},r,{mode:r.mode||ae}),c=o.saga,i=o.mode;se(n),pe(o);var u=Reflect.has(e.injectedSagas,n);(!u||u&&i!==oe&&i!==ce)&&(e.injectedSagas[n]=ie({},o,{task:e.runSaga(c,a)}))}}(e,!0),ejectSaga:function(e,t){return function(n){if(t||$(e),se(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode!==oe&&(r.task.cancel(),e.injectedSagas[n]="done")}}}(e,!0)}}var fe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function de(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var he=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function ge(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var me=h.a.createElement(f.a,{type:"loading",style:{fontSize:24},spin:!0}),ye=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=ge(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.onSearchClickHandle=function(){var e=r.props,t=e.dispatch,n=e.name;t&&t(function(e){return{type:j,name:e}}(n))},r.onInputChangeHandle=function(e){var t=e.target.value,n=r.props.dispatch;n&&n(function(e){return console.log("action:",e),{type:v,name:e}}(t))},ge(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d["Component"]),he(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.repoData,r=e.loading,o=e.error;return h.a.createElement("div",null,h.a.createElement(p.a,{value:t,style:{width:200,display:"inline-block",marginRight:20},onChange:this.onInputChangeHandle}),h.a.createElement(u.a,{type:"primary",icon:"search",onClick:this.onSearchClickHandle},h.a.createElement(y.a,b.search)),h.a.createElement(y.a,b.message,function(e){return h.a.createElement("div",null,e)}),h.a.createElement(a.a,{indicator:me,style:{paddingTop:30,width:"100%"},spinning:r},n&&!o&&h.a.createElement(c.a,{bordered:!0,dataSource:n,renderItem:function(e){return h.a.createElement(c.a.Item,null," ",h.a.createElement("a",{target:"_blank",href:e.html_url},e.full_name)," ")}}),o&&h.a.createElement(y.a,b.errorMsg)))}}]),t}(),be=Object(g.connect)(function(e,t){var n=e.get("home");return{name:n.get("name"),repoData:n.get("repoData"),loading:n.get("loading"),error:n.get("error")}}),ve=function(e){var t=e.key,n=e.reducer;return function(e){var r=function(r){function a(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return t=n=re(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))),n.injectors=te(n.context.store),re(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,h.a.Component),ne(a,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,n)}},{key:"render",value:function(){return h.a.createElement(e,this.props)}}]),a}();return r.WrappedComponent=e,r.contextTypes={store:U.a.object.isRequired},r.displayName="withReducer("+(e.displayName||e.name||"Component")+")",G()(r,e)}}({key:"home",reducer:k}),je=function(e){var t=e.key,n=e.saga,r=e.mode;return function(e){var a=function(a){function o(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,a=Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=n=de(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.injectors=le(n.context.store),de(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,h.a.Component),fe(o,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:n,mode:r},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return h.a.createElement(e,this.props)}}]),o}();return a.WrappedComponent=e,a.contextTypes={store:U.a.object.isRequired},a.displayName="withSaga("+(e.displayName||e.name||"Component")+")",G()(a,e)}}({key:"home",saga:q});t.default=Object(m.compose)(ve,je,be)(ye)},F2qU:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});n("LpSC");function r(e){return 204===e.status||205===e.status?null:e.json()}function a(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function o(t,n){return e(t,n).then(a).then(r)}}).call(this,n("hn4Q"))}}]);