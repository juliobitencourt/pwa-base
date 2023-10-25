(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function fr(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const L={},ot=[],de=()=>{},Mi=()=>!1,Pi=/^on[^a-z]/,rn=e=>Pi.test(e),dr=e=>e.startsWith("onUpdate:"),V=Object.assign,hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ni=Object.prototype.hasOwnProperty,N=(e,t)=>Ni.call(e,t),D=Array.isArray,it=e=>sn(e)==="[object Map]",zs=e=>sn(e)==="[object Set]",O=e=>typeof e=="function",q=e=>typeof e=="string",pr=e=>typeof e=="symbol",U=e=>e!==null&&typeof e=="object",Js=e=>U(e)&&O(e.then)&&O(e.catch),Ys=Object.prototype.toString,sn=e=>Ys.call(e),Ri=e=>sn(e).slice(8,-1),Gs=e=>sn(e)==="[object Object]",gr=e=>q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vt=fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),on=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Bi=/-(\w)/g,lt=on(e=>e.replace(Bi,(t,n)=>n?n.toUpperCase():"")),$i=/\B([A-Z])/g,ht=on(e=>e.replace($i,"-$1").toLowerCase()),Xs=on(e=>e.charAt(0).toUpperCase()+e.slice(1)),vn=on(e=>e?`on${Xs(e)}`:""),At=(e,t)=>!Object.is(e,t),qt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Gt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xr;const Wn=()=>Xr||(Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=q(r)?ji(r):mr(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(q(e))return e;if(U(e))return e}}const ki=/;(?![^(]*\))/g,Fi=/:([^]+)/,Li=/\/\*[^]*?\*\//g;function ji(e){const t={};return e.replace(Li,"").split(ki).forEach(n=>{if(n){const r=n.split(Fi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function br(e){let t="";if(q(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=br(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ui=fr(Hi);function Zs(e){return!!e||e===""}const Ki=e=>q(e)?e:e==null?"":D(e)||U(e)&&(e.toString===Ys||!O(e.toString))?JSON.stringify(e,Qs,2):String(e),Qs=(e,t)=>t&&t.__v_isRef?Qs(e,t.value):it(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:zs(t)?{[`Set(${t.size})`]:[...t.values()]}:U(t)&&!D(t)&&!Gs(t)?String(t):t;let ae;class Wi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ae,!t&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){ae=this}off(){ae=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vi(e,t=ae){t&&t.active&&t.effects.push(e)}function qi(){return ae}const _r=e=>{const t=new Set(e);return t.w=0,t.n=0,t},eo=e=>(e.w&Re)>0,to=e=>(e.n&Re)>0,zi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Re},Ji=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];eo(s)&&!to(s)?s.delete(e):t[n++]=s,s.w&=~Re,s.n&=~Re}t.length=n}},Vn=new WeakMap;let Et=0,Re=1;const qn=30;let le;const ze=Symbol(""),zn=Symbol("");class wr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vi(this,r)}run(){if(!this.active)return this.fn();let t=le,n=De;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=le,le=this,De=!0,Re=1<<++Et,Et<=qn?zi(this):Zr(this),this.fn()}finally{Et<=qn&&Ji(this),Re=1<<--Et,le=this.parent,De=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){le===this?this.deferStop=!0:this.active&&(Zr(this),this.onStop&&this.onStop(),this.active=!1)}}function Zr(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let De=!0;const no=[];function pt(){no.push(De),De=!1}function gt(){const e=no.pop();De=e===void 0?!0:e}function se(e,t,n){if(De&&le){let r=Vn.get(e);r||Vn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=_r()),ro(s)}}function ro(e,t){let n=!1;Et<=qn?to(e)||(e.n|=Re,n=!eo(e)):n=!e.has(le),n&&(e.add(le),le.deps.push(e))}function ve(e,t,n,r,s,o){const i=Vn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&D(e)){const l=Number(r);i.forEach((f,d)=>{(d==="length"||d>=l)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":D(e)?gr(n)&&a.push(i.get("length")):(a.push(i.get(ze)),it(e)&&a.push(i.get(zn)));break;case"delete":D(e)||(a.push(i.get(ze)),it(e)&&a.push(i.get(zn)));break;case"set":it(e)&&a.push(i.get(ze));break}if(a.length===1)a[0]&&Jn(a[0]);else{const l=[];for(const f of a)f&&l.push(...f);Jn(_r(l))}}function Jn(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&Qr(r);for(const r of n)r.computed||Qr(r)}function Qr(e,t){(e!==le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Yi=fr("__proto__,__v_isRef,__isVue"),so=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pr)),Gi=yr(),Xi=yr(!1,!0),Zi=yr(!0),es=Qi();function Qi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=R(this);for(let o=0,i=this.length;o<i;o++)se(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(R)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){pt();const r=R(this)[t].apply(this,n);return gt(),r}}),e}function ea(e){const t=R(this);return se(t,"has",e),t.hasOwnProperty(e)}function yr(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?ma:lo:t?co:ao).get(r))return r;const i=D(r);if(!e){if(i&&N(es,s))return Reflect.get(es,s,o);if(s==="hasOwnProperty")return ea}const a=Reflect.get(r,s,o);return(pr(s)?so.has(s):Yi(s))||(e||se(r,"get",s),t)?a:Q(a)?i&&gr(s)?a:a.value:U(a)?e?uo(a):vr(a):a}}const ta=oo(),na=oo(!0);function oo(e=!1){return function(n,r,s,o){let i=n[r];if(ut(i)&&Q(i)&&!Q(s))return!1;if(!e&&(!Xt(s)&&!ut(s)&&(i=R(i),s=R(s)),!D(n)&&Q(i)&&!Q(s)))return i.value=s,!0;const a=D(n)&&gr(r)?Number(r)<n.length:N(n,r),l=Reflect.set(n,r,s,o);return n===R(o)&&(a?At(s,i)&&ve(n,"set",r,s):ve(n,"add",r,s)),l}}function ra(e,t){const n=N(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ve(e,"delete",t,void 0),r}function sa(e,t){const n=Reflect.has(e,t);return(!pr(t)||!so.has(t))&&se(e,"has",t),n}function oa(e){return se(e,"iterate",D(e)?"length":ze),Reflect.ownKeys(e)}const io={get:Gi,set:ta,deleteProperty:ra,has:sa,ownKeys:oa},ia={get:Zi,set(e,t){return!0},deleteProperty(e,t){return!0}},aa=V({},io,{get:Xi,set:na}),Er=e=>e,an=e=>Reflect.getPrototypeOf(e);function Lt(e,t,n=!1,r=!1){e=e.__v_raw;const s=R(e),o=R(t);n||(t!==o&&se(s,"get",t),se(s,"get",o));const{has:i}=an(s),a=r?Er:n?Ar:Ct;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function jt(e,t=!1){const n=this.__v_raw,r=R(n),s=R(e);return t||(e!==s&&se(r,"has",e),se(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ht(e,t=!1){return e=e.__v_raw,!t&&se(R(e),"iterate",ze),Reflect.get(e,"size",e)}function ts(e){e=R(e);const t=R(this);return an(t).has.call(t,e)||(t.add(e),ve(t,"add",e,e)),this}function ns(e,t){t=R(t);const n=R(this),{has:r,get:s}=an(n);let o=r.call(n,e);o||(e=R(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?At(t,i)&&ve(n,"set",e,t):ve(n,"add",e,t),this}function rs(e){const t=R(this),{has:n,get:r}=an(t);let s=n.call(t,e);s||(e=R(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&ve(t,"delete",e,void 0),o}function ss(){const e=R(this),t=e.size!==0,n=e.clear();return t&&ve(e,"clear",void 0,void 0),n}function Ut(e,t){return function(r,s){const o=this,i=o.__v_raw,a=R(i),l=t?Er:e?Ar:Ct;return!e&&se(a,"iterate",ze),i.forEach((f,d)=>r.call(s,l(f),l(d),o))}}function Kt(e,t,n){return function(...r){const s=this.__v_raw,o=R(s),i=it(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=s[e](...r),d=n?Er:t?Ar:Ct;return!t&&se(o,"iterate",l?zn:ze),{next(){const{value:y,done:I}=f.next();return I?{value:y,done:I}:{value:a?[d(y[0]),d(y[1])]:d(y),done:I}},[Symbol.iterator](){return this}}}}function Ce(e){return function(...t){return e==="delete"?!1:this}}function ca(){const e={get(o){return Lt(this,o)},get size(){return Ht(this)},has:jt,add:ts,set:ns,delete:rs,clear:ss,forEach:Ut(!1,!1)},t={get(o){return Lt(this,o,!1,!0)},get size(){return Ht(this)},has:jt,add:ts,set:ns,delete:rs,clear:ss,forEach:Ut(!1,!0)},n={get(o){return Lt(this,o,!0)},get size(){return Ht(this,!0)},has(o){return jt.call(this,o,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Ut(!0,!1)},r={get(o){return Lt(this,o,!0,!0)},get size(){return Ht(this,!0)},has(o){return jt.call(this,o,!0)},add:Ce("add"),set:Ce("set"),delete:Ce("delete"),clear:Ce("clear"),forEach:Ut(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Kt(o,!1,!1),n[o]=Kt(o,!0,!1),t[o]=Kt(o,!1,!0),r[o]=Kt(o,!0,!0)}),[e,n,t,r]}const[la,ua,fa,da]=ca();function Ir(e,t){const n=t?e?da:fa:e?ua:la;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(N(n,s)&&s in r?n:r,s,o)}const ha={get:Ir(!1,!1)},pa={get:Ir(!1,!0)},ga={get:Ir(!0,!1)},ao=new WeakMap,co=new WeakMap,lo=new WeakMap,ma=new WeakMap;function ba(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _a(e){return e.__v_skip||!Object.isExtensible(e)?0:ba(Ri(e))}function vr(e){return ut(e)?e:Tr(e,!1,io,ha,ao)}function wa(e){return Tr(e,!1,aa,pa,co)}function uo(e){return Tr(e,!0,ia,ga,lo)}function Tr(e,t,n,r,s){if(!U(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=_a(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function at(e){return ut(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function Xt(e){return!!(e&&e.__v_isShallow)}function fo(e){return at(e)||ut(e)}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function ho(e){return Gt(e,"__v_skip",!0),e}const Ct=e=>U(e)?vr(e):e,Ar=e=>U(e)?uo(e):e;function po(e){De&&le&&(e=R(e),ro(e.dep||(e.dep=_r())))}function go(e,t){e=R(e);const n=e.dep;n&&Jn(n)}function Q(e){return!!(e&&e.__v_isRef===!0)}function ya(e){return Ea(e,!1)}function Ea(e,t){return Q(e)?e:new Ia(e,t)}class Ia{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:R(t),this._value=n?t:Ct(t)}get value(){return po(this),this._value}set value(t){const n=this.__v_isShallow||Xt(t)||ut(t);t=n?t:R(t),At(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ct(t),go(this))}}function va(e){return Q(e)?e.value:e}const Ta={get:(e,t,n)=>va(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Q(s)&&!Q(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function mo(e){return at(e)?e:new Proxy(e,Ta)}class Aa{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wr(t,()=>{this._dirty||(this._dirty=!0,go(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=R(this);return po(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ca(e,t,n=!1){let r,s;const o=O(e);return o?(r=e,s=de):(r=e.get,s=e.set),new Aa(r,s,o||!s,n)}function Oe(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){cn(o,t,n)}return s}function he(e,t,n,r){if(O(e)){const o=Oe(e,t,n,r);return o&&Js(o)&&o.catch(i=>{cn(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(he(e[o],t,n,r));return s}function cn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const f=o.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Oe(l,null,10,[e,i,a]);return}}Sa(e,n,s,r)}function Sa(e,t,n,r=!0){console.error(e)}let St=!1,Yn=!1;const X=[];let _e=0;const ct=[];let ye=null,Ke=0;const bo=Promise.resolve();let Cr=null;function Da(e){const t=Cr||bo;return e?t.then(this?e.bind(this):e):t}function Oa(e){let t=_e+1,n=X.length;for(;t<n;){const r=t+n>>>1;Dt(X[r])<e?t=r+1:n=r}return t}function Sr(e){(!X.length||!X.includes(e,St&&e.allowRecurse?_e+1:_e))&&(e.id==null?X.push(e):X.splice(Oa(e.id),0,e),_o())}function _o(){!St&&!Yn&&(Yn=!0,Cr=bo.then(yo))}function xa(e){const t=X.indexOf(e);t>_e&&X.splice(t,1)}function Ma(e){D(e)?ct.push(...e):(!ye||!ye.includes(e,e.allowRecurse?Ke+1:Ke))&&ct.push(e),_o()}function os(e,t=St?_e+1:0){for(;t<X.length;t++){const n=X[t];n&&n.pre&&(X.splice(t,1),t--,n())}}function wo(e){if(ct.length){const t=[...new Set(ct)];if(ct.length=0,ye){ye.push(...t);return}for(ye=t,ye.sort((n,r)=>Dt(n)-Dt(r)),Ke=0;Ke<ye.length;Ke++)ye[Ke]();ye=null,Ke=0}}const Dt=e=>e.id==null?1/0:e.id,Pa=(e,t)=>{const n=Dt(e)-Dt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yo(e){Yn=!1,St=!0,X.sort(Pa);const t=de;try{for(_e=0;_e<X.length;_e++){const n=X[_e];n&&n.active!==!1&&Oe(n,null,14)}}finally{_e=0,X.length=0,wo(),St=!1,Cr=null,(X.length||ct.length)&&yo()}}function Na(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||L;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:I}=r[d]||L;I&&(s=n.map(C=>q(C)?C.trim():C)),y&&(s=n.map(Kn))}let a,l=r[a=vn(t)]||r[a=vn(lt(t))];!l&&o&&(l=r[a=vn(ht(t))]),l&&he(l,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,he(f,e,6,s)}}function Eo(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!O(e)){const l=f=>{const d=Eo(f,t,!0);d&&(a=!0,V(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(U(e)&&r.set(e,null),null):(D(o)?o.forEach(l=>i[l]=null):V(i,o),U(e)&&r.set(e,i),i)}function ln(e,t){return!e||!rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,ht(t))||N(e,t))}let ue=null,un=null;function Zt(e){const t=ue;return ue=e,un=e&&e.type.__scopeId||null,t}function Io(e){un=e}function vo(){un=null}function Ra(e,t=ue,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&gs(-1);const o=Zt(t);let i;try{i=e(...s)}finally{Zt(o),r._d&&gs(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Tn(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:l,emit:f,render:d,renderCache:y,data:I,setupState:C,ctx:j,inheritAttrs:P}=e;let W,J;const Y=Zt(e);try{if(n.shapeFlag&4){const x=s||r;W=be(d.call(x,x,y,o,C,I,j)),J=l}else{const x=t;W=be(x.length>1?x(o,{attrs:l,slots:a,emit:f}):x(o,null)),J=t.props?l:Ba(l)}}catch(x){Tt.length=0,cn(x,e,1),W=xe(Ot)}let G=W;if(J&&P!==!1){const x=Object.keys(J),{shapeFlag:Ae}=G;x.length&&Ae&7&&(i&&x.some(dr)&&(J=$a(J,i)),G=ft(G,J))}return n.dirs&&(G=ft(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),W=G,Zt(Y),W}const Ba=e=>{let t;for(const n in e)(n==="class"||n==="style"||rn(n))&&((t||(t={}))[n]=e[n]);return t},$a=(e,t)=>{const n={};for(const r in e)(!dr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ka(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?is(r,i,f):!!i;if(l&8){const d=t.dynamicProps;for(let y=0;y<d.length;y++){const I=d[y];if(i[I]!==r[I]&&!ln(f,I))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?is(r,i,f):!0:!!i;return!1}function is(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!ln(n,o))return!0}return!1}function Fa({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const La=e=>e.__isSuspense;function ja(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Ma(e)}const Wt={};function An(e,t,n){return To(e,t,n)}function To(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=L){var a;const l=qi()===((a=Z)==null?void 0:a.scope)?Z:null;let f,d=!1,y=!1;if(Q(e)?(f=()=>e.value,d=Xt(e)):at(e)?(f=()=>e,r=!0):D(e)?(y=!0,d=e.some(x=>at(x)||Xt(x)),f=()=>e.map(x=>{if(Q(x))return x.value;if(at(x))return Ve(x);if(O(x))return Oe(x,l,2)})):O(e)?t?f=()=>Oe(e,l,2):f=()=>{if(!(l&&l.isUnmounted))return I&&I(),he(e,l,3,[C])}:f=de,t&&r){const x=f;f=()=>Ve(x())}let I,C=x=>{I=Y.onStop=()=>{Oe(x,l,4)}},j;if(Mt)if(C=de,t?n&&he(t,l,3,[f(),y?[]:void 0,C]):f(),s==="sync"){const x=$c();j=x.__watcherHandles||(x.__watcherHandles=[])}else return de;let P=y?new Array(e.length).fill(Wt):Wt;const W=()=>{if(Y.active)if(t){const x=Y.run();(r||d||(y?x.some((Ae,bt)=>At(Ae,P[bt])):At(x,P)))&&(I&&I(),he(t,l,3,[x,P===Wt?void 0:y&&P[0]===Wt?[]:P,C]),P=x)}else Y.run()};W.allowRecurse=!!t;let J;s==="sync"?J=W:s==="post"?J=()=>re(W,l&&l.suspense):(W.pre=!0,l&&(W.id=l.uid),J=()=>Sr(W));const Y=new wr(f,J);t?n?W():P=Y.run():s==="post"?re(Y.run.bind(Y),l&&l.suspense):Y.run();const G=()=>{Y.stop(),l&&l.scope&&hr(l.scope.effects,Y)};return j&&j.push(G),G}function Ha(e,t,n){const r=this.proxy,s=q(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let o;O(t)?o=t:(o=t.handler,n=t);const i=Z;dt(this);const a=To(s,o.bind(r),n);return i?dt(i):Je(),a}function Ao(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ve(e,t){if(!U(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Q(e))Ve(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)Ve(e[n],t);else if(zs(e)||it(e))e.forEach(n=>{Ve(n,t)});else if(Gs(e))for(const n in e)Ve(e[n],t);return e}function Ua(e,t){const n=ue;if(n===null)return e;const r=pn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,l,f=L]=t[o];i&&(O(i)&&(i={mounted:i,updated:i}),i.deep&&Ve(a),s.push({dir:i,instance:r,value:a,oldValue:void 0,arg:l,modifiers:f}))}return e}function je(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(pt(),he(l,n,8,[e.el,a,e,t]),gt())}}function Co(e,t){return O(e)?(()=>V({name:e.name},t,{setup:e}))():e}const zt=e=>!!e.type.__asyncLoader,So=e=>e.type.__isKeepAlive;function Ka(e,t){Do(e,"a",t)}function Wa(e,t){Do(e,"da",t)}function Do(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)So(s.parent.vnode)&&Va(r,t,n,s),s=s.parent}}function Va(e,t,n,r){const s=fn(t,e,r,!0);Oo(()=>{hr(r[t],s)},n)}function fn(e,t,n=Z,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;pt(),dt(n);const a=he(t,n,e,i);return Je(),gt(),a});return r?s.unshift(o):s.push(o),o}}const Te=e=>(t,n=Z)=>(!Mt||e==="sp")&&fn(e,(...r)=>t(...r),n),qa=Te("bm"),za=Te("m"),Ja=Te("bu"),Ya=Te("u"),Ga=Te("bum"),Oo=Te("um"),Xa=Te("sp"),Za=Te("rtg"),Qa=Te("rtc");function ec(e,t=Z){fn("ec",e,t)}const tc=Symbol.for("v-ndc"),Gn=e=>e?Ho(e)?pn(e)||e.proxy:Gn(e.parent):null,vt=V(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gn(e.parent),$root:e=>Gn(e.root),$emit:e=>e.emit,$options:e=>Dr(e),$forceUpdate:e=>e.f||(e.f=()=>Sr(e.update)),$nextTick:e=>e.n||(e.n=Da.bind(e.proxy)),$watch:e=>Ha.bind(e)}),Cn=(e,t)=>e!==L&&!e.__isScriptSetup&&N(e,t),nc={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;let f;if(t[0]!=="$"){const C=i[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Cn(r,t))return i[t]=1,r[t];if(s!==L&&N(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&N(f,t))return i[t]=3,o[t];if(n!==L&&N(n,t))return i[t]=4,n[t];Xn&&(i[t]=0)}}const d=vt[t];let y,I;if(d)return t==="$attrs"&&se(e,"get",t),d(e);if((y=a.__cssModules)&&(y=y[t]))return y;if(n!==L&&N(n,t))return i[t]=4,n[t];if(I=l.config.globalProperties,N(I,t))return I[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Cn(s,t)?(s[t]=n,!0):r!==L&&N(r,t)?(r[t]=n,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==L&&N(e,i)||Cn(t,i)||(a=o[0])&&N(a,i)||N(r,i)||N(vt,i)||N(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:N(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function as(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xn=!0;function rc(e){const t=Dr(e),n=e.proxy,r=e.ctx;Xn=!1,t.beforeCreate&&cs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:f,created:d,beforeMount:y,mounted:I,beforeUpdate:C,updated:j,activated:P,deactivated:W,beforeDestroy:J,beforeUnmount:Y,destroyed:G,unmounted:x,render:Ae,renderTracked:bt,renderTriggered:Rt,errorCaptured:$e,serverPrefetch:wn,expose:ke,inheritAttrs:_t,components:Bt,directives:$t,filters:yn}=t;if(f&&sc(f,r,null),i)for(const H in i){const $=i[H];O($)&&(r[H]=$.bind(n))}if(s){const H=s.call(n,n);U(H)&&(e.data=vr(H))}if(Xn=!0,o)for(const H in o){const $=o[H],Fe=O($)?$.bind(n,n):O($.get)?$.get.bind(n,n):de,kt=!O($)&&O($.set)?$.set.bind(n):de,Le=Rc({get:Fe,set:kt});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>Le.value,set:pe=>Le.value=pe})}if(a)for(const H in a)xo(a[H],r,n,H);if(l){const H=O(l)?l.call(n):l;Reflect.ownKeys(H).forEach($=>{uc($,H[$])})}d&&cs(d,e,"c");function ee(H,$){D($)?$.forEach(Fe=>H(Fe.bind(n))):$&&H($.bind(n))}if(ee(qa,y),ee(za,I),ee(Ja,C),ee(Ya,j),ee(Ka,P),ee(Wa,W),ee(ec,$e),ee(Qa,bt),ee(Za,Rt),ee(Ga,Y),ee(Oo,x),ee(Xa,wn),D(ke))if(ke.length){const H=e.exposed||(e.exposed={});ke.forEach($=>{Object.defineProperty(H,$,{get:()=>n[$],set:Fe=>n[$]=Fe})})}else e.exposed||(e.exposed={});Ae&&e.render===de&&(e.render=Ae),_t!=null&&(e.inheritAttrs=_t),Bt&&(e.components=Bt),$t&&(e.directives=$t)}function sc(e,t,n=de){D(e)&&(e=Zn(e));for(const r in e){const s=e[r];let o;U(s)?"default"in s?o=Jt(s.from||r,s.default,!0):o=Jt(s.from||r):o=Jt(s),Q(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function cs(e,t,n){he(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function xo(e,t,n,r){const s=r.includes(".")?Ao(n,r):()=>n[r];if(q(e)){const o=t[e];O(o)&&An(s,o)}else if(O(e))An(s,e.bind(n));else if(U(e))if(D(e))e.forEach(o=>xo(o,t,n,r));else{const o=O(e.handler)?e.handler.bind(n):t[e.handler];O(o)&&An(s,o,e)}}function Dr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(f=>Qt(l,f,i,!0)),Qt(l,t,i)),U(t)&&o.set(t,l),l}function Qt(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Qt(e,o,n,!0),s&&s.forEach(i=>Qt(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=oc[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const oc={data:ls,props:us,emits:us,methods:It,computed:It,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:It,directives:It,watch:ac,provide:ls,inject:ic};function ls(e,t){return t?e?function(){return V(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function ic(e,t){return It(Zn(e),Zn(t))}function Zn(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?V(Object.create(null),e,t):t}function us(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:V(Object.create(null),as(e),as(t??{})):t}function ac(e,t){if(!e)return t;if(!t)return e;const n=V(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function Mo(){return{app:null,config:{isNativeTag:Mi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cc=0;function lc(e,t){return function(r,s=null){O(r)||(r=V({},r)),s!=null&&!U(s)&&(s=null);const o=Mo(),i=new Set;let a=!1;const l=o.app={_uid:cc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:kc,get config(){return o.config},set config(f){},use(f,...d){return i.has(f)||(f&&O(f.install)?(i.add(f),f.install(l,...d)):O(f)&&(i.add(f),f(l,...d))),l},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),l},component(f,d){return d?(o.components[f]=d,l):o.components[f]},directive(f,d){return d?(o.directives[f]=d,l):o.directives[f]},mount(f,d,y){if(!a){const I=xe(r,s);return I.appContext=o,d&&t?t(I,f):e(I,f,y),a=!0,l._container=f,f.__vue_app__=l,pn(I.component)||I.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,d){return o.provides[f]=d,l},runWithContext(f){en=l;try{return f()}finally{en=null}}};return l}}let en=null;function uc(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function Jt(e,t,n=!1){const r=Z||ue;if(r||en){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:en._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&O(t)?t.call(r&&r.proxy):t}}function fc(e,t,n,r=!1){const s={},o={};Gt(o,hn,1),e.propsDefaults=Object.create(null),Po(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:wa(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function dc(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=R(s),[l]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let I=d[y];if(ln(e.emitsOptions,I))continue;const C=t[I];if(l)if(N(o,I))C!==o[I]&&(o[I]=C,f=!0);else{const j=lt(I);s[j]=Qn(l,a,j,C,e,!1)}else C!==o[I]&&(o[I]=C,f=!0)}}}else{Po(e,t,s,o)&&(f=!0);let d;for(const y in a)(!t||!N(t,y)&&((d=ht(y))===y||!N(t,d)))&&(l?n&&(n[y]!==void 0||n[d]!==void 0)&&(s[y]=Qn(l,a,y,void 0,e,!0)):delete s[y]);if(o!==a)for(const y in o)(!t||!N(t,y))&&(delete o[y],f=!0)}f&&ve(e,"set","$attrs")}function Po(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Vt(l))continue;const f=t[l];let d;s&&N(s,d=lt(l))?!o||!o.includes(d)?n[d]=f:(a||(a={}))[d]=f:ln(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,i=!0)}if(o){const l=R(n),f=a||L;for(let d=0;d<o.length;d++){const y=o[d];n[y]=Qn(s,l,y,f[y],e,!N(f,y))}}return i}function Qn(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=N(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&O(l)){const{propsDefaults:f}=s;n in f?r=f[n]:(dt(s),r=f[n]=l.call(null,t),Je())}else r=l}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===ht(n))&&(r=!0))}return r}function No(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!O(e)){const d=y=>{l=!0;const[I,C]=No(y,t,!0);V(i,I),C&&a.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return U(e)&&r.set(e,ot),ot;if(D(o))for(let d=0;d<o.length;d++){const y=lt(o[d]);fs(y)&&(i[y]=L)}else if(o)for(const d in o){const y=lt(d);if(fs(y)){const I=o[d],C=i[y]=D(I)||O(I)?{type:I}:V({},I);if(C){const j=ps(Boolean,C.type),P=ps(String,C.type);C[0]=j>-1,C[1]=P<0||j<P,(j>-1||N(C,"default"))&&a.push(y)}}}const f=[i,a];return U(e)&&r.set(e,f),f}function fs(e){return e[0]!=="$"}function ds(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function hs(e,t){return ds(e)===ds(t)}function ps(e,t){return D(t)?t.findIndex(n=>hs(n,e)):O(t)&&hs(t,e)?0:-1}const Ro=e=>e[0]==="_"||e==="$stable",Or=e=>D(e)?e.map(be):[be(e)],hc=(e,t,n)=>{if(t._n)return t;const r=Ra((...s)=>Or(t(...s)),n);return r._c=!1,r},Bo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ro(s))continue;const o=e[s];if(O(o))t[s]=hc(s,o,r);else if(o!=null){const i=Or(o);t[s]=()=>i}}},$o=(e,t)=>{const n=Or(t);e.slots.default=()=>n},pc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=R(t),Gt(t,"_",n)):Bo(t,e.slots={})}else e.slots={},t&&$o(e,t);Gt(e.slots,hn,1)},gc=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=L;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(V(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Bo(t,s)),i=t}else t&&($o(e,t),i={default:1});if(o)for(const a in s)!Ro(a)&&!(a in i)&&delete s[a]};function er(e,t,n,r,s=!1){if(D(e)){e.forEach((I,C)=>er(I,t&&(D(t)?t[C]:t),n,r,s));return}if(zt(r)&&!s)return;const o=r.shapeFlag&4?pn(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:l}=e,f=t&&t.r,d=a.refs===L?a.refs={}:a.refs,y=a.setupState;if(f!=null&&f!==l&&(q(f)?(d[f]=null,N(y,f)&&(y[f]=null)):Q(f)&&(f.value=null)),O(l))Oe(l,a,12,[i,d]);else{const I=q(l),C=Q(l);if(I||C){const j=()=>{if(e.f){const P=I?N(y,l)?y[l]:d[l]:l.value;s?D(P)&&hr(P,o):D(P)?P.includes(o)||P.push(o):I?(d[l]=[o],N(y,l)&&(y[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else I?(d[l]=i,N(y,l)&&(y[l]=i)):C&&(l.value=i,e.k&&(d[e.k]=i))};i?(j.id=-1,re(j,n)):j()}}}const re=ja;function mc(e){return bc(e)}function bc(e,t){const n=Wn();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:f,setElementText:d,parentNode:y,nextSibling:I,setScopeId:C=de,insertStaticContent:j}=e,P=(c,u,h,g=null,p=null,_=null,E=!1,b=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!yt(c,u)&&(g=Ft(c),pe(c,p,_,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:m,ref:T,shapeFlag:v}=u;switch(m){case dn:W(c,u,h,g);break;case Ot:J(c,u,h,g);break;case Sn:c==null&&Y(u,h,g,E);break;case ce:Bt(c,u,h,g,p,_,E,b,w);break;default:v&1?Ae(c,u,h,g,p,_,E,b,w):v&6?$t(c,u,h,g,p,_,E,b,w):(v&64||v&128)&&m.process(c,u,h,g,p,_,E,b,w,tt)}T!=null&&p&&er(T,c&&c.ref,_,u||c,!u)},W=(c,u,h,g)=>{if(c==null)r(u.el=a(u.children),h,g);else{const p=u.el=c.el;u.children!==c.children&&f(p,u.children)}},J=(c,u,h,g)=>{c==null?r(u.el=l(u.children||""),h,g):u.el=c.el},Y=(c,u,h,g)=>{[c.el,c.anchor]=j(c.children,u,h,g,c.el,c.anchor)},G=({el:c,anchor:u},h,g)=>{let p;for(;c&&c!==u;)p=I(c),r(c,h,g),c=p;r(u,h,g)},x=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=I(c),s(c),c=h;s(u)},Ae=(c,u,h,g,p,_,E,b,w)=>{E=E||u.type==="svg",c==null?bt(u,h,g,p,_,E,b,w):wn(c,u,p,_,E,b,w)},bt=(c,u,h,g,p,_,E,b)=>{let w,m;const{type:T,props:v,shapeFlag:A,transition:S,dirs:M}=c;if(w=c.el=i(c.type,_,v&&v.is,v),A&8?d(w,c.children):A&16&&$e(c.children,w,null,g,p,_&&T!=="foreignObject",E,b),M&&je(c,null,g,"created"),Rt(w,c,c.scopeId,E,g),v){for(const B in v)B!=="value"&&!Vt(B)&&o(w,B,null,v[B],_,c.children,g,p,we);"value"in v&&o(w,"value",null,v.value),(m=v.onVnodeBeforeMount)&&me(m,g,c)}M&&je(c,null,g,"beforeMount");const k=(!p||p&&!p.pendingBranch)&&S&&!S.persisted;k&&S.beforeEnter(w),r(w,u,h),((m=v&&v.onVnodeMounted)||k||M)&&re(()=>{m&&me(m,g,c),k&&S.enter(w),M&&je(c,null,g,"mounted")},p)},Rt=(c,u,h,g,p)=>{if(h&&C(c,h),g)for(let _=0;_<g.length;_++)C(c,g[_]);if(p){let _=p.subTree;if(u===_){const E=p.vnode;Rt(c,E,E.scopeId,E.slotScopeIds,p.parent)}}},$e=(c,u,h,g,p,_,E,b,w=0)=>{for(let m=w;m<c.length;m++){const T=c[m]=b?Se(c[m]):be(c[m]);P(null,T,u,h,g,p,_,E,b)}},wn=(c,u,h,g,p,_,E)=>{const b=u.el=c.el;let{patchFlag:w,dynamicChildren:m,dirs:T}=u;w|=c.patchFlag&16;const v=c.props||L,A=u.props||L;let S;h&&He(h,!1),(S=A.onVnodeBeforeUpdate)&&me(S,h,u,c),T&&je(u,c,h,"beforeUpdate"),h&&He(h,!0);const M=p&&u.type!=="foreignObject";if(m?ke(c.dynamicChildren,m,b,h,g,M,_):E||$(c,u,b,null,h,g,M,_,!1),w>0){if(w&16)_t(b,u,v,A,h,g,p);else if(w&2&&v.class!==A.class&&o(b,"class",null,A.class,p),w&4&&o(b,"style",v.style,A.style,p),w&8){const k=u.dynamicProps;for(let B=0;B<k.length;B++){const K=k[B],ie=v[K],nt=A[K];(nt!==ie||K==="value")&&o(b,K,ie,nt,p,c.children,h,g,we)}}w&1&&c.children!==u.children&&d(b,u.children)}else!E&&m==null&&_t(b,u,v,A,h,g,p);((S=A.onVnodeUpdated)||T)&&re(()=>{S&&me(S,h,u,c),T&&je(u,c,h,"updated")},g)},ke=(c,u,h,g,p,_,E)=>{for(let b=0;b<u.length;b++){const w=c[b],m=u[b],T=w.el&&(w.type===ce||!yt(w,m)||w.shapeFlag&70)?y(w.el):h;P(w,m,T,null,g,p,_,E,!0)}},_t=(c,u,h,g,p,_,E)=>{if(h!==g){if(h!==L)for(const b in h)!Vt(b)&&!(b in g)&&o(c,b,h[b],null,E,u.children,p,_,we);for(const b in g){if(Vt(b))continue;const w=g[b],m=h[b];w!==m&&b!=="value"&&o(c,b,m,w,E,u.children,p,_,we)}"value"in g&&o(c,"value",h.value,g.value)}},Bt=(c,u,h,g,p,_,E,b,w)=>{const m=u.el=c?c.el:a(""),T=u.anchor=c?c.anchor:a("");let{patchFlag:v,dynamicChildren:A,slotScopeIds:S}=u;S&&(b=b?b.concat(S):S),c==null?(r(m,h,g),r(T,h,g),$e(u.children,h,T,p,_,E,b,w)):v>0&&v&64&&A&&c.dynamicChildren?(ke(c.dynamicChildren,A,h,p,_,E,b),(u.key!=null||p&&u===p.subTree)&&ko(c,u,!0)):$(c,u,h,T,p,_,E,b,w)},$t=(c,u,h,g,p,_,E,b,w)=>{u.slotScopeIds=b,c==null?u.shapeFlag&512?p.ctx.activate(u,h,g,E,w):yn(u,h,g,p,_,E,w):Vr(c,u,w)},yn=(c,u,h,g,p,_,E)=>{const b=c.component=Dc(c,g,p);if(So(c)&&(b.ctx.renderer=tt),Oc(b),b.asyncDep){if(p&&p.registerDep(b,ee),!c.el){const w=b.subTree=xe(Ot);J(null,w,u,h)}return}ee(b,c,u,h,p,_,E)},Vr=(c,u,h)=>{const g=u.component=c.component;if(ka(c,u,h))if(g.asyncDep&&!g.asyncResolved){H(g,u,h);return}else g.next=u,xa(g.update),g.update();else u.el=c.el,g.vnode=u},ee=(c,u,h,g,p,_,E)=>{const b=()=>{if(c.isMounted){let{next:T,bu:v,u:A,parent:S,vnode:M}=c,k=T,B;He(c,!1),T?(T.el=M.el,H(c,T,E)):T=M,v&&qt(v),(B=T.props&&T.props.onVnodeBeforeUpdate)&&me(B,S,T,M),He(c,!0);const K=Tn(c),ie=c.subTree;c.subTree=K,P(ie,K,y(ie.el),Ft(ie),c,p,_),T.el=K.el,k===null&&Fa(c,K.el),A&&re(A,p),(B=T.props&&T.props.onVnodeUpdated)&&re(()=>me(B,S,T,M),p)}else{let T;const{el:v,props:A}=u,{bm:S,m:M,parent:k}=c,B=zt(u);if(He(c,!1),S&&qt(S),!B&&(T=A&&A.onVnodeBeforeMount)&&me(T,k,u),He(c,!0),v&&In){const K=()=>{c.subTree=Tn(c),In(v,c.subTree,c,p,null)};B?u.type.__asyncLoader().then(()=>!c.isUnmounted&&K()):K()}else{const K=c.subTree=Tn(c);P(null,K,h,g,c,p,_),u.el=K.el}if(M&&re(M,p),!B&&(T=A&&A.onVnodeMounted)){const K=u;re(()=>me(T,k,K),p)}(u.shapeFlag&256||k&&zt(k.vnode)&&k.vnode.shapeFlag&256)&&c.a&&re(c.a,p),c.isMounted=!0,u=h=g=null}},w=c.effect=new wr(b,()=>Sr(m),c.scope),m=c.update=()=>w.run();m.id=c.uid,He(c,!0),m()},H=(c,u,h)=>{u.component=c;const g=c.vnode.props;c.vnode=u,c.next=null,dc(c,u.props,g,h),gc(c,u.children,h),pt(),os(),gt()},$=(c,u,h,g,p,_,E,b,w=!1)=>{const m=c&&c.children,T=c?c.shapeFlag:0,v=u.children,{patchFlag:A,shapeFlag:S}=u;if(A>0){if(A&128){kt(m,v,h,g,p,_,E,b,w);return}else if(A&256){Fe(m,v,h,g,p,_,E,b,w);return}}S&8?(T&16&&we(m,p,_),v!==m&&d(h,v)):T&16?S&16?kt(m,v,h,g,p,_,E,b,w):we(m,p,_,!0):(T&8&&d(h,""),S&16&&$e(v,h,g,p,_,E,b,w))},Fe=(c,u,h,g,p,_,E,b,w)=>{c=c||ot,u=u||ot;const m=c.length,T=u.length,v=Math.min(m,T);let A;for(A=0;A<v;A++){const S=u[A]=w?Se(u[A]):be(u[A]);P(c[A],S,h,null,p,_,E,b,w)}m>T?we(c,p,_,!0,!1,v):$e(u,h,g,p,_,E,b,w,v)},kt=(c,u,h,g,p,_,E,b,w)=>{let m=0;const T=u.length;let v=c.length-1,A=T-1;for(;m<=v&&m<=A;){const S=c[m],M=u[m]=w?Se(u[m]):be(u[m]);if(yt(S,M))P(S,M,h,null,p,_,E,b,w);else break;m++}for(;m<=v&&m<=A;){const S=c[v],M=u[A]=w?Se(u[A]):be(u[A]);if(yt(S,M))P(S,M,h,null,p,_,E,b,w);else break;v--,A--}if(m>v){if(m<=A){const S=A+1,M=S<T?u[S].el:g;for(;m<=A;)P(null,u[m]=w?Se(u[m]):be(u[m]),h,M,p,_,E,b,w),m++}}else if(m>A)for(;m<=v;)pe(c[m],p,_,!0),m++;else{const S=m,M=m,k=new Map;for(m=M;m<=A;m++){const oe=u[m]=w?Se(u[m]):be(u[m]);oe.key!=null&&k.set(oe.key,m)}let B,K=0;const ie=A-M+1;let nt=!1,Jr=0;const wt=new Array(ie);for(m=0;m<ie;m++)wt[m]=0;for(m=S;m<=v;m++){const oe=c[m];if(K>=ie){pe(oe,p,_,!0);continue}let ge;if(oe.key!=null)ge=k.get(oe.key);else for(B=M;B<=A;B++)if(wt[B-M]===0&&yt(oe,u[B])){ge=B;break}ge===void 0?pe(oe,p,_,!0):(wt[ge-M]=m+1,ge>=Jr?Jr=ge:nt=!0,P(oe,u[ge],h,null,p,_,E,b,w),K++)}const Yr=nt?_c(wt):ot;for(B=Yr.length-1,m=ie-1;m>=0;m--){const oe=M+m,ge=u[oe],Gr=oe+1<T?u[oe+1].el:g;wt[m]===0?P(null,ge,h,Gr,p,_,E,b,w):nt&&(B<0||m!==Yr[B]?Le(ge,h,Gr,2):B--)}}},Le=(c,u,h,g,p=null)=>{const{el:_,type:E,transition:b,children:w,shapeFlag:m}=c;if(m&6){Le(c.component.subTree,u,h,g);return}if(m&128){c.suspense.move(u,h,g);return}if(m&64){E.move(c,u,h,tt);return}if(E===ce){r(_,u,h);for(let v=0;v<w.length;v++)Le(w[v],u,h,g);r(c.anchor,u,h);return}if(E===Sn){G(c,u,h);return}if(g!==2&&m&1&&b)if(g===0)b.beforeEnter(_),r(_,u,h),re(()=>b.enter(_),p);else{const{leave:v,delayLeave:A,afterLeave:S}=b,M=()=>r(_,u,h),k=()=>{v(_,()=>{M(),S&&S()})};A?A(_,M,k):k()}else r(_,u,h)},pe=(c,u,h,g=!1,p=!1)=>{const{type:_,props:E,ref:b,children:w,dynamicChildren:m,shapeFlag:T,patchFlag:v,dirs:A}=c;if(b!=null&&er(b,null,h,c,!0),T&256){u.ctx.deactivate(c);return}const S=T&1&&A,M=!zt(c);let k;if(M&&(k=E&&E.onVnodeBeforeUnmount)&&me(k,u,c),T&6)xi(c.component,h,g);else{if(T&128){c.suspense.unmount(h,g);return}S&&je(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,h,p,tt,g):m&&(_!==ce||v>0&&v&64)?we(m,u,h,!1,!0):(_===ce&&v&384||!p&&T&16)&&we(w,u,h),g&&qr(c)}(M&&(k=E&&E.onVnodeUnmounted)||S)&&re(()=>{k&&me(k,u,c),S&&je(c,null,u,"unmounted")},h)},qr=c=>{const{type:u,el:h,anchor:g,transition:p}=c;if(u===ce){Oi(h,g);return}if(u===Sn){x(c);return}const _=()=>{s(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(c.shapeFlag&1&&p&&!p.persisted){const{leave:E,delayLeave:b}=p,w=()=>E(h,_);b?b(c.el,_,w):w()}else _()},Oi=(c,u)=>{let h;for(;c!==u;)h=I(c),s(c),c=h;s(u)},xi=(c,u,h)=>{const{bum:g,scope:p,update:_,subTree:E,um:b}=c;g&&qt(g),p.stop(),_&&(_.active=!1,pe(E,c,u,h)),b&&re(b,u),re(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},we=(c,u,h,g=!1,p=!1,_=0)=>{for(let E=_;E<c.length;E++)pe(c[E],u,h,g,p)},Ft=c=>c.shapeFlag&6?Ft(c.component.subTree):c.shapeFlag&128?c.suspense.next():I(c.anchor||c.el),zr=(c,u,h)=>{c==null?u._vnode&&pe(u._vnode,null,null,!0):P(u._vnode||null,c,u,null,null,null,h),os(),wo(),u._vnode=c},tt={p:P,um:pe,m:Le,r:qr,mt:yn,mc:$e,pc:$,pbc:ke,n:Ft,o:e};let En,In;return t&&([En,In]=t(tt)),{render:zr,hydrate:En,createApp:lc(zr,En)}}function He({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ko(e,t,n=!1){const r=e.children,s=t.children;if(D(r)&&D(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=Se(s[o]),a.el=i.el),n||ko(i,a)),a.type===dn&&(a.el=i.el)}}function _c(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const wc=e=>e.__isTeleport,ce=Symbol.for("v-fgt"),dn=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Sn=Symbol.for("v-stc"),Tt=[];let fe=null;function Fo(e=!1){Tt.push(fe=e?null:[])}function yc(){Tt.pop(),fe=Tt[Tt.length-1]||null}let xt=1;function gs(e){xt+=e}function Ec(e){return e.dynamicChildren=xt>0?fe||ot:null,yc(),xt>0&&fe&&fe.push(e),e}function Lo(e,t,n,r,s,o){return Ec(z(e,t,n,r,s,o,!0))}function Ic(e){return e?e.__v_isVNode===!0:!1}function yt(e,t){return e.type===t.type&&e.key===t.key}const hn="__vInternal",jo=({key:e})=>e??null,Yt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?q(e)||Q(e)||O(e)?{i:ue,r:e,k:t,f:!!n}:e:null);function z(e,t=null,n=null,r=0,s=null,o=e===ce?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jo(t),ref:t&&Yt(t),scopeId:un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ue};return a?(xr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=q(n)?8:16),xt>0&&!i&&fe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&fe.push(l),l}const xe=vc;function vc(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===tc)&&(e=Ot),Ic(e)){const a=ft(e,t,!0);return n&&xr(a,n),xt>0&&!o&&fe&&(a.shapeFlag&6?fe[fe.indexOf(e)]=a:fe.push(a)),a.patchFlag|=-2,a}if(Nc(e)&&(e=e.__vccOpts),t){t=Tc(t);let{class:a,style:l}=t;a&&!q(a)&&(t.class=br(a)),U(l)&&(fo(l)&&!D(l)&&(l=V({},l)),t.style=mr(l))}const i=q(e)?1:La(e)?128:wc(e)?64:U(e)?4:O(e)?2:0;return z(e,t,n,r,s,i,o,!0)}function Tc(e){return e?fo(e)||hn in e?V({},e):e:null}function ft(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?Ac(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&jo(a),ref:t&&t.ref?n&&s?D(s)?s.concat(Yt(t)):[s,Yt(t)]:Yt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ye(e=" ",t=0){return xe(dn,null,e,t)}function be(e){return e==null||typeof e=="boolean"?xe(Ot):D(e)?xe(ce,null,e.slice()):typeof e=="object"?Se(e):xe(dn,null,String(e))}function Se(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),xr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(hn in t)?t._ctx=ue:s===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[Ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ac(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=br([t.class,r.class]));else if(s==="style")t.style=mr([t.style,r.style]);else if(rn(s)){const o=t[s],i=r[s];i&&o!==i&&!(D(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function me(e,t,n,r=null){he(e,t,7,[n,r])}const Cc=Mo();let Sc=0;function Dc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Cc,o={uid:Sc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(r,s),emitsOptions:Eo(r,s),emit:null,emitted:null,propsDefaults:L,inheritAttrs:r.inheritAttrs,ctx:L,data:L,props:L,attrs:L,slots:L,refs:L,setupState:L,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Na.bind(null,o),e.ce&&e.ce(o),o}let Z=null,Mr,rt,ms="__VUE_INSTANCE_SETTERS__";(rt=Wn()[ms])||(rt=Wn()[ms]=[]),rt.push(e=>Z=e),Mr=e=>{rt.length>1?rt.forEach(t=>t(e)):rt[0](e)};const dt=e=>{Mr(e),e.scope.on()},Je=()=>{Z&&Z.scope.off(),Mr(null)};function Ho(e){return e.vnode.shapeFlag&4}let Mt=!1;function Oc(e,t=!1){Mt=t;const{props:n,children:r}=e.vnode,s=Ho(e);fc(e,n,s,t),pc(e,r);const o=s?xc(e,t):void 0;return Mt=!1,o}function xc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ho(new Proxy(e.ctx,nc));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Pc(e):null;dt(e),pt();const o=Oe(r,e,0,[e.props,s]);if(gt(),Je(),Js(o)){if(o.then(Je,Je),t)return o.then(i=>{bs(e,i,t)}).catch(i=>{cn(i,e,0)});e.asyncDep=o}else bs(e,o,t)}else Uo(e,t)}function bs(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:U(t)&&(e.setupState=mo(t)),Uo(e,n)}let _s;function Uo(e,t,n){const r=e.type;if(!e.render){if(!t&&_s&&!r.render){const s=r.template||Dr(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,f=V(V({isCustomElement:o,delimiters:a},i),l);r.render=_s(s,f)}}e.render=r.render||de}dt(e),pt(),rc(e),gt(),Je()}function Mc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return se(e,"get","$attrs"),t[n]}}))}function Pc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Mc(e)},slots:e.slots,emit:e.emit,expose:t}}function pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mo(ho(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vt)return vt[n](e)},has(t,n){return n in t||n in vt}}))}function Nc(e){return O(e)&&"__vccOpts"in e}const Rc=(e,t)=>Ca(e,t,Mt),Bc=Symbol.for("v-scx"),$c=()=>Jt(Bc),kc="3.3.4",Fc="http://www.w3.org/2000/svg",We=typeof document<"u"?document:null,ws=We&&We.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?We.createElementNS(Fc,e):We.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ws.innerHTML=r?`<svg>${e}</svg>`:e;const a=ws.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Hc(e,t,n){const r=e.style,s=q(n);if(n&&!s){if(t&&!q(t))for(const o in t)n[o]==null&&tr(r,o,"");for(const o in n)tr(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const ys=/\s*!important$/;function tr(e,t,n){if(D(n))n.forEach(r=>tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Uc(e,t);ys.test(n)?e.setProperty(ht(r),n.replace(ys,""),"important"):e[r]=n}}const Es=["Webkit","Moz","ms"],Dn={};function Uc(e,t){const n=Dn[t];if(n)return n;let r=lt(t);if(r!=="filter"&&r in e)return Dn[t]=r;r=Xs(r);for(let s=0;s<Es.length;s++){const o=Es[s]+r;if(o in e)return Dn[t]=o}return t}const Is="http://www.w3.org/1999/xlink";function Kc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Is,t.slice(6,t.length)):e.setAttributeNS(Is,t,n);else{const o=Ui(t);n==null||o&&!Zs(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Wc(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const f=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";f!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Zs(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function st(e,t,n,r){e.addEventListener(t,n,r)}function Vc(e,t,n,r){e.removeEventListener(t,n,r)}function qc(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=zc(t);if(r){const f=o[t]=Gc(r,s);st(e,a,f,l)}else i&&(Vc(e,a,i,l),o[t]=void 0)}}const vs=/(?:Once|Passive|Capture)$/;function zc(e){let t;if(vs.test(e)){t={};let r;for(;r=e.match(vs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let On=0;const Jc=Promise.resolve(),Yc=()=>On||(Jc.then(()=>On=0),On=Date.now());function Gc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;he(Xc(r,n.value),t,5,[r])};return n.value=e,n.attached=Yc(),n}function Xc(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ts=/^on[a-z]/,Zc=(e,t,n,r,s=!1,o,i,a,l)=>{t==="class"?jc(e,r,s):t==="style"?Hc(e,n,r):rn(t)?dr(t)||qc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qc(e,t,r,s))?Wc(e,t,r,o,i,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Kc(e,t,r,s))};function Qc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ts.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ts.test(t)&&q(n)?!1:t in e}const As=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>qt(t,n):t};function el(e){e.target.composing=!0}function Cs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const tl={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=As(s);const o=r||s.props&&s.props.type==="number";st(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=Kn(a)),e._assign(a)}),n&&st(e,"change",()=>{e.value=e.value.trim()}),t||(st(e,"compositionstart",el),st(e,"compositionend",Cs),st(e,"change",Cs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=As(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&Kn(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},nl=V({patchProp:Zc},Lc);let Ss;function rl(){return Ss||(Ss=mc(nl))}const sl=(...e)=>{const t=rl().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ol(r);if(!s)return;const o=t._component;!O(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function ol(e){return q(e)?document.querySelector(e):e}const il="/pwa-base/vite.svg",al="/pwa-base/assets/vue-5532db34.svg";/**
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
 */const Ko=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},cl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],l=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,l=s+2<e.length,f=l?e[s+2]:0,d=o>>2,y=(o&3)<<4|a>>4;let I=(a&15)<<2|f>>6,C=f&63;l||(C=64,i||(I=64)),r.push(n[d],n[y],n[I],n[C])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ko(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):cl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const y=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||f==null||y==null)throw new ll;const I=o<<2|a>>4;if(r.push(I),f!==64){const C=a<<4&240|f>>2;if(r.push(C),y!==64){const j=f<<6&192|y;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ul=function(e){const t=Ko(e);return Wo.encodeByteArray(t,!0)},Vo=function(e){return ul(e).replace(/\./g,"")},fl=function(e){try{return Wo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function dl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hl=()=>dl().__FIREBASE_DEFAULTS__,pl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},gl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fl(e[1]);return t&&JSON.parse(t)},ml=()=>{try{return hl()||pl()||gl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},qo=()=>{var e;return(e=ml())===null||e===void 0?void 0:e.config};/**
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
 */class bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Jo(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function _l(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const wl="FirebaseError";class mt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=wl,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?yl(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new mt(s,a,r)}}function yl(e,t){return e.replace(El,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const El=/\{\$([^}]+)}/g;function nr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Ds(o)&&Ds(i)){if(!nr(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ds(e){return e!==null&&typeof e=="object"}/**
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
 */function Yo(e){return e&&e._delegate?e._delegate:e}class Be{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Il{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new bl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Tl(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ue){return this.instances.has(t)}getOptions(t=Ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ue){return this.component?this.component.multipleInstances?t:Ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(e){return e===Ue?void 0:e}function Tl(e){return e.instantiationMode==="EAGER"}/**
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
 */class Al{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Il(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Cl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Sl=F.INFO,Dl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Ol=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Dl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xl{constructor(t){this.name=t,this._logLevel=Sl,this._logHandler=Ol,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Ml=(e,t)=>t.some(n=>e instanceof n);let Os,xs;function Pl(){return Os||(Os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nl(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Go=new WeakMap,rr=new WeakMap,Xo=new WeakMap,xn=new WeakMap,Pr=new WeakMap;function Rl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Me(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Go.set(n,e)}).catch(()=>{}),Pr.set(t,e),t}function Bl(e){if(rr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});rr.set(e,t)}let sr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $l(e){sr=e(sr)}function kl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mn(this),t,...n);return Xo.set(r,t.sort?t.sort():[t]),Me(r)}:Nl().includes(e)?function(...t){return e.apply(Mn(this),t),Me(Go.get(this))}:function(...t){return Me(e.apply(Mn(this),t))}}function Fl(e){return typeof e=="function"?kl(e):(e instanceof IDBTransaction&&Bl(e),Ml(e,Pl())?new Proxy(e,sr):e)}function Me(e){if(e instanceof IDBRequest)return Rl(e);if(xn.has(e))return xn.get(e);const t=Fl(e);return t!==e&&(xn.set(e,t),Pr.set(t,e)),t}const Mn=e=>Pr.get(e);function Ll(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Me(i);return r&&i.addEventListener("upgradeneeded",l=>{r(Me(i.result),l.oldVersion,l.newVersion,Me(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const jl=["get","getKey","getAll","getAllKeys","count"],Hl=["put","add","delete","clear"],Pn=new Map;function Ms(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pn.get(t))return Pn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Hl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jl.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&l.done]))[0]};return Pn.set(t,o),o}$l(e=>({...e,get:(t,n,r)=>Ms(t,n)||e.get(t,n,r),has:(t,n)=>!!Ms(t,n)||e.has(t,n)}));/**
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
 */class Ul{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const or="@firebase/app",Ps="0.9.20";/**
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
 */const Ge=new xl("@firebase/app"),Wl="@firebase/app-compat",Vl="@firebase/analytics-compat",ql="@firebase/analytics",zl="@firebase/app-check-compat",Jl="@firebase/app-check",Yl="@firebase/auth",Gl="@firebase/auth-compat",Xl="@firebase/database",Zl="@firebase/database-compat",Ql="@firebase/functions",eu="@firebase/functions-compat",tu="@firebase/installations",nu="@firebase/installations-compat",ru="@firebase/messaging",su="@firebase/messaging-compat",ou="@firebase/performance",iu="@firebase/performance-compat",au="@firebase/remote-config",cu="@firebase/remote-config-compat",lu="@firebase/storage",uu="@firebase/storage-compat",fu="@firebase/firestore",du="@firebase/firestore-compat",hu="firebase";/**
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
 */const ir="[DEFAULT]",pu={[or]:"fire-core",[Wl]:"fire-core-compat",[ql]:"fire-analytics",[Vl]:"fire-analytics-compat",[Jl]:"fire-app-check",[zl]:"fire-app-check-compat",[Yl]:"fire-auth",[Gl]:"fire-auth-compat",[Xl]:"fire-rtdb",[Zl]:"fire-rtdb-compat",[Ql]:"fire-fn",[eu]:"fire-fn-compat",[tu]:"fire-iid",[nu]:"fire-iid-compat",[ru]:"fire-fcm",[su]:"fire-fcm-compat",[ou]:"fire-perf",[iu]:"fire-perf-compat",[au]:"fire-rc",[cu]:"fire-rc-compat",[lu]:"fire-gcs",[uu]:"fire-gcs-compat",[fu]:"fire-fst",[du]:"fire-fst-compat","fire-js":"fire-js",[hu]:"fire-js-all"};/**
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
 */const tn=new Map,ar=new Map;function gu(e,t){try{e.container.addComponent(t)}catch(n){Ge.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(ar.has(t))return Ge.debug(`There were multiple attempts to register component ${t}.`),!1;ar.set(t,e);for(const n of tn.values())gu(n,e);return!0}function Nr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const mu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new gn("app","Firebase",mu);/**
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
 */class bu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}function Zo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ir,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pe.create("bad-app-name",{appName:String(s)});if(n||(n=qo()),!n)throw Pe.create("no-options");const o=tn.get(s);if(o){if(nr(n,o.options)&&nr(r,o.config))return o;throw Pe.create("duplicate-app",{appName:s})}const i=new Al(s);for(const l of ar.values())i.addComponent(l);const a=new bu(n,r,i);return tn.set(s,a),a}function _u(e=ir){const t=tn.get(e);if(!t&&e===ir&&qo())return Zo();if(!t)throw Pe.create("no-app",{appName:e});return t}function Ne(e,t,n){var r;let s=(r=pu[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ge.warn(a.join(" "));return}Xe(new Be(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const wu="firebase-heartbeat-database",yu=1,Pt="firebase-heartbeat-store";let Nn=null;function Qo(){return Nn||(Nn=Ll(wu,yu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pt)}}}).catch(e=>{throw Pe.create("idb-open",{originalErrorMessage:e.message})})),Nn}async function Eu(e){try{return await(await Qo()).transaction(Pt).objectStore(Pt).get(ei(e))}catch(t){if(t instanceof mt)Ge.warn(t.message);else{const n=Pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ge.warn(n.message)}}}async function Ns(e,t){try{const r=(await Qo()).transaction(Pt,"readwrite");await r.objectStore(Pt).put(t,ei(e)),await r.done}catch(n){if(n instanceof mt)Ge.warn(n.message);else{const r=Pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ge.warn(r.message)}}}function ei(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Iu=1024,vu=30*24*60*60*1e3;class Tu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=vu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rs(),{heartbeatsToSend:n,unsentEntries:r}=Au(this._heartbeatsCache.heartbeats),s=Vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rs(){return new Date().toISOString().substring(0,10)}function Au(e,t=Iu){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Bs(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?Jo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Eu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ns(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ns(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Bs(e){return Vo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Su(e){Xe(new Be("platform-logger",t=>new Ul(t),"PRIVATE")),Xe(new Be("heartbeat",t=>new Tu(t),"PRIVATE")),Ne(or,Ps,e),Ne(or,Ps,"esm2017"),Ne("fire-js","")}Su("");var Du="firebase",Ou="10.5.0";/**
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
 */Ne(Du,Ou,"app");const xu=(e,t)=>t.some(n=>e instanceof n);let $s,ks;function Mu(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pu(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ti=new WeakMap,cr=new WeakMap,ni=new WeakMap,Rn=new WeakMap,Rr=new WeakMap;function Nu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ie(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ti.set(n,e)}).catch(()=>{}),Rr.set(t,e),t}function Ru(e){if(cr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});cr.set(e,t)}let lr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return cr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ni.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ie(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bu(e){lr=e(lr)}function $u(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Bn(this),t,...n);return ni.set(r,t.sort?t.sort():[t]),Ie(r)}:Pu().includes(e)?function(...t){return e.apply(Bn(this),t),Ie(ti.get(this))}:function(...t){return Ie(e.apply(Bn(this),t))}}function ku(e){return typeof e=="function"?$u(e):(e instanceof IDBTransaction&&Ru(e),xu(e,Mu())?new Proxy(e,lr):e)}function Ie(e){if(e instanceof IDBRequest)return Nu(e);if(Rn.has(e))return Rn.get(e);const t=ku(e);return t!==e&&(Rn.set(e,t),Rr.set(t,e)),t}const Bn=e=>Rr.get(e);function Br(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Ie(i);return r&&i.addEventListener("upgradeneeded",l=>{r(Ie(i.result),l.oldVersion,l.newVersion,Ie(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}function $n(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),Ie(n).then(()=>{})}const Fu=["get","getKey","getAll","getAllKeys","count"],Lu=["put","add","delete","clear"],kn=new Map;function Fs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(kn.get(t))return kn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Lu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fu.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&l.done]))[0]};return kn.set(t,o),o}Bu(e=>({...e,get:(t,n,r)=>Fs(t,n)||e.get(t,n,r),has:(t,n)=>!!Fs(t,n)||e.has(t,n)}));const ri="@firebase/installations",$r="0.6.4";/**
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
 */const si=1e4,oi=`w:${$r}`,ii="FIS_v2",ju="https://firebaseinstallations.googleapis.com/v1",Hu=60*60*1e3,Uu="installations",Ku="Installations";/**
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
 */const Wu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ze=new gn(Uu,Ku,Wu);function ai(e){return e instanceof mt&&e.code.includes("request-failed")}/**
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
 */function ci({projectId:e}){return`${ju}/projects/${e}/installations`}function li(e){return{token:e.token,requestStatus:2,expiresIn:qu(e.expiresIn),creationTime:Date.now()}}async function ui(e,t){const r=(await t.json()).error;return Ze.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fi({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Vu(e,{refreshToken:t}){const n=fi(e);return n.append("Authorization",zu(t)),n}async function di(e){const t=await e();return t.status>=500&&t.status<600?e():t}function qu(e){return Number(e.replace("s","000"))}function zu(e){return`${ii} ${e}`}/**
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
 */async function Ju({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ci(e),s=fi(e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:ii,appId:e.appId,sdkVersion:oi},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await di(()=>fetch(r,a));if(l.ok){const f=await l.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:li(f.authToken)}}else throw await ui("Create Installation",l)}/**
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
 */function hi(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Yu(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Gu=/^[cdef][\w-]{21}$/,ur="";function Xu(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Zu(e);return Gu.test(n)?n:ur}catch{return ur}}function Zu(e){return Yu(e).substr(0,22)}/**
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
 */function mn(e){return`${e.appName}!${e.appId}`}/**
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
 */const pi=new Map;function gi(e,t){const n=mn(e);mi(n,t),Qu(n,t)}function mi(e,t){const n=pi.get(e);if(n)for(const r of n)r(t)}function Qu(e,t){const n=ef();n&&n.postMessage({key:e,fid:t}),tf()}let qe=null;function ef(){return!qe&&"BroadcastChannel"in self&&(qe=new BroadcastChannel("[Firebase] FID Change"),qe.onmessage=e=>{mi(e.data.key,e.data.fid)}),qe}function tf(){pi.size===0&&qe&&(qe.close(),qe=null)}/**
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
 */const nf="firebase-installations-database",rf=1,Qe="firebase-installations-store";let Fn=null;function kr(){return Fn||(Fn=Br(nf,rf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Qe)}}})),Fn}async function nn(e,t){const n=mn(e),s=(await kr()).transaction(Qe,"readwrite"),o=s.objectStore(Qe),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&gi(e,t.fid),t}async function bi(e){const t=mn(e),r=(await kr()).transaction(Qe,"readwrite");await r.objectStore(Qe).delete(t),await r.done}async function bn(e,t){const n=mn(e),s=(await kr()).transaction(Qe,"readwrite"),o=s.objectStore(Qe),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&gi(e,a.fid),a}/**
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
 */async function Fr(e){let t;const n=await bn(e.appConfig,r=>{const s=sf(r),o=of(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===ur?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function sf(e){const t=e||{fid:Xu(),registrationStatus:0};return _i(t)}function of(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ze.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=af(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:cf(e)}:{installationEntry:t}}async function af(e,t){try{const n=await Ju(e,t);return nn(e.appConfig,n)}catch(n){throw ai(n)&&n.customData.serverCode===409?await bi(e.appConfig):await nn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function cf(e){let t=await Ls(e.appConfig);for(;t.registrationStatus===1;)await hi(100),t=await Ls(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fr(e);return r||n}return t}function Ls(e){return bn(e,t=>{if(!t)throw Ze.create("installation-not-found");return _i(t)})}function _i(e){return lf(e)?{fid:e.fid,registrationStatus:0}:e}function lf(e){return e.registrationStatus===1&&e.registrationTime+si<Date.now()}/**
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
 */async function uf({appConfig:e,heartbeatServiceProvider:t},n){const r=ff(e,n),s=Vu(e,n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:oi,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await di(()=>fetch(r,a));if(l.ok){const f=await l.json();return li(f)}else throw await ui("Generate Auth Token",l)}function ff(e,{fid:t}){return`${ci(e)}/${t}/authTokens:generate`}/**
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
 */async function Lr(e,t=!1){let n;const r=await bn(e.appConfig,o=>{if(!wi(o))throw Ze.create("not-registered");const i=o.authToken;if(!t&&pf(i))return o;if(i.requestStatus===1)return n=df(e,t),o;{if(!navigator.onLine)throw Ze.create("app-offline");const a=mf(o);return n=hf(e,a),a}});return n?await n:r.authToken}async function df(e,t){let n=await js(e.appConfig);for(;n.authToken.requestStatus===1;)await hi(100),n=await js(e.appConfig);const r=n.authToken;return r.requestStatus===0?Lr(e,t):r}function js(e){return bn(e,t=>{if(!wi(t))throw Ze.create("not-registered");const n=t.authToken;return bf(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function hf(e,t){try{const n=await uf(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await nn(e.appConfig,r),n}catch(n){if(ai(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bi(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await nn(e.appConfig,r)}throw n}}function wi(e){return e!==void 0&&e.registrationStatus===2}function pf(e){return e.requestStatus===2&&!gf(e)}function gf(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Hu}function mf(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function bf(e){return e.requestStatus===1&&e.requestTime+si<Date.now()}/**
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
 */async function _f(e){const t=e,{installationEntry:n,registrationPromise:r}=await Fr(t);return r?r.catch(console.error):Lr(t).catch(console.error),n.fid}/**
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
 */async function wf(e,t=!1){const n=e;return await yf(n),(await Lr(n,t)).token}async function yf(e){const{registrationPromise:t}=await Fr(e);t&&await t}/**
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
 */function Ef(e){if(!e||!e.options)throw Ln("App Configuration");if(!e.name)throw Ln("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ln(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ln(e){return Ze.create("missing-app-config-values",{valueName:e})}/**
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
 */const yi="installations",If="installations-internal",vf=e=>{const t=e.getProvider("app").getImmediate(),n=Ef(t),r=Nr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Tf=e=>{const t=e.getProvider("app").getImmediate(),n=Nr(t,yi).getImmediate();return{getId:()=>_f(n),getToken:s=>wf(n,s)}};function Af(){Xe(new Be(yi,vf,"PUBLIC")),Xe(new Be(If,Tf,"PRIVATE"))}Af();Ne(ri,$r);Ne(ri,$r,"esm2017");/**
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
 */const Cf="/firebase-messaging-sw.js",Sf="/firebase-cloud-messaging-push-scope",Ei="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Df="https://fcmregistrations.googleapis.com/v1",Ii="google.c.a.c_id",Of="google.c.a.c_l",xf="google.c.a.ts",Mf="google.c.a.e";var Hs;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hs||(Hs={}));/**
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
 */var Nt;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Nt||(Nt={}));/**
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
 */function Ee(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Pf(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const jn="fcm_token_details_db",Nf=5,Us="fcm_token_object_Store";async function Rf(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(jn))return null;let t=null;return(await Br(jn,Nf,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(Us))return;const l=i.objectStore(Us),f=await l.index("fcmSenderId").get(e);if(await l.clear(),!!f){if(s===2){const d=f;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Ee(d.vapidKey)}}}else if(s===3){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Ee(d.auth),p256dh:Ee(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Ee(d.vapidKey)}}}else if(s===4){const d=f;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Ee(d.auth),p256dh:Ee(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Ee(d.vapidKey)}}}}}})).close(),await $n(jn),await $n("fcm_vapid_details_db"),await $n("undefined"),Bf(t)?t:null}function Bf(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const $f="firebase-messaging-database",kf=1,et="firebase-messaging-store";let Hn=null;function jr(){return Hn||(Hn=Br($f,kf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(et)}}})),Hn}async function vi(e){const t=Ur(e),r=await(await jr()).transaction(et).objectStore(et).get(t);if(r)return r;{const s=await Rf(e.appConfig.senderId);if(s)return await Hr(e,s),s}}async function Hr(e,t){const n=Ur(e),s=(await jr()).transaction(et,"readwrite");return await s.objectStore(et).put(t,n),await s.done,t}async function Ff(e){const t=Ur(e),r=(await jr()).transaction(et,"readwrite");await r.objectStore(et).delete(t),await r.done}function Ur({appConfig:e}){return e.appId}/**
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
 */const Lf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ne=new gn("messaging","Messaging",Lf);/**
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
 */async function jf(e,t){const n=await Wr(e),r=Ai(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Kr(e.appConfig),s)).json()}catch(i){throw ne.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ne.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw ne.create("token-subscribe-no-token");return o.token}async function Hf(e,t){const n=await Wr(e),r=Ai(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Kr(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw ne.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ne.create("token-update-failed",{errorInfo:i})}if(!o.token)throw ne.create("token-update-no-token");return o.token}async function Ti(e,t){const r={method:"DELETE",headers:await Wr(e)};try{const o=await(await fetch(`${Kr(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw ne.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw ne.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Kr({projectId:e}){return`${Df}/projects/${e}/registrations`}async function Wr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ai({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Ei&&(s.web.applicationPubKey=r),s}/**
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
 */const Uf=7*24*60*60*1e3;async function Kf(e){const t=await qf(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ee(t.getKey("auth")),p256dh:Ee(t.getKey("p256dh"))},r=await vi(e.firebaseDependencies);if(r){if(zf(r.subscriptionOptions,n))return Date.now()>=r.createTime+Uf?Vf(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ti(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ks(e.firebaseDependencies,n)}else return Ks(e.firebaseDependencies,n)}async function Wf(e){const t=await vi(e.firebaseDependencies);t&&(await Ti(e.firebaseDependencies,t.token),await Ff(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Vf(e,t){try{const n=await Hf(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Hr(e.firebaseDependencies,r),n}catch(n){throw await Wf(e),n}}async function Ks(e,t){const r={token:await jf(e,t),createTime:Date.now(),subscriptionOptions:t};return await Hr(e,r),r.token}async function qf(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Pf(t)})}function zf(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
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
 */function Ws(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Jf(t,e),Yf(t,e),Gf(t,e),t}function Jf(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function Yf(e,t){t.data&&(e.data=t.data)}function Gf(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const l=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;l&&(e.fcmOptions.analyticsLabel=l)}/**
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
 */function Xf(e){return typeof e=="object"&&!!e&&Ii in e}/**
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
 */Ci("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ci("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ci(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function Zf(e){if(!e||!e.options)throw Un("App Configuration Object");if(!e.name)throw Un("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Un(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Un(e){return ne.create("missing-app-config-values",{valueName:e})}/**
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
 */class Qf{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Zf(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function ed(e){try{e.swRegistration=await navigator.serviceWorker.register(Cf,{scope:Sf}),e.swRegistration.update().catch(()=>{})}catch(t){throw ne.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function td(e,t){if(!t&&!e.swRegistration&&await ed(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ne.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function nd(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ei)}/**
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
 */async function Si(e,t){if(!navigator)throw ne.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ne.create("permission-blocked");return await nd(e,t==null?void 0:t.vapidKey),await td(e,t==null?void 0:t.serviceWorkerRegistration),Kf(e)}/**
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
 */async function rd(e,t,n){const r=sd(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Ii],message_name:n[Of],message_time:n[xf],message_device_time:Math.floor(Date.now()/1e3)})}function sd(e){switch(e){case Nt.NOTIFICATION_CLICKED:return"notification_open";case Nt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function od(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Nt.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ws(n)):e.onMessageHandler.next(Ws(n)));const r=n.data;Xf(r)&&r[Mf]==="1"&&await rd(e,n.messageType,r)}const Vs="@firebase/messaging",qs="0.12.4";/**
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
 */const id=e=>{const t=new Qf(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>od(t,n)),t},ad=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Si(t,r)}};function cd(){Xe(new Be("messaging",id,"PUBLIC")),Xe(new Be("messaging-internal",ad,"PRIVATE")),Ne(Vs,qs),Ne(Vs,qs,"esm2017")}/**
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
 */async function ld(){try{await Jo()}catch{return!1}return typeof window<"u"&&zo()&&_l()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ud(e=_u()){return ld().then(t=>{if(!t)throw ne.create("unsupported-browser")},t=>{throw ne.create("indexed-db-unsupported")}),Nr(Yo(e),"messaging").getImmediate()}async function fd(e,t){return e=Yo(e),Si(e,t)}cd();const _n=e=>(Io("data-v-1100db3d"),e=e(),vo(),e),dd=_n(()=>z("div",{class:"card"},[z("p",null,[Ye(" Edit "),z("code",null,"components/HelloWorld.vue"),Ye(" to test HMR ")])],-1)),hd=_n(()=>z("p",null,[Ye(" Check out "),z("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),Ye(", the official Vue + Vite starter ")],-1)),pd=_n(()=>z("p",null,[Ye(" Install "),z("a",{href:"https://github.com/vuejs/language-tools",target:"_blank"},"Volar"),Ye(" in your IDE for a better DX ")],-1)),gd=_n(()=>z("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),md=Co({__name:"HelloWorld",props:{msg:{}},setup(e){const t=ya(""),r=Zo({apiKey:"AIzaSyBzn5R-pwBBJleWoXGRoNyARZPWsnc_hdE",authDomain:"guia-da-carreira.firebaseapp.com",projectId:"guia-da-carreira",storageBucket:"guia-da-carreira.appspot.com",messagingSenderId:"593917866707",appId:"1:593917866707:web:899dff70c197fb6a7c1a26",measurementId:"G-207WBD3J4M"}),s=ud(r);return navigator.serviceWorker.register("/public/firebase-messaging-sw.js").then(o=>{fd(s,{vapidKey:"BGQV9f_acJiZ32u7coDXbuUhpIRvYDDWE4hKcWR5-0q_A2POShUwDwiXfrbGRgckZw7YHqqaOLcMqcPOiU7akMY",serviceWorkerRegistration:o}).then(i=>{if(i)console.log("Notification permission already granted."),t.value=i;else return console.log("No registration token available. Request permission to generate one."),Notification.requestPermission().then(a=>{a==="granted"?(console.log("Notification permission granted."),t.value=i):console.log("Unable to get permission to notify.")})}).catch(i=>{console.log("An error occurred while retrieving token. ",i)})}),(o,i)=>(Fo(),Lo(ce,null,[z("h1",null,Ki(o.msg),1),Ua(z("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":i[0]||(i[0]=a=>t.value=a)},null,512),[[tl,t.value]]),dd,hd,pd,gd],64))}});const Di=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},bd=Di(md,[["__scopeId","data-v-1100db3d"]]),_d=e=>(Io("data-v-58aba71c"),e=e(),vo(),e),wd=_d(()=>z("div",null,[z("a",{href:"https://vitejs.dev",target:"_blank"},[z("img",{src:il,class:"logo",alt:"Vite logo"})]),z("a",{href:"https://vuejs.org/",target:"_blank"},[z("img",{src:al,class:"logo vue",alt:"Vue logo"})])],-1)),yd=Co({__name:"App",setup(e){return(t,n)=>(Fo(),Lo(ce,null,[wd,xe(bd,{msg:"Vite + Vue"})],64))}});const Ed=Di(yd,[["__scopeId","data-v-58aba71c"]]);sl(Ed).mount("#app");
