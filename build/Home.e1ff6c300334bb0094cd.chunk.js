webpackJsonp([0],{"+66z":function(e,t){function r(e){return o.call(e)}var n=Object.prototype,o=n.toString;e.exports=r},"+gg+":function(e,t,r){var n=r("TQ3y"),o=n["__core-js_shared__"];e.exports=o},"/GnY":function(e,t,r){function n(e){if(!o(e))return i(e);var t=[];for(var r in Object(e))s.call(e,r)&&"constructor"!=r&&t.push(r);return t}var o=r("HT7L"),i=r("W529"),a=Object.prototype,s=a.hasOwnProperty;e.exports=n},"1Yb9":function(e,t,r){var n=r("mgnk"),o=r("UnEC"),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(e){return o(e)&&a.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},"3IRH":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"5N57":function(e,t,r){var n=r("ICSD"),o=r("TQ3y"),i=n(o,"Set");e.exports=i},"7e4z":function(e,t,r){function n(e,t){var r=a(e),n=!r&&i(e),f=!r&&!n&&s(e),p=!r&&!n&&!f&&u(e),h=r||n||f||p,d=h?o(e.length,String):[],y=d.length;for(var b in e)!t&&!l.call(e,b)||h&&("length"==b||f&&("offset"==b||"parent"==b)||p&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||c(b,y))||d.push(b);return d}var o=r("uieL"),i=r("1Yb9"),a=r("NGEn"),s=r("ggOT"),c=r("ZGh9"),u=r("YsVG"),f=Object.prototype,l=f.hasOwnProperty;e.exports=n},"Ai/T":function(e,t){function r(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,o=n.toString;e.exports=r},Dc0G:function(e,t,r){(function(e){var n=r("blYT"),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o,s=a&&n.process,c=function(){try{return s&&s.binding&&s.binding("util")}catch(e){}}();e.exports=c}).call(t,r("3IRH")(e))},HT7L:function(e,t){function r(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}var n=Object.prototype;e.exports=r},ICSD:function(e,t,r){function n(e,t){var r=i(e,t);return o(r)?r:void 0}var o=r("ITwD"),i=r("mTAn");e.exports=n},ITwD:function(e,t,r){function n(e){return!(!a(e)||i(e))&&(o(e)?d:u).test(s(e))}var o=r("gGqR"),i=r("eFps"),a=r("yCNF"),s=r("Ai/T"),c=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,h=l.hasOwnProperty,d=RegExp("^"+p.call(h).replace(c,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},JDN0:function(e,t,r){function n(e){return"string"==typeof e||!i(e)&&a(e)&&o(e)==s}var o=r("aCM0"),i=r("NGEn"),a=r("UnEC"),s="[object String]";e.exports=n},LC9V:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function c(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function u(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&g(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!j(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var r=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=p(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},j=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var O=[301,302,303,307,308];b.redirect=function(e,t){if(-1===O.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(r,n){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),e.exports=self.fetch},NGEn:function(e,t){var r=Array.isArray;e.exports=r},NkRn:function(e,t,r){var n=r("TQ3y"),o=n.Symbol;e.exports=o},Nw3x:function(e,t,r){"use strict";function n(e){var t={dispatch:X.a,subscribe:X.a,getState:X.a,replaceReducer:X.a,runSaga:X.a,injectedReducers:te.a,injectedSagas:te.a};Y()(Z()(e,t),"(app/utils...) injectors: Expected a valid redux store")}function o(e,t){return function(r,o){t||n(e),Y()($()(r)&&!W()(r)&&X()(o),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,r)&&e.injectedReducers[r]===o||(e.injectedReducers[r]=o,e.replaceReducer(Object(re.a)(e.injectedReducers)))}}function i(e){return n(e),{injectReducer:o(e,!0)}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2];t||n(e);var a=se({},o,{mode:o.mode||oe}),s=a.saga,c=a.mode;ue(r),fe(a);var u=Reflect.has(e.injectedSagas,r);(!u||u&&c!==ie&&c!==ae)&&(e.injectedSagas[r]=se({},a,{task:e.runSaga(s,i)}))}}function f(e,t){return function(r){if(t||n(e),ue(r),Reflect.has(e.injectedSagas,r)){var o=e.injectedSagas[r];o.mode!==ie&&(o.task.cancel(),e.injectedSagas[r]="done")}}}function l(e){return n(e),{injectSaga:u(e,!0),ejectSaga:f(e,!0)}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){var t=e.component,r=C.a.createElement("div",null);return r=e.items?e.items.map(function(e){return C.a.createElement(t,{key:"item-"+e.id,item:e})}):C.a.createElement(t,null),C.a.createElement(Oe,null,C.a.createElement(ge,null,r))}function b(e){return C.a.createElement(Se,null,C.a.createElement(Pe,null,e.item))}function m(e){return C.a.createElement("svg",{height:"1em",width:"0.875em",className:e.className},C.a.createElement("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"}))}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function w(e){var t=e.loading,r=e.error,n=e.repos;if(t)return C.a.createElement(xe,{component:Re.a});if(!1!==r){var o=function(){return C.a.createElement(Be,{item:"Something went wrong, please try again!"})};return C.a.createElement(xe,{component:o})}return!1!==n?C.a.createElement(xe,{items:n,component:Qe}):null}function O(){return{type:pt.b}}function x(e,t){return{type:pt.d,repos:e,username:t}}function E(e){return{type:pt.c,error:e}}function _(e){return{type:ht,name:e}}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments[1];switch(t.type){case ht:return e.set("username",t.name.replace(/@/gi,""));default:return e}}function T(){var e,t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(gt.c)(yt());case 2:return e=n.sent,t="https://api.github.com/users/"+e+"/repos?type=all&sort=updated",n.prev=4,n.next=7,Object(gt.a)(jt.a,t);case 7:return r=n.sent,n.next=10,Object(gt.b)(x(r,e));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(4),n.next=16,Object(gt.b)(E(n.t0));case 16:case"end":return n.stop()}},wt,this,[[4,12]])}function A(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(gt.d)(pt.b,T);case 2:case"end":return e.stop()}},Ot,this)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function U(e){return{onChangeUsername:function(t){return e(_(t.target.value))},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e(O())}}}Object.defineProperty(t,"__esModule",{value:!0});var k=r("GiK3"),C=r.n(k),D=r("KSGD"),I=r.n(D),F=r("PIAa"),z=r("Pq8k"),H=r("RH2O"),G=r("2KeS"),N=r("slMY"),M=r("hYij"),L=r.n(M),q=r("crWv"),Y=r.n(q),V=r("lHK6"),W=r.n(V),Q=r("gGqR"),X=r.n(Q),K=r("JDN0"),$=r.n(K),J=r("cfiI"),Z=r.n(J),ee=r("yCNF"),te=r.n(ee),re=r("Gv9F"),ne=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),oe="@@saga-injector/restart-on-remount",ie="@@saga-injector/daemon",ae="@@saga-injector/once-till-unmount",se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ce=[oe,ie,ae],ue=function(e){return Y()($()(e)&&!W()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},fe=function(e){var t={saga:X.a,mode:function(e){return $()(e)&&ce.includes(e)}};Y()(Z()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")},le=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),pe=function(e){return e.get("global")},he=r("VEsJ"),de=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 1.5em;\n"],["\n  font-size: 1.5em;\n"]),ye=he.a.h2(de),be=ye,me=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n"],["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n"]),ve=he.a.ul(me),ge=ve,je=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n"],["\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n"]),we=he.a.div(je),Oe=we;y.propTypes={component:I.a.func.isRequired,items:I.a.array};var xe=y,Ee=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n"],["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n"]),_e=he.a.div(Ee),Pe=_e,Te=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"],["\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n"]),Ae=he.a.li(Te),Se=Ae;b.propTypes={item:I.a.any};var Be=b,Re=r("GbfK");m.propTypes={className:I.a.string};var Ue=m,ke=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  fill: #ccc;\n  margin-right: 0.25em;\n"],["\n  fill: #ccc;\n  margin-right: 0.25em;\n"]),Ce=Object(he.a)(Ue)(ke),De=Ce,Ie=r("THvi"),Fe=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"],["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]),ze=Ie.a.extend(Fe),He=ze,Ge=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"],["\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]),Ne=Ie.a.extend(Ge),Me=Ne,Le=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n"]),qe=he.a.div(Le),Ye=qe,Ve=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),We=function(e){function t(){return v(this,t),g(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return j(t,e),Ve(t,[{key:"render",value:function(){var e=this.props.item,t="";e.owner.login!==this.props.currentUser&&(t=e.owner.login+"/");var r=C.a.createElement(Ye,null,C.a.createElement(Me,{href:e.html_url,target:"_blank"},t+e.name),C.a.createElement(He,{href:e.html_url+"/issues",target:"_blank"},C.a.createElement(De,null),C.a.createElement(z.b,{value:e.open_issues_count})));return C.a.createElement(Be,{key:"repo-list-item-"+e.full_name,item:r})}}]),t}(C.a.PureComponent);We.propTypes={item:I.a.object,currentUser:I.a.string};var Qe=Object(H.b)(Object(N.b)({currentUser:function(){return Object(N.a)(pe,function(e){return e.get("currentUser")})}()}))(We);w.propTypes={loading:I.a.bool,error:I.a.any,repos:I.a.any};var Xe=w,Ke=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: black;\n  margin-left: 0.4em;\n"],["\n  color: black;\n  margin-left: 0.4em;\n"]),$e=he.a.span(Ke),Je=$e,Ze=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"],["\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"]),et=he.a.section(Ze),tt=et,rt=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  text-align: center;\n"],["\n  text-align: center;\n"]),nt=tt.extend(rt),ot=nt,it=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]),at=he.a.form(it),st=at,ct=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"],["\n  outline: none;\n  border-bottom: 1px dotted #999;\n"]),ut=he.a.input(ct),ft=ut,lt=Object(z.e)({startProjectHeader:{id:"app.containers.HomePage.start_project.header",defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"app.containers.HomePage.start_project.message",defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"app.containers.HomePage.tryme.header",defaultMessage:"Try me!"},trymeMessage:{id:"app.containers.HomePage.tryme.message",defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"app.containers.HomePage.tryme.atPrefix",defaultMessage:"@"}}),pt=r("8tnP"),ht="boilerplate/Home/CHANGE_USERNAME",dt=function(e){return e.get("home")},yt=function(){return Object(N.a)(dt,function(e){return e.get("username")})},bt=r("BYKG"),mt=Object(bt.fromJS)({username:""}),vt=P,gt=r("egdi"),jt=r("oi9Z"),wt=regeneratorRuntime.mark(T),Ot=regeneratorRuntime.mark(A);r.d(t,"HomePage",function(){return Et}),t.mapDispatchToProps=U;var xt=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Et=function(e){function t(){return S(this,t),B(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,e),xt(t,[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){var e=this.props,t=e.loading,r=e.error,n=e.repos,o={loading:t,error:r,repos:n};return C.a.createElement("article",null,C.a.createElement(F.Helmet,null,C.a.createElement("title",null,"Home Page"),C.a.createElement("meta",{name:"description",content:"A React.js Boilerplate application homepage"})),C.a.createElement("div",null,C.a.createElement(ot,null,C.a.createElement(be,null,C.a.createElement(z.a,lt.startProjectHeader)),C.a.createElement("p",null,C.a.createElement(z.a,lt.startProjectMessage))),C.a.createElement(tt,null,C.a.createElement(be,null,C.a.createElement(z.a,lt.trymeHeader)),C.a.createElement(st,{onSubmit:this.props.onSubmitForm},C.a.createElement("label",{htmlFor:"username"},C.a.createElement(z.a,lt.trymeMessage),C.a.createElement(Je,null,C.a.createElement(z.a,lt.trymeAtPrefix)),C.a.createElement(ft,{id:"username",type:"text",placeholder:"mxstbr",value:this.props.username,onChange:this.props.onChangeUsername}))),C.a.createElement(Xe,o))))}}]),t}(C.a.PureComponent);Et.propTypes={loading:I.a.bool,error:I.a.oneOfType([I.a.object,I.a.bool]),repos:I.a.oneOfType([I.a.array,I.a.bool]),onSubmitForm:I.a.func,username:I.a.string,onChangeUsername:I.a.func};var _t=Object(N.b)({repos:function(){return Object(N.a)(pe,function(e){return e.getIn(["userData","repositories"])})}(),username:yt(),loading:function(){return Object(N.a)(pe,function(e){return e.get("loading")})}(),error:function(){return Object(N.a)(pe,function(e){return e.get("error")})}()}),Pt=Object(H.b)(_t,U),Tt=function(e){var t=e.key,r=e.reducer;return function(e){var n=function(n){function o(){var e,t,r,n;a(this,o);for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f];return t=r=s(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(u))),r.injectors=i(r.context.store),n=t,s(r,n)}return c(o,n),ne(o,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(t,r)}},{key:"render",value:function(){return C.a.createElement(e,this.props)}}]),o}(C.a.Component);return n.WrappedComponent=e,n.contextTypes={store:I.a.object.isRequired},n.displayName="withReducer("+(e.displayName||e.name||"Component")+")",L()(n,e)}}({key:"home",reducer:vt}),At=function(e){var t=e.key,r=e.saga,n=e.mode;return function(e){var o=function(o){function i(){var e,t,r,n;p(this,i);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return t=r=h(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(a))),r.injectors=l(r.context.store),n=t,h(r,n)}return d(i,o),le(i,[{key:"componentWillMount",value:function(){(0,this.injectors.injectSaga)(t,{saga:r,mode:n},this.props)}},{key:"componentWillUnmount",value:function(){(0,this.injectors.ejectSaga)(t)}},{key:"render",value:function(){return C.a.createElement(e,this.props)}}]),i}(C.a.Component);return o.WrappedComponent=e,o.contextTypes={store:I.a.object.isRequired},o.displayName="withSaga("+(e.displayName||e.name||"Component")+")",L()(o,e)}}({key:"home",saga:A});t.default=Object(G.c)(Tt,At,Pt)(Et)},POb3:function(e,t,r){var n=r("ICSD"),o=r("TQ3y"),i=n(o,"Map");e.exports=i},Rh28:function(e,t){function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}var n=9007199254740991;e.exports=r},S7p9:function(e,t){function r(e){return function(t){return e(t)}}e.exports=r},TQ3y:function(e,t,r){var n=r("blYT"),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},UnEC:function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r},W529:function(e,t,r){var n=r("f931"),o=n(Object.keys,Object);e.exports=o},YsVG:function(e,t,r){var n=r("z4hc"),o=r("S7p9"),i=r("Dc0G"),a=i&&i.isTypedArray,s=a?o(a):n;e.exports=s},ZGh9:function(e,t){function r(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var n=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=r},ZQx6:function(e,t){function r(e,t,r){var n=r.length;if(null==e)return!n;for(e=Object(e);n--;){var o=r[n],i=t[o],a=e[o];if(void 0===a&&!(o in e)||!i(a))return!1}return!0}e.exports=r},aCM0:function(e,t,r){function n(e){return null==e?void 0===e?c:s:u&&u in Object(e)?i(e):a(e)}var o=r("NkRn"),i=r("uLhX"),a=r("+66z"),s="[object Null]",c="[object Undefined]",u=o?o.toStringTag:void 0;e.exports=n},bGc4:function(e,t,r){function n(e){return null!=e&&i(e.length)&&!o(e)}var o=r("gGqR"),i=r("Rh28");e.exports=n},bIbi:function(e,t,r){var n=r("ICSD"),o=r("TQ3y"),i=n(o,"WeakMap");e.exports=i},bO0Y:function(e,t,r){var n=r("ICSD"),o=r("TQ3y"),i=n(o,"Promise");e.exports=i},blYT:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r("DuR2"))},cfiI:function(e,t,r){function n(e,t){return null==t||o(e,t,i(t))}var o=r("ZQx6"),i=r("ktak");e.exports=n},d4US:function(e,t,r){var n=r("ICSD"),o=r("TQ3y"),i=n(o,"DataView");e.exports=i},eFps:function(e,t,r){function n(e){return!!i&&i in e}var o=r("+gg+"),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},f931:function(e,t){function r(e,t){return function(r){return e(t(r))}}e.exports=r},gGqR:function(e,t,r){function n(e){if(!i(e))return!1;var t=o(e);return t==s||t==c||t==a||t==u}var o=r("aCM0"),i=r("yCNF"),a="[object AsyncFunction]",s="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";e.exports=n},gHOb:function(e,t,r){var n=r("d4US"),o=r("POb3"),i=r("bO0Y"),a=r("5N57"),s=r("bIbi"),c=r("aCM0"),u=r("Ai/T"),f=u(n),l=u(o),p=u(i),h=u(a),d=u(s),y=c;(n&&"[object DataView]"!=y(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=y(new o)||i&&"[object Promise]"!=y(i.resolve())||a&&"[object Set]"!=y(new a)||s&&"[object WeakMap]"!=y(new s))&&(y=function(e){var t=c(e),r="[object Object]"==t?e.constructor:void 0,n=r?u(r):"";if(n)switch(n){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case h:return"[object Set]";case d:return"[object WeakMap]"}return t}),e.exports=y},ggOT:function(e,t,r){(function(e){var n=r("TQ3y"),o=r("gwcX"),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=a&&a.exports===i,c=s?n.Buffer:void 0,u=c?c.isBuffer:void 0,f=u||o;e.exports=f}).call(t,r("3IRH")(e))},gwcX:function(e,t){function r(){return!1}e.exports=r},ktak:function(e,t,r){function n(e){return a(e)?o(e):i(e)}var o=r("7e4z"),i=r("/GnY"),a=r("bGc4");e.exports=n},lHK6:function(e,t,r){function n(e){if(null==e)return!0;if(c(e)&&(s(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||l(e)||a(e)))return!e.length;var t=i(e);if(t==p||t==h)return!e.size;if(f(e))return!o(e).length;for(var r in e)if(y.call(e,r))return!1;return!0}var o=r("/GnY"),i=r("gHOb"),a=r("1Yb9"),s=r("NGEn"),c=r("bGc4"),u=r("ggOT"),f=r("HT7L"),l=r("YsVG"),p="[object Map]",h="[object Set]",d=Object.prototype,y=d.hasOwnProperty;e.exports=n},mTAn:function(e,t){function r(e,t){return null==e?void 0:e[t]}e.exports=r},mgnk:function(e,t,r){function n(e){return i(e)&&o(e)==a}var o=r("aCM0"),i=r("UnEC"),a="[object Arguments]";e.exports=n},oi9Z:function(e,t,r){"use strict";(function(e){function n(e){return 204===e.status||205===e.status?null:e.json()}function o(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function i(t,r){return e(t,r).then(o).then(n)}t.a=i;var a=r("rplX");r.n(a)}).call(t,r("LC9V"))},rplX:function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=a(t);return t.readAsArrayBuffer(e),r}function c(e){var t=new FileReader,r=a(t);return t.readAsText(e),r}function u(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function f(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&g(e))this._bodyArrayBuffer=f(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!j(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(e){var t=e.toUpperCase();return w.indexOf(t)>-1?t:e}function h(e,t){t=t||{};var r=t.body;if(e instanceof h){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=p(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},j=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var O=[301,302,303,307,308];b.redirect=function(e,t){if(-1===O.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=h,e.Response=b,e.fetch=function(e,t){return new Promise(function(r,n){var o=new h(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;r(new b(t,e))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},uLhX:function(e,t,r){function n(e){var t=a.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(e){}var o=s.call(e);return n&&(t?e[c]=r:delete e[c]),o}var o=r("NkRn"),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,c=o?o.toStringTag:void 0;e.exports=n},uieL:function(e,t){function r(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}e.exports=r},yCNF:function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},z4hc:function(e,t,r){function n(e){return a(e)&&i(e.length)&&!!s[o(e)]}var o=r("aCM0"),i=r("Rh28"),a=r("UnEC"),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,e.exports=n}});