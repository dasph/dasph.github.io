(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const f={};function de(e){f.context=e}function Ye(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const Qe=(e,t)=>e===t,ne=Symbol("solid-proxy"),Ze=Symbol("solid-track"),re={equals:Qe};let ke=je;const B=1,se=2,Me={owned:null,cleanups:null,context:null,owner:null};var y=null;let U=null,g=null,v=null,M=null,le=0;function te(e,t){const n=g,r=y,s=e.length===0,i=s?Me:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>N(()=>ce(i)));y=i,g=null;try{return K(l,!0)}finally{g=n,y=r}}function V(e,t){t=t?Object.assign({},re,t):re;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),He(n,s));return[Re.bind(n),r]}function C(e,t,n){const r=pe(e,t,!1,B);X(r)}function et(e,t,n){ke=ut;const r=pe(e,t,!1,B);r.user=!0,M?M.push(r):X(r)}function _(e,t,n){n=n?Object.assign({},re,n):re;const r=pe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,X(r),Re.bind(r)}function N(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function tt(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const a=N(()=>t(o,s,l));return s=o,a}}function nt(e){et(()=>N(e))}function be(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function rt(){return y}function st(e,t){const n=y,r=g;y=e,g=null;try{return K(t,!0)}catch(s){$e(s)}finally{y=n,g=r}}function it(e){const t=g,n=y;return Promise.resolve().then(()=>{g=t,y=n;let r;return K(e,!1),g=y=null,r?r.done:void 0})}function Ie(e,t){const n=Symbol("context");return{id:n,Provider:ft(n),defaultValue:e}}function ve(e){let t;return(t=De(y,e.id))!==void 0?t:e.defaultValue}function ot(e){const t=_(e),n=_(()=>he(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Re(){const e=U;if(this.sources&&(this.state||e))if(this.state===B||e)X(this);else{const t=v;v=null,K(()=>oe(this),!1),v=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function He(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&K(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=U&&U.running;l&&U.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?v.push(i):M.push(i),i.observers&&Be(i)),l||(i.state=B)}if(v.length>1e6)throw v=[],new Error},!1)),t}function X(e){if(!e.fn)return;ce(e);const t=y,n=g,r=le;g=y=e,lt(e,e.value,r),g=n,y=t}function lt(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(ce),e.owned=null),e.updatedAt=n+1,$e(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?He(e,r):e.value=r,e.updatedAt=n)}function pe(e,t,n,r=B,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==Me&&(y.owned?y.owned.push(i):y.owned=[i]),i}function ie(e){const t=U;if(e.state===0||t)return;if(e.state===se||t)return oe(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===B||t)X(e);else if(e.state===se||t){const s=v;v=null,K(()=>oe(e,n[0]),!1),v=s}}function K(e,t){if(v)return e();let n=!1;t||(v=[]),M?n=!0:M=[],le++;try{const r=e();return ct(n),r}catch(r){n||(M=null),v=null,$e(r)}}function ct(e){if(v&&(je(v),v=null),e)return;const t=M;M=null,t.length&&K(()=>ke(t),!1)}function je(e){for(let t=0;t<e.length;t++)ie(e[t])}function ut(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ie(r)}for(f.context&&de(),t=0;t<n;t++)ie(e[t])}function oe(e,t){const n=U;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===B||n?s!==t&&(!s.updatedAt||s.updatedAt<le)&&ie(s):(s.state===se||n)&&oe(s,t))}}function Be(e){const t=U;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=se,r.pure?v.push(r):M.push(r),r.observers&&Be(r))}}function ce(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)ce(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function at(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function $e(e){throw e=at(e),e}function De(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:De(e.owner,t):void 0}function he(e){if(typeof e=="function"&&!e.length)return he(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=he(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ft(e,t){return function(r){let s;return C(()=>s=N(()=>(y.context={[e]:r.value},ot(()=>r.children))),void 0),s}}const dt=Symbol("fallback");function _e(e){for(let t=0;t<e.length;t++)e[t]()}function ht(e,t,n={}){let r=[],s=[],i=[],l=0,o=t.length>1?[]:null;return be(()=>_e(i)),()=>{let a=e()||[],u,c;return a[Ze],N(()=>{let d=a.length,$,L,k,D,I,x,A,p,S;if(d===0)l!==0&&(_e(i),i=[],r=[],s=[],l=0,o&&(o=[])),n.fallback&&(r=[dt],s[0]=te(Y=>(i[0]=Y,n.fallback())),l=1);else if(l===0){for(s=new Array(d),c=0;c<d;c++)r[c]=a[c],s[c]=te(m);l=d}else{for(k=new Array(d),D=new Array(d),o&&(I=new Array(d)),x=0,A=Math.min(l,d);x<A&&r[x]===a[x];x++);for(A=l-1,p=d-1;A>=x&&p>=x&&r[A]===a[p];A--,p--)k[p]=s[A],D[p]=i[A],o&&(I[p]=o[A]);for($=new Map,L=new Array(p+1),c=p;c>=x;c--)S=a[c],u=$.get(S),L[c]=u===void 0?-1:u,$.set(S,c);for(u=x;u<=A;u++)S=r[u],c=$.get(S),c!==void 0&&c!==-1?(k[c]=s[u],D[c]=i[u],o&&(I[c]=o[u]),c=L[c],$.set(S,c)):i[u]();for(c=x;c<d;c++)c in k?(s[c]=k[c],i[c]=D[c],o&&(o[c]=I[c],o[c](c))):s[c]=te(m);s=s.slice(0,l=d),r=a.slice(0)}return s});function m(d){if(i[c]=d,o){const[$,L]=V(c);return o[c]=L,t(a[c],$)}return t(a[c])}}}let Ue=!1;function gt(){Ue=!0}function E(e,t){if(Ue&&f.context){const n=f.context;de(Ye());const r=N(()=>e(t||{}));return de(n),r}return N(()=>e(t||{}))}function ee(){return!0}const ge={get(e,t,n){return t===ne?n:e.get(t)},has(e,t){return t===ne?!0:e.has(t)},set:ee,deleteProperty:ee,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ee,deleteProperty:ee}},ownKeys(e){return e.keys()}};function ae(e){return(e=typeof e=="function"?e():e)?e:{}}function Ce(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&ne in s,e[r]=typeof s=="function"?(t=!0,_(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const i=ae(e[s])[r];if(i!==void 0)return i}},has(r){for(let s=e.length-1;s>=0;s--)if(r in ae(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(ae(e[s])));return[...new Set(r)]}},ge);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const s=Object.getOwnPropertyDescriptors(e[r]);for(const i in s)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function yt(e,...t){const n=new Set(t.flat());if(ne in e){const s=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},ge));return s.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},ge)),s}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(s=>!n.has(s))),t.map(s=>{const i={};for(let l=0;l<s.length;l++){const o=s[l];o in e&&Object.defineProperty(i,o,r[o]?r[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return i})}function Ve(e){const t="fallback"in e&&{fallback:()=>e.fallback};return _(ht(()=>e.each,e.children,t||void 0))}const wt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],mt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...wt]),bt=new Set(["innerHTML","textContent","innerText","children"]),vt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ee=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),pt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$t={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function xt(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,a=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const c=i<r?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!u){u=new Map;let m=o;for(;m<i;)u.set(n[m],m++)}const c=u.get(t[l]);if(c!=null)if(o<c&&c<i){let m=l,d=1,$;for(;++m<s&&m<i&&!(($=u.get(t[m]))==null||$!==c+d);)d++;if(d>c-o){const L=t[l];for(;o<c;)e.insertBefore(n[o++],L)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Pe="_$DX_DELEGATE";function At(e,t,n,r={}){let s;return te(i=>{s=i,t===document?e():j(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function T(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${r.innerHTML}

${e}. Is your HTML properly formed?`;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function Ke(e,t=window.document){const n=t[Pe]||(t[Pe]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,qe))}}function P(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function St(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function ue(e,t){t==null?e.removeAttribute("class"):e.className=t}function _t(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function ze(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(Le(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(Le(e,o,!0),n[o]=a)}return n}function Ct(e,t,n){if(!t)return n?P(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function Et(e,t={},n,r){const s={};return r||C(()=>s.children=F(e,t.children,s.children)),C(()=>t.ref&&t.ref(e)),C(()=>Pt(e,t,n,!0,s,!0)),s}function j(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return F(e,t,r,n);C(s=>F(e,t(),s,n),r)}function Pt(e,t,n,r,s={},i=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Ne(e,l,null,s[l],n,i)}for(const l in t){if(l==="children"){r||F(e,t.children);continue}const o=t[l];s[l]=Ne(e,l,o,s[l],n,i)}}function Lt(e,t,n={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=s=>Te(t,s),f.registry=new Map,f.context={id:n.renderId||"",count:0},Te(t,n.renderId);const r=At(e,t,[...t.childNodes],n);return f.context=null,r}function O(e){let t,n;if(!f.context||!(t=f.registry.get(n=Tt()))){if(f.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e.cloneNode(!0)}return f.completed&&f.completed.add(t),f.registry.delete(n),t}function xe(e){let t=e,n=0,r=[];if(f.context)for(;t;){if(t.nodeType===8){const s=t.nodeValue;if(s==="#")n++;else if(s==="/"){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function Nt(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=f;for(t.queued=!1;t.length;){const[n,r]=t[0];if(!e.has(n))return;qe(r),t.shift()}}),f.events.queued=!0)}function Ot(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Le(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ne(e,t,n,r,s,i){let l,o,a;if(t==="style")return Ct(e,n,r);if(t==="classList")return ze(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),c=pt.has(u);if(!c&&r){const m=Array.isArray(r)?r[0]:r;e.removeEventListener(u,m)}(c||n)&&(_t(e,u,n,c),c&&Ke([u]))}else if((a=bt.has(t))||!s&&(Ee[t]||(o=mt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?ue(e,n):l&&!o&&!a?e[Ot(t)]=n:e[Ee[t]||t]=n;else{const u=s&&t.indexOf(":")>-1&&$t[t.split(":")[0]];u?St(e,u,t,n):P(e,vt[t]||t,n)}return n}function qe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function F(e,t,n,r,s){for(f.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(f.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=z(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(f.context)return n;n=z(e,n,r)}else{if(i==="function")return C(()=>{let o=t();for(;typeof o=="function";)o=o();n=F(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(ye(o,t,n,s))return C(()=>n=F(e,o,n,r,!0)),()=>n;if(f.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=z(e,n,r),l)return n}else a?n.length===0?Oe(e,o,r):xt(e,n,o):(n&&z(e),Oe(e,o));n=o}else if(t instanceof Node){if(f.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=z(e,n,r,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ye(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=ye(e,o,a)||s;else if(typeof o=="function")if(r){for(;typeof o=="function";)o=o();s=ye(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||s}else e.push(o),s=!0;else{const u=String(o);u==="<!>"?a&&a.nodeType===8&&e.push(a):a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function Oe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function z(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(s,o):e.insertBefore(s,n):a&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function Te(e,t){const n=e.querySelectorAll("*[data-hk]");for(let r=0;r<n.length;r++){const s=n[r],i=s.getAttribute("data-hk");(!t||i.startsWith(t))&&!f.registry.has(i)&&f.registry.set(i,s)}}function Tt(){const e=f.context;return`${e.id}${e.count++}`}const kt=!1,Mt=(...e)=>(gt(),Lt(...e));function It(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Rt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Ht(e){try{return document.querySelector(e)}catch{return null}}function jt(e,t){const n=Ht(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Bt(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=Rt(V(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!s&&t(o),o));return n&&be(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function Dt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:V({value:""})};return e}function Ut(){return Bt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),jt(window.location.hash.slice(1),n)},e=>It(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Vt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const l={to:s,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:a=>{a&&(n=!0),o.navigate(s,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const Kt=/^(?:[a-z0-9]+:)?\/\//i,zt=/^\/+|(\/)\/+$/g;function J(e,t=!1){const n=e.replace(zt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function fe(e,t,n){if(Kt.test(t))return;const r=J(e),s=n&&J(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+J(t,!i)}function qt(e,t){if(e==null)throw new Error(t);return e}function Ft(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Gt(e){const t=new Map,n=rt();return new Proxy({},{get(r,s){return t.has(s)||st(n,()=>t.set(s,_(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const Wt=100,Fe=Ie(),Ge=Ie(),Ae=()=>qt(ve(Fe),"Make sure your app is wrapped in a <Router />");let we;const Jt=()=>we||ve(Ge)||Ae().base,Xt=e=>{const t=Jt();return _(()=>t.resolvePath(e()))},Yt=e=>{const t=Ae();return _(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Qt=()=>Ae().location;function Zt(e,t){const n=new URL("http://sar"),r=_(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),s=_(()=>r().pathname),i=_(()=>r().search,!0),l=_(()=>r().hash),o=_(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Gt(tt(i,()=>Ft(r())))}}function en(e,t="",n,r){const{signal:[s,i],utils:l={}}=Dt(e),o=l.parsePath||(w=>w),a=l.renderPath||(w=>w),u=l.beforeLeave||Vt(),c=fe("",t),m=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&i({value:c,replace:!0,scroll:!1});const[d,$]=V(!1),L=async w=>{$(!0);try{await it(w)}finally{$(!1)}},[k,D]=V(s().value),[I,x]=V(s().state),A=Zt(k,I),p=[],S={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(w){return fe(c,w)}};if(n)try{we=S,S.data=n({data:void 0,params:{},location:A,navigate:Se(S)})}finally{we=void 0}function Y(w,h,b){N(()=>{if(typeof h=="number"){h&&(l.go?u.confirm(h,b)&&l.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:Q,resolve:Z,scroll:R,state:G}={replace:!1,resolve:!0,scroll:!0,...b},H=Z?w.resolvePath(h):fe("",h);if(H===void 0)throw new Error(`Path '${h}' is not a routable path`);if(p.length>=Wt)throw new Error("Too many redirects");const W=k();if((H!==W||G!==I())&&!kt){if(u.confirm(H,b)){const Xe=p.push({value:W,replace:Q,scroll:R,state:I()});L(()=>{D(H),x(G)}).then(()=>{p.length===Xe&&Je({value:H,state:G})})}}})}function Se(w){return w=w||ve(Ge)||S,(h,b)=>Y(w,h,b)}function Je(w){const h=p[0];h&&((w.value!==h.value||w.state!==h.state)&&i({...w,replace:h.replace,scroll:h.scroll}),p.length=0)}C(()=>{const{value:w,state:h}=s();N(()=>{w!==k()&&L(()=>{D(w),x(h)})})});{let w=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const b=h.composedPath().find(W=>W instanceof Node&&W.nodeName.toUpperCase()==="A");if(!b||!b.hasAttribute("link"))return;const Q=b.href;if(b.target||!Q&&!b.hasAttribute("state"))return;const Z=(b.getAttribute("rel")||"").split(/\s+/);if(b.hasAttribute("download")||Z&&Z.includes("external"))return;const R=new URL(Q);if(R.origin!==window.location.origin||c&&R.pathname&&!R.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const G=o(R.pathname+R.search+R.hash),H=b.getAttribute("state");h.preventDefault(),Y(S,G,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:H&&JSON.parse(H)})};var kn=w;Ke(["click"]),document.addEventListener("click",w),be(()=>document.removeEventListener("click",w))}return{base:S,out:m,location:A,isRouting:d,renderPath:a,parsePath:o,navigatorFactory:Se,beforeLeave:u}}const tn=T("<a link></a>",2),nn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||Ut(),o=en(l,r,s);return E(Fe.Provider,{value:o,get children(){return e.children}})};function rn(e){e=Ce({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=yt(e,["href","state","class","activeClass","inactiveClass","end"]),n=Xt(()=>e.href),r=Yt(n),s=Qt(),i=_(()=>{const l=n();if(l===void 0)return!1;const o=J(l.split(/[?#]/,1)[0]).toLowerCase(),a=J(s.pathname).toLowerCase();return e.end?o===a:a.startsWith(o)});return(()=>{const l=O(tn);return Et(l,Ce(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),Nt(),l})()}const sn="_module_1msxp_1",on={module:sn},ln=T("<div></div>",2),cn=({children:e})=>(()=>{const t=O(ln);return j(t,e),C(()=>ue(t,on.module)),t})(),un={},We="Andrew Nyzhnyk";var q=(e=>(e.BLOG="https://ln.awkwrd.dev/~md",e.EMAIL="bWFpbHRvOmFuZHJld0Bhd2t3cmQuZGV2",e.GITHUB="https://ln.awkwrd.dev/~gh",e.LINKEDIN="https://ln.awkwrd.dev/~in",e.RESUME="https://ln.awkwrd.dev/~cv",e))(q||{}),me=(e=>(e.AVIF="image/avif",e.JPG="image/jpeg",e.PNG="image/png",e.SVG="image/svg+xml",e.WEBP="image/webp",e))(me||{});const an=T('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"></path></svg>',4),fn=()=>O(an),dn=T('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>',4),hn=()=>O(dn),gn=T('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',4),yn=()=>O(gn),wn="/assets/avatar-a9626c49.jpg",mn="/assets/avatar-106b5316.avif",bn={alt:"Andrew's profile picture",width:640,height:640,source:[{mime:me.JPG,srcset:wn},{mime:me.AVIF,srcset:mn}]},vn=T("<section><!#><!/><h3></h3><h4>Software Developer</h4><div></div></section>",10),pn=T('<a target="_blank" rel="noopener"></a>',2),$n=({className:e})=>{const[t,n]=V([{Icon:fn,url:q.EMAIL},{Icon:hn,url:q.GITHUB},{Icon:yn,url:q.LINKEDIN}]);return nt(()=>void n(([{Icon:r,url:s},...i])=>[{Icon:r,url:atob(s)},...i])),(()=>{const r=O(vn),s=r.firstChild,[i,l]=xe(s.nextSibling),o=i.nextSibling,a=o.nextSibling,u=a.nextSibling;return j(r,E(_n,{source:bn}),i,l),j(o,We),j(u,E(Ve,{get each(){return t()},children:({Icon:c,url:m})=>(()=>{const d=O(pn);return P(d,"href",m),j(d,E(c,{})),d})()})),C(c=>ze(r,{[un.section]:!0,[e||""]:!!e},c)),r})()},xn={},An=T("<picture><!#><!/><img></picture>",5),Sn=T("<source>",1),_n=({source:e})=>{const[t]=e.source;return(()=>{const n=O(An),r=n.firstChild,[s,i]=xe(r.nextSibling),l=s.nextSibling;return j(n,E(Ve,{get each(){return e.source.slice(1)},children:({mime:o,srcset:a})=>(()=>{const u=O(Sn);return P(u,"type",o),P(u,"srcset",a),u})()}),s,i),C(o=>{const a=xn.picture,u=e.width,c=e.height,m=e.alt,d=t.srcset;return a!==o._v$&&ue(n,o._v$=a),u!==o._v$2&&P(l,"width",o._v$2=u),c!==o._v$3&&P(l,"height",o._v$3=c),m!==o._v$4&&P(l,"alt",o._v$4=m),d!==o._v$5&&P(l,"src",o._v$5=d),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()},Cn={},En=T('<header><!#><!/><aside><a target="_blank" rel="noopener">blog</a><a target="_blank" rel="noopener">resume</a></aside></header>',10),Pn=()=>(()=>{const e=O(En),t=e.firstChild,[n,r]=xe(t.nextSibling),s=n.nextSibling,i=s.firstChild,l=i.nextSibling;return j(e,E(rn,{href:"/",children:We}),n,r),C(o=>{const a=Cn.header,u=q.BLOG,c=q.RESUME;return a!==o._v$&&ue(e,o._v$=a),u!==o._v$2&&P(i,"href",o._v$2=u),c!==o._v$3&&P(l,"href",o._v$3=c),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),Ln="_user_w3jiq_1",Nn={user:Ln},On=()=>E(cn,{get children(){return[E(Pn,{}),E($n,{get className(){return Nn.user}})]}});const Tn=({path:e})=>E(nn,{url:e,children:()=>E(On,{})});Mt(()=>E(Tn,{}),document.getElementById("root"));