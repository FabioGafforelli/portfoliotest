var _h=Object.defineProperty;var jl=Object.getOwnPropertySymbols;var xh=Object.prototype.hasOwnProperty,vh=Object.prototype.propertyIsEnumerable;var ql=(n,e,t)=>e in n?_h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tn=(n,e)=>{for(var t in e||(e={}))xh.call(e,t)&&ql(n,t,e[t]);if(jl)for(var t of jl(e))vh.call(e,t)&&ql(n,t,e[t]);return n};import{getFirestore as He,collection as ht,query as hi,where as pr,onSnapshot as vn,addDoc as Ms,orderBy as ll,doc as kt,getDoc as Wi,updateDoc as go,deleteDoc as _o}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";import{getStorage as lt,ref as st,getDownloadURL as Bt,uploadString as ji,deleteObject as Ds}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";import{getAuth as Gn,signInWithEmailAndPassword as bh,signOut as yh,createUserWithEmailAndPassword as Mh,onAuthStateChanged as wh}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";import{initializeApp as Sh}from"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";const Eh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Eh();function cl(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Ah="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Th=cl(Ah);function xd(n){return!!n||n===""}function ul(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Lt(i)?Dh(i):ul(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Lt(n))return n;if(xt(n))return n}}const Lh=/;(?![^(]*\))/g,Ch=/:(.+)/;function Dh(n){const e={};return n.split(Lh).forEach(t=>{if(t){const i=t.split(Ch);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dl(n){let e="";if(Lt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=dl(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ln=n=>Lt(n)?n:n==null?"":Oe(n)||xt(n)&&(n.toString===Md||!Ve(n.toString))?JSON.stringify(n,vd,2):String(n),vd=(n,e)=>e&&e.__v_isRef?vd(n,e.value):xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:bd(e)?{[`Set(${e.size})`]:[...e.values()]}:xt(e)&&!Oe(e)&&!wd(e)?String(e):e,at={},_s=[],bn=()=>{},Ph=()=>!1,Rh=/^on[^a-z]/,xo=n=>Rh.test(n),fl=n=>n.startsWith("onUpdate:"),Dt=Object.assign,hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ih=Object.prototype.hasOwnProperty,Ke=(n,e)=>Ih.call(n,e),Oe=Array.isArray,xs=n=>vo(n)==="[object Map]",bd=n=>vo(n)==="[object Set]",Ve=n=>typeof n=="function",Lt=n=>typeof n=="string",pl=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",yd=n=>xt(n)&&Ve(n.then)&&Ve(n.catch),Md=Object.prototype.toString,vo=n=>Md.call(n),Fh=n=>vo(n).slice(8,-1),wd=n=>vo(n)==="[object Object]",ml=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Kr=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Uh=/-(\w)/g,Pn=bo(n=>n.replace(Uh,(e,t)=>t?t.toUpperCase():"")),Nh=/\B([A-Z])/g,Ps=bo(n=>n.replace(Nh,"-$1").toLowerCase()),yo=bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),ko=bo(n=>n?`on${yo(n)}`:""),sr=(n,e)=>!Object.is(n,e),Jr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},oo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ao=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $l;const Oh=()=>$l||($l=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let En;class zh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&En&&(this.parent=En,this.index=(En.scopes||(En.scopes=[])).push(this)-1)}run(e){if(this.active){const t=En;try{return En=this,e()}finally{En=t}}}on(){En=this}off(){En=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Bh(n,e=En){e&&e.active&&e.effects.push(n)}const gl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Sd=n=>(n.w&di)>0,Ed=n=>(n.n&di)>0,kh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=di},Vh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Sd(s)&&!Ed(s)?s.delete(n):e[t++]=s,s.w&=~di,s.n&=~di}e.length=t}},Ra=new WeakMap;let qs=0,di=1;const Ia=30;let mn;const Ii=Symbol(""),Fa=Symbol("");class _l{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Bh(this,i)}run(){if(!this.active)return this.fn();let e=mn,t=ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mn,mn=this,ai=!0,di=1<<++qs,qs<=Ia?kh(this):Xl(this),this.fn()}finally{qs<=Ia&&Vh(this),di=1<<--qs,mn=this.parent,ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mn===this?this.deferStop=!0:this.active&&(Xl(this),this.onStop&&this.onStop(),this.active=!1)}}function Xl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ai=!0;const Ad=[];function Rs(){Ad.push(ai),ai=!1}function Is(){const n=Ad.pop();ai=n===void 0?!0:n}function Jt(n,e,t){if(ai&&mn){let i=Ra.get(n);i||Ra.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=gl()),Td(s)}}function Td(n,e){let t=!1;qs<=Ia?Ed(n)||(n.n|=di,t=!Sd(n)):t=!n.has(mn),t&&(n.add(mn),mn.deps.push(n))}function jn(n,e,t,i,s,r){const a=Ra.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?ml(t)&&o.push(a.get("length")):(o.push(a.get(Ii)),xs(n)&&o.push(a.get(Fa)));break;case"delete":Oe(n)||(o.push(a.get(Ii)),xs(n)&&o.push(a.get(Fa)));break;case"set":xs(n)&&o.push(a.get(Ii));break}if(o.length===1)o[0]&&Ua(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ua(gl(l))}}function Ua(n,e){for(const t of Oe(n)?n:[...n])(t!==mn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hh=cl("__proto__,__v_isRef,__isVue"),Ld=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(pl)),Gh=xl(),Wh=xl(!1,!0),jh=xl(!0),Yl=qh();function qh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let r=0,a=this.length;r<a;r++)Jt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Rs();const i=tt(this)[e].apply(this,t);return Is(),i}}),n}function xl(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?lp:Id:e?Rd:Pd).get(i))return i;const a=Oe(i);if(!n&&a&&Ke(Yl,s))return Reflect.get(Yl,s,r);const o=Reflect.get(i,s,r);return(pl(s)?Ld.has(s):Hh(s))||(n||Jt(i,"get",s),e)?o:Ct(o)?!a||!ml(s)?o.value:o:xt(o)?n?Fd(o):mr(o):o}}const $h=Cd(),Xh=Cd(!0);function Cd(n=!1){return function(t,i,s,r){let a=t[i];if(rr(a)&&Ct(a)&&!Ct(s))return!1;if(!n&&!rr(s)&&(Ud(s)||(s=tt(s),a=tt(a)),!Oe(t)&&Ct(a)&&!Ct(s)))return a.value=s,!0;const o=Oe(t)&&ml(i)?Number(i)<t.length:Ke(t,i),l=Reflect.set(t,i,s,r);return t===tt(r)&&(o?sr(s,a)&&jn(t,"set",i,s):jn(t,"add",i,s)),l}}function Yh(n,e){const t=Ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&jn(n,"delete",e,void 0),i}function Zh(n,e){const t=Reflect.has(n,e);return(!pl(e)||!Ld.has(e))&&Jt(n,"has",e),t}function Kh(n){return Jt(n,"iterate",Oe(n)?"length":Ii),Reflect.ownKeys(n)}const Dd={get:Gh,set:$h,deleteProperty:Yh,has:Zh,ownKeys:Kh},Jh={get:jh,set(n,e){return!0},deleteProperty(n,e){return!0}},Qh=Dt({},Dd,{get:Wh,set:Xh}),vl=n=>n,Mo=n=>Reflect.getPrototypeOf(n);function Mr(n,e,t=!1,i=!1){n=n.__v_raw;const s=tt(n),r=tt(e);e!==r&&!t&&Jt(s,"get",e),!t&&Jt(s,"get",r);const{has:a}=Mo(s),o=i?vl:t?Ml:or;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function wr(n,e=!1){const t=this.__v_raw,i=tt(t),s=tt(n);return n!==s&&!e&&Jt(i,"has",n),!e&&Jt(i,"has",s),n===s?t.has(n):t.has(n)||t.has(s)}function Sr(n,e=!1){return n=n.__v_raw,!e&&Jt(tt(n),"iterate",Ii),Reflect.get(n,"size",n)}function Zl(n){n=tt(n);const e=tt(this);return Mo(e).has.call(e,n)||(e.add(n),jn(e,"add",n,n)),this}function Kl(n,e){e=tt(e);const t=tt(this),{has:i,get:s}=Mo(t);let r=i.call(t,n);r||(n=tt(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?sr(e,a)&&jn(t,"set",n,e):jn(t,"add",n,e),this}function Jl(n){const e=tt(this),{has:t,get:i}=Mo(e);let s=t.call(e,n);s||(n=tt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&jn(e,"delete",n,void 0),r}function Ql(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&jn(n,"clear",void 0,void 0),t}function Er(n,e){return function(i,s){const r=this,a=r.__v_raw,o=tt(a),l=e?vl:n?Ml:or;return!n&&Jt(o,"iterate",Ii),a.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Ar(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),a=xs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?vl:e?Ml:or;return!e&&Jt(r,"iterate",l?Fa:Ii),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Xn(n){return function(...e){return n==="delete"?!1:this}}function ep(){const n={get(r){return Mr(this,r)},get size(){return Sr(this)},has:wr,add:Zl,set:Kl,delete:Jl,clear:Ql,forEach:Er(!1,!1)},e={get(r){return Mr(this,r,!1,!0)},get size(){return Sr(this)},has:wr,add:Zl,set:Kl,delete:Jl,clear:Ql,forEach:Er(!1,!0)},t={get(r){return Mr(this,r,!0)},get size(){return Sr(this,!0)},has(r){return wr.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:Er(!0,!1)},i={get(r){return Mr(this,r,!0,!0)},get size(){return Sr(this,!0)},has(r){return wr.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ar(r,!1,!1),t[r]=Ar(r,!0,!1),e[r]=Ar(r,!1,!0),i[r]=Ar(r,!0,!0)}),[n,t,e,i]}const[tp,np,ip,sp]=ep();function bl(n,e){const t=e?n?sp:ip:n?np:tp;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Ke(t,s)&&s in i?t:i,s,r)}const rp={get:bl(!1,!1)},op={get:bl(!1,!0)},ap={get:bl(!0,!1)},Pd=new WeakMap,Rd=new WeakMap,Id=new WeakMap,lp=new WeakMap;function cp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function up(n){return n.__v_skip||!Object.isExtensible(n)?0:cp(Fh(n))}function mr(n){return rr(n)?n:yl(n,!1,Dd,rp,Pd)}function dp(n){return yl(n,!1,Qh,op,Rd)}function Fd(n){return yl(n,!0,Jh,ap,Id)}function yl(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=up(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function vs(n){return rr(n)?vs(n.__v_raw):!!(n&&n.__v_isReactive)}function rr(n){return!!(n&&n.__v_isReadonly)}function Ud(n){return!!(n&&n.__v_isShallow)}function Nd(n){return vs(n)||rr(n)}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Od(n){return oo(n,"__v_skip",!0),n}const or=n=>xt(n)?mr(n):n,Ml=n=>xt(n)?Fd(n):n;function zd(n){ai&&mn&&(n=tt(n),Td(n.dep||(n.dep=gl())))}function Bd(n,e){n=tt(n),n.dep&&Ua(n.dep)}function Ct(n){return!!(n&&n.__v_isRef===!0)}function fp(n){return kd(n,!1)}function hp(n){return kd(n,!0)}function kd(n,e){return Ct(n)?n:new pp(n,e)}class pp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:or(e)}get value(){return zd(this),this._value}set value(e){e=this.__v_isShallow?e:tt(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:or(e),Bd(this))}}function Js(n){return Ct(n)?n.value:n}const mp={get:(n,e,t)=>Js(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ct(s)&&!Ct(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Vd(n){return vs(n)?n:new Proxy(n,mp)}class gp{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new _l(e,()=>{this._dirty||(this._dirty=!0,Bd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=tt(this);return zd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _p(n,e,t=!1){let i,s;const r=Ve(n);return r?(i=n,s=bn):(i=n.get,s=n.set),new gp(i,s,r||!s,t)}function li(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){wo(r,e,t)}return s}function un(n,e,t,i){if(Ve(n)){const r=li(n,e,t,i);return r&&yd(r)&&r.catch(a=>{wo(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(un(n[r],e,t,i));return s}function wo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,a,o]);return}}xp(n,t,s,i)}function xp(n,e,t,i=!0){console.error(n)}let lo=!1,Na=!1;const Xt=[];let Vn=0;const Qs=[];let $s=null,ds=0;const er=[];let ii=null,fs=0;const Hd=Promise.resolve();let wl=null,Oa=null;function Gd(n){const e=wl||Hd;return n?e.then(this?n.bind(this):n):e}function vp(n){let e=Vn+1,t=Xt.length;for(;e<t;){const i=e+t>>>1;ar(Xt[i])<n?e=i+1:t=i}return e}function Wd(n){(!Xt.length||!Xt.includes(n,lo&&n.allowRecurse?Vn+1:Vn))&&n!==Oa&&(n.id==null?Xt.push(n):Xt.splice(vp(n.id),0,n),jd())}function jd(){!lo&&!Na&&(Na=!0,wl=Hd.then(Xd))}function bp(n){const e=Xt.indexOf(n);e>Vn&&Xt.splice(e,1)}function qd(n,e,t,i){Oe(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),jd()}function yp(n){qd(n,$s,Qs,ds)}function Mp(n){qd(n,ii,er,fs)}function Sl(n,e=null){if(Qs.length){for(Oa=e,$s=[...new Set(Qs)],Qs.length=0,ds=0;ds<$s.length;ds++)$s[ds]();$s=null,ds=0,Oa=null,Sl(n,e)}}function $d(n){if(er.length){const e=[...new Set(er)];if(er.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((t,i)=>ar(t)-ar(i)),fs=0;fs<ii.length;fs++)ii[fs]();ii=null,fs=0}}const ar=n=>n.id==null?1/0:n.id;function Xd(n){Na=!1,lo=!0,Sl(n),Xt.sort((t,i)=>ar(t)-ar(i));const e=bn;try{for(Vn=0;Vn<Xt.length;Vn++){const t=Xt[Vn];t&&t.active!==!1&&li(t,null,14)}}finally{Vn=0,Xt.length=0,$d(),lo=!1,wl=null,(Xt.length||Qs.length||er.length)&&Xd(n)}}function wp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:f}=i[u]||at;f?s=t.map(m=>m.trim()):d&&(s=t.map(ao))}let o,l=i[o=ko(e)]||i[o=ko(Pn(e))];!l&&r&&(l=i[o=ko(Ps(e))]),l&&un(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,un(c,n,6,s)}}function Yd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ve(n)){const l=c=>{const u=Yd(c,e,!0);u&&(o=!0,Dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(i.set(n,null),null):(Oe(r)?r.forEach(l=>a[l]=null):Dt(a,r),i.set(n,a),a)}function So(n,e){return!n||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Ps(e))||Ke(n,e))}let cn=null,Zd=null;function co(n){const e=cn;return cn=n,Zd=n&&n.type.__scopeId||null,e}function Re(n,e=cn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&uc(-1);const r=co(e),a=n(...s);return co(r),i._d&&uc(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function Vo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:g,inheritAttrs:p}=n;let h,x;const E=co(n);try{if(t.shapeFlag&4){const w=s||i;h=Tn(u.call(w,w,d,r,m,f,g)),x=l}else{const w=e;h=Tn(w.length>1?w(r,{attrs:l,slots:o,emit:c}):w(r,null)),x=e.props?l:Sp(l)}}catch(w){tr.length=0,wo(w,n,1),h=_e(yn)}let y=h;if(x&&p!==!1){const w=Object.keys(x),{shapeFlag:T}=y;w.length&&T&7&&(a&&w.some(fl)&&(x=Ep(x,a)),y=zi(y,x))}return t.dirs&&(y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),h=y,co(E),h}const Sp=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},Ep=(n,e)=>{const t={};for(const i in n)(!fl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ap(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ec(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!So(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ec(i,a,c):!0:!!a;return!1}function ec(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!So(t,r))return!0}return!1}function Tp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Lp=n=>n.__isSuspense;function Cp(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Mp(n)}function Qr(n,e){if(Et){let t=Et.provides;const i=Et.parent&&Et.parent.provides;i===t&&(t=Et.provides=Object.create(i)),t[n]=e}}function ci(n,e,t=!1){const i=Et||cn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ve(e)?e.call(i.proxy):e}}const tc={};function eo(n,e,t){return Kd(n,e,t)}function Kd(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=at){const o=Et;let l,c=!1,u=!1;if(Ct(n)?(l=()=>n.value,c=Ud(n)):vs(n)?(l=()=>n,i=!0):Oe(n)?(u=!0,c=n.some(vs),l=()=>n.map(x=>{if(Ct(x))return x.value;if(vs(x))return Di(x);if(Ve(x))return li(x,o,2)})):Ve(n)?e?l=()=>li(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),un(n,o,3,[f])}:l=bn,e&&i){const x=l;l=()=>Di(x())}let d,f=x=>{d=h.onStop=()=>{li(x,o,4)}};if(lr)return f=bn,e?t&&un(e,o,3,[l(),u?[]:void 0,f]):l(),bn;let m=u?[]:tc;const g=()=>{if(!!h.active)if(e){const x=h.run();(i||c||(u?x.some((E,y)=>sr(E,m[y])):sr(x,m)))&&(d&&d(),un(e,o,3,[x,m===tc?void 0:m,f]),m=x)}else h.run()};g.allowRecurse=!!e;let p;s==="sync"?p=g:s==="post"?p=()=>Vt(g,o&&o.suspense):p=()=>{!o||o.isMounted?yp(g):g()};const h=new _l(l,p);return e?t?g():m=h.run():s==="post"?Vt(h.run.bind(h),o&&o.suspense):h.run(),()=>{h.stop(),o&&o.scope&&hl(o.scope.effects,h)}}function Dp(n,e,t){const i=this.proxy,s=Lt(n)?n.includes(".")?Jd(i,n):()=>i[n]:n.bind(i,i);let r;Ve(e)?r=e:(r=e.handler,t=e);const a=Et;ws(this);const o=Kd(s,r.bind(i),t);return a?ws(a):Ui(),o}function Jd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Di(n,e){if(!xt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ct(n))Di(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Di(n[t],e);else if(bd(n)||xs(n))n.forEach(t=>{Di(t,e)});else if(wd(n))for(const t in n)Di(n[t],e);return n}function Pp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rf(()=>{n.isMounted=!0}),of(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],Rp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},setup(n,{slots:e}){const t=mm(),i=Pp();let s;return()=>{const r=e.default&&tf(e.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const p of r)if(p.type!==yn){a=p;break}}const o=tt(n),{mode:l}=o;if(i.isLeaving)return Ho(a);const c=nc(a);if(!c)return Ho(a);const u=za(c,o,i,t);Ba(c,u);const d=t.subTree,f=d&&nc(d);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();s===void 0?s=p:p!==s&&(s=p,m=!0)}if(f&&f.type!==yn&&(!Ti(c,f)||m)){const p=za(f,o,i,t);if(Ba(f,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},Ho(a);l==="in-out"&&c.type!==yn&&(p.delayLeave=(h,x,E)=>{const y=ef(i,f);y[String(f.key)]=f,h._leaveCb=()=>{x(),h._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return a}}},Qd=Rp;function ef(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function za(n,e,t,i){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:h,onAfterAppear:x,onAppearCancelled:E}=e,y=String(n.key),w=ef(t,n),T=(R,M)=>{R&&un(R,i,9,M)},D={mode:r,persisted:a,beforeEnter(R){let M=o;if(!t.isMounted)if(s)M=p||o;else return;R._leaveCb&&R._leaveCb(!0);const C=w[y];C&&Ti(n,C)&&C.el._leaveCb&&C.el._leaveCb(),T(M,[R])},enter(R){let M=l,C=c,z=u;if(!t.isMounted)if(s)M=h||l,C=x||c,z=E||u;else return;let te=!1;const G=R._enterCb=k=>{te||(te=!0,k?T(z,[R]):T(C,[R]),D.delayedLeave&&D.delayedLeave(),R._enterCb=void 0)};M?(M(R,G),M.length<=1&&G()):G()},leave(R,M){const C=String(n.key);if(R._enterCb&&R._enterCb(!0),t.isUnmounting)return M();T(d,[R]);let z=!1;const te=R._leaveCb=G=>{z||(z=!0,M(),G?T(g,[R]):T(m,[R]),R._leaveCb=void 0,w[C]===n&&delete w[C])};w[C]=n,f?(f(R,te),f.length<=1&&te()):te()},clone(R){return za(R,e,t,i)}};return D}function Ho(n){if(Eo(n))return n=zi(n),n.children=null,n}function nc(n){return Eo(n)?n.children?n.children[0]:void 0:n}function Ba(n,e){n.shapeFlag&6&&n.component?Ba(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function tf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===rt?(a.patchFlag&128&&s++,i=i.concat(tf(a.children,e,o))):(e||a.type!==yn)&&i.push(o!=null?zi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function nf(n){return Ve(n)?{setup:n,name:n.name}:n}const ka=n=>!!n.type.__asyncLoader,Eo=n=>n.type.__isKeepAlive;function Ip(n,e){sf(n,"a",e)}function Fp(n,e){sf(n,"da",e)}function sf(n,e,t=Et){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ao(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Eo(s.parent.vnode)&&Up(i,e,t,s),s=s.parent}}function Up(n,e,t,i){const s=Ao(e,n,i,!0);af(()=>{hl(i[e],s)},t)}function Ao(n,e,t=Et,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Rs(),ws(t);const o=un(e,t,n,a);return Ui(),Is(),o});return i?s.unshift(r):s.push(r),r}}const $n=n=>(e,t=Et)=>(!lr||n==="sp")&&Ao(n,e,t),Np=$n("bm"),rf=$n("m"),Op=$n("bu"),zp=$n("u"),of=$n("bum"),af=$n("um"),Bp=$n("sp"),kp=$n("rtg"),Vp=$n("rtc");function Hp(n,e=Et){Ao("ec",n,e)}let Va=!0;function Gp(n){const e=cf(n),t=n.proxy,i=n.ctx;Va=!1,e.beforeCreate&&ic(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:g,activated:p,deactivated:h,beforeDestroy:x,beforeUnmount:E,destroyed:y,unmounted:w,render:T,renderTracked:D,renderTriggered:R,errorCaptured:M,serverPrefetch:C,expose:z,inheritAttrs:te,components:G,directives:k,filters:B}=e;if(c&&Wp(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const re in a){const X=a[re];Ve(X)&&(i[re]=X.bind(t))}if(s){const re=s.call(t,t);xt(re)&&(n.data=mr(re))}if(Va=!0,r)for(const re in r){const X=r[re],fe=Ve(X)?X.bind(t,t):Ve(X.get)?X.get.bind(t,t):bn,ue=!Ve(X)&&Ve(X.set)?X.set.bind(t):bn,Le=Cn({get:fe,set:ue});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Le.value,set:j=>Le.value=j})}if(o)for(const re in o)lf(o[re],i,t,re);if(l){const re=Ve(l)?l.call(t):l;Reflect.ownKeys(re).forEach(X=>{Qr(X,re[X])})}u&&ic(u,n,"c");function ie(re,X){Oe(X)?X.forEach(fe=>re(fe.bind(t))):X&&re(X.bind(t))}if(ie(Np,d),ie(rf,f),ie(Op,m),ie(zp,g),ie(Ip,p),ie(Fp,h),ie(Hp,M),ie(Vp,D),ie(kp,R),ie(of,E),ie(af,w),ie(Bp,C),Oe(z))if(z.length){const re=n.exposed||(n.exposed={});z.forEach(X=>{Object.defineProperty(re,X,{get:()=>t[X],set:fe=>t[X]=fe})})}else n.exposed||(n.exposed={});T&&n.render===bn&&(n.render=T),te!=null&&(n.inheritAttrs=te),G&&(n.components=G),k&&(n.directives=k)}function Wp(n,e,t=bn,i=!1){Oe(n)&&(n=Ha(n));for(const s in n){const r=n[s];let a;xt(r)?"default"in r?a=ci(r.from||s,r.default,!0):a=ci(r.from||s):a=ci(r),Ct(a)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[s]=a}}function ic(n,e,t){un(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function lf(n,e,t,i){const s=i.includes(".")?Jd(t,i):()=>t[i];if(Lt(n)){const r=e[n];Ve(r)&&eo(s,r)}else if(Ve(n))eo(s,n.bind(t));else if(xt(n))if(Oe(n))n.forEach(r=>lf(r,e,t,i));else{const r=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(r)&&eo(s,r,n)}}function cf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>uo(l,c,a,!0)),uo(l,e,a)),r.set(e,l),l}function uo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&uo(n,r,t,!0),s&&s.forEach(a=>uo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=jp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const jp={data:sc,props:Si,emits:Si,methods:Si,computed:Si,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Si,directives:Si,watch:$p,provide:sc,inject:qp};function sc(n,e){return e?n?function(){return Dt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function qp(n,e){return Si(Ha(n),Ha(e))}function Ha(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Si(n,e){return n?Dt(Dt(Object.create(null),n),e):e}function $p(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function Xp(n,e,t,i=!1){const s={},r={};oo(r,To,1),n.propsDefaults=Object.create(null),uf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:dp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Yp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=tt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(So(n.emitsOptions,f))continue;const m=e[f];if(l)if(Ke(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const g=Pn(f);s[g]=Ga(l,o,g,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{uf(n,e,s,r)&&(c=!0);let u;for(const d in o)(!e||!Ke(e,d)&&((u=Ps(d))===d||!Ke(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=Ga(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!e||!Ke(e,d)&&!0)&&(delete r[d],c=!0)}c&&jn(n,"set","$attrs")}function uf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Kr(l))continue;const c=e[l];let u;s&&Ke(s,u=Pn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:So(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=tt(t),c=o||at;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Ga(s,l,d,c[d],n,!Ke(c,d))}}return a}function Ga(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=Ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ve(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(ws(s),i=c[t]=l.call(null,e),Ui())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ps(t))&&(i=!0))}return i}function df(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ve(n)){const u=d=>{l=!0;const[f,m]=df(d,e,!0);Dt(a,f),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return i.set(n,_s),_s;if(Oe(r))for(let u=0;u<r.length;u++){const d=Pn(r[u]);rc(d)&&(a[d]=at)}else if(r)for(const u in r){const d=Pn(u);if(rc(d)){const f=r[u],m=a[d]=Oe(f)||Ve(f)?{type:f}:f;if(m){const g=lc(Boolean,m.type),p=lc(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ke(m,"default"))&&o.push(d)}}}const c=[a,o];return i.set(n,c),c}function rc(n){return n[0]!=="$"}function oc(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function ac(n,e){return oc(n)===oc(e)}function lc(n,e){return Oe(e)?e.findIndex(t=>ac(t,n)):Ve(e)&&ac(e,n)?0:-1}const ff=n=>n[0]==="_"||n==="$stable",El=n=>Oe(n)?n.map(Tn):[Tn(n)],Zp=(n,e,t)=>{const i=Re((...s)=>El(e(...s)),t);return i._c=!1,i},hf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(ff(s))continue;const r=n[s];if(Ve(r))e[s]=Zp(s,r,i);else if(r!=null){const a=El(r);e[s]=()=>a}}},pf=(n,e)=>{const t=El(e);n.slots.default=()=>t},Kp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=tt(e),oo(e,"_",t)):hf(e,n.slots={})}else n.slots={},e&&pf(n,e);oo(n.slots,To,1)},Jp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=at;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Dt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,hf(e,s)),a=e}else e&&(pf(n,e),a={default:1});if(r)for(const o in s)!ff(o)&&!(o in a)&&delete s[o]};function dt(n,e){const t=cn;if(t===null)return n;const i=Lo(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[a,o,l,c=at]=e[r];Ve(a)&&(a={mounted:a,updated:a}),a.deep&&Di(o),s.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c})}return n}function xi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Rs(),un(l,t,8,[n.el,o,n,e]),Is())}}function mf(){return{app:null,config:{isNativeTag:Ph,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qp=0;function em(n,e){return function(i,s=null){Ve(i)||(i=Object.assign({},i)),s!=null&&!xt(s)&&(s=null);const r=mf(),a=new Set;let o=!1;const l=r.app={_uid:Qp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Mm,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ve(c.install)?(a.add(c),c.install(l,...u)):Ve(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!o){const f=_e(i,s);return f.appContext=r,u&&e?e(f,c):n(f,c,d),o=!0,l._container=c,c.__vue_app__=l,Lo(f.component)||f.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Wa(n,e,t,i,s=!1){if(Oe(n)){n.forEach((f,m)=>Wa(f,e&&(Oe(e)?e[m]:e),t,i,s));return}if(ka(i)&&!s)return;const r=i.shapeFlag&4?Lo(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===at?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,Ke(d,c)&&(d[c]=null)):Ct(c)&&(c.value=null)),Ve(l))li(l,o,12,[a,u]);else{const f=Lt(l),m=Ct(l);if(f||m){const g=()=>{if(n.f){const p=f?u[l]:l.value;s?Oe(p)&&hl(p,r):Oe(p)?p.includes(r)||p.push(r):f?(u[l]=[r],Ke(d,l)&&(d[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else f?(u[l]=a,Ke(d,l)&&(d[l]=a)):Ct(l)&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,Vt(g,t)):g()}}}const Vt=Cp;function tm(n){return nm(n)}function nm(n,e){const t=Oh();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=bn,cloneNode:g,insertStaticContent:p}=n,h=(S,P,W,J=null,ne=null,le=null,de=!1,he=null,me=!!P.dynamicChildren)=>{if(S===P)return;S&&!Ti(S,P)&&(J=oe(S),ae(S,ne,le,!0),S=null),P.patchFlag===-2&&(me=!1,P.dynamicChildren=null);const{type:v,ref:_,shapeFlag:U}=P;switch(v){case Al:x(S,P,W,J);break;case yn:E(S,P,W,J);break;case to:S==null&&y(P,W,J,de);break;case rt:k(S,P,W,J,ne,le,de,he,me);break;default:U&1?D(S,P,W,J,ne,le,de,he,me):U&6?B(S,P,W,J,ne,le,de,he,me):(U&64||U&128)&&v.process(S,P,W,J,ne,le,de,he,me,pe)}_!=null&&ne&&Wa(_,S&&S.ref,le,P||S,!P)},x=(S,P,W,J)=>{if(S==null)i(P.el=o(P.children),W,J);else{const ne=P.el=S.el;P.children!==S.children&&c(ne,P.children)}},E=(S,P,W,J)=>{S==null?i(P.el=l(P.children||""),W,J):P.el=S.el},y=(S,P,W,J)=>{[S.el,S.anchor]=p(S.children,P,W,J,S.el,S.anchor)},w=({el:S,anchor:P},W,J)=>{let ne;for(;S&&S!==P;)ne=f(S),i(S,W,J),S=ne;i(P,W,J)},T=({el:S,anchor:P})=>{let W;for(;S&&S!==P;)W=f(S),s(S),S=W;s(P)},D=(S,P,W,J,ne,le,de,he,me)=>{de=de||P.type==="svg",S==null?R(P,W,J,ne,le,de,he,me):z(S,P,ne,le,de,he,me)},R=(S,P,W,J,ne,le,de,he)=>{let me,v;const{type:_,props:U,shapeFlag:$,transition:Y,patchFlag:ce,dirs:we}=S;if(S.el&&g!==void 0&&ce===-1)me=S.el=g(S.el);else{if(me=S.el=a(S.type,le,U&&U.is,U),$&8?u(me,S.children):$&16&&C(S.children,me,null,J,ne,le&&_!=="foreignObject",de,he),we&&xi(S,null,J,"created"),U){for(const F in U)F!=="value"&&!Kr(F)&&r(me,F,null,U[F],le,S.children,J,ne,K);"value"in U&&r(me,"value",null,U.value),(v=U.onVnodeBeforeMount)&&Sn(v,J,S)}M(me,S,S.scopeId,de,J)}we&&xi(S,null,J,"beforeMount");const L=(!ne||ne&&!ne.pendingBranch)&&Y&&!Y.persisted;L&&Y.beforeEnter(me),i(me,P,W),((v=U&&U.onVnodeMounted)||L||we)&&Vt(()=>{v&&Sn(v,J,S),L&&Y.enter(me),we&&xi(S,null,J,"mounted")},ne)},M=(S,P,W,J,ne)=>{if(W&&m(S,W),J)for(let le=0;le<J.length;le++)m(S,J[le]);if(ne){let le=ne.subTree;if(P===le){const de=ne.vnode;M(S,de,de.scopeId,de.slotScopeIds,ne.parent)}}},C=(S,P,W,J,ne,le,de,he,me=0)=>{for(let v=me;v<S.length;v++){const _=S[v]=he?si(S[v]):Tn(S[v]);h(null,_,P,W,J,ne,le,de,he)}},z=(S,P,W,J,ne,le,de)=>{const he=P.el=S.el;let{patchFlag:me,dynamicChildren:v,dirs:_}=P;me|=S.patchFlag&16;const U=S.props||at,$=P.props||at;let Y;W&&vi(W,!1),(Y=$.onVnodeBeforeUpdate)&&Sn(Y,W,P,S),_&&xi(P,S,W,"beforeUpdate"),W&&vi(W,!0);const ce=ne&&P.type!=="foreignObject";if(v?te(S.dynamicChildren,v,he,W,J,ce,le):de||fe(S,P,he,null,W,J,ce,le,!1),me>0){if(me&16)G(he,P,U,$,W,J,ne);else if(me&2&&U.class!==$.class&&r(he,"class",null,$.class,ne),me&4&&r(he,"style",U.style,$.style,ne),me&8){const we=P.dynamicProps;for(let L=0;L<we.length;L++){const F=we[L],ye=U[F],Se=$[F];(Se!==ye||F==="value")&&r(he,F,ye,Se,ne,S.children,W,J,K)}}me&1&&S.children!==P.children&&u(he,P.children)}else!de&&v==null&&G(he,P,U,$,W,J,ne);((Y=$.onVnodeUpdated)||_)&&Vt(()=>{Y&&Sn(Y,W,P,S),_&&xi(P,S,W,"updated")},J)},te=(S,P,W,J,ne,le,de)=>{for(let he=0;he<P.length;he++){const me=S[he],v=P[he],_=me.el&&(me.type===rt||!Ti(me,v)||me.shapeFlag&70)?d(me.el):W;h(me,v,_,null,J,ne,le,de,!0)}},G=(S,P,W,J,ne,le,de)=>{if(W!==J){for(const he in J){if(Kr(he))continue;const me=J[he],v=W[he];me!==v&&he!=="value"&&r(S,he,v,me,de,P.children,ne,le,K)}if(W!==at)for(const he in W)!Kr(he)&&!(he in J)&&r(S,he,W[he],null,de,P.children,ne,le,K);"value"in J&&r(S,"value",W.value,J.value)}},k=(S,P,W,J,ne,le,de,he,me)=>{const v=P.el=S?S.el:o(""),_=P.anchor=S?S.anchor:o("");let{patchFlag:U,dynamicChildren:$,slotScopeIds:Y}=P;Y&&(he=he?he.concat(Y):Y),S==null?(i(v,W,J),i(_,W,J),C(P.children,W,_,ne,le,de,he,me)):U>0&&U&64&&$&&S.dynamicChildren?(te(S.dynamicChildren,$,W,ne,le,de,he),(P.key!=null||ne&&P===ne.subTree)&&gf(S,P,!0)):fe(S,P,W,_,ne,le,de,he,me)},B=(S,P,W,J,ne,le,de,he,me)=>{P.slotScopeIds=he,S==null?P.shapeFlag&512?ne.ctx.activate(P,W,J,de,me):Z(P,W,J,ne,le,de,me):ie(S,P,me)},Z=(S,P,W,J,ne,le,de)=>{const he=S.component=pm(S,J,ne);if(Eo(S)&&(he.ctx.renderer=pe),gm(he),he.asyncDep){if(ne&&ne.registerDep(he,re),!S.el){const me=he.subTree=_e(yn);E(null,me,P,W)}return}re(he,S,P,W,ne,le,de)},ie=(S,P,W)=>{const J=P.component=S.component;if(Ap(S,P,W))if(J.asyncDep&&!J.asyncResolved){X(J,P,W);return}else J.next=P,bp(J.update),J.update();else P.component=S.component,P.el=S.el,J.vnode=P},re=(S,P,W,J,ne,le,de)=>{const he=()=>{if(S.isMounted){let{next:_,bu:U,u:$,parent:Y,vnode:ce}=S,we=_,L;vi(S,!1),_?(_.el=ce.el,X(S,_,de)):_=ce,U&&Jr(U),(L=_.props&&_.props.onVnodeBeforeUpdate)&&Sn(L,Y,_,ce),vi(S,!0);const F=Vo(S),ye=S.subTree;S.subTree=F,h(ye,F,d(ye.el),oe(ye),S,ne,le),_.el=F.el,we===null&&Tp(S,F.el),$&&Vt($,ne),(L=_.props&&_.props.onVnodeUpdated)&&Vt(()=>Sn(L,Y,_,ce),ne)}else{let _;const{el:U,props:$}=P,{bm:Y,m:ce,parent:we}=S,L=ka(P);if(vi(S,!1),Y&&Jr(Y),!L&&(_=$&&$.onVnodeBeforeMount)&&Sn(_,we,P),vi(S,!0),U&&ve){const F=()=>{S.subTree=Vo(S),ve(U,S.subTree,S,ne,null)};L?P.type.__asyncLoader().then(()=>!S.isUnmounted&&F()):F()}else{const F=S.subTree=Vo(S);h(null,F,W,J,S,ne,le),P.el=F.el}if(ce&&Vt(ce,ne),!L&&(_=$&&$.onVnodeMounted)){const F=P;Vt(()=>Sn(_,we,F),ne)}P.shapeFlag&256&&S.a&&Vt(S.a,ne),S.isMounted=!0,P=W=J=null}},me=S.effect=new _l(he,()=>Wd(S.update),S.scope),v=S.update=me.run.bind(me);v.id=S.uid,vi(S,!0),v()},X=(S,P,W)=>{P.component=S;const J=S.vnode.props;S.vnode=P,S.next=null,Yp(S,P.props,J,W),Jp(S,P.children,W),Rs(),Sl(void 0,S.update),Is()},fe=(S,P,W,J,ne,le,de,he,me=!1)=>{const v=S&&S.children,_=S?S.shapeFlag:0,U=P.children,{patchFlag:$,shapeFlag:Y}=P;if($>0){if($&128){Le(v,U,W,J,ne,le,de,he,me);return}else if($&256){ue(v,U,W,J,ne,le,de,he,me);return}}Y&8?(_&16&&K(v,ne,le),U!==v&&u(W,U)):_&16?Y&16?Le(v,U,W,J,ne,le,de,he,me):K(v,ne,le,!0):(_&8&&u(W,""),Y&16&&C(U,W,J,ne,le,de,he,me))},ue=(S,P,W,J,ne,le,de,he,me)=>{S=S||_s,P=P||_s;const v=S.length,_=P.length,U=Math.min(v,_);let $;for($=0;$<U;$++){const Y=P[$]=me?si(P[$]):Tn(P[$]);h(S[$],Y,W,null,ne,le,de,he,me)}v>_?K(S,ne,le,!0,!1,U):C(P,W,J,ne,le,de,he,me,U)},Le=(S,P,W,J,ne,le,de,he,me)=>{let v=0;const _=P.length;let U=S.length-1,$=_-1;for(;v<=U&&v<=$;){const Y=S[v],ce=P[v]=me?si(P[v]):Tn(P[v]);if(Ti(Y,ce))h(Y,ce,W,null,ne,le,de,he,me);else break;v++}for(;v<=U&&v<=$;){const Y=S[U],ce=P[$]=me?si(P[$]):Tn(P[$]);if(Ti(Y,ce))h(Y,ce,W,null,ne,le,de,he,me);else break;U--,$--}if(v>U){if(v<=$){const Y=$+1,ce=Y<_?P[Y].el:J;for(;v<=$;)h(null,P[v]=me?si(P[v]):Tn(P[v]),W,ce,ne,le,de,he,me),v++}}else if(v>$)for(;v<=U;)ae(S[v],ne,le,!0),v++;else{const Y=v,ce=v,we=new Map;for(v=ce;v<=$;v++){const Ue=P[v]=me?si(P[v]):Tn(P[v]);Ue.key!=null&&we.set(Ue.key,v)}let L,F=0;const ye=$-ce+1;let Se=!1,Ee=0;const Ce=new Array(ye);for(v=0;v<ye;v++)Ce[v]=0;for(v=Y;v<=U;v++){const Ue=S[v];if(F>=ye){ae(Ue,ne,le,!0);continue}let Ne;if(Ue.key!=null)Ne=we.get(Ue.key);else for(L=ce;L<=$;L++)if(Ce[L-ce]===0&&Ti(Ue,P[L])){Ne=L;break}Ne===void 0?ae(Ue,ne,le,!0):(Ce[Ne-ce]=v+1,Ne>=Ee?Ee=Ne:Se=!0,h(Ue,P[Ne],W,null,ne,le,de,he,me),F++)}const De=Se?im(Ce):_s;for(L=De.length-1,v=ye-1;v>=0;v--){const Ue=ce+v,Ne=P[Ue],Qe=Ue+1<_?P[Ue+1].el:J;Ce[v]===0?h(null,Ne,W,Qe,ne,le,de,he,me):Se&&(L<0||v!==De[L]?j(Ne,W,Qe,2):L--)}}},j=(S,P,W,J,ne=null)=>{const{el:le,type:de,transition:he,children:me,shapeFlag:v}=S;if(v&6){j(S.component.subTree,P,W,J);return}if(v&128){S.suspense.move(P,W,J);return}if(v&64){de.move(S,P,W,pe);return}if(de===rt){i(le,P,W);for(let U=0;U<me.length;U++)j(me[U],P,W,J);i(S.anchor,P,W);return}if(de===to){w(S,P,W);return}if(J!==2&&v&1&&he)if(J===0)he.beforeEnter(le),i(le,P,W),Vt(()=>he.enter(le),ne);else{const{leave:U,delayLeave:$,afterLeave:Y}=he,ce=()=>i(le,P,W),we=()=>{U(le,()=>{ce(),Y&&Y()})};$?$(le,ce,we):we()}else i(le,P,W)},ae=(S,P,W,J=!1,ne=!1)=>{const{type:le,props:de,ref:he,children:me,dynamicChildren:v,shapeFlag:_,patchFlag:U,dirs:$}=S;if(he!=null&&Wa(he,null,W,S,!0),_&256){P.ctx.deactivate(S);return}const Y=_&1&&$,ce=!ka(S);let we;if(ce&&(we=de&&de.onVnodeBeforeUnmount)&&Sn(we,P,S),_&6)I(S.component,W,J);else{if(_&128){S.suspense.unmount(W,J);return}Y&&xi(S,null,P,"beforeUnmount"),_&64?S.type.remove(S,P,W,ne,pe,J):v&&(le!==rt||U>0&&U&64)?K(v,P,W,!1,!0):(le===rt&&U&384||!ne&&_&16)&&K(me,P,W),J&&be(S)}(ce&&(we=de&&de.onVnodeUnmounted)||Y)&&Vt(()=>{we&&Sn(we,P,S),Y&&xi(S,null,P,"unmounted")},W)},be=S=>{const{type:P,el:W,anchor:J,transition:ne}=S;if(P===rt){N(W,J);return}if(P===to){T(S);return}const le=()=>{s(W),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(S.shapeFlag&1&&ne&&!ne.persisted){const{leave:de,delayLeave:he}=ne,me=()=>de(W,le);he?he(S.el,le,me):me()}else le()},N=(S,P)=>{let W;for(;S!==P;)W=f(S),s(S),S=W;s(P)},I=(S,P,W)=>{const{bum:J,scope:ne,update:le,subTree:de,um:he}=S;J&&Jr(J),ne.stop(),le&&(le.active=!1,ae(de,S,P,W)),he&&Vt(he,P),Vt(()=>{S.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},K=(S,P,W,J=!1,ne=!1,le=0)=>{for(let de=le;de<S.length;de++)ae(S[de],P,W,J,ne)},oe=S=>S.shapeFlag&6?oe(S.component.subTree):S.shapeFlag&128?S.suspense.next():f(S.anchor||S.el),xe=(S,P,W)=>{S==null?P._vnode&&ae(P._vnode,null,null,!0):h(P._vnode||null,S,P,null,null,null,W),$d(),P._vnode=S},pe={p:h,um:ae,m:j,r:be,mt:Z,mc:C,pc:fe,pbc:te,n:oe,o:n};let Ae,ve;return e&&([Ae,ve]=e(pe)),{render:xe,hydrate:Ae,createApp:em(xe,Ae)}}function vi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function gf(n,e,t=!1){const i=n.children,s=e.children;if(Oe(i)&&Oe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=si(s[r]),o.el=a.el),t||gf(a,o))}}function im(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const sm=n=>n.__isTeleport,_f="components";function ke(n,e){return om(_f,n,!0,e)||n}const rm=Symbol();function om(n,e,t=!0,i=!1){const s=cn||Et;if(s){const r=s.type;if(n===_f){const o=bm(r);if(o&&(o===e||o===Pn(e)||o===yo(Pn(e))))return r}const a=cc(s[n]||r[n],e)||cc(s.appContext[n],e);return!a&&i?r:a}}function cc(n,e){return n&&(n[e]||n[Pn(e)]||n[yo(Pn(e))])}const rt=Symbol(void 0),Al=Symbol(void 0),yn=Symbol(void 0),to=Symbol(void 0),tr=[];let Fi=null;function Ie(n=!1){tr.push(Fi=n?null:[])}function am(){tr.pop(),Fi=tr[tr.length-1]||null}let fo=1;function uc(n){fo+=n}function xf(n){return n.dynamicChildren=fo>0?Fi||_s:null,am(),fo>0&&Fi&&Fi.push(n),n}function Be(n,e,t,i,s,r){return xf(b(n,e,t,i,s,r,!0))}function qn(n,e,t,i,s){return xf(_e(n,e,t,i,s,!0))}function ja(n){return n?n.__v_isVNode===!0:!1}function Ti(n,e){return n.type===e.type&&n.key===e.key}const To="__vInternal",vf=({key:n})=>n!=null?n:null,no=({ref:n,ref_key:e,ref_for:t})=>n!=null?Lt(n)||Ct(n)||Ve(n)?{i:cn,r:n,k:e,f:!!t}:n:null;function b(n,e=null,t=null,i=0,s=null,r=n===rt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vf(e),ref:e&&no(e),scopeId:Zd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return o?(Ll(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),fo>0&&!a&&Fi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fi.push(l),l}const _e=lm;function lm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===rm)&&(n=yn),ja(n)){const o=zi(n,e,!0);return t&&Ll(o,t),o}if(ym(n)&&(n=n.__vccOpts),e){e=cm(e);let{class:o,style:l}=e;o&&!Lt(o)&&(e.class=dl(o)),xt(l)&&(Nd(l)&&!Oe(l)&&(l=Dt({},l)),e.style=ul(l))}const a=Lt(n)?1:Lp(n)?128:sm(n)?64:xt(n)?4:Ve(n)?2:0;return b(n,e,t,i,s,a,r,!0)}function cm(n){return n?Nd(n)||To in n?Dt({},n):n:null}function zi(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?um(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&vf(o),ref:e&&e.ref?t&&s?Oe(s)?s.concat(no(e)):[s,no(e)]:no(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&zi(n.ssContent),ssFallback:n.ssFallback&&zi(n.ssFallback),el:n.el,anchor:n.anchor}}function je(n=" ",e=0){return _e(Al,null,n,e)}function Tl(n,e){const t=_e(to,null,n);return t.staticCount=e,t}function dn(n="",e=!1){return e?(Ie(),qn(yn,null,n)):_e(yn,null,n)}function Tn(n){return n==null||typeof n=="boolean"?_e(yn):Oe(n)?_e(rt,null,n.slice()):typeof n=="object"?si(n):_e(Al,null,String(n))}function si(n){return n.el===null||n.memo?n:zi(n)}function Ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ll(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(To in e)?e._ctx=cn:s===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[je(e)]):t=8);n.children=e,n.shapeFlag|=t}function um(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=dl([e.class,i.class]));else if(s==="style")e.style=ul([e.style,i.style]);else if(xo(s)){const r=e[s],a=i[s];a&&r!==a&&!(Oe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Sn(n,e,t,i=null){un(n,e,7,[t,i])}function qa(n,e,t,i){let s;const r=t&&t[i];if(Oe(n)||Lt(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];s[o]=e(n[c],c,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const $a=n=>n?bf(n)?Lo(n)||n.proxy:$a(n.parent):null,ho=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$a(n.parent),$root:n=>$a(n.root),$emit:n=>n.emit,$options:n=>cf(n),$forceUpdate:n=>()=>Wd(n.update),$nextTick:n=>Gd.bind(n.proxy),$watch:n=>Dp.bind(n)}),dm={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(i!==at&&Ke(i,e))return a[e]=1,i[e];if(s!==at&&Ke(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&Ke(c,e))return a[e]=3,r[e];if(t!==at&&Ke(t,e))return a[e]=4,t[e];Va&&(a[e]=0)}}const u=ho[e];let d,f;if(u)return e==="$attrs"&&Jt(n,"get",e),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==at&&Ke(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return s!==at&&Ke(s,e)?(s[e]=t,!0):i!==at&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==at&&Ke(n,a)||e!==at&&Ke(e,a)||(o=r[0])&&Ke(o,a)||Ke(i,a)||Ke(ho,a)||Ke(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},fm=mf();let hm=0;function pm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||fm,r={uid:hm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:df(i,s),emitsOptions:Yd(i,s),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=wp.bind(null,r),n.ce&&n.ce(r),r}let Et=null;const mm=()=>Et||cn,ws=n=>{Et=n,n.scope.on()},Ui=()=>{Et&&Et.scope.off(),Et=null};function bf(n){return n.vnode.shapeFlag&4}let lr=!1;function gm(n,e=!1){lr=e;const{props:t,children:i}=n.vnode,s=bf(n);Xp(n,t,s,e),Kp(n,i);const r=s?_m(n,e):void 0;return lr=!1,r}function _m(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Od(new Proxy(n.ctx,dm));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?vm(n):null;ws(n),Rs();const r=li(i,n,0,[n.props,s]);if(Is(),Ui(),yd(r)){if(r.then(Ui,Ui),e)return r.then(a=>{dc(n,a,e)}).catch(a=>{wo(a,n,0)});n.asyncDep=r}else dc(n,r,e)}else yf(n,e)}function dc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Vd(e)),yf(n,t)}let fc;function yf(n,e,t){const i=n.type;if(!n.render){if(!e&&fc&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:r,delimiters:o},a),l);i.render=fc(s,c)}}n.render=i.render||bn}ws(n),Rs(),Gp(n),Is(),Ui()}function xm(n){return new Proxy(n.attrs,{get(e,t){return Jt(n,"get","$attrs"),e[t]}})}function vm(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=xm(n))},slots:n.slots,emit:n.emit,expose:e}}function Lo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Vd(Od(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ho)return ho[t](n)}}))}function bm(n){return Ve(n)&&n.displayName||n.name}function ym(n){return Ve(n)&&"__vccOpts"in n}const Cn=(n,e)=>_p(n,e,lr);function Cl(n,e,t){const i=arguments.length;return i===2?xt(e)&&!Oe(e)?ja(e)?_e(n,null,[e]):_e(n,e):_e(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ja(t)&&(t=[t]),_e(n,e,t))}const Mm="3.2.33",wm="http://www.w3.org/2000/svg",Li=typeof document!="undefined"?document:null,hc=Li&&Li.createElement("template"),Sm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Li.createElementNS(wm,n):Li.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Li.createTextNode(n),createComment:n=>Li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{hc.innerHTML=i?`<svg>${n}</svg>`:n;const o=hc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Em(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Am(n,e,t){const i=n.style,s=Lt(t);if(t&&!s){for(const r in t)Xa(i,r,t[r]);if(e&&!Lt(e))for(const r in e)t[r]==null&&Xa(i,r,"")}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const pc=/\s*!important$/;function Xa(n,e,t){if(Oe(t))t.forEach(i=>Xa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Tm(n,e);pc.test(t)?n.setProperty(Ps(i),t.replace(pc,""),"important"):n[i]=t}}const mc=["Webkit","Moz","ms"],Go={};function Tm(n,e){const t=Go[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return Go[e]=i;i=yo(i);for(let s=0;s<mc.length;s++){const r=mc[s]+i;if(r in n)return Go[e]=r}return e}const gc="http://www.w3.org/1999/xlink";function Lm(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(gc,e.slice(6,e.length)):n.setAttributeNS(gc,e,t);else{const r=Th(e);t==null||r&&!xd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Cm(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=xd(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}const[Mf,Dm]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Ya=0;const Pm=Promise.resolve(),Rm=()=>{Ya=0},Im=()=>Ya||(Pm.then(Rm),Ya=Mf());function hs(n,e,t,i){n.addEventListener(e,t,i)}function Fm(n,e,t,i){n.removeEventListener(e,t,i)}function Um(n,e,t,i,s=null){const r=n._vei||(n._vei={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Nm(e);if(i){const c=r[e]=Om(i,s);hs(n,o,c,l)}else a&&(Fm(n,o,a,l),r[e]=void 0)}}const _c=/(?:Once|Passive|Capture)$/;function Nm(n){let e;if(_c.test(n)){e={};let t;for(;t=n.match(_c);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[Ps(n.slice(2)),e]}function Om(n,e){const t=i=>{const s=i.timeStamp||Mf();(Dm||s>=t.attached-1)&&un(zm(i,t.value),e,5,[i])};return t.value=n,t.attached=Im(),t}function zm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const xc=/^on[a-z]/,Bm=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?Em(n,i,s):e==="style"?Am(n,t,i):xo(e)?fl(e)||Um(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):km(n,e,i,s))?Cm(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Lm(n,e,i,s))};function km(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&xc.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||xc.test(e)&&Lt(t)?!1:e in n}const Yn="transition",Os="animation",Co=(n,{slots:e})=>Cl(Qd,Vm(n),e);Co.displayName="Transition";const wf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Co.props=Dt({},Qd.props,wf);const bi=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},vc=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function Vm(n){const e={};for(const G in n)G in wf||(e[G]=n[G]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=Hm(s),p=g&&g[0],h=g&&g[1],{onBeforeEnter:x,onEnter:E,onEnterCancelled:y,onLeave:w,onLeaveCancelled:T,onBeforeAppear:D=x,onAppear:R=E,onAppearCancelled:M=y}=e,C=(G,k,B)=>{$i(G,k?u:o),$i(G,k?c:a),B&&B()},z=(G,k)=>{$i(G,m),$i(G,f),k&&k()},te=G=>(k,B)=>{const Z=G?R:E,ie=()=>C(k,G,B);bi(Z,[k,ie]),bc(()=>{$i(k,G?l:r),Zn(k,G?u:o),vc(Z)||yc(k,i,p,ie)})};return Dt(e,{onBeforeEnter(G){bi(x,[G]),Zn(G,r),Zn(G,a)},onBeforeAppear(G){bi(D,[G]),Zn(G,l),Zn(G,c)},onEnter:te(!1),onAppear:te(!0),onLeave(G,k){const B=()=>z(G,k);Zn(G,d),jm(),Zn(G,f),bc(()=>{$i(G,d),Zn(G,m),vc(w)||yc(G,i,h,B)}),bi(w,[G,B])},onEnterCancelled(G){C(G,!1),bi(y,[G])},onAppearCancelled(G){C(G,!0),bi(M,[G])},onLeaveCancelled(G){z(G),bi(T,[G])}})}function Hm(n){if(n==null)return null;if(xt(n))return[Wo(n.enter),Wo(n.leave)];{const e=Wo(n);return[e,e]}}function Wo(n){return ao(n)}function Zn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function $i(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function bc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Gm=0;function yc(n,e,t,i){const s=n._endId=++Gm,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Wm(n,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{n.removeEventListener(c,f),r()},f=m=>{m.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),n.addEventListener(c,f)}function Wm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(Yn+"Delay"),r=i(Yn+"Duration"),a=Mc(s,r),o=i(Os+"Delay"),l=i(Os+"Duration"),c=Mc(o,l);let u=null,d=0,f=0;e===Yn?a>0&&(u=Yn,d=a,f=r.length):e===Os?c>0&&(u=Os,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?Yn:Os:null,f=u?u===Yn?r.length:l.length:0);const m=u===Yn&&/\b(transform|all)(,|$)/.test(t[Yn+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:m}}function Mc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>wc(t)+wc(n[i])))}function wc(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function jm(){return document.body.offsetHeight}const Sc=n=>{const e=n.props["onUpdate:modelValue"];return Oe(e)?t=>Jr(e,t):e};function qm(n){n.target.composing=!0}function Ec(n){const e=n.target;e.composing&&(e.composing=!1,$m(e,"input"))}function $m(n,e){const t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),n.dispatchEvent(t)}const ft={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n._assign=Sc(s);const r=i||s.props&&s.props.type==="number";hs(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t?o=o.trim():r&&(o=ao(o)),n._assign(o)}),t&&hs(n,"change",()=>{n.value=n.value.trim()}),e||(hs(n,"compositionstart",qm),hs(n,"compositionend",Ec),hs(n,"change",Ec))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:s}},r){if(n._assign=Sc(r),n.composing||document.activeElement===n&&(t||i&&n.value.trim()===e||(s||n.type==="number")&&ao(n.value)===e))return;const a=e==null?"":e;n.value!==a&&(n.value=a)}},Xm=["ctrl","shift","alt","meta"],Ym={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Xm.some(t=>n[`${t}Key`]&&!e.includes(t))},wn=(n,e)=>(t,...i)=>{for(let s=0;s<e.length;s++){const r=Ym[e[s]];if(r&&r(t,e))return}return n(t,...i)},Zm=Dt({patchProp:Bm},Sm);let Ac;function Km(){return Ac||(Ac=tm(Zm))}const Jm=(...n)=>{const e=Km().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Qm(i);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Qm(n){return Lt(n)?document.querySelector(n):n}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Sf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Fs=n=>Sf?Symbol(n):"_vr_"+n,eg=Fs("rvlm"),Tc=Fs("rvd"),Dl=Fs("r"),Ef=Fs("rl"),Za=Fs("rvl"),ps=typeof window!="undefined";function tg(n){return n.__esModule||Sf&&n[Symbol.toStringTag]==="Module"}const ot=Object.assign;function jo(n,e){const t={};for(const i in e){const s=e[i];t[i]=Array.isArray(s)?s.map(n):n(s)}return t}const nr=()=>{},ng=/\/$/,ig=n=>n.replace(ng,"");function qo(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("?"),l=e.indexOf("#",o>-1?o:0);return o>-1&&(i=e.slice(0,o),r=e.slice(o+1,l>-1?l:e.length),s=n(r)),l>-1&&(i=i||e.slice(0,l),a=e.slice(l,e.length)),i=ag(i!=null?i:e,t),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:a}}function sg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function rg(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ss(e.matched[i],t.matched[s])&&Af(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ss(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Af(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!og(n[t],e[t]))return!1;return!0}function og(n,e){return Array.isArray(n)?Cc(n,e):Array.isArray(e)?Cc(e,n):n===e}function Cc(n,e){return Array.isArray(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ag(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let s=t.length-1,r,a;for(r=0;r<i.length;r++)if(a=i[r],!(s===1||a==="."))if(a==="..")s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var cr;(function(n){n.pop="pop",n.push="push"})(cr||(cr={}));var ir;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ir||(ir={}));function lg(n){if(!n)if(ps){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ig(n)}const cg=/^[^#]+#/;function ug(n,e){return n.replace(cg,"#")+e}function dg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Do=()=>({left:window.pageXOffset,top:window.pageYOffset});function fg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=dg(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Dc(n,e){return(history.state?history.state.position-e:-1)+n}const Ka=new Map;function hg(n,e){Ka.set(n,e)}function pg(n){const e=Ka.get(n);return Ka.delete(n),e}let mg=()=>location.protocol+"//"+location.host;function Tf(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Lc(l,"")}return Lc(t,n)+i+s}function gg(n,e,t,i){let s=[],r=[],a=null;const o=({state:f})=>{const m=Tf(n,location),g=t.value,p=e.value;let h=0;if(f){if(t.value=m,e.value=f,a&&a===g){a=null;return}h=p?f.position-p.position:0}else i(m);s.forEach(x=>{x(t.value,g,{delta:h,type:cr.pop,direction:h?h>0?ir.forward:ir.back:ir.unknown})})};function l(){a=t.value}function c(f){s.push(f);const m=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(m),m}function u(){const{history:f}=window;!f.state||f.replaceState(ot({},f.state,{scroll:Do()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Pc(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Do():null}}function _g(n){const{history:e,location:t}=window,i={value:Tf(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:mg()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(m){console.error(m),t[u?"replace":"assign"](f)}}function a(l,c){const u=ot({},e.state,Pc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function o(l,c){const u=ot({},s.value,e.state,{forward:l,scroll:Do()});r(u.current,u,!0);const d=ot({},Pc(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function xg(n){n=lg(n);const e=_g(n),t=gg(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=ot({location:"",base:n,go:i,createHref:ug.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vg(n){return typeof n=="string"||n&&typeof n=="object"}function Lf(n){return typeof n=="string"||typeof n=="symbol"}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cf=Fs("nf");var Rc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Rc||(Rc={}));function Es(n,e){return ot(new Error,{type:n,[Cf]:!0},e)}function Jn(n,e){return n instanceof Error&&Cf in n&&(e==null||!!(n.type&e))}const Ic="[^/]+?",bg={sensitive:!1,strict:!1,start:!0,end:!0},yg=/[.+*?^${}()[\]/\\]/g;function Mg(n,e){const t=ot({},bg,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(t.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(yg,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:p,optional:h,regexp:x}=f;r.push({name:g,repeatable:p,optional:h});const E=x||Ic;if(E!==Ic){m+=10;try{new RegExp(`(${E})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+w.message)}}let y=p?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(y=h&&c.length<2?`(?:/${y})`:"/"+y),h&&(y+="?"),s+=y,m+=20,h&&(m+=-8),p&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",g=r[f-1];d[g.name]=m&&g.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:p,optional:h}=m,x=g in c?c[g]:"";if(Array.isArray(x)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(x)?x.join("/"):x;if(!E)if(h)f.length<2&&n.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u}return{re:a,score:i,keys:r,parse:o,stringify:l}}function wg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Sg(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=wg(i[t],s[t]);if(r)return r;t++}return s.length-i.length}const Eg={type:0,value:""},Ag=/[a-zA-Z0-9_]/;function Tg(n){if(!n)return[[]];if(n==="/")return[[Eg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function d(){!c||(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),a()):l===":"?(d(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:Ag.test(l)?f():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),a(),s}function Lg(n,e,t){const i=Mg(Tg(n.path),t),s=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Cg(n,e){const t=[],i=new Map;e=Uc({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,d,f){const m=!f,g=Pg(u);g.aliasOf=f&&f.record;const p=Uc(e,u),h=[g];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of y)h.push(ot({},g,{components:f?f.record.components:g.components,path:w,aliasOf:f?f.record:g}))}let x,E;for(const y of h){const{path:w}=y;if(d&&w[0]!=="/"){const T=d.record.path,D=T[T.length-1]==="/"?"":"/";y.path=d.record.path+(w&&D+w)}if(x=Lg(y,d,p),f?f.alias.push(x):(E=E||x,E!==x&&E.alias.push(x),m&&u.name&&!Fc(x)&&a(u.name)),"children"in g){const T=g.children;for(let D=0;D<T.length;D++)r(T[D],x,f&&f.children[D])}f=f||x,l(x)}return E?()=>{a(E)}:nr}function a(u){if(Lf(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let d=0;for(;d<t.length&&Sg(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Df(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!Fc(u)&&i.set(u.record.name,u)}function c(u,d){let f,m={},g,p;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Es(1,{location:u});p=f.record.name,m=ot(Dg(d.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params),g=f.stringify(m)}else if("path"in u)g=u.path,f=t.find(E=>E.re.test(g)),f&&(m=f.parse(g),p=f.record.name);else{if(f=d.name?i.get(d.name):t.find(E=>E.re.test(d.path)),!f)throw Es(1,{location:u,currentLocation:d});p=f.record.name,m=ot({},d.params,u.params),g=f.stringify(m)}const h=[];let x=f;for(;x;)h.unshift(x.record),x=x.parent;return{name:p,path:g,params:m,matched:h,meta:Ig(h)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:s}}function Dg(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Pg(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Rg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||{}:{default:n.component}}}function Rg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Fc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ig(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function Uc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Df(n,e){return e.children.some(t=>t===n||Df(n,t))}const Pf=/#/g,Fg=/&/g,Ug=/\//g,Ng=/=/g,Og=/\?/g,Rf=/\+/g,zg=/%5B/g,Bg=/%5D/g,If=/%5E/g,kg=/%60/g,Ff=/%7B/g,Vg=/%7C/g,Uf=/%7D/g,Hg=/%20/g;function Pl(n){return encodeURI(""+n).replace(Vg,"|").replace(zg,"[").replace(Bg,"]")}function Gg(n){return Pl(n).replace(Ff,"{").replace(Uf,"}").replace(If,"^")}function Ja(n){return Pl(n).replace(Rf,"%2B").replace(Hg,"+").replace(Pf,"%23").replace(Fg,"%26").replace(kg,"`").replace(Ff,"{").replace(Uf,"}").replace(If,"^")}function Wg(n){return Ja(n).replace(Ng,"%3D")}function jg(n){return Pl(n).replace(Pf,"%23").replace(Og,"%3F")}function qg(n){return n==null?"":jg(n).replace(Ug,"%2F")}function po(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function $g(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Rf," "),a=r.indexOf("="),o=po(a<0?r:r.slice(0,a)),l=a<0?null:po(r.slice(a+1));if(o in e){let c=e[o];Array.isArray(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Nc(n){let e="";for(let t in n){const i=n[t];if(t=Wg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(i)?i.map(r=>r&&Ja(r)):[i&&Ja(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Xg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function zs(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function ri(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,o)=>{const l=d=>{d===!1?o(Es(4,{from:t,to:e})):d instanceof Error?o(d):vg(d)?o(Es(2,{from:e,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),a())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>o(d))})}function $o(n,e,t,i){const s=[];for(const r of n)for(const a in r.components){let o=r.components[a];if(!(e!=="beforeRouteEnter"&&!r.instances[a]))if(Yg(o)){const c=(o.__vccOpts||o)[e];c&&s.push(ri(c,t,i,r,a))}else{let l=o();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const u=tg(c)?c.default:c;r.components[a]=u;const f=(u.__vccOpts||u)[e];return f&&ri(f,t,i,r,a)()}))}}return s}function Yg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Oc(n){const e=ci(Dl),t=ci(Ef),i=Cn(()=>e.resolve(Js(n.to))),s=Cn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ss.bind(null,u));if(f>-1)return f;const m=zc(l[c-2]);return c>1&&zc(u)===m&&d[d.length-1].path!==m?d.findIndex(Ss.bind(null,l[c-2])):f}),r=Cn(()=>s.value>-1&&Jg(t.params,i.value.params)),a=Cn(()=>s.value>-1&&s.value===t.matched.length-1&&Af(t.params,i.value.params));function o(l={}){return Kg(l)?e[Js(n.replace)?"replace":"push"](Js(n.to)).catch(nr):Promise.resolve()}return{route:i,href:Cn(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}const Zg=nf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oc,setup(n,{slots:e}){const t=mr(Oc(n)),{options:i}=ci(Dl),s=Cn(()=>({[Bc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Bc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Cl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Rl=Zg;function Kg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Jg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function zc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Bc=(n,e,t)=>n!=null?n:e!=null?e:t,Qg=nf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ci(Za),s=Cn(()=>n.route||i.value),r=ci(Tc,0),a=Cn(()=>s.value.matched[r]);Qr(Tc,r+1),Qr(eg,a),Qr(Za,s);const o=fp();return eo(()=>[o.value,a.value,n.name],([l,c,u],[d,f,m])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Ss(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=s.value,c=a.value,u=c&&c.components[n.name],d=n.name;if(!u)return kc(t.default,{Component:u,route:l});const f=c.props[n.name],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,p=Cl(u,ot({},m,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(c.instances[d]=null)},ref:o}));return kc(t.default,{Component:p,route:l})||p}}});function kc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const e_=Qg;function t_(n){const e=Cg(n.routes,n),t=n.parseQuery||$g,i=n.stringifyQuery||Nc,s=n.history,r=zs(),a=zs(),o=zs(),l=hp(Kn);let c=Kn;ps&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jo.bind(null,N=>""+N),d=jo.bind(null,qg),f=jo.bind(null,po);function m(N,I){let K,oe;return Lf(N)?(K=e.getRecordMatcher(N),oe=I):oe=N,e.addRoute(oe,K)}function g(N){const I=e.getRecordMatcher(N);I&&e.removeRoute(I)}function p(){return e.getRoutes().map(N=>N.record)}function h(N){return!!e.getRecordMatcher(N)}function x(N,I){if(I=ot({},I||l.value),typeof N=="string"){const ve=qo(t,N,I.path),S=e.resolve({path:ve.path},I),P=s.createHref(ve.fullPath);return ot(ve,S,{params:f(S.params),hash:po(ve.hash),redirectedFrom:void 0,href:P})}let K;if("path"in N)K=ot({},N,{path:qo(t,N.path,I.path).path});else{const ve=ot({},N.params);for(const S in ve)ve[S]==null&&delete ve[S];K=ot({},N,{params:d(N.params)}),I.params=d(I.params)}const oe=e.resolve(K,I),xe=N.hash||"";oe.params=u(f(oe.params));const pe=sg(i,ot({},N,{hash:Gg(xe),path:oe.path})),Ae=s.createHref(pe);return ot({fullPath:pe,hash:xe,query:i===Nc?Xg(N.query):N.query||{}},oe,{redirectedFrom:void 0,href:Ae})}function E(N){return typeof N=="string"?qo(t,N,l.value.path):ot({},N)}function y(N,I){if(c!==N)return Es(8,{from:I,to:N})}function w(N){return R(N)}function T(N){return w(ot(E(N),{replace:!0}))}function D(N){const I=N.matched[N.matched.length-1];if(I&&I.redirect){const{redirect:K}=I;let oe=typeof K=="function"?K(N):K;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=E(oe):{path:oe},oe.params={}),ot({query:N.query,hash:N.hash,params:N.params},oe)}}function R(N,I){const K=c=x(N),oe=l.value,xe=N.state,pe=N.force,Ae=N.replace===!0,ve=D(K);if(ve)return R(ot(E(ve),{state:xe,force:pe,replace:Ae}),I||K);const S=K;S.redirectedFrom=I;let P;return!pe&&rg(i,oe,K)&&(P=Es(16,{to:S,from:oe}),ue(oe,oe,!0,!1)),(P?Promise.resolve(P):C(S,oe)).catch(W=>Jn(W)?Jn(W,2)?W:fe(W):re(W,S,oe)).then(W=>{if(W){if(Jn(W,2))return R(ot(E(W.to),{state:xe,force:pe,replace:Ae}),I||S)}else W=te(S,oe,!0,Ae,xe);return z(S,oe,W),W})}function M(N,I){const K=y(N,I);return K?Promise.reject(K):Promise.resolve()}function C(N,I){let K;const[oe,xe,pe]=n_(N,I);K=$o(oe.reverse(),"beforeRouteLeave",N,I);for(const ve of oe)ve.leaveGuards.forEach(S=>{K.push(ri(S,N,I))});const Ae=M.bind(null,N,I);return K.push(Ae),Xi(K).then(()=>{K=[];for(const ve of r.list())K.push(ri(ve,N,I));return K.push(Ae),Xi(K)}).then(()=>{K=$o(xe,"beforeRouteUpdate",N,I);for(const ve of xe)ve.updateGuards.forEach(S=>{K.push(ri(S,N,I))});return K.push(Ae),Xi(K)}).then(()=>{K=[];for(const ve of N.matched)if(ve.beforeEnter&&!I.matched.includes(ve))if(Array.isArray(ve.beforeEnter))for(const S of ve.beforeEnter)K.push(ri(S,N,I));else K.push(ri(ve.beforeEnter,N,I));return K.push(Ae),Xi(K)}).then(()=>(N.matched.forEach(ve=>ve.enterCallbacks={}),K=$o(pe,"beforeRouteEnter",N,I),K.push(Ae),Xi(K))).then(()=>{K=[];for(const ve of a.list())K.push(ri(ve,N,I));return K.push(Ae),Xi(K)}).catch(ve=>Jn(ve,8)?ve:Promise.reject(ve))}function z(N,I,K){for(const oe of o.list())oe(N,I,K)}function te(N,I,K,oe,xe){const pe=y(N,I);if(pe)return pe;const Ae=I===Kn,ve=ps?history.state:{};K&&(oe||Ae?s.replace(N.fullPath,ot({scroll:Ae&&ve&&ve.scroll},xe)):s.push(N.fullPath,xe)),l.value=N,ue(N,I,K,Ae),fe()}let G;function k(){G||(G=s.listen((N,I,K)=>{const oe=x(N),xe=D(oe);if(xe){R(ot(xe,{replace:!0}),oe).catch(nr);return}c=oe;const pe=l.value;ps&&hg(Dc(pe.fullPath,K.delta),Do()),C(oe,pe).catch(Ae=>Jn(Ae,12)?Ae:Jn(Ae,2)?(R(Ae.to,oe).then(ve=>{Jn(ve,20)&&!K.delta&&K.type===cr.pop&&s.go(-1,!1)}).catch(nr),Promise.reject()):(K.delta&&s.go(-K.delta,!1),re(Ae,oe,pe))).then(Ae=>{Ae=Ae||te(oe,pe,!1),Ae&&(K.delta?s.go(-K.delta,!1):K.type===cr.pop&&Jn(Ae,20)&&s.go(-1,!1)),z(oe,pe,Ae)}).catch(nr)}))}let B=zs(),Z=zs(),ie;function re(N,I,K){fe(N);const oe=Z.list();return oe.length?oe.forEach(xe=>xe(N,I,K)):console.error(N),Promise.reject(N)}function X(){return ie&&l.value!==Kn?Promise.resolve():new Promise((N,I)=>{B.add([N,I])})}function fe(N){return ie||(ie=!N,k(),B.list().forEach(([I,K])=>N?K(N):I()),B.reset()),N}function ue(N,I,K,oe){const{scrollBehavior:xe}=n;if(!ps||!xe)return Promise.resolve();const pe=!K&&pg(Dc(N.fullPath,0))||(oe||!K)&&history.state&&history.state.scroll||null;return Gd().then(()=>xe(N,I,pe)).then(Ae=>Ae&&fg(Ae)).catch(Ae=>re(Ae,N,I))}const Le=N=>s.go(N);let j;const ae=new Set;return{currentRoute:l,addRoute:m,removeRoute:g,hasRoute:h,getRoutes:p,resolve:x,options:n,push:w,replace:T,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:Z.add,isReady:X,install(N){const I=this;N.component("RouterLink",Rl),N.component("RouterView",e_),N.config.globalProperties.$router=I,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Js(l)}),ps&&!j&&l.value===Kn&&(j=!0,w(s.location).catch(xe=>{}));const K={};for(const xe in Kn)K[xe]=Cn(()=>l.value[xe]);N.provide(Dl,I),N.provide(Ef,mr(K)),N.provide(Za,l);const oe=N.unmount;ae.add(N),N.unmount=function(){ae.delete(N),ae.size<1&&(c=Kn,G&&G(),G=null,l.value=Kn,j=!1,ie=!1),oe()}}}}function Xi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function n_(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>Ss(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Ss(c,l))||s.push(l))}return[t,i,s]}var nt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t};const i_={},s_={id:"Calque_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 66.39 68.2"},r_=Tl('<defs>.cls-1,.cls-2{isolation:isolate;}.cls-2{font-family:ArialMT, Arial;font-size:45.78px;}</defs><image class="cls-1" width="330" height="339" transform="scale(.2)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAAFUCAYAAACtNx7QAAAACXBIWXMAADcOAAA3DgECDDKTAAAgAElEQVR4Xu3dd5xeZZ3+8c930kMIBKQECEWQIgKCqAioKBZ+KkWRuqsu1YoFEF1QUURUYFkVlEV0VVR2aYJlBRXEBValSBHpVSAQagjpyWS+vz++Z2CIM889mXmec+5znuv9es1rksw1WXWTK/c5dzN3R6RdzMyAwT56gGnAmsCqxcdKwOTi89Tix1OACcWPxwPL/wE1YD7QCzwHLAHmAc8CC4qvzS9+/gzwZJHzQT5w/QWQYTL9WZF2MbOJRBmuDawDbACsQZTkagN+PK74GAOMLT7GFB/jiGIdQxTj8owoSi8+9xWflwDLio9eYCmwGJgNPEGU57PAo8DDwOPALOAxd1+GSILKUlaYma0OvALYGFiXKMYZwHrEKHE8MBGYRIwSxxIFWKU+XijQBcXnJcBc4CHgEaJIHwLuBW5z93mD/1bSjVSWMiQz6yHKcDtgK2AzYAvgJUQZThjwUXUZjlb/6HQxsIh4tH8c+BtwZ/H5BnefM+TvII2mspTnmdlqwLbEqHG74sdrESPFCcXnMUP+Bs3Uywuj0PnECPQG4Jbi43Z3nz/0t0tTqCy7mJlNJQrxzcBrih9P5sXvFOUf9b8TXQY8BfwV+D/gauAmd1/U4nulplSWXcDMzN3dzMYD2wBvA3YAXkXMSvcX42ATKpI2cLLpMeBGojx/B9wBLNOse/2pLBuqeN8IMfv8BuCdxAhyBirGTnt+aRJwKzHivIh4fF8E9Ll73xDfK5lSWTaImfUvxZlBjB7fCOwKrN7q+6Q0M4FLgGuAK4iZ+CUqznpQWdZcsQh8CrG+cVfg3cRIcnKr75PKPQP8HPgl8cg+F1ikx/V8qSxrysz6C3J7oiD3QAVZV7OAC4hR5x3A0+6+pPW3SNlUljViZuOId5BbEgX5XmB6y2+SurkH+DHwa+ABYI52GOVBZVkDxRKf6cQkzduAt7f+DmmAucDvgZ8B1wP3abRZLZVlxsxsTeDlwN7AAWiipls9AJwLXEbsJJqjd5vlU1lmppjR3hB4E7A78FZij7XIc8Sk0KXEpNDDKs3yqCwzYWaTiL3XbwHeR2w5rPt+a+mcy4ELgT+4+12psIyeyrJiZjYZeC0xm70XMaoUGa4/Ab8BfunuN6bCMnIqy4oUI8mdiPeRexDHnImMhBMnI52HSrNjVJYlKw7IfSuwD/Fecr3W3yEybH3A3cAvgAvd/fpEXlaAyrIkxRrJNwH7A7uh9ZHSOX3EAcYXAOe6++2JvAyDyrLDiu2IOwHvJ0pyRuvvEGmbXuAuYgb9B+5+byIvLagsO8jMNgQOJ0aTG7UMi3ROL3Ab8CPgHHd/OpGXQagsO6CYvPkEUZJboSVAkod5xKL2s4Dz3X1BIi8DqCzbzMz2Ao4iDriYmIiLVGEe8AfgeM2cD5/Ksk3MbDvg08QBu2uADteV7D1J7D3/grs/kQp3O5XlKJnZWKIkPwisj0pS6qWXOCLus8Sj+dJEvmupLEfBzHYFTgBeTdxjI1JXC4H/BT6p7ZODU1mOgJmtDRwPHAhMTcRF6sKJE9z/zd2/mgp3G5XlCjKz3YGTgc1TWZGa6gWuBQ7RKPMFWtIyTGY23czOIBb4qiilycYSGymuNbOjU+FuoZFlQrEDZzfgW8AmibhI0ywj3mV+3N1vS4WbTGU5hKIk1yJmub/YOi3SeE8CRwAXuXtvKtxEKstBmFkPsaj834EdE3GRbrGUOHD4aHd/NBVuGpXlcsxsZWA/4DRg5URcpBvdSYwyr/QuunlSZTmAmW0EfAw4MpUV6XJPAV8HvtMte8xVlgUz254YTb4+lZURWwIsBhYVn5cWv7Z0wI97i48lxcfyf0CNuMBtDDFrO6H4PJ7YGDCu+PEEYm9+/9elM84ltkvelwrWncoSMLP3AacQEzoyOkuIWwifJRY4zy9+/CAxSTAbmFP82nzifuyBnxcCvT6MP5jFVtNViPKcCqxUfKwMrDrgYx3iRPqpwGRgteLXVyFKV0bnL8BniMvTGvtY3tVlaWarAh8BvozWnI7EHOAx4Onix/cRpfgo8DDwd+Bpd1841G9QJjNbiTjkZEOiPNci1sxOB14CTCt+ffIQv4UM7UHgK8TJ7I18LO/asjSzzYBjiS2LekxL6yWK8SHiL8bdxNUFDwCPAI/VdUlJcS/SdGBdojw3IK4inlF8rDn0d8sAC4FvA19192dS4brpyrI0s9cQ7ydfh0aUQ+kjSvB+YvbzFmLkeC8w092XtPje2jOzCcDLgI2J+9y3Lj5vSIxCZWg/Jw7keDAVrJOuK0sz24Moyo1T2S60CLgduB64ibi/5QHgYXfva/WNTVeU5ybESHNLYh3udsR1ITpx6h9dBXwSuHk475/roKvK0swOJd6r6LHqBfOAa4g7Wq4iyvGupo8cR6tYj7sp8bi+LS+U56RW39dl7gSOAS6t6yuagbqiLIs7cY4l7sXRQvN4t/Rn4ArgBuAOYvTY/D8MHVCMOtcj3nfuCOxClOf4Ft/WLR4jJlDPrnthNr4szWwVYjR5KLHmrlv13/B3GXAl8a/+I01e6lGFAcX5cuDtxDUjm0NXn6A/nzgk+5Q6/4Pc6LI0sxnAScQti9064/048EvgEl4oyMWtv0XawcymEms8twH2Bfake9d1LgK+6e6fTQVz1diyNLNNgFOJP6DdppeYoDkX+D1wv7vPa/0t0klmtibwUuLP477Fj7vNUuDH7n5IKpijRpalmb0SOB3YOZVtmAXAr4AfEO8in9NETV6K9+frEsvWPgLs0Po7GqcPuAjYv24rLBpXlma2FXA28NpUtkHmAmcB5wF3ahSZv+IYwNWJR/QjgLfRPffMLwN+7e57pII5aVRZmtkrgB8Dr0xlG2I2MYL+AfCoRpH1U5TmRGIS6FPAe+mO0lwG/BrY190XpcI5aExZmtk2wH8BW6SyDfAEMZL8DvBU3ZdkCJiZEbvJNieOCNyf5u9R7wN+QxRm9k9DjShLM9sBuIBYstFkc4DvAl8D5mjZT3OZ2RbAZ4H3AFMS8bq7BniPuz+ZClap9mVpZpsSS2M2TWVryomzH39MrBft+q2H3cTMtibWKL6VZo80LwH2y/lVUm3Lsnhs2RI4n2Y+ejvxmPJL4Djgjjov6JXRMbNdiDXDr6S5Wyr/B9jHMznSb3l1LsuNgZ8Rp8E0Tf8l918FfuvuSxN56RJmdhgxe745zTzA43zgg+7+bCpYtlqWZbEz59fEIQZN0kccmvsN4Ht1eOkt5Su2VJ5MzJyvk4jX0bnAwbntNKtdWRY7If6L2HPbJHOJcwC/5O73psIixcTm14hH81US8br5DnBkToVZq7I0synEgvP9U9ka6X/kPtHdL0uFRQYq3t1/CPg0sFEiXjfHAV/LZUKzNmVpZmOIx9OPpbI1Mgs4B/i2uz+UCosMpijMzYgJoDcRl7E1wVLgaOCMHAqzTmV5EnGDXBOugVgMXE0cWfXbVFhkOCzuEvpn4u/JJol4XcwlJrTOqXo1SC3K0swOAc6gGdvA5gFnAqe5+6xUWGRFmdnLibWZe9KMowlnEhM+lQ4ssi9LM3sHMTtW9xfYy4CbgVPd/b9TYZHRMLNpxLvMDwHrJ+J1cAtxUtGdqWCnZF2WxX7vC6n/I0UvUfgnu/ttqbBIOxSHdLwJ+CLNOK7wt8BB7v5oKtgJ2ZalmU0nFp3X/by/xcRM5Q+0blKqYGbrEDPLB1H/3T/fA4529zmpYLtlOVliZmOBbwKvTmUzdwtwoLufrqKUqhQjsX8lZpYfTsRzdyjwKYtDlEuV5cjSzE4lZsDqfDveRcQC81tTQZGymNnOxBmodT/zdS/gV17iyVvZjSzN7EDgfdS7KL8OfExFKblx92uAvYFfENtr6+pM4GXFGtNSZDWyNLOdiB06dT5F6KPE+8ksT04RAbC4efIE4DDqe/TbH4E3e0lbIrMZWZrZBsDx1LcoHyYONjhbRSm5c/fniMOFjwaeScRztSPw/bJGl1mUZbHE4UjigNM6ugnYD/iZ6zg1qQl3X+TuZwIHAE+l8pn6J+DDqVA7ZPEYbmYfJE4ZyaK8V9AVwFHufksqKJKr4hXYf1PPq1meA3Zy97+lgqNReVlanAD9fep56fzPiDVfD6SCIrkzs5cS//hvmIjm6E537+grvEpHcsXC849Rz6L8HvBhFaU0hbvfT7wHvDaVzdDLzOz0VGg0Ki1L4APEMoa6+XfgCHd/IhUUqRN3f4w4WPvPqWxmxgAfMLM9U8GRquwx3Mz2IhZuV13YK8KJMzU/5+4LUmGRuiqWFv0c2CURzc0sYAvvwB0+lRRVcYTU56jo//4onObuR6oopemKpUW7E4dX1MlaxKVnbVd6WVlcDXEQ8KpUNiOLgZPc/ehUUKQpPM4z2Ie4HLAuDNjBzD6eCq6o0h/Di/Mp/yeVy8gy4tqHT6SCIk1kZqsBPwH+XyqbkbuBN3obD9gudWRpZhsBX0jlMtILfF9FKd3M3Z8BDgduSGUzsinwH6nQiiitLM1sJeAQ4LWpbCaWEv+afjQVFGk6d3+EeCSv07KiN5rZh1Kh4SrtMbw4GurqVC4Ty4iZwAPcfUkqLNItzGwz4Dxgm1Q2E38F9nH3u1PBlFJGlma2JnFsWR0sI3YxHKKiFHkxd78LOBi4L5XNxNbAsanQcHS8LM1sPLA/sTMgdw7cBny0E+u0RJrA3W8EPg5UchfOCOxmZvulQikdfww3s7WBO6jHxe8ziUfvurwuEKmMmR1EXP+yciqbgcuI2yFHfHdPR0eWZjaOOKOyDkW5DDhURSkybOcQr9d6U8EMvJk4zm3EOlqWxMx322ajOuxId78sFRKR4HH/zTeIU8NyNx44yMy2SgWH0rGyLE4vPjmVy8Q33f1bqZCIvJi7zyeup6jDQGN74NCRnqzesbIEDgRelwpl4BriVYGIjIDHVbtfICZHc7cPI7yRoSNlWcyAn5LKZeBB4PDRvPQVEXD364Evkv8M+XRgv+JUpRXSkbIETiT+Q+XuI8BdqZCIpLn7hcQVtfNT2YodzAj2ube9LM1sDeJQ39wdDlzu7nW+O1kkK+5+InB5KpeBA8xs3VRooLaXJXAMsHoqVLEfAue5bmIU6YT3k//7yz1YwTmVtpalmb2E+B9qTCpboYeBfysONxWRNiv+bh0HPJnKVsiAfzGzGalgv7aWJfG+IvdR5ZHe4SszRbqdu/8cuADI+XyFdwI7pEL92laWZvYqYGfyHlWeQL0OHhapLXf/KHBnKlexz5vZpqkQtLEsgSPIe1R5DfATd1+YCopI2+xP3o/jWwG7mNnYVLAtZVlsIXorMC6Vrchi4Mvufk8qKCLt4+53EPvHc34c/yCQnBlvS1kCpwLrpEIV+ry71+2WOpFGcPd/A3KeJ9iOYRxmPOqyNLPtgM1SuQr9L3HquYhU573AvFSoQl82s5YDvlGXJbFUKNfdOouAs9txpLyIjJy7PwCclspVaGtgWzMbshNHVZZmthawK3H8UY5+CFyUColIKU4irqjN1ceAIfeMj6osiaPlhzXtXoE7gHPcfVEqKCKd5+6LicmUXO0GbDDUF0dclsWpHW8mz1FlH/A9d/9TKigipboa+FEqVKFjzGzSYF8YcVkSJ6BvnQpV5HLizm8RyUhxuvqXgLmpbEUOBNYf7AsjKsvivMrXA5NT2QrMIQ7JeCIVFJFKPEIc45irDw22SH1EZUnsqdwuFarIpe7+n6mQiFSjOO3rB+R7UPAHgFWW/8WRluVu5LkIfSbw36mQiFRuNvCZVKgi04Bdlv/FFS7LYmvj9qlcRa4tTjsRkYy5ey/wO+D6VLYin1/+F1a4LIF3kOcj+L3EHlQRqYcngK+mQhXZxsw2HPgLK1SWZrYy8OpUrgK9wGXufl0qKCJ5cHcH/g+4JJWtyKcH/mSFypI4KDPHR/AHgLNSIRHJS7Fq5RupXEX2KAaIwIqX5WtoscK9IsuAP+n0c5HaupM8tyVPB97Q/5Nhl6WZvZTYsZObmehdpUhtufvj5LmKZQzwif6fJE8HHmBX8itLB25199tTQRHJ2rXAxcCe5LW7Z0szm+Lu84ZVlmY2mXgEz82TwPGpkIhk7xHgIGAKcbZDThbA8EeWLwd2TIVKtgy4zt3/kgqKSN6KmfE5xUeWhvvO8hVEYeZkIaBtjSJSimRZmtkE4ga03Dzh7henQiIi7ZAsS2JE+fZUqGSLgWNTIRGRdhlOWW4BbJkKlWyWu5+XComItEvLsjSzicT7ypw48ONUSESknVIjy42B3ROZsi0Dzk+FRETaKVWWG5LfyPJhd781FRIRaachy9LMxpHfciGAE1IBEZF2azWyXI38du0scvcfpkIiIu3WqixnAHu0+HoVNAMuIpVoVZZrkt+d4OemAiIinTBoWZrZVOCtg32tQrOBG1IhEZFOGGpkuRaw7xBfq8plwHOpkIhIJ7Qqy9yuuj2FWGMpIlK6fyjLYslQbtsb5wL3Fcc4iYiUbrCR5STglYP8epXOIg7PEBGpxGBlOZn8jmS7HFiaComIdMpQI8vtBvn1qjwH/N3dcztqXkS6yGBlOZEozFzcAzyVComIdNKLytLMxgKvHSJbld8B81MhEZFOWn5kORl452DBCl3i7gtTIRGRThqsLN8xWLBCj6cCIiKdtnxZTiAKMxcXkPHVmCLSPZ4vSzMbA2zbIluFS9AWRxHJwMCRZY5leb+7a4ujiFRuYFmOJa9tjg8SJw2JiFRuYFlOBF46VLACdwDPpkIiImUYWJZTgPWHClbgVrS+UkQyMbAsJwOrDxWswM2oLEUkEz0AZmbAqols2R7UkWwikov+kaWR17Fsc9GoUkQy0jPg86tbBUt2FTo8Q0QyMrAsX9UqWLI/A0+nQiIiZRn4GL5Nq2DJbnN3nYwuItkYWJY5mZcKiIiUqb8sp7VMlasXWJAKiYiUqb8sN2uZKtcjxGy4iEg2+styk5apcs1Ey4ZEJDP9Zblhq1DJZqHHcBHJTH9ZbtAyVa6nAF0jISJZ6S/L9VqmyjUbWJIKiYiUqb8sV26ZKtdsYGkqJCJSph4zG0ecZZmLOe6ushSRrPQQRZlVWaYCIiJl6wEmkVdZao2liGSnh7j+dnwqWCI9gotIdnIryyWAbnMUkez0AOPIpyyfQQvSRSRD/WU5LhUsyXy0xlJEMtRD3Bc+JhUsyRxgUSokIlK2/rLM5TzLpeidpYhkqId8RpUQo8reVEhEpGwD7w3PwWJUliKSodxGlktQWYpIhvrfWeYkl/enIiLP6wE8FRIR6XY96LFXRCSpB+hLhUo0kfxeC4iIZPcYPp68JpxERID8HsMnoJGliGSoh9gxk8uj+CTy2acuIvK8/pFlLlsMp5LXQcQiIkCU5RLyOelnZeJRXEQkK/0jy1xOJ18VjSxFJEM9xOEVi1PBkoxBs+EikqEeoihzeQwHjSxFJEO5jSwh3luKiGSlB1hYfORiFTPTYRoikpUed19GXmW5KlprKSKZ6T/895mWqXJNI5/bJkVEgBfK8qGWqXKtispSRDLTX5YPtEyVaw1i26OISDb6y/L+lqlyrQtMSYVERMrUX5b3tUyVax1gciokIlKm/rJ8sFWoZNPRWksRyUx/Wc5vmSqfRpYikpX+snTyKsxVUgERkTL1l2UfcH2rYMm2NzM9iotINgaOLG9uFSzZ64DVUiERkbIMHFle2ypYsh2B1VMhEZGyDBxZ3t0qWDIjdvKIiGShB8DdHZibyJZtEzPTTY8ikoWeF37IAmDmUMEKbA2slAqJiJRhYFnOI68DNV6Otj2KSCYGluUS4J6hghV4BXpvKSKZGFiWvcBfhwpWYA3ibEsRkcoNLMtlwI1DBSuyrZnpbEsRqdzzZenufcC9LbJV2AdtfRSRDAwcWULc8vjIYMGKvB6VpYhkYPmyXAD8arBghbYws+X/c4qIlGqwsvyfwYIV2hMd2SYiFXtRWRbvLXNaPgTxKK47eUSkUoM93i4CZg3y61XZEFjHzCwVFBHplMHKcgFwyyC/XpXxwCYM/p9VRKQUgxXQQvIqS4AD0F3iIlKhocoyp4OAAfZGZSkiFfqHsnT3ZeR1tmW/nfXeUkSqMtR7wKeBW4f4WlWOAcakQiIinTBUWT4GnDPE16qyA7BWKiQi0gmDlqW7Lyav2x4h3lnukgqJiHRCq+U4TwOPtvh6FQ5NBUREOqFVWc4kv33iu5jZ1FRIRKTdWpXlHOCmFl+vyudTARGRdhuyLIt94ncRx7bl5OBUQESk3VJbCB8Crk1kyraqme2aComItFPLsnT3+4CLW2UqYMT2RxGR0qRGlgD3pwIlM2AvMxuXCoqItMtwyvIO4KpUqGRT0USPiJQoWZbufg9wZSpXsnHAIamQiEi7JMuycDtxKHBOppnZJ1IhEZF2GG5Z/o381lxOBPbVZWYiUoZhFY273w5ck8qVzIAtgL1SQRGR0RpWWRb+AixJhUo2DfhCKiQiMlorUpaXkd+aS4jLzPZMhURERmPYZenuc4A/pXIVWAP4YCokIjIawy7Lwh+Bv6ZCFdjGzHZLhURERmpFy/IvxUdu1gE+nAqJiIzUCpVlcRLRdeS35hJgBzPTnnER6YgVKsvCheS3jAhgTeBw7RkXkU5Y4bJ096fI81EcYHs02SMiHbDCZVm4BLgzFarAFGBvM1sjFRQRWREjKkt3/zNwYypXkV2Aw1IhEZEVMaKyLPwaeDIVqsh7zGyrVEhEZLhGXJbu/lPgtlSuIq8C/iUVEhEZrhGXZeE8YHYqVJFDzGzvVEhEZDhGW5bfJ9/R5SrAoWa2fiooIpIyqrJ096XApcC8VLYiuwH7pUIiIimjKsvCd4GZqVCFjjCznVMhEZFWRl2WxSL1q4HeVLYiM4D3m9m0VFBEZCjm7qlMkpmtAtwMbJiIVulwdz87FRIRGcyoR5bw/FmXPyHPAzb6fd7MtkuFREQG05ayLJwJPJYKVWgG8Dkzm54Kiogsr21l6e6PEicS5XZPz0DvBg42s0mpoIjIQG15ZzmQmc0kDuPN1VJiSdGV3u7/8iLSWG0bWQ5wHFFIuRoHnAJosbqIDFsnRpaTiPMut0hlK3Y2cJS7z00FRWR4zGwCsBJgqewQjFiGOM/ds1qO2PayBDCzw4jF6rk7CvhWbv9PEakjM5sIHAq8ARgDjKRcxgP3A2e6+12pcJk6UpYAZvZXoA7HpO2K3l+KjJqZHQ98FpiYyibcDRzq7lengmXqxDvLfh9gZP+ylO1nwAapkIgMzczeC3yI0RclwDIy3BHYybK8GfhhKpSBVYCzzWxKKigi/8jMXgkcC6ydytZZx8qyeKz9Mnmvu+z3FuDUVEhEXszM1ga+AmybytZdx8qy8DBwTCqUicPM7DOpkIiE4mLAU4F3pLJN0NGyLGaZfwjcnojmoAf4kpl9OBUU6XbFa6vPAP+UyjZFR8uyMBf4dCqUiQnA18zs7amgSLcys7HEEqFPpbJN0vGydPc+4CrgP1LZTEwFvmNmr0kFRbrUe4j5iI73R05K+S/r7vOAk4G/p7KZ2Aj4tpk1/qW1yHBZeBdwOtB1q0dKKcvCw8DxqVAmjLhO91tmlvu2TZGyvAE4C1gzFWyi0sqymOz5BfC9VDYTBuwMnGFmm6TCIk1mZq8lNnDkfKJYR5VWlgDuPpv4l2lWKpuRNwOnmdlaqaBIE5nZpsRNCKulsk1WalkWbiIWsdbJ7sBZpjvIpcuY2cuAK4Cuf7oqvSzdfRlwAXBeKpuZPYlJH+0jl8YrJnO2BH4HrJfKd4PSyxLA3R8H/h3I6gimYXgX8F0z2ywVFKm5VwBXokNmnldJWQK4+7XUZ+/4QG8DTtekjzRVcTDGH4A1EtGuUllZFs4Hvp0KZeitwLmmq3WlYcxsV+ByunwyZzCVlqW7LyXK8vepbIZeDZxvZjulgiJ1YGb7AL8CVk9lu1GlZQng7vcRJ5c8kspmaGPgEjPby8wq/99SZKTM7Cji0Jt2HN7bSFn8BXf3S4kJn0WpbIZeAlwE7G9m41NhkZyY2VgzOwE4AZicynezLMoSwN1PA85J5TLVA/wUONbM9AgjtWBmqxGLzT+LijIpm7IsHAdclgpl7HjgFDPb0MxGehWoSMcVZx5cCuwHjEvEhczK0t2fIgrnnlQ2YwcB/0kXHLMv9VMsNt8N+DmQ6zGEfWR42WFWZQng7tcB3wSeTWUz9ibgYjN7lyZ+JBdmNhU4Avg+8LJEvEpjgZWL96mrDPiYamZrmNmqVTy5deze8NEysxOBI4FJqWzG+oiR8rfc/blUWKRTzGxdYhLn/UQZ5Ww2cWD4TF54ReBEF8wGzgZuLw4WL03OZWnEv4D/BNR5lnkZ8CPgG+5+ayos0k5mNg7YETiROHKw7k4Dvujuc1PBdsu2LOH5x4bziB0zYxLxnPUBfwM+7+6/SIVF2sHMVgUOAT4BzEjE6+AM4u9QJa/osi5LADPbCPgNeb9jGa55xPvYM919ZiosMlJm9nLgi8C7yf+xezguAj7m7pWdhZt9WQKY2euIwlw5la2BJcT5gCe5+zWpsMiKMLPJwP7Ax4FtEvG6uA54v7tXekpZLcoSwMwOILZj1fn95UCPEo8VZ7n7M6mwSCvFO/4NiLu8DyRuKW2CO4GD3P3PqWCn1aYsAczs/cRkSVMsAK4Gvu7uV6bCIoMxszHAB4BPAlsl4nVyD3CEu/8mFSxDrcoSwMw+RcyINcksYtR8ht5lyoqwOHvyk8RJ/qsm4nXyKPBJd78gFSxLHctyDHFK0SdT2ZpZQsyYnwpc5O51OxRZSmZm/0rsGGvC5OdA84B/dfczUsEy1a4s4fklEV8HDk9la2g+cabgl9z9jlRYuo/FGapfIbYr1nnTxmAWAie6+0mpYNlqWZYAZrYG8DXg4FS2hvqAJ4iT5E9w96cTeekCFodffA7YBZgOlL7lr8MWAKcQf+ZL3Z0zHIHQq/MAAAijSURBVLUtSwCLu7y/SjyKNFEvseXrG8Ss+cJEXhqo+HP+KeAA4qbFJp43sAA42d2/lApWpdZlCWBm04n3fAemsjW2BLibePS6wOM6YWk4M1sZOAz4CLAh9d7F1soi4HR3PyYVrFLtyxLA4i7v04HdU9maWwrcQjyKXa7SbCYzW4kYRR4NbErzHrcHWgL8p7t/OBWsWiPKEsDM1ibed/xzKtsAvcD1xOEIvwWWeVP+H9nFzGwasDfwaaIkm24+ccDM51LBHDSmLOH5dzsnE8dQdYM+4AZiZcCvgV537239LZITMxtL3OP0XqIk12/9HY0xD/hmXYoSGlaWABb3inyNeNfTLfqAu4BvARcDs7VOM1/F1sRJRDG+DzgUWLPlNzXLXOBUdz8hFcxJ48oSni/MLxEvxps4c9jKE8B3gQuB+4H5OS7D6EbFhoqXAFsQJfk+uu/+mznEITInp4K5aWRZAlgcenoCcAzdV5gQi3uvAH5APKrP0mizGmY2hVgXuQuxLniHlt/QXE8TO3POTgVz1Niy7GdmRxJXOzTlFJaReIDYe34F8CDwuN5tdpaZTQTWBjYG3kGc+L9Wy29qtkeBj7r7JalgrhpflgBm9iHgJGBaKtsFrgJ+RpwR+ADwhB7T28PMxhPvHmcAbyFmtreiO59sBnqY+Mfimjqv2uiKsgQws32IRd1NO3RgpOYCfyBGmzcAj7r7Ay2/Q/5BMYJcF1iHuOPmLcSdNxNbfV8XuQH4IHBTnYsSuqgsAcxsR2It5g7oX/uBngFuJsrzJuBe4AF3X9zqm7qVxd1QGwGbA9sT5bgtzTvUYrQuBQ72Cq+CaKeuKkug/zCCrwDvovtmIoejj1jwfh1xSvXdxOP6I91ansWOmo2ATYCXEsW4ffHzJtxv0wn/ARzr7rNTwbrourIE+k8sOhH4F5pzTUUnODHqvBW4A7iNWI70d+BBd1/Q4ntry8xWJ65o2Kj4eCWwGbAlGj2mPEus9z3N3eekwnXSlWUJz++c+DhxA14TLkIry9PEY/pDxKjzQeBxYrbz78AzdZkwMrMeYkJmfeKd41rEo/VLiYMrNkJ/NlbEXcQg5CJv4AlZXVuW/cxsL+Kaio1SWRnUUmA2UZgziZHoQxQz7cXPZxY/nlf2S/5iIfhUYp3jWsSKiLWIR+jpRFn2f14dGn1oRSf9H3Cku1+XCtZV15clgJntABxHvMeU9lhEPJLNI0ajs4mF8nOAp4qvLSy+PoeYnZ8PLCYKeClxYMhgf0AnEhN044DJxceqRCmuVPx8GrFbZkrxa9OKj5WLz3rX2B7LgB8Dn/OG3x+lsiyY2XrAkcQhq1KOpUQ5LiTKdQlRkMuKj6Ee58cSZdkDTCBKc1LxMZ7mnvuYm5nE6pIfufuzqXDdqSwHKNbMvZd4LF8jERfpZrcARwF/8C45V1VrDQdw90XAfxE7Ly5PxEW60RLisXt3d7+iW4oSNLIcVHGE1gzi1KJj0Et/EYhJuuOAnzZxtjtFZdlCsdf3bcSBwlsk4iJN5cAfiROT7uum0eRAegxvwd2XuPuvgD2Bc1J5kQZaQIwmd3f3u7u1KEEjy2ErFrHvTcz+zUjERerOgRuJV1E31GWjQSdpZDlM7t7r7ucBrwfOTeVFaqwP+DLwene/TkUZNLIcITPbl9japSPfpEmuI7YBX1f2bqvcqSxHobjr51jgA8RuEZG6eoK4JfR0d1+aCncjlWUbFOdknkqcTjMRLTWS+lhCrCn+qLs/mMh2NZVlmxRrMw8jtktuit4HS96WEgc9nwRc6rrMLkll2WZmtibxLvOdxLFfIjnpA2YBZwJndMOe7nZRWXaImb0J+ARxhUU33+oneXDgMeB3wFfc/Z5EXpajsuyw4rzMo4hb/lZJxEU64Rng98Ap3uDzJjtNZVkCMxsHHFJ8bEGcryjSac8St3d+H7hcs9yjo7IsUXEr4KHA/sTMuS5Mk06YR5Tkj4jJm0WJvAyDyrICZrY2sTbzHcBriQNsRUZrLrEM6DzgN5q8aS+VZYXMbC1gX+DdxN3TKk0ZiQXAr4Dzgd97g66fzYnKMgNmNp0YZe4GvIW4T0YkZRZwCfHI/Ttv2NWzuVFZZqTYPrkTsDvwHuK2QZHlPQhcCPyWGEl27bFpZVJZZsjMVgFeAbwB2IdYdqTbCOVqoiRvAK5VSZZLZZmxYgvlJsDOwB7EriDNoHeX2cQI8iLgeuBhlWQ1VJY1Ucygb06cp/nPxP5zaa4biMvz/gTcBczWkWnVUlnWTHEv0IbAtsRM+hvRu82meISY1f4lcCswSwvJ86GyrKniEX11Yt/5G4kJoZ2II+KkPp4jyvFi4FpgjrvPbf0tUgWVZQOY2RhgGjCduI1yL2Ldpo6Jy9NC4DLgAuLWxNnAPNf1DVlTWTZMsQ99JWLE+XpiYugN6BCPqj1G7K65GPgLUZALNFlTHyrLBitGnOOJKy92At4MvJ24nVKnuXfercCVxKLxPwLzgUWaqKknlWWXMLMeYAyxpXJL4DXArsTe9DWIR3YV6Mj0/yX6O1GKVxGz2PcR1zb0qiDrT2XZpYoJIoiR587AdkR5bkE8whtRrmMG/Q26kwPLis9LiEfrG4mCvBq4A1gEoHJsHpWlvEjxznNzYuS5LbB18fNJRHGOKz43fRTaB/QO+HgOuBn4G1GQ1xELxDUp0yVUlpJUnMO5FbEFc1Ni9Lk5MIUozrHECLW/SOtkGTFKXDrgYw5RjPcCdwK3APe5+4KhfhNpPpWljIiZTQDWJiaL1gNeBmxMvP9clzg5aTxRpGOJIu3/uVHOyHQZUX5LePEocSnwJPEY/QRwN/F+8RHgIXd/bNDfTbqaylJGpZg4Ml5cgKsBGxAl+hJeKNDpxc+nEEuZJhUfExh9efYR7wsXELPOzxGH4T5FlODjREE+BTxETMbMJ94/9hWfXe8aZSgqSxGRYfj/C/rr1+Y8SV4AAAAASUVORK5CYII="></image><g class="cls-1" transform="matrix( 4.95202049933575, -1.70672952779754e-15, 0, 4.95202049933575,133.391880317795, 245.957809875848)"><text class="cls-2" transform="translate(18.84 50.15)"><tspan x="0" y="0">F</tspan></text></g><image class="cls-1" width="117" height="113" transform="translate(41.44 45.47) scale(.2)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABxCAYAAADrleyqAAAACXBIWXMAADcOAAA3DgECDDKTAAAB1UlEQVR4Xu3dv47TQAAG8dnEiOPPNRT0QM/zwjtRIR6Eq9GdKdyz6BKCPZpf/VUeJYocrXYAX4BXbFZyZAN4O4AH4DVwoqgG5wV4ASyzZY7jBPwCnmbDHMeJ7Xt4zIY5jtNskOMpqlBRhYoqVFShogoVVaioQkUVKqpQUYWKKlRUoaIKFVWoqEJFFSqqUFGFiipUVKGiChVVqKhCRRUqqtAJeKTTbiqDguoswA+2uJ18e7474AM7ORI6gM906u0SK/AR+Aq8n2xvYlnX9ftslD8bYzywnfPdhX79Xsc9cJ6NbqWoQkUVKqpQUYWKKlRUoaIKFVWoqEJFFSqqUFGFiipUVKGiChVVqKhCRRUqqlBRhYoqVFShogoVVaioQkUVKqpQUYWKKlRUoaIKFVWoqEJFFSqqUFGFiipUVKGiChVVqKhCRRUqqlBRhYoqVFShogoVVaioQkUVKqpQUYWKKlRUoaIKFVWoqEJFFSrqdTyxo1sti3qhMcYA3gAvZ9tbKerlBtsFfkUV2s2N0UW9jt0EhaIqFVWoqEJFFSqqUFGFiipUVKGiChVVqKjXcWZHz3KZDfJXfgLf2P6teZxs/7V3Y1139S76kMYY98Antk/s/36gy287yx6WlwnHAwAAAABJRU5ErkJggg=="></image>',4),o_=[r_];function a_(n,e){return Ie(),Be("svg",s_,o_)}var gr=nt(i_,[["render",a_]]);const l_={components:{Logo:gr}},c_=b("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"},null,-1),u_={class:"bg-gradient-to-bl from-indigo-500 to-blue-700 pt-10 sm:mt-10"},d_={class:"max-w-6xl m-auto text-white flex flex-wrap justify-left"},f_={class:"p-5 w-1/2 sm:w-4/12 md:w-3/12"},h_=b("div",{class:"text-xs uppercase text-white font-bold mb-6"}," A propos ",-1),p_=je(" Lien 1 "),m_=b("a",{href:"https://www.unifiedchampions.fr",class:"my-3 block text-white hover:text-gray-100 text-sm font-normal duration-700"}," lien 2 ",-1),g_=b("a",{href:"https://www.unifiedchampionsclub.fr",class:"my-3 block text-white hover:text-gray-100 text-sm font-normal duration-700"}," lien 3 ",-1),__={class:"p-5 w-1/2 sm:w-4/12 md:w-3/12"},x_=b("div",{class:"text-xs uppercase text-white font-bold mb-6"}," Mentions l\xE9gales ",-1),v_={class:"p-5 w-1/2 sm:w-4/12 md:w-3/12"},b_=b("div",{class:"text-xs uppercase text-white font-bold mb-6"}," Lien 4 ",-1),y_={class:"p-5 w-1/2 sm:w-4/12 md:w-3/12"},M_=b("div",{class:"text-xs uppercase text-white font-bold mb-6"}," Contact ",-1),w_=b("div",{class:"pt-2"},[b("div",{class:"flex pb-5 px-3 m-auto pt-5 border-t border-indigo-100 text-white text-sm flex-col md:flex-row max-w-6xl"},[b("div",{class:"mt-2 text-center"}," \xA92023 Fabio Gafforelli. All rights reserved ")])],-1);function S_(n,e,t,i,s,r){const a=ke("Logo"),o=ke("RouterLink");return Ie(),Be(rt,null,[c_,b("footer",u_,[b("div",null,[_e(o,{to:"/"},{default:Re(()=>[_e(a,{class:"w-24 h-24 ml-6"})]),_:1})]),b("div",d_,[b("div",f_,[h_,_e(o,{to:"/partenaires",class:"my-3 block text-white hover:text-gray-100 text-sm font-normal duration-700"},{default:Re(()=>[p_]),_:1}),m_,g_]),b("div",__,[_e(o,{to:"/mentions"},{default:Re(()=>[x_]),_:1})]),b("div",v_,[_e(o,{to:"/inscription"},{default:Re(()=>[b_]),_:1})]),b("div",y_,[_e(o,{to:"/contact"},{default:Re(()=>[M_]),_:1})])]),w_])],64)}var Il=nt(l_,[["render",S_]]);const E_={},A_={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},T_=b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},null,-1),L_=b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),C_=[T_,L_];function D_(n,e){return Ie(),Be("svg",A_,C_)}var Po=nt(E_,[["render",D_]]);const P_={},R_={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 relative",preserveAspectRatio:"none"},I_=b("path",{d:"M8.4375 4.3125H8.25C8.35313 4.3125 8.4375 4.22813 8.4375 4.125V4.3125H15.5625V4.125C15.5625 4.22813 15.6469 4.3125 15.75 4.3125H15.5625V6H17.25V4.125C17.25 3.29766 16.5773 2.625 15.75 2.625H8.25C7.42266 2.625 6.75 3.29766 6.75 4.125V6H8.4375V4.3125ZM20.25 6H3.75C3.33516 6 3 6.33516 3 6.75V7.5C3 7.60313 3.08437 7.6875 3.1875 7.6875H4.60312L5.18203 19.9453C5.21953 20.7445 5.88047 21.375 6.67969 21.375H17.3203C18.1219 21.375 18.7805 20.7469 18.818 19.9453L19.3969 7.6875H20.8125C20.9156 7.6875 21 7.60313 21 7.5V6.75C21 6.33516 20.6648 6 20.25 6ZM17.1398 19.6875H6.86016L6.29297 7.6875H17.707L17.1398 19.6875Z",fill:"black"},null,-1),F_=[I_];function U_(n,e){return Ie(),Be("svg",R_,F_)}var Ro=nt(P_,[["render",U_]]);const N_={props:{nom:String,description:String,photo:String,id:String},components:{Supprimer:Ro,Modification:Po},data(){return{menuOuvert:!1,user:{email:null,password:null},userInfo:null,name:"Vid\xE9o",isAdmin:!1}},mounted(){this.getUserConnect(),Qt.on("connectUser",n=>{this.user=n.user,this.getUserInfo(this.user)}),Qt.on("deConnectUser",n=>{this.user=n.user,this.userInfo=null,this.name="Vid\xE9o",this.isAdmin=!1})},methods:{async getUserConnect(){await Gn().onAuthStateChanged(function(n){n&&(this.user=n,this.getUserInfo(this.user))}.bind(this))},async getUserInfo(n){const e=He(),t=ht(e,"users"),i=hi(t,pr("uid","==",n.uid));await vn(i,s=>{this.userInfo=s.docs.map(o=>tn({id:o.id},o.data())),this.name=this.userInfo[0].login,this.isAdmin=this.userInfo[0].admin;const r=lt(),a=st(r,"users/"+this.userInfo[0].avatar);Bt(a).then(o=>{this.avatar=o}).catch(o=>{console.log("erreur downloadUrl",o)})})}}},O_={class:"text-black"},z_={class:"flex"},B_=["src"],k_={class:"mx-4"},V_={class:"text-base"},H_={class:"text-sm mt-4 md:text-lg lg:text-xl"},G_={key:0,class:"flex justify-center gap-10 mt-1"},W_={class:"bg-blue-300 hover:bg-blue-500"},j_={class:"bg-blue-300 hover:bg-blue-500"};function q_(n,e,t,i,s,r){const a=ke("Modification"),o=ke("RouterLink"),l=ke("Supprimer");return Ie(),Be("div",O_,[b("div",z_,[b("img",{class:"rounded-xl w-40 h-40",src:t.photo,alt:"Image de l'artiste"},null,8,B_)]),b("div",null,[b("div",k_,[b("h3",V_,ln(t.nom),1),b("p",H_,ln(t.description),1)])]),s.isAdmin?(Ie(),Be("div",G_,[_e(o,{to:{name:"UpdateLogicielDesign",params:{id:t.id}}},{default:Re(()=>[b("button",W_,[_e(a)])]),_:1},8,["to"]),_e(o,{class:"",to:{name:"DeleteLogicielDesign",params:{id:t.id}}},{default:Re(()=>[b("button",j_,[_e(l)])]),_:1},8,["to"])])):dn("",!0)])}var $_=nt(N_,[["render",q_]]);const X_={props:{nom:String,description:String,photo:String,id:String},components:{Supprimer:Ro,Modification:Po},data(){return{menuOuvert:!1,user:{email:null,password:null},userInfo:null,name:"Vid\xE9o",isAdmin:!1}},mounted(){this.getUserConnect(),Qt.on("connectUser",n=>{this.user=n.user,this.getUserInfo(this.user)}),Qt.on("deConnectUser",n=>{this.user=n.user,this.userInfo=null,this.name="Vid\xE9o",this.isAdmin=!1})},methods:{async getUserConnect(){await Gn().onAuthStateChanged(function(n){n&&(this.user=n,this.getUserInfo(this.user))}.bind(this))},async getUserInfo(n){const e=He(),t=ht(e,"users"),i=hi(t,pr("uid","==",n.uid));await vn(i,s=>{this.userInfo=s.docs.map(o=>tn({id:o.id},o.data())),this.name=this.userInfo[0].login,this.isAdmin=this.userInfo[0].admin;const r=lt(),a=st(r,"users/"+this.userInfo[0].avatar);Bt(a).then(o=>{this.avatar=o}).catch(o=>{console.log("erreur downloadUrl",o)})})}}},Y_={class:"text-black"},Z_={class:"flex"},K_=["src"],J_={class:"mx-4"},Q_={class:"text-base"},ex={class:"text-sm mt-4 md:text-lg lg:text-xl"},tx={key:0,class:"flex justify-center gap-10 mt-1"},nx={class:"bg-blue-300 hover:bg-blue-500"},ix={class:"bg-blue-300 hover:bg-blue-500"};function sx(n,e,t,i,s,r){const a=ke("Modification"),o=ke("RouterLink"),l=ke("Supprimer");return Ie(),Be("div",Y_,[b("div",Z_,[b("img",{class:"rounded-xl w-40 h-40",src:t.photo,alt:"Image de l'artiste"},null,8,K_)]),b("div",null,[b("div",J_,[b("h3",Q_,ln(t.nom),1),b("p",ex,ln(t.description),1)])]),s.isAdmin?(Ie(),Be("div",tx,[_e(o,{to:{name:"UpdateLogicielDev",params:{id:t.id}}},{default:Re(()=>[b("button",nx,[_e(a)])]),_:1},8,["to"]),_e(o,{class:"",to:{name:"DeleteLogicielDev",params:{id:t.id}}},{default:Re(()=>[b("button",ix,[_e(l)])]),_:1},8,["to"])])):dn("",!0)])}var rx=nt(X_,[["render",sx]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="149",Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ox=0,Vc=1,ax=2,Nf=1,lx=2,Xs=3,fi=0,Zt=1,oi=2,ui=0,bs=1,Hc=2,Gc=3,Wc=4,cx=5,ms=100,ux=101,dx=102,jc=103,qc=104,fx=200,hx=201,px=202,mx=203,Of=204,zf=205,gx=206,_x=207,xx=208,vx=209,bx=210,yx=0,Mx=1,wx=2,Qa=3,Sx=4,Ex=5,Ax=6,Tx=7,Ul=0,Lx=1,Cx=2,Wn=0,Dx=1,Px=2,Rx=3,Ix=4,Fx=5,Bf=300,As=301,Ts=302,el=303,tl=304,Io=306,nl=1e3,gn=1001,il=1002,Ot=1003,$c=1004,Xo=1005,on=1006,Ux=1007,ur=1008,Bi=1009,Nx=1010,Ox=1011,kf=1012,zx=1013,Pi=1014,Ri=1015,dr=1016,Bx=1017,kx=1018,ys=1020,Vx=1021,_n=1023,Hx=1024,Gx=1025,Ni=1026,Ls=1027,Wx=1028,jx=1029,qx=1030,$x=1031,Xx=1033,Yo=33776,Zo=33777,Ko=33778,Jo=33779,Xc=35840,Yc=35841,Zc=35842,Kc=35843,Yx=36196,Jc=37492,Qc=37496,eu=37808,tu=37809,nu=37810,iu=37811,su=37812,ru=37813,ou=37814,au=37815,lu=37816,cu=37817,uu=37818,du=37819,fu=37820,hu=37821,Qo=36492,Zx=36283,pu=36284,mu=36285,gu=36286,ki=3e3,ct=3001,Kx=3200,Jx=3201,Nl=0,Qx=1,An="srgb",fr="srgb-linear",ea=7680,e0=519,_u=35044,xu="300 es",sl=1035;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,vu=180/Math.PI;function _r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function t0(n,e){return(n%e+e)%e}function na(n,e,t){return(1-t)*n+t*e}function bu(n){return(n&n-1)===0&&n!==0}function rl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],p=s[0],h=s[3],x=s[6],E=s[1],y=s[4],w=s[7],T=s[2],D=s[5],R=s[8];return r[0]=a*p+o*E+l*T,r[3]=a*h+o*y+l*D,r[6]=a*x+o*w+l*R,r[1]=c*p+u*E+d*T,r[4]=c*h+u*y+d*D,r[7]=c*x+u*w+d*R,r[2]=f*p+m*E+g*T,r[5]=f*h+m*y+g*D,r[8]=f*x+m*w+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=t*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(s*c-u*i)*p,e[2]=(o*i-s*a)*p,e[3]=f*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-o*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Yt;function Vf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const sa={[An]:{[fr]:Oi},[fr]:{[An]:io}},Ft={legacyMode:!0,get workingColorSpace(){return fr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(sa[e]&&sa[e][t]!==void 0){const i=sa[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vt={r:0,g:0,b:0},fn={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Cr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ft.workingColorSpace){if(e=t0(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ra(a,r,e+1/3),this.g=ra(a,r,e),this.b=ra(a,r,e-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(e,t=An){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ft.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ft.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ft.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=An){const i=Hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Ft.fromWorkingColorSpace(Cr(this,vt),e),Ht(vt.r*255,0,255)<<16^Ht(vt.g*255,0,255)<<8^Ht(vt.b*255,0,255)<<0}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Cr(this,vt),t);const i=vt.r,s=vt.g,r=vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Cr(this,vt),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=An){return Ft.fromWorkingColorSpace(Cr(this,vt),e),e!==An?`color(${e} ${vt.r} ${vt.g} ${vt.b})`:`rgb(${vt.r*255|0},${vt.g*255|0},${vt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(fn),fn.h+=e,fn.s+=t,fn.l+=i,this.setHSL(fn.h,fn.s,fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Lr);const i=na(fn.h,Lr.h,t),s=na(fn.s,Lr.s,t),r=na(fn.l,Lr.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=Hf;let Ki;class Gf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=mo("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Oi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Wf{constructor(e=null){this.isSource=!0,this.uuid=_r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Gf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class Kt extends qi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=gn,s=gn,r=on,a=ur,o=_n,l=Bi,c=Kt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=_r(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nl:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nl:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Bf;Kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],p=l[2],h=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(m+1)/2,T=(x+1)/2,D=(u+f)/4,R=(d+p)/4,M=(g+h)/4;return y>w&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=D/i,r=R/i):w>T?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=D/s,r=M/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=M/r),this.set(i,s,r,t),this}let E=Math.sqrt((h-g)*(h-g)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(h-g)/E,this.y=(d-p)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vi extends qi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:on,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jf extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==f||c!==m||u!==g){let h=1-o;const x=l*f+c*m+u*g+d*p,E=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const T=Math.sqrt(y),D=Math.atan2(T,x*E);h=Math.sin(h*D)/T,o=Math.sin(o*D)/T}const w=o*E;if(l=l*h+f*w,c=c*h+m*w,u=u*h+g*w,d=d*h+p*w,h===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*i,u=l*i+o*t-r*s,d=l*s+r*i-a*t,f=-r*t-a*i-o*s;return this.x=c*l+f*-r+u*-o-d*-a,this.y=u*l+f*-a+d*-r-c*-o,this.z=d*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new H,yu=new Hi;class xr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<i&&(i=d),f<s&&(s=f),u>r&&(r=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(t,i,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<i&&(i=d),f<s&&(s=f),u>r&&(r=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(t,i,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)yi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox),la.applyMatrix4(e.matrixWorld),this.union(la);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Dr.subVectors(this.max,Bs),Ji.subVectors(e.a,Bs),Qi.subVectors(e.b,Bs),es.subVectors(e.c,Bs),Qn.subVectors(Qi,Ji),ei.subVectors(es,Qi),Mi.subVectors(Ji,es);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Mi.y,Mi.x,0];return!ca(t,Ji,Qi,es,Dr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,Ji,Qi,es,Dr))?!1:(Pr.crossVectors(Qn,ei),t=[Pr.x,Pr.y,Pr.z],ca(t,Ji,Qi,es,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new H,new H,new H,new H,new H,new H,new H,new H],yi=new H,la=new xr,Ji=new H,Qi=new H,es=new H,Qn=new H,ei=new H,Mi=new H,Bs=new H,Dr=new H,Pr=new H,wi=new H;function ca(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){wi.fromArray(n,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const s0=new xr,ks=new H,ua=new H;class vr{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ua)),this.expandByPoint(ks.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new H,da=new H,Rr=new H,ti=new H,fa=new H,Ir=new H,ha=new H;class Ol{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.direction).multiplyScalar(t).add(this.origin),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){da.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=ti.dot(this.direction),l=-ti.dot(Rr),c=ti.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const p=1/u;d*=p,f*=p,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(Rr).multiplyScalar(f).add(da),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){fa.subVectors(t,e),Ir.subVectors(i,e),ha.crossVectors(fa,Ir);let a=this.direction.dot(ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(Ir.crossVectors(ti,Ir));if(l<0)return null;const c=o*this.direction.dot(fa.cross(ti));if(c<0||l+c>a)return null;const u=-o*ti.dot(ha);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,a,o,l,c,u,d,f,m,g,p,h){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=d,x[14]=f,x[3]=m,x[7]=g,x[11]=p,x[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,p=c*d;t[0]=f+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,p=c*d;t[0]=f-p*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-p*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+p,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,o0)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ni.crossVectors(i,qt),ni.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ni.crossVectors(i,qt)),ni.normalize(),Fr.crossVectors(qt,ni),s[0]=ni.x,s[4]=Fr.x,s[8]=qt.x,s[1]=ni.y,s[5]=Fr.y,s[9]=qt.y,s[2]=ni.z,s[6]=Fr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],p=i[6],h=i[10],x=i[14],E=i[3],y=i[7],w=i[11],T=i[15],D=s[0],R=s[4],M=s[8],C=s[12],z=s[1],te=s[5],G=s[9],k=s[13],B=s[2],Z=s[6],ie=s[10],re=s[14],X=s[3],fe=s[7],ue=s[11],Le=s[15];return r[0]=a*D+o*z+l*B+c*X,r[4]=a*R+o*te+l*Z+c*fe,r[8]=a*M+o*G+l*ie+c*ue,r[12]=a*C+o*k+l*re+c*Le,r[1]=u*D+d*z+f*B+m*X,r[5]=u*R+d*te+f*Z+m*fe,r[9]=u*M+d*G+f*ie+m*ue,r[13]=u*C+d*k+f*re+m*Le,r[2]=g*D+p*z+h*B+x*X,r[6]=g*R+p*te+h*Z+x*fe,r[10]=g*M+p*G+h*ie+x*ue,r[14]=g*C+p*k+h*re+x*Le,r[3]=E*D+y*z+w*B+T*X,r[7]=E*R+y*te+w*Z+T*fe,r[11]=E*M+y*G+w*ie+T*ue,r[15]=E*C+y*k+w*re+T*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],p=e[7],h=e[11],x=e[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*m-i*l*m)+p*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+h*(+t*c*d-t*o*m-r*a*d+i*a*m+r*o*u-i*c*u)+x*(-s*o*u-t*l*d+t*o*f+s*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],p=e[13],h=e[14],x=e[15],E=d*h*c-p*f*c+p*l*m-o*h*m-d*l*x+o*f*x,y=g*f*c-u*h*c-g*l*m+a*h*m+u*l*x-a*f*x,w=u*p*c-g*d*c+g*o*m-a*p*m-u*o*x+a*d*x,T=g*d*l-u*p*l-g*o*f+a*p*f+u*o*h-a*d*h,D=t*E+i*y+s*w+r*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=E*R,e[1]=(p*f*r-d*h*r-p*s*m+i*h*m+d*s*x-i*f*x)*R,e[2]=(o*h*r-p*l*r+p*s*c-i*h*c-o*s*x+i*l*x)*R,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*m-i*l*m)*R,e[4]=y*R,e[5]=(u*h*r-g*f*r+g*s*m-t*h*m-u*s*x+t*f*x)*R,e[6]=(g*l*r-a*h*r-g*s*c+t*h*c+a*s*x-t*l*x)*R,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*m+t*l*m)*R,e[8]=w*R,e[9]=(g*d*r-u*p*r-g*i*m+t*p*m+u*i*x-t*d*x)*R,e[10]=(a*p*r-g*o*r+g*i*c-t*p*c-a*i*x+t*o*x)*R,e[11]=(u*o*r-a*d*r-u*i*c+t*d*c+a*i*m-t*o*m)*R,e[12]=T*R,e[13]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*h+t*d*h)*R,e[14]=(g*o*s-a*p*s-g*i*l+t*p*l+a*i*h-t*o*h)*R,e[15]=(a*d*s-u*o*s+u*i*l-t*d*l-a*i*f+t*o*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,p=a*u,h=a*d,x=o*d,E=l*c,y=l*u,w=l*d,T=i.x,D=i.y,R=i.z;return s[0]=(1-(p+x))*T,s[1]=(m+w)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(m-w)*D,s[5]=(1-(f+x))*D,s[6]=(h+E)*D,s[7]=0,s[8]=(g+y)*R,s[9]=(h-E)*R,s[10]=(1-(f+p))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,u=1/a,d=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a){const o=this.elements,l=1/(t-e),c=1/(i-s),u=1/(a-r),d=(t+e)*l,f=(i+s)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new H,hn=new pt,r0=new H(0,0,0),o0=new H(1,1,1),ni=new H,Fr=new H,qt=new H,Mu=new pt,wu=new Hi;class Fo{constructor(e=0,t=0,i=0,s=Fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fo.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const Su=new H,ns=new Hi,On=new pt,Ur=new H,Vs=new H,l0=new H,c0=new Hi,Eu=new H(1,0,0),Au=new H(0,1,0),Tu=new H(0,0,1),u0={type:"added"},Lu={type:"removed"};class Tt extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new H,t=new Fo,i=new Hi,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Yt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ur.copy(e):Ur.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Vs,Ur,this.up):On.lookAt(Ur,Vs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(On),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(u0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new H(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new H,zn=new H,pa=new H,Bn=new H,is=new H,ss=new H,Cu=new H,ma=new H,ga=new H,_a=new H;class Hn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pn.subVectors(s,t),zn.subVectors(i,t),pa.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(zn),l=pn.dot(pa),c=zn.dot(zn),u=zn.dot(pa),d=a*c-o*o;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Bn),l.set(0,0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l}static isFrontFacing(e,t,i,s){return pn.subVectors(i,t),zn.subVectors(e,t),pn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),pn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Hn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),ma.subVectors(e,i);const l=is.dot(ma),c=ss.dot(ma);if(l<=0&&c<=0)return t.copy(i);ga.subVectors(e,s);const u=is.dot(ga),d=ss.dot(ga);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(is,a);_a.subVectors(e,r);const m=is.dot(_a),g=ss.dot(_a);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ss,o);const h=u*g-m*d;if(h<=0&&d-u>=0&&m-g>=0)return Cu.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Cu,o);const x=1/(h+p+f);return a=p*x,o=f*x,t.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let d0=0;class Rn extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=bs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Of,this.blendDst=zf,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $f extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,Nr=new Ge;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_u,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),s=jt(s,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Xf extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yf extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let f0=0;const sn=new pt,xa=new Tt,rs=new H,$t=new xr,Hs=new xr,St=new H;class Mn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vf(e)?Yf:Xf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors($t.min,Hs.min),$t.expandByPoint(St),St.addVectors($t.max,Hs.max),$t.expandByPoint(St)):($t.expandByPoint(Hs.min),$t.expandByPoint(Hs.max))}$t.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)St.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),St.add(rs)),s=Math.max(s,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let z=0;z<o;z++)c[z]=new H,u[z]=new H;const d=new H,f=new H,m=new H,g=new Ge,p=new Ge,h=new Ge,x=new H,E=new H;function y(z,te,G){d.fromArray(s,z*3),f.fromArray(s,te*3),m.fromArray(s,G*3),g.fromArray(a,z*2),p.fromArray(a,te*2),h.fromArray(a,G*2),f.sub(d),m.sub(d),p.sub(g),h.sub(g);const k=1/(p.x*h.y-h.x*p.y);!isFinite(k)||(x.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(k),E.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(k),c[z].add(x),c[te].add(x),c[G].add(x),u[z].add(E),u[te].add(E),u[G].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let z=0,te=w.length;z<te;++z){const G=w[z],k=G.start,B=G.count;for(let Z=k,ie=k+B;Z<ie;Z+=3)y(i[Z+0],i[Z+1],i[Z+2])}const T=new H,D=new H,R=new H,M=new H;function C(z){R.fromArray(r,z*3),M.copy(R);const te=c[z];T.copy(te),T.sub(R.multiplyScalar(R.dot(te))).normalize(),D.crossVectors(M,te);const k=D.dot(u[z])<0?-1:1;l[z*4]=T.x,l[z*4+1]=T.y,l[z*4+2]=T.z,l[z*4+3]=k}for(let z=0,te=w.length;z<te;++z){const G=w[z],k=G.start,B=G.count;for(let Z=k,ie=k+B;Z<ie;Z+=3)C(i[Z+0]),C(i[Z+1]),C(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,h),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,h=l.length;p<h;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let x=0;x<u;x++)f[g++]=c[m++]}return new Dn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new pt,os=new Ol,va=new vr,Gs=new H,Ws=new H,js=new H,ba=new H,Or=new H,zr=new Ge,Br=new Ge,kr=new Ge,ya=new H,Vr=new H;class xn extends Tt{constructor(e=new Mn,t=new $f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(ba.fromBufferAttribute(d,e),a?Or.addScaledVector(ba,u):Or.addScaledVector(ba.sub(t),u))}t.add(Or)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),e.ray.intersectsSphere(va)===!1)||(Du.copy(r).invert(),os.copy(e.ray).applyMatrix4(Du),i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,g=d.length;m<g;m++){const p=d[m],h=s[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,w=E;y<w;y+=3){const T=o.getX(y),D=o.getX(y+1),R=o.getX(y+2);a=Hr(this,h,e,os,c,u,T,D,R),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=m,h=g;p<h;p+=3){const x=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);a=Hr(this,s,e,os,c,u,x,E,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,g=d.length;m<g;m++){const p=d[m],h=s[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,w=E;y<w;y+=3){const T=y,D=y+1,R=y+2;a=Hr(this,h,e,os,c,u,T,D,R),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=m,h=g;p<h;p+=3){const x=p,E=p+1,y=p+2;a=Hr(this,s,e,os,c,u,x,E,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function h0(n,e,t,i,s,r,a,o){let l;if(e.side===Zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===fi,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:n}}function Hr(n,e,t,i,s,r,a,o,l){n.getVertexPosition(a,Gs),n.getVertexPosition(o,Ws),n.getVertexPosition(l,js);const c=h0(n,e,t,i,Gs,Ws,js,ya);if(c){s&&(zr.fromBufferAttribute(s,a),Br.fromBufferAttribute(s,o),kr.fromBufferAttribute(s,l),c.uv=Hn.getUV(ya,Gs,Ws,js,zr,Br,kr,new Ge)),r&&(zr.fromBufferAttribute(r,a),Br.fromBufferAttribute(r,o),kr.fromBufferAttribute(r,l),c.uv2=Hn.getUV(ya,Gs,Ws,js,zr,Br,kr,new Ge));const u={a,b:o,c:l,normal:new H,materialIndex:0};Hn.getNormal(Gs,Ws,js,u.normal),c.face=u}return c}class br extends Mn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(d,2));function g(p,h,x,E,y,w,T,D,R,M,C){const z=w/R,te=T/M,G=w/2,k=T/2,B=D/2,Z=R+1,ie=M+1;let re=0,X=0;const fe=new H;for(let ue=0;ue<ie;ue++){const Le=ue*te-k;for(let j=0;j<Z;j++){const ae=j*z-G;fe[p]=ae*E,fe[h]=Le*y,fe[x]=B,c.push(fe.x,fe.y,fe.z),fe[p]=0,fe[h]=0,fe[x]=D>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push(j/R),d.push(1-ue/M),re+=1}}for(let ue=0;ue<M;ue++)for(let Le=0;Le<R;Le++){const j=f+Le+Z*ue,ae=f+Le+Z*(ue+1),be=f+(Le+1)+Z*(ue+1),N=f+(Le+1)+Z*ue;l.push(j,ae,N),l.push(ae,be,N),X+=6}o.addGroup(m,X,C),m+=X,f+=re}}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Cs(n[t]);for(const s in i)e[s]=i[s]}return e}function p0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zf(n){return n.getRenderTarget()===null&&n.outputEncoding===ct?An:fr}const m0={clone:Cs,merge:Nt};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kf extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends Kf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class x0 extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new an(as,ls,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new an(as,ls,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new an(as,ls,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new an(as,ls,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new an(as,ls,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new an(as,ls,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Wn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Jf extends Kt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new br(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:ui});r.uniforms.tEquirect.value=t;const a=new xn(s,r),o=t.minFilter;return t.minFilter===ur&&(t.minFilter=on),new x0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ma=new H,b0=new H,y0=new Yt;class Ei{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ma.subVectors(i,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||y0.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new vr,Gr=new H;class zl{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],f=i[8],m=i[9],g=i[10],p=i[11],h=i[12],x=i[13],E=i[14],y=i[15];return t[0].setComponents(o-s,d-l,p-f,y-h).normalize(),t[1].setComponents(o+s,d+l,p+f,y+h).normalize(),t[2].setComponents(o+r,d+c,p+m,y+x).normalize(),t[3].setComponents(o-r,d-c,p-m,y-x).normalize(),t[4].setComponents(o-a,d-u,p-g,y-E).normalize(),t[5].setComponents(o+a,d+u,p+g,y+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function M0(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class Bl extends Mn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],p=[],h=[];for(let x=0;x<u;x++){const E=x*f-a;for(let y=0;y<c;y++){const w=y*d-r;g.push(w,-E,0),p.push(0,0,1),h.push(y/o),h.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<o;E++){const y=E+c*x,w=E+c*(x+1),T=E+1+c*(x+1),D=E+1+c*x;m.push(y,w,D),m.push(w,T,D)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(h,2))}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0="vec3 transformed = vec3( position );",D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,av=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ov=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,hb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pb=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_b=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ub=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,We={alphamap_fragment:w0,alphamap_pars_fragment:S0,alphatest_fragment:E0,alphatest_pars_fragment:A0,aomap_fragment:T0,aomap_pars_fragment:L0,begin_vertex:C0,beginnormal_vertex:D0,bsdfs:P0,iridescence_fragment:R0,bumpmap_pars_fragment:I0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:O0,color_fragment:z0,color_pars_fragment:B0,color_pars_vertex:k0,color_vertex:V0,common:H0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:j0,displacementmap_vertex:q0,emissivemap_fragment:$0,emissivemap_pars_fragment:X0,encodings_fragment:Y0,encodings_pars_fragment:Z0,envmap_fragment:K0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:ev,envmap_physical_pars_fragment:fv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:sv,fog_pars_fragment:rv,gradientmap_pars_fragment:ov,lightmap_fragment:av,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:uv,lights_pars_begin:dv,lights_toon_fragment:hv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:gv,lights_physical_fragment:_v,lights_physical_pars_fragment:xv,lights_fragment_begin:vv,lights_fragment_maps:bv,lights_fragment_end:yv,logdepthbuf_fragment:Mv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:Ev,map_fragment:Av,map_pars_fragment:Tv,map_particle_fragment:Lv,map_particle_pars_fragment:Cv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Pv,morphcolor_vertex:Rv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Uv,normal_fragment_begin:Nv,normal_fragment_maps:Ov,normal_pars_fragment:zv,normal_pars_vertex:Bv,normal_vertex:kv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:jv,output_fragment:qv,packing:$v,premultiplied_alpha_fragment:Xv,project_vertex:Yv,dithering_fragment:Zv,dithering_pars_fragment:Kv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:sb,skinning_pars_vertex:rb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:db,transmission_fragment:fb,transmission_pars_fragment:hb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,uv2_pars_fragment:_b,uv2_pars_vertex:xb,uv2_vertex:vb,worldpos_vertex:bb,background_vert:yb,background_frag:Mb,backgroundCube_vert:wb,backgroundCube_frag:Sb,cube_vert:Eb,cube_frag:Ab,depth_vert:Tb,depth_frag:Lb,distanceRGBA_vert:Cb,distanceRGBA_frag:Db,equirect_vert:Pb,equirect_frag:Rb,linedashed_vert:Ib,linedashed_frag:Fb,meshbasic_vert:Ub,meshbasic_frag:Nb,meshlambert_vert:Ob,meshlambert_frag:zb,meshmatcap_vert:Bb,meshmatcap_frag:kb,meshnormal_vert:Vb,meshnormal_frag:Hb,meshphong_vert:Gb,meshphong_frag:Wb,meshphysical_vert:jb,meshphysical_frag:qb,meshtoon_vert:$b,meshtoon_frag:Xb,points_vert:Yb,points_frag:Zb,shadow_vert:Kb,shadow_frag:Jb,sprite_vert:Qb,sprite_frag:ey},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},Ln={basic:{uniforms:Nt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([Me.points,Me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([Me.common,Me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([Me.sprite,Me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ln.physical={uniforms:Nt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Wr={r:0,b:0,g:0};function ty(n,e,t,i,s,r,a){const o=new et(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(h,x){let E=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));const w=n.xr,T=w.getSession&&w.getSession();T&&T.environmentBlendMode==="additive"&&(y=null),y===null?p(o,l):y&&y.isColor&&(p(y,1),E=!0),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Io)?(u===void 0&&(u=new xn(new br(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:Cs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==ct,(d!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xn(new Bl(2,2),new Gi({name:"BackgroundMaterial",uniforms:Cs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=y.encoding!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function p(h,x){h.getRGB(Wr,Zf(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(h,x=1){o.set(h),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(o,l)},render:g}}function ny(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=h(null);let c=l,u=!1;function d(B,Z,ie,re,X){let fe=!1;if(a){const ue=p(re,ie,Z);c!==ue&&(c=ue,m(c.object)),fe=x(B,re,ie,X),fe&&E(B,re,ie,X)}else{const ue=Z.wireframe===!0;(c.geometry!==re.id||c.program!==ie.id||c.wireframe!==ue)&&(c.geometry=re.id,c.program=ie.id,c.wireframe=ue,fe=!0)}X!==null&&t.update(X,34963),(fe||u)&&(u=!1,M(B,Z,ie,re),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(B){return i.isWebGL2?n.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return i.isWebGL2?n.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function p(B,Z,ie){const re=ie.wireframe===!0;let X=o[B.id];X===void 0&&(X={},o[B.id]=X);let fe=X[Z.id];fe===void 0&&(fe={},X[Z.id]=fe);let ue=fe[re];return ue===void 0&&(ue=h(f()),fe[re]=ue),ue}function h(B){const Z=[],ie=[],re=[];for(let X=0;X<s;X++)Z[X]=0,ie[X]=0,re[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ie,attributeDivisors:re,object:B,attributes:{},index:null}}function x(B,Z,ie,re){const X=c.attributes,fe=Z.attributes;let ue=0;const Le=ie.getAttributes();for(const j in Le)if(Le[j].location>=0){const be=X[j];let N=fe[j];if(N===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(N=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(N=B.instanceColor)),be===void 0||be.attribute!==N||N&&be.data!==N.data)return!0;ue++}return c.attributesNum!==ue||c.index!==re}function E(B,Z,ie,re){const X={},fe=Z.attributes;let ue=0;const Le=ie.getAttributes();for(const j in Le)if(Le[j].location>=0){let be=fe[j];be===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(be=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(be=B.instanceColor));const N={};N.attribute=be,be&&be.data&&(N.data=be.data),X[j]=N,ue++}c.attributes=X,c.attributesNum=ue,c.index=re}function y(){const B=c.newAttributes;for(let Z=0,ie=B.length;Z<ie;Z++)B[Z]=0}function w(B){T(B,0)}function T(B,Z){const ie=c.newAttributes,re=c.enabledAttributes,X=c.attributeDivisors;ie[B]=1,re[B]===0&&(n.enableVertexAttribArray(B),re[B]=1),X[B]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Z),X[B]=Z)}function D(){const B=c.newAttributes,Z=c.enabledAttributes;for(let ie=0,re=Z.length;ie<re;ie++)Z[ie]!==B[ie]&&(n.disableVertexAttribArray(ie),Z[ie]=0)}function R(B,Z,ie,re,X,fe){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(B,Z,ie,X,fe):n.vertexAttribPointer(B,Z,ie,re,X,fe)}function M(B,Z,ie,re){if(i.isWebGL2===!1&&(B.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const X=re.attributes,fe=ie.getAttributes(),ue=Z.defaultAttributeValues;for(const Le in fe){const j=fe[Le];if(j.location>=0){let ae=X[Le];if(ae===void 0&&(Le==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),Le==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor)),ae!==void 0){const be=ae.normalized,N=ae.itemSize,I=t.get(ae);if(I===void 0)continue;const K=I.buffer,oe=I.type,xe=I.bytesPerElement;if(ae.isInterleavedBufferAttribute){const pe=ae.data,Ae=pe.stride,ve=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let S=0;S<j.locationSize;S++)T(j.location+S,pe.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let S=0;S<j.locationSize;S++)w(j.location+S);n.bindBuffer(34962,K);for(let S=0;S<j.locationSize;S++)R(j.location+S,N/j.locationSize,oe,be,Ae*xe,(ve+N/j.locationSize*S)*xe)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<j.locationSize;pe++)T(j.location+pe,ae.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<j.locationSize;pe++)w(j.location+pe);n.bindBuffer(34962,K);for(let pe=0;pe<j.locationSize;pe++)R(j.location+pe,N/j.locationSize,oe,be,N*xe,N/j.locationSize*pe*xe)}}else if(ue!==void 0){const be=ue[Le];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(j.location,be);break;case 3:n.vertexAttrib3fv(j.location,be);break;case 4:n.vertexAttrib4fv(j.location,be);break;default:n.vertexAttrib1fv(j.location,be)}}}}D()}function C(){G();for(const B in o){const Z=o[B];for(const ie in Z){const re=Z[ie];for(const X in re)g(re[X].object),delete re[X];delete Z[ie]}delete o[B]}}function z(B){if(o[B.id]===void 0)return;const Z=o[B.id];for(const ie in Z){const re=Z[ie];for(const X in re)g(re[X].object),delete re[X];delete Z[ie]}delete o[B.id]}function te(B){for(const Z in o){const ie=o[Z];if(ie[B.id]===void 0)continue;const re=ie[B.id];for(const X in re)g(re[X].object),delete re[X];delete ie[B.id]}}function G(){k(),u=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:z,releaseStatesOfProgram:te,initAttributes:y,enableAttribute:w,disableUnusedAttributes:D}}function iy(n,e,t,i){const s=i.isWebGL2;let r;function a(c){r=c}function o(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),t.update(u,r,d)}this.setMode=a,this.render=o,this.renderInstances=l}function sy(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),x=n.getParameter(36348),E=n.getParameter(36349),y=f>0,w=a||e.has("OES_texture_float"),T=y&&w,D=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:D}}function ry(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ei,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,x=n.get(d);if(!s||g===null||g.length===0||r&&!h)r?u(null):c();else{const E=r?0:i,y=E*4;let w=x.clippingState||null;l.value=w,w=u(g,f,y,m);for(let T=0;T!==y;++T)w[T]=t[T];x.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,g!==!0||h===null){const x=m+p*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(h===null||h.length<x)&&(h=new Float32Array(x));for(let y=0,w=m;y!==p;++y,w+=4)a.copy(d[y]).applyMatrix4(E,o),a.normal.toArray(h,w),h[w+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function oy(n){let e=new WeakMap;function t(a,o){return o===el?a.mapping=As:o===tl&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===el||o===tl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new v0(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class eh extends Kf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Pu=[.125,.215,.35,.446,.526,.582],Ci=20,wa=new eh,Ru=new et;let Sa=null;const Ai=(1+Math.sqrt(5))/2,us=1/Ai,Iu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ai,us),new H(0,Ai,-us),new H(us,0,Ai),new H(-us,0,Ai),new H(Ai,us,0),new H(-Ai,us,0)];class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:dr,format:_n,encoding:ki,depthBuffer:!1},s=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ay(r)),this._blurMaterial=ly(r,e,t)}return s}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,s){const o=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ru),u.toneMapping=Wn,u.autoClear=!1;const m=new $f({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new xn(new br,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Ru),p=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(o.up.set(0,l[x],0),o.lookAt(c[x],0,0)):E===1?(o.up.set(0,0,l[x]),o.lookAt(0,c[x],0)):(o.up.set(0,l[x],0),o.lookAt(0,0,c[x]));const y=this._cubeSize;jr(s,E*y,x>2?y:0,y,y),u.setRenderTarget(s),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===As||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Iu[(s-1)%Iu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ci-1),p=r/g,h=isFinite(r)?1+Math.floor(u*p):Ci;h>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ci}`);const x=[];let E=0;for(let R=0;R<Ci;++R){const M=R/p,C=Math.exp(-M*M/2);x.push(C),R===0?E+=C:R<h&&(E+=2*C)}for(let R=0;R<x.length;R++)x[R]=x[R]/E;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=x,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const w=this._sizeLods[s],T=3*w*(s>y-gs?s-y+gs:0),D=4*(this._cubeSize-w);jr(t,T,D,3*w,2*w),l.setRenderTarget(t),l.render(d,wa)}}function ay(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+Pu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-gs?l=Pu[a-n+gs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,p=3,h=2,x=1,E=new Float32Array(p*g*m),y=new Float32Array(h*g*m),w=new Float32Array(x*g*m);for(let D=0;D<m;D++){const R=D%3*2/3-1,M=D>2?0:-1,C=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];E.set(C,p*g*D),y.set(f,h*g*D);const z=[D,D,D,D,D,D];w.set(z,x*g*D)}const T=new Mn;T.setAttribute("position",new Dn(E,p)),T.setAttribute("uv",new Dn(y,h)),T.setAttribute("faceIndex",new Dn(w,x)),e.push(T),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ly(n,e,t){const i=new Float32Array(Ci),s=new H(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Nu(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ou(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===el||l===tl,u=l===As||l===Ts;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Fu(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Fu(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function uy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dy(n,e,t,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let h=0,x=p.length;h<x;h++)e.update(p[h],34962)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let y=0,w=E.length;y<w;y+=3){const T=E[y+0],D=E[y+1],R=E[y+2];f.push(T,D,D,R,R,T)}}else{const E=g.array;p=g.version;for(let y=0,w=E.length/3-1;y<w;y+=3){const T=y+0,D=y+1,R=y+2;f.push(T,D,D,R,R,T)}}const h=new(Vf(f)?Yf:Xf)(f,1);h.version=p;const x=r.get(d);x&&e.remove(x),r.set(d,h)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function fy(n,e,t,i){const s=i.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(r,m,o,f*l),t.update(m,r,1)}function d(f,m,g){if(g===0)return;let p,h;if(s)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,o,f*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function hy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function py(n,e){return n[0]-e[0]}function my(n,e){return Math.abs(e[1])-Math.abs(n[1])}function gy(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let h=r.get(u);if(h===void 0||h.count!==p){let Z=function(){k.dispose(),r.delete(u),u.removeEventListener("dispose",Z)};h!==void 0&&h.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),w===!0&&(C=2),T===!0&&(C=3);let z=u.attributes.position.count*C,te=1;z>e.maxTextureSize&&(te=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const G=new Float32Array(z*te*4*p),k=new jf(G,z,te,p);k.type=Ri,k.needsUpdate=!0;const B=C*4;for(let ie=0;ie<p;ie++){const re=D[ie],X=R[ie],fe=M[ie],ue=z*te*4*ie;for(let Le=0;Le<re.count;Le++){const j=Le*B;y===!0&&(a.fromBufferAttribute(re,Le),G[ue+j+0]=a.x,G[ue+j+1]=a.y,G[ue+j+2]=a.z,G[ue+j+3]=0),w===!0&&(a.fromBufferAttribute(X,Le),G[ue+j+4]=a.x,G[ue+j+5]=a.y,G[ue+j+6]=a.z,G[ue+j+7]=0),T===!0&&(a.fromBufferAttribute(fe,Le),G[ue+j+8]=a.x,G[ue+j+9]=a.y,G[ue+j+10]=a.z,G[ue+j+11]=fe.itemSize===4?a.w:1)}}h={count:p,texture:k,size:new Ge(z,te)},r.set(u,h),u.addEventListener("dispose",Z)}let x=0;for(let y=0;y<m.length;y++)x+=m[y];const E=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let w=0;w<g;w++)p[w]=[w,0];i[u.id]=p}for(let w=0;w<g;w++){const T=p[w];T[0]=w,T[1]=m[w]}p.sort(my);for(let w=0;w<8;w++)w<g&&p[w][1]?(o[w][0]=p[w][0],o[w][1]=p[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(py);const h=u.morphAttributes.position,x=u.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const T=o[w],D=T[0],R=T[1];D!==Number.MAX_SAFE_INTEGER&&R?(h&&u.getAttribute("morphTarget"+w)!==h[D]&&u.setAttribute("morphTarget"+w,h[D]),x&&u.getAttribute("morphNormal"+w)!==x[D]&&u.setAttribute("morphNormal"+w,x[D]),s[w]=R,E+=R):(h&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),x&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const y=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function _y(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const th=new Kt,nh=new jf,ih=new i0,sh=new Jf,zu=[],Bu=[],ku=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function Us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uo(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),yt(t,i)}}function wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),yt(t,i)}}function Sy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),yt(t,i)}}function Ey(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Cy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Iy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||th,s)}function Fy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ih,s)}function Uy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sh,s)}function Ny(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nh,s)}function Oy(n){switch(n){case 5126:return xy;case 35664:return vy;case 35665:return by;case 35666:return yy;case 35674:return My;case 35675:return wy;case 35676:return Sy;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return Ty;case 35669:case 35673:return Ly;case 5125:return Cy;case 36294:return Dy;case 36295:return Py;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function zy(n,e){n.uniform1fv(this.addr,e)}function By(n,e){const t=Us(e,this.size,2);n.uniform2fv(this.addr,t)}function ky(n,e){const t=Us(e,this.size,3);n.uniform3fv(this.addr,t)}function Vy(n,e){const t=Us(e,this.size,4);n.uniform4fv(this.addr,t)}function Hy(n,e){const t=Us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gy(n,e){const t=Us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wy(n,e){const t=Us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jy(n,e){n.uniform1iv(this.addr,e)}function qy(n,e){n.uniform2iv(this.addr,e)}function $y(n,e){n.uniform3iv(this.addr,e)}function Xy(n,e){n.uniform4iv(this.addr,e)}function Yy(n,e){n.uniform1uiv(this.addr,e)}function Zy(n,e){n.uniform2uiv(this.addr,e)}function Ky(n,e){n.uniform3uiv(this.addr,e)}function Jy(n,e){n.uniform4uiv(this.addr,e)}function Qy(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||th,r[a])}function e1(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ih,r[a])}function t1(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sh,r[a])}function n1(n,e,t){const i=this.cache,s=e.length,r=Uo(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nh,r[a])}function i1(n){switch(n){case 5126:return zy;case 35664:return By;case 35665:return ky;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return jy;case 35667:case 35671:return qy;case 35668:case 35672:return $y;case 35669:case 35673:return Xy;case 5125:return Yy;case 36294:return Zy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}class s1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Oy(t.type)}}class r1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=i1(t.type)}}class o1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function a1(n,e,t){const i=n.name,s=i.length;for(Ea.lastIndex=0;;){const r=Ea.exec(i),a=Ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gu(t,c===void 0?new s1(o,n,e):new r1(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new o1(o),Gu(t,d)),t=d}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);a1(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let l1=0;function c1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function u1(n){switch(n){case ki:return["Linear","( value )"];case ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function ju(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+c1(n.getShaderSource(e),a)}else return s}function d1(n,e){const t=u1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function f1(n,e){let t;switch(e){case Dx:t="Linear";break;case Px:t="Reinhard";break;case Rx:t="OptimizedCineon";break;case Ix:t="ACESFilmic";break;case Fx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h1(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function p1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m1(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ys(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(g1,_1)}function _1(n,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ol(t)}const x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(x1,v1)}function v1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xs&&(e="SHADOWMAP_TYPE_VSM"),e}function y1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Ts:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function w1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Lx:e="ENVMAP_BLENDING_MIX";break;case Cx:e="ENVMAP_BLENDING_ADD";break}return e}function S1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function E1(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=b1(t),c=y1(t),u=M1(t),d=w1(t),f=S1(t),m=t.isWebGL2?"":h1(t),g=p1(r),p=s.createProgram();let h,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(Ys).join(`
`),h.length>0&&(h+=`
`),x=[m,g].filter(Ys).join(`
`),x.length>0&&(x+=`
`)):(h=[Yu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),x=[m,Yu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?We.tonemapping_pars_fragment:"",t.toneMapping!==Wn?f1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,d1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=ol(a),a=qu(a,t),a=$u(a,t),o=ol(o),o=qu(o,t),o=$u(o,t),a=Xu(a),o=Xu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=E+h+a,w=E+x+o,T=Wu(s,35633,y),D=Wu(s,35632,w);if(s.attachShader(p,T),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),n.debug.checkShaderErrors){const C=s.getProgramInfoLog(p).trim(),z=s.getShaderInfoLog(T).trim(),te=s.getShaderInfoLog(D).trim();let G=!0,k=!0;if(s.getProgramParameter(p,35714)===!1){G=!1;const B=ju(s,T,"vertex"),Z=ju(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+B+`
`+Z)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||te==="")&&(k=!1);k&&(this.diagnostics={runnable:G,programLog:C,vertexShader:{log:z,prefix:h},fragmentShader:{log:te,prefix:x}})}s.deleteShader(T),s.deleteShader(D);let R;this.getUniforms=function(){return R===void 0&&(R=new so(s,p)),R};let M;return this.getAttributes=function(){return M===void 0&&(M=m1(s,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=l1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=D,this}let A1=0;class T1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new L1(e),t.set(e,i)),i}}class L1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function C1(n,e,t,i,s,r,a){const o=new qf,l=new T1,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,C,z,te,G){const k=te.fog,B=G.geometry,Z=M.isMeshStandardMaterial?te.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),re=!!ie&&ie.mapping===Io?ie.image.height:null,X=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const fe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=fe!==void 0?fe.length:0;let Le=0;B.morphAttributes.position!==void 0&&(Le=1),B.morphAttributes.normal!==void 0&&(Le=2),B.morphAttributes.color!==void 0&&(Le=3);let j,ae,be,N;if(X){const Ae=Ln[X];j=Ae.vertexShader,ae=Ae.fragmentShader}else j=M.vertexShader,ae=M.fragmentShader,l.update(M),be=l.getVertexShaderID(M),N=l.getFragmentShaderID(M);const I=n.getRenderTarget(),K=M.alphaTest>0,oe=M.clearcoat>0,xe=M.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:M.type,vertexShader:j,fragmentShader:ae,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:f,outputEncoding:I===null?n.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:ki,map:!!M.map,matcap:!!M.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:re,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Qx,tangentSpaceNormalMap:M.normalMapType===Nl,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ct,clearcoat:oe,clearcoatMap:oe&&!!M.clearcoatMap,clearcoatRoughnessMap:oe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!M.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!M.iridescenceMap,iridescenceThicknessMap:xe&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===bs,alphaMap:!!M.alphaMap,alphaTest:K,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!B.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Wn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===oi,flipSided:M.side===Zt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)C.push(z),C.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(x(C,M),E(C,M),C.push(n.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function x(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function E(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),M.push(o.mask)}function y(M){const C=g[M.type];let z;if(C){const te=Ln[C];z=m0.clone(te.uniforms)}else z=M.uniforms;return z}function w(M,C){let z;for(let te=0,G=c.length;te<G;te++){const k=c[te];if(k.cacheKey===C){z=k,++z.usedTimes;break}}return z===void 0&&(z=new E1(n,C,M,r),c.push(z)),z}function T(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function D(M){l.remove(M)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:R}}function D1(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function P1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ku(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,m,g,p,h){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:h},n[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=p,x.group=h),e++,x}function o(d,f,m,g,p,h){const x=a(d,f,m,g,p,h);m.transmission>0?i.push(x):m.transparent===!0?s.push(x):t.push(x)}function l(d,f,m,g,p,h){const x=a(d,f,m,g,p,h);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function c(d,f){t.length>1&&t.sort(d||P1),i.length>1&&i.sort(f||Zu),s.length>1&&s.sort(f||Zu)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function R1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ku,n.set(i,[a])):s>=r.length?(a=new Ku,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function I1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function F1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U1=0;function N1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O1(n,e){const t=new I1,i=F1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new H);const r=new H,a=new pt,o=new pt;function l(u,d){let f=0,m=0,g=0;for(let te=0;te<9;te++)s.probe[te].set(0,0,0);let p=0,h=0,x=0,E=0,y=0,w=0,T=0,D=0,R=0,M=0;u.sort(N1);const C=d!==!0?Math.PI:1;for(let te=0,G=u.length;te<G;te++){const k=u[te],B=k.color,Z=k.intensity,ie=k.distance,re=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=B.r*Z*C,m+=B.g*Z*C,g+=B.b*Z*C;else if(k.isLightProbe)for(let X=0;X<9;X++)s.probe[X].addScaledVector(k.sh.coefficients[X],Z);else if(k.isDirectionalLight){const X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const fe=k.shadow,ue=i.get(k);ue.shadowBias=fe.bias,ue.shadowNormalBias=fe.normalBias,ue.shadowRadius=fe.radius,ue.shadowMapSize=fe.mapSize,s.directionalShadow[p]=ue,s.directionalShadowMap[p]=re,s.directionalShadowMatrix[p]=k.shadow.matrix,w++}s.directional[p]=X,p++}else if(k.isSpotLight){const X=t.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(B).multiplyScalar(Z*C),X.distance=ie,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,s.spot[x]=X;const fe=k.shadow;if(k.map&&(s.spotLightMap[R]=k.map,R++,fe.updateMatrices(k),k.castShadow&&M++),s.spotLightMatrix[x]=fe.matrix,k.castShadow){const ue=i.get(k);ue.shadowBias=fe.bias,ue.shadowNormalBias=fe.normalBias,ue.shadowRadius=fe.radius,ue.shadowMapSize=fe.mapSize,s.spotShadow[x]=ue,s.spotShadowMap[x]=re,D++}x++}else if(k.isRectAreaLight){const X=t.get(k);X.color.copy(B).multiplyScalar(Z),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),s.rectArea[E]=X,E++}else if(k.isPointLight){const X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*C),X.distance=k.distance,X.decay=k.decay,k.castShadow){const fe=k.shadow,ue=i.get(k);ue.shadowBias=fe.bias,ue.shadowNormalBias=fe.normalBias,ue.shadowRadius=fe.radius,ue.shadowMapSize=fe.mapSize,ue.shadowCameraNear=fe.camera.near,ue.shadowCameraFar=fe.camera.far,s.pointShadow[h]=ue,s.pointShadowMap[h]=re,s.pointShadowMatrix[h]=k.shadow.matrix,T++}s.point[h]=X,h++}else if(k.isHemisphereLight){const X=t.get(k);X.skyColor.copy(k.color).multiplyScalar(Z*C),X.groundColor.copy(k.groundColor).multiplyScalar(Z*C),s.hemi[y]=X,y++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const z=s.hash;(z.directionalLength!==p||z.pointLength!==h||z.spotLength!==x||z.rectAreaLength!==E||z.hemiLength!==y||z.numDirectionalShadows!==w||z.numPointShadows!==T||z.numSpotShadows!==D||z.numSpotMaps!==R)&&(s.directional.length=p,s.spot.length=x,s.rectArea.length=E,s.point.length=h,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=D+R-M,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=M,z.directionalLength=p,z.pointLength=h,z.spotLength=x,z.rectAreaLength=E,z.hemiLength=y,z.numDirectionalShadows=w,z.numPointShadows=T,z.numSpotShadows=D,z.numSpotMaps=R,s.version=U1++)}function c(u,d){let f=0,m=0,g=0,p=0,h=0;const x=d.matrixWorldInverse;for(let E=0,y=u.length;E<y;E++){const w=u[E];if(w.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),f++}else if(w.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),g++}else if(w.isRectAreaLight){const T=s.rectArea[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),o.identity(),a.copy(w.matrixWorld),a.premultiply(x),o.extractRotation(a),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){const T=s.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const T=s.hemi[h];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(x),h++}}}return{setup:l,setupView:c,state:s}}function Ju(n,e){const t=new O1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function z1(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ju(n,e),t.set(r,[l])):a>=o.length?(l=new Ju(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class B1 extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k1 extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G1(n,e,t){let i=new zl;const s=new Ge,r=new Ge,a=new At,o=new B1({depthPacking:Jx}),l=new k1,c={},u=t.maxTextureSize,d={[fi]:Zt,[Zt]:fi,[oi]:oi},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:V1,fragmentShader:H1}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new xn(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf,this.render=function(w,T,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const R=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ui),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let te=0,G=w.length;te<G;te++){const k=w[te],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Z=B.getFrameExtents();if(s.multiply(Z),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y)),B.map===null){const re=this.type!==Xs?{minFilter:Ot,magFilter:Ot}:{};B.map=new Vi(s.x,s.y,re),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ie=B.getViewportCount();for(let re=0;re<ie;re++){const X=B.getViewport(re);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),z.viewport(a),B.updateMatrices(k,re),i=B.getFrustum(),y(T,D,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Xs&&x(B,D),B.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(R,M,C)};function x(w,T){const D=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,D,f,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,D,m,p,null)}function E(w,T,D,R,M,C){let z=null;const te=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(te!==void 0)z=te;else if(z=D.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=z.uuid,k=T.uuid;let B=c[G];B===void 0&&(B={},c[G]=B);let Z=B[k];Z===void 0&&(Z=z.clone(),B[k]=Z),z=Z}return z.visible=T.visible,z.wireframe=T.wireframe,C===Xs?z.side=T.shadowSide!==null?T.shadowSide:T.side:z.side=T.shadowSide!==null?T.shadowSide:d[T.side],z.alphaMap=T.alphaMap,z.alphaTest=T.alphaTest,z.map=T.map,z.clipShadows=T.clipShadows,z.clippingPlanes=T.clippingPlanes,z.clipIntersection=T.clipIntersection,z.displacementMap=T.displacementMap,z.displacementScale=T.displacementScale,z.displacementBias=T.displacementBias,z.wireframeLinewidth=T.wireframeLinewidth,z.linewidth=T.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(D.matrixWorld),z.nearDistance=R,z.farDistance=M),z}function y(w,T,D,R,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Xs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const te=e.update(w),G=w.material;if(Array.isArray(G)){const k=te.groups;for(let B=0,Z=k.length;B<Z;B++){const ie=k[B],re=G[ie.materialIndex];if(re&&re.visible){const X=E(w,re,R,D.near,D.far,M);n.renderBufferDirect(D,null,te,X,w,ie)}}}else if(G.visible){const k=E(w,G,R,D.near,D.far,M);n.renderBufferDirect(D,null,te,k,w,null)}}const z=w.children;for(let te=0,G=z.length;te<G;te++)y(z[te],T,D,R,M)}}function W1(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const Q=new At;let ge=null;const Te=new At(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!O&&(n.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){O=Pe},setClear:function(Pe,it,Mt,Pt,pi){pi===!0&&(Pe*=Pt,it*=Pt,Mt*=Pt),Q.set(Pe,it,Mt,Pt),Te.equals(Q)===!1&&(n.clearColor(Pe,it,Mt,Pt),Te.copy(Q))},reset:function(){O=!1,ge=null,Te.set(-1,0,0,0)}}}function r(){let O=!1,Q=null,ge=null,Te=null;return{setTest:function(Pe){Pe?K(2929):oe(2929)},setMask:function(Pe){Q!==Pe&&!O&&(n.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case yx:n.depthFunc(512);break;case Mx:n.depthFunc(519);break;case wx:n.depthFunc(513);break;case Qa:n.depthFunc(515);break;case Sx:n.depthFunc(514);break;case Ex:n.depthFunc(518);break;case Ax:n.depthFunc(516);break;case Tx:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){Te!==Pe&&(n.clearDepth(Pe),Te=Pe)},reset:function(){O=!1,Q=null,ge=null,Te=null}}}function a(){let O=!1,Q=null,ge=null,Te=null,Pe=null,it=null,Mt=null,Pt=null,pi=null;return{setTest:function(ut){O||(ut?K(2960):oe(2960))},setMask:function(ut){Q!==ut&&!O&&(n.stencilMask(ut),Q=ut)},setFunc:function(ut,In,en){(ge!==ut||Te!==In||Pe!==en)&&(n.stencilFunc(ut,In,en),ge=ut,Te=In,Pe=en)},setOp:function(ut,In,en){(it!==ut||Mt!==In||Pt!==en)&&(n.stencilOp(ut,In,en),it=ut,Mt=In,Pt=en)},setLocked:function(ut){O=ut},setClear:function(ut){pi!==ut&&(n.clearStencil(ut),pi=ut)},reset:function(){O=!1,Q=null,ge=null,Te=null,Pe=null,it=null,Mt=null,Pt=null,pi=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,p=[],h=null,x=!1,E=null,y=null,w=null,T=null,D=null,R=null,M=null,C=!1,z=null,te=null,G=null,k=null,B=null;const Z=n.getParameter(35661);let ie=!1,re=0;const X=n.getParameter(7938);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),ie=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ie=re>=2);let fe=null,ue={};const Le=n.getParameter(3088),j=n.getParameter(2978),ae=new At().fromArray(Le),be=new At().fromArray(j);function N(O,Q,ge){const Te=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(O,Pe),n.texParameteri(O,10241,9728),n.texParameteri(O,10240,9728);for(let it=0;it<ge;it++)n.texImage2D(Q+it,0,6408,1,1,0,6408,5121,Te);return Pe}const I={};I[3553]=N(3553,3553,1),I[34067]=N(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(Qa),J(!1),ne(Vc),K(2884),P(ui);function K(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function oe(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function xe(O,Q){return m[O]!==Q?(n.bindFramebuffer(O,Q),m[O]=Q,i&&(O===36009&&(m[36160]=Q),O===36160&&(m[36009]=Q)),!0):!1}function pe(O,Q){let ge=p,Te=!1;if(O)if(ge=g.get(Q),ge===void 0&&(ge=[],g.set(Q,ge)),O.isWebGLMultipleRenderTargets){const Pe=O.texture;if(ge.length!==Pe.length||ge[0]!==36064){for(let it=0,Mt=Pe.length;it<Mt;it++)ge[it]=36064+it;ge.length=Pe.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ae(O){return h!==O?(n.useProgram(O),h=O,!0):!1}const ve={[ms]:32774,[ux]:32778,[dx]:32779};if(i)ve[jc]=32775,ve[qc]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(ve[jc]=O.MIN_EXT,ve[qc]=O.MAX_EXT)}const S={[fx]:0,[hx]:1,[px]:768,[Of]:770,[bx]:776,[xx]:774,[gx]:772,[mx]:769,[zf]:771,[vx]:775,[_x]:773};function P(O,Q,ge,Te,Pe,it,Mt,Pt){if(O===ui){x===!0&&(oe(3042),x=!1);return}if(x===!1&&(K(3042),x=!0),O!==cx){if(O!==E||Pt!==C){if((y!==ms||D!==ms)&&(n.blendEquation(32774),y=ms,D=ms),Pt)switch(O){case bs:n.blendFuncSeparate(1,771,1,771);break;case Hc:n.blendFunc(1,1);break;case Gc:n.blendFuncSeparate(0,769,0,1);break;case Wc:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case bs:n.blendFuncSeparate(770,771,1,771);break;case Hc:n.blendFunc(770,1);break;case Gc:n.blendFuncSeparate(0,769,0,1);break;case Wc:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,T=null,R=null,M=null,E=O,C=Pt}return}Pe=Pe||Q,it=it||ge,Mt=Mt||Te,(Q!==y||Pe!==D)&&(n.blendEquationSeparate(ve[Q],ve[Pe]),y=Q,D=Pe),(ge!==w||Te!==T||it!==R||Mt!==M)&&(n.blendFuncSeparate(S[ge],S[Te],S[it],S[Mt]),w=ge,T=Te,R=it,M=Mt),E=O,C=!1}function W(O,Q){O.side===oi?oe(2884):K(2884);let ge=O.side===Zt;Q&&(ge=!ge),J(ge),O.blending===bs&&O.transparent===!1?P(ui):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const Te=O.stencilWrite;c.setTest(Te),Te&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),de(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(32926):oe(32926)}function J(O){z!==O&&(O?n.frontFace(2304):n.frontFace(2305),z=O)}function ne(O){O!==ox?(K(2884),O!==te&&(O===Vc?n.cullFace(1029):O===ax?n.cullFace(1028):n.cullFace(1032))):oe(2884),te=O}function le(O){O!==G&&(ie&&n.lineWidth(O),G=O)}function de(O,Q,ge){O?(K(32823),(k!==Q||B!==ge)&&(n.polygonOffset(Q,ge),k=Q,B=ge)):oe(32823)}function he(O){O?K(3089):oe(3089)}function me(O){O===void 0&&(O=33984+Z-1),fe!==O&&(n.activeTexture(O),fe=O)}function v(O,Q,ge){ge===void 0&&(fe===null?ge=33984+Z-1:ge=fe);let Te=ue[ge];Te===void 0&&(Te={type:void 0,texture:void 0},ue[ge]=Te),(Te.type!==O||Te.texture!==Q)&&(fe!==ge&&(n.activeTexture(ge),fe=ge),n.bindTexture(O,Q||I[O]),Te.type=O,Te.texture=Q)}function _(){const O=ue[fe];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){ae.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function De(O){be.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),be.copy(O))}function Ue(O,Q){let ge=d.get(Q);ge===void 0&&(ge=new WeakMap,d.set(Q,ge));let Te=ge.get(O);Te===void 0&&(Te=n.getUniformBlockIndex(Q,O.name),ge.set(O,Te))}function Ne(O,Q){const Te=d.get(Q).get(O);u.get(Q)!==Te&&(n.uniformBlockBinding(Q,Te,O.__bindingPointIndex),u.set(Q,Te))}function Qe(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},fe=null,ue={},m={},g=new WeakMap,p=[],h=null,x=!1,E=null,y=null,w=null,T=null,D=null,R=null,M=null,C=!1,z=null,te=null,G=null,k=null,B=null,ae.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:K,disable:oe,bindFramebuffer:xe,drawBuffers:pe,useProgram:Ae,setBlending:P,setMaterial:W,setFlipSided:J,setCullFace:ne,setLineWidth:le,setPolygonOffset:de,setScissorTest:he,activeTexture:me,bindTexture:v,unbindTexture:_,compressedTexImage2D:U,compressedTexImage3D:$,texImage2D:Se,texImage3D:Ee,updateUBOMapping:Ue,uniformBlockBinding:Ne,texStorage2D:F,texStorage3D:ye,texSubImage2D:Y,texSubImage3D:ce,compressedTexSubImage2D:we,compressedTexSubImage3D:L,scissor:Ce,viewport:De,reset:Qe}}function j1(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(v,_){return x?new OffscreenCanvas(v,_):mo("canvas")}function y(v,_,U,$){let Y=1;if((v.width>$||v.height>$)&&(Y=$/Math.max(v.width,v.height)),Y<1||_===!0)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap){const ce=_?rl:Math.floor,we=ce(Y*v.width),L=ce(Y*v.height);p===void 0&&(p=E(we,L));const F=U?E(we,L):p;return F.width=we,F.height=L,F.getContext("2d").drawImage(v,0,0,we,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+we+"x"+L+")."),F}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function w(v){return bu(v.width)&&bu(v.height)}function T(v){return o?!1:v.wrapS!==gn||v.wrapT!==gn||v.minFilter!==Ot&&v.minFilter!==on}function D(v,_){return v.generateMipmaps&&_&&v.minFilter!==Ot&&v.minFilter!==on}function R(v){n.generateMipmap(v)}function M(v,_,U,$,Y=!1){if(o===!1)return _;if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ce=_;return _===6403&&(U===5126&&(ce=33326),U===5131&&(ce=33325),U===5121&&(ce=33321)),_===33319&&(U===5126&&(ce=33328),U===5131&&(ce=33327),U===5121&&(ce=33323)),_===6408&&(U===5126&&(ce=34836),U===5131&&(ce=34842),U===5121&&(ce=$===ct&&Y===!1?35907:32856),U===32819&&(ce=32854),U===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function C(v,_,U){return D(v,U)===!0||v.isFramebufferTexture&&v.minFilter!==Ot&&v.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function z(v){return v===Ot||v===$c||v===Xo?9728:9729}function te(v){const _=v.target;_.removeEventListener("dispose",te),k(_),_.isVideoTexture&&g.delete(_)}function G(v){const _=v.target;_.removeEventListener("dispose",G),Z(_)}function k(v){const _=i.get(v);if(_.__webglInit===void 0)return;const U=v.source,$=h.get(U);if($){const Y=$[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&B(v),Object.keys($).length===0&&h.delete(U)}i.remove(v)}function B(v){const _=i.get(v);n.deleteTexture(_.__webglTexture);const U=v.source,$=h.get(U);delete $[_.__cacheKey],a.memory.textures--}function Z(v){const _=v.texture,U=i.get(v),$=i.get(_);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(U.__webglFramebuffer[Y]),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Y=0;Y<U.__webglColorRenderbuffer.length;Y++)U.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Y]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let Y=0,ce=_.length;Y<ce;Y++){const we=i.get(_[Y]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(_[Y])}i.remove(_),i.remove(v)}let ie=0;function re(){ie=0}function X(){const v=ie;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),ie+=1,v}function fe(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.encoding),_.join()}function ue(v,_){const U=i.get(v);if(v.isVideoTexture&&he(v),v.isRenderTargetTexture===!1&&v.version>0&&U.__version!==v.version){const $=v.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,v,_);return}}t.bindTexture(3553,U.__webglTexture,33984+_)}function Le(v,_){const U=i.get(v);if(v.version>0&&U.__version!==v.version){oe(U,v,_);return}t.bindTexture(35866,U.__webglTexture,33984+_)}function j(v,_){const U=i.get(v);if(v.version>0&&U.__version!==v.version){oe(U,v,_);return}t.bindTexture(32879,U.__webglTexture,33984+_)}function ae(v,_){const U=i.get(v);if(v.version>0&&U.__version!==v.version){xe(U,v,_);return}t.bindTexture(34067,U.__webglTexture,33984+_)}const be={[nl]:10497,[gn]:33071,[il]:33648},N={[Ot]:9728,[$c]:9984,[Xo]:9986,[on]:9729,[Ux]:9985,[ur]:9987};function I(v,_,U){if(U?(n.texParameteri(v,10242,be[_.wrapS]),n.texParameteri(v,10243,be[_.wrapT]),(v===32879||v===35866)&&n.texParameteri(v,32882,be[_.wrapR]),n.texParameteri(v,10240,N[_.magFilter]),n.texParameteri(v,10241,N[_.minFilter])):(n.texParameteri(v,10242,33071),n.texParameteri(v,10243,33071),(v===32879||v===35866)&&n.texParameteri(v,32882,33071),(_.wrapS!==gn||_.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(v,10240,z(_.magFilter)),n.texParameteri(v,10241,z(_.minFilter)),_.minFilter!==Ot&&_.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ot||_.minFilter!==Xo&&_.minFilter!==ur||_.type===Ri&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(v,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function K(v,_){let U=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",te));const $=_.source;let Y=h.get($);Y===void 0&&(Y={},h.set($,Y));const ce=fe(_);if(ce!==v.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Y[ce].usedTimes++;const we=Y[v.__cacheKey];we!==void 0&&(Y[v.__cacheKey].usedTimes--,we.usedTimes===0&&B(_)),v.__cacheKey=ce,v.__webglTexture=Y[ce].texture}return U}function oe(v,_,U){let $=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=35866),_.isData3DTexture&&($=32879);const Y=K(v,_),ce=_.source;t.bindTexture($,v.__webglTexture,33984+U);const we=i.get(ce);if(ce.version!==we.__version||Y===!0){t.activeTexture(33984+U),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const L=T(_)&&w(_.image)===!1;let F=y(_.image,L,!1,u);F=me(_,F);const ye=w(F)||o,Se=r.convert(_.format,_.encoding);let Ee=r.convert(_.type),Ce=M(_.internalFormat,Se,Ee,_.encoding,_.isVideoTexture);I($,_,ye);let De;const Ue=_.mipmaps,Ne=o&&_.isVideoTexture!==!0,Qe=we.__version===void 0||Y===!0,O=C(_,F,ye);if(_.isDepthTexture)Ce=6402,o?_.type===Ri?Ce=36012:_.type===Pi?Ce=33190:_.type===ys?Ce=35056:Ce=33189:_.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ni&&Ce===6402&&_.type!==kf&&_.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Pi,Ee=r.convert(_.type)),_.format===Ls&&Ce===6402&&(Ce=34041,_.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ys,Ee=r.convert(_.type))),Qe&&(Ne?t.texStorage2D(3553,1,Ce,F.width,F.height):t.texImage2D(3553,0,Ce,F.width,F.height,0,Se,Ee,null));else if(_.isDataTexture)if(Ue.length>0&&ye){Ne&&Qe&&t.texStorage2D(3553,O,Ce,Ue[0].width,Ue[0].height);for(let Q=0,ge=Ue.length;Q<ge;Q++)De=Ue[Q],Ne?t.texSubImage2D(3553,Q,0,0,De.width,De.height,Se,Ee,De.data):t.texImage2D(3553,Q,Ce,De.width,De.height,0,Se,Ee,De.data);_.generateMipmaps=!1}else Ne?(Qe&&t.texStorage2D(3553,O,Ce,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,Se,Ee,F.data)):t.texImage2D(3553,0,Ce,F.width,F.height,0,Se,Ee,F.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Qe&&t.texStorage3D(35866,O,Ce,Ue[0].width,Ue[0].height,F.depth);for(let Q=0,ge=Ue.length;Q<ge;Q++)De=Ue[Q],_.format!==_n?Se!==null?Ne?t.compressedTexSubImage3D(35866,Q,0,0,0,De.width,De.height,F.depth,Se,De.data,0,0):t.compressedTexImage3D(35866,Q,Ce,De.width,De.height,F.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,Q,0,0,0,De.width,De.height,F.depth,Se,Ee,De.data):t.texImage3D(35866,Q,Ce,De.width,De.height,F.depth,0,Se,Ee,De.data)}else{Ne&&Qe&&t.texStorage2D(3553,O,Ce,Ue[0].width,Ue[0].height);for(let Q=0,ge=Ue.length;Q<ge;Q++)De=Ue[Q],_.format!==_n?Se!==null?Ne?t.compressedTexSubImage2D(3553,Q,0,0,De.width,De.height,Se,De.data):t.compressedTexImage2D(3553,Q,Ce,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,Q,0,0,De.width,De.height,Se,Ee,De.data):t.texImage2D(3553,Q,Ce,De.width,De.height,0,Se,Ee,De.data)}else if(_.isDataArrayTexture)Ne?(Qe&&t.texStorage3D(35866,O,Ce,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,Se,Ee,F.data)):t.texImage3D(35866,0,Ce,F.width,F.height,F.depth,0,Se,Ee,F.data);else if(_.isData3DTexture)Ne?(Qe&&t.texStorage3D(32879,O,Ce,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,Se,Ee,F.data)):t.texImage3D(32879,0,Ce,F.width,F.height,F.depth,0,Se,Ee,F.data);else if(_.isFramebufferTexture){if(Qe)if(Ne)t.texStorage2D(3553,O,Ce,F.width,F.height);else{let Q=F.width,ge=F.height;for(let Te=0;Te<O;Te++)t.texImage2D(3553,Te,Ce,Q,ge,0,Se,Ee,null),Q>>=1,ge>>=1}}else if(Ue.length>0&&ye){Ne&&Qe&&t.texStorage2D(3553,O,Ce,Ue[0].width,Ue[0].height);for(let Q=0,ge=Ue.length;Q<ge;Q++)De=Ue[Q],Ne?t.texSubImage2D(3553,Q,0,0,Se,Ee,De):t.texImage2D(3553,Q,Ce,Se,Ee,De);_.generateMipmaps=!1}else Ne?(Qe&&t.texStorage2D(3553,O,Ce,F.width,F.height),t.texSubImage2D(3553,0,0,0,Se,Ee,F)):t.texImage2D(3553,0,Ce,Se,Ee,F);D(_,ye)&&R($),we.__version=ce.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function xe(v,_,U){if(_.image.length!==6)return;const $=K(v,_),Y=_.source;t.bindTexture(34067,v.__webglTexture,33984+U);const ce=i.get(Y);if(Y.version!==ce.__version||$===!0){t.activeTexture(33984+U),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,F=[];for(let Q=0;Q<6;Q++)!we&&!L?F[Q]=y(_.image[Q],!1,!0,c):F[Q]=L?_.image[Q].image:_.image[Q],F[Q]=me(_,F[Q]);const ye=F[0],Se=w(ye)||o,Ee=r.convert(_.format,_.encoding),Ce=r.convert(_.type),De=M(_.internalFormat,Ee,Ce,_.encoding),Ue=o&&_.isVideoTexture!==!0,Ne=ce.__version===void 0||$===!0;let Qe=C(_,ye,Se);I(34067,_,Se);let O;if(we){Ue&&Ne&&t.texStorage2D(34067,Qe,De,ye.width,ye.height);for(let Q=0;Q<6;Q++){O=F[Q].mipmaps;for(let ge=0;ge<O.length;ge++){const Te=O[ge];_.format!==_n?Ee!==null?Ue?t.compressedTexSubImage2D(34069+Q,ge,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(34069+Q,ge,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+Q,ge,0,0,Te.width,Te.height,Ee,Ce,Te.data):t.texImage2D(34069+Q,ge,De,Te.width,Te.height,0,Ee,Ce,Te.data)}}}else{O=_.mipmaps,Ue&&Ne&&(O.length>0&&Qe++,t.texStorage2D(34067,Qe,De,F[0].width,F[0].height));for(let Q=0;Q<6;Q++)if(L){Ue?t.texSubImage2D(34069+Q,0,0,0,F[Q].width,F[Q].height,Ee,Ce,F[Q].data):t.texImage2D(34069+Q,0,De,F[Q].width,F[Q].height,0,Ee,Ce,F[Q].data);for(let ge=0;ge<O.length;ge++){const Pe=O[ge].image[Q].image;Ue?t.texSubImage2D(34069+Q,ge+1,0,0,Pe.width,Pe.height,Ee,Ce,Pe.data):t.texImage2D(34069+Q,ge+1,De,Pe.width,Pe.height,0,Ee,Ce,Pe.data)}}else{Ue?t.texSubImage2D(34069+Q,0,0,0,Ee,Ce,F[Q]):t.texImage2D(34069+Q,0,De,Ee,Ce,F[Q]);for(let ge=0;ge<O.length;ge++){const Te=O[ge];Ue?t.texSubImage2D(34069+Q,ge+1,0,0,Ee,Ce,Te.image[Q]):t.texImage2D(34069+Q,ge+1,De,Ee,Ce,Te.image[Q])}}}D(_,Se)&&R(34067),ce.__version=Y.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function pe(v,_,U,$,Y){const ce=r.convert(U.format,U.encoding),we=r.convert(U.type),L=M(U.internalFormat,ce,we,U.encoding);i.get(_).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,L,_.width,_.height,_.depth,0,ce,we,null):t.texImage2D(Y,0,L,_.width,_.height,0,ce,we,null)),t.bindFramebuffer(36160,v),de(_)?f.framebufferTexture2DMultisampleEXT(36160,$,Y,i.get(U).__webglTexture,0,le(_)):(Y===3553||Y>=34069&&Y<=34074)&&n.framebufferTexture2D(36160,$,Y,i.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ae(v,_,U){if(n.bindRenderbuffer(36161,v),_.depthBuffer&&!_.stencilBuffer){let $=33189;if(U||de(_)){const Y=_.depthTexture;Y&&Y.isDepthTexture&&(Y.type===Ri?$=36012:Y.type===Pi&&($=33190));const ce=le(_);de(_)?f.renderbufferStorageMultisampleEXT(36161,ce,$,_.width,_.height):n.renderbufferStorageMultisample(36161,ce,$,_.width,_.height)}else n.renderbufferStorage(36161,$,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,v)}else if(_.depthBuffer&&_.stencilBuffer){const $=le(_);U&&de(_)===!1?n.renderbufferStorageMultisample(36161,$,35056,_.width,_.height):de(_)?f.renderbufferStorageMultisampleEXT(36161,$,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,v)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Y=0;Y<$.length;Y++){const ce=$[Y],we=r.convert(ce.format,ce.encoding),L=r.convert(ce.type),F=M(ce.internalFormat,we,L,ce.encoding),ye=le(_);U&&de(_)===!1?n.renderbufferStorageMultisample(36161,ye,F,_.width,_.height):de(_)?f.renderbufferStorageMultisampleEXT(36161,ye,F,_.width,_.height):n.renderbufferStorage(36161,F,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function ve(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ue(_.depthTexture,0);const $=i.get(_.depthTexture).__webglTexture,Y=le(_);if(_.depthTexture.format===Ni)de(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Y):n.framebufferTexture2D(36160,36096,3553,$,0);else if(_.depthTexture.format===Ls)de(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Y):n.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function S(v){const _=i.get(v),U=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ve(_.__webglFramebuffer,v)}else if(U){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=n.createRenderbuffer(),Ae(_.__webglDepthbuffer[$],v,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ae(_.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function P(v,_,U){const $=i.get(v);_!==void 0&&pe($.__webglFramebuffer,v,v.texture,36064,3553),U!==void 0&&S(v)}function W(v){const _=v.texture,U=i.get(v),$=i.get(_);v.addEventListener("dispose",G),v.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,a.memory.textures++);const Y=v.isWebGLCubeRenderTarget===!0,ce=v.isWebGLMultipleRenderTargets===!0,we=w(v)||o;if(Y){U.__webglFramebuffer=[];for(let L=0;L<6;L++)U.__webglFramebuffer[L]=n.createFramebuffer()}else{if(U.__webglFramebuffer=n.createFramebuffer(),ce)if(s.drawBuffers){const L=v.texture;for(let F=0,ye=L.length;F<ye;F++){const Se=i.get(L[F]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&de(v)===!1){const L=ce?_:[_];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let F=0;F<L.length;F++){const ye=L[F];U.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(36161,U.__webglColorRenderbuffer[F]);const Se=r.convert(ye.format,ye.encoding),Ee=r.convert(ye.type),Ce=M(ye.internalFormat,Se,Ee,ye.encoding,v.isXRRenderTarget===!0),De=le(v);n.renderbufferStorageMultisample(36161,De,Ce,v.width,v.height),n.framebufferRenderbuffer(36160,36064+F,36161,U.__webglColorRenderbuffer[F])}n.bindRenderbuffer(36161,null),v.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(U.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,$.__webglTexture),I(34067,_,we);for(let L=0;L<6;L++)pe(U.__webglFramebuffer[L],v,_,36064,34069+L);D(_,we)&&R(34067),t.unbindTexture()}else if(ce){const L=v.texture;for(let F=0,ye=L.length;F<ye;F++){const Se=L[F],Ee=i.get(Se);t.bindTexture(3553,Ee.__webglTexture),I(3553,Se,we),pe(U.__webglFramebuffer,v,Se,36064+F,3553),D(Se,we)&&R(3553)}t.unbindTexture()}else{let L=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?L=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,$.__webglTexture),I(L,_,we),pe(U.__webglFramebuffer,v,_,36064,L),D(_,we)&&R(L),t.unbindTexture()}v.depthBuffer&&S(v)}function J(v){const _=w(v)||o,U=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0,Y=U.length;$<Y;$++){const ce=U[$];if(D(ce,_)){const we=v.isWebGLCubeRenderTarget?34067:3553,L=i.get(ce).__webglTexture;t.bindTexture(we,L),R(we),t.unbindTexture()}}}function ne(v){if(o&&v.samples>0&&de(v)===!1){const _=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],U=v.width,$=v.height;let Y=16384;const ce=[],we=v.stencilBuffer?33306:36096,L=i.get(v),F=v.isWebGLMultipleRenderTargets===!0;if(F)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){ce.push(36064+ye),v.depthBuffer&&ce.push(we);const Se=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Se===!1&&(v.depthBuffer&&(Y|=256),v.stencilBuffer&&(Y|=1024)),F&&n.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ye]),Se===!0&&(n.invalidateFramebuffer(36008,[we]),n.invalidateFramebuffer(36009,[we])),F){const Ee=i.get(_[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ee,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,Y,9728),m&&n.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,L.__webglColorRenderbuffer[ye]);const Se=i.get(_[ye]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,Se,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function le(v){return Math.min(d,v.samples)}function de(v){const _=i.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(v){const _=a.render.frame;g.get(v)!==_&&(g.set(v,_),v.update())}function me(v,_){const U=v.encoding,$=v.format,Y=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===sl||U!==ki&&(U===ct?o===!1?e.has("EXT_sRGB")===!0&&$===_n?(v.format=sl,v.minFilter=on,v.generateMipmaps=!1):_=Gf.sRGBToLinear(_):($!==_n||Y!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),_}this.allocateTextureUnit=X,this.resetTextureUnits=re,this.setTexture2D=ue,this.setTexture2DArray=Le,this.setTexture3D=j,this.setTextureCube=ae,this.rebindTextures=P,this.setupRenderTarget=W,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=de}function q1(n,e,t){const i=t.isWebGL2;function s(r,a=null){let o;if(r===Bi)return 5121;if(r===Bx)return 32819;if(r===kx)return 32820;if(r===Nx)return 5120;if(r===Ox)return 5122;if(r===kf)return 5123;if(r===zx)return 5124;if(r===Pi)return 5125;if(r===Ri)return 5126;if(r===dr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Vx)return 6406;if(r===_n)return 6408;if(r===Hx)return 6409;if(r===Gx)return 6410;if(r===Ni)return 6402;if(r===Ls)return 34041;if(r===sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Wx)return 6403;if(r===jx)return 36244;if(r===qx)return 33319;if(r===$x)return 33320;if(r===Xx)return 36249;if(r===Yo||r===Zo||r===Ko||r===Jo)if(a===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xc||r===Yc||r===Zc||r===Kc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jc||r===Qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jc)return a===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qc)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===du||r===fu||r===hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===eu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===iu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===su)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ru)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ou)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===au)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===du)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hu)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Qo)return a===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Zx||r===pu||r===mu||r===gu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Qo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ys?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class $1 extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zs extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X1={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i),x=this._getHandJoint(c,p);h!==null&&(x.matrix.fromArray(h.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=h.radius),x.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Y1 extends Kt{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ni&&(i=Pi),i===void 0&&u===Ls&&(i=ys),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class Z1 extends qi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const p=t.getContextAttributes();let h=null,x=null;const E=[],y=[],w=new Set,T=new Map,D=new an;D.layers.enable(1),D.viewport=new At;const R=new an;R.layers.enable(2),R.viewport=new At;const M=[D,R],C=new $1;C.layers.enable(1),C.layers.enable(2);let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=E[j];return ae===void 0&&(ae=new Aa,E[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=E[j];return ae===void 0&&(ae=new Aa,E[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=E[j];return ae===void 0&&(ae=new Aa,E[j]=ae),ae.getHandSpace()};function G(j){const ae=y.indexOf(j.inputSource);if(ae===-1)return;const be=E[ae];be!==void 0&&be.dispatchEvent({type:j.type,data:j.inputSource})}function k(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let j=0;j<E.length;j++){const ae=y[j];ae!==null&&(y[j]=null,E[j].disconnect(ae))}z=null,te=null,e.setRenderTarget(h),m=null,f=null,d=null,s=null,x=null,Le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:m}),x=new Vi(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Bi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ae=null,be=null,N=null;p.depth&&(N=p.stencil?35056:33190,ae=p.stencil?Ls:Ni,be=p.stencil?ys:Pi);const I={colorFormat:32856,depthFormat:N,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(I),s.updateRenderState({layers:[f]}),x=new Vi(f.textureWidth,f.textureHeight,{format:_n,type:Bi,depthTexture:new Y1(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const K=e.properties.get(x);K.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(j){for(let ae=0;ae<j.removed.length;ae++){const be=j.removed[ae],N=y.indexOf(be);N>=0&&(y[N]=null,E[N].disconnect(be))}for(let ae=0;ae<j.added.length;ae++){const be=j.added[ae];let N=y.indexOf(be);if(N===-1){for(let K=0;K<E.length;K++)if(K>=y.length){y.push(be),N=K;break}else if(y[K]===null){y[K]=be,N=K;break}if(N===-1)break}const I=E[N];I&&I.connect(be)}}const Z=new H,ie=new H;function re(j,ae,be){Z.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);const N=Z.distanceTo(ie),I=ae.projectionMatrix.elements,K=be.projectionMatrix.elements,oe=I[14]/(I[10]-1),xe=I[14]/(I[10]+1),pe=(I[9]+1)/I[5],Ae=(I[9]-1)/I[5],ve=(I[8]-1)/I[0],S=(K[8]+1)/K[0],P=oe*ve,W=oe*S,J=N/(-ve+S),ne=J*-ve;ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ne),j.translateZ(J),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const le=oe+J,de=xe+J,he=P-ne,me=W+(N-ne),v=pe*xe/de*le,_=Ae*xe/de*le;j.projectionMatrix.makePerspective(he,me,v,_,le,de)}function X(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;C.near=R.near=D.near=j.near,C.far=R.far=D.far=j.far,(z!==C.near||te!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,te=C.far);const ae=j.parent,be=C.cameras;X(C,ae);for(let I=0;I<be.length;I++)X(be[I],ae);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),j.matrix.copy(C.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);const N=j.children;for(let I=0,K=N.length;I<K;I++)N[I].updateMatrixWorld(!0);be.length===2?re(C,D,R):C.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.getPlanes=function(){return w};let fe=null;function ue(j,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const be=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let N=!1;be.length!==C.cameras.length&&(C.cameras.length=0,N=!0);for(let I=0;I<be.length;I++){const K=be[I];let oe=null;if(m!==null)oe=m.getViewport(K);else{const pe=d.getViewSubImage(f,K);oe=pe.viewport,I===0&&(e.setRenderTargetTextures(x,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(x))}let xe=M[I];xe===void 0&&(xe=new an,xe.layers.enable(I),xe.viewport=new At,M[I]=xe),xe.matrix.fromArray(K.transform.matrix),xe.projectionMatrix.fromArray(K.projectionMatrix),xe.viewport.set(oe.x,oe.y,oe.width,oe.height),I===0&&C.matrix.copy(xe.matrix),N===!0&&C.cameras.push(xe)}}for(let be=0;be<E.length;be++){const N=y[be],I=E[be];N!==null&&I!==void 0&&I.update(N,ae,c||a)}if(fe&&fe(j,ae),ae.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ae.detectedPlanes});let be=null;for(const N of w)ae.detectedPlanes.has(N)||(be===null&&(be=[]),be.push(N));if(be!==null)for(const N of be)w.delete(N),T.delete(N),i.dispatchEvent({type:"planeremoved",data:N});for(const N of ae.detectedPlanes)if(!w.has(N))w.add(N),T.set(N,ae.lastChangedTime),i.dispatchEvent({type:"planeadded",data:N});else{const I=T.get(N);N.lastChangedTime>I&&(T.set(N,N.lastChangedTime),i.dispatchEvent({type:"planechanged",data:N}))}}g=null}const Le=new Qf;Le.setAnimationLoop(ue),this.setAnimationLoop=function(j){fe=j},this.dispose=function(){}}}function K1(n,e){function t(p,h){h.color.getRGB(p.fogColor.value,Zf(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,x,E,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),u(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),m(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,x,E):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Zt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Zt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let E;h.map?E=h.map:h.specularMap?E=h.specularMap:h.displacementMap?E=h.displacementMap:h.normalMap?E=h.normalMap:h.bumpMap?E=h.bumpMap:h.roughnessMap?E=h.roughnessMap:h.metalnessMap?E=h.metalnessMap:h.alphaMap?E=h.alphaMap:h.emissiveMap?E=h.emissiveMap:h.clearcoatMap?E=h.clearcoatMap:h.clearcoatNormalMap?E=h.clearcoatNormalMap:h.clearcoatRoughnessMap?E=h.clearcoatRoughnessMap:h.iridescenceMap?E=h.iridescenceMap:h.iridescenceThicknessMap?E=h.iridescenceThicknessMap:h.specularIntensityMap?E=h.specularIntensityMap:h.specularColorMap?E=h.specularColorMap:h.transmissionMap?E=h.transmissionMap:h.thicknessMap?E=h.thicknessMap:h.sheenColorMap?E=h.sheenColorMap:h.sheenRoughnessMap&&(E=h.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let y;h.aoMap?y=h.aoMap:h.lightMap&&(y=h.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,x,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=E*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let y;h.map?y=h.map:h.alphaMap&&(y=h.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Zt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function J1(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(E,y){const w=y.program;i.uniformBlockBinding(E,w)}function c(E,y){let w=s[E.id];w===void 0&&(g(E),w=u(E),s[E.id]=w,E.addEventListener("dispose",h));const T=y.program;i.updateUBOMapping(E,T);const D=e.render.frame;r[E.id]!==D&&(f(E),r[E.id]=D)}function u(E){const y=d();E.__bindingPointIndex=y;const w=n.createBuffer(),T=E.__size,D=E.usage;return n.bindBuffer(35345,w),n.bufferData(35345,T,D),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,w),w}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const y=s[E.id],w=E.uniforms,T=E.__cache;n.bindBuffer(35345,y);for(let D=0,R=w.length;D<R;D++){const M=w[D];if(m(M,D,T)===!0){const C=M.__offset,z=Array.isArray(M.value)?M.value:[M.value];let te=0;for(let G=0;G<z.length;G++){const k=z[G],B=p(k);typeof k=="number"?(M.__data[0]=k,n.bufferSubData(35345,C+te,M.__data)):k.isMatrix3?(M.__data[0]=k.elements[0],M.__data[1]=k.elements[1],M.__data[2]=k.elements[2],M.__data[3]=k.elements[0],M.__data[4]=k.elements[3],M.__data[5]=k.elements[4],M.__data[6]=k.elements[5],M.__data[7]=k.elements[0],M.__data[8]=k.elements[6],M.__data[9]=k.elements[7],M.__data[10]=k.elements[8],M.__data[11]=k.elements[0]):(k.toArray(M.__data,te),te+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,M.__data)}}n.bindBuffer(35345,null)}function m(E,y,w){const T=E.value;if(w[y]===void 0){if(typeof T=="number")w[y]=T;else{const D=Array.isArray(T)?T:[T],R=[];for(let M=0;M<D.length;M++)R.push(D[M].clone());w[y]=R}return!0}else if(typeof T=="number"){if(w[y]!==T)return w[y]=T,!0}else{const D=Array.isArray(w[y])?w[y]:[w[y]],R=Array.isArray(T)?T:[T];for(let M=0;M<D.length;M++){const C=D[M];if(C.equals(R[M])===!1)return C.copy(R[M]),!0}}return!1}function g(E){const y=E.uniforms;let w=0;const T=16;let D=0;for(let R=0,M=y.length;R<M;R++){const C=y[R],z={boundary:0,storage:0},te=Array.isArray(C.value)?C.value:[C.value];for(let G=0,k=te.length;G<k;G++){const B=te[G],Z=p(B);z.boundary+=Z.boundary,z.storage+=Z.storage}if(C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,R>0){D=w%T;const G=T-D;D!==0&&G-z.boundary<0&&(w+=T-D,C.__offset=w)}w+=z.storage}return D=w%T,D>0&&(w+=T-D),E.__size=w,E.__cache={},this}function p(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function h(E){const y=E.target;y.removeEventListener("dispose",h);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function x(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:x}}function Q1(){const n=mo("canvas");return n.style.display="block",n}function rh(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Q1(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const p=this;let h=!1,x=0,E=0,y=null,w=-1,T=null;const D=new At,R=new At;let M=null,C=e.width,z=e.height,te=1,G=null,k=null;const B=new At(0,0,C,z),Z=new At(0,0,C,z);let ie=!1;const re=new zl;let X=!1,fe=!1,ue=null;const Le=new pt,j=new Ge,ae=new H,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return y===null?te:1}let I=t;function K(A,q){for(let ee=0;ee<A.length;ee++){const V=A[ee],se=e.getContext(V,q);if(se!==null)return se}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),I===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),I=K(q,A),I===null)throw K(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,xe,pe,Ae,ve,S,P,W,J,ne,le,de,he,me,v,_,U,$,Y,ce,we,L,F,ye;function Se(){oe=new uy(I),xe=new sy(I,oe,n),oe.init(xe),L=new q1(I,oe,xe),pe=new W1(I,oe,xe),Ae=new hy,ve=new D1,S=new j1(I,oe,pe,ve,xe,L,Ae),P=new oy(p),W=new cy(p),J=new M0(I,xe),F=new ny(I,oe,J,xe),ne=new dy(I,J,Ae,F),le=new _y(I,ne,J,Ae),Y=new gy(I,xe,S),_=new ry(ve),de=new C1(p,P,W,oe,xe,F,_),he=new K1(p,ve),me=new R1,v=new z1(oe,xe),$=new ty(p,P,W,pe,le,u,a),U=new G1(p,le,xe),ye=new J1(I,Ae,xe,pe),ce=new iy(I,oe,Ae,xe),we=new fy(I,oe,Ae,xe),Ae.programs=de.programs,p.capabilities=xe,p.extensions=oe,p.properties=ve,p.renderLists=me,p.shadowMap=U,p.state=pe,p.info=Ae}Se();const Ee=new Z1(p,I);this.xr=Ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(C,z,!1))},this.getSize=function(A){return A.set(C,z)},this.setSize=function(A,q,ee){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,z=q,e.width=Math.floor(A*te),e.height=Math.floor(q*te),ee!==!1&&(e.style.width=A+"px",e.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(C*te,z*te).floor()},this.setDrawingBufferSize=function(A,q,ee){C=A,z=q,te=ee,e.width=Math.floor(A*ee),e.height=Math.floor(q*ee),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,q,ee,V){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,q,ee,V),pe.viewport(D.copy(B).multiplyScalar(te).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,q,ee,V){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,q,ee,V),pe.scissor(R.copy(Z).multiplyScalar(te).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){pe.setScissorTest(ie=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,q=!0,ee=!0){let V=0;A&&(V|=16384),q&&(V|=256),ee&&(V|=1024),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),me.dispose(),v.dispose(),ve.dispose(),P.dispose(),W.dispose(),le.dispose(),F.dispose(),ye.dispose(),de.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Te),Ee.removeEventListener("sessionend",Pe),ue&&(ue.dispose(),ue=null),it.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const A=Ae.autoReset,q=U.enabled,ee=U.autoUpdate,V=U.needsUpdate,se=U.type;Se(),Ae.autoReset=A,U.enabled=q,U.autoUpdate=ee,U.needsUpdate=V,U.type=se}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){const q=A.target;q.removeEventListener("dispose",Ne),Qe(q)}function Qe(A){O(A),ve.remove(A)}function O(A){const q=ve.get(A).programs;q!==void 0&&(q.forEach(function(ee){de.releaseProgram(ee)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ee,V,se,Fe){q===null&&(q=be);const ze=se.isMesh&&se.matrixWorld.determinant()<0,qe=hh(A,q,ee,V,se);pe.setMaterial(V,ze);let $e=ee.index,Je=1;V.wireframe===!0&&($e=ne.getWireframeAttribute(ee),Je=2);const Xe=ee.drawRange,Ye=ee.attributes.position;let mt=Xe.start*Je,Gt=(Xe.start+Xe.count)*Je;Fe!==null&&(mt=Math.max(mt,Fe.start*Je),Gt=Math.min(Gt,(Fe.start+Fe.count)*Je)),$e!==null?(mt=Math.max(mt,0),Gt=Math.min(Gt,$e.count)):Ye!=null&&(mt=Math.max(mt,0),Gt=Math.min(Gt,Ye.count));const Fn=Gt-mt;if(Fn<0||Fn===1/0)return;F.setup(se,V,qe,ee,$e);let mi,gt=ce;if($e!==null&&(mi=J.get($e),gt=we,gt.setIndex(mi)),se.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*N()),gt.setMode(1)):gt.setMode(4);else if(se.isLine){let Ze=V.linewidth;Ze===void 0&&(Ze=1),pe.setLineWidth(Ze*N()),se.isLineSegments?gt.setMode(1):se.isLineLoop?gt.setMode(2):gt.setMode(3)}else se.isPoints?gt.setMode(0):se.isSprite&&gt.setMode(4);if(se.isInstancedMesh)gt.renderInstances(mt,Fn,se.count);else if(ee.isInstancedBufferGeometry){const Ze=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,No=Math.min(ee.instanceCount,Ze);gt.renderInstances(mt,Fn,No)}else gt.render(mt,Fn)},this.compile=function(A,q){function ee(V,se,Fe){V.transparent===!0&&V.side===oi&&V.forceSinglePass===!1?(V.side=Zt,V.needsUpdate=!0,en(V,se,Fe),V.side=fi,V.needsUpdate=!0,en(V,se,Fe),V.side=oi):en(V,se,Fe)}f=v.get(A),f.init(),g.push(f),A.traverseVisible(function(V){V.isLight&&V.layers.test(q.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(p.physicallyCorrectLights),A.traverse(function(V){const se=V.material;if(se)if(Array.isArray(se))for(let Fe=0;Fe<se.length;Fe++){const ze=se[Fe];ee(ze,A,V)}else ee(se,A,V)}),g.pop(),f=null};let Q=null;function ge(A){Q&&Q(A)}function Te(){it.stop()}function Pe(){it.start()}const it=new Qf;it.setAnimationLoop(ge),typeof self!="undefined"&&it.setContext(self),this.setAnimationLoop=function(A){Q=A,Ee.setAnimationLoop(A),A===null?it.stop():it.start()},Ee.addEventListener("sessionstart",Te),Ee.addEventListener("sessionend",Pe),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(q),q=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,q,y),f=v.get(A,g.length),f.init(),g.push(f),Le.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),re.setFromProjectionMatrix(Le),fe=this.localClippingEnabled,X=_.init(this.clippingPlanes,fe),d=me.get(A,m.length),d.init(),m.push(d),Mt(A,q,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(G,k),X===!0&&_.beginShadows();const ee=f.state.shadowsArray;if(U.render(ee,A,q),X===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(d,A),f.setupLights(p.physicallyCorrectLights),q.isArrayCamera){const V=q.cameras;for(let se=0,Fe=V.length;se<Fe;se++){const ze=V[se];Pt(d,A,ze,ze.viewport)}}else Pt(d,A,q);y!==null&&(S.updateMultisampleRenderTarget(y),S.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,q),F.resetDefaultState(),w=-1,T=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Mt(A,q,ee,V){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){V&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const ze=le.update(A),qe=A.material;qe.visible&&d.push(A,ze,qe,ee,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ae.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ae.render.frame),!A.frustumCulled||re.intersectsObject(A))){V&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const ze=le.update(A),qe=A.material;if(Array.isArray(qe)){const $e=ze.groups;for(let Je=0,Xe=$e.length;Je<Xe;Je++){const Ye=$e[Je],mt=qe[Ye.materialIndex];mt&&mt.visible&&d.push(A,ze,mt,ee,ae.z,Ye)}}else qe.visible&&d.push(A,ze,qe,ee,ae.z,null)}}const Fe=A.children;for(let ze=0,qe=Fe.length;ze<qe;ze++)Mt(Fe[ze],q,ee,V)}function Pt(A,q,ee,V){const se=A.opaque,Fe=A.transmissive,ze=A.transparent;f.setupLightsView(ee),X===!0&&_.setGlobalState(p.clippingPlanes,ee),Fe.length>0&&pi(se,q,ee),V&&pe.viewport(D.copy(V)),se.length>0&&ut(se,q,ee),Fe.length>0&&ut(Fe,q,ee),ze.length>0&&ut(ze,q,ee),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function pi(A,q,ee){const V=xe.isWebGL2;ue===null&&(ue=new Vi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?dr:Bi,minFilter:ur,samples:V&&r===!0?4:0})),p.getDrawingBufferSize(j),V?ue.setSize(j.x,j.y):ue.setSize(rl(j.x),rl(j.y));const se=p.getRenderTarget();p.setRenderTarget(ue),p.clear();const Fe=p.toneMapping;p.toneMapping=Wn,ut(A,q,ee),p.toneMapping=Fe,S.updateMultisampleRenderTarget(ue),S.updateRenderTargetMipmap(ue),p.setRenderTarget(se)}function ut(A,q,ee){const V=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Fe=A.length;se<Fe;se++){const ze=A[se],qe=ze.object,$e=ze.geometry,Je=V===null?ze.material:V,Xe=ze.group;qe.layers.test(ee.layers)&&In(qe,q,ee,$e,Je,Xe)}}function In(A,q,ee,V,se,Fe){A.onBeforeRender(p,q,ee,V,se,Fe),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(p,q,ee,V,A,Fe),se.transparent===!0&&se.side===oi&&se.forceSinglePass===!1?(se.side=Zt,se.needsUpdate=!0,p.renderBufferDirect(ee,q,V,se,A,Fe),se.side=fi,se.needsUpdate=!0,p.renderBufferDirect(ee,q,V,se,A,Fe),se.side=oi):p.renderBufferDirect(ee,q,V,se,A,Fe),A.onAfterRender(p,q,ee,V,se,Fe)}function en(A,q,ee){q.isScene!==!0&&(q=be);const V=ve.get(A),se=f.state.lights,Fe=f.state.shadowsArray,ze=se.state.version,qe=de.getParameters(A,se.state,Fe,q,ee),$e=de.getProgramCacheKey(qe);let Je=V.programs;V.environment=A.isMeshStandardMaterial?q.environment:null,V.fog=q.fog,V.envMap=(A.isMeshStandardMaterial?W:P).get(A.envMap||V.environment),Je===void 0&&(A.addEventListener("dispose",Ne),Je=new Map,V.programs=Je);let Xe=Je.get($e);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===ze)return Hl(A,qe),Xe}else qe.uniforms=de.getUniforms(A),A.onBuild(ee,qe,p),A.onBeforeCompile(qe,p),Xe=de.acquireProgram(qe,$e),Je.set($e,Xe),V.uniforms=qe.uniforms;const Ye=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=_.uniform),Hl(A,qe),V.needsLights=mh(A),V.lightsStateVersion=ze,V.needsLights&&(Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.directionalShadowMap.value=se.state.directionalShadowMap,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotShadowMap.value=se.state.spotShadowMap,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMap.value=se.state.pointShadowMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix);const mt=Xe.getUniforms(),Gt=so.seqWithValue(mt.seq,Ye);return V.currentProgram=Xe,V.uniformsList=Gt,Xe}function Hl(A,q){const ee=ve.get(A);ee.outputEncoding=q.outputEncoding,ee.instancing=q.instancing,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function hh(A,q,ee,V,se){q.isScene!==!0&&(q=be),S.resetTextureUnits();const Fe=q.fog,ze=V.isMeshStandardMaterial?q.environment:null,qe=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ki,$e=(V.isMeshStandardMaterial?W:P).get(V.envMap||ze),Je=V.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Xe=!!V.normalMap&&!!ee.attributes.tangent,Ye=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Gt=!!ee.morphAttributes.color,Fn=V.toneMapped?p.toneMapping:Wn,mi=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,gt=mi!==void 0?mi.length:0,Ze=ve.get(V),No=f.state.lights;if(X===!0&&(fe===!0||A!==T)){const Wt=A===T&&V.id===w;_.setState(V,A,Wt)}let wt=!1;V.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==No.state.version||Ze.outputEncoding!==qe||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==$e||V.fog===!0&&Ze.fog!==Fe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==_.numPlanes||Ze.numIntersection!==_.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==Xe||Ze.morphTargets!==Ye||Ze.morphNormals!==mt||Ze.morphColors!==Gt||Ze.toneMapping!==Fn||xe.isWebGL2===!0&&Ze.morphTargetsCount!==gt)&&(wt=!0):(wt=!0,Ze.__version=V.version);let gi=Ze.currentProgram;wt===!0&&(gi=en(V,q,se));let Gl=!1,Ns=!1,Oo=!1;const It=gi.getUniforms(),_i=Ze.uniforms;if(pe.useProgram(gi.program)&&(Gl=!0,Ns=!0,Oo=!0),V.id!==w&&(w=V.id,Ns=!0),Gl||T!==A){if(It.setValue(I,"projectionMatrix",A.projectionMatrix),xe.logarithmicDepthBuffer&&It.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),T!==A&&(T=A,Ns=!0,Oo=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Wt=It.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,ae.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&It.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||se.isSkinnedMesh)&&It.setValue(I,"viewMatrix",A.matrixWorldInverse)}if(se.isSkinnedMesh){It.setOptional(I,se,"bindMatrix"),It.setOptional(I,se,"bindMatrixInverse");const Wt=se.skeleton;Wt&&(xe.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),It.setValue(I,"boneTexture",Wt.boneTexture,S),It.setValue(I,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zo=ee.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0&&xe.isWebGL2===!0)&&Y.update(se,ee,V,gi),(Ns||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,It.setValue(I,"receiveShadow",se.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_i.envMap.value=$e,_i.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Ns&&(It.setValue(I,"toneMappingExposure",p.toneMappingExposure),Ze.needsLights&&ph(_i,Oo),Fe&&V.fog===!0&&he.refreshFogUniforms(_i,Fe),he.refreshMaterialUniforms(_i,V,te,z,ue),so.upload(I,Ze.uniformsList,_i,S)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(so.upload(I,Ze.uniformsList,_i,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&It.setValue(I,"center",se.center),It.setValue(I,"modelViewMatrix",se.modelViewMatrix),It.setValue(I,"normalMatrix",se.normalMatrix),It.setValue(I,"modelMatrix",se.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Wt=V.uniformsGroups;for(let Bo=0,gh=Wt.length;Bo<gh;Bo++)if(xe.isWebGL2){const Wl=Wt[Bo];ye.update(Wl,gi),ye.bind(Wl,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function ph(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function mh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,q,ee){ve.get(A.texture).__webglTexture=q,ve.get(A.depthTexture).__webglTexture=ee;const V=ve.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=ee===void 0,V.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,q){const ee=ve.get(A);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ee=0){y=A,x=q,E=ee;let V=!0,se=null,Fe=!1,ze=!1;if(A){const $e=ve.get(A);$e.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),V=!1):$e.__webglFramebuffer===void 0?S.setupRenderTarget(A):$e.__hasExternalTextures&&S.rebindTextures(A,ve.get(A.texture).__webglTexture,ve.get(A.depthTexture).__webglTexture);const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);const Xe=ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(se=Xe[q],Fe=!0):xe.isWebGL2&&A.samples>0&&S.useMultisampledRTT(A)===!1?se=ve.get(A).__webglMultisampledFramebuffer:se=Xe,D.copy(A.viewport),R.copy(A.scissor),M=A.scissorTest}else D.copy(B).multiplyScalar(te).floor(),R.copy(Z).multiplyScalar(te).floor(),M=ie;if(pe.bindFramebuffer(36160,se)&&xe.drawBuffers&&V&&pe.drawBuffers(A,se),pe.viewport(D),pe.scissor(R),pe.setScissorTest(M),Fe){const $e=ve.get(A.texture);I.framebufferTexture2D(36160,36064,34069+q,$e.__webglTexture,ee)}else if(ze){const $e=ve.get(A.texture),Je=q||0;I.framebufferTextureLayer(36160,36064,$e.__webglTexture,ee||0,Je)}w=-1},this.readRenderTargetPixels=function(A,q,ee,V,se,Fe,ze){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe){pe.bindFramebuffer(36160,qe);try{const $e=A.texture,Je=$e.format,Xe=$e.type;if(Je!==_n&&L.convert(Je)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Xe===dr&&(oe.has("EXT_color_buffer_half_float")||xe.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Xe!==Bi&&L.convert(Xe)!==I.getParameter(35738)&&!(Xe===Ri&&(xe.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-V&&ee>=0&&ee<=A.height-se&&I.readPixels(q,ee,V,se,L.convert(Je),L.convert(Xe),Fe)}finally{const $e=y!==null?ve.get(y).__webglFramebuffer:null;pe.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(A,q,ee=0){const V=Math.pow(2,-ee),se=Math.floor(q.image.width*V),Fe=Math.floor(q.image.height*V);S.setTexture2D(q,0),I.copyTexSubImage2D(3553,ee,0,0,A.x,A.y,se,Fe),pe.unbindTexture()},this.copyTextureToTexture=function(A,q,ee,V=0){const se=q.image.width,Fe=q.image.height,ze=L.convert(ee.format),qe=L.convert(ee.type);S.setTexture2D(ee,0),I.pixelStorei(37440,ee.flipY),I.pixelStorei(37441,ee.premultiplyAlpha),I.pixelStorei(3317,ee.unpackAlignment),q.isDataTexture?I.texSubImage2D(3553,V,A.x,A.y,se,Fe,ze,qe,q.image.data):q.isCompressedTexture?I.compressedTexSubImage2D(3553,V,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,ze,q.mipmaps[0].data):I.texSubImage2D(3553,V,A.x,A.y,ze,qe,q.image),V===0&&ee.generateMipmaps&&I.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,q,ee,V,se=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=A.max.x-A.min.x+1,ze=A.max.y-A.min.y+1,qe=A.max.z-A.min.z+1,$e=L.convert(V.format),Je=L.convert(V.type);let Xe;if(V.isData3DTexture)S.setTexture3D(V,0),Xe=32879;else if(V.isDataArrayTexture)S.setTexture2DArray(V,0),Xe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,V.flipY),I.pixelStorei(37441,V.premultiplyAlpha),I.pixelStorei(3317,V.unpackAlignment);const Ye=I.getParameter(3314),mt=I.getParameter(32878),Gt=I.getParameter(3316),Fn=I.getParameter(3315),mi=I.getParameter(32877),gt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;I.pixelStorei(3314,gt.width),I.pixelStorei(32878,gt.height),I.pixelStorei(3316,A.min.x),I.pixelStorei(3315,A.min.y),I.pixelStorei(32877,A.min.z),ee.isDataTexture||ee.isData3DTexture?I.texSubImage3D(Xe,se,q.x,q.y,q.z,Fe,ze,qe,$e,Je,gt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Xe,se,q.x,q.y,q.z,Fe,ze,qe,$e,gt.data)):I.texSubImage3D(Xe,se,q.x,q.y,q.z,Fe,ze,qe,$e,Je,gt),I.pixelStorei(3314,Ye),I.pixelStorei(32878,mt),I.pixelStorei(3316,Gt),I.pixelStorei(3315,Fn),I.pixelStorei(32877,mi),se===0&&V.generateMipmaps&&I.generateMipmap(Xe),pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){x=0,E=0,y=null,pe.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class eM extends rh{}eM.prototype.isWebGL1Renderer=!0;class tM extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ro extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new H,ed=new H,td=new pt,Ta=new Ol,qr=new vr;class nM extends Tt{constructor(e=new Mn,t=new ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qu.fromBufferAttribute(t,s-1),ed.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qu.distanceTo(ed);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;td.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(td);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new H,u=new H,d=new H,f=new H,m=this.isLineSegments?2:1,g=i.index,h=i.attributes.position;if(g!==null){const x=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let y=x,w=E-1;y<w;y+=m){const T=g.getX(y),D=g.getX(y+1);if(c.fromBufferAttribute(h,T),u.fromBufferAttribute(h,D),Ta.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),E=Math.min(h.count,a.start+a.count);for(let y=x,w=E-1;y<w;y+=m){if(c.fromBufferAttribute(h,y),u.fromBufferAttribute(h,y+1),Ta.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const nd=new H,id=new H;class sd extends nM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)nd.fromBufferAttribute(t,s),id.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+nd.distanceTo(id);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ks extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rd=new pt,al=new Ol,$r=new vr,Xr=new H;class La extends Tt{constructor(e=new Mn,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;rd.copy(s).invert(),al.copy(e.ray).applyMatrix4(rd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,p=m;g<p;g++){const h=c.getX(g);Xr.fromBufferAttribute(d,h),od(Xr,h,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,p=m;g<p;g++)Xr.fromBufferAttribute(d,g),od(Xr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function od(n,e,t,i,s,r,a){const o=al.distanceSqToPoint(n);if(o<t){const l=new H;al.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class iM extends Rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new et(16777215),this.specular=new et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sM extends Rn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new et(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ad={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class rM{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const oM=new rM;class oh{constructor(e){this.manager=e!==void 0?e:oM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const kn={};class aM extends Error{constructor(e,t){super(e),this.response=t}}class lM extends oh{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ad.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:i,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=kn[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let p=0;const h=new ReadableStream({start(x){E();function E(){d.read().then(({done:y,value:w})=>{if(y)x.close();else{p+=w.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let D=0,R=u.length;D<R;D++){const M=u[D];M.onProgress&&M.onProgress(T)}x.enqueue(w),E()}})}}});return new Response(h)}else throw new aM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ad.add(e,c);const u=kn[e];delete kn[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cM extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ca=new pt,ld=new H,cd=new H;class uM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dM extends uM{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends cM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new dM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);const fd={type:"change"},Da={type:"start"},hd={type:"end"};class fM extends qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",me),this._domElementKeyEvents=L},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fd),i.update(),r=s.NONE},this.update=function(){const L=new H,F=new Hi().setFromUnitVectors(e.up,new H(0,1,0)),ye=F.clone().invert(),Se=new H,Ee=new Hi,Ce=2*Math.PI;return function(){const Ue=i.object.position;L.copy(Ue).sub(i.target),L.applyQuaternion(F),o.setFromVector3(L),i.autoRotate&&r===s.NONE&&C(R()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ne=i.minAzimuthAngle,Qe=i.maxAzimuthAngle;return isFinite(Ne)&&isFinite(Qe)&&(Ne<-Math.PI?Ne+=Ce:Ne>Math.PI&&(Ne-=Ce),Qe<-Math.PI?Qe+=Ce:Qe>Math.PI&&(Qe-=Ce),Ne<=Qe?o.theta=Math.max(Ne,Math.min(Qe,o.theta)):o.theta=o.theta>(Ne+Qe)/2?Math.max(Ne,o.theta):Math.min(Qe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),L.setFromSpherical(o),L.applyQuaternion(ye),Ue.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||Se.distanceToSquared(i.object.position)>a||8*(1-Ee.dot(i.object.quaternion))>a?(i.dispatchEvent(fd),Se.copy(i.object.position),Ee.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",U),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",ne),i.domElement.removeEventListener("wheel",he),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",J),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",me)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new dd,l=new dd;let c=1;const u=new H;let d=!1;const f=new Ge,m=new Ge,g=new Ge,p=new Ge,h=new Ge,x=new Ge,E=new Ge,y=new Ge,w=new Ge,T=[],D={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function C(L){l.theta-=L}function z(L){l.phi-=L}const te=function(){const L=new H;return function(ye,Se){L.setFromMatrixColumn(Se,0),L.multiplyScalar(-ye),u.add(L)}}(),G=function(){const L=new H;return function(ye,Se){i.screenSpacePanning===!0?L.setFromMatrixColumn(Se,1):(L.setFromMatrixColumn(Se,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(ye),u.add(L)}}(),k=function(){const L=new H;return function(ye,Se){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;L.copy(Ce).sub(i.target);let De=L.length();De*=Math.tan(i.object.fov/2*Math.PI/180),te(2*ye*De/Ee.clientHeight,i.object.matrix),G(2*Se*De/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te(ye*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),G(Se*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(L){i.object.isPerspectiveCamera?c/=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*L)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(L){i.object.isPerspectiveCamera?c*=L:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/L)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(L){f.set(L.clientX,L.clientY)}function re(L){E.set(L.clientX,L.clientY)}function X(L){p.set(L.clientX,L.clientY)}function fe(L){m.set(L.clientX,L.clientY),g.subVectors(m,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;C(2*Math.PI*g.x/F.clientHeight),z(2*Math.PI*g.y/F.clientHeight),f.copy(m),i.update()}function ue(L){y.set(L.clientX,L.clientY),w.subVectors(y,E),w.y>0?B(M()):w.y<0&&Z(M()),E.copy(y),i.update()}function Le(L){h.set(L.clientX,L.clientY),x.subVectors(h,p).multiplyScalar(i.panSpeed),k(x.x,x.y),p.copy(h),i.update()}function j(L){L.deltaY<0?Z(M()):L.deltaY>0&&B(M()),i.update()}function ae(L){let F=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),F=!0;break}F&&(L.preventDefault(),i.update())}function be(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),F=.5*(T[0].pageY+T[1].pageY);f.set(L,F)}}function N(){if(T.length===1)p.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),F=.5*(T[0].pageY+T[1].pageY);p.set(L,F)}}function I(){const L=T[0].pageX-T[1].pageX,F=T[0].pageY-T[1].pageY,ye=Math.sqrt(L*L+F*F);E.set(0,ye)}function K(){i.enableZoom&&I(),i.enablePan&&N()}function oe(){i.enableZoom&&I(),i.enableRotate&&be()}function xe(L){if(T.length==1)m.set(L.pageX,L.pageY);else{const ye=we(L),Se=.5*(L.pageX+ye.x),Ee=.5*(L.pageY+ye.y);m.set(Se,Ee)}g.subVectors(m,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;C(2*Math.PI*g.x/F.clientHeight),z(2*Math.PI*g.y/F.clientHeight),f.copy(m)}function pe(L){if(T.length===1)h.set(L.pageX,L.pageY);else{const F=we(L),ye=.5*(L.pageX+F.x),Se=.5*(L.pageY+F.y);h.set(ye,Se)}x.subVectors(h,p).multiplyScalar(i.panSpeed),k(x.x,x.y),p.copy(h)}function Ae(L){const F=we(L),ye=L.pageX-F.x,Se=L.pageY-F.y,Ee=Math.sqrt(ye*ye+Se*Se);y.set(0,Ee),w.set(0,Math.pow(y.y/E.y,i.zoomSpeed)),B(w.y),E.copy(y)}function ve(L){i.enableZoom&&Ae(L),i.enablePan&&pe(L)}function S(L){i.enableZoom&&Ae(L),i.enableRotate&&xe(L)}function P(L){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",W),i.domElement.addEventListener("pointerup",J)),$(L),L.pointerType==="touch"?v(L):le(L))}function W(L){i.enabled!==!1&&(L.pointerType==="touch"?_(L):de(L))}function J(L){Y(L),T.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",J)),i.dispatchEvent(hd),r=s.NONE}function ne(L){Y(L)}function le(L){let F;switch(L.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Yi.DOLLY:if(i.enableZoom===!1)return;re(L),r=s.DOLLY;break;case Yi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;X(L),r=s.PAN}else{if(i.enableRotate===!1)return;ie(L),r=s.ROTATE}break;case Yi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ie(L),r=s.ROTATE}else{if(i.enablePan===!1)return;X(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Da)}function de(L){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;fe(L);break;case s.DOLLY:if(i.enableZoom===!1)return;ue(L);break;case s.PAN:if(i.enablePan===!1)return;Le(L);break}}function he(L){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(L.preventDefault(),i.dispatchEvent(Da),j(L),i.dispatchEvent(hd))}function me(L){i.enabled===!1||i.enablePan===!1||ae(L)}function v(L){switch(ce(L),T.length){case 1:switch(i.touches.ONE){case Zi.ROTATE:if(i.enableRotate===!1)return;be(),r=s.TOUCH_ROTATE;break;case Zi.PAN:if(i.enablePan===!1)return;N(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Zi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;K(),r=s.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Da)}function _(L){switch(ce(L),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;xe(L),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;pe(L),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(L),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(L),i.update();break;default:r=s.NONE}}function U(L){i.enabled!==!1&&L.preventDefault()}function $(L){T.push(L)}function Y(L){delete D[L.pointerId];for(let F=0;F<T.length;F++)if(T[F].pointerId==L.pointerId){T.splice(F,1);return}}function ce(L){let F=D[L.pointerId];F===void 0&&(F=new Ge,D[L.pointerId]=F),F.set(L.pageX,L.pageY)}function we(L){const F=L.pointerId===T[0].pointerId?T[1]:T[0];return D[F.pointerId]}i.domElement.addEventListener("contextmenu",U),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",ne),i.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}}const hM=/^[og]\s*(.+)?/,pM=/^mtllib /,mM=/^usemtl /,gM=/^usemap /,pd=/\s+/,md=new H,Pa=new H,gd=new H,_d=new H,rn=new H,Yr=new et;function _M(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;md.fromArray(s,e),Pa.fromArray(s,t),gd.fromArray(s,i),rn.subVectors(gd,Pa),_d.subVectors(md,Pa),rn.cross(_d),rn.normalize(),r.push(rn.x,rn.y,rn.z),r.push(rn.x,rn.y,rn.z),r.push(rn.x,rn.y,rn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,c){const u=this.vertices.length;let d=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(d,f,m),this.addColor(d,f,m),o!==void 0&&o!==""){const g=this.normals.length;d=this.parseNormalIndex(o,g),f=this.parseNormalIndex(l,g),m=this.parseNormalIndex(c,g),this.addNormal(d,f,m)}else this.addFaceNormal(d,f,m);if(s!==void 0&&s!==""){const g=this.uvs.length;d=this.parseUVIndex(s,g),f=this.parseUVIndex(r,g),m=this.parseUVIndex(a,g),this.addUV(d,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class xM extends oh{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,a=new lM(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new _M;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const d=c.split(pd);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Yr.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(Yr.r,Yr.g,Yr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){const f=c.slice(1).trim().split(pd),m=[];for(let p=0,h=f.length;p<h;p++){const x=f[p];if(x.length>0){const E=x.split("/");m.push(E)}}const g=m[0];for(let p=1,h=m.length-1;p<h;p++){const x=m[p],E=m[p+1];t.addFace(g[0],x[0],E[0],g[1],x[1],E[1],g[2],x[2],E[2])}}else if(u==="l"){const d=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=d;else for(let g=0,p=d.length;g<p;g++){const h=d[g].split("/");h[0]!==""&&f.push(h[0]),h[1]!==""&&m.push(h[1])}t.addLineGeometry(f,m)}else if(u==="p"){const f=c.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((s=hM.exec(c))!==null){const d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(mM.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(pM.test(c))t.materialLibraries.push(c.substring(7).trim());else if(gM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new Zs;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,d=c.materials,f=u.type==="Line",m=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const p=new Mn;p.setAttribute("position",new zt(u.vertices,3)),u.normals.length>0&&p.setAttribute("normal",new zt(u.normals,3)),u.colors.length>0&&(g=!0,p.setAttribute("color",new zt(u.colors,3))),u.hasUVIndices===!0&&p.setAttribute("uv",new zt(u.uvs,2));const h=[];for(let E=0,y=d.length;E<y;E++){const w=d[E],T=w.name+"_"+w.smooth+"_"+g;let D=t.materials[T];if(this.materials!==null){if(D=this.materials.create(w.name),f&&D&&!(D instanceof ro)){const R=new ro;Rn.prototype.copy.call(R,D),R.color.copy(D.color),D=R}else if(m&&D&&!(D instanceof Ks)){const R=new Ks({size:10,sizeAttenuation:!1});Rn.prototype.copy.call(R,D),R.color.copy(D.color),R.map=D.map,D=R}}D===void 0&&(f?D=new ro:m?D=new Ks({size:1,sizeAttenuation:!1}):D=new iM,D.name=w.name,D.flatShading=!w.smooth,D.vertexColors=g,t.materials[T]=D),h.push(D)}let x;if(h.length>1){for(let E=0,y=d.length;E<y;E++){const w=d[E];p.addGroup(w.groupStart,w.groupCount,E)}f?x=new sd(p,h):m?x=new La(p,h):x=new xn(p,h)}else f?x=new sd(p,h[0]):m?x=new La(p,h[0]):x=new xn(p,h[0]);x.name=c.name,r.add(x)}else if(t.vertices.length>0){const o=new Ks({size:1,sizeAttenuation:!1}),l=new Mn;l.setAttribute("position",new zt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new zt(t.colors,3)),o.vertexColors=!0);const c=new La(l,o);r.add(c)}return r}}const ah=window.innerWidth,lh=window.innerHeight,Zr=new tM,hr=new an(75,ah/lh,.1,1e3);hr.position.z=5;const yr=new rh;yr.setSize(ah,lh);document.body.appendChild(yr.domElement);const vM=new fM(hr,yr.domElement);vM.update();function bM(n){const e=new sM,t=new xn(n,e);Zr.add(t);const i=new ud(16777215);i.position.y=2,Zr.add(i);const s=new ud(8965375);s.position.x=1,s.position.y=-2,Zr.add(s);function r(){requestAnimationFrame(r),yr.render(Zr,hr)}r()}const yM=new xM;yM.load("/public/models/A_10.obj",n=>bM(n.children[0].geometry));function MM(){hr.aspect=window.innerWidth/window.innerHeight,hr.updateProjectionMatrix(),yr.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",MM,!1);const wM={},SM={name:"App",components:{footer1:Il,Competence:$_,RouterLink:Rl,CompetenceDev:rx,Nuage:wM},data(){return{nom:null,listeLogicielDesignSynchro:[],menuOuvert:!1,listeLogicielDevSynchro:[],user:{email:null,password:null},userInfo:null,name:"Vid\xE9o",isAdmin:!1}},mounted(){this.getUserConnect(),this.getLogicielDesignSynchro(),this.getLogicielDevSynchro(),Qt.on("connectUser",n=>{this.user=n.user,this.getUserInfo(this.user)}),Qt.on("deConnectUser",n=>{this.user=n.user,this.userInfo=null,this.name="Vid\xE9o",this.isAdmin=!1})},methods:{async getUserConnect(){await Gn().onAuthStateChanged(function(n){n&&(this.user=n,this.getUserInfo(this.user))}.bind(this))},async getUserInfo(n){const e=He(),t=ht(e,"users"),i=hi(t,pr("uid","==",n.uid));await vn(i,s=>{this.userInfo=s.docs.map(o=>tn({id:o.id},o.data())),this.name=this.userInfo[0].login,this.isAdmin=this.userInfo[0].admin;const r=lt(),a=st(r,"users/"+this.userInfo[0].avatar);Bt(a).then(o=>{this.avatar=o}).catch(o=>{console.log("erreur downloadUrl",o)})})},async getLogicielDesignSynchro(){const n=He(),e=ht(n,"LogicielDesign");await vn(e,t=>{this.listeLogicielDesignSynchro=t.docs.map(i=>tn({id:i.id},i.data())),this.listeLogicielDesignSynchro.forEach(function(i){const s=lt(),r=st(s,"ApercuLogicielDesign/"+i.photo);Bt(r).then(a=>{i.photo=a}).catch(a=>{console.log("erreur downloadUrl",a)})})})},async createLogicielDesign(){const n=He(),e=ht(n,"LogicielDesign"),t=await addDoc(e,{nom:this.nom,description:this.description,photo:this.photo});console.log("document cr\xE9\xE9 avec le id : ",t.id)},async updateLogicielDesign(n){const e=He(),t=doc(e,"LogicielDesign",n.id);await updateDoc(t,{nom:n.nom})},async deleteLogicielDesign(n){const e=He(),t=doc(e,"LogicielDesign",n.id);await deleteDoc(t)},async createLogicielDesign(){const n=lt(),e=st(n,"LogicielDesign/"+this.LogicielDesign.photo);await uploadString(e,this.imageData,"data_url").then(t=>{console.log("Uploaded a base64 string");const i=He();addDoc(ht(i,"LogicielDesign"),this.LogicielDesign)}),this.$router.push("/")},async getLogicielDevSynchro(){const n=He(),e=ht(n,"LogicielDev");await vn(e,t=>{this.listeLogicielDevSynchro=t.docs.map(i=>tn({id:i.id},i.data())),this.listeLogicielDevSynchro.forEach(function(i){const s=lt(),r=st(s,"ApercuLogicielDev/"+i.photo);Bt(r).then(a=>{i.photo=a}).catch(a=>{console.log("erreur downloadUrl",a)})})})},async createLogicielDev(){const n=He(),e=ht(n,"LogicielDev"),t=await addDoc(e,{nom:this.nom,description:this.description,photo:this.photo});console.log("document cr\xE9\xE9 avec le id : ",t.id)},async updateLogicielDev(n){const e=He(),t=doc(e,"LogicielDev",n.id);await updateDoc(t,{nom:n.nom})},async deleteLogicielDev(n){const e=He(),t=doc(e,"LogicielDev",n.id);await deleteDoc(t)},async createLogicielDev(){const n=lt(),e=st(n,"ApercuLogicielDev/"+this.LogicielDev.photo);await uploadString(e,this.imageData,"data_url").then(t=>{console.log("Uploaded a base64 string");const i=He();addDoc(ht(i,"LogicielDev"),this.LogicielDev)}),this.$router.push("/")}}},EM={class:"cursor-crosshair"},AM=b("h1",null,"Pr\xE9sentation de moi",-1),TM={class:"cursor-[http://www.rw-designer.com/cursor-extern.php?id=179073,_pointer]"},LM=b("div",{class:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full",role:"status"},[b("span",{class:"visually-hidden"},"A Venir...")],-1),CM=b("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla. Dictum fusce ut placerat orci nulla pellentesque. Lorem ipsum dolor sit amet consectetur adipiscing. In ante metus dictum at tempor commodo. Quisque egestas diam in arcu cursus euismod quis viverra nibh. In eu mi bibendum neque egestas congue quisque egestas. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Amet porttitor eget dolor morbi non. Quis vel eros donec ac odio. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin.",-1),DM=b("br",null,null,-1),PM=b("h2",null,"Au sein de mon cursus, j'ai d\xE9velopp\xE9 des comp\xE9tences sur diff\xE9rents logiciels utilis\xE9s dans diff\xE9rents secteurs tels que :",-1),RM=b("h2",{class:"font-museomoderno font-bold text-center text-2xl text-blue-700"},"Design",-1),IM={key:0,class:"bg-blue-700 mb-20 py-2 px-5 rounded-2xl text-white"},FM=je("Ajouter une comp\xE9tence"),UM={class:"grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5"},NM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"},OM=b("h2",{class:"font-museomoderno font-bold text-center text-2xl text-blue-700"},"D\xE9veloppement",-1),zM={key:0,class:"bg-blue-700 mb-20 py-2 px-5 rounded-2xl text-white"},BM=je("Ajouter une comp\xE9tence"),kM={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"};function VM(n,e,t,i,s,r){const a=ke("Nuage"),o=ke("RouterLink"),l=ke("Competence"),c=ke("CompetenceDev"),u=ke("footer1");return Ie(),Be(rt,null,[b("div",EM,[AM,b("div",TM,[LM,_e(a)]),CM,DM,PM,RM,s.isAdmin?(Ie(),Be("button",IM,[_e(o,{to:"/createDesign"},{default:Re(()=>[FM]),_:1})])):dn("",!0),b("div",null,[b("div",UM,[b("div",null,[b("div",NM,[(Ie(!0),Be(rt,null,qa(s.listeLogicielDesignSynchro,d=>(Ie(),Be("div",{key:d.id},[_e(l,{nom:d.nom,description:d.description,photo:d.photo,id:d.id},null,8,["nom","description","photo","id"])]))),128))]),b("div",null,[OM,s.isAdmin?(Ie(),Be("button",zM,[_e(o,{to:"/createDev"},{default:Re(()=>[BM]),_:1})])):dn("",!0)]),b("div",kM,[(Ie(!0),Be(rt,null,qa(s.listeLogicielDevSynchro,d=>(Ie(),Be("div",{key:d.id},[_e(c,{nom:d.nom,description:d.description,photo:d.photo,id:d.id},null,8,["nom","description","photo","id"])]))),128))])])])])]),_e(u)],64)}var HM=nt(SM,[["render",VM]]);const GM={name:"App",components:{}},WM=Tl('<div class="bg-indigo-25"><p class="w-auto h-auto m-auto text-2xl text-center font-bold font-museomoderno text-blue-600">Contact</p><p class="flex pl-5 pt-5 pb-10 text-black font-museomoderno sm:text-base lg:text-xl xl:text-2xl">Une question, une remarque \xE0 propos du tournoi de l&#39;Ar\xE8ne ? Faites nous en part en remplissant le formulaire ci dessous :</p><form><div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5"><div class="grid-cols-2 pl-10 pr-10"><p class="font-museomoderno">Pr\xE9nom*</p><input type="text" class="w-full my-6 border relative: border-blue-600" placeholder="Pr\xE9nom"></div><div class="grid-cols-2 pl-10 pr-10"><p class="font-museomoderno">Nom*</p><input type="text" class="w-full my-6 border relative: border-blue-600" placeholder="Nom"></div></div><br><div class="grid grid-cols-1 pl-10 pr-10"><label class="font-museomodernoe" for="emailAddress">Adresse Mail*</label><input id="emailAddress" type="email" name="email" placeholder="Fabio@adressemail.com" required class="my-6 border relative: border-blue-600"></div><div class="grid grid-cols-1 pl-10 pr-10"><p class="font-museomoderno">Objet du message*</p><input type="text" class="my-6 border relative: border-blue-600" placeholder="Objet"></div><div class="grid grid-cols-1 pl-10 pr-10"><p class="font-museomoderno">Message*</p><textarea class="border border-blue-600" id="message" name="message" placeholder="  Message" rows="7" required="my-3"></textarea></div><input type="checkbox" id="j&#39;accepte" name="j&#39;accepte" class="mr-5 h-6 w-6 border-2 border-blue-600" required><label for="j&#39;accepte" class="check font-museomoderno">J\u2019accepte et j\u2019ai lu les conditions g\xE9n\xE9rales d\u2019utilisations.</label><div class="flex pl-10 pr-10 items-end"><button type="submit" class="rounded bg-blue-600 text-white">Envoyer</button></div></form><p class="flex pl-5 pt-5 pb-10 text-black font-museomoderno sm:text-base lg:text-xl xl:text-2xl">* champs obligatoires</p></div>',1);function jM(n,e,t,i,s,r){const a=ke("footer1");return Ie(),Be(rt,null,[WM,_e(a)],64)}var qM=nt(GM,[["render",jM]]);const $M={},XM={width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 relative",preserveAspectRatio:"xMidYMid meet"},YM=b("path",{d:"M3 8H21",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ZM=b("path",{d:"M3 16H21",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),KM=b("path",{d:"M3 24H21",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),JM=[YM,ZM,KM];function QM(n,e){return Ie(),Be("svg",XM,JM)}var ch=nt($M,[["render",QM]]);function uh(n,e){return Ie(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[_e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})])}const ew={name:"App",components:{MenuIcon:uh,Logo:gr,Navigation:ch},data(){return{menuOuvert:!1}}},tw={class:"bg-gradient-to-br from-sky-500 to-indigo-600 sticky top-0 drop-shadow-lg z-10"},nw=b("a",{href:"#content",class:"sr-only focus:not-sr-only text-lg text-white"}," Passez au contenu ",-1),iw={class:"lg:flex lg:justify-between items-center"},sw={class:"flex justify-between items-center"},rw=b("h1",{class:"text-gray-50 text-xl font-bold lg:text-5xl"},"Arena",-1),ow={class:"text-5xl cursor-pointer lg:hidden block w-8 h-8 mx-55"},aw=b("span",{class:"sr-only"},"Menu",-1),lw={key:0,id:"menu",class:"lg:hidden w-full text-xl font-museomoderno py-4 text-center"},cw={class:"my-5"},uw=je("Accueil"),dw={class:"my-5"},fw=je("Projets"),hw={class:"my-5"},pw=je("Ajout"),mw={class:"my-5"},gw=je("Connexion"),_w={class:"my-5"},xw=je("Contact"),vw={class:"lg:flex gap-4 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden"},bw={class:"my-5"},yw=je("Accueil"),Mw={class:"my-5"},ww=je("Projets"),Sw={class:"my-5"},Ew=je("Ajout"),Aw={class:"my-5"},Tw=je("Connexion"),Lw={class:"my-5"},Cw=je("Contact");function Dw(n,e,t,i,s,r){const a=ke("Logo"),o=ke("RouterLink"),l=ke("MenuIcon");return Ie(),Be("header",tw,[nw,b("nav",iw,[b("div",sw,[_e(o,{to:"/"},{default:Re(()=>[_e(a,{class:"w-24 h-24"})]),_:1}),rw,b("span",ow,[_e(l,{class:"text-white","aria-controls":"menu","aria-expanded":s.menuOuvert,onClick:e[0]||(e[0]=c=>s.menuOuvert=!s.menuOuvert)},null,8,["aria-expanded"]),aw])]),_e(Co,{enter:"transition duration-2000 ease-out",enterFrom:"transform translate-x-full opacity-0",enterTo:"transform translate-x-0 opacity-100",leave:"transition duration-1750 ease-out",leaveFrom:"transform  translate-x-0 opacity-100",leaveTo:"transform translate-x-full opacity-0"},{default:Re(()=>[s.menuOuvert?(Ie(),Be("ul",lw,[b("li",cw,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white",to:"/"},{default:Re(()=>[uw]),_:1})]),b("li",dw,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno",to:"/jeux"},{default:Re(()=>[fw]),_:1})]),b("li",hw,[n.isLoggedIn?(Ie(),qn(o,{key:0,class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno",to:"/createProjet"},{default:Re(()=>[pw]),_:1})):dn("",!0)]),b("li",mw,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white",to:"/login"},{default:Re(()=>[gw]),_:1})]),b("li",_w,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white",to:"/contact"},{default:Re(()=>[xw]),_:1})])])):dn("",!0)]),_:1}),b("ul",vw,[b("li",bw,[_e(o,{class:"my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-museomoderno text-white",to:"/"},{default:Re(()=>[yw]),_:1})]),b("li",Mw,[_e(o,{class:"my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white",to:"/jeux"},{default:Re(()=>[ww]),_:1})]),b("li",Sw,[n.isLoggedIn?(Ie(),qn(o,{key:0,class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno",to:"/createProjet"},{default:Re(()=>[Ew]),_:1})):dn("",!0)]),b("li",Aw,[_e(o,{class:"my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white",to:"/login"},{default:Re(()=>[Tw]),_:1})]),b("li",Lw,[_e(o,{class:"my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white",to:"/contact"},{default:Re(()=>[Cw]),_:1})])])])])}var dh=nt(ew,[["render",Dw]]);const Pw={name:"App",components:{header1:dh,footer1:Il}},Rw=Tl('<br><br><br><br><br><p class="w-auto h-auto m-auto text-2xl text-center font-bold font-museomoderno text-blue-700">Mentions L\xE9gales</p><p class="flex pl-5 pt-5 pb-10 font-black font-museomoderno text-black sm:text-base lg:text-xl xl:text-2xl"> 1. Editeur du site </p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Le site est \xE9dit\xE9 et suivi par l\u2019Universit\xE9 de Franche-Comt\xE9 dans un but p\xE9dagogique.</p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Tel : 03 81 66 66 66</p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Adresse : 1 Rue Claude Goudimel, 25000 Besan\xE7on </p><p class="flex pl-5 pt-5 pb-10 font-black font-museomoderno text-black sm:text-base lg:text-xl xl:text-2xl"> 2. Directeur de publication </p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Le directeur de publication est Pascal CHATONNAY.</p><p class="flex pl-5 pt-5 pb-10 text-black font-rajdhani sm:text-base lg:text-xl xl:text-2xl"><a href="mailto:pascal.chatonnay@edu.univ-fcomte.fr">Mail : pascal.chatonnay@edu.univ-fcomte.fr</a></p><p class="flex pl-5 pt-5 pb-10 font-black font-museomoderno text-black sm:text-base lg:text-xl xl:text-2xl"> 3. Co-directeur de publication </p><p class="flex pl-5 pt-5 pb-10 text-black font-rajdhani sm:text-base lg:text-xl xl:text-2xl"> Le codirecteur de publication est L\xE9na CHATONNAY.</p><p class="flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl"><a href="mailto:lena.chatonnay@edu.univ-fcomte.fr">Mail : lena.chatonnay@edu.univ-fcomte.fr</a></p><p class="flex pl-5 pt-5 pb-10 font-black font-museomoderno text-black sm:text-base lg:text-xl xl:text-2xl"> 4. Responsable de r\xE9daction </p><p class="flex pl-5 pt-5 pb-10 text-black font-rajdhani sm:text-base lg:text-xl xl:text-2xl"> Le responsable de r\xE9daction est Pascal CHATONNAY. </p><p class="flex pl-5 pt-5 pb-10 text-black font-rajdhani sm:text-base lg:text-xl xl:text-2xl"><a href="mailto:pascal.chatonnay@edu.univ-fcomte.fr">Mail : pascal.chatonnay@edu.univ-fcomte.fr</a></p><p class="flex pl-5 pt-5 pb-10 font-black font-museomoderno text-black sm:text-base lg:text-xl xl:text-2xl"> 5. H\xE9bergeur </p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Le site est h\xE9berg\xE9 par INFOMANIAK NETWORK SA </p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Adresse :Rue Eug\xE8ne-Marziano 25, 1227 Les Acacias, Suisse</p><p class="flex pl-5 pt-5 pb-10 font-rajdhani text-black sm:text-base lg:text-xl xl:text-2xl"> Tel : +41 22 820 35 44</p>',23);function Iw(n,e,t,i,s,r){const a=ke("header1"),o=ke("footer1");return Ie(),Be(rt,null,[_e(a),Rw,_e(o)],64)}var Fw=nt(Pw,[["render",Iw]]);const Uw={data(){return{user:{login:"",email:"",password:""},password2:"",message:"Vous \xEAtes bien connect\xE9",type:"password"}},mounted(){this.message="Utilisateur pas connect\xE9"},methods:{onCnx(){bh(Gn(),this.user.email,this.user.password).then(n=>{this.user=n.user,console.log("user",this.user),Qt.emit("connectUser",{user:this.user}),this.message="Bienvenue  "+this.user.email}).catch(n=>{console.log("erreur connexion",n),this.message="erreur d'authentification"})},onDcnx(){yh(Gn()).then(n=>{this.message="User non connect\xE9",this.user={email:null,password:null},Qt.emit("deConnectUser",{user:this.user})}).catch(n=>{console.log("erreur deconnexion",n)})},onCreate(){this.user.password===this.password2?(Mh(Gn(),this.user.email,this.user.password).then(n=>{n.user}).catch(n=>{console.log("erreur cr\xE9ation",n),this.message="erreur de cr\xE9ation"}),this.onCnx(),wh(Gn(),n=>{if(n){const e=n.uid,t=He(),i=ht(t,"users"),s=Ms(i,{uid:e,admin:!1,login:this.user.login});console.log("document cr\xE9\xE9 avec le id : ",s.id)}else console.log("user pas connecter")})):(this.message="password pas coh\xE9rent",console.log("mdp mauvais"))}},components:{Logo:gr}},Nw={class:"flex justify-center"},Ow={class:"px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative"},zw={class:"contents"},Bw=b("legend",{class:"my-1 border-b-2 col-span-full text-black font-museomoderno textresponsive effet-shadowblanc pb-7"},"Se connecter",-1),kw=b("label",{class:"text-black font-museomoderno textresponsive"},"Email :",-1),Vw=b("label",{class:"text-black font-museomoderno textresponsive"},"Password : ",-1),Hw=b("button",{class:"w-full text-center py-2 bg-blue-700 rounded-sm mt-5 text-white font-museomoderno textresponsive effet-shadowblanc p-5",type:"submit"},"Se Connecter",-1),Gw={class:"w-full text-center py-3 bg-yellow-100 rounded-sm mt-5 text-black"};function Ww(n,e,t,i,s,r){const a=ke("Logo"),o=ke("RouterLink");return Ie(),Be("div",null,[_e(o,{to:"./"},{default:Re(()=>[b("div",Nw,[_e(a)])]),_:1}),b("div",Ow,[b("div",null,[b("form",{class:"grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1",onSubmit:e[3]||(e[3]=wn((...l)=>r.onCnx&&r.onCnx(...l),["prevent"]))},[b("fieldset",zw,[Bw,kw,dt(b("input",{type:"email",class:"rounded-sm border-2 text-black p-1","onUpdate:modelValue":e[0]||(e[0]=l=>s.user.email=l),requiblue:""},null,512),[[ft,s.user.email]]),Vw,dt(b("input",{class:"rounded-sm border-2 text-black mb-10 p-1",type:"password","onUpdate:modelValue":e[1]||(e[1]=l=>s.user.password=l),requiblue:""},null,512),[[ft,s.user.password]]),Hw,b("button",{class:"w-full text-center py-2 bg-blue-700 rounded-sm mt-5 text-white font-museomoderno textresponsive effet-shadowblanc p-5",type:"button",onClick:e[2]||(e[2]=l=>r.onDcnx())},"Se D\xE9connecter"),b("p",Gw,ln(s.message),1)])],32)])])])}var jw=nt(Uw,[["render",Ww]]);const qw={},$w={class:"bg-red-600"},Xw=je(" Test ");function Yw(n,e,t,i,s,r){const a=ke("Nuage");return Ie(),Be("div",$w,[Xw,_e(a)])}var Zw=nt(qw,[["render",Yw]]);const Kw={name:"App",components:{Logo:gr}},Jw={class:"flex items-center justify-center w-full h-screen font-algerian"},Qw={class:"px-4 lg:py-12"},eS={class:"lg:gap-4 lg:flex"},tS={class:"flex flex-col items-center justify-center md:py-24 lg:py-32"},nS=b("h1",{class:"font-bold text-blue-800 text-9xl"},"404",-1),iS=b("p",{class:"mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"},[b("span",{class:"text-red-500"},"Oops!"),je(" Page non trouv\xE9e ")],-1),sS=b("p",{class:"mb-8 text-center text-gray-500 md:text-lg"}," La page que vous recherchez n'existe pas... ",-1),rS=je("Accueil"),oS=b("p",{class:"mb-8 text-center text-gray-500 md:text-lg"}," Vous cherchiez peut-\xEAtre ? ",-1),aS=je("Programmation ?"),lS=b("br",null,null,-1),cS=je("Artistes ?"),uS=b("br",null,null,-1),dS=je("Festival ?"),fS=b("br",null,null,-1),hS=je("Billetterie ?"),pS=b("br",null,null,-1),mS=je("Contact ?");function gS(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be("div",Jw,[b("div",Qw,[b("div",eS,[b("div",tS,[nS,iS,sS,_e(a,{to:"/",class:"px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100"},{default:Re(()=>[rS]),_:1}),oS,_e(a,{to:"/histoire",class:"px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100"},{default:Re(()=>[aS]),_:1}),lS,_e(a,{to:"/reglement",class:"px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100"},{default:Re(()=>[cS]),_:1}),uS,_e(a,{to:"/jeux",class:"px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100"},{default:Re(()=>[dS]),_:1}),fS,_e(a,{to:"/inscription",class:"px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100"},{default:Re(()=>[hS]),_:1}),pS,_e(a,{to:"/contact",class:"px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100"},{default:Re(()=>[mS]),_:1})])])])])}var _S=nt(Kw,[["render",gS]]);const xS={name:"CreateView",data(){return{imageData:null,ListeProjet:[],Projet:{photo:null,nom:null,description:null,description_detaille:null}}},mounted(){this.getProjet()},methods:{async getProjet(){const n=He(),e=ht(n,"Projet"),t=hi(e,ll("nom","asc"));await vn(t,i=>{this.ListeProjet=i.docs.map(s=>tn({id:s.id},s.data())),console.log("Liste des Projet",this.ListeProjet)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.Projet.photo=this.file.name;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async CreateProjet(){const n=lt(),e=st(n,"ApercuProjet/"+this.Projet.photo);await ji(e,this.imageData,"data_url").then(t=>{console.log("Uploaded a base64 string");const i=He();Ms(ht(i,"Projet"),this.Projet)}),this.$router.push("/projets")}}},vS=b("h1",{class:"font-museomoderno mb-20 mt-10 border-b-2 text-center text-2xl"},"Ajout d'un Projet",-1),bS={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},yS={class:"pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14"},MS={class:"grid grid-cols-1 gap-4 lg:flex lg:w-[100%] lg:justify-center"},wS={class:"m-auto"},SS=["src"],ES={class:"grid grid-cols-1 gap-14"},AS={class:"flex h-10 overflow-hidden rounded-2xl text-black"},TS=b("div",{class:"flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Nom",-1),LS={class:"flex h-12 overflow-hidden rounded-2xl text-black"},CS=b("p",{class:"font-museomoderno border-[1px] bg-blue-700 px-6 py-3 text-white"},"Description",-1),DS={class:"flex h-auto overflow-hidden rounded-2xl text-black"},PS=b("p",{class:"font-museomoderno border-[1px] bg-blue-700 px-6 py-3 text-white"},"Description d\xE9taill\xE9",-1),RS={class:"flex h-10 overflow-hidden rounded-sm text-black"},IS=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Logo",-1),FS={class:"custom-file"},US=b("label",{class:"custom-file-label",for:"file"},"S\xE9lectionner l'image",-1),NS={class:"mt-16 flex w-full justify-center gap-5"},OS=b("button",{class:"font-rajdhani mb-20 rounded-2xl bg-blue-600 py-2 px-5 text-white",type:"submit"}," Ajouter ",-1),zS={class:"font-rajdhani mb-20 rounded-2xl bg-blue-600 py-2 px-5 text-white",type:"button"},BS=je("Annuler");function kS(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[vS,b("div",bS,[b("section",yS,[b("form",{enctype:"multipart/form-data",onSubmit:e[4]||(e[4]=wn((...o)=>r.CreateProjet&&r.CreateProjet(...o),["prevent"]))},[b("div",MS,[b("div",wS,[b("img",{class:"",src:s.imageData},null,8,SS)]),b("div",ES,[b("div",AS,[TS,dt(b("input",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Nom du jeu","onUpdate:modelValue":e[0]||(e[0]=o=>s.Projet.nom=o),required:""},null,512),[[ft,s.Projet.nom]])]),b("div",LS,[CS,dt(b("input",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Description du projet","onUpdate:modelValue":e[1]||(e[1]=o=>s.Projet.description=o),required:""},null,512),[[ft,s.Projet.description]])]),b("div",DS,[PS,dt(b("textarea",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Description du projet","onUpdate:modelValue":e[2]||(e[2]=o=>s.Projet.description_detaille=o),required:""},null,512),[[ft,s.Projet.description_detaille]])]),b("div",RS,[IS,b("div",FS,[b("input",{type:"file",class:"custom-file-input",ref:"file",id:"file",onChange:e[3]||(e[3]=(...o)=>r.previewImage&&r.previewImage(...o))},null,544),US])])])]),b("div",NS,[OS,b("button",zS,[_e(a,{to:"/projets"},{default:Re(()=>[BS]),_:1})])])],32)])])],64)}var VS=nt(xS,[["render",kS]]);const HS={name:"UpdateView",data(){return{imageData:null,ListeProjet:[],Projet:{photo:null,nom:null,description:null},refProjet:null,imgModifiee:!1,photoActuelle:null}},mounted(){console.log("id Projet",this.$route.params.id),this.getProjet(this.$route.params.id)},methods:{previewImage:function(n){this.file=this.$refs.file.files[0],this.Projet.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async getProjet(n){const e=He(),t=kt(e,"Projet",n);this.refProjet=await Wi(t),this.refProjet.exists()?(this.Projet=this.refProjet.data(),this.photoActuelle=this.Projet.photo):this.console.log("Projet inexistant");const i=lt(),s=st(i,"ApercuProjet/"+this.Projet.photo);Bt(s).then(r=>{this.imageData=r}).catch(r=>{console.log("erreur downloadUrl",r)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.Projet.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async UpdateProjet(){if(this.imgModifiee){const e=lt();let t=st(e,"ApercuProjet/"+this.photoActuelle);Ds(t),t=st(e,"ApercuProjet/"+this.Projet.photo),await ji(t,this.imageData,"data_url").then(i=>{console.log("Uploaded a base64 string",this.Projet.photo)})}const n=He();await go(kt(n,"Projet",this.$route.params.id),this.Projet),this.$router.push("/Projets")}}},GS=b("h1",{class:"font-lato mb-20 border-b-2 text-center text-2xl"},"Modifier le Projet",-1),WS={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},jS={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},qS={class:"grid place-items-center"},$S=["src"],XS={class:"grid grid-cols-1 gap-14"},YS={class:"flex h-10 overflow-hidden rounded-2xl text-white"},ZS=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5"},"Nom",-1),KS={class:"flex h-12 overflow-hidden rounded-2xl text-white"},JS=b("p",{class:"font-museomoderno -mt-2 border-[1px] bg-blue-700 px-6 py-3 leading-5"},"Description",-1),QS={class:"flex h-12 overflow-hidden rounded-2xl text-black"},e2=b("p",{class:"font-rajdhani -mt-[9px] border-[1px] bg-blue-700 px-6 py-3 leading-5 text-white"},"Description d\xE9taill\xE9",-1),t2={class:"flex h-10 overflow-hidden rounded-sm text-white"},n2=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5"},"Photo",-1),i2={class:"relative w-full"},s2=b("label",{class:"font-museomoderno absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-white border-2 border-blue-500 text-blue-700",for:"file"},"S\xE9lectionner l'image",-1),r2={class:"mt-auto grid w-full grid-cols-2 place-items-center"},o2={class:"font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white",type:"button"},a2=je("Annuler"),l2=b("button",{class:"font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white",type:"submit"}," Modifier ",-1);function c2(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[GS,b("div",WS,[b("form",{onSubmit:e[4]||(e[4]=wn((...o)=>r.UpdateProjet&&r.UpdateProjet(...o),["prevent"]))},[b("div",jS,[b("div",qS,[b("img",{src:s.imageData,class:"w-1/2"},null,8,$S)]),b("div",XS,[b("div",YS,[ZS,dt(b("input",{class:"font-museomoderno w-full border-2 bg-blue-700 p-5",type:"text",placeholder:"Nom du projet","onUpdate:modelValue":e[0]||(e[0]=o=>s.Projet.nom=o),required:""},null,512),[[ft,s.Projet.nom]])]),b("div",KS,[JS,dt(b("input",{class:"font-museomoderno w-full border-2 bg-blue-700 p-5",type:"text",placeholder:"Description du projet","onUpdate:modelValue":e[1]||(e[1]=o=>s.Projet.description=o),required:""},null,512),[[ft,s.Projet.description]])]),b("div",QS,[e2,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Description du projet","onUpdate:modelValue":e[2]||(e[2]=o=>s.Projet.description_detaille=o),disabled:""},null,512),[[ft,s.Projet.description_detaille]])]),b("div",t2,[n2,b("div",i2,[b("input",{type:"file",class:"font-lato relative w-full border-2 bg-white p-5",ref:"file",id:"file",onChange:e[3]||(e[3]=(...o)=>r.previewImage&&r.previewImage(...o))},null,544),s2])])])]),b("div",r2,[b("button",o2,[_e(a,{to:"/projets"},{default:Re(()=>[a2]),_:1})]),l2])],32)])],64)}var u2=nt(HS,[["render",c2]]);const d2={name:"DeleteView",data(){return{Projet:{photo:null,nom:null,description:null,description_detaille:null},refProjet:null,photoActuelle:null}},mounted(){console.log("id Projet",this.$route.params.id),this.getprojet(this.$route.params.id)},methods:{async getprojet(n){const e=He(),t=kt(e,"Projet",n);this.refProjet=await Wi(t),this.refProjet.exists()?(this.Projet=this.refProjet.data(),this.photoActuelle=this.Projet.photo):this.console.log("Projet inexistant");const i=lt(),s=st(i,"ApercuProjet/"+this.Projet.photo);Bt(s).then(r=>{this.photoActuelle=r}).catch(r=>{console.log("erreur downloadUrl",r)})},async DeleteProjet(){const n=He();await _o(kt(n,"Projet",this.$route.params.id));const e=lt();let t=st(e,"ApercuProjet/"+this.Projet.photo);Ds(t),this.$router.push("/Projets")}}},f2=b("h1",{class:"font-rajdhani mb-10 mt-20 border-b-2 text-center text-2xl"},"Suppression d'un projet",-1),h2={class:"relative mt-2 flex flex-col gap-20 px-5"},p2=b("div",{class:""},[b("p",{class:"font-rajdhani w-full bg-blue-700 py-3 text-center text-white"}," \xCAtes-vous sur de vouloir supprimer ce projet ? ")],-1),m2={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},g2={class:"grid place-items-center"},_2=["src"],x2={class:"grid grid-cols-1 gap-14"},v2={class:"flex h-10 overflow-hidden rounded-2xl text-black"},b2=b("div",{class:"font-rajdhani flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Nom",-1),y2={class:"flex h-12 overflow-hidden rounded-2xl text-black"},M2=b("p",{class:"font-rajdhani -mt-[9px] border-[1px] bg-blue-700 px-6 py-3 leading-5 text-white"},"Description",-1),w2={class:"flex h-12 overflow-hidden rounded-2xl text-black"},S2=b("p",{class:"font-rajdhani -mt-[9px] border-[1px] bg-blue-700 px-6 py-3 leading-5 text-white"},"Description d\xE9taill\xE9",-1),E2={class:"mt-14 grid w-full grid-cols-2 place-items-center"},A2={class:"font-rajdhani mb-20 rounded-2xl bg-blue-700 py-2 px-5 text-white",type:"button"},T2=je("Annuler"),L2=b("button",{class:"font-rajdhani mb-20 rounded-2xl bg-blue-700 py-2 px-5 text-white",type:"submit"}," Supprimer ",-1);function C2(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[f2,b("div",h2,[p2,b("form",{onSubmit:e[3]||(e[3]=wn((...o)=>r.DeleteProjet&&r.DeleteProjet(...o),["prevent"]))},[b("div",m2,[b("div",g2,[b("img",{src:s.photoActuelle,class:"w-1/2"},null,8,_2)]),b("div",x2,[b("div",v2,[b2,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Nom du projet","onUpdate:modelValue":e[0]||(e[0]=o=>s.Projet.nom=o),disabled:""},null,512),[[ft,s.Projet.nom]])]),b("div",y2,[M2,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Description du projet","onUpdate:modelValue":e[1]||(e[1]=o=>s.Projet.description=o),disabled:""},null,512),[[ft,s.Projet.description]])]),b("div",w2,[S2,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Description du projet","onUpdate:modelValue":e[2]||(e[2]=o=>s.Projet.description_detaille=o),disabled:""},null,512),[[ft,s.Projet.description_detaille]])])])]),b("div",E2,[b("button",A2,[_e(a,{to:"/projets"},{default:Re(()=>[T2]),_:1})]),L2])],32)])],64)}var D2=nt(d2,[["render",C2]]);const P2={},R2={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},I2=b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"},null,-1),F2=b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),U2=[I2,F2];function N2(n,e){return Ie(),Be("svg",R2,U2)}var O2=nt(P2,[["render",N2]]);const z2={props:{nom:String,description:String,photo:String,id:String},components:{Supprimer:Ro,Modification:Po,Apercu:O2},data(){return{menuOuvert:!1,user:{email:null,password:null},userInfo:null,name:"Vid\xE9o",isAdmin:!1}},mounted(){this.getUserConnect(),Qt.on("connectUser",n=>{this.user=n.user,this.getUserInfo(this.user)}),Qt.on("deConnectUser",n=>{this.user=n.user,this.userInfo=null,this.name="Vid\xE9o",this.isAdmin=!1})},methods:{async getUserConnect(){await Gn().onAuthStateChanged(function(n){n&&(this.user=n,this.getUserInfo(this.user))}.bind(this))},async getUserInfo(n){const e=He(),t=ht(e,"users"),i=hi(t,pr("uid","==",n.uid));await vn(i,s=>{this.userInfo=s.docs.map(o=>tn({id:o.id},o.data())),this.name=this.userInfo[0].login,this.isAdmin=this.userInfo[0].admin;const r=lt(),a=st(r,"users/"+this.userInfo[0].avatar);Bt(a).then(o=>{this.avatar=o}).catch(o=>{console.log("erreur downloadUrl",o)})})}}},B2={ref:"container"},k2={class:"bg-red-800 text-white rounded-xl px-4 pt-3 shadow-card"},V2={class:"flex"},H2=["src"],G2={class:"flex justify-center gap-10 mt-1"},W2={class:"bg-red-300"},j2={class:"mx-4"},q2={class:"text-base"},$2={class:"text-sm mt-4 md:text-lg lg:text-xl"};function X2(n,e,t,i,s,r){const a=ke("Modification"),o=ke("RouterLink"),l=ke("Supprimer"),c=ke("Apercu");return Ie(),Be("div",B2,[b("div",k2,[b("div",V2,[b("img",{class:"rounded-xl w-1/3",src:t.photo,alt:"Image de l'artiste"},null,8,H2)]),b("div",G2,[s.isAdmin?(Ie(),qn(o,{key:0,to:{name:"UpdateProjets",params:{id:t.id}}},{default:Re(()=>[_e(a)]),_:1},8,["to"])):dn("",!0),s.isAdmin?(Ie(),qn(o,{key:1,class:"",to:{name:"DeleteProjets",params:{id:t.id}}},{default:Re(()=>[b("button",W2,[_e(l)])]),_:1},8,["to"])):dn("",!0),_e(o,{to:{name:"idprojet",params:{id:t.id}}},{default:Re(()=>[_e(c)]),_:1},8,["to"])])]),b("div",j2,[b("h3",q2,ln(t.nom),1),b("p",$2,ln(t.description),1)])],512)}var Y2=nt(z2,[["render",X2]]);const Z2={},K2={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},J2=b("path",{d:"M23.9279 22.2749L16.1369 14.4839C17.3459 12.9209 17.9999 11.01 17.9999 8.99996C17.9999 6.59397 17.0609 4.33798 15.3629 2.63699C13.6649 0.935996 11.403 0 8.99996 0C6.59697 0 4.33498 0.938996 2.63699 2.63699C0.935996 4.33498 0 6.59397 0 8.99996C0 11.403 0.938996 13.6649 2.63699 15.3629C4.33498 17.0639 6.59397 17.9999 8.99996 17.9999C11.01 17.9999 12.9179 17.3459 14.4809 16.1399L22.2719 23.9279C22.2947 23.9508 22.3219 23.9689 22.3517 23.9813C22.3816 23.9936 22.4136 24 22.4459 24C22.4782 24 22.5102 23.9936 22.5401 23.9813C22.5699 23.9689 22.5971 23.9508 22.6199 23.9279L23.9279 22.6229C23.9508 22.6001 23.9689 22.5729 23.9813 22.5431C23.9936 22.5132 24 22.4812 24 22.4489C24 22.4166 23.9936 22.3846 23.9813 22.3547C23.9689 22.3249 23.9508 22.2977 23.9279 22.2749V22.2749ZM13.7519 13.7519C12.4799 15.0209 10.794 15.7199 8.99996 15.7199C7.20597 15.7199 5.51998 15.0209 4.24798 13.7519C2.97899 12.4799 2.27999 10.794 2.27999 8.99996C2.27999 7.20597 2.97899 5.51698 4.24798 4.24798C5.51998 2.97899 7.20597 2.27999 8.99996 2.27999C10.794 2.27999 12.4829 2.97599 13.7519 4.24798C15.0209 5.51998 15.7199 7.20597 15.7199 8.99996C15.7199 10.794 15.0209 12.4829 13.7519 13.7519Z",fill:"black"},null,-1),Q2=[J2];function eE(n,e){return Ie(),Be("svg",K2,Q2)}var tE=nt(Z2,[["render",eE]]);const nE={props:{Nom:String}},iE={class:"bg-red-800 text-white font-algerian font-bold w-1/2 text-center"};function sE(n,e,t,i,s,r){return Ie(),Be("button",iE,ln(t.Nom),1)}var rE=nt(nE,[["render",sE]]);const oE={},aE={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 relative",preserveAspectRatio:"none"},lE=b("path",{d:"M16.474 5.40799L18.592 7.52499L16.474 5.40799ZM17.836 3.54299L12.109 9.27C11.8131 9.56549 11.6113 9.94198 11.529 10.352L11 13L13.648 12.47C14.058 12.388 14.434 12.187 14.73 11.891L20.457 6.16399C20.6291 5.9919 20.7656 5.78759 20.8588 5.56273C20.9519 5.33788 20.9998 5.09688 20.9998 4.85349C20.9998 4.61011 20.9519 4.36911 20.8588 4.14426C20.7656 3.9194 20.6291 3.71509 20.457 3.54299C20.2849 3.3709 20.0806 3.23438 19.8557 3.14124C19.6309 3.04811 19.3899 3.00017 19.1465 3.00017C18.9031 3.00017 18.6621 3.04811 18.4373 3.14124C18.2124 3.23438 18.0081 3.3709 17.836 3.54299V3.54299Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),cE=b("path",{d:"M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H9",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),uE=[lE,cE];function dE(n,e){return Ie(),Be("svg",aE,uE)}var fE=nt(oE,[["render",dE]]);const hE={data(){return{nom:null,listeProjetSynchro:[],filter:""}},computed:{orderByName:function(){return this.listeProjetSynchro.sort(function(n,e){return n.Nom<e.Nom?-1:n.Nom>e.Nom?1:0})},filterByName:function(){if(this.filter.length>0){let n=this.filter.toLowerCase();return this.orderByName.filter(function(e){return e.Nom.toLowerCase().includes(n)})}else return this.orderByName}},mounted(){this.getProjetSynchro()},methods:{async getProjetSynchro(){const n=He(),e=ht(n,"Projet");await vn(e,t=>{this.listeProjetSynchro=t.docs.map(i=>tn({id:i.id},i.data())),this.listeProjetSynchro.forEach(function(i){const s=lt(),r=st(s,"ApercuProjet/"+i.photo);Bt(r).then(a=>{i.photo=a}).catch(a=>{console.log("erreur downloadUrl",a)})})})},async createProjet(){const n=He(),e=ht(n,"Projet"),t=await Ms(e,{nom:this.nom,description:this.description,photo:this.photo});console.log("document cr\xE9\xE9 avec le id : ",t.id)},async updateProjet(n){const e=He(),t=kt(e,"Projet",n.id);await go(t,{nom:n.nom})},async deleteProjet(n){const e=He(),t=kt(e,"Projet",n.id);await _o(t)},async createProjet(){const n=lt(),e=st(n,"Projet/"+this.Projet.photo);await ji(e,this.imageData,"data_url").then(t=>{console.log("Uploaded a base64 string");const i=He();Ms(ht(i,"Projet"),this.Projet)}),this.$router.push("/projets")}},name:"App",components:{card:Y2,Rechercher:tE,Modification:Po,Supprimer:Ro,Header1:dh,Footer1:Il,BoutonImage:rE,Creation:fE,RouterLink:Rl}},pE={class:"mt-12 px-5 flex flex-col gap-20 relative"},mE=b("h1",{class:"font-smythe text-2xl"},"Projet",-1),gE={class:"grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-3"};function _E(n,e,t,i,s,r){const a=ke("card"),o=ke("Footer1");return Ie(),Be(rt,null,[b("div",pE,[mE,b("div",gE,[(Ie(!0),Be(rt,null,qa(s.listeProjetSynchro,l=>(Ie(),Be("div",{key:l.id},[_e(a,{nom:l.nom,description:l.description,photo:l.photo,id:l.id},null,8,["nom","description","photo","id"])]))),128))])]),_e(o)],64)}var xE=nt(hE,[["render",_E]]);const vE={name:"UpdateView",data(){return{imageData:null,ListeProjet:[],Projet:{photo:null,competenceDesign:null,nom:null,description:null,description_detaille:null},refProjet:null,imgModifiee:!1,photoActuelle:null}},mounted(){console.log("id Projet",this.$route.params.id),this.getProjet(this.$route.params.id)},methods:{previewImage:function(n){this.file=this.$refs.file.files[0],this.Projet.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async getProjet(n){const e=He(),t=kt(e,"Projet",n);this.refProjet=await Wi(t),this.refProjet.exists()?(this.Projet=this.refProjet.data(),this.photoActuelle=this.Projet.photo):this.console.log("Projet inexistant");const i=lt(),s=st(i,"ApercuProjet/"+this.Projet.photo);Bt(s).then(r=>{this.imageData=r}).catch(r=>{console.log("erreur downloadUrl",r)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.Projet.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}}}},bE=b("h1",{class:"font-lato mb-20 border-b-2 text-center text-2xl"},"Modifier le Projet",-1),yE={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},ME={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},wE={class:"grid place-items-center"},SE=["src"],EE={class:"grid grid-cols-1 gap-14"},AE={class:"text-black"},TE={class:"text-black"},LE={class:"text-black"},CE={class:"text-black"},DE=b("div",{class:"flex h-10 overflow-hidden rounded-sm text-white"},null,-1);function PE(n,e,t,i,s,r){return Ie(),Be(rt,null,[bE,b("div",yE,[b("form",{onSubmit:e[0]||(e[0]=wn((...a)=>n.UpdateProjet&&n.UpdateProjet(...a),["prevent"]))},[b("div",ME,[b("div",wE,[b("img",{src:s.imageData,class:"w-1/2"},null,8,SE)]),b("div",EE,[b("div",AE,ln(s.Projet.nom),1),b("div",TE,ln(s.Projet.description),1),b("div",LE,ln(s.Projet.description_detaille),1),b("div",CE,ln(s.Projet.competenceDesign),1),DE])])],32)])],64)}var RE=nt(vE,[["render",PE]]);const IE={name:"CreateView",data(){return{imageData:null,ListeLogicielDesign:[],LogicielDesign:{photo:null,nom:null,description:null}}},mounted(){this.getLogicielDesign()},methods:{async getLogicielDesign(){const n=He(),e=ht(n,"LogicielDesign"),t=hi(e,ll("nom","asc"));await vn(t,i=>{this.ListeLogicielDesign=i.docs.map(s=>tn({id:s.id},s.data())),console.log("Liste des logiciels designs",this.ListeLogicielDesign)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.LogicielDesign.photo=this.file.name;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async CreateLogicielDesign(){const n=lt(),e=st(n,"ApercuLogicielDesign/"+this.LogicielDesign.photo);await ji(e,this.imageData,"data_url").then(t=>{console.log("Uploaded a base64 string");const i=He();Ms(ht(i,"LogicielDesign"),this.LogicielDesign)}),this.$router.push("/")}}},FE=b("h1",{class:"font-museomoderno mb-20 mt-10 border-b-2 text-center text-2xl"},"Ajout d'une comp\xE9tence en Design",-1),UE={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},NE={class:"pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14"},OE={class:"grid grid-cols-1 gap-4 lg:flex lg:w-[100%] lg:justify-center"},zE={class:"m-auto"},BE=["src"],kE={class:"grid grid-cols-1 gap-14"},VE={class:"flex h-10 overflow-hidden rounded-2xl text-black"},HE=b("div",{class:"flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Nom",-1),GE={class:"flex h-12 overflow-hidden rounded-2xl text-black"},WE=b("p",{class:"font-museomoderno border-[1px] bg-blue-700 px-6 py-3 text-white"},"Description",-1),jE={class:"flex h-10 overflow-hidden rounded-sm text-black"},qE=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Logo",-1),$E={class:"custom-file"},XE=b("label",{class:"custom-file-label",for:"file"},"S\xE9lectionner l'image",-1),YE={class:"mt-16 flex w-full justify-center gap-5"},ZE=b("button",{class:"font-rajdhani mb-20 rounded-2xl bg-blue-600 py-2 px-5 text-white",type:"submit"}," Ajouter ",-1),KE={class:"font-rajdhani mb-20 rounded-2xl bg-blue-600 py-2 px-5 text-white",type:"button"},JE=je("Annuler");function QE(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[FE,b("div",UE,[b("section",NE,[b("form",{enctype:"multipart/form-data",onSubmit:e[3]||(e[3]=wn((...o)=>r.CreateLogicielDesign&&r.CreateLogicielDesign(...o),["prevent"]))},[b("div",OE,[b("div",zE,[b("img",{class:"",src:s.imageData},null,8,BE)]),b("div",kE,[b("div",VE,[HE,dt(b("input",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Nom du Logiciel","onUpdate:modelValue":e[0]||(e[0]=o=>s.LogicielDesign.nom=o),required:""},null,512),[[ft,s.LogicielDesign.nom]])]),b("div",GE,[WE,dt(b("input",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Description du logiciel","onUpdate:modelValue":e[1]||(e[1]=o=>s.LogicielDesign.description=o),required:""},null,512),[[ft,s.LogicielDesign.description]])]),b("div",jE,[qE,b("div",$E,[b("input",{type:"file",class:"custom-file-input",ref:"file",id:"file",onChange:e[2]||(e[2]=(...o)=>r.previewImage&&r.previewImage(...o))},null,544),XE])])])]),b("div",YE,[ZE,b("button",KE,[_e(a,{to:"/"},{default:Re(()=>[JE]),_:1})])])],32)])])],64)}var eA=nt(IE,[["render",QE]]);const tA={name:"UpdateView",data(){return{imageData:null,ListeLogicielDesign:[],LogicielDesign:{photo:null,nom:null,description:null},refLogicielDesign:null,imgModifiee:!1,photoActuelle:null}},mounted(){console.log("id Logiciel",this.$route.params.id),this.getLogicielDesign(this.$route.params.id)},methods:{previewImage:function(n){this.file=this.$refs.file.files[0],this.LogicielDesign.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async getLogicielDesign(n){const e=He(),t=kt(e,"LogicielDesign",n);this.refLogicielDesign=await Wi(t),this.refLogicielDesign.exists()?(this.LogicielDesign=this.refLogicielDesign.data(),this.photoActuelle=this.LogicielDesign.photo):this.console.log("logiciel inexistant");const i=lt(),s=st(i,"ApercuLogicielDesign/"+this.LogicielDesign.photo);Bt(s).then(r=>{this.imageData=r}).catch(r=>{console.log("erreur downloadUrl",r)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.LogicielDesign.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async UpdateLogicielDesign(){if(this.imgModifiee){const e=lt();let t=st(e,"ApercuLogicielDesign/"+this.photoActuelle);Ds(t),t=st(e,"ApercuLogicielDesign/"+this.LogicielDesign.photo),await ji(t,this.imageData,"data_url").then(i=>{console.log("Uploaded a base64 string",this.LogicielDesign.photo)})}const n=He();await go(kt(n,"LogicielDesign",this.$route.params.id),this.LogicielDesign),this.$router.push("/")}}},nA=b("h1",{class:"font-lato mb-20 border-b-2 text-center text-2xl"},"Modifier le Logiciel Design",-1),iA={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},sA={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},rA={class:"grid place-items-center"},oA=["src"],aA={class:"grid grid-cols-1 gap-14"},lA={class:"flex h-10 overflow-hidden rounded-2xl text-white"},cA=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5"},"Nom",-1),uA={class:"flex h-12 overflow-hidden rounded-2xl text-white"},dA=b("p",{class:"font-museomoderno -mt-2 border-[1px] bg-blue-700 px-6 py-3 leading-5"},"Description",-1),fA={class:"flex h-10 overflow-hidden rounded-sm text-white"},hA=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5"},"Photo",-1),pA={class:"relative w-full"},mA=b("label",{class:"font-museomoderno absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-white border-2 border-blue-500 text-blue-700",for:"file"},"S\xE9lectionner l'image",-1),gA={class:"mt-auto grid w-full grid-cols-2 place-items-center"},_A={class:"font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white",type:"button"},xA=je("Annuler"),vA=b("button",{class:"font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white",type:"submit"}," Modifier ",-1);function bA(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[nA,b("div",iA,[b("form",{onSubmit:e[3]||(e[3]=wn((...o)=>r.UpdateLogicielDesign&&r.UpdateLogicielDesign(...o),["prevent"]))},[b("div",sA,[b("div",rA,[b("img",{src:s.imageData,class:"w-1/2"},null,8,oA)]),b("div",aA,[b("div",lA,[cA,dt(b("input",{class:"font-museomoderno w-full border-2 bg-blue-700 p-5",type:"text",placeholder:"Nom du Logiciel","onUpdate:modelValue":e[0]||(e[0]=o=>s.LogicielDesign.nom=o),required:""},null,512),[[ft,s.LogicielDesign.nom]])]),b("div",uA,[dA,dt(b("input",{class:"font-museomoderno w-full border-2 bg-blue-700 p-5",type:"text",placeholder:"Description du Logiciel","onUpdate:modelValue":e[1]||(e[1]=o=>s.LogicielDesign.description=o),required:""},null,512),[[ft,s.LogicielDesign.description]])]),b("div",fA,[hA,b("div",pA,[b("input",{type:"file",class:"font-lato relative w-full border-2 bg-white p-5",ref:"file",id:"file",onChange:e[2]||(e[2]=(...o)=>r.previewImage&&r.previewImage(...o))},null,544),mA])])])]),b("div",gA,[b("button",_A,[_e(a,{to:"/"},{default:Re(()=>[xA]),_:1})]),vA])],32)])],64)}var yA=nt(tA,[["render",bA]]);const MA={name:"DeleteView",data(){return{LogicielDesign:{photo:null,nom:null,description:null},refLogicielDesign:null,photoActuelle:null}},mounted(){console.log("id Logiciel",this.$route.params.id),this.getLogicielDesign(this.$route.params.id)},methods:{async getLogicielDesign(n){const e=He(),t=kt(e,"LogicielDesign",n);this.refLogicielDesign=await Wi(t),this.refLogicielDesign.exists()?(this.LogicielDesign=this.refLogicielDesign.data(),this.photoActuelle=this.LogicielDesign.photo):this.console.log("Projet inexistant");const i=lt(),s=st(i,"ApercuLogicielDesign/"+this.LogicielDesign.photo);Bt(s).then(r=>{this.photoActuelle=r}).catch(r=>{console.log("erreur downloadUrl",r)})},async DeleteLogicielDesign(){const n=He();await _o(kt(n,"LogicielDesign",this.$route.params.id));const e=lt();let t=st(e,"ApercuLogicielDesign/"+this.LogicielDesign.photo);Ds(t),this.$router.push("/")}}},wA=b("h1",{class:"font-rajdhani mb-10 mt-20 border-b-2 text-center text-2xl"},"Suppression d'un Logiciel Design",-1),SA={class:"relative mt-2 flex flex-col gap-20 px-5"},EA=b("div",{class:""},[b("p",{class:"font-rajdhani w-full bg-blue-700 py-3 text-center text-white"}," \xCAtes-vous sur de vouloir supprimer ce logiciel Design ? ")],-1),AA={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},TA={class:"grid place-items-center"},LA=["src"],CA={class:"grid grid-cols-1 gap-14"},DA={class:"flex h-10 overflow-hidden rounded-2xl text-black"},PA=b("div",{class:"font-rajdhani flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Nom",-1),RA={class:"flex h-12 overflow-hidden rounded-2xl text-black"},IA=b("p",{class:"font-rajdhani -mt-[9px] border-[1px] bg-blue-700 px-6 py-3 leading-5 text-white"},"Description",-1),FA={class:"mt-14 grid w-full grid-cols-2 place-items-center"},UA={class:"font-rajdhani mb-20 rounded-2xl bg-blue-700 py-2 px-5 text-white",type:"button"},NA=je("Annuler"),OA=b("button",{class:"font-rajdhani mb-20 rounded-2xl bg-blue-700 py-2 px-5 text-white",type:"submit"}," Supprimer ",-1);function zA(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[wA,b("div",SA,[EA,b("form",{onSubmit:e[2]||(e[2]=wn((...o)=>r.DeleteLogicielDesign&&r.DeleteLogicielDesign(...o),["prevent"]))},[b("div",AA,[b("div",TA,[b("img",{src:s.photoActuelle,class:"w-1/2"},null,8,LA)]),b("div",CA,[b("div",DA,[PA,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Nom du Logiciel","onUpdate:modelValue":e[0]||(e[0]=o=>s.LogicielDesign.nom=o),disabled:""},null,512),[[ft,s.LogicielDesign.nom]])]),b("div",RA,[IA,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Description du Logiciel","onUpdate:modelValue":e[1]||(e[1]=o=>s.LogicielDesign.description=o),disabled:""},null,512),[[ft,s.LogicielDesign.description]])])])]),b("div",FA,[b("button",UA,[_e(a,{to:"/projets"},{default:Re(()=>[NA]),_:1})]),OA])],32)])],64)}var BA=nt(MA,[["render",zA]]);const kA={name:"CreateView",data(){return{imageData:null,ListeLogicielDev:[],LogicielDev:{photo:null,nom:null,description:null}}},mounted(){this.getLogicielDev()},methods:{async getLogicielDev(){const n=He(),e=ht(n,"LogicielDev"),t=hi(e,ll("nom","asc"));await vn(t,i=>{this.ListeLogicielDev=i.docs.map(s=>tn({id:s.id},s.data())),console.log("Liste des logiciels dev",this.ListeLogicielDev)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.LogicielDev.photo=this.file.name;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async CreateLogicielDev(){const n=lt(),e=st(n,"ApercuLogicielDev/"+this.LogicielDev.photo);await ji(e,this.imageData,"data_url").then(t=>{console.log("Uploaded a base64 string");const i=He();Ms(ht(i,"LogicielDev"),this.LogicielDev)}),this.$router.push("/")}}},VA=b("h1",{class:"font-museomoderno mb-20 mt-10 border-b-2 text-center text-2xl"},"Ajout d'une comp\xE9tence en Dev",-1),HA={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},GA={class:"pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14"},WA={class:"grid grid-cols-1 gap-4 lg:flex lg:w-[100%] lg:justify-center"},jA={class:"m-auto"},qA=["src"],$A={class:"grid grid-cols-1 gap-14"},XA={class:"flex h-10 overflow-hidden rounded-2xl text-black"},YA=b("div",{class:"flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Nom",-1),ZA={class:"flex h-12 overflow-hidden rounded-2xl text-black"},KA=b("p",{class:"font-museomoderno border-[1px] bg-blue-700 px-6 py-3 text-white"},"Description",-1),JA={class:"flex h-10 overflow-hidden rounded-sm text-black"},QA=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Logo",-1),e3={class:"custom-file"},t3=b("label",{class:"custom-file-label",for:"file"},"S\xE9lectionner l'image",-1),n3={class:"mt-16 flex w-full justify-center gap-5"},i3=b("button",{class:"font-rajdhani mb-20 rounded-2xl bg-blue-600 py-2 px-5 text-white",type:"submit"}," Ajouter ",-1),s3={class:"font-rajdhani mb-20 rounded-2xl bg-blue-600 py-2 px-5 text-white",type:"button"},r3=je("Annuler");function o3(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[VA,b("div",HA,[b("section",GA,[b("form",{enctype:"multipart/form-data",onSubmit:e[3]||(e[3]=wn((...o)=>r.CreateLogicielDev&&r.CreateLogicielDev(...o),["prevent"]))},[b("div",WA,[b("div",jA,[b("img",{class:"",src:s.imageData},null,8,qA)]),b("div",$A,[b("div",XA,[YA,dt(b("input",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Nom du Logiciel","onUpdate:modelValue":e[0]||(e[0]=o=>s.LogicielDev.nom=o),required:""},null,512),[[ft,s.LogicielDev.nom]])]),b("div",ZA,[KA,dt(b("input",{class:"font-museomoderno w-full border-2 bg-white p-5",type:"text",placeholder:"Description du logiciel","onUpdate:modelValue":e[1]||(e[1]=o=>s.LogicielDev.description=o),required:""},null,512),[[ft,s.LogicielDev.description]])]),b("div",JA,[QA,b("div",e3,[b("input",{type:"file",class:"custom-file-input",ref:"file",id:"file",onChange:e[2]||(e[2]=(...o)=>r.previewImage&&r.previewImage(...o))},null,544),t3])])])]),b("div",n3,[i3,b("button",s3,[_e(a,{to:"/"},{default:Re(()=>[r3]),_:1})])])],32)])])],64)}var a3=nt(kA,[["render",o3]]);const l3={name:"UpdateView",data(){return{imageData:null,ListeLogicielDev:[],LogicielDev:{photo:null,nom:null,description:null},refLogicielDev:null,imgModifiee:!1,photoActuelle:null}},mounted(){console.log("id Logiciel",this.$route.params.id),this.getLogicielDev(this.$route.params.id)},methods:{previewImage:function(n){this.file=this.$refs.file.files[0],this.LogicielDev.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async getLogicielDev(n){const e=He(),t=kt(e,"LogicielDev",n);this.refLogicielDev=await Wi(t),this.refLogicielDev.exists()?(this.LogicielDev=this.refLogicielDev.data(),this.photoActuelle=this.LogicielDev.photo):this.console.log("logiciel inexistant");const i=lt(),s=st(i,"ApercuLogicielDev/"+this.LogicielDev.photo);Bt(s).then(r=>{this.imageData=r}).catch(r=>{console.log("erreur downloadUrl",r)})},previewImage:function(n){this.file=this.$refs.file.files[0],this.LogicielDev.photo=this.file.name,this.imgModifiee=!0;var e=n.target;if(e.files&&e.files[0]){var t=new FileReader;t.onload=i=>{this.imageData=i.target.result},t.readAsDataURL(e.files[0])}},async UpdateLogicielDev(){if(this.imgModifiee){const e=lt();let t=st(e,"ApercuLogicielDev/"+this.photoActuelle);Ds(t),t=st(e,"ApercuLogicielDev/"+this.LogicielDev.photo),await ji(t,this.imageData,"data_url").then(i=>{console.log("Uploaded a base64 string",this.LogicielDev.photo)})}const n=He();await go(kt(n,"LogicielDev",this.$route.params.id),this.LogicielDev),this.$router.push("/")}}},c3=b("h1",{class:"font-lato mb-20 border-b-2 text-center text-2xl"},"Modifier le Logiciel Dev",-1),u3={class:"relative mt-12 mb-20 flex flex-col gap-20 px-5"},d3={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},f3={class:"grid place-items-center"},h3=["src"],p3={class:"grid grid-cols-1 gap-14"},m3={class:"flex h-10 overflow-hidden rounded-2xl text-white"},g3=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5"},"Nom",-1),_3={class:"flex h-12 overflow-hidden rounded-2xl text-white"},x3=b("p",{class:"font-museomoderno -mt-2 border-[1px] bg-blue-700 px-6 py-3 leading-5"},"Description",-1),v3={class:"flex h-10 overflow-hidden rounded-sm text-white"},b3=b("div",{class:"font-museomoderno flex items-center justify-center border-[1px] bg-blue-700 px-5"},"Photo",-1),y3={class:"relative w-full"},M3=b("label",{class:"font-museomoderno absolute left-0 top-0 bottom-0 flex w-full items-center justify-center bg-white border-2 border-blue-500 text-blue-700",for:"file"},"S\xE9lectionner l'image",-1),w3={class:"mt-auto grid w-full grid-cols-2 place-items-center"},S3={class:"font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white",type:"button"},E3=je("Annuler"),A3=b("button",{class:"font-montserrat mb-20 rounded-2xl bg-blue-700 px-1 text-white",type:"submit"}," Modifier ",-1);function T3(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[c3,b("div",u3,[b("form",{onSubmit:e[3]||(e[3]=wn((...o)=>r.UpdateLogicielDev&&r.UpdateLogicielDev(...o),["prevent"]))},[b("div",d3,[b("div",f3,[b("img",{src:s.imageData,class:"w-1/2"},null,8,h3)]),b("div",p3,[b("div",m3,[g3,dt(b("input",{class:"font-museomoderno w-full border-2 bg-blue-700 p-5",type:"text",placeholder:"Nom du Logiciel","onUpdate:modelValue":e[0]||(e[0]=o=>s.LogicielDev.nom=o),required:""},null,512),[[ft,s.LogicielDev.nom]])]),b("div",_3,[x3,dt(b("input",{class:"font-museomoderno w-full border-2 bg-blue-700 p-5",type:"text",placeholder:"Description du Logiciel","onUpdate:modelValue":e[1]||(e[1]=o=>s.LogicielDev.description=o),required:""},null,512),[[ft,s.LogicielDev.description]])]),b("div",v3,[b3,b("div",y3,[b("input",{type:"file",class:"font-lato relative w-full border-2 bg-white p-5",ref:"file",id:"file",onChange:e[2]||(e[2]=(...o)=>r.previewImage&&r.previewImage(...o))},null,544),M3])])])]),b("div",w3,[b("button",S3,[_e(a,{to:"/"},{default:Re(()=>[E3]),_:1})]),A3])],32)])],64)}var L3=nt(l3,[["render",T3]]);const C3={name:"DeleteView",data(){return{LogicielDev:{photo:null,nom:null,description:null},refLogicielDev:null,photoActuelle:null}},mounted(){console.log("id Logiciel",this.$route.params.id),this.getLogicielDev(this.$route.params.id)},methods:{async getLogicielDev(n){const e=He(),t=kt(e,"LogicielDev",n);this.refLogicielDev=await Wi(t),this.refLogicielDev.exists()?(this.LogicielDev=this.refLogicielDev.data(),this.photoActuelle=this.LogicielDev.photo):this.console.log("Logiciel inexistant");const i=lt(),s=st(i,"ApercuLogicielDev/"+this.LogicielDev.photo);Bt(s).then(r=>{this.photoActuelle=r}).catch(r=>{console.log("erreur downloadUrl",r)})},async DeleteLogicielDev(){const n=He();await _o(kt(n,"LogicielDev",this.$route.params.id));const e=lt();let t=st(e,"ApercuLogicielDev/"+this.LogicielDev.photo);Ds(t),this.$router.push("/")}}},D3=b("h1",{class:"font-rajdhani mb-10 mt-20 border-b-2 text-center text-2xl"},"Suppression d'un Logiciel Dev",-1),P3={class:"relative mt-2 flex flex-col gap-20 px-5"},R3=b("div",{class:""},[b("p",{class:"font-rajdhani w-full bg-blue-700 py-3 text-center text-white"}," \xCAtes-vous sur de vouloir supprimer ce logiciel Dev ? ")],-1),I3={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},F3={class:"grid place-items-center"},U3=["src"],N3={class:"grid grid-cols-1 gap-14"},O3={class:"flex h-10 overflow-hidden rounded-2xl text-black"},z3=b("div",{class:"font-rajdhani flex items-center justify-center border-[1px] bg-blue-700 px-5 text-white"},"Nom",-1),B3={class:"flex h-12 overflow-hidden rounded-2xl text-black"},k3=b("p",{class:"font-rajdhani -mt-[9px] border-[1px] bg-blue-700 px-6 py-3 leading-5 text-white"},"Description",-1),V3={class:"mt-14 grid w-full grid-cols-2 place-items-center"},H3={class:"font-rajdhani mb-20 rounded-2xl bg-blue-700 py-2 px-5 text-white",type:"button"},G3=je("Annuler"),W3=b("button",{class:"font-rajdhani mb-20 rounded-2xl bg-blue-700 py-2 px-5 text-white",type:"submit"}," Supprimer ",-1);function j3(n,e,t,i,s,r){const a=ke("RouterLink");return Ie(),Be(rt,null,[D3,b("div",P3,[R3,b("form",{onSubmit:e[2]||(e[2]=wn((...o)=>r.DeleteLogicielDev&&r.DeleteLogicielDev(...o),["prevent"]))},[b("div",I3,[b("div",F3,[b("img",{src:s.photoActuelle,class:"w-1/2"},null,8,U3)]),b("div",N3,[b("div",O3,[z3,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Nom du Logiciel","onUpdate:modelValue":e[0]||(e[0]=o=>s.LogicielDev.nom=o),disabled:""},null,512),[[ft,s.LogicielDev.nom]])]),b("div",B3,[k3,dt(b("input",{class:"font-rajdhani w-full border-2 bg-white p-5",placeholder:"Description du Logiciel","onUpdate:modelValue":e[1]||(e[1]=o=>s.LogicielDev.description=o),disabled:""},null,512),[[ft,s.LogicielDev.description]])])])]),b("div",V3,[b("button",H3,[_e(a,{to:"/projets"},{default:Re(()=>[G3]),_:1})]),W3])],32)])],64)}var q3=nt(C3,[["render",j3]]);const fh=t_({history:xg("/"),routes:[{path:"/",name:"Accueil",component:HM},{path:"/contact",name:"ContactView",component:qM},{path:"/mentions",name:"MentionslegalesView",component:Fw},{path:"/login",name:"LoginView",component:jw},{path:"/profil",name:"ProfilView",component:Zw},{path:"/:pathMatch(.*)*",name:"View404",component:_S},{path:"/projets",name:"ListeProjets",component:xE},{path:"/projet/:id",name:"idprojet",component:RE},{path:"/createProjet",name:"CreateProjets",component:VS},{path:"/updateProjets/:id",name:"UpdateProjets",component:u2},{path:"/deleteProjets/:id",name:"DeleteProjets",component:D2},{path:"/createDesign",name:"CreateDesign",component:eA},{path:"/updateDesign/:id",name:"UpdateLogicielDesign",component:yA},{path:"/deleteDesign/:id",name:"DeleteLogicielDesign",component:BA},{path:"/createDev",name:"CreateDev",component:a3},{path:"/updateDev/:id",name:"UpdateLogicielDev",component:L3},{path:"/deleteDev/:id",name:"DeleteLogicielDev",component:q3}]});function $3(n,e){return Ie(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[_e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"})])}const X3={components:{router:fh,FilmIcon:$3,Navigation:ch,Logo:gr,MenuIcon:uh},data(){return{menuOuvert:!1,user:{email:null,password:null},userInfo:null,name:"Vid\xE9o",isAdmin:!1}},mounted(){this.getUserConnect(),Qt.on("connectUser",n=>{this.user=n.user,this.getUserInfo(this.user)}),Qt.on("deConnectUser",n=>{this.user=n.user,this.userInfo=null,this.name="Vid\xE9o",this.isAdmin=!1})},methods:{async getUserConnect(){await Gn().onAuthStateChanged(function(n){n&&(this.user=n,this.getUserInfo(this.user))}.bind(this))},async getUserInfo(n){const e=He(),t=ht(e,"users"),i=hi(t,pr("uid","==",n.uid));await vn(i,s=>{this.userInfo=s.docs.map(o=>tn({id:o.id},o.data())),this.name=this.userInfo[0].login,this.isAdmin=this.userInfo[0].admin;const r=lt(),a=st(r,"users/"+this.userInfo[0].avatar);Bt(a).then(o=>{this.avatar=o}).catch(o=>{console.log("erreur downloadUrl",o)})})}}},Y3={class:"sticky top-0 drop-shadow-lg z-10"},Z3=b("a",{href:"#content",class:"sr-only focus:not-sr-only text-lg text-white"}," Passez au contenu ",-1),K3={class:"lg:flex lg:justify-between items-center"},J3={class:"flex justify-between items-center"},Q3=b("h1",{class:"text-gray-50 text-xl font-bold lg:text-5xl"},"Arena",-1),eT={class:"text-5xl cursor-pointer lg:hidden block w-8 h-8 mx-55"},tT=b("span",{class:"sr-only"},"Menu",-1),nT={key:0,id:"menu",class:"lg:hidden w-full text-xl font-museomoderno text-center"},iT={class:"my-5"},sT=je("Accueil"),rT={class:"my-5"},oT=je("Projets"),aT={class:"my-5"},lT=je("Mon Profil"),cT={class:"my-5"},uT=je("Contact"),dT={class:"lg:flex gap-4 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden"},fT={class:"my-5"},hT=je("Accueil"),pT={class:"my-5"},mT=je("Projets"),gT={class:"my-5"},_T=je("Mon Profil"),xT={class:"my-5"},vT=je("Contact");function bT(n,e,t,i,s,r){const a=ke("Logo"),o=ke("RouterLink"),l=ke("MenuIcon"),c=ke("RouterView");return Ie(),Be(rt,null,[b("header",Y3,[Z3,b("nav",K3,[b("div",J3,[_e(o,{to:"/"},{default:Re(()=>[_e(a,{class:"w-24 h-24"})]),_:1}),Q3,b("span",eT,[_e(l,{class:"text-white","aria-controls":"menu","aria-expanded":s.menuOuvert,onClick:e[0]||(e[0]=u=>s.menuOuvert=!s.menuOuvert)},null,8,["aria-expanded"]),tT])]),_e(Co,{enter:"transition duration-2000 ease-out",enterFrom:"transform translate-x-full opacity-0",enterTo:"transform translate-x-0 opacity-100",leave:"transition duration-1750 ease-out",leaveFrom:"transform  translate-x-0 opacity-100",leaveTo:"transform translate-x-full opacity-0"},{default:Re(()=>[s.menuOuvert?(Ie(),Be("ul",nT,[b("li",iT,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white",to:"/"},{default:Re(()=>[sT]),_:1})]),b("li",rT,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno",to:"/projets"},{default:Re(()=>[oT]),_:1})]),b("li",aT,[s.isAdmin?(Ie(),qn(o,{key:0,class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno",to:"/profil"},{default:Re(()=>[lT]),_:1})):dn("",!0)]),b("li",cT,[_e(o,{class:"my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white",to:"/contact"},{default:Re(()=>[uT]),_:1})])])):dn("",!0)]),_:1}),b("ul",dT,[b("li",fT,[_e(o,{class:"border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black",to:"/"},{default:Re(()=>[hT]),_:1})]),b("li",pT,[_e(o,{class:"border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black",to:"/projets"},{default:Re(()=>[mT]),_:1})]),b("li",gT,[s.isAdmin?(Ie(),qn(o,{key:0,class:"border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black",to:"/profil"},{default:Re(()=>[_T]),_:1})):dn("",!0)]),b("li",xT,[_e(o,{class:"border-2 border-black my-6 lg:px-2 xl:pt-2 rounded-2xl font-museomoderno text-black",to:"/contact"},{default:Re(()=>[vT]),_:1})])])])]),_e(c)],64)}var yT=nt(X3,[["render",bT]]);function MT(n){return{all:n=n||new Map,on:function(e,t){var i=n.get(e);i?i.push(t):n.set(e,[t])},off:function(e,t){var i=n.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var i=n.get(e);i&&i.slice().map(function(s){s(t)}),(i=n.get("*"))&&i.slice().map(function(s){s(e,t)})}}}const wT={apiKey:"AIzaSyD1wdglbT6plqfHjUbvg_cuxgJbodWM7X4",authDomain:"portfolio-fb0f2.firebaseapp.com",projectId:"portfolio-fb0f2",storageBucket:"portfolio-fb0f2.appspot.com",messagingSenderId:"359610302999",appId:"1:359610302999:web:71411bec87f1c63583d252"};Sh(wT);const Vl=Jm(yT),Qt=MT();Vl.config.globalProperties.emitter=Qt;Vl.use(fh);Vl.mount("#app");
