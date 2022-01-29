import{e as w}from"./abstract-connector.esm.29d9a9d6.js";var S={};Object.defineProperty(S,"__esModule",{value:!0});const R=w.exports;function _(e,n,i){try{Reflect.apply(e,n,i)}catch(r){setTimeout(()=>{throw r})}}function j(e){const n=e.length,i=new Array(n);for(let r=0;r<n;r+=1)i[r]=e[r];return i}class J extends R.EventEmitter{emit(n,...i){let r=n==="error";const u=this._events;if(u!==void 0)r=r&&u.error===void 0;else if(!r)return!1;if(r){let f;if(i.length>0&&([f]=i),f instanceof Error)throw f;const t=new Error(`Unhandled error.${f?` (${f.message})`:""}`);throw t.context=f,t}const o=u[n];if(o===void 0)return!1;if(typeof o=="function")_(o,this,i);else{const f=o.length,t=j(o);for(let s=0;s<f;s+=1)_(t[s],this,i)}return!0}}S.default=J;var D=h;h.default=h;h.stable=A;h.stableStringify=A;var m="[...]",b="[Circular]",c=[],d=[];function L(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function h(e,n,i,r){typeof r=="undefined"&&(r=L()),E(e,"",0,[],void 0,0,r);var u;try{d.length===0?u=JSON.stringify(e,n,i):u=JSON.stringify(e,N(n),i)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;c.length!==0;){var o=c.pop();o.length===4?Object.defineProperty(o[0],o[1],o[3]):o[0][o[1]]=o[2]}}return u}function l(e,n,i,r){var u=Object.getOwnPropertyDescriptor(r,i);u.get!==void 0?u.configurable?(Object.defineProperty(r,i,{value:e}),c.push([r,i,n,u])):d.push([n,i,e]):(r[i]=e,c.push([r,i,n]))}function E(e,n,i,r,u,o,f){o+=1;var t;if(typeof e=="object"&&e!==null){for(t=0;t<r.length;t++)if(r[t]===e){l(b,e,n,u);return}if(typeof f.depthLimit!="undefined"&&o>f.depthLimit){l(m,e,n,u);return}if(typeof f.edgesLimit!="undefined"&&i+1>f.edgesLimit){l(m,e,n,u);return}if(r.push(e),Array.isArray(e))for(t=0;t<e.length;t++)E(e[t],t,t,r,e,o,f);else{var s=Object.keys(e);for(t=0;t<s.length;t++){var y=s[t];E(e[y],y,t,r,e,o,f)}}r.pop()}}function P(e,n){return e<n?-1:e>n?1:0}function A(e,n,i,r){typeof r=="undefined"&&(r=L());var u=O(e,"",0,[],void 0,0,r)||e,o;try{d.length===0?o=JSON.stringify(u,n,i):o=JSON.stringify(u,N(n),i)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;c.length!==0;){var f=c.pop();f.length===4?Object.defineProperty(f[0],f[1],f[3]):f[0][f[1]]=f[2]}}return o}function O(e,n,i,r,u,o,f){o+=1;var t;if(typeof e=="object"&&e!==null){for(t=0;t<r.length;t++)if(r[t]===e){l(b,e,n,u);return}try{if(typeof e.toJSON=="function")return}catch{return}if(typeof f.depthLimit!="undefined"&&o>f.depthLimit){l(m,e,n,u);return}if(typeof f.edgesLimit!="undefined"&&i+1>f.edgesLimit){l(m,e,n,u);return}if(r.push(e),Array.isArray(e))for(t=0;t<e.length;t++)O(e[t],t,t,r,e,o,f);else{var s={},y=Object.keys(e).sort(P);for(t=0;t<y.length;t++){var g=y[t];O(e[g],g,t,r,e,o,f),s[g]=e[g]}if(typeof u!="undefined")c.push([u,n,e]),u[n]=s;else return s}r.pop()}}function N(e){return e=typeof e!="undefined"?e:function(n,i){return i},function(n,i){if(d.length>0)for(var r=0;r<d.length;r++){var u=d[r];if(u[1]===n&&u[0]===i){i=u[2],d.splice(r,1);break}}return e.call(this,n,i)}}export{D as f,S as s};
