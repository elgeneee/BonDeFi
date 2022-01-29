function Z(h,v){return v.forEach(function(o){o&&typeof o!="string"&&!Array.isArray(o)&&Object.keys(o).forEach(function(r){if(r!=="default"&&!(r in h)){var a=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(h,r,a.get?a:{enumerable:!0,get:function(){return o[r]}})}})}),Object.freeze(h)}var z=function(h){var v={};function o(r){if(v[r])return v[r].exports;var a=v[r]={i:r,l:!1,exports:{}};return h[r].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=h,o.c=v,o.d=function(r,a,l){o.o(r,a)||Object.defineProperty(r,a,{enumerable:!0,get:l})},o.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,a){if(1&a&&(r=o(r)),8&a||4&a&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&a&&typeof r!="string")for(var u in r)o.d(l,u,function(R){return r[R]}.bind(null,u));return l},o.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(a,"a",a),a},o.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},o.p="",o(o.s=3)}([function(h,v){h.exports=function(o){return o&&o.__esModule?o:{default:o}}},function(h,v){h.exports=function(o,r){if(!(o instanceof r))throw new TypeError("Cannot call a class as a function")}},function(h,v,o){function r(){return Math.floor(9e4*Math.random())+1e4}Object.defineProperty(v,"__esModule",{value:!0}),v.sendAsyncWrapper=function(a,l){var u=this;return new Promise(function(R,I){u.sendAsync({jsonrpc:"2.0",id:r(),method:a,params:l||[]},function(O,T){O?I(O):R(T.result)})})},v.sendFortmaticAsyncWrapper=function(a){var l=this;return new Promise(function(u,R){l.getProvider().sendFortmaticAsync(a,function(I,O){I?R(I):u(O?O.result:{})})})},v.randomId=r,v.findExistingResponse=function(a,l){for(var u=0;u<a.length;u++)if(a[u].id===l)return a[u];return null}},function(h,v,o){h.exports=o(4)},function(h,v,o){var r=o(0),a=r(o(1)),l=r(o(5)),u=o(2),R="fm_composeSend",I="fm_logout",O="fm_get_balances",T="fm_get_transactions",w="fm_is_logged_in",k="fm_accountSettings",n="fm_deposit",s="fm_get_user",c="fm_configure",f={};h.exports=function b(_,A,x){var y=this;if((0,a.default)(this,b),this.fortmaticClient="https://x2.fortmatic.com",!_)throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");this.apiKey=_,this.options=x,this.ethNetwork=A,this.queryParams=btoa(JSON.stringify({API_KEY:_,ETH_NETWORK:A})),this.transactions={send:function(m,M){var C=new g(R,{to:m.to,value:m.amount});y.getProvider().sendFortmaticAsync(C,M)}},this.getProvider=function(){return f["fortmatic-".concat(y.queryParams)]||(f["fortmatic-".concat(y.queryParams)]=new l.default(y.fortmaticClient,{API_KEY:_,ETH_NETWORK:A})),f["fortmatic-".concat(y.queryParams)]},this.user={login:function(){return y.getProvider().enable()},logout:function(){y.getProvider().account=null,y.getProvider().network=null;var m=new g(I);return u.sendFortmaticAsyncWrapper.call(y,m)},getUser:function(){var m=new g(s);return u.sendFortmaticAsyncWrapper.call(y,m)},getBalances:function(){var m=new g(O);return u.sendFortmaticAsyncWrapper.call(y,m)},getTransactions:function(){var m=new g(T);return u.sendFortmaticAsyncWrapper.call(y,m)},isLoggedIn:function(){var m=new g(w);return u.sendFortmaticAsyncWrapper.call(y,m)},settings:function(){var m=new g(k);return u.sendFortmaticAsyncWrapper.call(y,m)},deposit:function(m){var M=new g(n,m);return u.sendFortmaticAsyncWrapper.call(y,M)}},this.configure=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},M=new g(c);return M.params=[m],u.sendFortmaticAsyncWrapper.call(y,M)}};var g=function b(_,A){(0,a.default)(this,b),this.id=(0,u.randomId)(),this.method=_,this.params=A?[A]:[{}]}},function(h,v,o){var r=o(0);Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var a=r(o(6)),l=r(o(9)),u=r(o(1)),R=r(o(10)),I=o(11),O=r(o(12)),T=o(2),w=function(){function k(n,s){if((0,u.default)(this,k),this.fortmaticClient=n,this.requests={},this.queue=[],this.account=null,this.network=null,this.isFortmatic=!0,this.overlayReady=!1,this.isLoggedIn=!1,this.postMessages={FORTMATIC_HANDLE_BATCH_REQUEST:"FORTMATIC_HANDLE_BATCH_REQUEST",FORTMATIC_HANDLE_REQUEST:"FORTMATIC_HANDLE_REQUEST",FORTMATIC_HANDLE_FORTMATIC_REQUEST:"FORTMATIC_HANDLE_FORTMATIC_REQUEST",FORTMATIC_HANDLE_RESPONSE:"FORTMATIC_HANDLE_RESPONSE",FORTMATIC_OVERLAY_READY:"FORTMATIC_OVERLAY_READY",FORTMATIC_SHOW_OVERLAY:"FORTMATIC_SHOW_OVERLAY",FORTMATIC_HIDE_OVERLAY:"FORTMATIC_HIDE_OVERLAY",FORTMATIC_USER_DENIED:"FORTMATIC_USER_DENIED",FORTMATIC_USER_LOGOUT:"FORTMATIC_USER_LOGOUT",FORTMATIC_UNAUTHORIZED_API_KEY:"FORTMATIC_UNAUTHORIZED_API_KEY"},!s.API_KEY)throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");this.options={API_KEY:s.API_KEY,ETH_NETWORK:s.ETH_NETWORK,DOMAIN_ORIGIN:window.location?window.location.origin:"",version:I.version},this.queryParams=btoa(JSON.stringify(this.options)),this.constructPostMessage(),this.overlay=this.createOverlay(),this.listenMessage()}return(0,R.default)(k,[{key:"constructPostMessage",value:function(){var n=this;Object.keys(this.postMessages).map(function(s){n.postMessages[s]+="-".concat(n.queryParams)})}},{key:"createOverlay",value:function(){var n=this;return new Promise(function(s,c){var f=function(){if(function(){var A=!0,x=!1,y=void 0;try{for(var m,M=document.getElementsByClassName("fortmatic-iframe")[Symbol.iterator]();!(A=(m=M.next()).done);A=!0)if(m.value.src.includes(n.queryParams))return!1}catch(C){x=!0,y=C}finally{try{A||M.return==null||M.return()}finally{if(x)throw y}}return!0}()){var g=document.createElement("style");g.innerHTML=O.default.css,g.type="text/css",document.head.appendChild(g);var b=document.createElement("iframe");b.className="fortmatic-iframe",b.src="".concat(n.fortmaticClient,"/send?params=").concat(n.queryParams),document.body.appendChild(b);var _=document.createElement("img");_.src="https://static.fortmatic.com/assets/trans.gif",document.body.appendChild(_),s({iframe:b})}else console.error("Fortmatic: Duplicate instances found.")};["loaded","interactive","complete"].indexOf(document.readyState)>-1?f():window.addEventListener("load",f.bind(n),!1)})}},{key:"showOverlay",value:function(){var n=(0,l.default)(a.default.mark(function s(){return a.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.overlay;case 2:c.sent.iframe.style.display="block";case 4:case"end":return c.stop()}},s,this)}));return function(){return n.apply(this,arguments)}}()},{key:"hideOverlay",value:function(){var n=(0,l.default)(a.default.mark(function s(){return a.default.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.overlay;case 2:c.sent.iframe.style.display="none";case 4:case"end":return c.stop()}},s,this)}));return function(){return n.apply(this,arguments)}}()},{key:"sendAsync",value:function(n,s){n.length>0?this.enqueue({payload:{id:(0,T.randomId)(),batch:n.map(function(c){return c.id=(0,T.randomId)(),c}),method:"eth_batchRequest"},cb:s}):this.enqueue({payload:n,cb:s})}},{key:"sendFortmaticAsync",value:function(n,s){this.enqueue({payload:n,cb:s,isNative:!0})}},{key:"send",value:function(n,s){if(typeof n=="string")return T.sendAsyncWrapper.call(this,n,s);if(!s){console.warn("Non-async web3 methods will be deprecated in web3 > 1.0, and are not supported by the Fortmatic provider. An async method to be used instead."),this.sendAsync(n,function(){});var c={};switch(n.method){case"eth_accounts":c=this.account?[this.account]:[];break;case"eth_coinbase":c=this.account;break;case"net_version":c=this.network||(this.options.API_KEY.startsWith("pk_live")?1:4);break;case"eth_uninstallFilter":c=!0;break;default:c={}}return{id:n.id,jsonrpc:n.jsonrpc,result:c}}this.sendAsync(n,s)}},{key:"enqueue",value:function(n){this.queue.push(n),this.overlayReady&&this.dequeue()}},{key:"dequeue",value:function(){var n=(0,l.default)(a.default.mark(function s(){var c,f,g,b=this;return a.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(this.queue.length!==0){_.next=2;break}return _.abrupt("return");case 2:if(!(c=this.queue.shift())){_.next=11;break}return f=c.payload,g=c.cb,f.id=(0,T.randomId)(),_.next=9,this.postMessage(c.isNative?this.postMessages.FORTMATIC_HANDLE_FORTMATIC_REQUEST:this.postMessages.FORTMATIC_HANDLE_REQUEST,c.payload);case 9:f.batch&&f.batch.length>0?(f.batch.forEach(function(A){b.requests[A.id]={parentId:f.id,payload:A,cb:function(x,y){var m=b.requests[f.id].batchResponse;if(x&&x.response&&!(0,T.findExistingResponse)(m,x.response.id))throw m.push({jsonrpc:"2.0",id:x.response.id,error:{code:x.response.code,message:x.response.message}}),b.requests[f.id].cb(null,m),x.response;if(y&&y.result&&!(0,T.findExistingResponse)(m,y.id))return m.push(y);throw new Error("Fortmatic: unexpected callback behavior")}}}),this.requests[f.id]={payload:f,cb:g,batchResponse:[]}):this.requests[f.id]={payload:f,cb:g},this.dequeue();case 11:case"end":return _.stop()}},s,this)}));return function(){return n.apply(this,arguments)}}()},{key:"postMessage",value:function(){var n=(0,l.default)(a.default.mark(function s(c,f){var g;return a.default.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,this.overlay;case 2:if(!(g=b.sent).iframe.contentWindow){b.next=7;break}g.iframe.contentWindow.postMessage({msgType:c,payload:f},"*"),b.next=8;break;case 7:throw new Error("Fortmatic: Modal is not ready.");case 8:case"end":return b.stop()}},s,this)}));return function(s,c){return n.apply(this,arguments)}}()},{key:"enable",value:function(){return T.sendAsyncWrapper.call(this,"eth_accounts")}},{key:"listenMessage",value:function(){var n=this;window.addEventListener("message",function(s){if(s.origin===n.fortmaticClient){var c=s.data.response?s.data.response.id:null;switch(s.data.msgType){case n.postMessages.FORTMATIC_OVERLAY_READY:n.overlayReady=!0,n.dequeue();break;case n.postMessages.FORTMATIC_HANDLE_RESPONSE:try{n.requests[c].cb(null,s.data.response);var f=n.requests[c].parentId;f&&n.requests[f].payload.batch.length===n.requests[f].batchResponse.length&&n.requests[f].cb(null,n.requests[f].batchResponse),n.requests[c].payload.method==="eth_accounts"?n.account=s.data.response.result[0]:n.requests[c].payload.method==="eth_coinbase"?n.account=s.data.response.result:n.requests[c].payload.method==="net_version"&&(n.network=s.data.response.result)}catch{}n.isLoggedIn=!0,n.dequeue();break;case n.postMessages.FORTMATIC_HIDE_OVERLAY:n.hideOverlay();break;case n.postMessages.FORTMATIC_SHOW_OVERLAY:n.showOverlay();break;case n.postMessages.FORTMATIC_USER_LOGOUT:n.account=null,n.network=null,n.isLoggedIn=!1;break;case n.postMessages.FORTMATIC_UNAUTHORIZED_API_KEY:throw n.overlayReady=!1,new Error("Given API key is not authorized to access the resource.");case n.postMessages.FORTMATIC_USER_DENIED:if(c){var g=s.data.response&&s.data.response.message?s.data.response.message:"Fortmatic: Modal was closed without executing action!",b=s.data.response&&s.data.response.code?s.data.response.code:1;n.requests[c].cb({message:g,code:b,response:s.data.response})}else n.queue.forEach(function(_){return _.cb({message:"Fortmatic: Modal was closed without executing action!",code:1})});n.dequeue()}}})}}]),k}();v.default=w},function(h,v,o){h.exports=o(7)},function(h,v,o){var r=function(){return this||typeof self=="object"&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,l=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,h.exports=o(8),a)r.regeneratorRuntime=l;else try{delete r.regeneratorRuntime}catch{r.regeneratorRuntime=void 0}},function(h,v){(function(o){var r,a=Object.prototype,l=a.hasOwnProperty,u=typeof Symbol=="function"?Symbol:{},R=u.iterator||"@@iterator",I=u.asyncIterator||"@@asyncIterator",O=u.toStringTag||"@@toStringTag",T=typeof h=="object",w=o.regeneratorRuntime;if(w)T&&(h.exports=w);else{(w=o.regeneratorRuntime=T?h.exports:{}).wrap=x;var k="suspendedStart",n="suspendedYield",s="executing",c="completed",f={},g={};g[R]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(G([])));_&&_!==a&&l.call(_,R)&&(g=_);var A=C.prototype=m.prototype=Object.create(g);M.prototype=A.constructor=C,C.constructor=M,C[O]=M.displayName="GeneratorFunction",w.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return!!e&&(e===M||(e.displayName||e.name)==="GeneratorFunction")},w.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,O in t||(t[O]="GeneratorFunction")),t.prototype=Object.create(A),t},w.awrap=function(t){return{__await:t}},V(U.prototype),U.prototype[I]=function(){return this},w.AsyncIterator=U,w.async=function(t,e,d,p){var i=new U(x(t,e,d,p));return w.isGeneratorFunction(e)?i:i.next().then(function(F){return F.done?F.value:i.next()})},V(A),A[O]="Generator",A[R]=function(){return this},A.toString=function(){return"[object Generator]"},w.keys=function(t){var e=[];for(var d in t)e.push(d);return e.reverse(),function p(){for(;e.length;){var i=e.pop();if(i in t)return p.value=i,p.done=!1,p}return p.done=!0,p}},w.values=G,K.prototype={constructor:K,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(Y),!t)for(var e in this)e.charAt(0)==="t"&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function d(W,E){return F.type="throw",F.arg=t,e.next=W,E&&(e.method="next",e.arg=r),!!E}for(var p=this.tryEntries.length-1;p>=0;--p){var i=this.tryEntries[p],F=i.completion;if(i.tryLoc==="root")return d("end");if(i.tryLoc<=this.prev){var j=l.call(i,"catchLoc"),q=l.call(i,"finallyLoc");if(j&&q){if(this.prev<i.catchLoc)return d(i.catchLoc,!0);if(this.prev<i.finallyLoc)return d(i.finallyLoc)}else if(j){if(this.prev<i.catchLoc)return d(i.catchLoc,!0)}else{if(!q)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return d(i.finallyLoc)}}}},abrupt:function(t,e){for(var d=this.tryEntries.length-1;d>=0;--d){var p=this.tryEntries[d];if(p.tryLoc<=this.prev&&l.call(p,"finallyLoc")&&this.prev<p.finallyLoc){var i=p;break}}i&&(t==="break"||t==="continue")&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var F=i?i.completion:{};return F.type=t,F.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(F)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var d=this.tryEntries[e];if(d.finallyLoc===t)return this.complete(d.completion,d.afterLoc),Y(d),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var d=this.tryEntries[e];if(d.tryLoc===t){var p=d.completion;if(p.type==="throw"){var i=p.arg;Y(d)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,d){return this.delegate={iterator:G(t),resultName:e,nextLoc:d},this.method==="next"&&(this.arg=r),f}}}function x(t,e,d,p){var i=e&&e.prototype instanceof m?e:m,F=Object.create(i.prototype),j=new K(p||[]);return F._invoke=function(q,W,E){var P=k;return function(S,D){if(P===s)throw new Error("Generator is already running");if(P===c){if(S==="throw")throw D;return Q()}for(E.method=S,E.arg=D;;){var H=E.delegate;if(H){var N=B(H,E);if(N){if(N===f)continue;return N}}if(E.method==="next")E.sent=E._sent=E.arg;else if(E.method==="throw"){if(P===k)throw P=c,E.arg;E.dispatchException(E.arg)}else E.method==="return"&&E.abrupt("return",E.arg);P=s;var L=y(q,W,E);if(L.type==="normal"){if(P=E.done?c:n,L.arg===f)continue;return{value:L.arg,done:E.done}}L.type==="throw"&&(P=c,E.method="throw",E.arg=L.arg)}}}(t,d,j),F}function y(t,e,d){try{return{type:"normal",arg:t.call(e,d)}}catch(p){return{type:"throw",arg:p}}}function m(){}function M(){}function C(){}function V(t){["next","throw","return"].forEach(function(e){t[e]=function(d){return this._invoke(e,d)}})}function U(t){var e;this._invoke=function(d,p){function i(){return new Promise(function(F,j){(function q(W,E,P,S){var D=y(t[W],t,E);if(D.type!=="throw"){var H=D.arg,N=H.value;return N&&typeof N=="object"&&l.call(N,"__await")?Promise.resolve(N.__await).then(function(L){q("next",L,P,S)},function(L){q("throw",L,P,S)}):Promise.resolve(N).then(function(L){H.value=L,P(H)},function(L){return q("throw",L,P,S)})}S(D.arg)})(d,p,F,j)})}return e=e?e.then(i,i):i()}}function B(t,e){var d=t.iterator[e.method];if(d===r){if(e.delegate=null,e.method==="throw"){if(t.iterator.return&&(e.method="return",e.arg=r,B(t,e),e.method==="throw"))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var p=y(d,t.iterator,e.arg);if(p.type==="throw")return e.method="throw",e.arg=p.arg,e.delegate=null,f;var i=p.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=r),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function J(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Y(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function K(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(J,this),this.reset(!0)}function G(t){if(t){var e=t[R];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var d=-1,p=function i(){for(;++d<t.length;)if(l.call(t,d))return i.value=t[d],i.done=!1,i;return i.value=r,i.done=!0,i};return p.next=p}}return{next:Q}}function Q(){return{value:r,done:!0}}})(function(){return this||typeof self=="object"&&self}()||Function("return this")())},function(h,v){function o(r,a,l,u,R,I,O){try{var T=r[I](O),w=T.value}catch(k){return void l(k)}T.done?a(w):Promise.resolve(w).then(u,R)}h.exports=function(r){return function(){var a=this,l=arguments;return new Promise(function(u,R){var I=r.apply(a,l);function O(w){o(I,u,R,O,T,"next",w)}function T(w){o(I,u,R,O,T,"throw",w)}O(void 0)})}}},function(h,v){function o(r,a){for(var l=0;l<a.length;l++){var u=a[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,u.key,u)}}h.exports=function(r,a,l){return a&&o(r.prototype,a),l&&o(r,l),r}},function(h){h.exports={name:"fortmatic",version:"1.1.3",description:"Fortmatic Javascript SDK",main:"lib/fortmatic.js",scripts:{build:"WEBPACK_ENV=production webpack","build:dev":"WEBPACK_ENV=development BABEL_ENV=development webpack --progress --colors --watch",test:"nyc --reporter=lcov --reporter=text-summary ava"},author:"Fortmatic <team@fortmatic.com> (https://fortmatic.com/)",license:"MIT",repository:{type:"git",url:"https://github.com/fortmatic/fortmatic-js"},keywords:["Auth","Login","Web3","Crypto","Ethereum","MetaMask","Wallet","Blockchain","Dapp"],homepage:"https://www.fortmatic.com",ava:{require:["@babel/register"],files:["test/**/*.spec.js"],babel:{testOptions:{presets:["@babel/env"],plugins:["@babel/plugin-proposal-function-bind","@babel/plugin-transform-runtime"]}},verbose:!0},nyc:{all:!1,"check-coverage":!0,"per-file":!0,lines:80,statements:80,functions:80,branches:80,include:["src/**/*.js"],exclude:["*/style.js"],require:[],reporter:["html","lcov"]},dependencies:{"@babel/runtime":"7.3.4"},devDependencies:{"@babel/core":"7.3.4","@babel/plugin-proposal-function-bind":"7.2.0","@babel/plugin-transform-modules-commonjs":"7.2.0","@babel/plugin-transform-runtime":"7.3.4","@babel/preset-env":"7.3.4","@babel/register":"7.0.0",ava:"2.2.0","babel-eslint":"10.0.1","babel-loader":"8.0.5",eslint:"5.9.0",lodash:"4.17.11",nyc:"13.1.0",sinon:"7.1.1",webpack:"4.26.1","webpack-cli":"3.1.2"}}},function(h,v,o){v.css=`
  .fortmatic-iframe {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    z-index: 2147483647;
  }
`}]),$=Object.freeze(Z({__proto__:null,[Symbol.toStringTag]:"Module",default:z},[z]));export{$ as f};
