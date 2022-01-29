import{A as P}from"./abstract-connector.esm.29d9a9d6.js";import"./vendor.324ec03c.js";function C(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,h(n,o)}function f(n){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},f(n)}function h(n,o){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(n,o)}function g(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function s(n,o,r){return g()?s=Reflect.construct:s=function(e,c,a){var i=[null];i.push.apply(i,c);var u=Function.bind.apply(e,i),d=new u;return a&&h(d,a.prototype),d},s.apply(null,arguments)}function w(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function v(n){var o=typeof Map=="function"?new Map:void 0;return v=function(t){if(t===null||!w(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o!="undefined"){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return s(t,arguments,f(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),h(e,t)},v(n)}function p(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var m="URI_AVAILABLE",y=function(n){C(o,n);function o(){var r;return r=n.call(this)||this,r.name=r.constructor.name,r.message="The user rejected the request.",r}return o}(v(Error));function b(n){var o=n.supportedChainIds,r=n.rpc;return o||(r?Object.keys(r).map(function(t){return Number(t)}):void 0)}var I=function(n){C(o,n);function o(t){var e;return e=n.call(this,{supportedChainIds:b(t)})||this,e.config=t,e.handleChainChanged=e.handleChainChanged.bind(p(e)),e.handleAccountsChanged=e.handleAccountsChanged.bind(p(e)),e.handleDisconnect=e.handleDisconnect.bind(p(e)),e}var r=o.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e})},r.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},r.handleDisconnect=function(){this.emitDeactivate(),this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged),this.walletConnectProvider=void 0),this.emitDeactivate()},r.activate=function(){try{var e=this,c=function(){function u(){return Promise.resolve(e.walletConnectProvider.enable().then(function(l){return l[0]}).catch(function(l){throw l.message==="User closed modal"?new y:l})).then(function(l){return e.walletConnectProvider.on("disconnect",e.handleDisconnect),e.walletConnectProvider.on("chainChanged",e.handleChainChanged),e.walletConnectProvider.on("accountsChanged",e.handleAccountsChanged),{provider:e.walletConnectProvider,account:l}})}var d=function(){if(!e.walletConnectProvider.wc.connected)return Promise.resolve(e.walletConnectProvider.wc.createSession({chainId:e.supportedChainIds&&e.supportedChainIds.length>0?e.supportedChainIds[0]:1})).then(function(){e.emit(m,e.walletConnectProvider.wc.uri)})}();return d&&d.then?d.then(u):u(d)},a=function(){if(!e.walletConnectProvider)return Promise.resolve(import("./index.205fb202.js").then(function(i){var u;return(u=i==null?void 0:i.default)!=null?u:i})).then(function(i){e.walletConnectProvider=new i(e.config)})}();return Promise.resolve(a&&a.then?a.then(c):c(a))}catch(i){return Promise.reject(i)}},r.getProvider=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider)}catch(c){return Promise.reject(c)}},r.getChainId=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider.send("eth_chainId"))}catch(c){return Promise.reject(c)}},r.getAccount=function(){try{var e=this;return Promise.resolve(e.walletConnectProvider.send("eth_accounts").then(function(c){return c[0]}))}catch(c){return Promise.reject(c)}},r.deactivate=function(){this.walletConnectProvider&&(this.walletConnectProvider.stop(),this.walletConnectProvider.removeListener("disconnect",this.handleDisconnect),this.walletConnectProvider.removeListener("chainChanged",this.handleChainChanged),this.walletConnectProvider.removeListener("accountsChanged",this.handleAccountsChanged))},r.close=function(){try{var e,c=this;return Promise.resolve((e=c.walletConnectProvider)==null?void 0:e.close()).then(function(){})}catch(a){return Promise.reject(a)}},o}(P);export{m as URI_AVAILABLE,y as UserRejectedRequestError,I as WalletConnectConnector};