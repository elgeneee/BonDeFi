import{v as _}from"./vendor.324ec03c.js";import{r as y}from"./___vite-browser-external_commonjs-proxy.95e42533.js";var j={},w={},S={};Object.defineProperty(S,"__esModule",{value:!0});var N=function(){function o(e){this.type=e,this.bubbles=!1,this.cancelable=!1,this.loaded=0,this.lengthComputable=!1,this.total=0}return o}();S.ProgressEvent=N;var d={},v=_&&_.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(e,t){o(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(d,"__esModule",{value:!0});var L=function(o){v(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e}(Error);d.SecurityError=L;var U=function(o){v(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e}(Error);d.InvalidStateError=U;var T=function(o){v(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e}(Error);d.NetworkError=T;var q=function(o){v(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e}(Error);d.SyntaxError=q;var c={};Object.defineProperty(c,"__esModule",{value:!0});var k=function(){function o(){this.listeners={}}return o.prototype.addEventListener=function(e,t){e=e.toLowerCase(),this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t.handleEvent||t)},o.prototype.removeEventListener=function(e,t){if(e=e.toLowerCase(),!!this.listeners[e]){var r=this.listeners[e].indexOf(t.handleEvent||t);r<0||this.listeners[e].splice(r,1)}},o.prototype.dispatchEvent=function(e){var t=e.type.toLowerCase();if(e.target=this,this.listeners[t])for(var r=0,n=this.listeners[t];r<n.length;r++){var s=n[r];s.call(this,e)}var a=this["on"+t];return a&&a.call(this,e),!0},o}();c.XMLHttpRequestEventTarget=k;var x={},I=_&&_.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(e,t){o(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(x,"__esModule",{value:!0});var M=c,B=function(o){I(e,o);function e(){var t=o.call(this)||this;return t._contentType=null,t._body=null,t._reset(),t}return e.prototype._reset=function(){this._contentType=null,this._body=null},e.prototype._setData=function(t){if(t!=null)if(typeof t=="string")t.length!==0&&(this._contentType="text/plain;charset=UTF-8"),this._body=new Buffer(t,"utf-8");else if(Buffer.isBuffer(t))this._body=t;else if(t instanceof ArrayBuffer){for(var r=new Buffer(t.byteLength),n=new Uint8Array(t),s=0;s<t.byteLength;s++)r[s]=n[s];this._body=r}else if(t.buffer&&t.buffer instanceof ArrayBuffer){for(var r=new Buffer(t.byteLength),a=t.byteOffset,n=new Uint8Array(t.buffer),s=0;s<t.byteLength;s++)r[s]=n[s+a];this._body=r}else throw new Error("Unsupported send() data "+t)},e.prototype._finalizeHeaders=function(t,r){this._contentType&&!r["content-type"]&&(t["Content-Type"]=this._contentType),this._body&&(t["Content-Length"]=this._body.length.toString())},e.prototype._startUpload=function(t){this._body&&t.write(this._body),t.end()},e}(M.XMLHttpRequestEventTarget);x.XMLHttpRequestUpload=B;var g={};(function(){function o(n,s,a,u){return this instanceof o?(this.domain=n||void 0,this.path=s||"/",this.secure=!!a,this.script=!!u,this):new o(n,s,a,u)}o.All=Object.freeze(Object.create(null)),g.CookieAccessInfo=o;function e(n,s,a){return n instanceof e?n:this instanceof e?(this.name=null,this.value=null,this.expiration_date=1/0,this.path=String(a||"/"),this.explicit_path=!1,this.domain=s||null,this.explicit_domain=!1,this.secure=!1,this.noscript=!1,n&&this.parse(n,s,a),this):new e(n,s,a)}g.Cookie=e,e.prototype.toString=function(){var s=[this.name+"="+this.value];return this.expiration_date!==1/0&&s.push("expires="+new Date(this.expiration_date).toGMTString()),this.domain&&s.push("domain="+this.domain),this.path&&s.push("path="+this.path),this.secure&&s.push("secure"),this.noscript&&s.push("httponly"),s.join("; ")},e.prototype.toValueString=function(){return this.name+"="+this.value};var t=/[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;e.prototype.parse=function(s,a,u){if(this instanceof e){var i=s.split(";").filter(function(H){return!!H}),h,l=i[0].match(/([^=]+)=([\s\S]*)/);if(!l){console.warn("Invalid cookie header encountered. Header: '"+s+"'");return}var p=l[1],f=l[2];if(typeof p!="string"||p.length===0||typeof f!="string"){console.warn("Unable to extract values from cookie header. Cookie: '"+s+"'");return}for(this.name=p,this.value=f,h=1;h<i.length;h+=1)switch(l=i[h].match(/([^=]+)(?:=([\s\S]*))?/),p=l[1].trim().toLowerCase(),f=l[2],p){case"httponly":this.noscript=!0;break;case"expires":this.expiration_date=f?Number(Date.parse(f)):1/0;break;case"path":this.path=f?f.trim():"",this.explicit_path=!0;break;case"domain":this.domain=f?f.trim():"",this.explicit_domain=!!this.domain;break;case"secure":this.secure=!0;break}return this.explicit_path||(this.path=u||"/"),this.explicit_domain||(this.domain=a),this}return new e().parse(s,a,u)},e.prototype.matches=function(s){return s===o.All?!0:!(this.noscript&&s.script||this.secure&&!s.secure||!this.collidesWith(s))},e.prototype.collidesWith=function(s){if(this.path&&!s.path||this.domain&&!s.domain||this.path&&s.path.indexOf(this.path)!==0||this.explicit_path&&s.path.indexOf(this.path)!==0)return!1;var a=s.domain&&s.domain.replace(/^[\.]/,""),u=this.domain&&this.domain.replace(/^[\.]/,"");if(u===a)return!0;if(u){if(!this.explicit_domain)return!1;var i=a.indexOf(u);return!(i===-1||i!==a.length-u.length)}return!0};function r(){var n,s,a;return this instanceof r?(n=Object.create(null),this.setCookie=function(i,h,l){var p,f;if(i=new e(i,h,l),p=i.expiration_date<=Date.now(),n[i.name]!==void 0){for(s=n[i.name],f=0;f<s.length;f+=1)if(a=s[f],a.collidesWith(i))return p?(s.splice(f,1),s.length===0&&delete n[i.name],!1):(s[f]=i,i);return p?!1:(s.push(i),i)}return p?!1:(n[i.name]=[i],n[i.name])},this.getCookie=function(i,h){var l,p;if(s=n[i],!!s)for(p=0;p<s.length;p+=1){if(l=s[p],l.expiration_date<=Date.now()){s.length===0&&delete n[l.name];continue}if(l.matches(h))return l}},this.getCookies=function(i){var h=[],l,p;for(l in n)p=this.getCookie(l,i),p&&h.push(p);return h.toString=function(){return h.join(":")},h.toValueString=function(){return h.map(function(H){return H.toValueString()}).join("; ")},h},this):new r}g.CookieJar=r,r.prototype.setCookies=function(s,a,u){s=Array.isArray(s)?s:s.split(t);var i=[],h,l;for(s=s.map(function(p){return new e(p,a,u)}),h=0;h<s.length;h+=1)l=s[h],this.setCookie(l,a,u)&&i.push(l);return i}})();var X=_&&_.__extends||function(){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(e,t){o(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),G=_&&_.__assign||Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o};Object.defineProperty(w,"__esModule",{value:!0});var b=y,O=y,C=y,R=y,P=S,E=d,V=c,A=x,D=g,m=function(o){X(e,o);function e(t){t===void 0&&(t={});var r=o.call(this)||this;return r.UNSENT=e.UNSENT,r.OPENED=e.OPENED,r.HEADERS_RECEIVED=e.HEADERS_RECEIVED,r.LOADING=e.LOADING,r.DONE=e.DONE,r.onreadystatechange=null,r.readyState=e.UNSENT,r.response=null,r.responseText="",r.responseType="",r.status=0,r.statusText="",r.timeout=0,r.upload=new A.XMLHttpRequestUpload,r.responseUrl="",r.withCredentials=!1,r._method=null,r._url=null,r._sync=!1,r._headers={},r._loweredHeaders={},r._mimeOverride=null,r._request=null,r._response=null,r._responseParts=null,r._responseHeaders=null,r._aborting=null,r._error=null,r._loadedBytes=0,r._totalBytes=0,r._lengthComputable=!1,r._restrictedMethods={CONNECT:!0,TRACE:!0,TRACK:!0},r._restrictedHeaders={"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,via:!0},r._privateHeaders={"set-cookie":!0,"set-cookie2":!0},r._userAgent="Mozilla/5.0 ("+C.type()+" "+C.arch()+") node.js/"+process.versions.node+" v8/"+process.versions.v8,r._anonymous=t.anon||!1,r}return e.prototype.open=function(t,r,n,s,a){if(n===void 0&&(n=!0),t=t.toUpperCase(),this._restrictedMethods[t])throw new e.SecurityError("HTTP method "+t+" is not allowed in XHR");var u=this._parseUrl(r,s,a);this.readyState===e.HEADERS_RECEIVED||this.readyState===e.LOADING,this._method=t,this._url=u,this._sync=!n,this._headers={},this._loweredHeaders={},this._mimeOverride=null,this._setReadyState(e.OPENED),this._request=null,this._response=null,this.status=0,this.statusText="",this._responseParts=[],this._responseHeaders=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1},e.prototype.setRequestHeader=function(t,r){if(this.readyState!==e.OPENED)throw new e.InvalidStateError("XHR readyState must be OPENED");var n=t.toLowerCase();if(this._restrictedHeaders[n]||/^sec-/.test(n)||/^proxy-/.test(n)){console.warn('Refused to set unsafe header "'+t+'"');return}r=r.toString(),this._loweredHeaders[n]!=null?(t=this._loweredHeaders[n],this._headers[t]=this._headers[t]+", "+r):(this._loweredHeaders[n]=t,this._headers[t]=r)},e.prototype.send=function(t){if(this.readyState!==e.OPENED)throw new e.InvalidStateError("XHR readyState must be OPENED");if(this._request)throw new e.InvalidStateError("send() already called");switch(this._url.protocol){case"file:":return this._sendFile(t);case"http:":case"https:":return this._sendHttp(t);default:throw new e.NetworkError("Unsupported protocol "+this._url.protocol)}},e.prototype.abort=function(){this._request!=null&&(this._request.abort(),this._setError(),this._dispatchProgress("abort"),this._dispatchProgress("loadend"))},e.prototype.getResponseHeader=function(t){if(this._responseHeaders==null||t==null)return null;var r=t.toLowerCase();return this._responseHeaders.hasOwnProperty(r)?this._responseHeaders[t.toLowerCase()]:null},e.prototype.getAllResponseHeaders=function(){var t=this;return this._responseHeaders==null?"":Object.keys(this._responseHeaders).map(function(r){return r+": "+t._responseHeaders[r]}).join(`\r
`)},e.prototype.overrideMimeType=function(t){if(this.readyState===e.LOADING||this.readyState===e.DONE)throw new e.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");this._mimeOverride=t.toLowerCase()},e.prototype.nodejsSet=function(t){if(this.nodejsHttpAgent=t.httpAgent||this.nodejsHttpAgent,this.nodejsHttpsAgent=t.httpsAgent||this.nodejsHttpsAgent,t.hasOwnProperty("baseUrl")){if(t.baseUrl!=null){var r=R.parse(t.baseUrl,!1,!0);if(!r.protocol)throw new e.SyntaxError("baseUrl must be an absolute URL")}this.nodejsBaseUrl=t.baseUrl}},e.nodejsSet=function(t){e.prototype.nodejsSet(t)},e.prototype._setReadyState=function(t){this.readyState=t,this.dispatchEvent(new P.ProgressEvent("readystatechange"))},e.prototype._sendFile=function(t){throw new Error("Protocol file: not implemented")},e.prototype._sendHttp=function(t){if(this._sync)throw new Error("Synchronous XHR processing not implemented");t&&(this._method==="GET"||this._method==="HEAD")?(console.warn("Discarding entity body for "+this._method+" requests"),t=null):t=t||"",this.upload._setData(t),this._finalizeHeaders(),this._sendHxxpRequest()},e.prototype._sendHxxpRequest=function(){var t=this;if(this.withCredentials){var r=e.cookieJar.getCookies(D.CookieAccessInfo(this._url.hostname,this._url.pathname,this._url.protocol==="https:")).toValueString();this._headers.cookie=this._headers.cookie2=r}var n=this._url.protocol==="http:"?[b,this.nodejsHttpAgent]:[O,this.nodejsHttpsAgent],s=n[0],a=n[1],u=s.request.bind(s),i=u({hostname:this._url.hostname,port:+this._url.port,path:this._url.path,auth:this._url.auth,method:this._method,headers:this._headers,agent:a});this._request=i,this.timeout&&i.setTimeout(this.timeout,function(){return t._onHttpTimeout(i)}),i.on("response",function(h){return t._onHttpResponse(i,h)}),i.on("error",function(h){return t._onHttpRequestError(i,h)}),this.upload._startUpload(i),this._request===i&&this._dispatchProgress("loadstart")},e.prototype._finalizeHeaders=function(){this._headers=G({},this._headers,{Connection:"keep-alive",Host:this._url.host,"User-Agent":this._userAgent},this._anonymous?{Referer:"about:blank"}:{}),this.upload._finalizeHeaders(this._headers,this._loweredHeaders)},e.prototype._onHttpResponse=function(t,r){var n=this;if(this._request===t){if(this.withCredentials&&(r.headers["set-cookie"]||r.headers["set-cookie2"])&&e.cookieJar.setCookies(r.headers["set-cookie"]||r.headers["set-cookie2"]),[301,302,303,307,308].indexOf(r.statusCode)>=0){this._url=this._parseUrl(r.headers.location),this._method="GET",this._loweredHeaders["content-type"]&&(delete this._headers[this._loweredHeaders["content-type"]],delete this._loweredHeaders["content-type"]),this._headers["Content-Type"]!=null&&delete this._headers["Content-Type"],delete this._headers["Content-Length"],this.upload._reset(),this._finalizeHeaders(),this._sendHxxpRequest();return}this._response=r,this._response.on("data",function(a){return n._onHttpResponseData(r,a)}),this._response.on("end",function(){return n._onHttpResponseEnd(r)}),this._response.on("close",function(){return n._onHttpResponseClose(r)}),this.responseUrl=this._url.href.split("#")[0],this.status=r.statusCode,this.statusText=b.STATUS_CODES[this.status],this._parseResponseHeaders(r);var s=this._responseHeaders["content-length"]||"";this._totalBytes=+s,this._lengthComputable=!!s,this._setReadyState(e.HEADERS_RECEIVED)}},e.prototype._onHttpResponseData=function(t,r){this._response===t&&(this._responseParts.push(new Buffer(r)),this._loadedBytes+=r.length,this.readyState!==e.LOADING&&this._setReadyState(e.LOADING),this._dispatchProgress("progress"))},e.prototype._onHttpResponseEnd=function(t){this._response===t&&(this._parseResponse(),this._request=null,this._response=null,this._setReadyState(e.DONE),this._dispatchProgress("load"),this._dispatchProgress("loadend"))},e.prototype._onHttpResponseClose=function(t){if(this._response===t){var r=this._request;this._setError(),r.abort(),this._setReadyState(e.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}},e.prototype._onHttpTimeout=function(t){this._request===t&&(this._setError(),t.abort(),this._setReadyState(e.DONE),this._dispatchProgress("timeout"),this._dispatchProgress("loadend"))},e.prototype._onHttpRequestError=function(t,r){this._request===t&&(this._setError(),t.abort(),this._setReadyState(e.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend"))},e.prototype._dispatchProgress=function(t){var r=new e.ProgressEvent(t);r.lengthComputable=this._lengthComputable,r.loaded=this._loadedBytes,r.total=this._totalBytes,this.dispatchEvent(r)},e.prototype._setError=function(){this._request=null,this._response=null,this._responseHeaders=null,this._responseParts=null},e.prototype._parseUrl=function(t,r,n){var s=this.nodejsBaseUrl==null?t:R.resolve(this.nodejsBaseUrl,t),a=R.parse(s,!1,!0);a.hash=null;var u=(a.auth||"").split(":"),i=u[0],h=u[1];return(i||h||r||n)&&(a.auth=(r||i||"")+":"+(n||h||"")),a},e.prototype._parseResponseHeaders=function(t){this._responseHeaders={};for(var r in t.headers){var n=r.toLowerCase();this._privateHeaders[n]||(this._responseHeaders[n]=t.headers[r])}this._mimeOverride!=null&&(this._responseHeaders["content-type"]=this._mimeOverride)},e.prototype._parseResponse=function(){var t=Buffer.concat(this._responseParts);switch(this._responseParts=null,this.responseType){case"json":this.responseText=null;try{this.response=JSON.parse(t.toString("utf-8"))}catch{this.response=null}return;case"buffer":this.responseText=null,this.response=t;return;case"arraybuffer":this.responseText=null;for(var r=new ArrayBuffer(t.length),n=new Uint8Array(r),s=0;s<t.length;s++)n[s]=t[s];this.response=r;return;case"text":default:try{this.responseText=t.toString(this._parseResponseEncoding())}catch{this.responseText=t.toString("binary")}this.response=this.responseText}},e.prototype._parseResponseEncoding=function(){return/;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"]||"")[1]||"utf-8"},e.ProgressEvent=P.ProgressEvent,e.InvalidStateError=E.InvalidStateError,e.NetworkError=E.NetworkError,e.SecurityError=E.SecurityError,e.SyntaxError=E.SyntaxError,e.XMLHttpRequestUpload=A.XMLHttpRequestUpload,e.UNSENT=0,e.OPENED=1,e.HEADERS_RECEIVED=2,e.LOADING=3,e.DONE=4,e.cookieJar=D.CookieJar(),e}(V.XMLHttpRequestEventTarget);w.XMLHttpRequest=m;m.prototype.nodejsHttpAgent=b.globalAgent;m.prototype.nodejsHttpsAgent=O.globalAgent;m.prototype.nodejsBaseUrl=null;(function(o){function e(r){for(var n in r)o.hasOwnProperty(n)||(o[n]=r[n])}Object.defineProperty(o,"__esModule",{value:!0}),e(w);var t=c;o.XMLHttpRequestEventTarget=t.XMLHttpRequestEventTarget})(j);export{j as d};