function ug(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wo={},cg={get exports(){return wo},set exports(e){wo=e}},Fs={},$={},dg={get exports(){return $},set exports(e){$=e}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),fg=Symbol.for("react.portal"),pg=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),mg=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),xg=Symbol.for("react.suspense"),wg=Symbol.for("react.memo"),Sg=Symbol.for("react.lazy"),Zd=Symbol.iterator;function kg(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var eh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},th=Object.assign,nh={};function zi(e,t,n){this.props=e,this.context=t,this.refs=nh,this.updater=n||eh}zi.prototype.isReactComponent={};zi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rh(){}rh.prototype=zi.prototype;function Ic(e,t,n){this.props=e,this.context=t,this.refs=nh,this.updater=n||eh}var Dc=Ic.prototype=new rh;Dc.constructor=Ic;th(Dc,zi.prototype);Dc.isPureReactComponent=!0;var Wd=Array.isArray,ih=Object.prototype.hasOwnProperty,jc={current:null},oh={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ih.call(t,r)&&!oh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Jo,type:e,key:o,ref:a,props:i,_owner:jc.current}}function _g(e,t){return{$$typeof:Jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $c(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jo}function Eg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kd=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Eg(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Jo:case fg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Il(a,0):r,Wd(i)?(n="",e!=null&&(n=e.replace(Kd,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&($c(i)&&(i=_g(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Kd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Wd(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Il(o,s);a+=Da(o,t,n,l,i)}else if(l=kg(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Il(o,s++),a+=Da(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ha(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Cg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Tt={current:null},ja={transition:null},bg={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:ja,ReactCurrentOwner:jc};Te.Children={map:ha,forEach:function(e,t,n){ha(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ha(e,function(){t++}),t},toArray:function(e){return ha(e,function(t){return t})||[]},only:function(e){if(!$c(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Te.Component=zi;Te.Fragment=pg;Te.Profiler=mg;Te.PureComponent=Ic;Te.StrictMode=hg;Te.Suspense=xg;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bg;Te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=th({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=jc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ih.call(t,l)&&!oh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Jo,type:e.type,key:i,ref:o,props:r,_owner:a}};Te.createContext=function(e){return e={$$typeof:vg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gg,_context:e},e.Consumer=e};Te.createElement=ah;Te.createFactory=function(e){var t=ah.bind(null,e);return t.type=e,t};Te.createRef=function(){return{current:null}};Te.forwardRef=function(e){return{$$typeof:yg,render:e}};Te.isValidElement=$c;Te.lazy=function(e){return{$$typeof:Sg,_payload:{_status:-1,_result:e},_init:Cg}};Te.memo=function(e,t){return{$$typeof:wg,type:e,compare:t===void 0?null:t}};Te.startTransition=function(e){var t=ja.transition;ja.transition={};try{e()}finally{ja.transition=t}};Te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Te.useCallback=function(e,t){return Tt.current.useCallback(e,t)};Te.useContext=function(e){return Tt.current.useContext(e)};Te.useDebugValue=function(){};Te.useDeferredValue=function(e){return Tt.current.useDeferredValue(e)};Te.useEffect=function(e,t){return Tt.current.useEffect(e,t)};Te.useId=function(){return Tt.current.useId()};Te.useImperativeHandle=function(e,t,n){return Tt.current.useImperativeHandle(e,t,n)};Te.useInsertionEffect=function(e,t){return Tt.current.useInsertionEffect(e,t)};Te.useLayoutEffect=function(e,t){return Tt.current.useLayoutEffect(e,t)};Te.useMemo=function(e,t){return Tt.current.useMemo(e,t)};Te.useReducer=function(e,t,n){return Tt.current.useReducer(e,t,n)};Te.useRef=function(e){return Tt.current.useRef(e)};Te.useState=function(e){return Tt.current.useState(e)};Te.useSyncExternalStore=function(e,t,n){return Tt.current.useSyncExternalStore(e,t,n)};Te.useTransition=function(){return Tt.current.useTransition()};Te.version="18.2.0";(function(e){e.exports=Te})(dg);const Nt=Jp($),Su=ug({__proto__:null,default:Nt},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg=$,Tg=Symbol.for("react.element"),Rg=Symbol.for("react.fragment"),Og=Object.prototype.hasOwnProperty,Ag=Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ng={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Og.call(t,r)&&!Ng.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tg,type:e,key:o,ref:a,props:i,_owner:Ag.current}}Fs.Fragment=Rg;Fs.jsx=sh;Fs.jsxs=sh;(function(e){e.exports=Fs})(cg);const Yn=wo.Fragment,h=wo.jsx,V=wo.jsxs;var ku={},qa={},Ig={get exports(){return qa},set exports(e){qa=e}},Bt={},_u={},Dg={get exports(){return _u},set exports(e){_u=e}},lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(H,Q){var le=H.length;H.push(Q);e:for(;0<le;){var k=le-1>>>1,S=H[k];if(0<i(S,Q))H[k]=Q,H[le]=S,le=k;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Q=H[0],le=H.pop();if(le!==Q){H[0]=le;e:for(var k=0,S=H.length,y=S>>>1;k<y;){var T=2*(k+1)-1,F=H[T],_=T+1,K=H[_];if(0>i(F,le))_<S&&0>i(K,F)?(H[k]=K,H[_]=le,k=_):(H[k]=F,H[T]=le,k=T);else if(_<S&&0>i(K,le))H[k]=K,H[_]=le,k=_;else break e}}return Q}function i(H,Q){var le=H.sortIndex-Q.sortIndex;return le!==0?le:H.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,p=null,g=3,P=!1,C=!1,f=!1,O=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=H)r(u),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=n(u)}}function b(H){if(f=!1,v(H),!C)if(n(l)!==null)C=!0,Fe(A);else{var Q=n(u);Q!==null&&Ae(b,Q.startTime-H)}}function A(H,Q){C=!1,f&&(f=!1,m(W),W=-1),P=!0;var le=g;try{for(v(Q),p=n(l);p!==null&&(!(p.expirationTime>Q)||H&&!Re());){var k=p.callback;if(typeof k=="function"){p.callback=null,g=p.priorityLevel;var S=k(p.expirationTime<=Q);Q=e.unstable_now(),typeof S=="function"?p.callback=S:p===n(l)&&r(l),v(Q)}else r(l);p=n(l)}if(p!==null)var y=!0;else{var T=n(u);T!==null&&Ae(b,T.startTime-Q),y=!1}return y}finally{p=null,g=le,P=!1}}var U=!1,D=null,W=-1,ce=5,J=-1;function Re(){return!(e.unstable_now()-J<ce)}function ie(){if(D!==null){var H=e.unstable_now();J=H;var Q=!0;try{Q=D(!0,H)}finally{Q?oe():(U=!1,D=null)}}else U=!1}var oe;if(typeof c=="function")oe=function(){c(ie)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Se=ve.port2;ve.port1.onmessage=ie,oe=function(){Se.postMessage(null)}}else oe=function(){O(ie,0)};function Fe(H){D=H,U||(U=!0,oe())}function Ae(H,Q){W=O(function(){H(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){C||P||(C=!0,Fe(A))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(H){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var le=g;g=Q;try{return H()}finally{g=le}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=g;g=H;try{return Q()}finally{g=le}},e.unstable_scheduleCallback=function(H,Q,le){var k=e.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?k+le:k):le=k,H){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=le+S,H={id:d++,callback:Q,priorityLevel:H,startTime:le,expirationTime:S,sortIndex:-1},le>k?(H.sortIndex=le,t(u,H),n(l)===null&&H===n(u)&&(f?(m(W),W=-1):f=!0,Ae(b,le-k))):(H.sortIndex=S,t(l,H),C||P||(C=!0,Fe(A))),H},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(H){var Q=g;return function(){var le=g;g=Q;try{return H.apply(this,arguments)}finally{g=le}}}})(lh);(function(e){e.exports=lh})(Dg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=$,Ut=_u;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ch=new Set,So={};function Wr(e,t){bi(e,t),bi(e+"Capture",t)}function bi(e,t){for(So[e]=t,e=0;e<t.length;e++)ch.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,jg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},qd={};function $g(e){return Eu.call(qd,e)?!0:Eu.call(Qd,e)?!1:jg.test(e)?qd[e]=!0:(Qd[e]=!0,!1)}function Lg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zg(e,t,n,r){if(t===null||typeof t>"u"||Lg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ft[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ft[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ft[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ft[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ft[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ft[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ft[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ft[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ft[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lc=/[\-:]([a-z])/g;function zc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lc,zc);ft[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lc,zc);ft[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lc,zc);ft[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ft[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ft[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mc(e,t,n,r){var i=ft.hasOwnProperty(t)?ft[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zg(t,n,i,r)&&(n=null),r||i===null?$g(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vn=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),dh=Symbol.for("react.provider"),fh=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Pu=Symbol.for("react.suspense_list"),Bc=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),ph=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function Zi(e){return e===null||typeof e!="object"?null:(e=Yd&&e[Yd]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Object.assign,Dl;function io(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var jl=!1;function $l(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?io(e):""}function Mg(e){switch(e.tag){case 5:return io(e.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function Tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ni:return"Fragment";case ti:return"Portal";case Cu:return"Profiler";case Fc:return"StrictMode";case bu:return"Suspense";case Pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fh:return(e.displayName||"Context")+".Consumer";case dh:return(e._context.displayName||"Context")+".Provider";case Uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bc:return t=e.displayName||null,t!==null?t:Tu(e.type)||"Memo";case Qn:t=e._payload,e=e._init;try{return Tu(e(t))}catch{}}return null}function Fg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tu(t);case 8:return t===Fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ug(e){var t=hh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ga(e){e._valueTracker||(e._valueTracker=Ug(e))}function mh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ru(e,t){var n=t.checked;return qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gh(e,t){t=t.checked,t!=null&&Mc(e,"checked",t,!1)}function Ou(e,t){gh(e,t);var n=fr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Au(e,t.type,n):t.hasOwnProperty("defaultValue")&&Au(e,t.type,fr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Au(e,t,n){(t!=="number"||Ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oo=Array.isArray;function vi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(oo(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fr(n)}}function vh(e,t){var n=fr(t.value),r=fr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ef(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Iu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var va,xh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bg=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){Bg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function wh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function Sh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vg=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(e,t){if(t){if(Vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function ju(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lu=null,yi=null,xi=null;function tf(e){if(e=na(e)){if(typeof Lu!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Zs(t),Lu(e.stateNode,e.type,t))}}function kh(e){yi?xi?xi.push(e):xi=[e]:yi=e}function _h(){if(yi){var e=yi,t=xi;if(xi=yi=null,tf(e),t)for(e=0;e<t.length;e++)tf(t[e])}}function Eh(e,t){return e(t)}function Ch(){}var Ll=!1;function bh(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return Eh(e,t,n)}finally{Ll=!1,(yi!==null||xi!==null)&&(Ch(),_h())}}function _o(e,t){var n=e.stateNode;if(n===null)return null;var r=Zs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var zu=!1;if(Ln)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{zu=!1}function Hg(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var uo=!1,Ga=null,Xa=!1,Mu=null,Zg={onError:function(e){uo=!0,Ga=e}};function Wg(e,t,n,r,i,o,a,s,l){uo=!1,Ga=null,Hg.apply(Zg,arguments)}function Kg(e,t,n,r,i,o,a,s,l){if(Wg.apply(this,arguments),uo){if(uo){var u=Ga;uo=!1,Ga=null}else throw Error(B(198));Xa||(Xa=!0,Mu=u)}}function Kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ph(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nf(e){if(Kr(e)!==e)throw Error(B(188))}function Qg(e){var t=e.alternate;if(!t){if(t=Kr(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return nf(i),e;if(o===r)return nf(i),t;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Th(e){return e=Qg(e),e!==null?Rh(e):null}function Rh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rh(e);if(t!==null)return t;e=e.sibling}return null}var Oh=Ut.unstable_scheduleCallback,rf=Ut.unstable_cancelCallback,qg=Ut.unstable_shouldYield,Yg=Ut.unstable_requestPaint,Je=Ut.unstable_now,Gg=Ut.unstable_getCurrentPriorityLevel,Hc=Ut.unstable_ImmediatePriority,Ah=Ut.unstable_UserBlockingPriority,Ja=Ut.unstable_NormalPriority,Xg=Ut.unstable_LowPriority,Nh=Ut.unstable_IdlePriority,Us=null,Sn=null;function Jg(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Us,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:nv,ev=Math.log,tv=Math.LN2;function nv(e){return e>>>=0,e===0?32:31-(ev(e)/tv|0)|0}var ya=64,xa=4194304;function ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function es(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ao(s):(o&=a,o!==0&&(r=ao(o)))}else a=n&~i,a!==0?r=ao(a):o!==0&&(r=ao(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function rv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-sn(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=rv(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Fu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ih(){var e=ya;return ya<<=1,!(ya&4194240)&&(ya=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Le=0;function Dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jh,Wc,$h,Lh,zh,Uu=!1,wa=[],rr=null,ir=null,or=null,Eo=new Map,Co=new Map,Gn=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function of(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(t.pointerId)}}function Ki(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=na(t),t!==null&&Wc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sv(e,t,n,r,i){switch(t){case"focusin":return rr=Ki(rr,e,t,n,r,i),!0;case"dragenter":return ir=Ki(ir,e,t,n,r,i),!0;case"mouseover":return or=Ki(or,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Eo.set(o,Ki(Eo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Co.set(o,Ki(Co.get(o)||null,e,t,n,r,i)),!0}return!1}function Mh(e){var t=Rr(e.target);if(t!==null){var n=Kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Ph(n),t!==null){e.blockedOn=t,zh(e.priority,function(){$h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$u=r,n.target.dispatchEvent(r),$u=null}else return t=na(n),t!==null&&Wc(t),e.blockedOn=n,!1;t.shift()}return!0}function af(e,t,n){$a(e)&&n.delete(t)}function lv(){Uu=!1,rr!==null&&$a(rr)&&(rr=null),ir!==null&&$a(ir)&&(ir=null),or!==null&&$a(or)&&(or=null),Eo.forEach(af),Co.forEach(af)}function Qi(e,t){e.blockedOn===t&&(e.blockedOn=null,Uu||(Uu=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,lv)))}function bo(e){function t(i){return Qi(i,e)}if(0<wa.length){Qi(wa[0],e);for(var n=1;n<wa.length;n++){var r=wa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&Qi(rr,e),ir!==null&&Qi(ir,e),or!==null&&Qi(or,e),Eo.forEach(t),Co.forEach(t),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Mh(n),n.blockedOn===null&&Gn.shift()}var wi=Vn.ReactCurrentBatchConfig,ts=!0;function uv(e,t,n,r){var i=Le,o=wi.transition;wi.transition=null;try{Le=1,Kc(e,t,n,r)}finally{Le=i,wi.transition=o}}function cv(e,t,n,r){var i=Le,o=wi.transition;wi.transition=null;try{Le=4,Kc(e,t,n,r)}finally{Le=i,wi.transition=o}}function Kc(e,t,n,r){if(ts){var i=Bu(e,t,n,r);if(i===null)Ql(e,t,r,ns,n),of(e,r);else if(sv(i,e,t,n,r))r.stopPropagation();else if(of(e,r),t&4&&-1<av.indexOf(e)){for(;i!==null;){var o=na(i);if(o!==null&&jh(o),o=Bu(e,t,n,r),o===null&&Ql(e,t,r,ns,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var ns=null;function Bu(e,t,n,r){if(ns=null,e=Vc(r),e=Rr(e),e!==null)if(t=Kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ph(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ns=e,null}function Fh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gg()){case Hc:return 1;case Ah:return 4;case Ja:case Xg:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var er=null,Qc=null,La=null;function Uh(){if(La)return La;var e,t=Qc,n=t.length,r,i="value"in er?er.value:er.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return La=i.slice(e,1<r?1-r:void 0)}function za(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sa(){return!0}function sf(){return!1}function Vt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sa:sf,this.isPropagationStopped=sf,this}return qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),t}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=Vt(Mi),ta=qe({},Mi,{view:0,detail:0}),dv=Vt(ta),Ml,Fl,qi,Bs=qe({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Ml=e.screenX-qi.screenX,Fl=e.screenY-qi.screenY):Fl=Ml=0,qi=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),lf=Vt(Bs),fv=qe({},Bs,{dataTransfer:0}),pv=Vt(fv),hv=qe({},ta,{relatedTarget:0}),Ul=Vt(hv),mv=qe({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Vt(mv),vv=qe({},Mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=Vt(vv),xv=qe({},Mi,{data:0}),uf=Vt(xv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kv[e])?!!t[e]:!1}function Yc(){return _v}var Ev=qe({},ta,{key:function(e){if(e.key){var t=wv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=za(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?za(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?za(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=Vt(Ev),bv=qe({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=Vt(bv),Pv=qe({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Tv=Vt(Pv),Rv=qe({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=Vt(Rv),Av=qe({},Bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Vt(Av),Iv=[9,13,27,32],Gc=Ln&&"CompositionEvent"in window,co=null;Ln&&"documentMode"in document&&(co=document.documentMode);var Dv=Ln&&"TextEvent"in window&&!co,Bh=Ln&&(!Gc||co&&8<co&&11>=co),df=String.fromCharCode(32),ff=!1;function Vh(e,t){switch(e){case"keyup":return Iv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function jv(e,t){switch(e){case"compositionend":return Hh(t);case"keypress":return t.which!==32?null:(ff=!0,df);case"textInput":return e=t.data,e===df&&ff?null:e;default:return null}}function $v(e,t){if(ri)return e==="compositionend"||!Gc&&Vh(e,t)?(e=Uh(),La=Qc=er=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bh&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function Zh(e,t,n,r){kh(r),t=rs(t,"onChange"),0<t.length&&(n=new qc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fo=null,Po=null;function zv(e){nm(e,0)}function Vs(e){var t=ai(e);if(mh(t))return e}function Mv(e,t){if(e==="change")return t}var Wh=!1;if(Ln){var Bl;if(Ln){var Vl="oninput"in document;if(!Vl){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),Vl=typeof hf.oninput=="function"}Bl=Vl}else Bl=!1;Wh=Bl&&(!document.documentMode||9<document.documentMode)}function mf(){fo&&(fo.detachEvent("onpropertychange",Kh),Po=fo=null)}function Kh(e){if(e.propertyName==="value"&&Vs(Po)){var t=[];Zh(t,Po,e,Vc(e)),bh(zv,t)}}function Fv(e,t,n){e==="focusin"?(mf(),fo=t,Po=n,fo.attachEvent("onpropertychange",Kh)):e==="focusout"&&mf()}function Uv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vs(Po)}function Bv(e,t){if(e==="click")return Vs(t)}function Vv(e,t){if(e==="input"||e==="change")return Vs(t)}function Hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:Hv;function To(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(t,i)||!dn(e[i],t[i]))return!1}return!0}function gf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vf(e,t){var n=gf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gf(n)}}function Qh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qh(){for(var e=window,t=Ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ya(e.document)}return t}function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zv(e){var t=qh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qh(n.ownerDocument.documentElement,n)){if(r!==null&&Xc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vf(n,o);var a=vf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wv=Ln&&"documentMode"in document&&11>=document.documentMode,ii=null,Vu=null,po=null,Hu=!1;function yf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hu||ii==null||ii!==Ya(r)||(r=ii,"selectionStart"in r&&Xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&To(po,r)||(po=r,r=rs(Vu,"onSelect"),0<r.length&&(t=new qc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oi={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Hl={},Yh={};Ln&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Hs(e){if(Hl[e])return Hl[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yh)return Hl[e]=t[n];return e}var Gh=Hs("animationend"),Xh=Hs("animationiteration"),Jh=Hs("animationstart"),em=Hs("transitionend"),tm=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){tm.set(e,t),Wr(t,[e])}for(var Zl=0;Zl<xf.length;Zl++){var Wl=xf[Zl],Kv=Wl.toLowerCase(),Qv=Wl[0].toUpperCase()+Wl.slice(1);yr(Kv,"on"+Qv)}yr(Gh,"onAnimationEnd");yr(Xh,"onAnimationIteration");yr(Jh,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(em,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function wf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kg(r,t,void 0,e),e.currentTarget=null}function nm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;wf(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;wf(i,s,u),o=l}}}if(Xa)throw e=Mu,Xa=!1,Mu=null,e}function Be(e,t){var n=t[qu];n===void 0&&(n=t[qu]=new Set);var r=e+"__bubble";n.has(r)||(rm(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),rm(n,e,r,t)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Ro(e){if(!e[_a]){e[_a]=!0,ch.forEach(function(n){n!=="selectionchange"&&(qv.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_a]||(t[_a]=!0,Kl("selectionchange",!1,t))}}function rm(e,t,n,r){switch(Fh(t)){case 1:var i=uv;break;case 4:i=cv;break;default:i=Kc}n=i.bind(null,t,n,e),i=void 0,!zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Rr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}bh(function(){var u=o,d=Vc(n),p=[];e:{var g=tm.get(e);if(g!==void 0){var P=qc,C=e;switch(e){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":P=Cv;break;case"focusin":C="focus",P=Ul;break;case"focusout":C="blur",P=Ul;break;case"beforeblur":case"afterblur":P=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Tv;break;case Gh:case Xh:case Jh:P=gv;break;case em:P=Ov;break;case"scroll":P=dv;break;case"wheel":P=Nv;break;case"copy":case"cut":case"paste":P=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=cf}var f=(t&4)!==0,O=!f&&e==="scroll",m=f?g!==null?g+"Capture":null:g;f=[];for(var c=u,v;c!==null;){v=c;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,m!==null&&(b=_o(c,m),b!=null&&f.push(Oo(c,b,v)))),O)break;c=c.return}0<f.length&&(g=new P(g,C,null,n,d),p.push({event:g,listeners:f}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",g&&n!==$u&&(C=n.relatedTarget||n.fromElement)&&(Rr(C)||C[zn]))break e;if((P||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,P?(C=n.relatedTarget||n.toElement,P=u,C=C?Rr(C):null,C!==null&&(O=Kr(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(P=null,C=u),P!==C)){if(f=lf,b="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(f=cf,b="onPointerLeave",m="onPointerEnter",c="pointer"),O=P==null?g:ai(P),v=C==null?g:ai(C),g=new f(b,c+"leave",P,n,d),g.target=O,g.relatedTarget=v,b=null,Rr(d)===u&&(f=new f(m,c+"enter",C,n,d),f.target=v,f.relatedTarget=O,b=f),O=b,P&&C)t:{for(f=P,m=C,c=0,v=f;v;v=Xr(v))c++;for(v=0,b=m;b;b=Xr(b))v++;for(;0<c-v;)f=Xr(f),c--;for(;0<v-c;)m=Xr(m),v--;for(;c--;){if(f===m||m!==null&&f===m.alternate)break t;f=Xr(f),m=Xr(m)}f=null}else f=null;P!==null&&Sf(p,g,P,f,!1),C!==null&&O!==null&&Sf(p,O,C,f,!0)}}e:{if(g=u?ai(u):window,P=g.nodeName&&g.nodeName.toLowerCase(),P==="select"||P==="input"&&g.type==="file")var A=Mv;else if(pf(g))if(Wh)A=Vv;else{A=Uv;var U=Fv}else(P=g.nodeName)&&P.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=Bv);if(A&&(A=A(e,u))){Zh(p,A,n,d);break e}U&&U(e,g,u),e==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Au(g,"number",g.value)}switch(U=u?ai(u):window,e){case"focusin":(pf(U)||U.contentEditable==="true")&&(ii=U,Vu=u,po=null);break;case"focusout":po=Vu=ii=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,yf(p,n,d);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":yf(p,n,d)}var D;if(Gc)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else ri?Vh(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(Bh&&n.locale!=="ko"&&(ri||W!=="onCompositionStart"?W==="onCompositionEnd"&&ri&&(D=Uh()):(er=d,Qc="value"in er?er.value:er.textContent,ri=!0)),U=rs(u,W),0<U.length&&(W=new uf(W,e,null,n,d),p.push({event:W,listeners:U}),D?W.data=D:(D=Hh(n),D!==null&&(W.data=D)))),(D=Dv?jv(e,n):$v(e,n))&&(u=rs(u,"onBeforeInput"),0<u.length&&(d=new uf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=D))}nm(p,t)})}function Oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_o(e,n),o!=null&&r.unshift(Oo(e,o,i)),o=_o(e,t),o!=null&&r.push(Oo(e,o,i))),e=e.return}return r}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=_o(n,o),l!=null&&a.unshift(Oo(n,l,s))):i||(l=_o(n,o),l!=null&&a.push(Oo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Yv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(Yv,`
`).replace(Gv,"")}function Ea(e,t,n){if(t=kf(t),kf(e)!==t&&n)throw Error(B(425))}function is(){}var Zu=null,Wu=null;function Ku(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(ey)}:Qu;function ey(e){setTimeout(function(){throw e})}function ql(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bo(t)}function ar(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),yn="__reactFiber$"+Fi,Ao="__reactProps$"+Fi,zn="__reactContainer$"+Fi,qu="__reactEvents$"+Fi,ty="__reactListeners$"+Fi,ny="__reactHandles$"+Fi;function Rr(e){var t=e[yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zn]||n[yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ef(e);e!==null;){if(n=e[yn])return n;e=Ef(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[yn]||e[zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ai(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Zs(e){return e[Ao]||null}var Yu=[],si=-1;function xr(e){return{current:e}}function He(e){0>si||(e.current=Yu[si],Yu[si]=null,si--)}function Ue(e,t){si++,Yu[si]=e.current,e.current=t}var pr={},wt=xr(pr),Dt=xr(!1),Lr=pr;function Pi(e,t){var n=e.type.contextTypes;if(!n)return pr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jt(e){return e=e.childContextTypes,e!=null}function os(){He(Dt),He(wt)}function Cf(e,t,n){if(wt.current!==pr)throw Error(B(168));Ue(wt,t),Ue(Dt,n)}function im(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,Fg(e)||"Unknown",i));return qe({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pr,Lr=wt.current,Ue(wt,e),Ue(Dt,Dt.current),!0}function bf(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=im(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,He(Dt),He(wt),Ue(wt,e)):He(Dt),Ue(Dt,n)}var On=null,Ws=!1,Yl=!1;function om(e){On===null?On=[e]:On.push(e)}function ry(e){Ws=!0,om(e)}function wr(){if(!Yl&&On!==null){Yl=!0;var e=0,t=Le;try{var n=On;for(Le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}On=null,Ws=!1}catch(i){throw On!==null&&(On=On.slice(e+1)),Oh(Hc,wr),i}finally{Le=t,Yl=!1}}return null}var li=[],ui=0,ss=null,ls=0,Wt=[],Kt=0,zr=null,An=1,Nn="";function br(e,t){li[ui++]=ls,li[ui++]=ss,ss=e,ls=t}function am(e,t,n){Wt[Kt++]=An,Wt[Kt++]=Nn,Wt[Kt++]=zr,zr=e;var r=An;e=Nn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var o=32-sn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-sn(t)+i|n<<i|r,Nn=o+e}else An=1<<o|n<<i|r,Nn=e}function Jc(e){e.return!==null&&(br(e,1),am(e,1,0))}function ed(e){for(;e===ss;)ss=li[--ui],li[ui]=null,ls=li[--ui],li[ui]=null;for(;e===zr;)zr=Wt[--Kt],Wt[Kt]=null,Nn=Wt[--Kt],Wt[Kt]=null,An=Wt[--Kt],Wt[Kt]=null}var Ft=null,Mt=null,Ze=!1,rn=null;function sm(e,t){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Mt=ar(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:An,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Mt=null,!0):!1;default:return!1}}function Gu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xu(e){if(Ze){var t=Mt;if(t){var n=t;if(!Pf(e,t)){if(Gu(e))throw Error(B(418));t=ar(n.nextSibling);var r=Ft;t&&Pf(e,t)?sm(r,n):(e.flags=e.flags&-4097|2,Ze=!1,Ft=e)}}else{if(Gu(e))throw Error(B(418));e.flags=e.flags&-4097|2,Ze=!1,Ft=e}}}function Tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function Ca(e){if(e!==Ft)return!1;if(!Ze)return Tf(e),Ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ku(e.type,e.memoizedProps)),t&&(t=Mt)){if(Gu(e))throw lm(),Error(B(418));for(;t;)sm(e,t),t=ar(t.nextSibling)}if(Tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=ar(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=Ft?ar(e.stateNode.nextSibling):null;return!0}function lm(){for(var e=Mt;e;)e=ar(e.nextSibling)}function Ti(){Mt=Ft=null,Ze=!1}function td(e){rn===null?rn=[e]:rn.push(e)}var iy=Vn.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var us=xr(null),cs=null,ci=null,nd=null;function rd(){nd=ci=cs=null}function id(e){var t=us.current;He(us),e._currentValue=t}function Ju(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t){cs=e,nd=ci=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(nd!==e)if(e={context:e,memoizedValue:t,next:null},ci===null){if(cs===null)throw Error(B(308));ci=e,cs.dependencies={lanes:0,firstContext:e}}else ci=ci.next=e;return t}var Or=null;function od(e){Or===null?Or=[e]:Or.push(e)}function um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,od(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mn(e,r)}function Mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mn(e,n)}return i=r.interleaved,i===null?(t.next=t,od(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mn(e,n)}function Ma(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zc(e,n)}}function Rf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ds(e,t,n,r){var i=e.updateQueue;qn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,d=u=l=null,s=o;do{var g=s.lane,P=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:P,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,f=s;switch(g=t,P=n,f.tag){case 1:if(C=f.payload,typeof C=="function"){p=C.call(P,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=f.payload,g=typeof C=="function"?C.call(P,p,g):C,g==null)break e;p=qe({},p,g);break e;case 2:qn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else P={eventTime:P,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=P,l=p):d=d.next=P,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fr|=a,e.lanes=a,e.memoizedState=p}}function Of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var dm=new uh.Component().refs;function ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={isMounted:function(e){return(e=e._reactInternals)?Kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=bt(),i=ur(e),o=Dn(r,i);o.payload=t,n!=null&&(o.callback=n),t=sr(e,o,i),t!==null&&(ln(t,e,i,r),Ma(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=bt(),i=ur(e),o=Dn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sr(e,o,i),t!==null&&(ln(t,e,i,r),Ma(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bt(),r=ur(e),i=Dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,r),t!==null&&(ln(t,e,r,n),Ma(t,e,r))}};function Af(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!To(n,r)||!To(i,o):!0}function fm(e,t,n){var r=!1,i=pr,o=t.contextType;return typeof o=="object"&&o!==null?o=Yt(o):(i=jt(t)?Lr:wt.current,r=t.contextTypes,o=(r=r!=null)?Pi(e,i):pr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ks,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function tc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=dm,ad(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Yt(o):(o=jt(t)?Lr:wt.current,i.context=Pi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ec(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ks.enqueueReplaceState(i,i.state,null),ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===dm&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function ba(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function If(e){var t=e._init;return t(e._payload)}function pm(e){function t(m,c){if(e){var v=m.deletions;v===null?(m.deletions=[c],m.flags|=16):v.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=cr(m,c),m.index=0,m.sibling=null,m}function o(m,c,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<c?(m.flags|=2,c):v):(m.flags|=2,c)):(m.flags|=1048576,c)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,v,b){return c===null||c.tag!==6?(c=ru(v,m.mode,b),c.return=m,c):(c=i(c,v),c.return=m,c)}function l(m,c,v,b){var A=v.type;return A===ni?d(m,c,v.props.children,b,v.key):c!==null&&(c.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qn&&If(A)===c.type)?(b=i(c,v.props),b.ref=Yi(m,c,v),b.return=m,b):(b=Za(v.type,v.key,v.props,null,m.mode,b),b.ref=Yi(m,c,v),b.return=m,b)}function u(m,c,v,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==v.containerInfo||c.stateNode.implementation!==v.implementation?(c=iu(v,m.mode,b),c.return=m,c):(c=i(c,v.children||[]),c.return=m,c)}function d(m,c,v,b,A){return c===null||c.tag!==7?(c=jr(v,m.mode,b,A),c.return=m,c):(c=i(c,v),c.return=m,c)}function p(m,c,v){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ru(""+c,m.mode,v),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ma:return v=Za(c.type,c.key,c.props,null,m.mode,v),v.ref=Yi(m,null,c),v.return=m,v;case ti:return c=iu(c,m.mode,v),c.return=m,c;case Qn:var b=c._init;return p(m,b(c._payload),v)}if(oo(c)||Zi(c))return c=jr(c,m.mode,v,null),c.return=m,c;ba(m,c)}return null}function g(m,c,v,b){var A=c!==null?c.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:s(m,c,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:return v.key===A?l(m,c,v,b):null;case ti:return v.key===A?u(m,c,v,b):null;case Qn:return A=v._init,g(m,c,A(v._payload),b)}if(oo(v)||Zi(v))return A!==null?null:d(m,c,v,b,null);ba(m,v)}return null}function P(m,c,v,b,A){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(v)||null,s(c,m,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ma:return m=m.get(b.key===null?v:b.key)||null,l(c,m,b,A);case ti:return m=m.get(b.key===null?v:b.key)||null,u(c,m,b,A);case Qn:var U=b._init;return P(m,c,v,U(b._payload),A)}if(oo(b)||Zi(b))return m=m.get(v)||null,d(c,m,b,A,null);ba(c,b)}return null}function C(m,c,v,b){for(var A=null,U=null,D=c,W=c=0,ce=null;D!==null&&W<v.length;W++){D.index>W?(ce=D,D=null):ce=D.sibling;var J=g(m,D,v[W],b);if(J===null){D===null&&(D=ce);break}e&&D&&J.alternate===null&&t(m,D),c=o(J,c,W),U===null?A=J:U.sibling=J,U=J,D=ce}if(W===v.length)return n(m,D),Ze&&br(m,W),A;if(D===null){for(;W<v.length;W++)D=p(m,v[W],b),D!==null&&(c=o(D,c,W),U===null?A=D:U.sibling=D,U=D);return Ze&&br(m,W),A}for(D=r(m,D);W<v.length;W++)ce=P(D,m,W,v[W],b),ce!==null&&(e&&ce.alternate!==null&&D.delete(ce.key===null?W:ce.key),c=o(ce,c,W),U===null?A=ce:U.sibling=ce,U=ce);return e&&D.forEach(function(Re){return t(m,Re)}),Ze&&br(m,W),A}function f(m,c,v,b){var A=Zi(v);if(typeof A!="function")throw Error(B(150));if(v=A.call(v),v==null)throw Error(B(151));for(var U=A=null,D=c,W=c=0,ce=null,J=v.next();D!==null&&!J.done;W++,J=v.next()){D.index>W?(ce=D,D=null):ce=D.sibling;var Re=g(m,D,J.value,b);if(Re===null){D===null&&(D=ce);break}e&&D&&Re.alternate===null&&t(m,D),c=o(Re,c,W),U===null?A=Re:U.sibling=Re,U=Re,D=ce}if(J.done)return n(m,D),Ze&&br(m,W),A;if(D===null){for(;!J.done;W++,J=v.next())J=p(m,J.value,b),J!==null&&(c=o(J,c,W),U===null?A=J:U.sibling=J,U=J);return Ze&&br(m,W),A}for(D=r(m,D);!J.done;W++,J=v.next())J=P(D,m,W,J.value,b),J!==null&&(e&&J.alternate!==null&&D.delete(J.key===null?W:J.key),c=o(J,c,W),U===null?A=J:U.sibling=J,U=J);return e&&D.forEach(function(ie){return t(m,ie)}),Ze&&br(m,W),A}function O(m,c,v,b){if(typeof v=="object"&&v!==null&&v.type===ni&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:e:{for(var A=v.key,U=c;U!==null;){if(U.key===A){if(A=v.type,A===ni){if(U.tag===7){n(m,U.sibling),c=i(U,v.props.children),c.return=m,m=c;break e}}else if(U.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qn&&If(A)===U.type){n(m,U.sibling),c=i(U,v.props),c.ref=Yi(m,U,v),c.return=m,m=c;break e}n(m,U);break}else t(m,U);U=U.sibling}v.type===ni?(c=jr(v.props.children,m.mode,b,v.key),c.return=m,m=c):(b=Za(v.type,v.key,v.props,null,m.mode,b),b.ref=Yi(m,c,v),b.return=m,m=b)}return a(m);case ti:e:{for(U=v.key;c!==null;){if(c.key===U)if(c.tag===4&&c.stateNode.containerInfo===v.containerInfo&&c.stateNode.implementation===v.implementation){n(m,c.sibling),c=i(c,v.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=iu(v,m.mode,b),c.return=m,m=c}return a(m);case Qn:return U=v._init,O(m,c,U(v._payload),b)}if(oo(v))return C(m,c,v,b);if(Zi(v))return f(m,c,v,b);ba(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,v),c.return=m,m=c):(n(m,c),c=ru(v,m.mode,b),c.return=m,m=c),a(m)):n(m,c)}return O}var Ri=pm(!0),hm=pm(!1),ra={},kn=xr(ra),No=xr(ra),Io=xr(ra);function Ar(e){if(e===ra)throw Error(B(174));return e}function sd(e,t){switch(Ue(Io,t),Ue(No,e),Ue(kn,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Iu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Iu(t,e)}He(kn),Ue(kn,t)}function Oi(){He(kn),He(No),He(Io)}function mm(e){Ar(Io.current);var t=Ar(kn.current),n=Iu(t,e.type);t!==n&&(Ue(No,e),Ue(kn,n))}function ld(e){No.current===e&&(He(kn),He(No))}var Ke=xr(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function ud(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var Fa=Vn.ReactCurrentDispatcher,Xl=Vn.ReactCurrentBatchConfig,Mr=0,Qe=null,rt=null,at=null,ps=!1,ho=!1,Do=0,oy=0;function mt(){throw Error(B(321))}function cd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dn(e[n],t[n]))return!1;return!0}function dd(e,t,n,r,i,o){if(Mr=o,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fa.current=e===null||e.memoizedState===null?uy:cy,e=n(r,i),ho){o=0;do{if(ho=!1,Do=0,25<=o)throw Error(B(301));o+=1,at=rt=null,t.updateQueue=null,Fa.current=dy,e=n(r,i)}while(ho)}if(Fa.current=hs,t=rt!==null&&rt.next!==null,Mr=0,at=rt=Qe=null,ps=!1,t)throw Error(B(300));return e}function fd(){var e=Do!==0;return Do=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Qe.memoizedState=at=e:at=at.next=e,at}function Gt(){if(rt===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=rt.next;var t=at===null?Qe.memoizedState:at.next;if(t!==null)at=t,rt=e;else{if(e===null)throw Error(B(310));rt=e,e={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},at===null?Qe.memoizedState=at=e:at=at.next=e}return at}function jo(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Gt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,Qe.lanes|=d,Fr|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,dn(r,t.memoizedState)||(It=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Qe.lanes|=o,Fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function eu(e){var t=Gt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);dn(o,t.memoizedState)||(It=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gm(){}function vm(e,t){var n=Qe,r=Gt(),i=t(),o=!dn(r.memoizedState,i);if(o&&(r.memoizedState=i,It=!0),r=r.queue,pd(wm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,$o(9,xm.bind(null,n,r,i,t),void 0,null),st===null)throw Error(B(349));Mr&30||ym(n,t,i)}return i}function ym(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xm(e,t,n,r){t.value=n,t.getSnapshot=r,Sm(t)&&km(e)}function wm(e,t,n){return n(function(){Sm(t)&&km(e)})}function Sm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dn(e,n)}catch{return!0}}function km(e){var t=Mn(e,1);t!==null&&ln(t,e,1,-1)}function Df(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=e,e=e.dispatch=ly.bind(null,Qe,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _m(){return Gt().memoizedState}function Ua(e,t,n,r){var i=gn();Qe.flags|=e,i.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function Qs(e,t,n,r){var i=Gt();r=r===void 0?null:r;var o=void 0;if(rt!==null){var a=rt.memoizedState;if(o=a.destroy,r!==null&&cd(r,a.deps)){i.memoizedState=$o(t,n,o,r);return}}Qe.flags|=e,i.memoizedState=$o(1|t,n,o,r)}function jf(e,t){return Ua(8390656,8,e,t)}function pd(e,t){return Qs(2048,8,e,t)}function Em(e,t){return Qs(4,2,e,t)}function Cm(e,t){return Qs(4,4,e,t)}function bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pm(e,t,n){return n=n!=null?n.concat([e]):null,Qs(4,4,bm.bind(null,t,e),n)}function hd(){}function Tm(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Om(e,t,n){return Mr&21?(dn(n,t)||(n=Ih(),Qe.lanes|=n,Fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function ay(e,t){var n=Le;Le=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{Le=n,Xl.transition=r}}function Am(){return Gt().memoizedState}function sy(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nm(e))Im(t,n);else if(n=um(e,t,n,r),n!==null){var i=bt();ln(n,e,r,i),Dm(n,t,r)}}function ly(e,t,n){var r=ur(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nm(e))Im(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,dn(s,a)){var l=t.interleaved;l===null?(i.next=i,od(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=um(e,t,i,r),n!==null&&(i=bt(),ln(n,e,r,i),Dm(n,t,r))}}function Nm(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function Im(e,t){ho=ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zc(e,n)}}var hs={readContext:Yt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},uy={readContext:Yt,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:jf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ua(4194308,4,bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ua(4,2,e,t)},useMemo:function(e,t){var n=gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sy.bind(null,Qe,e),[r.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:Df,useDebugValue:hd,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Df(!1),t=e[0];return e=ay.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Qe,i=gn();if(Ze){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),st===null)throw Error(B(349));Mr&30||ym(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,jf(wm.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,xm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gn(),t=st.identifierPrefix;if(Ze){var n=Nn,r=An;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Do++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cy={readContext:Yt,useCallback:Tm,useContext:Yt,useEffect:pd,useImperativeHandle:Pm,useInsertionEffect:Em,useLayoutEffect:Cm,useMemo:Rm,useReducer:Jl,useRef:_m,useState:function(){return Jl(jo)},useDebugValue:hd,useDeferredValue:function(e){var t=Gt();return Om(t,rt.memoizedState,e)},useTransition:function(){var e=Jl(jo)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:gm,useSyncExternalStore:vm,useId:Am,unstable_isNewReconciler:!1},dy={readContext:Yt,useCallback:Tm,useContext:Yt,useEffect:pd,useImperativeHandle:Pm,useInsertionEffect:Em,useLayoutEffect:Cm,useMemo:Rm,useReducer:eu,useRef:_m,useState:function(){return eu(jo)},useDebugValue:hd,useDeferredValue:function(e){var t=Gt();return rt===null?t.memoizedState=e:Om(t,rt.memoizedState,e)},useTransition:function(){var e=eu(jo)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:gm,useSyncExternalStore:vm,useId:Am,unstable_isNewReconciler:!1};function Ai(e,t){try{var n="",r=t;do n+=Mg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function tu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function jm(e,t,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gs||(gs=!0,fc=r),nc(e,t)},n}function $m(e,t,n){n=Dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){nc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){nc(e,t),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function $f(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=by.bind(null,e,t,n),t.then(e,e))}function Lf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dn(-1,1),t.tag=2,sr(n,t,1))),n.lanes|=1),e)}var py=Vn.ReactCurrentOwner,It=!1;function Et(e,t,n,r){t.child=e===null?hm(t,null,n,r):Ri(t,e.child,n,r)}function Mf(e,t,n,r,i){n=n.render;var o=t.ref;return Si(t,i),r=dd(e,t,n,r,o,i),n=fd(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Ze&&n&&Jc(t),t.flags|=1,Et(e,t,r,i),t.child)}function Ff(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lm(e,t,o,r,i)):(e=Za(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(a,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=cr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(To(o,r)&&e.ref===t.ref)if(It=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return rc(e,t,n,r,i)}function zm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(fi,Lt),Lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(fi,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ue(fi,Lt),Lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ue(fi,Lt),Lt|=r;return Et(e,t,i,n),t.child}function Mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rc(e,t,n,r,i){var o=jt(n)?Lr:wt.current;return o=Pi(t,o),Si(t,i),n=dd(e,t,n,r,o,i),r=fd(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Ze&&r&&Jc(t),t.flags|=1,Et(e,t,n,i),t.child)}function Uf(e,t,n,r,i){if(jt(n)){var o=!0;as(t)}else o=!1;if(Si(t,i),t.stateNode===null)Ba(e,t),fm(t,n,r),tc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=jt(n)?Lr:wt.current,u=Pi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Nf(t,a,r,u),qn=!1;var g=t.memoizedState;a.state=g,ds(t,r,a,i),l=t.memoizedState,s!==r||g!==l||Dt.current||qn?(typeof d=="function"&&(ec(t,n,d,r),l=t.memoizedState),(s=qn||Af(t,n,s,r,g,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,cm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:tn(t.type,s),a.props=u,p=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=jt(n)?Lr:wt.current,l=Pi(t,l));var P=n.getDerivedStateFromProps;(d=typeof P=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||g!==l)&&Nf(t,a,r,l),qn=!1,g=t.memoizedState,a.state=g,ds(t,r,a,i);var C=t.memoizedState;s!==p||g!==C||Dt.current||qn?(typeof P=="function"&&(ec(t,n,P,r),C=t.memoizedState),(u=qn||Af(t,n,u,r,g,C,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,C,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,C,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),a.props=r,a.state=C,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ic(e,t,n,r,o,i)}function ic(e,t,n,r,i,o){Mm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&bf(t,n,!1),Fn(e,t,o);r=t.stateNode,py.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ri(t,e.child,null,o),t.child=Ri(t,null,s,o)):Et(e,t,s,o),t.memoizedState=r.state,i&&bf(t,n,!0),t.child}function Fm(e){var t=e.stateNode;t.pendingContext?Cf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cf(e,t.context,!1),sd(e,t.containerInfo)}function Bf(e,t,n,r,i){return Ti(),td(i),t.flags|=256,Et(e,t,n,r),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function Um(e,t,n){var r=t.pendingProps,i=Ke.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ue(Ke,i&1),e===null)return Xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Gs(a,r,0,null),e=jr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ac(n),t.memoizedState=oc,e):md(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return hy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=cr(s,o):(o=jr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ac(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=oc,r}return o=e.child,e=o.sibling,r=cr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function md(e,t){return t=Gs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pa(e,t,n,r){return r!==null&&td(r),Ri(t,e.child,null,n),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=tu(Error(B(422))),Pa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Gs({mode:"visible",children:r.children},i,0,null),o=jr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ri(t,e.child,null,a),t.child.memoizedState=ac(a),t.memoizedState=oc,o);if(!(t.mode&1))return Pa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(B(419)),r=tu(o,r,void 0),Pa(e,t,a,r)}if(s=(a&e.childLanes)!==0,It||s){if(r=st,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mn(e,i),ln(r,e,i,-1))}return Sd(),r=tu(Error(B(421))),Pa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Py.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Mt=ar(i.nextSibling),Ft=t,Ze=!0,rn=null,e!==null&&(Wt[Kt++]=An,Wt[Kt++]=Nn,Wt[Kt++]=zr,An=e.id,Nn=e.overflow,zr=t),t=md(t,r.children),t.flags|=4096,t)}function Vf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ju(e.return,t,n)}function nu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Et(e,t,r.children,n),r=Ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vf(e,n,t);else if(e.tag===19)Vf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ue(Ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nu(t,!0,n,null,o);break;case"together":nu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=cr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function my(e,t,n){switch(t.tag){case 3:Fm(t),Ti();break;case 5:mm(t);break;case 1:jt(t.type)&&as(t);break;case 4:sd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ue(us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Ke,Ke.current&1),t.flags|=128,null):n&t.child.childLanes?Um(e,t,n):(Ue(Ke,Ke.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);Ue(Ke,Ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue(Ke,Ke.current),r)break;return null;case 22:case 23:return t.lanes=0,zm(e,t,n)}return Fn(e,t,n)}var Vm,sc,Hm,Zm;Vm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sc=function(){};Hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ar(kn.current);var o=null;switch(n){case"input":i=Ru(e,i),r=Ru(e,r),o=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),o=[];break;case"textarea":i=Nu(e,i),r=Nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=is)}Du(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Be("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gi(e,t){if(!Ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function gt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gy(e,t,n){var r=t.pendingProps;switch(ed(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(t),null;case 1:return jt(t.type)&&os(),gt(t),null;case 3:return r=t.stateNode,Oi(),He(Dt),He(wt),ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&(mc(rn),rn=null))),sc(e,t),gt(t),null;case 5:ld(t);var i=Ar(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)Hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return gt(t),null}if(e=Ar(kn.current),Ca(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yn]=t,r[Ao]=o,e=(t.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(i=0;i<so.length;i++)Be(so[i],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Gd(r,o),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Be("invalid",r);break;case"textarea":Jd(r,o),Be("invalid",r)}Du(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,s,e),i=["children",""+s]):So.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Be("scroll",r)}switch(n){case"input":ga(r),Xd(r,o,!0);break;case"textarea":ga(r),ef(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=is)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[yn]=t,e[Ao]=r,Vm(e,t,!1,!1),t.stateNode=e;e:{switch(a=ju(n,r),n){case"dialog":Be("cancel",e),Be("close",e),i=r;break;case"iframe":case"object":case"embed":Be("load",e),i=r;break;case"video":case"audio":for(i=0;i<so.length;i++)Be(so[i],e);i=r;break;case"source":Be("error",e),i=r;break;case"img":case"image":case"link":Be("error",e),Be("load",e),i=r;break;case"details":Be("toggle",e),i=r;break;case"input":Gd(e,r),i=Ru(e,r),Be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),Be("invalid",e);break;case"textarea":Jd(e,r),i=Nu(e,r),Be("invalid",e);break;default:i=r}Du(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Sh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ko(e,l):typeof l=="number"&&ko(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(So.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Be("scroll",e):l!=null&&Mc(e,o,l,a))}switch(n){case"input":ga(e),Xd(e,r,!1);break;case"textarea":ga(e),ef(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vi(e,!!r.multiple,o,!1):r.defaultValue!=null&&vi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return gt(t),null;case 6:if(e&&t.stateNode!=null)Zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=Ar(Io.current),Ar(kn.current),Ca(t)){if(r=t.stateNode,n=t.memoizedProps,r[yn]=t,(o=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=t,t.stateNode=r}return gt(t),null;case 13:if(He(Ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ze&&Mt!==null&&t.mode&1&&!(t.flags&128))lm(),Ti(),t.flags|=98560,o=!1;else if(o=Ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[yn]=t}else Ti(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gt(t),o=!1}else rn!==null&&(mc(rn),rn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ke.current&1?it===0&&(it=3):Sd())),t.updateQueue!==null&&(t.flags|=4),gt(t),null);case 4:return Oi(),sc(e,t),e===null&&Ro(t.stateNode.containerInfo),gt(t),null;case 10:return id(t.type._context),gt(t),null;case 17:return jt(t.type)&&os(),gt(t),null;case 19:if(He(Ke),o=t.memoizedState,o===null)return gt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gi(o,!1);else{if(it!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fs(e),a!==null){for(t.flags|=128,Gi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue(Ke,Ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&Je()>Ni&&(t.flags|=128,r=!0,Gi(o,!1),t.lanes=4194304)}else{if(!r)if(e=fs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ze)return gt(t),null}else 2*Je()-o.renderingStartTime>Ni&&n!==1073741824&&(t.flags|=128,r=!0,Gi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,n=Ke.current,Ue(Ke,r?n&1|2:n&1),t):(gt(t),null);case 22:case 23:return wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Lt&1073741824&&(gt(t),t.subtreeFlags&6&&(t.flags|=8192)):gt(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function vy(e,t){switch(ed(t),t.tag){case 1:return jt(t.type)&&os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oi(),He(Dt),He(wt),ud(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ld(t),null;case 13:if(He(Ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ke),null;case 4:return Oi(),null;case 10:return id(t.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Ta=!1,xt=!1,yy=typeof WeakSet=="function"?WeakSet:Set,te=null;function di(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function lc(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var Hf=!1;function xy(e,t){if(Zu=ts,e=qh(),Xc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,p=e,g=null;t:for(;;){for(var P;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(P=p.firstChild)!==null;)g=p,p=P;for(;;){if(p===e)break t;if(g===n&&++u===i&&(s=a),g===o&&++d===r&&(l=a),(P=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=P}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:e,selectionRange:n},ts=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var f=C.memoizedProps,O=C.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?f:tn(t.type,f),O);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){Ye(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return C=Hf,Hf=!1,C}function mo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&lc(t,n,o)}i=i.next}while(i!==r)}}function qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wm(e){var t=e.alternate;t!==null&&(e.alternate=null,Wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yn],delete t[Ao],delete t[qu],delete t[ty],delete t[ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Km(e){return e.tag===5||e.tag===3||e.tag===4}function Zf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(r!==4&&(e=e.child,e!==null))for(cc(e,t,n),e=e.sibling;e!==null;)cc(e,t,n),e=e.sibling}function dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dc(e,t,n),e=e.sibling;e!==null;)dc(e,t,n),e=e.sibling}var ct=null,nn=!1;function Hn(e,t,n){for(n=n.child;n!==null;)Qm(e,t,n),n=n.sibling}function Qm(e,t,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Us,n)}catch{}switch(n.tag){case 5:xt||di(n,t);case 6:var r=ct,i=nn;ct=null,Hn(e,t,n),ct=r,nn=i,ct!==null&&(nn?(e=ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(nn?(e=ct,n=n.stateNode,e.nodeType===8?ql(e.parentNode,n):e.nodeType===1&&ql(e,n),bo(e)):ql(ct,n.stateNode));break;case 4:r=ct,i=nn,ct=n.stateNode.containerInfo,nn=!0,Hn(e,t,n),ct=r,nn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&lc(n,t,a),i=i.next}while(i!==r)}Hn(e,t,n);break;case 1:if(!xt&&(di(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ye(n,t,s)}Hn(e,t,n);break;case 21:Hn(e,t,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Hn(e,t,n),xt=r):Hn(e,t,n);break;default:Hn(e,t,n)}}function Wf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yy),t.forEach(function(r){var i=Ty.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ct=s.stateNode,nn=!1;break e;case 3:ct=s.stateNode.containerInfo,nn=!0;break e;case 4:ct=s.stateNode.containerInfo,nn=!0;break e}s=s.return}if(ct===null)throw Error(B(160));Qm(o,a,i),ct=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qm(t,e),t=t.sibling}function qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(en(t,e),mn(e),r&4){try{mo(3,e,e.return),qs(3,e)}catch(f){Ye(e,e.return,f)}try{mo(5,e,e.return)}catch(f){Ye(e,e.return,f)}}break;case 1:en(t,e),mn(e),r&512&&n!==null&&di(n,n.return);break;case 5:if(en(t,e),mn(e),r&512&&n!==null&&di(n,n.return),e.flags&32){var i=e.stateNode;try{ko(i,"")}catch(f){Ye(e,e.return,f)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&gh(i,o),ju(s,a);var u=ju(s,o);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?Sh(i,p):d==="dangerouslySetInnerHTML"?xh(i,p):d==="children"?ko(i,p):Mc(i,d,p,u)}switch(s){case"input":Ou(i,o);break;case"textarea":vh(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var P=o.value;P!=null?vi(i,!!o.multiple,P,!1):g!==!!o.multiple&&(o.defaultValue!=null?vi(i,!!o.multiple,o.defaultValue,!0):vi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ao]=o}catch(f){Ye(e,e.return,f)}}break;case 6:if(en(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(f){Ye(e,e.return,f)}}break;case 3:if(en(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(f){Ye(e,e.return,f)}break;case 4:en(t,e),mn(e);break;case 13:en(t,e),mn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(yd=Je())),r&4&&Wf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xt=(u=xt)||d,en(t,e),xt=u):en(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(te=e,d=e.child;d!==null;){for(p=te=d;te!==null;){switch(g=te,P=g.child,g.tag){case 0:case 11:case 14:case 15:mo(4,g,g.return);break;case 1:di(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(f){Ye(r,n,f)}}break;case 5:di(g,g.return);break;case 22:if(g.memoizedState!==null){Qf(p);continue}}P!==null?(P.return=g,te=P):Qf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=wh("display",a))}catch(f){Ye(e,e.return,f)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(f){Ye(e,e.return,f)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(t,e),mn(e),r&4&&Wf(e);break;case 21:break;default:en(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Km(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ko(i,""),r.flags&=-33);var o=Zf(e);dc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Zf(e);cc(e,s,a);break;default:throw Error(B(161))}}catch(l){Ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wy(e,t,n){te=e,Ym(e)}function Ym(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var i=te,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ta;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||xt;s=Ta;var u=xt;if(Ta=a,(xt=l)&&!u)for(te=i;te!==null;)a=te,l=a.child,a.tag===22&&a.memoizedState!==null?qf(i):l!==null?(l.return=a,te=l):qf(i);for(;o!==null;)te=o,Ym(o),o=o.sibling;te=i,Ta=s,xt=u}Kf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,te=o):Kf(e)}}function Kf(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xt||qs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Of(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Of(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&bo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}xt||t.flags&512&&uc(t)}catch(g){Ye(t,t.return,g)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function Qf(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function qf(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qs(4,t)}catch(l){Ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ye(t,i,l)}}var o=t.return;try{uc(t)}catch(l){Ye(t,o,l)}break;case 5:var a=t.return;try{uc(t)}catch(l){Ye(t,a,l)}}}catch(l){Ye(t,t.return,l)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var Sy=Math.ceil,ms=Vn.ReactCurrentDispatcher,gd=Vn.ReactCurrentOwner,qt=Vn.ReactCurrentBatchConfig,Ie=0,st=null,tt=null,dt=0,Lt=0,fi=xr(0),it=0,Lo=null,Fr=0,Ys=0,vd=0,go=null,At=null,yd=0,Ni=1/0,Tn=null,gs=!1,fc=null,lr=null,Ra=!1,tr=null,vs=0,vo=0,pc=null,Va=-1,Ha=0;function bt(){return Ie&6?Je():Va!==-1?Va:Va=Je()}function ur(e){return e.mode&1?Ie&2&&dt!==0?dt&-dt:iy.transition!==null?(Ha===0&&(Ha=Ih()),Ha):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Fh(e.type)),e):1}function ln(e,t,n,r){if(50<vo)throw vo=0,pc=null,Error(B(185));ea(e,n,r),(!(Ie&2)||e!==st)&&(e===st&&(!(Ie&2)&&(Ys|=n),it===4&&Xn(e,dt)),$t(e,r),n===1&&Ie===0&&!(t.mode&1)&&(Ni=Je()+500,Ws&&wr()))}function $t(e,t){var n=e.callbackNode;iv(e,t);var r=es(e,e===st?dt:0);if(r===0)n!==null&&rf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rf(n),t===1)e.tag===0?ry(Yf.bind(null,e)):om(Yf.bind(null,e)),Jv(function(){!(Ie&6)&&wr()}),n=null;else{switch(Dh(r)){case 1:n=Hc;break;case 4:n=Ah;break;case 16:n=Ja;break;case 536870912:n=Nh;break;default:n=Ja}n=i0(n,Gm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gm(e,t){if(Va=-1,Ha=0,Ie&6)throw Error(B(327));var n=e.callbackNode;if(ki()&&e.callbackNode!==n)return null;var r=es(e,e===st?dt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ys(e,r);else{t=r;var i=Ie;Ie|=2;var o=Jm();(st!==e||dt!==t)&&(Tn=null,Ni=Je()+500,Dr(e,t));do try{Ey();break}catch(s){Xm(e,s)}while(1);rd(),ms.current=o,Ie=i,tt!==null?t=0:(st=null,dt=0,t=it)}if(t!==0){if(t===2&&(i=Fu(e),i!==0&&(r=i,t=hc(e,i))),t===1)throw n=Lo,Dr(e,0),Xn(e,r),$t(e,Je()),n;if(t===6)Xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ky(i)&&(t=ys(e,r),t===2&&(o=Fu(e),o!==0&&(r=o,t=hc(e,o))),t===1))throw n=Lo,Dr(e,0),Xn(e,r),$t(e,Je()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:Pr(e,At,Tn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(t=yd+500-Je(),10<t)){if(es(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){bt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qu(Pr.bind(null,e,At,Tn),t);break}Pr(e,At,Tn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sy(r/1960))-r,10<r){e.timeoutHandle=Qu(Pr.bind(null,e,At,Tn),r);break}Pr(e,At,Tn);break;case 5:Pr(e,At,Tn);break;default:throw Error(B(329))}}}return $t(e,Je()),e.callbackNode===n?Gm.bind(null,e):null}function hc(e,t){var n=go;return e.current.memoizedState.isDehydrated&&(Dr(e,t).flags|=256),e=ys(e,t),e!==2&&(t=At,At=n,t!==null&&mc(t)),e}function mc(e){At===null?At=e:At.push.apply(At,e)}function ky(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t){for(t&=~vd,t&=~Ys,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function Yf(e){if(Ie&6)throw Error(B(327));ki();var t=es(e,0);if(!(t&1))return $t(e,Je()),null;var n=ys(e,t);if(e.tag!==0&&n===2){var r=Fu(e);r!==0&&(t=r,n=hc(e,r))}if(n===1)throw n=Lo,Dr(e,0),Xn(e,t),$t(e,Je()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,At,Tn),$t(e,Je()),null}function xd(e,t){var n=Ie;Ie|=1;try{return e(t)}finally{Ie=n,Ie===0&&(Ni=Je()+500,Ws&&wr())}}function Ur(e){tr!==null&&tr.tag===0&&!(Ie&6)&&ki();var t=Ie;Ie|=1;var n=qt.transition,r=Le;try{if(qt.transition=null,Le=1,e)return e()}finally{Le=r,qt.transition=n,Ie=t,!(Ie&6)&&wr()}}function wd(){Lt=fi.current,He(fi)}function Dr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xv(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&os();break;case 3:Oi(),He(Dt),He(wt),ud();break;case 5:ld(r);break;case 4:Oi();break;case 13:He(Ke);break;case 19:He(Ke);break;case 10:id(r.type._context);break;case 22:case 23:wd()}n=n.return}if(st=e,tt=e=cr(e.current,null),dt=Lt=t,it=0,Lo=null,vd=Ys=Fr=0,At=go=null,Or!==null){for(t=0;t<Or.length;t++)if(n=Or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Or=null}return e}function Xm(e,t){do{var n=tt;try{if(rd(),Fa.current=hs,ps){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ps=!1}if(Mr=0,at=rt=Qe=null,ho=!1,Do=0,gd.current=null,n===null||n.return===null){it=1,Lo=t,tt=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=dt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var P=Lf(a);if(P!==null){P.flags&=-257,zf(P,a,s,o,t),P.mode&1&&$f(o,u,t),t=P,l=u;var C=t.updateQueue;if(C===null){var f=new Set;f.add(l),t.updateQueue=f}else C.add(l);break e}else{if(!(t&1)){$f(o,u,t),Sd();break e}l=Error(B(426))}}else if(Ze&&s.mode&1){var O=Lf(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),zf(O,a,s,o,t),td(Ai(l,s));break e}}o=l=Ai(l,s),it!==4&&(it=2),go===null?go=[o]:go.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=jm(o,l,t);Rf(o,m);break e;case 1:s=l;var c=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=$m(o,s,t);Rf(o,b);break e}}o=o.return}while(o!==null)}t0(n)}catch(A){t=A,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(1)}function Jm(){var e=ms.current;return ms.current=hs,e===null?hs:e}function Sd(){(it===0||it===3||it===2)&&(it=4),st===null||!(Fr&268435455)&&!(Ys&268435455)||Xn(st,dt)}function ys(e,t){var n=Ie;Ie|=2;var r=Jm();(st!==e||dt!==t)&&(Tn=null,Dr(e,t));do try{_y();break}catch(i){Xm(e,i)}while(1);if(rd(),Ie=n,ms.current=r,tt!==null)throw Error(B(261));return st=null,dt=0,it}function _y(){for(;tt!==null;)e0(tt)}function Ey(){for(;tt!==null&&!qg();)e0(tt)}function e0(e){var t=r0(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?t0(e):tt=t,gd.current=null}function t0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vy(n,t),n!==null){n.flags&=32767,tt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{it=6,tt=null;return}}else if(n=gy(n,t,Lt),n!==null){tt=n;return}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);it===0&&(it=5)}function Pr(e,t,n){var r=Le,i=qt.transition;try{qt.transition=null,Le=1,Cy(e,t,n,r)}finally{qt.transition=i,Le=r}return null}function Cy(e,t,n,r){do ki();while(tr!==null);if(Ie&6)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ov(e,o),e===st&&(tt=st=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,i0(Ja,function(){return ki(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qt.transition,qt.transition=null;var a=Le;Le=1;var s=Ie;Ie|=4,gd.current=null,xy(e,n),qm(n,e),Zv(Wu),ts=!!Zu,Wu=Zu=null,e.current=n,wy(n),Yg(),Ie=s,Le=a,qt.transition=o}else e.current=n;if(Ra&&(Ra=!1,tr=e,vs=i),o=e.pendingLanes,o===0&&(lr=null),Jg(n.stateNode),$t(e,Je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gs)throw gs=!1,e=fc,fc=null,e;return vs&1&&e.tag!==0&&ki(),o=e.pendingLanes,o&1?e===pc?vo++:(vo=0,pc=e):vo=0,wr(),null}function ki(){if(tr!==null){var e=Dh(vs),t=qt.transition,n=Le;try{if(qt.transition=null,Le=16>e?16:e,tr===null)var r=!1;else{if(e=tr,tr=null,vs=0,Ie&6)throw Error(B(331));var i=Ie;for(Ie|=4,te=e.current;te!==null;){var o=te,a=o.child;if(te.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(te=u;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:mo(8,d,o)}var p=d.child;if(p!==null)p.return=d,te=p;else for(;te!==null;){d=te;var g=d.sibling,P=d.return;if(Wm(d),d===u){te=null;break}if(g!==null){g.return=P,te=g;break}te=P}}}var C=o.alternate;if(C!==null){var f=C.child;if(f!==null){C.child=null;do{var O=f.sibling;f.sibling=null,f=O}while(f!==null)}}te=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,te=a;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,te=m;break e}te=o.return}}var c=e.current;for(te=c;te!==null;){a=te;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,te=v;else e:for(a=c;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:qs(9,s)}}catch(A){Ye(s,s.return,A)}if(s===a){te=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,te=b;break e}te=s.return}}if(Ie=i,wr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Us,e)}catch{}r=!0}return r}finally{Le=n,qt.transition=t}}return!1}function Gf(e,t,n){t=Ai(n,t),t=jm(e,t,1),e=sr(e,t,1),t=bt(),e!==null&&(ea(e,1,t),$t(e,t))}function Ye(e,t,n){if(e.tag===3)Gf(e,e,n);else for(;t!==null;){if(t.tag===3){Gf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){e=Ai(n,e),e=$m(t,e,1),t=sr(t,e,1),e=bt(),t!==null&&(ea(t,1,e),$t(t,e));break}}t=t.return}}function by(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=bt(),e.pingedLanes|=e.suspendedLanes&n,st===e&&(dt&n)===n&&(it===4||it===3&&(dt&130023424)===dt&&500>Je()-yd?Dr(e,0):vd|=n),$t(e,t)}function n0(e,t){t===0&&(e.mode&1?(t=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):t=1);var n=bt();e=Mn(e,t),e!==null&&(ea(e,t,n),$t(e,n))}function Py(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),n0(e,n)}function Ty(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),n0(e,n)}var r0;r0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,my(e,t,n);It=!!(e.flags&131072)}else It=!1,Ze&&t.flags&1048576&&am(t,ls,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ba(e,t),e=t.pendingProps;var i=Pi(t,wt.current);Si(t,n),i=dd(null,t,r,e,i,n);var o=fd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(r)?(o=!0,as(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(t),i.updater=Ks,t.stateNode=i,i._reactInternals=t,tc(t,r,e,n),t=ic(null,t,r,!0,o,n)):(t.tag=0,Ze&&o&&Jc(t),Et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Oy(r),e=tn(r,e),i){case 0:t=rc(null,t,r,e,n);break e;case 1:t=Uf(null,t,r,e,n);break e;case 11:t=Mf(null,t,r,e,n);break e;case 14:t=Ff(null,t,r,tn(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),rc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Uf(e,t,r,i,n);case 3:e:{if(Fm(t),e===null)throw Error(B(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cm(e,t),ds(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ai(Error(B(423)),t),t=Bf(e,t,r,n,i);break e}else if(r!==i){i=Ai(Error(B(424)),t),t=Bf(e,t,r,n,i);break e}else for(Mt=ar(t.stateNode.containerInfo.firstChild),Ft=t,Ze=!0,rn=null,n=hm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ti(),r===i){t=Fn(e,t,n);break e}Et(e,t,r,n)}t=t.child}return t;case 5:return mm(t),e===null&&Xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ku(r,i)?a=null:o!==null&&Ku(r,o)&&(t.flags|=32),Mm(e,t),Et(e,t,a,n),t.child;case 6:return e===null&&Xu(t),null;case 13:return Um(e,t,n);case 4:return sd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ri(t,null,r,n):Et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Mf(e,t,r,i,n);case 7:return Et(e,t,t.pendingProps,n),t.child;case 8:return Et(e,t,t.pendingProps.children,n),t.child;case 12:return Et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ue(us,r._currentValue),r._currentValue=a,o!==null)if(dn(o.value,a)){if(o.children===i.children&&!Dt.current){t=Fn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ju(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(B(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ju(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Si(t,n),i=Yt(i),r=r(i),t.flags|=1,Et(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),Ff(e,t,r,i,n);case 15:return Lm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Ba(e,t),t.tag=1,jt(r)?(e=!0,as(t)):e=!1,Si(t,n),fm(t,r,i),tc(t,r,i,n),ic(null,t,r,!0,e,n);case 19:return Bm(e,t,n);case 22:return zm(e,t,n)}throw Error(B(156,t.tag))};function i0(e,t){return Oh(e,t)}function Ry(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,r){return new Ry(e,t,n,r)}function kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oy(e){if(typeof e=="function")return kd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uc)return 11;if(e===Bc)return 14}return 2}function cr(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Za(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")kd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ni:return jr(n.children,i,o,t);case Fc:a=8,i|=8;break;case Cu:return e=Qt(12,n,t,i|2),e.elementType=Cu,e.lanes=o,e;case bu:return e=Qt(13,n,t,i),e.elementType=bu,e.lanes=o,e;case Pu:return e=Qt(19,n,t,i),e.elementType=Pu,e.lanes=o,e;case ph:return Gs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dh:a=10;break e;case fh:a=9;break e;case Uc:a=11;break e;case Bc:a=14;break e;case Qn:a=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=Qt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function jr(e,t,n,r){return e=Qt(7,e,r,t),e.lanes=n,e}function Gs(e,t,n,r){return e=Qt(22,e,r,t),e.elementType=ph,e.lanes=n,e.stateNode={isHidden:!1},e}function ru(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function iu(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _d(e,t,n,r,i,o,a,s,l){return e=new Ay(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(o),e}function Ny(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function o0(e){if(!e)return pr;e=e._reactInternals;e:{if(Kr(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(jt(n))return im(e,n,t)}return t}function a0(e,t,n,r,i,o,a,s,l){return e=_d(n,r,!0,e,i,o,a,s,l),e.context=o0(null),n=e.current,r=bt(),i=ur(n),o=Dn(r,i),o.callback=t??null,sr(n,o,i),e.current.lanes=i,ea(e,i,r),$t(e,r),e}function Xs(e,t,n,r){var i=t.current,o=bt(),a=ur(i);return n=o0(n),t.context===null?t.context=n:t.pendingContext=n,t=Dn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sr(i,t,a),e!==null&&(ln(e,i,a,o),Ma(e,i,a)),a}function xs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ed(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function Iy(){return null}var s0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cd(e){this._internalRoot=e}Js.prototype.render=Cd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Xs(e,t,null,null)};Js.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ur(function(){Xs(null,e,null,null)}),t[zn]=null}};function Js(e){this._internalRoot=e}Js.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&Mh(e)}};function bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jf(){}function Dy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=xs(a);o.call(u)}}var a=a0(t,r,e,0,null,!1,!1,"",Jf);return e._reactRootContainer=a,e[zn]=a.current,Ro(e.nodeType===8?e.parentNode:e),Ur(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=xs(l);s.call(u)}}var l=_d(e,0,!1,null,null,!1,!1,"",Jf);return e._reactRootContainer=l,e[zn]=l.current,Ro(e.nodeType===8?e.parentNode:e),Ur(function(){Xs(t,l,n,r)}),l}function tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=xs(a);s.call(l)}}Xs(t,a,e,i)}else a=Dy(n,t,e,i,r);return xs(a)}jh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ao(t.pendingLanes);n!==0&&(Zc(t,n|1),$t(t,Je()),!(Ie&6)&&(Ni=Je()+500,wr()))}break;case 13:Ur(function(){var r=Mn(e,1);if(r!==null){var i=bt();ln(r,e,1,i)}}),Ed(e,1)}};Wc=function(e){if(e.tag===13){var t=Mn(e,134217728);if(t!==null){var n=bt();ln(t,e,134217728,n)}Ed(e,134217728)}};$h=function(e){if(e.tag===13){var t=ur(e),n=Mn(e,t);if(n!==null){var r=bt();ln(n,e,t,r)}Ed(e,t)}};Lh=function(){return Le};zh=function(e,t){var n=Le;try{return Le=e,t()}finally{Le=n}};Lu=function(e,t,n){switch(t){case"input":if(Ou(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zs(r);if(!i)throw Error(B(90));mh(r),Ou(r,i)}}}break;case"textarea":vh(e,n);break;case"select":t=n.value,t!=null&&vi(e,!!n.multiple,t,!1)}};Eh=xd;Ch=Ur;var jy={usingClientEntryPoint:!1,Events:[na,ai,Zs,kh,_h,xd]},Xi={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$y={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Th(e),e===null?null:e.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||Iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Us=Oa.inject($y),Sn=Oa}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(t))throw Error(B(200));return Ny(e,t,null,n)};Bt.createRoot=function(e,t){if(!bd(e))throw Error(B(299));var n=!1,r="",i=s0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_d(e,1,!1,null,null,n,!1,r,i),e[zn]=t.current,Ro(e.nodeType===8?e.parentNode:e),new Cd(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Th(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return Ur(e)};Bt.hydrate=function(e,t,n){if(!el(t))throw Error(B(200));return tl(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!bd(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=s0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=a0(t,null,e,1,n??null,i,!1,o,a),e[zn]=t.current,Ro(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Js(t)};Bt.render=function(e,t,n){if(!el(t))throw Error(B(200));return tl(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!el(e))throw Error(B(40));return e._reactRootContainer?(Ur(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[zn]=null})}),!0):!1};Bt.unstable_batchedUpdates=xd;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return tl(e,t,n,!1,r)};Bt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Bt})(Ig);var ep=qa;ku.createRoot=ep.createRoot,ku.hydrateRoot=ep.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne.apply(this,arguments)}var Xe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xe||(Xe={}));const tp="popstate";function Ly(e){e===void 0&&(e={});function t(i,o){let{pathname:a="/",search:s="",hash:l=""}=Cn(i.location.hash.substr(1));return zo("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Un(o))}function r(i,o){Br(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return My(t,n,r,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Br(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zy(){return Math.random().toString(36).substr(2,8)}function np(e,t){return{usr:e.state,key:e.key,idx:t}}function zo(e,t,n,r){return n===void 0&&(n=null),Ne({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cn(t):t,{state:n,key:t&&t.key||r||zy()})}function Un(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function My(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Xe.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Ne({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=Xe.Pop;let O=d(),m=O==null?null:O-u;u=O,l&&l({action:s,location:f.location,delta:m})}function g(O,m){s=Xe.Push;let c=zo(f.location,O,m);n&&n(c,O),u=d()+1;let v=np(c,u),b=f.createHref(c);try{a.pushState(v,"",b)}catch{i.location.assign(b)}o&&l&&l({action:s,location:f.location,delta:1})}function P(O,m){s=Xe.Replace;let c=zo(f.location,O,m);n&&n(c,O),u=d();let v=np(c,u),b=f.createHref(c);a.replaceState(v,"",b),o&&l&&l({action:s,location:f.location,delta:0})}function C(O){let m=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof O=="string"?O:Un(O);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let f={get action(){return s},get location(){return e(i,a)},listen(O){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(tp,p),l=O,()=>{i.removeEventListener(tp,p),l=null}},createHref(O){return t(i,O)},createURL:C,encodeLocation(O){let m=C(O);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:P,go(O){return a.go(O)}};return f}var nt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(nt||(nt={}));const Fy=new Set(["lazy","caseSensitive","path","id","index","children"]);function Uy(e){return e.index===!0}function l0(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],s=typeof i.id=="string"?i.id:a.join("-");if(Ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ee(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Uy(i)){let l=Ne({},i,{hasErrorBoundary:t(i),id:s});return r[s]=l,l}else{let l=Ne({},i,{id:s,hasErrorBoundary:t(i),children:void 0});return r[s]=l,i.children&&(l.children=l0(i.children,t,a,r)),l}})}function pi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Cn(t):t,i=ia(r.pathname||"/",n);if(i==null)return null;let o=u0(e);By(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=Gy(o[s],e1(i));return a}function u0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),u0(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:qy(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of c0(o.path))i(o,a,l)}),t}function c0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=c0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function By(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vy=/^:\w+$/,Hy=3,Zy=2,Wy=1,Ky=10,Qy=-2,rp=e=>e==="*";function qy(e,t){let n=e.split("/"),r=n.length;return n.some(rp)&&(r+=Qy),t&&(r+=Zy),n.filter(i=>!rp(i)).reduce((i,o)=>i+(Vy.test(o)?Hy:o===""?Wy:Ky),r)}function Yy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Gy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Xy({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let p=s.route;o.push({params:r,pathname:jn([i,d.pathname]),pathnameBase:i1(jn([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=jn([i,d.pathnameBase]))}return o}function Xy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{if(d==="*"){let g=s[p]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=t1(s[p]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Jy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Br(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function e1(e){try{return decodeURI(e)}catch(t){return Br(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function t1(e,t){try{return decodeURIComponent(e)}catch(n){return Br(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ia(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function n1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cn(e):e;return{pathname:n?n.startsWith("/")?n:r1(n,t):t,search:o1(r),hash:a1(i)}}function r1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ou(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nl(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cn(e):(i=Ne({},e),Ee(!i.pathname||!i.pathname.includes("?"),ou("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),ou("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),ou("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let p=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}s=p>=0?t[p]:"/"}let l=n1(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),i1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,a1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ip extends Error{}class s1{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Ee(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((o,a)=>r=a),this.controller=new AbortController;let i=()=>r(new ip("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((o,a)=>{let[s,l]=a;return Object.assign(o,{[s]:this.trackPromise(s,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof ip?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(o=>{t.removeEventListener("abort",r),(o||this.done)&&i(o)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return Ee(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:u1(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function l1(e){return e instanceof Promise&&e._tracked===!0}function u1(e){if(!l1(e))return e;if(e._error)throw e._error;return e._data}class Td{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function d0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const f0=["post","put","patch","delete"],c1=new Set(f0),d1=["get",...f0],f1=new Set(d1),p1=new Set([301,302,303,307,308]),h1=new Set([307,308]),au={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},m1={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},op={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},p0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=!h0,v1=e=>!!e.hasErrorBoundary;function y1(e){Ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||v1,n={},r=l0(e.routes,t,void 0,n),i,o=null,a=new Set,s=null,l=null,u=null,d=e.hydrationData!=null,p=pi(r,e.history.location,e.basename),g=null;if(p==null){let R=vn(404,{pathname:e.history.location.pathname}),{matches:I,route:L}=dp(r);p=I,g={[L.id]:R}}let P=!p.some(R=>R.route.lazy)&&(!p.some(R=>R.route.loader)||e.hydrationData!=null),C,f={historyAction:e.history.action,location:e.history.location,matches:p,initialized:P,navigation:au,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},O=Xe.Pop,m=!1,c,v=!1,b=!1,A=[],U=[],D=new Map,W=0,ce=-1,J=new Map,Re=new Set,ie=new Map,oe=new Map,ve=new Map,Se=!1;function Fe(){if(o=e.history.listen(L=>{let{action:ne,location:ae,delta:pe}=L;if(Se){Se=!1;return}Br(ve.size===0||pe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let de=Y({currentLocation:f.location,nextLocation:ae,historyAction:ne});if(de&&pe!=null){Se=!0,e.history.go(pe*-1),M(de,{state:"blocked",location:ae,proceed(){M(de,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),e.history.go(pe)},reset(){z(de),Q({blockers:new Map(C.state.blockers)})}});return}return y(ne,ae)}),f.initialized)return C;let R=f.matches.filter(L=>L.route.lazy);if(R.length===0)return y(Xe.Pop,f.location),C;let I=R.map(L=>gc(L.route,t,n));return Promise.all(I).then(()=>{!f.matches.some(ne=>ne.route.loader)||e.hydrationData!=null?Q({initialized:!0}):y(Xe.Pop,f.location)}),C}function Ae(){o&&o(),a.clear(),c&&c.abort(),f.fetchers.forEach((R,I)=>ye(I)),f.blockers.forEach((R,I)=>z(I))}function H(R){return a.add(R),()=>a.delete(R)}function Q(R){f=Ne({},f,R),a.forEach(I=>I(f))}function le(R,I){var L,ne;let ae=f.actionData!=null&&f.navigation.formMethod!=null&&Rn(f.navigation.formMethod)&&f.navigation.state==="loading"&&((L=R.state)==null?void 0:L._isRedirect)!==!0,pe;I.actionData?Object.keys(I.actionData).length>0?pe=I.actionData:pe=null:ae?pe=f.actionData:pe=null;let de=I.loaderData?cp(f.loaderData,I.loaderData,I.matches||[],I.errors):f.loaderData;for(let[ue]of ve)z(ue);let ke=m===!0||f.navigation.formMethod!=null&&Rn(f.navigation.formMethod)&&((ne=R.state)==null?void 0:ne._isRedirect)!==!0;i&&(r=i,i=void 0),Q(Ne({},I,{actionData:pe,loaderData:de,historyAction:O,location:R,initialized:!0,navigation:au,revalidation:"idle",restoreScrollPosition:Ot(R,I.matches||f.matches),preventScrollReset:ke,blockers:new Map(f.blockers)})),v||O===Xe.Pop||(O===Xe.Push?e.history.push(R,R.state):O===Xe.Replace&&e.history.replace(R,R.state)),O=Xe.Pop,m=!1,v=!1,b=!1,A=[],U=[]}async function k(R,I){if(typeof R=="number"){e.history.go(R);return}let{path:L,submission:ne,error:ae}=ap(R,I),pe=f.location,de=zo(f.location,L,I&&I.state);de=Ne({},de,e.history.encodeLocation(de));let ke=I&&I.replace!=null?I.replace:void 0,ue=Xe.Push;ke===!0?ue=Xe.Replace:ke===!1||ne!=null&&Rn(ne.formMethod)&&ne.formAction===f.location.pathname+f.location.search&&(ue=Xe.Replace);let pt=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,$e=Y({currentLocation:pe,nextLocation:de,historyAction:ue});if($e){M($e,{state:"blocked",location:de,proceed(){M($e,{state:"proceeding",proceed:void 0,reset:void 0,location:de}),k(R,I)},reset(){z($e),Q({blockers:new Map(f.blockers)})}});return}return await y(ue,de,{submission:ne,pendingError:ae,preventScrollReset:pt,replace:I&&I.replace})}function S(){if(re(),Q({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){y(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}y(O||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function y(R,I,L){c&&c.abort(),c=null,O=R,v=(L&&L.startUninterruptedRevalidation)===!0,De(f.location,f.matches),m=(L&&L.preventScrollReset)===!0;let ne=i||r,ae=L&&L.overrideNavigation,pe=pi(ne,I,e.basename);if(!pe){let Ge=vn(404,{pathname:I.pathname}),{matches:pn,route:Jt}=dp(ne);_e(),le(I,{matches:pn,loaderData:{},errors:{[Jt.id]:Ge}});return}if(_1(f.location,I)&&!(L&&L.submission&&Rn(L.submission.formMethod))){le(I,{matches:pe});return}c=new AbortController;let de=eo(e.history,I,c.signal,L&&L.submission),ke,ue;if(L&&L.pendingError)ue={[hi(pe).route.id]:L.pendingError};else if(L&&L.submission&&Rn(L.submission.formMethod)){let Ge=await T(de,I,L.submission,pe,{replace:L.replace});if(Ge.shortCircuited)return;ke=Ge.pendingActionData,ue=Ge.pendingActionError,ae=Ne({state:"loading",location:I},L.submission),de=new Request(de.url,{signal:de.signal})}let{shortCircuited:pt,loaderData:$e,errors:_t}=await F(de,I,pe,ae,L&&L.submission,L&&L.replace,ke,ue);pt||(c=null,le(I,Ne({matches:pe},ke?{actionData:ke}:{},{loaderData:$e,errors:_t})))}async function T(R,I,L,ne,ae){re();let pe=Ne({state:"submitting",location:I},L);Q({navigation:pe});let de,ke=vc(ne,I);if(!ke.route.action&&!ke.route.lazy)de={type:nt.error,error:vn(405,{method:R.method,pathname:I.pathname,routeId:ke.route.id})};else if(de=await Ji("action",R,ke,ne,n,t,C.basename),R.signal.aborted)return{shortCircuited:!0};if(_i(de)){let ue;return ae&&ae.replace!=null?ue=ae.replace:ue=de.location===f.location.pathname+f.location.search,await he(f,de,{submission:L,replace:ue}),{shortCircuited:!0}}if(yo(de)){let ue=hi(ne,ke.route.id);return(ae&&ae.replace)!==!0&&(O=Xe.Push),{pendingActionData:{},pendingActionError:{[ue.route.id]:de.error}}}if(Nr(de))throw vn(400,{type:"defer-action"});return{pendingActionData:{[ke.route.id]:de.data}}}async function F(R,I,L,ne,ae,pe,de,ke){let ue=ne;ue||(ue=Ne({state:"loading",location:I,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ae));let pt=ae||(ue.formMethod&&ue.formAction&&ue.formData&&ue.formEncType?{formMethod:ue.formMethod,formAction:ue.formAction,formData:ue.formData,formEncType:ue.formEncType}:void 0),$e=i||r,[_t,Ge]=sp(e.history,f,L,pt,I,b,A,U,ie,$e,e.basename,de,ke);if(_e(ht=>!(L&&L.some(hn=>hn.route.id===ht))||_t&&_t.some(hn=>hn.route.id===ht)),_t.length===0&&Ge.length===0)return le(I,Ne({matches:L,loaderData:{},errors:ke||null},de?{actionData:de}:{})),{shortCircuited:!0};if(!v){Ge.forEach(hn=>{let kr=f.fetchers.get(hn.key),pa={state:"loading",data:kr&&kr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(hn.key,pa)});let ht=de||f.actionData;Q(Ne({navigation:ue},ht?Object.keys(ht).length===0?{actionData:null}:{actionData:ht}:{},Ge.length>0?{fetchers:new Map(f.fetchers)}:{}))}ce=++W,Ge.forEach(ht=>D.set(ht.key,c));let{results:pn,loaderResults:Jt,fetcherResults:Vi}=await me(f.matches,L,_t,Ge,R);if(R.signal.aborted)return{shortCircuited:!0};Ge.forEach(ht=>D.delete(ht.key));let da=fp(pn);if(da)return await he(f,da,{replace:pe}),{shortCircuited:!0};let{loaderData:fa,errors:Gr}=up(f,L,_t,Jt,ke,Ge,Vi,oe);oe.forEach((ht,hn)=>{ht.subscribe(kr=>{(kr||ht.done)&&oe.delete(hn)})}),E();let Ol=N(ce);return Ne({loaderData:fa,errors:Gr},Ol||Ge.length>0?{fetchers:new Map(f.fetchers)}:{})}function _(R){return f.fetchers.get(R)||m1}function K(R,I,L,ne){if(g1)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");D.has(R)&&xe(R);let pe=pi(i||r,L,e.basename);if(!pe){Oe(R,I,vn(404,{pathname:L}));return}let{path:de,submission:ke}=ap(L,ne,!0),ue=vc(pe,de);if(m=(ne&&ne.preventScrollReset)===!0,ke&&Rn(ke.formMethod)){j(R,I,de,ue,pe,ke);return}ie.set(R,{routeId:I,path:de}),be(R,I,de,ue,pe,ke)}async function j(R,I,L,ne,ae,pe){if(re(),ie.delete(R),!ne.route.action&&!ne.route.lazy){let bn=vn(405,{method:pe.formMethod,pathname:L,routeId:I});Oe(R,I,bn);return}let de=f.fetchers.get(R),ke=Ne({state:"submitting"},pe,{data:de&&de.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(R,ke),Q({fetchers:new Map(f.fetchers)});let ue=new AbortController,pt=eo(e.history,L,ue.signal,pe);D.set(R,ue);let $e=await Ji("action",pt,ne,ae,n,t,C.basename);if(pt.signal.aborted){D.get(R)===ue&&D.delete(R);return}if(_i($e)){D.delete(R),Re.add(R);let bn=Ne({state:"loading"},pe,{data:void 0," _hasFetcherDoneAnything ":!0});return f.fetchers.set(R,bn),Q({fetchers:new Map(f.fetchers)}),he(f,$e,{isFetchActionRedirect:!0})}if(yo($e)){Oe(R,I,$e.error);return}if(Nr($e))throw vn(400,{type:"defer-action"});let _t=f.navigation.location||f.location,Ge=eo(e.history,_t,ue.signal),pn=i||r,Jt=f.navigation.state!=="idle"?pi(pn,f.navigation.location,e.basename):f.matches;Ee(Jt,"Didn't find any matches after fetcher action");let Vi=++W;J.set(R,Vi);let da=Ne({state:"loading",data:$e.data},pe,{" _hasFetcherDoneAnything ":!0});f.fetchers.set(R,da);let[fa,Gr]=sp(e.history,f,Jt,pe,_t,b,A,U,ie,pn,e.basename,{[ne.route.id]:$e.data},void 0);Gr.filter(bn=>bn.key!==R).forEach(bn=>{let Nl=bn.key,Hd=f.fetchers.get(Nl),lg={state:"loading",data:Hd&&Hd.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(Nl,lg),D.set(Nl,ue)}),Q({fetchers:new Map(f.fetchers)});let{results:Ol,loaderResults:ht,fetcherResults:hn}=await me(f.matches,Jt,fa,Gr,Ge);if(ue.signal.aborted)return;J.delete(R),D.delete(R),Gr.forEach(bn=>D.delete(bn.key));let kr=fp(Ol);if(kr)return he(f,kr);let{loaderData:pa,errors:Al}=up(f,f.matches,fa,ht,void 0,Gr,hn,oe),ag={state:"idle",data:$e.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(R,ag);let sg=N(Vi);f.navigation.state==="loading"&&Vi>ce?(Ee(O,"Expected pending action"),c&&c.abort(),le(f.navigation.location,{matches:Jt,loaderData:pa,errors:Al,fetchers:new Map(f.fetchers)})):(Q(Ne({errors:Al,loaderData:cp(f.loaderData,pa,Jt,Al)},sg?{fetchers:new Map(f.fetchers)}:{})),b=!1)}async function be(R,I,L,ne,ae,pe){let de=f.fetchers.get(R),ke=Ne({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},pe,{data:de&&de.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(R,ke),Q({fetchers:new Map(f.fetchers)});let ue=new AbortController,pt=eo(e.history,L,ue.signal);D.set(R,ue);let $e=await Ji("loader",pt,ne,ae,n,t,C.basename);if(Nr($e)&&($e=await y0($e,pt.signal,!0)||$e),D.get(R)===ue&&D.delete(R),pt.signal.aborted)return;if(_i($e)){await he(f,$e);return}if(yo($e)){let Ge=hi(f.matches,I);f.fetchers.delete(R),Q({fetchers:new Map(f.fetchers),errors:{[Ge.route.id]:$e.error}});return}Ee(!Nr($e),"Unhandled fetcher deferred data");let _t={state:"idle",data:$e.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(R,_t),Q({fetchers:new Map(f.fetchers)})}async function he(R,I,L){var ne;let{submission:ae,replace:pe,isFetchActionRedirect:de}=L===void 0?{}:L;I.revalidate&&(b=!0);let ke=zo(R.location,I.location,Ne({_isRedirect:!0},de?{_isFetchActionRedirect:!0}:{}));if(Ee(ke,"Expected a location on the redirect navigation"),p0.test(I.location)&&h0&&typeof((ne=window)==null?void 0:ne.location)<"u"){let pn=e.history.createURL(I.location),Jt=ia(pn.pathname,e.basename||"/")==null;if(window.location.origin!==pn.origin||Jt){pe?window.location.replace(I.location):window.location.assign(I.location);return}}c=null;let ue=pe===!0?Xe.Replace:Xe.Push,{formMethod:pt,formAction:$e,formEncType:_t,formData:Ge}=R.navigation;!ae&&pt&&$e&&Ge&&_t&&(ae={formMethod:pt,formAction:$e,formEncType:_t,formData:Ge}),h1.has(I.status)&&ae&&Rn(ae.formMethod)?await y(ue,ke,{submission:Ne({},ae,{formAction:I.location}),preventScrollReset:m}):await y(ue,ke,{overrideNavigation:{state:"loading",location:ke,formMethod:ae?ae.formMethod:void 0,formAction:ae?ae.formAction:void 0,formEncType:ae?ae.formEncType:void 0,formData:ae?ae.formData:void 0},preventScrollReset:m})}async function me(R,I,L,ne,ae){let pe=await Promise.all([...L.map(ue=>Ji("loader",ae,ue,I,n,t,C.basename)),...ne.map(ue=>ue.matches&&ue.match?Ji("loader",eo(e.history,ue.path,ae.signal),ue.match,ue.matches,n,t,C.basename):{type:nt.error,error:vn(404,{pathname:ue.path})})]),de=pe.slice(0,L.length),ke=pe.slice(L.length);return await Promise.all([pp(R,L,de,ae.signal,!1,f.loaderData),pp(R,ne.map(ue=>ue.match),ke,ae.signal,!0)]),{results:pe,loaderResults:de,fetcherResults:ke}}function re(){b=!0,A.push(..._e()),ie.forEach((R,I)=>{D.has(I)&&(U.push(I),xe(I))})}function Oe(R,I,L){let ne=hi(f.matches,I);ye(R),Q({errors:{[ne.route.id]:L},fetchers:new Map(f.fetchers)})}function ye(R){D.has(R)&&xe(R),ie.delete(R),J.delete(R),Re.delete(R),f.fetchers.delete(R)}function xe(R){let I=D.get(R);Ee(I,"Expected fetch controller: "+R),I.abort(),D.delete(R)}function x(R){for(let I of R){let ne={state:"idle",data:_(I).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(I,ne)}}function E(){let R=[];for(let I of Re){let L=f.fetchers.get(I);Ee(L,"Expected fetcher: "+I),L.state==="loading"&&(Re.delete(I),R.push(I))}x(R)}function N(R){let I=[];for(let[L,ne]of J)if(ne<R){let ae=f.fetchers.get(L);Ee(ae,"Expected fetcher: "+L),ae.state==="loading"&&(xe(L),J.delete(L),I.push(L))}return x(I),I.length>0}function q(R,I){let L=f.blockers.get(R)||op;return ve.get(R)!==I&&ve.set(R,I),L}function z(R){f.blockers.delete(R),ve.delete(R)}function M(R,I){let L=f.blockers.get(R)||op;Ee(L.state==="unblocked"&&I.state==="blocked"||L.state==="blocked"&&I.state==="blocked"||L.state==="blocked"&&I.state==="proceeding"||L.state==="blocked"&&I.state==="unblocked"||L.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+I.state),f.blockers.set(R,I),Q({blockers:new Map(f.blockers)})}function Y(R){let{currentLocation:I,nextLocation:L,historyAction:ne}=R;if(ve.size===0)return;ve.size>1&&Br(!1,"A router only supports one blocker at a time");let ae=Array.from(ve.entries()),[pe,de]=ae[ae.length-1],ke=f.blockers.get(pe);if(!(ke&&ke.state==="proceeding")&&de({currentLocation:I,nextLocation:L,historyAction:ne}))return pe}function _e(R){let I=[];return oe.forEach((L,ne)=>{(!R||R(ne))&&(L.cancel(),I.push(ne),oe.delete(ne))}),I}function G(R,I,L){if(s=R,u=I,l=L||(ne=>ne.key),!d&&f.navigation===au){d=!0;let ne=Ot(f.location,f.matches);ne!=null&&Q({restoreScrollPosition:ne})}return()=>{s=null,u=null,l=null}}function De(R,I){if(s&&l&&u){let L=I.map(ae=>hp(ae,f.loaderData)),ne=l(R,L)||R.key;s[ne]=u()}}function Ot(R,I){if(s&&l&&u){let L=I.map(pe=>hp(pe,f.loaderData)),ne=l(R,L)||R.key,ae=s[ne];if(typeof ae=="number")return ae}return null}function kt(R){i=R}return C={get basename(){return e.basename},get state(){return f},get routes(){return r},initialize:Fe,subscribe:H,enableScrollRestoration:G,navigate:k,fetch:K,revalidate:S,createHref:R=>e.history.createHref(R),encodeLocation:R=>e.history.encodeLocation(R),getFetcher:_,deleteFetcher:ye,dispose:Ae,getBlocker:q,deleteBlocker:z,_internalFetchControllers:D,_internalActiveDeferreds:oe,_internalSetRoutes:kt},C}function x1(e){return e!=null&&"formData"in e}function ap(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Un(e);if(!t||!x1(t))return{path:r};if(t.formMethod&&!C1(t.formMethod))return{path:r,error:vn(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:v0(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},Rn(i.formMethod)))return{path:r,submission:i};let o=Cn(r),a=g0(t.formData);return n&&o.search&&x0(o.search)&&a.append("index",""),o.search="?"+a,{path:Un(o),submission:i}}function w1(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function sp(e,t,n,r,i,o,a,s,l,u,d,p,g){let P=g?Object.values(g)[0]:p?Object.values(p)[0]:void 0,C=e.createURL(t.location),f=e.createURL(i),O=o||C.toString()===f.toString()||C.search!==f.search,m=g?Object.keys(g)[0]:void 0,v=w1(n,m).filter((A,U)=>{if(A.route.lazy)return!0;if(A.route.loader==null)return!1;if(S1(t.loaderData,t.matches[U],A)||a.some(ce=>ce===A.route.id))return!0;let D=t.matches[U],W=A;return lp(A,Ne({currentUrl:C,currentParams:D.params,nextUrl:f,nextParams:W.params},r,{actionResult:P,defaultShouldRevalidate:O||m0(D,W)}))}),b=[];return l.forEach((A,U)=>{if(!n.some(J=>J.route.id===A.routeId))return;let D=pi(u,A.path,d);if(!D){b.push(Ne({key:U},A,{matches:null,match:null}));return}let W=vc(D,A.path);if(s.includes(U)){b.push(Ne({key:U,matches:D,match:W},A));return}lp(W,Ne({currentUrl:C,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:P,defaultShouldRevalidate:O}))&&b.push(Ne({key:U,matches:D,match:W},A))}),[v,b]}function S1(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function m0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function lp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function gc(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Ee(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";Br(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!Fy.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(Ne({},i)),lazy:void 0})}async function Ji(e,t,n,r,i,o,a,s,l,u){a===void 0&&(a="/"),s===void 0&&(s=!1),l===void 0&&(l=!1);let d,p,g,P=O=>{let m,c=new Promise((v,b)=>m=b);return g=()=>m(),t.signal.addEventListener("abort",g),Promise.race([O({request:t,params:n.params,context:u}),c])};try{let O=n.route[e];if(n.route.lazy)if(O)p=(await Promise.all([P(O),gc(n.route,o,i)]))[0];else if(await gc(n.route,o,i),O=n.route[e],O)p=await P(O);else{if(e==="action")throw vn(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:nt.data,data:void 0}}else Ee(O,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),p=await P(O);Ee(p!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(O){d=nt.error,p=O}finally{g&&t.signal.removeEventListener("abort",g)}if(E1(p)){let O=p.status;if(p1.has(O)){let v=p.headers.get("Location");if(Ee(v,"Redirects returned/thrown from loaders/actions must have a Location header"),p0.test(v)){if(!s){let b=new URL(t.url),A=v.startsWith("//")?new URL(b.protocol+v):new URL(v),U=ia(A.pathname,a)!=null;A.origin===b.origin&&U&&(v=A.pathname+A.search+A.hash)}}else{let b=r.slice(0,r.indexOf(n)+1),A=nl(b).map(D=>D.pathnameBase),U=Pd(v,A,new URL(t.url).pathname);if(Ee(Un(U),"Unable to resolve redirect location: "+v),a){let D=U.pathname;U.pathname=D==="/"?a:jn([a,D])}v=Un(U)}if(s)throw p.headers.set("Location",v),p;return{type:nt.redirect,status:O,location:v,revalidate:p.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||nt.data,response:p};let m,c=p.headers.get("Content-Type");return c&&/\bapplication\/json\b/.test(c)?m=await p.json():m=await p.text(),d===nt.error?{type:d,error:new Td(O,p.statusText,m),headers:p.headers}:{type:nt.data,data:m,statusCode:p.status,headers:p.headers}}if(d===nt.error)return{type:d,error:p};if(p instanceof s1){var C,f;return{type:nt.deferred,deferredData:p,statusCode:(C=p.init)==null?void 0:C.status,headers:((f=p.init)==null?void 0:f.headers)&&new Headers(p.init.headers)}}return{type:nt.data,data:p}}function eo(e,t,n,r){let i=e.createURL(v0(t)).toString(),o={signal:n};if(r&&Rn(r.formMethod)){let{formMethod:a,formEncType:s,formData:l}=r;o.method=a.toUpperCase(),o.body=s==="application/x-www-form-urlencoded"?g0(l):l}return new Request(i,o)}function g0(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function k1(e,t,n,r,i){let o={},a=null,s,l=!1,u={};return n.forEach((d,p)=>{let g=t[p].route.id;if(Ee(!_i(d),"Cannot handle redirect results in processLoaderData"),yo(d)){let P=hi(e,g),C=d.error;r&&(C=Object.values(r)[0],r=void 0),a=a||{},a[P.route.id]==null&&(a[P.route.id]=C),o[g]=void 0,l||(l=!0,s=d0(d.error)?d.error.status:500),d.headers&&(u[g]=d.headers)}else Nr(d)?(i.set(g,d.deferredData),o[g]=d.deferredData.data):o[g]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(s=d.statusCode),d.headers&&(u[g]=d.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function up(e,t,n,r,i,o,a,s){let{loaderData:l,errors:u}=k1(t,n,r,i,s);for(let d=0;d<o.length;d++){let{key:p,match:g}=o[d];Ee(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let P=a[d];if(yo(P)){let C=hi(e.matches,g==null?void 0:g.route.id);u&&u[C.route.id]||(u=Ne({},u,{[C.route.id]:P.error})),e.fetchers.delete(p)}else if(_i(P))Ee(!1,"Unhandled fetcher revalidation redirect");else if(Nr(P))Ee(!1,"Unhandled fetcher deferred data");else{let C={state:"idle",data:P.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(p,C)}}return{loaderData:l,errors:u}}function cp(e,t,n,r){let i=Ne({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function hi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function dp(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function vn(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(s="defer() is not supported in actions")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Td(e||500,a,new Error(s),!0)}function fp(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(_i(n))return n}}function v0(e){let t=typeof e=="string"?Cn(e):e;return Un(Ne({},t,{hash:""}))}function _1(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Nr(e){return e.type===nt.deferred}function yo(e){return e.type===nt.error}function _i(e){return(e&&e.type)===nt.redirect}function E1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function C1(e){return f1.has(e)}function Rn(e){return c1.has(e)}async function pp(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=t[a];if(!l)continue;let u=e.find(p=>p.route.id===l.route.id),d=u!=null&&!m0(u,l)&&(o&&o[l.route.id])!==void 0;Nr(s)&&(i||d)&&await y0(s,r,i).then(p=>{p&&(n[a]=p||n[a])})}}async function y0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:nt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:nt.error,error:i}}return{type:nt.data,data:e.deferredData.data}}}function x0(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function hp(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function vc(e,t){let n=typeof t=="string"?Cn(t).search:t.search;if(e[e.length-1].route.index&&x0(n||""))return e[e.length-1];let r=nl(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const P1=typeof Object.is=="function"?Object.is:b1,{useState:T1,useEffect:R1,useLayoutEffect:O1,useDebugValue:A1}=Su;function N1(e,t,n){const r=t(),[{inst:i},o]=T1({inst:{value:r,getSnapshot:t}});return O1(()=>{i.value=r,i.getSnapshot=t,su(i)&&o({inst:i})},[e,r,t]),R1(()=>(su(i)&&o({inst:i}),e(()=>{su(i)&&o({inst:i})})),[e]),A1(r),r}function su(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!P1(n,r)}catch{return!0}}function I1(e,t,n){return t()}const D1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j1=!D1,$1=j1?I1:N1,L1="useSyncExternalStore"in Su?(e=>e.useSyncExternalStore)(Su):$1,Rd=$.createContext(null),Od=$.createContext(null),oa=$.createContext(null),rl=$.createContext(null),Qr=$.createContext({outlet:null,matches:[]}),w0=$.createContext(null);function yc(){return yc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yc.apply(this,arguments)}function z1(e,t){let{relative:n}=t===void 0?{}:t;aa()||Ee(!1);let{basename:r,navigator:i}=$.useContext(oa),{hash:o,pathname:a,search:s}=S0(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:jn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function aa(){return $.useContext(rl)!=null}function il(){return aa()||Ee(!1),$.useContext(rl).location}function M1(){aa()||Ee(!1);let{basename:e,navigator:t}=$.useContext(oa),{matches:n}=$.useContext(Qr),{pathname:r}=il(),i=JSON.stringify(nl(n).map(s=>s.pathnameBase)),o=$.useRef(!1);return $.useEffect(()=>{o.current=!0}),$.useCallback(function(s,l){if(l===void 0&&(l={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let u=Pd(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:jn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const F1=$.createContext(null);function U1(e){let t=$.useContext(Qr).outlet;return t&&$.createElement(F1.Provider,{value:e},t)}function S0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(Qr),{pathname:i}=il(),o=JSON.stringify(nl(r).map(a=>a.pathnameBase));return $.useMemo(()=>Pd(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function B1(e,t){aa()||Ee(!1);let{navigator:n}=$.useContext(oa),r=$.useContext(Od),{matches:i}=$.useContext(Qr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=il(),u;if(t){var d;let f=typeof t=="string"?Cn(t):t;s==="/"||(d=f.pathname)!=null&&d.startsWith(s)||Ee(!1),u=f}else u=l;let p=u.pathname||"/",g=s==="/"?p:p.slice(s.length)||"/",P=pi(e,{pathname:g}),C=W1(P&&P.map(f=>Object.assign({},f,{params:Object.assign({},a,f.params),pathname:jn([s,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?s:jn([s,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),i,r||void 0);return t&&C?$.createElement(rl.Provider,{value:{location:yc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xe.Pop}},C):C}function V1(){let e=Y1(),t=d0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:i},n):null,o)}class H1 extends $.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(Qr.Provider,{value:this.props.routeContext},$.createElement(w0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z1(e){let{routeContext:t,match:n,children:r}=e,i=$.useContext(Rd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(Qr.Provider,{value:t},r)}function W1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Ee(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,s)=>{let l=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;n&&(a.route.ErrorBoundary?u=$.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=$.createElement(V1,null));let d=t.concat(r.slice(0,s+1)),p=()=>{let g=o;return l?g=u:a.route.Component?g=$.createElement(a.route.Component,null):a.route.element&&(g=a.route.element),$.createElement(Z1,{match:a,routeContext:{outlet:o,matches:d},children:g})};return n&&(a.route.ErrorBoundary||a.route.errorElement||s===0)?$.createElement(H1,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var mp;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(mp||(mp={}));var ws;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ws||(ws={}));function K1(e){let t=$.useContext(Od);return t||Ee(!1),t}function Q1(e){let t=$.useContext(Qr);return t||Ee(!1),t}function q1(e){let t=Q1(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Y1(){var e;let t=$.useContext(w0),n=K1(ws.UseRouteError),r=q1(ws.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function G1(e){let{fallbackElement:t,router:n}=e,r=$.useCallback(()=>n.state,[n]),i=L1(n.subscribe,r,r),o=$.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d==null?void 0:d.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d==null?void 0:d.preventScrollReset})}),[n]),a=n.basename||"/",s=$.useMemo(()=>({router:n,navigator:o,static:!1,basename:a}),[n,o,a]);return $.createElement($.Fragment,null,$.createElement(Rd.Provider,{value:s},$.createElement(Od.Provider,{value:i},$.createElement(ex,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?$.createElement(tx,null):t))),null)}function X1(e){return U1(e.context)}function J1(e){Ee(!1)}function ex(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xe.Pop,navigator:o,static:a=!1}=e;aa()&&Ee(!1);let s=t.replace(/^\/*/,"/"),l=$.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Cn(r));let{pathname:u="/",search:d="",hash:p="",state:g=null,key:P="default"}=r,C=$.useMemo(()=>{let f=ia(u,s);return f==null?null:{location:{pathname:f,search:d,hash:p,state:g,key:P},navigationType:i}},[s,u,d,p,g,P,i]);return C==null?null:$.createElement(oa.Provider,{value:l},$.createElement(rl.Provider,{children:n,value:C}))}function tx(e){let{children:t,location:n}=e,r=$.useContext(Rd),i=r&&!t?r.router.routes:xc(t);return B1(i,n)}var gp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(gp||(gp={}));new Promise(()=>{});function xc(e,t){t===void 0&&(t=[]);let n=[];return $.Children.forEach(e,(r,i)=>{if(!$.isValidElement(r))return;if(r.type===$.Fragment){n.push.apply(n,xc(r.props.children,t));return}r.type!==J1&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o=[...t,i],a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=xc(r.props.children,o)),n.push(a)}),n}function nx(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ss.apply(this,arguments)}function rx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ix(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ox(e,t){return e.button===0&&(!t||t==="_self")&&!ix(e)}const ax=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function sx(e,t){return y1({basename:t==null?void 0:t.basename,history:Ly({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||lx(),routes:e,detectErrorBoundary:nx}).initialize()}function lx(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ss({},t,{errors:ux(t.errors)})),t}function ux(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Td(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zt=$.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d}=t,p=rx(t,ax),{basename:g}=$.useContext(oa),P,C=!1;if(typeof u=="string"&&dx.test(u)&&(P=u,cx)){let c=new URL(window.location.href),v=u.startsWith("//")?new URL(c.protocol+u):new URL(u),b=ia(v.pathname,g);v.origin===c.origin&&b!=null?u=b+v.search+v.hash:C=!0}let f=z1(u,{relative:i}),O=fx(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i});function m(c){r&&r(c),c.defaultPrevented||O(c)}return $.createElement("a",Ss({},p,{href:P||f,onClick:C||o?r:m,ref:n,target:l}))});var vp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vp||(vp={}));var yp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yp||(yp={}));function fx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=M1(),l=il(),u=S0(e,{relative:a});return $.useCallback(d=>{if(ox(d,n)){d.preventDefault();let p=r!==void 0?r:Un(l)===Un(u);s(e,{replace:p,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}const ol=$.createContext(),px=({children:e})=>{const[t,n]=$.useState([]),[r,i]=$.useState(!1);return h(ol.Provider,{value:{isClicked:r,setIsClicked:i,favorito:t,setFavorito:n},children:e})};var ks={},hx={get exports(){return ks},set exports(e){ks=e}},ze={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=Symbol.for("react.element"),Nd=Symbol.for("react.portal"),al=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),ul=Symbol.for("react.provider"),cl=Symbol.for("react.context"),mx=Symbol.for("react.server_context"),dl=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),ml=Symbol.for("react.lazy"),gx=Symbol.for("react.offscreen"),k0;k0=Symbol.for("react.module.reference");function Xt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ad:switch(e=e.type,e){case al:case ll:case sl:case fl:case pl:return e;default:switch(e=e&&e.$$typeof,e){case mx:case cl:case dl:case ml:case hl:case ul:return e;default:return t}}case Nd:return t}}}ze.ContextConsumer=cl;ze.ContextProvider=ul;ze.Element=Ad;ze.ForwardRef=dl;ze.Fragment=al;ze.Lazy=ml;ze.Memo=hl;ze.Portal=Nd;ze.Profiler=ll;ze.StrictMode=sl;ze.Suspense=fl;ze.SuspenseList=pl;ze.isAsyncMode=function(){return!1};ze.isConcurrentMode=function(){return!1};ze.isContextConsumer=function(e){return Xt(e)===cl};ze.isContextProvider=function(e){return Xt(e)===ul};ze.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ad};ze.isForwardRef=function(e){return Xt(e)===dl};ze.isFragment=function(e){return Xt(e)===al};ze.isLazy=function(e){return Xt(e)===ml};ze.isMemo=function(e){return Xt(e)===hl};ze.isPortal=function(e){return Xt(e)===Nd};ze.isProfiler=function(e){return Xt(e)===ll};ze.isStrictMode=function(e){return Xt(e)===sl};ze.isSuspense=function(e){return Xt(e)===fl};ze.isSuspenseList=function(e){return Xt(e)===pl};ze.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===al||e===ll||e===sl||e===fl||e===pl||e===gx||typeof e=="object"&&e!==null&&(e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===ul||e.$$typeof===cl||e.$$typeof===dl||e.$$typeof===k0||e.getModuleId!==void 0)};ze.typeOf=Xt;(function(e){e.exports=ze})(hx);function vx(e){function t(S,y,T,F,_){for(var K=0,j=0,be=0,he=0,me,re,Oe=0,ye=0,xe,x=xe=me=0,E=0,N=0,q=0,z=0,M=T.length,Y=M-1,_e,G="",De="",Ot="",kt="",R;E<M;){if(re=T.charCodeAt(E),E===Y&&j+he+be+K!==0&&(j!==0&&(re=j===47?10:47),he=be=K=0,M++,Y++),j+he+be+K===0){if(E===Y&&(0<N&&(G=G.replace(g,"")),0<G.trim().length)){switch(re){case 32:case 9:case 59:case 13:case 10:break;default:G+=T.charAt(E)}re=59}switch(re){case 123:for(G=G.trim(),me=G.charCodeAt(0),xe=1,z=++E;E<M;){switch(re=T.charCodeAt(E)){case 123:xe++;break;case 125:xe--;break;case 47:switch(re=T.charCodeAt(E+1)){case 42:case 47:e:{for(x=E+1;x<Y;++x)switch(T.charCodeAt(x)){case 47:if(re===42&&T.charCodeAt(x-1)===42&&E+2!==x){E=x+1;break e}break;case 10:if(re===47){E=x+1;break e}}E=x}}break;case 91:re++;case 40:re++;case 34:case 39:for(;E++<Y&&T.charCodeAt(E)!==re;);}if(xe===0)break;E++}switch(xe=T.substring(z,E),me===0&&(me=(G=G.replace(p,"").trim()).charCodeAt(0)),me){case 64:switch(0<N&&(G=G.replace(g,"")),re=G.charCodeAt(1),re){case 100:case 109:case 115:case 45:N=y;break;default:N=Fe}if(xe=t(y,N,xe,re,_+1),z=xe.length,0<H&&(N=n(Fe,G,q),R=s(3,xe,N,y,oe,ie,z,re,_,F),G=N.join(""),R!==void 0&&(z=(xe=R.trim()).length)===0&&(re=0,xe="")),0<z)switch(re){case 115:G=G.replace(U,a);case 100:case 109:case 45:xe=G+"{"+xe+"}";break;case 107:G=G.replace(c,"$1 $2"),xe=G+"{"+xe+"}",xe=Se===1||Se===2&&o("@"+xe,3)?"@-webkit-"+xe+"@"+xe:"@"+xe;break;default:xe=G+xe,F===112&&(xe=(De+=xe,""))}else xe="";break;default:xe=t(y,n(y,G,q),xe,F,_+1)}Ot+=xe,xe=q=N=x=me=0,G="",re=T.charCodeAt(++E);break;case 125:case 59:if(G=(0<N?G.replace(g,""):G).trim(),1<(z=G.length))switch(x===0&&(me=G.charCodeAt(0),me===45||96<me&&123>me)&&(z=(G=G.replace(" ",":")).length),0<H&&(R=s(1,G,y,S,oe,ie,De.length,F,_,F))!==void 0&&(z=(G=R.trim()).length)===0&&(G="\0\0"),me=G.charCodeAt(0),re=G.charCodeAt(1),me){case 0:break;case 64:if(re===105||re===99){kt+=G+T.charAt(E);break}default:G.charCodeAt(z-1)!==58&&(De+=i(G,me,re,G.charCodeAt(2)))}q=N=x=me=0,G="",re=T.charCodeAt(++E)}}switch(re){case 13:case 10:j===47?j=0:1+me===0&&F!==107&&0<G.length&&(N=1,G+="\0"),0<H*le&&s(0,G,y,S,oe,ie,De.length,F,_,F),ie=1,oe++;break;case 59:case 125:if(j+he+be+K===0){ie++;break}default:switch(ie++,_e=T.charAt(E),re){case 9:case 32:if(he+K+j===0)switch(Oe){case 44:case 58:case 9:case 32:_e="";break;default:re!==32&&(_e=" ")}break;case 0:_e="\\0";break;case 12:_e="\\f";break;case 11:_e="\\v";break;case 38:he+j+K===0&&(N=q=1,_e="\f"+_e);break;case 108:if(he+j+K+ve===0&&0<x)switch(E-x){case 2:Oe===112&&T.charCodeAt(E-3)===58&&(ve=Oe);case 8:ye===111&&(ve=ye)}break;case 58:he+j+K===0&&(x=E);break;case 44:j+be+he+K===0&&(N=1,_e+="\r");break;case 34:case 39:j===0&&(he=he===re?0:he===0?re:he);break;case 91:he+j+be===0&&K++;break;case 93:he+j+be===0&&K--;break;case 41:he+j+K===0&&be--;break;case 40:if(he+j+K===0){if(me===0)switch(2*Oe+3*ye){case 533:break;default:me=1}be++}break;case 64:j+be+he+K+x+xe===0&&(xe=1);break;case 42:case 47:if(!(0<he+K+be))switch(j){case 0:switch(2*re+3*T.charCodeAt(E+1)){case 235:j=47;break;case 220:z=E,j=42}break;case 42:re===47&&Oe===42&&z+2!==E&&(T.charCodeAt(z+2)===33&&(De+=T.substring(z,E+1)),_e="",j=0)}}j===0&&(G+=_e)}ye=Oe,Oe=re,E++}if(z=De.length,0<z){if(N=y,0<H&&(R=s(2,De,N,S,oe,ie,z,F,_,F),R!==void 0&&(De=R).length===0))return kt+De+Ot;if(De=N.join(",")+"{"+De+"}",Se*ve!==0){switch(Se!==2||o(De,2)||(ve=0),ve){case 111:De=De.replace(b,":-moz-$1")+De;break;case 112:De=De.replace(v,"::-webkit-input-$1")+De.replace(v,"::-moz-$1")+De.replace(v,":-ms-input-$1")+De}ve=0}}return kt+De+Ot}function n(S,y,T){var F=y.trim().split(O);y=F;var _=F.length,K=S.length;switch(K){case 0:case 1:var j=0;for(S=K===0?"":S[0]+" ";j<_;++j)y[j]=r(S,y[j],T).trim();break;default:var be=j=0;for(y=[];j<_;++j)for(var he=0;he<K;++he)y[be++]=r(S[he]+" ",F[j],T).trim()}return y}function r(S,y,T){var F=y.charCodeAt(0);switch(33>F&&(F=(y=y.trim()).charCodeAt(0)),F){case 38:return y.replace(m,"$1"+S.trim());case 58:return S.trim()+y.replace(m,"$1"+S.trim());default:if(0<1*T&&0<y.indexOf("\f"))return y.replace(m,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+y}function i(S,y,T,F){var _=S+";",K=2*y+3*T+4*F;if(K===944){S=_.indexOf(":",9)+1;var j=_.substring(S,_.length-1).trim();return j=_.substring(0,S).trim()+j+";",Se===1||Se===2&&o(j,1)?"-webkit-"+j+j:j}if(Se===0||Se===2&&!o(_,1))return _;switch(K){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(Re,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return j=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+_+"-ms-flex-pack"+j+_;case 1005:return C.test(_)?_.replace(P,":-webkit-")+_.replace(P,":-moz-")+_:_;case 1e3:switch(j=_.substring(13).trim(),y=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(y)){case 226:j=_.replace(A,"tb");break;case 232:j=_.replace(A,"tb-rl");break;case 220:j=_.replace(A,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+j+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(y=(_=S).length-10,j=(_.charCodeAt(y)===33?_.substring(0,y):_).substring(S.indexOf(":",7)+1).trim(),K=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:_=_.replace(j,"-webkit-"+j)+";"+_;break;case 207:case 102:_=_.replace(j,"-webkit-"+(102<K?"inline-":"")+"box")+";"+_.replace(j,"-webkit-"+j)+";"+_.replace(j,"-ms-"+j+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return j=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+j+"-ms-flex-"+j+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(W,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(W,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(J.test(S)===!0)return(j=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?i(S.replace("stretch","fill-available"),y,T,F).replace(":fill-available",":stretch"):_.replace(j,"-webkit-"+j)+_.replace(j,"-moz-"+j.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,T+F===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+_}return _}function o(S,y){var T=S.indexOf(y===1?":":"{"),F=S.substring(0,y!==3?T:10);return T=S.substring(T+1,S.length-1),Q(y!==2?F:F.replace(ce,"$1"),T,y)}function a(S,y){var T=i(y,y.charCodeAt(0),y.charCodeAt(1),y.charCodeAt(2));return T!==y+";"?T.replace(D," or ($1)").substring(4):"("+y+")"}function s(S,y,T,F,_,K,j,be,he,me){for(var re=0,Oe=y,ye;re<H;++re)switch(ye=Ae[re].call(d,S,Oe,T,F,_,K,j,be,he,me)){case void 0:case!1:case!0:case null:break;default:Oe=ye}if(Oe!==y)return Oe}function l(S){switch(S){case void 0:case null:H=Ae.length=0;break;default:if(typeof S=="function")Ae[H++]=S;else if(typeof S=="object")for(var y=0,T=S.length;y<T;++y)l(S[y]);else le=!!S|0}return l}function u(S){return S=S.prefix,S!==void 0&&(Q=null,S?typeof S!="function"?Se=1:(Se=2,Q=S):Se=0),u}function d(S,y){var T=S;if(33>T.charCodeAt(0)&&(T=T.trim()),k=T,T=[k],0<H){var F=s(-1,y,T,T,oe,ie,0,0,0,0);F!==void 0&&typeof F=="string"&&(y=F)}var _=t(Fe,T,y,0,0);return 0<H&&(F=s(-2,_,T,T,oe,ie,_.length,0,0,0),F!==void 0&&(_=F)),k="",ve=0,ie=oe=1,_}var p=/^\0+/g,g=/[\0\r\f]/g,P=/: */g,C=/zoo|gra/,f=/([,: ])(transform)/g,O=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,U=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,W=/-self|flex-/g,ce=/[^]*?(:[rp][el]a[\w-]+)[^]*/,J=/stretch|:\s*\w+\-(?:conte|avail)/,Re=/([^-])(image-set\()/,ie=1,oe=1,ve=0,Se=1,Fe=[],Ae=[],H=0,Q=null,le=0,k="";return d.use=l,d.set=u,e!==void 0&&u(e),d}var yx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var wx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xp=xx(function(e){return wx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),wc={},Sx={get exports(){return wc},set exports(e){wc=e}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,Id=lt?Symbol.for("react.element"):60103,Dd=lt?Symbol.for("react.portal"):60106,gl=lt?Symbol.for("react.fragment"):60107,vl=lt?Symbol.for("react.strict_mode"):60108,yl=lt?Symbol.for("react.profiler"):60114,xl=lt?Symbol.for("react.provider"):60109,wl=lt?Symbol.for("react.context"):60110,jd=lt?Symbol.for("react.async_mode"):60111,Sl=lt?Symbol.for("react.concurrent_mode"):60111,kl=lt?Symbol.for("react.forward_ref"):60112,_l=lt?Symbol.for("react.suspense"):60113,kx=lt?Symbol.for("react.suspense_list"):60120,El=lt?Symbol.for("react.memo"):60115,Cl=lt?Symbol.for("react.lazy"):60116,_x=lt?Symbol.for("react.block"):60121,Ex=lt?Symbol.for("react.fundamental"):60117,Cx=lt?Symbol.for("react.responder"):60118,bx=lt?Symbol.for("react.scope"):60119;function Ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Id:switch(e=e.type,e){case jd:case Sl:case gl:case yl:case vl:case _l:return e;default:switch(e=e&&e.$$typeof,e){case wl:case kl:case Cl:case El:case xl:return e;default:return t}}case Dd:return t}}}function _0(e){return Ht(e)===Sl}Me.AsyncMode=jd;Me.ConcurrentMode=Sl;Me.ContextConsumer=wl;Me.ContextProvider=xl;Me.Element=Id;Me.ForwardRef=kl;Me.Fragment=gl;Me.Lazy=Cl;Me.Memo=El;Me.Portal=Dd;Me.Profiler=yl;Me.StrictMode=vl;Me.Suspense=_l;Me.isAsyncMode=function(e){return _0(e)||Ht(e)===jd};Me.isConcurrentMode=_0;Me.isContextConsumer=function(e){return Ht(e)===wl};Me.isContextProvider=function(e){return Ht(e)===xl};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Id};Me.isForwardRef=function(e){return Ht(e)===kl};Me.isFragment=function(e){return Ht(e)===gl};Me.isLazy=function(e){return Ht(e)===Cl};Me.isMemo=function(e){return Ht(e)===El};Me.isPortal=function(e){return Ht(e)===Dd};Me.isProfiler=function(e){return Ht(e)===yl};Me.isStrictMode=function(e){return Ht(e)===vl};Me.isSuspense=function(e){return Ht(e)===_l};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gl||e===Sl||e===yl||e===vl||e===_l||e===kx||typeof e=="object"&&e!==null&&(e.$$typeof===Cl||e.$$typeof===El||e.$$typeof===xl||e.$$typeof===wl||e.$$typeof===kl||e.$$typeof===Ex||e.$$typeof===Cx||e.$$typeof===bx||e.$$typeof===_x)};Me.typeOf=Ht;(function(e){e.exports=Me})(Sx);var $d=wc,Px={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Rx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},E0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ld={};Ld[$d.ForwardRef]=Rx;Ld[$d.Memo]=E0;function wp(e){return $d.isMemo(e)?E0:Ld[e.$$typeof]||Px}var Ox=Object.defineProperty,Ax=Object.getOwnPropertyNames,Sp=Object.getOwnPropertySymbols,Nx=Object.getOwnPropertyDescriptor,Ix=Object.getPrototypeOf,kp=Object.prototype;function C0(e,t,n){if(typeof t!="string"){if(kp){var r=Ix(t);r&&r!==kp&&C0(e,r,n)}var i=Ax(t);Sp&&(i=i.concat(Sp(t)));for(var o=wp(e),a=wp(t),s=0;s<i.length;++s){var l=i[s];if(!Tx[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=Nx(t,l);try{Ox(e,l,u)}catch{}}}}return e}var Dx=C0;function In(){return(In=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _p=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Sc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ks.typeOf(e)},_s=Object.freeze([]),dr=Object.freeze({});function Mo(e){return typeof e=="function"}function Ep(e){return e.displayName||e.name||"Component"}function zd(e){return e&&typeof e.styledComponentId=="string"}var Ii=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Md=typeof window<"u"&&"HTMLElement"in window,jx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function sa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $x=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&sa(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Wa=new Map,Es=new Map,xo=1,Aa=function(e){if(Wa.has(e))return Wa.get(e);for(;Es.has(xo);)xo++;var t=xo++;return Wa.set(e,t),Es.set(t,e),t},Lx=function(e){return Es.get(e)},zx=function(e,t){t>=xo&&(xo=t+1),Wa.set(e,t),Es.set(t,e)},Mx="style["+Ii+'][data-styled-version="5.3.9"]',Fx=new RegExp("^"+Ii+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ux=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Bx=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(Fx);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(zx(u,l),Ux(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},Vx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},b0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(Ii))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ii,"active"),r.setAttribute("data-styled-version","5.3.9");var a=Vx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Hx=function(){function e(n){var r=this.element=b0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}sa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Zx=function(){function e(n){var r=this.element=b0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Wx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Cp=Md,Kx={isServer:!Md,useCSSOMInjection:!jx},P0=function(){function e(n,r,i){n===void 0&&(n=dr),r===void 0&&(r={}),this.options=In({},Kx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Md&&Cp&&(Cp=!1,function(o){for(var a=document.querySelectorAll(Mx),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ii)!=="active"&&(Bx(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Aa(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(In({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new Wx(a):o?new Hx(a):new Zx(a),new $x(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Aa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Aa(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Aa(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=Lx(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var d=Ii+".g"+a+'[id="'+s+'"]',p="";l!==void 0&&l.forEach(function(g){g.length>0&&(p+=g+",")}),o+=""+u+d+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),Qx=/(a)(d)/gi,bp=function(e){return String.fromCharCode(e+(e>25?39:97))};function kc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=bp(t%52)+n;return(bp(t%52)+n).replace(Qx,"$1-$2")}var mi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},T0=function(e){return mi(5381,e)};function qx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mo(n)&&!zd(n))return!1}return!0}var Yx=T0("5.3.9"),Gx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qx(t),this.componentId=n,this.baseHash=mi(Yx,n),this.baseStyle=r,P0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=Di(this.rules,t,n,r).join(""),s=kc(mi(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,d=mi(this.baseHash,r.hash),p="",g=0;g<u;g++){var P=this.rules[g];if(typeof P=="string")p+=P;else if(P){var C=Di(P,t,n,r),f=Array.isArray(C)?C.join(""):C;d=mi(d,f+g),p+=f}}if(p){var O=kc(d>>>0);if(!n.hasNameForId(i,O)){var m=r(p,"."+O,void 0,i);n.insertRules(i,O,m)}o.push(O)}}return o.join(" ")},e}(),Xx=/^\s*\/\/.*$/gm,Jx=[":","[",".","#"];function ew(e){var t,n,r,i,o=e===void 0?dr:e,a=o.options,s=a===void 0?dr:a,l=o.plugins,u=l===void 0?_s:l,d=new vx(s),p=[],g=function(f){function O(m){if(m)try{f(m+"}")}catch{}}return function(m,c,v,b,A,U,D,W,ce,J){switch(m){case 1:if(ce===0&&c.charCodeAt(0)===64)return f(c+";"),"";break;case 2:if(W===0)return c+"/*|*/";break;case 3:switch(W){case 102:case 112:return f(v[0]+c),"";default:return c+(J===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(O)}}}(function(f){p.push(f)}),P=function(f,O,m){return O===0&&Jx.indexOf(m[n.length])!==-1||m.match(i)?f:"."+t};function C(f,O,m,c){c===void 0&&(c="&");var v=f.replace(Xx,""),b=O&&m?m+" "+O+" { "+v+" }":v;return t=c,n=O,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(m||!O?"":O,b)}return d.use([].concat(u,[function(f,O,m){f===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,P))},g,function(f){if(f===-2){var O=p;return p=[],O}}])),C.hash=u.length?u.reduce(function(f,O){return O.name||sa(15),mi(f,O.name)},5381).toString():"",C}var R0=Nt.createContext();R0.Consumer;var O0=Nt.createContext(),tw=(O0.Consumer,new P0),_c=ew();function nw(){return $.useContext(R0)||tw}function rw(){return $.useContext(O0)||_c}var iw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=_c);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return sa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=_c),this.name+t.hash},e}(),ow=/([A-Z])/,aw=/([A-Z])/g,sw=/^ms-/,lw=function(e){return"-"+e.toLowerCase()};function Pp(e){return ow.test(e)?e.replace(aw,lw).replace(sw,"-ms-"):e}var Tp=function(e){return e==null||e===!1||e===""};function Di(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=Di(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Tp(e))return"";if(zd(e))return"."+e.styledComponentId;if(Mo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Di(l,t,n,r)}var u;return e instanceof iw?n?(e.inject(n,r),e.getName(r)):e:Sc(e)?function d(p,g){var P,C,f=[];for(var O in p)p.hasOwnProperty(O)&&!Tp(p[O])&&(Array.isArray(p[O])&&p[O].isCss||Mo(p[O])?f.push(Pp(O)+":",p[O],";"):Sc(p[O])?f.push.apply(f,d(p[O],O)):f.push(Pp(O)+": "+(P=O,(C=p[O])==null||typeof C=="boolean"||C===""?"":typeof C!="number"||C===0||P in yx?String(C).trim():C+"px")+";"));return g?[g+" {"].concat(f,["}"]):f}(e):e.toString()}var Rp=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function uw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Mo(e)||Sc(e)?Rp(Di(_p(_s,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Rp(Di(_p(e,n)))}var cw=function(e,t,n){return n===void 0&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme},dw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fw=/(^-|-$)/g;function lu(e){return e.replace(dw,"-").replace(fw,"")}var pw=function(e){return kc(T0(e)>>>0)};function Na(e){return typeof e=="string"&&!0}var Ec=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},hw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function mw(e,t,n){var r=e[n];Ec(t)&&Ec(r)?A0(r,t):e[n]=t}function A0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Ec(a))for(var s in a)hw(s)&&mw(e,a[s],s)}return e}var N0=Nt.createContext();N0.Consumer;var uu={};function I0(e,t,n){var r=zd(e),i=!Na(e),o=t.attrs,a=o===void 0?_s:o,s=t.componentId,l=s===void 0?function(c,v){var b=typeof c!="string"?"sc":lu(c);uu[b]=(uu[b]||0)+1;var A=b+"-"+pw("5.3.9"+b+uu[b]);return v?v+"-"+A:A}(t.displayName,t.parentComponentId):s,u=t.displayName,d=u===void 0?function(c){return Na(c)?"styled."+c:"Styled("+Ep(c)+")"}(e):u,p=t.displayName&&t.componentId?lu(t.displayName)+"-"+t.componentId:t.componentId||l,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,P=t.shouldForwardProp;r&&e.shouldForwardProp&&(P=t.shouldForwardProp?function(c,v,b){return e.shouldForwardProp(c,v,b)&&t.shouldForwardProp(c,v,b)}:e.shouldForwardProp);var C,f=new Gx(n,p,r?e.componentStyle:void 0),O=f.isStatic&&a.length===0,m=function(c,v){return function(b,A,U,D){var W=b.attrs,ce=b.componentStyle,J=b.defaultProps,Re=b.foldedComponentIds,ie=b.shouldForwardProp,oe=b.styledComponentId,ve=b.target,Se=function(F,_,K){F===void 0&&(F=dr);var j=In({},_,{theme:F}),be={};return K.forEach(function(he){var me,re,Oe,ye=he;for(me in Mo(ye)&&(ye=ye(j)),ye)j[me]=be[me]=me==="className"?(re=be[me],Oe=ye[me],re&&Oe?re+" "+Oe:re||Oe):ye[me]}),[j,be]}(cw(A,$.useContext(N0),J)||dr,A,W),Fe=Se[0],Ae=Se[1],H=function(F,_,K,j){var be=nw(),he=rw(),me=_?F.generateAndInjectStyles(dr,be,he):F.generateAndInjectStyles(K,be,he);return me}(ce,D,Fe),Q=U,le=Ae.$as||A.$as||Ae.as||A.as||ve,k=Na(le),S=Ae!==A?In({},A,{},Ae):A,y={};for(var T in S)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?y.as=S[T]:(ie?ie(T,xp,le):!k||xp(T))&&(y[T]=S[T]));return A.style&&Ae.style!==A.style&&(y.style=In({},A.style,{},Ae.style)),y.className=Array.prototype.concat(Re,oe,H!==oe?H:null,A.className,Ae.className).filter(Boolean).join(" "),y.ref=Q,$.createElement(le,y)}(C,c,v,O)};return m.displayName=d,(C=Nt.forwardRef(m)).attrs=g,C.componentStyle=f,C.displayName=d,C.shouldForwardProp=P,C.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):_s,C.styledComponentId=p,C.target=r?e.target:e,C.withComponent=function(c){var v=t.componentId,b=function(U,D){if(U==null)return{};var W,ce,J={},Re=Object.keys(U);for(ce=0;ce<Re.length;ce++)W=Re[ce],D.indexOf(W)>=0||(J[W]=U[W]);return J}(t,["componentId"]),A=v&&v+"-"+(Na(c)?c:lu(Ep(c)));return I0(c,In({},b,{attrs:g,componentId:A}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?A0({},e.defaultProps,c):c}}),Object.defineProperty(C,"toString",{value:function(){return"."+C.styledComponentId}}),i&&Dx(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Cc=function(e){return function t(n,r,i){if(i===void 0&&(i=dr),!ks.isValidElementType(r))return sa(1,String(r));var o=function(){return n(r,i,uw.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,In({},i,{},a))},o.attrs=function(a){return t(n,r,In({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(I0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Cc[e]=Cc(e)});const w=Cc;var bc={},gw={get exports(){return bc},set exports(e){bc=e}},D0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=$;function vw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yw=typeof Object.is=="function"?Object.is:vw,xw=ji.useState,ww=ji.useEffect,Sw=ji.useLayoutEffect,kw=ji.useDebugValue;function _w(e,t){var n=t(),r=xw({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Sw(function(){i.value=n,i.getSnapshot=t,cu(i)&&o({inst:i})},[e,n,t]),ww(function(){return cu(i)&&o({inst:i}),e(function(){cu(i)&&o({inst:i})})},[e]),kw(n),n}function cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yw(e,n)}catch{return!0}}function Ew(e,t){return t()}var Cw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ew:_w;D0.useSyncExternalStore=ji.useSyncExternalStore!==void 0?ji.useSyncExternalStore:Cw;(function(e){e.exports=D0})(gw);var Pc={},bw={get exports(){return Pc},set exports(e){Pc=e}},j0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=$,Pw=bc;function Tw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rw=typeof Object.is=="function"?Object.is:Tw,Ow=Pw.useSyncExternalStore,Aw=bl.useRef,Nw=bl.useEffect,Iw=bl.useMemo,Dw=bl.useDebugValue;j0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Aw(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Iw(function(){function l(P){if(!u){if(u=!0,d=P,P=r(P),i!==void 0&&a.hasValue){var C=a.value;if(i(C,P))return p=C}return p=P}if(C=p,Rw(d,P))return C;var f=r(P);return i!==void 0&&i(C,f)?C:(d=P,p=f)}var u=!1,d,p,g=n===void 0?null:n;return[function(){return l(t())},g===null?void 0:function(){return l(g())}]},[t,n,r,i]);var s=Ow(e,o[0],o[1]);return Nw(function(){a.hasValue=!0,a.value=s},[s]),Dw(s),s};(function(e){e.exports=j0})(bw);function jw(e){e()}let $0=jw;const $w=e=>$0=e,Lw=()=>$0,hr=$.createContext(null);function L0(){return $.useContext(hr)}const zw=()=>{throw new Error("uSES not initialized!")};let z0=zw;const Mw=e=>{z0=e},Fw=(e,t)=>e===t;function Uw(e=hr){const t=e===hr?L0:()=>$.useContext(e);return function(r,i=Fw){const{store:o,subscription:a,getServerState:s}=t(),l=z0(a.addNestedSub,o.getState,s||o.getState,r,i);return $.useDebugValue(l),l}}const Fo=Uw();function Bw(){const e=Lw();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Op={notify(){},get:()=>[]};function Vw(e,t){let n,r=Op;function i(p){return l(),r.subscribe(p)}function o(){r.notify()}function a(){d.onStateChange&&d.onStateChange()}function s(){return!!n}function l(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=Bw())}function u(){n&&(n(),n=void 0,r.clear(),r=Op)}const d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:s,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return d}const Hw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Zw=Hw?$.useLayoutEffect:$.useEffect;function Ww({store:e,context:t,children:n,serverState:r}){const i=$.useMemo(()=>{const s=Vw(e);return{store:e,subscription:s,getServerState:r?()=>r:void 0}},[e,r]),o=$.useMemo(()=>e.getState(),[e]);Zw(()=>{const{subscription:s}=i;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),o!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[i,o]);const a=t||hr;return Nt.createElement(a.Provider,{value:i},n)}function M0(e=hr){const t=e===hr?L0:()=>$.useContext(e);return function(){const{store:r}=t();return r}}const Kw=M0();function Qw(e=hr){const t=e===hr?Kw:M0(e);return function(){return t().dispatch}}const Pl=Qw();Mw(Pc.useSyncExternalStoreWithSelector);$w(qa.unstable_batchedUpdates);const yt={ADD_PRODUCT:"cart/addProduct",OPEN_CART:"cart/open",CLOSE_CART:"cart/close",REMOVE_PRODUCT:"cart/removeProduct",INCREASE_PRODUCT_QUANTITY:"cart/increaseProductQuantity",DECREASE_PRODUCT_QUANTITY:"cart/decreaseProductQuantity",CLEAR_CART:"cart/clearCart",ADD_TO_HISTORY:"cart/addToHistory"},qw=e=>({type:yt.ADD_PRODUCT,payload:e}),Yw=()=>({type:yt.OPEN_CART}),Gw=()=>({type:yt.CLOSE_CART}),F0=e=>({type:yt.REMOVE_PRODUCT,payload:e}),Xw=e=>({type:yt.INCREASE_PRODUCT_QUANTITY,payload:e}),Jw=e=>({type:yt.DECREASE_PRODUCT_QUANTITY,payload:e}),eS=()=>({type:yt.CLEAR_CART}),tS=e=>({type:yt.ADD_TO_HISTORY,payload:e}),nS=w.div`
width: 20vw;
min-height: 100%;
background-color: #ffffff;
border-right: 1px solid #e2e2e2;
display: flex;
animation: animacaoDeEntrada 0.5s ease;
flex-direction: column;
z-index: 1;

@keyframes animacaoDeEntrada {
    from{
        margin-right: 500px
    } 
    to{
        margin-right: 0px
    }
}

@media only screen and (min-width: 1000px) and (max-width: 1250px) {
width: 400px;
}

@media only screen and (min-width: 800px) and (max-width: 999px) {
width: 400px;
height: 500px;
margin-top: 270px;
position: absolute;
}
@media only screen and (max-width: 799px) {
width: 400px;
height: 500px;
margin-top: 500px;
position: absolute;
}
`,rS=w.div`
width: 100%;
height: 50px;
display: flex;
justify-content: flex-end;
`,iS=w.img`
width: 35px;
height: 35px;
margin-right: 10px;
margin-top: 10px;
cursor: pointer;
`,oS=w.div`
margin-top: 15px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
overflow:auto; 
overflow-x: hidden;  
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}
`,aS=w.div`
width: 100%;
height: 100px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media only screen and (max-width: 1250px) {
}
@media only screen and (max-width: 799px) {
margin-left: 0px;
}
`,sS=w.h1`
font-size: 30px;
text-align: center;
color: #5a5a5a;
`,lS=w.p`
font-size: 16px;
text-align: center;
color: #5a5a5a;
`,uS=w.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #e2e2e2;
border-top: 1px solid #e2e2e2;
margin-top: 5px;
gap: 5px;

`,cS=w.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
`,dS=w.img`
width: 100px;
height: 100px;
gap: 10px;

@media only screen and (min-width: 1000px) and (max-width: 1250px) {
margin-left: 100px;
}
@media only screen and(max-width: 999px) {
margin-left: 0;
}

`,fS=w.div`
width: 50%;
height: 150px;
display: flex;
justify-content: center;;
align-items: flex-start;
flex-direction: column;
margin-left: 10px;
gap: 2px;

@media only screen and (max-width: 1250px) {
width: 200px;
margin-left: 20px;
}
`,pS=w.h1`
font-size: 14px;
`,hS=w.p`
color: #0f0f0f;
font-weight: 600;
font-size: 12px;
`,mS=w.div`
width:50px;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
`,gS=w.p`
width: 10px;
font-size: 30px;
cursor: pointer;
`,vS=w.p`
width: 10px;
font-size: 20px;
cursor: pointer;
`,yS=w.p`
font-size: 18px;
`,xS=w.p`
color: #eb2929;
font-weight: 600;
font-size: 14px;
`,wS=w.img`
width: 15px;
height: 15px;
cursor: pointer;
margin-top: 80px;
margin-right: 10px;

@media only screen and (max-width: 1400px) {
    margin-left: 20px;
}
`,SS=w.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
border-bottom: 1px solid #e2e2e2;
text-align: center;
align-items: center;
display: flex;
flex-direction: column;



@media only screen and (max-width: 999px) {
    padding-bottom: 20px;
}

@media only screen and (min-width: 1000px) and (max-width: 1250px) {
margin-left: 50px;
padding-bottom: 20px;
}
`;w.h1`
font-size: 20px;
color: black;
cursor: pointer;
padding-top: 5px;
`;const kS=w.button`
width: 120px;
height: 40px;
cursor: pointer;
background-color: red;
color: white;
border: none;
border-radius: 5px;
font-size: 14px;
font-weight: 600;
`,_S=()=>{const{products:e}=Fo(r=>r.cartReducer),t=Pl();return V(nS,{children:[h(rS,{children:h(iS,{onClick:()=>{t(Gw())},src:"./img/close.png"})}),V(oS,{children:[e.length<1?V(aS,{children:[h(sS,{children:"Carrinho"}),h(lS,{children:"Nenhum item ainda, vá comprar!"})]}):null,e.map(r=>V(uS,{children:[h(cS,{children:h(dS,{src:r.url})}),V(fS,{children:[h(pS,{children:r.nome}),h(hS,{children:r.colecao}),V(mS,{children:[h(gS,{onClick:()=>{t(Jw(r.id))},children:"-"}),h(yS,{children:r.quantity}),h(vS,{onClick:()=>{t(Xw(r.id))},children:"+"})]}),h(xS,{children:`${r.preço.toFixed(2)} R$`})]}),h(wS,{onClick:()=>{t(F0(r.id))},src:"./img/trash.png"})]},r.id))]}),e.length>0?h(SS,{children:h(zt,{to:"/Checkout",children:h(kS,{onClick:()=>{toggleCheckoutEstado()},children:"Finalizar Compra"})})}):null]})},Zn={textDecoration:"none",color:"black"},ES=w.div`
    width: 20vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #e2e2e2;
    position: fixed;
    z-index: 1;

@media only screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100vw;
    height: 20vh;
    flex-direction: row;
    position: relative;
    background-color: transparent;
    
}
  @media only screen and (max-width: 800px) {
    width: 100vw;
    height: 0px;
    flex-direction: row;
    border-bottom: none;
    background-color: transparent;
    position: relative;
}
`,CS=w.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

@media only screen and (min-width: 801px) and (max-width: 1000px) {
    display: none;
}
@media only screen and (max-width: 800px) {
    width: 50%;
    display: none;
}
@media only screen and (min-width: 1600px) {
height: 200px;
}
`,bS=w.div`
width: 100%;
height: 65%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

@media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 100%;
}
@media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    height: 100%;
    margin-top: 75px;
    gap: 20px;
}
`,PS=w.img`
width: 100px;
height: 80px;
cursor: pointer;

@media only screen and (max-width: 1000px) {
    display: none;
}
@media only screen and (min-width: 1600px) {
width: 150px;
height: 120px;
margin-top: 10px;
}
`,_r=w.div`
width: 200px;
height: 40px;
border-radius: 20px;
cursor: pointer;
display: flex;
align-items: center;

&:hover{
    background-color: #58585814;
}
@media only screen and (max-width: 1000px) {
    width: 100px;
    
&:hover{
    background-color: transparent;
}
}
`,Er=w.img`
width: 25px;
height: 25px;
cursor: pointer;
margin-left: 20px;

@media only screen and (max-width: 1000px) {
background-color: white;
padding: 10px;
border-radius: 5px;
}

`,Cr=w.p`
font-family: "Roboto", sans-serif;
margin-left: 30px;
font-weight: 500;

@media only screen and (max-width: 1000px) {
    display: none;
}
@media only screen and (min-width: 1600px) {
font-size: 22px;

}
`,TS=w.div`
height: 150px;
width: 100%;
display: flex;
align-items:  center;
justify-content: center;
margin-top: 20px;
border-top: 1px solid #e2e2e2;
border-bottom: 1px solid #e2e2e2;
position: relative;

@media only screen and (max-width: 800px) {
    border: none; 
    margin-top: 0px;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: 20px;
}

@media only screen and (max-width: 1000px) {
    border: none; 
    margin-top: 0px;
}
@media only screen and (min-width: 1500px) {
    margin-top: 50px;
}
`,RS=w.img`
width: 50px;
height: 50px;
cursor: pointer;

@media only screen and (max-width: 800px) {
margin-top: 100px;
}
@media only screen and (max-width: 1000px) {
    width: 35px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
}
`,Ap=w.div`
width: 25px;
height: 25px;
position: absolute;
border-radius: 50%;
color: white;
display: flex;
justify-content: center;
text-align: center;
margin-right: 40px;
margin-bottom: 30px;
background-color: red;
`,Np=w.p`
color: white;
margin-top: 3px;
`,Sr=()=>{const{favorito:e}=$.useContext(ol),t=Pl(),{cartIsOpen:n}=Fo(o=>o.cartReducer),{products:r}=Fo(o=>o.cartReducer),i=()=>{t(Yw())};return V(ES,{children:[n?h(_S,{}):null,h(CS,{children:h(zt,{to:"/",style:Zn,children:h(PS,{src:"./img/logo.jfif"})})}),V(bS,{children:[h(zt,{to:"/",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/house.png"}),h(Cr,{children:"Home"})]})}),h(zt,{to:"/Perfil",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/account.png"}),h(Cr,{children:"Profile"})]})}),h(zt,{to:"/Camisas",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/shirt.png"}),h(Cr,{children:"Tshirts"})]})}),h(zt,{to:"/Bermudas",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/shorts.png"}),h(Cr,{children:"Bermudas"})]})}),h(zt,{to:"/FootWear",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/shoes.png"}),h(Cr,{children:"FootWear"})]})}),h(zt,{to:"/HeadWear",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/cap.png"}),h(Cr,{children:"Headwear"})]})}),h(zt,{to:"/Favorites",style:Zn,children:V(_r,{children:[h(Er,{src:"./img/heart-full.png"}),h(Cr,{children:"Favorites"}),e.length>0&&h(Ap,{children:h(Np,{children:e.length})})]})})]}),V(TS,{children:[h(RS,{onClick:i,src:"./img/add.png"}),r.length>0?h(Ap,{children:h(Np,{children:r.length})}):null]})]})},OS=w.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 8px;
`,AS=w.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 50px;
`,NS=w.img`
position: absolute;
cursor: pointer;
opacity: 0.4;
margin-left: 950px;

&:hover{
  opacity: 0.9
}

@media only screen and (max-width: 1250px) {
  margin-left: 800px;
}

@media only screen and (max-width: 1050px) {
  margin-left: 600px;
}
@media only screen and (max-width: 800px) {
  margin-top: 300px;
  margin-left: 100px;
}
@media only screen and (min-width: 1750px) {
  margin-left: 1300px;
}
`,IS=w.img`
position: absolute;
transform: rotate(0.5turn);
cursor: pointer;
opacity: 0.4;
margin-right: 950px;

&:hover{
  opacity: 0.9
}
@media only screen and (max-width: 1250px) {
  margin-right: 800px;
}

@media only screen and (max-width: 1050px) {
  margin-right: 600px;
}
@media only screen and (max-width: 800px) {
  margin-top: 300px;
  margin-right: 100px;
}
@media only screen and (min-width: 1750px) {
  margin-right: 1300px;
}
`,DS=w.img`
height: 450px;
width: 1250px;
filter: grayscale(0.5);

@media only screen and (max-width: 1000px) {
  flex-direction: column;
}  
@media only screen and (min-width: 1550px) {
  height: 550px;
  width: 1550px;
}
@media only screen and (min-width: 1850px) {
  height: 550px;
  width: 1750px;
}
`,jS=({images:e})=>{const[t,n]=$.useState(0),r=()=>{const o=t===0?e.length-1:t-1;n(o)},i=()=>{const o=t===e.length-1?0:t+1;n(o)};return $.useEffect(()=>{const o=setInterval(()=>{const a=t===e.length-1?0:t+1;n(a)},5e3);return()=>clearInterval(o)},[t,e.length]),h(OS,{children:V(AS,{children:[h(DS,{src:e[t],alt:"carousel"}),h(NS,{src:"./img/sym.png",onClick:r}),h(IS,{src:"./img/sym.png",onClick:i})]})})},$S=w.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: row;

@media only screen and (min-width: 1550px) {
height: 400px;
}
@media only screen and (max-width: 500px) {
width: 90%;
}
`,LS=w.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 15px;
margin-top: 20px;
overflow-x: auto;
@media only screen and (max-width: 800px) and (min-width: 600px){
    justify-content: center;
    gap: 60px;
}
@media only screen and (max-width: 599px) and (min-width: 0px){
    margin-left: 0px;
    gap: 30px;
    justify-content: flex-start;
}
`,du=w.div`
width: 330px;
height: 180px;
background-image: url("");
background-size: 400px;
position: relative;
filter: grayscale(1);
cursor: pointer;
border-radius: 10px;

&:hover{
    animation: animationCard 1s ease both;
}

@keyframes animationCard {
    100%{
        filter: grayscale(0);
        scale: 1.05;
    }
}
@media only screen and (max-width: 800px) and (min-width: 0px){
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

@media only screen and (min-width: 801px) and (max-width: 1300px) {
    width: 250px;
    height: 170px;
}

@media only screen and (min-width: 1550px) {
    height: 250px;
    width: 400px;
    background-size: cover;
}
@media only screen and (min-width: 1800px) {
    height: 250px;
    width: 450px;
    background-size: cover;
}
`,fu=w.h1`
font-size: 20px;
position: absolute;
color: #ffffff;
margin-left: 25px;
margin-top: 20px;

@media only screen and (max-width: 800px) and (min-width: 0px){
margin-top: 60px;
}
@media only screen and (min-width: 1550px){
font-size: 30px;
}
`,zS=()=>h($S,{children:V(LS,{children:[h(zt,{to:"/Camisas",children:h(du,{style:{backgroundImage:'url("https://wantedind.com/wp-content/uploads/2023/01/BANNER-CLASSIC-1400x700.jpg")'},children:h(fu,{children:"CAMISETAS"})})}),h(zt,{to:"/Bermudas",children:h(du,{style:{backgroundImage:'url("https://wantedind.com/wp-content/uploads/2023/01/BANNER-1-1-800x800.png")',backgroundPositionY:"300px"},children:h(fu,{children:"BERMUDAS"})})}),h(zt,{to:"/HeadWear",children:h(du,{style:{backgroundImage:'url("https://wantedind.com/wp-content/uploads/2023/01/IMG_3421-800x800.jpg")',backgroundPositionY:"-120px"},children:h(fu,{children:"HEADWEAR"})})})]})}),MS=w.div`
background-color: #000000e8;
height: 300px;
width: 100%;
display: flex;
align-items: center;
margin-top: 100px;
align-self: flex-end;

@media screen and ( max-width: 500px) {
  flex-direction: column;
}
@media screen and ( min-width: 1500px) {
margin-top: 150px;
}
`,FS=w.img`
width: 180px;
height: 130px;
opacity: 0.4;
border-radius: 10px;
cursor: pointer;

&:hover{
  animation: animate 1s ease both;
  @keyframes animate {
    to{
      opacity: 0.9;
    }
  }
}

@media screen and ( max-width: 500px) {
display: none;
}
@media screen and ( min-width: 1600px) {
width: 220px;
height: 150px;
}
`,US=w.div`
width:500px;
height: 100%;
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and ( max-width: 500px) {
display: none;
}
`,BS=w.div`
flex: 1;
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;

@media screen and (max-width: 600px) {
  font-size: 30px;
  flex-direction: column;
}
`,VS=w.ul`
gap: 20px;
display: flex;
flex-direction: column;

@media screen and (min-width: 501px) and (max-width: 600px) {
gap: 2px;
align-items: center;
}
@media screen and (max-width: 500px) {
gap: 25px;
align-items: center;
}
`,pu=w.a`
list-style: none;
letter-spacing: 8px;
margin-bottom: 10px;
cursor: pointer;
color: #ffffff;
opacity: 0.7;
margin-left: 10px;
font-size: 14px;
text-decoration: none;
&:hover{
    opacity: 1;
}
@media only screen and(min-width: 501px) and (max-width: 600px) {
   font-size: 10px;
}
@media only screen and (min-width: 1600px) {
   font-size: 20px;
}
@media only screen and (max-width: 500px) {
   font-size: 16px;
}
`,HS=w.div`
height: 50%;
width: 0.2px;
background-color: #ffffff28;

@media screen and (max-width: 600px) {
display: none;
}
`,Ui=()=>V(MS,{children:[h(US,{children:h(FS,{src:"./img/logo.jfif"})}),h(HS,{}),h(BS,{children:V(VS,{children:[h(pu,{href:"https://github.com/Ryanzitto",target:"_blank",children:"GITHUB"}),h(pu,{href:"https://www.linkedin.com/in/ryan-henrique-1b4075233/",target:"_blank",children:"LINKEDIN"}),h(pu,{style:{opacity:.2,textDecoration:"line-through",cursor:"not-allowed"},children:"PORTIFOLIO"})]})})]}),ZS=w.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-left: 50px;

&:hover{
    animation: animacao 0.5s ease both;
    @keyframes animacao {
        from{
            width:20px;
            height: 20px;
        }
        to{
            width: 23px;
            height: 23px;
            transform: translateY(-5px);
        }
    }
}
`,qr=({item:e})=>{const{favorito:t,setFavorito:n}=$.useContext(ol),[r,i]=$.useState(e.fav);return h(Yn,{children:h(ZS,{onClick:()=>{r==!1?(e.fav=!0,n([...t,e]),i(e.fav)):r==!0&&(e.fav=!1,i(e.fav),n(t.filter(a=>JSON.stringify(a)!==JSON.stringify(e))))},src:e.fav==!0?"./img/heart-full.png":"./img/heart-empty.png"})})},WS=w.img`
width: 20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-right: 50px;

&:hover{
    animation: animacao 0.5s ease both;
    @keyframes animacao {
        from{
            width:20px;
            height: 20px;
        }
        to{
            width: 23px;
            height: 23px;
            transform: translateY(-5px);
        }
    }
}
`,Yr=({item:e})=>{const t=Pl();return h(Yn,{children:h(WS,{onClick:()=>{t(qw(e))},src:"./img/add.png"})})},KS=w.div`
width: 80vw;
display: flex;
position: relative;

@media screen  and (max-width: 1000px) {
width: 90%;
}
`,QS=w.div`
width: 100%;
height: 350px;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-top:20px;
flex-direction: column;
align-items: center;
margin-top: 40px;
padding-bottom: 40px;
@media only screen and (max-width: 1000px) {
    width: 100vw
}
  @media only screen and (min-width: 1550px) {
    width: 100%;
    height: 400px;
}
`,qS=w.div`
width: 90%;
height: 100%;
display: flex;
overflow:auto; 
border-top: 1px solid #e2e2e2;
position: relative;
justify-content: center;
margin-right: 40px;
z-index: 0;

::-webkit-scrollbar {
  height: 5px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
   size: 3px;
  background: #000;
  border-radius: 3px;

}

@media only screen and (max-width: 1000px) {
    width: 90vw;
    justify-content: flex-start;
}
@media only screen and (min-width: 1500px) {
    gap: 50px;
}
`,YS=w.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 10px;
width: 250px;
`,GS=w.div`
width: 150px;
height: 150px;
display: flex;
flex-direction: column;
margin-top: 30px;
@media only screen and (max-width: 1000px) {
    width: 150px;
    height: 150px;
    margin-top: 0;
}
`,XS=w.img`
cursor: pointer;
background-color: white;
position: relative;
`,JS=w.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`,ek=w.h1`
font-size: 20px;
text-align: center;
`,tk=w.div`
display:flex;
justify-content: center;
width: 120px;
height: 30px;
`,nk=w.div`
width:200px;
display: flex;
position: relative;
justify-content: center;
align-items: center;
margin-bottom: -25px;
`,rk=w.h1`
font-size: 20px;
background-color: white;
position: absolute;
margin-top: -48px;
padding-left: 10px;
padding-right: 10px;
color: #141414e1;
z-index: 1;
`;w.button`
width: 80px;
height: 30px;
border: none;
border-radius: 5px;
background-color: #ffffffec;
font-size: 14px;
cursor: pointer;
font-weight: 500;
text-decoration: underline;
`;const ik=({data:e})=>h(KS,{children:V(QS,{children:[h(nk,{children:h(rk,{children:"MAIS VENDIDOS"})}),h(qS,{children:e.map(t=>V(YS,{children:[h(GS,{children:h(XS,{src:t.url})}),h(JS,{children:t.colecao}),V(ek,{children:[t.preço.toFixed(2)," R$"]}),V(tk,{children:[h(Yr,{item:t}),h(qr,{item:t})]})]},t.id))})]})}),ok=w.div`
width: 100vw;
height: 500px;
display: flex;
justify-content: flex-end;

@media only screen and (min-width: 1550px) {
}
`,ak=w.div`
width: 100vw;
height: 500px;
display: flex;
position: relative;
justify-content: center;

@media only screen and (max-width: 600px) {
    width: 650px;
}
@media only screen and (min-width: 1800px) {
    width: 100%;
}
`,sk=w.img`
height: 500px;
filter: grayscale(1);

@media only screen and (min-width: 1800px) {
    width: 100%;
    border-radius: 20px;
}

@media only screen and (min-width: 1400px) {
   width: 1220px;
}
@media only screen and (min-width: 1550px) {
    width: 1500px;
    height: 600px;
}
`,lk=w.div`
position: absolute;
width: 1000px;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
gap: 10px;

@media only screen and (max-width: 500px) {}
`,uk=w.h1`
font-size: 60px;
color: white;
margin-left: 50px;
letter-spacing: 2px;
padding: 10px;
background-color: #1b1b1bed;

@media only screen and (min-width: 501px) and (max-width: 1100px) {
    margin-left: 320px;
}
@media only screen and (min-width: 0px) and (max-width: 500px) {
    font-size: 30px;
    margin-left: 450px;
}
`,ck=w.p`
font-size: 20px;
font-weight: 600;
color: white;
margin-left: 50px;
letter-spacing: 2px;
width: 400px;
background-color: #1b1b1bed;
padding: 15px;

@media only screen and (max-width: 1100px) {
    margin-left: 320px;
}
@media only screen and (min-width: 0px) and (max-width: 500px) {
    font-size: 16px;
    width: 300px;
    margin-left: 450px;
}
`,dk=()=>h(ok,{children:V(ak,{children:[h(sk,{src:"https://wantedind.com/wp-content/uploads/2023/01/BANNER-OUTLET-WANTED-JANEIRO-1-1400x583.jpg"}),V(lk,{children:[h(uk,{children:"SIKE"}),h(ck,{children:"A SIKE APOIA A CULTURA DE RUA E A TECNOLOGIA, PARA QUE VOCÊ DESFRUTE DO MELHOR DOS DOIS MUNDOS."})]})]})}),fk=[{id:16,url:"https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1},{id:17,url:"https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1},{id:18,url:"https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1}],pk=["https://wantedind.com/wp-content/uploads/2023/03/BANNER-2-1.png","https://wantedind.com/wp-content/uploads/2023/03/BANNER-DROP-SECRETO-1.png","https://wantedind.com/wp-content/uploads/2023/03/BANNER-4-1.png","https://wantedind.com/wp-content/uploads/2023/03/BANNER-5-1.png","https://wantedind.com/wp-content/uploads/2023/03/BANNER-1-1-1.png","https://wantedind.com/wp-content/uploads/2023/02/LANÇAMENTO-CORRERIA-2.png"],hk=w.div`
width: 100vw;
height: 100vh;
display: flex;
overflow-x: hidden;

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;
}
@media only screen and (max-width: 1000px) {
  flex-direction: column;
}
`,mk=w.div`
width: 20vw;
height:100vh;
position: relative;

@media only screen and (max-width: 1000px) {
  width: 0;
  height: 0;
}
`,gk=w.div`
width: 80vw;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 1000px) {
  width: 100vw;
}
@media only screen and (min-width: 1550px) {
  height: 2100px;
}
`,vk=w.div`
width: 100%;
`,yk=()=>V(hk,{children:[h(mk,{children:h(Sr,{})}),V(gk,{children:[h(jS,{images:pk}),h(zS,{}),h(ik,{data:fk}),h(dk,{}),h(vk,{children:h(Ui,{})})]})]});function xk(){return h("div",{className:"App",children:h(X1,{})})}const Bi=$.createContext(),wk=({children:e})=>{const[t,n]=$.useState(null),[r,i]=$.useState(!1),o=s=>{n(s),i(!0)},a=()=>{i(!r)};return h(Bi.Provider,{value:{qualItem:t,setQualItem:n,isOpen:r,setIsOpen:i,defineItem:o,toggleStateDetalhes:a},children:e})},Sk=w.div`
background-color: #00000090;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: auto;
overflow-y: hidden;
position: absolute;
flex-direction: column;
z-index: 2;
`,kk=w.div`
background-color: #ffffff;
width: 60%;
height: 400px;
border-radius: 15px;
display: flex;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
animation: entrada 1s ease ;

@keyframes entrada {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@media screen and (max-width: 600px) {
flex-direction: column;
width: 90%;
justify-content: center;
align-items: center;
}

@media screen and (min-width: 601px) and (max-width: 1300px) {
flex-direction: column;
justify-content: center;
align-items: center;
}
`,_k=w.div`
width: 100%;
height: 50px;
display: flex;
justify-content: flex-end;
align-items: center;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
background-color: #ffffff;
`,Ek=w.div`
background-color: #ffffff;
width: 100%;
height: 600px;
border-bottom-right-radius: 15px;
border-bottom-left-radius: 15px;
display: flex;

@media screen and (max-width: 1300px) {
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
}

`,Ck=w.div`
width: 50%;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
`,bk=w.img`
width: 300px;

@media screen and (max-width: 1300px) {
width: 150px;
}
@media screen and (max-width: 800px) {
width: 150px;
}
`,Pk=w.p`
font-size: 20px;
font-weight: 500;

`,Tk=w.p`
font-size: 16px;
font-weight: 500;

`,Rk=w.p`
width: 80%;
margin-top: 30px;
font-weight: 700;
letter-spacing: 0.5px;
font-size: 1.2em;

@media screen and (max-width: 1300px) {
margin-top: 20px;
font-size: 1.0em;
}   

`,Ok=w.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 1300px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
`,Ak=w.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
text-align: center;
`,Nk=w.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
flex-direction: column;
`,Ik=w.img`
width: 25px;
height: 25px;
cursor: pointer;
margin-right: 8px;
margin-top: 6px;
`,Dk=w.div`
display:flex;
justify-content: flex-end;
align-items: center;
width: 95%;
height: 100px;
margin-right: 20px;
`,jk=w.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`,$k=w.p`
font-size: 16px;
font-weight: 500;
background-color: #141414;
color: white;
padding: 10px;
border-radius: 5px;
`,Lk=w.p`
font-size: 16px;
font-weight: 500;
background-color: #141414;
color: white;
padding: 10px;
border-radius: 5px;
`,Tl=({item:e})=>{const{toggleStateDetalhes:t}=$.useContext(Bi);return h(Sk,{children:V(kk,{children:[h(_k,{children:h(Ik,{onClick:t,src:"./img/close.png"})}),V(Ek,{children:[V(Ck,{children:[h(bk,{src:e.url}),h(Pk,{children:e.nome}),h(Tk,{children:`- ${e.colecao} -`})]}),V(Ok,{children:[h(Ak,{children:h(Rk,{children:e.descricao})}),V(Nk,{children:[V(jk,{children:[h($k,{children:"Tamanho: Padrão"}),h(Lk,{children:"Cor: Padrão"})]}),V(Dk,{children:[h(Yr,{item:e}),h(qr,{item:e})]})]})]})]},e.id)]})})},zk=w.div`
width:100vw;    
height: 100vh;
overflow-x: hidden;  
display: flex;
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}
@media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,Mk=w.div`
width: 20vw;
height: 100vh;
`,Fk=w.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media only screen and (max-width: 1000px) {
    width: 100vw
  }
@media only screen and (min-width: 1000px) {
    margin-left: 30px;
}
`,Uk=w.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`,Bk=w.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`,Vk=w.img`
cursor: pointer;
background-color: white;
position: relative;
`,Hk=w.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`,Zk=w.h1`
font-size: 20px;
text-align: center;
`,Wk=w.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
`,Kk=({data:e})=>{const{defineItem:t,isOpen:n,qualItem:r}=$.useContext(Bi);return V(zk,{children:[n?h(Tl,{item:r}):null,h(Mk,{children:h(Sr,{})}),V(Fk,{children:[e.map(i=>V(Uk,{children:[h(Bk,{children:h(Vk,{onClick:()=>{t(i)},src:i.url})}),h(Hk,{children:i.colecao}),V(Zk,{children:[i.preço.toFixed(2)," R$"]}),V(Wk,{children:[h(Yr,{item:i}),h(qr,{item:i})]})]},i.id)),h(Ui,{})]})]})},Qk=w.div`
display: flex;
width:100vw;
height: 100vh;
overflow-x: hidden;  
display: flex;
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}
@media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,qk=w.div`
width: 18vw;
height: 100vh;
`,Yk=w.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media only screen and (max-width: 1000px) {
    width: 100vw
}

@media only screen and (min-width: 1000px) {
    margin-left: 50px;
}
   
`,Gk=w.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

`,Xk=w.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`,Jk=w.img`
cursor: pointer;
`,e_=w.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`,t_=w.h1`
font-size: 20px;
text-align: center;
`,n_=w.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
gap: 10px;
`,r_=({data:e})=>{const{defineItem:t,isOpen:n,qualItem:r}=$.useContext(Bi);return V(Qk,{children:[h(qk,{children:h(Sr,{})}),n?h(Tl,{item:r}):null,V(Yk,{children:[e.map(i=>V(Gk,{children:[h(Xk,{children:h(Jk,{onClick:()=>{t(i)},src:i.url})}),h(e_,{children:i.colecao}),V(t_,{children:[i.preço.toFixed(2)," R$"]}),V(n_,{children:[h(Yr,{item:i}),h(qr,{item:i})]})]},i.id)),h(Ui,{})]})]})},i_=w.div`
display: flex;
width:100vw;
height: 100vh;
overflow-x: hidden;  
display: flex;
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}
@media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,o_=w.div`
width: 18vw;
height: 100vh;
`,a_=w.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media only screen and (max-width: 1000px) {
    width: 100vw
  }
  @media only screen and (min-width: 1000px) {
    margin-left: 50px;
}
`,s_=w.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`,l_=w.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`,u_=w.img`
cursor: pointer;
`,c_=w.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`,d_=w.h1`
font-size: 20px;
text-align: center;
`,f_=w.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
gap: 10px;
`,p_=({data:e})=>{const{defineItem:t,isOpen:n,qualItem:r}=$.useContext(Bi);return V(i_,{children:[h(o_,{children:h(Sr,{})}),n?h(Tl,{item:r}):null,V(a_,{children:[e.map(i=>V(s_,{children:[h(l_,{children:h(u_,{onClick:()=>{t(i)},src:i.url})}),h(c_,{children:i.colecao}),V(d_,{children:[i.preço.toFixed(2)," R$"]}),V(f_,{children:[h(Yr,{item:i}),h(qr,{item:i})]})]},i.id)),h(Ui,{})]})]})},h_=w.div`
display: flex;
width:100vw;
height: 100vh;
overflow-x: hidden;  
display: flex;
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}
@media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,m_=w.div`
width: 18vw;
height: 100vh;
`,g_=w.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
@media only screen and (max-width: 1000px) {
    width: 100vw
  }
@media only screen and (min-width: 1000px) {
    margin-left: 30px;
}
`,v_=w.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

`,y_=w.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`,x_=w.img`
cursor: pointer;
`,w_=w.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`,S_=w.h1`
font-size: 20px;
text-align: center;
`,k_=w.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
gap: 10px;
`,__=({data:e})=>{const{defineItem:t,isOpen:n,qualItem:r}=$.useContext(Bi);return V(h_,{children:[n?h(Tl,{item:r}):null,h(m_,{children:h(Sr,{})}),V(g_,{children:[e.map(i=>V(v_,{children:[h(y_,{children:h(x_,{onClick:()=>{t(i)},src:i.url})}),h(w_,{children:i.colecao}),V(S_,{children:[i.preço.toFixed(2)," R$"]}),V(k_,{children:[h(Yr,{item:i}),h(qr,{item:i})]})]},i.id)),h(Ui,{})]})]})};var la=e=>e.type==="checkbox",gi=e=>e instanceof Date,Ct=e=>e==null;const U0=e=>typeof e=="object";var ot=e=>!Ct(e)&&!Array.isArray(e)&&U0(e)&&!gi(e),E_=e=>ot(e)&&e.target?la(e.target)?e.target.checked:e.target.value:e,C_=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,b_=(e,t)=>e.has(C_(t)),P_=e=>{const t=e.constructor&&e.constructor.prototype;return ot(t)&&t.hasOwnProperty("isPrototypeOf")},Fd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Tr(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Fd&&(e instanceof Blob||e instanceof FileList))&&(n||ot(e)))if(t=n?[]:{},!Array.isArray(e)&&!P_(e))t=e;else for(const r in e)t[r]=Tr(e[r]);else return e;return t}var ua=e=>Array.isArray(e)?e.filter(Boolean):[],et=e=>e===void 0,se=(e,t,n)=>{if(!t||!ot(e))return n;const r=ua(t.split(/[,[\].]+?/)).reduce((i,o)=>Ct(i)?i:i[o],e);return et(r)||r===e?et(e[t])?n:e[t]:r};const Ip={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},on={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Pn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Nt.createContext(null);var T_=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==on.all&&(t._proxyFormState[a]=!r||on.all),n&&(n[a]=!0),e[a]}});return i},Zt=e=>ot(e)&&!Object.keys(e).length,R_=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Zt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||on.all))},hu=e=>Array.isArray(e)?e:[e];function O_(e){const t=Nt.useRef(e);t.current=e,Nt.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var wn=e=>typeof e=="string",A_=(e,t,n,r,i)=>wn(e)?(r&&t.watch.add(e),se(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),se(n,o))):(r&&(t.watchAll=!0),n),Ud=e=>/^\w*$/.test(e),B0=e=>ua(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Ve(e,t,n){let r=-1;const i=Ud(t)?[t]:B0(t),o=i.length,a=o-1;for(;++r<o;){const s=i[r];let l=n;if(r!==a){const u=e[s];l=ot(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[s]=l,e=e[s]}return e}var V0=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const Tc=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=se(e,r);if(i){const{_f:o,...a}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ot(a)&&Tc(a,t)}}};var Dp=e=>({isOnSubmit:!e||e===on.onSubmit,isOnBlur:e===on.onBlur,isOnChange:e===on.onChange,isOnAll:e===on.all,isOnTouch:e===on.onTouched}),jp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),N_=(e,t,n)=>{const r=ua(se(e,n));return Ve(r,"root",t[n]),Ve(e,n,r),e},Ei=e=>typeof e=="boolean",Bd=e=>e.type==="file",nr=e=>typeof e=="function",Cs=e=>{if(!Fd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ka=e=>wn(e),Vd=e=>e.type==="radio",bs=e=>e instanceof RegExp;const $p={value:!1,isValid:!1},Lp={value:!0,isValid:!0};var H0=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!et(e[0].attributes.value)?et(e[0].value)||e[0].value===""?Lp:{value:e[0].value,isValid:!0}:Lp:$p}return $p};const zp={isValid:!1,value:null};var Z0=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,zp):zp;function Mp(e,t,n="validate"){if(Ka(e)||Array.isArray(e)&&e.every(Ka)||Ei(e)&&!e)return{type:n,message:Ka(e)?e:"",ref:t}}var Jr=e=>ot(e)&&!bs(e)?e:{value:e,message:""},Fp=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:s,maxLength:l,minLength:u,min:d,max:p,pattern:g,validate:P,name:C,valueAsNumber:f,mount:O,disabled:m}=e._f,c=se(t,C);if(!O||m)return{};const v=a?a[0]:o,b=ie=>{r&&v.reportValidity&&(v.setCustomValidity(Ei(ie)?"":ie||""),v.reportValidity())},A={},U=Vd(o),D=la(o),W=U||D,ce=(f||Bd(o))&&et(o.value)&&et(c)||Cs(o)&&o.value===""||c===""||Array.isArray(c)&&!c.length,J=V0.bind(null,C,n,A),Re=(ie,oe,ve,Se=Pn.maxLength,Fe=Pn.minLength)=>{const Ae=ie?oe:ve;A[C]={type:ie?Se:Fe,message:Ae,ref:o,...J(ie?Se:Fe,Ae)}};if(i?!Array.isArray(c)||!c.length:s&&(!W&&(ce||Ct(c))||Ei(c)&&!c||D&&!H0(a).isValid||U&&!Z0(a).isValid)){const{value:ie,message:oe}=Ka(s)?{value:!!s,message:s}:Jr(s);if(ie&&(A[C]={type:Pn.required,message:oe,ref:v,...J(Pn.required,oe)},!n))return b(oe),A}if(!ce&&(!Ct(d)||!Ct(p))){let ie,oe;const ve=Jr(p),Se=Jr(d);if(!Ct(c)&&!isNaN(c)){const Fe=o.valueAsNumber||c&&+c;Ct(ve.value)||(ie=Fe>ve.value),Ct(Se.value)||(oe=Fe<Se.value)}else{const Fe=o.valueAsDate||new Date(c),Ae=le=>new Date(new Date().toDateString()+" "+le),H=o.type=="time",Q=o.type=="week";wn(ve.value)&&c&&(ie=H?Ae(c)>Ae(ve.value):Q?c>ve.value:Fe>new Date(ve.value)),wn(Se.value)&&c&&(oe=H?Ae(c)<Ae(Se.value):Q?c<Se.value:Fe<new Date(Se.value))}if((ie||oe)&&(Re(!!ie,ve.message,Se.message,Pn.max,Pn.min),!n))return b(A[C].message),A}if((l||u)&&!ce&&(wn(c)||i&&Array.isArray(c))){const ie=Jr(l),oe=Jr(u),ve=!Ct(ie.value)&&c.length>+ie.value,Se=!Ct(oe.value)&&c.length<+oe.value;if((ve||Se)&&(Re(ve,ie.message,oe.message),!n))return b(A[C].message),A}if(g&&!ce&&wn(c)){const{value:ie,message:oe}=Jr(g);if(bs(ie)&&!c.match(ie)&&(A[C]={type:Pn.pattern,message:oe,ref:o,...J(Pn.pattern,oe)},!n))return b(oe),A}if(P){if(nr(P)){const ie=await P(c,t),oe=Mp(ie,v);if(oe&&(A[C]={...oe,...J(Pn.validate,oe.message)},!n))return b(oe.message),A}else if(ot(P)){let ie={};for(const oe in P){if(!Zt(ie)&&!n)break;const ve=Mp(await P[oe](c,t),v,oe);ve&&(ie={...ve,...J(oe,ve.message)},b(ve.message),n&&(A[C]=ie))}if(!Zt(ie)&&(A[C]={ref:v,...ie},!n))return A}}return b(!0),A};function I_(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=et(e)?r++:e[t[r++]];return e}function D_(e){for(const t in e)if(!et(e[t]))return!1;return!0}function ut(e,t){const n=Array.isArray(t)?t:Ud(t)?[t]:B0(t),r=n.length===1?e:I_(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ot(r)&&Zt(r)||Array.isArray(r)&&D_(r))&&ut(e,n.slice(0,-1)),e}function mu(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Ps=e=>Ct(e)||!U0(e);function Ir(e,t){if(Ps(e)||Ps(t))return e===t;if(gi(e)&&gi(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(gi(o)&&gi(a)||ot(o)&&ot(a)||Array.isArray(o)&&Array.isArray(a)?!Ir(o,a):o!==a)return!1}}return!0}var W0=e=>e.type==="select-multiple",j_=e=>Vd(e)||la(e),gu=e=>Cs(e)&&e.isConnected,K0=e=>{for(const t in e)if(nr(e[t]))return!0;return!1};function Ts(e,t={}){const n=Array.isArray(e);if(ot(e)||n)for(const r in e)Array.isArray(e[r])||ot(e[r])&&!K0(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Ts(e[r],t[r])):Ct(e[r])||(t[r]=!0);return t}function Q0(e,t,n){const r=Array.isArray(e);if(ot(e)||r)for(const i in e)Array.isArray(e[i])||ot(e[i])&&!K0(e[i])?et(t)||Ps(n[i])?n[i]=Array.isArray(e[i])?Ts(e[i],[]):{...Ts(e[i])}:Q0(e[i],Ct(t)?{}:t[i],n[i]):n[i]=!Ir(e[i],t[i]);return n}var vu=(e,t)=>Q0(e,t,Ts(t)),q0=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>et(e)?e:t?e===""?NaN:e&&+e:n&&wn(e)?new Date(e):r?r(e):e;function yu(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Bd(t)?t.files:Vd(t)?Z0(e.refs).value:W0(t)?[...t.selectedOptions].map(({value:n})=>n):la(t)?H0(e.refs).value:q0(et(t.value)?e.ref.value:t.value,e)}var $_=(e,t,n,r)=>{const i={};for(const o of e){const a=se(t,o);a&&Ve(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},to=e=>et(e)?e:bs(e)?e.source:ot(e)?bs(e.value)?e.value.source:e.value:e,L_=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Up(e,t,n){const r=se(e,n);if(r||Ud(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=se(t,o),s=se(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(s&&s.type)return{name:o,error:s};i.pop()}return{name:n}}var z_=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,M_=(e,t)=>!ua(se(e,t)).length&&ut(e,t);const F_={mode:on.onSubmit,reValidateMode:on.onChange,shouldFocusError:!0};function U_(e={},t){let n={...F_,...e},r={submitCount:0,isDirty:!1,isLoading:nr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ot(n.defaultValues)||ot(n.values)?Tr(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Tr(o),s={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,d=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:mu(),array:mu(),state:mu()},P=e.resetOptions&&e.resetOptions.keepDirtyValues,C=Dp(n.mode),f=Dp(n.reValidateMode),O=n.criteriaMode===on.all,m=x=>E=>{clearTimeout(d),d=setTimeout(x,E)},c=async x=>{if(p.isValid||x){const E=n.resolver?Zt((await ce()).errors):await Re(i,!0);E!==r.isValid&&g.state.next({isValid:E})}},v=x=>p.isValidating&&g.state.next({isValidating:x}),b=(x,E=[],N,q,z=!0,M=!0)=>{if(q&&N){if(s.action=!0,M&&Array.isArray(se(i,x))){const Y=N(se(i,x),q.argA,q.argB);z&&Ve(i,x,Y)}if(M&&Array.isArray(se(r.errors,x))){const Y=N(se(r.errors,x),q.argA,q.argB);z&&Ve(r.errors,x,Y),M_(r.errors,x)}if(p.touchedFields&&M&&Array.isArray(se(r.touchedFields,x))){const Y=N(se(r.touchedFields,x),q.argA,q.argB);z&&Ve(r.touchedFields,x,Y)}p.dirtyFields&&(r.dirtyFields=vu(o,a)),g.state.next({name:x,isDirty:oe(x,E),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ve(a,x,E)},A=(x,E)=>{Ve(r.errors,x,E),g.state.next({errors:r.errors})},U=(x,E,N,q)=>{const z=se(i,x);if(z){const M=se(a,x,et(N)?se(o,x):N);et(M)||q&&q.defaultChecked||E?Ve(a,x,E?M:yu(z._f)):Fe(x,M),s.mount&&c()}},D=(x,E,N,q,z)=>{let M=!1,Y=!1;const _e={name:x};if(!N||q){p.isDirty&&(Y=r.isDirty,r.isDirty=_e.isDirty=oe(),M=Y!==_e.isDirty);const G=Ir(se(o,x),E);Y=se(r.dirtyFields,x),G?ut(r.dirtyFields,x):Ve(r.dirtyFields,x,!0),_e.dirtyFields=r.dirtyFields,M=M||p.dirtyFields&&Y!==!G}if(N){const G=se(r.touchedFields,x);G||(Ve(r.touchedFields,x,N),_e.touchedFields=r.touchedFields,M=M||p.touchedFields&&G!==N)}return M&&z&&g.state.next(_e),M?_e:{}},W=(x,E,N,q)=>{const z=se(r.errors,x),M=p.isValid&&Ei(E)&&r.isValid!==E;if(e.delayError&&N?(u=m(()=>A(x,N)),u(e.delayError)):(clearTimeout(d),u=null,N?Ve(r.errors,x,N):ut(r.errors,x)),(N?!Ir(z,N):z)||!Zt(q)||M){const Y={...q,...M&&Ei(E)?{isValid:E}:{},errors:r.errors,name:x};r={...r,...Y},g.state.next(Y)}v(!1)},ce=async x=>n.resolver(a,n.context,$_(x||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),J=async x=>{const{errors:E}=await ce();if(x)for(const N of x){const q=se(E,N);q?Ve(r.errors,N,q):ut(r.errors,N)}else r.errors=E;return E},Re=async(x,E,N={valid:!0})=>{for(const q in x){const z=x[q];if(z){const{_f:M,...Y}=z;if(M){const _e=l.array.has(M.name),G=await Fp(z,a,O,n.shouldUseNativeValidation&&!E,_e);if(G[M.name]&&(N.valid=!1,E))break;!E&&(se(G,M.name)?_e?N_(r.errors,G,M.name):Ve(r.errors,M.name,G[M.name]):ut(r.errors,M.name))}Y&&await Re(Y,E,N)}}return N.valid},ie=()=>{for(const x of l.unMount){const E=se(i,x);E&&(E._f.refs?E._f.refs.every(N=>!gu(N)):!gu(E._f.ref))&&_(x)}l.unMount=new Set},oe=(x,E)=>(x&&E&&Ve(a,x,E),!Ir(k(),o)),ve=(x,E,N)=>A_(x,l,{...s.mount?a:et(E)?o:wn(x)?{[x]:E}:E},N,E),Se=x=>ua(se(s.mount?a:o,x,e.shouldUnregister?se(o,x,[]):[])),Fe=(x,E,N={})=>{const q=se(i,x);let z=E;if(q){const M=q._f;M&&(!M.disabled&&Ve(a,x,q0(E,M)),z=Cs(M.ref)&&Ct(E)?"":E,W0(M.ref)?[...M.ref.options].forEach(Y=>Y.selected=z.includes(Y.value)):M.refs?la(M.ref)?M.refs.length>1?M.refs.forEach(Y=>(!Y.defaultChecked||!Y.disabled)&&(Y.checked=Array.isArray(z)?!!z.find(_e=>_e===Y.value):z===Y.value)):M.refs[0]&&(M.refs[0].checked=!!z):M.refs.forEach(Y=>Y.checked=Y.value===z):Bd(M.ref)?M.ref.value="":(M.ref.value=z,M.ref.type||g.values.next({name:x,values:{...a}})))}(N.shouldDirty||N.shouldTouch)&&D(x,z,N.shouldTouch,N.shouldDirty,!0),N.shouldValidate&&le(x)},Ae=(x,E,N)=>{for(const q in E){const z=E[q],M=`${x}.${q}`,Y=se(i,M);(l.array.has(x)||!Ps(z)||Y&&!Y._f)&&!gi(z)?Ae(M,z,N):Fe(M,z,N)}},H=(x,E,N={})=>{const q=se(i,x),z=l.array.has(x),M=Tr(E);Ve(a,x,M),z?(g.array.next({name:x,values:{...a}}),(p.isDirty||p.dirtyFields)&&N.shouldDirty&&g.state.next({name:x,dirtyFields:vu(o,a),isDirty:oe(x,M)})):q&&!q._f&&!Ct(M)?Ae(x,M,N):Fe(x,M,N),jp(x,l)&&g.state.next({...r}),g.values.next({name:x,values:{...a}}),!s.mount&&t()},Q=async x=>{const E=x.target;let N=E.name,q=!0;const z=se(i,N),M=()=>E.type?yu(z._f):E_(x);if(z){let Y,_e;const G=M(),De=x.type===Ip.BLUR||x.type===Ip.FOCUS_OUT,Ot=!L_(z._f)&&!n.resolver&&!se(r.errors,N)&&!z._f.deps||z_(De,se(r.touchedFields,N),r.isSubmitted,f,C),kt=jp(N,l,De);Ve(a,N,G),De?(z._f.onBlur&&z._f.onBlur(x),u&&u(0)):z._f.onChange&&z._f.onChange(x);const R=D(N,G,De,!1),I=!Zt(R)||kt;if(!De&&g.values.next({name:N,type:x.type,values:{...a}}),Ot)return p.isValid&&c(),I&&g.state.next({name:N,...kt?{}:R});if(!De&&kt&&g.state.next({...r}),v(!0),n.resolver){const{errors:L}=await ce([N]),ne=Up(r.errors,i,N),ae=Up(L,i,ne.name||N);Y=ae.error,N=ae.name,_e=Zt(L)}else Y=(await Fp(z,a,O,n.shouldUseNativeValidation))[N],q=isNaN(G)||G===se(a,N,G),q&&(Y?_e=!1:p.isValid&&(_e=await Re(i,!0)));q&&(z._f.deps&&le(z._f.deps),W(N,_e,Y,R))}},le=async(x,E={})=>{let N,q;const z=hu(x);if(v(!0),n.resolver){const M=await J(et(x)?x:z);N=Zt(M),q=x?!z.some(Y=>se(M,Y)):N}else x?(q=(await Promise.all(z.map(async M=>{const Y=se(i,M);return await Re(Y&&Y._f?{[M]:Y}:Y)}))).every(Boolean),!(!q&&!r.isValid)&&c()):q=N=await Re(i);return g.state.next({...!wn(x)||p.isValid&&N!==r.isValid?{}:{name:x},...n.resolver||!x?{isValid:N}:{},errors:r.errors,isValidating:!1}),E.shouldFocus&&!q&&Tc(i,M=>M&&se(r.errors,M),x?z:l.mount),q},k=x=>{const E={...o,...s.mount?a:{}};return et(x)?E:wn(x)?se(E,x):x.map(N=>se(E,N))},S=(x,E)=>({invalid:!!se((E||r).errors,x),isDirty:!!se((E||r).dirtyFields,x),isTouched:!!se((E||r).touchedFields,x),error:se((E||r).errors,x)}),y=x=>{x&&hu(x).forEach(E=>ut(r.errors,E)),g.state.next({errors:x?r.errors:{}})},T=(x,E,N)=>{const q=(se(i,x,{_f:{}})._f||{}).ref;Ve(r.errors,x,{...E,ref:q}),g.state.next({name:x,errors:r.errors,isValid:!1}),N&&N.shouldFocus&&q&&q.focus&&q.focus()},F=(x,E)=>nr(x)?g.values.subscribe({next:N=>x(ve(void 0,E),N)}):ve(x,E,!0),_=(x,E={})=>{for(const N of x?hu(x):l.mount)l.mount.delete(N),l.array.delete(N),E.keepValue||(ut(i,N),ut(a,N)),!E.keepError&&ut(r.errors,N),!E.keepDirty&&ut(r.dirtyFields,N),!E.keepTouched&&ut(r.touchedFields,N),!n.shouldUnregister&&!E.keepDefaultValue&&ut(o,N);g.values.next({values:{...a}}),g.state.next({...r,...E.keepDirty?{isDirty:oe()}:{}}),!E.keepIsValid&&c()},K=(x,E={})=>{let N=se(i,x);const q=Ei(E.disabled);return Ve(i,x,{...N||{},_f:{...N&&N._f?N._f:{ref:{name:x}},name:x,mount:!0,...E}}),l.mount.add(x),N?q&&Ve(a,x,E.disabled?void 0:se(a,x,yu(N._f))):U(x,!0,E.value),{...q?{disabled:E.disabled}:{},...n.shouldUseNativeValidation?{required:!!E.required,min:to(E.min),max:to(E.max),minLength:to(E.minLength),maxLength:to(E.maxLength),pattern:to(E.pattern)}:{},name:x,onChange:Q,onBlur:Q,ref:z=>{if(z){K(x,E),N=se(i,x);const M=et(z.value)&&z.querySelectorAll&&z.querySelectorAll("input,select,textarea")[0]||z,Y=j_(M),_e=N._f.refs||[];if(Y?_e.find(G=>G===M):M===N._f.ref)return;Ve(i,x,{_f:{...N._f,...Y?{refs:[..._e.filter(gu),M,...Array.isArray(se(o,x))?[{}]:[]],ref:{type:M.type,name:x}}:{ref:M}}}),U(x,!1,void 0,M)}else N=se(i,x,{}),N._f&&(N._f.mount=!1),(n.shouldUnregister||E.shouldUnregister)&&!(b_(l.array,x)&&s.action)&&l.unMount.add(x)}}},j=()=>n.shouldFocusError&&Tc(i,x=>x&&se(r.errors,x),l.mount),be=(x,E)=>async N=>{N&&(N.preventDefault&&N.preventDefault(),N.persist&&N.persist());let q=Tr(a);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:z,values:M}=await ce();r.errors=z,q=M}else await Re(i);ut(r.errors,"root"),Zt(r.errors)?(g.state.next({errors:{}}),await x(q,N)):(E&&await E({...r.errors},N),j(),setTimeout(j)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Zt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},he=(x,E={})=>{se(i,x)&&(et(E.defaultValue)?H(x,se(o,x)):(H(x,E.defaultValue),Ve(o,x,E.defaultValue)),E.keepTouched||ut(r.touchedFields,x),E.keepDirty||(ut(r.dirtyFields,x),r.isDirty=E.defaultValue?oe(x,se(o,x)):oe()),E.keepError||(ut(r.errors,x),p.isValid&&c()),g.state.next({...r}))},me=(x,E={})=>{const N=x||o,q=Tr(N),z=x&&!Zt(x)?q:o;if(E.keepDefaultValues||(o=N),!E.keepValues){if(E.keepDirtyValues||P)for(const M of l.mount)se(r.dirtyFields,M)?Ve(z,M,se(a,M)):H(M,se(z,M));else{if(Fd&&et(x))for(const M of l.mount){const Y=se(i,M);if(Y&&Y._f){const _e=Array.isArray(Y._f.refs)?Y._f.refs[0]:Y._f.ref;if(Cs(_e)){const G=_e.closest("form");if(G){G.reset();break}}}}i={}}a=e.shouldUnregister?E.keepDefaultValues?Tr(o):{}:q,g.array.next({values:{...z}}),g.values.next({values:{...z}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!p.isValid||!!E.keepIsValid,s.watch=!!e.shouldUnregister,g.state.next({submitCount:E.keepSubmitCount?r.submitCount:0,isDirty:E.keepDirty?r.isDirty:!!(E.keepDefaultValues&&!Ir(x,o)),isSubmitted:E.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:E.keepDirtyValues?r.dirtyFields:E.keepDefaultValues&&x?vu(o,x):{},touchedFields:E.keepTouched?r.touchedFields:{},errors:E.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},re=(x,E)=>me(nr(x)?x(a):x,E);return{control:{register:K,unregister:_,getFieldState:S,_executeSchema:ce,_getWatch:ve,_getDirty:oe,_updateValid:c,_removeUnmounted:ie,_updateFieldArray:b,_getFieldArray:Se,_reset:me,_resetDefaultValues:()=>nr(n.defaultValues)&&n.defaultValues().then(x=>{re(x,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:x=>{r={...r,...x}},_subjects:g,_proxyFormState:p,get _fields(){return i},get _formValues(){return a},get _state(){return s},set _state(x){s=x},get _defaultValues(){return o},get _names(){return l},set _names(x){l=x},get _formState(){return r},set _formState(x){r=x},get _options(){return n},set _options(x){n={...n,...x}}},trigger:le,register:K,handleSubmit:be,watch:F,setValue:H,getValues:k,reset:re,resetField:he,clearErrors:y,unregister:_,setError:T,setFocus:(x,E={})=>{const N=se(i,x),q=N&&N._f;if(q){const z=q.refs?q.refs[0]:q.ref;z.focus&&(z.focus(),E.shouldSelect&&z.select())}},getFieldState:S}}function Bp(e={}){const t=Nt.useRef(),[n,r]=Nt.useState({isDirty:!1,isValidating:!1,isLoading:nr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:nr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...U_(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,O_({subject:i._subjects.state,next:o=>{R_(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),Nt.useEffect(()=>{e.values&&!Ir(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),Nt.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=T_(n,i),t.current}var je;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const o={};for(const a of i)o[a]=a;return o},e.getValidEnumValues=i=>{const o=e.objectKeys(i).filter(s=>typeof i[i[s]]!="number"),a={};for(const s of o)a[s]=i[s];return e.objectValues(a)},e.objectValues=i=>e.objectKeys(i).map(function(o){return i[o]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&o.push(a);return o},e.find=(i,o)=>{for(const a of i)if(o(a))return a},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,o=" | "){return i.map(a=>typeof a=="string"?`'${a}'`:a).join(o)}e.joinValues=r,e.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(je||(je={}));var Rc;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Rc||(Rc={}));const X=je.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Jn=e=>{switch(typeof e){case"undefined":return X.undefined;case"string":return X.string;case"number":return isNaN(e)?X.nan:X.number;case"boolean":return X.boolean;case"function":return X.function;case"bigint":return X.bigint;case"symbol":return X.symbol;case"object":return Array.isArray(e)?X.array:e===null?X.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?X.promise:typeof Map<"u"&&e instanceof Map?X.map:typeof Set<"u"&&e instanceof Set?X.set:typeof Date<"u"&&e instanceof Date?X.date:X.object;default:return X.unknown}},Z=je.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),B_=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class un extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(o){return o.message},r={_errors:[]},i=o=>{for(const a of o.issues)if(a.code==="invalid_union")a.unionErrors.map(i);else if(a.code==="invalid_return_type")i(a.returnTypeError);else if(a.code==="invalid_arguments")i(a.argumentsError);else if(a.path.length===0)r._errors.push(n(a));else{let s=r,l=0;for(;l<a.path.length;){const u=a.path[l];l===a.path.length-1?(s[u]=s[u]||{_errors:[]},s[u]._errors.push(n(a))):s[u]=s[u]||{_errors:[]},s=s[u],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,je.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}un.create=e=>new un(e);const Uo=(e,t)=>{let n;switch(e.code){case Z.invalid_type:e.received===X.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case Z.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,je.jsonStringifyReplacer)}`;break;case Z.unrecognized_keys:n=`Unrecognized key(s) in object: ${je.joinValues(e.keys,", ")}`;break;case Z.invalid_union:n="Invalid input";break;case Z.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${je.joinValues(e.options)}`;break;case Z.invalid_enum_value:n=`Invalid enum value. Expected ${je.joinValues(e.options)}, received '${e.received}'`;break;case Z.invalid_arguments:n="Invalid function arguments";break;case Z.invalid_return_type:n="Invalid function return type";break;case Z.invalid_date:n="Invalid date";break;case Z.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:je.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case Z.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case Z.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case Z.custom:n="Invalid input";break;case Z.invalid_intersection_types:n="Intersection results could not be merged";break;case Z.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case Z.not_finite:n="Number must be finite";break;default:n=t.defaultError,je.assertNever(e)}return{message:n}};let Y0=Uo;function V_(e){Y0=e}function Rs(){return Y0}const Os=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,o=[...n,...i.path||[]],a={...i,path:o};let s="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)s=u(a,{data:t,defaultError:s}).message;return{...i,path:o,message:i.message||s}},H_=[];function ee(e,t){const n=Os({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Rs(),Uo].filter(r=>!!r)});e.common.issues.push(n)}class St{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return we;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return St.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:o,value:a}=i;if(o.status==="aborted"||a.status==="aborted")return we;o.status==="dirty"&&t.dirty(),a.status==="dirty"&&t.dirty(),(typeof a.value<"u"||i.alwaysSet)&&(r[o.value]=a.value)}return{status:t.value,value:r}}}const we=Object.freeze({status:"aborted"}),G0=e=>({status:"dirty",value:e}),Pt=e=>({status:"valid",value:e}),Oc=e=>e.status==="aborted",Ac=e=>e.status==="dirty",As=e=>e.status==="valid",Ns=e=>typeof Promise<"u"&&e instanceof Promise;var fe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(fe||(fe={}));class _n{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Vp=(e,t)=>{if(As(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new un(e.common.issues);return this._error=n,this._error}}};function Ce(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(a,s)=>a.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:r??s.defaultError}:{message:n??s.defaultError},description:i}}class Pe{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Jn(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Jn(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new St,ctx:{common:t.parent.common,data:t.data,parsedType:Jn(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ns(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Jn(t)},o=this._parseSync({data:t,path:i.path,parent:i});return Vp(i,o)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Jn(t)},i=this._parse({data:t,path:r.path,parent:r}),o=await(Ns(i)?i:Promise.resolve(i));return Vp(r,o)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,o)=>{const a=t(i),s=()=>o.addIssue({code:Z.custom,...r(i)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(s(),!1)):a?!0:(s(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new fn({schema:this,typeName:ge.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return $n.create(this,this._def)}nullable(){return Zr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return cn.create(this,this._def)}promise(){return Li.create(this,this._def)}or(t){return Zo.create([this,t],this._def)}and(t){return Wo.create(this,t,this._def)}transform(t){return new fn({...Ce(this._def),schema:this,typeName:ge.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new Go({...Ce(this._def),innerType:this,defaultValue:n,typeName:ge.ZodDefault})}brand(){return new J0({typeName:ge.ZodBranded,type:this,...Ce(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new $s({...Ce(this._def),innerType:this,catchValue:n,typeName:ge.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return ca.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Z_=/^c[^\s-]{8,}$/i,W_=/^[a-z][a-z0-9]*$/,K_=/[0-9A-HJKMNP-TV-Z]{26}/,Q_=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,q_=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Y_=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,G_=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,X_=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,J_=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function e2(e,t){return!!((t==="v4"||!t)&&G_.test(e)||(t==="v6"||!t)&&X_.test(e))}class an extends Pe{constructor(){super(...arguments),this._regex=(t,n,r)=>this.refinement(i=>t.test(i),{validation:n,code:Z.invalid_string,...fe.errToObj(r)}),this.nonempty=t=>this.min(1,fe.errToObj(t)),this.trim=()=>new an({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new an({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new an({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==X.string){const o=this._getOrReturnCtx(t);return ee(o,{code:Z.invalid_type,expected:X.string,received:o.parsedType}),we}const r=new St;let i;for(const o of this._def.checks)if(o.kind==="min")t.data.length<o.value&&(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")t.data.length>o.value&&(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){const a=t.data.length>o.value,s=t.data.length<o.value;(a||s)&&(i=this._getOrReturnCtx(t,i),a?ee(i,{code:Z.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):s&&ee(i,{code:Z.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")q_.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"email",code:Z.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")Y_.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"emoji",code:Z.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")Q_.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"uuid",code:Z.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")Z_.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"cuid",code:Z.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")W_.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"cuid2",code:Z.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")K_.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"ulid",code:Z.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),ee(i,{validation:"url",code:Z.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"regex",code:Z.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?t.data=t.data.trim():o.kind==="includes"?t.data.includes(o.value,o.position)||(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?t.data=t.data.toLowerCase():o.kind==="toUpperCase"?t.data=t.data.toUpperCase():o.kind==="startsWith"?t.data.startsWith(o.value)||(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?t.data.endsWith(o.value)||(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?J_(o).test(t.data)||(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="ip"?e2(t.data,o.version)||(i=this._getOrReturnCtx(t,i),ee(i,{validation:"ip",code:Z.invalid_string,message:o.message}),r.dirty()):je.assertNever(o);return{status:r.value,value:t.data}}_addCheck(t){return new an({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...fe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...fe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...fe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...fe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...fe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...fe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...fe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...fe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...fe.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...fe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...fe.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...fe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...fe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...fe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...fe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...fe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}an.create=e=>{var t;return new an({checks:[],typeName:ge.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Ce(e)})};function t2(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,o=parseInt(e.toFixed(i).replace(".","")),a=parseInt(t.toFixed(i).replace(".",""));return o%a/Math.pow(10,i)}class mr extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==X.number){const o=this._getOrReturnCtx(t);return ee(o,{code:Z.invalid_type,expected:X.number,received:o.parsedType}),we}let r;const i=new St;for(const o of this._def.checks)o.kind==="int"?je.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?t2(t.data,o.value)!==0&&(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.not_finite,message:o.message}),i.dirty()):je.assertNever(o);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,fe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,fe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,fe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,fe.toString(n))}setLimit(t,n,r,i){return new mr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:fe.toString(i)}]})}_addCheck(t){return new mr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:fe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:fe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:fe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:fe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:fe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:fe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:fe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:fe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:fe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&je.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}mr.create=e=>new mr({checks:[],typeName:ge.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...Ce(e)});class gr extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==X.bigint){const o=this._getOrReturnCtx(t);return ee(o,{code:Z.invalid_type,expected:X.bigint,received:o.parsedType}),we}let r;const i=new St;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="multipleOf"?t.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),ee(r,{code:Z.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):je.assertNever(o);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,fe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,fe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,fe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,fe.toString(n))}setLimit(t,n,r,i){return new gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:fe.toString(i)}]})}_addCheck(t){return new gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:fe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:fe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:fe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:fe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:fe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}gr.create=e=>{var t;return new gr({checks:[],typeName:ge.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Ce(e)})};class Bo extends Pe{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==X.boolean){const r=this._getOrReturnCtx(t);return ee(r,{code:Z.invalid_type,expected:X.boolean,received:r.parsedType}),we}return Pt(t.data)}}Bo.create=e=>new Bo({typeName:ge.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...Ce(e)});class Vr extends Pe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==X.date){const o=this._getOrReturnCtx(t);return ee(o,{code:Z.invalid_type,expected:X.date,received:o.parsedType}),we}if(isNaN(t.data.getTime())){const o=this._getOrReturnCtx(t);return ee(o,{code:Z.invalid_date}),we}const r=new St;let i;for(const o of this._def.checks)o.kind==="min"?t.data.getTime()<o.value&&(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?t.data.getTime()>o.value&&(i=this._getOrReturnCtx(t,i),ee(i,{code:Z.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):je.assertNever(o);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:fe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:fe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}Vr.create=e=>new Vr({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:ge.ZodDate,...Ce(e)});class Is extends Pe{_parse(t){if(this._getType(t)!==X.symbol){const r=this._getOrReturnCtx(t);return ee(r,{code:Z.invalid_type,expected:X.symbol,received:r.parsedType}),we}return Pt(t.data)}}Is.create=e=>new Is({typeName:ge.ZodSymbol,...Ce(e)});class Vo extends Pe{_parse(t){if(this._getType(t)!==X.undefined){const r=this._getOrReturnCtx(t);return ee(r,{code:Z.invalid_type,expected:X.undefined,received:r.parsedType}),we}return Pt(t.data)}}Vo.create=e=>new Vo({typeName:ge.ZodUndefined,...Ce(e)});class Ho extends Pe{_parse(t){if(this._getType(t)!==X.null){const r=this._getOrReturnCtx(t);return ee(r,{code:Z.invalid_type,expected:X.null,received:r.parsedType}),we}return Pt(t.data)}}Ho.create=e=>new Ho({typeName:ge.ZodNull,...Ce(e)});class $i extends Pe{constructor(){super(...arguments),this._any=!0}_parse(t){return Pt(t.data)}}$i.create=e=>new $i({typeName:ge.ZodAny,...Ce(e)});class $r extends Pe{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Pt(t.data)}}$r.create=e=>new $r({typeName:ge.ZodUnknown,...Ce(e)});class Bn extends Pe{_parse(t){const n=this._getOrReturnCtx(t);return ee(n,{code:Z.invalid_type,expected:X.never,received:n.parsedType}),we}}Bn.create=e=>new Bn({typeName:ge.ZodNever,...Ce(e)});class Ds extends Pe{_parse(t){if(this._getType(t)!==X.undefined){const r=this._getOrReturnCtx(t);return ee(r,{code:Z.invalid_type,expected:X.void,received:r.parsedType}),we}return Pt(t.data)}}Ds.create=e=>new Ds({typeName:ge.ZodVoid,...Ce(e)});class cn extends Pe{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==X.array)return ee(n,{code:Z.invalid_type,expected:X.array,received:n.parsedType}),we;if(i.exactLength!==null){const a=n.data.length>i.exactLength.value,s=n.data.length<i.exactLength.value;(a||s)&&(ee(n,{code:a?Z.too_big:Z.too_small,minimum:s?i.exactLength.value:void 0,maximum:a?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(ee(n,{code:Z.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(ee(n,{code:Z.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((a,s)=>i.type._parseAsync(new _n(n,a,n.path,s)))).then(a=>St.mergeArray(r,a));const o=[...n.data].map((a,s)=>i.type._parseSync(new _n(n,a,n.path,s)));return St.mergeArray(r,o)}get element(){return this._def.type}min(t,n){return new cn({...this._def,minLength:{value:t,message:fe.toString(n)}})}max(t,n){return new cn({...this._def,maxLength:{value:t,message:fe.toString(n)}})}length(t,n){return new cn({...this._def,exactLength:{value:t,message:fe.toString(n)}})}nonempty(t){return this.min(1,t)}}cn.create=(e,t)=>new cn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ge.ZodArray,...Ce(t)});function ei(e){if(e instanceof We){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=$n.create(ei(r))}return new We({...e._def,shape:()=>t})}else return e instanceof cn?new cn({...e._def,type:ei(e.element)}):e instanceof $n?$n.create(ei(e.unwrap())):e instanceof Zr?Zr.create(ei(e.unwrap())):e instanceof En?En.create(e.items.map(t=>ei(t))):e}class We extends Pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=je.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==X.object){const u=this._getOrReturnCtx(t);return ee(u,{code:Z.invalid_type,expected:X.object,received:u.parsedType}),we}const{status:r,ctx:i}=this._processInputParams(t),{shape:o,keys:a}=this._getCached(),s=[];if(!(this._def.catchall instanceof Bn&&this._def.unknownKeys==="strip"))for(const u in i.data)a.includes(u)||s.push(u);const l=[];for(const u of a){const d=o[u],p=i.data[u];l.push({key:{status:"valid",value:u},value:d._parse(new _n(i,p,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof Bn){const u=this._def.unknownKeys;if(u==="passthrough")for(const d of s)l.push({key:{status:"valid",value:d},value:{status:"valid",value:i.data[d]}});else if(u==="strict")s.length>0&&(ee(i,{code:Z.unrecognized_keys,keys:s}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const d of s){const p=i.data[d];l.push({key:{status:"valid",value:d},value:u._parse(new _n(i,p,i.path,d)),alwaysSet:d in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const d of l){const p=await d.key;u.push({key:p,value:await d.value,alwaysSet:d.alwaysSet})}return u}).then(u=>St.mergeObjectSync(r,u)):St.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return fe.errToObj,new We({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,o,a,s;const l=(a=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,n,r).message)!==null&&a!==void 0?a:r.defaultError;return n.code==="unrecognized_keys"?{message:(s=fe.errToObj(t).message)!==null&&s!==void 0?s:l}:{message:l}}}:{}})}strip(){return new We({...this._def,unknownKeys:"strip"})}passthrough(){return new We({...this._def,unknownKeys:"passthrough"})}extend(t){return new We({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new We({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ge.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new We({...this._def,catchall:t})}pick(t){const n={};return je.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new We({...this._def,shape:()=>n})}omit(t){const n={};return je.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new We({...this._def,shape:()=>n})}deepPartial(){return ei(this)}partial(t){const n={};return je.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new We({...this._def,shape:()=>n})}required(t){const n={};return je.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof $n;)o=o._def.innerType;n[r]=o}}),new We({...this._def,shape:()=>n})}keyof(){return X0(je.objectKeys(this.shape))}}We.create=(e,t)=>new We({shape:()=>e,unknownKeys:"strip",catchall:Bn.create(),typeName:ge.ZodObject,...Ce(t)});We.strictCreate=(e,t)=>new We({shape:()=>e,unknownKeys:"strict",catchall:Bn.create(),typeName:ge.ZodObject,...Ce(t)});We.lazycreate=(e,t)=>new We({shape:e,unknownKeys:"strip",catchall:Bn.create(),typeName:ge.ZodObject,...Ce(t)});class Zo extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(o){for(const s of o)if(s.result.status==="valid")return s.result;for(const s of o)if(s.result.status==="dirty")return n.common.issues.push(...s.ctx.common.issues),s.result;const a=o.map(s=>new un(s.ctx.common.issues));return ee(n,{code:Z.invalid_union,unionErrors:a}),we}if(n.common.async)return Promise.all(r.map(async o=>{const a={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:a}),ctx:a}})).then(i);{let o;const a=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},d=l._parseSync({data:n.data,path:n.path,parent:u});if(d.status==="valid")return d;d.status==="dirty"&&!o&&(o={result:d,ctx:u}),u.common.issues.length&&a.push(u.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;const s=a.map(l=>new un(l));return ee(n,{code:Z.invalid_union,unionErrors:s}),we}}get options(){return this._def.options}}Zo.create=(e,t)=>new Zo({options:e,typeName:ge.ZodUnion,...Ce(t)});const Qa=e=>e instanceof Qo?Qa(e.schema):e instanceof fn?Qa(e.innerType()):e instanceof qo?[e.value]:e instanceof vr?e.options:e instanceof Yo?Object.keys(e.enum):e instanceof Go?Qa(e._def.innerType):e instanceof Vo?[void 0]:e instanceof Ho?[null]:null;class Rl extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==X.object)return ee(n,{code:Z.invalid_type,expected:X.object,received:n.parsedType}),we;const r=this.discriminator,i=n.data[r],o=this.optionsMap.get(i);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(ee(n,{code:Z.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),we)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const o of n){const a=Qa(o.shape[t]);if(!a)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const s of a){if(i.has(s))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);i.set(s,o)}}return new Rl({typeName:ge.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Ce(r)})}}function Nc(e,t){const n=Jn(e),r=Jn(t);if(e===t)return{valid:!0,data:e};if(n===X.object&&r===X.object){const i=je.objectKeys(t),o=je.objectKeys(e).filter(s=>i.indexOf(s)!==-1),a={...e,...t};for(const s of o){const l=Nc(e[s],t[s]);if(!l.valid)return{valid:!1};a[s]=l.data}return{valid:!0,data:a}}else if(n===X.array&&r===X.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let o=0;o<e.length;o++){const a=e[o],s=t[o],l=Nc(a,s);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===X.date&&r===X.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Wo extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(o,a)=>{if(Oc(o)||Oc(a))return we;const s=Nc(o.value,a.value);return s.valid?((Ac(o)||Ac(a))&&n.dirty(),{status:n.value,value:s.data}):(ee(r,{code:Z.invalid_intersection_types}),we)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,a])=>i(o,a)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Wo.create=(e,t,n)=>new Wo({left:e,right:t,typeName:ge.ZodIntersection,...Ce(n)});class En extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.array)return ee(r,{code:Z.invalid_type,expected:X.array,received:r.parsedType}),we;if(r.data.length<this._def.items.length)return ee(r,{code:Z.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),we;!this._def.rest&&r.data.length>this._def.items.length&&(ee(r,{code:Z.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const o=[...r.data].map((a,s)=>{const l=this._def.items[s]||this._def.rest;return l?l._parse(new _n(r,a,r.path,s)):null}).filter(a=>!!a);return r.common.async?Promise.all(o).then(a=>St.mergeArray(n,a)):St.mergeArray(n,o)}get items(){return this._def.items}rest(t){return new En({...this._def,rest:t})}}En.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new En({items:e,typeName:ge.ZodTuple,rest:null,...Ce(t)})};class Ko extends Pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.object)return ee(r,{code:Z.invalid_type,expected:X.object,received:r.parsedType}),we;const i=[],o=this._def.keyType,a=this._def.valueType;for(const s in r.data)i.push({key:o._parse(new _n(r,s,r.path,s)),value:a._parse(new _n(r,r.data[s],r.path,s))});return r.common.async?St.mergeObjectAsync(n,i):St.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Pe?new Ko({keyType:t,valueType:n,typeName:ge.ZodRecord,...Ce(r)}):new Ko({keyType:an.create(),valueType:t,typeName:ge.ZodRecord,...Ce(n)})}}class js extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.map)return ee(r,{code:Z.invalid_type,expected:X.map,received:r.parsedType}),we;const i=this._def.keyType,o=this._def.valueType,a=[...r.data.entries()].map(([s,l],u)=>({key:i._parse(new _n(r,s,r.path,[u,"key"])),value:o._parse(new _n(r,l,r.path,[u,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const l of a){const u=await l.key,d=await l.value;if(u.status==="aborted"||d.status==="aborted")return we;(u.status==="dirty"||d.status==="dirty")&&n.dirty(),s.set(u.value,d.value)}return{status:n.value,value:s}})}else{const s=new Map;for(const l of a){const u=l.key,d=l.value;if(u.status==="aborted"||d.status==="aborted")return we;(u.status==="dirty"||d.status==="dirty")&&n.dirty(),s.set(u.value,d.value)}return{status:n.value,value:s}}}}js.create=(e,t,n)=>new js({valueType:t,keyType:e,typeName:ge.ZodMap,...Ce(n)});class Hr extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.set)return ee(r,{code:Z.invalid_type,expected:X.set,received:r.parsedType}),we;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(ee(r,{code:Z.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(ee(r,{code:Z.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const o=this._def.valueType;function a(l){const u=new Set;for(const d of l){if(d.status==="aborted")return we;d.status==="dirty"&&n.dirty(),u.add(d.value)}return{status:n.value,value:u}}const s=[...r.data.values()].map((l,u)=>o._parse(new _n(r,l,r.path,u)));return r.common.async?Promise.all(s).then(l=>a(l)):a(s)}min(t,n){return new Hr({...this._def,minSize:{value:t,message:fe.toString(n)}})}max(t,n){return new Hr({...this._def,maxSize:{value:t,message:fe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Hr.create=(e,t)=>new Hr({valueType:e,minSize:null,maxSize:null,typeName:ge.ZodSet,...Ce(t)});class Ci extends Pe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==X.function)return ee(n,{code:Z.invalid_type,expected:X.function,received:n.parsedType}),we;function r(s,l){return Os({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Rs(),Uo].filter(u=>!!u),issueData:{code:Z.invalid_arguments,argumentsError:l}})}function i(s,l){return Os({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Rs(),Uo].filter(u=>!!u),issueData:{code:Z.invalid_return_type,returnTypeError:l}})}const o={errorMap:n.common.contextualErrorMap},a=n.data;return this._def.returns instanceof Li?Pt(async(...s)=>{const l=new un([]),u=await this._def.args.parseAsync(s,o).catch(g=>{throw l.addIssue(r(s,g)),l}),d=await a(...u);return await this._def.returns._def.type.parseAsync(d,o).catch(g=>{throw l.addIssue(i(d,g)),l})}):Pt((...s)=>{const l=this._def.args.safeParse(s,o);if(!l.success)throw new un([r(s,l.error)]);const u=a(...l.data),d=this._def.returns.safeParse(u,o);if(!d.success)throw new un([i(u,d.error)]);return d.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Ci({...this._def,args:En.create(t).rest($r.create())})}returns(t){return new Ci({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Ci({args:t||En.create([]).rest($r.create()),returns:n||$r.create(),typeName:ge.ZodFunction,...Ce(r)})}}class Qo extends Pe{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Qo.create=(e,t)=>new Qo({getter:e,typeName:ge.ZodLazy,...Ce(t)});class qo extends Pe{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ee(n,{received:n.data,code:Z.invalid_literal,expected:this._def.value}),we}return{status:"valid",value:t.data}}get value(){return this._def.value}}qo.create=(e,t)=>new qo({value:e,typeName:ge.ZodLiteral,...Ce(t)});function X0(e,t){return new vr({values:e,typeName:ge.ZodEnum,...Ce(t)})}class vr extends Pe{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return ee(n,{expected:je.joinValues(r),received:n.parsedType,code:Z.invalid_type}),we}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return ee(n,{received:n.data,code:Z.invalid_enum_value,options:r}),we}return Pt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return vr.create(t)}exclude(t){return vr.create(this.options.filter(n=>!t.includes(n)))}}vr.create=X0;class Yo extends Pe{_parse(t){const n=je.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==X.string&&r.parsedType!==X.number){const i=je.objectValues(n);return ee(r,{expected:je.joinValues(i),received:r.parsedType,code:Z.invalid_type}),we}if(n.indexOf(t.data)===-1){const i=je.objectValues(n);return ee(r,{received:r.data,code:Z.invalid_enum_value,options:i}),we}return Pt(t.data)}get enum(){return this._def.values}}Yo.create=(e,t)=>new Yo({values:e,typeName:ge.ZodNativeEnum,...Ce(t)});class Li extends Pe{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==X.promise&&n.common.async===!1)return ee(n,{code:Z.invalid_type,expected:X.promise,received:n.parsedType}),we;const r=n.parsedType===X.promise?n.data:Promise.resolve(n.data);return Pt(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Li.create=(e,t)=>new Li({type:e,typeName:ge.ZodPromise,...Ce(t)});class fn extends Pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ge.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null;if(i.type==="preprocess"){const a=i.transform(r.data);return r.common.async?Promise.resolve(a).then(s=>this._def.schema._parseAsync({data:s,path:r.path,parent:r})):this._def.schema._parseSync({data:a,path:r.path,parent:r})}const o={addIssue:a=>{ee(r,a),a.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="refinement"){const a=s=>{const l=i.refinement(s,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?we:(s.status==="dirty"&&n.dirty(),a(s.value),{status:n.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?we:(s.status==="dirty"&&n.dirty(),a(s.value).then(()=>({status:n.value,value:s.value}))))}if(i.type==="transform")if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!As(a))return a;const s=i.transform(a.value,o);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>As(a)?Promise.resolve(i.transform(a.value,o)).then(s=>({status:n.value,value:s})):a);je.assertNever(i)}}fn.create=(e,t,n)=>new fn({schema:e,typeName:ge.ZodEffects,effect:t,...Ce(n)});fn.createWithPreprocess=(e,t,n)=>new fn({schema:t,effect:{type:"preprocess",transform:e},typeName:ge.ZodEffects,...Ce(n)});class $n extends Pe{_parse(t){return this._getType(t)===X.undefined?Pt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}$n.create=(e,t)=>new $n({innerType:e,typeName:ge.ZodOptional,...Ce(t)});class Zr extends Pe{_parse(t){return this._getType(t)===X.null?Pt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Zr.create=(e,t)=>new Zr({innerType:e,typeName:ge.ZodNullable,...Ce(t)});class Go extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===X.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Go.create=(e,t)=>new Go({innerType:e,typeName:ge.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ce(t)});class $s extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Ns(i)?i.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new un(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new un(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}$s.create=(e,t)=>new $s({innerType:e,typeName:ge.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ce(t)});class Ls extends Pe{_parse(t){if(this._getType(t)!==X.nan){const r=this._getOrReturnCtx(t);return ee(r,{code:Z.invalid_type,expected:X.nan,received:r.parsedType}),we}return{status:"valid",value:t.data}}}Ls.create=e=>new Ls({typeName:ge.ZodNaN,...Ce(e)});const n2=Symbol("zod_brand");class J0 extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class ca extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?we:o.status==="dirty"?(n.dirty(),G0(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?we:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new ca({in:t,out:n,typeName:ge.ZodPipeline})}}const eg=(e,t={},n)=>e?$i.create().superRefine((r,i)=>{var o,a;if(!e(r)){const s=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(a=(o=s.fatal)!==null&&o!==void 0?o:n)!==null&&a!==void 0?a:!0,u=typeof s=="string"?{message:s}:s;i.addIssue({code:"custom",...u,fatal:l})}}):$i.create(),r2={object:We.lazycreate};var ge;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ge||(ge={}));const i2=(e,t={message:`Input not instance of ${e.name}`})=>eg(n=>n instanceof e,t),tg=an.create,ng=mr.create,o2=Ls.create,a2=gr.create,rg=Bo.create,s2=Vr.create,l2=Is.create,u2=Vo.create,c2=Ho.create,d2=$i.create,f2=$r.create,p2=Bn.create,h2=Ds.create,m2=cn.create,g2=We.create,v2=We.strictCreate,y2=Zo.create,x2=Rl.create,w2=Wo.create,S2=En.create,k2=Ko.create,_2=js.create,E2=Hr.create,C2=Ci.create,b2=Qo.create,P2=qo.create,T2=vr.create,R2=Yo.create,O2=Li.create,Hp=fn.create,A2=$n.create,N2=Zr.create,I2=fn.createWithPreprocess,D2=ca.create,j2=()=>tg().optional(),$2=()=>ng().optional(),L2=()=>rg().optional(),z2={string:e=>an.create({...e,coerce:!0}),number:e=>mr.create({...e,coerce:!0}),boolean:e=>Bo.create({...e,coerce:!0}),bigint:e=>gr.create({...e,coerce:!0}),date:e=>Vr.create({...e,coerce:!0})},M2=we;var xn=Object.freeze({__proto__:null,defaultErrorMap:Uo,setErrorMap:V_,getErrorMap:Rs,makeIssue:Os,EMPTY_PATH:H_,addIssueToContext:ee,ParseStatus:St,INVALID:we,DIRTY:G0,OK:Pt,isAborted:Oc,isDirty:Ac,isValid:As,isAsync:Ns,get util(){return je},get objectUtil(){return Rc},ZodParsedType:X,getParsedType:Jn,ZodType:Pe,ZodString:an,ZodNumber:mr,ZodBigInt:gr,ZodBoolean:Bo,ZodDate:Vr,ZodSymbol:Is,ZodUndefined:Vo,ZodNull:Ho,ZodAny:$i,ZodUnknown:$r,ZodNever:Bn,ZodVoid:Ds,ZodArray:cn,ZodObject:We,ZodUnion:Zo,ZodDiscriminatedUnion:Rl,ZodIntersection:Wo,ZodTuple:En,ZodRecord:Ko,ZodMap:js,ZodSet:Hr,ZodFunction:Ci,ZodLazy:Qo,ZodLiteral:qo,ZodEnum:vr,ZodNativeEnum:Yo,ZodPromise:Li,ZodEffects:fn,ZodTransformer:fn,ZodOptional:$n,ZodNullable:Zr,ZodDefault:Go,ZodCatch:$s,ZodNaN:Ls,BRAND:n2,ZodBranded:J0,ZodPipeline:ca,custom:eg,Schema:Pe,ZodSchema:Pe,late:r2,get ZodFirstPartyTypeKind(){return ge},coerce:z2,any:d2,array:m2,bigint:a2,boolean:rg,date:s2,discriminatedUnion:x2,effect:Hp,enum:T2,function:C2,instanceof:i2,intersection:w2,lazy:b2,literal:P2,map:_2,nan:o2,nativeEnum:R2,never:p2,null:c2,nullable:N2,number:ng,object:g2,oboolean:L2,onumber:$2,optional:A2,ostring:j2,pipeline:D2,preprocess:I2,promise:O2,record:k2,set:E2,strictObject:v2,string:tg,symbol:l2,transformer:Hp,tuple:S2,undefined:u2,union:y2,unknown:f2,void:h2,NEVER:M2,ZodIssueCode:Z,quotelessJson:B_,ZodError:un}),Zp=function(e,t,n){if(e&&"reportValidity"in e){var r=se(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},ig=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?Zp(o.ref,i,e):o.refs&&o.refs.forEach(function(a){return Zp(a,i,e)})};for(var r in t.fields)n(r)},F2=function(e,t){t.shouldUseNativeValidation&&ig(e,t);var n={};for(var r in e){var i=se(t.fields,r);Ve(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},U2=function(e,t){for(var n={};e.length;){var r=e[0],i=r.code,o=r.message,a=r.path.join(".");if(!n[a])if("unionErrors"in r){var s=r.unionErrors[0].errors[0];n[a]={message:s.message,type:s.code}}else n[a]={message:o,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(d){return d.errors.forEach(function(p){return e.push(p)})}),t){var l=n[a].types,u=l&&l[r.code];n[a]=V0(a,t,n,i,u?[].concat(u,r.message):r.message)}e.shift()}return n},Wp=function(e,t,n){return n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(a,s){try{var l=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(u){return o.shouldUseNativeValidation&&ig({},o),{errors:{},values:n.raw?r:u}})}catch(u){return s(u)}return l&&l.then?l.then(void 0,s):l}(0,function(a){if(function(s){return s.errors!=null}(a))return{values:{},errors:F2(U2(a.errors,!o.shouldUseNativeValidation&&o.criteriaMode==="all"),o)};throw a}))}catch(a){return Promise.reject(a)}}};const B2=w.div`
width: 100vw;
height: 100vh;
display: flex;
overflow-x: hidden;
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;
}

@media screen and (max-width: 1000px){
flex-direction: column;
}
`,V2=w.div`
width: 80vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

@media screen and (max-width: 1000px){
width: 100vw;
}
`,H2=w.div`
width: 20vw;
height:100vh;
position: relative;

@media screen and (min-width: 801px) and (max-width: 1000px){
width: 100vw;
height: 20vh;
}
@media screen and (max-width: 800px){
height: 0;
}
`,Z2=w.div`
width: 100%;
height: 200px;
background-color: #111111f1;
display: flex;
align-items: center;
justify-content: center;
`,W2=w.h1`
font-size: 70px;
color: white;
@media screen and (max-width: 500px) {
font-size: 40px;
}
`,K2=w.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 900px){
flex-direction: column;
}
`,Kp=w.div`
width: 33%;
height: 100%;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 900px){
width: 100%;
border-bottom: 1px solid black;

}
`,Q2=w.form`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 60%;
@media screen and (max-width: 900px){
width: 100%;
align-items: center;
}
`,q2=w.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 350px;
`,Ia=w.input`
width: 200px;
height: 30px;
margin-top: 10px;
padding-left: 20px;
border: 2px solid #474747ea;
border-radius: 5px;

&:focus{
    outline: none;
}
`,Y2=w.div`
width: 34%;
height: 100%;
margin-top: 30px;

@media screen and (max-width: 900px){
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 1px solid black;
}
`,G2=w.div`
width: 33%;
height: 100%;
margin-top: 30px;
@media screen and (max-width: 900px){
width: 100%;
}
`,no=w.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`,ro=w.h1`
background-color: #111111f1;
color: white;
text-align: center;
padding: 10px;
font-size: 16px;
width: 150px;
`,X2=w.div`
width: 100%;
height: 150px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;

@media screen and (max-width: 900px){
width: 80%
}
`,J2=w.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`,eE=w.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`,tE=w.p`
font-size: 14px;
`,nE=w.p`
font-size: 12px;
margin-bottom: 10px;
`,rE=w.p`
font-size: 14px;
margin-bottom: 10px;
`,iE=w.div`
width: 80px;
height: 80px;
`,oE=w.img`
width: 100px;
height: 100px;
`,aE=w.div`
`,sE=w.h3`
font-size: 16px;
`,lE=w.img`
width: 15px;
cursor: pointer;
`,uE=w.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`,Qp=w.div`
display: flex;
flex-direction: column;
`,Wn=w.label`
font-size: 14px;
margin-top: 10px;
font-weight: 500;
`,cE=w.input`
width: 200px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`,dE=w.input`
width: 200px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`,fE=w.input`
width: 70px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`,pE=w.input`
width: 70px;
height: 30px;
padding-left: 20px;
border: 2px solid #1d1d1dea;
border-radius: 5px;
&:focus{
    outline: none;
}
`,hE=w.div`
display: flex;
flex-direction: row;
gap: 30px;
`,qp=w.div`
display: flex;
flex-direction: column;
`,mE=w.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 80px;
`,gE=w.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
`,vE=w.p`
font-size: 10px;
width: 50%;
text-align: center;

`,yE=w.button`
width: 200px;
height: 50px;
margin-top: 20px;
border: none;
background-color: #47f147;
color: white;
font-size: 18px;
font-weight: 700;
letter-spacing: 1px;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: #2ec92ee8;
}
`,xE=w.button`
width: 200px;
height: 50px;
margin-top: 10px;
margin-left: 15px;
border: none;
background-color: #47f147;
color: white;
font-size: 18px;
font-weight: 700;
letter-spacing: 1px;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: #2ec92ee8;
}

@media screen and (max-width: 900px) {
    margin-left: 0px;
    margin-bottom: 50px;
}
`,wE=w.h2`
margin-top: 10px;
margin-bottom: 20px;
text-align: center;
background-color: #131313;
color: white;

@media screen and (max-width: 900px) {
padding: 10px;
} 
`,xu=w.p`
font-size: 12px;
text-align: center;
width: 100%;
`,SE=w.p`
font-size: 16px;
text-align: center;
width: 50%;
margin-bottom: 50px;
color: red;
`,kE=w.button`
width: 100px;
height: 30px;
border: none;
background-color: #131313;
color: white;
margin-top: 15px;
border-radius: 5px;
cursor: pointer;
`,Kn=w.span`
font-size: 12px;
margin-top: 4px;
color: red;
`,_E=w.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`,EE=w.p`
font-size: 15px;
font-weight: 500;
width: 100%;
text-align: center;
letter-spacing: 1px;

`,CE=xn.object({email:xn.string().nonempty("O e-mail é obrigatório").email("Formato de e-mail inválido."),name:xn.string().min(10,"O nome deve ter no minimo 10 caracteres."),cep:xn.string().min(8,"O CEP deve conter exatamente 8 números."),telefone:xn.string().min(8,"O telefone deve conter 8 números.")}),bE=xn.object({numero:xn.string().nonempty("O número deve conter 16 dígitos").min(16,"O número  deve conter 16 dígitos"),nomeTitular:xn.string().min(10,"O nome deve ter no mínimo 10 caracteres"),vencimento:xn.string().min(5,"vencimento requer  'mês'  '/'  'ano'"),cvv:xn.string().min(3,"CVV precisa conter 3 dígitos")}),PE=()=>{const{products:e}=Fo(D=>D.cartReducer),t=Pl(),[n,r]=$.useState(0),[i,o]=$.useState({}),[a,s]=$.useState({}),[l,u]=$.useState(!1),[d,p]=$.useState(!1),[g,P]=$.useState("");$.useEffect(()=>{r(e.reduce((D,W)=>D+W.preço*W.quantity,0))},[e]);const{register:C,handleSubmit:f,formState:{errors:O}}=Bp({resolver:Wp(CE)}),{register:m,handleSubmit:c,formState:{errors:v}}=Bp({resolver:Wp(bE)}),b=D=>{o(D),u(!0)},A=D=>{e.length>=1?(s(D),p(!0),t(tS(e)),t(eS())):P("Não há nenhum item no carrinho!")};return V(B2,{children:[h(H2,{children:h(Sr,{})}),V(V2,{children:[h(Z2,{children:h(W2,{children:"CHECKOUT"})}),h(K2,{children:d===!1?V(Yn,{children:[h(Kp,{children:l===!0?V(Kp,{children:[h(no,{children:h(ro,{children:"DADOS PREENCHIDOS"})}),V(q2,{children:[h(xu,{children:"Os dados de entrega foram preenchidos e salvos. se desejar alterar clique no botão abaixo"}),h(kE,{onClick:()=>{o({}),u(!1)},children:"Alterar"})]})]}):V(Yn,{children:[h(no,{children:h(ro,{children:"ENTREGA"})}),V(Q2,{onSubmit:f(b),children:[h(Wn,{children:"Email:"}),h(Ia,{type:"email",placeholder:"exemplo@email.com",...C("email")}),O.email&&h(Kn,{children:O.email.message}),h(Wn,{children:"Nome:"}),h(Ia,{type:"text",placeholder:"Ex: Rodrigo Fernandes Silva",...C("name")}),O.name&&h(Kn,{children:O.name.message}),h(Wn,{children:"CEP:"}),h(Ia,{type:"text",placeholder:"Ex: 35657344",...C("cep")}),O.cep&&h(Kn,{children:O.cep.message}),h(Wn,{children:"Telefone:"}),h(Ia,{type:"text",placeholder:"Ex: 81053487",...C("telefone")}),O.telefone&&h(Kn,{children:O.telefone.message}),h(gE,{children:h(xE,{type:"submit",children:"Confirmar"})})]})]})}),V(Y2,{children:[h(no,{children:h(ro,{children:"REVISÃO"})}),e.map(D=>V(X2,{children:[h(J2,{children:h(iE,{children:h(oE,{src:D.url})})}),V(eE,{children:[h(tE,{children:D.nome}),h(nE,{children:D.colecao}),V(rE,{children:["- ",D.quantity," -"]}),h(aE,{children:V(sE,{children:[(D.preço*D.quantity).toFixed(2),"R$"]})})]}),h(lE,{onClick:()=>{t(F0(D.id))},src:"./img/trash.png"})]},D.id)),h(EE,{children:"TOTAL:"}),e.length>0?V(wE,{children:[n.toFixed(2)," R$"]}):null]}),h(G2,{children:l===!0?V(Yn,{children:[h(no,{children:h(ro,{children:"PAGAMENTO"})}),h(uE,{children:V(_E,{onSubmit:c(A),children:[V(Qp,{children:[h(Wn,{htmlFor:"numero",children:"Digite o número do seu cartão*"}),h(cE,{type:"text",placeholder:"0000 0000 0000 0000",...m("numero")}),v.numero&&h(Kn,{children:v.numero.message})]}),V(Qp,{children:[h(Wn,{htmlFor:"nome",children:"Digite o nome do titular do cartão*"}),h(dE,{type:"text",placeholder:"Ex: Che guevara",...m("nomeTitular")}),v.nomeTitular&&h(Kn,{children:v.nomeTitular.message})]}),V(hE,{children:[V(qp,{children:[h(Wn,{htmlFor:"vencimento",children:"Vencimento*"}),h(fE,{type:"text",placeholder:"mm/aa",...m("vencimento")})]}),V(qp,{children:[h(Wn,{htmlFor:"CVV",children:"CVV*"}),h(pE,{type:"text",placeholder:"123",...m("cvv")})]})]}),v.vencimento&&h(Kn,{children:v.vencimento.message}),v.cvv&&h(Kn,{children:v.cvv.message}),V(mE,{children:[h(SE,{children:g}),h(vE,{children:"Ao continuar, você concorda com os nossos Termos e Condições"}),h(yE,{type:"submit",children:"Finalizar Compra"})]})]})})]}):V(Yn,{children:[h(no,{children:h(ro,{children:"PAGAMENTO"})}),h(xu,{children:"Confirme os dados de entrega antes de prosseguir com o pagamento."})]})})]}):h(Yn,{children:h(xu,{style:{marginTop:"200px",fontSize:"30px"},children:"Confirmamos o pagamento! Obrigado por comprar conosco."})})})]})]})},TE=w.div`
width: 100vw;
height: 100vh;
display: flex;
overflow-x: hidden;

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;
}
@media screen and (max-width: 1000px){
flex-direction: column;
}
`,RE=w.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: flex-end;
@media screen and (max-width: 1000px){
width: 100vw;
}
`,OE=w.div`
width: 20vw;
height:100vh;
position: relative;

@media screen and (min-width: 801px) and (max-width: 1000px){
width: 100vw;
height: 20vh;
}
@media screen and (max-width: 800px){
height: 0;
}
`,AE=w.div`
width: 100%;
height: 200px;
background-color: #111111f1;
display: flex;
align-items: center;
justify-content: center;;
`,NE=w.div`
display: flex;
justify-content: center;
align-items: center;
width: 650px;
`,IE=w.h1`
font-size: 70px;
color: white;
@media screen and (max-width: 500px) {
font-size: 40px;
}
`,DE=w.div`
width: 100%;
display: flex;
justify-content: center;
`,jE=w.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;
`,$E=w.div`
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
`,LE=w.h2`
background-color: #131313f0;
font-size: 30px;
color: white;
padding: 10px;
letter-spacing: 2px;
`,zE=w.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`,ME=w.div`
width: 50%;
height: 100px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 10px;
border-bottom: 1px solid black;

@media screen and (min-width: 600px) and (max-width: 900px){
width: 80%
}
@media screen and (max-width: 599px){
width: 80%;
height: 200px;
flex-direction: column;
}
`,FE=w.div`
display: flex;
flex-direction: column;
align-items: center;

`,UE=w.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
@media screen and (max-width: 599px){
flex-direction: column;
}

`,BE=w.p`
font-size: 14px;
font-weight: 600;
`,VE=w.p`
font-size: 12px;
font-weight: 600;
`,HE=w.p`
font-size: 12px;
font-weight: 600;
`,ZE=w.div`
`,WE=w.img`
width: 75px;
height: 75px;
`,KE=w.div`
`,QE=w.h3`
font-size: 16px;
`,qE=w.h3`
text-align: center;
margin-top: 250px;
`,YE=()=>{const{historic:e}=Fo(t=>t.cartReducer);return V(TE,{children:[h(OE,{children:h(Sr,{})}),V(RE,{children:[h(AE,{children:h(NE,{children:h(IE,{children:"PROFILE"})})}),h(DE,{children:V(jE,{children:[e.length>=1?h($E,{children:h(LE,{children:"HISTÓRICO  DE  COMPRAS"})}):h(Yn,{children:h(qE,{children:"Seu histórico de compras está vazio, navegue pelo site e compre alguns de nossos produtos"})}),h(zE,{children:e.map(t=>t.map(n=>V(ME,{children:[h(FE,{children:h(ZE,{children:h(WE,{src:n.url})})}),V(UE,{children:[h(BE,{children:n.nome}),h(VE,{children:n.colecao}),V(HE,{children:["-",n.quantity,"-"]}),h(KE,{children:V(QE,{children:[n.preço.toFixed(2)," R$/UN."]})})]})]},n.id)))})]})})]})]})};function Xo(e){return Xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xo(e)}function GE(e,t){if(Xo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Xo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function XE(e){var t=GE(e,"string");return Xo(t)==="symbol"?t:String(t)}function JE(e,t,n){return t=XE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yp(Object(n),!0).forEach(function(r){JE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Xp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),wu=function(){return Math.random().toString(36).substring(7).split("").join(".")},zs={INIT:"@@redux/INIT"+wu(),REPLACE:"@@redux/REPLACE"+wu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+wu()}};function eC(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function og(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(vt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(vt(1));return n(og)(e,t)}if(typeof e!="function")throw new Error(vt(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function d(){if(l)throw new Error(vt(3));return o}function p(f){if(typeof f!="function")throw new Error(vt(4));if(l)throw new Error(vt(5));var O=!0;return u(),s.push(f),function(){if(O){if(l)throw new Error(vt(6));O=!1,u();var c=s.indexOf(f);s.splice(c,1),a=null}}}function g(f){if(!eC(f))throw new Error(vt(7));if(typeof f.type>"u")throw new Error(vt(8));if(l)throw new Error(vt(9));try{l=!0,o=i(o,f)}finally{l=!1}for(var O=a=s,m=0;m<O.length;m++){var c=O[m];c()}return f}function P(f){if(typeof f!="function")throw new Error(vt(10));i=f,g({type:zs.REPLACE})}function C(){var f,O=p;return f={subscribe:function(c){if(typeof c!="object"||c===null)throw new Error(vt(11));function v(){c.next&&c.next(d())}v();var b=O(v);return{unsubscribe:b}}},f[Xp]=function(){return this},f}return g({type:zs.INIT}),r={dispatch:g,subscribe:p,getState:d,replaceReducer:P},r[Xp]=C,r}function tC(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:zs.INIT});if(typeof r>"u")throw new Error(vt(12));if(typeof n(void 0,{type:zs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(vt(13))})}function nC(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{tC(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var d=!1,p={},g=0;g<o.length;g++){var P=o[g],C=n[P],f=l[P],O=C(f,u);if(typeof O>"u")throw u&&u.type,new Error(vt(14));p[P]=O,d=d||O!==f}return d=d||o.length!==Object.keys(l).length,d?p:l}}function rC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function iC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(vt(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=rC.apply(void 0,s)(i.dispatch),Gp(Gp({},i),{},{dispatch:o})}}}const oC={products:[],productsTotalPrice:0,cartIsOpen:!1,historic:[]},aC=(e=oC,t)=>{switch(t.type){case yt.ADD_PRODUCT:return e.products.some(r=>r.id===t.payload.id)?{...e,products:e.products.map(r=>r.id===t.payload.id?{...r,quantity:r.quantity+1}:r)}:{...e,products:[...e.products,{...t.payload,quantity:1}]};case yt.OPEN_CART:return{...e,cartIsOpen:!0};case yt.CLOSE_CART:return{...e,cartIsOpen:!1};case yt.REMOVE_PRODUCT:return{...e,products:e.products.filter(r=>r.id!==t.payload)};case yt.INCREASE_PRODUCT_QUANTITY:return{...e,products:e.products.map(r=>r.id===t.payload?{...r,quantity:r.quantity+1}:r)};case yt.DECREASE_PRODUCT_QUANTITY:return{...e,products:e.products.map(r=>r.id===t.payload?{...r,quantity:r.quantity-1}:r).filter(r=>r.quantity>0)};case yt.CLEAR_CART:return{...e,products:[]};case yt.ADD_TO_HISTORY:return{...e,historic:[...e.historic,t.payload]};default:return e}},sC=nC({cartReducer:aC});var Ms={},lC={get exports(){return Ms},set exports(e){Ms=e}};(function(e,t){(function(n,r){r(t)})(Hi,function(n){function r(k,S){k.super_=S,k.prototype=Object.create(S.prototype,{constructor:{value:k,enumerable:!1,writable:!0,configurable:!0}})}function i(k,S){Object.defineProperty(this,"kind",{value:k,enumerable:!0}),S&&S.length&&Object.defineProperty(this,"path",{value:S,enumerable:!0})}function o(k,S,y){o.super_.call(this,"E",k),Object.defineProperty(this,"lhs",{value:S,enumerable:!0}),Object.defineProperty(this,"rhs",{value:y,enumerable:!0})}function a(k,S){a.super_.call(this,"N",k),Object.defineProperty(this,"rhs",{value:S,enumerable:!0})}function s(k,S){s.super_.call(this,"D",k),Object.defineProperty(this,"lhs",{value:S,enumerable:!0})}function l(k,S,y){l.super_.call(this,"A",k),Object.defineProperty(this,"index",{value:S,enumerable:!0}),Object.defineProperty(this,"item",{value:y,enumerable:!0})}function u(k,S,y){var T=k.slice((y||S)+1||k.length);return k.length=S<0?k.length+S:S,k.push.apply(k,T),k}function d(k){var S=typeof k>"u"?"undefined":Se(k);return S!=="object"?S:k===Math?"math":k===null?"null":Array.isArray(k)?"array":Object.prototype.toString.call(k)==="[object Date]"?"date":typeof k.toString=="function"&&/^\/.*\//.test(k.toString())?"regexp":"object"}function p(k,S,y,T,F,_,K){F=F||[],K=K||[];var j=F.slice(0);if(typeof _<"u"){if(T){if(typeof T=="function"&&T(j,_))return;if((typeof T>"u"?"undefined":Se(T))==="object"){if(T.prefilter&&T.prefilter(j,_))return;if(T.normalize){var be=T.normalize(j,_,k,S);be&&(k=be[0],S=be[1])}}}j.push(_)}d(k)==="regexp"&&d(S)==="regexp"&&(k=k.toString(),S=S.toString());var he=typeof k>"u"?"undefined":Se(k),me=typeof S>"u"?"undefined":Se(S),re=he!=="undefined"||K&&K[K.length-1].lhs&&K[K.length-1].lhs.hasOwnProperty(_),Oe=me!=="undefined"||K&&K[K.length-1].rhs&&K[K.length-1].rhs.hasOwnProperty(_);if(!re&&Oe)y(new a(j,S));else if(!Oe&&re)y(new s(j,k));else if(d(k)!==d(S))y(new o(j,k,S));else if(d(k)==="date"&&k-S!==0)y(new o(j,k,S));else if(he==="object"&&k!==null&&S!==null)if(K.filter(function(E){return E.lhs===k}).length)k!==S&&y(new o(j,k,S));else{if(K.push({lhs:k,rhs:S}),Array.isArray(k)){var ye;for(k.length,ye=0;ye<k.length;ye++)ye>=S.length?y(new l(j,ye,new s(void 0,k[ye]))):p(k[ye],S[ye],y,T,j,ye,K);for(;ye<S.length;)y(new l(j,ye,new a(void 0,S[ye++])))}else{var xe=Object.keys(k),x=Object.keys(S);xe.forEach(function(E,N){var q=x.indexOf(E);q>=0?(p(k[E],S[E],y,T,j,E,K),x=u(x,q)):p(k[E],void 0,y,T,j,E,K)}),x.forEach(function(E){p(void 0,S[E],y,T,j,E,K)})}K.length=K.length-1}else k!==S&&(he==="number"&&isNaN(k)&&isNaN(S)||y(new o(j,k,S)))}function g(k,S,y,T){return T=T||[],p(k,S,function(F){F&&T.push(F)},y),T.length?T:void 0}function P(k,S,y){if(y.path&&y.path.length){var T,F=k[S],_=y.path.length-1;for(T=0;T<_;T++)F=F[y.path[T]];switch(y.kind){case"A":P(F[y.path[T]],y.index,y.item);break;case"D":delete F[y.path[T]];break;case"E":case"N":F[y.path[T]]=y.rhs}}else switch(y.kind){case"A":P(k[S],y.index,y.item);break;case"D":k=u(k,S);break;case"E":case"N":k[S]=y.rhs}return k}function C(k,S,y){if(k&&S&&y&&y.kind){for(var T=k,F=-1,_=y.path?y.path.length-1:0;++F<_;)typeof T[y.path[F]]>"u"&&(T[y.path[F]]=typeof y.path[F]=="number"?[]:{}),T=T[y.path[F]];switch(y.kind){case"A":P(y.path?T[y.path[F]]:T,y.index,y.item);break;case"D":delete T[y.path[F]];break;case"E":case"N":T[y.path[F]]=y.rhs}}}function f(k,S,y){if(y.path&&y.path.length){var T,F=k[S],_=y.path.length-1;for(T=0;T<_;T++)F=F[y.path[T]];switch(y.kind){case"A":f(F[y.path[T]],y.index,y.item);break;case"D":F[y.path[T]]=y.lhs;break;case"E":F[y.path[T]]=y.lhs;break;case"N":delete F[y.path[T]]}}else switch(y.kind){case"A":f(k[S],y.index,y.item);break;case"D":k[S]=y.lhs;break;case"E":k[S]=y.lhs;break;case"N":k=u(k,S)}return k}function O(k,S,y){if(k&&S&&y&&y.kind){var T,F,_=k;for(F=y.path.length-1,T=0;T<F;T++)typeof _[y.path[T]]>"u"&&(_[y.path[T]]={}),_=_[y.path[T]];switch(y.kind){case"A":f(_[y.path[T]],y.index,y.item);break;case"D":_[y.path[T]]=y.lhs;break;case"E":_[y.path[T]]=y.lhs;break;case"N":delete _[y.path[T]]}}}function m(k,S,y){if(k&&S){var T=function(F){y&&!y(k,S,F)||C(k,S,F)};p(k,S,T)}}function c(k){return"color: "+H[k].color+"; font-weight: bold"}function v(k){var S=k.kind,y=k.path,T=k.lhs,F=k.rhs,_=k.index,K=k.item;switch(S){case"E":return[y.join("."),T,"→",F];case"N":return[y.join("."),F];case"D":return[y.join(".")];case"A":return[y.join(".")+"["+_+"]",K];default:return[]}}function b(k,S,y,T){var F=g(k,S);try{T?y.groupCollapsed("diff"):y.group("diff")}catch{y.log("diff")}F?F.forEach(function(_){var K=_.kind,j=v(_);y.log.apply(y,["%c "+H[K].text,c(K)].concat(Fe(j)))}):y.log("—— no diff ——");try{y.groupEnd()}catch{y.log("—— diff end —— ")}}function A(k,S,y,T){switch(typeof k>"u"?"undefined":Se(k)){case"object":return typeof k[T]=="function"?k[T].apply(k,Fe(y)):k[T];case"function":return k(S);default:return k}}function U(k){var S=k.timestamp,y=k.duration;return function(T,F,_){var K=["action"];return K.push("%c"+String(T.type)),S&&K.push("%c@ "+F),y&&K.push("%c(in "+_.toFixed(2)+" ms)"),K.join(" ")}}function D(k,S){var y=S.logger,T=S.actionTransformer,F=S.titleFormatter,_=F===void 0?U(S):F,K=S.collapsed,j=S.colors,be=S.level,he=S.diff,me=typeof S.titleFormatter>"u";k.forEach(function(re,Oe){var ye=re.started,xe=re.startedTime,x=re.action,E=re.prevState,N=re.error,q=re.took,z=re.nextState,M=k[Oe+1];M&&(z=M.prevState,q=M.started-ye);var Y=T(x),_e=typeof K=="function"?K(function(){return z},x,re):K,G=oe(xe),De=j.title?"color: "+j.title(Y)+";":"",Ot=["color: gray; font-weight: lighter;"];Ot.push(De),S.timestamp&&Ot.push("color: gray; font-weight: lighter;"),S.duration&&Ot.push("color: gray; font-weight: lighter;");var kt=_(Y,G,q);try{_e?j.title&&me?y.groupCollapsed.apply(y,["%c "+kt].concat(Ot)):y.groupCollapsed(kt):j.title&&me?y.group.apply(y,["%c "+kt].concat(Ot)):y.group(kt)}catch{y.log(kt)}var R=A(be,Y,[E],"prevState"),I=A(be,Y,[Y],"action"),L=A(be,Y,[N,E],"error"),ne=A(be,Y,[z],"nextState");if(R)if(j.prevState){var ae="color: "+j.prevState(E)+"; font-weight: bold";y[R]("%c prev state",ae,E)}else y[R]("prev state",E);if(I)if(j.action){var pe="color: "+j.action(Y)+"; font-weight: bold";y[I]("%c action    ",pe,Y)}else y[I]("action    ",Y);if(N&&L)if(j.error){var de="color: "+j.error(N,E)+"; font-weight: bold;";y[L]("%c error     ",de,N)}else y[L]("error     ",N);if(ne)if(j.nextState){var ke="color: "+j.nextState(z)+"; font-weight: bold";y[ne]("%c next state",ke,z)}else y[ne]("next state",z);he&&b(E,z,y,_e);try{y.groupEnd()}catch{y.log("—— log end ——")}})}function W(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=Object.assign({},Q,k),y=S.logger,T=S.stateTransformer,F=S.errorTransformer,_=S.predicate,K=S.logErrors,j=S.diffPredicate;if(typeof y>"u")return function(){return function(he){return function(me){return he(me)}}};if(k.getState&&k.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(he){return function(me){return he(me)}}};var be=[];return function(he){var me=he.getState;return function(re){return function(Oe){if(typeof _=="function"&&!_(me,Oe))return re(Oe);var ye={};be.push(ye),ye.started=ve.now(),ye.startedTime=new Date,ye.prevState=T(me()),ye.action=Oe;var xe=void 0;if(K)try{xe=re(Oe)}catch(E){ye.error=F(E)}else xe=re(Oe);ye.took=ve.now()-ye.started,ye.nextState=T(me());var x=S.diff&&typeof j=="function"?j(me,Oe):S.diff;if(D(be,Object.assign({},S,{diff:x})),be.length=0,ye.error)throw ye.error;return xe}}}}var ce,J,Re=function(k,S){return new Array(S+1).join(k)},ie=function(k,S){return Re("0",S-k.toString().length)+k},oe=function(k){return ie(k.getHours(),2)+":"+ie(k.getMinutes(),2)+":"+ie(k.getSeconds(),2)+"."+ie(k.getMilliseconds(),3)},ve=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},Fe=function(k){if(Array.isArray(k)){for(var S=0,y=Array(k.length);S<k.length;S++)y[S]=k[S];return y}return Array.from(k)},Ae=[];ce=(typeof Hi>"u"?"undefined":Se(Hi))==="object"&&Hi?Hi:typeof window<"u"?window:{},J=ce.DeepDiff,J&&Ae.push(function(){typeof J<"u"&&ce.DeepDiff===g&&(ce.DeepDiff=J,J=void 0)}),r(o,i),r(a,i),r(s,i),r(l,i),Object.defineProperties(g,{diff:{value:g,enumerable:!0},observableDiff:{value:p,enumerable:!0},applyDiff:{value:m,enumerable:!0},applyChange:{value:C,enumerable:!0},revertChange:{value:O,enumerable:!0},isConflict:{value:function(){return typeof J<"u"},enumerable:!0},noConflict:{value:function(){return Ae&&(Ae.forEach(function(k){k()}),Ae=null),g},enumerable:!0}});var H={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},Q={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(k){return k},actionTransformer:function(k){return k},errorTransformer:function(k){return k},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},le=function(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=k.dispatch,y=k.getState;return typeof S=="function"||typeof y=="function"?W()({dispatch:S,getState:y}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=Q,n.createLogger=W,n.logger=le,n.default=le,Object.defineProperty(n,"__esModule",{value:!0})})})(lC,Ms);const uC=Jp(Ms),cC=og(sC,iC(uC)),dC=w.div`
display: flex;
width:100vw;    
height: 100vh;
overflow-x: hidden;  
display: flex;

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; 
}

::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}

@media only screen and (max-width: 1000px) {
    flex-direction: column;
}
`,fC=w.div`
width: 20vw;
height: 100vh;
`,pC=w.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


@media only screen and (max-width: 1000px) {
    width: 100vw
}
@media only screen and (min-width: 1000px) {
    margin-left: 30px;
}
`,hC=w.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`,mC=w.div`
width: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`,gC=w.div`
width: 80vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`,vC=w.img`
font-size: 50px;
width: 500px;
`,yC=w.h1`
font-size: 30px;
color: #00000097;
font-weight: 900;
letter-spacing: 1px;
`,xC=w.img`
width: 30px;
margin-right: 1px;
margin-top: 2px;
`,wC=w.img`
cursor: pointer;
background-color: white;
position: relative;
`,SC=w.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`,kC=w.h1`
font-size: 20px;
text-align: center;
`,_C=w.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
`;w.button`
width: 80px;
height: 30px;
border: none;
border-radius: 5px;
background-color: #ffffffec;
font-size: 14px;
cursor: pointer;
font-weight: 500;
text-decoration: underline;
`;const EC={minHeight:"1050px"},CC={width:"200px",display:"flex",flexDirection:"column"},bC=()=>{const e=$.useRef(),[t,n]=$.useState(),{favorito:r,setFavorito:i}=$.useContext(ol),o=a=>{if(a.id>0&&a.id<=9)n("/Camisas"),setTimeout(()=>{e.current.click()},100),console.log(r);else if(a.id>=10&&a.id<=15)n("/Bermudas"),setTimeout(()=>{e.current.click()},100),console.log(r);else if(a.id>=16&&a.id<=24)n("/FootWear"),setTimeout(()=>{e.current.click()},100),console.log(r);else if(a.id>=25&&a.id<=30)n("/HeadWear"),setTimeout(()=>{e.current.click()},100),console.log(r);else return};return V(dC,{children:[h(fC,{children:h(Sr,{})}),V(pC,{style:r.length>0?EC:null,children:[r.map(a=>{var s;return V(hC,{children:[V(mC,{children:[h(xC,{src:"./img/heart.png"}),h(zt,{onClick:()=>{o(a)},ref:e,style:CC,to:t,children:h(wC,{src:a==null?void 0:a.url})})]}),h(SC,{children:a==null?void 0:a.colecao}),V(kC,{children:[(s=a==null?void 0:a.preço)==null?void 0:s.toFixed(2)," R$"]}),V(_C,{children:[h(Yr,{item:a}),h(qr,{item:a})]})]},a==null?void 0:a.id)}),r<1&&V(gC,{children:[h(vC,{src:"./img/nofav.jpg"}),h(yC,{children:"Seus favoritos ficam aqui!"})]}),r.length>0&&h(Ui,{})]})]})},PC=[{id:1,url:"https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-frente-2-900x900.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2022/01/camiseta-wanted-rebel-preto-costas-600x600.jpg",descricao:"Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Premium",fav:!1,nome:"Camisa SIKE"},{id:2,url:"https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-intern-preto-frente-1-900x900.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-5-600x600.jpg",descricao:"Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Premium",fav:!1,nome:"Camisa SIKE"},{id:3,url:"https://wantedind.com/wp-content/uploads/2022/04/camiseta-wanted-dripper-logo-branco-1-900x900.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2022/04/artigo-4.22-LB-1-scaled.jpg",descricao:"Camiseta linha 'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Premium",fav:!1,nome:"Camisa SIKE"},{id:4,url:"https://wantedind.com/wp-content/uploads/2020/11/camiseta-focus-preto-frente3-600x600.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2020/11/focus-2-de-3-scaled.jpg",descricao:"Camiseta linha 'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Premium",fav:!1,nome:"Camisa SIKE"},{id:5,url:"https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Preto-scaled.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2020/10/Camiseta-Wanted-Logo-Script-Branco-600x600.jpg",descricao:"Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Premium",fav:!1,nome:"Camisa SIKE"},{id:6,url:"https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-wntj-preto-frente-900x900.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2022/09/artigo-final-7-600x800.jpg",descricao:"Camiseta linha  'PREMIUM', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Premium",fav:!1,nome:"Camisa SIKE"},{id:7,url:"https://wantedind.com/wp-content/uploads/2022/09/camiseta-wanted-veneno-puro-preto-600x600.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2022/09/artigo-final-42-600x800.jpg",descricao:"Camiseta linha  'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Basics",fav:!1,nome:"Camisa SIKE"},{id:8,url:"https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-preta-1-600x600.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2020/08/japan-hustler-branca-1-600x600.jpg",descricao:"Camiseta linha 'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Basics",fav:!1,nome:"Camisa SIKE"},{id:9,url:"https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-preto-1-600x600.jpg",urlSubImage:"https://wantedind.com/wp-content/uploads/2020/12/camiseta-wanted-wntd-logo-rosa-branco-1-600x600.jpg",descricao:"Camiseta linha 'BASICS', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:99.9,colecao:"Basics",fav:!1,nome:"Camisa SIKE"}],TC=[{id:10,url:"https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-2-900x900.jpg",descricao:"Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:109.9,colecao:"Berm00",fav:!1,nome:"Bermuda SIKE"},{id:11,url:"https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-5-900x900.jpg",descricao:"Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:109.9,colecao:"Berm00",fav:!1,nome:"Bermuda SIKE"},{id:12,url:"https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-4-900x900.jpg",descricao:"Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:109.9,colecao:"Berm00",fav:!1,nome:"Bermuda SIKE"},{id:13,url:"https://wantedind.com/wp-content/uploads/2021/05/still-bermuda-preto-900x900.jpg",descricao:"Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:109.9,colecao:"Berm00",fav:!1,nome:"Bermuda SIKE"},{id:14,url:"https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-Wu-Tang-Preto-900x900.jpg",descricao:"Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:109.9,colecao:"Berm00",fav:!1,nome:"Bermuda SIKE"},{id:15,url:"https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-In-God-We-Trust-Cinza-900x900.jpg",descricao:"Bermuda linha 'Berm00', tecido confortável de alta qualidade. a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:109.9,colecao:"Berm00",fav:!1,nome:"Bermuda SIKE"}],RC=[{id:16,url:"https://dillysports.vteximg.com.br/arquivos/ids/175503-1000-1000/350015_23-1.jpg?v=638049830862630000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/160589-1000-1000/350015_23-2.jpg?v=637874537716200000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:17,url:"https://dillysports.vteximg.com.br/arquivos/ids/170784-1000-1000/THUMB_350015_26_1000x800.jpg?v=637987841174800000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/170676-1000-1000/350015_26-2.jpg?v=637987829955570000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:18,url:"https://dillysports.vteximg.com.br/arquivos/ids/171998-1000-1000/THUMB_0002_350001_69_1.jpg?v=637994607636170000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/171921-1000-1000/350001_69-2.jpg?v=637994549779630000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:19,url:"https://dillysports.vteximg.com.br/arquivos/ids/178975-1000-1000/gomes_whisky_essencial_lateral.jpg?v=638132979341130000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/178976-1000-1000/gomes_whisky_essencial_superior.jpg?v=638132979378170000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:20,url:"https://dillysports.vteximg.com.br/arquivos/ids/172073-1000-1000/THUMB_0003_350001_70_1.jpg?v=637999828278730000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/171542-1000-1000/350001_70-3.jpg?v=637992963718930000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:21,url:"https://dillysports.vteximg.com.br/arquivos/ids/171939-1000-1000/THUMB_0003_350001_67_1.jpg?v=637994551021800000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/171875-1000-1000/350001_67-3.jpg?v=637994546877430000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Sneackers00",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:22,url:"https://dillysports.vteximg.com.br/arquivos/ids/172372-1000-1000/THUMB_350001_44_IMIGRANTE-PRT-REFLETIVO-CHICLE-ESSENCIAL.jpg?v=638004051639500000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/171722-1000-1000/350001_44-3.jpg?v=637992972757330000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Emigrante",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:23,url:"https://dillysports.vteximg.com.br/arquivos/ids/178494-1000-1000/imigrante_branco_2_oe_thumb.jpg?v=638128463015830000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/176100-1000-1000/350001_64-2.jpg?v=638070503036230000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Emigrante",fav:!1,tipo:"tenis",nome:"Tênis SIKE"},{id:24,url:"https://dillysports.vteximg.com.br/arquivos/ids/166808-1000-1000/350007_25-1.jpg?v=637956434964770000",urlSubImage:"https://dillysports.vteximg.com.br/arquivos/ids/166809-1000-1000/350007_25-2.jpg?v=637956435005100000",descricao:"Sneacker Sike, coleção 'Sneackers00', confortável e estiloso, pra quem não pode parar de correr, com tecnologia de palmilha expansiva que preserva a saúde dos seus joelhos",preço:139.9,colecao:"Emigrante",fav:!1,tipo:"tenis",nome:"Tênis SIKE"}],OC=[{id:25,url:"https://wantedind.com/wp-content/uploads/2022/12/BONE-PRETO-ALTERADO-1-900x900.png",descricao:"Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:74.9,colecao:"Cap00",fav:!1,nome:"boné SIKE"},{id:26,url:"https://wantedind.com/wp-content/uploads/2022/12/BONE-BRANCO-ALTERADO-900x900.png",descricao:"Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:74.9,colecao:"Cap00",fav:!1,nome:"boné SIKE"},{id:27,url:"https://wantedind.com/wp-content/uploads/2022/12/BONE-BEGE-ALTERADO-900x900.png",descricao:"Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:74.9,colecao:"Cap00",fav:!1,nome:"boné SIKE"},{id:28,url:"https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-PRETO-ALTERADO-900x900.png",descricao:"Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:74.9,colecao:"Cap00",fav:!1,nome:"boné SIKE"},{id:29,url:"https://wantedind.com/wp-content/uploads/2022/12/FIVE-4-900x900.png",descricao:"Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:74.9,colecao:"Cap00",fav:!1,nome:"boné SIKE"},{id:30,url:"https://wantedind.com/wp-content/uploads/2022/12/FIVE-BONE-AZUL-ALTERADO-900x900.png",descricao:"Boné Sike, cofortável e estiloso, a Sike foi criada em 1998 e desde então, vem fazendo parte das culturas de rua e também da cultura TECH.",preço:74.9,colecao:"Cap00",fav:!1,nome:"boné SIKE"}],AC=sx([{path:"/",element:h(xk,{}),children:[{path:"/",element:h(yk,{})},{path:"Camisas",element:h(Kk,{data:PC})},{path:"FootWear",element:h(r_,{data:RC})},{path:"HeadWear",element:h(p_,{data:OC})},{path:"Bermudas",element:h(__,{data:TC})},{path:"Favorites",element:h(bC,{})},{path:"Checkout",element:h(PE,{})},{path:"Perfil",element:h(YE,{})}]}]);ku.createRoot(document.getElementById("root")).render(h(Nt.StrictMode,{children:h(Ww,{store:cC,children:h(px,{children:h(wk,{children:h(G1,{router:AC})})})})}));
