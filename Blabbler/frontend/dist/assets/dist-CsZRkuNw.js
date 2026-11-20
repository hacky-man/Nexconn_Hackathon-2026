import{F as St,P as Ie,c as se,r as Wa,I as B,g as q,b as X,t as Ka,a as Ti,G as C,B as we,x as je,V as Vt,L as T,$ as L,Q as Ya,d as yr,s as ui,h as Qa,e as Xa,p as Ja,f as ue,i as Sr,H as Cn,m as eo,j as to,X as so,k as io,z as no,l as ro}from"./index-Cav9LsIV.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=globalThis,Ri=Ms.ShadowRoot&&(Ms.ShadyCSS===void 0||Ms.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Li=Symbol(),vn=new WeakMap;let xr=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Li)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ri&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=vn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&vn.set(t,e))}return e}toString(){return this.cssText}};const ao=r=>new xr(typeof r=="string"?r:r+"",void 0,Li),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new xr(t,r,Li)},oo=(r,e)=>{if(Ri)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=Ms.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},bn=Ri?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ao(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lo,defineProperty:ho,getOwnPropertyDescriptor:co,getOwnPropertyNames:uo,getOwnPropertySymbols:po,getPrototypeOf:go}=Object,qe=globalThis,wn=qe.trustedTypes,mo=wn?wn.emptyScript:"",Xs=qe.reactiveElementPolyfillSupport,Jt=(r,e)=>r,pi={toAttribute(r,e){switch(e){case Boolean:r=r?mo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Mr=(r,e)=>!lo(r,e),yn={attribute:!0,type:String,converter:pi,reflect:!1,useDefault:!1,hasChanged:Mr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qe.litPropertyMetadata??(qe.litPropertyMetadata=new WeakMap);let ft=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=yn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&ho(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=co(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const o=i==null?void 0:i.call(this);n==null||n.call(this,a),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??yn}static _$Ei(){if(this.hasOwnProperty(Jt("elementProperties")))return;const e=go(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jt("properties"))){const t=this.properties,s=[...uo(t),...po(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(bn(i))}else e!==void 0&&t.push(bn(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var n;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:pi).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var n,a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:pi;this._$Em=i;const c=l.fromAttribute(t,o.type);this[i]=c??((a=this._$Ej)==null?void 0:a.get(i))??c,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){var a;if(e!==void 0){const o=this.constructor;if(i===!1&&(n=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??Mr)(n,t)||s.useDefault&&s.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:o}=a,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[Jt("elementProperties")]=new Map,ft[Jt("finalized")]=new Map,Xs==null||Xs({ReactiveElement:ft}),(qe.reactiveElementVersions??(qe.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=globalThis,Sn=r=>r,Rs=es.trustedTypes,xn=Rs?Rs.createPolicy("lit-html",{createHTML:r=>r}):void 0,Tr="$lit$",Ve=`lit$${Math.random().toFixed(9).slice(2)}$`,Rr="?"+Ve,fo=`<${Rr}>`,ot=document,ns=()=>ot.createComment(""),rs=r=>r===null||typeof r!="object"&&typeof r!="function",Ii=Array.isArray,Eo=r=>Ii(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Js=`[ 	
\f\r]`,zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mn=/-->/g,Tn=/>/g,Xe=RegExp(`>|${Js}(?:([^\\s"'>=/]+)(${Js}*=${Js}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rn=/'/g,Ln=/"/g,Lr=/^(?:script|style|textarea|title)$/i,_o=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=_o(1),xt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),In=new WeakMap,it=ot.createTreeWalker(ot,129);function Ir(r,e){if(!Ii(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return xn!==void 0?xn.createHTML(e):e}const Co=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",a=zt;for(let o=0;o<t;o++){const l=r[o];let c,d,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===zt?d[1]==="!--"?a=Mn:d[1]!==void 0?a=Tn:d[2]!==void 0?(Lr.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=Xe):d[3]!==void 0&&(a=Xe):a===Xe?d[0]===">"?(a=i??zt,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Xe:d[3]==='"'?Ln:Rn):a===Ln||a===Rn?a=Xe:a===Mn||a===Tn?a=zt:(a=Xe,i=void 0);const m=a===Xe&&r[o+1].startsWith("/>")?" ":"";n+=a===zt?l+fo:u>=0?(s.push(c),l.slice(0,u)+Tr+l.slice(u)+Ve+m):l+Ve+(u===-2?o:m)}return[Ir(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};let gi=class Ar{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,d]=Co(e,t);if(this.el=Ar.createElement(c,s),it.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=it.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Tr)){const p=d[a++],m=i.getAttribute(u).split(Ve),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:y[2],strings:m,ctor:y[1]==="."?bo:y[1]==="?"?wo:y[1]==="@"?yo:Ns}),i.removeAttribute(u)}else u.startsWith(Ve)&&(l.push({type:6,index:n}),i.removeAttribute(u));if(Lr.test(i.tagName)){const u=i.textContent.split(Ve),p=u.length-1;if(p>0){i.textContent=Rs?Rs.emptyScript:"";for(let m=0;m<p;m++)i.append(u[m],ns()),it.nextNode(),l.push({type:2,index:++n});i.append(u[p],ns())}}}else if(i.nodeType===8)if(i.data===Rr)l.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(Ve,u+1))!==-1;)l.push({type:7,index:n}),u+=Ve.length-1}n++}}static createElement(e,t){const s=ot.createElement("template");return s.innerHTML=e,s}};function Mt(r,e,t=r,s){var a,o;if(e===xt)return e;let i=s!==void 0?(a=t._$Co)==null?void 0:a[s]:t._$Cl;const n=rs(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=Mt(r,i._$AS(r,e.values),i,s)),e}class vo{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??ot).importNode(t,!0);it.currentNode=i;let n=it.nextNode(),a=0,o=0,l=s[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ai(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new So(n,this,e)),this._$AV.push(c),l=s[++o]}a!==(l==null?void 0:l.index)&&(n=it.nextNode(),a++)}return it.currentNode=ot,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}let Ai=class Or{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Mt(this,e,t),rs(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==xt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Eo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&rs(this._$AH)?this._$AA.nextSibling.data=e:this.T(ot.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=gi.createElement(Ir(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const a=new vo(i,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=In.get(e.strings);return t===void 0&&In.set(e.strings,t=new gi(e)),t}k(e){Ii(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new Or(this.O(ns()),this.O(ns()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=Sn(e).nextSibling;Sn(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ns=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=O}_$AI(e,t=this,s,i){const n=this.strings;let a=!1;if(n===void 0)e=Mt(this,e,t,0),a=!rs(e)||e!==this._$AH&&e!==xt,a&&(this._$AH=e);else{const o=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=Mt(this,o[s+l],t,l),c===xt&&(c=this._$AH[l]),a||(a=!rs(c)||c!==this._$AH[l]),c===O?e=O:e!==O&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class bo extends Ns{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class wo extends Ns{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}let yo=class extends Ns{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=Mt(this,e,t,0)??O)===xt)return;const s=this._$AH,i=e===O&&s!==O||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==O&&(s===O||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},So=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Mt(this,e)}};const ei=es.litHtmlPolyfillSupport;ei==null||ei(gi,Ai),(es.litHtmlVersions??(es.litHtmlVersions=[])).push("3.3.3");const xo=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new Ai(e.insertBefore(ns(),n),n,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis;class M extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xt}}var wr;M._$litElement$=!0,M.finalized=!0,(wr=at.litElementHydrateSupport)==null||wr.call(at,{LitElement:M});const ti=at.litElementPolyfillSupport;ti==null||ti({LitElement:M});(at.litElementVersions??(at.litElementVersions=[])).push("4.2.2");var Mo=Object.defineProperty,To=(r,e,t)=>e in r?Mo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h=(r,e,t)=>(To(r,typeof e!="symbol"?e+"":e,t),t),Ro=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},Et=(r,e,t)=>(Ro(r,e,"read from private field"),t?t.call(r):e.get(r)),$r=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};class v{constructor(e,t){h(this,"_resolve",!1),h(this,"_promise"),h(this,"_stopped",!1),h(this,"_defaultPrevented",!1),h(this,"data"),this.type=e,this.data=t}isImmediatePropagationStopped(){return this._stopped}stopImmediatePropagation(){this._stopped=!0}isDefaultPrevented(){return this._defaultPrevented}preventDefault(){this._defaultPrevented=!0}sendResult(e){if(typeof this._resolve=="function"){this._resolve(e),this._resolve=!0;return}const t=this._resolve?"Cannot resubmit.":"There is no transaction waiting event result.";console.error(t,"event type:",this.type)}async awaitResult(){return this._promise||(this._promise=new Promise(e=>{this._resolve=e})),this._promise}clone(){const e=new v(this.type,this.data);return e.sendResult=this.sendResult.bind(this),e}}var Me=(r=>(r[r.NONE=0]="NONE",r[r.AT_ALL=1]="AT_ALL",r[r.AT_ME=2]="AT_ME",r))(Me||{});class Oi{constructor(e){h(this,"channelIdentifier"),h(this,"name",""),h(this,"avatarUrl",""),h(this,"draft",""),h(this,"updatingMessageUId"),h(this,"latestMessage",null),h(this,"isPinned",!1),h(this,"noDisturbLevel",St.ALL_MESSAGE),h(this,"unreadCount",0),h(this,"updateTime",0),h(this,"online",!1),h(this,"memberCount",0),h(this,"mentionedType",Me.NONE),this.channelIdentifier=e}get channelId(){return this.channelIdentifier.channelId}get channelType(){return this.channelIdentifier.channelType}clone(){const e=new Oi(this.channelIdentifier);return e.name=this.name,e.avatarUrl=this.avatarUrl,e.draft=this.draft,e.updatingMessageUId=this.updatingMessageUId,e.latestMessage=this.latestMessage?this.latestMessage.clone():null,e.isPinned=this.isPinned,e.noDisturbLevel=this.noDisturbLevel,e.unreadCount=this.unreadCount,e.updateTime=this.updateTime,e.online=this.online,e.memberCount=this.memberCount,e.mentionedType=this.mentionedType,e}}var Q=(r=>(r.UPDATING="UPDATING",r.FAILED="FAILED",r.SUCCESS="SUCCESS",r))(Q||{});class Re{constructor(e){h(this,"message"),h(this,"transactionId"),h(this,"progress"),h(this,"file"),h(this,"readReceiptInfo"),h(this,"reactions",[]),h(this,"editStatus"),h(this,"editDraft"),h(this,"editTimestamp");var t;this.message=e;const s=(t=e.updateInfo)==null?void 0:t.timestamp;s!=null&&(this.editStatus="SUCCESS",this.editTimestamp=s)}get messageId(){return this.message.messageId}set messageId(e){this.message.messageId=e}get sentTime(){return this.message.sentTime}set sentTime(e){this.message.sentTime=e}get direction(){return this.message.direction}set direction(e){this.message.direction=e}get content(){return this.message.content}get messageType(){return this.message.messageType}get isStatusMessage(){return this.message.isStatusMessage}get senderUserId(){return this.message.senderUserId}set senderUserId(e){this.message.senderUserId=e}get channelIdentifier(){return this.message.channelIdentifier}get channelType(){return this.message.channelIdentifier.channelType}get isPersisted(){return this.message.isPersisted}get isCounted(){return this.message.isCounted}get sentStatus(){return this.message.sentStatus}set sentStatus(e){this.message.sentStatus=e}get clientId(){return this.message.clientId}set clientId(e){this.message.clientId=e}get sentReceipt(){return this.message.sentReceipt||!1}set sentReceipt(e){this.message.sentReceipt=e}get needReceipt(){return this.message.needReceipt}clone(){const e=new Ie(this.content,this.messageType),t=se.createMessage(this.channelIdentifier,e);t.directedUserIds=this.message.directedUserIds,t.sentReceipt=this.message.sentReceipt,t.needReceipt=this.message.needReceipt,t.clientId=this.message.clientId,t.messageId=this.message.messageId,t.directedUserIds=this.message.directedUserIds,t.sentTime=this.message.sentTime,t.direction=this.message.direction,t.senderUserId=this.senderUserId,t.disableNotification=this.message.disableNotification,t.hasChanged=this.message.hasChanged,t.hasReactions=this.message.hasReactions,t.metadata=this.message.metadata,t.updateInfo=this.message.updateInfo,t.disableUpdateLastMessage=this.message.disableUpdateLastMessage,t.sentStatus=this.message.sentStatus;const s=new Re(t);return s.transactionId=this.transactionId,s.progress=this.progress,s.file=this.file,s.readReceiptInfo=this.readReceiptInfo,s.editStatus=this.editStatus,s.editDraft=this.editDraft,s.editTimestamp=this.editTimestamp,s.reactions=this.reactions.map(i=>({...i,users:[...i.users]})),s}isEqual(e){return this.messageId&&this.messageId===e.messageId||!!this.transactionId&&this.transactionId===e.transactionId}}class jt extends v{constructor(e,t){super("CONNECTION_STATUS_CHANGE",{status:e,code:t})}}var Ct=(r=>(r.SINGLE="single",r.MERGE="merge",r))(Ct||{}),E=(r=>(r.USER_PROFILES_UPDATE="USER_PROFILES_UPDATE",r.GROUP_PROFILES_UPDATE="GROUP_PROFILES_UPDATE",r.GROUP_MEMBERS_UPDATE="GROUP_MEMBERS_UPDATE",r.INIT_USER_CACHE="INIT_USER_CACHE",r.DESTROY_USER_CACHE="DESTROY_USER_CACHE",r.SYSTEM_PROFILES_UPDATE="SYSTEM_PROFILES_UPDATE",r.CHANNELS_ITEM_CHANGE="CHANNELS_ITEM_CHANGE",r.CHANNELS_LIST_RESET="CHANNELS_LIST_RESET",r.CHANNELS_ITEM_ORDER_CHANGE="CHANNELS_ITEM_ORDER_CHANGE",r.CHANNELS_ITEM_DELETED="CHANNELS_ITEM_DELETED",r.MESSAGE_STATE_CHANGE="MESSAGE_STATE_CHANGE",r.INSERT_NEW_MESSAGES="INSERT_NEW_MESSAGES",r.LANGUAGE_CHANGE="LANGUAGE_CHANGE",r.AUDIO_PLAY_EVENT="AUDIO_PLAY_EVENT",r.SET_TEXTAREA_VALUE_EVENT="SET_TEXTAREA_VALUE_EVENT",r.ADJUST_MESSAGE_LIST_SCROLL="ADJUST_MESSAGE_LIST_SCROLL",r.SPEECH_TO_TEXT_STATE_CHANGE="SPEECH_TO_TEXT_STATE_CHANGE",r.RECV_NEW_MESSAGES="RECV_NEW_MESSAGES",r.CONNECTION_STATUS_CHANGE="CONNECTION_STATUS_CHANGE",r.CHANNEL_BAR_SWITCH_CHANGE="CHANNEL_BAR_SWITCH_CHANGE",r.CHANNEL_DETAIL_BACK_SWITCH_CHANGE="CHANNEL_DETAIL_BACK_SWITCH_CHANGE",r.CHANNEL_BAR_TITLE_CHANGE="CHANNEL_BAR_TITLE_CHANGE",r.TOAST_EVENT="TOAST_EVENT",r))(E||{}),x=(r=>(r.CONFIRM_EVENT="CONFIRM_EVENT",r.ALERT_EVENT="ALERT_EVENT",r.MEDIA_MESSAGE_MODAL_EVENT="MEDIA_MESSAGE_MODAL_EVENT",r.COMBINE_MESSAGE_MODAL_EVENT="COMBINE_MESSAGE_MODAL_EVENT",r.REACTIONS_DETAIL_EVENT="REACTIONS_DETAIL_EVENT",r.FORWARDING_EVENT="FORWARDING_EVENT",r.TAKE_PHOTO_MODAL_EVENT="TAKE_PHOTO_MODAL_EVENT",r.UNSCHEDULED_MESSAGES="UNSCHEDULED_MESSAGES",r.CHANNEL_PANEL_EXTENSION_TOUCH="CHANNEL_PANEL_EXTENSION_TOUCH",r.SYSTEM_CHANNEL_OPENING="SYSTEM_CHANNEL_OPENING",r.CHANNELS_MENU_ITEM_CLICK="CHANNELS_MENU_ITEM_CLICK",r.INPUT_MENU_ITEM_CLICK="INPUT_MENU_ITEM_CLICK",r.MESSAGE_INPUT_FOCUS="MESSAGE_INPUT_FOCUS",r.MESSAGE_INPUT_BLUR="MESSAGE_INPUT_BLUR",r.MESSAGE_INPUT_CHANGE="MESSAGE_INPUT_CHANGE",r.MESSAGE_WILL_SEND="MESSAGE_WILL_SEND",r.CHANNEL_SELECTED="CHANNEL_SELECTED",r.CHANNEL_ICON_CLICK="CHANNEL_ICON_CLICK",r.CHANNEL_NAVI_CLICK="CHANNEL_NAVI_CLICK",r.MESSAGE_MENU_ITEM_CLICK="MESSAGE_MENU_ITEM_CLICK",r.MESSAGE_LINK_CLICK="MESSAGE_LINK_CLICK",r.DOWNLOAD_LINK_EVENT="DOWNLOAD_LINK_EVENT",r.FILE_SEND_FAILED_EVENT="FILE_SEND_FAILED_EVENT",r.MESSAGES_DELETED="MESSAGES_DELETED",r.TOAST_EVENT="TOAST_EVENT",r))(x||{});class Ur{constructor(){h(this,"_listeners",new Map)}addEventListener(e,t,s){const i=this._listeners.get(e);i?i.push({target:s,listener:t}):this._listeners.set(e,[{target:s,listener:t}])}onceEventListener(e,t,s){const i=this._listeners.get(e);i?i.push({target:s,listener:t,once:!0}):this._listeners.set(e,[{target:s,listener:t,once:!0}])}removeEventListener(e,t,s){const i=this._listeners.get(e);if(i){const n=i.findIndex(a=>a.listener===t&&a.target===s);n!==-1&&i.splice(n,1)}}_removeListenerItem(e,t){const s=this._listeners.get(e),i=(s==null?void 0:s.indexOf(t))??-1;s&&i!==-1&&s.splice(i,1)}removeEventListeners(e){this._listeners.delete(e)}removeAllEventListeners(){this._listeners.clear()}dispatchEvent(e,t=!0){t?setTimeout(()=>this._handleDispatchEvent(e),0):this._handleDispatchEvent(e)}_handleDispatchEvent(e){var t;const s=e,i=this._listeners.get(s.type);if(!(!i||i.length===0))for(const n of[...i]){if(s.isImmediatePropagationStopped())return;if(!((t=this._listeners.get(s.type))!=null&&t.includes(n)))continue;const{target:a,once:o,listener:l}=n;o&&this._removeListenerItem(s.type,n);try{l.call(a,s)}catch(c){console.error(c)}}}}var te=(r=>(r.SHOW_CONNECTION_STATUS_IN_CHANNEL_LIST="SHOW_CONNECTION_STATUS_IN_CHANNEL_LIST",r.SHOW_MESSAGE_STATE="SHOW_MESSAGE_STATE",r.MENTION_ALL="MENTION_ALL",r.PROMPT_SENDER_WHEN_QUOTE_MESSAGE="PROMPT_SENDER_WHEN_QUOTE_MESSAGE",r.DELETE_MESSAGES_WHILE_DELETE_CHANNEL="DELETE_MESSAGES_WHILE_DELETE_CHANNEL",r.MESSAGE_REACTION_ENABLED="MESSAGE_REACTION_ENABLED",r.SHOW_MESSAGE_REACT_USERS="SHOW_MESSAGE_REACT_USERS",r.MESSAGE_EDIT_ENABLED="MESSAGE_EDIT_ENABLED",r))(te||{});const w={D:"L_DEBUG_O",A_INIT_O:"A_INIT_O",A_SET_COMMAND_SWITCH_O:"L_SET_COMMAND_SWITCH_O",A_REGISTER_CUSTOM_ELEMENT_O:"A_REGISTER_CUSTOM_ELEMENT_O",L_REGISTER_DOM_ELEMENTS_O:"L_REGISTER_DOM_ELEMENTS_O",A_REGISTER_MESSAGE_TYPE_O:"A_REGISTER_MESSAGE_TYPE_O",A_SET_CUSTOM_SERVICE_O:"A_SET_CUSTOM_SERVICE_O",A_SET_CUSTOM_LANGUAGE_PACK_O:"A_SET_CUSTOM_LANGUAGE_PACK_O",A_CLONE_LANGUAGE_ENTRIES_O:"A_CLONE_LANGUAGE_ENTRIES_O",A_REGISTER_LANGUAGE_PACK_O:"A_REGISTER_LANGUAGE_PACK_O",A_SET_LANGUAGE_O:"A_SET_LANGUAGE_O",A_READY_O:"A_READY_O",L_REQ_USER_PROFILE_HOOK_T:"L_REQ_USER_PROFILE_HOOK_T",L_REQ_USER_PROFILE_HOOK_R:"L_REQ_USER_PROFILE_HOOK_R",L_REQ_USER_PROFILE_HOOK_E:"L_REQ_USER_PROFILE_HOOK_E",L_GET_DEFAULT_USER_PROFILE_HOOK_E:"L_GET_DEFAULT_USER_PROFILE_HOOK_E",L_GET_DEFAULT_USER_PROFILE_HOOK_O:"L_GET_DEFAULT_USER_PROFILE_HOOK_O",A_UPDATE_USER_PROFILE_E:"A_UPDATE_USER_PROFILE_E",A_UPDATE_USER_PROFILE_T:"A_UPDATE_USER_PROFILE_T",A_UPDATE_USER_PROFILE_R:"A_UPDATE_USER_PROFILE_R",A_UPDATE_USER_ONLINE_STATE_R:"A_UPDATE_USER_ONLINE_STATE_R",A_UPDATE_USER_ONLINE_STATE_T:"A_UPDATE_USER_ONLINE_STATE_T",L_GET_DEFAULT_GROUP_PROFILE_HOOK_O:"L_GET_DEFAULT_GROUP_PROFILE_HOOK_O",L_GET_DEFAULT_GROUP_PROFILE_HOOK_E:"L_GET_DEFAULT_GROUP_PROFILE_HOOK_E",L_REQ_GROUP_PROFILE_HOOK_T:"L_REQ_GROUP_PROFILE_HOOK_T",L_REQ_GROUP_PROFILE_HOOK_E:"L_REQ_GROUP_PROFILE_HOOK_E",L_REQ_GROUP_PROFILE_HOOK_R:"L_REQ_GROUP_PROFILE_HOOK_R",A_UPDATE_GROUP_PROFILE_T:"A_UPDATE_GROUP_PROFILE_T",A_UPDATE_GROUP_PROFILE_E:"A_UPDATE_GROUP_PROFILE_E",A_UPDATE_GROUP_PROFILE_R:"A_UPDATE_GROUP_PROFILE_R",L_REQ_GROUP_MEMBERS_HOOK_T:"L_REQ_GROUP_MEMBERS_HOOK_T",L_REQ_GROUP_MEMBERS_HOOK_E:"L_REQ_GROUP_MEMBERS_HOOK_E",L_REQ_GROUP_MEMBERS_HOOK_R:"L_REQ_GROUP_MEMBERS_HOOK_R",A_UPDATE_GROUP_MEMBERS_T:"A_UPDATE_GROUP_MEMBERS_T",A_UPDATE_GROUP_MEMBERS_E:"A_UPDATE_GROUP_MEMBERS_E",A_UPDATE_GROUP_MEMBERS_R:"A_UPDATE_GROUP_MEMBERS_R",A_ADD_GROUP_MEMBERS_T:"A_ADD_GROUP_MEMBERS_T",A_ADD_GROUP_MEMBERS_E:"A_ADD_GROUP_MEMBERS_E",A_ADD_GROUP_MEMBERS_R:"A_ADD_GROUP_MEMBERS_R",A_REMOVE_GROUP_MEMBERS_T:"A_REMOVE_GROUP_MEMBERS_T",A_REMOVE_GROUP_MEMBERS_E:"A_REMOVE_GROUP_MEMBERS_E",A_REMOVE_GROUP_MEMBERS_R:"A_REMOVE_GROUP_MEMBERS_R",L_REQ_USER_ONLINE_HOOK_T:"L_REQ_USER_ONLINE_HOOK_T",L_REQ_USER_ONLINE_HOOK_E:"L_REQ_USER_ONLINE_HOOK_E",L_REQ_USER_ONLINE_HOOK_R:"L_REQ_USER_ONLINE_HOOK_R",L_REQ_SYSTEM_PROFILE_HOOK_T:"L_REQ_SYSTEM_PROFILE_HOOK_T",L_REQ_SYSTEM_PROFILE_HOOK_E:"L_REQ_SYSTEM_PROFILE_HOOK_E",L_REQ_SYSTEM_PROFILE_HOOK_R:"L_REQ_SYSTEM_PROFILE_HOOK_R",L_GET_DEFAULT_SYSTEM_PROFILE_HOOK_O:"L_GET_DEFAULT_SYSTEM_PROFILE_HOOK_O",L_GET_DEFAULT_SYSTEM_PROFILE_HOOK_E:"L_GET_DEFAULT_SYSTEM_PROFILE_HOOK_E",L_GET_TAGS_FROM_LIB_E:"L_GET_TAGS_FROM_LIB_E",A_ADD_UNVERIFIED_TAG_O:"A_ADD_UNVERIFIED_TAG_O",A_ADD_UNVERIFIED_TAG_E:"A_ADD_UNVERIFIED_TAG_E",A_ADD_TAG_E:"A_ADD_TAG_E",A_UPDATE_TAG_E:"A_UPDATE_TAG_E",A_REMOVE_TAG_E:"A_REMOVE_TAG_E",A_SET_INPUT_MENU_E:"A_SET_INPUT_MENU_E",A_SET_MESSAGE_BUBBLE_CFG_E:"A_SET_MESSAGE_BUBBLE_CFG_E",A_SET_CHANNELS_ITEM_CFG_E:"A_SET_CHANNELS_ITEM_CFG_E",A_UPDATE_USER_ONLINE_STATE_E:"A_UPDATE_USER_ONLINE_STATE_E",A_OPEN_CHANNEL_E:"A_OPEN_CHANNEL_E",A_DELETE_CHANNEL_E:"A_DELETE_CHANNEL_E",A_SEND_MESSAGE_E:"A_SEND_MESSAGE_E",A_INSERT_MESSAGE_E:"A_INSERT_MESSAGE_E",A_SET_CHANNEL_PANEL_EXTENSION_E:"A_SET_CHANNEL_PANEL_EXTENSION_E",L_PUSH_2_QUEUE_O:"L_PUSH_2_QUEUE_O",L_TASK_QUEUE_EXECUTE_O:"L_PICK_ITEM_FROM_QUEUE_O",L_SEND_MSG_T:"L_SEND_MSG_T",L_SEND_MSG_R:"L_SEND_MSG_R",L_UPLOAD_FILE_T:"L_UPLOAD_FILE_T",L_UPLOAD_FILE_R:"L_UPLOAD_FILE_R",L_UPLOAD_FILE_O:"L_UPLOAD_FILE_O",A_SET_CHAT_EMOJI_LIBRARY_E:"A_SET_CHAT_EMOJI_LIBRARY_E",L_GET_PUSH_CONFIG_HOOK_E:"L_GET_PUSH_CONFIG_HOOK_E",L_SET_RECALL_DURATION_E:"L_SET_RECALL_DURATION_E",L_SEND_READ_RECEIPT_MESSAGEV4_T:"L_SEND_READ_RECEIPT_MESSAGEV4_T",L_SEND_READ_RECEIPT_MESSAGEV4_R:"L_SEND_READ_RECEIPT_MESSAGEV4_R",L_PARSE_CHANNEL_E:"L_PARSE_CHANNEL_E",L_GET_CHANNEL_E:"L_GET_CHANNEL_E",L_V5_RECEIPT_RESPONSE_E:"L_V5_RECEIPT_RESPONSE_E",L_HANDLE_READ_RECEIPT_V5_E:"L_HANDLE_READ_RECEIPT_V5_E",L_GET_READ_RECEIPT_INFO_V5_E:"L_GET_READ_RECEIPT_INFO_V5_E",L_V5_RECEIPT_RESPONSE_O:"L_V5_RECEIPT_RESPONSE_O",L_SEND_V5_RECEIPT_T:"L_SEND_V5_RECEIPT_T",L_SEND_V5_RECEIPT_R:"L_SEND_V5_RECEIPT_R",L_SEND_V5_RECEIPT_O:"L_SEND_V5_RECEIPT_O",L_SEND_V5_RECEIPT_E:"L_SEND_V5_RECEIPT_E",L_STT_REQUEST_T:"L_STT_REQUEST_T",L_STT_REQUEST_R:"L_STT_REQUEST_R",L_STT_REQUEST_E:"L_STT_REQUEST_E",L_STT_RESPONSE_O:"L_STT_RESPONSE_O",L_STT_RESPONSE_R:"L_STT_RESPONSE_R",L_STT_RESPONSE_E:"L_STT_RESPONSE_E"};class Lo{constructor(e){h(this,"_commands",new Map),h(this,"_channelBarTitle"),h(this,"_channelBarSwitch",!0),h(this,"_channelDetailBackSwitch",!0),h(this,"_extensions",[]),h(this,"_pushConfigHook"),this.logger=e,this._init()}_init(){this._commands.set(te.SHOW_CONNECTION_STATUS_IN_CHANNEL_LIST,!0),this._commands.set(te.SHOW_MESSAGE_STATE,!0),this._commands.set(te.MENTION_ALL,!0),this._commands.set(te.PROMPT_SENDER_WHEN_QUOTE_MESSAGE,!1),this._commands.set(te.DELETE_MESSAGES_WHILE_DELETE_CHANNEL,!1),this._commands.set(te.MESSAGE_REACTION_ENABLED,!1),this._commands.set(te.SHOW_MESSAGE_REACT_USERS,!1),this._commands.set(te.MESSAGE_EDIT_ENABLED,!1)}setCommandSwitch(e,t){this.logger.info(w.A_SET_COMMAND_SWITCH_O,`command: ${e}, enable: ${!!t}`),this._commands.set(e,!!t)}getCommandSwitch(e){return!!this._commands.get(e)}setChannelBarTitle(e){this._channelBarSwitch&&(this._channelBarTitle=e)}setChannelBarSwitch(e){this._channelBarSwitch=e}setChannelDetailBackSwitch(e){this._channelDetailBackSwitch=e}getChannelBarSwitch(){return this._channelBarSwitch}getChannelDetailBackSwitch(){return this._channelDetailBackSwitch}getChannelBarTitle(){return this._channelBarTitle}getChannelPanelExtension(){return this._extensions}setChannelPanelExtensions(e){this._extensions.splice(0,this._extensions.length,...e)}setPushConfigHook(e){this._pushConfigHook=e}getPushConfig(e){if(!this._pushConfigHook)return;let t;try{t=this._pushConfigHook(e.clone())}catch(s){console.error("getPushConfigHook error: ",s)}return t}destroy(){this._commands.clear()}}const Io=r=>JSON.parse(JSON.stringify(r));let si;const Ao=r=>(si||(si={set:(e,t)=>{r.localStorage.setItem(e,JSON.stringify(t))},get:e=>{let t;try{t=JSON.parse(r.localStorage.getItem(e))}catch{t=null}return t},remove:e=>r.localStorage.removeItem(e),getKeys:()=>{const e=[];for(const t in r.localStorage)e.push(t);return e}}),si);class Oo{constructor(e){h(this,"_caches",{}),e&&(this._caches=e)}set(e,t){this._caches[e]=t}remove(e){const t=this.get(e);return delete this._caches[e],t}get(e){return this._caches[e]}getKeys(){const e=[];for(const t in this._caches)e.push(t);return e}}class $o{constructor(e,t){h(this,"_cache"),h(this,"_storageKey"),h(this,"_rootStorage"),this._rootStorage=Ao(e);const s=this._rootStorage.get(t)||{};this._cache=new Oo({[t]:s}),this._storageKey=t}_get(){const e=this._storageKey;return this._cache.get(e)||{}}_set(e){const t=this._storageKey;e=e||{},this._cache.set(t,e),this._rootStorage.set(t,e)}set(e,t){const s=this._get();s[e]=t,this._set(s)}remove(e){const t=this._get();delete t[e],this._set(t)}clear(){const e=this._storageKey;this._rootStorage.remove(e),this._cache.remove(e)}get(e){return this._get()[e]}getKeys(){const e=this._get(),t=[];for(const s in e)t.push(s);return t}getValues(){return this._get()||{}}}function Dr(r){let e=!1;const t=()=>r instanceof HTMLElement?r:r.value||null,s=n=>{n.preventDefault(),n.stopPropagation()},i=n=>{["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "].includes(n.key)&&(n.preventDefault(),n.stopPropagation())};return{disableScroll:()=>{if(e)return;e=!0;const n=t();n&&(n.addEventListener("wheel",s,{passive:!1}),n.addEventListener("touchmove",s,{passive:!1}),n.addEventListener("keydown",i,{passive:!1}))},enableScroll:()=>{if(!e)return;e=!1;const n=t();n&&(n.removeEventListener("wheel",s),n.removeEventListener("touchmove",s),n.removeEventListener("keydown",i))},get isScrollDisabled(){return e}}}const bs=r=>!r||!(r instanceof Sr)?!0:![T.DIRECT,T.GROUP,T.SYSTEM].includes(r.channelType),H=r=>r instanceof eo?`[${r.channelType}][${r.channelId}][${r.subChannelId}]`:`[${r.channelType}][${r.channelId}][]`,An=r=>{const e=r.channelType;return e===T.DIRECT||e===T.GROUP},Tt=r=>{r||(r=Date.now());const e=new Date(r),t=`${e.getFullYear()}`,s=`${e.getMonth()+1}`,i=`${e.getDate()}`,n=e.getDay();let a=`${e.getHours()}`;a.length<2&&(a=`0${a}`);let o=`${e.getMinutes()}`;return o.length<2&&(o=`0${o}`),{year:t,month:s,day:i,hour:a,minute:o,weekDay:n}},Uo=r=>{const e=Math.floor(r/60),t=Math.floor(e/60),s=Math.floor(t/24);return r<60?`0:${r.toString().padStart(2,"0")}`:(r=Math.floor(r),`${s>0?`${s}d `:""}${t>0?`${(t%24).toString().padStart(2,"0").trim()}:`:""}${e>0?`${(e%60).toString().padStart(2,"0")}:`:""}${(r%60).toString().padStart(2,"0")}`.trim())},Do=r=>r<1024?r+" B":r<1024*1024?(r/1024).toFixed(2)+" KB":r<1024*1024*1024?(r/(1024*1024)).toFixed(2)+" MB":r<1024*1024*1024*1024?(r/(1024*1024*1024)).toFixed(2)+" GB":(r/(1024*1024*1024*1024)).toFixed(2)+" TB",Nr=r=>r?/data:image\/[^;]+;base64,/.test(r)?r:`data:image/png;base64,${r}`:void 0,No=r=>{const e="(?:(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d|\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d|\\d)",t="(?!@)(?:[a-z0-9-@_]{1,36}\\.)+[a-z]{2,6}",s="(?:\\:\\d{1,5})?",i="(?:localhost)",n="(?:(?:/[a-zA-Z0-9.,;\\'+&%$#=~_\\-!()*\\|\\/]*)?)",a="(?:\\?[a-zA-Z0-9.,;?:\\'+&%$#=~_\\-!()*\\|\\/]*)?",o="(?=https?:\\/\\/|$|[^a-zA-Z0-9:]|:(?!\\/\\/))",l=new RegExp("(((https?)://(?:("+e+")|("+t+")|"+i+")"+s+n+a+"))"+o,"ig"),c=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/ig,d=[];let u;const p=new RegExp(l.source,l.flags);for(;(u=p.exec(r))!==null;)d.push({type:"url",val:u[0],index:u.index}),u[0].length===0&&p.lastIndex===u.index&&p.lastIndex++;let m;const y=new RegExp(c.source,c.flags);for(;(m=y.exec(r))!==null;)d.push({type:"mail",val:m[0],index:m.index}),m[0].length===0&&y.lastIndex===m.index&&y.lastIndex++;d.sort((de,Qe)=>de.index-Qe.index||Qe.val.length-de.val.length);const S=[];let U=-1;for(const de of d)de.index<U||(S.push(de),U=de.index+de.val.length);if(S.length<=0)return{type:0,content:[{content:r,type:"text"}],position:[]};const P=[];let K=0;const W=[];return S.forEach(de=>{const Qe=de.index;Qe<K||(Qe>K&&P.push({content:r.substring(K,Qe),type:"text"}),P.push({content:de.val.trim(),type:de.type}),W.push(P.length),K=Qe+de.val.length)}),K<r.length&&P.push({content:r.substring(K),type:"text"}),{type:1,content:P,position:W}};function Be(r,e){let t=r.length;for(let s=t-1;s>-1;s--)if(e(r[s]))return s;return-1}const Ee=()=>typeof window<"u"&&window.innerWidth<=768,vt=()=>Date.now()-X.getServerTimeDelta(),pe=r=>{const{channelType:e,channelId:t}=r;switch(e){case T.DIRECT:return new no(t);case T.GROUP:return new io(t);case T.SYSTEM:return new so(t);case T.COMMUNITY:return new to(t,r.subChannelId);default:return null}},ko=(r,e)=>`chatui-${r}-${e}`,ts={lrt:{keyName:"lastReadTime",defaultVal:0},srrt:{keyName:"sendReadReceiptTime",defaultVal:0}},kr={};for(const r in ts){const{keyName:e}=ts[r];kr[e]=r}class Po{constructor(e,t,s){h(this,"_localStore"),this._localStore=new $o(e,ko(t,s))}get(e){const t=H(e),s=this._localStore.get(t)||{},i={};for(const n in ts){const{keyName:a,defaultVal:o}=ts[n];i[a]=s[n]||Io(o)}return i}set(e,t){const s=H(e),i=this._localStore.get(s)||{};for(const n in t){const a=kr[n],o=t[n];if(a===void 0||o===void 0)continue;const{defaultVal:l}=ts[a];o===l?delete i[a]:i[a]=o}if(Object.keys(i).length>0){this._localStore.set(s,i);return}this._localStore.remove(s)}remove(e){const t=H(e);this._localStore.remove(t)}}class ye{constructor(e){h(this,"logger"),h(this,"store"),this.ctx=e,this.logger=e.logger,this.store=e.store,this.ctx.addEventListener(E.DESTROY_USER_CACHE,this._onDestroyUserCache,this),this.ctx.addEventListener(E.INIT_USER_CACHE,this._onInitUserCache,this),this._onInit()}_onInit(){}}class $i{constructor(e,t,s){h(this,"_cache",new Map),h(this,"logger"),h(this,"store"),h(this,"_requesting",new Map),h(this,"_waitingList",new Set),h(this,"_waitingPromise"),h(this,"_waitingTimer"),h(this,"_resolveWaiting"),h(this,"_generation",0),this._ctx=e,this._hook=t,this._defaultHook=s,this.logger=e.logger,this.store=e.store}_push2Waiting(e){return e.forEach(t=>this._waitingList.add(t)),this._waitingPromise||(this._waitingPromise=new Promise(t=>{this._resolveWaiting=t,this._waitingTimer=setTimeout(()=>{const s=[...this._waitingList];this._waitingList.clear(),this._waitingTimer=void 0,this._waitingPromise=void 0,this._resolveWaiting=void 0,this._request(s).then(t)},200)})),this._waitingPromise}_request(e){const t=this._generation,s=Promise.resolve().then(async()=>{if(t!==this._generation)return;const i=this.logger.createTraceId();try{this.logger.info(this.ReqStartTag,e.join(","),i);const n=await this._hook(e);if(t!==this._generation)return;if(!Array.isArray(n)){this.logger.error(this.ReqFailedTag,"result must be an Array",i);return}const a=[],o=n.filter((l,c)=>{const d=!this._isInvalid(l);if(!d)this.logger.warn(this.ReqFailedTag,`invalid value in position ${c}`,i),console.error(`invalid value in position ${c}: `,l);else{const{cached:u,changed:p}=this._checkAndUpdateCacheData(l);p&&a.push(u)}return d});a.length>0&&this._dispatchUpdateEvent(a),this.logger.info(this.ReqSuccessTag,`valid value length: ${o.length}`,i)}catch(n){this.logger.error(this.ReqFailedTag,String(n),i)}}).finally(()=>{e.forEach(i=>{this._requesting.get(i)===s&&this._requesting.delete(i)})});return e.forEach(i=>this._requesting.set(i,s)),s}async reqData(e,t=!1){if(e.length===0)return[];const s=this._generation,i=t?e.slice():e.filter(o=>{const l=this._cache.get(o);return!l||l.usingDefault});if(i.length===0)return this.getCache(e,!0);const n=[],a=[];return i.forEach(o=>{const l=this._requesting.get(o);l?n.includes(l)||n.push(l):a.push(o)}),a.length>0&&n.push(this._push2Waiting(a)),n.length>0&&await Promise.all(n),s===this._generation?this.getCache(e,!0):[]}getCache(e,t){if(e.length===0)return[];const s=[],i=e.map(n=>{const a=this._cache.get(n);if(a)return a.usingDefault&&s.push(n),a;s.push(n);const o=this._getDefaultCache(n);return this._cache.set(n,o),o});return!t&&s.length>0&&this.reqData(s,!0),i}_getDefaultCache(e){let t;if(this._defaultHook){this.logger.info(this.GetDefaultTag,`id: ${e}`);try{t=this._defaultHook(e)}catch(s){this.logger.error(this.GetDefaultErrorTag,s.message)}t&&this._isInvalid(t)&&(this.logger.error(this.GetDefaultErrorTag,`id: ${e}`),t=void 0)}return this._createDefaultCache(e,t)}clear(){var e;this._generation+=1,this._cache.clear(),this._requesting.clear(),this._waitingList.clear(),clearTimeout(this._waitingTimer),this._waitingTimer=void 0,this._waitingPromise=void 0,(e=this._resolveWaiting)==null||e.call(this),this._resolveWaiting=void 0}}const Ho=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#C4B7FF"/>
<path d="M22.9954 13.7373C22.9954 12.131 21.8033 10.7873 20.2483 10.5629C19.996 10.5265 19.7881 10.7367 19.7881 10.9917C19.7881 11.2466 19.9969 11.4484 20.2467 11.4997C21.2896 11.7137 22.0721 12.6431 22.0721 13.7495C22.0721 14.8558 21.2896 15.7758 20.2467 15.9876C19.9969 16.0383 19.7881 16.2401 19.7881 16.4951C19.7881 16.75 19.996 16.9602 20.2483 16.9236C21.8033 16.6974 22.9954 15.3437 22.9954 13.7373Z" fill="#020814"/>
<path d="M24.9999 19.6052C24.9999 18.451 24.0645 17.5156 22.9103 17.5156H22.7466C22.5017 17.5156 22.3032 17.7141 22.3032 17.959C22.3032 18.2039 22.5017 18.4024 22.7466 18.4024H22.9103C23.5785 18.4024 24.1252 18.9491 24.1252 19.6173C24.1252 20.2855 23.5785 20.8322 22.9103 20.8322H22.7345C22.4963 20.8322 22.3032 21.0253 22.3032 21.2635C22.3032 21.5017 22.4963 21.6947 22.7345 21.6947H22.9103C24.0645 21.6947 24.9999 20.7593 24.9999 19.6052Z" fill="#020814"/>
<path d="M9.00464 13.7373C9.00464 12.131 10.1967 10.7873 11.7517 10.5629C12.004 10.5265 12.2119 10.7367 12.2119 10.9917C12.2119 11.2466 12.0031 11.4484 11.7533 11.4997C10.7104 11.7137 9.92795 12.6431 9.92795 13.7495C9.92795 14.8558 10.7104 15.7758 11.7533 15.9876C12.0031 16.0383 12.2119 16.2401 12.2119 16.4951C12.2119 16.75 12.004 16.9602 11.7517 16.9236C10.1967 16.6974 9.00464 15.3437 9.00464 13.7373Z" fill="#020814"/>
<path d="M7.00009 19.6052C7.00009 18.451 7.93555 17.5156 9.08968 17.5156H9.25338C9.49828 17.5156 9.69681 17.7141 9.69681 17.959C9.69681 18.2039 9.49828 18.4024 9.25338 18.4024H9.08968C8.4215 18.4024 7.8748 18.9491 7.8748 19.6173C7.8748 20.2855 8.4215 20.8322 9.08968 20.8322H9.26553C9.50372 20.8322 9.69681 21.0253 9.69681 21.2635C9.69681 21.5017 9.50372 21.6947 9.26553 21.6947H9.08968C7.93555 21.6947 7.00009 20.7593 7.00009 19.6052Z" fill="#020814"/>
<path d="M15.946 17.1026C13.8922 17.1026 12.2323 15.4286 12.2323 13.3889C12.2323 11.3492 13.8922 9.66113 15.946 9.66113C17.9997 9.66113 19.6597 11.3351 19.6597 13.3748C19.6597 15.4145 17.9997 17.1026 15.946 17.1026ZM15.946 10.7302C14.483 10.7302 13.3014 11.9119 13.3014 13.3748C13.3014 14.8378 14.4971 16.0335 15.946 16.0335C17.4089 16.0335 18.5906 14.8519 18.5906 13.3889C18.5906 11.9259 17.4089 10.7302 15.946 10.7302ZM19.5612 22.5887H12.3448C11.0085 22.5887 9.92529 21.5055 9.92529 20.1692C9.92529 18.8328 11.0085 17.7497 12.3448 17.7497H19.5612C20.8975 17.7497 21.9807 18.8328 21.9807 20.1692C21.9807 21.5055 20.8975 22.5887 19.5612 22.5887ZM12.3448 18.7765C11.5711 18.7765 10.9381 19.4096 10.9381 20.1832C10.9381 20.9569 11.5711 21.5899 12.3448 21.5899H19.5612C20.3349 21.5899 20.9679 20.9569 20.9679 20.1832C20.9679 19.4096 20.3349 18.7765 19.5612 18.7765H12.3448Z" fill="#020814"/>
</svg>
`,Fo=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#D2E1FE"/>
<path d="M15.952 17.216C13.616 17.216 11.728 15.312 11.728 12.992C11.728 10.672 13.616 8.75195 15.952 8.75195C18.288 8.75195 20.176 10.656 20.176 12.976C20.176 15.296 18.288 17.216 15.952 17.216ZM15.952 9.96795C14.288 9.96795 12.944 11.312 12.944 12.976C12.944 14.64 14.304 16 15.952 16C17.616 16 18.96 14.656 18.96 12.992C18.96 11.328 17.616 9.96795 15.952 9.96795ZM20.064 23.456H11.856C10.336 23.456 9.104 22.224 9.104 20.704C9.104 19.184 10.336 17.952 11.856 17.952H20.064C21.584 17.952 22.816 19.184 22.816 20.704C22.816 22.224 21.584 23.456 20.064 23.456ZM11.856 19.12C10.976 19.12 10.256 19.84 10.256 20.72C10.256 21.6 10.976 22.32 11.856 22.32H20.064C20.944 22.32 21.664 21.6 21.664 20.72C21.664 19.84 20.944 19.12 20.064 19.12H11.856Z" fill="#020814"/>
</svg>
`,Go=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#FFCB82"/>
<path d="M18.1627 23.3216C17.9241 23.3211 17.69 23.2566 17.4848 23.1349L12.7916 20.3783C12.7359 20.3457 12.6725 20.3285 12.608 20.3285H10.3391C9.98405 20.328 9.64369 20.1868 9.39266 19.9358C9.14163 19.6848 9.00041 19.3444 9 18.9894V13.3519C9.00005 12.9968 9.14113 12.6563 9.3922 12.4052C9.64328 12.1542 9.98379 12.0131 10.3389 12.013H10.3482L12.5836 12.0285H12.5859C12.6509 12.0284 12.7147 12.011 12.7707 11.9779L17.4803 9.18705C17.6836 9.06656 17.9152 9.00204 18.1516 9.00005C18.388 8.99806 18.6206 9.05866 18.826 9.17571C19.0313 9.29276 19.2021 9.46208 19.3208 9.66647C19.4395 9.87086 19.502 10.103 19.502 10.3394V21.98C19.5011 22.3351 19.3598 22.6755 19.1088 22.9267C18.8579 23.178 18.5178 23.3198 18.1627 23.3212V23.3216ZM10.3391 12.9896C10.243 12.9896 10.1508 13.0278 10.0828 13.0957C10.0148 13.1636 9.97661 13.2558 9.97656 13.3519V18.9894C9.97672 19.0855 10.015 19.1776 10.0829 19.2456C10.1509 19.3135 10.243 19.3517 10.3391 19.3519H12.6088C12.8472 19.3519 13.0813 19.4155 13.2869 19.5363L17.9799 22.2929C18.035 22.3255 18.0977 22.3428 18.1616 22.3433C18.2256 22.3438 18.2886 22.3273 18.3441 22.2955C18.3997 22.2638 18.4458 22.2179 18.4779 22.1626C18.51 22.1072 18.5268 22.0444 18.5268 21.9804V10.3398C18.5268 10.2758 18.51 10.213 18.4779 10.1576C18.4458 10.1023 18.3997 10.0564 18.3441 10.0247C18.2886 9.99292 18.2256 9.97645 18.1616 9.97691C18.0977 9.97737 18.035 9.99475 17.9799 10.0273L13.2686 12.8179C13.0592 12.9419 12.8201 13.0066 12.5768 13.005L10.3416 12.9896H10.3391Z" fill="#020814" stroke="#020814" stroke-width="0.3"/>
<path d="M20.89 19.984C20.8127 19.9841 20.7376 19.9579 20.6771 19.9098C20.6165 19.8616 20.5741 19.7944 20.5567 19.719C20.5394 19.6436 20.5481 19.5646 20.5814 19.4948C20.6148 19.425 20.6708 19.3686 20.7404 19.3348C21.1965 19.1133 21.5767 18.7059 21.84 18.1567C22.0957 17.6237 22.2178 16.9962 22.1838 16.3895C22.1537 15.8506 22.0021 15.3544 21.7457 14.9557C21.466 14.52 21.0723 14.21 20.5756 14.0342C20.4901 14.004 20.4201 13.941 20.3811 13.8592C20.3421 13.7774 20.3371 13.6834 20.3674 13.5979C20.3976 13.5124 20.4606 13.4425 20.5424 13.4034C20.6242 13.3644 20.7182 13.3595 20.8037 13.3897C21.4291 13.6074 21.9634 14.0288 22.3209 14.5862C22.641 15.0844 22.8287 15.6948 22.8664 16.3512C22.9066 17.071 22.7611 17.8171 22.4562 18.4522C22.1254 19.1422 21.6359 19.66 21.039 19.9497C20.9926 19.9723 20.9417 19.984 20.89 19.984Z" fill="#020814" stroke="#020814" stroke-width="0.5"/>
</svg>
`,Bo=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.92969 13.056C6.92969 13.7 7.45969 14.222 8.11569 14.222C8.77069 14.222 9.30169 13.7 9.30169 13.056H10.0927C10.0927 14.13 9.20769 15 8.11569 15C7.02369 15 6.13869 14.13 6.13869 13.056H6.92969ZM12.0397 4.344C12.3247 4.944 12.4737 5.596 12.4737 6.258V9.175C12.4737 9.245 12.4937 9.315 12.5297 9.377L13.6367 11.173C13.7061 11.2918 13.7429 11.4268 13.7434 11.5644C13.7438 11.702 13.7079 11.8372 13.6393 11.9565C13.5707 12.0757 13.4718 12.1747 13.3526 12.2435C13.2335 12.3122 13.0983 12.3483 12.9607 12.348H3.89569L4.68669 11.57H12.9607L11.8527 9.77C11.7387 9.58958 11.6783 9.38044 11.6787 9.167V6.257C11.6787 5.807 11.5977 5.361 11.4387 4.939L12.0397 4.344ZM11.8467 2.239C11.9288 2.15692 12.0401 2.1108 12.1562 2.1108C12.2723 2.1108 12.3836 2.15692 12.4657 2.239C12.5478 2.32108 12.5939 2.43242 12.5939 2.5485C12.5939 2.66459 12.5478 2.77592 12.4657 2.858L3.18569 12.138C3.14511 12.1787 3.09691 12.211 3.04384 12.2331C2.99077 12.2552 2.93387 12.2666 2.8764 12.2667C2.81892 12.2668 2.76198 12.2556 2.70884 12.2337C2.6557 12.2117 2.6074 12.1796 2.56669 12.139C2.52598 12.0984 2.49366 12.0502 2.47158 11.9972C2.4495 11.9441 2.43808 11.8872 2.43799 11.8297C2.4379 11.7722 2.44913 11.7153 2.47104 11.6622C2.49295 11.609 2.52511 11.5607 2.56569 11.52L11.8467 2.239ZM8.07969 1C8.18469 1 8.28569 1.041 8.35969 1.114C8.39631 1.14984 8.42543 1.19262 8.44534 1.23983C8.46526 1.28705 8.47557 1.33776 8.47569 1.389V1.856C9.19869 1.914 9.89569 2.156 10.4957 2.556L9.93569 3.116C9.45583 2.82552 8.91258 2.65599 8.35269 2.622H8.11269C6.14569 2.622 4.55269 4.189 4.55269 6.122L4.56469 8.392L3.77369 9.171V6.106C3.77802 5.52052 3.90278 4.9422 4.14018 4.407C4.37759 3.8718 4.72258 3.39117 5.15369 2.995C5.85095 2.35177 6.73945 1.95423 7.68369 1.863V1.39C7.68369 1.287 7.72669 1.188 7.80069 1.115C7.87505 1.04162 7.97522 1.00033 8.07969 1Z" fill="#7C838E" stroke="#7C838E" stroke-width="0.342857"/>
</svg>
`,Vo=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.325 5.95002L10.0781 1.70939C9.96563 1.59689 9.82032 1.54221 9.67344 1.54221C9.52657 1.54221 9.37969 1.59689 9.26876 1.70939L6.49219 4.48283C6.28126 4.45939 6.07032 4.44846 5.85782 4.44846C4.59688 4.44846 3.33438 4.86252 2.29844 5.69221C2.03282 5.90314 2.01094 6.30158 2.25157 6.54221L5.38282 9.66877L1.67032 13.375C1.62501 13.4203 1.59688 13.4797 1.59063 13.5438L1.53282 14.1844C1.51719 14.3469 1.64688 14.4844 1.80626 14.4844C1.81563 14.4844 1.82344 14.4844 1.83282 14.4828L2.47344 14.425C2.53751 14.4203 2.59688 14.3906 2.64219 14.3453L6.35469 10.6375L9.48594 13.7641C9.59844 13.8766 9.74376 13.9313 9.89063 13.9313C10.0578 13.9313 10.2234 13.8594 10.3375 13.7172C11.3078 12.5078 11.7109 10.9922 11.5469 9.52814L14.3234 6.75627C14.5484 6.53439 14.5484 6.17346 14.325 5.95002ZM10.6703 8.65471L10.2484 9.07658L10.3141 9.66877C10.3781 10.2485 10.3313 10.825 10.1734 11.3844C10.0797 11.711 9.95313 12.0235 9.79063 12.3172L3.70313 6.23752C3.92501 6.11564 4.15626 6.01252 4.39844 5.92971C4.86719 5.76721 5.35782 5.68752 5.85782 5.68752C6.02344 5.68752 6.19063 5.69533 6.35626 5.71564L6.94844 5.78127L9.67501 3.05783L12.975 6.35314L10.6703 8.65471Z" fill="#7C838E"/>
</svg>
`,zo=`<svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4464 1.00743C10.9346 0.530944 11.7166 0.540543 12.1929 1.02886C12.669 1.51697 12.6594 2.29858 12.1714 2.77483L5.5787 9.20931C5.05539 9.72006 4.22159 9.72461 3.69274 9.21961L1.12127 6.76413C0.628033 6.29313 0.610061 5.51144 1.08113 5.01828C1.55212 4.5252 2.33363 4.50725 2.82675 4.97818L4.26713 6.35373C4.46506 6.54275 4.77714 6.54104 4.97299 6.34987L10.4464 1.00743Z" fill="white"/>
</svg>
`,jo=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_235_4141)">
<path d="M6.49384 12.7875C4.87365 12.7875 3.25347 12.1705 2.02015 10.9372C-0.446494 8.47029 -0.446494 4.45619 2.02015 1.98931C4.48656 -0.477098 8.50089 -0.478018 10.9678 1.98931C13.4344 4.45619 13.4344 8.47029 10.9678 10.9372C9.73444 12.1705 8.11403 12.7875 6.49384 12.7875ZM6.49384 1.45585C5.21104 1.45585 3.92801 1.94421 2.95152 2.92069C0.998325 4.87389 0.998325 8.05259 2.95152 10.0058C4.90495 11.9585 8.08296 11.9594 10.0364 10.0058C11.9896 8.05259 11.9896 4.87389 10.0364 2.92069C9.05967 1.94421 7.77687 1.45585 6.49384 1.45585Z" fill="#41464F"/>
<path d="M15.2108 15.8391C15.0423 15.8391 14.8736 15.7749 14.7452 15.6463L10.2862 11.1868C10.0289 10.9296 10.0289 10.5128 10.2862 10.2555C10.5435 9.99818 10.9603 9.99818 11.2176 10.2555L15.6766 14.7147C15.9339 14.972 15.9339 15.3887 15.6766 15.646C15.6155 15.7073 15.5429 15.7559 15.4629 15.789C15.383 15.8222 15.2973 15.8392 15.2108 15.8391Z" fill="#41464F"/>
</g>
<defs>
<clipPath id="clip0_235_4141">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`,qo=`<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7551 0.143687H12.4318H10.2877H7.74159H5.12847H2.81687H1.1753C0.907286 0.143687 0.689527 0.205107 0.522019 0.327945C0.354512 0.450784 0.240048 0.607124 0.178629 0.796966C0.11721 0.986807 0.114418 1.19619 0.170254 1.42512C0.22609 1.65405 0.348928 1.88018 0.53877 2.10352C0.951955 2.55021 1.38747 3.01923 1.84533 3.51059C2.30318 4.00194 2.7722 4.49888 3.25239 5.0014L4.65945 6.50897C5.13964 7.01149 5.59749 7.49726 6.03301 7.96628C6.23402 8.17846 6.47411 8.3348 6.75329 8.4353C7.03247 8.53581 7.32003 8.58327 7.61596 8.57768C7.91189 8.5721 8.20223 8.50789 8.487 8.38505C8.77176 8.26221 9.02023 8.08912 9.2324 7.86578C10.0029 7.06174 10.807 6.1907 11.6445 5.25266C12.482 4.31462 13.3587 3.30958 14.2744 2.23753C14.4866 1.98068 14.6317 1.72663 14.7099 1.47537C14.7881 1.22411 14.802 1.00077 14.7518 0.805341C14.7015 0.609916 14.5898 0.450784 14.4168 0.327945C14.2437 0.205107 14.0231 0.143687 13.7551 0.143687Z" fill="#0099FF"/>
</svg>
`,Pr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M16.0065 14.997L21.2996 9.70389C21.5668 9.43671 21.5668 8.99621 21.2996 8.72903L21.2707 8.70014C21.0035 8.43296 20.563 8.43296 20.2959 8.70014L15.0027 14.0005L9.70955 8.70014C9.44237 8.43296 9.00187 8.43296 8.73469 8.70014L8.7058 8.72903C8.4314 8.99621 8.4314 9.43671 8.7058 9.70389L13.999 14.997L8.7058 20.2902C8.43862 20.5574 8.43862 20.9979 8.7058 21.2651L8.73469 21.294C9.00187 21.5611 9.44237 21.5611 9.70955 21.294L15.0027 16.0008L20.2959 21.294C20.563 21.5611 21.0035 21.5611 21.2707 21.294L21.2996 21.2651C21.5668 20.9979 21.5668 20.5574 21.2996 20.2902L16.0065 14.997Z" fill="#41464F" stroke="#41464F" stroke-width="0.3"/>
</svg>
`,Hr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M21.2222 20.9969C21.4285 20.9969 21.6263 21.0788 21.7722 21.2247C21.9181 21.3706 22 21.5684 22 21.7747C22 21.9809 21.9181 22.1788 21.7722 22.3246C21.6263 22.4705 21.4285 22.5524 21.2222 22.5524H8.77778C8.5715 22.5524 8.37367 22.4705 8.22781 22.3246C8.08194 22.1788 8 21.9809 8 21.7747C8 21.5684 8.08194 21.3706 8.22781 21.2247C8.37367 21.0788 8.5715 20.9969 8.77778 20.9969H21.2222ZM15 7C15.2063 7 15.4041 7.08194 15.55 7.22781C15.6958 7.37367 15.7778 7.5715 15.7778 7.77778V17.1726L19.5033 13.447C19.6432 13.3072 19.831 13.226 20.0286 13.2197C20.2262 13.2135 20.4188 13.2827 20.5671 13.4134C20.7155 13.544 20.8086 13.7263 20.8274 13.9231C20.8462 14.1199 20.7894 14.3165 20.6684 14.4729L20.6031 14.546L15.5468 19.6054C15.4129 19.7395 15.2348 19.8201 15.0458 19.8321C14.8568 19.8441 14.6698 19.7868 14.5201 19.6708L14.447 19.6062L9.39533 14.5631C9.25531 14.4234 9.17378 14.2356 9.16732 14.0379C9.16087 13.8402 9.22997 13.6475 9.36058 13.4989C9.49119 13.3504 9.67349 13.2572 9.87038 13.2383C10.0673 13.2194 10.264 13.2762 10.4204 13.3972L10.4936 13.4618L14.2222 17.1827V7.77778C14.2222 7.5715 14.3042 7.37367 14.45 7.22781C14.5959 7.08194 14.7937 7 15 7Z" fill="#41464F"/>
</svg>
`,Fr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M15.7116 15.7087L23.1973 15.7087C23.5751 15.7087 23.8866 15.3972 23.8866 15.0193L23.8866 14.9785C23.8866 14.6006 23.5751 14.2891 23.1973 14.2891L15.7065 14.2943L15.7116 6.8035C15.7116 6.42564 15.4002 6.11417 15.0223 6.11417H14.9815C14.5985 6.10906 14.287 6.42054 14.2921 6.8035L14.2921 14.2891L6.80647 14.2891C6.42861 14.2891 6.11714 14.6006 6.11714 14.9785L6.11714 15.0193C6.11714 15.3972 6.42861 15.7087 6.80647 15.7087L14.2921 15.7087L14.2921 23.1943C14.2921 23.5722 14.6036 23.8836 14.9815 23.8836H15.0223C15.4002 23.8836 15.7116 23.5722 15.7116 23.1943L15.7116 15.7087Z" fill="#41464F" stroke="#41464F" stroke-width="0.3"/>
</svg>
`,Gr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M23.1974 15.7086L15.7117 15.7086L14.2922 15.7086H6.80655C6.42869 15.7086 6.11721 15.3971 6.11721 15.0193L6.11721 14.9784C6.11721 14.6006 6.42869 14.2891 6.80655 14.2891L14.2922 14.2891L15.7066 14.2942L23.1974 14.2891C23.5752 14.2891 23.8867 14.6006 23.8867 14.9784V15.0193C23.8867 15.3971 23.5752 15.7086 23.1974 15.7086Z" fill="#41464F" stroke="#41464F" stroke-width="0.3"/>
</svg>
`,Zo=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.570362 5.55844L3.13238 7.36772C3.40259 7.55765 3.77288 7.52766 4.00306 7.29775L7.68596 3.61921C7.87611 3.42928 8.19636 3.42928 8.38651 3.61921C8.57666 3.80913 8.57666 4.12901 8.38651 4.31893L4.70362 7.99748C4.47343 8.22738 4.4334 8.59724 4.63356 8.86713L6.44499 11.4261C7.08549 12.3358 8.48659 12.1258 8.83687 11.0663L11.9293 1.78993C12.2796 0.730354 11.2688 -0.279246 10.2079 0.0706154L0.930646 3.16939C-0.130189 3.51925 -0.330346 4.91869 0.570362 5.55844Z" fill="white"/>
</svg>
`,Br=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M12.1133 8.06641H17.8545C17.8597 8.06706 17.8856 8.07208 17.9355 8.10742C17.9978 8.15153 18.0689 8.22385 18.1426 8.31934C18.2907 8.51132 18.3903 8.72221 18.4072 8.75977L18.4121 8.77051L18.418 8.78125L18.8398 9.62207L18.8438 9.62793L18.8623 9.66406L19.0205 9.96973H22.6367C22.9218 9.96973 23.1504 10.2008 23.1504 10.4775V22.3994C23.1504 22.6766 22.9217 22.9082 22.6367 22.9082H7.33008C7.04513 22.9082 6.81641 22.6766 6.81641 22.3994V10.4775C6.81643 10.2008 7.04503 9.96973 7.33008 9.96973H10.9473L11.1055 9.66406L11.124 9.62793L11.127 9.62207L11.5547 8.77148L11.5615 8.75977L11.5674 8.74707C11.5674 8.74704 11.5911 8.69352 11.6348 8.61426C11.6796 8.53289 11.7413 8.43153 11.8145 8.33496C11.8895 8.23589 11.9636 8.15914 12.0293 8.11133C12.0945 8.0639 12.1201 8.06641 12.1133 8.06641Z" stroke="#020814" stroke-width="1.13337"/>
<circle cx="14.9998" cy="16.2162" r="2.45563" stroke="#020814" stroke-width="1.13337"/>
</svg>
`,Vr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M9.58301 8.05371H20.417C21.6274 8.05388 22.5711 8.99756 22.5713 10.208V21.042C22.5711 22.2524 21.6274 23.1961 20.417 23.1963H9.58301C8.37256 23.1961 7.42888 22.2524 7.42871 21.042V10.208C7.42888 8.99756 8.37256 8.05388 9.58301 8.05371Z" stroke="#020814" stroke-width="1.10795"/>
<path d="M12.7051 11.8972C12.9571 11.8973 13.2066 11.9473 13.4395 12.0437C13.6724 12.1402 13.8842 12.2815 14.0625 12.4597C14.1964 12.5936 14.3095 12.7465 14.3984 12.9128L14.4795 13.0828L14.543 13.2605C14.5977 13.4408 14.625 13.629 14.625 13.8181C14.625 14.0701 14.5759 14.3197 14.4795 14.5525C14.383 14.7855 14.2408 14.9972 14.0625 15.1755C13.8842 15.3539 13.6725 15.496 13.4395 15.5925C13.2066 15.6889 12.957 15.738 12.7051 15.738C12.4529 15.738 12.2027 15.689 11.9697 15.5925C11.7367 15.496 11.525 15.3539 11.3467 15.1755C11.1685 14.9973 11.0271 14.7854 10.9307 14.5525C10.8342 14.3196 10.7842 14.0702 10.7842 13.8181C10.7842 13.5659 10.8342 13.3158 10.9307 13.0828C11.0272 12.8498 11.1684 12.638 11.3467 12.4597C11.525 12.2814 11.7368 12.1402 11.9697 12.0437C12.2027 11.9472 12.4529 11.8972 12.7051 11.8972Z" stroke="#020814" stroke-width="0.886364"/>
<path d="M11.3822 21.3889C11.2421 21.6411 10.9325 21.7446 10.6688 21.6274L10.6472 21.6178C10.3779 21.4981 10.2567 21.1829 10.3763 20.9136C11.5138 18.2595 13.3555 16.9053 15.793 16.7428C17.8513 16.6345 19.368 16.0386 20.2888 14.9553L20.3157 14.9246C20.5105 14.7019 20.8487 14.6786 21.0723 14.8724C21.2974 15.0675 21.321 15.4084 21.1248 15.6326L21.1013 15.6595C19.9638 16.9595 18.1763 17.7178 15.8472 17.8261C13.843 17.9345 12.3805 19.072 11.4055 21.347L11.3822 21.3889Z" fill="#020814"/>
</svg>
`,zr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M14.8302 22.7855C19.2238 22.7855 22.7855 19.2238 22.7855 14.8302C22.7855 10.4367 19.2238 6.875 14.8302 6.875C10.4367 6.875 6.875 10.4367 6.875 14.8302C6.875 19.2238 10.4367 22.7855 14.8302 22.7855Z" stroke="#020814" stroke-width="0.993306" stroke-linejoin="round"/>
<path d="M11.5365 13.3759C11.5365 13.8597 11.9287 14.2518 12.4124 14.2518C12.8962 14.2518 13.2884 13.8597 13.2884 13.3759C13.2884 12.8922 12.8962 12.5 12.4124 12.5C11.9287 12.5 11.5365 12.8922 11.5365 13.3759ZM16.7918 13.3759C16.7918 13.8597 17.184 14.2518 17.6677 14.2518C18.1515 14.2518 18.5437 13.8597 18.5437 13.3759C18.5437 12.8922 18.1515 12.5 17.6677 12.5C17.184 12.5 16.7918 12.8922 16.7918 13.3759ZM15.0399 19.0689C13.8139 19.0689 12.5876 18.4551 11.8869 17.4923C11.6235 17.1419 11.4496 16.7046 11.2731 16.3543C11.1862 16.0909 11.36 15.8288 11.5366 15.7405C11.8 15.6536 11.9739 15.8274 12.0621 16.0039C12.1491 16.3542 12.3256 16.6178 12.4994 16.8799C13.2002 17.7558 14.0761 18.1945 15.0386 18.1945C16.0014 18.1945 16.9657 17.7572 17.4912 16.9682C17.6664 16.7047 17.8416 16.3557 17.9285 16.0922C18.0168 15.8288 18.2789 15.7419 18.454 15.8288C18.7174 15.9157 18.8044 16.1791 18.7174 16.3543C18.6293 16.7916 18.3672 17.1419 18.1036 17.4923C17.4924 18.4564 16.2663 19.0689 15.0399 19.0689Z" fill="#020814" stroke="#020814" stroke-width="0.1875"/>
</svg>
`,Wo=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#D0DDFF"/>
<path d="M14.8302 22.7855C19.2238 22.7855 22.7855 19.2238 22.7855 14.8302C22.7855 10.4367 19.2238 6.875 14.8302 6.875C10.4367 6.875 6.875 10.4367 6.875 14.8302C6.875 19.2238 10.4367 22.7855 14.8302 22.7855Z" stroke="#0047FF" stroke-width="0.993306" stroke-linejoin="round"/>
<path d="M11.5365 13.3759C11.5365 13.8597 11.9287 14.2518 12.4124 14.2518C12.8962 14.2518 13.2884 13.8597 13.2884 13.3759C13.2884 12.8922 12.8962 12.5 12.4124 12.5C11.9287 12.5 11.5365 12.8922 11.5365 13.3759ZM16.7918 13.3759C16.7918 13.8597 17.184 14.2518 17.6677 14.2518C18.1515 14.2518 18.5437 13.8597 18.5437 13.3759C18.5437 12.8922 18.1515 12.5 17.6677 12.5C17.184 12.5 16.7918 12.8922 16.7918 13.3759ZM15.0399 19.0689C13.8139 19.0689 12.5876 18.4551 11.8869 17.4923C11.6235 17.1419 11.4496 16.7046 11.2731 16.3543C11.1862 16.0909 11.36 15.8288 11.5366 15.7405C11.8 15.6536 11.9739 15.8274 12.0621 16.0039C12.1491 16.3542 12.3256 16.6178 12.4994 16.8799C13.2002 17.7558 14.0761 18.1945 15.0386 18.1945C16.0014 18.1945 16.9657 17.7572 17.4912 16.9682C17.6664 16.7047 17.8416 16.3557 17.9285 16.0922C18.0168 15.8288 18.2789 15.7419 18.454 15.8288C18.7174 15.9157 18.8044 16.1791 18.7174 16.3543C18.6293 16.7916 18.3672 17.1419 18.1036 17.4923C17.4924 18.4564 16.2663 19.0689 15.0399 19.0689Z" fill="#0047FF" stroke="#0047FF" stroke-width="0.1875"/>
</svg>
`,Ko=`<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9775 22.1738C11.1802 22.1738 10.5365 21.5302 10.5365 20.7328V12.567H2.37071C1.57334 12.567 0.929688 11.9233 0.929688 11.126C0.929688 10.3286 1.57334 9.68495 2.37071 9.68495H10.5365V1.51915C10.5365 0.721782 11.1802 0.078125 11.9775 0.078125C12.7749 0.078125 13.4186 0.721782 13.4186 1.51915V9.68495H21.5844C22.3817 9.68495 23.0254 10.3286 23.0254 11.126C23.0254 11.9233 22.3817 12.567 21.5844 12.567H13.4186V20.7328C13.4186 21.5302 12.7749 22.1738 11.9775 22.1738Z" fill="#0099FF"/>
</svg>
`,jr=`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="8" fill="#F3F5FA"/>
<path d="M10.5645 6.8125H19.4355C19.764 6.81251 20.0891 6.87729 20.3926 7.00293C20.6961 7.12867 20.9727 7.31259 21.2051 7.54492C21.4374 7.77726 21.6213 8.05386 21.7471 8.35742C21.8727 8.66086 21.9375 8.98603 21.9375 9.31445V19.8545C21.9375 20.1831 21.8728 20.5089 21.7471 20.8125C21.6214 21.1159 21.4373 21.3918 21.2051 21.624C20.9727 21.8564 20.6961 22.0403 20.3926 22.166C20.0891 22.2917 19.764 22.3564 19.4355 22.3564H10.5645C10.236 22.3564 9.9109 22.2917 9.60742 22.166C9.30386 22.0403 9.02726 21.8564 8.79492 21.624C8.56272 21.3918 8.37863 21.1159 8.25293 20.8125C8.12719 20.5089 8.0625 20.1831 8.0625 19.8545V9.31445C8.06251 8.98603 8.12729 8.66086 8.25293 8.35742C8.37867 8.05386 8.56259 7.77726 8.79492 7.54492C9.02726 7.31259 9.30386 7.12867 9.60742 7.00293C9.91086 6.87729 10.236 6.81251 10.5645 6.8125Z" stroke="#020814" stroke-width="1.125"/>
<path d="M11.3707 12.7823H15.403C15.5741 12.7823 15.7382 12.7143 15.8592 12.5933C15.9802 12.4723 16.0482 12.3082 16.0482 12.1371C16.0482 11.966 15.9802 11.8019 15.8592 11.6809C15.7382 11.5599 15.5741 11.4919 15.403 11.4919H11.3707C11.1996 11.4919 11.0355 11.5599 10.9145 11.6809C10.7936 11.8019 10.7256 11.966 10.7256 12.1371C10.7256 12.3082 10.7936 12.4723 10.9145 12.5933C11.0355 12.7143 11.1996 12.7823 11.3707 12.7823Z" fill="#020814"/>
<path d="M11.3709 16.0079H18.6289C18.7137 16.0079 18.7976 15.9912 18.8758 15.9588C18.9541 15.9264 19.0253 15.8788 19.0852 15.8189C19.1451 15.759 19.1926 15.6879 19.2251 15.6096C19.2575 15.5313 19.2742 15.4474 19.2742 15.3627C19.2742 15.278 19.2575 15.1941 19.2251 15.1158C19.1926 15.0375 19.1451 14.9664 19.0852 14.9065C19.0253 14.8465 18.9541 14.799 18.8758 14.7666C18.7976 14.7342 18.7137 14.7175 18.6289 14.7175H11.3709C11.2861 14.7175 11.2022 14.7342 11.1239 14.7666C11.0456 14.799 10.9745 14.8465 10.9146 14.9065C10.8547 14.9664 10.8071 15.0375 10.7747 15.1158C10.7423 15.1941 10.7256 15.278 10.7256 15.3627C10.7256 15.4474 10.7423 15.5313 10.7747 15.6096C10.8071 15.6879 10.8547 15.759 10.9146 15.8189C10.9745 15.8788 11.0456 15.9264 11.1239 15.9588C11.2022 15.9912 11.2861 16.0079 11.3709 16.0079Z" fill="#020814"/>
</svg>
`,qr=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.569914 5.56064L3.12991 7.37064C3.39991 7.56064 3.76991 7.53064 3.99991 7.30064L7.67991 3.62064C7.86991 3.43064 8.18991 3.43064 8.37991 3.62064C8.56991 3.81064 8.56991 4.13064 8.37991 4.32064L4.69991 8.00064C4.46991 8.23064 4.42991 8.60064 4.62991 8.87064L6.43991 11.4306C7.07991 12.3406 8.47991 12.1306 8.82991 11.0706L11.9199 1.79064C12.2699 0.730643 11.2599 -0.279357 10.1999 0.0706434L0.929914 3.17064C-0.130086 3.52064 -0.330086 4.92064 0.569914 5.56064Z" fill="#CCCCCC"/>
</svg>
`,Yo=`<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7722 18.572L11.7707 18.572C11.7637 18.572 11.7565 18.5721 11.7492 18.5722C11.7431 18.5722 11.7369 18.5723 11.7305 18.5724L11.7209 18.5725C11.7099 18.5726 11.6985 18.5727 11.687 18.5727C9.54072 18.5727 8.01707 17.6033 7.02388 16.6169C6.03227 15.6321 5.56502 14.6267 5.52498 14.5378C5.33961 14.127 5.52182 13.6447 5.93196 13.4591L5.93224 13.459C6.34282 13.2745 6.82354 13.4557 7.0099 13.8635L7.00993 13.8636C7.03616 13.9211 7.40015 14.6941 8.163 15.4512C8.92441 16.2068 10.078 16.9419 11.6898 16.9419C11.6994 16.9419 11.7092 16.9417 11.7201 16.9416L11.7205 16.9416L11.7722 18.572ZM11.7722 18.572C16.2412 18.5194 17.9935 14.7027 18.0683 14.5343C18.2522 14.1225 18.0666 13.6406 17.6557 13.4575C17.2421 13.2722 16.762 13.4593 16.5795 13.8695C16.5508 13.9319 15.1674 16.9009 11.7538 16.9412L11.7722 18.572ZM0.656307 11.5242C0.656307 17.6828 5.64829 22.6747 11.8069 22.6747C17.9651 22.6747 22.9571 17.6828 22.9571 11.5242C22.9571 5.36557 17.9651 0.373592 11.8069 0.373592C5.64829 0.373592 0.656307 5.36557 0.656307 11.5242ZM2.28714 11.5242C2.28714 6.27482 6.55754 2.00443 11.8069 2.00443C17.0559 2.00443 21.3263 6.27482 21.3263 11.5242C21.3263 16.7732 17.0559 21.0439 11.8069 21.0439C6.55754 21.0439 2.28714 16.7732 2.28714 11.5242ZM13.7399 9.45679C13.7399 10.2855 14.4114 10.9581 15.2409 10.9581C16.0701 10.9581 16.7419 10.2855 16.7419 9.45679C16.7419 8.6287 16.07 7.9565 15.2409 7.9565C14.4115 7.9565 13.7399 8.62873 13.7399 9.45679ZM6.84982 9.45679C6.84982 10.2855 7.52128 10.9581 8.35081 10.9581C9.17997 10.9581 9.85179 10.2855 9.85179 9.45679C9.85179 8.6287 9.17989 7.9565 8.35081 7.9565C7.52136 7.9565 6.84982 8.62873 6.84982 9.45679Z" fill="#A1AABF" stroke="#A1AABF" stroke-width="0.252815"/>
</svg>
`,Qo=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8822 2.33447C10.8903 2.33447 10.8969 2.33587 10.9007 2.3374C10.904 2.33875 10.9079 2.34173 10.9134 2.34717H10.9144L15.6917 7.11865C15.7087 7.13617 15.7067 7.1594 15.6927 7.17334L15.6898 7.17627L12.5667 10.2944L12.3616 10.4985L12.3939 10.7856C12.5613 12.28 12.1495 13.8247 11.1615 15.0562C11.1559 15.0631 11.1511 15.0669 11.1468 15.0688C11.1419 15.0711 11.1352 15.0727 11.1273 15.0728C11.1195 15.0728 11.1135 15.0713 11.1097 15.0698L11.096 15.0601L7.57259 11.5425L7.14876 11.1196L6.72493 11.5425L2.62141 15.6392L2.35286 15.6636L2.37727 15.397L6.47981 11.3022L6.90462 10.8774L6.47981 10.4526L2.95735 6.93506H2.95638C2.94819 6.92654 2.94391 6.91545 2.94466 6.90186C2.94549 6.88815 2.95157 6.87968 2.9593 6.87354L2.96126 6.87158C4.01592 6.02707 5.30258 5.604 6.59016 5.604C6.80849 5.60401 7.02375 5.6154 7.23763 5.63916L7.52376 5.67139L7.72786 5.46729L10.8509 2.34717L10.8548 2.34424C10.8576 2.3414 10.8602 2.33976 10.8636 2.33838C10.8676 2.33677 10.874 2.33453 10.8822 2.33447Z" stroke="#41464F" stroke-width="1.2"/>
</svg>
`,Xo=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33852 10.6891L3.12099 7.4764C2.87373 7.22914 2.89621 6.81972 3.16915 6.60297C3.68867 6.18689 4.26364 5.87253 4.86681 5.65971C5.49953 5.43647 6.16328 5.32495 6.8266 5.32495C7.04496 5.32495 7.26171 5.33619 7.47846 5.36028L10.3315 2.51042C10.4455 2.39482 10.5964 2.33862 10.7474 2.33862C10.8983 2.33862 11.0476 2.39482 11.1632 2.51042L15.5271 6.86789C15.7567 7.09748 15.7567 7.46837 15.5255 7.69636L12.6724 10.5446M7.33717 11.6846L10.5547 14.8973C10.6703 15.0129 10.8196 15.0691 10.9705 15.0691" stroke="#41464F" stroke-width="1.125"/>
<path d="M14.9394 12.0909L13.6821 13.3482L12.4249 12.091C12.3326 11.9988 12.1833 11.9987 12.091 12.091C11.9991 12.1829 11.999 12.3325 12.0912 12.4247L13.3483 13.682L12.0911 14.9392C11.999 15.0313 11.999 15.181 12.0911 15.2731C12.1833 15.3653 12.3328 15.3652 12.4249 15.2731L13.6821 14.0159L14.9393 15.2732C15.0314 15.3653 15.1812 15.3651 15.2732 15.2732C15.3655 15.1809 15.3653 15.0314 15.2732 14.9393L14.0159 13.6821L15.2731 12.425C15.3654 12.3327 15.3653 12.1833 15.2731 12.0911C15.1808 11.9989 15.0315 11.9988 14.9394 12.0909Z" fill="#41464F" stroke="#41464F" stroke-width="0.75"/>
<path d="M6.97821 11.3252L2.28485 16.0186L1.95868 16.0479L1.98798 15.7227L6.71356 11.0625L6.97821 11.3252Z" stroke="#41464F" stroke-width="1.125"/>
</svg>
`,Jo=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0637 12.9112L13.9949 10.77C13.9165 10.6141 13.8754 10.442 13.8749 10.2675V7.38749C13.8838 6.16141 13.4411 4.97495 12.6312 4.0544C11.8213 3.13384 10.7009 2.5436 9.48369 2.39624H9.37494V1.64624C9.37494 1.54678 9.33543 1.4514 9.2651 1.38108C9.19478 1.31075 9.09939 1.27124 8.99994 1.27124C8.90048 1.27124 8.8051 1.31075 8.73477 1.38108C8.66445 1.4514 8.62494 1.54678 8.62494 1.64624V2.39624C7.40194 2.49059 6.25947 3.04252 5.4254 3.94193C4.59133 4.84134 4.12696 6.02211 4.12494 7.24874V10.2675C4.12446 10.442 4.08338 10.6141 4.00494 10.77L2.93619 12.9112C2.87851 13.0257 2.85113 13.153 2.85665 13.2811C2.86218 13.4091 2.90042 13.5336 2.96774 13.6427C3.03506 13.7517 3.12921 13.8417 3.24119 13.9041C3.35318 13.9664 3.47927 13.999 3.60744 13.9987H14.3924C14.5206 13.999 14.6467 13.9664 14.7587 13.9041C14.8707 13.8417 14.9648 13.7517 15.0321 13.6427C15.0994 13.5336 15.1377 13.4091 15.1432 13.2811C15.1487 13.153 15.1214 13.0257 15.0637 12.9112ZM3.60744 13.2487L4.67619 11.1075C4.80686 10.8468 4.87492 10.5591 4.87494 10.2675V7.26749C4.87577 6.69124 4.99734 6.12156 5.2318 5.59516C5.46625 5.06876 5.8084 4.59733 6.23619 4.21124C6.98769 3.51376 7.97464 3.12541 8.99994 3.12374C9.13892 3.12267 9.27786 3.12893 9.41619 3.14249C10.4474 3.27213 11.395 3.77621 12.0788 4.55888C12.7626 5.34155 13.1349 6.34823 13.1249 7.38749V10.2675C13.125 10.5591 13.193 10.8468 13.3237 11.1075L14.3924 13.2487H3.60744Z" fill="#41464F" stroke="#41464F" stroke-width="0.5"/>
<path d="M9.13013 15.9997C8.39213 15.9997 7.79588 15.4125 7.79588 14.688H6.90601C6.90601 15.8962 7.90163 16.875 9.13013 16.875C10.3586 16.875 11.3543 15.8962 11.3543 14.688H10.4644C10.4644 15.4125 9.86701 15.9997 9.13013 15.9997Z" fill="#41464F" stroke="#41464F" stroke-width="0.385714"/>
</svg>
`,el=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.7959 14.688C7.7959 15.4125 8.39215 15.9998 9.13015 15.9998C9.86702 15.9998 10.4644 15.4125 10.4644 14.688H11.3543C11.3543 15.8962 10.3586 16.875 9.13015 16.875C7.90165 16.875 6.90602 15.8962 6.90602 14.688H7.7959ZM13.5446 4.887C13.8653 5.562 14.0329 6.2955 14.0329 7.04025V10.3219C14.0329 10.4006 14.0554 10.4794 14.0959 10.5491L15.3413 12.5696C15.4194 12.7033 15.4608 12.8552 15.4613 13.0099C15.4618 13.1647 15.4214 13.3169 15.3442 13.451C15.267 13.5852 15.1558 13.6966 15.0217 13.7739C14.8877 13.8513 14.7355 13.8918 14.5808 13.8915H4.38265L5.27252 13.0162H14.5808L13.3343 10.9913C13.206 10.7883 13.1381 10.553 13.1385 10.3129V7.03912C13.1385 6.53287 13.0474 6.03113 12.8685 5.55638L13.5446 4.887ZM13.3275 2.51888C13.4199 2.42653 13.5451 2.37465 13.6757 2.37465C13.8063 2.37465 13.9316 2.42653 14.0239 2.51888C14.1162 2.61122 14.1681 2.73647 14.1681 2.86706C14.1681 2.99766 14.1162 3.1229 14.0239 3.21525L3.5839 13.6552C3.53825 13.701 3.48402 13.7374 3.42432 13.7622C3.36462 13.7871 3.30061 13.7999 3.23594 13.8C3.17128 13.8001 3.10723 13.7875 3.04745 13.7629C2.98766 13.7382 2.93332 13.702 2.88752 13.6564C2.84173 13.6107 2.80537 13.5565 2.78052 13.4968C2.75568 13.4371 2.74284 13.3731 2.74274 13.3084C2.74263 13.2438 2.75527 13.1797 2.77992 13.1199C2.80457 13.0601 2.84075 13.0058 2.8864 12.96L13.3275 2.51888ZM9.08965 1.125C9.20777 1.125 9.3214 1.17112 9.40465 1.25325C9.44585 1.29357 9.4786 1.3417 9.50101 1.39481C9.52342 1.44793 9.53502 1.50498 9.53515 1.56263V2.088C10.3485 2.15325 11.1326 2.4255 11.8076 2.8755L11.1776 3.5055C10.6378 3.17871 10.0267 2.98799 9.39677 2.94975H9.12677C6.9139 2.94975 5.12177 4.71263 5.12177 6.88725L5.13527 9.441L4.2454 10.3174V6.86925C4.25028 6.21059 4.39062 5.55997 4.65771 4.95787C4.92479 4.35577 5.3129 3.81506 5.7979 3.36937C6.58232 2.64575 7.58188 2.19851 8.64415 2.09588V1.56375C8.64415 1.44787 8.69252 1.3365 8.77577 1.25438C8.85943 1.17182 8.97212 1.12537 9.08965 1.125Z" fill="#41464F" stroke="#41464F" stroke-width="0.385714"/>
</svg>
`,tl=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1998 14.1491C13.1998 14.3924 13.1032 14.6256 12.9312 14.7976C12.7592 14.9696 12.5259 15.0662 12.2827 15.0662H5.68249C5.43946 15.0656 5.20657 14.9688 5.03472 14.7969C4.86287 14.6251 4.76604 14.3922 4.76538 14.1491V4.42424H13.1998V14.1491ZM6.5971 2.78045C6.59676 2.75568 6.60139 2.73109 6.61071 2.70813C6.62004 2.68518 6.63387 2.66433 6.65139 2.64681C6.66891 2.62929 6.68976 2.61546 6.71271 2.60614C6.73567 2.59681 6.76026 2.59218 6.78503 2.59252H11.1902C11.2149 2.59218 11.2395 2.59681 11.2625 2.60614C11.2854 2.61546 11.3063 2.62929 11.3238 2.64681C11.3413 2.66433 11.3552 2.68518 11.3645 2.70813C11.3738 2.73109 11.3784 2.75568 11.3781 2.78045V3.3217H6.5971V2.78045ZM15.9486 3.3217H12.4706V2.78045C12.4706 2.44085 12.3357 2.11517 12.0956 1.87503C11.8555 1.6349 11.5298 1.5 11.1902 1.5H6.78503C6.44584 1.50132 6.12092 1.63665 5.88107 1.87649C5.64123 2.11634 5.5059 2.44126 5.50458 2.78045V3.3217H2.01655C1.87644 3.33114 1.74515 3.39345 1.64925 3.49603C1.55335 3.59861 1.5 3.73379 1.5 3.87422C1.5 4.01464 1.55335 4.14983 1.64925 4.25241C1.74515 4.35498 1.87644 4.4173 2.01655 4.42674H3.66284V14.1491C3.66284 14.4144 3.71508 14.677 3.81657 14.922C3.91807 15.1671 4.06684 15.3897 4.25438 15.5772C4.44192 15.7648 4.66457 15.9136 4.9096 16.015C5.15464 16.1165 5.41726 16.1688 5.68249 16.1688H12.2827C12.5479 16.1688 12.8105 16.1165 13.0556 16.015C13.3006 15.9136 13.5233 15.7648 13.7108 15.5772C13.8983 15.3897 14.0471 15.1671 14.1486 14.922C14.2501 14.677 14.3023 14.4144 14.3023 14.1491V4.42424H15.9486C16.0948 4.42424 16.2351 4.36616 16.3384 4.26277C16.4418 4.15939 16.4999 4.01917 16.4999 3.87297C16.5013 3.8002 16.4879 3.7279 16.4607 3.6604C16.4335 3.59291 16.3929 3.53159 16.3415 3.48013C16.29 3.42867 16.2287 3.38811 16.1612 3.36089C16.0937 3.33366 16.0214 3.32034 15.9486 3.3217ZM8.98259 13.4099C9.0552 13.4099 9.12709 13.3956 9.19413 13.3677C9.26118 13.3399 9.32206 13.299 9.37329 13.2476C9.42451 13.1961 9.46506 13.1351 9.49262 13.0679C9.52017 13.0007 9.53419 12.9288 9.53386 12.8562V6.98513C9.53386 6.83893 9.47578 6.69871 9.3724 6.59533C9.26901 6.49194 9.1288 6.43386 8.98259 6.43386C8.83638 6.43386 8.69617 6.49194 8.59278 6.59533C8.4894 6.69871 8.43132 6.83893 8.43132 6.98513V12.8562C8.43099 12.9288 8.44501 13.0007 8.47256 13.0679C8.50012 13.1351 8.54067 13.1961 8.5919 13.2476C8.64312 13.299 8.704 13.3399 8.77105 13.3677C8.8381 13.3956 8.90999 13.4099 8.98259 13.4099ZM6.40916 13.4099C6.55603 13.4099 6.69689 13.3516 6.80074 13.2477C6.90459 13.1439 6.96294 13.003 6.96294 12.8562V6.98513C6.96804 6.90945 6.95753 6.83352 6.93208 6.76206C6.90662 6.6906 6.86675 6.62513 6.81494 6.56972C6.76314 6.5143 6.7005 6.47012 6.63091 6.43992C6.56133 6.40971 6.48628 6.39413 6.41042 6.39413C6.33456 6.39413 6.25951 6.40971 6.18992 6.43992C6.12033 6.47012 6.05769 6.5143 6.00589 6.56972C5.95408 6.62513 5.91421 6.6906 5.88876 6.76206C5.8633 6.83352 5.85279 6.90945 5.85789 6.98513V12.8562C5.86167 13.0014 5.92088 13.1397 6.02339 13.2427C6.1259 13.3457 6.26393 13.4055 6.40916 13.4099ZM11.556 13.4099C11.7025 13.4093 11.8427 13.3506 11.946 13.2469C12.0493 13.1431 12.1073 13.0026 12.1073 12.8562V6.98513C12.1124 6.90945 12.1019 6.83352 12.0764 6.76206C12.051 6.6906 12.0111 6.62513 11.9593 6.56972C11.9075 6.5143 11.8448 6.47012 11.7753 6.43992C11.7057 6.40971 11.6306 6.39413 11.5548 6.39413C11.4789 6.39413 11.4039 6.40971 11.3343 6.43992C11.2647 6.47012 11.202 6.5143 11.1502 6.56972C11.0984 6.62513 11.0586 6.6906 11.0331 6.76206C11.0076 6.83352 10.9971 6.90945 11.0022 6.98513V12.8562C11.0022 13.003 11.0606 13.1439 11.1644 13.2477C11.2683 13.3516 11.4091 13.4099 11.556 13.4099Z" fill="#41464F"/>
</svg>
`,Zr=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1998 14.1491C13.1998 14.3924 13.1032 14.6256 12.9312 14.7976C12.7592 14.9696 12.5259 15.0662 12.2827 15.0662H5.68249C5.43946 15.0656 5.20657 14.9688 5.03472 14.7969C4.86287 14.6251 4.76604 14.3922 4.76538 14.1491V4.42424H13.1998V14.1491ZM6.5971 2.78045C6.59676 2.75568 6.60139 2.73109 6.61071 2.70813C6.62004 2.68518 6.63387 2.66433 6.65139 2.64681C6.66891 2.62929 6.68976 2.61546 6.71271 2.60614C6.73567 2.59681 6.76026 2.59218 6.78503 2.59252H11.1902C11.2149 2.59218 11.2395 2.59681 11.2625 2.60614C11.2854 2.61546 11.3063 2.62929 11.3238 2.64681C11.3413 2.66433 11.3552 2.68518 11.3645 2.70813C11.3738 2.73109 11.3784 2.75568 11.3781 2.78045V3.3217H6.5971V2.78045ZM15.9486 3.3217H12.4706V2.78045C12.4706 2.44085 12.3357 2.11517 12.0956 1.87503C11.8555 1.6349 11.5298 1.5 11.1902 1.5H6.78503C6.44584 1.50132 6.12092 1.63665 5.88107 1.87649C5.64123 2.11634 5.5059 2.44126 5.50458 2.78045V3.3217H2.01655C1.87644 3.33114 1.74515 3.39345 1.64925 3.49603C1.55335 3.59861 1.5 3.73379 1.5 3.87422C1.5 4.01464 1.55335 4.14983 1.64925 4.25241C1.74515 4.35498 1.87644 4.4173 2.01655 4.42674H3.66284V14.1491C3.66284 14.4144 3.71508 14.677 3.81657 14.922C3.91807 15.1671 4.06684 15.3897 4.25438 15.5772C4.44192 15.7648 4.66457 15.9136 4.9096 16.015C5.15464 16.1165 5.41726 16.1688 5.68249 16.1688H12.2827C12.5479 16.1688 12.8105 16.1165 13.0556 16.015C13.3006 15.9136 13.5233 15.7648 13.7108 15.5772C13.8983 15.3897 14.0471 15.1671 14.1486 14.922C14.2501 14.677 14.3023 14.4144 14.3023 14.1491V4.42424H15.9486C16.0948 4.42424 16.2351 4.36616 16.3384 4.26277C16.4418 4.15939 16.4999 4.01917 16.4999 3.87297C16.5013 3.8002 16.4879 3.7279 16.4607 3.6604C16.4335 3.59291 16.3929 3.53159 16.3415 3.48013C16.29 3.42867 16.2287 3.38811 16.1612 3.36089C16.0937 3.33366 16.0214 3.32034 15.9486 3.3217ZM8.98259 13.4099C9.0552 13.4099 9.12709 13.3956 9.19413 13.3677C9.26118 13.3399 9.32206 13.299 9.37329 13.2476C9.42451 13.1961 9.46506 13.1351 9.49262 13.0679C9.52017 13.0007 9.53419 12.9288 9.53386 12.8562V6.98513C9.53386 6.83893 9.47578 6.69871 9.3724 6.59533C9.26901 6.49194 9.1288 6.43386 8.98259 6.43386C8.83638 6.43386 8.69617 6.49194 8.59278 6.59533C8.4894 6.69871 8.43132 6.83893 8.43132 6.98513V12.8562C8.43099 12.9288 8.44501 13.0007 8.47256 13.0679C8.50012 13.1351 8.54067 13.1961 8.5919 13.2476C8.64312 13.299 8.704 13.3399 8.77105 13.3677C8.8381 13.3956 8.90999 13.4099 8.98259 13.4099ZM6.40916 13.4099C6.55603 13.4099 6.69689 13.3516 6.80074 13.2477C6.90459 13.1439 6.96294 13.003 6.96294 12.8562V6.98513C6.96804 6.90945 6.95753 6.83352 6.93208 6.76206C6.90662 6.6906 6.86675 6.62513 6.81494 6.56972C6.76314 6.5143 6.7005 6.47012 6.63091 6.43992C6.56133 6.40971 6.48628 6.39413 6.41042 6.39413C6.33456 6.39413 6.25951 6.40971 6.18992 6.43992C6.12033 6.47012 6.05769 6.5143 6.00589 6.56972C5.95408 6.62513 5.91421 6.6906 5.88876 6.76206C5.8633 6.83352 5.85279 6.90945 5.85789 6.98513V12.8562C5.86167 13.0014 5.92088 13.1397 6.02339 13.2427C6.1259 13.3457 6.26393 13.4055 6.40916 13.4099ZM11.556 13.4099C11.7025 13.4093 11.8427 13.3506 11.946 13.2469C12.0493 13.1431 12.1073 13.0026 12.1073 12.8562V6.98513C12.1124 6.90945 12.1019 6.83352 12.0764 6.76206C12.051 6.6906 12.0111 6.62513 11.9593 6.56972C11.9075 6.5143 11.8448 6.47012 11.7753 6.43992C11.7057 6.40971 11.6306 6.39413 11.5548 6.39413C11.4789 6.39413 11.4039 6.40971 11.3343 6.43992C11.2647 6.47012 11.202 6.5143 11.1502 6.56972C11.0984 6.62513 11.0586 6.6906 11.0331 6.76206C11.0076 6.83352 10.9971 6.90945 11.0022 6.98513V12.8562C11.0022 13.003 11.0606 13.1439 11.1644 13.2477C11.2683 13.3516 11.4091 13.4099 11.556 13.4099Z" fill="#41464F"/>
</svg>
`,sl=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.82895 1.5H15.1184C15.4848 1.5 15.8362 1.64556 16.0953 1.90466C16.3544 2.16375 16.5 2.51516 16.5 2.88158V11.1711C16.5 11.5375 16.3544 11.8889 16.0953 12.148C15.8362 12.4071 15.4848 12.5526 15.1184 12.5526H6.82895C6.46253 12.5526 6.11112 12.4071 5.85202 12.148C5.59293 11.8889 5.44737 11.5375 5.44737 11.1711V2.88158C5.44737 2.51516 5.59293 2.16375 5.85202 1.90466C6.11112 1.64556 6.46253 1.5 6.82895 1.5ZM6.82895 2.68421C6.7766 2.68421 6.7264 2.705 6.68939 2.74202C6.65237 2.77903 6.63158 2.82923 6.63158 2.88158V11.1711C6.63158 11.197 6.63668 11.2226 6.6466 11.2466C6.65652 11.2705 6.67106 11.2923 6.68939 11.3106C6.70771 11.3289 6.72947 11.3435 6.75342 11.3534C6.77736 11.3633 6.80303 11.3684 6.82895 11.3684H15.1184C15.1708 11.3684 15.221 11.3476 15.258 11.3106C15.295 11.2736 15.3158 11.2234 15.3158 11.1711V2.88158C15.3158 2.82923 15.295 2.77903 15.258 2.74202C15.221 2.705 15.1708 2.68421 15.1184 2.68421H6.82895ZM11.3684 13.7368C11.3684 13.5798 11.4308 13.4292 11.5418 13.3182C11.6529 13.2071 11.8035 13.1447 11.9605 13.1447C12.1176 13.1447 12.2682 13.2071 12.3792 13.3182C12.4902 13.4292 12.5526 13.5798 12.5526 13.7368V15.1184C12.5526 15.4848 12.4071 15.8362 12.148 16.0953C11.8889 16.3544 11.5375 16.5 11.1711 16.5H2.88158C2.51516 16.5 2.16375 16.3544 1.90466 16.0953C1.64556 15.8362 1.5 15.4848 1.5 15.1184V6.82895C1.5 6.46253 1.64556 6.11112 1.90466 5.85202C2.16375 5.59293 2.51516 5.44737 2.88158 5.44737H4.26316C4.42019 5.44737 4.5708 5.50975 4.68184 5.62079C4.79288 5.73183 4.85526 5.88244 4.85526 6.03947C4.85526 6.19651 4.79288 6.34711 4.68184 6.45816C4.5708 6.5692 4.42019 6.63158 4.26316 6.63158H2.88158C2.82923 6.63158 2.77903 6.65237 2.74202 6.68939C2.705 6.7264 2.68421 6.7766 2.68421 6.82895V15.1184C2.68421 15.1708 2.705 15.221 2.74202 15.258C2.77903 15.295 2.82923 15.3158 2.88158 15.3158H11.1711C11.2234 15.3158 11.2736 15.295 11.3106 15.258C11.3476 15.221 11.3684 15.1708 11.3684 15.1184V13.7368Z" fill="#41464F"/>
</svg>
`,il=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14.4245L10.9395 12.5756C11.0432 12.4767 11.181 12.4215 11.3244 12.4215H15.3843V4.1157H2.6157V12.4215H6.67562C6.81895 12.4215 6.95679 12.4767 7.06054 12.5756L9 14.4245ZM9.38492 15.599C9.16943 15.8045 8.83057 15.8045 8.61508 15.599L6.45232 13.5372H2.05785C1.74976 13.5372 1.5 13.2874 1.5 12.9793V3.55785C1.5 3.24976 1.74976 3 2.05785 3H15.9421C16.2502 3 16.5 3.24976 16.5 3.55785V12.9793C16.5 13.2874 16.2502 13.5372 15.9421 13.5372H11.5477L9.38492 15.599ZM5.96281 9.13636C5.48355 9.13636 5.09504 8.74785 5.09504 8.26859C5.09504 7.78934 5.48355 7.40083 5.96281 7.40083C6.44207 7.40083 6.83058 7.78934 6.83058 8.26859C6.83058 8.74785 6.44207 9.13636 5.96281 9.13636ZM9 9.13636C8.52074 9.13636 8.13223 8.74785 8.13223 8.26859C8.13223 7.78934 8.52074 7.40083 9 7.40083C9.47926 7.40083 9.86777 7.78934 9.86777 8.26859C9.86777 8.74785 9.47926 9.13636 9 9.13636ZM12.0372 9.13636C11.5579 9.13636 11.1694 8.74785 11.1694 8.26859C11.1694 7.78934 11.5579 7.40083 12.0372 7.40083C12.5164 7.40083 12.905 7.78934 12.905 8.26859C12.905 8.74785 12.5164 9.13636 12.0372 9.13636Z" fill="#41464F"/>
</svg>
`,nl=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="6.25" stroke="#41464F" stroke-width="1.1"/>
<circle cx="6.75" cy="7.5" r="0.75" fill="#41464F"/>
<circle cx="11.25" cy="7.5" r="0.75" fill="#41464F"/>
<path d="M6.25 10.25C6.83333 11.4167 7.75 12 9 12C10.25 12 11.1667 11.4167 11.75 10.25" stroke="#41464F" stroke-width="1.1" stroke-linecap="round"/>
</svg>
`,rl=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.435 12.8544C15.3582 12.9824 15.2338 13.0745 15.089 13.1107C14.9443 13.1469 14.7911 13.1241 14.6632 13.0473C14.5352 12.9705 14.443 12.846 14.4069 12.7013C14.3707 12.5565 14.3935 12.4034 14.4703 12.2754C15.0642 11.2862 15.377 10.1538 15.375 9C15.375 5.47912 12.5209 2.625 9 2.625C5.47913 2.625 2.625 5.47912 2.625 9C2.625 12.5209 5.47913 15.375 9 15.375C10.1536 15.377 11.2859 15.0644 12.2751 14.4707C12.3384 14.4327 12.4086 14.4075 12.4817 14.3967C12.5547 14.3858 12.6292 14.3894 12.7009 14.4073C12.7726 14.4252 12.84 14.4571 12.8993 14.5011C12.9587 14.545 13.0088 14.6003 13.0468 14.6636C13.0848 14.727 13.11 14.7972 13.1208 14.8702C13.1317 14.9433 13.1281 15.0178 13.1102 15.0895C13.0923 15.1611 13.0604 15.2286 13.0164 15.2879C12.9725 15.3473 12.9172 15.3974 12.8539 15.4354C11.6899 16.134 10.3575 16.5021 9 16.5C4.85794 16.5 1.5 13.1421 1.5 9C1.5 4.85794 4.85794 1.5 9 1.5C13.1421 1.5 16.5 4.85794 16.5 9C16.5 10.3762 16.1282 11.6994 15.435 12.8544ZM6.58444 8.60362L8.067 10.08L11.4144 6.7275C11.5199 6.62193 11.6629 6.56256 11.8121 6.56245C11.9613 6.56235 12.1044 6.62151 12.21 6.72694C12.3156 6.83236 12.3749 6.9754 12.375 7.1246C12.3752 7.2738 12.316 7.41693 12.2106 7.5225L8.46619 11.2725C8.36087 11.378 8.21798 11.4374 8.06892 11.4376C7.91986 11.4378 7.77681 11.3788 7.67119 11.2736L5.79056 9.40069C5.73755 9.34871 5.69535 9.28675 5.66639 9.21839C5.63744 9.15003 5.62231 9.07661 5.62186 9.00237C5.62142 8.92813 5.63568 8.85453 5.66382 8.78583C5.69196 8.71713 5.73342 8.65467 5.78581 8.60207C5.8382 8.54947 5.90049 8.50776 5.96908 8.47935C6.03767 8.45093 6.1112 8.43638 6.18545 8.43652C6.25969 8.43667 6.33317 8.45151 6.40165 8.48019C6.47013 8.50887 6.53225 8.55082 6.58444 8.60362Z" fill="#41464F"/>
</svg>
`,Wr=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3146 9.39413C15.3146 9.23711 15.377 9.08652 15.4881 8.97548C15.5991 8.86445 15.7497 8.80207 15.9067 8.80207C16.0637 8.80207 16.2143 8.86445 16.3254 8.97548C16.4364 9.08652 16.4988 9.23711 16.4988 9.39413V14.3279C16.4988 15.5268 15.5268 16.4988 14.3279 16.4988H3.67087C2.47196 16.4988 1.5 15.5268 1.5 14.3279V4.26297C1.5 3.06406 2.47196 2.0921 3.67087 2.0921H8.80203C8.95905 2.0921 9.10964 2.15448 9.22068 2.26551C9.33171 2.37654 9.39408 2.52713 9.39408 2.68416C9.39408 2.84118 9.33171 2.99177 9.22068 3.1028C9.10964 3.21384 8.95905 3.27621 8.80203 3.27621H3.67087C3.40917 3.27621 3.15818 3.38018 2.97313 3.56523C2.78807 3.75028 2.68411 4.00127 2.68411 4.26297V14.3279C2.68411 14.5896 2.78807 14.8406 2.97313 15.0257C3.15818 15.2107 3.40917 15.3147 3.67087 15.3147H14.3279C14.5896 15.3147 14.8406 15.2107 15.0256 15.0257C15.2107 14.8406 15.3146 14.5896 15.3146 14.3279V9.39413ZM14.5365 4.26297L12.8752 2.49786C12.7676 2.38349 12.7098 2.23106 12.7146 2.0741C12.7193 1.91714 12.7863 1.7685 12.9006 1.66089C13.015 1.55327 13.1674 1.4955 13.3244 1.50027C13.4814 1.50505 13.63 1.57198 13.7376 1.68635L16.3379 4.44928C16.6935 4.82701 16.4255 5.44709 15.9067 5.44709H12.9348C11.4237 5.44709 10.1835 6.76461 10.1835 8.40737V11.9597C10.1835 12.1167 10.1211 12.2673 10.0101 12.3784C9.89905 12.4894 9.74846 12.5518 9.59144 12.5518C9.43441 12.5518 9.28382 12.4894 9.17279 12.3784C9.06176 12.2673 8.99938 12.1167 8.99938 11.9597V8.40737C8.99938 6.12618 10.7531 4.26297 12.9348 4.26297H14.5365Z" fill="#41464F"/>
</svg>
`,Kr=`<svg width="18" height="18" viewBox="9 9 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4598 24.9115H25.3056C25.4276 24.9115 25.5445 24.96 25.6307 25.0462C25.7169 25.1325 25.7654 25.2494 25.7654 25.3714C25.7654 25.4933 25.7169 25.6102 25.6307 25.6965C25.5445 25.7827 25.4276 25.8312 25.3056 25.8312H10.4598C10.3379 25.8312 10.221 25.7827 10.1347 25.6965C10.0485 25.6102 10.0001 25.4933 10.0001 25.3714C10.0001 25.2494 10.0485 25.1325 10.1347 25.0462C10.221 24.96 10.3379 24.9115 10.4598 24.9115ZM10.4598 18.671H16.1091C16.2311 18.671 16.348 18.7195 16.4343 18.8057C16.5205 18.8919 16.5689 19.0089 16.5689 19.1309C16.5689 19.2528 16.5205 19.3698 16.4343 19.456C16.348 19.5422 16.2311 19.5907 16.1091 19.5907H10.4598C10.3379 19.5907 10.2209 19.5422 10.1347 19.456C10.0484 19.3698 10 19.2528 10 19.1309C10 19.0089 10.0484 18.8919 10.1347 18.8057C10.2209 18.7195 10.3379 18.671 10.4598 18.671ZM10.4598 12.4305H16.1091C16.2311 12.4305 16.348 12.479 16.4343 12.5652C16.5205 12.6515 16.5689 12.7684 16.5689 12.8904C16.5689 13.0123 16.5205 13.1293 16.4343 13.2155C16.348 13.3017 16.2311 13.3502 16.1091 13.3502H10.4598C10.3379 13.3502 10.2209 13.3017 10.1347 13.2155C10.0484 13.1293 10 13.0123 10 12.8904C10 12.7684 10.0484 12.6515 10.1347 12.5652C10.2209 12.479 10.3379 12.4305 10.4598 12.4305ZM23.5425 10.1347L25.8653 12.4575C25.908 12.5002 25.9419 12.5509 25.965 12.6067C25.9881 12.6624 26 12.7222 26 12.7826C26 12.843 25.9881 12.9028 25.965 12.9586C25.9419 13.0144 25.908 13.0651 25.8653 13.1078L23.5425 15.4299C23.4563 15.5162 23.3393 15.5646 23.2174 15.5646C23.0954 15.5646 22.9784 15.5162 22.8922 15.4299C22.806 15.3437 22.7575 15.2267 22.7575 15.1048C22.7575 14.9828 22.806 14.8658 22.8922 14.7796L24.4293 13.2418H19.8534C19.6269 13.2418 19.4097 13.3318 19.2496 13.4919C19.0894 13.6521 18.9994 13.8693 18.9994 14.0958V23.0026C18.9995 23.063 18.9876 23.1228 18.9645 23.1786C18.9414 23.2344 18.9075 23.2851 18.8648 23.3278C18.8221 23.3705 18.7714 23.4044 18.7156 23.4275C18.6598 23.4506 18.6 23.4625 18.5396 23.4625C18.4792 23.4625 18.4194 23.4506 18.3636 23.4275C18.3078 23.4044 18.2571 23.3705 18.2144 23.3278C18.1717 23.2851 18.1379 23.2344 18.1148 23.1786C18.0917 23.1228 18.0798 23.063 18.0798 23.0026V14.0964C18.0798 13.626 18.2667 13.1749 18.5993 12.8423C18.9319 12.5097 19.383 12.3228 19.8534 12.3228L24.4293 12.3222L22.8922 10.785C22.8137 10.7064 22.7663 10.602 22.7588 10.4911C22.7514 10.3803 22.7843 10.2705 22.8515 10.182L22.8922 10.1347C22.9349 10.092 22.9856 10.0581 23.0414 10.035C23.0972 10.0119 23.157 10 23.2174 10C23.2778 10 23.3376 10.0119 23.3933 10.035C23.4491 10.0581 23.4998 10.092 23.5425 10.1347Z" fill="#41464F"/>
</svg>
`,al=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4182 15.6966L13.6824 9.83897C13.6381 9.76494 13.5754 9.70365 13.5004 9.66109C13.4254 9.61853 13.3406 9.59616 13.2544 9.59616C13.1682 9.59616 13.0834 9.61853 13.0084 9.66109C12.9334 9.70365 12.8707 9.76494 12.8265 9.83897L10.1664 15.6966C10.1332 15.7544 10.1127 15.8185 10.1061 15.8848C10.0996 15.9511 10.1073 16.018 10.1286 16.0811C10.1499 16.1442 10.1843 16.2021 10.2297 16.2509C10.275 16.2997 10.3302 16.3383 10.3916 16.3641C10.5069 16.4132 10.6365 16.4162 10.7539 16.3724C10.8712 16.3287 10.9673 16.2416 11.0223 16.1291L11.9615 14.1072H14.6223L15.5631 16.1291C15.6404 16.2973 15.8101 16.4039 15.9955 16.4016C16.0607 16.4151 16.1279 16.4151 16.193 16.4016C16.26 16.3769 16.3204 16.3372 16.3698 16.2855C16.4191 16.2339 16.456 16.1717 16.4777 16.1037C16.4995 16.0357 16.5054 15.9636 16.4951 15.8929C16.4848 15.8223 16.4585 15.7549 16.4182 15.6959V15.6966ZM12.385 13.1297L13.325 11.1551L14.265 13.1297H12.385ZM13.5697 6.02196C13.8926 6.56403 14.0728 7.17818 14.096 7.80884L13.4286 7.25326C13.3311 7.17729 13.2076 7.14266 13.0848 7.15683C12.962 7.17099 12.8497 7.23282 12.772 7.32899C12.6944 7.42516 12.6576 7.54798 12.6696 7.67101C12.6816 7.79404 12.7414 7.90744 12.8362 7.98678L14.2462 9.14299C14.327 9.21319 14.4313 9.25021 14.5382 9.2466C14.6476 9.24961 14.7543 9.21279 14.8386 9.14299L16.2681 7.98678C16.3648 7.90922 16.427 7.79658 16.441 7.67339C16.4551 7.55021 16.4199 7.42645 16.3431 7.32909C16.2638 7.23149 16.1494 7.16894 16.0244 7.1549C15.8994 7.14086 15.7739 7.17645 15.6749 7.25401L15.0368 7.77956C15.0048 6.55237 14.4941 5.38637 13.6137 4.53083C12.7333 3.67529 11.5532 3.19809 10.3256 3.20125C10.2009 3.20125 10.0814 3.25077 9.99324 3.33891C9.9051 3.42705 9.85558 3.54659 9.85558 3.67124C9.85558 3.79589 9.9051 3.91544 9.99324 4.00358C10.0814 4.09172 10.2009 4.14124 10.3256 4.14124C10.9835 4.14371 11.6292 4.31868 12.1983 4.64869C12.7674 4.97871 13.24 5.45222 13.569 6.02196H13.5697ZM9.50796 15.4241C8.53284 15.4247 7.59559 15.0466 6.89386 14.3695C6.19213 13.6924 5.78077 12.7693 5.74651 11.7948L6.41471 12.3399C6.45267 12.4047 6.5056 12.4594 6.56908 12.4996C6.63256 12.5397 6.70473 12.564 6.77955 12.5705C6.85437 12.577 6.92966 12.5655 6.99911 12.5369C7.06857 12.5084 7.13016 12.4636 7.17873 12.4063C7.2273 12.349 7.26144 12.2809 7.27828 12.2077C7.29513 12.1345 7.29418 12.0584 7.27554 11.9856C7.25689 11.9129 7.22108 11.8456 7.17111 11.7896C7.12113 11.7335 7.05845 11.6902 6.98832 11.6634L5.58734 10.4599C5.5036 10.3919 5.39902 10.3548 5.29116 10.3548C5.1833 10.3548 5.07872 10.3919 4.99497 10.4599L3.55721 11.6634C3.46047 11.7409 3.3983 11.8536 3.38424 11.9768C3.37018 12.1 3.40536 12.2237 3.48213 12.3211C3.57222 12.4314 3.70662 12.4968 3.84851 12.4998C3.95739 12.4984 4.06294 12.4621 4.14958 12.3962L4.78925 11.8706C4.83074 13.0893 5.34414 14.2441 6.22107 15.0913C7.098 15.9386 8.26984 16.4119 9.48919 16.4114C9.55104 16.4115 9.6123 16.3994 9.66946 16.3757C9.72661 16.3521 9.77855 16.3175 9.82228 16.2737C9.86601 16.23 9.90068 16.1781 9.92431 16.1209C9.94793 16.0637 9.96004 16.0025 9.95994 15.9406C9.96494 15.8769 9.95717 15.8129 9.93708 15.7522C9.917 15.6916 9.885 15.6356 9.84297 15.5875C9.80094 15.5393 9.74972 15.5001 9.69232 15.4721C9.63492 15.444 9.5725 15.4277 9.50871 15.4241H9.50796ZM6.95303 8.52359C6.84622 8.52123 6.74469 8.47672 6.67056 8.39979C6.59644 8.32285 6.55575 8.21973 6.55736 8.11291V3.95805C6.55736 3.73131 6.73605 3.54661 6.95303 3.54661C7.17001 3.54661 7.34794 3.73131 7.34794 3.95805V8.11291C7.34794 8.33815 7.17076 8.52359 6.95303 8.52359ZM8.61227 7.45447C8.50547 7.45191 8.40401 7.40721 8.33002 7.33014C8.25604 7.25306 8.21554 7.14986 8.21736 7.04304V5.17057C8.21736 4.94383 8.39604 4.75914 8.61302 4.75914C8.83 4.75914 9.00794 4.94383 9.00794 5.17057V7.04229C9.00956 7.14905 8.96899 7.25214 8.89505 7.32918C8.82111 7.40621 8.71976 7.45096 8.61302 7.45372L8.61227 7.45447ZM1.89496 7.45447C1.78822 7.45171 1.68688 7.40696 1.61294 7.32993C1.539 7.25289 1.49843 7.1498 1.50005 7.04304V5.17057C1.50005 4.94383 1.67798 4.75914 1.89496 4.75914C2.11269 4.75914 2.29063 4.94383 2.29063 5.17057V7.04229C2.31015 7.26752 2.13221 7.45372 1.89496 7.45372V7.45447ZM3.57448 8.54462C3.4676 8.54205 3.36607 8.49739 3.29197 8.42033C3.21787 8.34328 3.1772 8.24007 3.17881 8.13318V3.97832C3.1772 3.87142 3.21787 3.76822 3.29197 3.69117C3.36607 3.61411 3.4676 3.56945 3.57448 3.56688C3.68122 3.56964 3.78256 3.61439 3.8565 3.69143C3.93044 3.76846 3.97101 3.87155 3.96939 3.97832V8.13318C3.97101 8.23995 3.93044 8.34304 3.8565 8.42007C3.78256 8.49711 3.68122 8.54186 3.57448 8.54462ZM5.25399 9.75789C5.14719 9.75533 5.04573 9.71064 4.97175 9.63356C4.89776 9.55648 4.85726 9.45328 4.85908 9.34646V2.66143C4.85908 2.43469 5.03626 2.25 5.25399 2.25C5.47172 2.25 5.64891 2.43469 5.64891 2.66143V9.34646C5.65072 9.45328 5.61022 9.55648 5.53624 9.63356C5.46226 9.71064 5.3608 9.75533 5.25399 9.75789Z" fill="#41464F" stroke="#41464F" stroke-width="0.15"/>
</svg>
`,ol=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.29102 10.3545C5.39888 10.3545 5.50414 10.392 5.58789 10.46L6.98828 11.6631C7.05842 11.6899 7.12093 11.734 7.1709 11.79C7.22075 11.846 7.25674 11.9128 7.27539 11.9854C7.29404 12.0581 7.29516 12.1348 7.27832 12.208C7.26145 12.2811 7.22722 12.349 7.17871 12.4062C7.13014 12.4635 7.06847 12.5085 6.99902 12.5371C6.92962 12.5656 6.85405 12.5768 6.7793 12.5703C6.70473 12.5638 6.63264 12.54 6.56934 12.5C6.50589 12.4599 6.45299 12.4046 6.41504 12.3398L5.74609 11.7949C5.78037 12.7692 6.19208 13.6921 6.89355 14.3691C7.59529 15.0462 8.53367 15.4244 9.50879 15.4238C9.57252 15.4274 9.63503 15.4437 9.69238 15.4717C9.74978 15.4997 9.80074 15.5398 9.84277 15.5879C9.88472 15.6359 9.91743 15.6914 9.9375 15.752C9.95756 15.8125 9.96493 15.8768 9.95996 15.9404C9.96006 16.0023 9.94843 16.0639 9.9248 16.1211C9.9012 16.1782 9.86595 16.2297 9.82227 16.2734C9.7786 16.3171 9.72698 16.3524 9.66992 16.376C9.61276 16.3996 9.5511 16.4112 9.48926 16.4111C8.26991 16.4116 7.09764 15.939 6.2207 15.0918C5.34388 14.2447 4.83066 13.0896 4.78906 11.8711L4.14941 12.3965C4.06284 12.4623 3.95736 12.4986 3.84863 12.5C3.70683 12.497 3.57252 12.4315 3.48242 12.3213C3.40565 12.2239 3.3707 12.0998 3.38477 11.9766C3.39889 11.8535 3.46095 11.7406 3.55762 11.6631L4.99512 10.46C5.07881 10.392 5.18323 10.3545 5.29102 10.3545ZM11.8398 14.3691L11.0225 16.1289C10.9675 16.2414 10.8712 16.3283 10.7539 16.3721C10.6366 16.4158 10.5068 16.4133 10.3916 16.3643C10.3302 16.3384 10.2748 16.2998 10.2295 16.251C10.1842 16.2022 10.1502 16.1441 10.1289 16.0811C10.1076 16.0179 10.0999 15.9511 10.1064 15.8848C10.113 15.8185 10.1328 15.754 10.166 15.6963L11.1133 13.6123L11.8398 14.3691ZM13.2324 9.5498C13.3186 9.5498 13.4035 9.57272 13.4785 9.61523C13.5535 9.65779 13.6169 9.71894 13.6611 9.79297L15.501 13.7568L13.6611 11.9102L13.1533 11.3926L12.4131 10.665L12.8047 9.79297C12.8489 9.71894 12.9123 9.65779 12.9873 9.61523C13.0621 9.57281 13.1464 9.54988 13.2324 9.5498ZM13.1621 11.4004L13.6436 11.8799L13.3359 11.1348L13.1621 11.4004ZM5.64941 8.13281V9.34668C5.65117 9.45342 5.61006 9.55677 5.53613 9.63379C5.46217 9.71074 5.36062 9.75525 5.25391 9.75781C5.14718 9.75521 5.04562 9.71079 4.97168 9.63379C4.89775 9.55677 4.85762 9.45342 4.85938 9.34668V7.33008L5.64941 8.13281ZM10.3252 3.20117C11.5528 3.19801 12.7329 3.67572 13.6133 4.53125C14.4936 5.38673 15.0051 6.5522 15.0371 7.7793L15.6748 7.25391C15.7738 7.17635 15.8994 7.14123 16.0244 7.15527C16.1493 7.16931 16.2635 7.23162 16.3428 7.3291C16.4195 7.42647 16.4555 7.55064 16.4414 7.67383C16.4273 7.79666 16.3649 7.90887 16.2686 7.98633L14.8389 9.14258C14.7546 9.21238 14.6474 9.25008 14.5381 9.24707C14.4312 9.25061 14.3268 9.21272 14.2461 9.14258L12.8359 7.98633C12.7414 7.907 12.6819 7.79375 12.6699 7.6709C12.6579 7.5479 12.6948 7.42525 12.7725 7.3291C12.8501 7.233 12.9622 7.17138 13.085 7.15723C13.2077 7.14308 13.3312 7.17704 13.4287 7.25293L14.0957 7.80859C14.0753 7.25692 13.9356 6.71771 13.6846 6.22852L13.5693 6.02148C13.2404 5.45184 12.7673 4.97841 12.1982 4.64844C11.6292 4.3185 10.983 4.14407 10.3252 4.1416C10.2007 4.14149 10.0812 4.09188 9.99316 4.00391C9.90502 3.91577 9.85547 3.79555 9.85547 3.6709C9.85556 3.5464 9.90513 3.42692 9.99316 3.33887C10.0812 3.25083 10.2007 3.20129 10.3252 3.20117ZM3.96973 6.375V8.13281C3.97134 8.23957 3.93037 8.34289 3.85645 8.41992C3.7825 8.49695 3.68096 8.54217 3.57422 8.54492C3.46746 8.54228 3.36602 8.4969 3.29199 8.41992C3.21803 8.34289 3.1771 8.2396 3.17871 8.13281V5.625L3.96973 6.375ZM1.89551 4.75879C2.11302 4.75906 2.29102 4.94433 2.29102 5.1709V7.04199C2.31052 7.26708 2.13252 7.45385 1.89551 7.4541L1.81641 7.44434C1.7395 7.427 1.66871 7.38773 1.61328 7.33008C1.53934 7.25305 1.49838 7.14973 1.5 7.04297V5.1709C1.5 4.94416 1.67853 4.75879 1.89551 4.75879ZM8.61328 4.75879C8.83017 4.7589 9.00781 4.94423 9.00781 5.1709V7.04199C9.00859 7.09345 8.99928 7.14416 8.98145 7.19141L8.21777 6.40723V5.1709C8.21777 4.94416 8.3963 4.75879 8.61328 4.75879ZM6.95312 3.54688C7.17008 3.54689 7.34764 3.7313 7.34766 3.95801V5.54199L6.55762 4.75879V3.95801C6.55764 3.73129 6.73616 3.54688 6.95312 3.54688ZM5.25391 2.25C5.47154 2.25 5.64926 2.43453 5.64941 2.66113V3.73047L4.85938 2.97168V2.66113C4.85953 2.43458 5.03634 2.25008 5.25391 2.25Z" fill="#41464F"/>
<line x1="2.82577" y1="3.06445" x2="15.5303" y2="15.769" stroke="#41464F" stroke-width="1.125" stroke-linecap="round"/>
</svg>
`,ll=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47793 1.6875H2.73164C2.15508 1.6875 1.6875 2.15508 1.6875 2.73164V15.2666C1.6875 15.8432 2.15508 16.3107 2.73164 16.3107H15.2666C15.8432 16.3107 16.3107 15.8432 16.3107 15.2666V9.52207C16.3107 9.38848 16.2598 9.25488 16.1578 9.15293C16.0559 9.05098 15.9223 9 15.7887 9C15.6551 9 15.5215 9.05098 15.4195 9.15293C15.3176 9.25488 15.2666 9.38848 15.2666 9.52207V15.2684H2.73164V2.73164H8.47793C8.61152 2.73164 8.74512 2.68066 8.84707 2.57871C8.94902 2.47676 9 2.34316 9 2.20957C9 2.07598 8.94902 1.94238 8.84707 1.84043C8.74512 1.73848 8.61152 1.6875 8.47793 1.6875Z" fill="#41464F"/>
<path d="M14.7463 2.73164C14.8271 2.73164 14.9818 2.75098 15.1154 2.88457C15.3193 3.08848 15.3193 3.41895 15.1154 3.62285L9.05272 9.68555L8.11405 9.88945L8.3162 8.94551L14.3771 2.88457C14.509 2.75273 14.6654 2.73164 14.7463 2.73164ZM14.7463 1.6875C14.3455 1.6875 13.9447 1.84043 13.6389 2.14629L7.57792 8.20723C7.43553 8.34961 7.3371 8.53066 7.29491 8.72754L6.91698 10.4994C6.87128 10.8193 7.12088 11.0953 7.43202 11.0953C7.45663 11.0953 7.48124 11.0936 7.5076 11.09L9.27596 10.7068C9.47284 10.6646 9.65213 10.5662 9.79276 10.4238L15.8537 4.36289C16.4654 3.75117 16.4654 2.75801 15.8537 2.14629C15.5478 1.84043 15.1471 1.6875 14.7463 1.6875Z" fill="#41464F"/>
</svg>
`,hl=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.1713 6.63079L6.1603 8.49454C6.45182 8.78922 6.75182 9.26682 6.4603 9.56142C6.16855 9.85602 5.77075 9.85602 5.47915 9.56142L2.4322 6.47577C2.20082 6.24267 2.18395 5.86947 2.41532 5.63637L5.47922 2.50257C5.77082 2.20797 6.1687 2.20797 6.4603 2.50257C6.7519 2.79717 6.4519 3.27484 6.1603 3.56937L4.19717 5.50579H10.8923C13.5855 5.50579 15.7499 7.84159 15.7499 10.5285C15.7499 13.2154 13.5854 15.7817 10.8923 15.7817H3.75212C3.34225 15.7817 2.99837 15.5914 2.99837 15.1817C2.99837 14.7719 3.34225 14.6566 3.75212 14.6566H10.8329C12.6392 14.6566 14.6247 12.3306 14.6247 10.5285C14.6247 8.72629 12.6392 6.63094 10.8329 6.63094H4.1713V6.63079Z" fill="#41464F"/>
</svg>
`,cl=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#02DBDB"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M36.8735 20.3282L25.0626 22.3012C25.0243 22.3073 24.9886 22.3185 24.9538 22.3318H24.5272C24.2363 22.3318 24.0051 22.5645 24.0051 22.8514V36.3531C23.5443 36.0866 23.0084 35.9346 22.4373 35.9346C20.7057 35.9346 19.3018 37.335 19.3018 39.063C19.3018 40.791 20.7057 42.1914 22.4373 42.1914C24.1689 42.1914 25.5729 40.791 25.5729 39.063C25.5729 38.9364 25.5652 38.8118 25.5509 38.6904C25.5652 38.6424 25.5729 38.5924 25.5729 38.5393V27.5588L36.5474 25.6235V33.2236C36.0865 32.9582 35.5506 32.8051 34.9796 32.8051C33.2479 32.8051 31.844 34.2065 31.844 35.9345C31.844 37.6616 33.2479 39.063 34.9796 39.063C36.7112 39.063 38.1151 37.6616 38.1151 35.9345C38.1151 35.808 38.1075 35.6834 38.0932 35.561C38.1075 35.513 38.1151 35.4629 38.1151 35.4099V20.811C38.1151 20.5558 37.9299 20.3424 37.6859 20.2996C37.6007 20.2465 37.4935 20.2251 37.3756 20.2445L37.098 20.2914H37.0694C37 20.2914 36.9337 20.3047 36.8735 20.3282Z" fill="white"/>
</svg>
`,dl=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#8CD167"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M29.3858 28.1802L25.5663 21.8514C25.4303 21.6289 25.1893 21.4929 24.9297 21.4929H22.5564C22.4142 21.4929 22.2783 21.53 22.1608 21.6103C21.8147 21.8267 21.7097 22.284 21.9322 22.6363L27.0187 30.6956L21.8642 38.9033C21.79 39.0207 21.7529 39.1567 21.7529 39.2989C21.7529 39.7068 22.0867 40.0405 22.4946 40.0405H24.6268C24.8864 40.0405 25.1213 39.9045 25.2573 39.6882L29.1324 33.415L32.9828 39.682C33.1188 39.9045 33.3599 40.0343 33.6133 40.0343H35.9309C36.0731 40.0343 36.209 39.9911 36.3327 39.9169C36.6788 39.6944 36.7777 39.2371 36.5552 38.8909L31.3636 30.8316L36.6355 22.6425C36.7097 22.5251 36.7529 22.3829 36.7529 22.2408C36.7529 21.8328 36.4192 21.4991 36.0113 21.4991H33.8048C33.5453 21.4991 33.3042 21.6351 33.1683 21.8576L29.3858 28.1802Z" fill="white"/>
</svg>
`,ul=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#526AF0"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M40 20.9375H17.5C16.9823 20.9375 16.5625 21.3573 16.5625 21.875V40.625C16.5625 41.1427 16.9823 41.5625 17.5 41.5625H40C40.5177 41.5625 40.9375 41.1427 40.9375 40.625V21.875C40.9375 21.3573 40.5177 20.9375 40 20.9375ZM39.0625 22.8125V36.6409L32.4062 31.6487C31.9091 31.2761 31.2162 31.2761 30.719 31.6487L27.831 33.8144L23.9805 30.7341C23.4979 30.3477 22.83 30.3184 22.3161 30.6641L18.4375 33.2721V22.8125H39.0625ZM18.4375 39.6875V35.532L23.077 32.4125L27.7943 36.1859L31.5625 33.3594L39.0625 38.9844V39.6875H18.4375Z" fill="white"/>
<path d="M34.375 30.3125C35.926 30.3125 37.1875 29.051 37.1875 27.5C37.1875 25.949 35.926 24.6875 34.375 24.6875C32.824 24.6875 31.5625 25.949 31.5625 27.5C31.5625 29.051 32.824 30.3125 34.375 30.3125ZM34.375 26.5625C34.8918 26.5625 35.3125 26.9832 35.3125 27.5C35.3125 28.0168 34.8918 28.4375 34.375 28.4375C33.8582 28.4375 33.4375 28.0168 33.4375 27.5C33.4375 26.9832 33.8582 26.5625 34.375 26.5625Z" fill="white"/>
</svg>
`,pl=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#C2D7FF"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M20.7544 33.3423C18.9575 33.3423 17.5 31.8848 17.5 30.0879C17.5 28.291 18.9575 26.8335 20.7544 26.8335C22.5513 26.8335 24.0088 28.291 24.0088 30.0879C24.0088 31.8848 22.5513 33.3423 20.7544 33.3423ZM30 33.3423C28.2031 33.3423 26.7456 31.8848 26.7456 30.0879C26.7456 28.291 28.2031 26.8335 30 26.8335C31.7969 26.8335 33.2544 28.291 33.2544 30.0879C33.2544 31.8848 31.7969 33.3423 30 33.3423ZM39.2456 33.3423C37.4487 33.3423 35.9912 31.8848 35.9912 30.0879C35.9912 28.291 37.4487 26.8335 39.2456 26.8335C41.0425 26.8335 42.5 28.291 42.5 30.0879C42.5 31.8848 41.0425 33.3423 39.2456 33.3423Z" fill="white"/>
</svg>
`,gl=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#FF5F59"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M40.7806 49.4068C37.8271 49.4068 35.2021 44.3443 33.7959 41.063C31.4529 40.0783 28.8744 39.188 26.3904 38.5783C24.1869 40.0318 20.4834 42.188 17.6244 42.188C15.8431 42.188 14.5771 41.297 14.1084 39.7505C13.7334 38.4845 14.0619 37.5943 14.4369 37.1255C15.1869 36.0943 16.7341 35.5783 19.0779 35.5783C20.9529 35.5783 23.3431 35.9068 26.0154 36.563C27.7494 35.3443 29.4834 33.938 31.0306 32.438C30.3271 29.1568 29.5771 23.8595 31.4994 21.422C32.4369 20.2505 33.8904 19.8755 35.6244 20.3908C37.5466 20.9533 38.2494 22.1255 38.4841 23.0158C39.2806 26.2033 35.6244 30.5158 33.1396 33.047C33.7021 35.2505 34.4056 37.547 35.2966 39.6568C38.8591 41.2505 43.0771 43.5943 43.5466 46.1728C43.7341 47.063 43.4521 47.9068 42.7494 48.6103C42.1396 49.1255 41.4834 49.4068 40.7806 49.4068ZM36.4209 42.2818C38.2029 45.8915 39.8904 47.579 40.7806 47.579C40.9216 47.579 41.1091 47.5318 41.3904 47.297C41.7181 46.9693 41.7181 46.7345 41.6709 46.547C41.4834 45.6095 39.9834 44.063 36.4209 42.2818ZM19.0779 37.4533C16.7806 37.4533 16.1244 38.0158 15.9369 38.2505C15.8896 38.3443 15.7021 38.579 15.8896 39.2353C16.0306 39.7978 16.4056 40.3603 17.6244 40.3603C19.1244 40.3603 21.2806 39.5158 23.8119 38.0158C21.9834 37.6408 20.3896 37.4533 19.0771 37.4533H19.0779ZM28.3591 37.1728C29.8591 37.5943 31.4056 38.1103 32.8591 38.6728C32.3431 37.313 31.9216 35.9068 31.5466 34.5478C30.5053 35.4481 29.4425 36.3234 28.3591 37.1728ZM34.1716 22.0318C33.6556 22.0318 33.2806 22.2193 32.9521 22.5943C31.9681 23.813 31.8744 26.9068 32.6244 30.8443C35.4841 27.797 37.0306 24.9845 36.6556 23.4845C36.6084 23.2505 36.4209 22.5943 35.1084 22.2193C34.7334 22.0783 34.4529 22.0318 34.1709 22.0318H34.1716Z" fill="white"/>
</svg>
`,ml=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#FF5F59"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M23.8582 20.7605C23.5409 20.7605 23.2812 21.0201 23.2812 21.3374V41.2413C23.2812 41.5586 23.5409 41.8182 23.8582 41.8182H26.2019C26.5192 41.8182 26.7788 41.5586 26.7788 41.2413V34.3542H31.3437C35.6274 34.3542 38.2812 31.549 38.2812 27.5682C38.2812 23.6379 35.6635 20.7677 31.3582 20.7677H23.8582V20.7605ZM34.7187 27.561C34.7187 30.6908 32.8077 31.4768 29.5841 31.4768H26.7788V23.6595H30.8317C33.2692 23.6595 34.7187 25.0802 34.7187 27.561Z" fill="white"/>
</svg>
`,fl=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#59B7FF"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<rect x="15" y="25" width="20" height="3.75" rx="1.875" fill="white"/>
<rect x="15" y="35" width="30" height="3.75" rx="1.875" fill="white"/>
</svg>
`,El=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#B459FF"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M37.444 32.1272L25.6398 39.9967C24.3964 40.8231 23.3765 40.2796 23.3765 38.7832V22.4486C23.3765 20.9522 24.3964 20.4049 25.6398 21.2388L37.444 29.112C38.6873 29.9347 38.6873 31.2971 37.444 32.1272Z" fill="white"/>
</svg>
`,_l=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 1.875C8.6715 1.875 7.9215 2.15625 7.40625 2.71875C6.89025 3.28125 6.5625 3.98475 6.5625 4.6875V55.3125C6.5625 56.016 6.84375 56.766 7.40625 57.2812C7.96875 57.8438 8.67225 58.125 9.375 58.125H50.625C51.3285 58.125 52.0785 57.8438 52.5938 57.2812C53.1562 56.7188 53.4375 56.0153 53.4375 55.3125V17.8125L37.5 1.875H9.375Z" fill="#297BFF"/>
<path d="M53.4375 17.8125H40.3125C39.609 17.8125 38.859 17.5312 38.3438 16.9688C37.7813 16.4528 37.5 15.7028 37.5 15V1.875L53.4375 17.8125Z" fill="white" fill-opacity="0.5"/>
<path d="M29.5003 29.7974L32.7548 41.9377C32.7969 42.0949 32.8898 42.2339 33.0189 42.3329C33.148 42.432 33.3062 42.4857 33.469 42.4857H35.4274C35.59 42.4857 35.748 42.4321 35.8771 42.3332C36.0062 42.2343 36.0991 42.0957 36.1414 41.9387L40.7245 24.9309C40.7414 24.8681 40.75 24.8035 40.75 24.7385C40.75 24.3301 40.4189 23.999 40.0105 23.999H37.8183C37.6509 23.999 37.4886 24.0558 37.3577 24.16C37.2268 24.2642 37.1351 24.4097 37.0976 24.5727L34.2759 36.842L31.2096 24.5594C31.1696 24.3994 31.0773 24.2573 30.9473 24.1558C30.8174 24.0542 30.6572 23.999 30.4922 23.999H28.5085C28.3435 23.999 28.1833 24.0542 28.0533 24.1557C27.9233 24.2573 27.8309 24.3994 27.791 24.5594L24.7308 36.8178L21.8903 24.5714C21.8525 24.4087 21.7608 24.2635 21.63 24.1595C21.4992 24.0556 21.337 23.999 21.1699 23.999H18.9897C18.9248 23.999 18.8603 24.0075 18.7977 24.0244C18.4033 24.1303 18.1695 24.536 18.2755 24.9304L22.8462 41.9382C22.8885 42.0953 22.9813 42.234 23.1104 42.333C23.2395 42.432 23.3976 42.4857 23.5603 42.4857H25.5316C25.6943 42.4857 25.8525 42.432 25.9817 42.3329C26.1108 42.2339 26.2036 42.0949 26.2458 41.9377L29.5003 29.7974Z" fill="white"/>
</svg>
`,Cl=`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.0557 39.1914C57.0564 38.1279 56.8473 37.0747 56.4404 36.092C56.0335 35.1094 55.4367 34.2168 54.6843 33.4651C53.9319 32.7135 53.0386 32.1176 52.0556 31.7117C51.0726 31.3058 50.0192 31.0977 48.9557 31.0995H38.1557C33.6831 31.0995 30.0557 34.7377 30.0557 39.1914V55.3995H48.9557C53.4282 55.3995 57.0557 51.7612 57.0557 47.3076V39.1914ZM40.8557 41.8995V44.5995H38.1557V41.8995H40.8557ZM48.9557 41.8995V44.5995H46.2557V41.8995H48.9557Z" fill="#C9D2E8"/>
<path d="M2.94532 16.3548C2.94428 14.8099 3.248 13.28 3.83907 11.8527C4.43015 10.4254 5.29697 9.12864 6.3899 8.0368C7.48283 6.94496 8.78041 6.07944 10.2083 5.48979C11.6362 4.90015 13.1664 4.59796 14.7113 4.60054H30.3993C36.8961 4.60054 42.1653 9.88543 42.1653 16.3548V39.8985H14.7113C8.21451 39.8985 2.94532 34.6136 2.94532 28.1443V16.3548ZM26.4773 20.2885V24.2105H30.3993V20.2885H26.4773ZM14.7113 20.2885V24.2105H18.6333V20.2885H14.7113Z" fill="#0047FF"/>
</svg>
`,vl=`<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3644 9.20443L8.83787 8.22025C8.83787 8.22025 8.3554 8.03316 8.16893 7.8501C8.04885 7.73095 8.05723 7.45326 8.16365 7.09645C8.27008 6.73995 9.56483 5.29161 9.56483 3.97575C9.56483 1.94441 8.22819 0.296875 6.58096 0.296875C4.93343 0.296875 3.59833 1.94441 3.59833 3.97575C3.59833 5.23638 4.75254 6.73871 4.89464 7.01082C5.03706 7.28447 5.00262 7.70086 4.89061 7.82621C4.72182 8.01578 4.10408 8.20505 4.10408 8.20505L1.82638 9.21963C1.29427 9.41014 0.876953 9.91184 0.876953 10.479V10.7471C0.876953 11.3648 1.37866 11.7434 1.99517 11.7434H11.1931C11.8096 11.7434 12.3123 11.3648 12.3123 10.7471V10.479C12.3138 9.91153 11.8965 9.39462 11.3644 9.20443Z" fill="#BCBCBC"/>
</svg>
`,bl=`<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0626 1.54947L8.97368 0.460596L5.15078 4.28331L1.30478 0.4375L0.21582 1.52641L4.06183 5.37222L0.227398 9.20648L1.31632 10.2954L5.15077 6.46113L8.97367 10.2839L10.0626 9.19497L6.23973 5.37222L10.0626 1.54947Z" fill="white"/>
</svg>
`,wl=`<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91047 3.14917H2.36044L3.89083 1.61878C4.13568 1.37391 4.13568 1.00662 3.89083 0.761769C3.64597 0.516917 3.27867 0.516903 3.0338 0.761769L0.462758 3.33281C0.401552 3.39402 0.340332 3.45524 0.340332 3.57767V3.82253C0.340332 3.88375 0.340332 3.94496 0.401552 3.94496L0.462758 4.00618C0.462758 4.0674 0.523978 4.0674 0.585198 4.1286L3.15624 6.0875C3.27867 6.14871 3.40109 6.20993 3.52353 6.20993C3.70718 6.20993 3.89083 6.14871 4.01325 5.96506C4.1969 5.72021 4.1969 5.2917 3.89083 5.10805L2.72773 4.37347H8.9717C10.2572 4.37347 11.3591 5.41412 11.3591 6.76087C11.3591 8.10761 10.2572 9.14827 8.91047 9.14827H4.56419C4.1969 9.14827 3.95203 9.39313 3.95203 9.76042C3.95203 10.1277 4.1969 10.3726 4.56419 10.3726H8.91047C10.8694 10.3726 12.5222 8.78097 12.5222 6.76087C12.5222 4.74076 10.9306 3.14917 8.91047 3.14917Z" fill="white"/>
</svg>
`,yl=`<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.32359 5.34793H5.32361C5.49247 5.34791 5.6569 5.29379 5.79277 5.19352C5.92865 5.09325 6.02884 4.95209 6.07866 4.79073L6.72513 2.6996L6.72514 2.69956C6.73276 2.67489 6.74807 2.65332 6.76883 2.63799C6.7896 2.62266 6.81473 2.61438 6.84054 2.61437H13.1586C13.1844 2.61438 13.2096 2.62266 13.2303 2.63799C13.2511 2.65332 13.2664 2.6749 13.274 2.69956L13.274 2.69959L13.9205 4.791C13.9704 4.9523 14.0706 5.0934 14.2065 5.19362C14.3423 5.29385 14.5067 5.34792 14.6756 5.34793H16.6057C16.7412 5.34793 16.8754 5.37463 17.0006 5.42649C17.1258 5.47835 17.2396 5.55437 17.3354 5.65021C17.4313 5.74604 17.5073 5.85981 17.5592 5.98502C17.611 6.11023 17.6377 6.24443 17.6377 6.37996V15.4918C17.6377 15.6274 17.611 15.7616 17.5592 15.8868C17.5073 16.012 17.4313 16.1258 17.3354 16.2216C17.2396 16.3174 17.1258 16.3934 17.0006 16.4453C16.8754 16.4972 16.7412 16.5239 16.6057 16.5239H3.39346C3.25794 16.5239 3.12374 16.4972 2.99852 16.4453L2.95759 16.5441L2.99852 16.4453C2.87331 16.3934 2.75954 16.3174 2.66371 16.2216C2.56788 16.1258 2.49186 16.012 2.44 15.8868C2.38813 15.7616 2.36144 15.6274 2.36144 15.4918V6.37996C2.36144 6.24443 2.38813 6.11023 2.44 5.98502C2.49186 5.85981 2.56788 5.74604 2.66371 5.65021C2.75954 5.55437 2.87331 5.47835 2.99852 5.42649C3.12374 5.37463 3.25794 5.34793 3.39346 5.34793H5.32359ZM5.21479 2.23276L5.31698 2.26435L5.21479 2.23277L4.74058 3.76723H3.39346C1.95052 3.76723 0.780734 4.93702 0.780734 6.37996V15.4918C0.780734 16.9348 1.95052 18.1046 3.39346 18.1046H16.6057C18.0486 18.1046 19.2184 16.9348 19.2184 15.4918V6.37996C19.2184 4.93702 18.0486 3.76723 16.6057 3.76723H15.2586L14.7844 2.23277C14.677 1.88545 14.4613 1.58164 14.1687 1.36586C13.8762 1.15007 13.5222 1.03366 13.1587 1.03366H6.84049C6.47697 1.03366 6.12299 1.15007 5.83044 1.36586C5.53789 1.58164 5.32213 1.88545 5.21479 2.23276ZM6.47566 10.4803C6.47566 12.4264 8.05343 14.0042 9.99958 14.0042C11.9457 14.0042 13.5235 12.4264 13.5235 10.4803C13.5235 8.53416 11.9457 6.95639 9.99958 6.95639C8.05343 6.95639 6.47566 8.53416 6.47566 10.4803ZM11.3736 11.8544C11.0092 12.2188 10.515 12.4235 9.99958 12.4235C9.48421 12.4235 8.98994 12.2188 8.62552 11.8544C8.2611 11.4899 8.05637 10.9957 8.05637 10.4803C8.05637 9.96493 8.2611 9.47067 8.62552 9.10625C8.98994 8.74182 9.48421 8.53709 9.99958 8.53709C10.515 8.53709 11.0092 8.74182 11.3736 9.10625C11.7381 9.47067 11.9428 9.96493 11.9428 10.4803C11.9428 10.9957 11.7381 11.4899 11.3736 11.8544Z" fill="white" stroke="#0099FF" stroke-width="0.213922"/>
</svg>
`,Ui=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8671 11.9976L17.4274 7.43731C17.6576 7.20712 17.6576 6.82762 17.4274 6.59743L17.4025 6.57255C17.1723 6.34235 16.7928 6.34235 16.5626 6.57255L12.0024 11.139L7.4421 6.57255C7.21191 6.34235 6.83241 6.34235 6.60222 6.57255L6.57733 6.59743C6.34092 6.82762 6.34092 7.20712 6.57733 7.43731L11.1376 11.9976L6.57733 16.5578C6.34714 16.788 6.34714 17.1675 6.57733 17.3977L6.60222 17.4226C6.83241 17.6528 7.21191 17.6528 7.4421 17.4226L12.0024 12.8623L16.5626 17.4226C16.7928 17.6528 17.1723 17.6528 17.4025 17.4226L17.4274 17.3977C17.6576 17.1675 17.6576 16.788 17.4274 16.5578L12.8671 11.9976Z" fill="#020814"/>
</svg>
`,Sl=`<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.79926 11.9556V13.5689H4.63414V11.9999C2.08797 11.8042 0.0800781 9.71316 0.0800781 7.35262C0.0800781 7.19812 0.141455 7.04994 0.250706 6.94069C0.359957 6.83144 0.508133 6.77006 0.662638 6.77006C0.817142 6.77006 0.965319 6.83144 1.07457 6.94069C1.18382 7.04994 1.2452 7.19812 1.2452 7.35262C1.2452 9.18575 2.9354 10.8495 5.02407 10.8495C7.11274 10.8495 8.80216 9.18497 8.80216 7.35262C8.80215 7.27611 8.81721 7.20035 8.84648 7.12966C8.87575 7.05897 8.91866 6.99474 8.97276 6.94063C9.02686 6.88653 9.09108 6.84361 9.16177 6.81433C9.23245 6.78505 9.30821 6.76998 9.38472 6.76998C9.46123 6.76998 9.53699 6.78505 9.60768 6.81433C9.67836 6.84361 9.74259 6.88653 9.79669 6.94063C9.85078 6.99474 9.89369 7.05897 9.92296 7.12966C9.95223 7.20035 9.96729 7.27611 9.96728 7.35262C9.96728 9.59276 8.15979 11.5906 5.79926 11.9556ZM5.04504 0.125C5.66306 0.125 6.25576 0.370507 6.69277 0.807511C7.12977 1.24452 7.37528 1.83722 7.37528 2.45524V7.11572C7.37528 7.42173 7.31501 7.72474 7.1979 8.00746C7.08079 8.29018 6.90915 8.54706 6.69277 8.76344C6.47639 8.97983 6.2195 9.15147 5.93678 9.26858C5.65407 9.38568 5.35105 9.44595 5.04504 9.44595C4.73903 9.44595 4.43601 9.38568 4.1533 9.26858C3.87058 9.15147 3.6137 8.97983 3.39731 8.76344C3.18093 8.54706 3.00929 8.29018 2.89218 8.00746C2.77507 7.72474 2.7148 7.42173 2.7148 7.11572V2.45524C2.7148 1.83722 2.96031 1.24452 3.39731 0.807511C3.83432 0.370507 4.42702 0.125 5.04504 0.125Z" fill="#0099FF"/>
</svg>
`,xl=`<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.79926 11.9556V13.5689H4.63414V11.9999C2.08797 11.8042 0.0800781 9.71316 0.0800781 7.35262C0.0800781 7.19812 0.141455 7.04994 0.250706 6.94069C0.359957 6.83144 0.508133 6.77006 0.662638 6.77006C0.817142 6.77006 0.965319 6.83144 1.07457 6.94069C1.18382 7.04994 1.2452 7.19812 1.2452 7.35262C1.2452 9.18575 2.9354 10.8495 5.02407 10.8495C7.11274 10.8495 8.80216 9.18497 8.80216 7.35262C8.80215 7.27611 8.81721 7.20035 8.84648 7.12966C8.87575 7.05897 8.91866 6.99474 8.97276 6.94063C9.02686 6.88653 9.09108 6.84361 9.16177 6.81433C9.23245 6.78505 9.30821 6.76998 9.38472 6.76998C9.46123 6.76998 9.53699 6.78505 9.60768 6.81433C9.67836 6.84361 9.74259 6.88653 9.79669 6.94063C9.85078 6.99474 9.89369 7.05897 9.92296 7.12966C9.95223 7.20035 9.96729 7.27611 9.96728 7.35262C9.96728 9.59276 8.15979 11.5906 5.79926 11.9556ZM5.04504 0.125C5.66306 0.125 6.25576 0.370507 6.69277 0.807511C7.12977 1.24452 7.37528 1.83722 7.37528 2.45524V7.11572C7.37528 7.42173 7.31501 7.72474 7.1979 8.00746C7.08079 8.29018 6.90915 8.54706 6.69277 8.76344C6.47639 8.97983 6.2195 9.15147 5.93678 9.26858C5.65407 9.38568 5.35105 9.44595 5.04504 9.44595C4.73903 9.44595 4.43601 9.38568 4.1533 9.26858C3.87058 9.15147 3.6137 8.97983 3.39731 8.76344C3.18093 8.54706 3.00929 8.29018 2.89218 8.00746C2.77507 7.72474 2.7148 7.42173 2.7148 7.11572V2.45524C2.7148 1.83722 2.96031 1.24452 3.39731 0.807511C3.83432 0.370507 4.42702 0.125 5.04504 0.125Z" fill="white"/>
</svg>
`,Ml=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5223 11.6612L8.44708 17.7457C7.52958 18.3607 6.28709 18.1157 5.67209 17.1984C5.45119 16.8689 5.33324 16.4812 5.33325 16.0845V3.91553C5.33325 2.81103 6.22875 1.91553 7.33325 1.91553C7.72992 1.91552 8.11762 2.03346 8.44708 2.25436L17.5221 8.33886C18.4396 8.95386 18.6848 10.1964 18.0696 11.1139C17.9245 11.3302 17.7386 11.5161 17.5223 11.6612Z" fill="#020814"/>
</svg>
`,Tl=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="2" width="4" height="16" rx="2" fill="#0047FF"/>
<rect x="12" y="2" width="4" height="16" rx="2" fill="#0047FF"/>
</svg>
`,Rl=`<svg width="85" height="78" viewBox="0 0 85 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M66.4263 40.3517C71.3137 40.3582 75.9985 42.3055 79.4504 45.7653C82.9024 49.2252 84.839 53.9143 84.8343 58.8017C84.8343 68.993 76.5931 77.2552 66.4263 77.2552C61.5396 77.2478 56.8557 75.3001 53.4045 71.8404C49.9533 68.3806 48.0172 63.692 48.0219 58.8052C48.0219 48.614 56.2631 40.3517 66.4263 40.3517ZM68.4114 65.9191H64.3363V70.1203H68.4114V65.9191ZM74.6395 0.234375C77.6434 0.234375 80.066 2.67804 80.066 5.67485V39.0459C76.0612 36.2565 71.2963 34.7643 66.4158 34.7712C61.8212 34.7662 57.3229 36.0889 53.4623 38.5802L49.1142 34.3301C49.0342 34.2501 48.9392 34.1866 48.8347 34.1433C48.7302 34.1 48.6181 34.0777 48.505 34.0777C48.3918 34.0777 48.2798 34.1 48.1753 34.1433C48.0708 34.1866 47.9758 34.2501 47.8958 34.3301L30.7587 51.1031C30.6693 51.1901 30.5624 51.257 30.4451 51.2993C30.3278 51.3416 30.2027 51.3583 30.0784 51.3484C29.9541 51.3384 29.8334 51.302 29.7243 51.2416C29.6152 51.1812 29.5202 51.0982 29.4458 50.9981L21.8523 40.7753C21.7719 40.6661 21.667 40.5772 21.546 40.516C21.425 40.4548 21.2912 40.4228 21.1556 40.4228C21.02 40.4228 20.8862 40.4548 20.7652 40.516C20.6442 40.5772 20.5392 40.6661 20.4589 40.7753L8.91628 56.3195C8.81857 56.4498 8.75915 56.6048 8.74468 56.767C8.73022 56.9292 8.76129 57.0922 8.83441 57.2377C8.90752 57.3832 9.01978 57.5054 9.15856 57.5906C9.29734 57.6758 9.45713 57.7206 9.61997 57.7199H42.4659C42.4553 58.0875 42.4448 58.4551 42.4448 58.8227C42.4448 61.2349 42.8019 63.5595 43.4636 65.7616H6.24155C3.23774 65.7616 0.811584 63.3179 0.811584 60.3176V5.67485C0.811584 2.66403 3.24824 0.234375 6.23805 0.234375H74.6395ZM68.6424 47.4972H64.2312L64.7669 64.0881V64.1932H67.9808L68.6459 47.4972H68.6424ZM21.4252 12.9428C19.5826 13.0007 17.8348 13.7734 16.5519 15.0972C15.269 16.4211 14.5516 18.1922 14.5516 20.0357C14.5516 21.8792 15.269 23.6504 16.5519 24.9742C17.8348 26.2981 19.5826 27.0708 21.4252 27.1287C23.3036 27.1249 25.1037 26.3759 26.4303 25.046C27.7569 23.7161 28.5015 21.9141 28.5006 20.0357C28.5024 18.1567 27.7583 16.3538 26.4316 15.0232C25.1049 13.6925 23.3042 12.943 21.4252 12.9393V12.9428Z" fill="#CFD8ED"/>
</svg>
`,Ll=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18.0001" r="17" fill="black" fill-opacity="0.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M22.9529 18.3662L15.2991 23.4687C14.4929 24.0045 13.8315 23.6521 13.8315 22.6818V12.0906C13.8315 11.1203 14.4929 10.7654 15.2991 11.3061L22.9529 16.4111C23.759 16.9445 23.759 17.8279 22.9529 18.3662Z" fill="white"/>
</svg>
`,Il=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_211_2152)">
<path d="M6.99982 0.65625C10.5309 0.65625 13.3436 3.46889 13.3436 7C13.3436 10.5311 10.5309 13.3438 6.99982 13.3438C3.46871 13.3438 0.656067 10.5311 0.656067 7C0.656067 3.46889 3.46871 0.65625 6.99982 0.65625Z" stroke="#FF5A50" stroke-width="1.3125"/>
<path d="M6.82464 3.50212C6.5896 3.50212 6.46571 3.59869 6.31995 3.74444C6.18148 3.93757 6.13229 4.13252 6.13047 4.36573C6.13047 4.60806 6.13047 4.4623 6.17966 4.89775L6.31084 7.30457C6.31084 7.5396 6.36003 7.73273 6.4566 7.97505C6.50579 8.12081 6.64973 8.21737 6.79548 8.21737C6.99043 8.21737 7.13437 8.12081 7.18356 7.97505C7.28013 7.78921 7.32932 7.54689 7.32932 7.30457L7.52245 4.84856C7.53703 4.75928 7.57164 4.43497 7.57164 4.38578C7.59897 4.21451 7.53703 3.923 7.42589 3.79181C7.32932 3.60597 7.087 3.48208 6.82464 3.50212Z" fill="#FF5A50"/>
<path d="M6.89934 10.7226C7.04509 10.7226 7.23822 10.6752 7.38398 10.5295C7.52245 10.3837 7.57164 10.1906 7.57529 9.95553C7.57529 9.7624 7.52792 9.56927 7.38216 9.42352C7.23822 9.27776 7.04327 9.1812 6.85014 9.1812C6.65701 9.1812 6.46389 9.27776 6.31813 9.42352C6.17419 9.56745 6.125 9.7624 6.125 9.95553C6.125 10.1906 6.22156 10.3837 6.36732 10.5295C6.51126 10.6734 6.70621 10.7226 6.89934 10.7226Z" fill="#FF5A50"/>
</g>
<defs>
<clipPath id="clip0_211_2152">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
`,Al=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="6.34375" stroke="#46DB7A" stroke-width="1.3125"/>
<path d="M4.22888 7.72945L5.97888 9.47945L10.0622 5.39612" stroke="#46DB7A" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,Ol=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_232_1031)">
<path d="M6.99982 0.65625C10.5309 0.65625 13.3436 3.46889 13.3436 7C13.3436 10.5311 10.5309 13.3438 6.99982 13.3438C3.46871 13.3438 0.656067 10.5311 0.656067 7C0.656067 3.46889 3.46871 0.65625 6.99982 0.65625Z" stroke="#B8B8B8" stroke-width="1.3125"/>
</g>
<defs>
<clipPath id="clip0_232_1031">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
`,$l=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.00004" cy="7.99998" r="6.66667" stroke="url(#paint0_linear_23_808)" stroke-width="1.3"/>
<defs>
<linearGradient id="paint0_linear_23_808" x1="23.2381" y1="-2.9524" x2="4.66671" y2="10.8571" gradientUnits="userSpaceOnUse">
<stop offset="0.355419" stop-color="#0047FF"/>
<stop offset="0.776884" stop-color="#0047FF" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
`,Ul=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_232_1031)">
<path d="M6.99982 0.65625C10.5309 0.65625 13.3436 3.46889 13.3436 7C13.3436 10.5311 10.5309 13.3438 6.99982 13.3438C3.46871 13.3438 0.656067 10.5311 0.656067 7C0.656067 3.46889 3.46871 0.65625 6.99982 0.65625Z" stroke="#E4E7ED" stroke-width="1.3125"/>
</g>
<defs>
<clipPath id="clip0_232_1031">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
`,Dl=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.00004" cy="7.99998" r="6.66667" stroke="url(#paint0_linear_23_808)" stroke-width="1.3"/>
<defs>
<linearGradient id="paint0_linear_23_808" x1="23.2381" y1="-2.9524" x2="4.66671" y2="10.8571" gradientUnits="userSpaceOnUse">
<stop offset="0.355419" stop-color="#0047FF"/>
<stop offset="0.776884" stop-color="#0047FF" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
`,Nl=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1557_199)">
<path d="M9.7969 2.23523C9.6716 2.36048 9.50462 2.43527 9.32775 2.44538C9.15087 2.45548 8.97646 2.4002 8.83771 2.29005C8.76532 2.23181 8.69062 2.17651 8.61379 2.12428C7.77896 1.5681 6.78752 1.29486 5.78564 1.34484C4.78376 1.39482 3.82444 1.76537 3.04911 2.40187C2.27378 3.03837 1.72346 3.90714 1.47929 4.88009C1.23511 5.85305 1.31 6.87872 1.69291 7.80589C2.08655 8.75619 2.78237 9.55029 3.67272 10.0654C4.56307 10.5804 5.59834 10.7877 6.61837 10.6553C7.6384 10.5228 8.58635 10.0579 9.31558 9.33242C10.0448 8.607 10.5147 7.66149 10.6525 6.64216C10.6745 6.46925 10.7588 6.3103 10.8896 6.19512C11.0204 6.07993 11.1887 6.01643 11.363 6.01652H11.4152C11.4972 6.01652 11.5783 6.03379 11.6533 6.0672C11.7282 6.1006 11.7953 6.1494 11.8501 6.21043C11.905 6.27145 11.9464 6.34333 11.9716 6.4214C11.9969 6.49946 12.0054 6.58197 11.9967 6.66355C11.8538 7.98275 11.2788 9.2177 10.3612 10.1761C9.44353 11.1346 8.23475 11.7628 6.92301 11.9629C5.61128 12.163 4.27019 11.9238 3.10852 11.2825C1.94686 10.6412 1.0298 9.63388 0.500108 8.41728C-0.0295804 7.20068 -0.142174 5.84309 0.179853 4.55585C0.501881 3.26861 1.24046 2.12395 2.28061 1.30007C3.32077 0.476198 4.60413 0.0193324 5.9309 0.000599884C7.25768 -0.0181326 8.55343 0.402319 9.61642 1.1965C9.65653 1.22658 9.70131 1.26201 9.75145 1.30345C9.81934 1.35923 9.8748 1.4286 9.91427 1.50711C9.95374 1.58561 9.97634 1.67151 9.98062 1.75927C9.98491 1.84703 9.97077 1.93472 9.93913 2.01669C9.90749 2.09867 9.85904 2.17311 9.7969 2.23523Z" fill="#0047FF"/>
</g>
<defs>
<clipPath id="clip0_1557_199">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>
`,kl=`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1557_202)">
<path d="M11.409 1.95873L10.6402 2.55016C10.0991 1.87399 9.4125 1.32861 8.63144 0.954626C7.85038 0.580642 6.995 0.387697 6.12903 0.39016C2.96618 0.39016 0.407611 2.89901 0.403326 6.00272C0.39904 9.10985 2.96446 11.629 6.12903 11.629C8.60188 11.629 10.7079 10.0904 11.5102 7.93471C11.5151 7.92117 11.5172 7.90677 11.5164 7.89238C11.5156 7.87798 11.5119 7.86391 11.5055 7.851C11.4991 7.83809 11.4901 7.82662 11.4791 7.81729C11.4681 7.80796 11.4554 7.80096 11.4416 7.79671L10.6702 7.53529C10.6433 7.52629 10.614 7.52794 10.5883 7.5399C10.5627 7.55186 10.5426 7.57322 10.5322 7.59957C10.2961 8.22618 9.92604 8.79368 9.44788 9.26243C8.56282 10.1301 7.3719 10.6147 6.13246 10.6116C5.49817 10.6116 4.88446 10.4899 4.30675 10.2507C3.18927 9.78736 2.29511 8.90857 1.81247 7.79929C1.56821 7.23369 1.44275 6.62394 1.44389 6.00786C1.44389 5.38558 1.56732 4.78472 1.81247 4.21644C2.04818 3.66872 2.38675 3.17587 2.81703 2.7533C3.70111 1.8841 4.89267 1.39922 6.13246 1.40416C6.76588 1.40416 7.3796 1.52673 7.95731 1.76587C8.68976 2.06882 9.33309 2.55315 9.82673 3.1733L9.00645 3.80244C8.99025 3.81462 8.97788 3.83118 8.97078 3.85016C8.96369 3.86915 8.96217 3.88976 8.9664 3.90958C8.97063 3.9294 8.98045 3.9476 8.99468 3.96202C9.00891 3.97645 9.02698 3.98651 9.04674 3.99101L11.4407 4.56701C11.5093 4.58244 11.5762 4.53187 11.5762 4.46415L11.5873 2.04358C11.5864 2.02333 11.58 2.00371 11.5687 1.98684C11.5575 1.96997 11.5418 1.95648 11.5235 1.94784C11.5051 1.9392 11.4848 1.93573 11.4646 1.9378C11.4444 1.93986 11.4252 1.9474 11.409 1.95959V1.95873Z" fill="#FF5A50"/>
</g>
<defs>
<clipPath id="clip0_1557_202">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>
`,Yr=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8Z" fill="#E3E7EF"/>
<circle cx="6" cy="10" r="1" fill="#020814"/>
<circle cx="10" cy="10" r="1" fill="#020814"/>
<circle cx="14" cy="10" r="1" fill="#020814"/>
</svg>
`,Qr=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="9.6" fill="#E3E7EF"/>
<path d="M11.8642 18.2284C15.379 18.2284 18.2284 15.379 18.2284 11.8642C18.2284 8.34934 15.379 5.5 11.8642 5.5C8.34934 5.5 5.5 8.34934 5.5 11.8642C5.5 15.379 8.34934 18.2284 11.8642 18.2284Z" stroke="#020814" stroke-width="0.794645" stroke-linejoin="round"/>
<path d="M9.22918 10.7006C9.22918 11.0877 9.54293 11.4014 9.92995 11.4014C10.317 11.4014 10.6307 11.0877 10.6307 10.7006C10.6307 10.3137 10.317 9.99994 9.92995 9.99994C9.54293 9.99994 9.22918 10.3137 9.22918 10.7006ZM13.4334 10.7006C13.4334 11.0877 13.7472 11.4014 14.1342 11.4014C14.5212 11.4014 14.835 11.0877 14.835 10.7006C14.835 10.3137 14.5212 9.99994 14.1342 9.99994C13.7472 9.99994 13.4334 10.3137 13.4334 10.7006ZM12.0319 15.2551C11.0511 15.2551 10.0701 14.764 9.50954 13.9938C9.29879 13.7135 9.1597 13.3636 9.01849 13.0834C8.94895 12.8726 9.08797 12.663 9.22924 12.5923C9.44 12.5228 9.57908 12.6619 9.64972 12.803C9.71926 13.0833 9.86047 13.2941 9.99956 13.5039C10.5601 14.2046 11.2609 14.5555 12.0309 14.5555C12.8011 14.5555 13.5726 14.2057 13.993 13.5745C14.1331 13.3637 14.2733 13.0845 14.3428 12.8737C14.4135 12.663 14.6231 12.5934 14.7632 12.663C14.9739 12.7325 15.0435 12.9432 14.9739 13.0834C14.9034 13.4332 14.6938 13.7135 14.4829 13.9938C13.994 14.765 13.013 15.2551 12.0319 15.2551Z" fill="#020814" stroke="#020814" stroke-width="0.15"/>
</svg>
`,Pl=Yr.replace(/#E3E7EF/g,"#D0DDFF").replace(/#020814/g,"#0047FF"),Hl=Qr.replace(/#E3E7EF/g,"#D0DDFF").replace(/#020814/g,"#0047FF"),Fl=qr.replace(/#CCCCCC/g,"#0047FF"),Gl=zr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#020814/g,"#0047FF"),Bl=Vr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#020814/g,"#0047FF"),Vl=jr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#020814/g,"#0047FF"),zl=Br.replace(/#F3F5FA/g,"#D0DDFF").replace(/#020814/g,"#0047FF"),jl=Ui.replace(/#020814/g,"#0047FF").replace(/<svg([^>]*)>/,'<svg$1><rect width="24" height="24" rx="4" fill="#E3E7EF"/>'),Ge=URL.createObjectURL(new Blob([cl],{type:"image/svg+xml"})),ii=URL.createObjectURL(new Blob([dl],{type:"image/svg+xml"})),be=URL.createObjectURL(new Blob([ul],{type:"image/svg+xml"})),ni=URL.createObjectURL(new Blob([pl],{type:"image/svg+xml"})),ql=URL.createObjectURL(new Blob([gl],{type:"image/svg+xml"})),On=URL.createObjectURL(new Blob([ml],{type:"image/svg+xml"})),ws=URL.createObjectURL(new Blob([fl],{type:"image/svg+xml"})),Ae=URL.createObjectURL(new Blob([El],{type:"image/svg+xml"})),$n=URL.createObjectURL(new Blob([_l],{type:"image/svg+xml"})),Zl={jpg:be,jpeg:be,png:be,gif:be,bmp:be,webp:be,svg:be,tif:be,tiff:be,ico:be,heic:be,txt:ws,log:ws,md:ws,rtf:ws,doc:$n,docx:$n,xls:ii,xlsx:ii,csv:ii,ppt:On,pptx:On,pdf:ql,mp3:Ge,wav:Ge,ogg:Ge,aac:Ge,flac:Ge,m4a:Ge,wma:Ge,amr:Ge,mp4:Ae,mov:Ae,avi:Ae,mkv:Ae,webm:Ae,wmv:Ae,flv:Ae,m4v:Ae,"3gp":Ae},Wl=r=>{if(!r)return ni;const e=r.lastIndexOf(".");if(e<0||e===r.length-1)return ni;const t=r.slice(e+1).toLowerCase();return Zl[t]||ni},Kl=URL.createObjectURL(new Blob([Gl],{type:"image/svg+xml"})),Yl=URL.createObjectURL(new Blob([Wo],{type:"image/svg+xml"})),Ql=URL.createObjectURL(new Blob([Bl],{type:"image/svg+xml"})),Xl=URL.createObjectURL(new Blob([Vl],{type:"image/svg+xml"})),Jl=URL.createObjectURL(new Blob([zl],{type:"image/svg+xml"})),Xr=URL.createObjectURL(new Blob([Yr],{type:"image/svg+xml"})),Jr=URL.createObjectURL(new Blob([Pl],{type:"image/svg+xml"})),e1=URL.createObjectURL(new Blob([Qr],{type:"image/svg+xml"})),t1=URL.createObjectURL(new Blob([Hl],{type:"image/svg+xml"})),Di=URL.createObjectURL(new Blob([Pr],{type:"image/svg+xml"})),s1=URL.createObjectURL(new Blob([Hr],{type:"image/svg+xml"})),i1=Fr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#41464F/g,"#0047FF"),n1=Gr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#41464F/g,"#0047FF"),r1=Hr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#41464F/g,"#0047FF"),a1=Pr.replace(/#F3F5FA/g,"#D0DDFF").replace(/#41464F/g,"#0047FF"),o1=URL.createObjectURL(new Blob([Fr],{type:"image/svg+xml"})),l1=URL.createObjectURL(new Blob([i1],{type:"image/svg+xml"})),h1=URL.createObjectURL(new Blob([Gr],{type:"image/svg+xml"})),c1=URL.createObjectURL(new Blob([n1],{type:"image/svg+xml"})),d1=URL.createObjectURL(new Blob([r1],{type:"image/svg+xml"})),ea=URL.createObjectURL(new Blob([a1],{type:"image/svg+xml"})),u1=URL.createObjectURL(new Blob([Zo],{type:"image/svg+xml"})),Un=URL.createObjectURL(new Blob([Zr],{type:"image/svg+xml"})),p1=URL.createObjectURL(new Blob([sl],{type:"image/svg+xml"})),g1=URL.createObjectURL(new Blob([il],{type:"image/svg+xml"})),m1=URL.createObjectURL(new Blob([nl],{type:"image/svg+xml"})),f1=URL.createObjectURL(new Blob([rl],{type:"image/svg+xml"})),ta=URL.createObjectURL(new Blob([Wr],{type:"image/svg+xml"})),E1=URL.createObjectURL(new Blob([Kr],{type:"image/svg+xml"})),_1=Wr.replace(/#41464F/g,"#0047FF"),C1=Kr.replace(/#41464F/g,"#0047FF"),v1=Zr.replace(/#41464F/g,"#E35858"),b1=Ui.replace(/#020814/g,"#0047FF"),w1=URL.createObjectURL(new Blob([_1],{type:"image/svg+xml"})),y1=URL.createObjectURL(new Blob([C1],{type:"image/svg+xml"}));URL.createObjectURL(new Blob([v1],{type:"image/svg+xml"}));const S1=URL.createObjectURL(new Blob([b1],{type:"image/svg+xml"})),x1=URL.createObjectURL(new Blob([al],{type:"image/svg+xml"})),M1=URL.createObjectURL(new Blob([ol],{type:"image/svg+xml"})),T1=URL.createObjectURL(new Blob([ll],{type:"image/svg+xml"}));URL.createObjectURL(new Blob([hl],{type:"image/svg+xml"}));const R1=URL.createObjectURL(new Blob([Qo],{type:"image/svg+xml"})),L1=URL.createObjectURL(new Blob([Xo],{type:"image/svg+xml"})),I1=URL.createObjectURL(new Blob([Jo],{type:"image/svg+xml"})),A1=URL.createObjectURL(new Blob([el],{type:"image/svg+xml"})),O1=URL.createObjectURL(new Blob([tl],{type:"image/svg+xml"})),$1=URL.createObjectURL(new Blob([Br],{type:"image/svg+xml"})),U1=URL.createObjectURL(new Blob([Vr],{type:"image/svg+xml"})),sa=URL.createObjectURL(new Blob([zr],{type:"image/svg+xml"})),D1=URL.createObjectURL(new Blob([jr],{type:"image/svg+xml"})),N1=URL.createObjectURL(new Blob([qr],{type:"image/svg+xml"})),k1=URL.createObjectURL(new Blob([Fl],{type:"image/svg+xml"}));URL.createObjectURL(new Blob([Ko],{type:"image/svg+xml"}));const P1=URL.createObjectURL(new Blob([Yo],{type:"image/svg+xml"})),ys=URL.createObjectURL(new Blob([Ho],{type:"image/svg+xml"})),Ss=URL.createObjectURL(new Blob([Fo],{type:"image/svg+xml"})),ri=URL.createObjectURL(new Blob([Go],{type:"image/svg+xml"})),H1=URL.createObjectURL(new Blob([Bo],{type:"image/svg+xml"})),F1=URL.createObjectURL(new Blob([Vo],{type:"image/svg+xml"})),ia=URL.createObjectURL(new Blob([zo],{type:"image/svg+xml"})),G1=URL.createObjectURL(new Blob([jo],{type:"image/svg+xml"})),Dn=URL.createObjectURL(new Blob([qo],{type:"image/svg+xml"})),na=URL.createObjectURL(new Blob([Cl],{type:"image/svg+xml"})),B1=URL.createObjectURL(new Blob([vl],{type:"image/svg+xml"}));URL.createObjectURL(new Blob([bl],{type:"image/svg+xml"}));const V1=URL.createObjectURL(new Blob([wl],{type:"image/svg+xml"})),z1=URL.createObjectURL(new Blob([yl],{type:"image/svg+xml"})),ra=URL.createObjectURL(new Blob([Ui],{type:"image/svg+xml"})),j1=URL.createObjectURL(new Blob([jl],{type:"image/svg+xml"})),q1=URL.createObjectURL(new Blob([Sl],{type:"image/svg+xml"})),Z1=URL.createObjectURL(new Blob([xl],{type:"image/svg+xml"})),W1=URL.createObjectURL(new Blob([Ml],{type:"image/svg+xml"})),K1=URL.createObjectURL(new Blob([Tl],{type:"image/svg+xml"})),mi=URL.createObjectURL(new Blob([Rl],{type:"image/svg+xml"})),Y1=URL.createObjectURL(new Blob([Ll],{type:"image/svg+xml"})),aa=URL.createObjectURL(new Blob([Il],{type:"image/svg+xml"})),Q1=URL.createObjectURL(new Blob([Al],{type:"image/svg+xml"})),Nn=URL.createObjectURL(new Blob([Ol],{type:"image/svg+xml"})),X1=URL.createObjectURL(new Blob([$l],{type:"image/svg+xml"})),J1=URL.createObjectURL(new Blob([Ul],{type:"image/svg+xml"})),eh=URL.createObjectURL(new Blob([Dl],{type:"image/svg+xml"})),th=URL.createObjectURL(new Blob([Nl],{type:"image/svg+xml"})),sh=URL.createObjectURL(new Blob([kl],{type:"image/svg+xml"}));class ih extends $i{constructor(e,t,s){super(e,t,s),h(this,"GetDefaultTag",w.L_GET_DEFAULT_USER_PROFILE_HOOK_O),h(this,"GetDefaultErrorTag",w.L_GET_DEFAULT_USER_PROFILE_HOOK_E),h(this,"ReqStartTag",w.L_REQ_USER_PROFILE_HOOK_T),h(this,"ReqFailedTag",w.L_REQ_USER_PROFILE_HOOK_E),h(this,"ReqSuccessTag",w.L_REQ_USER_PROFILE_HOOK_R)}_isSameUserProfile(e,t){return e.name===t.name&&e.userId===t.userId&&e.avatarUrl===t.avatarUrl}_updateCacheUserProfile(e,t){e.name=t.name,e.avatarUrl=t.avatarUrl||e.avatarUrl,e.usingDefault=!1}_checkAndUpdateCacheData(e){const{name:t,userId:s,avatarUrl:i}=e;let n=this._cache.get(s),a=!1;return n?(n.usingDefault||!this._isSameUserProfile(n,e))&&(this._updateCacheUserProfile(n,e),a=!0):(a=!0,n={name:t,userId:s,avatarUrl:i||Ss,usingDefault:!1,online:!1},this._cache.set(s,n)),{changed:a,cached:n}}_isInvalid(e){return typeof e!="object"||!e.userId||typeof e.userId!="string"||!e.name||typeof e.name!="string"||!!e.avatarUrl&&typeof e.avatarUrl!="string"}_dispatchUpdateEvent(e){e.length!==0&&this._ctx.dispatchEvent(new v(E.USER_PROFILES_UPDATE,e))}_createDefaultCache(e,t){return t?{...t,avatarUrl:t.avatarUrl||Ss,usingDefault:!0,online:!1}:{userId:e,name:`${e}`,avatarUrl:Ss,usingDefault:!0,online:!1}}updateUserProfile(e){const t=this.logger.createTraceId();if(this.logger.warn(w.A_UPDATE_USER_PROFILE_T,void 0,t),this._isInvalid(e)){this.logger.error(w.A_UPDATE_USER_PROFILE_E,"invalid user profile",t);return}const{userId:s,name:i,avatarUrl:n}=e;let a=this._cache.get(s);if(a&&!a.usingDefault&&this._isSameUserProfile(a,e)){this.logger.warn(w.A_UPDATE_USER_PROFILE_R,`user profile not changed: ${s}`,t);return}a?this._updateCacheUserProfile(a,e):(a={userId:s,name:i,avatarUrl:n||Ss,usingDefault:!1,online:!1},this._cache.set(s,a)),this.logger.info(w.A_UPDATE_USER_PROFILE_R,`userId: ${s}, name: ${i}, portraitUri: ${n}`,t),this._dispatchUpdateEvent([a])}updateUserOnlineStatus(e,t){const s=this.logger.createTraceId();this.logger.info(w.A_UPDATE_USER_ONLINE_STATE_T,`userId: ${e}, online: ${t}`,s);const i=this._cache.get(e);if(!i){this.logger.warn(w.A_UPDATE_USER_ONLINE_STATE_R,`user profile not found: ${e}`,s);return}if(i.online===t){this.logger.warn(w.A_UPDATE_USER_ONLINE_STATE_R,`user online state not changed: ${e}`,s);return}i.online=t,this.logger.info(w.A_UPDATE_USER_ONLINE_STATE_R,`userId: ${e}, online: ${t}`,s),this._dispatchUpdateEvent([i])}}class nh extends $i{constructor(e,t,s,i){super(e,t,i),h(this,"ReqStartTag",w.L_REQ_GROUP_PROFILE_HOOK_T),h(this,"ReqFailedTag",w.L_REQ_GROUP_PROFILE_HOOK_E),h(this,"ReqSuccessTag",w.L_REQ_GROUP_PROFILE_HOOK_R),h(this,"GetDefaultTag",w.L_GET_DEFAULT_GROUP_PROFILE_HOOK_O),h(this,"GetDefaultErrorTag",w.L_GET_DEFAULT_GROUP_PROFILE_HOOK_E),h(this,"_groupMembers",new Map),this._reqGroupMembers=s}_checkAndUpdateCacheData(e){const{name:t,groupId:s,avatarUrl:i}=e;let n=this._cache.get(s),a=!1;return n?(n.usingDefault||!this._isSameGroupProfile(n,e))&&(this._updateCacheGroupProfile(n,e),a=!0):(a=!0,n={name:t,groupId:s,avatarUrl:i||ys,memberCount:0,usingDefault:!1},this._cache.set(s,n)),{changed:a,cached:n}}_isInvalid(e){return typeof e!="object"||!e.groupId||typeof e.groupId!="string"||!e.name||typeof e.name!="string"||!!e.avatarUrl&&typeof e.avatarUrl!="string"||typeof e.memberCount!="number"||e.memberCount<0}_isSameGroupProfile(e,t){return e.groupId===t.groupId&&e.name===t.name&&e.memberCount===t.memberCount&&e.avatarUrl===t.avatarUrl}_dispatchUpdateEvent(e){e.length!==0&&this._ctx.dispatchEvent(new v(E.GROUP_PROFILES_UPDATE,e))}_createDefaultCache(e,t){return t?{...t,avatarUrl:t.avatarUrl||ys,usingDefault:!0}:{groupId:e,name:`${e}`,avatarUrl:ys,usingDefault:!0,memberCount:0}}_updateCacheGroupProfile(e,t){e.name=t.name,e.avatarUrl=t.avatarUrl||e.avatarUrl,e.memberCount=t.memberCount,e.usingDefault=!1}updateGroupProfile(e){const t=this.logger.createTraceId();if(this.logger.warn(w.A_UPDATE_GROUP_PROFILE_T,void 0,t),this._isInvalid(e)){this.logger.error(w.A_UPDATE_GROUP_PROFILE_E,"invalid group profile",t);return}const{groupId:s,name:i,avatarUrl:n,memberCount:a}=e;let o=this._cache.get(s);if(o&&!o.usingDefault&&this._isSameGroupProfile(o,e)){this.logger.warn(w.A_UPDATE_GROUP_PROFILE_R,`group profile not changed: ${s}`,t);return}o?this._updateCacheGroupProfile(o,e):(o={groupId:s,name:i,avatarUrl:n||ys,usingDefault:!1,memberCount:a},this._cache.set(s,o)),this.logger.info(w.A_UPDATE_GROUP_PROFILE_R,`groupId: ${s}, name: ${i}, portraitUri: ${n}, memberCount: ${a}`,t),this._dispatchUpdateEvent([o])}_cloneGroupMember(e){const{userId:t,nickname:s}=e;return{userId:t,nickname:s}}async reqGroupMembers(e,t=!0){const s=this.logger.createTraceId();if(!t){const a=this._groupMembers.get(e);if(a)return[...a]}let i;try{this.logger.info(w.L_REQ_GROUP_MEMBERS_HOOK_T,`groupId: ${e}`,s),i=await this._reqGroupMembers(e)}catch(a){return this.logger.error(w.L_REQ_GROUP_MEMBERS_HOOK_E,a.message,s),[]}if(!i||!Array.isArray(i))return this.logger.error(w.L_REQ_GROUP_MEMBERS_HOOK_E,"result must be a Array",s),[];const n=i.filter((a,o)=>this._isInvalidGroupMemberProfile(a)?(this.logger.error(w.L_REQ_GROUP_MEMBERS_HOOK_E,`result[${o}] is invalid`,s),!1):!0).map(this._cloneGroupMember);return this.logger.info(w.L_REQ_GROUP_MEMBERS_HOOK_R,`groupId: ${e}, memberCount: ${i.length}`,s),this._groupMembers.set(e,n),n}updateGroupMembers(e,t){const s=this.logger.createTraceId();if(this.logger.info(w.A_UPDATE_GROUP_MEMBERS_T,`groupId: ${e}`,s),!t||!Array.isArray(t)){this.logger.error(w.A_UPDATE_GROUP_MEMBERS_E,"param 'members' must be a Array",s);return}if(t.some((a,o)=>this._isInvalidGroupMemberProfile(a)?(this.logger.error(w.A_UPDATE_GROUP_MEMBERS_E,`param 'members[${o}]' is invalid`,s),!0):!1))return;const i=t.map(this._cloneGroupMember);this._groupMembers.set(e,i),this._dispatchGroupMembersUpdateEvent(e,i);const n=this._cache.get(e);n?n.memberCount!==t.length&&(n.memberCount=t.length,this._dispatchUpdateEvent([n])):this.logger.warn(w.A_UPDATE_GROUP_MEMBERS_E,`group profile not found: ${e}`,s),this.logger.info(w.A_UPDATE_GROUP_MEMBERS_R,`groupId: ${e}, memberCount: ${t.length}`,s)}addGroupMembers(e,t){const s=this.logger.createTraceId();if(this.logger.info(w.A_ADD_GROUP_MEMBERS_T,`groupId: ${e}`,s),!t||!Array.isArray(t)){this.logger.error(w.A_ADD_GROUP_MEMBERS_E,"param 'members' must be a Array",s);return}if(t.some((l,c)=>{const d=this._isInvalidGroupMemberProfile(l);return d&&this.logger.error(w.A_ADD_GROUP_MEMBERS_E,`param 'members[${c}]' is invalid`,s),d}))return;const i=this._groupMembers.get(e)||[],n=t.filter(l=>!i.some(c=>c.userId===l.userId));if(n.length===0){this.logger.warn(w.A_ADD_GROUP_MEMBERS_R,`no new members to add: ${e}`,s);return}const a=[...i,...n.map(this._cloneGroupMember)];this._groupMembers.set(e,a),this._dispatchGroupMembersUpdateEvent(e,a);const o=this._cache.get(e);o?o.memberCount!==a.length&&(o.memberCount=a.length,this._dispatchUpdateEvent([o])):this.logger.warn(w.A_ADD_GROUP_MEMBERS_E,`group profile not found: ${e}`,s),this.logger.info(w.A_ADD_GROUP_MEMBERS_R,`groupId: ${e}, members: ${t.map(l=>l.userId).join(",")}`,s)}removeGroupMembers(e,t){const s=this.logger.createTraceId();if(this.logger.info(w.A_REMOVE_GROUP_MEMBERS_T,`groupId: ${e}`,s),!t||!Array.isArray(t)){this.logger.error(w.A_REMOVE_GROUP_MEMBERS_E,"param 'userIds' must be a Array",s);return}const i=t.filter((l,c)=>typeof l!="string"||l.length===0?(this.logger.error(w.A_REMOVE_GROUP_MEMBERS_E,`param 'userIds[${c}]' is invalid`,s),!1):!0);if(i.length===0){this.logger.warn(w.A_REMOVE_GROUP_MEMBERS_R,`no valid members to remove: ${e}`,s);return}const n=this._groupMembers.get(e);if(!n){this.logger.warn(w.A_REMOVE_GROUP_MEMBERS_E,`group members not found: ${e}`,s);return}const a=n.filter(l=>!i.includes(l.userId));this._groupMembers.set(e,a),this._dispatchGroupMembersUpdateEvent(e,a);const o=this._cache.get(e);o?o.memberCount!==a.length&&(o.memberCount=a.length,this._dispatchUpdateEvent([o])):this.logger.warn(w.A_REMOVE_GROUP_MEMBERS_E,`group profile not found: ${e}`,s),this.logger.info(w.A_REMOVE_GROUP_MEMBERS_R,`groupId: ${e}, members: ${i.join(",")}`,s)}_isInvalidGroupMemberProfile(e){return typeof e!="object"||!e.userId||typeof e.userId!="string"||!!e.nickname&&typeof e.nickname!="string"}_dispatchGroupMembersUpdateEvent(e,t){this._ctx.dispatchEvent(new v(E.GROUP_MEMBERS_UPDATE,{groupId:e,members:t}))}clear(){super.clear(),this._groupMembers.clear()}}class rh extends $i{constructor(){super(...arguments),h(this,"ReqStartTag",w.L_REQ_SYSTEM_PROFILE_HOOK_T),h(this,"ReqFailedTag",w.L_REQ_SYSTEM_PROFILE_HOOK_E),h(this,"ReqSuccessTag",w.L_REQ_SYSTEM_PROFILE_HOOK_R),h(this,"GetDefaultTag",w.L_GET_DEFAULT_SYSTEM_PROFILE_HOOK_O),h(this,"GetDefaultErrorTag",w.L_GET_DEFAULT_SYSTEM_PROFILE_HOOK_E)}_checkAndUpdateCacheData(e){const{name:t,systemId:s,avatarUrl:i}=e;let n=this._cache.get(s),a=!1;return n?(n.usingDefault||!this._isSameSystemProfile(n,e))&&(this._updateCacheSystemProfile(n,e),a=!0):(a=!0,n={name:t,systemId:s,avatarUrl:i||ri,usingDefault:!1},this._cache.set(s,n)),{changed:a,cached:n}}_isSameSystemProfile(e,t){return e.systemId===t.systemId&&e.name===t.name&&e.avatarUrl===t.avatarUrl}_updateCacheSystemProfile(e,t){e.name=t.name,e.avatarUrl=t.avatarUrl||e.avatarUrl,e.usingDefault=!1}_isInvalid(e){return typeof e!="object"||!e.systemId||typeof e.systemId!="string"||!e.name||typeof e.name!="string"||!!e.avatarUrl&&typeof e.avatarUrl!="string"}_dispatchUpdateEvent(e){e.length!==0&&this._ctx.dispatchEvent(new v(E.SYSTEM_PROFILES_UPDATE,e))}_createDefaultCache(e,t){return t?{...t,avatarUrl:t.avatarUrl||ri,usingDefault:!0}:{systemId:e,name:`${e}`,avatarUrl:ri,usingDefault:!0}}}class ah extends ye{constructor(e,t){super(e),h(this,"_users"),h(this,"_groups"),h(this,"_systems"),this._hooks=t,this._users=new ih(e,this._hooks.reqUserProfiles,this._hooks.getDefaultUserProfile),this._groups=new nh(e,this._hooks.reqGroupProfiles,this._hooks.reqGroupMembers,this._hooks.getDefaultGroupProfile),this._systems=new rh(e,this._hooks.reqSystemProfiles,this._hooks.getDefaultSystemProfile)}_onInit(){}_onInitUserCache(){}_onDestroyUserCache(){}destroy(){this._systems.clear(),this._users.clear(),this._groups.clear()}async requestUserProfiles(e,t=!1){return this._users.getCache(e,t)}async requestSystemProfiles(e,t=!1){return this._systems.reqData(e,t)}async requestGroupProfiles(e,t=!1){return this._groups.reqData(e,t)}getUserProfile(e){return this.getUserProfiles([e])[0]}getGroupProfile(e){return this.getGroupProfiles([e])[0]}getUserProfiles(e,t=!1){return this._users.getCache(e,t)}getSystemProfiles(e,t=!1){return this._systems.getCache(e,t)}getGroupProfiles(e,t=!1){return this._groups.getCache(e,t)}updateUserProfile(e){this._users.updateUserProfile(e)}updateGroupProfile(e){this._groups.updateGroupProfile(e)}updateUserOnlineStatus(e,t){this._users.updateUserOnlineStatus(e,t)}async reqGroupMembers(e,t=!0){return this._groups.reqGroupMembers(e,t)}updateGroupMembers(e,t){return this._groups.updateGroupMembers(e,t)}addGroupMembers(e,t){return this._groups.addGroupMembers(e,t)}removeGroupMembers(e,t){return this._groups.removeGroupMembers(e,t)}}const oh={"channel.loading.msg":"Loading...","channel.mentioned.me.msg":"@You","channel.mentioned.all.msg":"@all","channel.draft.msg":"[Draft]","message.list.select":"Select the following message","message.list.unselect":"Unselect","message.list.deleted.by.self":"You deleted one message","message.list.deleted.by.other":"{0} deleted one message","message.list.back":"Back","message.list.read-receipt.tooltip.all-unread":"All unread","message.list.read-receipt.tooltip.all-read":"All read","message.list.read-receipt.tooltip.read-count":" Read: {0}","message.list.read-receipt.tooltip.unread-count":" Unread: {0}","message-type.RC:ImgMsg":"[Image]","message-type.RC:HQVCMsg":"[Audio]","message-type.RC:VcMsg":"[Audio]","message-type.RC:GIFMsg":"[Image]","message-type.RC:FileMsg":"[File]","message-type.RC:SightMsg":"[Video]","message-type.RC:ImgTextMsg":"[Image text]","message-type.RC:LBSMsg":"[Location]","message-type.RC:CombineV2Msg":"[Combine]","message-type.RC:ReferenceMsg":"[Reference]","message-type.unknown":"[Unsupported message types]","time.format.today":"Today","time.format.yesterday":"Yesterday","time.format.monday":"Mon","time.format.tueday":"Tue","time.format.wedday":"Wed","time.format.thurday":"Thur","time.format.friday":"Fri","time.format.satday":"Sat","time.format.sunday":"Sun","time.format.full":"{0}/{1}/{2}","input.menu.item.photo":"Photo","input.menu.item.images":"Image","input.menu.item.files":"File","input.menu.item.emoji":"Emoji","input.placeholder":"Shift + Enter for newline, Enter for send","input.send":"Send","input.reply.prefix":"Reply ","input.mentioned.all":"all","input.placeholder.search":"search","channel.menu.item.pin":"Pin","channel.menu.item.unpin":"Unpin","channel.menu.item.mute":"Mute","channel.menu.item.unmute":"Unmute","channel.menu.item.remove":"Delete","message.menu.item.reply":"Reply","message.menu.item.reactions":"Reactions","message.menu.item.multi.choice":"Multi-select","message.menu.item.copy":"Copy","message.menu.item.forward":"Forward","message.menu.item.delete.for.me":"Delete for me","message.menu.item.delete.for.all":"Delete for everyone","message.menu.item.speech.to.text":"Transcribe","message.menu.item.cancel.speech.to.text":"Cancel Transcribe","message.menu.item.edit":"Edit","message.speech.to.text.failed":"Transcription failed","message.speech.to.text.empty":" ","message.speech.to.text.unsupported":"This voice message does not support transcription","channel.empty.desc":"No message","channel.list.empty.desc":"No channel","channel.list.bar.title":"Channel","channel.detail.bar.typing":"Typing...","channel.detail.bar.typing.audio":"Speaking...","alert.req.msg.error":"Request message failed: {0}","alert.pickfiles.maxcount":"You can only select up to {0} files","alert.paste.not.supported":"Paste is not supported in your browser","alert.delete.message.failed":"Delete message failed: {0}","alert.delete.messages.partial.failure":"Delete {0} messages failed","alert.delete.channel.failed":"Delete channel failed: {0}","alert.imlib.failed.network":"The request could not be completed. Please check your network and try again later. (Error code: {0})","alert.imlib.failed.generic":"The operation could not be completed. Please try again later. (Error code: {0})","alert.forward.not.supported":"The {0} selected messages cannot be forwarded","alert.forward.over.length":"Select up to 100 chat transcripts","alert.send.message.maxcount":"Exceeds {0} characters, please delete some and try again.","alert.message-deleted":"Message deleted","alert.channel.list.not.ready":"Channel list is not ready, please try again later","alert.reaction.limit.reached":"Reaction limit reached. Cannot add more.","alert.reaction.failed":"Reaction failed. Please try again later.","alert.message.edit.failed":"Message update failed. Please try again.","alert.message.edit.discarded":"Message edit discarded","alert.message.edit.recalled":"This message has been recalled and can no longer be edited.","alert.message.edit.switch":"Another message is being edited. If you confirm editing the current message, the previously edited message will be lost.","reaction.total.users":"{0}","reaction.detail.title":"Reaction Details","reaction.detail.loading":"Loading...","dialog.tips.msg":"Tips","dialog.cancel.msg":"Cancel","dialog.confirm.msg":"OK","dialog.forwarding.msg":"Forward it to","dialog.forwarding.confirm":"Send","message.edit.cancel":"Cancel","message.edit.confirm":"Save","message.edit.edited":"Edited","message.edit.updating":"Updating...","message.edit.retry":"Update failed, click to retry","message.edit.expired":"This message can no longer be edited","message.reference.edited":"Edited","message.reference.deleted":"Message deleted","take-photo.send-btn.label":"Send","take-photo.cancel-btn.label":"Cancel","take-photo.retry-btn.label":"Retry","take-photo.msg.camera-starting":"Camera starting...","take-photo.msg.camera-startup-failure":"Camera startup failure: {0}","multi-choice.menu.selected-count":"Selected {0} items","multi-choice.menu.merge-forward":"Merge Forward","multi-choice.menu.forward-item-by-item":"Forward","private.combine-msg.title":"{0} and {1} chat history","private.combine-msg.signal.title":"{0}'s chat history","group.combine-msg.title":"Group chat history","combine-msg.chat-record":"Chat History","combine-msg.load-failed":"Failed to load chat history","connection.status.disconnected":"Disconnected","connection.status.connecting":"Connecting...","toast.copy.success":"Copied","toast.copy.failed":"Copy failed"},lh={"channel.loading.msg":"加载中...","channel.mentioned.me.msg":"@我","channel.mentioned.all.msg":"@所有人","channel.draft.msg":"[草稿]","message.list.select":"选择以下信息","message.list.unselect":"取消选择","message.list.deleted.by.self":"你撤回了一条消息","message.list.deleted.by.other":"{0} 撤回了一条消息","message.list.back":"返回","message.list.read-receipt.tooltip.all-unread":"全部未读","message.list.read-receipt.tooltip.all-read":"全部已读","message.list.read-receipt.tooltip.read-count":"{0} 人已读","message.list.read-receipt.tooltip.unread-count":"{0} 人未读","message-type.RC:ImgMsg":"[图片]","message-type.RC:HQVCMsg":"[语音]","message-type.RC:VcMsg":"[语音]","message-type.RC:GIFMsg":"[图片]","message-type.RC:FileMsg":"[文件]","message-type.RC:SightMsg":"[视频]","message-type.RC:ImgTextMsg":"[图文]","message-type.RC:LBSMsg":"[位置]","message-type.RC:CombineV2Msg":"[合并转发]","message-type.RC:ReferenceMsg":"[引用]","message-type.unknown":"[不支持的消息类型]","time.format.today":"今天","time.format.yesterday":"昨天","time.format.monday":"星期一","time.format.tueday":"星期二","time.format.wedday":"星期三","time.format.thurday":"星期四","time.format.friday":"星期五","time.format.satday":"星期六","time.format.sunday":"星期日","time.format.full":"{0}/{1}/{2}","input.menu.item.photo":"拍照","input.menu.item.images":"图片","input.menu.item.files":"文件","input.menu.item.emoji":"表情","input.placeholder":"Shift + Enter 换行, Enter 发送","input.send":"发送","input.reply.prefix":"回复 ","input.mentioned.all":"所有人","input.placeholder.search":"搜索","channel.menu.item.pin":"置顶","channel.menu.item.unpin":"取消置顶","channel.menu.item.mute":"免打扰","channel.menu.item.unmute":"取消免打扰","channel.menu.item.remove":"删除","message.menu.item.reply":"回复","message.menu.item.reactions":"表情回复","message.menu.item.multi.choice":"多选","message.menu.item.copy":"复制","message.menu.item.forward":"转发","message.menu.item.delete.for.me":"删除","message.menu.item.delete.for.all":"撤回","message.menu.item.speech.to.text":"转文字","message.menu.item.cancel.speech.to.text":"取消转文字","message.menu.item.edit":"编辑","message.speech.to.text.failed":"语音转换失败","message.speech.to.text.empty":" ","message.speech.to.text.unsupported":"此语音消息不支持转文字功能","channel.empty.desc":"暂无消息","channel.list.empty.desc":"暂无对话","channel.list.bar.title":"会话","channel.detail.bar.typing":"对方正在输入...","channel.detail.bar.typing.audio":"对方正在讲话...","alert.req.msg.error":"请求消息失败: {0}","alert.pickfiles.maxcount":"最多只能选择 {0} 个文件","alert.paste.not.supported":"您的浏览器不支持粘贴操作","alert.delete.message.failed":"删除消息失败: {0}","alert.delete.messages.partial.failure":"删除 {0} 条消息失败","alert.delete.channel.failed":"删除会话失败: {0}","alert.imlib.failed.network":"当前请求未成功，请检查网络后稍候重试。（错误码：{0}）","alert.imlib.failed.generic":"操作未成功，请稍后重试。（错误码：{0}）","alert.forward.not.supported":"选中的第 {0} 条消息不支持转发","alert.forward.over.length":"聊天记录选择不能超过 100 条","alert.send.message.maxcount":"内容超过 {0} 字, 请删除部分内容后再尝试发送","alert.message-deleted":"消息被删除","alert.channel.list.not.ready":"会话列表仍在加载中, 请稍后再试","alert.reaction.limit.reached":"回应已达上限，无法继续添加","alert.reaction.failed":"消息回应失败，请稍后再试","alert.message.edit.failed":"消息更新失败，请重试","alert.message.edit.discarded":"已取消编辑消息","alert.message.edit.recalled":"消息已撤回，无法进行编辑","alert.message.edit.switch":"正在编辑另一条消息，确定编辑当前消息后，则之前编辑的消息内容将丢失。","reaction.total.users":"{0}人","reaction.detail.title":"回应详情","reaction.detail.loading":"加载中...","dialog.tips.msg":"提示","dialog.cancel.msg":"取消","dialog.confirm.msg":"确认","dialog.forwarding.msg":"转发给","dialog.forwarding.confirm":"发送","message.edit.cancel":"取消","message.edit.confirm":"保存","message.edit.edited":"已编辑","message.edit.updating":"更新中...","message.edit.retry":"更新失败，点击重试","message.edit.expired":"消息已超过可编辑时间","message.reference.edited":"已编辑","message.reference.deleted":"消息已删除","take-photo.send-btn.label":"发送","take-photo.cancel-btn.label":"取消","take-photo.retry-btn.label":"重拍","take-photo.msg.camera-starting":"相机启动中...","take-photo.msg.camera-startup-failure":"相机启动失败: {0}","multi-choice.menu.selected-count":"已选择 {0} 项","multi-choice.menu.merge-forward":"合并转发","multi-choice.menu.forward-item-by-item":"逐条转发","private.combine-msg.title":"{0} 和 {1} 的聊天记录","private.combine-msg.signal.title":"{0} 的聊天记录","group.combine-msg.title":"群聊的聊天记录","combine-msg.chat-record":"聊天记录","combine-msg.load-failed":"聊天记录加载失败","connection.status.disconnected":"已主动断开连接","connection.status.connecting":"连接中...","toast.copy.success":"已复制","toast.copy.failed":"复制失败"},Te={en_US:{direction:"ltr",entries:oh},zh_CN:{direction:"ltr",entries:lh}};class hh extends ye{constructor(){super(...arguments),h(this,"_language","en_US")}_onInitUserCache(){}_onDestroyUserCache(){}destroy(){}cloneLanguageEntries(e){return Te[e]?(this.logger.info(w.A_CLONE_LANGUAGE_ENTRIES_O,`lang: ${e}`),{...Te[e].entries}):(this.logger.error(w.A_CLONE_LANGUAGE_ENTRIES_O,`Language pack '${e}' not found.`),null)}registerLanguagePack(e,t,s="ltr"){this.logger.info(w.A_REGISTER_LANGUAGE_PACK_O,`lang: ${e}, direction: ${s}`),Te[e]={direction:s,entries:t}}setLanguage(e){if(!Te[e]){this.logger.error(w.A_SET_LANGUAGE_O,`Language pack '${e}' not found.`);return}if(this._language===e){this.logger.warn(w.A_SET_LANGUAGE_O,`Language '${e}' already in use.`);return}this.logger.info(w.A_SET_LANGUAGE_O,`current: ${this._language}, target: ${e}`);const{direction:t}=Te[e];this._language=e,this.ctx.dispatchEvent(new v(E.LANGUAGE_CHANGE,{lang:e,direction:t}))}getLanguage(){return this._language}getSupportedLanguages(){return Object.keys(Te)}getEntryString(e){var t;return(t=Te[this._language])==null?void 0:t.entries[e]}format(e,...t){const s=Te[this._language].entries[e];return s?s.replace(/\{\d+\}/g,(i,n)=>t[parseInt(i.substring(1,i.length-1),10)].toString()):e}}const I={SUCCESS:0,CHATUI_NOT_READY:39001,MUST_CALL_BEFORE_READY:39002,INVALID_CHANNEL:39003,TASK_CANCEL:39004,CHANNEL_LIST_NOT_READY:39005,INVALID_MESSAGE:39006,MODIFIED_MESSAGE_TIMEOUT:33402,GET_CHANNEL_FAILED:35021,SPEECH_TO_TEXT_MESSAGE_CONTENT_UNSUPPORTED:35059};class oa extends ye{constructor(e,t=5,s=5){super(e),h(this,"_timestamps",[]),h(this,"_queue",[]),h(this,"_executing",[]),h(this,"_timer",-1),h(this,"_generation",0),h(this,"_destroyed",!1),this._parallel=t,this._fps=s}_onInitUserCache(){}_onDestroyUserCache(){this._generation+=1,clearTimeout(this._timer),this._timer=-1,this._timestamps.length=0;const e=this._queue.splice(0),t=this._executing.splice(0);for(const s of t){const{transactionId:i}=s.params;typeof i=="number"&&this._try2CancelExecutingTask(i)}for(const s of[...t,...e])s.resolve(B.fail(I.TASK_CANCEL))}destroy(){this._destroyed=!0,this.ctx.removeEventListener(E.DESTROY_USER_CACHE,this._onDestroyUserCache,this),this.ctx.removeEventListener(E.INIT_USER_CACHE,this._onInitUserCache,this),this._onDestroyUserCache()}async push(e){return this._destroyed?B.fail(I.TASK_CANCEL):new Promise(t=>{this._queue.push({params:e,resolve:t}),this.logger.info(w.L_PUSH_2_QUEUE_O,`${this._tag}: queue length: ${this._queue.length}`),this._execute()})}remove(e){let t=this._queue.findIndex(s=>s.params.transactionId===e);if(t!==-1){const s=this._queue[t];return s.result=B.fail(I.TASK_CANCEL),!0}if(t=this._executing.findIndex(s=>s.params.transactionId===e),t!==-1){const s=this._executing[t],i=this._try2CancelExecutingTask(e);return i&&(s.result=B.fail(I.TASK_CANCEL)),i}return!1}async _execute(){if(this._destroyed||this._queue.length===0||this._executing.length>=this._parallel)return;if(this._timestamps.length>=this._fps){this.logger.warn(w.L_TASK_QUEUE_EXECUTE_O,`${this._tag}: trigger limiting`);return}const e=this._generation;this._timer===-1&&(this._timer=window.setTimeout(()=>{e===this._generation&&(this._timestamps.length=0,this._timer=-1,this._execute())},1e3));const t=this._queue.shift();if(this._executing.push(t),t.result!==void 0){this._checkResolve();return}this._timestamps.push(Date.now()),this.logger.info(w.L_TASK_QUEUE_EXECUTE_O,`${this._tag}: queue length: ${this._queue.length}, executing length: ${this._executing.length}`);const s=this._handle(t.params);this._execute();const i=await s;e===this._generation&&(t.result??(t.result=i),this._checkResolve())}_checkResolve(){for(;this._executing.length&&this._executing[0].result!==void 0;){const{resolve:e,result:t}=this._executing.shift();e(t)}this._execute()}}class ch extends oa{constructor(e){super(e,1,5),h(this,"_tag","MessageSendQueue")}async _handle(e){const t=this._generation,{channelIdentifier:s,message:i,params:n}=e;return n.needReceipt=this.ctx.isReadReceiptV5,n.pushConfig=this.ctx.store.getPushConfig(i),t!==this._generation?B.fail(I.TASK_CANCEL):await pe(s).sendMessage(n)}_try2CancelExecutingTask(e){return!1}}class dh extends oa{constructor(){super(...arguments),h(this,"_tag","FileUploadQueue"),h(this,"_uploaderMap",new Map)}_getFileType(e){switch(e){case C.IMAGE:case C.GIF:return se.FileType.IMAGE;case C.SHORT_VIDEO:return se.FileType.SHORT_VIDEO;default:return se.FileType.FILE}}async _handle(e){const{message:t,transactionId:s,onProgress:i}=e,n=t.file,a=this._getFileType(t.messageType),o={message:t},l={file:n,fileType:a,onProgress:i,contentDisposition:"attachment"},c=this.logger.createTraceId();this.logger.info(w.L_UPLOAD_FILE_T,`name: ${n.name}, size: ${n.size}`,c);const{isOk:d,data:u,code:p}=se.FileUploader.create(l);if(!d)return this.logger.warn(w.L_UPLOAD_FILE_R,`code: ${p}`,c),B.fail(p,void 0,o);const m=u;this._uploaderMap.set(s,m);const y=await m.result();return this._uploaderMap.get(s)===m&&this._uploaderMap.delete(s),y.isOk?(this.logger.info(w.L_UPLOAD_FILE_R,"success",c),o.httpUrl=y.data.downloadUrl,B.ok(o)):(this.logger.warn(w.L_UPLOAD_FILE_R,`code: ${y.code}`,c),B.fail(y.code,void 0,o))}_try2CancelExecutingTask(e){const t=this._uploaderMap.get(e);return t?(this._uploaderMap.delete(e),t.stop(),!0):!1}}class z{constructor(e){h(this,"_value"),h(this,"_subscribers",new Set),this._value=e}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._notify())}subscribe(e){return this._subscribers.add(e),()=>this._subscribers.delete(e)}_notify(){this._subscribers.forEach(e=>e())}notify(){this._notify()}}class uh{constructor(e){h(this,"_compute"),h(this,"_cachedValue"),h(this,"_dirty",!0),h(this,"_dependencies",new Set),h(this,"_subscribers",new Set),h(this,"_unsubscribers",[]),h(this,"_manualDependencies",new Set),h(this,"_manualUnsubscribers",[]),this._compute=e}get value(){return this._dirty&&(this._unsubscribers.forEach(e=>e()),this._unsubscribers=[],this._dependencies.clear(),this._cachedValue=this._compute(),this._dirty=!1),this._cachedValue}subscribe(e){return this._subscribers.add(e),()=>this._subscribers.delete(e)}_notify(){this._dirty=!0,this._subscribers.forEach(e=>e())}dependOn(e){if(!this._manualDependencies.has(e)){this._manualDependencies.add(e);const t=e.subscribe(()=>this._notify());this._manualUnsubscribers.push(t)}}}function la(r){return new uh(r)}function ha(r,e,t){let s=r.value;return r.subscribe(()=>{const i=r.value;e(i,s),s=i})}class ph extends EventTarget{constructor(){super(...arguments),h(this,"_lang","en_US"),h(this,"_direction","ltr")}get lang(){return this._lang}get direction(){return this._direction}init(e){e.addEventListener(E.LANGUAGE_CHANGE,t=>{this._lang=t.data.lang,this._direction=t.data.direction,this.dispatchEvent(new CustomEvent("languagechange",{detail:{lang:this._lang,direction:this._direction}}))})}$tt(e,...t){const s=Te[this._lang].entries[e];return s?t.length===0?s:s.replace(/\{\d+\}/g,i=>t[parseInt(i.substring(1,i.length-1),10)].toString()):e}$has(e){return!!Te[this._lang].entries[e]}}const Le=new ph,gh=new z("ltr"),cs=new z("en_US");function mh(r){Le.init(r),Le.addEventListener("languagechange",e=>{cs.value=e.detail.lang,gh.value=e.detail.direction})}function fh(r,...e){const t=la(()=>ke(r,...e));return t.dependOn(cs),t}function ke(r,...e){return cs.value,Le.$tt(r,...e)}function Eh(r){return Le.$has(r)}class V{constructor(e){h(this,"_handleLanguageChange"),this.host=e,this.host.addController(this),this._handleLanguageChange=()=>{this.host.requestUpdate()}}hostConnected(){Le.addEventListener("languagechange",this._handleLanguageChange)}hostDisconnected(){Le.removeEventListener("languagechange",this._handleLanguageChange)}t(e,...t){return Le.$tt(e,...t)}has(e){return Le.$has(e)}get lang(){return Le.lang}get direction(){return Le.direction}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ts=globalThis,Ni=Ts.ShadowRoot&&(Ts.ShadyCSS===void 0||Ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ca=Symbol(),kn=new WeakMap;let _h=class{constructor(r,e,t){if(this._$cssResult$=!0,t!==ca)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=e}get styleSheet(){let r=this.o;const e=this.t;if(Ni&&r===void 0){const t=e!==void 0&&e.length===1;t&&(r=kn.get(e)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),t&&kn.set(e,r))}return r}toString(){return this.cssText}};const Ch=r=>new _h(typeof r=="string"?r:r+"",void 0,ca),vh=(r,e)=>{if(Ni)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=Ts.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Pn=Ni?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ch(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bh,defineProperty:wh,getOwnPropertyDescriptor:yh,getOwnPropertyNames:Sh,getOwnPropertySymbols:xh,getPrototypeOf:Mh}=Object,Rt=globalThis,Hn=Rt.trustedTypes,Th=Hn?Hn.emptyScript:"",Fn=Rt.reactiveElementPolyfillSupport,ss=(r,e)=>r,Ls={toAttribute(r,e){switch(e){case Boolean:r=r?Th:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ki=(r,e)=>!bh(r,e),Gn={attribute:!0,type:String,converter:Ls,reflect:!1,useDefault:!1,hasChanged:ki};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Rt.litPropertyMetadata??(Rt.litPropertyMetadata=new WeakMap);let qt=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,e=Gn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(r,e),!e.noAccessor){const t=Symbol(),s=this.getPropertyDescriptor(r,t,e);s!==void 0&&wh(this.prototype,r,s)}}static getPropertyDescriptor(r,e,t){const{get:s,set:i}=yh(this.prototype,r)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);i==null||i.call(this,n),this.requestUpdate(r,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Gn}static _$Ei(){if(this.hasOwnProperty(ss("elementProperties")))return;const r=Mh(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(ss("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ss("properties"))){const e=this.properties,t=[...Sh(e),...xh(e)];for(const s of t)this.createProperty(s,e[s])}const r=this[Symbol.metadata];if(r!==null){const e=litPropertyMetadata.get(r);if(e!==void 0)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const e=[];if(Array.isArray(r)){const t=new Set(r.flat(1/0).reverse());for(const s of t)e.unshift(Pn(s))}else r!==void 0&&e.push(Pn(r));return e}static _$Eu(r,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var r;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(r=this.constructor.l)==null||r.forEach(e=>e(this))}addController(r){var e;(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&((e=r.hostConnected)==null||e.call(r))}removeController(r){var e;(e=this._$EO)==null||e.delete(r)}_$E_(){const r=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(r.set(t,this[t]),delete this[t]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vh(r,this.constructor.elementStyles),r}connectedCallback(){var r;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$EO)==null||r.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(r,e,t){this._$AK(r,t)}_$ET(r,e){var t;const s=this.constructor.elementProperties.get(r),i=this.constructor._$Eu(r,s);if(i!==void 0&&s.reflect===!0){const n=(((t=s.converter)==null?void 0:t.toAttribute)!==void 0?s.converter:Ls).toAttribute(e,s.type);this._$Em=r,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(r,e){var t,s;const i=this.constructor,n=i._$Eh.get(r);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((t=a.converter)==null?void 0:t.fromAttribute)!==void 0?a.converter:Ls;this._$Em=n;const l=o.fromAttribute(e,a.type);this[n]=l??((s=this._$Ej)==null?void 0:s.get(n))??l,this._$Em=null}}requestUpdate(r,e,t,s=!1,i){var n;if(r!==void 0){const a=this.constructor;if(s===!1&&(i=this[r]),t??(t=a.getPropertyOptions(r)),!((t.hasChanged??ki)(i,e)||t.useDefault&&t.reflect&&i===((n=this._$Ej)==null?void 0:n.get(r))&&!this.hasAttribute(a._$Eu(r,t))))return;this.C(r,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,e,{useDefault:t,reflect:s,wrapped:i},n){t&&!(this._$Ej??(this._$Ej=new Map)).has(r)&&(this._$Ej.set(r,n??e??this[r]),i!==!0||n!==void 0)||(this._$AL.has(r)||(this.hasUpdated||t||(e=void 0),this._$AL.set(r,e)),s===!0&&this._$Em!==r&&(this._$Eq??(this._$Eq=new Set)).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:a}=n,o=this[i];a!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(r){}_$AE(r){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostUpdated)==null?void 0:s.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(r){}firstUpdated(r){}};qt.elementStyles=[],qt.shadowRootOptions={mode:"open"},qt[ss("elementProperties")]=new Map,qt[ss("finalized")]=new Map,Fn==null||Fn({ReactiveElement:qt}),(Rt.reactiveElementVersions??(Rt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rh={attribute:!0,type:String,converter:Ls,reflect:!1,hasChanged:ki},Lh=(r=Rh,e,t)=>{const{kind:s,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),s==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,r,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,r,o),o}}}if(s==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,r,!0,o)}}throw Error("Unsupported decorator location: "+s)};function b(r){return(e,t)=>typeof t=="object"?Lh(r,e,t):((s,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(i,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(r){return b({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ih=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(r,e){return(t,s,i)=>{const n=a=>{var o;return((o=a.renderRoot)==null?void 0:o.querySelector(r))??null};return Ih(t,s,{get(){return n(this)}})}}var Ah=Object.defineProperty,ae=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Ah(e,t,i),i};class J extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"readResizeObserver",null),h(this,"unreadResizeObserver",null),h(this,"handleResize",()=>{this.updateReadScrollbar(),this.updateUnreadScrollbar()}),h(this,"handleClickOutside",e=>{this.visible&&(e.target.closest(".read-receipt-popover")||this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})))})}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize),window.addEventListener("click",this.handleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize),window.removeEventListener("click",this.handleClickOutside),this.cleanupResizeObservers()}updated(e){(e.has("visible")||e.has("readUsers")||e.has("unreadUsers"))&&(this.visible?this.updateComplete.then(()=>{this.initResizeObservers(),this.updateReadScrollbar(),this.updateUnreadScrollbar()}):this.cleanupResizeObservers())}updateReadScrollbar(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".read-receipt-list.read");if(!t)return;const s=t.offsetHeight**2/t.scrollHeight,i=Math.floor(s*100)/100,n=Math.max(i,20),a=i/(t.offsetHeight-i)/(n/(t.offsetHeight-n));this.readRatioY=Math.floor(a*100)/100||1,this.readSizeHeight=i<t.offsetHeight?Math.floor(n):0}updateUnreadScrollbar(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".read-receipt-list.unread");if(!t)return;const s=t.offsetHeight**2/t.scrollHeight,i=Math.floor(s*100)/100,n=Math.max(i,20),a=i/(t.offsetHeight-i)/(n/(t.offsetHeight-n));this.unreadRatioY=Math.floor(a*100)/100||1,this.unreadSizeHeight=i<t.offsetHeight?Math.floor(n):0}initResizeObservers(){var e,t;const s=(e=this.renderRoot)==null?void 0:e.querySelector(".read-receipt-list.read"),i=(t=this.renderRoot)==null?void 0:t.querySelector(".read-receipt-list.unread");s&&!this.readResizeObserver&&(this.readResizeObserver=new ResizeObserver(()=>this.updateReadScrollbar()),this.readResizeObserver.observe(s)),i&&!this.unreadResizeObserver&&(this.unreadResizeObserver=new ResizeObserver(()=>this.updateUnreadScrollbar()),this.unreadResizeObserver.observe(i))}cleanupResizeObservers(){var e,t;(e=this.readResizeObserver)==null||e.disconnect(),this.readResizeObserver=null,(t=this.unreadResizeObserver)==null||t.disconnect(),this.unreadResizeObserver=null}handleReadMove(e){var t;const s=(t=this.renderRoot)==null?void 0:t.querySelector(".read-receipt-list.read");s&&(s.scrollTop=e.detail[0]*s.scrollHeight/100)}handleUnreadMove(e){var t;const s=(t=this.renderRoot)==null?void 0:t.querySelector(".read-receipt-list.unread");s&&(s.scrollTop=e.detail[0]*s.scrollHeight/100)}handleScroll(e,t){if(!(e!=null&&e.target))return;const s=e.target,{scrollHeight:i,offsetHeight:n,scrollTop:a}=s;t==="read"?this.readMoveY=a*100/n*this.readRatioY||0:this.unreadMoveY=a*100/n*this.unreadRatioY||0,this.dispatchEvent(new CustomEvent("read-status-scroll",{bubbles:!0,composed:!0,detail:[{scrollTop:a,scrollHeight:i,clientHeight:n},t]}))}getPopoverStyle(){if(!this.position)return"max-height: 420px;";const e=this.position.anchor||"top-right",t={"top-right":"translateX(-100%)","bottom-right":"translate(-100%, -100%)","top-left":"","top-center":"translateX(-50%)","bottom-center":"translate(-50%, -100%)","bottom-left":"translateY(-100%)"}[e]??"",s=Math.max(0,this.position.maxHeight??420);return`top: ${this.position.top}px; left: ${this.position.left}px; max-height: ${s}px;${t?` transform: ${t};`:""}`}truncateName(e,t=10){return e.length<=t?e:e.substring(0,t)+"..."}timeController(e){const{hour:t,minute:s}=Tt(e);return`${t}:${s}`}render(){var e,t,s,i;if(!this.visible)return O;const n=f(),a=(t=(e=this.renderRoot)==null?void 0:e.querySelector(".read-receipt-list.read"))==null?void 0:t.scrollHeight,o=(i=(s=this.renderRoot)==null?void 0:s.querySelector(".read-receipt-list.unread"))==null?void 0:i.scrollHeight;return g`
      <div class="read-receipt-popover" style=${this.getPopoverStyle()} @click=${l=>l.stopPropagation()}>
        <div class="read-receipt-content">
          <!-- Read list -->
          <div class="read-receipt-column">
            <div class="read-receipt-title">${this.i18n.t("message.list.read-receipt.tooltip.read-count",this.readTotalCount)}</div>
            <div class="read-receipt-list-wrapper">
              <div class="read-receipt-list read" @scroll=${l=>this.handleScroll(l,"read")}>
                <ul class="read-receipt-ul">
                  ${(this.readUsers||[]).map(l=>{const c=n.appData.getUserProfile(l.userId);return g`
                      <li class="read-receipt-item">
                        <nc-icon .url=${c.avatarUrl} radius="50" width="20" height="20" .online=${!1}></nc-icon>
                        <div class="read-receipt-info">
                          <p class="read-receipt-name">${this.truncateName(c.name)}</p>
                          ${l.timestamp?g`<p class="read-receipt-time">${this.timeController(l.timestamp)}</p>`:O}
                        </div>
                      </li>
                    `})}
                </ul>
              </div>
              ${this.readSizeHeight?g`
                <nc-scrollbar-thumb-provider
                  .height=${this.readSizeHeight}
                  .move=${this.readMoveY}
                  .scrollheight=${a}
                  .ratio=${this.readRatioY}
                  @handlemove=${l=>this.handleReadMove(l)}>
                </nc-scrollbar-thumb-provider>
              `:O}
            </div>
          </div>
          <!-- Unread list -->
          <div class="read-receipt-column">
            <div class="read-receipt-title">${this.i18n.t("message.list.read-receipt.tooltip.unread-count",this.unreadTotalCount)}</div>
            <div class="read-receipt-list-wrapper">
              <div class="read-receipt-list unread" @scroll=${l=>this.handleScroll(l,"unread")}>
                <ul class="read-receipt-ul">
                  ${(this.unreadUsers||[]).map(l=>{const c=n.appData.getUserProfile(l.userId);return g`
                      <li class="read-receipt-item">
                        <nc-icon .url=${c.avatarUrl} radius="50" width="20" height="20" .online=${!1}></nc-icon>
                        <div class="read-receipt-info">
                          <p class="read-receipt-name">${this.truncateName(c.name)}</p>
                        </div>
                      </li>
                    `})}
                </ul>
              </div>
              ${this.unreadSizeHeight?g`
                <nc-scrollbar-thumb-provider
                  .height=${this.unreadSizeHeight}
                  .move=${this.unreadMoveY}
                  .scrollheight=${o}
                  .ratio=${this.unreadRatioY}
                  @handlemove=${l=>this.handleUnreadMove(l)}>
                </nc-scrollbar-thumb-provider>
              `:O}
            </div>
          </div>
        </div>
      </div>
    `}}h(J,"styles",R`
    :host { display: block; }
    .read-receipt-popover {
      position: absolute;
      overflow: hidden;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0px 5px 16px 0px #00000014;
      width: 344px;
      z-index: 4;
    }
    .read-receipt-content {
      display: flex;
      flex-direction: row;
      max-height: inherit;
    }
    .read-receipt-column {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #E5E5E5;
    }
    .read-receipt-column:last-child {
      border-right: none;
    }
    .read-receipt-title {
      flex-shrink: 0;
      padding: 15px 12px 6px 12px;
      font-size: 14px;
      color: #0E1012;
    }
    .read-receipt-list-wrapper {
      flex: 1;
      min-height: 0;
      position: relative;
      overflow: hidden;
    }
    .read-receipt-list {
      height: 100%;
      overflow-y: auto;
      padding: 0;
      scrollbar-width: none;
      padding-bottom: 10px;
    }
    .read-receipt-list::-webkit-scrollbar {
      display: none;
    }
    .read-receipt-ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .read-receipt-item {
      display: flex;
      align-items: center;
      padding: 4px 12px;
    }
    .read-receipt-item:last-child {
      border-bottom: none;
    }
    .read-receipt-info {
      margin-left: 4px;
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .read-receipt-name {
      font-size: 12px;
      color: #0E1012;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
    }
    .read-receipt-time {
      color: #85909C;
      font-size: 11px;
      margin: 0;
      flex-shrink: 0;
    }
    .read-receipt-time img {
      width: 12px;
      height: 12px;
    }
  `);ae([b({type:Object})],J.prototype,"message");ae([b({type:Boolean})],J.prototype,"visible");ae([b({type:Array})],J.prototype,"readUsers");ae([b({type:Array})],J.prototype,"unreadUsers");ae([b({type:Number})],J.prototype,"readTotalCount");ae([b({type:Number})],J.prototype,"unreadTotalCount");ae([b({type:Boolean})],J.prototype,"readLoading");ae([b({type:Boolean})],J.prototype,"unreadLoading");ae([b({type:Object})],J.prototype,"position");ae([Z(".read-receipt-list.read")],J.prototype,"readListEl");ae([Z(".read-receipt-list.unread")],J.prototype,"unreadListEl");ae([_()],J.prototype,"readSizeHeight");ae([_()],J.prototype,"readMoveY");ae([_()],J.prototype,"readRatioY");ae([_()],J.prototype,"unreadSizeHeight");ae([_()],J.prototype,"unreadMoveY");ae([_()],J.prototype,"unreadRatioY");var Oh=Object.defineProperty,Pe=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Oh(e,t,i),i};class Se extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"handleMenuClick",e=>{e.stopPropagation(),this.clickHoverMenu=!0,this.dispatchEvent(new CustomEvent("menu-click",{bubbles:!0,composed:!0,detail:[e]}))})}set"status-enable"(e){this.statusEnable=e}set"right-clicked"(e){this.rightClicked=e}connectedCallback(){super.connectedCallback(),this.clickHoverMenu=!1}get hoverMenuActive(){return!!(this.rightClicked&&this.clickHoverMenu)}getItemStyle(){const e=f().channelItem.channelsItemConfig,t=[];e.radius!==void 0&&t.push(`border-radius: ${e.radius}px`);const s=`#${Number(e.activeBackgroundColor).toString(16).padStart(6,"0")}`,i=`#${Number(e.topBackgroundColor).toString(16).padStart(6,"0")}`,n=this.selected?s:`#${Number(e.hoverBackgroundColor).toString(16).padStart(6,"0")}`;return t.push(`--nc-item-selected-bg: ${s}`),t.push(`--nc-item-top-bg: ${i}`),t.push(`--nc-item-hover-bg: ${n}`),t.join("; ")}get avatarSize(){return f().channelItem.channelsItemConfig.portraitSize==="small"?32:40}isShowSentStatusIcon(){var e;if(!this.statusEnable||!((e=this.model)!=null&&e.latestMessage)||this.draft)return!1;const t=f(),s=this.model.latestMessage.sentStatus,i=s===L.FAILED||s===L.SENDING;return(t.store.getCommandSwitch(te.SHOW_MESSAGE_STATE)&&t.isReadReceiptV5&&!i?this.model.channelType!==T.GROUP:!0)?i?!0:!this.model.unreadCount:!1}render(){if(!this.model)return g``;const e=this.model.channelType===T.GROUP,t=this.isShowSentStatusIcon(),s=this.getItemStyle(),i=this.avatarSize,n=["nc-channel-list-item",this.model.isPinned?"active-top":"",this.selected?"active-selected":"",this.rightClicked?"active-right-clicked":""].filter(Boolean).join(" ");return g`
      <div class=${n} style=${s}>
        <div class="nc-channel-list-item-avatar">
          <nc-icon
            class="nc-icon"
            width=${i}
            height=${i}
            radius="50"
            .url=${this.model.avatarUrl}
            .online=${this.model.online}>
          </nc-icon>
        </div>
        <div class="channel-info">
          <div class="info-block" style="align-items: center;">
            <div style="max-width: 50%;">
              <nc-channel-label .name=${this.model.name}></nc-channel-label>
            </div>
            ${this.model.isPinned?g`<nc-channel-pinned-icon></nc-channel-pinned-icon>`:""}
            ${this.model.noDisturbLevel===St.MUTED?g`<nc-channel-muted-icon></nc-channel-muted-icon>`:""}
            <div class="nc-time-icon-container">
              <nc-channel-time class="nc-channel-time" .time=${this.time}></nc-channel-time>
              <div class="hover-menu-icon" @click=${this.handleMenuClick}>
                <img width="16" height="16"
                  .src=${this.hoverMenuActive?Jr:Xr}
                  alt="HOVER_MENU_ICON">
              </div>
            </div>
          </div>
          <div class="info-block">
            ${this.draft?g`
              <div class="nc-chat-ui-channel-draft">
                <span class="draft">${this.i18n.t("channel.draft.msg")}</span>
              </div>
            `:""}
            ${e&&!this.draft?g`
              <div class="nc-chat-ui-channel-group">
                ${this.model.mentionedType?g`<span class="mentioned">${this.i18n.t("channel.mentioned.me.msg")}</span>`:""}
                ${this.name?g`<span>${this.name}: </span>`:""}
              </div>
            `:""}
            ${t?g`
              <nc-message-sent-status
                class="nc-message-sent-status"
                type="1"
                .message=${this.model.latestMessage}>
              </nc-message-sent-status>
            `:""}
            ${this.message||this.model.draft?g`
              <nc-latest-message
                class="nc-latest-message"
                .message=${this.draft?this.model.draft:this.message}
                .mentioned=${this.model.mentionedType}>
              </nc-latest-message>
            `:""}
            ${t?"":g`
              <nc-channel-unread
                .count=${this.model.unreadCount}
                .notification=${this.model.noDisturbLevel}>
              </nc-channel-unread>
            `}
          </div>
        </div>
      </div>
    `}}h(Se,"styles",R`
    :host { display: block; }
    .nc-message-sent-status {
      margin-right: 5px;
      margin-top: 2px;
    }
    .nc-channel-list-item {
      display: flex;
      height: 78px;
      align-items: center;
      padding: 0 14px 0 10px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 6px;
    }
    @media (max-width: 768px) {
      .nc-channel-list-item {
        user-select: none;
        -webkit-user-select: none;
      }
    }
    .nc-channel-list-item-avatar {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    .nc-channel-list-item.active-top {
      background-color: var(--nc-item-top-bg);
    }
    .nc-channel-list-item.active-selected {
      background-color: var(--nc-item-selected-bg);
    }
    .nc-channel-list-item.active-right-clicked {
      background-color: #F1F1F1 !important;
    }
    .nc-channel-list-item:hover {
      background-color: var(--nc-item-hover-bg);
    }
    .nc-channel-list-item .channel-info {
      margin-left: 8px;
      flex: 1 1 auto;
      overflow: hidden;
      height: 44px;
    }
    .nc-channel-list-item .channel-info .info-block {
      font-size: 12px;
      display: flex;
    }
    .nc-latest-message {
      flex: 1;
      overflow: hidden;
      min-height: 18px;
      margin: 4px 15px 0 0;
    }
    .nc-icon {
      position: relative;
      font-size: 0px;
    }
    .nc-chat-ui-channel-group {
      color: #7C838E;
      line-height: 18px;
      margin-top: 4px;
    }
    .mentioned {
      color: #D45F5F;
      margin-right: 5px;
    }
    .nc-chat-ui-channel-draft {
      margin-top: 4px;
    }
    .nc-chat-ui-channel-draft .draft {
      color: #D45F5F;
      margin-right: 5px;
    }
    .nc-time-icon-container {
      display: flex;
      justify-content: flex-end;
      min-width: 16px;
      margin-left: auto;
    }
    .hover-menu-icon {
      display: none;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
    @media (min-width: 769px) {
      .nc-channel-list-item:hover .hover-menu-icon,
      .nc-channel-list-item.active-right-clicked .hover-menu-icon {
        display: block;
      }
      .nc-channel-list-item:hover .nc-channel-time,
      .nc-channel-list-item.active-right-clicked .nc-channel-time {
        display: none;
      }
    }
  `);Pe([b({type:String})],Se.prototype,"message");Pe([b({type:String})],Se.prototype,"time");Pe([b({type:Object})],Se.prototype,"model");Pe([b({type:Boolean})],Se.prototype,"statusEnable");Pe([b({type:String})],Se.prototype,"name");Pe([b({type:Boolean})],Se.prototype,"draft");Pe([b({type:Boolean})],Se.prototype,"selected");Pe([b({attribute:"right-clicked",type:Boolean})],Se.prototype,"rightClicked");Pe([_()],Se.prototype,"clickHoverMenu");var $h=Object.defineProperty,ds=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&$h(e,t,i),i};class ct extends M{render(){return g`
      <div class="nc-icon-image-wrap">
        <img src="${this.url}" alt="icon" />
      </div>
      ${this.online?g`<span class="nc-icon-online"></span>`:""}
    `}updated(){this.style.width=`${this.width}px`,this.style.height=`${this.height}px`,this.style.borderRadius=`${this.radius}%`}}h(ct,"styles",R`
    :host {
      display: block;
      font-size: 0;
      position: relative;
      overflow: visible;
    }
    .nc-icon-image-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: inherit;
    }
    img {
      border: none;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
    .nc-icon-online {
      display: block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #46db7a;
      border: 0.8px solid #ffffff;
      position: absolute;
      right: 0;
      bottom: 5px;
      box-sizing: border-box;
    }
  `);ds([b({type:String})],ct.prototype,"url");ds([b({type:Boolean})],ct.prototype,"online");ds([b({type:Number})],ct.prototype,"width");ds([b({type:Number})],ct.prototype,"height");ds([b({type:Number})],ct.prototype,"radius");class da extends M{render(){return g`<img src="${H1}" alt="icon-notification">`}}h(da,"styles",R`
    :host {
      margin-left: 5px;
      display: flex;
      align-items: center;
    }
  `);class ua extends M{render(){return g`<img src="${F1}" alt="icon-top">`}}h(ua,"styles",R`
    :host {
      margin-left: 5px;
      display: flex;
      align-items: center;
    }
  `);var Uh=Object.defineProperty,Dh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Uh(e,t,i),i};class Pi extends M{render(){return g`${this.name}`}}h(Pi,"styles",R`
    :host {
      color: #41464F;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      display: block;
    }
  `);Dh([b({type:String})],Pi.prototype,"name");var Nh=Object.defineProperty,kh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Nh(e,t,i),i};class Hi extends M{render(){return g`<span>${this.message}</span>`}}h(Hi,"styles",R`
    :host {
      color: #7C838E;
      font-weight: 400;
      font-size: 12px;
      display: flex;
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      line-height: 18px;
      word-break: break-all;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  `);kh([b({type:String})],Hi.prototype,"message");var Ph=Object.defineProperty,pa=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Ph(e,t,i),i};class ks extends M{displayCount(){return this.count>99?"99+":String(this.count)}render(){return this.count?g`
      <div class="unread-box ${this.notification===5?"muted":""}">
        <span class="message-count ${this.count>99?"overflow":""}">
          ${this.count?this.displayCount():""}
        </span>
      </div>
    `:g``}}h(ks,"styles",R`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;
    }
    .unread-box {
      background-color: #FF5A50;
      font-size: 10px;
      color: #fff;
      border-radius: 12px;
      text-align: center;
    }
    .unread-box.muted {
      background-color: #E4E8EF;
      color: #41464F;
    }
    .message-count {
      display: block;
      line-height: 16px;
      min-width: 16px;
      height: 16px;
    }
    .message-count.overflow {
      padding: 0 5px;
    }
  `);pa([b({type:Number})],ks.prototype,"count");pa([b({type:Number})],ks.prototype,"notification");var Hh=Object.defineProperty,Fi=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Hh(e,t,i),i};class us extends M{render(){return g`
      <img src="${this.icon}" alt="Icon">
      <div class="content"><span>${this.label}</span></div>
    `}}h(us,"styles",R`
    :host {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 5px 6px;
      border-radius: 4px;
      cursor: pointer;
    }
    :host(:hover) {
      background-color: #D2E1FE;
    }
    .content {
      flex: auto;
      padding-left: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `);Fi([b({type:String})],us.prototype,"id");Fi([b({type:String})],us.prototype,"icon");Fi([b({type:String})],us.prototype,"label");var Fh=Object.defineProperty,Gh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Fh(e,t,i),i};class Gi extends M{render(){return g`<img src="${na}" alt="No Channels Available"><span>${this.desc}</span>`}}h(Gi,"styles",R`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 24px;
      background: #fcfcfc;
      color: #b3b3b3;
      font-size: 16px;
    }
    img {
      margin-bottom: 10px;
      width: 60px;
      height: 60px;
    }
  `);Gh([b({type:String})],Gi.prototype,"desc");var Bh=Object.defineProperty,Vh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Bh(e,t,i),i};class Bi extends M{render(){return g`<img src="${na}" alt="empty"><span>${this.desc}</span>`}}h(Bi,"styles",R`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 24px;
      background: #FFFFFF;
      color: #b3b3b3;
      font-size: 16px;
    }
    img {
      margin-bottom: 10px;
      width: 60px;
      height: 60px;
    }
  `);Vh([b({type:String})],Bi.prototype,"desc");var zh=Object.defineProperty,Vi=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&zh(e,t,i),i};class ps extends M{render(){return g`
      <img src="${this.icon}" alt="icon">
      <div class="content"><span>${this.label}</span></div>
    `}}h(ps,"styles",R`
    :host {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 30px;
      font-size: 12px;
      line-height: 18px;
      padding: 6px;
      border-radius: 5px;
      cursor: pointer;
    }
    :host(:hover) {
      background-color: #D2E1FE;
    }
    img {
      display: block;
      flex: 0 0 18px;
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
    .content {
      flex: auto;
      padding-left: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `);Vi([b({type:String})],ps.prototype,"id");Vi([b({type:String})],ps.prototype,"icon");Vi([b({type:String})],ps.prototype,"label");var jh=Object.defineProperty,qh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&jh(e,t,i),i};class zi extends M{render(){return g`<span>${this.time}</span>`}}h(zi,"styles",R`
    :host {
      display: block;
      text-align: center;
      margin-bottom: 10px;
    }
    span {
      display: inline-block;
      font-size: 12px;
      line-height: 20px;
      padding: 0 12px;
      color: #7C838E;
      border-radius: 20px;
    }
  `);qh([b({type:String})],zi.prototype,"time");var Zh=Object.defineProperty,ga=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Zh(e,t,i),i};class Ps extends M{connectedCallback(){super.connectedCallback(),this.updateHostClass()}updated(){this.updateHostClass()}updateHostClass(){this.classList.toggle("top",this.direction===0),this.classList.toggle("bottom",this.direction===1)}handleClick(){this.dispatchEvent(new CustomEvent("location",{bubbles:!0,composed:!0}))}render(){return g`
      ${this.direction===0?g`
        <div class="forward-icon" @click="${this.handleClick}">
          <img style="transform: rotate(180deg);" src="${Dn}" alt="TRIANGLE_ICON">
        </div>`:""}
      <div class="count">${this.count}</div>
      ${this.direction===1?g`
        <div class="forward-icon" @click="${this.handleClick}">
          <img src="${Dn}" alt="TRIANGLE_ICON">
        </div>`:""}
    `}}h(Ps,"styles",R`
    :host {
      position: absolute;
      right: 16px;
      background-color: #FFFFFF;
      border-radius: 20px;
    }
    :host(.top) {
      top: 30px;
    }
    :host(.bottom) {
      bottom: 30px;
    }
    div {
      font-size: 16px;
      line-height: 33px;
      text-align: center;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      box-sizing: border-box;
      margin: 3px;
      overflow: hidden;
    }
    .count {
      color: #FFFFFF;
      background-color: #0099FF;
    }
    .forward-icon {
      border: 1px solid #0099FF;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `);ga([b({type:Number})],Ps.prototype,"count");ga([b({type:Number})],Ps.prototype,"direction");var Wh=Object.defineProperty,Kh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Wh(e,t,i),i};class ji extends M{render(){return g`<span>${this.time}</span>`}}h(ji,"styles",R`
    :host {
      color: #A1A1A1;
      font-weight: 400;
      font-size: 12px;
      line-height: 19px;
      flex: 1;
      text-align: right;
    }
  `);Kh([b({type:String})],ji.prototype,"time");class ma extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}render(){return g`<span>${this.i18n.t("channel.loading.msg")}</span>`}}h(ma,"styles",R`
    :host {
      display: block;
      height: 30px;
    }
    span {
      display: block;
      text-align: center;
      line-height: 30px;
    }
  `);class fa extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}render(){return g`<p>${this.i18n.t("message-type.unknown")}</p>`}}h(fa,"styles",R`
    p {
      margin: 0;
      padding: 0;
      word-break: break-word;
    }
  `);var Yh=Object.defineProperty,Qh=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Yh(e,t,i),i};class qi extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}handleLinkClick(e,t){const s=t.trim();this.dispatchEvent(new CustomEvent("link",{detail:{type:e,address:s},bubbles:!0,composed:!0}))}render(){var e,t,s,i,n;const a=No(((t=(e=this.message)==null?void 0:e.content)==null?void 0:t.text)||""),o=((s=this.message)==null?void 0:s.editTimestamp)!==void 0?g`<span class="edited-marker">(${this.i18n.t("message.edit.edited")})</span>`:"";return a.type===0?g`<p>${((n=(i=this.message)==null?void 0:i.content)==null?void 0:n.text)||""}${o}</p>`:g`<p>${a.content.map((l,c)=>{if(a.position.includes(c+1)){const d=l.content,u=l.type==="mail"?`mailto:${d}`:d;return g`<a
          href=${u}
          rel=${l.type==="url"?"noopener noreferrer":void 0}
          target=${l.type==="url"?"_blank":void 0}
          @click=${p=>{p.preventDefault(),this.handleLinkClick(l.type,d)}}
          >${d}</a>`}return g`<span>${l.content}</span>`})}${o}</p>`}}h(qi,"styles",R`
    p {
      margin: 0;
      word-break: break-word;
      font-size: 14px;
      line-height: 22px;
      white-space: pre-wrap;
    }
    a {
      color: #020814;
    }
    a:hover {
      color: #0047FF;
    }
    .edited-marker {
      margin-left: 4px;
      color: #7C838E;
      font-size: 12px;
      white-space: nowrap;
      -webkit-user-select: none;
      user-select: none;
    }
  `);Qh([b({type:Object})],qi.prototype,"message");var Xh=Object.defineProperty,Ea=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Xh(e,t,i),i};class Hs extends M{constructor(){super(...arguments),h(this,"toggleState",()=>{var e;(e=this.value)==null||e.toggle()})}connectedCallback(){super.connectedCallback(),this.processLines=new Array(20).fill(0).map(()=>(Math.floor(Math.random()*9)+3)*2)}get runIndex(){return Math.floor(this.value.progress/100*20)||-1}get btnIcon(){var e;return(e=this.value)!=null&&e.playing?K1:W1}render(){if(!this.value)return O;const{duration:e}=this.value;return g`
      <div>
        <div class="voice">
          <img .src=${this.btnIcon} alt="Button Icon" class="control" @click=${this.toggleState} />
          <div class="progress">
            ${this.processLines.map((t,s)=>g`
              <div class="line ${this.runIndex>=s?"active":""}" style="height: ${t}px;"></div>
            `)}
          </div>
          <div class="time">${e}s</div>
        </div>
      </div>
    `}}h(Hs,"styles",R`
    :host {
      display: block;
      max-width: 100%;
      min-width: 0;
    }
    .voice {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }
    .control {
      width: 20px;
      height: 20px;
      flex: 0 0 20px;
      cursor: pointer;
    }
    .progress {
      width: 160px;
      height: 22px;
      display: flex;
      align-items: center;
      flex: 0 1 auto;
      min-width: 0;
    }
    .line {
      /* Scale the original 5px spacing with the 160px waveform width. */
      margin-right: 3.125%;
      width: 3px;
      min-width: 0;
      flex: 1 1 3px;
      animation: bounce-in 2s;
      background: #020814;
    }
    .line.active {
      transition: all 0.5s;
      background: #0047FF;
    }
    .time {
      font-size: 14px;
      flex: 0 0 auto;
      white-space: nowrap;
    }
  `);Ea([b({type:Object})],Hs.prototype,"value");Ea([_()],Hs.prototype,"processLines");var Jh=Object.defineProperty,ec=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Jh(e,t,i),i};class Zi extends M{adjustScroll(){f().dispatchEvent(new v(E.ADJUST_MESSAGE_LIST_SCROLL))}render(){var e,t;return g`
      <nc-file-transfer-ctrl-provider .message=${this.message}>
        <img class="thumbnail"
          src="${Nr((t=(e=this.message)==null?void 0:e.content)==null?void 0:t.thumbnailBase64)}"
          alt="Image"
          @load=${()=>this.adjustScroll()}
          @error=${()=>this.adjustScroll()}
        />
        <div slot="marked" class="marked"></div>
      </nc-file-transfer-ctrl-provider>
    `}}h(Zi,"styles",R`
    :host {
      display: block;
      max-width: 100%;
    }
    .thumbnail, .marked {
      width: 247px;
      max-width: 100%;
      max-height: 400px;
      height: auto;
      box-sizing: border-box;
      border-radius: 10px;
      border: 1px solid #E4E7ED;
    }
    .marked {
      background-color: rgba(0, 0, 0, .6);
      height: 100%;
    }
  `);ec([b({type:Object})],Zi.prototype,"message");var tc=Object.defineProperty,Wi=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&tc(e,t,i),i};class gs extends M{constructor(){super(...arguments),h(this,"imgEl"),h(this,"objectUrl")}adjustScroll(){f().dispatchEvent(new v(E.ADJUST_MESSAGE_LIST_SCROLL))}handleError(){this.imgEl.src=mi,this.adjustScroll()}connectedCallback(){super.connectedCallback(),this.objectUrl=this.message.file?window.URL.createObjectURL(this.message.file):void 0,this.url=this.objectUrl??this.message.content.remoteUrl}disconnectedCallback(){super.disconnectedCallback(),this.objectUrl&&(window.URL.revokeObjectURL(this.objectUrl),this.objectUrl=void 0)}render(){return g`
      <nc-file-transfer-ctrl-provider .message=${this.message}>
        <div class="gif-message-box">
          <img src="${this.url}"
            alt="Gif Image"
            @load=${()=>this.adjustScroll()}
            @error=${()=>this.handleError()}
          />
        </div>
      </nc-file-transfer-ctrl-provider>
    `}}h(gs,"styles",R`
    :host {
      display: block;
      max-width: 100%;
    }
    .gif-message-box {
      width: 247px;
      max-width: 100%;
      aspect-ratio: 1;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 1px solid #E4E7ED;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  `);Wi([b({type:Object})],gs.prototype,"message");Wi([Z("img")],gs.prototype,"imgEl");Wi([_()],gs.prototype,"url");var sc=Object.defineProperty,ic=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&sc(e,t,i),i};class Ki extends M{adjustScroll(){f().dispatchEvent(new v(E.ADJUST_MESSAGE_LIST_SCROLL))}render(){var e,t,s,i,n,a;const o=`data:image/png;base64,${(t=(e=this.message)==null?void 0:e.content)==null?void 0:t.thumbnailBase64}`,l=Uo(Math.floor((i=(s=this.message)==null?void 0:s.content)==null?void 0:i.duration));return g`
      <nc-file-transfer-ctrl-provider .message=${this.message}>
        <div class="wraper">
          <img src="${o}" alt="${(a=(n=this.message)==null?void 0:n.content)==null?void 0:a.name}"
            @load=${()=>this.adjustScroll()}
            @error=${()=>this.adjustScroll()}
          />
          <div class="sight-mask">
            <img class="play-icon" src="${Y1}" alt="play" />
          </div>
          <span class="time">${l}</span>
        </div>
        <div slot="marked" class="marked"></div>
      </nc-file-transfer-ctrl-provider>
    `}}h(Ki,"styles",R`
    :host {
      display: block;
      width: fit-content;
      max-width: 100%;
    }
    .wraper {
      position: relative;
      display: block;
      /* A fixed cap also constrains the bubble's intrinsic width before percentage sizes resolve. */
      max-width: 200px;
    }
    .wraper .time {
      position: absolute;
      bottom: 8px;
      right: 6px;
      color: #fff;
      font-size: 14px;
      z-index: 2;
    }
    .wraper > img {
      display: block;
      max-width: 100%;
      height: auto;
      box-sizing: border-box;
      border-radius: 10px;
      border: 1px solid #E4E7ED;
    }
    .sight-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000080;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      z-index: 1;
    }
    .play-icon {
      width: 36px;
      height: 36px;
      border: none;
    }
    .marked {
      background-color: rgba(0, 0, 0, .6);
      height: 100%;
    }
  `);ic([b({type:Object})],Ki.prototype,"message");var nc=Object.defineProperty,rc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&nc(e,t,i),i};class Yi extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}handleClick(){this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0}))}render(){const e=this.selected?this.i18n.t("message.list.select"):this.i18n.t("message.list.unselect");return g`
      <div class="nc-chatui-select">
        <span class="line"></span>
        <span class="btn" @click=${this.handleClick}>${e}</span>
      </div>
    `}}h(Yi,"styles",R`
    :host {
      display: block;
    }
    .line {
      display: block;
      width: 100%;
      border: 1px dashed #E4E7ED;
    }
    .btn {
      position: absolute;
      padding: 0 12px;
      line-height: 34px;
      color: #41464F;
      background-color: #E3E7EF;
      border-radius: 10px;
      font-size: 14px;
      display: inline-block;
      margin-left: 68px;
      z-index: 2;
      top: -16px;
      cursor: pointer;
    }
  `);rc([b({type:Boolean})],Yi.prototype,"selected");var ac=Object.defineProperty,oc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&ac(e,t,i),i};class Qi extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}getReferenceContent(e){const{messageType:t,content:s}=e;switch(t){case C.IMAGE:return this.i18n.t("message-type.RC:ImgMsg");case C.GIF:return this.i18n.t("message-type.RC:GIFMsg");case C.SHORT_VIDEO:return this.i18n.t("message-type.RC:SightMsg");case C.FILE:return this.i18n.t("message-type.RC:FileMsg");case C.HD_VOICE:return this.i18n.t("message-type.RC:HQVCMsg");case C.TEXT:case C.REFERENCE:return s.text??"";default:return this.i18n.t("message-type.unknown")}}render(){const{content:e,direction:t,message:s}=this.message,i=se.unwrapReferenceMessage(s),n=e.referMsgStatus,a=n===we.DELETE||n===we.RECALLED,o=n===we.MODIFIED,{content:l,messageType:c}=i,d=t===ue.SEND,u=d?"#fff":"#f5f5f5",p=[C.IMAGE,C.GIF,C.SHORT_VIDEO].includes(c),m=`${this.i18n.t("input.reply.prefix")} ${e.referMsgSenderId}`;return g`
      <div>
        <div class="reference-box ${a?"reference-unavailable":""}" style="border-color: ${u}">
          <div class="header"></div>
          <div class="right">
            <div class="content">
              ${e.referMsgType===C.HD_VOICE?g`
                <img src="${d?Z1:q1}" alt="">
              `:""}
              <div class="message-desc">
                <div class="desc">
                  <div class="reply-prefix">${m}:</div>
                  ${a?g`<div class="desc-text">${this.i18n.t("message.reference.deleted")}</div>`:p?"":g`
                      <div class="desc-text">
                        <span>${this.getReferenceContent(i)}</span>
                        ${c===C.FILE?g`<span>${l==null?void 0:l.name}</span>`:""}
                      </div>
                      ${o?g`<span class="edited-marker">(${this.i18n.t("message.reference.edited")})</span>`:""}`}
                  ${p&&!a?g`<img class="thumbnail" src="${Nr(l==null?void 0:l.thumbnailBase64)}" alt="Thumbnail Image">`:""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reference-hr-line"></div>
        <div class="reference-content">${e.text}${this.message.editTimestamp!==void 0?g`<span class="edited-marker">(${this.i18n.t("message.edit.edited")})</span>`:""}</div>
      </div>
    `}}h(Qi,"styles",R`
    .reference-box {
      padding: 20px;
      display: flex;
      min-width: 0;
    }
    .reference-box .header {
      border: 1px solid #020814;
      margin: 4px 5px 4px 0;
    }
    .reference-box .right {
      flex: 1;
      min-width: 0;
    }
    .reference-box .content {
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #020814;
      min-width: 0;
    }
    .reference-box.reference-unavailable .content,
    .reference-box.reference-unavailable .desc {
      color: #7C838E;
    }
    .reference-box .content > img {
      flex-shrink: 0;
    }
    .reference-content {
      word-break: break-word;
      font-size: 14px;
      line-height: 22px;
      white-space: pre-wrap;
      padding: 4px 20px 20px 20px;
    }
    .edited-marker {
      margin-left: 4px;
      color: #7C838E;
      font-size: 12px;
      white-space: nowrap;
      -webkit-user-select: none;
      user-select: none;
    }
    .reference-hr-line {
      border: 1px solid #0000001A;
      margin: 0 10px;
    }
    .message-desc {
      flex: 1;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      max-width: 100%;
      padding-right: 10px;
      margin-left: 4px;
      overflow: hidden;
      min-width: 0;
    }
    .desc {
      color: #020814;
      width: 100%;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 4px;
      overflow: hidden;
    }
    .reply-prefix {
      flex-shrink: 0;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc > .edited-marker {
      flex-shrink: 0;
      margin-left: 0;
    }
    .thumbnail {
      flex-shrink: 0;
      height: 36px;
      width: auto;
      max-width: 100px;
      border: none;
      padding: 0;
      box-sizing: border-box;
      object-fit: contain;
      vertical-align: middle;
    }
  `);oc([b({type:Object})],Qi.prototype,"message");var lc=Object.defineProperty,_a=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&lc(e,t,i),i};class Fs extends M{constructor(){super(...arguments),h(this,"isH5",!1),h(this,"checkDevice",()=>{const e=Ee();e!==this.isH5&&(this.isH5=e,this.requestUpdate())})}connectedCallback(){super.connectedCallback(),this.checkDevice(),window.addEventListener("resize",this.checkDevice)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.checkDevice)}get dialogStyle(){const e={width:this.isH5?"var(--nc-chatui-modal-mobile-width, 80%)":`${this.width}px`,margin:this.isH5?"0 auto":""},t=this.width_height??-1;return t!==-1&&(e.height=`${t}px`),Object.entries(e).map(([s,i])=>i?`${s}:${i}`:"").filter(Boolean).join(";")}render(){return g`
      <div class="nc-chatui-modal-dialog"
        style="${this.dialogStyle}"
        @click=${e=>e.stopPropagation()}
      >
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    `}}h(Fs,"styles",R`
    :host {
      display: block;
    }
    .nc-chatui-modal-dialog {
      background-color: #fff;
      border-radius: 5px;
    }
  `);_a([b({type:Number})],Fs.prototype,"width");_a([b({type:Number})],Fs.prototype,"width_height");var nt=(r=>(r.STANDARD="standard",r.EDGE_TO_EDGE="edge-to-edge",r.ADAPTIVE="adaptive",r))(nt||{});const hc=r=>{switch(r){case"edge-to-edge":case"adaptive":return r;default:return"standard"}},cc=(r=!1)=>r?"edge-to-edge":"standard",dc=(r,e,t)=>{const s=hc(r);return s==="edge-to-edge"?!1:s==="adaptive"?t:!0};var uc=Object.defineProperty,_e=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&uc(e,t,i),i};const pc=["time.format.sunday","time.format.monday","time.format.tueday","time.format.wedday","time.format.thurday","time.format.friday","time.format.satday"];class he extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}set"bubble-color-style"(e){this.bubbleColorStyle=e}set"menu-active"(e){this.menuActive=e}set"is-h5"(e){this.isH5=e}set"is-item-hover"(e){this.isItemHover=e}set"reaction-enabled"(e){this.reactionEnabled=e}set"reaction-board-active"(e){this.reactionBoardActive=e}set"show-sent-status"(e){this.showSentStatus=e}timeController(e){const{year:t,month:s,day:i,hour:n,minute:a,weekDay:o}=Tt(e),l=new Date,c=new Date(e);if(l.toDateString()===c.toDateString())return`${n}:${a}`;const d=new Date(l);if(d.setDate(d.getDate()-1),d.toDateString()===c.toDateString())return`${this.i18n.t("time.format.yesterday")} ${n}:${a}`;if(l.getFullYear()===c.getFullYear()){const u=new Date(l);return u.setDate(u.getDate()-7),c>u?`${this.i18n.t(pc[o])} ${n}:${a}`:`${s}/${i} ${n}:${a}`}return`${t}/${s}/${i}`}handleMenuClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("menu-click",{bubbles:!0,composed:!0,detail:[e]}))}handleReactionClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("reaction-click",{bubbles:!0,composed:!0,detail:[e]}))}render(){var e,t;if(!this.message)return g``;const s=this.message.sentTime?this.timeController(this.message.sentTime):"",i=!!this.align,n=this.menuActive||this.reactionBoardActive||this.isItemHover,a=!!this.reactionEnabled&&this.message.reactions.length>0,o=dc(this.contentLayout,!1,a);return g`
      <div class="nc-message-bubble-root ${i?"nc-message-bubble-align-right":""}">
        <p class="name ${i?"align":""}">
          ${this.showname?g`<span class="nickname">${((e=this.profile)==null?void 0:e.nickname)||((t=this.profile)==null?void 0:t.name)}</span>`:""}
          <span class="time">${s}</span>
        </p>
        <div class="message-content-wrapper">
          <div class="message-body-wrapper" style=${this.bubbleColorStyle?`color:${this.bubbleColorStyle.color};background-color:${this.bubbleColorStyle.backgroundColor};border-radius:${this.bubbleColorStyle.borderRadius}`:""}>
            <div class="message-content-region ${o?"message-content-region-inset":""} ${a?"message-content-region-with-reactions":""}">
              <slot></slot>
            </div>
            ${a?g`
              <div class="message-reactions-region">
                <nc-message-reactions-provider
                  .reactions=${this.message.reactions}
                  .message=${this.message}
                  .align=${this.align}
                ></nc-message-reactions-provider>
              </div>
            `:""}
          </div>
          <div class="message-actions-wrapper">
            ${this.isH5?"":g`
              <div class="hover-menu-icons ${n?"hover-menu-icons-active":""}">
                <img
                  src=${this.menuActive||this.isHovering?Jr:Xr}
                  alt="Menu"
                  @click=${l=>this.handleMenuClick(l)}
                  @mouseenter=${()=>{this.isHovering=!0}}
                  @mouseleave=${()=>{this.isHovering=!1}}
                >
                ${this.reactionEnabled&&this.message.sentStatus===L.SENT?g`
                  <img
                    src=${this.reactionBoardActive||this.isHoveringReaction?t1:e1}
                    alt="Reaction"
                    @click=${l=>this.handleReactionClick(l)}
                    @mouseenter=${()=>{this.isHoveringReaction=!0}}
                    @mouseleave=${()=>{this.isHoveringReaction=!1}}
                  >
                  `:""}
              </div>
            `}
            ${this.showSentStatus?g`
              <nc-message-sent-status
                class="nc-chatui-msg-sent-status"
                .type=${0}
                .message=${this.message}
              ></nc-message-sent-status>
            `:""}
          </div>
        </div>
      </div>
    `}}h(he,"styles",R`
    :host {
      display: block;
    }
    .nc-message-bubble-root {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 100%;
    }
    .nc-message-bubble-align-right {
      align-items: flex-end;
    }
    p {
      margin: 0 0 5px 0;
      line-height: 16px;
      padding: 0;
      word-break: break-word;
    }
    .message-body-wrapper {
      font-size: 14px;
      min-width: 0;
      max-width: 100%;
      flex: 1 1 auto;
    }
    .message-content-region {
      min-width: 0;
      max-width: 100%;
      box-sizing: border-box;
    }
    .message-content-region-inset {
      padding: 20px;
    }
    .message-content-region-inset.message-content-region-with-reactions {
      padding-bottom: 0;
    }
    .message-reactions-region {
      margin-top: 12px;
      padding: 0 20px 20px;
    }
    .name {
      font-size: 12px;
      color: #41464F;
      max-width: 100%;
    }
    .nickname {
      margin-right: 8px;
    }
    .align {
      text-align: right;
    }
    .time {
      display: inline-block;
      font-weight: normal;
      color: #7C838E;
    }
    .message-content-wrapper {
      display: flex;
      align-items: flex-start;
      max-width: 100%;
    }
    .nc-message-bubble-align-right .message-content-wrapper {
      flex-direction: row-reverse;
    }
    .message-actions-wrapper {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      justify-content: flex-start;
      align-items: flex-start;
      flex-shrink: 0;
      margin: 0 4px;
    }
    .nc-message-bubble-align-right .message-actions-wrapper {
      align-items: flex-end;
    }
    .hover-menu-icons {
      visibility: hidden;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      margin: 0;
    }
    .hover-menu-icons img {
      width: 20px;
      height: 20px;
    }
    .nc-chatui-msg-sent-status {
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: auto;
    }
    .nc-message-bubble-root:hover .hover-menu-icons,
    .hover-menu-icons-active {
      visibility: visible;
    }
  `);_e([b({type:Boolean})],he.prototype,"showname");_e([b({type:Boolean})],he.prototype,"align");_e([b({type:Object})],he.prototype,"message");_e([b({type:Object})],he.prototype,"profile");_e([b({type:Object})],he.prototype,"bubbleColorStyle");_e([b({type:String})],he.prototype,"contentLayout");_e([b({type:Boolean})],he.prototype,"menuActive");_e([b({type:Boolean})],he.prototype,"isH5");_e([b({type:Boolean})],he.prototype,"isItemHover");_e([b({type:Boolean})],he.prototype,"reactionEnabled");_e([b({type:Boolean})],he.prototype,"reactionBoardActive");_e([b({type:Boolean})],he.prototype,"showSentStatus");_e([_()],he.prototype,"isHovering");_e([_()],he.prototype,"isHoveringReaction");var gc=Object.defineProperty,mc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&gc(e,t,i),i};const fc=12,Ec=10,Bn=Intl.Segmenter,Vn=Bn?new Bn(void 0,{granularity:"grapheme"}):void 0,_c=r=>{const e=Vn?Array.from(Vn.segment(r),({segment:n})=>n):Array.from(r),t=e.lastIndexOf("."),s=e.length-t-1,i=t>0&&s>0&&s<=Ec?t-1:Math.max(0,e.length-fc);return{prefix:e.slice(0,i).join(""),tail:e.slice(i).join("")}};class Xi extends M{render(){if(!this.message)return g``;const e=this.message.content,t=e.name??"",{prefix:s,tail:i}=_c(t);return g`
      <div class="file-message">
        <div class="icon">
          <nc-file-transfer-ctrl-provider .message=${this.message}>
            <img class="file-message-icon" src=${Wl(e.name??"")} alt="File Icon">
          </nc-file-transfer-ctrl-provider>
        </div>
        <div class="desc">
          <div class="name" title=${t}>
            <span class="name-prefix">${s}</span><span class="name-tail">${i}</span>
          </div>
          <span class="size">${Do(e.size)}</span>
        </div>
      </div>
    `}}h(Xi,"styles",R`
    :host {
      display: block;
      width: max-content;
      min-width: 0;
      max-width: 100%;
    }
    .file-message {
      display: flex;
      align-items: center;
      min-width: 0;
      max-width: 100%;
    }
    .icon {
      position: relative;
      width: 44px;
      height: 44px;
      flex-shrink: 0;
    }
    .file-message-icon {
      width: 44px;
      height: 44px;
      display: block;
      object-fit: contain;
    }
    .desc {
      flex: 1 1 auto;
      min-width: 0;
      max-width: 372px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 18px;
      padding: 0 6px;
    }
    .name {
      display: flex;
      max-width: 360px;
      min-width: 0;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      color: #020814;
    }
    .name-prefix {
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .name-tail {
      flex: 0 0 auto;
    }
    @media (max-width: 768px) {
      .desc {
        max-width: 212px;
      }
      .name {
        max-width: 200px;
      }
    }
    .size {
      color: #7C838E;
    }
  `);mc([b({type:Object})],Xi.prototype,"message");var Cc=Object.defineProperty,vc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Cc(e,t,i),i};class Ji extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}get combineTitle(){var e;const t=(e=this.message)==null?void 0:e.content;if(!t)return"";const{channelType:s,nameList:i}=t;return!s||!i?"":s===T.DIRECT?i.length===2?this.i18n.t("private.combine-msg.title",...i):this.i18n.t("private.combine-msg.signal.title",...i):this.i18n.t("group.combine-msg.title")}render(){if(!this.message)return g``;const e=(this.message.content.summaryList||[]).map(t=>t.replace(/\n/g," ")).slice(0,4).join(`
`);return g`
      <div class="combine-message">
        <div class="title">${this.combineTitle}</div>
        <pre class="summary-content">${e}</pre>
        <div class="separator">
          <div>${this.i18n.t("combine-msg.chat-record")}</div>
        </div>
      </div>
    `}}h(Ji,"styles",R`
    :host {
      display: block;
    }
    .title {
      font-size: 16px;
      padding-bottom: 12px;
      max-width: 350px;
      word-wrap: break-word;
      word-break: break-all;
      text-overflow: ellipsis;
      color: #020814;
    }
    .summary-content {
      font-family: inherit;
      font-size: 14px;
      line-height: 20px;
      color: #41464F;
      max-width: 350px;
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .separator {
      border-top: 1px solid #E4E7ED;
      padding-top: 20px;
      margin-top: 10px;
      font-size: 14px;
      color: #41464F;
    }
  `);vc([b({type:Object})],Ji.prototype,"message");var bc=Object.defineProperty,en=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&bc(e,t,i),i};class ms extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}get isConnecting(){return this.status===q.CONNECTING||this.status===q.SUSPENDED}get content(){switch(this.status){case q.CONNECTING:case q.SUSPENDED:return this.i18n.t("connection.status.connecting");case q.DISCONNECTED:return this.i18n.t("connection.status.disconnected");case q.CONNECTED:return"";default:return""}}get statusClass(){return this.isConnecting?"is-warning":"is-error"}render(){return this.visible?g`
      <div class="nc-chatui-connection-status ${this.statusClass}">
        <div class="nc-chatui-connection-status-content">
          ${this.isConnecting?g`
            <svg class="nc-connection-loading-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M512 1024c-282.7776 0-512-229.2224-512-512s229.2224-512 512-512 512 229.2224 512 512-229.2224 512-512 512z m0-921.6c-225.8944 0-409.6 183.7056-409.6 409.6s183.7056 409.6 409.6 409.6 409.6-183.7056 409.6-409.6-183.7056-409.6-409.6-409.6z" fill="#0047FF" opacity="0.3"></path>
              <path d="M512 1024C229.2224 1024 0 794.7776 0 512c0-28.2624 22.9376-51.2 51.2-51.2s51.2 22.9376 51.2 51.2c0 225.8944 183.7056 409.6 409.6 409.6s409.6-183.7056 409.6-409.6c0-225.8944-183.7056-409.6-409.6-409.6-28.2624 0-51.2-22.9376-51.2-51.2s22.9376-51.2 51.2-51.2c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512z" fill="#0047FF"></path>
            </svg>
          `:""}
          <span class="nc-chatui-connection-status-text">${this.content}</span>
        </div>
      </div>
    `:g``}}h(ms,"styles",R`
    :host {
      display: block;
    }
    .nc-chatui-connection-status {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      width: 100%;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      animation: nc-status-fade-in 0.3s ease-in-out;
    }
    .nc-chatui-connection-status.is-error {
      background-color: #FFD5D5;
    }
    .nc-chatui-connection-status.is-warning {
      background-color: #E7EEFF;
    }
    .nc-chatui-connection-status-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .nc-chatui-connection-status-text {
      font-size: 16px;
      color: #020814;
      line-height: 20px;
    }
    .nc-connection-loading-icon {
      animation: nc-status-spin 1s linear infinite;
      flex-shrink: 0;
    }
    @keyframes nc-status-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes nc-status-fade-in {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `);en([b({type:Boolean})],ms.prototype,"visible");en([b({type:Number})],ms.prototype,"status");en([b({type:Number})],ms.prototype,"code");var wc=Object.defineProperty,Gs=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&wc(e,t,i),i};class Nt extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}emit(e){this.count===0&&e!=="cancel"||this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}get message(){return this.i18n.t("multi-choice.menu.selected-count",(this.count??0).toString())}render(){return g`
      <div class="nc-multi-choice-menu">
        <!-- Cancel -->
        <div class="button cancel"
          @click=${()=>this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}
          @mouseenter=${()=>{this.isCancelHover=!0}}
          @mouseleave=${()=>{this.isCancelHover=!1}}
        >
          <div class="icon-wrapper">
            <img src=${this.isCancelHover?S1:ra} alt=${this.i18n.t("dialog.cancel.msg")}>
          </div>
        </div>
        <!-- Selected count -->
        <span class="selected-count">${this.message}</span>
        <!-- Merge and forward -->
        <div class="button forward ${this.count===0?"disabled":""}"
          @click=${()=>this.emit("merge-forward")}
          @mouseenter=${()=>{this.isMergeForwardHover=!0}}
          @mouseleave=${()=>{this.isMergeForwardHover=!1}}
        >
          <div class="icon-wrapper">
            <img src=${this.isMergeForwardHover&&this.count>0?y1:E1} alt=${this.i18n.t("multi-choice.menu.merge-forward")} style="opacity: ${this.count===0?.4:1}">
          </div>
          <span class="button-label">${this.i18n.t("multi-choice.menu.merge-forward")}</span>
        </div>
        <!-- Forward individually -->
        <div class="button forward ${this.count===0?"disabled":""}"
          @click=${()=>this.emit("forward")}
          @mouseenter=${()=>{this.isForwardHover=!0}}
          @mouseleave=${()=>{this.isForwardHover=!1}}
        >
          <div class="icon-wrapper">
            <img src=${this.isForwardHover&&this.count>0?w1:ta} alt=${this.i18n.t("multi-choice.menu.forward-item-by-item")} style="opacity: ${this.count===0?.4:1}">
          </div>
          <span class="button-label">${this.i18n.t("multi-choice.menu.forward-item-by-item")}</span>
        </div>
      </div>
    `}}h(Nt,"styles",R`
    :host {
      display: block;
    }
    .nc-multi-choice-menu {
      height: 80px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-top: 1px solid #E4E7ED;
      font-size: 14px;
      color: #000000;
      padding: 0 16px;
    }
    .selected-count {
      flex: 1 auto;
      margin-left: 24px;
    }
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      margin-left: 32px;
    }
    .button.disabled {
      cursor: not-allowed;
    }
    .button.disabled .button-label {
      color: #c4c4c4;
    }
    .button:first-child {
      margin-left: 0;
    }
    .icon-wrapper {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: #F3F5FA;
      margin-bottom: 4px;
    }
    .button img {
      width: 20px;
      height: 20px;
    }
    .cancel .icon-wrapper {
      background-color: #FFFFFF;
      width: 30px;
      height: 30px;
    }
    .button.forward:hover .icon-wrapper {
      background-color: #D0DDFF;
    }
    .button.cancel:hover .icon-wrapper {
      background-color: #D0DDFF;
    }
    @media (max-width: 768px) {
      .selected-count,
      .button-label {
        display: none;
      }
      .cancel {
        margin-right: auto;
      }
      .icon-wrapper {
        margin-bottom: 0;
      }
    }
  `);Gs([b({type:Number})],Nt.prototype,"count");Gs([_()],Nt.prototype,"isCancelHover");Gs([_()],Nt.prototype,"isForwardHover");Gs([_()],Nt.prototype,"isMergeForwardHover");var yc=Object.defineProperty,Ca=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&yc(e,t,i),i};class Bs extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}get reply(){return this.i18n.t("input.reply.prefix")+(this.info.senderUserName||"")}render(){return g`
      <div class="replay-bar">
        <div class="cancel-btn"
          @click=${()=>this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}
          @mouseenter=${()=>{this.isHovered=!0}}
          @mouseleave=${()=>{this.isHovered=!1}}
        >
          <img src=${this.isHovered?j1:ra} alt="Cancel">
        </div>
        <div class="content">
          <div class="message-desc">
            <div class="desc">
              <span class="reply-prefix">${this.reply}:</span>
              <span class="desc-text">${this.info.digest}</span>
              ${this.info.isEdited?g`<span class="edited-marker">(${this.i18n.t("message.edit.edited")})</span>`:""}
            </div>
          </div>
        </div>
      </div>
    `}}h(Bs,"styles",R`
    :host {
      display: block;
    }
    .replay-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 8px;
      height: 36px;
      padding-top: 8px;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
    .content {
      margin-left: 8px;
      box-sizing: border-box;
      width: calc(100% - 50px - 16px);
      flex: 1;
      min-width: 0;
      display: flex;
      height: 100%;
      background-color: #F3F5FA;
      border-radius: 10px;
      font-size: 14px;
      color: #020814;
    }
    .message-desc {
      flex: 1;
      min-width: 0;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      width: calc(100% - 120px);
      padding-right: 10px;
      margin-left: 4px;
      overflow: hidden;
    }
    .desc {
      color: #020814;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .reply-prefix {
      flex-shrink: 0;
    }
    .desc-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .edited-marker {
      flex-shrink: 0;
      color: #7C838E;
      font-size: 12px;
      white-space: nowrap;
      -webkit-user-select: none;
      user-select: none;
    }
    .thumbnail {
      flex-shrink: 0;
      height: 24px;
      width: auto;
      max-width: 100px;
      border: none;
      padding: 0;
      box-sizing: border-box;
      object-fit: contain;
      vertical-align: middle;
    }
    .cancel-btn {
      display: flex;
      width: 24px;
      margin-left: 10px;
      flex-direction: column;
      justify-content: center;
      vertical-align: middle;
      cursor: pointer;
    }
    .cancel-btn img {
      border-radius: 8px;
    }
  `);Ca([b({type:Object})],Bs.prototype,"info");Ca([_()],Bs.prototype,"isHovered");var Sc=Object.defineProperty,va=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Sc(e,t,i),i};class Vs extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"size",16),h(this,"outerRadius",7),h(this,"outerStrokeWidth",1.2),h(this,"pieFillRadius",5),h(this,"pieFillDiameter",this.pieFillRadius*2),h(this,"pieGreen","#46DB7A")}get context(){return f()}get isSupportReadReceiptVersion(){return this.context.isReadReceiptV5}get isV5Group(){var e;return this.context.isReadReceiptV5&&((e=this.message)==null?void 0:e.channelType)===T.GROUP}get effectiveSentStatus(){if(!this.message)return L.SENT;let e=this.message.sentStatus??L.SENT;if(this.context.isReadReceiptV5&&(this.message.channelType===T.DIRECT&&this.message.readReceiptInfo&&(e=(this.message.readReceiptInfo.readCount||0)>0?L.READ:L.SENT),this.message.channelType===T.GROUP&&this.message.readReceiptInfo)){const{readCount:t=0,unreadCount:s=0}=this.message.readReceiptInfo;t===0&&(e=L.SENT),t===t+s&&(e=L.READ)}return e}get showCursor(){return this.effectiveSentStatus===L.FAILED||this.isV5Group}get showPieChart(){var e;if(!this.context.isReadReceiptV5||((e=this.message)==null?void 0:e.channelType)!==T.GROUP||this.message.sentStatus===L.SENDING||this.message.sentStatus===L.FAILED)return!1;const t=this.message.readReceiptInfo;if(!t)return!1;const s=t.readCount||0,i=t.unreadCount||0;return s>0&&i>0}get readPercentage(){var e;if(!this.showPieChart)return 0;const t=(e=this.message)==null?void 0:e.readReceiptInfo;if(!t)return 0;const s=t.readCount||0,i=t.unreadCount||0,n=s+i;return n===0?0:s/n}get shouldShowTooltip(){var e;return!(!this.context.isReadReceiptV5||((e=this.message)==null?void 0:e.channelType)!==T.GROUP||this.message.sentStatus===L.SENDING||this.message.sentStatus===L.FAILED)}get tooltipText(){var e;if(!this.shouldShowTooltip)return"";const t=(e=this.message)==null?void 0:e.readReceiptInfo,s=[];if(!t)return s.push(this.i18n.t("message.list.read-receipt.tooltip.all-unread")),s.join(", ");const i=t.readCount||0,n=t.unreadCount||0;return i===0?s.push(this.i18n.t("message.list.read-receipt.tooltip.all-unread")):i===i+n?s.push(this.i18n.t("message.list.read-receipt.tooltip.all-read")):(s.push(this.i18n.t("message.list.read-receipt.tooltip.read-count",i)),s.push(this.i18n.t("message.list.read-receipt.tooltip.unread-count",n))),s.join(", ")}getStatusIcon(){switch(this.effectiveSentStatus){case L.SENDING:return this.type?X1:eh;case L.FAILED:return aa;case L.SENT:return this.type?Nn:J1;case L.READ:return Q1;default:return Nn}}handleClick(e){e.stopPropagation(),(this.effectiveSentStatus===L.FAILED||this.isV5Group)&&this.dispatchEvent(new CustomEvent("sent-status-click",{bubbles:!0,composed:!0,detail:{message:this.message,evt:e}}))}render(){if(!this.message||!this.isSupportReadReceiptVersion)return g``;const e=this.size/2,t=Math.min(1,Math.max(0,this.readPercentage)),s=this.pieGreen,i=t>=1?`conic-gradient(from 0deg, ${s} 0turn 1turn)`:`conic-gradient(from 0deg, ${s} 0turn ${t}turn, #ffffff ${t}turn 1turn)`;return g`
      <div
        class="nc-chatui-message-sent-status ${this.shouldShowTooltip?"nc-chatui-has-tooltip":""}"
        @click=${n=>this.handleClick(n)}
        style="cursor: ${this.showCursor?"pointer":"default"}"
      >
        ${this.showPieChart?g`
          <div class="nc-chatui-read-receipt-pie">
            <svg width=${this.size} height=${this.size} viewBox="0 0 ${this.size} ${this.size}">
              <circle
                cx=${e}
                cy=${e}
                r=${this.outerRadius}
                fill="none"
                stroke=${this.pieGreen}
                stroke-width=${this.outerStrokeWidth}
              />
            </svg>
            <div
              class="nc-chatui-read-receipt-pie-fill"
              style="width:${this.pieFillDiameter}px;height:${this.pieFillDiameter}px;background:${i};"
            ></div>
          </div>
        `:g`
          <img
            src=${this.getStatusIcon()}
            class=${this.effectiveSentStatus===L.SENDING?"nc-chatui-sending":""}
            alt="status"
          >
        `}
        ${this.shouldShowTooltip&&this.tooltipText?g`
          <div class="nc-chatui-read-receipt-tooltip">
            <div class="nc-chatui-tooltip-content">${this.tooltipText}</div>
            <div class="nc-chatui-tooltip-arrow"></div>
          </div>
        `:""}
      </div>
    `}}h(Vs,"styles",R`
    :host {
      display: block;
    }
    .nc-chatui-message-sent-status {
      display: flex;
      align-items: center;
      font-size: 0;
      position: relative;
      margin-top: 4px;
    }
    .nc-chatui-read-receipt-pie {
      position: relative;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .nc-chatui-read-receipt-pie > svg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .nc-chatui-read-receipt-pie-fill {
      position: relative;
      z-index: 1;
      border-radius: 50%;
      box-sizing: border-box;
      transition: background 0.25s ease;
    }
    .nc-chatui-message-sent-status img {
      display: inline-block;
      vertical-align: middle;
    }
    .nc-chatui-message-sent-status img.nc-chatui-sending {
      animation: nc-chatui-rotate 1s linear infinite;
      transform-origin: center center;
      will-change: transform;
    }
    @keyframes nc-chatui-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .nc-chatui-read-receipt-tooltip {
      position: absolute;
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      pointer-events: none;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease, visibility 0.2s ease;
    }
    .nc-chatui-has-tooltip:hover .nc-chatui-read-receipt-tooltip {
      opacity: 1;
      visibility: visible;
    }
    .nc-chatui-tooltip-content {
      background-color: #fff;
      border-radius: 4px;
      padding: 6px 12px;
      font-size: 12px;
      color: #333;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      line-height: 1.5;
    }
    .nc-chatui-tooltip-arrow {
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #fff;
    }
  `);va([b({type:Object})],Vs.prototype,"message");va([b({type:Number})],Vs.prototype,"type");var xc=Object.defineProperty,dt=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&xc(e,t,i),i};class He extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"resizeObserver",null),h(this,"overflowFrame",0)}set"show-users"(e){this.showUsers=e}connectedCallback(){super.connectedCallback(),this.isOverflow=!1}disconnectedCallback(){this.stopObserver(),super.disconnectedCallback()}updated(){var e;if(this.showUsers&&(e=this.names)!=null&&e.length&&this.usersEl&&this.usersTextEl){this.resizeObserver||(this.resizeObserver=new ResizeObserver(()=>this.scheduleOverflowCheck()),this.resizeObserver.observe(this.usersEl),this.resizeObserver.observe(this.usersTextEl)),this.scheduleOverflowCheck();return}this.stopObserver()}stopObserver(){var e;(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null,this.overflowFrame&&(cancelAnimationFrame(this.overflowFrame),this.overflowFrame=0),this.isOverflow&&(this.isOverflow=!1)}scheduleOverflowCheck(){this.overflowFrame||(this.overflowFrame=requestAnimationFrame(()=>{this.overflowFrame=0;const e=!!this.usersTextEl&&this.usersTextEl.scrollWidth>this.usersTextEl.clientWidth;e!==this.isOverflow&&(this.isOverflow=e)}))}emitReactionEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:[this.reaction]}))}renderNames(){var e;return(e=this.names)!=null&&e.length?g`
      <div class="nc-reaction-users">
        <div class="nc-reaction-users-text">
          ${this.names.map((t,s)=>g`${s>0?",":O}<span>${t}</span>`)}
        </div>
        ${this.isOverflow?g`
          <button class="nc-reaction-users-count" type="button" @click=${t=>{t.stopPropagation(),this.emitReactionEvent("detail-click")}}>${this.i18n.t("reaction.total.users",this.displayCount)}</button>
        `:O}
      </div>
    `:O}get displayCount(){return this.reaction.totalCount>99?"99+":this.reaction.totalCount}render(){return this.reaction?g`
      <div class="nc-reaction ${this.reaction.hasCurrentUserReacted?"nc-reaction-active":""}">
        <button class="nc-reaction-emoji" type="button" @click=${e=>{e.stopPropagation(),this.emitReactionEvent("reaction-click")}}>${this.reaction.reactionId}</button>
        ${this.showUsers?this.renderNames():g`
          <button class="nc-reaction-count" type="button" @click=${e=>{e.stopPropagation(),this.emitReactionEvent("detail-click")}}>${this.displayCount}</button>
        `}
      </div>
    `:O}}h(He,"styles",R`
    :host {
      display: inline-flex;
      min-width: 0;
      max-width: 100%;
    }

    .nc-reaction {
      display: inline-flex;
      align-items: center;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      padding: 2px 8px;
      overflow: hidden;
      color: #565960;
      font-size: 10px;
      line-height: 20px;
      background-color: #F0F0F0;
      border: 1px solid transparent;
      border-radius: 20px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
    }

    .nc-reaction-active {
      background-color: #BED4FF;
      border-color: #0047FFCC;
    }

    button {
      padding: 0;
      color: inherit;
      font: inherit;
      line-height: inherit;
      background: transparent;
      border: 0;
      cursor: pointer;
    }

    .nc-reaction-emoji {
      flex-shrink: 0;
      padding-right: 6px;
      margin-right: 6px;
      font-size: 14px;
      line-height: 14px;
      border-right: 1px solid #A6A6A6;
    }

    .nc-reaction-count {
      color: #565960;
      font-size: 12px;
    }

    .nc-reaction-count:hover,
    .nc-reaction-users-count:hover {
      color: #0047FF;
    }

    .nc-reaction-users {
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      min-width: 0;
      overflow: hidden;
    }

    .nc-reaction-users-text {
      flex: 1 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .nc-reaction-users-count {
      flex-shrink: 0;
      margin-left: 2px;
      white-space: nowrap;
    }
  `);dt([b({type:Object})],He.prototype,"reaction");dt([b({type:Boolean})],He.prototype,"showUsers");dt([b({type:Array})],He.prototype,"names");dt([b({type:Boolean})],He.prototype,"align");dt([Z(".nc-reaction-users")],He.prototype,"usersEl");dt([Z(".nc-reaction-users-text")],He.prototype,"usersTextEl");dt([_()],He.prototype,"isOverflow");const k={ICON:"nc-icon",ICON_CHANNEL_MUTED:"nc-channel-muted-icon",ICON_CHANNEL_PINNED:"nc-channel-pinned-icon",CHANNEL_LABEL:"nc-channel-label",LATEST_MESSAGE:"nc-latest-message",CHANNEL_UNREAD:"nc-channel-unread",CHANNEL_LIST_ITEM:"nc-channel-list-item",CHANNEL_TIME:"nc-channel-time",CHANNEL_LOADING:"nc-channel-loading",CHANNEL_LIST_MENU_ITEM:"nc-channel-list-menu-item",CHANNEL_EMPTY:"nc-channel-empty",CHANNEL_LIST_EMPTY:"nc-channel-list-empty",MESSAGE_BUBBLE:"nc-message-bubble",MESSAGE_LIST_MENU_ITEM:"nc-message-list-menu-item",MESSAGE_TIME:"nc-message-time",MESSAGE_SELECT:"nc-message-select",MODAL_DIALOG:"nc-modal-dialog",TEXT_MESSAGE:"nc-text-message",HD_VOICE_MESSAGE:"nc-hd-voice-message",IMAGE_MESSAGE:"nc-image-message",UNSUPPORTED_MESSAGE:"nc-unsupported-message",SHORT_VIDEO_MESSAGE:"nc-short-video-message",FILE_MESSAGE:"nc-file-message",REFERENCE_MESSAGE:"nc-reference-message",COMBINE_MESSAGE:"nc-combine-message",GIF_MESSAGE:"nc-gif-message",MULTI_CHOICE_MENU:"nc-multi-choice-menu",INPUT_REPLY_BAR:"nc-input-reply-bar",MESSAGE_LOCATION:"nc-message-location",MESSAGE_SENT_STATUS:"nc-message-sent-status",CONNECTION_STATUS:"nc-connection-status",READ_RECEIPT_MODAL:"nc-read-receipt-modal",REACTION:"nc-reaction"},Mc={[k.CHANNEL_LIST_ITEM]:Se,[k.ICON]:ct,[k.ICON_CHANNEL_MUTED]:da,[k.ICON_CHANNEL_PINNED]:ua,[k.CHANNEL_LABEL]:Pi,[k.LATEST_MESSAGE]:Hi,[k.CHANNEL_UNREAD]:ks,[k.CHANNEL_TIME]:ji,[k.CHANNEL_LIST_MENU_ITEM]:us,[k.CHANNEL_EMPTY]:Gi,[k.CHANNEL_LIST_EMPTY]:Bi,[k.MESSAGE_LIST_MENU_ITEM]:ps,[k.MESSAGE_TIME]:zi,[k.MESSAGE_LOCATION]:Ps,[k.CHANNEL_LOADING]:ma,[k.UNSUPPORTED_MESSAGE]:fa,[k.TEXT_MESSAGE]:qi,[k.HD_VOICE_MESSAGE]:Hs,[k.IMAGE_MESSAGE]:Zi,[k.GIF_MESSAGE]:gs,[k.SHORT_VIDEO_MESSAGE]:Ki,[k.MESSAGE_SELECT]:Yi,[k.REFERENCE_MESSAGE]:Qi,[k.MODAL_DIALOG]:Fs,[k.MESSAGE_BUBBLE]:he,[k.FILE_MESSAGE]:Xi,[k.COMBINE_MESSAGE]:Ji,[k.CONNECTION_STATUS]:ms,[k.MULTI_CHOICE_MENU]:Nt,[k.INPUT_REPLY_BAR]:Bs,[k.MESSAGE_SENT_STATUS]:Vs,[k.READ_RECEIPT_MODAL]:J,[k.REACTION]:He};class Tc extends HTMLElement{connectedCallback(){this.style.cssText=`
      background-color: rgba(0, 0, 0, .5);
      position: absolute;
      inset: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000000;
      overflow: hidden;
    `}}var Rc=Object.defineProperty,ba=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Rc(e,t,i),i};class zs extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}render(){return g`
      <div class="mention-users-panel" @click=${e=>e.stopPropagation()}>
        ${this.mentionAll?g`
          <div class="div-item" @click=${()=>this.dispatchEvent(new CustomEvent("mention-all",{bubbles:!0,composed:!0}))}>
            ${this.i18n.t("channel.mentioned.all.msg")}
          </div>
        `:""}
        ${(this.members||[]).map(e=>g`
          <div class="div-item" @click=${()=>this.dispatchEvent(new CustomEvent("mention",{detail:e.userId,bubbles:!0,composed:!0}))}>
            ${e.avatarUrl?g`<img class="icon" src="${e.avatarUrl}" alt="User Portrait"/>`:""}
            <span>${e.nickname||e.name}</span>
          </div>
        `)}
      </div>
    `}}h(zs,"styles",R`
    :host {
      display: block;
    }
    .mention-users-panel {
      width: 100%;
      align-items: center;
      max-height: 124px;
      overflow: scroll;
      border-top: 1px solid #efefef;
    }
    .div-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 20px;
      cursor: pointer;
      font-size: 12px;
    }
    .div-item:hover {
      background-color: #e9f0fb;
      border-radius: 8px;
    }
    .icon {
      margin-right: 10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  `);ba([b({type:Array})],zs.prototype,"members");ba([b({type:Boolean})],zs.prototype,"mentionAll");class wa extends M{constructor(){super(...arguments),h(this,"_visible",!1),h(this,"_hiding",!1),h(this,"_message",""),h(this,"_showIcon",!0),h(this,"_timer",null),h(this,"_onToastEvent",e=>{this._timer&&(clearTimeout(this._timer),this._timer=null),this._message=e.data.message,this._showIcon=e.data.showIcon!==!1,this._hiding=!1,this._visible=!0,this.requestUpdate(),this._timer=setTimeout(()=>{this._hiding=!0,this.requestUpdate(),setTimeout(()=>{this._visible=!1,this._hiding=!1,this._timer=null,this.requestUpdate()},300)},3e3)})}connectedCallback(){super.connectedCallback(),f().addEventListener(x.TOAST_EVENT,this._onToastEvent)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearTimeout(this._timer),f().removeEventListener(x.TOAST_EVENT,this._onToastEvent)}render(){return this._visible?g`
      <div class="nc-chatui-toast ${this._hiding?"hiding":""}">
        <div class="nc-chatui-toast-content">
          ${this._showIcon?g`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#46DB7A"/>
              <path d="M7.24951 13.2507L10.2495 16.2507L17.2495 9.25073" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `:""}
          <span class="nc-chatui-toast-text">${this._message}</span>
        </div>
      </div>
    `:g``}}h(wa,"styles",R`
    .nc-chatui-toast {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      width: 100%;
      height: 46px;
      background-color: #C9F5D8;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      animation: toast-in 0.3s ease-in;
    }
    .nc-chatui-toast.hiding {
      animation: toast-out 0.3s ease-out forwards;
    }
    @keyframes toast-in {
      from { opacity: 0; transform: translateY(-10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translateY(0); }
      to   { opacity: 0; transform: translateY(-10px); }
    }
    .nc-chatui-toast-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .nc-chatui-toast-text {
      font-size: 16px;
      color: #020814;
      line-height: 20px;
    }
  `);var Lc=Object.defineProperty,Ic=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Lc(e,t,i),i};class tn extends M{constructor(){super(...arguments),h(this,"_selected",0),h(this,"_libraries",[]),h(this,"_chats",f().input.cloneChatEmojiLibrary())}connectedCallback(){super.connectedCallback(),this._libraries=f().input.cloneImageEmojiLibraries(),this.requestUpdate()}get _menu(){return this.chatOnly?[{icon:this._chats.icon,index:0}]:[{icon:this._chats.icon,index:0}].concat(...this._libraries.map((e,t)=>({icon:e.icon,index:t+1})))}get _images(){if(this._selected===0)return[];const e=this._libraries[this._selected-1],{itemWidth:t,itemHeight:s,items:i}=e;return i.map(n=>({...n,width:t,height:s}))}_selectMenu(e){this._selected=e,this.requestUpdate()}render(){return g`
      <div class="emoji-panel-root" @click=${e=>e.stopPropagation()}>
        <div class="menu-list">
          ${this._menu.map(e=>g`
            <div class="menu-button ${e.index===this._selected?"selected":""}" @click=${()=>this._selectMenu(e.index)}>
              <img src="${e.icon}" alt="Emoji"/>
            </div>
          `)}
        </div>
        <div class="emoji-list">
          ${this._selected===0?this._chats.chats.map(e=>g`
            <div class="chat-emoji-item" @click=${()=>this.dispatchEvent(new CustomEvent("insert-chat",{detail:e,bubbles:!0,composed:!0}))}>
              <span>${e}</span>
            </div>
          `):""}
          ${this._selected>0?this._images.map(e=>{var t;return g`
            <div class="image-emoji-item"
              style="width: ${e.width}px; height: ${e.height}px;"
              @click=${()=>this.dispatchEvent(new CustomEvent("send-image",{detail:e,bubbles:!0,composed:!0}))}>
              <img src="${(t=e.imageThumbnail)==null?void 0:t.thumbnail}" width="${e.width}" height="${e.height}" alt="Emoji"/>
            </div>
          `}):""}
        </div>
      </div>
    `}}h(tn,"styles",R`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      min-height: 0;
      overflow: hidden;
    }
    .emoji-panel-root {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }
    .menu-list {
      height: 48px;
      flex-shrink: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 8px;
    }
    .menu-button {
      width: 32px;
      height: 32px;
      cursor: pointer;
      border-radius: 5px;
      margin-left: 10px;
    }
    .menu-button.selected {
      background-color: #e9f0fb;
    }
    .menu-button img {
      width: 28px;
      height: 28px;
      margin: 2px;
    }
    .emoji-list {
      flex: 1;
      min-height: 0;
      overflow: auto;
      overscroll-behavior: contain;
      padding: 4px 8px;
    }
    .chat-emoji-item {
      display: inline-block;
      font-size: 22px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      text-align: center;
      line-height: 30px;
      border-radius: 4px;
    }
    .chat-emoji-item:hover, .image-emoji-item:hover {
      background-color: #e9f0fb;
    }
    .image-emoji-item {
      display: inline-block;
      padding: 6px;
      border-radius: 4px;
      cursor: pointer;
    }
  `);Ic([b({type:Boolean})],tn.prototype,"chatOnly");var Ac=Object.defineProperty,js=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Ac(e,t,i),i};class kt extends M{constructor(){super(...arguments),h(this,"_cursorDown",!1),h(this,"_originalOnSelectStart",null),h(this,"_preventSelectStart",()=>!1),h(this,"_thumbClickY",0),h(this,"_clickThumbHandler",e=>{var t;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;(t=window.getSelection())==null||t.removeAllRanges(),this._startDrag(e);const s=e.currentTarget;this._thumbClickY=e.clientY-s.getBoundingClientRect().top}),h(this,"_clickTrackHandler",e=>{const t=this._trackEl,s=this._thumbEl;if(!t||!s)return;const i=Math.abs(e.target.getBoundingClientRect().top-e.clientY),n=s.offsetHeight/2,a=(i-n)*100*this._offsetRatio/t.offsetHeight;this.dispatchEvent(new CustomEvent("handlemove",{detail:a,bubbles:!0,composed:!0}))}),h(this,"_mouseMoveHandler",e=>{const t=this._trackEl,s=this._thumbEl;if(!t||!s||!this._cursorDown)return;const i=(t.getBoundingClientRect().top-e.clientY)*-1,n=s.offsetHeight-this._thumbClickY,a=(i-n)*100*this._offsetRatio/t.offsetHeight;this.dispatchEvent(new CustomEvent("handlemove",{detail:a,bubbles:!0,composed:!0}))}),h(this,"_mouseUpHandler",()=>{this._cursorDown=!1,this._thumbClickY=0,document.removeEventListener("mousemove",this._mouseMoveHandler),document.removeEventListener("mouseup",this._mouseUpHandler),document.onselectstart===this._preventSelectStart&&(document.onselectstart=this._originalOnSelectStart),this._originalOnSelectStart=null})}get _trackEl(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector(".nc-chatui-scrollbar-bar"))??null}get _thumbEl(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector(".nc-chatui-scrollbar-thumb"))??null}get _offsetRatio(){const e=this._trackEl,t=this._thumbEl;return!e||!t?1:e.offsetHeight**2/(this.scrollheight||1)/(this.ratio||1)/(t.offsetHeight||1)}_startDrag(e){e.stopImmediatePropagation(),!this._cursorDown&&(this._cursorDown=!0,document.addEventListener("mousemove",this._mouseMoveHandler),document.addEventListener("mouseup",this._mouseUpHandler),this._originalOnSelectStart=document.onselectstart,document.onselectstart=this._preventSelectStart)}disconnectedCallback(){super.disconnectedCallback(),this._mouseUpHandler()}render(){return g`
      <div class="nc-chatui-scrollbar-bar" @mousedown=${this._clickTrackHandler}>
        <div class="nc-chatui-scrollbar-thumb"
          style="height: ${this.height}px; transform: translateY(${this.move}%)"
          @mousedown=${this._clickThumbHandler}
        ></div>
      </div>
    `}}h(kt,"styles",R`
    .nc-chatui-scrollbar-bar {
      position: absolute;
      right: 2px;
      bottom: 0px;
      z-index: 1;
      border-radius: 4px;
      width: 6px;
      top: 0px;
    }
    .nc-chatui-scrollbar-thumb {
      width: 100%;
      position: relative;
      cursor: pointer;
      border-radius: inherit;
      background-color: #909399;
      opacity: .3;
    }
    .nc-chatui-scrollbar-thumb:hover {
      background-color: #909399;
      opacity: .5;
    }
  `);js([b({type:Number})],kt.prototype,"height");js([b({type:Number})],kt.prototype,"move");js([b({type:Number})],kt.prototype,"scrollheight");js([b({type:Number})],kt.prototype,"ratio");var Oc=Object.defineProperty,qs=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Oc(e,t,i),i};class Pt extends M{constructor(){super(...arguments),h(this,"blob",null),h(this,"capturing",null),h(this,"videoEl",null),h(this,"imageEl",null),h(this,"containerEl",null),h(this,"i18n",new V(this)),h(this,"handleCancel",()=>{this.photo&&(URL.revokeObjectURL(this.photo),this.photo=""),this.blob=null,this.destroyStream(),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}),h(this,"resize",()=>{const e=this.videoEl,t=this.containerEl,s=this.imageEl;if(!t)return;const{scrollWidth:i,scrollHeight:n}=t,a=4/3;let o=i,l=i/a;l>n&&(l=n,o=n*a),e&&(e.width=o,e.height=l),s&&(s.width=o,s.height=l)})}get message(){return this.errormsg?this.i18n.t("take-photo.msg.camera-startup-failure",this.errormsg):this.stream?"":this.i18n.t("take-photo.msg.camera-starting")}async handleRetry(){URL.revokeObjectURL(this.photo),this.photo="",this.blob=null,await this.updateComplete}async takeStream(){if(this.capturing)return this.capturing;this.errormsg="";try{const e=navigator.mediaDevices.getUserMedia({video:{width:960,height:720,aspectRatio:1.3333333333333333}}).then(t=>{if(this.capturing!==e){t.getTracks().forEach(s=>s.stop());return}this.stream=t},t=>{this.capturing===e&&(this.errormsg=t.message)}).finally(()=>{this.capturing===e&&(this.capturing=null)});return this.capturing=e,e}catch(e){this.errormsg=e.message}}destroyStream(){this.capturing=null,this.stream&&this.stream.getTracks().forEach(e=>e.stop()),this.videoEl&&(this.videoEl.srcObject=null),this.stream=null}takePhotoHandle(){return new Promise(e=>{const t=document.createElement("canvas"),s=this.videoEl,{width:i,height:n}=s;t.width=i,t.height=n,t.getContext("2d").drawImage(s,0,0,i,n),t.toBlob(a=>e(a),"image/jpg",1)})}async takePhoto(){this.blob=await this.takePhotoHandle(),this.photo=URL.createObjectURL(this.blob),await this.updateComplete,this.resize()}sendImage(){const e=f(),t=e.channelModule.getOpenedChannelModel();e.message.sendImages(t.channelIdentifier,[new File([this.blob],`screenshot-${Date.now()}.jpg`,{type:"image/jpg"})]),this.handleCancel()}connectedCallback(){super.connectedCallback(),f().addEventListener(x.CHANNEL_SELECTED,this.handleCancel),window.addEventListener("resize",this.resize),this.takeStream().then(async()=>{await this.updateComplete,!(!this.isConnected||!this.stream)&&(this.videoEl&&this.videoEl.addEventListener("loadedmetadata",this.resize),this.resize())})}disconnectedCallback(){super.disconnectedCallback(),f().removeEventListener(x.CHANNEL_SELECTED,this.handleCancel),window.removeEventListener("resize",this.resize),this.videoEl&&this.videoEl.removeEventListener("loadedmetadata",this.resize),this.destroyStream()}updated(){const e=this.shadowRoot;this.videoEl=e.querySelector("video"),this.imageEl=e.querySelector(".photo-preview"),this.containerEl=e.querySelector(".video-container"),this.videoEl&&this.stream&&!this.videoEl.srcObject&&(this.videoEl.srcObject=this.stream)}render(){return g`
      <nc-modal-provider @click=${this.handleCancel}>
        <div class="take-photo-container" @click=${e=>e.stopPropagation()}>
          <div class="take-photo-header">
            <div class="btn-wrapper"
              @mouseenter=${()=>{this.closeHover=!0}}
              @mouseleave=${()=>{this.closeHover=!1}}
            >
              <img class="btn" @click=${this.handleCancel}
                src=${this.closeHover?ea:Di}
                alt="Close Icon">
            </div>
          </div>
          <div class="video-container">
            <video
              ?hidden=${!(!this.photo&&this.stream)}
              playsinline
              autoplay
            ></video>
            <img class="photo-preview"
              ?hidden=${!this.photo}
              src=${this.photo||""}
              alt="Photo"
            >
            ${this.stream?"":g`<span class="message">${this.message}</span>`}
            ${this.stream?g`
              <div class="floating-buttons">
                ${this.photo?g`
                  <div class="floating-button retry-button" @click=${()=>this.handleRetry()}>
                    <img src=${V1} alt="Retry Icon">
                    <span class="button-text">${this.i18n.t("take-photo.retry-btn.label")}</span>
                  </div>
                `:""}
                <div class="floating-button action-button" @click=${()=>this.photo?this.sendImage():this.takePhoto()}>
                  ${this.photo?g`<img src=${u1} alt="Send Icon">`:g`<img class="camera-icon" src=${z1} alt="Camera Icon">`}
                  ${this.photo?g`<span class="button-text">${this.i18n.t("take-photo.send-btn.label")}</span>`:""}
                </div>
              </div>
            `:""}
          </div>
        </div>
      </nc-modal-provider>
    `}}h(Pt,"styles",R`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    .take-photo-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      background: #00000080;
    }
    .take-photo-header {
      width: 100%;
      height: 54px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 25px;
      background-color: #FFFFFF;
      box-sizing: border-box;
      z-index: 2;
      flex-shrink: 0;
    }
    .btn-wrapper {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.2s;
    }
    .btn-wrapper:hover {
      background-color: #D0DDFF;
    }
    .btn {
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: block;
    }
    .video-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 0;
      position: relative;
      flex: 1;
      overflow: hidden;
    }
    .message {
      color: #a1a1a1;
      font-size: 14px;
      margin: 0 auto;
      position: absolute;
      z-index: 1;
    }
    .video-container video,
    .video-container img {
      object-fit: contain;
      width: auto;
      height: auto;
      max-width: 80%;
      max-height: 80%;
    }
    .floating-buttons {
      position: absolute;
      bottom: 12%;
      display: flex;
      align-items: center;
      gap: 20px;
      z-index: 3;
    }
    .floating-button {
      width: 78px;
      height: 34px;
      border-radius: 30px;
      background-color: #0047FF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s;
      color: #fff;
      font-size: 14px;
    }
    .floating-button img {
      width: 14px;
      height: 14px;
      display: block;
    }
    .retry-button img {
      width: 14px;
      height: 14px;
    }
    .floating-button .camera-icon {
      width: 20px;
      height: 20px;
    }
    .button-text {
      margin-left: 4px;
    }
  `);qs([_()],Pt.prototype,"stream");qs([_()],Pt.prototype,"photo");qs([_()],Pt.prototype,"closeHover");qs([_()],Pt.prototype,"errormsg");var $c=Object.defineProperty,Uc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&$c(e,t,i),i};class sn extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"originalObjectName",""),h(this,"recallContent",""),h(this,"recallTime",0),h(this,"enableReedit",!0),h(this,"timer",null)}async handleReedit(){if(!D.value)return;const e=D.value.value.length?`
${this.recallContent}`:this.recallContent;f().dispatchEvent(new v(E.SET_TEXTAREA_VALUE_EVENT,e))}async connectedCallback(){super.connectedCallback();const e=Date.now()-this.recallTime,t=f().allowedToReEditTime;e>1e3*t&&(this.enableReedit=!1),!this.timer&&this.originalObjectName===C.TEXT&&this.enableReedit&&(this.timer=setTimeout(()=>{this.enableReedit=!1,clearTimeout(this.timer),this.timer=null,this.requestUpdate()},1e3*t-e)),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.timer&&(clearTimeout(this.timer),this.timer=null)}render(){return this.message?g`
      <div class="nc-chatui-grey-message">
        <div class="grey-message">
          ${qa(this.message)}
          ${""}
        </div>
      </div>
    `:g``}}h(sn,"styles",R`
    :host {
      display: block;
    }
    .grey-message {
      display: inline-block;
      color: #41464F;
      margin: 0 auto;
      padding: 8px;
      background-color: #F3F5FA;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      line-height: 20px;
    }
    .reedit {
      color: #337ecc;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 3px;
    }
    .reedit:hover {
      color: #0099FF;
    }
    .nc-chatui-grey-message {
      margin-bottom: 10px;
    }
  `);Uc([b({type:Object})],sn.prototype,"message");var Dc=Object.defineProperty,Nc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Dc(e,t,i),i};class nn extends M{constructor(){super(...arguments),h(this,"radius",8),h(this,"circleLen",Math.floor(2*Math.PI*8))}get downloadVisible(){var e;return((e=this.message)==null?void 0:e.messageType)===C.FILE&&this.message.sentStatus!==L.SENDING&&this.message.sentStatus!==L.FAILED}get retryVisible(){var e;return!!((e=this.message)!=null&&e.file&&this.message.progress===-1)}get processVisible(){var e;return!!((e=this.message)!=null&&e.file&&typeof this.message.progress=="number"&&this.message.progress>=0&&this.message.progress<100)}get dashoffset(){var e;return(100-(((e=this.message)==null?void 0:e.progress)||0))*this.circleLen/100}handleDownload(){f().emit(new v(x.DOWNLOAD_LINK_EVENT,this.message))}handleCancel(){f().message.cancelMessageSent(this.message)}handleRetry(){f().message.resendMessage(this.message)}render(){const e=this.downloadVisible||this.retryVisible||this.processVisible;return g`
      <div class="content">
        <slot></slot>
        ${e?g`<div class="marked"><slot name="marked"></slot></div>`:""}
        ${this.downloadVisible?g`
          <div class="btn" @click=${t=>{t.stopPropagation(),this.handleDownload()}}>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.5" cx="11.5437" cy="10.7852" r="7" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.4617 9.54688L11.5749 14.5469L8.68817 9.54687L11.0749 9.54687L11.0749 6.66123L12.0749 6.66123L12.0749 9.54687L14.4617 9.54688Z"
                fill="white" />
              <mask id="path-3-outside-1_2560_1087" maskUnits="userSpaceOnUse" x="1.74341" y="0.96875" width="20" height="20" fill="white">
                <rect fill="white" x="1.74341" y="0.96875" width="20" height="20" />
                <path d="M20.344 10.7691C20.344 15.6293 16.404 19.5694 11.5437 19.5694C6.68344 19.5694 2.74341 15.6293 2.74341 10.7691C2.74341 5.90878 6.68344 1.96875 11.5437 1.96875C16.404 1.96875 20.344 5.90878 20.344 10.7691ZM4.33424 10.7691C4.33424 14.7507 7.56203 17.9785 11.5437 17.9785C15.5254 17.9785 18.7532 14.7507 18.7532 10.7691C18.7532 6.78737 15.5254 3.55958 11.5437 3.55958C7.56203 3.55958 4.33424 6.78737 4.33424 10.7691Z" />
              </mask>
              <path d="M20.344 10.7691C20.344 15.6293 16.404 19.5694 11.5437 19.5694C6.68344 19.5694 2.74341 15.6293 2.74341 10.7691C2.74341 5.90878 6.68344 1.96875 11.5437 1.96875C16.404 1.96875 20.344 5.90878 20.344 10.7691ZM4.33424 10.7691C4.33424 14.7507 7.56203 17.9785 11.5437 17.9785C15.5254 17.9785 18.7532 14.7507 18.7532 10.7691C18.7532 6.78737 15.5254 3.55958 11.5437 3.55958C7.56203 3.55958 4.33424 6.78737 4.33424 10.7691Z"
                fill="white" fill-opacity="0.6" />
              <path d="M20.344 10.7691C20.344 15.6293 16.404 19.5694 11.5437 19.5694C6.68344 19.5694 2.74341 15.6293 2.74341 10.7691C2.74341 5.90878 6.68344 1.96875 11.5437 1.96875C16.404 1.96875 20.344 5.90878 20.344 10.7691ZM4.33424 10.7691C4.33424 14.7507 7.56203 17.9785 11.5437 17.9785C15.5254 17.9785 18.7532 14.7507 18.7532 10.7691C18.7532 6.78737 15.5254 3.55958 11.5437 3.55958C7.56203 3.55958 4.33424 6.78737 4.33424 10.7691Z"
                stroke="white" stroke-opacity="0.2" stroke-width="1.04019" mask="url(#path-3-outside-1_2560_1087)" />
            </svg>
          </div>
        `:""}
        ${this.retryVisible?g`
          <div class="btn" @click=${t=>{t.stopPropagation(),this.handleRetry()}}>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.5" cx="11.6465" cy="10.7852" r="10.7383" transform="rotate(-180 11.6465 10.7852)" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.72876 12.0234L11.6155 7.02344L14.5023 12.0234L12.1155 12.0234L12.1155 14.9091L11.1155 14.9091L11.1155 12.0234L8.72876 12.0234Z"
                fill="white" />
              <mask id="path-3-outside-1_2560_1183" maskUnits="userSpaceOnUse" x="1.44678" y="0.601561" width="20" height="20" fill="black">
                <rect fill="white" x="1.44678" y="0.601561" width="20" height="20" />
                <path d="M2.84616 10.8013C2.84616 5.94098 6.78619 2.00094 11.6465 2.00094C16.5067 2.00094 20.4468 5.94098 20.4468 10.8013C20.4468 15.6615 16.5067 19.6016 11.6465 19.6016C6.78619 19.6016 2.84616 15.6615 2.84616 10.8013ZM18.8559 10.8013C18.8559 6.81957 15.6282 3.59177 11.6465 3.59177C7.66478 3.59177 4.43699 6.81957 4.43699 10.8013C4.43699 14.7829 7.66478 18.0107 11.6465 18.0107C15.6282 18.0107 18.8559 14.7829 18.8559 10.8013Z" />
              </mask>
              <path d="M2.84616 10.8013C2.84616 5.94098 6.78619 2.00094 11.6465 2.00094C16.5067 2.00094 20.4468 5.94098 20.4468 10.8013C20.4468 15.6615 16.5067 19.6016 11.6465 19.6016C6.78619 19.6016 2.84616 15.6615 2.84616 10.8013ZM18.8559 10.8013C18.8559 6.81957 15.6282 3.59177 11.6465 3.59177C7.66478 3.59177 4.43699 6.81957 4.43699 10.8013C4.43699 14.7829 7.66478 18.0107 11.6465 18.0107C15.6282 18.0107 18.8559 14.7829 18.8559 10.8013Z"
                fill="black" fill-opacity="0.6" />
              <path d="M2.84616 10.8013C2.84616 5.94098 6.78619 2.00094 11.6465 2.00094C16.5067 2.00094 20.4468 5.94098 20.4468 10.8013C20.4468 15.6615 16.5067 19.6016 11.6465 19.6016C6.78619 19.6016 2.84616 15.6615 2.84616 10.8013ZM18.8559 10.8013C18.8559 6.81957 15.6282 3.59177 11.6465 3.59177C7.66478 3.59177 4.43699 6.81957 4.43699 10.8013C4.43699 14.7829 7.66478 18.0107 11.6465 18.0107C15.6282 18.0107 18.8559 14.7829 18.8559 10.8013Z"
                stroke="white" stroke-opacity="0.2" stroke-width="1.04019" mask="url(#path-3-outside-1_2560_1183)" />
            </svg>
          </div>
        `:""}
        ${this.processVisible?g`
          <div class="btn" @click=${t=>{t.stopPropagation(),this.handleCancel()}}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.5" cx="11.605" cy="11.7227" r="10.7383" fill="black" />
              <mask id="path-2-outside-1_2560_1174" maskUnits="userSpaceOnUse" x="1.80469" y="1.90625" width="20" height="20" fill="black">
                <rect fill="white" x="1.80469" y="1.90625" width="20" height="20" />
                <path d="M20.4053 11.7066C20.4053 16.5668 16.4653 20.5069 11.605 20.5069C6.74472 20.5069 2.80469 16.5668 2.80469 11.7066C2.80469 6.84628 6.74472 2.90625 11.605 2.90625C16.4653 2.90625 20.4053 6.84628 20.4053 11.7066ZM4.39552 11.7066C4.39552 15.6882 7.62331 18.916 11.605 18.916C15.5867 18.916 18.8145 15.6882 18.8145 11.7066C18.8145 7.72487 15.5867 4.49708 11.605 4.49708C7.62331 4.49708 4.39552 7.72487 4.39552 11.7066Z" />
              </mask>
              <path d="M20.4053 11.7066C20.4053 16.5668 16.4653 20.5069 11.605 20.5069C6.74472 20.5069 2.80469 16.5668 2.80469 11.7066C2.80469 6.84628 6.74472 2.90625 11.605 2.90625C16.4653 2.90625 20.4053 6.84628 20.4053 11.7066ZM4.39552 11.7066C4.39552 15.6882 7.62331 18.916 11.605 18.916C15.5867 18.916 18.8145 15.6882 18.8145 11.7066C18.8145 7.72487 15.5867 4.49708 11.605 4.49708C7.62331 4.49708 4.39552 7.72487 4.39552 11.7066Z"
                fill="black" fill-opacity="0.6" />
              <path d="M20.4053 11.7066C20.4053 16.5668 16.4653 20.5069 11.605 20.5069C6.74472 20.5069 2.80469 16.5668 2.80469 11.7066C2.80469 6.84628 6.74472 2.90625 11.605 2.90625C16.4653 2.90625 20.4053 6.84628 20.4053 11.7066ZM4.39552 11.7066C4.39552 15.6882 7.62331 18.916 11.605 18.916C15.5867 18.916 18.8145 15.6882 18.8145 11.7066C18.8145 7.72487 15.5867 4.49708 11.605 4.49708C7.62331 4.49708 4.39552 7.72487 4.39552 11.7066Z"
                stroke="white" stroke-opacity="0.2" stroke-width="1.04019" mask="url(#path-2-outside-1_2560_1174)" />
              <circle class="progress-bar" cx="11.605" cy="11.7227" r=${this.radius} fill="none" stroke="white" stroke-width="1.9"
                stroke-dasharray=${this.circleLen} stroke-dashoffset=${this.dashoffset} transform="rotate(-90, 11.605, 11.7227)"/>
              <rect x="13.905" y="8.1875" width="1.74414" height="8.24933" transform="rotate(45 13.905 8.1875)" fill="white" />
              <rect x="8.07178" y="9.42188" width="1.74414" height="8.24933" transform="rotate(-45 8.07178 9.42188)" fill="white" />
            </svg>
          </div>
        `:""}
      </div>
    `}}h(nn,"styles",R`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    .content {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .marked {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 22px;
      cursor: pointer;
    }
  `);Nc([b({type:Object})],nn.prototype,"message");var kc=Object.defineProperty,Pc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&kc(e,t,i),i};class rn extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}handleCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}handleConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0}))}render(){return g`
      <nc-modal-provider @click=${()=>this.handleCancel()}>
        <nc-modal-dialog width="286">
          <div class="nc-chatui-modal-dialog-header" slot="header">${this.i18n.t("dialog.tips.msg")}</div>
          <div class="nc-chatui-modal-dialog-content" slot="content">${this.content}</div>
          <div class="nc-chatui-modal-dialog-footer" slot="footer">
            <button class="cancel" @click=${()=>this.handleCancel()}>${this.i18n.t("dialog.cancel.msg")}</button>
            <button class="confirm" @click=${()=>this.handleConfirm()}>${this.i18n.t("dialog.confirm.msg")}</button>
          </div>
        </nc-modal-dialog>
      </nc-modal-provider>
    `}}h(rn,"styles",R`
    :host { display: block; }
    .nc-chatui-modal-dialog-header {
      font-size: 14px;
      border-bottom: 1px solid #EAEAEA;
      padding: 10px 30px;
      line-height: 20px;
    }
    .nc-chatui-modal-dialog-content {
      font-size: 12px;
      padding: 15px 30px;
    }
    .nc-chatui-modal-dialog-footer {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
    .nc-chatui-modal-dialog-footer button {
      min-width: 70px;
      text-decoration: none;
      border-radius: 3px;
      outline: none;
      font-size: 12px;
      padding: 5px 15px;
      border: 0;
      margin: 0 23px;
      cursor: pointer;
    }
    .nc-chatui-modal-dialog-footer .cancel {
      border: 1px solid #DEDEDE;
      background-color: #F5F5F5;
    }
    .nc-chatui-modal-dialog-footer .confirm {
      border: 1px solid #0099FF;
      background-color: #0099FF;
      color: #FFFFFF;
    }
  `);Pc([b({attribute:!1})],rn.prototype,"content");var Hc=Object.defineProperty,Fc=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Hc(e,t,i),i};class an extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}handleCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}render(){return g`
      <nc-modal-provider @click=${()=>this.handleCancel()}>
        <nc-modal-dialog width="286" @cancel=${()=>this.handleCancel()}>
          <div class="nc-chatui-modal-dialog-header" slot="header">${this.i18n.t("dialog.tips.msg")}</div>
          <div class="nc-chatui-modal-dialog-content" slot="content">${this.content}</div>
          <div class="nc-chatui-modal-dialog-footer" slot="footer">
            <button class="cancel" @click=${()=>this.handleCancel()}>${this.i18n.t("dialog.cancel.msg")}</button>
          </div>
        </nc-modal-dialog>
      </nc-modal-provider>
    `}}h(an,"styles",R`
    :host { display: block; }
    nc-modal-dialog {
      --nc-chatui-modal-mobile-width: 90%;
    }
    .nc-chatui-modal-dialog-header {
      font-size: 14px;
      border-bottom: 1px solid #EAEAEA;
      padding: 10px 30px;
      line-height: 20px;
    }
    .nc-chatui-modal-dialog-content {
      font-size: 12px;
      padding: 15px 30px;
    }
    .nc-chatui-modal-dialog-footer {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
    .nc-chatui-modal-dialog-footer button {
      min-width: 70px;
      text-decoration: none;
      border-radius: 3px;
      outline: none;
      font-size: 12px;
      padding: 5px 15px;
      border: 0;
      margin: 0 23px;
      cursor: pointer;
    }
    .nc-chatui-modal-dialog-footer .cancel {
      border: 1px solid #DEDEDE;
      background-color: #F5F5F5;
    }
  `);Fc([b({attribute:!1})],an.prototype,"content");var Gc=Object.defineProperty,on=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Gc(e,t,i),i};class fs extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"_debounceTimer",null),h(this,"unsubscribeChannels")}connectedCallback(){super.connectedCallback(),this.search="",this.checkedChannels=[],this.refreshChannels(),this.unsubscribeChannels=ee.subscribe(()=>this.refreshChannels())}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribeChannels)==null||e.call(this),clearTimeout(this._debounceTimer),this._debounceTimer=null}refreshChannels(){const e=f().channelModule.getCachedChannelList().filter(t=>t.channelType!==T.SYSTEM);this.renderChannels=e.filter(t=>t.name.includes(this.search)),this.checkedChannels=e.filter(t=>this.isChannelChecked(t))}handleInputChange(e){const t=e.target.value;this.search=t,this._debounceTimer||(this._debounceTimer=setTimeout(()=>{this.refreshChannels(),clearTimeout(this._debounceTimer),this._debounceTimer=null},500))}handleCheckChange(e,t){const s=this.getChannelKey(e);if(t){if(this.checkedChannels.some(i=>this.getChannelKey(i)===s))return;this.checkedChannels=[...this.checkedChannels,e]}else this.checkedChannels=this.checkedChannels.filter(i=>this.getChannelKey(i)!==s)}getChannelKey(e){return`${e.channelType}_${e.channelId}`}isChannelChecked(e){const t=this.getChannelKey(e);return this.checkedChannels.some(s=>this.getChannelKey(s)===t)}handleCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}handleConfirm(){this.checkedChannels.length!==0&&this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0,detail:[{list:this.checkedChannels}]}))}render(){var e;return g`
      <div class="modal-forwarding-provider">
        <nc-modal-provider @click=${()=>this.handleCancel()}>
          <nc-modal-dialog width="520" height="450">
            <div class="nc-chatui-modal-dialog-header" slot="header">${this.i18n.t("dialog.forwarding.msg")}</div>
            <div class="nc-chatui-modal-dialog-content" slot="content">
              <div class="search">
                <input class="search-input" .value=${this.search} type="text"
                  placeholder=${this.i18n.t("input.placeholder.search")}
                  @input=${t=>this.handleInputChange(t)}>
                <img class="search-icon" .src=${G1} alt="SEARCH_ICON">
              </div>
              <div class="list">
                ${(e=this.renderChannels)==null?void 0:e.map(t=>g`
                  <label class="list-item">
                    <div class="checkbox">
                      <input type="checkbox"
                        .checked=${this.isChannelChecked(t)}
                        @change=${s=>this.handleCheckChange(t,s.target.checked)}>
                      <span class="custom">
                        <img .src=${ia} alt="">
                      </span>
                    </div>
                    <div class="channel">
                      <nc-icon class="profile" width="32" height="32" radius="50" .url=${t.avatarUrl} .online=${!1}></nc-icon>
                      <span class="name">${t.name}</span>
                    </div>
                  </label>
                `)}
              </div>
            </div>
            <div class="nc-chatui-modal-dialog-footer" slot="footer">
              <button class="cancel" @click=${()=>this.handleCancel()}>${this.i18n.t("dialog.cancel.msg")}</button>
              <button class="confirm" ?disabled=${this.checkedChannels.length===0} @click=${()=>this.handleConfirm()}>
                ${this.i18n.t("dialog.forwarding.confirm")}
              </button>
            </div>
          </nc-modal-dialog>
        </nc-modal-provider>
      </div>
    `}}h(fs,"styles",R`
    :host { display: block; }
    input { border: 0; padding: 0; outline: none; }
    .modal-forwarding-provider .nc-chatui-modal-provider {
      background-color: #00000080;
    }
    .nc-chatui-modal-dialog-header {
      font-size: 18px;
      padding: 40px 0 20px 0;
      line-height: 20px;
      text-align: center;
      width: 500px;
      margin: 0 auto;
      flex-shrink: 0;
    }
    .nc-chatui-modal-dialog-content {
      padding: 0;
      flex: 1;
      flex-direction: column;
      overflow: hidden;
    }
    .nc-chatui-modal-dialog-content .search {
      font-size: 14px;
      margin: 0 20px 16px 20px;
      position: relative;
      flex-shrink: 0;
    }
    .search .search-input {
      padding: 8px 28px 8px 30px;
      border: 0.5px solid #E4E7ED;
      background-color: #FFFFFF;
      width: 100%;
      box-sizing: border-box;
      border-radius: 30px;
      font-size: 14px;
      color: #41464F;
    }
    .search .search-input::placeholder { color: #41464F; }
    .search .search-icon { position: absolute; top: 50%; left: 10px; transform: translateY(-50%); }
    .list {
      min-height: 0;
      padding: 0 20px;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #FFFFFF;
      font-size: 12px;
      height: 214px;
    }
    .list-item {
      display: flex;
      align-items: center;
      border-radius: 8px;
      margin: 0 0 10px 0;
      cursor: pointer;
      font: inherit;
      color: inherit;
      width: 100%;
      box-sizing: border-box;
    }
    .list .channel {
      display: flex;
      align-items: center;
      overflow: hidden;
      min-width: 0;
    }
    .list .channel .profile { padding: 0 6px; flex-shrink: 0; }
    .list .channel .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
      font-size: 14px;
      font-weight: 500;
      color: #41464F;
    }
    .list-item .checkbox { flex-shrink: 0; }
    .list-item .checkbox input[type="checkbox"] { display: none; }
    .list-item .checkbox .custom {
      display: flex;
      width: 14px;
      height: 14px;
      border: 1px solid #0000001A;
      border-radius: 50%;
      background-color: #FFFFFF;
      font-size: 0;
      justify-content: center;
      align-items: center;
    }
    .list-item .checkbox .custom img {
      opacity: 0;
    }
    .list-item .checkbox input[type="checkbox"]:checked + .custom {
      background-color: #16D258;
      border-color: #16D258;
    }
    .list-item .checkbox input[type="checkbox"]:checked + .custom img {
      opacity: 1;
    }
    .nc-chatui-modal-dialog-footer {
      display: flex;
      justify-content: center;
      padding: 30px 0 40px 0;
    }
    .nc-chatui-modal-dialog-footer button {
      min-width: 70px;
      text-decoration: none;
      border-radius: 4px;
      outline: none;
      font-size: 16px;
      border: 0;
      margin: 0 15px;
      cursor: pointer;
      width: 110px;
      height: 36px;
      background-color: #F3F5FA;
    }
    .nc-chatui-modal-dialog-footer .cancel { color: #020814; }
    .nc-chatui-modal-dialog-footer .confirm { color: #FFFFFF; background-color: #0047FF; }
    .nc-chatui-modal-dialog-footer .confirm:disabled { color: #CCCCCC; background-color: #F3F5FA; cursor: not-allowed; }
    .cancel:hover { background-color: #E3E7EF; }
    .confirm:hover:not(:disabled) { background-color: #366EFF; }
    @media (max-width: 768px) {
      nc-modal-dialog {
        width: 100%;
        --nc-chatui-modal-mobile-width: 100%;
      }
      .nc-chatui-modal-dialog-header { width: auto; padding-left: 20px; padding-right: 20px; }
    }
  `);on([_()],fs.prototype,"search");on([_()],fs.prototype,"checkedChannels");on([_()],fs.prototype,"renderChannels");var Bc=Object.defineProperty,xe=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Bc(e,t,i),i};class Ce extends M{constructor(){super(...arguments),h(this,"_onDeleteMessages",e=>{e.data.forEach(t=>{const{messageId:s}=t;s===this.message.messageId&&(f().alert("alert.message-deleted"),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0})))})}),h(this,"handleCancel",()=>{this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}),h(this,"handleChangeHeight",(e,t)=>{if(t.stopPropagation(),this.message.messageType===C.SHORT_VIDEO){if(this.heightSize+e>100||this.heightSize+e<50)return;this.heightSize=this.heightSize+e}else{this.imgRef&&this.boxRef&&(this.selfStart=this.imgRef.clientHeight>this.boxRef.clientHeight);const s=Ee()?100:70;if(this.widthSize+e>s||this.widthSize+e<10)return;this.widthSize=this.widthSize+e}}),h(this,"handleFileDownload",()=>{this.dispatchEvent(new CustomEvent("download",{bubbles:!0,composed:!0}))}),h(this,"handleLoad",e=>{e.target.src!==mi&&(this.loadState="loaded",this.imgRef&&this.boxRef&&(this.selfStart=this.imgRef.clientHeight>this.boxRef.clientHeight))}),h(this,"handleError",()=>{this.loadState="error"})}connectedCallback(){super.connectedCallback(),this.widthSize=Ee()?100:50,this.heightSize=Ee()?100:80,this.upHover=!1,this.downHover=!1,this.downloadHover=!1,this.closeHover=!1,this.loadState="loading",this.selfStart=!1,f().addEventListener(x.MESSAGES_DELETED,this._onDeleteMessages)}disconnectedCallback(){super.disconnectedCallback(),f().removeEventListener(x.MESSAGES_DELETED,this._onDeleteMessages)}get thumbnailBase64(){const{messageType:e,content:t}=this.message;switch(e){case C.IMAGE:return t.thumbnailBase64;case C.SHORT_VIDEO:return t.thumbnailBase64;default:return""}}render(){const{messageType:e}=this.message,t=e===C.IMAGE||e===C.GIF,s=e===C.SHORT_VIDEO;return g`
      <div class="modal-media-message-provider">
        <nc-modal-provider @click=${this.handleCancel}>
          <div class="media-message-container">
            <div class="media-message-header" @click=${i=>i.stopPropagation()}>
              <div class="menu">
                <div class="btn-wrapper"
                  @mouseenter=${()=>{this.upHover=!0}}
                  @mouseleave=${()=>{this.upHover=!1}}>
                  <img class="btn" .src=${this.upHover?l1:o1}
                    @click=${i=>this.handleChangeHeight(5,i)} alt="MODAL_UP_ICON">
                </div>
                <div class="btn-wrapper"
                  @mouseenter=${()=>{this.downHover=!0}}
                  @mouseleave=${()=>{this.downHover=!1}}>
                  <img class="btn" .src=${this.downHover?c1:h1}
                    @click=${i=>this.handleChangeHeight(-5,i)} alt="MODAL_DOWN_ICON">
                </div>
                <div class="btn-wrapper"
                  @mouseenter=${()=>{this.downloadHover=!0}}
                  @mouseleave=${()=>{this.downloadHover=!1}}>
                  <img class="btn" .src=${this.downloadHover?d1:s1}
                    @click=${this.handleFileDownload} alt="MODAL_DOWNLOAD_ICON">
                </div>
                <div class="btn-wrapper"
                  @mouseenter=${()=>{this.closeHover=!0}}
                  @mouseleave=${()=>{this.closeHover=!1}}>
                  <img class="btn" .src=${this.closeHover?ea:Di}
                    @click=${this.handleCancel} alt="MODAL_CLOSE_ICON">
                </div>
              </div>
            </div>
            ${t?g`
              <div class="media-message-box ${this.selfStart?"self-start":""}"
                style="max-height: calc(100% - 54px)">
                <div class="media-message" style="width: ${this.widthSize}%">
                  <svg ?hidden=${this.loadState!=="loading"} class="loading-spinner-svg"
                    viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                    <path d="M512 1024c-282.7776 0-512-229.2224-512-512s229.2224-512 512-512 512 229.2224 512 512-229.2224 512-512 512z m0-921.6c-225.8944 0-409.6 183.7056-409.6 409.6s183.7056 409.6 409.6 409.6 409.6-183.7056 409.6-409.6-183.7056-409.6-409.6-409.6z" fill="#ffffff" opacity="0.3"></path>
                    <path d="M512 1024C229.2224 1024 0 794.7776 0 512c0-28.2624 22.9376-51.2 51.2-51.2s51.2 22.9376 51.2 51.2c0 225.8944 183.7056 409.6 409.6 409.6s409.6-183.7056 409.6-409.6c0-225.8944-183.7056-409.6-409.6-409.6-28.2624 0-51.2-22.9376-51.2-51.2s22.9376-51.2 51.2-51.2c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512z" fill="#ffffff"></path>
                  </svg>
                  <div class="media-message-preview">
                    <img ?hidden=${this.loadState==="loading"}
                      class=${this.loadState==="error"?"media-message-fail":""}
                      .src=${this.loadState==="error"?mi:this.message.content.remoteUrl}
                      @click=${i=>i.stopPropagation()}
                      @load=${this.handleLoad}
                      @error=${this.handleError}
                      alt="image">
                  </div>
                </div>
              </div>
            `:O}
            ${s?g`
              <div class="media-message-box" style="max-height: calc(100% - 54px)">
                <div class="media-message media-message-video" style="height: ${this.heightSize}%">
                  <video
                    .poster=${"data:image/png;base64,"+this.thumbnailBase64}
                    style="height: 100%;"
                    @click=${i=>i.stopPropagation()}
                    .src=${this.message.content.remoteUrl}
                    controls>
                    <track kind="subtitles">
                    <track kind="description">
                  </video>
                </div>
              </div>
            `:O}
          </div>
        </nc-modal-provider>
      </div>
    `}}h(Ce,"styles",R`
    :host { display: block; }
    /* Enforce [hidden] inside the shadow root against external img display rules. */
    [hidden] {
      display: none !important;
    }
    p { margin: 0; padding: 0; }
    .modal-media-message-provider .nc-chatui-modal-provider {
      background-color: #00000080;
    }
    .media-message-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .media-message-box {
      width: 100%;
      flex: 1;
      overflow-y: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 0;
    }
    .media-message-box.self-start {
      align-items: self-start;
    }
    .media-message-header {
      width: 100%;
      height: 54px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 25px;
      background-color: #FFFFFF;
      box-sizing: border-box;
      z-index: 2;
      flex-shrink: 0;
    }
    .media-message {
      width: 50%;
      font-size: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      max-width: 100%;
    }
    .loading-spinner-svg {
      animation: spin 1s linear infinite;
      margin: 20px auto;
      flex-shrink: 0;
    }
    .media-message-preview {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .media-message-preview img {
      width: 100%;
      height: auto;
      object-fit: contain;
      vertical-align: top;
    }
    img.media-message-fail {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 24px;
      z-index: 2;
    }
    .btn-wrapper {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.2s;
    }
    .btn-wrapper:hover { background-color: #D0DDFF; }
    .btn {
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: block;
    }
    video, img { max-width: 100%; max-height: 100%; }
    @media screen and (max-width: 768px) {
      .media-message-video {
        width: 100%;
      }
      .media-message-video video {
        width: 100%;
        object-fit: contain;
      }
    }
  `);xe([b({type:Object})],Ce.prototype,"message");xe([_()],Ce.prototype,"widthSize");xe([_()],Ce.prototype,"heightSize");xe([_()],Ce.prototype,"upHover");xe([_()],Ce.prototype,"downHover");xe([_()],Ce.prototype,"downloadHover");xe([_()],Ce.prototype,"closeHover");xe([_()],Ce.prototype,"loadState");xe([_()],Ce.prototype,"selfStart");xe([Z(".media-message img")],Ce.prototype,"imgRef");xe([Z(".media-message-box")],Ce.prototype,"boxRef");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=globalThis,zn=r=>r,As=Is.trustedTypes,jn=As?As.createPolicy("lit-html",{createHTML:r=>r}):void 0,ya="$lit$",ze=`lit$${Math.random().toFixed(9).slice(2)}$`,Sa="?"+ze,Vc=`<${Sa}>`,lt=document,Os=()=>lt.createComment(""),as=r=>r===null||typeof r!="object"&&typeof r!="function",ln=Array.isArray,zc=r=>ln(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ai=`[ 	
\f\r]`,Zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qn=/-->/g,Zn=/>/g,Je=RegExp(`>|${ai}(?:([^\\s"'>=/]+)(${ai}*=${ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wn=/'/g,Kn=/"/g,xa=/^(?:script|style|textarea|title)$/i,jc=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),qc=jc(1),Lt=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Yn=new WeakMap,rt=lt.createTreeWalker(lt,129);function Ma(r,e){if(!ln(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return jn!==void 0?jn.createHTML(e):e}const Zc=(r,e)=>{const t=r.length-1,s=[];let i,n=e===2?"<svg>":e===3?"<math>":"",a=Zt;for(let o=0;o<t;o++){const l=r[o];let c,d,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===Zt?d[1]==="!--"?a=qn:d[1]!==void 0?a=Zn:d[2]!==void 0?(xa.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=Je):d[3]!==void 0&&(a=Je):a===Je?d[0]===">"?(a=i??Zt,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Je:d[3]==='"'?Kn:Wn):a===Kn||a===Wn?a=Je:a===qn||a===Zn?a=Zt:(a=Je,i=void 0);const m=a===Je&&r[o+1].startsWith("/>")?" ":"";n+=a===Zt?l+Vc:u>=0?(s.push(c),l.slice(0,u)+ya+l.slice(u)+ze+m):l+ze+(u===-2?o:m)}return[Ma(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class os{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,d]=Zc(e,t);if(this.el=os.createElement(c,s),rt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=rt.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(ya)){const p=d[a++],m=i.getAttribute(u).split(ze),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:y[2],strings:m,ctor:y[1]==="."?Kc:y[1]==="?"?Yc:y[1]==="@"?Qc:Zs}),i.removeAttribute(u)}else u.startsWith(ze)&&(l.push({type:6,index:n}),i.removeAttribute(u));if(xa.test(i.tagName)){const u=i.textContent.split(ze),p=u.length-1;if(p>0){i.textContent=As?As.emptyScript:"";for(let m=0;m<p;m++)i.append(u[m],Os()),rt.nextNode(),l.push({type:2,index:++n});i.append(u[p],Os())}}}else if(i.nodeType===8)if(i.data===Sa)l.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(ze,u+1))!==-1;)l.push({type:7,index:n}),u+=ze.length-1}n++}}static createElement(e,t){const s=lt.createElement("template");return s.innerHTML=e,s}}function It(r,e,t=r,s){var i,n;if(e===Lt)return e;let a=s!==void 0?(i=t._$Co)==null?void 0:i[s]:t._$Cl;const o=as(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((n=a==null?void 0:a._$AO)==null||n.call(a,!1),o===void 0?a=void 0:(a=new o(r),a._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=a:t._$Cl=a),a!==void 0&&(e=It(r,a._$AS(r,e.values),a,s)),e}class Wc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??lt).importNode(t,!0);rt.currentNode=i;let n=rt.nextNode(),a=0,o=0,l=s[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Es(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new Xc(n,this,e)),this._$AV.push(c),l=s[++o]}a!==(l==null?void 0:l.index)&&(n=rt.nextNode(),a++)}return rt.currentNode=lt,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Es{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=It(this,e,t),as(e)?e===ie||e==null||e===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):e!==this._$AH&&e!==Lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ie&&as(this._$AH)?this._$AA.nextSibling.data=e:this.T(lt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=os.createElement(Ma(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)==null?void 0:t._$AD)===n)this._$AH.p(s);else{const a=new Wc(n,this),o=a.u(this.options);a.p(s),this.T(o),this._$AH=a}}_$AC(e){let t=Yn.get(e.strings);return t===void 0&&Yn.set(e.strings,t=new os(e)),t}k(e){ln(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new Es(this.O(Os()),this.O(Os()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=zn(e).nextSibling;zn(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Zs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ie}_$AI(e,t=this,s,i){const n=this.strings;let a=!1;if(n===void 0)e=It(this,e,t,0),a=!as(e)||e!==this._$AH&&e!==Lt,a&&(this._$AH=e);else{const o=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=It(this,o[s+l],t,l),c===Lt&&(c=this._$AH[l]),a||(a=!as(c)||c!==this._$AH[l]),c===ie?e=ie:e!==ie&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Kc extends Zs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ie?void 0:e}}class Yc extends Zs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ie)}}class Qc extends Zs{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=It(this,e,t,0)??ie)===Lt)return;const s=this._$AH,i=e===ie&&s!==ie||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==ie&&(s===ie||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Xc{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){It(this,e)}}const Jc={I:Es},Qn=Is.litHtmlPolyfillSupport;Qn==null||Qn(os,Es),(Is.litHtmlVersions??(Is.litHtmlVersions=[])).push("3.3.2");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ta=Symbol.for(""),ed=r=>{if((r==null?void 0:r.r)===Ta)return r==null?void 0:r._$litStatic$},Ra=r=>({_$litStatic$:r,r:Ta}),Xn=new Map,td=r=>(e,...t)=>{const s=t.length;let i,n;const a=[],o=[];let l,c=0,d=!1;for(;c<s;){for(l=e[c];c<s&&(n=t[c],(i=ed(n))!==void 0);)l+=i+e[++c],d=!0;c!==s&&o.push(n),a.push(l),c++}if(c===s&&a.push(e[s]),d){const u=a.join("$$lit$$");(e=Xn.get(u))===void 0&&(a.raw=a,Xn.set(u,e=a)),t=o}return r(e,...t)},La=td(qc);var sd=Object.defineProperty,hn=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&sd(e,t,i),i};class _s extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"weeklist",["time.format.sunday","time.format.monday","time.format.tueday","time.format.wedday","time.format.thurday","time.format.friday","time.format.satday"]),h(this,"_onDeleteMessages",e=>{e.data.forEach(t=>{const{messageId:s}=t;s===this.message.messageId&&(f().alert("alert.message-deleted"),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0})))})}),h(this,"handleCancel",()=>{this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}),h(this,"handleLinkClick",e=>{const t=e.detail,s=Array.isArray(t)?t[0]:t;f().emit(new v(x.MESSAGE_LINK_CLICK,s))})}connectedCallback(){super.connectedCallback(),this.loadFailed=!1;const e=this.msgContent={...this.message.content};f().addEventListener(x.MESSAGES_DELETED,this._onDeleteMessages),e.remoteUrl&&fetch(e.remoteUrl).then(t=>t.ok?t.json():null).then(t=>{if(!(!this.isConnected||this.msgContent!==e)){if(!Array.isArray(t)){this.loadFailed=!0;return}this.msgContent={...e,msgList:t}}}).catch(()=>{this.isConnected&&this.msgContent===e&&(this.loadFailed=!0)})}disconnectedCallback(){super.disconnectedCallback(),f().removeEventListener(x.MESSAGES_DELETED,this._onDeleteMessages),f().audioPlayer.stop()}handleTimeFilter(e){const{year:t,month:s,day:i,weekDay:n}=Tt(e),a=(Date.now()-e)/1e3/60/60/24;let o=this.i18n.t("time.format.full",t,s,i);return new Date().toDateString()===new Date(e).toDateString()?o=this.i18n.t("time.format.today"):new Date().toDateString()!==new Date(e).toDateString()&&a<1||1<=a&&a<2?o=this.i18n.t("time.format.yesterday"):2<=a&&a<7&&(o=this.i18n.t(this.weeklist[n])),o}getMessageRenderList(){const e=se.createMessage(this.message.channelIdentifier,{content:this.msgContent,messageType:C.COMBINE},this.message.senderUserId),t=se.unwrapCombineMessage(e);if(t.length===0)return[];const s=[];for(let i=t.length-1;i>=0;i-=1){const n=new Re(t[i]);s.unshift(n),n.messageType===C.HD_VOICE&&(n.messageId=n.messageId||`${n.sentTime}`);const a=t[i-1];a?new Date(n.sentTime).toDateString()!==new Date(a.sentTime).toDateString()&&s.unshift(this.handleTimeFilter(n.sentTime)):s.unshift(this.handleTimeFilter(n.sentTime))}return s}getUserProfile(e){return f().appData.getUserProfile(e.senderUserId)}getTitle(){const e=this.message.content;return!e||!e.channelType||!e.nameList?"":e.channelType===T.DIRECT?e.nameList.length===2?this.i18n.t("private.combine-msg.title",...e.nameList):this.i18n.t("private.combine-msg.signal.title",...e.nameList):this.i18n.t("group.combine-msg.title")}timeController(e){const{hour:t,minute:s}=Tt(e);return`${t}:${s}`}handleBubbleClick(e){switch(e.messageType){case C.IMAGE:case C.GIF:case C.SHORT_VIDEO:{f().emit(new v(x.MEDIA_MESSAGE_MODAL_EVENT,e));break}case C.COMBINE:f().emit(new v(x.COMBINE_MESSAGE_MODAL_EVENT,e));break}}handleFileDownload(e){this.dispatchEvent(new CustomEvent("download",{bubbles:!0,composed:!0,detail:[e]}))}render(){const e=this.loadFailed?[]:this.getMessageRenderList(),t=this.getTitle();return g`
      <div class="modal-combine-provider" @click=${this.handleCancel}>
        <div class="nc-chatui-combine-box" @click=${s=>s.stopPropagation()}>
          <div class="nc-imkit-combine-header">
            <div class="title">${t}</div>
            <button class="close" type="button" aria-label=${this.i18n.t("dialog.cancel.msg")} @click=${this.handleCancel}>
              <img src=${Di} alt="">
            </button>
          </div>
          <div class="nc-imkit-combine-body">
            ${this.loadFailed?g`
              <div class="load-error" role="status">${this.i18n.t("combine-msg.load-failed")}</div>
            `:g`
              <nc-scrollbar-provider>
                <div style="padding: 10px 20px;">
                  ${e.map(s=>{if(typeof s=="string")return g`<nc-message-time style="margin-bottom: 10px;" .time=${s}></nc-message-time>`;const i=this.getUserProfile(s),n=Ra(Va(s.messageType)),a=()=>this.handleFileDownload(s),o=this.handleLinkClick;return g`
                      <div class="nc-chatui-msg-list-item" style="flex-direction: row;">
                        <nc-icon class="nc-chatui-msg-avatar"
                          .url=${i.avatarUrl}
                          width="32" height="32"
                          radius="50" .online=${!1}></nc-icon>
                        <div class="nc-chatui-msg-bubble" @click=${()=>this.handleBubbleClick(s)}>
                          <p class="name">${i.name}</p>
                          <div class="message-body-wrapper">
                            ${La`<${n} .message=${s} @download=${a} @link=${o}></${n}>`}
                          </div>
                          <div class="footer">
                            <span class="time">${this.timeController(s.sentTime)}</span>
                          </div>
                        </div>
                      </div>
                    `})}
                </div>
              </nc-scrollbar-provider>
            `}
          </div>
        </div>
      </div>
    `}}h(_s,"styles",R`
    :host { display: block; }
    p { margin: 0; padding: 0; }
    .modal-combine-provider {
      flex-direction: column;
      position: absolute;
      inset: 0px;
      z-index: 2;
      background-color: rgba(0, 0, 0, .5);
    }
    .nc-imkit-combine-body-iframe {
      height: 100%;
      background-color: #fff;
    }
    .nc-chatui-combine-box {
      background-color: #E6ECF3;
      height: 70%;
      width: 50%;
      box-shadow: 0px 10px 16px 0px #00000033;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      overflow: hidden;
    }
    .nc-imkit-combine-header {
      background-color: #FFFFFF;
      position: relative;
      flex-shrink: 0;
    }
    .title {
      text-align: center;
      line-height: 19px;
      font-size: 12px;
      padding: 11px 50px;
    }
    .close {
      position: absolute;
      top: 50%;
      right: 5px;
      width: 40px;
      height: 40px;
      padding: 5px;
      border: 0;
      background: transparent;
      transform: translate(0, -50%);
      cursor: pointer;
    }
    .close img { width: 30px; height: 30px; }
    @media (max-width: 768px) {
      .nc-chatui-combine-box {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: none;
        border-radius: 0;
      }
    }
    .nc-imkit-combine-body {
      flex: 1;
      overflow: hidden;
    }
    .load-error {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      color: #7C838E;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
    .nc-imkit-iframe {
      height: 100%;
      width: 100%;
      overflow: scroll;
      border: 0;
    }
    .nc-chatui-msg-list-item {
      display: flex;
      width: 100%;
      font-size: 12px;
      margin-bottom: 20px;
    }
    .nc-chatui-msg-avatar {
      padding: 0 8px;
      flex-shrink: 0;
    }
    .nc-chatui-msg-bubble {
      min-width: 0;
      padding: 0 10px 8px 12px;
      border-radius: 0px 8px 8px;
      font-size: 12px;
      line-height: 16px;
      background-color: #fff;
    }
    .name {
      font-weight: 500;
      font-size: 12px;
      margin: 0 0 5px 0;
      line-height: 16px;
      word-break: break-word;
    }
    .footer {
      text-align: right;
      margin-top: 5px;
      font-size: 10px;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
    .time {
      display: inline-block;
      margin-left: 7px;
      font-size: 12px;
      color: #7B87A5;
    }
    .message-body-wrapper { }
  `);hn([b({type:Object})],_s.prototype,"message");hn([_()],_s.prototype,"msgContent");hn([_()],_s.prototype,"loadFailed");var id=Object.defineProperty,Ht=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&id(e,t,i),i};class We extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"query",null),h(this,"requestGeneration",0),h(this,"handleClose",()=>{this.requestGeneration+=1,this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))})}connectedCallback(){var e,t,s;super.connectedCallback(),this.userList=[],this.loadingMore=!1;const i=(e=this.message)==null?void 0:e.reactions.find(n=>n.reactionId===this.initialReactionId);this.selectReaction((i==null?void 0:i.reactionId)||((s=(t=this.message)==null?void 0:t.reactions[0])==null?void 0:s.reactionId)||"")}disconnectedCallback(){this.requestGeneration+=1,this.query=null,super.disconnectedCallback()}selectReaction(e){var t;if(!e||e===this.selectedReactionId&&this.query)return;this.selectedReactionId=e,this.userList=[],this.loadingMore=!1,(t=this.userListEl)==null||t.scrollTo({top:0});const s=++this.requestGeneration;this.query=je.createMessageReactionUsersQuery({channelIdentifier:this.message.channelIdentifier,messageId:this.message.messageId,reactionId:e,count:50}),this.loadNextPage(s,e,this.query)}async loadNextPage(e=this.requestGeneration,t=this.selectedReactionId,s=this.query){var i;if(!s||!s.hasNext||this.loadingMore||s.isLoading)return;this.loadingMore=!0;let n;try{n=await s.loadNextPage()}catch(c){if(this.isCurrentRequest(e,t,s)){this.loadingMore=!1;const d=typeof c=="object"&&c!==null&&"code"in c?String(c.code):"";f().alert("alert.imlib.failed.generic",d)}return}if(!this.isCurrentRequest(e,t,s))return;if(!n.isOk){this.loadingMore=!1,f().alert("alert.imlib.failed.generic",n.code);return}const a=((i=n.data)==null?void 0:i.data)||[],o=await this.resolveUsers(a);if(!this.isCurrentRequest(e,t,s))return;const l=new Set(this.userList.map(c=>c.userId));this.userList=[...this.userList,...o.filter(c=>!l.has(c.userId))],this.loadingMore=!1}isCurrentRequest(e,t,s){return this.isConnected&&e===this.requestGeneration&&t===this.selectedReactionId&&s===this.query}async resolveUsers(e){const t=[...new Set(e.map(n=>n.userId))];let s=[];try{s=await f().appData.requestUserProfiles(t)}catch{}const i=new Map(s.map(n=>[n.userId,n]));return t.map(n=>{const a=i.get(n),o=this.message.channelType===T.GROUP?Ha(n):void 0;return{userId:n,name:(o==null?void 0:o.nickname)||(a==null?void 0:a.name)||(o==null?void 0:o.name)||n,avatarUrl:(a==null?void 0:a.avatarUrl)||(o==null?void 0:o.avatarUrl)||""}})}handleScroll(){var e;if(!((e=this.query)!=null&&e.hasNext)||this.loadingMore)return;const t=this.userListEl;t&&t.scrollTop+t.clientHeight>=t.scrollHeight-20&&this.loadNextPage()}render(){var e;return g`
      <nc-modal-provider @click=${this.handleClose}>
        <div class="reactions-detail-panel" @click=${t=>t.stopPropagation()}>
          <div class="reactions-detail-header">${this.i18n.t("reaction.detail.title")}</div>
          <div class="reactions-detail-body">
            <div class="reactions-tab-list">
              ${(e=this.message)==null?void 0:e.reactions.map(t=>g`
                <button
                  class="reactions-tab-item ${this.selectedReactionId===t.reactionId?"reactions-tab-item-active":""}"
                  type="button"
                  @click=${()=>this.selectReaction(t.reactionId)}
                >
                  <span class="tab-emoji">${t.reactionId}</span>
                  <span class="tab-count">${t.totalCount>99?"99+":t.totalCount}</span>
                </button>
              `)}
            </div>
            <div class="reactions-user-list" @scroll=${this.handleScroll}>
              ${this.userList.map(t=>g`
                <div class="reactions-user-item">
                  <nc-icon
                    .url=${t.avatarUrl}
                    .width=${32}
                    .height=${32}
                    .radius=${50}
                    .online=${!1}
                  ></nc-icon>
                  <span class="user-name">${t.name}</span>
                </div>
              `)}
              ${this.loadingMore?g`
                <div class="reactions-user-loading">${this.i18n.t("reaction.detail.loading")}</div>
              `:O}
            </div>
          </div>
        </div>
      </nc-modal-provider>
    `}}h(We,"styles",R`
    :host {
      display: block;
    }

    .reactions-detail-panel {
      display: flex;
      flex-direction: column;
      width: 520px;
      height: 460px;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - 32px);
      overflow: hidden;
      background: #FFFFFF;
      border-radius: 6px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
    }

    .reactions-detail-header {
      flex-shrink: 0;
      padding: 16px 20px;
      color: #020814;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      border-bottom: 1px solid #E5E5E5;
    }

    .reactions-detail-body {
      display: flex;
      flex: 1;
      min-height: 0;
    }

    .reactions-tab-list {
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      gap: 8px;
      width: 120px;
      padding: 12px 16px;
      overflow-y: auto;
      border-right: 1px solid #E5E5E5;
      box-sizing: border-box;
    }

    .reactions-tab-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 6px 12px;
      color: #41464F;
      font-size: 14px;
      white-space: nowrap;
      background-color: #F3F5FA;
      border: 0;
      border-radius: 14px;
      cursor: pointer;
    }

    .reactions-tab-item:hover {
      background-color: #E3E7EF;
    }

    .reactions-tab-item-active {
      color: #FFFFFF;
      background-color: #0047FF;
    }

    .tab-emoji {
      font-size: 16px;
    }

    .tab-count {
      font-size: 12px;
    }

    .reactions-user-list {
      flex: 1;
      min-width: 0;
      padding: 12px 0;
      overflow-y: auto;
    }

    .reactions-user-loading {
      padding: 20px;
      color: #7C838E;
      font-size: 14px;
      text-align: center;
    }

    .reactions-user-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 20px;
    }

    .user-name {
      min-width: 0;
      overflow: hidden;
      color: #41464F;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `);Ht([b({type:Object})],We.prototype,"message");Ht([b({type:String})],We.prototype,"initialReactionId");Ht([Z(".reactions-user-list")],We.prototype,"userListEl");Ht([_()],We.prototype,"selectedReactionId");Ht([_()],We.prototype,"loadingMore");Ht([_()],We.prototype,"userList");var nd=Object.defineProperty,ut=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&nd(e,t,i),i};class Fe extends M{constructor(){super(...arguments),h(this,"timer",null),h(this,"timerHide",null),h(this,"scrollControl"),h(this,"resizeRefObserver",null),h(this,"wrapRefObserver",null),h(this,"updateScrollbar",()=>{if(!this.wrapRef)return;const e=this.wrapRef.offsetHeight,t=e**2/this.wrapRef.scrollHeight,s=Math.max(t,20);this.ratioY=t/(e-t)/(s/(e-s)),this.sizeHeight=t<e?Math.floor(s):0}),h(this,"handleMouseEnter",()=>{this.isHovering=!0,this.showScrollbar=!0,this.timerHide&&clearTimeout(this.timerHide)}),h(this,"handleMouseLeave",()=>{this.isHovering=!1,this.timerHide&&clearTimeout(this.timerHide),this.timerHide=setTimeout(()=>{this.showScrollbar=!1},1e3)}),h(this,"handleMove",e=>{var t;if((t=this.scrollControl)!=null&&t.isScrollDisabled||!this.wrapRef)return;const s=e.detail[0];this.wrapRef.scrollTop=s*this.wrapRef.scrollHeight/100}),h(this,"handleScroll",()=>{var e;if((e=this.scrollControl)!=null&&e.isScrollDisabled||(this.showScrollbar=!0,this.timerHide&&clearTimeout(this.timerHide),this.isHovering||(this.timerHide=setTimeout(()=>{this.showScrollbar=!1},1e3)),!this.wrapRef))return;const{offsetHeight:t,scrollHeight:s,scrollTop:i}=this.wrapRef;this.moveY=Math.floor(i*100/t*this.ratioY),s/(t+i)<=1.2&&(this.timer||(this.timer=setTimeout(async()=>{this.dispatchEvent(new CustomEvent("loading",{bubbles:!0,composed:!0})),this.timer=null,clearTimeout(this.timer)},1e3)))}),h(this,"_onDestroyUserCache",()=>{this.setScrollTop(0)})}setScrollTop(e){typeof e=="number"&&this.wrapRef&&(this.wrapRef.scrollTop=e)}getViewportRect(){var e;return(e=this.wrapRef)==null?void 0:e.getBoundingClientRect()}getViewportSize(){return this.wrapRef?{width:this.wrapRef.clientWidth,height:this.wrapRef.clientHeight}:{width:0,height:0}}getScrollPosition(){return this.wrapRef?{left:this.wrapRef.scrollLeft,top:this.wrapRef.scrollTop}:{left:0,top:0}}get isScrollDisabled(){var e;return(e=this.scrollControl)==null?void 0:e.isScrollDisabled}disableScroll(){var e;(e=this.scrollControl)==null||e.disableScroll()}enableScroll(){var e;(e=this.scrollControl)==null||e.enableScroll()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateScrollbar),f().addEventListener(E.DESTROY_USER_CACHE,this._onDestroyUserCache)}disconnectedCallback(){var e,t,s;super.disconnectedCallback(),window.removeEventListener("resize",this.updateScrollbar),f().removeEventListener(E.DESTROY_USER_CACHE,this._onDestroyUserCache),(e=this.scrollControl)==null||e.enableScroll(),this.timerHide&&clearTimeout(this.timerHide),(t=this.resizeRefObserver)==null||t.disconnect(),(s=this.wrapRefObserver)==null||s.disconnect()}firstUpdated(){this.scrollControl=Dr({value:this.wrapRef}),this.resizeRefObserver=new ResizeObserver(this.updateScrollbar),this.wrapRefObserver=new ResizeObserver(this.updateScrollbar),this.resizeRef&&this.resizeRefObserver.observe(this.resizeRef),this.wrapRef&&this.wrapRefObserver.observe(this.wrapRef),this.wrapRef&&this.wrapRef.addEventListener("loadedmetadata",this.updateScrollbar),this.updateScrollbar()}updated(){if(this.wrapRef){const{offsetHeight:e,scrollTop:t}=this.wrapRef;this.moveY=Math.floor(t*100/e*this.ratioY)}}render(){var e;return g`
      <div class="nc-chatui-scrollbar">
        <div class="wrap" @scroll=${this.handleScroll}>
          <div class="resize-ref" style="min-height: 100%;">
            <slot></slot>
          </div>
        </div>
        ${this.sizeHeight?g`
          <nc-scrollbar-thumb-provider
            .height=${this.sizeHeight}
            .move=${this.moveY}
            .scrollheight=${(e=this.wrapRef)==null?void 0:e.scrollHeight}
            .ratio=${this.ratioY}
            style="opacity: ${this.showScrollbar?1:0}; transition: opacity 0.5s; pointer-events: ${this.showScrollbar?"auto":"none"}"
            @handlemove=${t=>this.handleMove(t)}
            @mouseenter=${this.handleMouseEnter}
            @mouseleave=${this.handleMouseLeave}
          ></nc-scrollbar-thumb-provider>
        `:""}
      </div>
    `}}h(Fe,"styles",R`
    :host {
      display: block;
      height: 100%;
    }
    .nc-chatui-scrollbar {
      overflow: hidden;
      position: relative;
      height: 100%;
    }
    .wrap {
      overflow-y: scroll;
      height: 100%;
      scrollbar-width: none;
    }
    .wrap::-webkit-scrollbar {
      display: none;
    }
  `);ut([Z(".wrap")],Fe.prototype,"wrapRef");ut([Z(".resize-ref")],Fe.prototype,"resizeRef");ut([_()],Fe.prototype,"ratioY");ut([_()],Fe.prototype,"sizeHeight");ut([_()],Fe.prototype,"moveY");ut([_()],Fe.prototype,"showScrollbar");ut([_()],Fe.prototype,"isHovering");var rd=Object.defineProperty,Cs=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&rd(e,t,i),i};class pt extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"context",f()),h(this,"typingTimer",null),h(this,"checkDevice",()=>{this.isH5=Ee()}),h(this,"handleBack",()=>{var e;A.value&&this.context.channelModule.handleChannelDraft(A.value.channelIdentifier,(e=D.value)==null?void 0:e.value),this.context.channelModule.setOpenedChannel(null,!1)}),h(this,"handleExtension",e=>{this.context.emit(new v(x.CHANNEL_PANEL_EXTENSION_TOUCH,{id:e.id,channelModel:this.model}))}),h(this,"handleChannelNaviClick",()=>{this.context.emit(new v(x.CHANNEL_NAVI_CLICK,this.model.clone()),2)}),h(this,"_onTypingStatus",e=>{const{channelIdentifier:t,userTypingStatus:s}=e;if(!A.value||!A.value.channelIdentifier.isEqualTo(t))return;const i=s;if(i.length===0)return;this.typingTimer&&(clearTimeout(this.typingTimer),this.typingTimer=null,this.showTypingStatus=!1,this.typingContent="");const n=i.some(a=>a.typingMessageType===C.TEXT);this.typingContent=n?this.i18n.t("channel.detail.bar.typing"):this.i18n.t("channel.detail.bar.typing.audio"),this.showTypingStatus=!0,this.typingTimer=setTimeout(()=>{this.showTypingStatus=!1,this.typingContent=""},5e3)}),h(this,"_onChannelSelected",e=>{this.showTypingStatus=!1}),h(this,"_onRecvNewMessages",e=>{if(!A.value||this.model.channelType===T.GROUP)return;const t=e.data,s=this.context.userId;t.some(i=>A.value.channelIdentifier.isEqualTo(i.channelIdentifier)&&i.senderUserId!==s)&&(this.typingTimer&&(clearTimeout(this.typingTimer),this.typingTimer=null),this.showTypingStatus=!1,this.typingContent="")})}connectedCallback(){super.connectedCallback(),this.checkDevice(),window.addEventListener("resize",this.checkDevice),X.addChannelHandler("channel-detail-bar-provider",new yr({onTypingStatusChanged:this._onTypingStatus})),f().addEventListener(x.CHANNEL_SELECTED,this._onChannelSelected),f().addEventListener(E.RECV_NEW_MESSAGES,this._onRecvNewMessages)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.checkDevice),X.removeChannelHandler("channel-detail-bar-provider"),f().removeEventListener(x.CHANNEL_SELECTED,this._onChannelSelected),f().removeEventListener(E.RECV_NEW_MESSAGES,this._onRecvNewMessages)}render(){const e=this.model.channelType===T.GROUP,t=this.context.store.getChannelPanelExtension().filter(s=>!s.filter||s.filter(this.model));return g`
      <div class="nc-channel-detail-bar ${this.isH5?"is-h5":""}">
        ${this.isH5&&this.showBack?g`
          <div class="back-button" @click=${this.handleBack}>
            <span class="back-icon">&lt;</span>
          </div>
        `:""}
        <div class="info">
          <img @click=${this.handleChannelNaviClick} class="icon" .src=${this.model.avatarUrl} alt="">
          <span class="name">${this.model.name}</span>
          ${this.model.noDisturbLevel===5?g`<nc-channel-muted-icon></nc-channel-muted-icon>`:""}
          ${e?g`
            <img class="member-icon" .src=${B1} alt="Group Members Icon">
            <span class="member-count">${this.model.memberCount}</span>
          `:""}
          ${this.showTypingStatus&&!e?g`<span class="typing-content">${this.typingContent}</span>`:""}
        </div>
        <div class="extension">
          ${t.map(s=>g`
            <img class="extension-icon" .src=${s.icon} .key=${s.id} alt="Extension Icon" @click=${()=>this.handleExtension(s)}>
          `)}
        </div>
      </div>
    `}}h(pt,"styles",R`
    :host { display: block; }
    .nc-channel-detail-bar {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px dashed #E4E7ED;
      position: relative;
      z-index: 2;
      background-color: #fff;
    }
    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: auto;
    }
    .icon {
      width: 32px;
      height: 32px;
      margin: 0 10px 0 20px;
      cursor: pointer;
    }
    .name {
      font-size: 16px;
      color: #020814;
      font-weight: 500;
    }
    .member-icon {
      margin: 0 4px 0 20px;
      width: 12px;
      height: 12px;
    }
    .member-count {
      font-size: 12px;
      color: #bcbcbc;
    }
    .extension {
      margin: 0 28px 0 10px;
    }
    .extension-icon {
      width: 26px;
      height: 26px;
      margin-right: 10px;
      cursor: pointer;
    }
    .typing-content {
      margin-left: 5px;
      font-size: 12px;
      color: #7C838E;
    }
    .back-button {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      margin-left: 5px;
      font-weight: 500;
      color: #000;
      cursor: pointer;
    }
  `);Cs([b({type:Object})],pt.prototype,"model");Cs([b({type:Boolean})],pt.prototype,"showBack");Cs([_()],pt.prototype,"isH5");Cs([_()],pt.prototype,"showTypingStatus");Cs([_()],pt.prototype,"typingContent");class gt{constructor(e,t=[]){h(this,"_unsubscribers",[]),h(this,"_signals",new Set),h(this,"_connected",!1),this.host=e,t.forEach(s=>this._signals.add(s)),this.host.addController(this)}watch(e){this._signals.has(e)||(this._signals.add(e),this._connected&&this._watch(e))}_watch(e){const t=e.subscribe(()=>this.host.requestUpdate());this._unsubscribers.push(t)}hostConnected(){this._connected||(this._connected=!0,this._signals.forEach(e=>this._watch(e)),this.host.requestUpdate())}hostDisconnected(){this._connected=!1,this._unsubscribers.forEach(e=>e()),this._unsubscribers=[]}}class ad extends M{constructor(){super(...arguments),h(this,"_signals",new gt(this,[bi]))}async _handleForward(e){if(De.value.length<=0)return;if(De.value.length>100){f().alert("alert.forward.over.length");return}const t=[C.TEXT,C.IMAGE,C.FILE,C.HD_VOICE,C.COMBINE,C.GIF,C.SHORT_VIDEO,C.FILE,C.REFERENCE];e===Ct.MERGE&&t.splice(t.length-1,1),De.value.sort((i,n)=>i.sentTime-n.sentTime);const s=[];if(De.value.forEach((i,n)=>{t.includes(i.messageType)&&i.sentStatus!==L.SENDING&&i.sentStatus!==L.FAILED||s.push(n+1)}),s.length>0){f().alert("alert.forward.not.supported",`${s.join(",")}`);return}await za(e,De.value)&&(le.value=!1)}render(){return g`
      <nc-multi-choice-menu
        .count=${bi.value}
        @forward=${()=>this._handleForward(Ct.SINGLE)}
        @merge-forward=${()=>this._handleForward(Ct.MERGE)}
        @cancel=${()=>{le.value=!1}}
      ></nc-multi-choice-menu>
    `}}var od=Object.defineProperty,cn=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&od(e,t,i),i};class Ws extends M{constructor(){super(...arguments),h(this,"context",f()),h(this,"onAudioPlay",e=>{this.parseAudioState(e.data)}),h(this,"onToggle",()=>{if(this.playing)this.context.audioPlayer.pause();else{const e=this.message.content;this.context.audioPlayer.play(e.remoteUrl,this.message.messageId,this.message.transactionId)}})}parseAudioState(e){const{status:t,progress:s,messageUId:i,transactionId:n}=e,{messageId:a,transactionId:o}=this.message;if(a&&a===i||n&&n===o){this.playing=t==="playing",this.progress=s,s===100&&setTimeout(()=>this.progress=0,300);return}this.progress=0,this.playing=!1}connectedCallback(){super.connectedCallback(),this.context.addEventListener(E.AUDIO_PLAY_EVENT,this.onAudioPlay);const e=this.context.audioPlayer.getCurrentState();this.parseAudioState(e)}disconnectedCallback(){super.disconnectedCallback(),this.context.removeEventListener(E.AUDIO_PLAY_EVENT,this.onAudioPlay)}render(){const e=this.message.content.duration,t=this.message.direction===ue.SEND,s={duration:e,isOwner:t,playing:this.playing,progress:this.progress,toggle:this.onToggle};return g`<nc-hd-voice-message .value=${s}></nc-hd-voice-message>`}}cn([b({type:Object})],Ws.prototype,"message");cn([_()],Ws.prototype,"progress");cn([_()],Ws.prototype,"playing");var ld=Object.defineProperty,dn=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&ld(e,t,i),i};class vs extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"_signals",new gt(this,[A,le,Ei])),h(this,"showConnectionStatus",f().store.getCommandSwitch(te.SHOW_CONNECTION_STATUS_IN_CHANNEL_LIST)),h(this,"checkDevice",()=>{this.isH5=Ee()}),h(this,"_onConnectionStatusChange",e=>{const{status:t,code:s}=e.data;this.connectionStatus=t,this.connectionCode=s})}connectedCallback(){super.connectedCallback(),Pa(),this.checkDevice(),window.addEventListener("resize",this.checkDevice),this.connectionStatus=f().status,f().addEventListener(E.CONNECTION_STATUS_CHANGE,this._onConnectionStatusChange,this)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.checkDevice),f().removeEventListener(E.CONNECTION_STATUS_CHANGE,this._onConnectionStatusChange,this)}render(){const e=A.value,t=e&&e.channelType===T.SYSTEM,s=this.i18n.t("channel.empty.desc"),i=le.value;return g`
      <div class="nc-chatui-app-wrapper-right ${this.isH5?"is-h5":""}">
        <div class="nc-chatui-app-inner">
          <nc-connection-status
            .visible=${this.showConnectionStatus&&this.connectionStatus!==q.CONNECTED}
            .status=${this.connectionStatus}
            .code=${this.connectionCode}
          ></nc-connection-status>
          ${e?g`
            <nc-channel-detail-bar-provider
              .model=${e}
              .showBack=${Ei.value}
            ></nc-channel-detail-bar-provider>
            <nc-toast-provider></nc-toast-provider>
            <nc-message-list-provider class="nc-chatui-msg-list"></nc-message-list-provider>
            ${t?"":g`<nc-input-provider .model=${e} style=${i?"display: none":""}></nc-input-provider>`}
            ${i?g`<nc-multi-choice-menu-provider></nc-multi-choice-menu-provider>`:""}
          `:g`
            <nc-channel-empty style="width: 100%; height: 100%;" .desc=${s}></nc-channel-empty>
          `}
        </div>
      </div>
    `}}h(vs,"styles",R`
    :host {
      display: block;
      height: 100%;
    }
    .nc-chatui-app-wrapper-right {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .nc-chatui-app-inner {
      width: 100%;
      height: 100%;
      min-width: 600px;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .nc-chatui-app-wrapper-right.is-h5 .nc-chatui-app-inner {
      min-width: 0;
    }
    .nc-chatui-msg-list {
      flex: 1 1 auto;
      overflow: hidden;
      background-color: #FFFFFF;
      position: relative;
    }
    .camera-screen {
      flex: 1 auto;
    }
  `);dn([_()],vs.prototype,"isH5");dn([_()],vs.prototype,"connectionStatus");dn([_()],vs.prototype,"connectionCode");var hd=Object.defineProperty,cd=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&hd(e,t,i),i};class un extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"_signals",new gt(this,[fi,_i])),h(this,"checkDevice",()=>{this.isH5=Ee()})}connectedCallback(){super.connectedCallback(),Pa(),this.checkDevice(),window.addEventListener("resize",this.checkDevice)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.checkDevice)}render(){const e=fi.value,t=_i.value||this.i18n.t("channel.list.bar.title");return g`
      <div class="nc-chatui-app-wrapper-left ${this.isH5?"is-h5":""}">
        ${this.isH5&&e?g`
          <div class="nc-chatui-app-conv-bar">
            <div class="bar-content">
              <span class="bar-title">${t}</span>
            </div>
          </div>
        `:""}
        <div class="nc-chatui-app-conv">
          <nc-channel-list-provider></nc-channel-list-provider>
        </div>
      </div>
    `}}h(un,"styles",R`
    :host {
      display: block;
      height: 100%;
    }
    .nc-chatui-app-wrapper-left {
      min-width: 312px;
      width: 312px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .nc-chatui-app-wrapper-left.is-h5 {
      min-width: 0;
      width: 100%;
    }
    .bar-content {
      width: 100%;
      height: 68px;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      z-index: 2;
      background-color: #fff;
      border-bottom: 1px solid #efefef;
    }
    .bar-title {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      margin: 0 20px;
    }
    .nc-chatui-app-conv {
      flex: auto;
      overflow: hidden;
    }
  `);cd([_()],un.prototype,"isH5");var dd=Object.defineProperty,ud=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&dd(e,t,i),i};class pn extends M{constructor(){super(...arguments),h(this,"_signals",new gt(this,[A])),h(this,"checkDevice",()=>{this.isH5=Ee()})}connectedCallback(){super.connectedCallback(),this.checkDevice(),window.addEventListener("resize",this.checkDevice)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.checkDevice)}render(){const e=A.value!==null;return g`
      <div class="nc-chatui-app ${this.isH5?"is-h5":""}">
        ${!this.isH5||!e?g`<nc-channel-list-container-provider class="list"></nc-channel-list-container-provider>`:""}
        ${!this.isH5||e?g`<nc-channel-detail-provider class="detail"></nc-channel-detail-provider>`:""}
      </div>
    `}}h(pn,"styles",R`
    :host {
      display: block;
      height: 100%;
    }
    .nc-chatui-app {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
    }
    .nc-chatui-app.is-h5 {
      flex-direction: column;
    }
    .detail {
      flex: 1 auto;
      overflow: hidden;
    }
    .list {
      border-right: 1px solid #E4E7ED;
    }
    .nc-chatui-app.is-h5 .list {
      border-right: none;
      border-bottom: 1px solid #E4E7ED;
      height: 100%;
    }
  `);ud([_()],pn.prototype,"isH5");const Ia=()=>{let r,e,t=!1;const s=()=>{r!==void 0&&clearTimeout(r),r=void 0,e=void 0},i=()=>{s(),t=!1},n=l=>{if(i(),navigator.maxTouchPoints===0||/Android/i.test(navigator.userAgent)||l.touches.length!==1)return;const c=l.currentTarget;if(!(c instanceof HTMLElement))return;const{clientX:d,clientY:u}=l.touches[0];e={clientX:d,clientY:u},r=setTimeout(()=>{s(),c.isConnected&&(t=!0,c.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:d,clientY:u})))},500)},a=l=>{if(l.touches.length!==1){s();return}if(!e)return;const{clientX:c,clientY:d}=l.touches[0];(Math.abs(c-e.clientX)>10||Math.abs(d-e.clientY)>10)&&s()},o=Object.assign(l=>{t&&l.preventDefault(),i()},{passive:!1});return{start:n,move:a,end:o,cancel:i}};var pd=Object.defineProperty,Ft=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&pd(e,t,i),i};const gd=r=>{var e;const t=qa(r);if(!r||r.messageType!==C.FILE)return t;const s=(e=r.content)==null?void 0:e.name;return s?`${t}${s}`:t};class Ke extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"longPress",Ia()),h(this,"_signalController",new gt(this,[A,ee,ht])),h(this,"scrollbarEl",null),h(this,"menuRef",null),h(this,"wrapRef",null),h(this,"weeklist",["time.format.sunday","time.format.monday","time.format.tueday","time.format.wedday","time.format.thurday","time.format.friday","time.format.satday"]),h(this,"checkDevice",()=>{this.isH5=Ee()}),h(this,"handleChannelRightClick",async(e,t)=>{var s,i,n,a,o;t.preventDefault();const l=f(),c=H(e.channelIdentifier),d=l.channelsMenu.getMenum(e).map(K=>({id:K.id,icon:K.icon,label:this.i18n.t(K.id),target:c}));this.menu=d,this.rightClickedChannelKey=c,this.menuDisplay="block",await this.updateComplete;const u=(s=this.renderRoot)==null?void 0:s.querySelector(".nc-channel-list-menu"),p=(i=this.renderRoot)==null?void 0:i.querySelector("nc-scrollbar-provider");if(!u||!p)return;const m=(n=p.getViewportRect)==null?void 0:n.call(p),y=(a=p.getViewportSize)==null?void 0:a.call(p),S=(o=p.getScrollPosition)==null?void 0:o.call(p);if(!m||!y||!S)return;const U=t.clientX-m.left+S.left,P=t.clientY-m.top+S.top;this.menuTop=this.calculateTop(u.clientHeight,P,y.height,S.top),this.menuLeft=this.calculateLeft(u.clientWidth,U,y.width,S.left)}),h(this,"handleChannelClick",async(e,t)=>{var s;t.preventDefault(),this.menuDisplay="none",this.rightClickedChannelKey=null;const i=f();if(A.value&&i.channelModule.handleChannelDraft(A.value.channelIdentifier,(s=D.value)==null?void 0:s.value),e.channelType===T.SYSTEM){const a=new v(x.SYSTEM_CHANNEL_OPENING,e);if(i.emit(a,2),a.isDefaultPrevented())return}const{code:n}=await i.channelModule.openChannel(e.channelIdentifier);n===I.CHANNEL_LIST_NOT_READY&&i.alert("alert.channel.list.not.ready")}),h(this,"handleScrollLoading",()=>n2()),h(this,"handleMouseUp",e=>{e.button===0&&this.handleHide()}),h(this,"handleHide",()=>{this.menuDisplay="none",this.rightClickedChannelKey=null})}connectedCallback(){super.connectedCallback(),this.isH5=Ee(),this.rightClickedChannelKey=null,this.menuDisplay="none",this.menuTop=0,this.menuLeft=0,this.menu=[],window.addEventListener("resize",this.checkDevice),document.body.addEventListener("mouseup",this.handleMouseUp,!1),window.addEventListener("blur",this.handleHide,!1)}disconnectedCallback(){super.disconnectedCallback(),this.longPress.cancel(),window.removeEventListener("resize",this.checkDevice),document.body.removeEventListener("mouseup",this.handleMouseUp,!1),window.removeEventListener("blur",this.handleHide,!1)}updated(){var e,t,s,i,n,a;this.menuDisplay==="block"?(t=(e=this.scrollbarEl)==null?void 0:e.disableScroll)==null||t.call(e):(i=(s=this.scrollbarEl)==null?void 0:s.enableScroll)==null||i.call(s),this.menuRef=(n=this.renderRoot)==null?void 0:n.querySelector(".nc-channel-list-menu"),this.wrapRef=(a=this.renderRoot)==null?void 0:a.querySelector(".nc-channel-wrap")}handleTimeFilter(e){const{year:t,month:s,day:i,hour:n,minute:a,weekDay:o}=Tt(e),l=(Date.now()-e)/1e3/60/60/24;return new Date().toDateString()===new Date(e).toDateString()?`${n}:${a}`:new Date().toDateString()!==new Date(e).toDateString()&&l<1||1<=l&&l<2?this.i18n.t("time.format.yesterday"):2<=l&&l<7?this.i18n.t(this.weeklist[o]):this.i18n.t("time.format.full",t,s,i)}handleUserProfile(e){const t=f();return!e||e.senderUserId===t.userId?"":e.channelType===T.SYSTEM?t.appData.getSystemProfiles([e.channelIdentifier.channelId])[0].name:t.appData.getUserProfile(e.senderUserId).name}isDraft(e){return A.value?!A.value.channelIdentifier.isEqualTo(e.channelIdentifier)&&!!e.draft:!!e.draft}handleMenuItemClick(e,t){const s=f(),i=s.channelModule.getCachedChannelByKey(t);s.emit(new v(x.CHANNELS_MENU_ITEM_CLICK,{id:e,channelModel:i})),this.menuDisplay="none",this.rightClickedChannelKey=null}calculateTop(e,t,s,i){const n=t-i;return s-n<e?t-e:t}calculateLeft(e,t,s,i){const n=t-i;return s-n<e?t-e:t}onScrollbarConnected(e){this.scrollbarEl=e.target}render(){const e=ee.value,t=this.i18n.t("channel.list.empty.desc");return e.length===0?g`<nc-channel-list-empty .desc=${t}></nc-channel-list-empty>`:g`
      <nc-scrollbar-provider @loading=${this.handleScrollLoading} @connected=${this.onScrollbarConnected}
        ${s=>{this.scrollbarEl=s}}>
        <div class="nc-channel-wrap">
          ${this.isH5&&this.menuDisplay==="block"?g`
            <div class="nc-channel-list-menu-mask" @click=${this.handleHide}></div>
          `:O}
          <div class="nc-channel-list-menu" style="top: ${this.menuTop}px; left: ${this.menuLeft}px; display: ${this.menuDisplay};">
            ${this.menu.map(s=>g`
              <nc-channel-list-menu-item
                .icon=${s.icon}
                .id=${s.id}
                .label=${s.label}
                @click=${()=>this.handleMenuItemClick(s.id,s.target)}>
              </nc-channel-list-menu-item>
            `)}
          </div>

          <div class="nc-channel-list">
            ${e.map(s=>g`
              <nc-channel-list-item
                .message=${gd(s.latestMessage)}
                .time=${this.handleTimeFilter(s.updateTime)}
                .model=${s}
                .draft=${this.isDraft(s)}
                .statusEnable=${ja(s.latestMessage)}
                .name=${this.handleUserProfile(s.latestMessage)}
                .selected=${A.value?A.value.channelIdentifier.isEqualTo(s.channelIdentifier):!1}
                .rightClicked=${this.rightClickedChannelKey===H(s.channelIdentifier)}
                @contextmenu=${i=>{i.preventDefault(),this.handleChannelRightClick(s,i)}}
                @touchstart=${this.longPress.start}
                @touchmove=${this.longPress.move}
                @touchend=${this.longPress.end}
                @touchcancel=${this.longPress.cancel}
                @menu-click=${i=>this.handleChannelRightClick(s,i.detail[0])}
                @click=${i=>this.handleChannelClick(s,i)}>
              </nc-channel-list-item>
            `)}
            ${ht.value?g`<nc-channel-loading></nc-channel-loading>`:O}
          </div>
        </div>
      </nc-scrollbar-provider>
    `}}h(Ke,"styles",R`
    :host {
      display: block;
      height: 100%;
    }
    .nc-channel-wrap {
      padding: 0 10px;
      position: relative;
    }
    @media (max-width: 768px) {
      .nc-channel-list { -webkit-touch-callout: none; user-select: none; }
    }
    .nc-channel-list-menu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      padding: 7px 4px;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0px 4px 15.9px 0px #0000001C;
      min-width: 95px;
    }
    .nc-channel-list-menu-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  `);Ft([_()],Ke.prototype,"isH5");Ft([_()],Ke.prototype,"rightClickedChannelKey");Ft([_()],Ke.prototype,"menuDisplay");Ft([_()],Ke.prototype,"menuTop");Ft([_()],Ke.prototype,"menuLeft");Ft([_()],Ke.prototype,"menu");var Yt=(r=>(r.PHOTO="input.menu.item.photo",r.IMAGES="input.menu.item.images",r.FILES="input.menu.item.files",r.EMOJI="input.menu.item.emoji",r.PLUS="input.menu.item.plus",r))(Yt||{});const T2="ChatUIEmojiLibraryID";var md=(r=>(r[r.SECONDARY_MENU=0]="SECONDARY_MENU",r[r.LEFT=1]="LEFT",r))(md||{});const oi={items:[{id:"input.menu.item.emoji",order:0,icon:sa,hoverIcon:Kl},{id:"input.menu.item.images",order:1,icon:U1,hoverIcon:Ql},{id:"input.menu.item.files",order:2,icon:D1,hoverIcon:Xl},{id:"input.menu.item.photo",order:3,icon:$1,hoverIcon:Jl,filter:()=>(location.protocol==="https:"||location.protocol==="file"||location.hostname==="localhost")&&!Ee()}]},li=r=>({items:r.items.map(e=>({id:e.id,order:e.order,icon:e.icon,hoverIcon:e.hoverIcon,filter:e.filter,submenu:e.submenu?e.submenu.map(t=>({id:t.id,order:t.order,icon:t.icon,filter:t.filter,submenu:t.submenu})):void 0}))}),fd=["😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","🙁","🙂","🙃","🙄","🙅","🙆","🙇","🙈","🙉","🙊","🙋","🙌","🙍","🙎","🙏","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗","🤘","🤙","🤚","🤛","🤜","🤝","🤞","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤦","🤧","🤨","🤩","🤪","🤫","🤬","🤭","🤮","🤯"],Ed={icon:P1,chats:fd},Jn=r=>({icon:r.icon,chats:[...r.chats]}),er=r=>r.map(e=>({id:e.id,icon:e.icon,itemWidth:e.itemWidth,itemHeight:e.itemHeight,items:e.items.map(t=>({...t})),order:e.order}));class _d extends ye{constructor(e){super(e),h(this,"_menu",li(oi)),h(this,"menuList",[]),h(this,"chatEmojis",Jn(Ed)),h(this,"imageEmojis",[]),h(this,"_inputMaxLength",5e3),this.setInputMenu(oi)}get inputMaxLength(){return this._inputMaxLength}_onInit(){}_onInitUserCache(){this._inputMaxLength=5e3}_onDestroyUserCache(){}destroy(){this.chatEmojis.chats.length=0,this.imageEmojis.length=0,this.setInputMenu(oi)}cloneInputMenu(){return li(this._menu)}setInputMenu(e){this._menu=li(e),this._resetMenu()}_resetMenu(){this.menuList.length=0;const{items:e}=this._menu,t=(s,i)=>s.order-i.order;this.menuList.splice(0,this.menuList.length,...e.sort(t))}cloneChatEmojiLibrary(){return Jn(this.chatEmojis)}setChatEmojiLibrary(e){this.chatEmojis.chats.splice(0,this.chatEmojis.chats.length,...e.chats),this.chatEmojis.icon=e.icon}cloneImageEmojiLibraries(){return er(this.imageEmojis)}setImageEmojiLibraries(e){const t=er(e).sort((s,i)=>s.order-i.order);this.imageEmojis.splice(0,this.imageEmojis.length,...t)}}const Qt=new z(!1),gn=new z(!1),$s=new z(!1),At=new Map;let Ot=!1;const Aa=()=>{Ot=!1,At.clear()},tr=(r,e,t=!1)=>{const s=$t.value.find(a=>a.userId===r);if(!s)return;Ze();const i=s.nickname||s.name;At.set(r,`@${i}`),e.focus();const n=t?`@${i} `:`${i} `;e.setRangeText(n,e.selectionStart,e.selectionEnd,"end")},Cd=r=>{Ot=!0,Ze(),r.focus(),r.setRangeText(`${ke("input.mentioned.all")} `,r.selectionStart,r.selectionEnd,"end")},Ze=()=>{Qt.value=!1,gn.value=!1,$s.value=!1},vd=()=>{gn.value=!0},bd=(r,e)=>{Ze();const{detail:t}=r,{url:s,imageThumbnail:i,gifInfo:n}=t;if(i){const{thumbnail:a,thunbnailWidth:o,thunbnailHeight:l}=i,c=new Ie({thumbnailBase64:a,remoteUrl:s,thumWidth:o,thumHeight:l},C.IMAGE);f().message.sendMessage(e.channelIdentifier,c)}else{const{size:a,width:o,height:l}=n,c=new Ie({dataSize:a,width:o,height:l,remoteUrl:s},C.GIF);f().message.sendMessage(e.channelIdentifier,c)}},wd=(r,e)=>{e.focus(),e.setRangeText(r.detail,e.selectionStart,e.selectionEnd,"end"),Ze(),f().channelModule.sendTypingStatus()},yd=(r,e)=>{const t=document.createElement("input");t.type="file",t.accept=r,t.multiple=!0,t.onchange=()=>{e(Array.from(t.files||[]))},t.addEventListener("cancel",()=>{e([])}),t.click()},Sd=(r,e)=>{const t=document.createElement("input");t.type="file",t.accept=r,t.multiple=!0,t.style.position="fixed",t.style.left="-9999px",t.style.top="-9999px",t.style.width="1px",t.style.height="1px",t.style.opacity="0",t.style.pointerEvents="none",document.body.appendChild(t);let s=!1;const i=[],n=()=>{for(const u of i)globalThis.clearTimeout(u);i.length=0},a=()=>{n(),globalThis.removeEventListener("focus",d,!0),t.onchange=null,t.removeEventListener("cancel",c),t.parentNode&&t.remove()},o=()=>Array.from(t.files||[]),l=()=>{if(s)return;const u=o();u.length!==0&&(s=!0,a(),e(u))},c=()=>{s||(s=!0,a(),e([]))},d=()=>{n();const u=[0,50,100,200,400,700,1100,1700,2500];for(const p of u)i.push(globalThis.setTimeout(l,p));i.push(globalThis.setTimeout(()=>{o().length>0?l():c()},2800))};t.value="",globalThis.addEventListener("focus",d,!0),t.onchange=l,t.addEventListener("cancel",c),t.click()};function xd(){if(!("GestureEvent"in window))return!1;const r=navigator.userAgent,e=/Safari/.test(r)&&!/Chrome|CriOS|Edg|FxiOS|OPiOS/i.test(r),t=!!navigator.vendor&&navigator.vendor.indexOf("Apple")>-1;return e&&t}const sr=xd()?Sd:yd;let mn=!1;const Md=r=>{switch(r.key){case"Backspace":Ze();break;case"Shift":mn=!0;break}},Td=(r,e,t,s)=>{r.key==="Enter"&&Ad(r,e,t)},Rd=r=>{r.key==="Shift"&&(mn=!1)},Ld=(r,e,t,s)=>{const i=r.value;Ne(r,e,t);const n=s.data??"";if(s.inputType==="insertText"&&n.includes("@")){const a=f().channelModule.getOpenedChannelModel();(a==null?void 0:a.channelIdentifier.channelType)===T.GROUP&&(Ze(),$s.value=!0)}else $s.value=!1;if(At.forEach((a,o)=>{i.includes(a)||At.delete(o)}),Ot){const a=`@${ke("input.mentioned.all")}`;i.includes(a)||(Ot=!1)}f().channelModule.sendTypingStatus()},Oa=()=>{requestAnimationFrame(()=>{f().dispatchEvent(new v(E.ADJUST_MESSAGE_LIST_SCROLL))})},ir=new WeakMap,Ne=(r,e,t,s=!1)=>{if(!r.isConnected)return;const i=r.offsetWidth;if(i===0){s||requestAnimationFrame(()=>Ne(r,e,t,!0));return}e.textContent=r.value.endsWith(`
`)?`${r.value}.`:r.value,r.style.overflowY="hidden";const n=getComputedStyle(r),a=r.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight);e.style.font=n.font,e.style.lineHeight=n.lineHeight,e.style.width=`${a}px`;const o=parseFloat(n.lineHeight),l=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),c=parseFloat(n.maxHeight),d=parseFloat(n.marginTop)+parseFloat(n.marginBottom),u=getComputedStyle(t),p=parseFloat(u.paddingTop)+parseFloat(u.paddingBottom),m=e.scrollHeight,y=Math.max(1,Math.ceil(m/o)),S=o*y+l,U=Math.min(S,c);r.style.height=`${U}px`,t.style.height=`${U+d+p}px`,S>c?(r.style.overflowY="auto",r.selectionStart===r.value.length&&r.selectionEnd===r.value.length&&(r.scrollTop=r.scrollHeight)):r.scrollTop=0,ir.get(r)!==U&&(ir.set(r,U),Oa()),s||requestAnimationFrame(()=>{r.isConnected&&r.offsetWidth!==i&&Ne(r,e,t,!0)})},nr=(r,e,t,s,i)=>{r.value=i||"",r.setSelectionRange(0,0),Ne(r,e,t),r.scrollTop=0},Id=r=>r.isComposing||r.keyCode===229,$a=(r,e,t,s)=>{const i=f(),n=i.channelModule.getOpenedChannelModel();if(!n)return;const a=r.value;if(!a.trim().length)return;const o=Ot?ui.ALL:ui.USERS;let l;if(re.value){const d=se.wrapAsReferenceMessageContent(re.value.message,a);l=new Ie(d,C.REFERENCE)}else l=new Ie({text:a},C.TEXT);(Ot||At.size>0)&&(l.content.mentionedInfo={type:o,userIdList:Array.from(At.keys())});const c=i.input.inputMaxLength;if(l.content.text.length>c){i.alert("alert.send.message.maxcount",c);return}i.message.sendMessage(n.channelIdentifier,l),re.value=null,Aa(),r.value="",Ne(r,e,t)},Ad=(r,e,t,s)=>{const i=r.target;Id(r)||mn||(r.preventDefault(),$a(i,e,t))},rr=r=>{const e=r.clipboardData;if(!e||e.files.length===0)return;r.preventDefault();const t=f(),s=t.channelModule.getOpenedChannelModel(),i=Array.from(e.files);if(i.length>100){t.alert("alert.pickfiles.maxcount","100");return}const n=i.filter(a=>a.type!==""&&a.size>0);n.length!==0&&t.message.sendFiles(s.channelIdentifier,n)},ar=()=>{if(!re.value)return;const r=re.value,{senderUserId:e,messageType:t,content:s}=r,i=f().appData.getUserProfile(e).name;let n=En(r);return t===C.FILE&&(n+=` ${s.name}`),{senderUserId:e,senderUserName:i,digest:n,isEdited:r.editTimestamp!==void 0}};var Od=Object.defineProperty,ge=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Od(e,t,i),i};class oe extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"currentMenuButton",null),h(this,"syncTimer"),h(this,"inputResizeObserver"),h(this,"unsubReplyMessage"),h(this,"filter",e=>!e.filter||e.filter(this.model)),h(this,"mapHandle",e=>({...e,label:this.i18n.t(e.id)})),h(this,"handleChannelOpen",async e=>{var t,s;const i=(t=e.data)==null?void 0:t.model,n=(s=e.data)==null?void 0:s.focusInput,a=(i==null?void 0:i.draft)||"";re.value=null,Ze(),Aa(),nr(D.value,this.hiddenDomEl,this.inputContainerEl,this.mainEl,a),this.inputValue=a,i&&n!==!1?D.value.focus():D.value&&D.value.blur()}),h(this,"setTextareaValue",e=>{if(!e.data)return;D.value.focus();const t=D.value.value.length;D.value.setRangeText(e.data,t,t,"end"),this.inputValue=D.value.value,Ne(D.value,this.hiddenDomEl,this.inputContainerEl)}),h(this,"handleWindowClick",e=>{const t=e.target;this.secondarDOMEl&&this.secondarDOMEl.contains(t)||this.currentMenuButton&&this.currentMenuButton.contains(t)||this.hideInputPanels()}),h(this,"handleWindowResize",()=>{this.checkDevice(),D.value&&this.hiddenDomEl&&this.inputContainerEl&&Ne(D.value,this.hiddenDomEl,this.inputContainerEl)}),h(this,"handleMessagesDeleted",e=>{re.value&&e.data.some(t=>{var s;return t.messageId===((s=re.value)==null?void 0:s.messageId)})&&(re.value=null,f().alert("message.reference.deleted"))}),h(this,"handleMessagesUpdated",e=>{const t=re.value;if(!t)return;const s=e.data.find(i=>i.channelIdentifier.isEqualTo(t.channelIdentifier)&&i.isEqual(t));s&&(s===t?re.notify():re.value=s)})}get mentionAll(){return f().store.getCommandSwitch(te.MENTION_ALL)}get inputMaxLength(){return f().input.inputMaxLength}get allTopButtons(){return[...this.menuList].sort((e,t)=>(e.order||0)-(t.order||0))}get hasContent(){var e,t;return this.inputValue.trim().length>0||((t=(e=D.value)==null?void 0:e.value)==null?void 0:t.trim().length)>0}connectedCallback(){super.connectedCallback(),this.isH5=Ee(),this.hoveredButtonId=null,this.inputValue="",this.secondaryMenuVisible=!1,this.secondaryMenuItems=[],this.showEmojiPanel=!1,this.showAtPanel=!1,this.replyMsgInfo=ar();let e=re.value;this.unsubReplyMessage=re.subscribe(()=>{const s=re.value,i=s&&e&&s.channelIdentifier.isEqualTo(e.channelIdentifier)&&s.isEqual(e);e=s,this.replyMsgInfo=ar(),i||this.onReplyMessageChange(this.replyMsgInfo)});const t=f();this.menuList=t.input.menuList.filter(this.filter).map(this.mapHandle),window.addEventListener("click",this.handleWindowClick),window.addEventListener("resize",this.handleWindowResize),t.addEventListener(x.CHANNEL_SELECTED,this.handleChannelOpen),t.addEventListener(E.SET_TEXTAREA_VALUE_EVENT,this.setTextareaValue),t.addEventListener(x.MESSAGES_DELETED,this.handleMessagesDeleted),t.addEventListener(E.MESSAGE_STATE_CHANGE,this.handleMessagesUpdated),this.syncTimer=window.setInterval(()=>{const s=gn.value,i=$s.value;s!==this.showEmojiPanel&&(this.showEmojiPanel=s),i!==this.showAtPanel&&(this.showAtPanel=i),Qt.value!==this.secondaryMenuVisible&&(this.secondaryMenuVisible=Qt.value)},50)}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.inputResizeObserver)==null||e.disconnect(),(t=this.unsubReplyMessage)==null||t.call(this),window.clearInterval(this.syncTimer),window.removeEventListener("click",this.handleWindowClick),window.removeEventListener("resize",this.handleWindowResize),D.value&&D.value.removeEventListener("paste",rr);const s=f();s.removeEventListener(x.CHANNEL_SELECTED,this.handleChannelOpen),s.removeEventListener(E.SET_TEXTAREA_VALUE_EVENT,this.setTextareaValue),s.removeEventListener(x.MESSAGES_DELETED,this.handleMessagesDeleted),s.removeEventListener(E.MESSAGE_STATE_CHANGE,this.handleMessagesUpdated)}firstUpdated(){var e;D.value=this.textareaEl,D.value.addEventListener("paste",rr);const t=((e=A.value)==null?void 0:e.draft)||"";nr(D.value,this.hiddenDomEl,this.inputContainerEl,this.mainEl,t),this.inputValue=t;let s=0;this.inputResizeObserver=new ResizeObserver(([i])=>{const n=i.contentRect.width;n>0&&n!==s&&Ne(this.textareaEl,this.hiddenDomEl,this.inputContainerEl),s=n}),this.inputResizeObserver.observe(this.textareaEl)}checkDevice(){this.isH5=Ee(),this.menuList=f().input.menuList.filter(this.filter).map(this.mapHandle)}getButtonIcon(e){return this.hoveredButtonId===e.id&&e.hoverIcon?e.hoverIcon:e.icon}hideInputPanels(){Ze(),this.showEmojiPanel=!1,this.showAtPanel=!1,this.secondaryMenuVisible=!1,this.secondaryMenuItems=[],this.currentMenuButton=null}handleMenuClick(e,t,s=!1){const i=Qt.value&&this.currentMenuButton===t.currentTarget;if(this.hideInputPanels(),!s&&e.submenu&&e.submenu.length>0){if(i)return;t.stopPropagation();const n=e.submenu.filter(this.filter).map(this.mapHandle);n.length>0&&(this.secondaryMenuItems=n,this.currentMenuButton=t.currentTarget,this.showSecondaryMenu(t));return}this.executeMenuItemAction(e,t)}executeMenuItemAction(e,t){const s=f();switch(e.id){case Yt.PHOTO:s.emit(new v(x.TAKE_PHOTO_MODAL_EVENT));break;case Yt.EMOJI:t.stopPropagation(),vd(),this.showEmojiPanel=!0;break;case Yt.IMAGES:sr("image/jpg, image/png, image/jpeg, image/gif",i=>{s.message.sendImages(this.model.channelIdentifier,i)});break;case Yt.FILES:sr("*/*",i=>{s.message.sendFiles(this.model.channelIdentifier,i)});break;default:s.emit(new v(x.INPUT_MENU_ITEM_CLICK,{id:e.id,channelModel:this.model}),2);break}}showSecondaryMenu(e){Qt.value=!0,this.secondaryMenuVisible=!0,setTimeout(()=>{if(!this.secondarDOMEl||!this.currentMenuButton||!this.mainEl)return;const t=this.currentMenuButton.getBoundingClientRect(),s=this.mainEl.getBoundingClientRect(),i=t.top-s.top;this.secondarDOMEl.style.bottom=`${s.height-i+8}px`,this.secondarDOMEl.style.left=`${t.left-s.left}px`,this.secondarDOMEl.style.right="auto"},0)}handleInsertChatEmoji(e){if(D.value){const t=D.value.value.length,s=D.value.selectionEnd-D.value.selectionStart;if(t+e.detail[0].length-s>this.inputMaxLength)return}wd(e,D.value),D.value&&(this.inputValue=D.value.value,Ne(D.value,this.hiddenDomEl,this.inputContainerEl))}handleInputWrapper(e){D.value&&(this.inputValue=D.value.value),Ld(D.value,this.hiddenDomEl,this.inputContainerEl,e),this.emitMessageInputEvent(x.MESSAGE_INPUT_CHANGE)}emitMessageInputEvent(e){var t;const s={value:((t=D.value)==null?void 0:t.value)||""};if(e===x.MESSAGE_INPUT_FOCUS){f().emit(new v(x.MESSAGE_INPUT_FOCUS,s),2);return}if(e===x.MESSAGE_INPUT_BLUR){f().emit(new v(x.MESSAGE_INPUT_BLUR,s),2);return}f().emit(new v(x.MESSAGE_INPUT_CHANGE,s),2)}sendMessageWrapper(){if(!D.value)return;const e=D.value.value;$a(D.value,this.hiddenDomEl,this.inputContainerEl,this.mainEl),D.value.value===""&&e.trim().length>0&&(this.inputValue="")}handleSendClick(){!this.hasContent||!D.value||this.sendMessageWrapper()}handleKeyDown(e){var t;const s=((t=D.value)==null?void 0:t.value)||"";Md(e),Td(e,this.hiddenDomEl,this.inputContainerEl,this.mainEl),e.key==="Enter"&&!e.shiftKey&&this.updateComplete.then(()=>{D.value&&D.value.value===""&&s.trim().length>0&&(this.inputValue="")})}handleAtUser(e){tr(e.detail,D.value)}onReplyMessageChange(e){const t=f();e&&t.store.getCommandSwitch(te.PROMPT_SENDER_WHEN_QUOTE_MESSAGE)&&tr(e.senderUserId,D.value,!0),e&&D.value&&D.value.focus(),Oa()}render(){const e=this.i18n.t("input.placeholder"),t=this.i18n.t("input.send");return g`
      <div class="nc-input-provider">
        ${this.showEmojiPanel?g`
          <nc-emoji-panel-provider class="nc-input-emoji-panel"
            @insert-chat=${s=>this.handleInsertChatEmoji(s)}
            @send-image=${s=>bd(s,this.model)}>
          </nc-emoji-panel-provider>
        `:O}

        <nc-mention-users-panel-provider
          style="width: 100%; box-sizing: border-box; ${this.showAtPanel?"":"display: none;"}"
          .mentionAll=${this.mentionAll}
          .members=${$t.value}
          @mention=${s=>this.handleAtUser(s)}
          @mention-all=${()=>Cd(D.value)}>
        </nc-mention-users-panel-provider>

        <!-- Top button bar -->
        <div class="nc-input-top-buttons">
          ${this.allTopButtons.map(s=>g`
            <img
              class="nc-input-menu-button"
              .src=${this.getButtonIcon(s)}
              .alt=${s.label}
              @mouseenter=${()=>{this.hoveredButtonId=s.id}}
              @mouseleave=${()=>{this.hoveredButtonId=null}}
              @click=${i=>{i.stopPropagation(),this.handleMenuClick(s,i)}}>
          `)}
        </div>

        <!-- Input container -->
        <div class="nc-input-wrapper">
          ${this.replyMsgInfo?g`
            <nc-input-reply-bar class="replay-bar" .info=${this.replyMsgInfo}
              @cancel=${()=>{re.value=null}}>
            </nc-input-reply-bar>
          `:O}

          <div class="nc-input-inner-wrapper">
            <div class="input-text-container">
              <textarea class="textarea"
                .placeholder=${this.isH5?"":e}
                .maxLength=${this.inputMaxLength}
                enterkeyhint=${this.isH5?"send":O}
                @keyup=${s=>Rd(s)}
                @keydown=${s=>this.handleKeyDown(s)}
                @focus=${()=>this.emitMessageInputEvent(x.MESSAGE_INPUT_FOCUS)}
                @blur=${()=>this.emitMessageInputEvent(x.MESSAGE_INPUT_BLUR)}
                @input=${s=>this.handleInputWrapper(s)}></textarea>
              <div class="hidden-dom" contenteditable></div>
            </div>

            <button
              class="nc-input-send-button ${this.hasContent?"":"disabled"}"
              ?disabled=${!this.hasContent}
              @click=${()=>this.handleSendClick()}>
              <img .src=${this.hasContent?k1:N1} alt="send" />
              ${this.isH5?O:g`<span>${t}</span>`}
            </button>
          </div>

          <!-- Secondary menu -->
          <div class="secondary-menu" style="display: ${this.secondaryMenuVisible?"flex":"none"};"
            @click=${s=>s.stopPropagation()}>
            ${this.secondaryMenuItems.map(s=>g`
              <div class="secondary-menu-item" @click=${i=>this.handleMenuClick(s,i,!0)}>
                <img .src=${s.icon} alt="Icon"><span>${s.label}</span>
              </div>
            `)}
          </div>
        </div>
      </div>
    `}}h(oe,"styles",R`
    :host {
      display: block;
    }
    .nc-input-provider {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      padding: 0 12px;
      box-sizing: border-box;
    }
    .nc-input-emoji-panel,
    .nc-input-at-prompt {
      float: left;
      width: 100%;
      max-height: 248px;
      border-bottom: 1px solid #efefef;
      border-top: 1px solid #efefef;
    }
    .nc-input-emoji-panel {
      height: 248px;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .nc-input-top-buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 12px;
      gap: 8px;
      box-sizing: border-box;
    }
    .nc-input-menu-button {
      width: 30px;
      height: 30px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .nc-input-wrapper {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      border: 1px solid #E4E7ED;
      border-radius: 20px;
      margin: 0 0 12px 0;
      box-sizing: border-box;
      background-color: #fff;
      position: relative;
    }
    .nc-input-inner-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 8px;
      gap: 8px;
      box-sizing: border-box;
    }
    .input-text-container {
      background: none;
      flex: 1;
      font-size: 14px;
      overflow: hidden;
      line-height: 21px;
      min-height: 21px;
      border: none;
      border-radius: 0;
      margin: 0;
      padding: 9px 0;
      overflow-y: hidden;
      box-sizing: border-box;
    }
    .textarea {
      display: block;
      border: none;
      outline: none;
      background: none;
      min-height: 21px;
      height: 21px;
      /* Keep 6px of the preceding line visible when scrolled to the bottom. */
      max-height: calc(21px * 4 + 6px);
      box-sizing: border-box;
      padding: 0 10px;
      width: 100%;
      resize: none;
      word-wrap: break-word;
      font-size: 14px;
      line-height: 21px;
      overflow-y: hidden;
      margin-top: 4px;
    }
    .textarea::-webkit-scrollbar { width: 4px; }
    .textarea::-webkit-scrollbar-track { background: transparent; border-radius: 3px; }
    .textarea::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 3px; }
    .textarea::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.3); }
    .textarea { scrollbar-width: thin; scrollbar-color: rgba(0,0,0,0.2) transparent; }
    .hidden-dom {
      white-space: pre-wrap;
      border: none;
      outline: none;
      background: none;
      line-height: 21px;
      min-height: 21px;
      height: 21px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 0;
      width: 100%;
      resize: none;
      font-size: 14px;
      word-wrap: break-word;
      color: transparent;
      position: absolute;
      visibility: hidden;
    }
    .nc-input-send-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 5px 16px;
      border: none;
      border-radius: 30px;
      background-color: #ECF1FF;
      color: #0047FF;
      font-size: 14px;
      cursor: pointer;
      flex-shrink: 0;
      min-width: 60px;
      height: 28px;
      box-sizing: border-box;
      transition: background-color 0.2s, color 0.2s;
      margin: 8px 0;
    }
    .nc-input-send-button:hover:not(.disabled) { background-color: #D0DDFF; }
    .nc-input-send-button.disabled {
      background-color: #F3F5FA;
      color: #CCCCCC;
      cursor: not-allowed;
    }
    .nc-input-send-button img { width: 16px; height: 16px; flex-shrink: 0; }
    .replay-bar {
      width: 100%;
      padding: 8px 8px 0 8px;
      box-sizing: border-box;
    }
    .secondary-menu {
      position: absolute;
      min-width: 126px;
      background-color: #fff;
      border-radius: 9px;
      box-shadow: 0 0 4px 0 rgba(0,0,0,0.1);
      padding: 8px 4px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 14px;
      color: #606060;
      z-index: 1000;
    }
    .secondary-menu-item {
      flex-direction: row;
      height: 36px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 5px 6px;
      border-radius: 4px;
      cursor: pointer;
    }
    .secondary-menu-item:hover { background-color: #D2E1FE; }
    .secondary-menu-item img { width: 18px; height: 18px; margin-right: 10px; flex-shrink: 0; }
    .secondary-menu-item span { white-space: nowrap; }
    @media (max-width: 768px) {
      .nc-input-provider { padding: 0 8px; }
      .nc-input-top-buttons { padding: 8px 0; gap: 6px; }
      .nc-input-menu-button { width: 28px; height: 28px; }
      .nc-input-wrapper { margin: 0 0 8px 0; border-radius: 20px; }
      .nc-input-inner-wrapper { padding: 6px; gap: 6px; }
      .nc-input-send-button { min-width: 50px; font-size: 12px; }
      .nc-input-send-button span { display: none; }
    }
  `);ge([b({type:Object})],oe.prototype,"model");ge([Z(".textarea")],oe.prototype,"textareaEl");ge([Z(".hidden-dom")],oe.prototype,"hiddenDomEl");ge([Z(".input-text-container")],oe.prototype,"inputContainerEl");ge([Z(".nc-input-wrapper")],oe.prototype,"mainEl");ge([Z(".secondary-menu")],oe.prototype,"secondarDOMEl");ge([_()],oe.prototype,"isH5");ge([_()],oe.prototype,"hoveredButtonId");ge([_()],oe.prototype,"inputValue");ge([_()],oe.prototype,"secondaryMenuVisible");ge([_()],oe.prototype,"secondaryMenuItems");ge([_()],oe.prototype,"menuList");ge([_()],oe.prototype,"showEmojiPanel");ge([_()],oe.prototype,"showAtPanel");ge([_()],oe.prototype,"replyMsgInfo");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $d={CHILD:2},Ud=r=>(...e)=>({_$litDirective$:r,values:e});let Dd=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,e,t){this._$Ct=r,this._$AM=e,this._$Ci=t}_$AS(r,e){return this.update(r,e)}update(r,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Nd}=Jc,or=r=>r,lr=()=>document.createComment(""),Wt=(r,e,t)=>{var s;const i=r._$AA.parentNode,n=e===void 0?r._$AB:e._$AA;if(t===void 0){const a=i.insertBefore(lr(),n),o=i.insertBefore(lr(),n);t=new Nd(a,o,r,r.options)}else{const a=t._$AB.nextSibling,o=t._$AM,l=o!==r;if(l){let c;(s=t._$AQ)==null||s.call(t,r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==o._$AU&&t._$AP(c)}if(a!==n||l){let c=t._$AA;for(;c!==a;){const d=or(c).nextSibling;or(i).insertBefore(c,n),c=d}}}return t},et=(r,e,t=r)=>(r._$AI(e,t),r),kd={},Pd=(r,e=kd)=>r._$AH=e,Hd=r=>r._$AH,hi=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=(r,e,t)=>{const s=new Map;for(let i=e;i<=t;i++)s.set(r[i],i);return s},Fd=Ud(class extends Dd{constructor(r){if(super(r),r.type!==$d.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const i=[],n=[];let a=0;for(const o of r)i[a]=s?s(o,a):a,n[a]=t(o,a),a++;return{values:n,keys:i}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,s]){const i=Hd(r),{values:n,keys:a}=this.dt(e,t,s);if(!Array.isArray(i))return this.ut=a,n;const o=this.ut??(this.ut=[]),l=[];let c,d,u=0,p=i.length-1,m=0,y=n.length-1;for(;u<=p&&m<=y;)if(i[u]===null)u++;else if(i[p]===null)p--;else if(o[u]===a[m])l[m]=et(i[u],n[m]),u++,m++;else if(o[p]===a[y])l[y]=et(i[p],n[y]),p--,y--;else if(o[u]===a[y])l[y]=et(i[u],n[y]),Wt(r,l[y+1],i[u]),u++,y--;else if(o[p]===a[m])l[m]=et(i[p],n[m]),Wt(r,i[u],i[p]),p--,m++;else if(c===void 0&&(c=hr(a,m,y),d=hr(o,u,p)),c.has(o[u]))if(c.has(o[p])){const S=d.get(a[m]),U=S!==void 0?i[S]:null;if(U===null){const P=Wt(r,i[u]);et(P,n[m]),l[m]=P}else l[m]=et(U,n[m]),Wt(r,i[u],U),i[S]=null;m++}else hi(i[p]),p--;else hi(i[u]),u++;for(;m<=y;){const S=Wt(r,l[y+1]);et(S,n[m]),l[m++]=S}for(;u<=p;){const S=i[u++];S!==null&&hi(S)}return this.ut=a,Pd(r,l),Lt}});var Ua=(r=>(r.LEFT_JUSTIFYING="left-justifying",r.LEFT_RIGHT="left-right",r))(Ua||{});const cr={redius:20,layout:"left-right",backgroundColorForMyself:13820414,backgroundColorForOthers:15988218,textColorForMyself:133140,textColorForOthers:133140,showMyProfileInDirectionChannel:!0,showMyNameInDirectionChannel:!1,showMyProfileInGroupChannel:!0,showMyNameInGroupChannel:!1,showOthersProfileInDirectionChannel:!0,showOthersNameInDirectionChannel:!1,showOthersProfileInGroupChannel:!0,showOthersNameInGroupChannel:!0},Gd=r=>({...r});class Bd extends ye{constructor(e){super(e),h(this,"messageBubbleCfg",{}),this.setMessageBubbleConfig(cr)}_onInit(){}_onInitUserCache(){}_onDestroyUserCache(){}destroy(){this.setMessageBubbleConfig(cr)}cloneMessageBubbleConfig(){return Gd(this.messageBubbleCfg)}setMessageBubbleConfig(e){this.messageBubbleCfg={...this.messageBubbleCfg,...e}}}var Y=(r=>(r.REPLY="message.menu.item.reply",r.REACTIONS="message.menu.item.reactions",r.MULIT_CHOICE="message.menu.item.multi.choice",r.COPY="message.menu.item.copy",r.FORWARD="message.menu.item.forward",r.SPEECH_TO_TEXT="message.menu.item.speech.to.text",r.CANCEL_SPEECH_TO_TEXT="message.menu.item.cancel.speech.to.text",r.EDIT="message.menu.item.edit",r.DELETE_FOR_ME="message.menu.item.delete.for.me",r.DELETE_FOR_ALL="message.menu.item.delete.for.all",r))(Y||{});const dr=r=>r.map(e=>({...e})),Da=r=>r.sentStatus===L.SENT;class Vd extends ye{constructor(){super(...arguments),h(this,"_menu",this._createDefaultMenu()),h(this,"_speechToTextStore")}_onInit(){}_onInitUserCache(){}_onDestroyUserCache(){}destroy(){this._menu=this._createDefaultMenu()}setSpeechToTextStore(e){this._speechToTextStore=e}getMenu(e){return this._menu.filter(t=>t.id==="message.menu.item.reactions"&&!this.ctx.isMessageReactionEnabled?!1:!t.filter||t.filter(e))}cloneMessageMenu(){return dr(this._menu)}setMessageMenu(e){this._menu=dr(e)}_createDefaultMenu(){const e=this.ctx,t=u=>{const{sentStatus:p}=u;return p!==L.SENDING&&p!==L.FAILED},s={id:"message.menu.item.delete.for.all",icon:Un,filter(u){const{direction:p,sentStatus:m,sentTime:y}=u;return p!==ue.SEND||!t(u)?!1:Date.now()-y<e.allowedToRecallTime*1e3}},i={id:"message.menu.item.delete.for.me",icon:Un,filter(u){const{direction:p,sentStatus:m,sentTime:y}=u;return p===ue.RECEIVE?!0:m===L.SENDING?!1:m===L.FAILED?!0:!(Date.now()-y<e.allowedToRecallTime*1e3)}},n={id:"message.menu.item.reply",icon:g1,filter(u){const{channelType:p,messageType:m,sentStatus:y}=u;return p===T.SYSTEM||y===L.SENDING||y===L.FAILED?!1:[C.TEXT,C.FILE,C.IMAGE,C.REFERENCE].includes(m)}},a={id:"message.menu.item.reactions",icon:m1,filter:Da},o={id:"message.menu.item.copy",icon:p1,filter(u){const{messageType:p}=u;return navigator.clipboard&&(p===C.TEXT||p===C.REFERENCE)}},l={id:"message.menu.item.forward",icon:ta,filter(u){const{channelType:p,messageType:m,sentStatus:y}=u;return p===T.SYSTEM||y===L.SENDING||y===L.FAILED?!1:[C.TEXT,C.IMAGE,C.FILE,C.HD_VOICE,C.COMBINE,C.GIF,C.SHORT_VIDEO,C.FILE,C.REFERENCE].includes(m)}},c={id:"message.menu.item.multi.choice",icon:f1,filter(u){const{channelType:p}=u;return p!==T.SYSTEM}},d=u=>{var p;if(!((p=X.getAppSettings().data)!=null&&p.isSpeechToTextEnabled))return!1;const{sentStatus:m,messageType:y}=u;return!(m===L.SENDING||m===L.FAILED||y!==C.HD_VOICE)};return[{id:"message.menu.item.edit",icon:T1,filter:u=>{var p,m;if(!e.store.getCommandSwitch(te.MESSAGE_EDIT_ENABLED))return!1;const y=(p=e.channelModule.getOpenedChannelModel())==null?void 0:p.updatingMessageUId;if(y&&y===u.messageId||u.editStatus===Q.UPDATING||!e.userId||u.senderUserId!==e.userId||u.sentStatus!==L.SENT&&u.sentStatus!==L.READ||u.messageType!==C.TEXT&&u.messageType!==C.REFERENCE)return!1;const S=(m=X.getAppSettings().data)==null?void 0:m.messageModifiableMinutes;return typeof S!="number"||S<=0?!1:Date.now()-u.sentTime<S*60*1e3}},s,i,n,a,o,l,c,{id:"message.menu.item.speech.to.text",icon:x1,filter:u=>{var p;return d(u)&&!((p=this._speechToTextStore)!=null&&p.hasConverted(u.messageId))}},{id:"message.menu.item.cancel.speech.to.text",icon:M1,filter:u=>{var p;return d(u)&&!!((p=this._speechToTextStore)!=null&&p.hasConverted(u.messageId))}}]}}const zd=()=>{const r=new Map;let e=0;return{get:t=>r.get(t),set:(t,s)=>r.set(t,s),prune(t){r.forEach((s,i)=>{t.has(i)||r.delete(i)})},reset(){r.clear(),e=0},syncViewportWidth(t){if(t<=0)return!1;const s=e>0&&Math.abs(e-t)>.5;return e=t,s}}},ur=(r,e,t)=>Math.max(r+e-t,0),jd=()=>{let r=0,e=null;return{begin(t){return r+=1,e={id:r,value:t},e},cancel(){r+=1,e=null},isCurrent:t=>t.id===r,peek:()=>e,take(){const t=e;return e=null,t}}},pr=344,Na=420,_t=8,gr=20,mr=(r,e,t)=>Math.min(Math.max(r,e),t),qd=({viewportWidth:r,viewportHeight:e,statusTop:t,statusBottom:s,statusLeft:i,statusRight:n})=>{const a=Math.max(e-_t,0),o=Math.min(_t,a),l=mr(t,o,a),c=mr(s,o,a),d=Math.max(e-l-_t,0),u=Math.max(c-_t,0),p=d>=u,m=p?"top":"bottom",y=Math.min(Na,p?d:u);let S,U;const P=i-pr>=0,K=n+gr+pr<=r;return P?(S=i,U="right"):K?(S=n+gr,U="left"):(S=r/2,U="center"),{top:p?l:c,left:S,anchor:`${m}-${U}`,maxHeight:y}},Zd=(r,e)=>({top:_t,left:r/2,anchor:"top-center",maxHeight:Math.max(0,Math.min(Na,e-_t*2))});var Wd=Object.defineProperty,N=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Wd(e,t,i),i};class $ extends M{constructor(){super(...arguments),h(this,"i18n",new V(this)),h(this,"longPress",Ia()),h(this,"_signalController",new gt(this,[G,le,ne,A,$e,Dt,$t,fe,ve,Ue,yt])),h(this,"readQuery",null),h(this,"unreadQuery",null),h(this,"scrollControl",null),h(this,"scrollbarHideTimer",null),h(this,"resizeRefObserver",null),h(this,"messageRowResizeObserver",null),h(this,"observedMessageRows",new Set),h(this,"observedMessageListEl"),h(this,"reactionPanelEditSelect"),h(this,"hasMoreForward",!0),h(this,"firstUnreadMessageTime",0),h(this,"backupFirstUnreadMessageTime",0),h(this,"paginationTask",null),h(this,"paginationAfterScroll",!1),h(this,"readReceiptStatusElement",null),h(this,"messageRenderSource",null),h(this,"messageRenderHasMoreForward",!0),h(this,"messageRenderCache",[]),h(this,"messageListGeneration",0),h(this,"rowHeightCache",zd()),h(this,"resizeAnchorController",jd()),h(this,"virtualWindowFrame",0),h(this,"virtualMeasureFrame",0),h(this,"resizeLayoutTimer"),h(this,"adjustScrollFrame",0),h(this,"adjustScrollWriteFrame",0),h(this,"bottomResyncFrame",0),h(this,"layoutRefreshRequested",!1),h(this,"layoutMeasurementRequested",!1),h(this,"layoutBottomPreservationRequested",!1),h(this,"lastTouchY"),h(this,"hasUserScrolledAwayFromBottom",!1),h(this,"wasStrictlyAtBottomBeforeResize",!0),h(this,"VIRTUAL_ITEM_ESTIMATED_HEIGHT",88),h(this,"VIRTUAL_TIME_ESTIMATED_HEIGHT",32),h(this,"VIRTUAL_OVERSCAN_PX",704),h(this,"STRICT_BOTTOM_THRESHOLD_PX",2),h(this,"BOTTOM_AREA_THRESHOLD_PX",100),h(this,"weeklist",["time.format.sunday","time.format.monday","time.format.tueday","time.format.wedday","time.format.thurday","time.format.friday","time.format.satday"]),h(this,"_onSelectedChanged",e=>this.onSelectedChanged(e)),h(this,"_onRecvNewMessages",e=>this.onRecvNewMessages(e)),h(this,"_onInsertNewMessages",e=>this.onInsertNewMessages(e)),h(this,"_onDeleteMessages",e=>this.onDeleteMessages(e)),h(this,"_onMessageStateChange",e=>this.onMessageStateChange(e)),h(this,"_onAdjustMessageListScroll",()=>this.handleAdjustMessageListScroll()),h(this,"_hideMsgMenu",()=>this.hideMsgMenu()),h(this,"_hideReactionPanel",()=>this.hideReactionPanel()),h(this,"_handleClickOutside",e=>this.handleClickOutside(e)),h(this,"_checkDevice",()=>this.checkDevice()),h(this,"_handleWindowResize",()=>this.handleWindowResize()),h(this,"_unsubscribeMultiChoiceMode"),h(this,"_handleUserScrollInput",Object.assign(e=>this.handleUserScrollInput(e),{capture:!0,passive:!0})),h(this,"_blockMultiChoiceMouseEvent",Object.assign(e=>this.stopEventWhenMultiChoiceMode(e),{capture:!0})),h(this,"_blockMultiChoiceTouchEvent",Object.assign(e=>this.stopEventWhenMultiChoiceMode(e),{capture:!0,passive:!0})),h(this,"_updateScrollbar",()=>this.scheduleResizeLayoutUpdate())}get FOCUS_ON_LATEST_MESSAGE(){return!0}get messageRenderList(){const e=G.value;if(e===this.messageRenderSource&&this.messageRenderHasMoreForward===this.hasMoreForward)return this.messageRenderCache;const t=[];for(let s=e.length-1;s>=0;s-=1){const i=e[s];t.unshift(i);const n=e[s-1];n?new Date(i.sentTime).toDateString()!==new Date(n.sentTime).toDateString()&&t.unshift(this.handleTimeFilter(i.sentTime)):this.hasMoreForward||t.unshift(this.handleTimeFilter(i.sentTime))}return this.messageRenderSource=e,this.messageRenderHasMoreForward=this.hasMoreForward,this.messageRenderCache=t,this.rowHeightCache.prune(new Set(t.map((s,i)=>this.getVirtualItemKey(i,s)))),t}getRenderItemKey(e,t){return typeof e=="string"?`time:${e}`:Number.isFinite(e.transactionId)?`tid:${e.transactionId}`:e.messageId?`uid:${e.messageId}`:e.clientId!==void 0?`mid:${e.clientId}`:`message:${this.getMessageUniqueKey(e)}:${t}`}getVirtualItemKey(e,t=this.messageRenderList[e]){return t?this.getRenderItemKey(t,e):`nc-chatui-empty-${e}`}getEstimatedItemHeight(e){return typeof e=="string"?this.VIRTUAL_TIME_ESTIMATED_HEIGHT:this.VIRTUAL_ITEM_ESTIMATED_HEIGHT}getVirtualItemHeight(e){const t=this.messageRenderList[e];return t?this.rowHeightCache.get(this.getVirtualItemKey(e,t))||this.getEstimatedItemHeight(t):0}getHeightBeforeIndex(e){const t=Math.max(0,Math.min(e,this.messageRenderList.length));let s=0;for(let i=0;i<t;i+=1)s+=this.getVirtualItemHeight(i);return s}getVirtualTotalHeight(){return this.getHeightBeforeIndex(this.messageRenderList.length)}findVirtualIndexByOffset(e){const t=this.messageRenderList;if(!t.length)return 0;let s=0;for(let i=0;i<t.length;i+=1){const n=s+this.getVirtualItemHeight(i);if(n>=e)return i;s=n}return t.length-1}readMessageListMetrics(){if(!this.messageListEl)return null;const{scrollHeight:e,scrollTop:t,clientHeight:s,offsetHeight:i}=this.messageListEl;return{scrollHeight:e,scrollTop:t,clientHeight:s,offsetHeight:i}}getDistanceFromBottom(e){return e.scrollHeight-e.clientHeight-e.scrollTop}isStrictlyAtBottom(e){return this.getDistanceFromBottom(e)<=this.STRICT_BOTTOM_THRESHOLD_PX}isInBottomArea(e){return this.getDistanceFromBottom(e)<=this.BOTTOM_AREA_THRESHOLD_PX}syncBottomState(e=this.readMessageListMetrics()){if(!e)return;const t=this.isStrictlyAtBottom(e);this.onBottomArea=this.isInBottomArea(e),this.hasUserScrolledAwayFromBottom=!t,this.wasStrictlyAtBottomBeforeResize=t,t||this.cancelAdjustMessageListScroll()}setVirtualRange(e,t,s,i){this.virtualStart=e,this.virtualEnd=t,this.topSpacerHeight=s,this.bottomSpacerHeight=i}setVirtualRangeByIndex(e,t){const s=this.getHeightBeforeIndex(e),i=this.getVirtualTotalHeight()-this.getHeightBeforeIndex(t+1);this.setVirtualRange(e,t,s,Math.max(i,0)),this.closeFloatingLayerWhenTargetInvisible()}renderVirtualWindowAtOffset(e,t){const s=Math.max(t,this.VIRTUAL_OVERSCAN_PX),i=this.findVirtualIndexByOffset(Math.max(e-s,0)),n=this.findVirtualIndexByOffset(e+t+s);this.setVirtualRangeByIndex(i,n)}recalculateVirtualWindow(){const e=this.messageRenderList,t=this.readMessageListMetrics();if(!e.length){this.setVirtualRange(0,-1,0,0);return}const s=(t==null?void 0:t.clientHeight)||this.VIRTUAL_ITEM_ESTIMATED_HEIGHT,i=Math.max(0,Math.min((t==null?void 0:t.scrollTop)||0,Math.max(this.getVirtualTotalHeight()-s,0)));this.renderVirtualWindowAtOffset(i,s)}renderVirtualWindowAroundIndex(e){const t=this.messageRenderList,s=this.readMessageListMetrics();if(!t.length){this.recalculateVirtualWindow();return}this.renderVirtualWindowAtOffset(this.getHeightBeforeIndex(e),(s==null?void 0:s.clientHeight)||this.VIRTUAL_ITEM_ESTIMATED_HEIGHT)}get virtualRenderList(){const e=this.messageRenderList;if(!e.length||this.virtualEnd<this.virtualStart)return[];const t=Math.min(this.virtualEnd,e.length-1),s=[];for(let i=this.virtualStart;i<=t;i+=1){const n=e[i];s.push({item:n,index:i,key:this.getVirtualItemKey(i,n)})}return s}scheduleVirtualWindowUpdate(){!this.isConnected||this.virtualWindowFrame||(this.virtualWindowFrame=requestAnimationFrame(()=>{if(this.virtualWindowFrame=0,!!this.isConnected){if(!this.resizeAnchorController.peek()){const e=this.captureRenderedScrollAnchor();e&&this.hasUserScrolledAwayFromBottom&&this.resizeAnchorController.begin(e),this.recalculateVirtualWindow()}this.updateComplete.then(()=>{this.isConnected&&this.measureVirtualRows()})}}))}scheduleVirtualMeasurement(){!this.isConnected||this.virtualMeasureFrame||(this.virtualMeasureFrame=requestAnimationFrame(()=>{this.virtualMeasureFrame=0,!(!this.isConnected||this.resizeLayoutTimer)&&this.measureVirtualRows()}))}async refreshVirtualWindow(e){if(await this.updateComplete,!!this.isConnected){if(!this.invalidateVirtualHeightsForWidthChange()){const t=e?this.findRenderIndexByKey(e.key):-1;t!==-1?this.renderVirtualWindowAroundIndex(t):this.recalculateVirtualWindow()}await this.updateComplete,this.isConnected&&((e==null?void 0:e.viewportOffset)!==void 0?this.measureVirtualRows():this.scheduleVirtualMeasurement())}}continueVirtualMeasurement(e){this.updateComplete.then(()=>{this.isConnected&&(e<3?this.measureVirtualRows(e+1):this.scheduleVirtualMeasurement())})}ensureVirtualWindowCoverage(){if(!this.messageListEl)return!1;const e=this.messageListEl.querySelectorAll(".nc-chatui-msg-list-box[data-virtual-index]");if(!e.length)return!1;const t=this.messageListEl.getBoundingClientRect(),s=e[0].getBoundingClientRect(),i=e[e.length-1].getBoundingClientRect(),n=Math.max(this.messageListEl.clientHeight,this.VIRTUAL_OVERSCAN_PX);let a=this.virtualStart,o=this.virtualEnd;return a>0&&s.top>t.top+1&&(a=this.findVirtualIndexByOffset(Math.max(this.getHeightBeforeIndex(a)-(s.top-t.top)-n,0))),o<this.messageRenderList.length-1&&i.bottom<t.bottom-1&&(o=this.findVirtualIndexByOffset(this.getHeightBeforeIndex(o+1)+t.bottom-i.bottom+n)),a===this.virtualStart&&o===this.virtualEnd?!1:(this.setVirtualRangeByIndex(a,o),!0)}measureVirtualRows(e=0){if(!this.messageListEl)return;this.alignMessageEditStatuses();const t=!!this.readMessageListMetrics()&&this.wasStrictlyAtBottomBeforeResize&&!this.hasUserScrolledAwayFromBottom;let s=this.resizeAnchorController.peek();const i=!s&&!t?this.captureRenderedScrollAnchor():null;let n=!1;if(this.messageListEl.querySelectorAll(".nc-chatui-msg-list-box[data-virtual-index]").forEach(a=>{const o=Number(a.dataset.virtualIndex),l=this.messageRenderList[o];if(!l)return;const c=window.getComputedStyle(a),d=Number.parseFloat(c.marginBottom)||0,u=a.getBoundingClientRect().height+d,p=this.getVirtualItemKey(o,l),m=this.rowHeightCache.get(p);u>0&&Math.abs((m||0)-u)>.5&&(this.rowHeightCache.set(p,u),n=!0)}),!s&&n&&i&&(s=this.resizeAnchorController.begin(i)),s&&(s.value.preserveViewport||n&&!t)){const a=this.findRenderIndexByKey(s.value.key);if(a!==-1){const o=s;a<this.virtualStart||a>this.virtualEnd?this.renderVirtualWindowAroundIndex(a):this.setVirtualRangeByIndex(this.virtualStart,this.virtualEnd),this.updateComplete.then(()=>{this.isConnected?(this.restoreResizeScrollAnchor(o,n),this.continueVirtualMeasurement(e)):this.resizeAnchorController.cancel()});return}}if(s&&this.resizeAnchorController.cancel(),!n){this.ensureVirtualWindowCoverage()&&this.continueVirtualMeasurement(e);return}this.recalculateVirtualWindow(),this.continueVirtualMeasurement(e),t&&this.scheduleBottomResync()}resetVirtualWindow(){this.rowHeightCache.reset(),this.resizeAnchorController.cancel(),this.paginationAfterScroll=!1,this.setVirtualRange(0,-1,0,0),this.messageRenderSource=null,this.messageRenderCache=[],this.virtualWindowFrame&&cancelAnimationFrame(this.virtualWindowFrame),this.virtualMeasureFrame&&cancelAnimationFrame(this.virtualMeasureFrame),this.virtualWindowFrame=0,this.virtualMeasureFrame=0}findRenderIndexByKey(e){return this.messageRenderList.findIndex((t,s)=>this.getVirtualItemKey(s,t)===e)}captureScrollAnchor(){const e=this.readMessageListMetrics();if(!e||!this.messageRenderList.length)return null;const t=this.findVirtualIndexByOffset(e.scrollTop);return{key:this.getVirtualItemKey(t,this.messageRenderList[t]),offset:e.scrollTop-this.getHeightBeforeIndex(t)}}captureRenderedScrollAnchor(){var e;const t=(e=this.messageListEl)==null?void 0:e.getBoundingClientRect();if(t&&this.messageListEl){const s=this.messageListEl.querySelectorAll(".nc-chatui-msg-list-box[data-virtual-index]");for(const i of Array.from(s)){const n=i.getBoundingClientRect();if(n.bottom<=t.top||n.top>=t.bottom)continue;const a=i.dataset.key?this.findRenderIndexByKey(i.dataset.key):Number(i.dataset.virtualIndex);if(this.messageRenderList[a])return{key:this.getVirtualItemKey(a),offset:this.messageListEl.scrollTop-this.getHeightBeforeIndex(a),viewportOffset:n.top-t.top,preserveViewport:!0,scrollTop:this.messageListEl.scrollTop}}}return null}capturePaginationAnchor(){this.resizeAnchorController.cancel();const e=this.captureRenderedScrollAnchor();return e?(this.virtualWindowFrame&&cancelAnimationFrame(this.virtualWindowFrame),this.virtualWindowFrame=0,this.resizeAnchorController.begin(e),e):this.captureScrollAnchor()}restorePaginationAnchor(e){(e==null?void 0:e.viewportOffset)===void 0&&this.restoreScrollAnchor(e)}restoreScrollAnchor(e){if(this.resizeAnchorController.cancel(),!e||!this.messageListEl){this.scheduleVirtualWindowUpdate();return}const t=this.findRenderIndexByKey(e.key);if(t===-1){this.scheduleVirtualWindowUpdate();return}this.messageListEl.scrollTop=Math.max(this.getHeightBeforeIndex(t)+e.offset,0),this.recalculateVirtualWindow(),this.scheduleVirtualMeasurement(),this.syncScrollbarPosition(),this.syncBottomState()}getRenderedViewportOffset(e){if(!this.messageListEl)return null;const t=Array.from(this.messageListEl.querySelectorAll(".nc-chatui-msg-list-box[data-virtual-index]")).find(s=>s.dataset.key===e);return t?t.getBoundingClientRect().top-this.messageListEl.getBoundingClientRect().top:null}getScrollDeltaSinceAnchor(e,t=this.readMessageListMetrics()){if(!t)return 0;const s=Math.max(0,Math.min(e.scrollTop,t.scrollHeight-t.clientHeight));return t.scrollTop-s}restoreResizeScrollAnchor(e,t=!1){if(!this.isConnected||!this.messageListEl||!this.resizeAnchorController.isCurrent(e))return;const s=e.value.viewportOffset-this.getScrollDeltaSinceAnchor(e.value),i=this.getRenderedViewportOffset(e.value.key);if(i===null){this.resizeAnchorController.cancel(),this.recalculateVirtualWindow(),this.scheduleVirtualMeasurement(),this.resumePaginationAfterScroll();return}const n=ur(this.messageListEl.scrollTop,i,s);Math.abs(this.messageListEl.scrollTop-n)>.5&&(this.messageListEl.scrollTop=n);const a=[this.virtualStart,this.virtualEnd,this.topSpacerHeight,this.bottomSpacerHeight];this.recalculateVirtualWindow();const o=a[0]!==this.virtualStart||a[1]!==this.virtualEnd||a[2]!==this.topSpacerHeight||a[3]!==this.bottomSpacerHeight,l=this.findRenderIndexByKey(e.value.key);e.value.preserveViewport&&(t||o)&&l>=this.virtualStart&&l<=this.virtualEnd?this.resizeAnchorController.begin({...e.value,viewportOffset:s,scrollTop:this.messageListEl.scrollTop}):this.resizeAnchorController.cancel(),this.scheduleVirtualMeasurement(),this.syncScrollbarPosition(),this.syncBottomState(),this.resumePaginationAfterScroll()}resumePaginationAfterScroll(){if(!this.paginationAfterScroll||this.resizeAnchorController.peek())return;this.paginationAfterScroll=!1;const e=this.readMessageListMetrics();e&&(e.scrollTop<=200&&this.hasMoreForward?this.schedulePagination(!0):this.hasMoreBackward&&this.getDistanceFromBottom(e)<=200&&this.schedulePagination(!1))}invalidateVirtualHeightsForWidthChange(){var e;const t=((e=this.messageListEl)==null?void 0:e.clientWidth)||0;if(!this.rowHeightCache.syncViewportWidth(t))return!1;const s=this.captureScrollAnchor(),i=s?this.getRenderedViewportOffset(s.key):null;if(this.rowHeightCache.reset(),this.rowHeightCache.syncViewportWidth(t),!s||i===null)return this.resizeAnchorController.cancel(),this.recalculateVirtualWindow(),!0;this.resizeAnchorController.begin({...s,viewportOffset:i,scrollTop:this.messageListEl.scrollTop});const n=this.findRenderIndexByKey(s.key);return n===-1?(this.resizeAnchorController.cancel(),this.recalculateVirtualWindow(),!0):(this.renderVirtualWindowAroundIndex(n),!0)}findRenderIndexByMessage(e){return this.messageRenderList.findIndex(t=>typeof t!="string"&&this.getMessageUniqueKey(t)===this.getMessageUniqueKey(e))}closeFloatingLayerWhenTargetInvisible(){const e=t=>{if(!t)return!0;const s=this.findRenderIndexByMessage(t);return s>=this.virtualStart&&s<=this.virtualEnd};e(this.currentSelectMessage)||this.hideMsgMenu(),e(this.reactionTargetMessage)||this.hideReactionPanel(),e(this.readReceiptMessage)||this.handleCloseReadReceiptModal()}connectedCallback(){super.connectedCallback();const e=f();this.hoveredMessageId="",this.unreadCountTop=0,this.ratioY=1,this.sizeHeight=0,this.moveY=0,this.onBottomArea=!0,this.showScrollbar=!1,this.isHoveringScrollbar=!1,this.msgMenu=[],this.messageMenuDisplay="none",this.messageMenuTop=0,this.messageMenuLeft=0,this.currentSelectMessage=void 0,this.isH5=!1,this.showReadReceiptModal=!1,this.readReceiptMessage=null,this.readUsers=[],this.unreadUsers=[],this.readTotalCount=0,this.unreadTotalCount=0,this.readQuery=null,this.unreadQuery=null,this.readHasMore=!1,this.unreadHasMore=!1,this.readLoading=!1,this.unreadLoading=!1,this.readReceiptPositionTop=0,this.readReceiptPositionLeft=0,this.readReceiptAnchor="top-right",this.readReceiptMaxHeight=420,this.messageBubbleCfg=void 0,this.hasMoreBackward=!1,this.multiChoice=!1,this.selectedUids=[],this.showReadReceiptModalMessageUId="",this.reactionPanelDisplay="none",this.reactionPanelTop=0,this.reactionPanelLeft=0,this.reactionTargetMessage=void 0,this.reactionPanelMode="reaction",this.reactionPanelEditSelect=void 0,this.virtualStart=0,this.virtualEnd=-1,this.topSpacerHeight=0,this.bottomSpacerHeight=0,this.lastTouchY=void 0,this.hasUserScrolledAwayFromBottom=!1,this.wasStrictlyAtBottomBeforeResize=!0,this.resetVirtualWindow(),window.addEventListener("click",this._hideMsgMenu),window.addEventListener("click",this._hideReactionPanel),window.addEventListener("click",this._handleClickOutside),this.checkDevice(),window.addEventListener("resize",this._checkDevice),window.addEventListener("resize",this._updateScrollbar),window.addEventListener("resize",this._handleWindowResize),e.addEventListener(x.CHANNEL_SELECTED,this._onSelectedChanged),e.addEventListener(E.RECV_NEW_MESSAGES,this._onRecvNewMessages),e.addEventListener(E.INSERT_NEW_MESSAGES,this._onInsertNewMessages),e.addEventListener(x.MESSAGES_DELETED,this._onDeleteMessages),e.addEventListener(E.MESSAGE_STATE_CHANGE,this._onMessageStateChange),e.addEventListener(E.ADJUST_MESSAGE_LIST_SCROLL,this._onAdjustMessageListScroll),this._unsubscribeMultiChoiceMode=le.subscribe(()=>this.handleMultiChoiceModeChange()),this.messageBubbleCfg=e.bubble.messageBubbleCfg}firstUpdated(){this.ensureMessageListObservers(),this.initMessageList()}updated(){var e;this.ensureMessageListObservers(),(e=this.messageListEl)!=null&&e.querySelector(".nc-message-edit-status")&&this.scheduleVirtualMeasurement()}disconnectedCallback(){var e,t,s,i;super.disconnectedCallback(),this.handleCloseReadReceiptModal(),this.longPress.cancel();const n=f();this.messageListGeneration+=1,this.cancelPaginationTask(),(e=this.scrollControl)==null||e.enableScroll(),this.scrollbarHideTimer&&clearTimeout(this.scrollbarHideTimer),this.resizeLayoutTimer&&clearTimeout(this.resizeLayoutTimer),this.resizeLayoutTimer=void 0,this.cancelAdjustMessageListScroll(),this.virtualWindowFrame&&cancelAnimationFrame(this.virtualWindowFrame),this.virtualMeasureFrame&&cancelAnimationFrame(this.virtualMeasureFrame),this.virtualWindowFrame=0,this.virtualMeasureFrame=0,n.removeEventListener(x.CHANNEL_SELECTED,this._onSelectedChanged),n.removeEventListener(E.RECV_NEW_MESSAGES,this._onRecvNewMessages),n.removeEventListener(E.INSERT_NEW_MESSAGES,this._onInsertNewMessages),n.removeEventListener(x.MESSAGES_DELETED,this._onDeleteMessages),n.removeEventListener(E.MESSAGE_STATE_CHANGE,this._onMessageStateChange),n.removeEventListener(E.ADJUST_MESSAGE_LIST_SCROLL,this._onAdjustMessageListScroll),(t=this._unsubscribeMultiChoiceMode)==null||t.call(this),this._unsubscribeMultiChoiceMode=void 0,window.removeEventListener("click",this._hideMsgMenu),window.removeEventListener("click",this._hideReactionPanel),window.removeEventListener("click",this._handleClickOutside),window.removeEventListener("resize",this._checkDevice),window.removeEventListener("resize",this._updateScrollbar),window.removeEventListener("resize",this._handleWindowResize),(s=this.resizeRefObserver)==null||s.disconnect(),(i=this.messageRowResizeObserver)==null||i.disconnect(),this.observedMessageRows.clear(),this.resizeRefObserver=null,this.messageRowResizeObserver=null,this.observedMessageListEl=void 0,this.scrollControl=null,this.resizeAnchorController.cancel()}$tt(e,...t){return this.i18n.t(e,...t)}getSTTStatus(e){return fe.value[e]}getSTTText(e){const t=ve.value[e]||f().speechToTextStore.getSTTText(e)||"";return t===""?this.$tt("message.speech.to.text.empty"):t}shouldShowSTTStatus(e){if(Ue.value[e])return!1;if(this.getSTTStatus(e))return!0;const t=f().speechToTextStore.getSTTText(e);return t!==void 0?(fe.value={...fe.value,[e]:"success"},ve.value={...ve.value,[e]:t},!0):!1}handleTimeFilter(e){const{year:t,month:s,day:i,weekDay:n}=Tt(e),a=(Date.now()-e)/1e3/60/60/24;let o=this.$tt("time.format.full",t,s,i);return new Date().toDateString()===new Date(e).toDateString()?o=this.$tt("time.format.today"):new Date().toDateString()!==new Date(e).toDateString()&&a<1||1<=a&&a<2?o=this.$tt("time.format.yesterday"):2<=a&&a<7&&(o=this.$tt(this.weeklist[n])),o}handleUserProfiles(e){var t,s;if(e.direction===ue.SEND){const i=f(),n=Dt.value;return(n==null?void 0:n.userId)===i.userId?n:i.appData.getUserProfile(i.userId)}return((t=A.value)==null?void 0:t.channelType)===T.GROUP?$t.value.find(i=>i.userId===e.senderUserId)||{name:e.senderUserId,userId:e.senderUserId,avatarUrl:(s=A.value)==null?void 0:s.avatarUrl}:{name:A.value.name,userId:A.value.channelId,avatarUrl:A.value.avatarUrl}}handleIconClick(e){const t=this.handleUserProfiles(e);f().emit(new v(x.CHANNEL_ICON_CLICK,{channelIdentifier:e.channelIdentifier,profile:t}))}showAvatar(e,t){return!0}bubbleShowPortrait(e){const t=this.messageBubbleCfg;return e.direction===ue.SEND&&e.channelType===T.DIRECT?!!(t!=null&&t.showMyProfileInDirectionChannel):e.direction===ue.SEND&&e.channelType===T.GROUP?!!(t!=null&&t.showMyProfileInGroupChannel):e.direction===ue.RECEIVE&&e.channelType===T.DIRECT?!!(t!=null&&t.showOthersProfileInDirectionChannel):e.direction===ue.RECEIVE&&e.channelType===T.GROUP?!!(t!=null&&t.showOthersProfileInGroupChannel):!1}bubbleShowName(e){const t=this.messageBubbleCfg;return e.direction===ue.SEND&&e.channelType===T.DIRECT?!!(t!=null&&t.showMyNameInDirectionChannel):e.direction===ue.SEND&&e.channelType===T.GROUP?!!(t!=null&&t.showMyNameInGroupChannel):e.direction===ue.RECEIVE&&e.channelType===T.DIRECT?!!(t!=null&&t.showOthersNameInDirectionChannel):e.direction===ue.RECEIVE&&e.channelType===T.GROUP?!!(t!=null&&t.showOthersNameInGroupChannel):!1}bubbleDirection(e){var t;return e.direction===1&&((t=this.messageBubbleCfg)==null?void 0:t.layout)===Ua.LEFT_RIGHT?"row-reverse":"row"}bubbleColorStyle(e,t){const s=this.messageBubbleCfg;if(!s)return;const i=Number(s.textColorForOthers),n=Number(s.backgroundColorForOthers),a=Number(s.textColorForMyself),o=Number(s.backgroundColorForMyself);let l=`#${i.toString(16).padStart(6,"0")}`,c=`#${n.toString(16).padStart(6,"0")}`,d=`${s.redius}px`;e.direction===ue.SEND&&(l=`#${a.toString(16).padStart(6,"0")}`,c=`#${o.toString(16).padStart(6,"0")}`);const u=f().isMessageReactionEnabled&&e.reactions.length>0;return[C.IMAGE,C.SHORT_VIDEO,C.GIF].includes(e.messageType)&&!u&&(c=c+"00"),{color:l,backgroundColor:c,borderRadius:d}}bubbleStyleAlign(e){var t;return e.direction===1&&((t=this.messageBubbleCfg)==null?void 0:t.layout)==="left-right"}canShowReactionEntry(e){return f().isMessageReactionEnabled&&Da(e)}isMessageEditing(e){var t;return!!e.messageId&&((t=A.value)==null?void 0:t.updatingMessageUId)===e.messageId}setActiveEditMessage(e){const t=f().channelModule.getOpenedChannelModel();t&&(this.reactionPanelMode==="edit"&&this.hideReactionPanel(),t.updatingMessageUId=e,A.value=t.clone(),this.scheduleLayoutUpdate({measureVirtualRows:!0,preserveBottom:!0}))}async startMessageEdit(e){const t=f().channelModule.getOpenedChannelModel();if(!t||!e.messageId)return;const s=t.updatingMessageUId;if(s&&s!==e.messageId){if(!await f().confirm("alert.message.edit.switch"))return;const n=G.value.find(a=>a.messageId===s);n?f().message.clearMessageEdit(n):this.setActiveEditMessage(void 0)}this.setActiveEditMessage(e.messageId);const i=e.editDraft!==void 0?e.editDraft:En(e);f().message.setMessageEditDraft(e,i)}handleMessageEditDraft(e,t){f().message.setMessageEditDraft(e,t)}handleMessageEditResize(e,t){if(!this.isMessageEditing(e))return;const s=t.detail.previousBottom;if(!this.messageListEl||!Number.isFinite(s))return;const i=t.currentTarget,n=this.messageListEl.getBoundingClientRect(),a=i==null?void 0:i.getBoundingClientRect();!a||a.bottom<=n.top||a.top>=n.bottom||(this.messageListEl.scrollTop=ur(this.messageListEl.scrollTop,a.bottom,s),this.syncBottomState(),this.scheduleLayoutUpdate({measureVirtualRows:!0}))}handleMessageEditCancel(e){f().message.clearMessageEdit(e),this.setActiveEditMessage(void 0)}async handleMessageEditConfirm(e,t){!t.trim()||e.editStatus===Q.UPDATING||(f().message.setMessageEditDraft(e,t),this.setActiveEditMessage(void 0),await f().message.updateMessage(e,t))}handleMessageEditRetry(e){f().message.retryMessageUpdate(e)}alignMessageEditStatuses(){var e;(e=this.messageListEl)==null||e.querySelectorAll(".nc-message-edit-status-anchor").forEach(t=>{var s,i;const n=t.parentElement,a=(i=(s=n==null?void 0:n.querySelector("nc-message-bubble"))==null?void 0:s.shadowRoot)==null?void 0:i.querySelector(".message-body-wrapper"),o=t.querySelector(".nc-message-edit-status");if(!a||!o)return;const l=a.getBoundingClientRect(),c=o.getBoundingClientRect().width,d=n!=null&&n.classList.contains("nc-chatui-msg-bubble-wrapper-right")&&c>l.width?l.right-c:l.left;o.style.left=`${d-t.getBoundingClientRect().left}px`})}handleBubbleClick(e){if(e.sentStatus===L.SENDING||e.sentStatus===L.FAILED)return;const t=f();switch(e.messageType){case C.IMAGE:t.emit(new v(x.MEDIA_MESSAGE_MODAL_EVENT,e));break;case C.SHORT_VIDEO:t.audioPlayer.pause(),t.emit(new v(x.MEDIA_MESSAGE_MODAL_EVENT,e));break;case C.GIF:t.emit(new v(x.MEDIA_MESSAGE_MODAL_EVENT,e));break;case C.COMBINE:t.emit(new v(x.COMBINE_MESSAGE_MODAL_EVENT,e));break}}handleLinkClick(e){const t=e.detail,s=Array.isArray(t)?t[0]:t;f().emit(new v(x.MESSAGE_LINK_CLICK,s))}async handleMessageRightClick(e,t){var s,i;if(le.value)return;this.hideReactionPanel(),this.handleCloseReadReceiptModal();const n=this.getSourceMouseEvent(t);if(!n)return;const a=this.isH5&&t.currentTarget instanceof HTMLElement?(s=t.currentTarget.shadowRoot)==null?void 0:s.querySelector(".message-body-wrapper"):void 0;this.currentSelectMessage=e;let o=f().msgMenu.getMenu(e).filter(p=>(!this.isH5||p.id!==Y.EDIT)&&(this.isH5||p.id!==Y.REACTIONS)).map(p=>({id:p.id,icon:p.icon,label:this.$tt(p.id),message:e}));if(e.messageType===C.HD_VOICE&&e.messageId){const p=this.shouldShowSTTStatus(e.messageId),m=o.findIndex(y=>y.id===Y.SPEECH_TO_TEXT||y.id===Y.CANCEL_SPEECH_TO_TEXT);m!==-1&&(o[m]={id:p?Y.CANCEL_SPEECH_TO_TEXT:Y.SPEECH_TO_TEXT,icon:o[m].icon,label:this.$tt(p?Y.CANCEL_SPEECH_TO_TEXT:Y.SPEECH_TO_TEXT),message:e})}this.msgMenu=o,this.messageMenuDisplay="block",await this.updateComplete;const l=this.messageMenuEl;if(!l||(await Promise.all(Array.from(l.querySelectorAll("nc-message-list-menu-item"),p=>p.updateComplete)),!this.isConnected||this.currentSelectMessage!==e||this.messageMenuDisplay!=="block"))return;const c=l.clientWidth,d=l.clientHeight,u=this.isH5?this.calculateMessageMenuPosition(c,d,n,this.bubbleStyleAlign(e),a==null?void 0:a.getBoundingClientRect()):this.calculateActionPopupPosition(c,d,n,this.bubbleStyleAlign(e));this.messageMenuTop=u.top,this.messageMenuLeft=u.left,this.messageMenuDisplay==="block"&&((i=this.scrollControl)==null||i.disableScroll())}async handleMenuItemClick(e,t,s){const i=f();switch(e){case Y.COPY:{const n=t.content.text||"";if(!n)return;try{await navigator.clipboard.writeText(n)}catch{i.emit(new v(x.TOAST_EVENT,{message:i.i18n.format("toast.copy.failed"),showIcon:!1}));break}i.emit(new v(x.TOAST_EVENT,{message:i.i18n.format("toast.copy.success"),showIcon:!0}));break}case Y.DELETE_FOR_ME:this.isMessageEditing(t)&&f().message.clearMessageEdit(t,!0,!0),i.message.deleteMessage(t,!1);break;case Y.DELETE_FOR_ALL:this.isMessageEditing(t)&&f().message.clearMessageEdit(t,!0,!0),i.message.deleteMessage(t,!0);break;case Y.MULIT_CHOICE:le.value=!0;break;case Y.REPLY:re.value=t;break;case Y.REACTIONS:s.stopPropagation(),await this.handleReactionClick(t,s);break;case Y.EDIT:this.hideMsgMenu(),await this.startMessageEdit(t);break;case Y.FORWARD:za(Ct.SINGLE,[t]);break;case Y.SPEECH_TO_TEXT:if(t.messageId){const n={...Ue.value};if(delete n[t.messageId],Ue.value=n,i.speechToTextStore.hasConverted(t.messageId)){const a=i.speechToTextStore.getSTTText(t.messageId)||"";fe.value={...fe.value,[t.messageId]:"success"},ve.value={...ve.value,[t.messageId]:a}}else fe.value={...fe.value,[t.messageId]:"converting"},await i.speechToTextStore.requestForMessage(t)}break;case Y.CANCEL_SPEECH_TO_TEXT:if(t.messageId){Ue.value={...Ue.value,[t.messageId]:!0};const n={...fe.value},a={...ve.value};delete n[t.messageId],delete a[t.messageId],fe.value=n,ve.value=a}break;default:i.emit(new v(x.MESSAGE_MENU_ITEM_CLICK,{id:e,message:t}))}}hideMsgMenu(){var e;this.messageMenuDisplay="none",this.currentSelectMessage=void 0,this.msgMenu=[],(e=this.scrollControl)==null||e.enableScroll()}checkDevice(){this.isH5=Ee(),this.isH5&&this.hideReactionPanel()}handleWindowResize(){this.hideMsgMenu(),this.hideReactionPanel(),this.handleCloseReadReceiptModal()}get reactionEmojis(){return f().input.chatEmojis.chats}getSourceMouseEvent(e){if(e instanceof MouseEvent)return e;const t=e.detail;return t instanceof MouseEvent?t:Array.isArray(t)&&t[0]instanceof MouseEvent?t[0]:t&&typeof t=="object"&&"evt"in t&&t.evt instanceof MouseEvent?t.evt:null}findStatusElementInMessageItem(e){var t;if(!e)return null;const s=e.querySelector(".nc-chatui-msg-sent-status, .nc-chatui-message-sent-status");if(s)return s;const i=e.querySelector("nc-message-bubble"),n=i==null?void 0:i.shadowRoot;if(!n)return null;const a=n.querySelector(".nc-chatui-msg-sent-status");if(a)return a;const o=n.querySelector("nc-message-sent-status");return((t=o==null?void 0:o.shadowRoot)==null?void 0:t.querySelector(".nc-chatui-message-sent-status"))||null}findStatusElementFromEvent(e){if(!e)return null;for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(".nc-chatui-msg-sent-status, .nc-chatui-message-sent-status"))return t;return null}getBubbleBodyRectByEvent(e){var t;const s=e.target,i=s==null?void 0:s.getRootNode();if(i instanceof ShadowRoot)return(t=i.querySelector(".message-body-wrapper"))==null?void 0:t.getBoundingClientRect()}calculateActionPopupPosition(e,t,s,i,n){var a;if(!this.messageViewportEl)return{left:0,top:0};const o=this.messageViewportEl.getBoundingClientRect(),l=n||((a=s.target)==null?void 0:a.getBoundingClientRect()),c=this.getBubbleBodyRectByEvent(s),d=4,u=10,p=Math.max(0,o.width-e),m=Math.max(0,o.height-t-u);if(!l)return{left:Math.max(0,Math.min(s.clientX-o.left,p)),top:Math.max(0,Math.min(s.clientY-o.top,m))};const y=i?l.left-o.left-e-d:l.right-o.left+d;return{left:Math.max(0,Math.min(y,p)),top:Math.max(0,Math.min(((c==null?void 0:c.top)??l.top)-o.top,m))}}calculateMessageMenuPosition(e,t,s,i,n){var a;if(!this.messageViewportEl)return{left:0,top:0};const o=this.messageViewportEl.getBoundingClientRect(),l=Math.max(0,o.width-e-10),c=Math.min(10,l),d=(a=this.parentElement)==null?void 0:a.querySelector("nc-input-provider"),u=d==null?void 0:d.getBoundingClientRect(),p=u&&u.height>0&&u.top<o.bottom?Math.max(o.top,u.top):o.bottom,m=10,y=Math.max(0,p-o.top-t-m),S=n?(i?n.left-e-4:n.right+4)-o.left:s.clientX-o.left,U=((n==null?void 0:n.top)??s.clientY)-o.top;return{left:Math.max(c,Math.min(S,l)),top:Math.max(0,Math.min(U,y))}}calculateCenteredReactionPanelPosition(e,t){return this.messageViewportEl?{left:Math.max(0,(this.messageViewportEl.clientWidth-e)/2),top:Math.max(0,(this.messageViewportEl.clientHeight-t)/2)}:{left:0,top:0}}calculateEditReactionPanelPosition(e,t,s){if(!this.messageViewportEl||!s)return{left:0,top:0};const i=this.messageViewportEl.getBoundingClientRect(),n=8,a=Math.max(0,i.width-e),o=Math.max(0,i.height-t);return{left:Math.max(0,Math.min(s.right-i.left-e,a)),top:Math.max(0,Math.min(s.top-i.top-t-n,o))}}async handleReactionClick(e,t){var s;if(le.value||!f().isMessageReactionEnabled||e.sentStatus!==L.SENT)return;const i=this.getSourceMouseEvent(t);if(!i)return;const n=(s=i.target)==null?void 0:s.getBoundingClientRect();this.hideMsgMenu(),this.handleCloseReadReceiptModal(),this.reactionTargetMessage=e,this.reactionPanelMode="reaction",this.reactionPanelEditSelect=void 0,this.reactionPanelDisplay="grid",await this.updateComplete;const a=this.reactionPanelEl;if(!a){this.hideReactionPanel();return}a.scrollTop=0;const o=this.isH5?this.calculateCenteredReactionPanelPosition(a.offsetWidth,a.offsetHeight):this.calculateActionPopupPosition(a.offsetWidth,a.offsetHeight,i,this.bubbleStyleAlign(e),n);this.reactionPanelTop=o.top,this.reactionPanelLeft=o.left}hideReactionPanel(){this.reactionPanelDisplay="none",this.reactionTargetMessage=void 0,this.reactionPanelMode="reaction",this.reactionPanelEditSelect=void 0}handleReactionEmojiClick(e){var t;if(this.reactionPanelMode==="edit"){(t=this.reactionPanelEditSelect)==null||t.call(this,e),this.hideReactionPanel();return}const s=this.reactionTargetMessage;if(!s||s.sentStatus!==L.SENT)return;const i=s.reactions.find(n=>n.reactionId===e);f().message.updateMessageReaction(s,e,!!(i!=null&&i.hasCurrentUserReacted)),this.hideReactionPanel()}async handleMessageEditEmojiPanelToggle(e,t){var s,i;if(t.stopPropagation(),this.reactionPanelDisplay!=="none"&&this.reactionPanelMode==="edit"){this.hideReactionPanel();return}const n=(s=t.detail)==null?void 0:s.evt;if(!(n instanceof MouseEvent))return;const a=(i=n.target)==null?void 0:i.getBoundingClientRect();this.hideMsgMenu(),this.handleCloseReadReceiptModal(),this.reactionTargetMessage=e,this.reactionPanelMode="edit",this.reactionPanelEditSelect=t.detail.onSelect,this.reactionPanelDisplay="grid",await this.updateComplete;const o=this.reactionPanelEl;if(!o){this.hideReactionPanel();return}o.scrollTop=0;const l=this.calculateEditReactionPanelPosition(o.offsetWidth,o.offsetHeight,a);this.reactionPanelTop=l.top,this.reactionPanelLeft=l.left}handleResendMessage(e,t){const s=f();e.sentStatus===L.FAILED?s.message.resendMessage(e):e.channelType===T.GROUP&&(e.sentStatus===L.SENT||e.sentStatus===L.READ)&&s.isReadReceiptV5&&(this.showReadReceiptModalMessageUId=e.messageId,this.handleShowReadReceiptModal(e,t))}updateReadReceiptPosition(e){var t;if(!this.messageListEl||!this.messageViewportEl)return;if(!e)if((t=this.readReceiptMessage)!=null&&t.messageId){const a=this.messageListEl.querySelector(`.nc-chatui-msg-list-item[data-message-uid="${this.readReceiptMessage.messageId}"]`);if(a){const o=this.findStatusElementInMessageItem(a);if(o)this.readReceiptStatusElement=o,e=o;else return}else return}else return;const s=e.getBoundingClientRect(),i=this.messageViewportEl.getBoundingClientRect(),n=qd({viewportWidth:i.width,viewportHeight:i.height,statusTop:s.top-i.top,statusBottom:s.bottom-i.top,statusLeft:s.left-i.left,statusRight:s.right-i.left});this.readReceiptPositionTop=n.top,this.readReceiptPositionLeft=n.left,this.readReceiptAnchor=n.anchor,this.readReceiptMaxHeight=n.maxHeight}async handleShowReadReceiptModal(e,t){var s,i,n;if(this.hideMsgMenu(),this.hideReactionPanel(),!this.isConnected||!e.messageId||e.channelType!==T.GROUP)return;this.handleCloseReadReceiptModal(),this.readReceiptMessage=e;const a=je.createMessagesReadReceiptUsersQuery({channelIdentifier:e.channelIdentifier,pageSize:15,messageId:e.messageId,status:Cn.RESPONDED}),o=je.createMessagesReadReceiptUsersQuery({channelIdentifier:e.channelIdentifier,pageSize:15,messageId:e.messageId,status:Cn.UNRESPONDED});this.readQuery=a,this.unreadQuery=o;const l=()=>this.isConnected&&this.readQuery===a&&this.unreadQuery===o;if(await this.updateComplete,!l())return;let c=null;if(c=this.findStatusElementFromEvent(t),!c){const d=(s=this.messageListEl)==null?void 0:s.querySelector(`.nc-chatui-msg-list-item[data-message-uid="${e.messageId}"]`);d&&(c=this.findStatusElementInMessageItem(d))}if(c)this.readReceiptStatusElement=c,this.updateReadReceiptPosition(c);else{const d=Zd(((i=this.messageViewportEl)==null?void 0:i.clientWidth)||0,((n=this.messageViewportEl)==null?void 0:n.clientHeight)||0);this.readReceiptPositionTop=d.top,this.readReceiptPositionLeft=d.left,this.readReceiptAnchor=d.anchor,this.readReceiptMaxHeight=d.maxHeight}await Promise.all([this.loadReadUsers(),this.loadUnreadUsers()]),l()&&(this.showReadReceiptModal=!0)}async loadReadUsers(){const e=this.readQuery;if(!this.isConnected||!e||this.readLoading)return;this.readLoading=!0;const{data:t}=await e.loadNextPage();!this.isConnected||this.readQuery!==e||(t&&(this.readUsers=[...this.readUsers,...t.data||[]],this.readTotalCount=t.totalCount,this.readHasMore=e.hasNext),this.readLoading=!1)}async loadUnreadUsers(){const e=this.unreadQuery;if(!this.isConnected||!e||this.unreadLoading)return;this.unreadLoading=!0;const{data:t}=await e.loadNextPage();!this.isConnected||this.unreadQuery!==e||(t&&(this.unreadUsers=[...this.unreadUsers,...t.data||[]],this.unreadTotalCount=t.totalCount,this.unreadHasMore=e.hasNext),this.unreadLoading=!1)}async handleReadReceiptScroll(e,t){if(!this.readQuery||!this.unreadQuery)return;const{scrollTop:s,scrollHeight:i,clientHeight:n}=e;i-s-n<50&&(t==="read"&&this.readHasMore&&!this.readLoading?await this.loadReadUsers():t==="unread"&&this.unreadHasMore&&!this.unreadLoading&&await this.loadUnreadUsers())}onReadReceiptScroll(e){const[t,s]=e.detail;this.handleReadReceiptScroll(t,s)}handleCloseReadReceiptModal(){this.showReadReceiptModal=!1,this.readReceiptMessage=null,this.readUsers=[],this.unreadUsers=[],this.readTotalCount=0,this.unreadTotalCount=0,this.readQuery=null,this.unreadQuery=null,this.readLoading=!1,this.unreadLoading=!1,this.readHasMore=!1,this.unreadHasMore=!1,this.readReceiptStatusElement=null}handleClickOutside(e){this.showReadReceiptModal&&(e.target.closest(".read-receipt-popover")||this.handleCloseReadReceiptModal())}handleScrollbarEnter(){this.isHoveringScrollbar=!0,this.showScrollbar=!0,this.scrollbarHideTimer&&clearTimeout(this.scrollbarHideTimer)}handleScrollbarLeave(){this.isHoveringScrollbar=!1,this.scrollbarHideTimer&&clearTimeout(this.scrollbarHideTimer),this.scrollbarHideTimer=setTimeout(()=>{this.showScrollbar=!1},1e3)}handleScroll(){var e;if((e=this.scrollControl)!=null&&e.isScrollDisabled)return;if(this.hideReactionPanel(),this.handleCloseReadReceiptModal(),this.showScrollbar=!0,this.scrollbarHideTimer&&clearTimeout(this.scrollbarHideTimer),this.isHoveringScrollbar||(this.scrollbarHideTimer=setTimeout(()=>{this.showScrollbar=!1},1e3)),!A.value||G.value.length===0){this.cancelPaginationTask();return}const t=this.readMessageListMetrics();if(!t)return;const{scrollHeight:s,scrollTop:i,clientHeight:n}=t;this.resizeAnchorController.peek()&&(this.paginationAfterScroll=!0),this.scheduleVirtualWindowUpdate();const a=this.isStrictlyAtBottom(t);if(this.onBottomArea=this.isInBottomArea(t),a&&(this.hasUserScrolledAwayFromBottom=!1,this.wasStrictlyAtBottomBeforeResize=!0),this.hasUserScrolledAwayFromBottom&&this.cancelAdjustMessageListScroll(),this.syncScrollbarPosition(t),i<=200&&!this.paginationTask){if(!this.hasMoreForward)return;this.schedulePagination(!0)}this.showReadReceiptModal&&this.updateReadReceiptPosition(this.readReceiptStatusElement),this.hasMoreBackward&&s-i-n<=200&&this.schedulePagination(!1)}cancelPaginationTask(){this.paginationTask=null}async schedulePagination(e){var t,s;const i=(t=A.value)==null?void 0:t.channelIdentifier;if(this.paginationTask||!i||!this.isConnected||(s=this.resizeAnchorController.peek())!=null&&s.value.preserveViewport)return;const n=this.messageListGeneration,a=Symbol(),o=()=>this.paginationTask===a&&this.isCurrentMessageList(i,n);this.paginationTask=a;try{if(!o()||!(e?this.hasMoreForward:this.hasMoreBackward))return;const l=G.value[e?0:G.value.length-1];if(!l||!l.channelIdentifier.isEqualTo(i)||!Number.isFinite(l.sentTime))return;const c=f().message.getHistoryPageTimestamp(i,G.value,e);e?await this.moreForward(i,c,o):await this.moreBackward(i,c,o)}finally{this.paginationTask===a&&(this.paginationTask=null)}}handleUserScrollInput(e){var t;if((t=this.scrollControl)!=null&&t.isScrollDisabled)return;let s=!1;if(e.type==="wheel")s=e.deltaY<0;else if(e.type==="touchstart"||e.type==="touchmove"){const i=e.touches,n=i.length===1?i[0].clientY:void 0;s=e.type==="touchmove"&&n!==void 0&&this.lastTouchY!==void 0&&n>this.lastTouchY,this.lastTouchY=n}else if(e.type==="keydown"){const{key:i,shiftKey:n}=e;s=["ArrowUp","PageUp","Home"].includes(i)||i===" "&&n}!s||!this.messageListEl||this.messageListEl.scrollTop<=0||(this.hasUserScrolledAwayFromBottom=!0,this.wasStrictlyAtBottomBeforeResize=!1,this.cancelAdjustMessageListScroll())}async moreForward(e,t,s){const{hasMore:i,code:n,list:a}=await f().message.reqHistories(e,t,!0);if(s()&&n===I.SUCCESS){const o=this.capturePaginationAnchor(),l=this.mergeMessagesByUniqueKey(a,G.value);if(G.value=l.slice(0,300),this.hasMoreForward=i,l.length>300&&(this.hasMoreBackward=!0),this.unreadCountTop){const c=this.unreadCountTop-a.length;this.unreadCountTop=c<0?0:c}if(await this.refreshVirtualWindow(o),!s())return;this.restorePaginationAnchor(o)}}async moreBackward(e,t,s){const{hasMore:i,code:n,list:a}=await f().message.reqHistories(e,t,!1);if(s()&&n===I.SUCCESS){const o=this.capturePaginationAnchor(),l=this.mergeMessagesByUniqueKey(G.value,a);if(G.value=l.slice(-300),this.hasMoreBackward=i,l.length>300&&(this.hasMoreForward=!0),await this.refreshVirtualWindow(o),!s()||(this.restorePaginationAnchor(o),$e.value&&!i&&(await f().channelModule.clearUnreadCountByTimestamp(e),!s()||(await f().message.sendReadReceiptMessage(e,a),!s()))))return}}handleMove(e){var t;if((t=this.scrollControl)!=null&&t.isScrollDisabled||!this.messageListEl)return;this.resizeAnchorController.cancel();const s=e.detail[0];this.messageListEl.scrollTop=s*this.messageListEl.scrollHeight/100,this.scheduleVirtualWindowUpdate(),this.syncBottomState(),this.syncScrollbarPosition()}updateScrollbar(e=this.readMessageListMetrics()){if(!e)return null;const t=e.offsetHeight**2/Math.max(e.scrollHeight,1),s=Math.floor(t*100)/100,i=Math.max(s,20),n=e.offsetHeight-s,a=e.offsetHeight-i,o=n>0&&a>0?s/n/(i/a):1;return this.ratioY=Math.floor(o*100)/100||1,this.sizeHeight=s<e.offsetHeight?Math.floor(i):0,e}syncScrollbarPosition(e=this.readMessageListMetrics()){const t=this.updateScrollbar(e);return t?!this.sizeHeight||t.scrollTop<=0?(this.moveY=0,t):this.getDistanceFromBottom(t)<=2?(this.moveY=(t.offsetHeight-this.sizeHeight)*100/this.sizeHeight,t):(this.moveY=t.scrollTop*100/t.offsetHeight*this.ratioY||0,t):null}scrollMessageListToBottom(){if(!this.messageListEl)return;const e=this.syncScrollbarPosition();e&&(this.messageListEl.scrollTop=Math.max(e.scrollHeight-e.clientHeight,0),this.onBottomArea=!0,this.hasUserScrolledAwayFromBottom=!1,this.wasStrictlyAtBottomBeforeResize=!0,this.recalculateVirtualWindow(),this.syncScrollbarPosition())}scheduleScrollToBottomAfterPaint(){this.scheduleBottomResync()}async setScroll2bottom(){this.resizeAnchorController.cancel(),await this.refreshVirtualWindow(),this.scrollMessageListToBottom(),await this.updateComplete,this.scheduleVirtualMeasurement(),await this.settleMessageListToBottom()}handleResizeRef(){this.scheduleResizeLayoutUpdate()}handleAdjustMessageListScroll(){this.messageListEl&&this.scheduleLayoutUpdate({measureVirtualRows:!0,preserveBottom:!0})}cancelAdjustMessageListScroll(){this.adjustScrollFrame&&cancelAnimationFrame(this.adjustScrollFrame),this.adjustScrollWriteFrame&&cancelAnimationFrame(this.adjustScrollWriteFrame),this.bottomResyncFrame&&cancelAnimationFrame(this.bottomResyncFrame),this.adjustScrollFrame=0,this.adjustScrollWriteFrame=0,this.bottomResyncFrame=0,this.layoutRefreshRequested=!1,this.layoutMeasurementRequested=!1,this.layoutBottomPreservationRequested=!1}scheduleLayoutUpdate({refreshVirtualWindow:e=!1,measureVirtualRows:t=!1,preserveBottom:s=!1}={}){this.layoutRefreshRequested||(this.layoutRefreshRequested=e),this.layoutMeasurementRequested||(this.layoutMeasurementRequested=t),this.layoutBottomPreservationRequested||(this.layoutBottomPreservationRequested=s),this.updateComplete.then(()=>this.queueLayoutUpdate())}scheduleResizeLayoutUpdate(){this.resizeLayoutTimer&&clearTimeout(this.resizeLayoutTimer),this.resizeLayoutTimer=setTimeout(()=>{this.resizeLayoutTimer=void 0,this.scheduleLayoutUpdate({refreshVirtualWindow:!0,measureVirtualRows:!0,preserveBottom:!0})},100)}queueLayoutUpdate(){!this.isConnected||!this.messageListEl||this.adjustScrollFrame||this.adjustScrollWriteFrame||(this.adjustScrollFrame=requestAnimationFrame(()=>{if(this.adjustScrollFrame=0,!this.isConnected||!this.messageListEl)return;const e=this.layoutRefreshRequested,t=this.layoutMeasurementRequested,s=this.layoutBottomPreservationRequested;this.layoutRefreshRequested=!1,this.layoutMeasurementRequested=!1,this.layoutBottomPreservationRequested=!1;const i=!!this.readMessageListMetrics()&&s&&this.wasStrictlyAtBottomBeforeResize&&!this.hasUserScrolledAwayFromBottom;if(e&&(this.invalidateVirtualHeightsForWidthChange()||this.recalculateVirtualWindow()),t&&!i&&!this.resizeAnchorController.peek()){const n=this.captureScrollAnchor(),a=n?this.getRenderedViewportOffset(n.key):null;n&&a!==null&&this.resizeAnchorController.begin({...n,viewportOffset:a,scrollTop:this.messageListEl.scrollTop})}this.adjustScrollWriteFrame=requestAnimationFrame(()=>{this.adjustScrollWriteFrame=0,!(!this.isConnected||!this.messageListEl)&&(this.syncScrollbarPosition()&&i&&!this.hasUserScrolledAwayFromBottom&&(this.scrollMessageListToBottom(),this.scheduleBottomResync()),t&&this.scheduleVirtualMeasurement(),(this.layoutRefreshRequested||this.layoutMeasurementRequested||this.layoutBottomPreservationRequested)&&this.updateComplete.then(()=>this.queueLayoutUpdate()))})}))}scheduleBottomResync(){!this.isConnected||!this.messageListEl||this.bottomResyncFrame||(this.bottomResyncFrame=requestAnimationFrame(()=>{this.bottomResyncFrame=0,this.isConnected&&this.settleMessageListToBottom(3)}))}waitForNextFrame(){return new Promise(e=>requestAnimationFrame(()=>e()))}async settleMessageListToBottom(e=2){if(!(!this.isConnected||!this.messageListEl||this.hasUserScrolledAwayFromBottom)){for(let t=0;t<e;t+=1){if(await this.waitForNextFrame(),!this.isConnected)return;const s=this.syncScrollbarPosition();if(!s||!this.messageListEl||this.hasUserScrolledAwayFromBottom)return;const i=Math.max(s.scrollHeight-s.clientHeight,0);if(Math.abs(this.messageListEl.scrollTop-i)>1&&(this.messageListEl.scrollTop=i),this.recalculateVirtualWindow(),await this.updateComplete,this.scheduleVirtualMeasurement(),this.isStrictlyAtBottom(this.readMessageListMetrics()||s))break}this.messageListEl&&!this.hasUserScrolledAwayFromBottom&&(this.onBottomArea=!0,this.hasUserScrolledAwayFromBottom=!1,this.wasStrictlyAtBottomBeforeResize=!0)}}_useResizeObserver(e,t){if(window&&"ResizeObserver"in window&&e){const s=new ResizeObserver(t);return s.observe(e),s}return null}ensureMessageListObservers(){var e,t;this.observedMessageListEl!==this.messageListEl&&((e=this.scrollControl)==null||e.enableScroll(),(t=this.resizeRefObserver)==null||t.disconnect(),this.observedMessageListEl=this.messageListEl,this.scrollControl=this.messageListEl?Dr({value:this.messageListEl}):null,this.resizeRefObserver=this.messageListEl?this._useResizeObserver(this.messageListEl,()=>this.handleResizeRef()):null),this.syncMessageRowResizeObserver()}syncMessageRowResizeObserver(){if(!this.messageListEl){this.observedMessageRows.forEach(t=>{var s;return(s=this.messageRowResizeObserver)==null?void 0:s.unobserve(t)}),this.observedMessageRows.clear();return}if(typeof ResizeObserver>"u")return;this.messageRowResizeObserver||(this.messageRowResizeObserver=new ResizeObserver(()=>{this.resizeLayoutTimer||this.scheduleVirtualMeasurement()}));const e=new Set(Array.from(this.messageListEl.querySelectorAll(".nc-chatui-msg-list-box[data-virtual-index]")));this.observedMessageRows.forEach(t=>{var s;e.has(t)||(s=this.messageRowResizeObserver)==null||s.unobserve(t)}),e.forEach(t=>{var s;this.observedMessageRows.has(t)||(s=this.messageRowResizeObserver)==null||s.observe(t)}),this.observedMessageRows=e}async handleLocation2Bottom(){if(!A.value)return;this.resizeAnchorController.cancel();const e=A.value.channelIdentifier;this.cancelPaginationTask();const t=++this.messageListGeneration,{code:s,list:i,hasMore:n}=await f().message.reqHistories(e,0,!0);this.isCurrentMessageList(e,t)&&s===I.SUCCESS&&(this.cancelPaginationTask(),G.value.length=0,G.value=i,this.hasMoreForward=n,this.hasMoreBackward=!1,await this.setScroll2bottom(),await f().channelModule.clearUnreadCountByTimestamp(e),await f().message.sendReadReceiptMessage(e,i))}async handleLocation2Top(){if(!A.value)return;this.resizeAnchorController.cancel();const e=A.value.channelIdentifier,t=this.messageListGeneration;this.unreadCountTop=0,this.hasMoreBackward=!0,this.updateScrollbar();const s=await this.handleReqHistories(this.backupFirstUnreadMessageTime,!0,()=>this.isCurrentMessageList(e,t));this.isCurrentMessageList(e,t)&&s.length&&await f().message.sendReadReceiptMessage(e,s)}getMessageUniqueKey(e){return e.messageId?`uid:${e.messageId}`:e.transactionId!==void 0?`tid:${e.transactionId}`:e.clientId!==void 0?`mid:${e.clientId}`:[H(e.channelIdentifier),e.senderUserId,e.messageType,e.sentTime].join(":")}mergeMessagesByUniqueKey(...e){const t=[];e.forEach(n=>t.push(...n));const s=new Set,i=[];for(let n=t.length-1;n>=0;n-=1){const a=t[n],o=this.getMessageUniqueKey(a);s.has(o)||(s.add(o),i.unshift(a))}return i.sort((n,a)=>n.sentTime-a.sentTime||(n.transactionId??0)-(a.transactionId??0))}isCurrentMessageList(e,t){return this.isConnected&&t===this.messageListGeneration&&!!A.value&&A.value.channelIdentifier.isEqualTo(e)}async handleReqHistories(e,t,s){var i;this.resizeAnchorController.cancel();const n=f(),a=(i=A.value)==null?void 0:i.channelIdentifier;if(!a)return[];const o=this.messageListGeneration,l=s||(()=>this.isCurrentMessageList(a,o));if(t){const{code:m,list:y,hasMore:S}=await n.message.reqHistories(a,e-1,!1);if(!l())return G.value;m===I.SUCCESS&&(this.hasMoreBackward=S,G.value=this.mergeMessagesByUniqueKey(y),await this.refreshVirtualWindow(),this.syncScrollbarPosition())}const c=t?this.captureScrollAnchor():null,{code:d,list:u,hasMore:p}=await n.message.reqHistories(a,e,!0);return l()&&d===I.SUCCESS&&(G.value=this.mergeMessagesByUniqueKey(u,G.value),this.hasMoreForward=p,await this.refreshVirtualWindow(),t?this.restoreScrollAnchor(c):(this.scrollMessageListToBottom(),this.scheduleScrollToBottomAfterPaint())),G.value}async initMessageList(){this.cancelPaginationTask();const e=++this.messageListGeneration;if(!A.value)return;const t=f(),{channelIdentifier:s,unreadCount:i}=A.value,n=()=>this.isCurrentMessageList(s,e);this.resetVirtualWindow(),G.value=[],this.firstUnreadMessageTime=0,$e.value=i;const a=!this.FOCUS_ON_LATEST_MESSAGE&&this.firstUnreadMessageTime>0,o=await this.handleReqHistories(this.firstUnreadMessageTime,a,n);!n()||!o.length||($e.value?(await t.channelModule.clearUnreadCountByTimestamp(s),await t.message.sendReadReceiptMessage(s,o)):await t.message.sendReadReceiptMessage(s,o))}handleMultiChoiceModeChange(){if(!le.value){this.scheduleLayoutUpdate({refreshVirtualWindow:!0,measureVirtualRows:!0,preserveBottom:!0});return}this.hoveredMessageId="",this.longPress.cancel(),this.hideMsgMenu(),this.hideReactionPanel(),this.handleCloseReadReceiptModal(),f().audioPlayer.pause()}stopEventWhenMultiChoiceMode(e){le.value&&(e.type==="touchstart"&&this.resizeAnchorController.cancel(),(e.type==="click"||e.type==="contextmenu")&&e.preventDefault(),e.stopImmediatePropagation())}handleSelectMessages(){if(!this.messageViewportEl||!this.messageListEl||!this.selectEl)return;const e=this.messageListEl.getBoundingClientRect(),t=this.selectEl.getBoundingClientRect().top-e.top,s=this.messageBoxEl?window.getComputedStyle(this.messageBoxEl):null,i=s&&Number.parseFloat(s.paddingTop)||0,n=this.messageListEl.scrollTop+t-i,a=Xt.value,o=this.messageRenderList;for(let l=o.length-1;l>=0&&!(this.getHeightBeforeIndex(l)<=n);l-=1){const c=o[l];typeof c=="string"||c.sentStatus===10||di(c.messageType)||this.setMessageCheckedStatus(c,a)}Xt.value=!Xt.value}setMessageCheckedStatus(e,t){const s=e.messageId||`${e.transactionId}`;t?ne.value.findIndex(i=>s===i)===-1&&(ne.value=[s,...ne.value]):ne.value=ne.value.filter(i=>i!==s)}async onDeleteMessages({data:e}){const t=this.captureScrollAnchor(),s=!!this.readMessageListMetrics()&&this.isStrictlyAtBottom(this.readMessageListMetrics());let i=[...G.value],n=[...ne.value],a=!1;e.forEach(({channelIdentifier:o,transactionId:l,messageId:c})=>{const d=i.findIndex(p=>p.transactionId&&l&&p.transactionId===l||p.messageId&&c&&p.messageId===c);if(d===-1)return;const[u]=i.splice(d,1);u.messageId&&(n=n.filter(p=>p!==u.messageId)),a=!0}),a&&(i.length===0&&this.cancelPaginationTask(),G.value=i,ne.value=n,await this.refreshVirtualWindow(),s?await this.settleMessageListToBottom():this.restoreScrollAnchor(t))}onMessageStateChange(e){const t=this.readMessageListMetrics(),s=!!t&&this.isStrictlyAtBottom(t)&&!this.hasMoreBackward;let i=[...G.value];e.data.forEach(n=>{if(A.value.channelIdentifier.isEqualTo(n.channelIdentifier)){const a=Be(i,c=>c.messageId?c.messageId===n.messageId:c.transactionId===n.transactionId);if(a===-1)return;const o=i[a].sentTime,l=n.clone();if(n.sentTime!==o){i.splice(a,1);const c=Be(i,d=>d.sentTime<=n.sentTime);i.splice(c+1,0,l)}else i.splice(a,1,l)}}),G.value=i,this.scheduleVirtualWindowUpdate(),s&&(this.onBottomArea=!0,this.hasUserScrolledAwayFromBottom=!1,this.wasStrictlyAtBottomBeforeResize=!0,this.scheduleBottomResync())}async onRecvNewMessages(e){if(!A.value)return;const t=A.value.channelIdentifier,s=[];if(e.data.forEach(n=>{const a=G.value.findIndex(o=>o.messageId===n.messageId);t.isEqualTo(n.channelIdentifier)&&a<0&&s.push(n)}),!s.length)return;const i=this.readMessageListMetrics();if(!i||!this.isStrictlyAtBottom(i)||this.hasMoreBackward){this.hasMoreBackward=!0;return}G.value=this.mergeMessagesByUniqueKey(G.value,s),this.setScroll2bottom(),setTimeout(async()=>{const{code:n}=await f().channelModule.clearUnreadCountByTimestamp(t);n===I.SUCCESS&&await f().message.sendReadReceiptMessage(t,s)},100)}async onInsertNewMessages(e){var t;if(this.hasMoreBackward){const s=(t=A.value)==null?void 0:t.channelIdentifier;if(!s)return;this.cancelPaginationTask();const i=++this.messageListGeneration,{code:n,list:a,hasMore:o}=await f().message.reqHistories(s,0,!0);n===I.SUCCESS&&this.isCurrentMessageList(s,i)&&(this.cancelPaginationTask(),G.value.length=0,G.value=this.mergeMessagesByUniqueKey(a),this.hasMoreForward=o,this.hasMoreBackward=!1,this.setScroll2bottom());return}e.data.forEach(async s=>{A.value.channelIdentifier.isEqualTo(s.channelIdentifier)&&(G.value=this.mergeMessagesByUniqueKey(G.value,[s]),G.value.length>300&&(G.value=G.value.slice(-300),this.hasMoreForward=!0),this.setScroll2bottom())})}onSelectedChanged(e){this.cancelAdjustMessageListScroll(),this.resetVirtualWindow(),this.hideMsgMenu(),this.hideReactionPanel(),this.handleCloseReadReceiptModal(),this.hasMoreForward=!0,this.hasMoreBackward=!1,this.onBottomArea=!0,this.hasUserScrolledAwayFromBottom=!1,this.wasStrictlyAtBottomBeforeResize=!0,this.lastTouchY=void 0,le.value=!1,this.unreadCountTop=0,this.initMessageList()}render(){var e;if(!A.value)return O;const t=this.messageRenderList;return g`
      <div class="nc-chatui-msg-list">
        <div
          class="nc-chatui-msg-list-scroll"
          @scroll=${()=>this.handleScroll()}
          @wheel=${this._handleUserScrollInput}
          @touchstart=${this._handleUserScrollInput}
          @touchmove=${this._handleUserScrollInput}
          @keydown=${this._handleUserScrollInput}
        >
          <div class="nc-chatui-msg-list-box-container" style="padding: 10px;">
            ${this.topSpacerHeight>0?g`
              <div class="nc-chatui-msg-list-spacer" style="height: ${this.topSpacerHeight}px"></div>
            `:O}
            ${Fd(this.virtualRenderList,({key:s})=>s,({item:s,index:i,key:n})=>{var a,o;return g`
                <div
                  class="nc-chatui-msg-list-box ${typeof s!="string"&&this.isMessageEditing(s)&&!this.isH5?"nc-chatui-msg-list-box-edit":""}"
                  data-key=${n}
                  data-virtual-index=${i}
                >
                  ${typeof s!="string"&&s.sentStatus!==10&&le.value&&!di(s.messageType)?g`
                    <div class="checkbox">
                      <label for=${s.messageId||`${s.transactionId}`}>
                        <input
                          .id=${s.messageId||`${s.transactionId}`}
                          type="checkbox"
                          .checked=${ne.value.includes(s.messageId||`${s.transactionId}`)}
                          .value=${s.messageId||`${s.transactionId}`}
                          @change=${l=>{const c=l.target;c.checked?ne.value.includes(c.value)||(ne.value=[c.value,...ne.value]):ne.value=ne.value.filter(d=>d!==c.value)}}
                        >
                        <span class="custom">
                          <img src=${ia} alt="CHECKED_ICON">
                        </span>
                      </label>
                    </div>
                  `:O}

                  ${typeof s=="string"?g`
                    <nc-message-time class="nc-chatui-time-section" .time=${s}></nc-message-time>
                  `:di(s.messageType)?g`
                    <nc-grey-message-provider
                      class="nc-chatui-grey-message"
                      @click=${this._blockMultiChoiceMouseEvent}
                      @contextmenu=${this._blockMultiChoiceMouseEvent}
                      @touchstart=${this._blockMultiChoiceTouchEvent}
                      @touchmove=${this._blockMultiChoiceTouchEvent}
                      @touchend=${this._blockMultiChoiceTouchEvent}
                      @touchcancel=${this._blockMultiChoiceTouchEvent}
                      .message=${s}
                    ></nc-grey-message-provider>
                  `:g`
                    <div
                      class="nc-chatui-msg-list-item"
                      data-message-uid=${s.messageId||""}
                      style="flex-direction: ${this.bubbleDirection(s)}"
                      @click=${this._blockMultiChoiceMouseEvent}
                      @contextmenu=${this._blockMultiChoiceMouseEvent}
                      @touchstart=${this._blockMultiChoiceTouchEvent}
                      @touchmove=${this._blockMultiChoiceTouchEvent}
                      @touchend=${this._blockMultiChoiceTouchEvent}
                      @touchcancel=${this._blockMultiChoiceTouchEvent}
                      @mouseenter=${()=>{this.hoveredMessageId=s.messageId||""}}
                      @mouseleave=${()=>{this.hoveredMessageId=""}}
                    >
                      ${this.bubbleShowPortrait(s)?g`
                        <nc-icon
                          class="nc-chatui-msg-avatar"
                          .url=${this.handleUserProfiles(s).avatarUrl}
                          .width=${32} .height=${32}
                          style="opacity: ${this.showAvatar(s,t[i-1])?1:0}"
                          .radius=${50}
                          @click=${()=>this.handleIconClick(s)}
                          .online=${!1}
                        ></nc-icon>
                      `:O}

                      <div class="nc-chatui-msg-bubble-wrapper ${this.bubbleStyleAlign(s)?"nc-chatui-msg-bubble-wrapper-right":""} ${this.isMessageEditing(s)?"nc-chatui-msg-bubble-wrapper-edit":""}">
                        ${this.isMessageEditing(s)&&!this.isH5?g`
                          <nc-message-edit-provider
                            .message=${s}
                            @draft-change=${l=>this.handleMessageEditDraft(s,l.detail)}
                            @edit-resize=${l=>this.handleMessageEditResize(s,l)}
                            @emoji-panel-toggle=${l=>this.handleMessageEditEmojiPanelToggle(s,l)}
                            @cancel=${()=>this.handleMessageEditCancel(s)}
                            @confirm=${l=>this.handleMessageEditConfirm(s,l.detail)}
                          ></nc-message-edit-provider>
                        `:g`<nc-message-bubble
                          class="nc-chatui-msg-bubble ${s.editStatus===Q.UPDATING||s.editStatus===Q.FAILED?"nc-chatui-msg-bubble-with-edit-status":""}"
                          .showname=${this.bubbleShowName(s)}
                          .align=${this.bubbleStyleAlign(s)}
                          .message=${s}
                          .profile=${this.handleUserProfiles(s)}
                          .isH5=${this.isH5}
                          .showSentStatus=${ja(s)}
                          .reactionEnabled=${this.canShowReactionEntry(s)}
                          .bubbleColorStyle=${this.bubbleColorStyle(s,this.showAvatar(s,t[i-1]))}
                          .contentLayout=${o2(s.messageType)}
                          .menuActive=${this.messageMenuDisplay==="block"&&((a=this.currentSelectMessage)==null?void 0:a.messageId)===s.messageId}
                          .reactionBoardActive=${this.reactionPanelMode==="reaction"&&this.reactionPanelDisplay!=="none"&&((o=this.reactionTargetMessage)==null?void 0:o.messageId)===s.messageId}
                          .isItemHover=${!le.value&&this.hoveredMessageId===s.messageId}
                          @sent-status-click=${l=>this.handleResendMessage(s,this.getSourceMouseEvent(l)||void 0)}
                          @menu-click=${l=>this.handleMessageRightClick(s,l)}
                          @reaction-click=${l=>this.handleReactionClick(s,l)}
                          @contextmenu=${l=>{l.preventDefault(),this.handleMessageRightClick(s,l)}}
                          @touchstart=${this.longPress.start}
                          @touchmove=${this.longPress.move}
                          @touchend=${this.longPress.end}
                          @touchcancel=${this.longPress.cancel}
                          >
                          ${(()=>{const l=Va(s.messageType);if(!l)return O;const c=Ra(l);return La`<${c}
                              .message=${s}
                              @click=${()=>this.handleBubbleClick(s)}
                              @link=${d=>this.handleLinkClick(d)}
                            ></${c}>`})()}
                        </nc-message-bubble>
                        ${s.editStatus===Q.UPDATING||s.editStatus===Q.FAILED?g`
                          <div class="nc-message-edit-status-anchor">
                            ${s.editStatus===Q.UPDATING?g`
                              <div class="nc-message-edit-status" role="status">
                                <img class="nc-message-edit-spinner" src=${th} alt="" aria-hidden="true">
                                <span>${this.$tt("message.edit.updating")}</span>
                              </div>
                            `:g`
                              <button class="nc-message-edit-status nc-message-edit-retry" type="button" @click=${l=>{l.stopPropagation(),this.handleMessageEditRetry(s)}}>
                                <img src=${sh} alt="" aria-hidden="true">
                                <span>${this.$tt("message.edit.retry")}</span>
                              </button>
                            `}
                          </div>
                        `:O}`}

                        ${s.messageType===C.HD_VOICE&&s.messageId&&this.shouldShowSTTStatus(s.messageId)?g`
                          <div class="nc-chatui-stt-status ${this.bubbleStyleAlign(s)?"nc-chatui-stt-status-right":""}">
                            ${this.getSTTStatus(s.messageId)==="converting"?g`
                              <div class="nc-chatui-stt-converting">
                                <div class="nc-chatui-stt-loading">
                                  <div class="nc-chatui-stt-loading-dot"></div>
                                  <div class="nc-chatui-stt-loading-dot"></div>
                                  <div class="nc-chatui-stt-loading-dot"></div>
                                </div>
                              </div>
                            `:this.getSTTStatus(s.messageId)==="error"?g`
                              <div class="nc-chatui-stt-error">
                                <nc-icon .url=${aa} .radius=${50} .width=${16} .height=${16} class="nc-chatui-stt-error-icon"></nc-icon>
                                <span class="nc-chatui-stt-error-text">
                                  ${yt.value[s.messageId]===I.SPEECH_TO_TEXT_MESSAGE_CONTENT_UNSUPPORTED?this.$tt("message.speech.to.text.unsupported"):this.$tt("message.speech.to.text.failed")}
                                </span>
                              </div>
                            `:g`
                              <div class="nc-chatui-stt-success">${this.getSTTText(s.messageId)}</div>
                            `}
                          </div>
                        `:O}
                      </div>
                    </div>
                  `}
                </div>
              `})}
            ${this.bottomSpacerHeight>0?g`
              <div class="nc-chatui-msg-list-spacer" style="height: ${this.bottomSpacerHeight}px"></div>
            `:O}
          </div>
        </div>

        ${this.sizeHeight?g`
          <nc-scrollbar-thumb-provider
            @handlemove=${s=>this.handleMove(s)}
            @mouseenter=${()=>this.handleScrollbarEnter()}
            @mouseleave=${()=>this.handleScrollbarLeave()}
            .height=${this.sizeHeight}
            .move=${this.moveY}
            .scrollheight=${(e=this.messageListEl)==null?void 0:e.scrollHeight}
            .ratio=${this.ratioY}
            style="opacity: ${this.showScrollbar?1:0}; transition: opacity 0.5s; pointer-events: ${this.showScrollbar?"auto":"none"}"
          ></nc-scrollbar-thumb-provider>
        `:O}

        ${this.isH5&&this.messageMenuDisplay==="block"?g`
          <div class="nc-message-list-menu-mask" @click=${()=>this.hideMsgMenu()}></div>
        `:O}

        <div class="nc-message-list-menu" style="top: ${this.messageMenuTop}px; left: ${this.messageMenuLeft}px; display: ${this.messageMenuDisplay}">
          ${this.msgMenu.length>0?g`
            <div style="padding: 5px;">
              ${this.msgMenu.map(s=>g`
                <nc-message-list-menu-item
                  .icon=${s.icon}
                  .id=${s.id}
                  .label=${s.label}
                  @click=${i=>this.handleMenuItemClick(s.id,s.message,i)}
                ></nc-message-list-menu-item>
              `)}
            </div>
          `:O}
        </div>

        ${this.reactionPanelDisplay!=="none"?g`
          <nc-reaction-emoji-panel-provider
            class="nc-reaction-panel"
            .emojis=${this.reactionEmojis}
            style="top: ${this.reactionPanelTop}px; left: ${this.reactionPanelLeft}px; display: block"
            @mouseleave=${()=>this.hideReactionPanel()}
            @emoji-select=${s=>this.handleReactionEmojiClick(s.detail)}
          ></nc-reaction-emoji-panel-provider>
        `:O}

        ${le.value?g`
          <nc-message-select
            class="nc-chatui-select"
            .selected=${!!Xt.value}
            @select=${()=>this.handleSelectMessages()}
          ></nc-message-select>
        `:O}

        ${$e.value>0&&this.hasMoreBackward?g`
          <nc-message-location
            @click=${s=>this.stopEventWhenMultiChoiceMode(s)}
            .count=${$e.value}
            .direction=${1}
            @location=${()=>this.handleLocation2Bottom()}
          ></nc-message-location>
        `:O}

        ${this.unreadCountTop>0&&this.FOCUS_ON_LATEST_MESSAGE?g`
          <nc-message-location
            @click=${s=>this.stopEventWhenMultiChoiceMode(s)}
            .count=${this.unreadCountTop}
            .direction=${0}
            @location=${()=>this.handleLocation2Top()}
          ></nc-message-location>
        `:O}

        ${this.showReadReceiptModal?g`
          <nc-read-receipt-modal
            .message=${this.readReceiptMessage}
            .visible=${this.showReadReceiptModal}
            .readUsers=${this.readUsers}
            .unreadUsers=${this.unreadUsers}
            .readTotalCount=${this.readTotalCount}
            .unreadTotalCount=${this.unreadTotalCount}
            .readLoading=${this.readLoading}
            .unreadLoading=${this.unreadLoading}
            .position=${{top:this.readReceiptPositionTop,left:this.readReceiptPositionLeft,anchor:this.readReceiptAnchor,maxHeight:this.readReceiptMaxHeight}}
            @close=${()=>this.handleCloseReadReceiptModal()}
            @read-status-scroll=${s=>this.onReadReceiptScroll(s)}
          ></nc-read-receipt-modal>
        `:O}
      </div>
    `}}h($,"styles",R`
    :host { display: block; height: 100%; --message-list-padding: 10px; --message-list-gap: 10px; }
    p { margin: 0; }
    ul, li { padding: 0; margin: 0; list-style: none; }
    .nc-chatui-msg-list { position: relative; overflow: hidden; height: 100%; box-sizing: border-box; }
    .nc-chatui-msg-list-scroll { overflow-y: scroll; overflow-x: hidden; overflow-anchor: none; height: 100%; scrollbar-width: none; box-sizing: border-box; }
    .nc-chatui-msg-list-scroll::-webkit-scrollbar { display: none; }
    .nc-chatui-msg-list-box-container { padding: var(--message-list-padding); }
    .nc-chatui-msg-list-item { display: flex; width: 100%; min-width: 0; }
    .nc-chatui-grey-message { flex: 1; text-align: center; }
    .nc-chatui-msg-avatar { padding: 0 8px; flex-shrink: 0; }
    .nc-chatui-msg-bubble-wrapper { display: flex; flex-direction: column; min-width: 0; max-width: 70%; align-items: flex-start; }
    .nc-chatui-msg-bubble-wrapper-edit { flex: 1 1 90%; width: 90%; min-width: 0; max-width: 90%; }
    .nc-chatui-msg-bubble-wrapper-right { align-items: flex-end; }
    .nc-chatui-msg-bubble { padding-bottom: var(--message-list-gap); border-radius: 8px 0 8px; font-size: 12px; line-height: 16px; min-width: 0; max-width: 100%; }
    .nc-chatui-msg-bubble-with-edit-status { padding-bottom: 0; }
    .nc-message-edit-status-anchor {
      /* Keep status text from changing the bubble's intrinsic width. */
      width: 0;
      align-self: flex-start;
      margin: 4px 0 var(--message-list-gap);
    }
    .nc-message-edit-status {
      position: relative;
      display: flex;
      align-items: center;
      gap: 4px;
      width: max-content;
      white-space: nowrap;
      margin: 0;
      padding: 0;
      border: 0;
      color: #0047FF;
      background: transparent;
      font-family: inherit;
      font-size: 12px;
      line-height: 20px;
      text-align: start;
    }
    .nc-message-edit-status img { display: block; flex: 0 0 12px; width: 12px; height: 12px; }
    .nc-message-edit-retry { color: #FF5A50; cursor: pointer; }
    .nc-message-edit-retry:focus-visible { outline: 2px solid #0047FF; outline-offset: 2px; }
    .nc-message-edit-spinner { animation: nc-message-edit-rotate 1s linear infinite; }
    @keyframes nc-message-edit-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @media (max-width: 768px) { .nc-chatui-msg-bubble { user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; } }
    .nc-chatui-stt-status { padding: 9px; font-size: 14px; line-height: 18px; word-break: break-word; display: flex; flex-direction: column; box-sizing: border-box; border-radius: 8px; background: #E3E7EF; }
    .nc-chatui-stt-status-right { align-items: flex-end; border-radius: 8px; }
    .nc-chatui-stt-converting { display: flex; align-items: center; }
    .nc-chatui-stt-loading { display: block; font-size: 0; color: #000; width: 54px; }
    .nc-chatui-stt-loading .nc-chatui-stt-loading-dot { display: inline-block; float: none; background-color: currentColor; border: 0 solid currentColor; width: 6px; height: 6px; margin: 4px; border-radius: 100%; animation: ball-pulse 1s ease infinite; }
    .nc-chatui-stt-loading .nc-chatui-stt-loading-dot:nth-child(1) { animation-delay: -200ms; }
    .nc-chatui-stt-loading .nc-chatui-stt-loading-dot:nth-child(2) { animation-delay: -100ms; }
    .nc-chatui-stt-loading .nc-chatui-stt-loading-dot:nth-child(3) { animation-delay: 0ms; }
    @keyframes ball-pulse { 0%, 80%, 100% { transform: scale(0); opacity: 0.5; } 40% { transform: scale(1); opacity: 1; } }
    .nc-chatui-stt-error { display: flex; align-items: center; gap: 4px; }
    .nc-chatui-stt-error-text { color: #1D2129; }
    .nc-chatui-stt-success { color: #333333; min-height: 18px; line-height: 18px; white-space: pre-wrap; display: block; }
    .nc-message-list-menu { position: absolute; top: 0; left: 0; z-index: 3; background-color: #fff; border-radius: 9px; box-shadow: 0px 5px 16px 0px #00000014; min-width: 95px; }
    .nc-reaction-panel { position: absolute; top: 0; left: 0; z-index: 3; }
    .nc-message-list-menu-mask { position: absolute; top: 0; left: 0; z-index: 2; width: 100%; height: 100%; }
    .nc-chatui-msg-list-box { display: flex; align-items: center; width: 100%; min-width: 0; }
    .nc-chatui-msg-list-box-edit {
      box-sizing: border-box;
      width: calc(100% + 2 * var(--message-list-padding));
      margin: 0 calc(-1 * var(--message-list-padding)) var(--message-list-gap);
      padding: 20px var(--message-list-padding);
      background: #E8F0FE;
    }
    .nc-chatui-msg-list-spacer { flex: 0 0 auto; width: 100%; pointer-events: none; }
    .nc-chatui-time-section { width: 100%; }
    .nc-chatui-msg-list-box .checkbox { margin-right: 7px; align-self: flex-start; }
    .nc-chatui-msg-list-box .checkbox input[type="checkbox"] { display: none; }
    .nc-chatui-msg-list-box .checkbox .custom { display: flex; width: 16px; height: 16px; border: 1px solid #ABB8CB; border-radius: 50%; background-color: #FFFFFF; font-size: 0; justify-content: center; align-items: center; cursor: pointer; }
    .nc-chatui-msg-list-box .checkbox input[type="checkbox"]:checked + .custom { background-color: #16D258; border-color: #16D258; }
    .nc-chatui-select { position: absolute; top: 150px; left: 0px; width: 100%; box-sizing: border-box; z-index: 1; }
  `);N([Z(".nc-chatui-msg-list")],$.prototype,"messageViewportEl");N([Z(".nc-chatui-msg-list-scroll")],$.prototype,"messageListEl");N([Z(".nc-message-list-menu")],$.prototype,"messageMenuEl");N([Z(".nc-reaction-panel")],$.prototype,"reactionPanelEl");N([Z(".nc-chatui-select")],$.prototype,"selectEl");N([Z(".nc-chatui-msg-list-box-container")],$.prototype,"messageBoxEl");N([_()],$.prototype,"hoveredMessageId");N([_()],$.prototype,"unreadCountTop");N([_()],$.prototype,"ratioY");N([_()],$.prototype,"sizeHeight");N([_()],$.prototype,"moveY");N([_()],$.prototype,"onBottomArea");N([_()],$.prototype,"showScrollbar");N([_()],$.prototype,"isHoveringScrollbar");N([_()],$.prototype,"msgMenu");N([_()],$.prototype,"messageMenuDisplay");N([_()],$.prototype,"messageMenuTop");N([_()],$.prototype,"messageMenuLeft");N([_()],$.prototype,"currentSelectMessage");N([_()],$.prototype,"isH5");N([_()],$.prototype,"showReadReceiptModal");N([_()],$.prototype,"readReceiptMessage");N([_()],$.prototype,"readUsers");N([_()],$.prototype,"unreadUsers");N([_()],$.prototype,"readTotalCount");N([_()],$.prototype,"unreadTotalCount");N([_()],$.prototype,"readHasMore");N([_()],$.prototype,"unreadHasMore");N([_()],$.prototype,"readLoading");N([_()],$.prototype,"unreadLoading");N([_()],$.prototype,"readReceiptPositionTop");N([_()],$.prototype,"readReceiptPositionLeft");N([_()],$.prototype,"readReceiptAnchor");N([_()],$.prototype,"readReceiptMaxHeight");N([_()],$.prototype,"messageBubbleCfg");N([_()],$.prototype,"hasMoreBackward");N([_()],$.prototype,"multiChoice");N([_()],$.prototype,"selectedUids");N([_()],$.prototype,"showReadReceiptModalMessageUId");N([_()],$.prototype,"reactionPanelDisplay");N([_()],$.prototype,"reactionPanelTop");N([_()],$.prototype,"reactionPanelLeft");N([_()],$.prototype,"reactionTargetMessage");N([_()],$.prototype,"reactionPanelMode");N([_()],$.prototype,"virtualStart");N([_()],$.prototype,"virtualEnd");N([_()],$.prototype,"topSpacerHeight");N([_()],$.prototype,"bottomSpacerHeight");var Kd=Object.defineProperty,Ks=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Kd(e,t,i),i};class Gt extends M{constructor(){super(...arguments),h(this,"signalController",new gt(this,[vi])),h(this,"lookupKey",""),h(this,"lookupVersion",0)}connectedCallback(){super.connectedCallback(),this.reactionNames=new Map}disconnectedCallback(){this.lookupVersion+=1,this.reactionNames=new Map,super.disconnectedCallback()}willUpdate(){const e=this.getLookupKey();e!==this.lookupKey&&(this.lookupKey=e,this.updateReactionNames())}get showUsers(){return f().isShowMessageReactUsersEnabled}getLookupKey(){var e;if(!this.showUsers||!this.message||!((e=this.reactions)!=null&&e.length))return"";const t=this.reactions.map(i=>`${i.reactionId}:${i.users.join(",")}`).join("|"),s=this.message.channelType===T.GROUP?vi.value:0;return`${this.message.channelType}:${this.message.channelIdentifier.channelId}:${t}:${s}`}async updateReactionNames(){const e=++this.lookupVersion,t=this.reactions||[];if(!this.showUsers||!this.message||t.length===0){this.reactionNames=new Map;return}const s=[...new Set(t.flatMap(a=>a.users))];if(s.length===0){this.reactionNames=new Map;return}this.reactionNames=new Map(t.map(a=>[a.reactionId,[...a.users]]));let i=[];try{i=await f().appData.requestUserProfiles(s)}catch{}if(e!==this.lookupVersion||this.getLookupKey()!==this.lookupKey)return;const n=new Map(i.map(a=>[a.userId,a]));this.reactionNames=new Map(t.map(a=>[a.reactionId,a.users.map(o=>{var l;const c=this.message.channelType===T.GROUP?Ha(o):void 0;return(c==null?void 0:c.nickname)||((l=n.get(o))==null?void 0:l.name)||(c==null?void 0:c.name)||o})])),f().dispatchEvent(new v(E.ADJUST_MESSAGE_LIST_SCROLL))}handleReactionClick(e){var t;const s=(t=e.detail)==null?void 0:t[0];s&&f().message.updateMessageReaction(this.message,s.reactionId,s.hasCurrentUserReacted)}handleDetailClick(e){var t;const s=(t=e.detail)==null?void 0:t[0];s&&f().emit(new v(x.REACTIONS_DETAIL_EVENT,{message:this.message.clone(),reactionId:s.reactionId}))}render(){var e;return!f().isMessageReactionEnabled||!((e=this.reactions)!=null&&e.length)?O:g`
      <div class="nc-message-reactions">
        ${this.reactions.map(t=>g`
          <nc-reaction
            .reaction=${t}
            .showUsers=${this.showUsers}
            .names=${this.reactionNames.get(t.reactionId)}
            .align=${this.align}
            @reaction-click=${this.handleReactionClick}
            @detail-click=${this.handleDetailClick}
          ></nc-reaction>
        `)}
      </div>
    `}}h(Gt,"styles",R`
    :host {
      display: block;
      max-width: 100%;
    }

    .nc-message-reactions {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 100%;
    }
  `);Ks([b({type:Array})],Gt.prototype,"reactions");Ks([b({type:Object})],Gt.prototype,"message");Ks([b({type:Boolean})],Gt.prototype,"align");Ks([_()],Gt.prototype,"reactionNames");var Yd=Object.defineProperty,Ys=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Yd(e,t,i),i};class Bt extends M{constructor(){super(...arguments),h(this,"i18n",new V(this))}get inputMaxLength(){return f().input.inputMaxLength}connectedCallback(){var e;super.connectedCallback(),this.draft=((e=this.message)==null?void 0:e.editDraft)??this.getMessageText()}updated(e){e.has("message")&&this.message&&this.message.editDraft!==void 0&&(this.draft=this.message.editDraft)}getMessageText(){return this.message&&this.message.content.text||""}emitDraft(){this.dispatchEvent(new CustomEvent("draft-change",{detail:this.draft,bubbles:!0,composed:!0}))}onInput(e){this.draft=e.target.value,this.emitDraft(),this.resizeTextarea()}onKeyDown(e){e.key!=="Enter"||e.shiftKey||e.isComposing||e.keyCode===229||(e.preventDefault(),this.confirm())}resizeTextarea(e=!0){if(!this.textarea||!this.textareaMeasure)return;const t=this.getBoundingClientRect().bottom;this.textareaMeasure.style.width=`${this.textarea.clientWidth}px`,this.textareaMeasure.value=this.textarea.value;const s=this.textareaMeasure.scrollHeight;this.textarea.style.height=`${Math.min(Math.max(s,44),220)}px`,this.textarea.style.overflowY=s>220?"auto":"hidden",!(!e||Math.abs(this.getBoundingClientRect().bottom-t)<.5)&&this.dispatchEvent(new CustomEvent("edit-resize",{detail:{previousBottom:t},bubbles:!0,composed:!0}))}insertEmoji(e){var t,s;if(!e)return;const i=((t=this.textarea)==null?void 0:t.selectionStart)??this.draft.length,n=((s=this.textarea)==null?void 0:s.selectionEnd)??i;this.draft.length-(n-i)+e.length>this.inputMaxLength||(this.draft=`${this.draft.slice(0,i)}${e}${this.draft.slice(n)}`,this.emitDraft(),this.updateComplete.then(()=>{var a,o;this.resizeTextarea(),(a=this.textarea)==null||a.focus();const l=i+e.length;(o=this.textarea)==null||o.setSelectionRange(l,l)}))}firstUpdated(){this.resizeTextarea(!1),this.textarea.focus({preventScroll:!0});const e=this.textarea.value.length;this.textarea.setSelectionRange(e,e),this.textarea.scrollTop=this.textarea.scrollHeight}confirm(){var e;!this.draft.trim()||((e=this.message)==null?void 0:e.editStatus)===Q.UPDATING||this.dispatchEvent(new CustomEvent("confirm",{detail:this.draft,bubbles:!0,composed:!0}))}render(){var e;const t=((e=this.message)==null?void 0:e.editStatus)===Q.UPDATING;return g`
      <div class="editor">
        <textarea
          rows="2"
          .value=${this.draft||""}
          .maxLength=${this.inputMaxLength}
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
        ></textarea>
        <textarea class="textarea-measure" tabindex="-1" aria-hidden="true" readonly></textarea>
        <div class="actions">
          <div class="emoji-action">
            <button class="emoji-button" type="button" aria-label="Emoji" @click=${s=>{s.stopPropagation(),this.dispatchEvent(new CustomEvent("emoji-panel-toggle",{detail:{evt:s,onSelect:i=>this.insertEmoji(i)},bubbles:!0,composed:!0}))}}>
              <img class="emoji-regular" src=${sa} alt="">
              <img class="emoji-hover" src=${Yl} alt="">
            </button>
          </div>
          <button type="button" @click=${()=>this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}>
            ${this.i18n.t("message.edit.cancel")}
          </button>
          <button class="confirm" type="button" ?disabled=${t||!this.draft.trim()} @click=${this.confirm}>
            ${this.i18n.t("message.edit.confirm")}
          </button>
        </div>
      </div>
    `}}h(Bt,"styles",R`
    :host {
      display: block;
      flex: 1 1 auto;
      width: 100%;
      min-width: 0;
      max-width: 100%;
    }
    .editor {
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 108px;
      min-width: 0;
      max-width: 100%;
      padding: 16px 18px 14px;
      border: 1px solid #e4e7ed;
      border-radius: 20px;
      background: #fff;
    }
    textarea {
      --edit-line-height: 22px;
      display: block;
      width: 100%;
      min-height: 36px;
      max-height: calc(var(--edit-line-height) * 10);
      box-sizing: border-box;
      resize: none;
      overflow-y: auto;
      scrollbar-gutter: stable;
      border: 0;
      outline: none;
      padding: 0 16px 0 0;
      color: #020814;
      background: transparent;
      font-family: inherit;
      font-size: 14px;
      line-height: var(--edit-line-height);
      white-space: pre-wrap;
    }
    .textarea-measure {
      position: absolute;
      top: 0;
      left: 0;
      height: 0;
      min-height: 0;
      max-height: none;
      overflow: hidden;
      scrollbar-gutter: auto;
      visibility: hidden;
      pointer-events: none;
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 10px;
    }
    button {
      box-sizing: border-box;
      display: flex;
      flex: 0 0 64px;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 30px;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      line-height: 30px;
    }
    .emoji-button {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      padding: 0;
      font-size: 16px;
      border-radius: 8px;
      background: transparent;
    }
    .emoji-button:hover { background: transparent; }
    .emoji-button img { display: block; width: 30px; height: 30px; }
    .emoji-button .emoji-hover { display: none; }
    .emoji-button:hover .emoji-regular { display: none; }
    .emoji-button:hover .emoji-hover { display: block; }
    button { padding: 0; background: #f3f5fa; color: #020814; }
    button.confirm { color: #fff; background: #0047ff; }
    button:disabled { cursor: default; opacity: .5; }
    .emoji-action { position: relative; flex: 0 0 30px; width: 30px; height: 30px; }
  `);Ys([b({type:Object})],Bt.prototype,"message");Ys([_()],Bt.prototype,"draft");Ys([Z("textarea:not(.textarea-measure)")],Bt.prototype,"textarea");Ys([Z(".textarea-measure")],Bt.prototype,"textareaMeasure");var Qd=Object.defineProperty,Xd=(r,e,t,s)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&Qd(e,t,i),i};class fn extends M{selectEmoji(e){this.dispatchEvent(new CustomEvent("emoji-select",{detail:e,bubbles:!0,composed:!0}))}render(){return g`
      <div class="reaction-panel">
        ${(this.emojis||[]).map(e=>g`
          <button class="reaction-emoji-item" type="button" @click=${()=>this.selectEmoji(e)}>${e}</button>
        `)}
      </div>
    `}}h(fn,"styles",R`
    :host {
      display: block;
      width: 376px;
      max-width: 100%;
      height: 196px;
      max-height: 100%;
    }
    .reaction-panel {
      display: grid;
      grid-template-columns: repeat(auto-fill, 32px);
      grid-auto-rows: 32px;
      justify-content: center;
      align-content: start;
      gap: 4px;
      width: 100%;
      height: 100%;
      padding: 8px;
      overflow-y: auto;
      background-color: #fff;
      border-radius: 9px;
      box-shadow: 0 5px 16px #00000014;
      box-sizing: border-box;
    }
    .reaction-emoji-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      font-size: 20px;
      background: transparent;
      border: 0;
      border-radius: 6px;
      cursor: pointer;
    }
    .reaction-emoji-item:hover { background-color: #f2f3f5; }
  `);Xd([b({type:Array})],fn.prototype,"emojis");const F={GREY_MESSAGE_PROVIDER:"nc-grey-message-provider",SCROLLBAR_PROVIDER:"nc-scrollbar-provider",SCROLLBAR_THUMB_PROVIDER:"nc-scrollbar-thumb-provider",MODAL_PROVIDER:"nc-modal-provider",MODAL_CONFIRM_PROVIDER:"nc-modal-confirm-provider",MODAL_ALERT_PROVIDER:"nc-modal-alert-provider",MODAL_FORWARDING_PROVIDER:"nc-modal-forwarding-provider",MODAL_MEDIA_MESSAGE_PROVIDER:"nc-modal-media-message-provider",MODAL_COMBINE_MESSAGE_PROVIDER:"nc-modal-combine-message-provider",MODAL_REACTIONS_DETAIL_PROVIDER:"nc-modal-reactions-detail-provider",MODAL_TAKE_PHOTO_PROVIDER:"nc-modal-take-photo-provider",CHANNEL_LIST_CONTAINER_PROVIDER:"nc-channel-list-container-provider",CHANNEL_LIST_PROVIDER:"nc-channel-list-provider",CHANNEL_DETAIL_PROVIDER:"nc-channel-detail-provider",InputProvider:"nc-input-provider",MESSAGLISTPROVIDER:"nc-message-list-provider",CHANNEL_DETAIL_BAR_PROVIDER:"nc-channel-detail-bar-provider",EMOJI_PANEL_PROVIDER:"nc-emoji-panel-provider",MULTI_CHOICE_MENU_PROVIDER:"nc-multi-choice-menu-provider",MENTION_USERS_PANEL_PROVIDER:"nc-mention-users-panel-provider",HD_VOICE_MESSAGE_PROVIDER:"nc-hd-voice-message-privider",FileTransferCtrlProvider:"nc-file-transfer-ctrl-provider",APP_PROVIDER:"nc-chat-ui-app-provider",TOAST_PROVIDER:"nc-toast-provider",MESSAGE_REACTIONS_PROVIDER:"nc-message-reactions-provider",MESSAGE_EDIT_PROVIDER:"nc-message-edit-provider",REACTION_EMOJI_PANEL_PROVIDER:"nc-reaction-emoji-panel-provider"},Jd={[F.MODAL_PROVIDER]:Tc,[F.MENTION_USERS_PANEL_PROVIDER]:zs,[F.TOAST_PROVIDER]:wa,[F.EMOJI_PANEL_PROVIDER]:tn,[F.SCROLLBAR_THUMB_PROVIDER]:kt,[F.MODAL_TAKE_PHOTO_PROVIDER]:Pt,[F.GREY_MESSAGE_PROVIDER]:sn,[F.FileTransferCtrlProvider]:nn,[F.MODAL_CONFIRM_PROVIDER]:rn,[F.MODAL_ALERT_PROVIDER]:an,[F.MODAL_FORWARDING_PROVIDER]:fs,[F.MODAL_MEDIA_MESSAGE_PROVIDER]:Ce,[F.MODAL_COMBINE_MESSAGE_PROVIDER]:_s,[F.MODAL_REACTIONS_DETAIL_PROVIDER]:We,[F.SCROLLBAR_PROVIDER]:Fe,[F.CHANNEL_DETAIL_BAR_PROVIDER]:pt,[F.MULTI_CHOICE_MENU_PROVIDER]:ad,[F.HD_VOICE_MESSAGE_PROVIDER]:Ws,[F.CHANNEL_DETAIL_PROVIDER]:vs,[F.CHANNEL_LIST_CONTAINER_PROVIDER]:un,[F.APP_PROVIDER]:pn,[F.CHANNEL_LIST_PROVIDER]:Ke,[F.InputProvider]:oe,[F.MESSAGLISTPROVIDER]:$,[F.MESSAGE_REACTIONS_PROVIDER]:Gt,[F.MESSAGE_EDIT_PROVIDER]:Bt,[F.REACTION_EMOJI_PANEL_PROVIDER]:fn},e2=r=>{let e;try{e=new URL(r.trim())}catch{return}if(e.protocol!=="http:"&&e.protocol!=="https:")return;const t=window.open(e.href,"_blank","noopener,noreferrer");if(t)try{t.opener=null}catch{}};let j,is=null;const Us=()=>{is==null||is.remove(),is=null},ka=new z(""),Pa=()=>{ka.value=f().userId},fi=new z(!0),Ei=new z(!0),_i=new z(void 0),A=new z(null),D=new z(void 0),$e=new z(0),$t=new z([]),Ci=new Map;let Ut=0;const Ha=r=>Ci.get(r),vi=new z(0),Fa=r=>{Ci.clear(),r.forEach(e=>Ci.set(e.userId,e)),$t.value=r,vi.value+=1},ls=(r,e)=>{const t=new Map(e.map(i=>[i.userId,i])),s=r.filter(i=>i.userId!==j.userId).map(i=>{var n;return{userId:i.userId,nickname:(n=t.get(i.userId))==null?void 0:n.nickname,name:i.name,avatarUrl:i.avatarUrl}});Fa(s)},Dt=new z(void 0);let hs=0;const t2=async r=>{const{status:e}=r.data;if(e===q.CONNECTED){const t=j,s=++hs,i=X.getCurrentUserId(),n=await t.appData.requestUserProfiles([i]);if(t!==j||s!==hs||i!==t.userId)return;Dt.value=n[0]?{...n[0]}:void 0}},s2=async r=>{var e;const t=j,s=++Ut;Us();const i=(e=r.data)==null?void 0:e.model;if(A.value=i||null,$e.value=(i==null?void 0:i.unreadCount)||0,ls([],[]),f().audioPlayer.pause(),!i)return;const{channelType:n,channelId:a}=i;if(n!==T.GROUP)return;const o=()=>{var d;return t===j&&s===Ut&&!!((d=A.value)!=null&&d.channelIdentifier.isEqualTo(i.channelIdentifier))},l=await t.appData.reqGroupMembers(a);if(!o()||l.length===0)return;const c=await t.appData.requestUserProfiles(l.map(d=>d.userId));o()&&ls(c,l)},Ga=async()=>{hs+=1,Ut+=1,Dt.value=void 0,Us(),Ba+=1,bt+=1,wt=!1,ee.value=[],ht.value=!1,fe.value={},ve.value={},Ue.value={},yt.value={},A.value=null,D.value&&(D.value.value=""),$e.value=0,ls([],[]),ka.value=f().userId};function i2(r){j=r,r.logger,hs+=1,Ut+=1,Dt.value=void 0,ls([],[]),bt+=1,wt=!1,ee.value=r.channelModule.getCachedChannelList(),ht.value=ee.value.length>=30,fe.value={},ve.value={},Ue.value={},yt.value={},r.addEventListener(E.CHANNELS_LIST_RESET,e=>{if(e.data.generation!==Ba)return;const{list:t}=e.data;bt+=1,wt=!1,ee.value=[...t],ht.value=t.length>=30,t.forEach(ci),r.channelModule.updateLatesMessageStatus(t)}),r.addEventListener(E.CHANNELS_ITEM_ORDER_CHANGE,e=>{const t=[...ee.value];e.data.forEach(({model:s,order:i})=>{const n=t.findIndex(a=>a.channelIdentifier.isEqualTo(s.channelIdentifier));n!==-1&&t.splice(n,1),t.splice(i,0,s.clone()),ci(s)}),ee.value=t}),r.addEventListener(E.CHANNELS_ITEM_CHANGE,e=>{const t=[...ee.value];e.data.forEach(s=>{const i=t.findIndex(n=>n.channelIdentifier.isEqualTo(s.channelIdentifier));i!==-1&&t.splice(i,1,s.clone()),ci(s)}),ee.value=t}),r.addEventListener(E.CHANNELS_ITEM_DELETED,e=>{ee.value=ee.value.filter(t=>!e.data.some(s=>t.channelIdentifier.isEqualTo(s.channelIdentifier)))}),r.addEventListener(E.SPEECH_TO_TEXT_STATE_CHANGE,e=>{const{messageUId:t,status:s,text:i,errorCode:n}=e.data;if(Ue.value[t])return;fe.value={...fe.value,[t]:s};const a={...yt.value};n!==void 0?a[t]=n:delete a[t],yt.value=a,s==="success"&&(ve.value={...ve.value,[t]:i||""})}),j.addEventListener(x.CHANNEL_SELECTED,s2),j.addEventListener(E.CONNECTION_STATUS_CHANGE,t2),j.addEventListener(E.DESTROY_USER_CACHE,Ga),j.addEventListener(E.CHANNEL_BAR_SWITCH_CHANGE,e=>{fi.value=e.data}),j.addEventListener(E.CHANNEL_DETAIL_BACK_SWITCH_CHANGE,e=>{Ei.value=e.data}),j.addEventListener(E.CHANNEL_BAR_TITLE_CHANGE,e=>{_i.value=e.data}),r2(j)}const f=()=>j,ee=new z([]),ht=new z(!1);let Ba=0,bt=0,wt=!1;const ci=r=>{var e;(e=A.value)!=null&&e.channelIdentifier.isEqualTo(r.channelIdentifier)&&(A.value=r.clone(),$e.value=r.unreadCount)},n2=async()=>{if(!ht.value||wt)return;const r=f(),e=bt,t=ee.value[ee.value.length-1]||null;wt=!0;try{const{hasMore:s,code:i,list:n}=await r.channelModule.getMoreChannelList(t);if(r!==j||e!==bt)return;if(i===I.SUCCESS){const a=n.filter(o=>!ee.value.some(l=>l.channelIdentifier.isEqualTo(o.channelIdentifier)));ee.value=[...ee.value,...a],ht.value=s,r.channelModule.updateLatesMessageStatus(n)}}finally{r===j&&e===bt&&(wt=!1)}},fe=new z({}),ve=new z({}),Ue=new z({}),yt=new z({}),G=new z([]),le=new z(!1),De=new z([]),ne=new z([]),Xt=new z(!0);ha(le,()=>{De.value=[],ne.value=[],Xt.value=!0});ha(ne,()=>{const r=[];ne.value.forEach(e=>{const t=G.value.find(s=>s.messageId?s.messageId===e:`${s.transactionId}`===e);t&&r.push(t)}),De.value=r});const bi=la(()=>De.value.length);bi.dependOn(De);const re=new z(null),En=r=>{const e=r.messageType;if(e===C.TEXT||e===C.REFERENCE)return r.content.text;let t=`message-type.${e}`;return Eh(t)||(t="message-type.unknown"),fh(t).value},tt=(r,e)=>{let t=document.body;r.modalContainerId&&document.getElementById(r.modalContainerId)&&(t=document.getElementById(r.modalContainerId)),t.appendChild(e)},r2=r=>{r.addEventListener(x.CONFIRM_EVENT,e=>{const t=document.createElement(F.MODAL_CONFIRM_PROVIDER);t.content=e.data,t.addEventListener("cancel",()=>{e.sendResult(!1),t.remove()}),t.addEventListener("confirm",()=>{e.sendResult(!0),t.remove()}),tt(r,t)}),r.addEventListener(x.ALERT_EVENT,e=>{const t=document.createElement(F.MODAL_ALERT_PROVIDER);t.content=e.data,t.addEventListener("cancel",s=>{t.remove()}),tt(r,t)}),r.addEventListener(x.FORWARDING_EVENT,e=>{const t=document.createElement(F.MODAL_FORWARDING_PROVIDER);t.addEventListener("cancel",()=>{e.sendResult({confirm:!1}),t.remove()}),t.addEventListener("confirm",s=>{e.sendResult({confirm:!0,list:s.detail[0].list}),t.remove()}),tt(r,t)}),r.addEventListener(x.MEDIA_MESSAGE_MODAL_EVENT,e=>{const t=document.createElement(F.MODAL_MEDIA_MESSAGE_PROVIDER);t.addEventListener("cancel",()=>{t.remove()}),t.addEventListener("download",()=>{r.emit(new v(x.DOWNLOAD_LINK_EVENT,e.data))}),t.message=e.data,tt(r,t)}),r.addEventListener(x.COMBINE_MESSAGE_MODAL_EVENT,e=>{const t=document.createElement(F.MODAL_COMBINE_MESSAGE_PROVIDER);t.addEventListener("cancel",s=>{r.audioPlayer.pause(),t.remove()}),t.addEventListener("download",s=>{r.emit(new v(x.DOWNLOAD_LINK_EVENT,s.detail[0]))}),t.message=e.data,tt(r,t)}),r.addEventListener(x.REACTIONS_DETAIL_EVENT,e=>{Us();const t=document.createElement(F.MODAL_REACTIONS_DETAIL_PROVIDER);is=t,t.addEventListener("cancel",()=>{is===t&&Us()}),t.message=e.data.message,t.initialReactionId=e.data.reactionId,tt(r,t)}),r.addEventListener(x.TAKE_PHOTO_MODAL_EVENT,e=>{const t=document.createElement(F.MODAL_TAKE_PHOTO_PROVIDER);t.addEventListener("cancel",s=>{t.remove()}),tt(r,t)}),r.addEventListener(x.MESSAGE_LINK_CLICK,e=>{if(e.data.type==="mail"){location.href=`mailto:${e.data.address}`;return}e.data.type==="url"&&e2(e.data.address)}),r.addEventListener(E.GROUP_MEMBERS_UPDATE,async e=>{if(!A.value)return;const{groupId:t,members:s}=e.data,{channelType:i,channelId:n}=A.value;if(i!==T.GROUP||n!==e.data.groupId)return;const a=++Ut,o=await r.appData.requestUserProfiles(s.map(l=>l.userId));r!==j||a!==Ut||!A.value||A.value.channelType!==T.GROUP||A.value.channelId!==t||ls(o,s)}),r.addEventListener(E.USER_PROFILES_UPDATE,e=>{const t=new Map(e.data.map(a=>[a.userId,a])),s=t.get(r.userId);s&&(hs+=1,Dt.value={...s});let i=!1;const n=$t.value.map(a=>{const o=t.get(a.userId);return!o||a.name===o.name&&a.avatarUrl===o.avatarUrl?a:(i=!0,{...a,name:o.name,avatarUrl:o.avatarUrl})});i&&Fa(n)})},Oe=(r,e=nt.STANDARD)=>({tag:r,bubbleContentLayout:e}),Qs={[C.TEXT]:Oe(k.TEXT_MESSAGE),[C.IMAGE]:Oe(k.IMAGE_MESSAGE,nt.ADAPTIVE),[C.SHORT_VIDEO]:Oe(k.SHORT_VIDEO_MESSAGE,nt.ADAPTIVE),[C.FILE]:Oe(k.FILE_MESSAGE),[C.REFERENCE]:Oe(k.REFERENCE_MESSAGE,nt.EDGE_TO_EDGE),[C.COMBINE]:Oe(k.COMBINE_MESSAGE),[C.HD_VOICE]:Oe(F.HD_VOICE_MESSAGE_PROVIDER),[C.GIF]:Oe(k.GIF_MESSAGE,nt.ADAPTIVE)},wi=new Map,_n=(r,e)=>{wi.set(r,e)};_n("RC:RcCmd",r=>{if(r.senderUserId===j.userId)return ke("message.list.deleted.by.self");const e=j.appData.getUserProfile(r.senderUserId).name;return ke("message.list.deleted.by.other",e)});_n("RC:RcNtf",r=>{if(r.senderUserId===j.userId)return ke("message.list.deleted.by.self");const e=j.appData.getUserProfile(r.senderUserId).name;return ke("message.list.deleted.by.other",e)});const a2=(r,e,t=!1)=>{Qs[r]=Oe(e,cc(t))},Va=r=>{var e;return((e=Qs[r])==null?void 0:e.tag)||k.UNSUPPORTED_MESSAGE},o2=r=>{var e;return((e=Qs[r])==null?void 0:e.bubbleContentLayout)||nt.STANDARD},di=r=>!Qs[r],za=async(r,e)=>{const t=new v(x.FORWARDING_EVENT,r);j.emit(t);const{confirm:s,list:i}=await t.awaitResult();return!s||!(i instanceof Array)||i.length===0?!1:(r===Ct.SINGLE?i.forEach(n=>j.message.forward(n.channelIdentifier,e.slice())):i.forEach(n=>j.message.sendCombineMessage(n.channelIdentifier,e.slice())),!0)},ja=r=>{if(!r)return!1;const e=r.senderUserId===j.userId;return!!(j.store.getCommandSwitch(te.SHOW_MESSAGE_STATE)&&e||(r.sentStatus===L.FAILED||r.sentStatus===L.SENDING)&&e)},qa=r=>{if(!r)return" ";const{messageType:e,content:t}=r;if(e===C.TEXT||e===C.REFERENCE)return t.text;if([C.IMAGE,C.GIF,C.HD_VOICE,C.FILE,C.SHORT_VIDEO,C.COMBINE].includes(e)){const s=`message-type.${e}`;return ke(s)}return wi.has(e)?wi.get(e)(r,cs.value):ke("message-type.unknown")},Kt=30,fr=100,Ds=10,Er=20,yi=(r,e,t)=>{const s=Array.from(new Set(r.filter(Boolean)));return t&&e?[e,...s.filter(i=>i!==e)].slice(0,Ds):s.slice(0,Ds)},l2=(r,e)=>{const{users:t,...s}=r;return{...s,users:yi(t.map(({userId:i})=>i),e,r.hasCurrentUserReacted)}},_r=r=>{switch(r.type){case"image/gif":return se.createSendGIFMessageParams(r);case"image/jpeg":case"image/jpg":case"image/png":return se.createSendImageMessageParams(r);case"video/mp4":default:return se.createSendFileMessageParams(r)}};class h2 extends ye{constructor(e){super(e),h(this,"_sendQueue"),h(this,"_uploadQueue"),h(this,"_transactionIdCount",0),h(this,"_insertedMessageIds",new Set),h(this,"_editGeneration",0),h(this,"_histories",new Map),h(this,"_historyGeneration",0),h(this,"_reactionSummaryInFlight",new Map),h(this,"_referenceRefreshInFlight",new Set),h(this,"_referenceRefreshGenerations",new Map),h(this,"_referenceRefreshPending",new Set),h(this,"_v5Responded",new Set),h(this,"sendFiles",this._sendMultiMediaMessage.bind(this,_r)),h(this,"sendImages",this._sendMultiMediaMessage.bind(this,_r)),this._sendQueue=new ch(e),this._uploadQueue=new dh(e)}_onInit(){const e=a=>{this._onV5ReceiptResponse(a.responses)},t=a=>{this._handleMessages(a.messages)},s=a=>{this._handleMessagesDeleted(a.messages)},i=a=>{this._handleMessagesUpdated(a.messages)},n=a=>{this._onMessageReactionChanged(a)};X.addMessageHandler("msg-data-module",new Ti({onMessageReceiptResponse:e,onMessageReceived:t,onMessageDeleted:s,onMessagesUpdated:i,onMessageReactionChanged:n}))}_onInitUserCache(){}_onDestroyUserCache(){this._historyGeneration+=1,this._editGeneration+=1,this._histories.forEach(({histories:e})=>e.forEach(t=>{t.editStatus!==Q.SUCCESS&&(t.editStatus=void 0,t.editDraft=void 0)})),this._histories.clear(),this._insertedMessageIds.clear(),this._reactionSummaryInFlight.clear(),this._referenceRefreshInFlight.clear(),this._referenceRefreshGenerations.clear(),this._referenceRefreshPending.clear(),this._transactionIdCount=0}destroy(){this._onDestroyUserCache(),this._sendQueue.destroy(),this._uploadQueue.destroy(),X.removeMessageHandler("msg-data-module")}_createTransactionId(){return++this._transactionIdCount}_getExistCache(e){const t=H(e);return this._histories.get(t)}_getOrCreateCache(e,t,s,i){const n=H(e);let a=this._histories.get(n);return a||(a={histories:[],startTime:0,endTime:t===0?vt():t,hasMoreAfterEndTime:s,hasMoreBeforeStartTime:i},this._histories.set(n,a)),a}_isSameMessage(e,t){return e.messageId&&t.messageId?e.messageId===t.messageId:e.clientId&&t.clientId?e.clientId===t.clientId:!1}_isInsertedMessage(e){return e.transactionId!==void 0&&this._insertedMessageIds.has(e.transactionId)}getHistoryPageTimestamp(e,t,s){const i=s?t.find(a=>!this._isInsertedMessage(a)):t[Be(t,a=>!this._isInsertedMessage(a))];if(i)return i.sentTime;const n=this._getExistCache(e);return n?s?n.endTime:n.startTime:0}_mergeInsertedMessages(e,t,s,i,n){var a,o,l;const c=i?n?((a=t[0])==null?void 0:a.sentTime)??s:-1/0:s,d=i?s===0?1/0:s:n?((o=t[t.length-1])==null?void 0:o.sentTime)??s:1/0,u=((l=this._getExistCache(e))==null?void 0:l.histories.filter(p=>this._isInsertedMessage(p)&&(i?p.sentTime>=c:p.sentTime>c)&&(i?p.sentTime<d:p.sentTime<=d)&&!t.some(m=>this._isSameMessage(m,p))))||[];return[...t,...u].sort((p,m)=>p.sentTime-m.sentTime)}_push2Cache(e,...t){const{histories:s,startTime:i}=e;t.forEach(n=>{const a=s.findIndex(l=>this._isSameMessage(l,n));if(a!==-1)s.splice(a,1,n);else{const l=Be(s,c=>c.sentTime<n.sentTime);l===-1?s.unshift(n):s.splice(l+1,0,n)}const o=n.sentTime+1;e.endTime=e.endTime===0?o:Math.max(e.endTime,o)}),i||(e.startTime=Math.min(...t.map(n=>n.sentTime))-1)}_unshift2Cache(e,...t){const{histories:s}=e;t.forEach(i=>{if(s.findIndex(a=>this._isSameMessage(a,i))===-1){const a=s.findIndex(o=>o.sentTime>i.sentTime);a===-1?s.push(i):s.splice(a,0,i)}const n=i.sentTime-1;e.startTime=e.startTime===0?n:Math.min(e.startTime,n)})}_onV5ReceiptResponse(e){try{if(!e||!Array.isArray(e))return;e.forEach(t=>{const s=H(t.channelIdentifier);let i=this._histories.get(s);if(!i)return;const n=i.histories.findIndex(a=>a.messageId===t.messageId);n<0||(i.histories[n].readReceiptInfo=t,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[i.histories[n]])))})}catch(t){this.logger.warn(w.L_V5_RECEIPT_RESPONSE_E,`onV5ReceiptResponse error: ${t}`)}}async _sendReadReceiptMessageV5(e,t){if(!this.ctx.isReadReceiptV5)return;const s=t.map(c=>c.messageId),i=Array.from(new Set((s||[]).filter(Boolean)));if(i.length===0)return;const n=H(e),a=this._histories.get(n);if(!a||!a.histories.length)return;const o=new Set(i.filter(c=>{const d=a.histories.find(m=>m.messageId===c);if(!d)return!1;const u=d.direction===2,p=!this._v5Responded.has(c)&&d.sentReceipt!==!0&&d.needReceipt;return u&&p}));if(o.size===0)return;const l=Array.from(o);(await pe(e).sendReadReceiptResponse(l)).isOk&&(l.forEach(c=>this._v5Responded.add(c)),this._markSendReceiptTrue(e,l))}_markSendReceiptTrue(e,t){try{if(!t||!t.length)return;const s=H(e),i=this._histories.get(s);if(!i)return;const n=new Set(t);i.histories.forEach(a=>{a.messageId&&n.has(a.messageId)&&(a.sentReceipt=!0)})}catch(s){this.logger.warn(w.L_SEND_V5_RECEIPT_E,`markSendReceiptTrue error: ${s}`)}}_referenceRefreshKey(e,t){return`${H(e)}:${t}`}_referenceRefreshGeneration(e){const t=(this._referenceRefreshGenerations.get(e)||0)+1;return this._referenceRefreshGenerations.set(e,t),t}_invalidateReferenceRefresh(e,t){if(!t)return;const s=this._referenceRefreshKey(e,t);this._referenceRefreshGeneration(s),this._referenceRefreshPending.delete(s)}_getReferenceMessageId(e){return e.messageType!==C.REFERENCE?void 0:e.content.referMsgId||void 0}_setReferenceSnapshot(e,t){const s=e.message,i=se.createMessage(e.channelIdentifier,new Ie({...e.content,...t},C.REFERENCE),e.senderUserId);Object.assign(i,{messageId:s.messageId,sentTime:s.sentTime,senderUserId:s.senderUserId,direction:s.direction,clientId:s.clientId,sentStatus:s.sentStatus,directedUserIds:s.directedUserIds,sentReceipt:s.sentReceipt,needReceipt:s.needReceipt,disableNotification:s.disableNotification,disableUpdateLastMessage:s.disableUpdateLastMessage,hasChanged:s.hasChanged,hasReactions:s.hasReactions,metadata:s.metadata,updateInfo:s.updateInfo}),e.message=i}_syncReferenceFromLocal(e,t){var s,i,n,a;const o=this._getReferenceMessageId(e);if(!e.messageId||!o)return!1;const l=t||((i=(s=this._getExistCache(e.channelIdentifier))==null?void 0:s.histories.find(u=>u.messageId===o))==null?void 0:i.message);if(!l||l.messageId!==o||!l.channelIdentifier.isEqualTo(e.channelIdentifier)||((n=l.updateInfo)==null?void 0:n.timestamp)===void 0||((a=l.updateInfo)==null?void 0:a.timestamp)===null)return!1;const c=e.content;if(c.referMsgStatus===we.DELETE||c.referMsgStatus===we.RECALLED)return!1;const{referMsg:d}=se.wrapAsReferenceMessageContent(l,c.text);return c.referMsgStatus===we.MODIFIED&&JSON.stringify(c.referMsg)===JSON.stringify(d)?!1:(this._setReferenceSnapshot(e,{referMsg:d,referMsgStatus:we.MODIFIED}),this._invalidateReferenceRefresh(e.channelIdentifier,e.messageId),!0)}_scheduleReferenceRefresh(e){const t=new Map,s=[];e.forEach(i=>{if(!i.messageId||!this._getReferenceMessageId(i))return;this._syncReferenceFromLocal(i)&&s.push(i);const n=H(i.channelIdentifier),a=t.get(n)||{channelIdentifier:i.channelIdentifier,messages:[]};a.messages.some(o=>o.messageId===i.messageId)||a.messages.push(i),t.set(n,a)}),s.length>0&&this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,s)),t.forEach(({channelIdentifier:i,messages:n})=>{for(let a=0;a<n.length;a+=Er){const o=n.slice(a,a+Er);this._refreshReferenceMessageBatch(i,o)}})}_scheduleReferenceRefreshForIds(e,t){const s=new Set(Array.from(t).filter(Boolean));if(s.size===0)return;const i=this._getExistCache(e);i&&this._scheduleReferenceRefresh(i.histories.filter(n=>{const a=this._getReferenceMessageId(n);return!!a&&s.has(a)}))}async _refreshReferenceMessageBatch(e,t){const s=this._historyGeneration,i=[];if(t.forEach(n=>{if(!n.messageId||!this._getReferenceMessageId(n))return;const a=this._referenceRefreshKey(e,n.messageId);if(this._referenceRefreshInFlight.has(a)){this._referenceRefreshGeneration(a),this._referenceRefreshPending.add(a);return}this._referenceRefreshInFlight.add(a),i.push({key:a,generation:this._referenceRefreshGeneration(a),message:n})}),i.length!==0)try{const n=await je.refreshReferenceMessage(i.map(({message:o})=>o.message));if(s!==this._historyGeneration||!n.isOk||!Array.isArray(n.data))return;const a=[];n.data.forEach(({messageId:o,message:l,code:c})=>{const d=i.find(S=>S.message.messageId===o);if(!d||this._referenceRefreshGenerations.get(d.key)!==d.generation||!l)return;const u=this._getExistCache(e),p=u==null?void 0:u.histories.find(S=>S.messageId===o);if(!p||p.messageType!==C.REFERENCE)return;const m=l.content;if(l.messageType!==C.REFERENCE||!l.channelIdentifier.isEqualTo(e)||m.referMsgId!==this._getReferenceMessageId(p))return;const y=m.referMsgStatus===we.DELETE||m.referMsgStatus===we.RECALLED;c!==0&&!y||p.content.referMsgStatus===we.MODIFIED&&(m.referMsgStatus===void 0||m.referMsgStatus===we.DEFAULT)||(this._setReferenceSnapshot(p,{referMsg:m.referMsg,referMsgStatus:m.referMsgStatus}),a.push(p))}),a.length>0&&this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,a))}finally{i.forEach(({key:n,generation:a})=>{var o,l;if(s!==this._historyGeneration)return;const c=this._referenceRefreshGenerations.get(n)!==a,d=this._referenceRefreshPending.delete(n);if(this._referenceRefreshInFlight.delete(n),!c&&!d)return;const u=(o=i.find(m=>m.key===n))==null?void 0:o.message.messageId,p=(l=this._getExistCache(e))==null?void 0:l.histories.find(m=>m.messageId===u);p&&this._scheduleReferenceRefresh([p])})}}_handleMessages(e){const t=[];let s=[];e.forEach(async n=>{const a=new Re(n);if(!n.isPersisted||bs(n.channelIdentifier)){t.push(a);return}s.push(a)}),s=this._handleNotifiedUIMessaages(s);const i=new Map;s.forEach(n=>{const a=H(n.channelIdentifier),o=i.get(a)||{channelIdentifier:n.channelIdentifier,messages:[]};o.messages.push(n),i.set(a,o)}),i.forEach(({channelIdentifier:n,messages:a})=>{this._checkAndFillReactions(n,a)}),s.length&&(this.ctx.dispatchEvent(new v(E.RECV_NEW_MESSAGES,s)),this._scheduleReferenceRefresh(s)),t.length&&this.ctx.emit(new v(x.UNSCHEDULED_MESSAGES,t))}_handleMessagesUpdated(e){const t=[],s=new Map;e.forEach(i=>{var n;if(i.messageId){this._invalidateReferenceRefresh(i.channelIdentifier,i.messageId);const d=H(i.channelIdentifier),u=s.get(d)||{channelIdentifier:i.channelIdentifier,messageIds:new Set};u.messageIds.add(i.messageId),s.set(d,u)}const a=this._getExistCache(i.channelIdentifier),o=a==null?void 0:a.histories.find(d=>d.messageId===i.messageId);if(!o)return;o.message=i;const l=(n=i.updateInfo)==null?void 0:n.timestamp;l!=null?(o.editStatus=Q.SUCCESS,o.editTimestamp=l,o.editDraft=void 0):(o.editTimestamp=void 0,o.editStatus===Q.SUCCESS&&(o.editStatus=void 0));const c=this.ctx.channelModule.getOpenedChannelModel();c!=null&&c.channelIdentifier.isEqualTo(i.channelIdentifier)&&c.updatingMessageUId===i.messageId&&(c.updatingMessageUId=void 0,o.editDraft=void 0,this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[c]))),t.push(o)}),e.forEach(i=>{const n=this._getExistCache(i.channelIdentifier);n==null||n.histories.forEach(a=>{this._syncReferenceFromLocal(a,i)&&t.push(a)})}),t.length>0&&this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,t)),s.forEach(({channelIdentifier:i,messageIds:n})=>{this._scheduleReferenceRefreshForIds(i,n)})}_handleMessagesDeleted(e){const t=new Map,s=e.map(({channelIdentifier:i,messageId:n,operationTime:a})=>{this._invalidateReferenceRefresh(i,n);const o=H(i),l=t.get(o)||{channelIdentifier:i,messageIds:new Set};l.messageIds.add(n),t.set(o,l);const c={channelIdentifier:i,messageId:n},d=this._getOrCreateCache(i,a,!1,!0);if(d.histories.length>0){const u=d.histories.findIndex(p=>p.messageId===n);if(u!==-1){const[p]=d.histories.splice(u,1),m=this.ctx.channelModule.getOpenedChannelModel();m!=null&&m.channelIdentifier.isEqualTo(i)&&m.updatingMessageUId===p.messageId&&(m.updatingMessageUId=void 0,p.editStatus=void 0,p.editDraft=void 0,p.editTimestamp=void 0,this.ctx.alert("alert.message.edit.recalled"),this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[m]))),c.transactionId=p.transactionId}}return c});this.ctx.dispatchEvent(new v(x.MESSAGES_DELETED,s)),t.forEach(({channelIdentifier:i,messageIds:n})=>{this._scheduleReferenceRefreshForIds(i,n)})}_handleNotifiedUIMessaages(e){return e.forEach(t=>{const s=this._getOrCreateCache(t.channelIdentifier,t.sentTime+1,!1,!0);s.hasMoreAfterEndTime||this._push2Cache(s,t)}),e}_onMessageReactionChanged(e){if(!this.ctx.isMessageReactionEnabled)return;const t=this.ctx.userId,s=new Map;e.reactions.forEach(a=>{var o;const l=this._getExistCache(a.channelIdentifier),c=l==null?void 0:l.histories.find(W=>W.messageId===a.messageId);if(!c)return;let d=s.get(c);if(d||(d={reactions:c.reactions.map(W=>({...W,users:[...W.users]})),hasReactions:c.message.hasReactions||c.reactions.length>0,changed:!1,needsRefetch:!1},s.set(c,d)),a.operationType===Vt.CLEARED){(d.reactions.length>0||d.hasReactions)&&(d.reactions=[],d.hasReactions=!1,d.changed=!0),d.needsRefetch=!1;return}const u=d.reactions.findIndex(W=>W.reactionId===a.reactionId),p=d.reactions[u],m=a.users.map(({userId:W})=>W);if(a.operationType===Vt.ADDED){const W=!!(p!=null&&p.hasCurrentUserReacted||m.includes(t)),de={messageId:a.messageId,reactionId:a.reactionId,totalCount:a.totalCount,hasCurrentUserReacted:W,users:yi([...(p==null?void 0:p.users)||[],...m],t,W),reactionTime:(p==null?void 0:p.reactionTime)||((o=a.users[0])==null?void 0:o.reactionTime)||Date.now()};p?d.reactions.splice(u,1,de):d.reactions.push(de),d.hasReactions=!0,d.changed=!0;return}if(a.operationType!==Vt.REMOVED)return;if(!p){d.hasReactions||(d.hasReactions=!0,d.changed=!0),d.needsRefetch=!0;return}if(a.totalCount<=0){d.reactions.splice(u,1),d.reactions.length===0&&(d.hasReactions=!0,d.needsRefetch=!0),d.changed=!0;return}const y=new Set(m),S=p.users.filter(W=>!y.has(W)),U=S.length!==p.users.length,P=!y.has(t)&&(p.hasCurrentUserReacted||p.users.includes(t)),K=yi(S,t,P);d.reactions.splice(u,1,{...p,totalCount:a.totalCount,hasCurrentUserReacted:P,users:K}),d.hasReactions=!0,d.changed=!0,this.ctx.isShowMessageReactUsersEnabled&&U&&K.length<Ds&&a.totalCount>=Ds&&(d.needsRefetch=!0)});const i=[],n=new Map;s.forEach((a,o)=>{if(a.changed&&(o.reactions=a.reactions,o.message.hasReactions=a.hasReactions,i.push(o)),a.needsRefetch){const l=H(o.channelIdentifier),c=n.get(l)||{channelIdentifier:o.channelIdentifier,messages:[]};c.messages.push(o),n.set(l,c)}}),i.length>0&&this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,i)),n.forEach(({channelIdentifier:a,messages:o})=>{this._checkAndFillReactions(a,o,!0)})}_checkAndFillReactions(e,t,s=!1){if(!this.ctx.isMessageReactionEnabled)return;const i=this._getExistCache(e);if(!i)return;const n=new Map,a=H(e);if(t.forEach(l=>{const c=i.histories.find(p=>p.messageId===l.messageId),d=`${a}:${l.messageId}`;if(c!==l||!l.isPersisted||!l.messageId||!l.message.hasReactions||!s&&l.reactions.length>0)return;const u=this._reactionSummaryInFlight.get(d);if((u==null?void 0:u.message)===l){s&&(u.needsRefetch=!0);return}n.set(l.messageId,{message:l,reactions:l.reactions,needsRefetch:!1})}),n.size===0)return;const o=Array.from(n.values());o.forEach(l=>{this._reactionSummaryInFlight.set(`${a}:${l.message.messageId}`,l)}),this._batchGetMessageReactionSummaries(e,o)}async _batchGetMessageReactionSummaries(e,t){const s=H(e),i=a=>{const o=[],l=this._getExistCache(e);a.forEach(c=>{const{message:d}=c,u=`${s}:${d.messageId}`;this._reactionSummaryInFlight.get(u)===c&&(this._reactionSummaryInFlight.delete(u),(l==null?void 0:l.histories.find(p=>p.messageId===d.messageId))===d&&(c.needsRefetch||c.reactions!==d.reactions)&&o.push(d))}),o.length>0&&this._checkAndFillReactions(e,o,!0)},n=pe(e);if(!n){i(t);return}for(let a=0;a<t.length;a+=fr){const o=t.slice(a,a+fr);try{const l=this._getExistCache(e),c=o.filter(m=>{const{message:y}=m;return this._reactionSummaryInFlight.get(`${s}:${y.messageId}`)===m&&(l==null?void 0:l.histories.find(S=>S.messageId===y.messageId))===y&&y.message.hasReactions});if(c.length===0)continue;c.forEach(m=>{m.reactions=m.message.reactions,m.needsRefetch=!1});const d=await n.getMessageReactionSummaries(c.map(({message:m})=>m.messageId));if(!d.isOk)continue;const u=this._getExistCache(e);if(!u)continue;const p=[];c.forEach(m=>{var y;const{message:S}=m,U=u.histories.find(P=>P.messageId===S.messageId);this._reactionSummaryInFlight.get(`${s}:${S.messageId}`)!==m||U!==S||m.needsRefetch||U.reactions!==m.reactions||(U.reactions=(((y=d.data)==null?void 0:y[S.messageId])||[]).map(P=>l2(P,this.ctx.userId)),U.message.hasReactions=U.reactions.length>0,m.reactions=U.reactions,p.push(U))}),p.length>0&&this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,p))}catch(l){this.logger.warn(w.D,`getMessageReactionSummaries failed: ${l}`)}finally{i(o)}}}_ifTimeCoincides(e,t){return e.endTime>=t&&e.startTime<=t}async _requestHistoriesFromLib(e,t,s,i=this._historyGeneration){if(i!==this._historyGeneration)return{code:I.SUCCESS,hasMore:!1,list:[]};const n=je.createMessagesQuery({channelIdentifier:e,pageSize:Kt,startTime:t,isAscending:!s}),a=await n.loadNextPage();if(i!==this._historyGeneration)return{code:I.SUCCESS,hasMore:!1,list:[]};if(!a.isOk)return{code:a.code,hasMore:!0,list:[]};const o=n.hasNext,{data:l}=a.data;let c=await this._handleTransIAReceivedMessages(l,e);if(i!==this._historyGeneration)return{code:I.SUCCESS,hasMore:!1,list:[]};const d=this._getOrCreateCache(e,t,t!==0,!0);return!s&&t!==0&&d.startTime>t&&(d.startTime=t-1),(this._ifTimeCoincides(d,t)||l.length&&(this._ifTimeCoincides(d,l[0].sentTime)||this._ifTimeCoincides(d,l[l.length-1].sentTime)))&&(s?(c=c.reverse(),this._unshift2Cache(d,...c),d.hasMoreBeforeStartTime=o):(this._push2Cache(d,...c),d.hasMoreAfterEndTime=o)),{hasMore:o,list:c,code:I.SUCCESS}}async _handleTransIAReceivedMessages(e,t){const s=e.map(i=>new Re(i));return this.ctx.isReadReceiptV5?await this._handleReadReceiptV5(t,s):s}async _handleReadReceiptV5(e,t){if(t.length===0)return[];const s=pe(e);try{const i=t.filter(o=>o.senderUserId===this.ctx.userId);if(i.length===0)return t;const n=i.map(o=>o.messageId),{data:a}=await s.getMessageReadReceiptInfo(n);a&&a.length>0&&a.forEach(o=>{const l=t.findIndex(c=>c.messageId===o.messageId);l>-1&&(t[l].readReceiptInfo=o)})}catch(i){this.logger.warn(w.L_HANDLE_READ_RECEIPT_V5_E,`_handleReadReceiptV5 error: ${i}`)}return t}async _reqHistoriesHandler(e,t=0,s=!0,i=this._historyGeneration){var n;if(i!==this._historyGeneration)return{hasMore:!1,list:[],code:I.SUCCESS};const a=this._getOrCreateCache(e,t,t!==0,!0),{hasMoreAfterEndTime:o,hasMoreBeforeStartTime:l,startTime:c,endTime:d}=a,u=a.histories.filter(S=>!this._isInsertedMessage(S));if(!o&&t===0&&s){const S=((n=u[u.length-1])==null?void 0:n.sentTime)||0;S>d&&(a.endTime=S+1),t=a.endTime}if(!this._ifTimeCoincides(a,t))return this._requestHistoriesFromLib(e,t,s,i);let p;if(s){const S=Be(u,U=>U.sentTime<t);p=u.slice(0,S+1)}else{const S=u.findIndex(U=>U.sentTime>t);p=S===-1?[]:u.slice(S)}const m=s?l:o;if(p.length<Kt)return await this._reqHasMoreHistories(m,c,d,s,e,t,p,i);let y=s?p.slice(p.length-Kt):p.slice(0,Kt);if(this.ctx.isReadReceiptV5&&e.channelType===T.GROUP){if(await this._handleReadReceiptV5(e,y),i!==this._historyGeneration)return{hasMore:!1,list:[],code:I.SUCCESS};y.forEach(S=>{const U=a.histories.findIndex(P=>P.messageId===S.messageId);U>-1&&S.readReceiptInfo&&(a.histories[U].readReceiptInfo=S.readReceiptInfo)})}return{hasMore:m||p.length>Kt,list:y,code:I.SUCCESS}}async _reqHasMoreHistories(e,t,s,i,n,a=0,o=[],l=this._historyGeneration){if(l!==this._historyGeneration)return{hasMore:!1,list:[],code:I.SUCCESS};if(e){const c=t===0?0:t+1,d=s===0?0:s-1,u=i?c:d,{code:p}=await this._requestHistoriesFromLib(n,u,i,l);return l!==this._historyGeneration?{hasMore:!1,list:[],code:I.SUCCESS}:p===I.SUCCESS?this._reqHistoriesHandler(n,a,i,l):{hasMore:e,list:o,code:p}}return{hasMore:e,list:o,code:I.SUCCESS}}async reqHistories(e,t=0,s=!0){const i=this._historyGeneration,n=await this._reqHistoriesHandler(e,t,s,i);return i!==this._historyGeneration?{...n,hasMore:!1,list:[]}:(n.code===I.SUCCESS&&(n.list=this._mergeInsertedMessages(e,n.list,t,s,n.hasMore)),this._checkAndFillReactions(e,n.list),this._scheduleReferenceRefresh(n.list),n)}emitMessageWillSend(e,t){this.ctx.emit(new v(x.MESSAGE_WILL_SEND,{channelIdentifier:e,params:t}),2)}async sendMessage(e,t){if(bs(e)||!An(e))return B.fail(I.INVALID_CHANNEL);const s=this._historyGeneration;if(this.emitMessageWillSend(e,t),s!==this._historyGeneration)return B.fail(I.TASK_CANCEL);const i=se.createMessage(e,t),n=new Re(i);if(n.transactionId=this._createTransactionId(),n.sentTime=vt(),i.isPersisted){const o=this._getOrCreateCache(e,n.sentTime+1,!1,!0);o.hasMoreAfterEndTime&&(o.histories.length=0,o.startTime=n.sentTime,o.hasMoreBeforeStartTime=!0,o.hasMoreAfterEndTime=!1),this._push2Cache(o,n),this.ctx.dispatchEvent(new v(E.INSERT_NEW_MESSAGES,[n]))}const a=await this._sendQueue.push({channelIdentifier:e,message:n,transactionId:n.transactionId,params:t});if(s!==this._historyGeneration)return B.fail(I.TASK_CANCEL);if(a.code===I.TASK_CANCEL)return a;if(!a.isOk)n.sentStatus=L.FAILED;else if(this._updateCachedMessage(n,a.data),this.ctx.isReadReceiptV5&&n.channelType===T.GROUP&&(await this._handleReadReceiptV5(e,[n]),s!==this._historyGeneration))return B.fail(I.TASK_CANCEL);return n.isPersisted&&(this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[n])),a.isOk&&this._scheduleReferenceRefresh([n])),a}_updateCachedMessage(e,t){const{sentStatus:s,sentTime:i,messageId:n,clientId:a}=t;e.sentStatus=s,e.sentTime=i,e.messageId=n,e.clientId=a}async _sendMultiMediaMessage(e,t,s){const i=this._historyGeneration;if(s.length>99){this.ctx.alert("alert.pickfiles.maxcount","99");return}const n=[],a=[];for(let m of s)m.size>100*1024*1024||m.size===0?n.push(m):a.push(m);if(n.length>0&&this.ctx.emit(new v(x.FILE_SEND_FAILED_EVENT,n)),a.length===0)return;const o=new Map,l=[];if(await Promise.all(a.map(async m=>{const y=await e(m);if(i!==this._historyGeneration||!y.isOk)return;const S=y.data;if(this.emitMessageWillSend(t,S),i!==this._historyGeneration)return;const U=se.createMessage(t,S);U.sentTime=vt();const P=new Re(U);P.transactionId=this._createTransactionId(),P.file=m,P.progress=0,l.push(P),o.set(P,S)})),i!==this._historyGeneration||l.length===0)return;const c=this.ctx.status!==q.CONNECTED;c&&l.forEach(m=>{m.progress=-1,m.sentStatus=L.FAILED});const d=l[0].sentTime+1,u=this._getOrCreateCache(t,d,!1,!0);if(u.hasMoreAfterEndTime&&(u.histories.length=0,u.startTime=d,u.hasMoreBeforeStartTime=!0,u.hasMoreAfterEndTime=!1),this._push2Cache(u,...l),this.ctx.dispatchEvent(new v(E.INSERT_NEW_MESSAGES,l),!1),i!==this._historyGeneration||c)return;const p=l.map(m=>{const{transactionId:y,file:S}=m,U=(P,K)=>{if(i!==this._historyGeneration)return;const W=Math.floor(P*100/K);this.logger.debug(w.L_UPLOAD_FILE_O,`${y}, progress: ${W}`),m.progress!==W&&(m.progress=W,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[m])))};return this._uploadQueue.push({message:m,transactionId:m.transactionId,onProgress:U})});for(let m of p){const{isOk:y,code:S,data:U}=await m;if(i!==this._historyGeneration)return;if(S===I.TASK_CANCEL)continue;const{message:P}=U;if(!y){P.progress=-1,P.sentStatus=L.FAILED,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[P]));continue}if(P.file=void 0,P.content.remoteUrl=U.httpUrl,P.progress=100,u.histories.findIndex(W=>W.transactionId===P.transactionId)===-1)continue;const K=U.httpUrl;this._updateHttpUrl(P,K),this._push2SendQueue(t,P,o.get(P),i)}}_updateHttpUrl(e,t){switch(e.messageType){case C.IMAGE:e.content.imageUri=t;break;case C.GIF:e.content.remoteUrl=t;break;case C.SHORT_VIDEO:e.content.sightUrl=t;break;case C.COMBINE:e.content.remoteUrl=t;break;default:e.content.fileUrl=t;break}}async insertMessage(e){if(!(e instanceof Ya)||!e.isPersisted)return B.fail(I.INVALID_MESSAGE);const{channelIdentifier:t}=e;if(bs(t)||!An(t))return B.fail(I.INVALID_CHANNEL);const s=new Re(e);s.transactionId=this._createTransactionId();const i=this._getOrCreateCache(t,0,!0,!0);this._insertedMessageIds.add(s.transactionId);let n=Be(i.histories,a=>this._isSameMessage(a,s));if(n!==-1){const a=i.histories[n].transactionId;a!==void 0&&this._insertedMessageIds.delete(a),i.histories.splice(n,1,s)}else n=Be(i.histories,a=>a.sentTime<=s.sentTime),n===-1?i.histories.unshift(s):i.histories.splice(n+1,0,s);return this._checkAndFillReactions(t,[s]),this.ctx.dispatchEvent(new v(E.INSERT_NEW_MESSAGES,[s])),B.ok()}async updateMessageReaction(e,t,s){var i;if(!this.ctx.isMessageReactionEnabled||e.sentStatus!==L.SENT||!e.messageId)return;let n;try{n=await(s?e.message.removeReaction({reactionId:t}):e.message.addReaction({reactionId:t}))}catch{this.ctx.alert("alert.reaction.failed");return}if(!n.isOk){const d=!s&&(n.code===26323||n.code===26324)?"alert.reaction.limit.reached":"alert.reaction.failed";this.ctx.alert(d);return}const a=(i=this._getExistCache(e.channelIdentifier))==null?void 0:i.histories.find(d=>d.messageId===e.messageId),o=(a==null?void 0:a.reactions.find(d=>d.reactionId===t))||e.reactions.find(d=>d.reactionId===t);if(!!(o!=null&&o.hasCurrentUserReacted)==!s)return;const l=Math.max(((o==null?void 0:o.totalCount)||0)+(s?-1:1),0),c={channelIdentifier:e.channelIdentifier,messageId:e.messageId,reactionId:t,operationType:s?Vt.REMOVED:Vt.ADDED,users:[{userId:this.ctx.userId,reactionTime:Date.now()}],totalCount:l};this._onMessageReactionChanged({reactions:[c]})}_getCachedMessage(e){var t;return(t=this._getExistCache(e.channelIdentifier))==null?void 0:t.histories.find(s=>e.messageId&&s.messageId===e.messageId||!!e.transactionId&&s.transactionId===e.transactionId)}setMessageEditDraft(e,t){const s=this._getCachedMessage(e);!s||s.editStatus===Q.UPDATING||(s.editDraft=t,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[s])))}clearMessageEdit(e,t=!1,s=!1){var i;const n=this._getCachedMessage(e)||e,a=(i=n.message.updateInfo)==null?void 0:i.timestamp;n.editDraft=void 0,!s&&a!==void 0&&a!==null?(n.editStatus=Q.SUCCESS,n.editTimestamp=a):(n.editStatus=void 0,n.editTimestamp=void 0);const o=this.ctx.channelModule.getOpenedChannelModel();o!=null&&o.channelIdentifier.isEqualTo(n.channelIdentifier)&&o.updatingMessageUId===n.messageId&&(o.updatingMessageUId=void 0,this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[o]))),t&&this.ctx.alert("alert.message.edit.discarded"),this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[n]))}async updateMessage(e,t){var s;const i=this._getCachedMessage(e);if(!i||!i.messageId||!t.trim()||i.editStatus===Q.UPDATING)return B.fail(I.INVALID_MESSAGE);const n=(s=X.getAppSettings().data)==null?void 0:s.messageModifiableMinutes;if(!(typeof n=="number"&&n>0&&Date.now()-i.sentTime<n*60*1e3))return this.clearMessageEdit(i,!1,!0),this.ctx.alert("message.edit.expired"),B.fail(I.MODIFIED_MESSAGE_TIMEOUT);i.editDraft=t,i.editStatus=Q.UPDATING,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[i]));const a=this._editGeneration,o=i.messageType===C.REFERENCE?{...i.content,text:t}:{...i.content,text:t};try{const l=await je.updateMessage({channelIdentifier:i.channelIdentifier,messageId:i.messageId,messageType:i.messageType,content:o});return a!==this._editGeneration||!this._getCachedMessage(i)||l.isOk||(i.editStatus=Q.FAILED,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[i]))),l}catch{return a!==this._editGeneration||!this._getCachedMessage(i)?B.fail(-1):(i.editStatus=Q.FAILED,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[i])),B.fail(-1))}}retryMessageUpdate(e){return this.updateMessage(e,e.editDraft||"")}async deleteMessage(e,t){return this._deleteMessages(e.channelIdentifier,[e],t)}async _deleteMessages(e,t,s){if(t.length===0)return;const i=this.ctx.channelModule.getOpenedChannelModel(),n=i!=null&&i.updatingMessageUId?t.find(d=>d.messageId===i.updatingMessageUId):void 0;n&&this.clearMessageEdit(n,!0,!0);const a=[],o=[];t.forEach(d=>{d.messageId?a.push(d):d.sentStatus===L.FAILED&&o.push(d)});const l=this._getExistCache(e),c=[];if(a.length){const d=await this._handleSentList(s,l,a,e);c.push(...d)}o.length&&l&&l.histories.length&&o.forEach(d=>{const u=l.histories.findIndex(p=>p.messageId?p.messageId===d.messageId:p.transactionId===d.transactionId);if(u!==-1){const[p]=l.histories.splice(u,1);c.push({channelIdentifier:e,messageId:p.messageId,transactionId:p.transactionId})}}),c.length&&this.ctx.dispatchEvent(new v(x.MESSAGES_DELETED,c))}getAllowedToRecallTime(){return this.ctx.allowedToRecallTime}async _handleSentList(e,t,s,i){const n=[],a=[],o=[],l=pe(i);return l&&(e?(await Promise.all(s.map(c=>l.deleteMessageForAll(c.message)))).forEach((c,d)=>{if(c.isOk){n.push(s[d]);return}a.push(s[d])}):(await l.deleteMessagesForMe(s.map(c=>c.message))).code===I.SUCCESS?n.push(...s):a.push(...s),n.length&&t&&t.histories.length&&n.forEach(c=>{const d=t.histories.findIndex(p=>p.messageId===c.messageId);if(d===-1)return;const[u]=t.histories.splice(d,1);o.push({channelIdentifier:i,messageId:u.messageId,transactionId:u.transactionId})}),n.length&&this._scheduleReferenceRefreshForIds(i,n.map(c=>c.messageId).filter(Boolean)),a.length&&this.ctx.alert("alert.delete.messages.partial.failure",a.length)),o}async forward(e,t){t.length!==0&&t.map(s=>{const{content:i,messageType:n}=s.message,{mentionedInfo:a,senderUserInfo:o,extra:l,...c}=i;return new Ie(c,n)}).forEach(s=>this.sendMessage(e,s))}async sendCombineMessage(e,t){if(t.length===0||bs(e))return;const{channelIdentifier:s}=t[0],i=[],n=this.ctx.userId,a=this.ctx.appData.getUserProfile(n).name,o=[];if(s.channelType===T.DIRECT){const u=t.findIndex(m=>m.senderUserId===n),p=t.findIndex(m=>m.senderUserId!==n);u>-1&&o.push(a),p>-1&&o.push(this.ctx.appData.getUserProfile(s.channelId).name)}else o.push(this.ctx.appData.getGroupProfile(s.channelId).name);const l=t.map((u,p)=>{const{senderUserId:m}=u;if(p<4){const y=this.ctx.appData.getUserProfile(m).name;let S=En(u);if(u.messageType===C.FILE){const U=u.content.name;S=`${S}${U}`}i.push(`${y}: ${S}`.substring(0,1e3))}return se.wrapAsCombineMessageInfo(u.message)}),c={summaryList:i,nameList:o,channelType:s.channelType,msgNum:l.length},d=JSON.stringify(l);if(d.length>=120*1024){const u=`${Date.now()}-${Math.floor(Math.random()*Date.now())}.json`;c.jsonMsgKey=u;const p=new File([d],u,{type:"application/json"});this._sendMultiMediaMessage(async m=>B.ok(new Ie(c,C.COMBINE)),e,[p])}else c.msgList=l,this.sendMessage(e,new Ie(c,C.COMBINE))}async _push2SendQueue(e,t,s,i=this._historyGeneration){if(i!==this._historyGeneration)return;const{isOk:n,code:a,data:o}=await this._sendQueue.push({channelIdentifier:e,message:t,transactionId:t.transactionId,params:s});if(!(i!==this._historyGeneration||a===I.TASK_CANCEL)){if(!n)t.sentStatus=L.FAILED;else{const l=t.sentTime;if(this._updateCachedMessage(t,o),t.sentTime!==l){const c=this._getExistCache(e);if(c){const d=c.histories.findIndex(u=>u.transactionId===t.transactionId);if(d!==-1){c.histories.splice(d,1);const u=Be(c.histories,p=>p.sentTime<=t.sentTime);c.histories.splice(u+1,0,t)}}}}this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[t])),n&&this._scheduleReferenceRefresh([t])}}removeCachedMessages(e){var t;(t=this._getExistCache(e))==null||t.histories.forEach(s=>{s.transactionId!==void 0&&this._insertedMessageIds.delete(s.transactionId)}),this._histories.delete(H(e))}cancelMessageSent(e){const{transactionId:t}=e,s=this._getExistCache(e.channelIdentifier);if(!s)return;const i=s.histories.findIndex(a=>a.transactionId===t),n=s.histories[i];!n||n.sentStatus!==L.SENDING||typeof n.transactionId!="number"||(s.histories.splice(i,1),this.ctx.dispatchEvent(new v(x.MESSAGES_DELETED,[{channelIdentifier:e.channelIdentifier,messageId:e.messageId,transactionId:e.transactionId}])),this._uploadQueue.remove(t)||this._sendQueue.remove(t))}async resendMessage(e){const t=this._historyGeneration,{transactionId:s}=e,i=this._getExistCache(e.channelIdentifier);if(!i)return;const n=i.histories.findIndex(d=>d.transactionId===s),a=i.histories[n];if(!a||a.sentStatus!==L.FAILED||typeof s!="number")return;if(a.sentStatus=L.SENDING,a.file&&a.progress!==100){if(a.progress=0,this.ctx.emit(new v(E.MESSAGE_STATE_CHANGE,[a])),t!==this._historyGeneration)return;const d=(m,y)=>{if(t!==this._historyGeneration)return;const S=Math.floor(m*100/y);a.progress!==S&&(a.progress=S,this.ctx.dispatchEvent(new v(E.MESSAGE_STATE_CHANGE,[a])))},{code:u,data:p}=await this._uploadQueue.push({message:a,transactionId:s,onProgress:d});if(t!==this._historyGeneration||u===I.TASK_CANCEL)return;if(u!==I.SUCCESS){a.sentStatus=L.FAILED,a.progress=-1,this.ctx.emit(new v(E.MESSAGE_STATE_CHANGE,[a]));return}a.file=void 0,this._updateHttpUrl(a,p.httpUrl)}const o=new Ie(a.content,a.messageType);if(this.emitMessageWillSend(a.channelIdentifier,o),t!==this._historyGeneration)return;const l=se.createMessage(a.channelIdentifier,o),c=new Re(l);c.transactionId=a.transactionId,c.sentTime=a.sentTime,c.sentStatus=a.sentStatus,c.progress=a.progress,c.file=a.file,c.readReceiptInfo=a.readReceiptInfo,i.histories.splice(n,1,c),this._push2SendQueue(c.channelIdentifier,c,o,t)}async sendReadReceiptMessage(e,t){this.ctx.isReadReceiptV5&&await this._sendReadReceiptMessageV5(e,t)}getLatestMessage(e){const t=this._getExistCache(e);if(!t)return null;const s=t.histories.length;return t.histories[s-1]}}var c2=(r=>(r.PIN="channel.menu.item.pin",r.UNPIN="channel.menu.item.unpin",r.MUTE="channel.menu.item.mute",r.UNMUTE="channel.menu.item.unmute",r.REMOVE="channel.menu.item.remove",r))(c2||{});const Cr=[{id:"channel.menu.item.pin",icon:R1,filter:r=>!r.isPinned},{id:"channel.menu.item.unpin",icon:L1,filter:r=>r.isPinned},{id:"channel.menu.item.mute",icon:A1,filter:r=>r.noDisturbLevel!==St.MUTED},{id:"channel.menu.item.unmute",icon:I1,filter(r){return r.noDisturbLevel===St.MUTED}},{id:"channel.menu.item.remove",icon:O1}],xs=r=>r.map(e=>({...e}));class d2 extends ye{constructor(){super(...arguments),h(this,"_menu",xs(Cr))}_onInit(){this.ctx.addEventListener(x.CHANNELS_MENU_ITEM_CLICK,this._onMenuItemClick,this)}_onInitUserCache(){}_onDestroyUserCache(){}destroy(){this._menu=xs(Cr)}_onMenuItemClick(e){const{id:t,channelModel:s}=e.data;switch(t){case"channel.menu.item.pin":this.ctx.channelModule.setChannelPinned(s.channelIdentifier,!0);break;case"channel.menu.item.unpin":this.ctx.channelModule.setChannelPinned(s.channelIdentifier,!1);break;case"channel.menu.item.mute":this.ctx.channelModule.setNoDisturbLevel(s.channelIdentifier,St.MUTED);break;case"channel.menu.item.unmute":this.ctx.channelModule.setNoDisturbLevel(s.channelIdentifier,St.ALL_MESSAGE);break;case"channel.menu.item.remove":this.ctx.channelModule.deleteChannel(s.channelIdentifier);break}}getMenum(e){return this._menu.filter(t=>!t.filter||t.filter(e))}cloneChannelsMenu(){return xs(this._menu)}setChannelsMenu(e){this._menu=xs(e)}}class u2 extends ye{constructor(){super(...arguments),h(this,"_audio",new Audio),h(this,"_status","stopped"),h(this,"_progress",0),h(this,"_messageUId",""),h(this,"_transactionId",0),h(this,"_onError",()=>{this._progress=0,this._status="stopped",this._dispatch()}),h(this,"_onTimeUpdate",()=>{const{currentTime:e,duration:t}=this._audio;this._progress=Math.floor(e/t*100),this._status!=="stopped"&&this._dispatch()}),h(this,"_onEnded",()=>{this._progress=100,this._status="stopped",this._dispatch()})}_onInitUserCache(){this._audio.addEventListener("ended",this._onEnded),this._audio.addEventListener("timeupdate",this._onTimeUpdate),this._audio.addEventListener("error",this._onError)}_onDestroyUserCache(){this._audio.removeEventListener("ended",this._onEnded),this._audio.removeEventListener("timeupdate",this._onTimeUpdate),this._audio.removeEventListener("error",this._onError),this.stop()}destroy(){this.ctx.removeEventListener(E.DESTROY_USER_CACHE,this._onDestroyUserCache,this),this.ctx.removeEventListener(E.INIT_USER_CACHE,this._onInitUserCache,this),this._onDestroyUserCache()}getCurrentState(){return{progress:this._progress,status:this._status,messageUId:this._messageUId,transactionId:this._transactionId}}_dispatch(){this.ctx.dispatchEvent(new v(E.AUDIO_PLAY_EVENT,this.getCurrentState()),!1)}_playAudio(){const e=this._audio.src;this._audio.play().catch(t=>{t.name==="AbortError"||this._status==="stopped"||this._audio.src!==e||this._onError()})}play(e,t,s){if(this._messageUId&&this._messageUId===t||this._transactionId&&this._transactionId===s){this._status==="stopped"&&(this._playAudio(),this._status="playing",this._onTimeUpdate());return}this._status="playing",this._messageUId=t,this._transactionId=s??0,this._progress=0,this._audio.src=e,this._playAudio(),this._dispatch()}stop(){this._status="stopped",this._messageUId="",this._transactionId=0,this._progress=0,this._audio.src&&(this._audio.pause(),this._audio.removeAttribute("src"),this._audio.load()),this._dispatch()}pause(){this._status!=="stopped"&&(this._status="stopped",this._audio.pause(),this._dispatch())}}var Si;const xi=class Mi{constructor(e,t){h(this,"cache",new Map),h(this,"convertingTTSList",new Set),h(this,"errorTTSList",new Set),h(this,"timers",new Map),$r(this,Si,i=>{var n,a,o,l;try{const{code:c,messageId:d,info:u}=i||{};(n=this.logger)==null||n.info(w.L_STT_RESPONSE_R,`[STT] response: ${d}, code: ${c}`);const p=this.timers.get(d);if(p&&(clearTimeout(p),this.timers.delete(d)),c===I.SUCCESS){const m=u.text;for(this.cache.set(d,m);this.cache.size>Mi.MAX_CACHE_SIZE;){const y=this.cache.keys().next().value||"";this.cache.delete(y)}this.errorTTSList.delete(d),this.convertingTTSList.delete(d),(a=this.logger)==null||a.info(w.L_STT_RESPONSE_O,`[STT] success: ${d}`),this.dispatchStateChange(d,"success",m)}else this.convertingTTSList.delete(d),this.errorTTSList.add(d),(o=this.logger)==null||o.warn(w.L_STT_RESPONSE_E,`[STT] failed: code=${c}, uid=${d}`),this.dispatchStateChange(d,"error")}catch(c){(l=this.logger)==null||l.warn(w.L_STT_RESPONSE_E,`[STT] exception: ${c}`)}}),this.logger=e,this.eventDispatcher=t;const s=Et(this,Si).bind(this);X.addMessageHandler("speech-to-text-store",new Ti({onSpeechToTextCompleted:s}))}dispatchStateChange(e,t,s,i){this.eventDispatcher&&this.eventDispatcher.dispatchEvent(new v(E.SPEECH_TO_TEXT_STATE_CHANGE,{messageUId:e,status:t,text:s,errorCode:i}))}getSTTText(e){return this.cache.get(e)}isConverting(e){return this.convertingTTSList.has(e)}hasError(e){return this.errorTTSList.has(e)}hasConverted(e){return this.cache.has(e)}async requestForMessage(e){var t,s;const{messageId:i}=e;if(this.cache.has(i)||this.convertingTTSList.has(i))return I.SUCCESS;this.errorTTSList.delete(i),this.convertingTTSList.add(i),this.dispatchStateChange(i,"converting");try{const{code:n,msg:a,isOk:o}=await e.message.requestSpeechToText();if(o){const l=setTimeout(()=>{var c;this.timers.delete(i),this.convertingTTSList.has(i)&&(this.convertingTTSList.delete(i),this.errorTTSList.add(i),(c=this.logger)==null||c.warn(w.D,`[STT] timeout: ${i}`),this.dispatchStateChange(i,"error"))},Mi.REQUEST_TIMEOUT);this.timers.set(i,l)}else this.convertingTTSList.delete(i),this.errorTTSList.add(i),(t=this.logger)==null||t.warn(w.L_STT_REQUEST_E,`[STT] request failed: code=${n}, uid=${i}, msg=${a}`),this.dispatchStateChange(i,"error",void 0,n);return n}catch(n){return this.convertingTTSList.delete(i),this.errorTTSList.add(i),(s=this.logger)==null||s.warn(w.L_STT_REQUEST_E,`[STT] request exception: ${n}`),this.dispatchStateChange(i,"error"),-1}}clearMemoryData(){this.cache.clear(),this.convertingTTSList.clear(),this.errorTTSList.clear(),this.timers.forEach(e=>clearTimeout(e)),this.timers.clear()}destroy(){X.removeMessageHandler("speech-to-text-store"),this.clearMemoryData()}};Si=new WeakMap,h(xi,"MAX_CACHE_SIZE",200),h(xi,"REQUEST_TIMEOUT",3e4);let p2=xi;const g2=30002;var st;class m2 extends ye{constructor(){super(...arguments),h(this,"_channelList",[]),h(this,"_messageQueue",[]),h(this,"_converNtfQueue",[]),h(this,"_handleQueueTimer",null),h(this,"_pool",new Map),h(this,"_userCacheGeneration",0),h(this,"_getRemoteChannelsTimer",null),h(this,"_pullOfflineMessageFinished",!1),$r(this,st,new Map),h(this,"_openedChannelModel",null),h(this,"_onChannelPinnedSync",e=>{this._converNtfQueue.push(e),this._handleQueue()}),h(this,"_onChannelNoDisturbLevelSync",e=>{this._converNtfQueue.push(e),this._handleQueue()}),h(this,"_onChannelsSyncCompleted",e=>{this._getMoreRemoteChannels(!1)}),h(this,"_onSyncReadStatus",async({channelIdentifier:e})=>{const t=this._userCacheGeneration,s=H(e);let i=this._pool.get(s);if(!i)return;let n=pe(e);if(!n)return;const{isOk:a,data:o}=await n.reload();if(!a||t!==this._userCacheGeneration||this._pool.get(s)!==i)return;const l=o.unreadCount;i.unreadCount!==l&&(i.mentionedType=Me.NONE,i.unreadCount=l,this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[i])))}),h(this,"_onV5ReceiptResponse",e=>{if(!this.ctx.isReadReceiptV5)return;const t=e.responses;!t||!Array.isArray(t)||t.forEach(s=>{const i=s.channelIdentifier,n=H(i),a=`${n}|${s.messageId}`;Et(this,st).set(a,s);const o=this._pool.get(n);o&&o.latestMessage&&o.latestMessage.messageId===(s==null?void 0:s.messageId)&&(o.latestMessage.readReceiptInfo=s,this._pool.set(n,o),this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[o])))})}),h(this,"_getRemoteChannelsFinished",!1),h(this,"_typingTime",null)}getOpenedChannelModel(){return this._openedChannelModel}setOpenedChannel(e,t=!0){this._setOpenedChannel(e,t)}_createCachedChannel(e){const t=H(e);if(this._pool.has(t))return this._pool.get(t);const s=new Oi(e);return this._pool.set(t,s),s}_onInit(){this.ctx.addEventListener(E.USER_PROFILES_UPDATE,this._onUserProfilesUpdate,this),this.ctx.addEventListener(E.GROUP_PROFILES_UPDATE,this._onGroupProfilesUpdate,this),this.ctx.addEventListener(E.SYSTEM_PROFILES_UPDATE,this._onSystemProfilesUpdate,this),this.ctx.addEventListener(E.INSERT_NEW_MESSAGES,this._onInsertNewMessages,this),this.ctx.addEventListener(x.MESSAGES_DELETED,this._onDeleteMessages,this),this.ctx.addEventListener(E.MESSAGE_STATE_CHANGE,this._onMessageStateChange,this),this.ctx.addEventListener(E.RECV_NEW_MESSAGES,this._onRecvNewMessages,this);const e={onMessageReceiptResponse:s=>this._onV5ReceiptResponse(s),onOfflineMessageSyncCompleted:()=>{this._pullOfflineMessageFinished=!0,this._handleQueue()}},t={onChannelUnreadStatusSync:s=>this._onSyncReadStatus(s),onChannelPinnedSync:s=>this._onChannelPinnedSync(s),onChannelNoDisturbLevelSync:s=>this._onChannelNoDisturbLevelSync(s),onChannelsSyncComplete:s=>this._onChannelsSyncCompleted(s)};X.addMessageHandler("channels-data-module",new Ti(e)),X.addChannelHandler("channels-data-module",new yr(t))}_onInitUserCache(){this._getMoreRemoteChannels(!0,void 0,this._userCacheGeneration)}_onDestroyUserCache(){this._userCacheGeneration+=1,this._messageQueue.length=0,this._converNtfQueue.length=0,this._channelList.length=0,this._pool.clear(),Et(this,st).clear(),this._openedChannelModel=null,this._getRemoteChannelsFinished=!1,this._pullOfflineMessageFinished=!1,this._getRemoteChannelsTimer&&(clearTimeout(this._getRemoteChannelsTimer),this._getRemoteChannelsTimer=null),this._handleQueueTimer!==null&&(clearTimeout(this._handleQueueTimer),this._handleQueueTimer=null),this._clearTypingStatus()}destroy(){this._onDestroyUserCache(),this.ctx.removeEventListener(E.USER_PROFILES_UPDATE,this._onUserProfilesUpdate,this),this.ctx.removeEventListener(E.GROUP_PROFILES_UPDATE,this._onGroupProfilesUpdate,this),this.ctx.removeEventListener(E.SYSTEM_PROFILES_UPDATE,this._onSystemProfilesUpdate,this),this.ctx.removeEventListener(E.INSERT_NEW_MESSAGES,this._onInsertNewMessages,this),this.ctx.removeEventListener(x.MESSAGES_DELETED,this._onDeleteMessages,this),this.ctx.removeEventListener(E.MESSAGE_STATE_CHANGE,this._onMessageStateChange,this),this.ctx.removeEventListener(E.RECV_NEW_MESSAGES,this._onRecvNewMessages,this),X.removeMessageHandler("channels-data-module"),X.removeChannelHandler("channels-data-module")}async _onDeleteMessages(e){const t=e.data,{channelIdentifier:s,transactionId:i,messageId:n}=t[t.length-1],a=this._pool.get(H(s));if(!a)return;let o=!1;const l=a.latestMessage;l&&(l.transactionId&&l.transactionId===i||l.messageId&&l.messageId===n)&&(a.latestMessage=this.ctx.message.getLatestMessage(a.channelIdentifier),o=!0),a.unreadCount>0&&(a.unreadCount-=1,o=!0),o&&this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[a]))}async _onInsertNewMessages(e){this._handlerMessageModel(e.data)}_handlerMessageModel(e){const t=e[e.length-1],s=H(t.channelIdentifier);let i=this._pool.get(s);if(!i){const n=pe(t.channelIdentifier);i=this._parseChannelList([n])[0]}i.latestMessage=t,i.updateTime=t.sentTime,this._recalculatePosition(new Set([i]))}_onMessageStateChange(e){const t=e.data,s=[];t.forEach(i=>{var n;const a=H(i.channelIdentifier),o=this._pool.get(a);o&&(n=o.latestMessage)!=null&&n.isEqual(i)&&(o.latestMessage=i,s.push(o))}),s.length&&this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,s))}_getMentionedType(e,t){if(!t)return Me.NONE;const{type:s,userIdList:i}=t;return s===ui.ALL?Me.AT_ALL:!i||!Array.isArray(i)?Me.NONE:i.includes(e)?Me.AT_ME:Me.NONE}_onUserProfilesUpdate(e){const t=[];e.data.forEach(s=>{const i=new Qa(s.userId),n=this._pool.get(H(i));n&&(n.name!==s.name||n.avatarUrl!==s.avatarUrl||n.online!==s.online)&&(n.name=s.name,n.avatarUrl=s.avatarUrl,n.online=s.online,t.push(n))}),t.length&&this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,t))}_onSystemProfilesUpdate(e){const t=[];e.data.forEach(s=>{const i=new Xa(s.systemId),n=this._pool.get(H(i));n&&(n.name!==s.name||n.avatarUrl!==s.avatarUrl)&&(n.name=s.name,n.avatarUrl=s.avatarUrl,t.push(n))}),t.length&&this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,t))}_onGroupProfilesUpdate(e){const t=e.data,s=[];t.forEach(i=>{const n=new Ja(i.groupId),a=this._pool.get(H(n));a&&(a.name!==i.name||a.avatarUrl!==i.avatarUrl||a.memberCount!==i.memberCount)&&(a.name=i.name,a.avatarUrl=i.avatarUrl,a.memberCount=i.memberCount,s.push(a))}),s.length&&this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,s))}updateLatesMessageStatus(e){if(!(!e||e.length<=0)&&this.ctx.isReadReceiptV5){const t=e.filter(s=>s.channelType===T.DIRECT&&s.latestMessage&&s.latestMessage.senderUserId===this.ctx.userId);this._handleLatestReadReceiptInfoV5(t,this._userCacheGeneration)}}_handleChannelNtf(e){const{channelIdentifier:t}=e,s=H(t);let i=this._pool.get(s),n=0;return i?("isPinned"in e&&(i.isPinned=e.isPinned,n=Math.max(2,n)),"level"in e&&(i.noDisturbLevel=e.level,n=Math.max(1,n)),this._handleUpdatedItems(i,e)):{changeType:n}}_handleUpdatedItems(e,t){var s;let i=0;const{channelIdentifier:n}=t;if("isPinned"in t&&(e.isPinned=t.isPinned,i=Math.max(2,i)),"level"in t&&(e.noDisturbLevel=t.level,i=Math.max(1,i)),this.ctx.isReadReceiptV5)try{const a=`${H(n)}|${((s=e.latestMessage)==null?void 0:s.messageId)||""}`,o=Et(this,st).get(a);o&&(e.latestMessage.readReceiptInfo=o,i=Math.max(1,i))}catch(a){this.logger.warn(w.L_HANDLE_READ_RECEIPT_V5_E,`handle Updated Items error: ${a}`)}return{changeType:i,model:e}}_paddingData(e,t){e.latestMessage=t.latestMessage?new Re(t.latestMessage):null,e.unreadCount=t.unreadCount||0,e.isPinned=!!t.isPinned,e.updateTime=t.latestMessage?t.latestMessage.sentTime:0,t.noDisturbLevel&&(e.noDisturbLevel=t.noDisturbLevel)}_transDirectionChannel(e){const t=this.ctx.appData.getUserProfiles([e.channelId])[0],s=this._createCachedChannel(e.identifier);return s.name=t.name,s.avatarUrl=t.avatarUrl,s.online=t.online,this._paddingData(s,e),s}_transSystemChannel(e){const t=this.ctx.appData.getSystemProfiles([e.channelId])[0],s=this._createCachedChannel(e.identifier);return s.name=t.name,s.avatarUrl=t.avatarUrl,this._paddingData(s,e),s}_transGroupChannel(e){const t=this.ctx.appData.getGroupProfiles([e.channelId])[0],s=this._createCachedChannel(e.identifier);return s.name=t.name,s.avatarUrl=t.avatarUrl,s.memberCount=t.memberCount,this._paddingData(s,e),s}_parseChannelList(e){const t=[];return e.forEach(s=>{const{channelType:i}=s;switch(i){case T.DIRECT:t.push(this._transDirectionChannel(s));return;case T.GROUP:t.push(this._transGroupChannel(s));return;case T.SYSTEM:t.push(this._transSystemChannel(s));return;default:return}}),t}getCachedChannelList(){return this._channelList.slice()}_addToChannelList(e,t=!0){let s=this._channelList.findIndex(o=>o.channelIdentifier.isEqualTo(e.channelIdentifier));if(s>-1){if(!t)return{origin:s,current:s};this._channelList.splice(s,1)}const{isPinned:i,updateTime:n}=e;let a=this._channelList.findIndex(o=>i!==o.isPinned?i:n>o.updateTime);return a===-1&&(a=this._channelList.length),this._channelList.splice(a,0,e),{origin:s,current:a}}_onRecvNewMessages(e){this._messageQueue.push(...e.data),this._handleQueue()}_handleMessage(e){const t=this.ctx.userId;let s=0;const i=H(e.channelIdentifier),{content:n,channelType:a,sentTime:o,isCounted:l,senderUserId:c}=e;let d=this._pool.get(i);if(!d){const u=pe(e.channelIdentifier);d=this._parseChannelList([u])[0],s=2}return a===T.GROUP&&d.mentionedType!==Me.AT_ME&&c!==t&&(d.mentionedType=Math.max(this._getMentionedType(t,n.mentionedInfo),d.mentionedType),s=Math.max(s,1)),o>=d.updateTime&&(d.latestMessage=e,d.updateTime=o,s=2),l&&c!==t&&(d.unreadCount+=1,s=Math.max(s,1)),{changeType:s,model:d}}_recalculatePosition(e){const t=[];[...e].sort((s,i)=>s.updateTime-i.updateTime).forEach(s=>{const{current:i}=this._addToChannelList(s);t.push({order:i,model:s})}),this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_ORDER_CHANGE,t))}async _getMoreRemoteChannels(e,t,s=this._userCacheGeneration){if(s!==this._userCacheGeneration)return;const i=!t,n=i?30:200;t||(t=je.createChannelsQuery({pageSize:n,startTime:0}));const{data:a,isOk:o}=await t.loadNextPage();if(s!==this._userCacheGeneration)return;if(!o){e||(this._getRemoteChannelsTimer=setTimeout(()=>this._getMoreRemoteChannels(e,t,s),1e3));return}const l=a.data,c=l.length>=n,d=this._parseChannelList(l);if(e){this.ctx.dispatchEvent(new v(E.CHANNELS_LIST_RESET,{list:d,generation:s}));return}if(this.ctx.isReadReceiptV5&&this._handleLatestReadReceiptInfoV5(d,s),i&&(this._channelList.length=0),d.forEach(u=>this._addToChannelList(u,!1)),i&&this.ctx.dispatchEvent(new v(E.CHANNELS_LIST_RESET,{list:this._channelList.slice(0,30),generation:s})),c){this._getRemoteChannelsTimer=setTimeout(()=>this._getMoreRemoteChannels(e,t,s),300);return}this._getRemoteChannelsFinished=!0,this._handleQueue()}async _handleLatestReadReceiptInfoV5(e,t){var s;if(t!==this._userCacheGeneration)return;const i=this._buildIdentifiersForLatest(e);if(!i.length)return;const n=100,a=[];for(let o=0;o<i.length;o+=n)a.push(i.slice(o,o+n));try{const o=await Promise.all(a.map(l=>je.getMessageReadReceiptInfoByIdentifiers(l)));if(t!==this._userCacheGeneration)return;o.forEach(l=>{((l==null?void 0:l.data)||[]).forEach(c=>{const d=c.channelIdentifier,u=`${H(d)}|${c.messageId}`;Et(this,st).set(u,c)})}),this._channelList.forEach(l=>{if(l.channelType!==T.DIRECT)return;const c=l.latestMessage;if(!(c!=null&&c.messageId))return;const d=`${H(l.channelIdentifier)}|${c.messageId}`,u=Et(this,st).get(d);if(u){l.latestMessage.readReceiptInfo=u;const p=H(l.channelIdentifier);this._pool.set(p,l)}})}catch(o){if(t!==this._userCacheGeneration)return;(s=this.logger)==null||s.warn(w.L_GET_READ_RECEIPT_INFO_V5_E,`getMessageReadReceip·tInfoV5ByIdentifiers error: ${o}`)}}_buildIdentifiersForLatest(e){const t=[];return e.forEach(s=>{const i=s.latestMessage;s.channelType===T.DIRECT&&(i==null?void 0:i.direction)===ue.SEND&&i!=null&&i.messageId&&t.push({channelIdentifier:s.channelIdentifier,messageId:i.messageId})}),t}_handleQueue(){if(this._handleQueueTimer!==null&&(clearTimeout(this._handleQueueTimer),this._handleQueueTimer=null),!this._getRemoteChannelsFinished||!this._pullOfflineMessageFinished||this._messageQueue.length===0&&this._converNtfQueue.length===0)return;const e=new Set,t=new Set,s=new Set,i=Number.MAX_SAFE_INTEGER,n=20,a=Date.now(),o=l=>{const{changeType:c,model:d}=l;c===1?(s.add(d),e.add(d)):c===2&&(t.add(d),e.add(d))};if(this._handleMessageQueue(o,e,i,n,a),this._handleChannelNotifyQueue(o,e,i,n,a),t.size&&this._recalculatePosition(t),s.size){const l=[...s].filter(c=>!t.has(c));l.length&&this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,l))}if(this._messageQueue.length||this._converNtfQueue.length){const l=this._userCacheGeneration;this._handleQueueTimer=setTimeout(()=>{l===this._userCacheGeneration&&(this._handleQueueTimer=null,this._handleQueue())},0)}}_handleMessageQueue(e,t,s,i,n){for(;this._messageQueue.length&&Date.now()-n<i&&t.size<s;){const a=this._messageQueue.shift();e(this._handleMessage(a))}}_handleChannelNotifyQueue(e,t,s,i,n){if(!this._getRemoteChannelsFinished){let a=0;for(;this._messageQueue.length===0&&a<this._converNtfQueue.length&&Date.now()-n<i&&t.size<s;)a+=1;return}for(;this._messageQueue.length===0&&this._converNtfQueue.length&&Date.now()-n<i&&t.size<s;){const a=this._converNtfQueue.shift();e(this._handleChannelNtf(a))}}async getMoreChannelList(e){let t=e?this._channelList.findIndex(n=>n.channelIdentifier.isEqualTo(e.channelIdentifier)):-1;t===-1?t=0:t=t+1;const s=t+30,i=this._channelList.slice(t,s);return{hasMore:this._channelList.length>s||!this._getRemoteChannelsFinished,code:I.SUCCESS,list:i}}_alertChatFailure(e){const t=e===g2?"alert.imlib.failed.network":"alert.imlib.failed.generic";this.ctx.alert(t,e)}async deleteChannel(e){const t=pe(e);if(!t)return;const{code:s,isOk:i}=await t.delete();if(!i){this._alertChatFailure(s);return}const n=H(e),a=this._channelList.findIndex(l=>l.channelIdentifier.isEqualTo(e));if(a>-1){const[l]=this._channelList.splice(a,1);this._pool.delete(n),this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_DELETED,[l])),l===this._openedChannelModel&&this._setOpenedChannel(null,!1)}if(!this.ctx.store.getCommandSwitch(te.DELETE_MESSAGES_WHILE_DELETE_CHANNEL))return;this.ctx.message.removeCachedMessages(e);const o=vt()+5e3;t.deleteMessagesForMeByTimestamp({timestamp:o})}async openChannel(e,t=!0){if(!(e instanceof Sr)||e.channelType===T.OPEN||e.channelType===T.COMMUNITY)return B.fail(I.INVALID_CHANNEL);if(!this._getRemoteChannelsFinished||!this._pullOfflineMessageFinished)return B.fail(I.CHANNEL_LIST_NOT_READY);if(this._openedChannelModel&&this._openedChannelModel.channelIdentifier.isEqualTo(e))return B.ok();let s=this._channelList.findIndex(n=>n.channelIdentifier.isEqualTo(e)),i=this._channelList[s];if(!i){const n=pe(e);[i]=this._parseChannelList([n]),i.updateTime=vt(),this._recalculatePosition(new Set([i]))}return this._setOpenedChannel(i,t),B.ok()}_setOpenedChannel(e,t=!0){this._clearTypingStatus(),this._openedChannelModel=e,this.ctx.emit(new v(x.CHANNEL_SELECTED,{model:e,focusInput:t}),1)}async setNoDisturbLevel(e,t){const s=this._channelList.find(o=>o.channelIdentifier.isEqualTo(e));if(!s)return{code:I.GET_CHANNEL_FAILED};if(s.noDisturbLevel===t)return{code:I.SUCCESS};const i=pe(e),{isOk:n,code:a}=await i.setNoDisturbLevel(t);return n?(s.noDisturbLevel=t,this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[s])),{code:a}):(this._alertChatFailure(a),{code:a})}async setChannelPinned(e,t){t=!!t;const s=this._channelList.find(o=>o.channelIdentifier.isEqualTo(e));if(!s)return{code:I.GET_CHANNEL_FAILED};if(s.isPinned===t)return{code:I.SUCCESS};const i=pe(e),{isOk:n,code:a}=await(t?i.pin():i.unpin());return n?(s.isPinned=t,this._recalculatePosition(new Set([s])),{code:a}):(this._alertChatFailure(a),{code:a})}getCachedChannelByKey(e){return this._pool.get(e)}async clearUnreadCountByTimestamp(e){const t=this.getCachedChannelByKey(H(e)),s=pe(e);if(!s)return B.fail(I.GET_CHANNEL_FAILED);const i=await s.clearUnreadCount();return i.isOk?(t.unreadCount=0,t.mentionedType=Me.NONE,this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_CHANGE,[t])),B.ok()):i.wipe()}async handleChannelDraft(e,t){if(!e)return;const s=pe(e);if(!s)return;const{data:i}=await s.reload();if((i==null?void 0:i.draft)===t)return;const n=H(e);let a=this._pool.get(n);if(t){const{isOk:l}=await s.saveDraft(t);if(!l||!a)return;a.draft=t,a.updateTime=vt();const{current:c}=this._addToChannelList(a);this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_ORDER_CHANGE,[{order:c,model:a}]));return}if(await s.clearDraft(),!a)return;a.draft="",a.latestMessage&&(a.updateTime=a.latestMessage.sentTime);const{current:o}=this._addToChannelList(a);this.ctx.dispatchEvent(new v(E.CHANNELS_ITEM_ORDER_CHANGE,[{order:o,model:a}]))}sendTypingStatus(e=C.TEXT){if(!this._openedChannelModel||this._openedChannelModel.channelType!==T.DIRECT||this._typingTime)return;this._typingTime=setTimeout(()=>{this._typingTime=null},5e3);const t=pe(this._openedChannelModel.channelIdentifier);t&&t.sendTypingStatus(e)}_clearTypingStatus(){this._typingTime&&(clearTimeout(this._typingTime),this._typingTime=null)}}st=new WeakMap;const vr={radius:20,portraitSize:"large",topBackgroundColor:15725823,hoverBackgroundColor:15988218,activeBackgroundColor:13820414};class f2 extends ye{constructor(e){super(e),h(this,"channelsItemConfig",{}),this.setChannelsItemConfig(vr)}_onInit(){}_onInitUserCache(){}_onDestroyUserCache(){}destroy(){this.setChannelsItemConfig(vr)}cloneChannelsItemConfig(){return{...this.channelsItemConfig}}setChannelsItemConfig(e){this.channelsItemConfig={...this.channelsItemConfig,...e}}}const br=(r,e)=>typeof r=="number"&&Number.isFinite(r)&&r>0?r:e;class E2 extends Ur{constructor(e,t,s,i){super(),h(this,"store"),h(this,"channelStore",null),h(this,"i18n"),h(this,"appData"),h(this,"message"),h(this,"channelModule"),h(this,"channelItem"),h(this,"input"),h(this,"bubble"),h(this,"audioPlayer"),h(this,"channelsMenu"),h(this,"msgMenu"),h(this,"speechToTextStore"),h(this,"_originUserId",""),h(this,"isReadReceiptV5",!0),h(this,"_status",q.DISCONNECTED),h(this,"isElectronRuntime",!1),h(this,"modalContainerId",""),h(this,"allowedToRecallTime"),h(this,"allowedToReEditTime"),this.context=e,this.logger=t,this._emittor=s,this.modalContainerId=i.modalContainerId||"",this.allowedToRecallTime=br(i.allowedToRecallTime,120),this.allowedToReEditTime=br(i.allowedToReEditTime,60),this.store=new Lo(t),this.i18n=new hh(this),this.audioPlayer=new u2(this),this.appData=new ah(this,i.hooks),this.message=new h2(this),this.channelModule=new m2(this),this.channelItem=new f2(this),this.input=new _d(this),this.bubble=new Bd(this),this.channelsMenu=new d2(this),this.msgMenu=new Vd(this),this.speechToTextStore=new p2(t,this),this.msgMenu.setSpeechToTextStore(this.speechToTextStore),i.language&&this.i18n.setLanguage(i.language);const n=this;X.addConnectionStatusHandler("ui-context-connection-status-handler",new Ka({onConnectionStatusChanged(a){switch(a.status){case q.CONNECTING:n._onConnecting();break;case q.DISCONNECTED:n._onDisconnected(a.code);break;case q.SUSPENDED:n._onSuspend(a.code);break;case q.CONNECTED:n._onConnected();break}}}))}get userId(){return this._originUserId}get isMessageReactionEnabled(){return this.store.getCommandSwitch(te.MESSAGE_REACTION_ENABLED)}get isShowMessageReactUsersEnabled(){return this.store.getCommandSwitch(te.SHOW_MESSAGE_REACT_USERS)}get status(){return this._status}_onConnecting(){this._status=q.CONNECTING,this.dispatchEvent(new jt(q.CONNECTING))}_onDisconnected(e){this._status=q.DISCONNECTED,this.dispatchEvent(new jt(q.DISCONNECTED,e))}_onSuspend(e){this._status=q.SUSPENDED,this.dispatchEvent(new jt(q.SUSPENDED,e))}_onConnected(){this._status=q.CONNECTED;const e=X.getCurrentUserId();if(this._originUserId===e){this.dispatchEvent(new jt(q.CONNECTED));return}this._originUserId&&this._originUserId!==e&&(this._originUserId=e,this.dispatchEvent(new v(E.DESTROY_USER_CACHE),!1)),this._originUserId=e,this.dispatchEvent(new v(E.INIT_USER_CACHE),!1),this.dispatchEvent(new jt(q.CONNECTED)),this.channelStore=new Po(window,this.getAppkey(),this.userId)}destroy(){X.removeConnectionStatusHandler("ui-context-connection-status-handler"),this.audioPlayer.destroy(),this.i18n.destroy(),this.appData.destroy(),this.message.destroy(),this.channelModule.destroy(),this.input.destroy(),this.bubble.destroy(),this.channelsMenu.destroy(),this.msgMenu.destroy(),this.speechToTextStore.destroy(),this._originUserId=""}alert(e,...t){this.emit(new v(x.ALERT_EVENT,this.i18n.format(e,...t)))}confirm(e,...t){const s=new v(x.CONFIRM_EVENT,this.i18n.format(e,...t));return this.emit(s),s.awaitResult()}emit(e,t=0){const s=e.clone();this._emittor.dispatchEvent(s,!1),!(t===2||t===0&&s.isDefaultPrevented())&&this.dispatchEvent(e)}getAppkey(){return this.context.getAppkey()}}class _2{constructor(e){h(this,"_customMessageComponents",{}),this.ctx=e,mh(e),i2(e)}registerDOMElements(){Object.entries(Mc).forEach(([e,t])=>{customElements.get(e)||customElements.define(e,t)}),Object.entries(this._customMessageComponents).forEach(([e,t])=>{customElements.get(e)||customElements.define(e,t)}),Object.entries(Jd).forEach(([e,t])=>{customElements.get(e)||customElements.define(e,t)})}registerCustomMessages(e){return X.registerCustomMessages(e),e.forEach(t=>{if(t.digest&&_n(t.messageType,t.digest),t.component){const{component:s}=t,i=`nc-c-${s.tagName}`;a2(t.messageType,i,s.disableDefaultBubblePadding),this._customMessageComponents[i]=s.elementClass}}),B.ok()}destroy(){Ga(),cs.value="zh_CN"}}var C2=Object.defineProperty,v2=Object.getOwnPropertyDescriptor,me=(r,e,t,s)=>{for(var i=v2(e,t),n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(e,t,i)||i);return i&&C2(e,t,i),i};function mt(r){return function(e,t,s){const i=s.value;s.value=function(...n){if(this._isReady){this._logger.error(r,`'${t}' must be called before 'ready'`);return}return i.apply(this,n)}}}function Ye(r){return function(e,t,s){const i=s.value;s.value=function(...n){if(!this._isReady){this._logger.error(r,`'${t}' must be called after 'ready'.`);return}return i.apply(this,n)}}}const ce=class Za extends Ur{constructor(e,t,s){super(),h(this,"_ctx"),h(this,"_uiModule"),h(this,"_isReady",!1),this.context=e,this._logger=t,this._ctx=new E2(this.context,t,this,s),this._uiModule=new _2(this._ctx),this.context.ondestroy=this._onIMDestroy.bind(this)}static initialize(e){return Wa({tag:"ChatUI",verify(t){return t.tag==="browser"&&typeof customElements<"u"},setup(t,s,i){const n=t.createLogger("ChatUI","IM");return i.logLevel&&n.setOutputLevel(i.logLevel),n.warn(w.A_INIT_O,"Commit: 9a996cc57db13542036d0f2840f8295cc288bb6d, Version: 26.5.0"),new Za(t,n,i)}},e)}_onIMDestroy(){this.destroy()}setCommandSwitch(e,t){this._ctx.store.setCommandSwitch(e,t)}getCommandSwitch(e){return this._ctx.store.getCommandSwitch(e)}setChannelBarSwitch(e){this._ctx.store.setChannelBarSwitch(e),this._ctx.dispatchEvent(new v(E.CHANNEL_BAR_SWITCH_CHANGE,e))}setChannelDetailBackSwitch(e){this._ctx.store.setChannelDetailBackSwitch(e),this._ctx.dispatchEvent(new v(E.CHANNEL_DETAIL_BACK_SWITCH_CHANGE,e))}setChannelBarTitle(e){this._ctx.store.setChannelBarTitle(e),this._ctx.dispatchEvent(new v(E.CHANNEL_BAR_TITLE_CHANGE,e))}registerCustomMessages(e){return this._isReady?B.fail(I.MUST_CALL_BEFORE_READY):this._uiModule.registerCustomMessages(e)}cloneLanguageEntries(e){return this._ctx.i18n.cloneLanguageEntries(e)}registerLanguagePack(e,t,s="ltr"){this._ctx.i18n.registerLanguagePack(e,t,s)}setLanguage(e){this._ctx.i18n.setLanguage(e)}getLanguage(){return this._ctx.i18n.getLanguage()}getSupportedLanguages(){return this._ctx.i18n.getSupportedLanguages()}setPushConfigHook(e){this._ctx.store.setPushConfigHook(e)}updateUserProfile(e){this._ctx.appData.updateUserProfile(e)}updateGroupProfile(e){this._ctx.appData.updateGroupProfile(e)}updateUserOnlineStatus(e,t){this._ctx.appData.updateUserOnlineStatus(e,t)}updateGroupMembers(e,t){this._ctx.appData.updateGroupMembers(e,t)}addGroupMembers(e,t){this._ctx.appData.addGroupMembers(e,t)}removeGroupMembers(e,t){this._ctx.appData.removeGroupMembers(e,t)}cloneChannelsMenu(){return this._ctx.channelsMenu.cloneChannelsMenu()}setChannelsMenu(e){this._ctx.channelsMenu.setChannelsMenu(e)}cloneMessageMenu(){return this._ctx.msgMenu.cloneMessageMenu()}setMessageMenu(e){this._ctx.msgMenu.setMessageMenu(e)}async openChannel(e,t=!0){return this._ctx.channelModule.openChannel(e,t)}deleteChannel(e){return this._ctx.channelModule.deleteChannel(e)}getOpenedChannel(){const e=this._ctx.channelModule.getOpenedChannelModel();return e?e.clone():null}setChannelPanelExtensions(e){this._ctx.store.setChannelPanelExtensions(e)}cloneInputMenu(){return this._ctx.input.cloneInputMenu()}setInputMenu(e){this._ctx.input.setInputMenu(e)}cloneMessageBubbleConfig(){return this._ctx.bubble.cloneMessageBubbleConfig()}setMessageBubbleConfig(e){this._ctx.bubble.setMessageBubbleConfig(e)}cloneChannelsItemConfig(){return this._ctx.channelItem.cloneChannelsItemConfig()}setChannelsItemConfig(e){this._ctx.channelItem.setChannelsItemConfig(e)}cloneImageEmojiLibraries(){return this._ctx.input.cloneImageEmojiLibraries()}setImageEmojiLibraries(e){this._ctx.input.setImageEmojiLibraries(e)}cloneChatEmojiLibrary(){return this._ctx.input.cloneChatEmojiLibrary()}setChatEmojiLibrary(e){this._ctx.input.setChatEmojiLibrary(e)}async sendMessage(e,t){return this._isReady?this._ctx.message.sendMessage(e,t):B.fail(I.CHATUI_NOT_READY)}async insertMessage(e){return this._isReady?this._ctx.message.insertMessage(e):B.fail(I.CHATUI_NOT_READY)}ready(){if(this._isReady){this._logger.warn(w.A_READY_O,"'ready()' has been called before.");return}this._logger.info(w.A_READY_O,"'ready()' has been called."),this._uiModule.registerDOMElements(),this._isReady=!0}ifReady(){return this._isReady}getCurrenUserId(){return this._ctx.userId}destroy(){this.removeAllEventListeners(),this._ctx.destroy(),this._uiModule.destroy()}};me([mt(w.A_SET_COMMAND_SWITCH_O)],ce.prototype,"setCommandSwitch");me([mt(w.A_REGISTER_LANGUAGE_PACK_O)],ce.prototype,"registerLanguagePack");me([Ye(w.A_UPDATE_USER_PROFILE_E)],ce.prototype,"updateUserProfile");me([Ye(w.A_UPDATE_GROUP_PROFILE_E)],ce.prototype,"updateGroupProfile");me([Ye(w.A_UPDATE_USER_ONLINE_STATE_E)],ce.prototype,"updateUserOnlineStatus");me([Ye(w.A_UPDATE_GROUP_MEMBERS_E)],ce.prototype,"updateGroupMembers");me([Ye(w.A_ADD_GROUP_MEMBERS_E)],ce.prototype,"addGroupMembers");me([Ye(w.A_REMOVE_GROUP_MEMBERS_E)],ce.prototype,"removeGroupMembers");me([Ye(w.A_OPEN_CHANNEL_E)],ce.prototype,"openChannel");me([Ye(w.A_DELETE_CHANNEL_E)],ce.prototype,"deleteChannel");me([mt(w.A_SET_CHANNEL_PANEL_EXTENSION_E)],ce.prototype,"setChannelPanelExtensions");me([mt(w.A_SET_INPUT_MENU_E)],ce.prototype,"setInputMenu");me([mt(w.A_SET_MESSAGE_BUBBLE_CFG_E)],ce.prototype,"setMessageBubbleConfig");me([mt(w.A_SET_CHANNELS_ITEM_CFG_E)],ce.prototype,"setChannelsItemConfig");me([mt(w.A_SET_CHAT_EMOJI_LIBRARY_E)],ce.prototype,"setChatEmojiLibrary");let R2=ce;ro.add("nexconnchatui","26.5.0");export{Ua as BubbleLayout,c2 as ChannelsMenuID,Oi as ChatUIChannelModel,te as ChatUICommand,T2 as ChatUIEmojiLibraryID,v as ChatUIEvent,x as ChatUIEvents,Me as ChatUIMentionedType,Q as ChatUIMessageEditStatus,Re as ChatUIMessageModel,Yt as InputMenumID,md as InputMenumPosition,Y as MessageMenuID,Ct as ModalForwardingType,R2 as NCChatUIApplication,we as ReferenceMessageStatus};
