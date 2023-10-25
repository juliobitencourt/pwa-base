(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function yr(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const L={},at=[],de=()=>{},Wi=()=>!1,Vi=/^on[^a-z]/,sn=e=>Vi.test(e),wr=e=>e.startsWith("onUpdate:"),q=Object.assign,Er=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zi=Object.prototype.hasOwnProperty,R=(e,t)=>zi.call(e,t),S=Array.isArray,ct=e=>an(e)==="[object Map]",ro=e=>an(e)==="[object Set]",O=e=>typeof e=="function",V=e=>typeof e=="string",on=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",so=e=>(K(e)||O(e))&&O(e.then)&&O(e.catch),oo=Object.prototype.toString,an=e=>oo.call(e),qi=e=>an(e).slice(8,-1),io=e=>an(e)==="[object Object]",Ir=e=>V(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zt=yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ji=/-(\w)/g,ft=cn(e=>e.replace(Ji,(t,n)=>n?n.toUpperCase():"")),Yi=/\B([A-Z])/g,gt=cn(e=>e.replace(Yi,"-$1").toLowerCase()),ao=cn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cn=cn(e=>e?`on${ao(e)}`:""),Xe=(e,t)=>!Object.is(e,t),qt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Gt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Yn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let rs;const Xn=()=>rs||(rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vr(e){if(S(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=V(r)?Qi(r):vr(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(V(e)||K(e))return e}const Xi=/;(?![^(]*\))/g,Gi=/:([^]+)/,Zi=/\/\*[^]*?\*\//g;function Qi(e){const t={};return e.replace(Zi,"").split(Xi).forEach(n=>{if(n){const r=n.split(Gi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Tr(e){let t="";if(V(e))t=e;else if(S(e))for(let n=0;n<e.length;n++){const r=Tr(e[n]);r&&(t+=r+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ea="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ta=yr(ea);function co(e){return!!e||e===""}const na=e=>V(e)?e:e==null?"":S(e)||K(e)&&(e.toString===oo||!O(e.toString))?JSON.stringify(e,lo,2):String(e),lo=(e,t)=>t&&t.__v_isRef?lo(e,t.value):ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ro(t)?{[`Set(${t.size})`]:[...t.values()]}:K(t)&&!S(t)&&!io(t)?String(t):t;let ae;class ra{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){ae=this}off(){ae=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function sa(e,t=ae){t&&t.active&&t.effects.push(e)}function oa(){return ae}const Cr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},uo=e=>(e.w&Ne)>0,fo=e=>(e.n&Ne)>0,ia=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ne},aa=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];uo(s)&&!fo(s)?s.delete(e):t[n++]=s,s.w&=~Ne,s.n&=~Ne}t.length=n}},Gn=new WeakMap;let vt=0,Ne=1;const Zn=30;let le;const Je=Symbol(""),Qn=Symbol("");class Ar{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sa(this,r)}run(){if(!this.active)return this.fn();let t=le,n=De;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=le,le=this,De=!0,Ne=1<<++vt,vt<=Zn?ia(this):ss(this),this.fn()}finally{vt<=Zn&&aa(this),Ne=1<<--vt,le=this.parent,De=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){le===this?this.deferStop=!0:this.active&&(ss(this),this.onStop&&this.onStop(),this.active=!1)}}function ss(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let De=!0;const ho=[];function mt(){ho.push(De),De=!1}function bt(){const e=ho.pop();De=e===void 0?!0:e}function se(e,t,n){if(De&&le){let r=Gn.get(e);r||Gn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Cr()),po(s)}}function po(e,t){let n=!1;vt<=Zn?fo(e)||(e.n|=Ne,n=!uo(e)):n=!e.has(le),n&&(e.add(le),le.deps.push(e))}function Ie(e,t,n,r,s,o){const i=Gn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&S(e)){const c=Number(r);i.forEach((f,d)=>{(d==="length"||!on(d)&&d>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":S(e)?Ir(n)&&a.push(i.get("length")):(a.push(i.get(Je)),ct(e)&&a.push(i.get(Qn)));break;case"delete":S(e)||(a.push(i.get(Je)),ct(e)&&a.push(i.get(Qn)));break;case"set":ct(e)&&a.push(i.get(Je));break}if(a.length===1)a[0]&&er(a[0]);else{const c=[];for(const f of a)f&&c.push(...f);er(Cr(c))}}function er(e,t){const n=S(e)?e:[...e];for(const r of n)r.computed&&os(r);for(const r of n)r.computed||os(r)}function os(e,t){(e!==le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ca=yr("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(on)),is=la();function la(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let o=0,i=this.length;o<i;o++)se(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(B)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){mt();const r=B(this)[t].apply(this,n);return bt(),r}}),e}function ua(e){const t=B(this);return se(t,"has",e),t.hasOwnProperty(e)}class mo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,o=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw"&&r===(s?o?va:wo:o?yo:_o).get(t))return t;const i=S(t);if(!s){if(i&&R(is,n))return Reflect.get(is,n,r);if(n==="hasOwnProperty")return ua}const a=Reflect.get(t,n,r);return(on(n)?go.has(n):ca(n))||(s||se(t,"get",n),o)?a:Q(a)?i&&Ir(n)?a:a.value:K(a)?s?Eo(a):Or(a):a}}class bo extends mo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(dt(o)&&Q(o)&&!Q(r))return!1;if(!this._shallow&&(!Zt(r)&&!dt(r)&&(o=B(o),r=B(r)),!S(t)&&Q(o)&&!Q(r)))return o.value=r,!0;const i=S(t)&&Ir(n)?Number(n)<t.length:R(t,n),a=Reflect.set(t,n,r,s);return t===B(s)&&(i?Xe(r,o)&&Ie(t,"set",n,r):Ie(t,"add",n,r)),a}deleteProperty(t,n){const r=R(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ie(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!on(n)||!go.has(n))&&se(t,"has",n),r}ownKeys(t){return se(t,"iterate",S(t)?"length":Je),Reflect.ownKeys(t)}}class fa extends mo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const da=new bo,ha=new fa,pa=new bo(!0),Sr=e=>e,ln=e=>Reflect.getPrototypeOf(e);function jt(e,t,n=!1,r=!1){e=e.__v_raw;const s=B(e),o=B(t);n||(Xe(t,o)&&se(s,"get",t),se(s,"get",o));const{has:i}=ln(s),a=r?Sr:n?Mr:St;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function Ht(e,t=!1){const n=this.__v_raw,r=B(n),s=B(e);return t||(Xe(e,s)&&se(r,"has",e),se(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Kt(e,t=!1){return e=e.__v_raw,!t&&se(B(e),"iterate",Je),Reflect.get(e,"size",e)}function as(e){e=B(e);const t=B(this);return ln(t).has.call(t,e)||(t.add(e),Ie(t,"add",e,e)),this}function cs(e,t){t=B(t);const n=B(this),{has:r,get:s}=ln(n);let o=r.call(n,e);o||(e=B(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?Xe(t,i)&&Ie(n,"set",e,t):Ie(n,"add",e,t),this}function ls(e){const t=B(this),{has:n,get:r}=ln(t);let s=n.call(t,e);s||(e=B(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&Ie(t,"delete",e,void 0),o}function us(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Ie(e,"clear",void 0,void 0),n}function Ut(e,t){return function(r,s){const o=this,i=o.__v_raw,a=B(i),c=t?Sr:e?Mr:St;return!e&&se(a,"iterate",Je),i.forEach((f,d)=>r.call(s,c(f),c(d),o))}}function Wt(e,t,n){return function(...r){const s=this.__v_raw,o=B(s),i=ct(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=s[e](...r),d=n?Sr:t?Mr:St;return!t&&se(o,"iterate",c?Qn:Je),{next(){const{value:w,done:I}=f.next();return I?{value:w,done:I}:{value:a?[d(w[0]),d(w[1])]:d(w),done:I}},[Symbol.iterator](){return this}}}}function Ae(e){return function(...t){return e==="delete"?!1:this}}function ga(){const e={get(o){return jt(this,o)},get size(){return Kt(this)},has:Ht,add:as,set:cs,delete:ls,clear:us,forEach:Ut(!1,!1)},t={get(o){return jt(this,o,!1,!0)},get size(){return Kt(this)},has:Ht,add:as,set:cs,delete:ls,clear:us,forEach:Ut(!1,!0)},n={get(o){return jt(this,o,!0)},get size(){return Kt(this,!0)},has(o){return Ht.call(this,o,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Ut(!0,!1)},r={get(o){return jt(this,o,!0,!0)},get size(){return Kt(this,!0)},has(o){return Ht.call(this,o,!0)},add:Ae("add"),set:Ae("set"),delete:Ae("delete"),clear:Ae("clear"),forEach:Ut(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Wt(o,!1,!1),n[o]=Wt(o,!0,!1),t[o]=Wt(o,!1,!0),r[o]=Wt(o,!0,!0)}),[e,n,t,r]}const[ma,ba,_a,ya]=ga();function Dr(e,t){const n=t?e?ya:_a:e?ba:ma;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(R(n,s)&&s in r?n:r,s,o)}const wa={get:Dr(!1,!1)},Ea={get:Dr(!1,!0)},Ia={get:Dr(!0,!1)},_o=new WeakMap,yo=new WeakMap,wo=new WeakMap,va=new WeakMap;function Ta(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ca(e){return e.__v_skip||!Object.isExtensible(e)?0:Ta(qi(e))}function Or(e){return dt(e)?e:xr(e,!1,da,wa,_o)}function Aa(e){return xr(e,!1,pa,Ea,yo)}function Eo(e){return xr(e,!0,ha,Ia,wo)}function xr(e,t,n,r,s){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=Ca(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function lt(e){return dt(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function Zt(e){return!!(e&&e.__v_isShallow)}function Io(e){return lt(e)||dt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function vo(e){return Gt(e,"__v_skip",!0),e}const St=e=>K(e)?Or(e):e,Mr=e=>K(e)?Eo(e):e;function To(e){De&&le&&(e=B(e),po(e.dep||(e.dep=Cr())))}function Co(e,t){e=B(e);const n=e.dep;n&&er(n)}function Q(e){return!!(e&&e.__v_isRef===!0)}function Sa(e){return Da(e,!1)}function Da(e,t){return Q(e)?e:new Oa(e,t)}class Oa{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:St(t)}get value(){return To(this),this._value}set value(t){const n=this.__v_isShallow||Zt(t)||dt(t);t=n?t:B(t),Xe(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:St(t),Co(this))}}function xa(e){return Q(e)?e.value:e}const Ma={get:(e,t,n)=>xa(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Q(s)&&!Q(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ao(e){return lt(e)?e:new Proxy(e,Ma)}class Pa{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ar(t,()=>{this._dirty||(this._dirty=!0,Co(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=B(this);return To(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ra(e,t,n=!1){let r,s;const o=O(e);return o?(r=e,s=de):(r=e.get,s=e.set),new Pa(r,s,o||!s,n)}function Oe(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){un(o,t,n)}return s}function he(e,t,n,r){if(O(e)){const o=Oe(e,t,n,r);return o&&so(o)&&o.catch(i=>{un(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(he(e[o],t,n,r));return s}function un(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Oe(c,null,10,[e,i,a]);return}}Ba(e,n,s,r)}function Ba(e,t,n,r=!0){console.error(e)}let Dt=!1,tr=!1;const G=[];let _e=0;const ut=[];let we=null,We=0;const So=Promise.resolve();let Pr=null;function Na(e){const t=Pr||So;return e?t.then(this?e.bind(this):e):t}function $a(e){let t=_e+1,n=G.length;for(;t<n;){const r=t+n>>>1,s=G[r],o=Ot(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function Rr(e){(!G.length||!G.includes(e,Dt&&e.allowRecurse?_e+1:_e))&&(e.id==null?G.push(e):G.splice($a(e.id),0,e),Do())}function Do(){!Dt&&!tr&&(tr=!0,Pr=So.then(xo))}function ka(e){const t=G.indexOf(e);t>_e&&G.splice(t,1)}function Fa(e){S(e)?ut.push(...e):(!we||!we.includes(e,e.allowRecurse?We+1:We))&&ut.push(e),Do()}function fs(e,t=Dt?_e+1:0){for(;t<G.length;t++){const n=G[t];n&&n.pre&&(G.splice(t,1),t--,n())}}function Oo(e){if(ut.length){const t=[...new Set(ut)];if(ut.length=0,we){we.push(...t);return}for(we=t,we.sort((n,r)=>Ot(n)-Ot(r)),We=0;We<we.length;We++)we[We]();we=null,We=0}}const Ot=e=>e.id==null?1/0:e.id,La=(e,t)=>{const n=Ot(e)-Ot(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xo(e){tr=!1,Dt=!0,G.sort(La);const t=de;try{for(_e=0;_e<G.length;_e++){const n=G[_e];n&&n.active!==!1&&Oe(n,null,14)}}finally{_e=0,G.length=0,Oo(),Dt=!1,Pr=null,(G.length||ut.length)&&xo()}}function ja(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||L;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:w,trim:I}=r[d]||L;I&&(s=n.map(A=>V(A)?A.trim():A)),w&&(s=n.map(Yn))}let a,c=r[a=Cn(t)]||r[a=Cn(ft(t))];!c&&o&&(c=r[a=Cn(gt(t))]),c&&he(c,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,he(f,e,6,s)}}function Mo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!O(e)){const c=f=>{const d=Mo(f,t,!0);d&&(a=!0,q(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(K(e)&&r.set(e,null),null):(S(o)?o.forEach(c=>i[c]=null):q(i,o),K(e)&&r.set(e,i),i)}function fn(e,t){return!e||!sn(t)?!1:(t=t.slice(2).replace(/Once$/,""),R(e,t[0].toLowerCase()+t.slice(1))||R(e,gt(t))||R(e,t))}let ue=null,dn=null;function Qt(e){const t=ue;return ue=e,dn=e&&e.type.__scopeId||null,t}function Po(e){dn=e}function Ro(){dn=null}function Ha(e,t=ue,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Es(-1);const o=Qt(t);let i;try{i=e(...s)}finally{Qt(o),r._d&&Es(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function An(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:f,render:d,renderCache:w,data:I,setupState:A,ctx:j,inheritAttrs:P}=e;let W,J;const Y=Qt(e);try{if(n.shapeFlag&4){const x=s||r;W=be(d.call(x,x,w,o,A,I,j)),J=c}else{const x=t;W=be(x.length>1?x(o,{attrs:c,slots:a,emit:f}):x(o,null)),J=t.props?c:Ka(c)}}catch(x){At.length=0,un(x,e,1),W=xe(xt)}let X=W;if(J&&P!==!1){const x=Object.keys(J),{shapeFlag:Ce}=X;x.length&&Ce&7&&(i&&x.some(wr)&&(J=Ua(J,i)),X=ht(X,J))}return n.dirs&&(X=ht(X),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&(X.transition=n.transition),W=X,Qt(Y),W}const Ka=e=>{let t;for(const n in e)(n==="class"||n==="style"||sn(n))&&((t||(t={}))[n]=e[n]);return t},Ua=(e,t)=>{const n={};for(const r in e)(!wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Wa(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ds(r,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let w=0;w<d.length;w++){const I=d[w];if(i[I]!==r[I]&&!fn(f,I))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?ds(r,i,f):!0:!!i;return!1}function ds(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!fn(n,o))return!0}return!1}function Va({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const za=e=>e.__isSuspense;function qa(e,t){t&&t.pendingBranch?S(e)?t.effects.push(...e):t.effects.push(e):Fa(e)}const Vt={};function Sn(e,t,n){return Bo(e,t,n)}function Bo(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=L){var a;const c=oa()===((a=Z)==null?void 0:a.scope)?Z:null;let f,d=!1,w=!1;if(Q(e)?(f=()=>e.value,d=Zt(e)):lt(e)?(f=()=>e,r=!0):S(e)?(w=!0,d=e.some(x=>lt(x)||Zt(x)),f=()=>e.map(x=>{if(Q(x))return x.value;if(lt(x))return ze(x);if(O(x))return Oe(x,c,2)})):O(e)?t?f=()=>Oe(e,c,2):f=()=>{if(!(c&&c.isUnmounted))return I&&I(),he(e,c,3,[A])}:f=de,t&&r){const x=f;f=()=>ze(x())}let I,A=x=>{I=Y.onStop=()=>{Oe(x,c,4)}},j;if(Pt)if(A=de,t?n&&he(t,c,3,[f(),w?[]:void 0,A]):f(),s==="sync"){const x=Wc();j=x.__watcherHandles||(x.__watcherHandles=[])}else return de;let P=w?new Array(e.length).fill(Vt):Vt;const W=()=>{if(Y.active)if(t){const x=Y.run();(r||d||(w?x.some((Ce,yt)=>Xe(Ce,P[yt])):Xe(x,P)))&&(I&&I(),he(t,c,3,[x,P===Vt?void 0:w&&P[0]===Vt?[]:P,A]),P=x)}else Y.run()};W.allowRecurse=!!t;let J;s==="sync"?J=W:s==="post"?J=()=>re(W,c&&c.suspense):(W.pre=!0,c&&(W.id=c.uid),J=()=>Rr(W));const Y=new Ar(f,J);t?n?W():P=Y.run():s==="post"?re(Y.run.bind(Y),c&&c.suspense):Y.run();const X=()=>{Y.stop(),c&&c.scope&&Er(c.scope.effects,Y)};return j&&j.push(X),X}function Ja(e,t,n){const r=this.proxy,s=V(e)?e.includes(".")?No(r,e):()=>r[e]:e.bind(r,r);let o;O(t)?o=t:(o=t.handler,n=t);const i=Z;pt(this);const a=Bo(s,o.bind(r),n);return i?pt(i):Ye(),a}function No(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ze(e,t){if(!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Q(e))ze(e.value,t);else if(S(e))for(let n=0;n<e.length;n++)ze(e[n],t);else if(ro(e)||ct(e))e.forEach(n=>{ze(n,t)});else if(io(e))for(const n in e)ze(e[n],t);return e}function Ya(e,t){const n=ue;if(n===null)return e;const r=mn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,c,f=L]=t[o];i&&(O(i)&&(i={mounted:i,updated:i}),i.deep&&ze(a),s.push({dir:i,instance:r,value:a,oldValue:void 0,arg:c,modifiers:f}))}return e}function He(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(mt(),he(c,n,8,[e.el,a,e,t]),bt())}}/*! #__NO_SIDE_EFFECTS__ */function $o(e,t){return O(e)?(()=>q({name:e.name},t,{setup:e}))():e}const Jt=e=>!!e.type.__asyncLoader,ko=e=>e.type.__isKeepAlive;function Xa(e,t){Fo(e,"a",t)}function Ga(e,t){Fo(e,"da",t)}function Fo(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(hn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ko(s.parent.vnode)&&Za(r,t,n,s),s=s.parent}}function Za(e,t,n,r){const s=hn(t,e,r,!0);Lo(()=>{Er(r[t],s)},n)}function hn(e,t,n=Z,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;mt(),pt(n);const a=he(t,n,e,i);return Ye(),bt(),a});return r?s.unshift(o):s.push(o),o}}const Te=e=>(t,n=Z)=>(!Pt||e==="sp")&&hn(e,(...r)=>t(...r),n),Qa=Te("bm"),ec=Te("m"),tc=Te("bu"),nc=Te("u"),rc=Te("bum"),Lo=Te("um"),sc=Te("sp"),oc=Te("rtg"),ic=Te("rtc");function ac(e,t=Z){hn("ec",e,t)}const cc=Symbol.for("v-ndc"),nr=e=>e?Go(e)?mn(e)||e.proxy:nr(e.parent):null,Ct=q(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nr(e.parent),$root:e=>nr(e.root),$emit:e=>e.emit,$options:e=>Br(e),$forceUpdate:e=>e.f||(e.f=()=>Rr(e.update)),$nextTick:e=>e.n||(e.n=Na.bind(e.proxy)),$watch:e=>Ja.bind(e)}),Dn=(e,t)=>e!==L&&!e.__isScriptSetup&&R(e,t),lc={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const A=i[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Dn(r,t))return i[t]=1,r[t];if(s!==L&&R(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&R(f,t))return i[t]=3,o[t];if(n!==L&&R(n,t))return i[t]=4,n[t];rr&&(i[t]=0)}}const d=Ct[t];let w,I;if(d)return t==="$attrs"&&se(e,"get",t),d(e);if((w=a.__cssModules)&&(w=w[t]))return w;if(n!==L&&R(n,t))return i[t]=4,n[t];if(I=c.config.globalProperties,R(I,t))return I[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Dn(s,t)?(s[t]=n,!0):r!==L&&R(r,t)?(r[t]=n,!0):R(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==L&&R(e,i)||Dn(t,i)||(a=o[0])&&R(a,i)||R(r,i)||R(Ct,i)||R(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:R(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function hs(e){return S(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rr=!0;function uc(e){const t=Br(e),n=e.proxy,r=e.ctx;rr=!1,t.beforeCreate&&ps(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:f,created:d,beforeMount:w,mounted:I,beforeUpdate:A,updated:j,activated:P,deactivated:W,beforeDestroy:J,beforeUnmount:Y,destroyed:X,unmounted:x,render:Ce,renderTracked:yt,renderTriggered:Nt,errorCaptured:ke,serverPrefetch:En,expose:Fe,inheritAttrs:wt,components:$t,directives:kt,filters:In}=t;if(f&&fc(f,r,null),i)for(const H in i){const $=i[H];O($)&&(r[H]=$.bind(n))}if(s){const H=s.call(n,n);K(H)&&(e.data=Or(H))}if(rr=!0,o)for(const H in o){const $=o[H],Le=O($)?$.bind(n,n):O($.get)?$.get.bind(n,n):de,Ft=!O($)&&O($.set)?$.set.bind(n):de,je=Kc({get:Le,set:Ft});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>je.value,set:pe=>je.value=pe})}if(a)for(const H in a)jo(a[H],r,n,H);if(c){const H=O(c)?c.call(n):c;Reflect.ownKeys(H).forEach($=>{bc($,H[$])})}d&&ps(d,e,"c");function ee(H,$){S($)?$.forEach(Le=>H(Le.bind(n))):$&&H($.bind(n))}if(ee(Qa,w),ee(ec,I),ee(tc,A),ee(nc,j),ee(Xa,P),ee(Ga,W),ee(ac,ke),ee(ic,yt),ee(oc,Nt),ee(rc,Y),ee(Lo,x),ee(sc,En),S(Fe))if(Fe.length){const H=e.exposed||(e.exposed={});Fe.forEach($=>{Object.defineProperty(H,$,{get:()=>n[$],set:Le=>n[$]=Le})})}else e.exposed||(e.exposed={});Ce&&e.render===de&&(e.render=Ce),wt!=null&&(e.inheritAttrs=wt),$t&&(e.components=$t),kt&&(e.directives=kt)}function fc(e,t,n=de){S(e)&&(e=sr(e));for(const r in e){const s=e[r];let o;K(s)?"default"in s?o=Yt(s.from||r,s.default,!0):o=Yt(s.from||r):o=Yt(s),Q(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function ps(e,t,n){he(S(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function jo(e,t,n,r){const s=r.includes(".")?No(n,r):()=>n[r];if(V(e)){const o=t[e];O(o)&&Sn(s,o)}else if(O(e))Sn(s,e.bind(n));else if(K(e))if(S(e))e.forEach(o=>jo(o,t,n,r));else{const o=O(e.handler)?e.handler.bind(n):t[e.handler];O(o)&&Sn(s,o,e)}}function Br(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(f=>en(c,f,i,!0)),en(c,t,i)),K(t)&&o.set(t,c),c}function en(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&en(e,o,n,!0),s&&s.forEach(i=>en(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=dc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const dc={data:gs,props:ms,emits:ms,methods:Tt,computed:Tt,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Tt,directives:Tt,watch:pc,provide:gs,inject:hc};function gs(e,t){return t?e?function(){return q(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function hc(e,t){return Tt(sr(e),sr(t))}function sr(e){if(S(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function Tt(e,t){return e?q(Object.create(null),e,t):t}function ms(e,t){return e?S(e)&&S(t)?[...new Set([...e,...t])]:q(Object.create(null),hs(e),hs(t??{})):t}function pc(e,t){if(!e)return t;if(!t)return e;const n=q(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function Ho(){return{app:null,config:{isNativeTag:Wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gc=0;function mc(e,t){return function(r,s=null){O(r)||(r=q({},r)),s!=null&&!K(s)&&(s=null);const o=Ho(),i=new WeakSet;let a=!1;const c=o.app={_uid:gc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Vc,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&O(f.install)?(i.add(f),f.install(c,...d)):O(f)&&(i.add(f),f(c,...d))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,d){return d?(o.components[f]=d,c):o.components[f]},directive(f,d){return d?(o.directives[f]=d,c):o.directives[f]},mount(f,d,w){if(!a){const I=xe(r,s);return I.appContext=o,d&&t?t(I,f):e(I,f,w),a=!0,c._container=f,f.__vue_app__=c,mn(I.component)||I.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return o.provides[f]=d,c},runWithContext(f){tn=c;try{return f()}finally{tn=null}}};return c}}let tn=null;function bc(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Yt(e,t,n=!1){const r=Z||ue;if(r||tn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:tn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&O(t)?t.call(r&&r.proxy):t}}function _c(e,t,n,r=!1){const s={},o={};Gt(o,gn,1),e.propsDefaults=Object.create(null),Ko(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Aa(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function yc(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=B(s),[c]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let w=0;w<d.length;w++){let I=d[w];if(fn(e.emitsOptions,I))continue;const A=t[I];if(c)if(R(o,I))A!==o[I]&&(o[I]=A,f=!0);else{const j=ft(I);s[j]=or(c,a,j,A,e,!1)}else A!==o[I]&&(o[I]=A,f=!0)}}}else{Ko(e,t,s,o)&&(f=!0);let d;for(const w in a)(!t||!R(t,w)&&((d=gt(w))===w||!R(t,d)))&&(c?n&&(n[w]!==void 0||n[d]!==void 0)&&(s[w]=or(c,a,w,void 0,e,!0)):delete s[w]);if(o!==a)for(const w in o)(!t||!R(t,w))&&(delete o[w],f=!0)}f&&Ie(e,"set","$attrs")}function Ko(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(zt(c))continue;const f=t[c];let d;s&&R(s,d=ft(c))?!o||!o.includes(d)?n[d]=f:(a||(a={}))[d]=f:fn(e.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,i=!0)}if(o){const c=B(n),f=a||L;for(let d=0;d<o.length;d++){const w=o[d];n[w]=or(s,c,w,f[w],e,!R(f,w))}}return i}function or(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=R(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&O(c)){const{propsDefaults:f}=s;n in f?r=f[n]:(pt(s),r=f[n]=c.call(null,t),Ye())}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===gt(n))&&(r=!0))}return r}function Uo(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!O(e)){const d=w=>{c=!0;const[I,A]=Uo(w,t,!0);q(i,I),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return K(e)&&r.set(e,at),at;if(S(o))for(let d=0;d<o.length;d++){const w=ft(o[d]);bs(w)&&(i[w]=L)}else if(o)for(const d in o){const w=ft(d);if(bs(w)){const I=o[d],A=i[w]=S(I)||O(I)?{type:I}:q({},I);if(A){const j=ws(Boolean,A.type),P=ws(String,A.type);A[0]=j>-1,A[1]=P<0||j<P,(j>-1||R(A,"default"))&&a.push(w)}}}const f=[i,a];return K(e)&&r.set(e,f),f}function bs(e){return e[0]!=="$"}function _s(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ys(e,t){return _s(e)===_s(t)}function ws(e,t){return S(t)?t.findIndex(n=>ys(n,e)):O(t)&&ys(t,e)?0:-1}const Wo=e=>e[0]==="_"||e==="$stable",Nr=e=>S(e)?e.map(be):[be(e)],wc=(e,t,n)=>{if(t._n)return t;const r=Ha((...s)=>Nr(t(...s)),n);return r._c=!1,r},Vo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Wo(s))continue;const o=e[s];if(O(o))t[s]=wc(s,o,r);else if(o!=null){const i=Nr(o);t[s]=()=>i}}},zo=(e,t)=>{const n=Nr(t);e.slots.default=()=>n},Ec=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Gt(t,"_",n)):Vo(t,e.slots={})}else e.slots={},t&&zo(e,t);Gt(e.slots,gn,1)},Ic=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=L;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(q(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Vo(t,s)),i=t}else t&&(zo(e,t),i={default:1});if(o)for(const a in s)!Wo(a)&&i[a]==null&&delete s[a]};function ir(e,t,n,r,s=!1){if(S(e)){e.forEach((I,A)=>ir(I,t&&(S(t)?t[A]:t),n,r,s));return}if(Jt(r)&&!s)return;const o=r.shapeFlag&4?mn(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,f=t&&t.r,d=a.refs===L?a.refs={}:a.refs,w=a.setupState;if(f!=null&&f!==c&&(V(f)?(d[f]=null,R(w,f)&&(w[f]=null)):Q(f)&&(f.value=null)),O(c))Oe(c,a,12,[i,d]);else{const I=V(c),A=Q(c);if(I||A){const j=()=>{if(e.f){const P=I?R(w,c)?w[c]:d[c]:c.value;s?S(P)&&Er(P,o):S(P)?P.includes(o)||P.push(o):I?(d[c]=[o],R(w,c)&&(w[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else I?(d[c]=i,R(w,c)&&(w[c]=i)):A&&(c.value=i,e.k&&(d[e.k]=i))};i?(j.id=-1,re(j,n)):j()}}}const re=qa;function vc(e){return Tc(e)}function Tc(e,t){const n=Xn();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:f,setElementText:d,parentNode:w,nextSibling:I,setScopeId:A=de,insertStaticContent:j}=e,P=(l,u,h,p=null,g=null,_=null,E=!1,b=null,y=!!u.dynamicChildren)=>{if(l===u)return;l&&!It(l,u)&&(p=Lt(l),pe(l,g,_,!0),l=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:m,ref:T,shapeFlag:v}=u;switch(m){case pn:W(l,u,h,p);break;case xt:J(l,u,h,p);break;case On:l==null&&Y(u,h,p,E);break;case ce:$t(l,u,h,p,g,_,E,b,y);break;default:v&1?Ce(l,u,h,p,g,_,E,b,y):v&6?kt(l,u,h,p,g,_,E,b,y):(v&64||v&128)&&m.process(l,u,h,p,g,_,E,b,y,rt)}T!=null&&g&&ir(T,l&&l.ref,_,u||l,!u)},W=(l,u,h,p)=>{if(l==null)r(u.el=a(u.children),h,p);else{const g=u.el=l.el;u.children!==l.children&&f(g,u.children)}},J=(l,u,h,p)=>{l==null?r(u.el=c(u.children||""),h,p):u.el=l.el},Y=(l,u,h,p)=>{[l.el,l.anchor]=j(l.children,u,h,p,l.el,l.anchor)},X=({el:l,anchor:u},h,p)=>{let g;for(;l&&l!==u;)g=I(l),r(l,h,p),l=g;r(u,h,p)},x=({el:l,anchor:u})=>{let h;for(;l&&l!==u;)h=I(l),s(l),l=h;s(u)},Ce=(l,u,h,p,g,_,E,b,y)=>{E=E||u.type==="svg",l==null?yt(u,h,p,g,_,E,b,y):En(l,u,g,_,E,b,y)},yt=(l,u,h,p,g,_,E,b)=>{let y,m;const{type:T,props:v,shapeFlag:C,transition:D,dirs:M}=l;if(y=l.el=i(l.type,_,v&&v.is,v),C&8?d(y,l.children):C&16&&ke(l.children,y,null,p,g,_&&T!=="foreignObject",E,b),M&&He(l,null,p,"created"),Nt(y,l,l.scopeId,E,p),v){for(const N in v)N!=="value"&&!zt(N)&&o(y,N,null,v[N],_,l.children,p,g,ye);"value"in v&&o(y,"value",null,v.value),(m=v.onVnodeBeforeMount)&&me(m,p,l)}M&&He(l,null,p,"beforeMount");const k=Cc(g,D);k&&D.beforeEnter(y),r(y,u,h),((m=v&&v.onVnodeMounted)||k||M)&&re(()=>{m&&me(m,p,l),k&&D.enter(y),M&&He(l,null,p,"mounted")},g)},Nt=(l,u,h,p,g)=>{if(h&&A(l,h),p)for(let _=0;_<p.length;_++)A(l,p[_]);if(g){let _=g.subTree;if(u===_){const E=g.vnode;Nt(l,E,E.scopeId,E.slotScopeIds,g.parent)}}},ke=(l,u,h,p,g,_,E,b,y=0)=>{for(let m=y;m<l.length;m++){const T=l[m]=b?Se(l[m]):be(l[m]);P(null,T,u,h,p,g,_,E,b)}},En=(l,u,h,p,g,_,E)=>{const b=u.el=l.el;let{patchFlag:y,dynamicChildren:m,dirs:T}=u;y|=l.patchFlag&16;const v=l.props||L,C=u.props||L;let D;h&&Ke(h,!1),(D=C.onVnodeBeforeUpdate)&&me(D,h,u,l),T&&He(u,l,h,"beforeUpdate"),h&&Ke(h,!0);const M=g&&u.type!=="foreignObject";if(m?Fe(l.dynamicChildren,m,b,h,p,M,_):E||$(l,u,b,null,h,p,M,_,!1),y>0){if(y&16)wt(b,u,v,C,h,p,g);else if(y&2&&v.class!==C.class&&o(b,"class",null,C.class,g),y&4&&o(b,"style",v.style,C.style,g),y&8){const k=u.dynamicProps;for(let N=0;N<k.length;N++){const U=k[N],ie=v[U],st=C[U];(st!==ie||U==="value")&&o(b,U,ie,st,g,l.children,h,p,ye)}}y&1&&l.children!==u.children&&d(b,u.children)}else!E&&m==null&&wt(b,u,v,C,h,p,g);((D=C.onVnodeUpdated)||T)&&re(()=>{D&&me(D,h,u,l),T&&He(u,l,h,"updated")},p)},Fe=(l,u,h,p,g,_,E)=>{for(let b=0;b<u.length;b++){const y=l[b],m=u[b],T=y.el&&(y.type===ce||!It(y,m)||y.shapeFlag&70)?w(y.el):h;P(y,m,T,null,p,g,_,E,!0)}},wt=(l,u,h,p,g,_,E)=>{if(h!==p){if(h!==L)for(const b in h)!zt(b)&&!(b in p)&&o(l,b,h[b],null,E,u.children,g,_,ye);for(const b in p){if(zt(b))continue;const y=p[b],m=h[b];y!==m&&b!=="value"&&o(l,b,m,y,E,u.children,g,_,ye)}"value"in p&&o(l,"value",h.value,p.value)}},$t=(l,u,h,p,g,_,E,b,y)=>{const m=u.el=l?l.el:a(""),T=u.anchor=l?l.anchor:a("");let{patchFlag:v,dynamicChildren:C,slotScopeIds:D}=u;D&&(b=b?b.concat(D):D),l==null?(r(m,h,p),r(T,h,p),ke(u.children,h,T,g,_,E,b,y)):v>0&&v&64&&C&&l.dynamicChildren?(Fe(l.dynamicChildren,C,h,g,_,E,b),(u.key!=null||g&&u===g.subTree)&&qo(l,u,!0)):$(l,u,h,T,g,_,E,b,y)},kt=(l,u,h,p,g,_,E,b,y)=>{u.slotScopeIds=b,l==null?u.shapeFlag&512?g.ctx.activate(u,h,p,E,y):In(u,h,p,g,_,E,y):Gr(l,u,y)},In=(l,u,h,p,g,_,E)=>{const b=l.component=$c(l,p,g);if(ko(l)&&(b.ctx.renderer=rt),kc(b),b.asyncDep){if(g&&g.registerDep(b,ee),!l.el){const y=b.subTree=xe(xt);J(null,y,u,h)}return}ee(b,l,u,h,g,_,E)},Gr=(l,u,h)=>{const p=u.component=l.component;if(Wa(l,u,h))if(p.asyncDep&&!p.asyncResolved){H(p,u,h);return}else p.next=u,ka(p.update),p.update();else u.el=l.el,p.vnode=u},ee=(l,u,h,p,g,_,E)=>{const b=()=>{if(l.isMounted){let{next:T,bu:v,u:C,parent:D,vnode:M}=l,k=T,N;Ke(l,!1),T?(T.el=M.el,H(l,T,E)):T=M,v&&qt(v),(N=T.props&&T.props.onVnodeBeforeUpdate)&&me(N,D,T,M),Ke(l,!0);const U=An(l),ie=l.subTree;l.subTree=U,P(ie,U,w(ie.el),Lt(ie),l,g,_),T.el=U.el,k===null&&Va(l,U.el),C&&re(C,g),(N=T.props&&T.props.onVnodeUpdated)&&re(()=>me(N,D,T,M),g)}else{let T;const{el:v,props:C}=u,{bm:D,m:M,parent:k}=l,N=Jt(u);if(Ke(l,!1),D&&qt(D),!N&&(T=C&&C.onVnodeBeforeMount)&&me(T,k,u),Ke(l,!0),v&&Tn){const U=()=>{l.subTree=An(l),Tn(v,l.subTree,l,g,null)};N?u.type.__asyncLoader().then(()=>!l.isUnmounted&&U()):U()}else{const U=l.subTree=An(l);P(null,U,h,p,l,g,_),u.el=U.el}if(M&&re(M,g),!N&&(T=C&&C.onVnodeMounted)){const U=u;re(()=>me(T,k,U),g)}(u.shapeFlag&256||k&&Jt(k.vnode)&&k.vnode.shapeFlag&256)&&l.a&&re(l.a,g),l.isMounted=!0,u=h=p=null}},y=l.effect=new Ar(b,()=>Rr(m),l.scope),m=l.update=()=>y.run();m.id=l.uid,Ke(l,!0),m()},H=(l,u,h)=>{u.component=l;const p=l.vnode.props;l.vnode=u,l.next=null,yc(l,u.props,p,h),Ic(l,u.children,h),mt(),fs(),bt()},$=(l,u,h,p,g,_,E,b,y=!1)=>{const m=l&&l.children,T=l?l.shapeFlag:0,v=u.children,{patchFlag:C,shapeFlag:D}=u;if(C>0){if(C&128){Ft(m,v,h,p,g,_,E,b,y);return}else if(C&256){Le(m,v,h,p,g,_,E,b,y);return}}D&8?(T&16&&ye(m,g,_),v!==m&&d(h,v)):T&16?D&16?Ft(m,v,h,p,g,_,E,b,y):ye(m,g,_,!0):(T&8&&d(h,""),D&16&&ke(v,h,p,g,_,E,b,y))},Le=(l,u,h,p,g,_,E,b,y)=>{l=l||at,u=u||at;const m=l.length,T=u.length,v=Math.min(m,T);let C;for(C=0;C<v;C++){const D=u[C]=y?Se(u[C]):be(u[C]);P(l[C],D,h,null,g,_,E,b,y)}m>T?ye(l,g,_,!0,!1,v):ke(u,h,p,g,_,E,b,y,v)},Ft=(l,u,h,p,g,_,E,b,y)=>{let m=0;const T=u.length;let v=l.length-1,C=T-1;for(;m<=v&&m<=C;){const D=l[m],M=u[m]=y?Se(u[m]):be(u[m]);if(It(D,M))P(D,M,h,null,g,_,E,b,y);else break;m++}for(;m<=v&&m<=C;){const D=l[v],M=u[C]=y?Se(u[C]):be(u[C]);if(It(D,M))P(D,M,h,null,g,_,E,b,y);else break;v--,C--}if(m>v){if(m<=C){const D=C+1,M=D<T?u[D].el:p;for(;m<=C;)P(null,u[m]=y?Se(u[m]):be(u[m]),h,M,g,_,E,b,y),m++}}else if(m>C)for(;m<=v;)pe(l[m],g,_,!0),m++;else{const D=m,M=m,k=new Map;for(m=M;m<=C;m++){const oe=u[m]=y?Se(u[m]):be(u[m]);oe.key!=null&&k.set(oe.key,m)}let N,U=0;const ie=C-M+1;let st=!1,es=0;const Et=new Array(ie);for(m=0;m<ie;m++)Et[m]=0;for(m=D;m<=v;m++){const oe=l[m];if(U>=ie){pe(oe,g,_,!0);continue}let ge;if(oe.key!=null)ge=k.get(oe.key);else for(N=M;N<=C;N++)if(Et[N-M]===0&&It(oe,u[N])){ge=N;break}ge===void 0?pe(oe,g,_,!0):(Et[ge-M]=m+1,ge>=es?es=ge:st=!0,P(oe,u[ge],h,null,g,_,E,b,y),U++)}const ts=st?Ac(Et):at;for(N=ts.length-1,m=ie-1;m>=0;m--){const oe=M+m,ge=u[oe],ns=oe+1<T?u[oe+1].el:p;Et[m]===0?P(null,ge,h,ns,g,_,E,b,y):st&&(N<0||m!==ts[N]?je(ge,h,ns,2):N--)}}},je=(l,u,h,p,g=null)=>{const{el:_,type:E,transition:b,children:y,shapeFlag:m}=l;if(m&6){je(l.component.subTree,u,h,p);return}if(m&128){l.suspense.move(u,h,p);return}if(m&64){E.move(l,u,h,rt);return}if(E===ce){r(_,u,h);for(let v=0;v<y.length;v++)je(y[v],u,h,p);r(l.anchor,u,h);return}if(E===On){X(l,u,h);return}if(p!==2&&m&1&&b)if(p===0)b.beforeEnter(_),r(_,u,h),re(()=>b.enter(_),g);else{const{leave:v,delayLeave:C,afterLeave:D}=b,M=()=>r(_,u,h),k=()=>{v(_,()=>{M(),D&&D()})};C?C(_,M,k):k()}else r(_,u,h)},pe=(l,u,h,p=!1,g=!1)=>{const{type:_,props:E,ref:b,children:y,dynamicChildren:m,shapeFlag:T,patchFlag:v,dirs:C}=l;if(b!=null&&ir(b,null,h,l,!0),T&256){u.ctx.deactivate(l);return}const D=T&1&&C,M=!Jt(l);let k;if(M&&(k=E&&E.onVnodeBeforeUnmount)&&me(k,u,l),T&6)Ui(l.component,h,p);else{if(T&128){l.suspense.unmount(h,p);return}D&&He(l,null,u,"beforeUnmount"),T&64?l.type.remove(l,u,h,g,rt,p):m&&(_!==ce||v>0&&v&64)?ye(m,u,h,!1,!0):(_===ce&&v&384||!g&&T&16)&&ye(y,u,h),p&&Zr(l)}(M&&(k=E&&E.onVnodeUnmounted)||D)&&re(()=>{k&&me(k,u,l),D&&He(l,null,u,"unmounted")},h)},Zr=l=>{const{type:u,el:h,anchor:p,transition:g}=l;if(u===ce){Ki(h,p);return}if(u===On){x(l);return}const _=()=>{s(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:b}=g,y=()=>E(h,_);b?b(l.el,_,y):y()}else _()},Ki=(l,u)=>{let h;for(;l!==u;)h=I(l),s(l),l=h;s(u)},Ui=(l,u,h)=>{const{bum:p,scope:g,update:_,subTree:E,um:b}=l;p&&qt(p),g.stop(),_&&(_.active=!1,pe(E,l,u,h)),b&&re(b,u),re(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},ye=(l,u,h,p=!1,g=!1,_=0)=>{for(let E=_;E<l.length;E++)pe(l[E],u,h,p,g)},Lt=l=>l.shapeFlag&6?Lt(l.component.subTree):l.shapeFlag&128?l.suspense.next():I(l.anchor||l.el),Qr=(l,u,h)=>{l==null?u._vnode&&pe(u._vnode,null,null,!0):P(u._vnode||null,l,u,null,null,null,h),fs(),Oo(),u._vnode=l},rt={p:P,um:pe,m:je,r:Zr,mt:In,mc:ke,pc:$,pbc:Fe,n:Lt,o:e};let vn,Tn;return t&&([vn,Tn]=t(rt)),{render:Qr,hydrate:vn,createApp:mc(Qr,vn)}}function Ke({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const r=e.children,s=t.children;if(S(r)&&S(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Se(s[o]),a.el=i.el),n||qo(i,a)),a.type===pn&&(a.el=i.el)}}function Ac(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Sc=e=>e.__isTeleport,ce=Symbol.for("v-fgt"),pn=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),On=Symbol.for("v-stc"),At=[];let fe=null;function Jo(e=!1){At.push(fe=e?null:[])}function Dc(){At.pop(),fe=At[At.length-1]||null}let Mt=1;function Es(e){Mt+=e}function Oc(e){return e.dynamicChildren=Mt>0?fe||at:null,Dc(),Mt>0&&fe&&fe.push(e),e}function Yo(e,t,n,r,s,o){return Oc(z(e,t,n,r,s,o,!0))}function xc(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const gn="__vInternal",Xo=({key:e})=>e??null,Xt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?V(e)||Q(e)||O(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,s=null,o=e===ce?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xo(t),ref:t&&Xt(t),scopeId:dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ue};return a?($r(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=V(n)?8:16),Mt>0&&!i&&fe&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&fe.push(c),c}const xe=Mc;function Mc(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===cc)&&(e=xt),xc(e)){const a=ht(e,t,!0);return n&&$r(a,n),Mt>0&&!o&&fe&&(a.shapeFlag&6?fe[fe.indexOf(e)]=a:fe.push(a)),a.patchFlag|=-2,a}if(Hc(e)&&(e=e.__vccOpts),t){t=Pc(t);let{class:a,style:c}=t;a&&!V(a)&&(t.class=Tr(a)),K(c)&&(Io(c)&&!S(c)&&(c=q({},c)),t.style=vr(c))}const i=V(e)?1:za(e)?128:Sc(e)?64:K(e)?4:O(e)?2:0;return z(e,t,n,r,s,i,o,!0)}function Pc(e){return e?Io(e)||gn in e?q({},e):e:null}function ht(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?Rc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Xo(a),ref:t&&t.ref?n&&s?S(s)?s.concat(Xt(t)):[s,Xt(t)]:Xt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ge(e=" ",t=0){return xe(pn,null,e,t)}function be(e){return e==null||typeof e=="boolean"?xe(xt):S(e)?xe(ce,null,e.slice()):typeof e=="object"?Se(e):xe(pn,null,String(e))}function Se(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function $r(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(S(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),$r(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(gn in t)?t._ctx=ue:s===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[Ge(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Tr([t.class,r.class]));else if(s==="style")t.style=vr([t.style,r.style]);else if(sn(s)){const o=t[s],i=r[s];i&&o!==i&&!(S(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function me(e,t,n,r=null){he(e,t,7,[n,r])}const Bc=Ho();let Nc=0;function $c(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Bc,o={uid:Nc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ra(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(r,s),emitsOptions:Mo(r,s),emit:null,emitted:null,propsDefaults:L,inheritAttrs:r.inheritAttrs,ctx:L,data:L,props:L,attrs:L,slots:L,refs:L,setupState:L,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ja.bind(null,o),e.ce&&e.ce(o),o}let Z=null,kr,ot,Is="__VUE_INSTANCE_SETTERS__";(ot=Xn()[Is])||(ot=Xn()[Is]=[]),ot.push(e=>Z=e),kr=e=>{ot.length>1?ot.forEach(t=>t(e)):ot[0](e)};const pt=e=>{kr(e),e.scope.on()},Ye=()=>{Z&&Z.scope.off(),kr(null)};function Go(e){return e.vnode.shapeFlag&4}let Pt=!1;function kc(e,t=!1){Pt=t;const{props:n,children:r}=e.vnode,s=Go(e);_c(e,n,s,t),Ec(e,r);const o=s?Fc(e,t):void 0;return Pt=!1,o}function Fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=vo(new Proxy(e.ctx,lc));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?jc(e):null;pt(e),mt();const o=Oe(r,e,0,[e.props,s]);if(bt(),Ye(),so(o)){if(o.then(Ye,Ye),t)return o.then(i=>{vs(e,i,t)}).catch(i=>{un(i,e,0)});e.asyncDep=o}else vs(e,o,t)}else Zo(e,t)}function vs(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=Ao(t)),Zo(e,n)}let Ts;function Zo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ts&&!r.render){const s=r.template||Br(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,f=q(q({isCustomElement:o,delimiters:a},i),c);r.render=Ts(s,f)}}e.render=r.render||de}{pt(e),mt();try{uc(e)}finally{bt(),Ye()}}}function Lc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return se(e,"get","$attrs"),t[n]}}))}function jc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Lc(e)},slots:e.slots,emit:e.emit,expose:t}}function mn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ao(vo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ct)return Ct[n](e)},has(t,n){return n in t||n in Ct}}))}function Hc(e){return O(e)&&"__vccOpts"in e}const Kc=(e,t)=>Ra(e,t,Pt),Uc=Symbol.for("v-scx"),Wc=()=>Yt(Uc),Vc="3.3.7",zc="http://www.w3.org/2000/svg",Ve=typeof document<"u"?document:null,Cs=Ve&&Ve.createElement("template"),qc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Ve.createElementNS(zc,e):Ve.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ve.createTextNode(e),createComment:e=>Ve.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ve.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Cs.innerHTML=r?`<svg>${e}</svg>`:e;const a=Cs.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Jc=Symbol("_vtc");function Yc(e,t,n){const r=e[Jc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xc=Symbol("_vod");function Gc(e,t,n){const r=e.style,s=V(n);if(n&&!s){if(t&&!V(t))for(const o in t)n[o]==null&&ar(r,o,"");for(const o in n)ar(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Xc in e&&(r.display=o)}}const As=/\s*!important$/;function ar(e,t,n){if(S(n))n.forEach(r=>ar(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zc(e,t);As.test(n)?e.setProperty(gt(r),n.replace(As,""),"important"):e[r]=n}}const Ss=["Webkit","Moz","ms"],xn={};function Zc(e,t){const n=xn[t];if(n)return n;let r=ft(t);if(r!=="filter"&&r in e)return xn[t]=r;r=ao(r);for(let s=0;s<Ss.length;s++){const o=Ss[s]+r;if(o in e)return xn[t]=o}return t}const Ds="http://www.w3.org/1999/xlink";function Qc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ds,t.slice(6,t.length)):e.setAttributeNS(Ds,t,n);else{const o=ta(t);n==null||o&&!co(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function el(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const f=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=co(n):n==null&&f==="string"?(n="",c=!0):f==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function it(e,t,n,r){e.addEventListener(t,n,r)}function tl(e,t,n,r){e.removeEventListener(t,n,r)}const Os=Symbol("_vei");function nl(e,t,n,r,s=null){const o=e[Os]||(e[Os]={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=rl(t);if(r){const f=o[t]=il(r,s);it(e,a,f,c)}else i&&(tl(e,a,i,c),o[t]=void 0)}}const xs=/(?:Once|Passive|Capture)$/;function rl(e){let t;if(xs.test(e)){t={};let r;for(;r=e.match(xs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let Mn=0;const sl=Promise.resolve(),ol=()=>Mn||(sl.then(()=>Mn=0),Mn=Date.now());function il(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;he(al(r,n.value),t,5,[r])};return n.value=e,n.attached=ol(),n}function al(e,t){if(S(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ms=/^on[a-z]/,cl=(e,t,n,r,s=!1,o,i,a,c)=>{t==="class"?Yc(e,r,s):t==="style"?Gc(e,n,r):sn(t)?wr(t)||nl(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ll(e,t,r,s))?el(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Qc(e,t,r,s))};function ll(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ms.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ms.test(t)&&V(n)?!1:t in e}const Ps=e=>{const t=e.props["onUpdate:modelValue"]||!1;return S(t)?n=>qt(t,n):t};function ul(e){e.target.composing=!0}function Rs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Pn=Symbol("_assign"),fl={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Pn]=Ps(s);const o=r||s.props&&s.props.type==="number";it(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=Yn(a)),e[Pn](a)}),n&&it(e,"change",()=>{e.value=e.value.trim()}),t||(it(e,"compositionstart",ul),it(e,"compositionend",Rs),it(e,"change",Rs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[Pn]=Ps(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&Yn(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},dl=q({patchProp:cl},qc);let Bs;function hl(){return Bs||(Bs=vc(dl))}const pl=(...e)=>{const t=hl().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=gl(r);if(!s)return;const o=t._component;!O(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function gl(e){return V(e)?document.querySelector(e):e}const ml="/vite.svg",bl="/assets/vue-5532db34.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},_l=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,f=c?e[s+2]:0,d=o>>2,w=(o&3)<<4|a>>4;let I=(a&15)<<2|f>>6,A=f&63;c||(A=64,i||(I=64)),r.push(n[d],n[w],n[I],n[A])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_l(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const w=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||f==null||w==null)throw new yl;const I=o<<2|a>>4;if(r.push(I),f!==64){const A=a<<4&240|f>>2;if(r.push(A),w!==64){const j=f<<6&192|w;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wl=function(e){const t=Qo(e);return ei.encodeByteArray(t,!0)},ti=function(e){return wl(e).replace(/\./g,"")},El=function(e){try{return ei.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=()=>Il().__FIREBASE_DEFAULTS__,Tl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Cl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&El(e[1]);return t&&JSON.parse(t)},Al=()=>{try{return vl()||Tl()||Cl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ni=()=>{var e;return(e=Al())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function ri(){try{return typeof indexedDB=="object"}catch{return!1}}function si(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Dl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="FirebaseError";class _t extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ol,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?xl(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new _t(s,a,r)}}function xl(e,t){return e.replace(Ml,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ml=/\{\$([^}]+)}/g;function cr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Ns(o)&&Ns(i)){if(!cr(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ns(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e){return e&&e._delegate?e._delegate:e}class $e{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bl(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ue){return this.instances.has(t)}getOptions(t=Ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ue){return this.component?this.component.multipleInstances?t:Ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(e){return e===Ue?void 0:e}function Bl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const $l={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},kl=F.INFO,Fl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Ll=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Fl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jl{constructor(t){this.name=t,this._logLevel=kl,this._logHandler=Ll,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$l[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Hl=(e,t)=>t.some(n=>e instanceof n);let $s,ks;function Kl(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ul(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ii=new WeakMap,lr=new WeakMap,ai=new WeakMap,Rn=new WeakMap,Fr=new WeakMap;function Wl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Me(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ii.set(n,e)}).catch(()=>{}),Fr.set(t,e),t}function Vl(e){if(lr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});lr.set(e,t)}let ur={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return lr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ai.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function zl(e){ur=e(ur)}function ql(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Bn(this),t,...n);return ai.set(r,t.sort?t.sort():[t]),Me(r)}:Ul().includes(e)?function(...t){return e.apply(Bn(this),t),Me(ii.get(this))}:function(...t){return Me(e.apply(Bn(this),t))}}function Jl(e){return typeof e=="function"?ql(e):(e instanceof IDBTransaction&&Vl(e),Hl(e,Kl())?new Proxy(e,ur):e)}function Me(e){if(e instanceof IDBRequest)return Wl(e);if(Rn.has(e))return Rn.get(e);const t=Jl(e);return t!==e&&(Rn.set(e,t),Fr.set(t,e)),t}const Bn=e=>Fr.get(e);function Yl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Me(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Me(i.result),c.oldVersion,c.newVersion,Me(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const Xl=["get","getKey","getAll","getAllKeys","count"],Gl=["put","add","delete","clear"],Nn=new Map;function Fs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Nn.get(t))return Nn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Gl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xl.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Nn.set(t,o),o}zl(e=>({...e,get:(t,n,r)=>Fs(t,n)||e.get(t,n,r),has:(t,n)=>!!Fs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ql(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ql(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fr="@firebase/app",Ls="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new jl("@firebase/app"),eu="@firebase/app-compat",tu="@firebase/analytics-compat",nu="@firebase/analytics",ru="@firebase/app-check-compat",su="@firebase/app-check",ou="@firebase/auth",iu="@firebase/auth-compat",au="@firebase/database",cu="@firebase/database-compat",lu="@firebase/functions",uu="@firebase/functions-compat",fu="@firebase/installations",du="@firebase/installations-compat",hu="@firebase/messaging",pu="@firebase/messaging-compat",gu="@firebase/performance",mu="@firebase/performance-compat",bu="@firebase/remote-config",_u="@firebase/remote-config-compat",yu="@firebase/storage",wu="@firebase/storage-compat",Eu="@firebase/firestore",Iu="@firebase/firestore-compat",vu="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]",Tu={[fr]:"fire-core",[eu]:"fire-core-compat",[nu]:"fire-analytics",[tu]:"fire-analytics-compat",[su]:"fire-app-check",[ru]:"fire-app-check-compat",[ou]:"fire-auth",[iu]:"fire-auth-compat",[au]:"fire-rtdb",[cu]:"fire-rtdb-compat",[lu]:"fire-fn",[uu]:"fire-fn-compat",[fu]:"fire-iid",[du]:"fire-iid-compat",[hu]:"fire-fcm",[pu]:"fire-fcm-compat",[gu]:"fire-perf",[mu]:"fire-perf-compat",[bu]:"fire-rc",[_u]:"fire-rc-compat",[yu]:"fire-gcs",[wu]:"fire-gcs-compat",[Eu]:"fire-fst",[Iu]:"fire-fst-compat","fire-js":"fire-js",[vu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map,hr=new Map;function Cu(e,t){try{e.container.addComponent(t)}catch(n){Ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qe(e){const t=e.name;if(hr.has(t))return Ze.debug(`There were multiple attempts to register component ${t}.`),!1;hr.set(t,e);for(const n of nn.values())Cu(n,e);return!0}function Lr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new bn("app","Firebase",Au);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}function ci(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:dr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pe.create("bad-app-name",{appName:String(s)});if(n||(n=ni()),!n)throw Pe.create("no-options");const o=nn.get(s);if(o){if(cr(n,o.options)&&cr(r,o.config))return o;throw Pe.create("duplicate-app",{appName:s})}const i=new Nl(s);for(const c of hr.values())i.addComponent(c);const a=new Su(n,r,i);return nn.set(s,a),a}function Du(e=dr){const t=nn.get(e);if(!t&&e===dr&&ni())return ci();if(!t)throw Pe.create("no-app",{appName:e});return t}function Re(e,t,n){var r;let s=(r=Tu[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}Qe(new $e(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="firebase-heartbeat-database",xu=1,Rt="firebase-heartbeat-store";let $n=null;function li(){return $n||($n=Yl(Ou,xu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Rt)}}}).catch(e=>{throw Pe.create("idb-open",{originalErrorMessage:e.message})})),$n}async function Mu(e){try{return await(await li()).transaction(Rt).objectStore(Rt).get(ui(e))}catch(t){if(t instanceof _t)Ze.warn(t.message);else{const n=Pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(n.message)}}}async function js(e,t){try{const r=(await li()).transaction(Rt,"readwrite");await r.objectStore(Rt).put(t,ui(e)),await r.done}catch(n){if(n instanceof _t)Ze.warn(n.message);else{const r=Pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ze.warn(r.message)}}}function ui(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=1024,Ru=30*24*60*60*1e3;class Bu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $u(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Ru}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hs(),{heartbeatsToSend:n,unsentEntries:r}=Nu(this._heartbeatsCache.heartbeats),s=ti(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Hs(){return new Date().toISOString().substring(0,10)}function Nu(e,t=Pu){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Ks(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ks(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $u{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ri()?si().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return js(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return js(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ks(e){return ti(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){Qe(new $e("platform-logger",t=>new Zl(t),"PRIVATE")),Qe(new $e("heartbeat",t=>new Bu(t),"PRIVATE")),Re(fr,Ls,e),Re(fr,Ls,"esm2017"),Re("fire-js","")}ku("");var Fu="firebase",Lu="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(Fu,Lu,"app");const ju=(e,t)=>t.some(n=>e instanceof n);let Us,Ws;function Hu(){return Us||(Us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ku(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fi=new WeakMap,pr=new WeakMap,di=new WeakMap,kn=new WeakMap,jr=new WeakMap;function Uu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Be(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&fi.set(n,e)}).catch(()=>{}),jr.set(t,e),t}function Wu(e){if(pr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});pr.set(e,t)}let gr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||di.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vu(e){gr=e(gr)}function zu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fn(this),t,...n);return di.set(r,t.sort?t.sort():[t]),Be(r)}:Ku().includes(e)?function(...t){return e.apply(Fn(this),t),Be(fi.get(this))}:function(...t){return Be(e.apply(Fn(this),t))}}function qu(e){return typeof e=="function"?zu(e):(e instanceof IDBTransaction&&Wu(e),ju(e,Hu())?new Proxy(e,gr):e)}function Be(e){if(e instanceof IDBRequest)return Uu(e);if(kn.has(e))return kn.get(e);const t=qu(e);return t!==e&&(kn.set(e,t),jr.set(t,e)),t}const Fn=e=>jr.get(e);function Ju(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Be(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Be(i.result),c.oldVersion,c.newVersion,Be(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Yu=["get","getKey","getAll","getAllKeys","count"],Xu=["put","add","delete","clear"],Ln=new Map;function Vs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ln.get(t))return Ln.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Xu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yu.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Ln.set(t,o),o}Vu(e=>({...e,get:(t,n,r)=>Vs(t,n)||e.get(t,n,r),has:(t,n)=>!!Vs(t,n)||e.has(t,n)}));const hi="@firebase/installations",Hr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=1e4,gi=`w:${Hr}`,mi="FIS_v2",Gu="https://firebaseinstallations.googleapis.com/v1",Zu=60*60*1e3,Qu="installations",ef="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},et=new bn(Qu,ef,tf);function bi(e){return e instanceof _t&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i({projectId:e}){return`${Gu}/projects/${e}/installations`}function yi(e){return{token:e.token,requestStatus:2,expiresIn:rf(e.expiresIn),creationTime:Date.now()}}async function wi(e,t){const r=(await t.json()).error;return et.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ei({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nf(e,{refreshToken:t}){const n=Ei(e);return n.append("Authorization",sf(t)),n}async function Ii(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rf(e){return Number(e.replace("s","000"))}function sf(e){return`${mi} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=_i(e),s=Ei(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:mi,appId:e.appId,sdkVersion:gi},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Ii(()=>fetch(r,a));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:yi(f.authToken)}}else throw await wi("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=/^[cdef][\w-]{21}$/,mr="";function lf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=uf(e);return cf.test(n)?n:mr}catch{return mr}}function uf(e){return af(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Map;function Ci(e,t){const n=_n(e);Ai(n,t),ff(n,t)}function Ai(e,t){const n=Ti.get(e);if(n)for(const r of n)r(t)}function ff(e,t){const n=df();n&&n.postMessage({key:e,fid:t}),hf()}let qe=null;function df(){return!qe&&"BroadcastChannel"in self&&(qe=new BroadcastChannel("[Firebase] FID Change"),qe.onmessage=e=>{Ai(e.data.key,e.data.fid)}),qe}function hf(){Ti.size===0&&qe&&(qe.close(),qe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="firebase-installations-database",gf=1,tt="firebase-installations-store";let jn=null;function Kr(){return jn||(jn=Ju(pf,gf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(tt)}}})),jn}async function rn(e,t){const n=_n(e),s=(await Kr()).transaction(tt,"readwrite"),o=s.objectStore(tt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&Ci(e,t.fid),t}async function Si(e){const t=_n(e),r=(await Kr()).transaction(tt,"readwrite");await r.objectStore(tt).delete(t),await r.done}async function yn(e,t){const n=_n(e),s=(await Kr()).transaction(tt,"readwrite"),o=s.objectStore(tt),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Ci(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(e){let t;const n=await yn(e.appConfig,r=>{const s=mf(r),o=bf(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===mr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mf(e){const t=e||{fid:lf(),registrationStatus:0};return Di(t)}function bf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(et.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=_f(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yf(e)}:{installationEntry:t}}async function _f(e,t){try{const n=await of(e,t);return rn(e.appConfig,n)}catch(n){throw bi(n)&&n.customData.serverCode===409?await Si(e.appConfig):await rn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yf(e){let t=await zs(e.appConfig);for(;t.registrationStatus===1;)await vi(100),t=await zs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ur(e);return r||n}return t}function zs(e){return yn(e,t=>{if(!t)throw et.create("installation-not-found");return Di(t)})}function Di(e){return wf(e)?{fid:e.fid,registrationStatus:0}:e}function wf(e){return e.registrationStatus===1&&e.registrationTime+pi<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef({appConfig:e,heartbeatServiceProvider:t},n){const r=If(e,n),s=nf(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:gi,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Ii(()=>fetch(r,a));if(c.ok){const f=await c.json();return yi(f)}else throw await wi("Generate Auth Token",c)}function If(e,{fid:t}){return`${_i(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(e,t=!1){let n;const r=await yn(e.appConfig,o=>{if(!Oi(o))throw et.create("not-registered");const i=o.authToken;if(!t&&Cf(i))return o;if(i.requestStatus===1)return n=vf(e,t),o;{if(!navigator.onLine)throw et.create("app-offline");const a=Sf(o);return n=Tf(e,a),a}});return n?await n:r.authToken}async function vf(e,t){let n=await qs(e.appConfig);for(;n.authToken.requestStatus===1;)await vi(100),n=await qs(e.appConfig);const r=n.authToken;return r.requestStatus===0?Wr(e,t):r}function qs(e){return yn(e,t=>{if(!Oi(t))throw et.create("not-registered");const n=t.authToken;return Df(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tf(e,t){try{const n=await Ef(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await rn(e.appConfig,r),n}catch(n){if(bi(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Si(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rn(e.appConfig,r)}throw n}}function Oi(e){return e!==void 0&&e.registrationStatus===2}function Cf(e){return e.requestStatus===2&&!Af(e)}function Af(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Zu}function Sf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Df(e){return e.requestStatus===1&&e.requestTime+pi<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ur(t);return r?r.catch(console.error):Wr(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(e,t=!1){const n=e;return await Mf(n),(await Wr(n,t)).token}async function Mf(e){const{registrationPromise:t}=await Ur(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(e){if(!e||!e.options)throw Hn("App Configuration");if(!e.name)throw Hn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hn(e){return et.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="installations",Rf="installations-internal",Bf=e=>{const t=e.getProvider("app").getImmediate(),n=Pf(t),r=Lr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Nf=e=>{const t=e.getProvider("app").getImmediate(),n=Lr(t,xi).getImmediate();return{getId:()=>Of(n),getToken:s=>xf(n,s)}};function $f(){Qe(new $e(xi,Bf,"PUBLIC")),Qe(new $e(Rf,Nf,"PRIVATE"))}$f();Re(hi,Hr);Re(hi,Hr,"esm2017");const kf=(e,t)=>t.some(n=>e instanceof n);let Js,Ys;function Ff(){return Js||(Js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lf(){return Ys||(Ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mi=new WeakMap,br=new WeakMap,Pi=new WeakMap,Kn=new WeakMap,Vr=new WeakMap;function jf(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(ve(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Mi.set(n,e)}).catch(()=>{}),Vr.set(t,e),t}function Hf(e){if(br.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});br.set(e,t)}let _r={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return br.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Pi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ve(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Kf(e){_r=e(_r)}function Uf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Un(this),t,...n);return Pi.set(r,t.sort?t.sort():[t]),ve(r)}:Lf().includes(e)?function(...t){return e.apply(Un(this),t),ve(Mi.get(this))}:function(...t){return ve(e.apply(Un(this),t))}}function Wf(e){return typeof e=="function"?Uf(e):(e instanceof IDBTransaction&&Hf(e),kf(e,Ff())?new Proxy(e,_r):e)}function ve(e){if(e instanceof IDBRequest)return jf(e);if(Kn.has(e))return Kn.get(e);const t=Wf(e);return t!==e&&(Kn.set(e,t),Vr.set(t,e)),t}const Un=e=>Vr.get(e);function Ri(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=ve(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ve(i.result),c.oldVersion,c.newVersion,ve(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}function Wn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),ve(n).then(()=>{})}const Vf=["get","getKey","getAll","getAllKeys","count"],zf=["put","add","delete","clear"],Vn=new Map;function Xs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vn.get(t))return Vn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=zf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vf.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Vn.set(t,o),o}Kf(e=>({...e,get:(t,n,r)=>Xs(t,n)||e.get(t,n,r),has:(t,n)=>!!Xs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="/firebase-messaging-sw.js",Jf="/firebase-cloud-messaging-push-scope",Bi="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Yf="https://fcmregistrations.googleapis.com/v1",Ni="google.c.a.c_id",Xf="google.c.a.c_l",Gf="google.c.a.ts",Zf="google.c.a.e";var Gs;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Gs||(Gs={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Bt;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Bt||(Bt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Qf(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="fcm_token_details_db",ed=5,Zs="fcm_token_object_Store";async function td(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(zn))return null;let t=null;return(await Ri(zn,ed,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(Zs))return;const c=i.objectStore(Zs),f=await c.index("fcmSenderId").get(e);if(await c.clear(),!!f){if(s===2){const d=f;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Ee(d.vapidKey)}}}else if(s===3){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Ee(d.auth),p256dh:Ee(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Ee(d.vapidKey)}}}else if(s===4){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Ee(d.auth),p256dh:Ee(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Ee(d.vapidKey)}}}}}})).close(),await Wn(zn),await Wn("fcm_vapid_details_db"),await Wn("undefined"),nd(t)?t:null}function nd(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebase-messaging-database",sd=1,nt="firebase-messaging-store";let qn=null;function zr(){return qn||(qn=Ri(rd,sd,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(nt)}}})),qn}async function $i(e){const t=Jr(e),r=await(await zr()).transaction(nt).objectStore(nt).get(t);if(r)return r;{const s=await td(e.appConfig.senderId);if(s)return await qr(e,s),s}}async function qr(e,t){const n=Jr(e),s=(await zr()).transaction(nt,"readwrite");return await s.objectStore(nt).put(t,n),await s.done,t}async function od(e){const t=Jr(e),r=(await zr()).transaction(nt,"readwrite");await r.objectStore(nt).delete(t),await r.done}function Jr({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ne=new bn("messaging","Messaging",id);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(e,t){const n=await Xr(e),r=Fi(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Yr(e.appConfig),s)).json()}catch(i){throw ne.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ne.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw ne.create("token-subscribe-no-token");return o.token}async function cd(e,t){const n=await Xr(e),r=Fi(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Yr(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw ne.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ne.create("token-update-failed",{errorInfo:i})}if(!o.token)throw ne.create("token-update-no-token");return o.token}async function ki(e,t){const r={method:"DELETE",headers:await Xr(e)};try{const o=await(await fetch(`${Yr(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw ne.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw ne.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Yr({projectId:e}){return`${Yf}/projects/${e}/registrations`}async function Xr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Fi({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Bi&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=7*24*60*60*1e3;async function ud(e){const t=await hd(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ee(t.getKey("auth")),p256dh:Ee(t.getKey("p256dh"))},r=await $i(e.firebaseDependencies);if(r){if(pd(r.subscriptionOptions,n))return Date.now()>=r.createTime+ld?dd(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ki(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Qs(e.firebaseDependencies,n)}else return Qs(e.firebaseDependencies,n)}async function fd(e){const t=await $i(e.firebaseDependencies);t&&(await ki(e.firebaseDependencies,t.token),await od(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function dd(e,t){try{const n=await cd(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await qr(e.firebaseDependencies,r),n}catch(n){throw await fd(e),n}}async function Qs(e,t){const r={token:await ad(e,t),createTime:Date.now(),subscriptionOptions:t};return await qr(e,r),r.token}async function hd(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Qf(t)})}function pd(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return gd(t,e),md(t,e),bd(t,e),t}function gd(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function md(e,t){t.data&&(e.data=t.data)}function bd(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e){return typeof e=="object"&&!!e&&Ni in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Li("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Li(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e){if(!e||!e.options)throw Jn("App Configuration Object");if(!e.name)throw Jn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Jn(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Jn(e){return ne.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=yd(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(e){try{e.swRegistration=await navigator.serviceWorker.register(qf,{scope:Jf}),e.swRegistration.update().catch(()=>{})}catch(t){throw ne.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(e,t){if(!t&&!e.swRegistration&&await Ed(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ne.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Bi)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(e,t){if(!navigator)throw ne.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ne.create("permission-blocked");return await vd(e,t==null?void 0:t.vapidKey),await Id(e,t==null?void 0:t.serviceWorkerRegistration),ud(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(e,t,n){const r=Cd(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Ni],message_name:n[Xf],message_time:n[Gf],message_device_time:Math.floor(Date.now()/1e3)})}function Cd(e){switch(e){case Bt.NOTIFICATION_CLICKED:return"notification_open";case Bt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ad(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Bt.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(eo(n)):e.onMessageHandler.next(eo(n)));const r=n.data;_d(r)&&r[Zf]==="1"&&await Td(e,n.messageType,r)}const to="@firebase/messaging",no="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=e=>{const t=new wd(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ad(t,n)),t},Dd=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>ji(t,r)}};function Od(){Qe(new $e("messaging",Sd,"PUBLIC")),Qe(new $e("messaging-internal",Dd,"PRIVATE")),Re(to,no),Re(to,no,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(){try{await si()}catch{return!1}return typeof window<"u"&&ri()&&Dl()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e=Du()){return xd().then(t=>{if(!t)throw ne.create("unsupported-browser")},t=>{throw ne.create("indexed-db-unsupported")}),Lr(oi(e),"messaging").getImmediate()}async function Pd(e,t){return e=oi(e),ji(e,t)}Od();const wn=e=>(Po("data-v-df47dc23"),e=e(),Ro(),e),Rd=wn(()=>z("div",{class:"card"},[z("p",null,[Ge(" Edit "),z("code",null,"components/HelloWorld.vue"),Ge(" to test HMR ")])],-1)),Bd=wn(()=>z("p",null,[Ge(" Check out "),z("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),Ge(", the official Vue + Vite starter ")],-1)),Nd=wn(()=>z("p",null,[Ge(" Install "),z("a",{href:"https://github.com/vuejs/language-tools",target:"_blank"},"Volar"),Ge(" in your IDE for a better DX ")],-1)),$d=wn(()=>z("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),kd=$o({__name:"HelloWorld",props:{msg:{}},setup(e){const t=Sa(""),r=ci({apiKey:"AIzaSyBzn5R-pwBBJleWoXGRoNyARZPWsnc_hdE",authDomain:"guia-da-carreira.firebaseapp.com",projectId:"guia-da-carreira",storageBucket:"guia-da-carreira.appspot.com",messagingSenderId:"593917866707",appId:"1:593917866707:web:899dff70c197fb6a7c1a26",measurementId:"G-207WBD3J4M"}),s=Md(r);return Pd(s,{vapidKey:"BGQV9f_acJiZ32u7coDXbuUhpIRvYDDWE4hKcWR5-0q_A2POShUwDwiXfrbGRgckZw7YHqqaOLcMqcPOiU7akMY"}).then(o=>{if(o)console.log("Notification permission already granted."),t.value=o;else return console.log("No registration token available. Request permission to generate one."),Notification.requestPermission().then(i=>{i==="granted"?(console.log("Notification permission granted."),t.value=o):console.log("Unable to get permission to notify.")})}).catch(o=>{console.log("An error occurred while retrieving token. ",o)}),(o,i)=>(Jo(),Yo(ce,null,[z("h1",null,na(o.msg),1),Ya(z("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":i[0]||(i[0]=a=>t.value=a)},null,512),[[fl,t.value]]),Rd,Bd,Nd,$d],64))}});const Hi=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Fd=Hi(kd,[["__scopeId","data-v-df47dc23"]]),Ld=e=>(Po("data-v-58aba71c"),e=e(),Ro(),e),jd=Ld(()=>z("div",null,[z("a",{href:"https://vitejs.dev",target:"_blank"},[z("img",{src:ml,class:"logo",alt:"Vite logo"})]),z("a",{href:"https://vuejs.org/",target:"_blank"},[z("img",{src:bl,class:"logo vue",alt:"Vue logo"})])],-1)),Hd=$o({__name:"App",setup(e){return(t,n)=>(Jo(),Yo(ce,null,[jd,xe(Fd,{msg:"Vite + Vue"})],64))}});const Kd=Hi(Hd,[["__scopeId","data-v-58aba71c"]]);pl(Kd).mount("#app");
