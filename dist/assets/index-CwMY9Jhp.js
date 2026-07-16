var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.7`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():ee=!1}}}var T;if(typeof y==`function`)T=function(){y(w)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=w,T=function(){ie.postMessage(null)}}else T=function(){_(w,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,T()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.7`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var A,Se;function Ce(e){if(A===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+A+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function j(e){e[xt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Oe.call(Nt,e)?!0:Oe.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&en(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&en(e,a,t[a])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ht]||null;if(!i)throw Error(s(90));Kt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(Tt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)gi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=hi(31,n,t,i),e.elementType=re,e.lanes=a,e;case y:return bi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=hi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=hi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=hi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case w:o=14;break a;case T:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=hi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-Ge(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(s(519));function Wi(e){throw Xi(Ti(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=pe(null),Qi=null,$i=null;function ea(e,t,n){k(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,O(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),na(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),na(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ia(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;kr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(s(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?k(Ca,Ca.current):k(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(s(460)),Oa=Error(s(474)),ka=Error(s(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(s(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(s(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===T&&Na(a)===t.type)?(t=i(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=bi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case T:return t=Na(t),f(e,t,n)}if(le(t)||oe(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Na(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Na(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),N&&Fi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),N&&Fi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Na(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ba(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=bi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=yi(a.type,a.key,a.props,null,e.mode,c),Ba(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(a,e.mode,c),c.return=e,e=c}return o(e);case T:return a=Na(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,za(a),c);if(a.$$typeof===S)return b(e,r,ca(e,a),c);Va(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=xi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Wl,k(io,e),k(ro,t),Wl=e|t.baseLanes}function oo(){k(io,Wl),k(ro,ro.current)}function so(){Wl=io.current,O(ro),O(io)}var co=pe(null),lo=null;function uo(e){var t=e.alternate;k(F,F.current&1),k(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){k(F,F.current),k(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(k(F,F.current),k(co,e),lo===null&&(lo=e)):mo(e)}function mo(){k(F,F.current),k(co,co.current)}function ho(e){O(co),lo===e&&(lo=null),O(F)}var F=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(s(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){E.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(s(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var i=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=i)throw Error(s(301));if(i+=1,R=L=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Ws,a=t(n,r)}while(yo);return a}function ko(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(s(467)):Error(s(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(s(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!kr(a,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);kr(a,t.memoizedState)||(V=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ho(e,t,n){var r=I,i=B(),a=N;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!kr((L||i).memoizedState,n);if(o&&(i.memoizedState=n,V=!0),i=i.queue,ps(Go.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,i,n,t),null),K===null)throw Error(s(349));a||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,i){if(Rs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Zo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Os(e).queue;Ts(e,i,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(s(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,i=No();if(N){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),K===null)throw Error(s(349));J&127||Uo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,fs(Go.bind(null,r,a,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,i,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(s(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ti(r,n),i=tc(e.stateNode,r,i),Za(e,i),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ui&&(e=Error(s(422),{cause:r}),Xi(Ti(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ti(a,n),Xl===null?Xl=[a]:Xl.push(a),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=nc(i),rc(i,e,n,r),Za(n,i),!1}n=n.return}while(n!==null);return!1}var ac=Error(s(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(fo(t),i)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(V||ia(e,t,n,!1),i=(n&e.childLanes)!==0,V||i){if(r=K,r!==null&&(o=ct(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ui(e,o),hu(r,e,o),ac;Du(),t=mc(e,t,n)}else e=a.treeContext,M=cf(o.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(i?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(mo(t),i=t.mode,c=Ec({mode:`hidden`,children:c},i),r=bi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,o,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,i=t.mode,r=Ec({mode:`visible`,children:r.children},i),c=bi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,o,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),o=(n&e.childLanes)!==0,V||o){if(o=K,o!==null&&(r=ct(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(o,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return i?(mo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,i,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(i=c.cachePool,i===null?i=Ea():(l=P._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Cc(e,o,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=sc(null,t,e,r,n);break a}else if(i===w){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ys(r,t.pendingProps),yc(e,t,r,i,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,qa(e,t),eo(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0),$a(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==i){i=Ti(Error(s(424)),t),Xi(i),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===i){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),j(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Bi=t,Hi=!0,i=M,Zd(t.type)?(lf=i,M=cf(r.firstChild)):M=i),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((i=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?i=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,i=!0)),i||Wi(t)),be(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Eo(e,t,ko,null,null,n),Qf._currentValue=i),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,oa(t),i=sa(i),r=r(i),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(i=wa(),i===null&&(i=K,a=pa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ka(t),ea(t,P,i)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ea(t,P,r),r!==i.cache&&ra(t,[P],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Fc(t),a===null?(H(t),Ic(t,i,null,r,n)):(H(t),Lc(t,a))):a?a===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,a)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,i,e,r,n)),null;case 27:if(xe(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return H(t),null}e=me.current,qi(t)?Gi(t,e):(e=ff(i,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(xe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return H(t),null}if(a=me.current,qi(t))Gi(t,a);else{var o=Bd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[mt]=t,a[ht]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Bi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[mt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(s(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[mt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),i=!1}else i=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(O(F),r=t.memoizedState,r===null)return H(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=go(e),a!==null){for(t.flags|=128,zc(r,!1),e=a.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return k(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304)}else{if(!i)if(e=go(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!N)return H(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=F.current,k(F,i?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(s(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(F),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&O(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:O(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&O(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ys(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(s(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(s(160));dl(a,o,i),W=null,ll=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[xt]||a[mt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[mt]=e,j(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[mt]=e,j(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){i=e.stateNode;try{Qt(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Xc(e,i,n===null?i:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=_l,_l=gf(t.containerInfo),gl(t,e),_l=i,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||i,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;el(e,Qc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Qt(a,``),n.flags&=-33),el(e,Qc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;$c(e,Qc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?dt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),it(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-Ne(),10<i)){if(yu(r,t,Jl,!Vl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=et(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,E.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),i=Eu();K!==e||J!==t?(nu=null,tu=Ne()+500,Su(e,t)):Hl=et(e,t);a:do try{if(Y!==0&&q!==null){t=q;var a=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,a,1);break;case 2:case 9:if(ja(a)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},a.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(a)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var c=q;if(o?Wf(o):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,a,5);break;case 6:Y=0,Bl=null,Pu(e,t,a,6);break;case 8:xu(),X=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,E.H=r,E.A=i,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!je();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=oi,at(e,n,a,o,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=G,G|=4;try{ol(e,t,n)}finally{G=o,D.p=i,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(s(331));var c=G;if(G|=4,Fl(a.current),Dl(a,a.current,o,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ne()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=ui(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=$e(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ct(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),o=[];a:{var s=ei.get(e);if(s!==void 0){var c=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:c=Kn;break;case`focusin`:u=`focus`,c=Ln;break;case`focusout`:u=`blur`,c=Ln;break;case`beforeblur`:case`afterblur`:c=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Jn;break;case qr:case Jr:case Yr:c=Rn;break;case $r:c=Yn;break;case`scroll`:case`scrollend`:c=An;break;case`wheel`:c=Xn;break;case`copy`:case`cut`:case`paste`:c=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=qn;break;case`toggle`:case`beforetoggle`:c=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Ct(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Tt(c),h=u==null?s:Tt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Tt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=_r;else if(dr(s))if(vr)v=Dr;else{v=Tr;var y=wr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Jt(s,`number`,s.value)}switch(y=r?Tt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(o,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(o,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,a);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:tn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ht]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Zt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),j(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);j(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ge.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Et(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),j(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,j(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),j(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,j(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),j(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,j(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),j(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,j(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),j(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.7`)throw Error(s(527,Lp,`19.2.7`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Xs,a=Zs,o=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c();function d(e,t){return[...e.filter(e=>e.fileId!==t.fileId||e.questionId!==t.questionId),t]}function f(e){let t=e.trim();for(;;){let e=p(t).trim();if(e===t)return t;t=e}}function p(e){let t=/^(?<ticks>`+)(?<content>[\s\S]+)\k<ticks>$/u.exec(e);if(t?.groups?.content!==void 0)return t.groups.content;let n=/^\*\*([\s\S]+)\*\*$/u.exec(e);if(n?.[1]!==void 0)return n[1];let r=/^\*([^*]+)\*$/u.exec(e);if(r?.[1]!==void 0)return r[1];let i=/^_([^_]+)_$/u.exec(e);return i?.[1]===void 0?e:i[1]}var m=/^\s*(답|정답)\s*[:：]\s*(.+?)\s*$/u,h=/^\s*(?:#{1,3}\s*)?(?:문제\s*)?(?:Q\s*)?\d+[.)번]?\s*/iu;function g(e){let t=e.replace(/\r\n?/gu,`
`).trim();if(t.length===0)return[];let n=_(t),r=x(t);return(n.length>0?n:r.length>0?r:ee(t)).filter(e=>e.prompt.length>0||e.answer!==null).map((e,t)=>({id:`q_${t+1}`,index:t+1,prompt:e.prompt.length>0?e.prompt:`문제 내용 없음`,rawAnswer:e.rawAnswer,answer:e.answer}))}function _(e){let t=e.split(`
`),n=[];for(let e=0;e<t.length-1;e+=1){let r=y(t[e]??``);if(r.length===0||!b(t[e+1]??``))continue;let i=r.indexOf(`정답`);if(i<0)continue;let a=r.indexOf(`번호`);for(let o=e+2;o<t.length;o+=1){let e=y(t[o]??``);if(e.length===0)break;let s=e[i]?.trim();s===void 0||s.length===0||n.push({prompt:v(r,e,i,a),rawAnswer:s,answer:f(s)})}}return n}function v(e,t,n,r){return e.flatMap((e,i)=>{if(i===n||i===r)return[];let a=t[i]?.trim()??``;return a.length===0?[]:`${e}: ${a}`}).join(`
`)}function y(e){let t=e.trim();return!t.startsWith(`|`)||!t.endsWith(`|`)?[]:t.slice(1,-1).split(`|`).map(e=>e.trim())}function b(e){let t=y(e);return t.length>0&&t.every(e=>/^:?-{3,}:?$/u.test(e.replace(/\s/gu,``)))}function x(e){let t=e.split(`
`),n=[],r=[];for(let e of t){let t=m.exec(e);if(t!==null){let e=t[2]?.trim()??``;n.push({prompt:C(r.join(`
`)),rawAnswer:e,answer:f(e)}),r=[];continue}r.push(e)}let i=C(r.join(`
`));return i.length>0&&n.length===0?[]:(i.length>0&&n.push({prompt:i,rawAnswer:null,answer:null}),n)}function ee(e){let t=[],n=[];for(let r of e.split(`
`))h.test(r)&&n.length>0&&(t.push(n.join(`
`)),n=[]),n.push(r);return n.length>0&&t.push(n.join(`
`)),t.map(e=>S(e))}function S(e){let t=[],n=null,r=null;for(let i of e.split(`
`)){let e=m.exec(i);if(e!==null){n=e[2]?.trim()??``,r=f(n);continue}t.push(i)}return{prompt:C(t.join(`
`)),rawAnswer:n,answer:r}}function C(e){return e.split(`
`).map(e=>e.trimEnd()).join(`
`).trim()}function te(e){return`${e}_${Date.now().toString(36)}_${crypto.randomUUID().slice(0,8)}`}function ne(e,t,n){return{id:te(`file`),folderId:e,name:t,content:n,questions:g(n),importedAt:Date.now()}}function w(e,t){return{...e,files:e.files.filter(e=>e.id!==t),attempts:e.attempts.filter(e=>e.fileId!==t),answerOverrides:e.answerOverrides.filter(e=>e.fileId!==t),examDrafts:e.examDrafts.filter(e=>e.fileId!==t)}}function T(e,t,n){let r=new Set(e.files.filter(e=>e.folderId===t).map(e=>e.id)),i=e.folders.filter(e=>e.id!==t);return{...e,folders:i.length>0?i:[n()],files:e.files.filter(e=>!r.has(e.id)),attempts:e.attempts.filter(e=>!r.has(e.fileId)),answerOverrides:e.answerOverrides.filter(e=>!r.has(e.fileId)),examDrafts:e.examDrafts.filter(e=>!r.has(e.fileId))}}var re=`# 정보처리기사 실기 개념요약본 (1~5과목)

> 양식: **[암기키워드]-내용** / 세부내용
> 범위: 요구사항 확인 · 화면 설계 · 데이터 입출력 구현 · 통합 구현 · 인터페이스 구현

---

# 1과목. 요구사항 확인

## 📌 소프트웨어 생명주기(SDLC) 모델 (1-1-1)

### 개념
소프트웨어 개발부터 폐기까지 전 과정을 단계별로 나눈 프로세스 모델. 타당성 검토 → 개발 계획 → 요구사항 분석 → 설계 → 구현 → 테스트 → 운영/유지보수 순으로 진행된다.

### [폭프나반]-소프트웨어 생명주기 모델 종류
**폭포수 모델 / 프로토타이핑 모델 / 나선형 모델 / 반복적 모델**

- **폭포수 모델(Waterfall)**: 단계를 순차적으로 진행, 이전 단계로 되돌아갈 수 없음. 요구사항이 명확할 때 적합. 산출물(문서) 중심, 고전적 모델.
- **프로토타이핑 모델(Prototyping)**: 시제품(프로토타입)을 빠르게 만들어 고객 피드백을 받아 요구사항을 구체화. 요구사항이 불명확할 때 유리.
- **나선형 모델(Spiral)**: 폭포수 + 프로토타이핑 + **위험 분석**을 결합. 반복(나선)을 돌며 점진적으로 완성. 대규모·고위험 프로젝트에 적합. → 핵심은 **위험 감소**.
- **반복적 모델(Iteration)**: 시스템을 여러 번 나누어(증분/진화) 릴리즈. 병렬 개발 가능.

### [계위개고]-나선형 모델 절차
**계획 및 정의 → 위험 분석 → 개발 → 고객 평가** (반복)

> ⭐ **기출 포인트** — 나선형 모델은 **"위험 분석"**이 답의 핵심 키워드. 절차 4단계를 순서대로 쓰는 문제가 반복 출제.

---

## 📌 애자일(Agile) 방법론

**[유연하고 빠르게 개발하는 방법론]** — 절차·문서보다 **소통과 동작하는 소프트웨어**, 계약·계획보다 **고객 협업과 변화 대응**을 중시(애자일 선언문 4가지 가치). 짧은 주기(이터레이션)로 반복 개발하며 요구사항 변화에 신속히 대응.

**애자일 방법론 유형**
- **XP(eXtreme Programming)**: 1~3주 짧은 릴리즈, 5가치 = 용기·단순성·의사소통·피드백·존중. 주요 실천법: 짝 프로그래밍(Pair Programming), 공동 코드 소유, 지속적 통합(CI), 계획 게임, 테스트 주도 개발(TDD), 리팩토링.
- **스크럼(Scrum)**: 백로그(Backlog), 스프린트(2~4주), 일일 스크럼 회의, 제품 책임자(PO)·스크럼 마스터, 번다운 차트로 진척 관리.
- **린(Lean)**: 도요타 생산방식 기반, 낭비 제거 7원칙(낭비 제거, 품질 내재화, 지식 창출, 늦은 확정, 빠른 인도, 사람 존중, 전체 최적화).
- **칸반(Kanban)**: 작업 흐름 시각화(칸반 보드), WIP(진행 중 작업) 제한.

---

## 📌 객체 지향

### [클객 메 메인속]-객체 지향 구성요소 (암기: 메메한 인간의 속내)
**클래스 / 객체 / 메서드 / 메시지 / 인스턴스 / 속성**

- **클래스(Class)**: 유사한 객체들을 묶은 공통 특성(속성+메서드)의 틀·설계도.
- **객체(Object)**: 데이터(속성)와 이를 처리하는 함수(메서드)를 묶은 소프트웨어 모듈.
- **메서드(Method)**: 객체가 수행하는 연산·동작(클래스의 함수).
- **메시지(Message)**: 객체 간 상호작용을 위한 수단, 메서드 호출 요청.
- **인스턴스(Instance)**: 클래스로부터 실제로 생성된 객체.
- **속성(Attribute)**: 객체가 가진 데이터·상태.

### [캡상다추정관]-객체 지향 기법(특징)
**캡슐화 / 상속성 / 다형성 / 추상화 / 정보은닉 / 관계성**

- **캡슐화(Encapsulation)**: 속성과 메서드를 하나로 묶어 외부 접근을 제한. 결합도↓ 응집도↑.
- **상속성(Inheritance)**: 상위 클래스의 속성·메서드를 하위 클래스가 물려받아 재사용.
- **다형성(Polymorphism)**: 하나의 메시지에 대해 객체마다 다르게 동작(오버로딩=같은 이름 다른 매개변수, 오버라이딩=상위 메서드 재정의).
- **추상화(Abstraction)**: 공통 성질을 추출해 핵심만 모델링(불필요한 세부 제거).
- **정보은닉(Information Hiding)**: 내부 구현을 숨기고 인터페이스만 공개. 사이드 이펙트 최소화.
- **관계성(Relationship)**: 객체 간 연관·집합·일반화 등의 관계 표현.

> ⭐ **기출 포인트** — **오버로딩 vs 오버라이딩** 구분 서술 단골: 오버로딩=같은 이름·다른 매개변수 / 오버라이딩=상속 메서드 재정의. "다형성" 용어 단답도 출제.

### [SOLID]-객체지향 설계 원칙
- **SRP(단일 책임 원칙)**: 하나의 클래스는 하나의 책임만 가진다.
- **OCP(개방 폐쇄 원칙)**: 확장에는 열려 있고, 변경에는 닫혀 있어야 한다.
- **LSP(리스코프 치환 원칙)**: 하위 클래스는 상위 클래스를 대체할 수 있어야 한다.
- **ISP(인터페이스 분리 원칙)**: 클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 한다(범용 1개보다 특화 여러 개).
- **DIP(의존성 역전 원칙)**: 구체 클래스가 아닌 추상(인터페이스)에 의존해야 한다.

> ⭐ **기출 포인트** — 설명을 주고 **영문 약어(SRP·OCP·LSP·ISP·DIP)** 또는 한글 명칭을 쓰게 하는 단답형 최빈출. 특히 **OCP·ISP** 출제 빈도 높음.

### 객체 지향 분석 방법론 종류
- **럼바우(Rumbaugh) OMT**: 그래픽 표기법으로 모델링. ★아래 [객동기] 참조.
- **부치(Booch)**: 미시적·거시적 개발 프로세스, 클래스와 객체 식별.
- **야콥슨(Jacobson) OOSE**: **유스케이스** 중심.
- **코드-요돈(Coad-Yourdon)**: E-R 다이어그램 사용, 객체 식별·구조 식별·주제 정의.
- **워프스-브록(Wirfs-Brock)**: 분석과 설계 구분 없이 연속적으로 수행, 책임 주도 설계.

### [객동기]-럼바우의 객체지향 분석 절차 (암기: 격동기)
**객체 모델링 → 동적 모델링 → 기능 모델링**

- **객체 모델링(Object)**: 객체·클래스 식별, **객체 다이어그램**.
- **동적 모델링(Dynamic)**: 시간 흐름에 따른 상태·동작, **상태 다이어그램**.
- **기능 모델링(Functional)**: 데이터 흐름 중심 처리 과정, **자료 흐름도(DFD)**.

> ⭐ **기출 포인트** — 럼바우는 **순서(객→동→기)**와 **단계별 다이어그램 매칭**(객체=객체 다이어그램, 동적=상태 다이어그램, 기능=DFD)이 그대로 답으로 출제.

---

## 📌 프로젝트 관리 (1-1-2)

### 비용산정 모형 종류
크게 **하향식**(전문가 판단, 델파이 기법)과 **상향식**(LOC, Man Month, COCOMO, Putnam, FP)으로 나뉜다.

- **LOC(원시 코드 라인 수)**: 예측치 = (낙관치 + 4×기대치 + 비관치) ÷ 6. 노력(인월) = LOC ÷ 1인당 월평균 생산 LOC.
- **Man Month**: 한 사람이 1개월 동안 할 수 있는 일의 양 기준. 프로젝트 기간 = Man Month ÷ 투입 인원.
- **COCOMO**: LOC 기반 보헴(Boehm)이 제안. 규모에 따라 **조직형(Organic, 5만 라인 이하) / 반분리형(Semi-detached, 30만 라인 이하) / 임베디드형(Embedded, 30만 라인 이상)**.
- **Putnam(푸트남)**: 생명주기 전 과정에 노력 분포를 가정, **Rayleigh-Norden 곡선** 기반. 자동화 도구: SLIM.
- **FP(기능 점수)**: 기능(입력·출력·질의·파일·인터페이스)별 가중치를 부여해 산정. 자동화 도구: ESTIMACS.

### 일정관리 모델 종류
- **CPM(주 공정법)**: 임계 경로(Critical Path, 최장 경로)로 프로젝트 최소 소요 기간 산정. 노드=단계, 간선=작업.
- **PERT**: 낙관치·기대치·비관치 3점 추정으로 일정 확률적 산정(경험 없는 신규 프로젝트).
- **CCPM(임계 연쇄)**: 자원 제약을 고려한 임계 연쇄 기법.
- **간트 차트(Gantt Chart)**: 작업 일정을 막대(bar) 형태로 시각화, 시간선(Time-line) 차트.

### [회전완수]-위험 대응 전략
**회피 / 전가 / 완화 / 수용**

- **회피(Avoidance)**: 위험이 발생하지 않도록 계획 자체를 변경.
- **전가(Transference)**: 위험을 제3자에게 이전(보험, 하도급 계약 등).
- **완화(Mitigation)**: 위험 발생 확률·영향도를 낮춤.
- **수용(Acceptance)**: 위험을 받아들이고 대비책(비상 계획)만 준비.

---

## 📌 소프트웨어 아키텍처

### 개념
시스템의 구조·구성요소와 그들 간의 관계, 설계·발전 원칙을 정의한 청사진. 이해관계자 간 의사소통 도구.

### [유논프구배]-소프트웨어 아키텍처 4+1 뷰
**유스케이스 뷰 + 논리 뷰 / 프로세스 뷰 / 구현 뷰 / 배포 뷰**

- **유스케이스 뷰(+1)**: 사용자·시스템 기능 관점, 다른 4개 뷰를 검증하는 중심 뷰.
- **논리 뷰**: 설계자 관점, 기능 요구사항·클래스 구조.
- **프로세스 뷰**: 개발자 관점, 동시성·성능·스레드/프로세스.
- **구현 뷰(개발 뷰)**: 개발자 관점, 모듈·컴포넌트 구성.
- **배포 뷰(물리 뷰)**: 시스템 엔지니어 관점, HW에 SW 컴포넌트 배치.

### 소프트웨어 아키텍처 패턴
- **계층화 패턴(Layered)**: 시스템을 계층으로 분리(프레젠테이션-비즈니스-퍼시스턴스-DB), OSI 모델이 대표.
- **클라이언트-서버 패턴**: 서비스 제공자(서버)와 요청자(클라이언트) 분리.
- **파이프-필터 패턴**: 데이터 스트림을 필터로 처리해 파이프로 전달(UNIX 쉘).
- **브로커 패턴**: 분산 시스템에서 컴포넌트 간 통신을 브로커가 중재.
- **MVC 패턴**: Model(데이터)-View(화면)-Controller(제어) 분리.

### [SACAA]-아키텍처 비용 평가 모델 종류 (암기: 사카린)
**SAAM / ATAM / CBAM / ADR / ARID**

- **SAAM**: 변경 용이성·기능성 중심, 최초의 평가 모델.
- **ATAM**: 품질 속성(가용성·보안성 등) 간 트레이드오프 평가.
- **CBAM**: ATAM 기반, 경제적(비용-효익) 의사결정 평가.
- **ADR**: 소프트웨어 아키텍처 구성요소 간 응집도 평가.
- **ARID**: ATAM+ADR 혼합, 특정 부분(설계 초안) 평가.

---

## 📌 디자인 패턴 (1-2-1)

### 개념
소프트웨어 설계에서 자주 발생하는 문제에 대한 **재사용 가능한 해결책**. GoF(Gang of Four, 4인방)가 23개 패턴으로 정리.

### [패문솔 사결샘]-디자인 패턴 구성요소
**패턴 이름 / 문제 / 솔루션 / 사례 / 결과 / 샘플 코드**

### [생구행]-목적에 따른 디자인 패턴 유형
**생성(Creational) / 구조(Structural) / 행위(Behavioral)**

### [생빌 프로 팩앱싱]-생성 패턴 (5개)
객체 생성 방식을 캡슐화하는 패턴.

- **빌더(Builder)**: 복잡한 객체의 생성 과정과 표현을 분리, 단계별로 조립해 생성.
- **프로토타입(Prototype)**: 원본 객체를 복제(clone)하여 생성. 생성 비용이 클 때 유용.
- **팩토리 메서드(Factory Method)**: 객체 생성을 서브클래스에 위임(가상 생성자).
- **앱스트랙 팩토리(Abstract Factory)**: 관련 객체들의 군(제품군)을 생성하는 인터페이스 제공, 구체 클래스에 의존하지 않음.
- **싱글톤(Singleton)**: 인스턴스를 **오직 하나만** 생성, 전역 접근점 제공.

### [구 브데 퍼플 프록 컴 어]-구조 패턴 (7개)
클래스·객체를 조합해 더 큰 구조를 만드는 패턴.

- **브리지(Bridge)**: 추상과 구현을 분리해 독립적으로 확장 가능하게 연결.
- **데코레이터(Decorator)**: 객체에 동적으로 기능(장식)을 추가.
- **퍼사드(Facade)**: 복잡한 서브시스템에 대한 단순한 통합 인터페이스 제공(오퍼레이션 창구).
- **플라이웨이트(Flyweight)**: 인스턴스를 공유해 메모리 절약(다수의 유사 객체).
- **프록시(Proxy)**: 실제 객체에 대한 대리자를 두어 접근 제어.
- **컴포지트(Composite)**: 객체를 트리 구조로 구성해 부분-전체 계층 표현(단일/복합 객체 동일 취급).
- **어댑터(Adapter)**: 호환되지 않는 인터페이스를 변환해 함께 동작하게 함.

### [행 미인이 템옵 스테 비커 스트 메체]-행위 패턴 (11개)
객체 간 상호작용·책임 분배 패턴.

- **미디에이터(Mediator)**: 객체 간 통신을 중재자가 캡슐화(M:N → M:1).
- **인터프리터(Interpreter)**: 언어의 문법을 정의하고 해석기 구현.
- **이터레이터(Iterator)**: 내부 구조 노출 없이 요소들을 순차 접근.
- **템플릿 메서드(Template Method)**: 알고리즘 골격은 상위 클래스, 세부는 하위 클래스에서 정의.
- **옵저버(Observer)**: 한 객체의 상태 변화를 의존 객체들에게 자동 통보(1:N).
- **스테이트(State)**: 객체 상태에 따라 행위를 변경(상태를 객체화).
- **비지터(Visitor)**: 데이터 구조와 연산을 분리, 새 연산을 구조 변경 없이 추가.
- **커맨드(Command)**: 요청을 객체로 캡슐화(실행 취소·큐 저장 가능).
- **스트레티지(Strategy)**: 알고리즘군을 캡슐화해 동적으로 교체 가능.
- **메멘토(Memento)**: 객체의 상태를 저장해 이전 상태로 복원(undo).
- **체인 오브 리스판서빌리티(Chain of Responsibility)**: 요청을 처리할 수 있는 객체를 만날 때까지 사슬로 전달.

---

## 📌 요구사항 · 요구공학 (1-2-2)

### 요구사항의 분류
- **기능적 요구사항(Functional)**: 시스템이 제공해야 하는 기능·서비스(입출력, 데이터 처리 등).
- **비기능적 요구사항(Non-Functional)**: 품질·제약 조건(성능, 보안, 신뢰성, 가용성, 사용성 등).

### [도분명확]-요구사항 개발 프로세스(요구공학)
**도출(Elicitation) → 분석(Analysis) → 명세(Specification) → 확인 및 검증(Validation & Verification)**

- **도출**: 이해관계자에게서 요구사항 수집(인터뷰, 브레인스토밍, 워크숍, 설문, 프로토타이핑, 유스케이스).
- **분석**: 요구사항 간 상충 해결, 우선순위·타당성 분석(자료 흐름 지향 분석, 객체 지향 분석).
- **명세**: 문서화(SRS). 정형(수학적 표기)·비정형(자연어) 명세 기법.
- **확인/검증**: 명세가 완전·일관·타당한지 검토(리뷰·인스펙션·워크스루), 베이스라인 설정.
  - **동료 검토(Peer Review)**: 작성자가 설명, 동료들이 결함 발견.
  - **워크스루(Walkthrough)**: 사전 배포 후 짧은 검토 회의.
  - **인스펙션(Inspection)**: 작성자 외 전문가가 공식적으로 결함 검출.

---

## 📌 현행 시스템 분석

현행 시스템의 **플랫폼 기능·구조, 운영체제, 네트워크, DBMS, 비즈니스 융합** 등을 파악해 개발 범위와 이행 방향을 결정하는 활동.
- 시스템 구성/기능/인터페이스 파악 → 아키텍처 및 소프트웨어 구성 파악 → 하드웨어·네트워크 구성 파악.
- DBMS 분석 시 고려: 가용성, 성능, 상호 호환성, 기술 지원, 구축 비용.

---

# 2과목. 화면 설계

## 📌 UI / UX (2-1-1)

### 개념
- **UI(User Interface)**: 사용자와 시스템 간 **상호작용 접점**(화면·조작 방식).
- **UX(User Experience)**: 제품·서비스를 사용하며 느끼는 **총체적 경험**(주관적·경험적).

### [CG NO]-UI 유형
**CLI / GUI / NUI / OUI**

- **CLI(Command Line Interface)**: 텍스트 명령어 기반.
- **GUI(Graphical UI)**: 그래픽(마우스·아이콘) 기반.
- **NUI(Natural UI)**: 음성·터치·제스처 등 신체 기반 자연스러운 상호작용.
- **OUI(Organic UI)**: 현실 사물 자체가 입출력 장치가 되는 유기적 인터페이스.

### [직유 학유]-UI 설계 원칙
**직관성 / 유효성 / 학습성 / 유연성**

- **직관성**: 누구나 쉽게 이해하고 사용할 수 있어야 함.
- **유효성**: 사용자의 목적을 정확하게 달성해야 함.
- **학습성**: 누구나 쉽게 배우고 익힐 수 있어야 함.
- **유연성**: 사용자 요구를 수용하고 오류를 최소화해야 함.

### UI 설계 지침(주요)
사용자 중심, 일관성, 단순성, 결과 예측 가능, 가시성, 표준화, 접근성, 명확성, 오류 발생 해결 등.

### [기신사효유이]-UI 품질 요구사항 (ISO/IEC 9126)
**기능성 / 신뢰성 / 사용성 / 효율성 / 유지보수성 / 이식성**

- **기능성(Functionality)**: 요구를 만족하는 기능 제공(적절성·정확성·상호운용성·보안성·준수성).
- **신뢰성(Reliability)**: 규정된 신뢰 수준 유지(성숙성·고장 허용성·회복성).
- **사용성(Usability)**: 쉽게 이해·학습·사용(이해성·학습성·운용성).
- **효율성(Efficiency)**: 자원 대비 적절한 성능(시간 효율성·자원 효율성).
- **유지보수성(Maintainability)**: 수정·개선 용이(분석성·변경성·안정성·시험성).
- **이식성(Portability)**: 다른 환경으로 쉽게 이전(적응성·설치성·대체성).

### [와스프목]-UI 화면 설계 도구
**와이어프레임 / 스토리보드 / 프로토타입 / 목업**

- **와이어프레임(Wireframe)**: 화면 레이아웃·뼈대를 개략적으로 표현한 설계 초안.
- **스토리보드(Storyboard)**: 와이어프레임 + 콘텐츠 설명·이동 흐름 등 상세 정보를 담은 문서(디자이너·개발자 최종 산출물).
- **프로토타입(Prototype)**: 인터랙션(동적 효과)을 적용한 동작 가능한 시제품.
- **목업(Mockup)**: 실제 화면과 유사한 정적 모형(기능 구현 없음).

### UI 컨셉션 / UI 프로토타입
- **UI 컨셉션**: 요구사항을 바탕으로 UI 콘셉트(구조·표현 방향)를 정의하는 활동.
- **UI 프로토타입 장점**: 사전 오류 발견, 소통 촉진 / 단점: 반복 수정 비용, 필요 이상의 기대 유발 가능.

---

## 📌 UML (2-2-1)

### 개념
객체 지향 소프트웨어 개발 과정에서 산출물을 **명세화·시각화·문서화**하기 위한 **표준 모델링 언어**(OMG 표준, 부치+럼바우+야콥슨 방법론 통합).

### [가구명문]-UML 특징
**가시화 / 구축 / 명세화 / 문서화 언어**

### [사관다]-UML 구성요소
**사물(Things) / 관계(Relationships) / 다이어그램(Diagrams)**

### UML 관계(클래스 간의 관계)
- **연관(Association)**: 객체 간 참조 관계(실선, 방향 가능). 예: 사람—회사.
- **집합/집약(Aggregation)**: 전체-부분(부분이 독립적, 빈 마름모). 예: 컴퓨터—프린터.
- **합성/복합(Composition)**: 전체-부분(생명주기 공유, 채운 마름모). 예: 문—문손잡이.
- **일반화(Generalization)**: 상속(is-a), 빈 삼각형 화살표. 예: 커피—아메리카노.
- **의존(Dependency)**: 짧은 시간 동안만 참조(점선 화살표).
- **실체화(Realization)**: 인터페이스와 구현 관계(점선 + 빈 삼각형).

### [클객 컴배 복패]-구조적(정적) 다이어그램
**클래스 / 객체 / 컴포넌트 / 배치 / 복합체 구조 / 패키지**

- **클래스 다이어그램**: 클래스의 속성·연산과 클래스 간 관계 표현(정적 구조의 핵심).
- **객체 다이어그램**: 특정 시점의 인스턴스와 관계 표현(럼바우 **객체** 모델링).
- **컴포넌트 다이어그램**: 컴포넌트 간 의존 관계(구현 단계).
- **배치 다이어그램**: 물리적 노드에 컴포넌트·아티팩트 배치(구현 단계).
- **복합체 구조 다이어그램**: 복합 구조를 갖는 클래스 내부 구조 표현.
- **패키지 다이어그램**: 관련 요소를 패키지(그룹) 단위로 묶어 의존 관계 표현.

### [유시커 상활타]-행위적(동적) 다이어그램
**유스케이스 / 시퀀스 / 커뮤니케이션 / 상태 / 활동 / 타이밍**

- **유스케이스 다이어그램**: 사용자(액터) 관점의 시스템 기능(유스케이스)과 관계. 관계: 포함(include), 확장(extend), 일반화.
- **시퀀스 다이어그램**: 객체 간 메시지를 **시간 순서**로 표현. 구성: 액터, 객체, 생명선(Lifeline), 실행(활성) 박스, 메시지.
- **커뮤니케이션 다이어그램**: 메시지 + 객체 간 **연관 관계**까지 표현.
- **상태 다이어그램**: 이벤트에 따른 한 객체의 상태 변화(럼바우 **동적** 모델링).
- **활동 다이어그램**: 처리 흐름·조건 분기 등 업무 로직을 순서대로 표현(순서도와 유사).
- **타이밍 다이어그램**: 시간 제약을 명시적으로 표현.

---

# 3과목. 데이터 입출력 구현

## 📌 데이터 모델과 DB 설계 (3-1-1)

### 데이터 모델 개념
현실 세계의 정보를 컴퓨터 세계로 추상화·개념화하여 표현하는 모델.

### [구연제]-데이터 모델에 표시해야 할 요소
**구조 / 연산 / 제약조건**

- **구조(Structure)**: 개체 간의 관계, 데이터 구조.
- **연산(Operation)**: 데이터를 처리하는 작업 명세.
- **제약조건(Constraint)**: 데이터의 논리적 제약.

### [요개논물]-데이터베이스 설계 단계(데이터 모델 절차)
**요구조건 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계**

- **요구조건 분석**: 요구사항 수집·명세서 작성.
- **개념적 설계**: DBMS 독립적, **E-R 다이어그램** 작성, 트랜잭션 모델링.
- **논리적 설계**: 특정 DBMS의 논리 스키마(테이블) 설계, **정규화**, 트랜잭션 인터페이스 설계.
- **물리적 설계**: 저장 구조·접근 경로 설계(인덱스, 파티션, 반정규화 등 성능 고려).

### 논리 데이터 모델링 종류
- **관계 데이터 모델**: 2차원 테이블(릴레이션) 형태. 대표적.
- **계층 데이터 모델**: 트리 구조(1:N).
- **네트워크 데이터 모델**: 그래프 구조(N:M, 오너-멤버).

### 관계 데이터 모델 용어
- **릴레이션**: 테이블. **튜플**: 행(카디널리티=튜플 수). **속성(Attribute)**: 열(차수/Degree=속성 수). **도메인**: 속성이 가질 수 있는 값의 범위.

---

## 📌 관계 대수 · 관계 해석

### 관계 대수 vs 관계 해석
**[대절해비]** — **관계 대수는 절차적 언어, 관계 해석은 비절차적 언어**
- **관계 대수**: 원하는 결과를 얻기 위한 **절차**를 명시(How).
- **관계 해석**: 원하는 결과만 명시(What). 튜플 관계 해석·도메인 관계 해석. 술어 해석(Predicate Calculus) 기반.

### [합교차카]-일반 집합 연산자
**합집합(∪) / 교집합(∩) / 차집합(−) / 카티션 프로덕트(×)**

### [셀프조디]-순수 관계 연산자
**셀렉트(σ) / 프로젝트(π) / 조인(⋈) / 디비전(÷)**

- **Select(σ)**: 조건을 만족하는 **튜플(행)** 추출.
- **Project(π)**: 지정한 **속성(열)** 추출.
- **Join(⋈)**: 두 릴레이션의 공통 속성으로 결합.
- **Division(÷)**: R÷S, S의 모든 값을 가진 R의 튜플 추출.

---

## 📌 개체-관계(E-R) 모델

개체(Entity)·속성(Attribute)·관계(Relationship)로 현실 세계를 개념적으로 표현(피터 첸 제안).

**E-R 다이어그램 기호**
| 기호 | 의미 |
|---|---|
| 사각형 | 개체(Entity) |
| 마름모 | 관계(Relationship) |
| 타원 | 속성(Attribute) |
| 이중 타원 | 다중값 속성 |
| 밑줄 타원 | 기본키 속성 |
| 선 | 개체-속성/관계 연결 |

---

## 📌 이상 현상 · 함수 종속 · 정규화

### [삽삭갱]-이상 현상(Anomaly) 종류
**삽입 이상 / 삭제 이상 / 갱신 이상**

- **삽입 이상**: 데이터 삽입 시 불필요한 값까지 함께 삽입해야 하는 현상.
- **삭제 이상**: 튜플 삭제 시 필요한 데이터까지 연쇄 삭제되는 현상.
- **갱신 이상**: 중복 튜플 중 일부만 갱신되어 불일치가 발생하는 현상.

### 함수 종속(Functional Dependency)
X → Y: X가 Y를 함수적으로 결정(X=결정자, Y=종속자).
- **완전 함수 종속**: 기본키 전체에 종속.
- **부분 함수 종속**: 복합키의 일부에만 종속.
- **이행 함수 종속**: X→Y, Y→Z이면 X→Z.

### 정규화(Normalization) 개념
이상 현상을 제거하기 위해 릴레이션을 무손실 분해하는 과정. 중복 최소화, 종속성 제거.

### [원부이 결다조]-정규화 단계
**원자화(1NF) → 부분함수종속 제거(2NF) → 이행함수종속 제거(3NF) → 결정자함수종속 제거(BCNF) → 다치종속 제거(4NF) → 조인종속 제거(5NF)**

- **1NF**: 모든 속성이 원자값만 가짐.
- **2NF**: 부분 함수 종속 제거(완전 함수 종속만).
- **3NF**: 이행 함수 종속 제거.
- **BCNF**: 모든 결정자가 후보키.
- **4NF**: 다치 종속(MVD) 제거.
- **5NF**: 조인 종속 제거(모든 조인 종속이 후보키를 통해서만).

### 반정규화(De-Normalization)
정규화된 모델을 **성능 향상·운영 단순화**를 위해 의도적으로 중복·통합·분리하는 기법(테이블 통합/분할/중복, 컬럼 중복 등). 데이터 일관성·무결성 저하 위험 있음.

---

## 📌 물리 데이터 모델 · 무결성 · 키

**[개참속사키]-데이터 무결성 종류**
**개체 무결성 / 참조 무결성 / 속성 무결성 / 사용자 무결성 / 키 무결성**

- **개체 무결성**: 기본키는 NULL·중복 불가.
- **참조 무결성**: 외래키는 NULL이거나 참조 릴레이션의 기본키 값이어야 함.
- **속성 무결성**: 속성은 정의된 데이터 타입·도메인을 따라야 함.
- **사용자 무결성**: 사용자가 정의한 비즈니스 규칙 준수.
- **키 무결성**: 한 릴레이션에 같은 키 값을 가진 튜플 불허.

### 키(Key) 특성
- **유일성**: 하나의 키로 튜플을 유일하게 식별.
- **최소성**: 꼭 필요한 최소한의 속성으로만 구성.

### 키 종류
- **슈퍼키**: 유일성 O, 최소성 X.
- **후보키**: 유일성 O, 최소성 O.
- **기본키(PK)**: 후보키 중 선정된 키(NULL 불가).
- **대체키**: 기본키를 제외한 나머지 후보키.
- **외래키(FK)**: 다른 릴레이션의 기본키를 참조하는 키.

### [레해리컴라]-파티셔닝 유형
**Range / Hash / List / Composite / Round-Robin**

- **Range**: 값의 범위 기준 분할(날짜·숫자 구간).
- **Hash**: 해시 함수 값 기준 균등 분할.
- **List**: 지정한 값 목록 기준 분할.
- **Composite**: Range+Hash 등 두 방식 조합.
- **Round-Robin**: 순차적으로 균등 분배.

---

## 📌 데이터베이스 기초 활용 (3-2-1)

### 데이터베이스 종류
- **파일 시스템**: 순차/색인/직접 파일.
- **관계형 DBMS(RDBMS)**: 테이블 기반(Oracle, MySQL 등).
- **계층형/네트워크형 DBMS**: 트리/그래프 구조.

### DBMS 필수 기능
**정의(Definition) / 조작(Manipulation) / 제어(Control)**

### 빅데이터 / 하둡
- **빅데이터 3V**: Volume(규모), Velocity(속도), Variety(다양성).
- **하둡(Hadoop)**: 대량 데이터 분산 처리 오픈소스 프레임워크. HDFS(분산 파일 시스템) + MapReduce(분산 처리).

### [키컬도그]-NoSQL 유형 (암기: Key Color Dog)
**Key-Value Store / Column Family Data Store / Document Store / Graph Store**

- **Key-Value**: 키-값 쌍 저장(Redis, DynamoDB).
- **Column Family**: 컬럼 단위 저장(HBase, Cassandra).
- **Document**: JSON/XML 문서 단위 저장(MongoDB, CouchDB).
- **Graph**: 노드-엣지 그래프 저장(Neo4j).
- NoSQL 특징: **BASE**(Basically Available, Soft state, Eventually consistent), 수평 확장 용이.

### 데이터 마이닝
대량 데이터에서 숨겨진 패턴·규칙을 발견하는 기법.

**[분연 연데]-데이터 마이닝 주요 기법**
**분류 규칙 / 연관 규칙 / 연속 규칙 / 데이터 군집화**

- **분류(Classification)**: 범주가 알려진 데이터로 모델을 만들어 새 데이터를 분류(의사결정트리 등).
- **연관(Association)**: 항목 간 동시 발생 규칙 발견(장바구니 분석).
- **연속(Sequence)**: 시간 순서를 고려한 연관 규칙(구매 순서 패턴).
- **군집화(Clustering)**: 유사한 데이터끼리 그룹화(비지도 학습).

---

# 4과목. 통합 구현

## 📌 연계 메커니즘 (4-1-1)

### 연계 시스템 구성
**송신 시스템 → 중계 시스템 → 수신 시스템**
- **송신**: 데이터 생성·추출·변환·전송(어댑터 포함).
- **중계**: 내외부 구간 연계, 모니터링·보안 강화.
- **수신**: 데이터 수신·변환·DB 반영.

### 연계 방식
- **직접 연계**: DB Link, DB Connection, API/Open API, JDBC, 화면 링크(속도 빠름, 결합도 높음).
- **간접 연계**: EAI, ESB, 웹 서비스, 소켓(유연·표준적, 성능 저하 가능).

### 주요 연계 기술 용어
- **커넥션 풀(Connection Pool)**: DB 연결(Connection)을 미리 생성해 풀(pool)에 두고 재사용하는 기법. 연결 생성 비용 절감.
- **JDBC**: Java에서 DB에 접속·SQL을 실행하는 표준 API.
- **소켓(Socket)**: 네트워크 통신의 끝점(endpoint). 포트를 할당해 클라이언트 요청을 연결로 처리하는 저수준 통신 기술.
- **API**: 응용 프로그램이 기능·데이터에 접근할 수 있게 제공하는 인터페이스.

---

## 📌 EAI · ESB (4-1-2)

### EAI(Enterprise Application Integration)
기업 내 서로 다른 애플리케이션·플랫폼 간 정보 전달·연계·통합을 가능하게 하는 솔루션.

### [포허 메하]-EAI 구축 유형
**포인트 투 포인트 / 허브 앤 스포크 / 메시지 버스 / 하이브리드**

- **Point-to-Point**: 1:1 직접 연결. 가장 단순·저렴하나 시스템 증가 시 연결 폭증.
- **Hub & Spoke**: 중앙 허브를 통해 연결. 확장·유지보수 용이, 허브 장애 시 전체 영향.
- **Message Bus(ESB 방식)**: 애플리케이션 사이 미들웨어(버스)를 두어 연계. 뛰어난 확장성·대용량 처리.
- **Hybrid**: 그룹 내 허브 앤 스포크 + 그룹 간 메시지 버스 조합.

### ESB(Enterprise Service Bus)
서비스 중심(버스 기반)으로 애플리케이션을 **느슨한 결합(Loosely Coupled)** 방식으로 통합하는 미들웨어 플랫폼. EAI보다 표준(웹 서비스) 지향.

---

## 📌 웹 서비스(Web Service)

네트워크에서 서로 다른 기종 간 정보를 표준(XML·HTTP) 기반으로 교환하는 서비스.

**웹 서비스 관련 용어 3대장**
- **SOAP(Simple Object Access Protocol)**: HTTP 등으로 XML 기반 메시지를 교환하는 통신 프로토콜(봉투 Envelope-헤더-바디 구조).
- **WSDL(Web Services Description Language)**: 웹 서비스의 **명세(기능·위치·호출 방법)**를 기술한 XML 문서.
- **UDDI(Universal Description, Discovery and Integration)**: 웹 서비스를 **등록·검색**하는 저장소(레지스트리).
- 동작: 제공자가 WSDL을 UDDI에 등록 → 사용자가 UDDI에서 검색 → SOAP으로 호출.

### IPC(Inter-Process Communication) 방식
프로세스 간 통신 기법: **공유 메모리, 소켓, 세마포어, 파이프(익명/명명), 메시지 큐**.

### 기타
- **LOD(Linked Open Data)**: 웹에서 누구나 사용할 수 있게 URI로 식별·공개·연결한 개방 데이터.
- **URL/URI**: 자원의 위치(URL)·식별자(URI).

---

# 5과목. 인터페이스 구현

## 📌 인터페이스 데이터 기술 (5-1-1)

### JSON(JavaScript Object Notation)
속성-값(Key-Value) 쌍으로 데이터를 표현하는 **경량 데이터 교환 포맷**. 언어 독립적, AJAX·REST에서 널리 사용. 예: \`{"name": "홍길동", "age": 20}\`

### XML(eXtensible Markup Language)
HTML의 한계(고정 태그)를 극복하고 SGML의 복잡성을 해결한 **확장 가능한 마크업 언어**. 사용자가 태그를 정의할 수 있고, 데이터 구조·의미 표현에 사용.
- **마크업 언어**: 태그로 문서·데이터 구조를 표기하는 언어(HTML, XML, SGML).
- **DOM(Document Object Model)**: XML/HTML 문서를 트리 구조 객체로 표현해 접근·조작하는 표준 인터페이스(메모리에 전체 로딩).
- **SAX**: 이벤트 기반으로 XML을 순차 파싱(대용량에 유리) — DOM과 대비.
- **XSLT**: XML 문서를 다른 XML/HTML 등으로 **변환**하는 언어.

### AJAX(Asynchronous JavaScript And XML)
자바스크립트로 서버와 **비동기** 통신하여 페이지 전체를 새로 고치지 않고 일부만 갱신하는 기술(XMLHttpRequest 객체 사용). 데이터 형식은 XML·JSON 등.

### REST(Representational State Transfer)
HTTP 프로토콜로 자원(URI)을 표현하고, **HTTP 메서드(GET/POST/PUT/DELETE)**로 자원을 처리(CRUD)하는 아키텍처 스타일.
- 구성 3요소: **자원(URI) / 행위(HTTP Method) / 표현(Representation, JSON·XML)**.
- REST 원칙을 준수한 API = **RESTful API**.

### 웹 관련 기초
- **HTML**: 웹 페이지 구조를 표현하는 마크업 언어.
- **CSS**: HTML의 표현(스타일)을 정의하는 언어.
- **선형 구조 vs 객체**: JSON 배열(\`[]\`)은 선형(순서) 구조, JSON 객체(\`{}\`)는 키-값 집합.

### 인터페이스 구현 검증 도구 (참고)
xUnit, STAF, FitNesse, NTAF, Selenium, watir — 인터페이스 동작을 자동 검증.

### 인터페이스 보안 (참고)
- 전송 구간 암호화: **IPSec**(IP 계층), **SSL/TLS**(전송 계층, HTTPS), **S-HTTP**(응용 계층).

---

## 부록. 암기 키워드 총정리

| 키워드 | 내용 |
|---|---|
| 폭프나반 | 생명주기 모델: 폭포수/프로토타이핑/나선형/반복적 |
| 계위개고 | 나선형 절차: 계획·정의→위험분석→개발→고객평가 |
| 클객 메 메인속 | 객체지향 구성요소: 클래스/객체/메서드/메시지/인스턴스/속성 |
| 캡상다추정관 | 객체지향 기법: 캡슐화/상속/다형성/추상화/정보은닉/관계성 |
| SOLID | 설계원칙: SRP/OCP/LSP/ISP/DIP |
| 객동기 | 럼바우: 객체→동적→기능 |
| 회전완수 | 위험 대응: 회피/전가/완화/수용 |
| 유논프구배 | 4+1뷰: 유스케이스/논리/프로세스/구현/배포 |
| SACAA(사카린) | 아키텍처 평가: SAAM/ATAM/CBAM/ADR/ARID |
| 패문솔 사결샘 | 디자인패턴 구성: 패턴이름/문제/솔루션/사례/결과/샘플코드 |
| 생구행 | 패턴 유형: 생성/구조/행위 |
| 생빌 프로 팩앱싱 | 생성패턴: 빌더/프로토타입/팩토리메서드/앱스트랙팩토리/싱글톤 |
| 구 브데 퍼플 프록 컴 어 | 구조패턴: 브리지/데코레이터/퍼사드/플라이웨이트/프록시/컴포지트/어댑터 |
| 행 미인이 템옵 스테 비커 스트 메체 | 행위패턴: 미디에이터/인터프리터/이터레이터/템플릿메서드/옵저버/스테이트/비지터/커맨드/스트레티지/메멘토/체인오브리스판서빌리티 |
| 도분명확 | 요구공학: 도출/분석/명세/확인·검증 |
| CG NO | UI 유형: CLI/GUI/NUI/OUI |
| 직유 학유 | UI 설계원칙: 직관성/유효성/학습성/유연성 |
| 기신사효유이 | UI 품질: 기능성/신뢰성/사용성/효율성/유지보수성/이식성 |
| 와스프목 | 화면설계 도구: 와이어프레임/스토리보드/프로토타입/목업 |
| 가구명문 | UML 특징: 가시화/구축/명세화/문서화 |
| 사관다 | UML 구성: 사물/관계/다이어그램 |
| 클객 컴배 복패 | 정적 다이어그램: 클래스/객체/컴포넌트/배치/복합체구조/패키지 |
| 유시커 상활타 | 동적 다이어그램: 유스케이스/시퀀스/커뮤니케이션/상태/활동/타이밍 |
| 구연제 | 데이터모델 요소: 구조/연산/제약조건 |
| 요개논물 | DB 설계: 요구분석/개념적/논리적/물리적 |
| 합교차카 | 일반집합: 합/교/차/카티션프로덕트 |
| 셀프조디 | 순수관계: 셀렉트/프로젝트/조인/디비전 |
| 대절해비 | 관계대수=절차적 / 관계해석=비절차적 |
| 삽삭갱 | 이상현상: 삽입/삭제/갱신 |
| 원부이 결다조 | 정규화: 1NF원자화/2NF부분제거/3NF이행제거/BCNF결정자/4NF다치/5NF조인 |
| 개참속사키 | 무결성: 개체/참조/속성/사용자/키 |
| 레해리컴라 | 파티셔닝: Range/Hash/List/Composite/Round-Robin |
| 키컬도그(Key Color Dog) | NoSQL: Key-Value/Column/Document/Graph |
| 분연 연데 | 데이터마이닝: 분류/연관/연속/데이터군집화 |
| 포허 메하 | EAI: 포인트투포인트/허브앤스포크/메시지버스/하이브리드 |
`,ie=`# 정보처리기사 실기 주관식 200제

> 출처: 정보처리기사_실기_개념요약본 (1~5과목)
> 유형: 단답형·빈칸 채우기 / 정답은 각 문항 아래 "정답:"으로 분리 표기

---

# 1과목. 요구사항 확인 (1~72번)

**1.** 소프트웨어 개발부터 폐기까지 전 과정을 단계별로 나눈 프로세스 모델을 ( )(이)라 한다.

정답: 소프트웨어 생명주기(SDLC) 모델

**2.** 단계를 순차적으로 진행하며 이전 단계로 되돌아갈 수 없고, 요구사항이 명확할 때 적합한 산출물(문서) 중심의 고전적 생명주기 모델은?

정답: 폭포수 모델(Waterfall)

**3.** 시제품을 빠르게 만들어 고객 피드백을 받아 요구사항을 구체화하는, 요구사항이 불명확할 때 유리한 생명주기 모델은?

정답: 프로토타이핑 모델(Prototyping)

**4.** 폭포수 모델과 프로토타이핑 모델에 ( )을(를) 결합하여 반복을 돌며 점진적으로 완성하는 모델이 나선형 모델이다.

정답: 위험 분석

**5.** 나선형 모델의 절차를 순서대로 쓰시오. (계위개고)

정답: 계획 및 정의 → 위험 분석 → 개발 → 고객 평가

**6.** 시스템을 여러 번 나누어(증분/진화) 릴리즈하며 병렬 개발이 가능한 생명주기 모델은?

정답: 반복적 모델(Iteration)

**7.** 나선형 모델이 대규모·고위험 프로젝트에 적합한 이유이자 핵심 목표는 ( )이다.

정답: 위험 감소

**8.** [폭프나반]에 해당하는 소프트웨어 생명주기 모델 4가지를 모두 쓰시오.

정답: 폭포수 모델, 프로토타이핑 모델, 나선형 모델, 반복적 모델

**9.** 애자일 선언문은 절차와 문서보다 ( ① )과 동작하는 소프트웨어를, 계약과 계획보다 ( ② )과 변화 대응을 중시한다.

정답: ① 소통 ② 고객 협업

**10.** 1~3주의 짧은 릴리즈 주기를 가지며 용기·단순성·의사소통·피드백·존중의 5가지 가치를 갖는 애자일 방법론은?

정답: XP(eXtreme Programming)

**11.** XP의 실천법 중 두 명의 개발자가 함께 하나의 코드를 작성하는 기법은?

정답: 짝 프로그래밍(Pair Programming)

**12.** XP의 실천법 중 테스트 케이스를 먼저 작성한 후 코드를 구현하는 기법은?

정답: 테스트 주도 개발(TDD)

**13.** 스크럼에서 2~4주 단위로 반복되는 개발 주기를 ( )(이)라 한다.

정답: 스프린트(Sprint)

**14.** 스크럼에서 제품에 필요한 요구사항을 우선순위에 따라 정리한 목록을 ( )(이)라 한다.

정답: 백로그(Backlog)

**15.** 스크럼에서 남은 작업량을 시각화하여 진척을 관리하는 차트는?

정답: 번다운 차트(Burn-down Chart)

**16.** 도요타 생산방식에 기반하여 낭비 제거 등 7가지 원칙을 따르는 애자일 방법론은?

정답: 린(Lean)

**17.** 작업 흐름을 보드로 시각화하고 WIP(진행 중 작업)를 제한하는 애자일 방법론은?

정답: 칸반(Kanban)

**18.** XP의 5가지 가치를 모두 쓰시오.

정답: 용기, 단순성, 의사소통, 피드백, 존중

**19.** 객체 지향 구성요소 중 유사한 객체들을 묶은 공통 특성(속성+메서드)의 틀·설계도를 ( )(이)라 한다.

정답: 클래스(Class)

**20.** 객체 지향 구성요소 중 데이터(속성)와 이를 처리하는 함수(메서드)를 묶은 소프트웨어 모듈은?

정답: 객체(Object)

**21.** 객체 간 상호작용을 위한 수단으로, 메서드 호출을 요청하는 것을 ( )(이)라 한다.

정답: 메시지(Message)

**22.** 클래스로부터 실제로 생성된 객체를 ( )(이)라 한다.

정답: 인스턴스(Instance)

**23.** 속성과 메서드를 하나로 묶어 외부 접근을 제한하며, 결합도를 낮추고 응집도를 높이는 객체 지향 기법은?

정답: 캡슐화(Encapsulation)

**24.** 상위 클래스의 속성과 메서드를 하위 클래스가 물려받아 재사용하는 객체 지향 기법은?

정답: 상속성(Inheritance)

**25.** 하나의 메시지에 대해 객체마다 다르게 동작하는 객체 지향 기법은?

정답: 다형성(Polymorphism)

**26.** 다형성 중 같은 이름에 다른 매개변수를 사용하는 것은 ( ① ), 상위 클래스의 메서드를 재정의하는 것은 ( ② )이다.

정답: ① 오버로딩 ② 오버라이딩

**27.** 공통 성질을 추출해 불필요한 세부를 제거하고 핵심만 모델링하는 객체 지향 기법은?

정답: 추상화(Abstraction)

**28.** 내부 구현을 숨기고 인터페이스만 공개하여 사이드 이펙트를 최소화하는 객체 지향 기법은?

정답: 정보은닉(Information Hiding)

**29.** SOLID 원칙 중 "하나의 클래스는 하나의 책임만 가진다"는 원칙은?

정답: SRP(단일 책임 원칙)

**30.** SOLID 원칙 중 "확장에는 열려 있고, 변경에는 닫혀 있어야 한다"는 원칙은?

정답: OCP(개방 폐쇄 원칙)

**31.** SOLID 원칙 중 "하위 클래스는 상위 클래스를 대체할 수 있어야 한다"는 원칙은?

정답: LSP(리스코프 치환 원칙)

**32.** SOLID 원칙 중 "클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 한다"는 원칙은?

정답: ISP(인터페이스 분리 원칙)

**33.** SOLID 원칙 중 "구체 클래스가 아닌 추상(인터페이스)에 의존해야 한다"는 원칙은?

정답: DIP(의존성 역전 원칙)

**34.** 객체 지향 분석 방법론 중 유스케이스를 중심으로 하는 방법론은?

정답: 야콥슨(Jacobson) OOSE

**35.** 럼바우의 객체지향 분석 절차를 순서대로 쓰시오. (객동기)

정답: 객체 모델링 → 동적 모델링 → 기능 모델링

**36.** 럼바우 분석에서 동적 모델링에 사용하는 다이어그램은 ( ① ), 기능 모델링에 사용하는 것은 ( ② )이다.

정답: ① 상태 다이어그램 ② 자료 흐름도(DFD)

**37.** 객체 지향 분석 방법론 중 E-R 다이어그램을 사용하여 객체 식별·구조 식별·주제 정의를 수행하는 방법론은?

정답: 코드-요돈(Coad-Yourdon)

**38.** 객체 지향 분석 방법론 중 분석과 설계의 구분 없이 연속적으로 수행하는 책임 주도 설계 방법론은?

정답: 워프스-브록(Wirfs-Brock)

**39.** 비용산정 모형은 전문가 판단·델파이 기법 등의 ( ① )과 LOC·COCOMO 등의 ( ② )으로 나뉜다.

정답: ① 하향식 ② 상향식

**40.** LOC 기법에서 예측치를 구하는 공식을 쓰시오.

정답: (낙관치 + 4×기대치 + 비관치) ÷ 6

**41.** 한 사람이 1개월 동안 할 수 있는 일의 양을 기준으로 산정하는 비용산정 기법은?

정답: Man Month

**42.** LOC 기반으로 보헴(Boehm)이 제안한 비용산정 모형은?

정답: COCOMO

**43.** COCOMO의 3가지 유형을 규모 순으로 쓰시오.

정답: 조직형(Organic, 5만 라인 이하) → 반분리형(Semi-detached, 30만 라인 이하) → 임베디드형(Embedded, 30만 라인 이상)

**44.** COCOMO에서 5만 라인 이하의 소규모 프로젝트에 해당하는 유형은?

정답: 조직형(Organic)

**45.** 생명주기 전 과정에 노력 분포를 가정하며 Rayleigh-Norden 곡선에 기반한 비용산정 모형은?

정답: Putnam(푸트남) 모형

**46.** Putnam 모형의 자동화 도구는 ( ① ), FP(기능 점수)의 자동화 도구는 ( ② )이다.

정답: ① SLIM ② ESTIMACS

**47.** 기능(입력·출력·질의·파일·인터페이스)별 가중치를 부여해 비용을 산정하는 기법은?

정답: FP(기능 점수, Function Point)

**48.** 임계 경로(최장 경로)를 이용해 프로젝트 최소 소요 기간을 산정하는 일정관리 모델은?

정답: CPM(주 공정법)

**49.** 낙관치·기대치·비관치의 3점 추정으로 일정을 확률적으로 산정하며, 경험 없는 신규 프로젝트에 적합한 기법은?

정답: PERT

**50.** 작업 일정을 막대(bar) 형태로 시각화한 시간선(Time-line) 차트는?

정답: 간트 차트(Gantt Chart)

**51.** 위험 대응 전략 4가지를 모두 쓰시오. (회전완수)

정답: 회피, 전가, 완화, 수용

**52.** 위험 대응 전략 중 보험이나 하도급 계약처럼 위험을 제3자에게 이전하는 전략은?

정답: 전가(Transference)

**53.** 위험 대응 전략 중 위험의 발생 확률과 영향도를 낮추는 전략은?

정답: 완화(Mitigation)

**54.** 위험 대응 전략 중 위험이 발생하지 않도록 계획 자체를 변경하는 전략은?

정답: 회피(Avoidance)

**55.** 시스템의 구조·구성요소와 그들 간의 관계, 설계·발전 원칙을 정의한 청사진이자 이해관계자 간 의사소통 도구는?

정답: 소프트웨어 아키텍처

**56.** 소프트웨어 아키텍처 4+1 뷰에서 다른 4개 뷰를 검증하는 중심 뷰(+1)는?

정답: 유스케이스 뷰

**57.** 4+1 뷰 중 개발자 관점에서 동시성·성능·스레드를 다루는 뷰는 ( ① ), 시스템 엔지니어 관점에서 HW에 SW를 배치하는 뷰는 ( ② )이다.

정답: ① 프로세스 뷰 ② 배포 뷰(물리 뷰)

**58.** 아키텍처 패턴 중 데이터 스트림을 필터로 처리해 파이프로 전달하는 패턴으로, UNIX 쉘이 대표적인 것은?

정답: 파이프-필터 패턴

**59.** 아키텍처 패턴 중 Model-View-Controller로 데이터·화면·제어를 분리하는 패턴은?

정답: MVC 패턴

**60.** 아키텍처 패턴 중 분산 시스템에서 컴포넌트 간 통신을 중재자가 담당하는 패턴은?

정답: 브로커 패턴

**61.** 아키텍처 비용 평가 모델 중 변경 용이성·기능성 중심의 최초 평가 모델은?

정답: SAAM

**62.** 아키텍처 비용 평가 모델 중 가용성·보안성 등 품질 속성 간 트레이드오프를 평가하는 모델은?

정답: ATAM

**63.** 아키텍처 비용 평가 모델 중 ATAM 기반으로 경제적(비용-효익) 의사결정을 평가하는 모델은?

정답: CBAM

**64.** 소프트웨어 설계에서 자주 발생하는 문제에 대한 재사용 가능한 해결책을 GoF가 ( )개 패턴으로 정리했다.

정답: 23

**65.** 목적에 따른 디자인 패턴의 3가지 유형을 쓰시오. (생구행)

정답: 생성(Creational), 구조(Structural), 행위(Behavioral)

**66.** 생성 패턴 중 인스턴스를 오직 하나만 생성하고 전역 접근점을 제공하는 패턴은?

정답: 싱글톤(Singleton)

**67.** 생성 패턴 중 원본 객체를 복제(clone)하여 생성하며, 생성 비용이 클 때 유용한 패턴은?

정답: 프로토타입(Prototype)

**68.** 구조 패턴 중 복잡한 서브시스템에 대한 단순한 통합 인터페이스(오퍼레이션 창구)를 제공하는 패턴은?

정답: 퍼사드(Facade)

**69.** 행위 패턴 중 한 객체의 상태 변화를 의존 객체들에게 자동 통보(1:N)하는 패턴은?

정답: 옵저버(Observer)

**70.** 품질·제약 조건(성능, 보안, 신뢰성 등)에 대한 요구사항을 ( ) 요구사항이라 한다.

정답: 비기능적(Non-Functional) 요구사항

**71.** 요구사항 개발 프로세스(요구공학)의 4단계를 순서대로 쓰시오. (도분명확)

정답: 도출(Elicitation) → 분석(Analysis) → 명세(Specification) → 확인 및 검증(Validation & Verification)

**72.** 요구사항 검토 기법 중 작성자 외 전문가가 공식적으로 결함을 검출하는 기법은?

정답: 인스펙션(Inspection)

---

# 2과목. 화면 설계 (73~106번)

**73.** 사용자와 시스템 간 상호작용 접점(화면·조작 방식)을 ( ① ), 제품·서비스를 사용하며 느끼는 총체적 경험을 ( ② )(이)라 한다.

정답: ① UI(User Interface) ② UX(User Experience)

**74.** UI 유형 중 텍스트 명령어 기반의 인터페이스는?

정답: CLI(Command Line Interface)

**75.** UI 유형 중 음성·터치·제스처 등 신체 기반의 자연스러운 상호작용 인터페이스는?

정답: NUI(Natural UI)

**76.** UI 유형 중 현실 사물 자체가 입출력 장치가 되는 유기적 인터페이스는?

정답: OUI(Organic UI)

**77.** UI 설계 원칙 4가지를 모두 쓰시오. (직유 학유)

정답: 직관성, 유효성, 학습성, 유연성

**78.** UI 설계 원칙 중 "누구나 쉽게 이해하고 사용할 수 있어야 한다"는 원칙은?

정답: 직관성

**79.** UI 설계 원칙 중 "사용자의 목적을 정확하게 달성해야 한다"는 원칙은?

정답: 유효성

**80.** UI 설계 원칙 중 "사용자 요구를 수용하고 오류를 최소화해야 한다"는 원칙은?

정답: 유연성

**81.** ISO/IEC 9126 UI 품질 요구사항 6가지를 모두 쓰시오. (기신사효유이)

정답: 기능성, 신뢰성, 사용성, 효율성, 유지보수성, 이식성

**82.** ISO/IEC 9126 품질 특성 중 성숙성·고장 허용성·회복성을 하위 특성으로 갖는 것은?

정답: 신뢰성(Reliability)

**83.** ISO/IEC 9126 품질 특성 중 다른 환경으로 쉽게 이전할 수 있는 능력(적응성·설치성·대체성)은?

정답: 이식성(Portability)

**84.** ISO/IEC 9126 품질 특성 중 쉽게 이해·학습·사용할 수 있는 능력(이해성·학습성·운용성)은?

정답: 사용성(Usability)

**85.** UI 화면 설계 도구 4가지를 모두 쓰시오. (와스프목)

정답: 와이어프레임, 스토리보드, 프로토타입, 목업

**86.** 화면의 레이아웃과 뼈대를 개략적으로 표현한 설계 초안은?

정답: 와이어프레임(Wireframe)

**87.** 와이어프레임에 콘텐츠 설명·이동 흐름 등 상세 정보를 담은 디자이너·개발자의 최종 산출물 문서는?

정답: 스토리보드(Storyboard)

**88.** 인터랙션(동적 효과)을 적용한 동작 가능한 시제품은 ( ① ), 실제 화면과 유사하지만 기능 구현이 없는 정적 모형은 ( ② )이다.

정답: ① 프로토타입(Prototype) ② 목업(Mockup)

**89.** UI 프로토타입의 장점 2가지를 쓰시오.

정답: 사전 오류 발견, 소통 촉진

**90.** 객체 지향 개발 과정의 산출물을 명세화·시각화·문서화하기 위한 OMG 표준 모델링 언어는?

정답: UML

**91.** UML은 ( ① ), ( ② ), ( ③ ) 세 방법론을 통합하여 만들어졌다.

정답: 부치(Booch), 럼바우(Rumbaugh), 야콥슨(Jacobson)

**92.** UML의 특징 4가지를 쓰시오. (가구명문)

정답: 가시화, 구축, 명세화, 문서화 (언어)

**93.** UML의 구성요소 3가지를 쓰시오. (사관다)

정답: 사물(Things), 관계(Relationships), 다이어그램(Diagrams)

**94.** UML 관계 중 전체-부분 관계이면서 부분이 독립적으로 존재할 수 있고 빈 마름모로 표기하는 관계는?

정답: 집합/집약(Aggregation)

**95.** UML 관계 중 전체-부분이 생명주기를 공유하며 채운 마름모로 표기하는 관계는?

정답: 합성/복합(Composition)

**96.** UML 관계 중 상속(is-a) 관계로 빈 삼각형 화살표로 표기하는 관계는?

정답: 일반화(Generalization)

**97.** UML 관계 중 짧은 시간 동안만 참조하며 점선 화살표로 표기하는 관계는?

정답: 의존(Dependency)

**98.** UML 관계 중 인터페이스와 구현의 관계로 점선+빈 삼각형으로 표기하는 관계는?

정답: 실체화(Realization)

**99.** 구조적(정적) 다이어그램 6가지를 모두 쓰시오. (클객 컴배 복패)

정답: 클래스, 객체, 컴포넌트, 배치, 복합체 구조, 패키지 다이어그램

**100.** 행위적(동적) 다이어그램 6가지를 모두 쓰시오. (유시커 상활타)

정답: 유스케이스, 시퀀스, 커뮤니케이션, 상태, 활동, 타이밍 다이어그램

**101.** 클래스의 속성·연산과 클래스 간 관계를 표현하는 정적 구조의 핵심 다이어그램은?

정답: 클래스 다이어그램

**102.** 물리적 노드에 컴포넌트·아티팩트의 배치를 표현하며 구현 단계에서 사용하는 다이어그램은?

정답: 배치 다이어그램

**103.** 유스케이스 다이어그램에서 사용하는 관계 3가지를 쓰시오.

정답: 포함(include), 확장(extend), 일반화

**104.** 객체 간 메시지를 시간 순서로 표현하며 액터·객체·생명선·실행 박스·메시지로 구성되는 다이어그램은?

정답: 시퀀스 다이어그램

**105.** 메시지뿐 아니라 객체 간 연관 관계까지 표현하는 동적 다이어그램은?

정답: 커뮤니케이션 다이어그램

**106.** 이벤트에 따른 한 객체의 상태 변화를 표현하는 다이어그램은?

정답: 상태 다이어그램

---

# 3과목. 데이터 입출력 구현 (107~154번)

**107.** 데이터 모델에 표시해야 할 3요소를 쓰시오. (구연제)

정답: 구조, 연산, 제약조건

**108.** 데이터베이스 설계 4단계를 순서대로 쓰시오. (요개논물)

정답: 요구조건 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계

**109.** DB 설계 단계 중 DBMS에 독립적으로 E-R 다이어그램을 작성하는 단계는?

정답: 개념적 설계

**110.** DB 설계 단계 중 특정 DBMS의 테이블(논리 스키마)을 설계하고 정규화를 수행하는 단계는?

정답: 논리적 설계

**111.** DB 설계 단계 중 저장 구조·접근 경로를 설계하며 인덱스·파티션·반정규화 등 성능을 고려하는 단계는?

정답: 물리적 설계

**112.** 논리 데이터 모델 중 2차원 테이블(릴레이션) 형태의 대표적 모델은?

정답: 관계 데이터 모델

**113.** 관계 데이터 모델에서 행을 ( ① ), 열을 ( ② )(이)라 한다.

정답: ① 튜플 ② 속성(Attribute)

**114.** 릴레이션에서 튜플의 수를 ( ① ), 속성의 수를 ( ② )(이)라 한다.

정답: ① 카디널리티 ② 차수(Degree)

**115.** 속성이 가질 수 있는 값의 범위를 ( )(이)라 한다.

정답: 도메인(Domain)

**116.** 관계 대수는 원하는 결과를 얻기 위한 절차를 명시하는 ( ① ) 언어이고, 관계 해석은 원하는 결과만 명시하는 ( ② ) 언어이다.

정답: ① 절차적 ② 비절차적

**117.** 관계 해석은 수학의 ( )에 기반하며 튜플 관계 해석과 도메인 관계 해석으로 나뉜다.

정답: 술어 해석(Predicate Calculus)

**118.** 일반 집합 연산자 4가지를 기호와 함께 쓰시오. (합교차카)

정답: 합집합(∪), 교집합(∩), 차집합(−), 카티션 프로덕트(×)

**119.** 순수 관계 연산자 중 조건을 만족하는 튜플(행)을 추출하는 연산자와 그 기호는?

정답: Select, σ

**120.** 순수 관계 연산자 중 지정한 속성(열)을 추출하는 연산자와 그 기호는?

정답: Project, π

**121.** 순수 관계 연산자 중 두 릴레이션의 공통 속성으로 결합하는 연산자와 그 기호는?

정답: Join, ⋈

**122.** 순수 관계 연산자 중 R÷S에서 S의 모든 값을 가진 R의 튜플을 추출하는 연산자는?

정답: Division(÷)

**123.** 개체·속성·관계로 현실 세계를 개념적으로 표현하는 E-R 모델을 제안한 사람은?

정답: 피터 첸(Peter Chen)

**124.** E-R 다이어그램에서 사각형은 ( ① ), 마름모는 ( ② ), 타원은 ( ③ )을 의미한다.

정답: ① 개체(Entity) ② 관계(Relationship) ③ 속성(Attribute)

**125.** E-R 다이어그램에서 이중 타원은 ( ① ), 밑줄 타원은 ( ② )을 의미한다.

정답: ① 다중값 속성 ② 기본키 속성

**126.** 이상 현상(Anomaly)의 3가지 종류를 쓰시오. (삽삭갱)

정답: 삽입 이상, 삭제 이상, 갱신 이상

**127.** 튜플 삭제 시 필요한 데이터까지 연쇄 삭제되는 이상 현상은?

정답: 삭제 이상

**128.** 중복 튜플 중 일부만 갱신되어 불일치가 발생하는 이상 현상은?

정답: 갱신 이상

**129.** 함수 종속 X → Y에서 X를 ( ① ), Y를 ( ② )(이)라 한다.

정답: ① 결정자 ② 종속자

**130.** 복합키의 일부에만 종속되는 것을 ( ① ) 함수 종속, X→Y·Y→Z일 때 X→Z가 성립하는 것을 ( ② ) 함수 종속이라 한다.

정답: ① 부분 ② 이행

**131.** 이상 현상을 제거하기 위해 릴레이션을 무손실 분해하여 중복을 최소화하고 종속성을 제거하는 과정은?

정답: 정규화(Normalization)

**132.** 정규화 단계를 1NF부터 5NF까지 순서대로 쓰시오. (원부이 결다조)

정답: 원자화(1NF) → 부분함수종속 제거(2NF) → 이행함수종속 제거(3NF) → 결정자함수종속 제거(BCNF) → 다치종속 제거(4NF) → 조인종속 제거(5NF)

**133.** 모든 속성이 원자값만 갖도록 하는 정규형은?

정답: 제1정규형(1NF)

**134.** 부분 함수 종속을 제거하여 완전 함수 종속만 남기는 정규형은?

정답: 제2정규형(2NF)

**135.** 이행 함수 종속을 제거하는 정규형은?

정답: 제3정규형(3NF)

**136.** 모든 결정자가 후보키가 되도록 하는 정규형은?

정답: BCNF

**137.** 정규화된 모델을 성능 향상·운영 단순화를 위해 의도적으로 중복·통합·분리하는 기법은?

정답: 반정규화(De-Normalization)

**138.** 데이터 무결성 중 "기본키는 NULL과 중복이 불가하다"는 무결성은?

정답: 개체 무결성

**139.** 데이터 무결성 중 "외래키는 NULL이거나 참조 릴레이션의 기본키 값이어야 한다"는 무결성은?

정답: 참조 무결성

**140.** 사용자가 정의한 비즈니스 규칙을 준수해야 한다는 무결성은?

정답: 사용자 무결성

**141.** 키의 2가지 특성으로, 하나의 키로 튜플을 유일하게 식별하는 것과 꼭 필요한 최소한의 속성으로만 구성하는 것을 각각 쓰시오.

정답: 유일성, 최소성

**142.** 유일성은 만족하지만 최소성은 만족하지 않는 키는?

정답: 슈퍼키

**143.** 유일성과 최소성을 모두 만족하는 키는 ( ① )이고, 그중 선정된 키가 ( ② ), 나머지가 ( ③ )이다.

정답: ① 후보키 ② 기본키(PK) ③ 대체키

**144.** 다른 릴레이션의 기본키를 참조하는 키는?

정답: 외래키(FK)

**145.** 파티셔닝 유형 중 날짜·숫자 구간 등 값의 범위를 기준으로 분할하는 방식은?

정답: Range 파티셔닝

**146.** 파티셔닝 유형 중 해시 함수 값을 기준으로 균등 분할하는 방식과, 순차적으로 균등 분배하는 방식을 각각 쓰시오.

정답: Hash 파티셔닝, Round-Robin 파티셔닝

**147.** DBMS의 필수 기능 3가지를 쓰시오.

정답: 정의(Definition), 조작(Manipulation), 제어(Control)

**148.** 빅데이터의 3V를 모두 쓰시오.

정답: Volume(규모), Velocity(속도), Variety(다양성)

**149.** 하둡(Hadoop)은 분산 파일 시스템인 ( ① )과 분산 처리 프레임워크인 ( ② )(으)로 구성된다.

정답: ① HDFS ② MapReduce

**150.** NoSQL의 4가지 유형을 쓰시오. (키컬도그)

정답: Key-Value Store, Column Family Data Store, Document Store, Graph Store

**151.** NoSQL 유형 중 JSON/XML 문서 단위로 저장하는 유형과 대표 제품 하나를 쓰시오.

정답: Document Store, MongoDB(또는 CouchDB)

**152.** NoSQL의 특징인 BASE의 의미를 쓰시오.

정답: Basically Available, Soft state, Eventually consistent

**153.** 데이터 마이닝 기법 중 항목 간 동시 발생 규칙을 발견하는 기법(장바구니 분석)은?

정답: 연관(Association) 규칙

**154.** 데이터 마이닝 기법 중 유사한 데이터끼리 그룹화하는 비지도 학습 기법은?

정답: 군집화(Clustering)

---

# 4과목. 통합 구현 (155~174번)

**155.** 연계 시스템은 ( ① ) 시스템 → ( ② ) 시스템 → ( ③ ) 시스템으로 구성된다.

정답: ① 송신 ② 중계 ③ 수신

**156.** 연계 시스템 중 내외부 구간을 연계하며 모니터링·보안을 강화하는 시스템은?

정답: 중계 시스템

**157.** DB Link, API, JDBC 등 속도가 빠르지만 결합도가 높은 연계 방식을 ( ① ), EAI·ESB·웹 서비스 등 유연하고 표준적인 방식을 ( ② )(이)라 한다.

정답: ① 직접 연계 ② 간접 연계

**158.** DB 연결(Connection)을 미리 생성해 풀에 두고 재사용하여 연결 생성 비용을 절감하는 기법은?

정답: 커넥션 풀(Connection Pool)

**159.** Java에서 DB에 접속하고 SQL을 실행하는 표준 API는?

정답: JDBC

**160.** 네트워크 통신의 끝점(endpoint)으로, 포트를 할당해 클라이언트 요청을 연결로 처리하는 저수준 통신 기술은?

정답: 소켓(Socket)

**161.** 응용 프로그램이 기능·데이터에 접근할 수 있게 제공하는 인터페이스는?

정답: API

**162.** 기업 내 서로 다른 애플리케이션·플랫폼 간 정보 전달·연계·통합을 가능하게 하는 솔루션은?

정답: EAI(Enterprise Application Integration)

**163.** EAI 구축 유형 4가지를 모두 쓰시오. (포허 메하)

정답: 포인트 투 포인트, 허브 앤 스포크, 메시지 버스, 하이브리드

**164.** EAI 구축 유형 중 1:1 직접 연결로 가장 단순·저렴하지만 시스템 증가 시 연결이 폭증하는 유형은?

정답: 포인트 투 포인트(Point-to-Point)

**165.** EAI 구축 유형 중 중앙 허브를 통해 연결하여 확장·유지보수가 용이하지만 허브 장애 시 전체에 영향을 주는 유형은?

정답: 허브 앤 스포크(Hub & Spoke)

**166.** EAI 구축 유형 중 애플리케이션 사이에 미들웨어(버스)를 두어 뛰어난 확장성과 대용량 처리가 가능한 유형은?

정답: 메시지 버스(Message Bus)

**167.** EAI 구축 유형 중 그룹 내에는 허브 앤 스포크, 그룹 간에는 메시지 버스를 조합하는 유형은?

정답: 하이브리드(Hybrid)

**168.** 서비스 중심(버스 기반)으로 애플리케이션을 느슨한 결합 방식으로 통합하는 미들웨어 플랫폼은?

정답: ESB(Enterprise Service Bus)

**169.** HTTP 등으로 XML 기반 메시지를 교환하는 통신 프로토콜로, 봉투(Envelope)-헤더-바디 구조를 갖는 것은?

정답: SOAP

**170.** 웹 서비스의 명세(기능·위치·호출 방법)를 기술한 XML 문서는?

정답: WSDL

**171.** 웹 서비스를 등록·검색하는 저장소(레지스트리)는?

정답: UDDI

**172.** 웹 서비스 동작 순서의 빈칸을 채우시오: 제공자가 WSDL을 ( ① )에 등록 → 사용자가 검색 → ( ② )(으)로 호출.

정답: ① UDDI ② SOAP

**173.** IPC(프로세스 간 통신) 기법 5가지를 쓰시오.

정답: 공유 메모리, 소켓, 세마포어, 파이프(익명/명명), 메시지 큐

**174.** 웹에서 누구나 사용할 수 있게 URI로 식별·공개·연결한 개방 데이터는?

정답: LOD(Linked Open Data)

---

# 5과목. 인터페이스 구현 (175~200번)

**175.** 속성-값(Key-Value) 쌍으로 데이터를 표현하는 경량 데이터 교환 포맷으로 AJAX·REST에서 널리 사용되는 것은?

정답: JSON

**176.** HTML의 고정 태그 한계를 극복하고 SGML의 복잡성을 해결한, 사용자가 태그를 정의할 수 있는 확장 가능한 마크업 언어는?

정답: XML

**177.** 태그로 문서·데이터 구조를 표기하는 언어를 통칭하여 ( ) 언어라 하며 HTML·XML·SGML이 해당한다.

정답: 마크업(Markup)

**178.** XML/HTML 문서를 트리 구조 객체로 표현해 접근·조작하는 표준 인터페이스로, 문서 전체를 메모리에 로딩하는 방식은?

정답: DOM(Document Object Model)

**179.** 이벤트 기반으로 XML을 순차 파싱하여 대용량 문서에 유리한 방식은?

정답: SAX

**180.** XML 문서를 다른 XML/HTML 등으로 변환하는 언어는?

정답: XSLT

**181.** 자바스크립트로 서버와 비동기 통신하여 페이지 전체를 새로 고치지 않고 일부만 갱신하는 기술은?

정답: AJAX

**182.** AJAX에서 서버와의 비동기 통신에 사용하는 객체는?

정답: XMLHttpRequest

**183.** HTTP 프로토콜로 자원(URI)을 표현하고 HTTP 메서드로 자원을 처리(CRUD)하는 아키텍처 스타일은?

정답: REST

**184.** REST의 구성 3요소를 쓰시오.

정답: 자원(URI), 행위(HTTP Method), 표현(Representation)

**185.** REST에서 자원 처리에 사용하는 대표적인 HTTP 메서드 4가지를 쓰시오.

정답: GET, POST, PUT, DELETE

**186.** REST 원칙을 준수한 API를 ( )(이)라 한다.

정답: RESTful API

**187.** 웹 페이지의 구조를 표현하는 마크업 언어는 ( ① ), 그 표현(스타일)을 정의하는 언어는 ( ② )이다.

정답: ① HTML ② CSS

**188.** JSON에서 \`[]\`로 표현하는 배열은 ( ① ) 구조이고, \`{}\`로 표현하는 객체는 ( ② ) 집합이다.

정답: ① 선형(순서) ② 키-값

**189.** 인터페이스 구현 검증 도구를 3가지 이상 쓰시오.

정답: xUnit, STAF, FitNesse, NTAF, Selenium, watir 중 3가지

**190.** 전송 구간 암호화 기술 중 IP 계층에서 암호화하는 것은?

정답: IPSec

**191.** 전송 구간 암호화 기술 중 전송 계층에서 암호화하며 HTTPS에 사용되는 것은?

정답: SSL/TLS

**192.** 전송 구간 암호화 기술 중 응용 계층에서 암호화하는 것은?

정답: S-HTTP

**193.** 자원의 위치를 나타내는 것은 ( ① ), 자원의 식별자는 ( ② )이다.

정답: ① URL ② URI

**194.** 다음 데이터 표현 예시가 나타내는 포맷은? \`{"name": "홍길동", "age": 20}\`

정답: JSON

**195.** 럼바우 분석에서 특정 시점의 인스턴스와 관계를 표현하는 UML 다이어그램으로 객체 모델링에 사용되는 것은?

정답: 객체 다이어그램

**196.** 현행 시스템 분석에서 DBMS 분석 시 고려사항을 3가지 이상 쓰시오.

정답: 가용성, 성능, 상호 호환성, 기술 지원, 구축 비용 중 3가지

**197.** 요구사항 검토 기법 중 자료를 사전 배포한 후 짧은 검토 회의를 갖는 기법은?

정답: 워크스루(Walkthrough)

**198.** 디자인 패턴의 구성요소 6가지를 쓰시오. (패문솔 사결샘)

정답: 패턴 이름, 문제, 솔루션, 사례, 결과, 샘플 코드

**199.** 행위 패턴 중 요청을 객체로 캡슐화하여 실행 취소·큐 저장이 가능한 패턴은?

정답: 커맨드(Command)

**200.** 구조 패턴 중 호환되지 않는 인터페이스를 변환해 함께 동작하게 하는 패턴은?

정답: 어댑터(Adapter)

---

**끝. 총 200문항** — 오답 문항은 개념요약본의 해당 암기 키워드로 복습하세요.



`;function ae(e,t){if(e.folders.length>0)return e;let n={...e,folders:[se],files:ce};return t(n),n}var oe=Date.UTC(2026,6,7),se={id:`folder_doc`,name:`doc`,createdAt:oe},ce=[le(`doc_concept_summary`,`정보처리기사_실기_개념요약본.md`,re),le(`doc_written_200`,`정보처리기사_실기_주관식_200제.md`,ie)];function le(e,t,n){return{id:e,folderId:se.id,name:t,content:n,questions:g(n),importedAt:oe}}function E(e,t){let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}function D(e,t,n){let r=new Set(e);return t.find(e=>e.id===n)?.questions.forEach(e=>{r.delete(e.id)}),r}function ue(e,t,n){let r=new Set(e);return t.filter(e=>n.has(e.id)).flatMap(e=>e.questions).forEach(e=>{r.delete(e.id)}),r}function de(e,t){if(e===null)return null;let n=t.filter(t=>t.folderId===e.id);if(n.length===0)return null;let r=n.flatMap(t=>t.questions.map(n=>({...n,id:`${t.id}_${n.id}`,sourceFileName:t.name,sourceFolderName:e.name})));return{id:`folder_${e.id}`,folderId:e.id,name:e.name,content:n.map(e=>e.content).join(`

`),questions:r,importedAt:Math.max(...n.map(e=>e.importedAt))}}function fe(e,t,n,r=null){if(e===null)return null;let i=O(e,t,n,r);return{...e,questions:i.map((e,t)=>({...e,index:t+1}))}}function pe(e,t){return e.filter(e=>e.fileId===t).toSorted((e,t)=>t.finishedAt-e.finishedAt)[0]??null}function O(e,t,n,r){switch(t){case`sequential`:return e.questions;case`shuffle`:return k(e.questions,e.id,n);case`wrong-only`:return k(e.questions.filter(e=>r?.results[e.id]===!1),`${e.id}_wrong`,n)}}function k(e,t,n){if(e.length<2)return e;let r=n%(e.length-1)+1,i=e[r];if(i===void 0)return e;let a=e.filter((e,t)=>t!==r),o=me(`${t}_${n}`);for(let e=a.length-1;e>0;--e){o=he(o);let t=o%(e+1),n=a[e],r=a[t];n===void 0||r===void 0||(a[e]=r,a[t]=n)}return[i,...a]}function me(e){let t=0;for(let n of e)t=t*31+n.charCodeAt(0)>>>0;return t}function he(e){return e*1664525+1013904223>>>0}var ge={folders:[],files:[],attempts:[],answerOverrides:[],examDrafts:[]},_e=`STUDY_VIEWER_LIBRARY_V1`;function ve(e=window.localStorage){return{load:()=>ye(e),saveLibrary:t=>be(e,t),saveFolders:t=>be(e,{...ye(e),folders:t}),saveFiles:t=>be(e,{...ye(e),files:t}),saveAttempts:t=>be(e,{...ye(e),attempts:t}),saveAnswerOverrides:t=>be(e,{...ye(e),answerOverrides:t}),saveExamDrafts:t=>be(e,{...ye(e),examDrafts:t})}}function ye(e){let t=e.getItem(_e);if(t===null)return ge;let n=JSON.parse(t);return{folders:Array.isArray(n.folders)?n.folders:[],files:Array.isArray(n.files)?n.files:[],attempts:Array.isArray(n.attempts)?n.attempts:[],answerOverrides:Array.isArray(n.answerOverrides)?n.answerOverrides:[],examDrafts:Array.isArray(n.examDrafts)?n.examDrafts:[]}}function be(e,t){e.setItem(_e,JSON.stringify(t))}var xe=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=e(((e,t)=>{t.exports=xe()}))();function Se(e){let[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(!1),a=e.files.find(t=>t.id===e.selectedFileId)?.name??`파일을 선택하세요`;return(0,A.jsxs)(`aside`,{"aria-label":`Sidebar`,className:[`sidebar`,t?`collapsed`:``,r?`mobile-expanded`:``].filter(Boolean).join(` `),children:[(0,A.jsx)(`button`,{"aria-label":t?`사이드바 펼치기`:`사이드바 접기`,className:t?`sidebar-expand-toggle`:`sidebar-collapse-toggle`,type:`button`,onClick:()=>n(e=>!e),children:t?`>`:`<`}),(0,A.jsxs)(`button`,{"aria-expanded":r,"aria-label":r?`파일 메뉴 접기`:`파일 메뉴 펼치기`,className:`mobile-file-summary`,type:`button`,onClick:()=>i(e=>!e),children:[(0,A.jsx)(`span`,{"aria-hidden":`true`,children:a}),(0,A.jsx)(De,{})]}),(0,A.jsxs)(`div`,{className:`sidebar-content`,children:[(0,A.jsxs)(`div`,{className:`brand`,children:[(0,A.jsx)(`div`,{className:`brand-icon`,children:`SV`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h1`,{children:`STUDY_VIEWER`}),(0,A.jsx)(`p`,{children:`Local exam workspace`})]})]}),(0,A.jsx)(`nav`,{className:`tree`,"aria-label":`folder tree`,children:e.folders.map(t=>(0,A.jsxs)(`section`,{className:`folder-block`,children:[(0,A.jsxs)(`div`,{className:`tree-item`,children:[(0,A.jsxs)(`button`,{className:t.id===e.selectedFolderId?`tree-row active`:`tree-row`,type:`button`,onClick:()=>e.onSelectFolder(t.id),children:[(0,A.jsx)(Te,{}),(0,A.jsx)(`span`,{children:t.name})]}),e.isDeleteMode?(0,A.jsx)(Ce,{label:`${t.name} 폴더 삭제`,onClick:()=>e.onDeleteFolder(t.id)}):null]}),e.files.filter(e=>e.folderId===t.id).map(t=>(0,A.jsxs)(`div`,{className:`tree-item file-item`,children:[(0,A.jsxs)(`button`,{className:t.id===e.selectedFileId?`file-row active`:`file-row`,type:`button`,onClick:()=>e.onSelectFile(t.id),children:[(0,A.jsx)(`span`,{children:t.name}),(0,A.jsxs)(`small`,{children:[t.questions.length,`문제`]})]}),e.isDeleteMode?(0,A.jsx)(Ce,{label:`${t.name} 파일 삭제`,onClick:()=>e.onDeleteFile(t.id)}):null]},t.id))]},t.id))}),(0,A.jsxs)(`div`,{className:`sidebar-actions`,children:[(0,A.jsx)(`button`,{className:`primary`,type:`button`,onClick:e.onAddFolder,children:`Add Folder`}),(0,A.jsx)(`button`,{"aria-pressed":e.isDeleteMode,className:e.isDeleteMode?`danger active`:`danger`,type:`button`,onClick:e.onToggleDeleteMode,children:e.isDeleteMode?`Deleting...`:`Delete`}),(0,A.jsxs)(`label`,{className:`secondary`,children:[`Import File`,(0,A.jsx)(`input`,{"aria-label":`md/txt 불러오기`,accept:`.md,.txt,text/markdown,text/plain`,type:`file`,onChange:t=>{let n=t.currentTarget.files?.[0];n!==void 0&&e.onImportFile(n),t.currentTarget.value=``}})]})]}),(0,A.jsx)(`button`,{"aria-label":`모바일 낮/밤 전환`,"aria-pressed":e.theme===`resend`,className:`theme-toggle`,type:`button`,onClick:e.onToggleTheme,children:(0,A.jsx)(we,{})})]})]})}function Ce({label:e,onClick:t}){return(0,A.jsx)(`button`,{"aria-label":e,className:`delete-mark`,type:`button`,onClick:e=>{e.stopPropagation(),t()},children:`x`})}function we(){return(0,A.jsx)(`svg`,{"aria-hidden":`true`,fill:`none`,height:`18`,viewBox:`0 0 24 24`,width:`18`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8a8.7 8.7 0 1 0 11.6 11.6Z`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.8`})})}function Te(){return(0,A.jsx)(`svg`,{"aria-hidden":`true`,className:`folder-icon`,fill:`none`,height:`16`,viewBox:`0 0 24 24`,width:`16`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`M3.8 6.6c0-.9.7-1.6 1.6-1.6h4.2l2 2h7c.9 0 1.6.7 1.6 1.6v8.8c0 .9-.7 1.6-1.6 1.6H5.4c-.9 0-1.6-.7-1.6-1.6V6.6Z`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.8`})})}function Ee({mode:e,theme:t,onChangeMode:n,onToggleTheme:r}){let[i,a]=(0,l.useState)(!1);return(0,A.jsxs)(`header`,{className:`topbar`,children:[(0,A.jsxs)(`div`,{className:`topbar-title`,children:[(0,A.jsx)(`strong`,{children:`Workspace Reader`}),(0,A.jsx)(`button`,{"aria-label":`Resend night theme`,"aria-pressed":t===`resend`,className:`mobile-theme-toggle`,type:`button`,onClick:r,children:(0,A.jsx)(we,{})})]}),(0,A.jsxs)(`nav`,{children:[[{mode:`single`,label:`단건보기`},{mode:`all`,label:`모두보기`},{mode:`exam`,label:`시험보기`},{mode:`stats`,label:`통계`}].map(t=>(0,A.jsx)(`button`,{className:e===t.mode?`tab active`:`tab`,type:`button`,onClick:()=>n(t.mode),children:t.label},t.mode)),(0,A.jsx)(`button`,{"aria-expanded":i,"aria-label":`검색 열기`,className:`search-toggle`,type:`button`,onClick:()=>a(e=>!e),children:(0,A.jsx)(Oe,{})})]}),(0,A.jsx)(`input`,{"aria-label":`Search files`,className:i?`search-input open`:`search-input`,placeholder:`Search files...`})]})}function De(){return(0,A.jsx)(`svg`,{"aria-hidden":`true`,fill:`none`,height:`18`,viewBox:`0 0 24 24`,width:`18`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`m6 9 6 6 6-6`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.8`})})}function Oe(){return(0,A.jsx)(`svg`,{"aria-hidden":`true`,fill:`none`,height:`18`,viewBox:`0 0 24 24`,width:`18`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:`m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.8`})})}function ke(){return(0,A.jsxs)(`div`,{className:`empty`,children:[(0,A.jsx)(`h2`,{children:`파일을 불러오면 문제가 표시됩니다.`}),(0,A.jsx)(`p`,{children:`왼쪽 메뉴에서 md/txt 파일을 불러오세요.`})]})}function Ae({message:e}){return(0,A.jsx)(`div`,{className:e.length>0?`toast show`:`toast`,children:e})}function je(e,t){let n=new Map;for(let r of e)r.fileId===t&&n.set(r.questionId,r.answer);return n}function Me(e,t=new Map){return t.get(e.id)??e.answer}var Ne=/\(([^()]*)\)|（([^（）]*)）/gu,Pe=/[\s,，、→⇒]+|[-=]+>/gu;function Fe(e){return e.normalize(`NFC`).trim().replace(/^[\s.,;:!?。、，]+|[\s.,;:!?。、，]+$/gu,``).replace(/\s+/gu,` `).toLocaleLowerCase(`ko-KR`)}function Ie(e,t){if(t===null)return!1;let n=Le(e);return n.length>0&&Re(t).includes(n)}function Le(e){return Fe(e).replace(Pe,``)}function Re(e){return Ve([e,ze(e),...Be(e)])}function ze(e){return e.replace(Ne,` `).trim()}function Be(e){let t=[];for(let n of e.matchAll(Ne)){let e=(n[1]??n[2]??``).trim();e.length>0&&t.push(e)}return t}function Ve(e){let t=[],n=new Set;for(let r of e){let e=Le(r);e.length===0||n.has(e)||(n.add(e),t.push(e))}return t}function He(e,t,n=new Map){let r={},i=0,a=0;for(let o of e){let e=Me(o,n);if(e===null)continue;a+=1;let s=Ie(t[o.id]??``,e);r[o.id]=s,s&&(i+=1)}return{results:r,score:i,total:a}}function Ue(e){let t=e.index>=e.total-1;function n(t){if(!(e.disabled||t.nativeEvent.isComposing)){if(t.key===`Enter`&&!t.shiftKey){t.preventDefault(),t.stopPropagation(),e.onSave();return}if(t.key===`ArrowLeft`){t.preventDefault(),t.stopPropagation(),e.onPrev();return}t.key===`ArrowRight`&&(t.preventDefault(),t.stopPropagation(),e.onNext())}}return(0,A.jsxs)(`footer`,{className:`answer-footer`,children:[(0,A.jsxs)(`section`,{children:[(0,A.jsx)(`h3`,{children:`답안 작성 영역`}),(0,A.jsx)(`textarea`,{value:e.answer,onChange:t=>e.onAnswer(t.currentTarget.value),onKeyDown:n,placeholder:`답을 입력하세요`,disabled:e.disabled}),(0,A.jsx)(`div`,{className:`footer-buttons`,children:(0,A.jsx)(`button`,{className:`primary`,type:`button`,onClick:e.onSave,disabled:e.question===null||e.disabled,children:`저장`})})]}),(0,A.jsxs)(`nav`,{children:[(0,A.jsx)(`button`,{type:`button`,onClick:e.onPrev,children:`이전 문항`}),(0,A.jsxs)(`strong`,{children:[`QUESTION `,e.total===0?0:e.index+1,` / `,e.total]}),(0,A.jsx)(`button`,{type:`button`,onClick:t?e.onSubmit:e.onNext,children:t?`제출 완료`:`다음 문항`})]})]})}function We(e,t){return t?.includes("`")===!0&&f(t)===e?t:e}function Ge({text:e}){return(0,A.jsx)(`div`,{className:`question-prompt`,children:qe(e).map(e=>e.kind===`codeBlock`?(0,A.jsx)(`pre`,{className:`question-code-block`,"data-language":e.language,children:(0,A.jsx)(`code`,{children:Xe(e.value,e.id,e.language)})},e.id):(0,A.jsx)(`p`,{children:Ye(e.value,e.id)},e.id))})}function Ke({text:e}){return(0,A.jsx)(A.Fragment,{children:Ye(e,`inline`)})}function qe(e){let t=[],n=[],r=[],i=`plaintext`,a=!1;for(let o of e.split(`
`)){let e=Ze(o);if(e!==null){if(a){t.push({id:`code-${t.length}-${r.join(`
`).length}`,kind:`codeBlock`,language:i,value:r.join(`
`)}),r.length=0,i=`plaintext`,a=!1;continue}Je(t,n),i=e,a=!0;continue}if(a){r.push(o);continue}n.push(o)}return a&&t.push({id:`code-${t.length}-${r.join(`
`).length}`,kind:`codeBlock`,language:i,value:r.join(`
`)}),Je(t,n),t.length>0?t:[{id:`text-empty-${e.length}`,kind:`text`,value:e}]}function Je(e,t){if(t.length===0)return;let n=t.join(`
`).trim();t.length=0,n.length!==0&&e.push({id:`text-${e.length}-${n.length}`,kind:`text`,value:n})}function Ye(e,t){let n=[],r=e,i=0;for(;r.length>0;){let e=r.indexOf("`");if(e<0){n.push(r);break}let a=r.slice(0,e);a.length>0&&n.push(a);let o=r.slice(e+1),s=o.indexOf("`");if(s<0){n.push(r.slice(e));break}let c=o.slice(0,s);n.push((0,A.jsx)(`code`,{className:`question-inline-code`,children:c},`code-${t}-${i}`)),i+=1,r=o.slice(s+1)}return n}function Xe(e,t,n){let r=[],i=0,a=$e(n);for(let o of e.matchAll(a)){let a=o[0],s=o.index;s>i&&r.push(e.slice(i,s)),r.push((0,A.jsx)(`span`,{className:`code-token ${tt(a,n)}`,children:a},`${t}-${s}`)),i=s+a.length}return i<e.length&&r.push(e.slice(i)),r}function Ze(e){let t=/^\s*```(?<language>[a-z0-9_-]*)/iu.exec(e);return t===null?null:Qe(t.groups?.language??``)}function Qe(e){let t=e.toLowerCase();return t===`js`||t===`jsx`?`javascript`:t===`ts`||t===`tsx`?`typescript`:t===`py`?`python`:t===`kt`?`kotlin`:t===`md`?`markdown`:t===`htm`?`html`:t===`css`||t===`html`||t===`java`||t===`json`||t===`kotlin`||t===`markdown`||t===`python`||t===`sql`||t===`typescript`?t:`plaintext`}function $e(e){let t=et(e);return new RegExp([/#.*/u.source,/--.*/u.source,/\/\/.*/u.source,/"(?:\\.|[^"\\])*"/u.source,/'(?:\\.|[^'\\])*'/u.source,/`(?:\\.|[^`\\])*`/u.source,t,/\b\d+(?:\.\d+)?\b/u.source].filter(e=>e.length>0).join(`|`),`gu`)}function et(e){let t={css:[`align-items`,`background`,`border`,`color`,`display`,`font`,`grid`,`margin`,`padding`],html:[`article`,`body`,`button`,`div`,`footer`,`head`,`header`,`html`,`main`,`section`],java:[`boolean`,`class`,`else`,`false`,`final`,`if`,`import`,`new`,`null`,`private`,`public`,`return`,`static`,`true`,`void`],javascript:[`async`,`await`,`class`,`const`,`else`,`export`,`false`,`from`,`function`,`if`,`import`,`let`,`new`,`null`,`return`,`true`,`undefined`,`var`,`while`],json:[`false`,`null`,`true`],kotlin:[`class`,`data`,`else`,`false`,`fun`,`if`,`import`,`null`,`object`,`return`,`true`,`val`,`var`,`when`],markdown:[],plaintext:[],python:[`and`,`as`,`class`,`def`,`elif`,`else`,`False`,`for`,`from`,`if`,`import`,`in`,`is`,`None`,`not`,`or`,`return`,`True`,`while`],sql:[`and`,`as`,`by`,`case`,`create`,`delete`,`from`,`group`,`insert`,`into`,`join`,`left`,`limit`,`order`,`right`,`select`,`table`,`update`,`values`,`where`],typescript:[`async`,`await`,`class`,`const`,`else`,`export`,`false`,`from`,`function`,`if`,`import`,`interface`,`let`,`new`,`null`,`return`,`true`,`type`,`undefined`,`var`,`while`]}[e].join(`|`);return t.length===0?``:`\\b(?:${t})\\b`}function tt(e,t){return e.startsWith(`//`)||e.startsWith(`#`)||e.startsWith(`--`)?`comment`:e.startsWith(`"`)||e.startsWith(`'`)||e.startsWith("`")?`string`:/^\d/u.test(e)?`number`:t===`css`&&e.includes(`-`)?`property`:t===`html`?`tag`:`keyword`}function nt({question:e,correctAnswer:t,reference:n,answer:r,isSaved:i}){let a=Ie(r,t);return(0,A.jsxs)(`article`,{className:`question-card`,children:[(0,A.jsxs)(`div`,{className:`question-meta`,children:[(0,A.jsxs)(`span`,{children:[`Question `,e.index.toString().padStart(2,`0`)]}),(0,A.jsx)(`small`,{children:n})]}),(0,A.jsx)(Ge,{text:e.prompt}),i?(0,A.jsx)(rt,{answer:t,rawAnswer:e.rawAnswer,isCorrect:a}):null]})}function rt({answer:e,rawAnswer:t,isCorrect:n}){if(e===null)return null;let r=We(e,t);return(0,A.jsxs)(`div`,{className:`exam-saved-answer`,children:[(0,A.jsxs)(`div`,{className:`exam-answer-line`,children:[(0,A.jsx)(`span`,{children:(0,A.jsx)(Ke,{text:`정답: ${r}`})}),(0,A.jsx)(`button`,{"aria-label":`정답 복사`,className:`answer-copy`,title:`정답 복사`,type:`button`,onClick:()=>{it(r)},children:(0,A.jsxs)(`svg`,{"aria-hidden":`true`,fill:`none`,height:`14`,viewBox:`0 0 24 24`,width:`14`,children:[(0,A.jsx)(`path`,{d:`M8 8h11v11H8z`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`}),(0,A.jsx)(`path`,{d:`M5 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2`})]})})]}),(0,A.jsx)(`strong`,{className:n?`result correct`:`result wrong`,children:n?`정답입니다`:`오답입니다`})]})}async function it(e){if(navigator.clipboard!==void 0){await navigator.clipboard.writeText(e);return}let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}function at({questions:e,answers:t,overrideMap:n,savedQuestionIds:r}){let i=[],a=[];return e.forEach((e,o)=>{let s=t[e.id]??``,c=Me(e,n);if(c===null||!r.has(e.id)||s.trim().length===0)return;let l=Ie(s,c),u={index:o,label:`${l?`정답문항`:`오답문항`} ${o+1}. ${ot(e.prompt)}`};l?i.push(u):a.push(u)}),{correctItems:i,failedItems:a}}function ot(e){let t=e.replace(/\s+/gu,` `).trim();return t.length<=36?t:`${t.slice(0,36)}...`}function st({correctItems:e,failedItems:t,isCompact:n=!1,total:r,timerText:i,orderMode:a,onToggleOrder:o,onReset:s,onSelectQuestion:c}){let l=e.length+t.length,u=r===0?0:Math.round(l/r*100);return(0,A.jsxs)(`section`,{"aria-label":`시험 진행도`,className:n?`progress-strip compact`:`progress-strip`,children:[(0,A.jsxs)(`div`,{className:`progress-status`,children:[(0,A.jsx)(ct,{label:`정답 수`,ariaLabel:`정답 문항 이동`,summary:`${e.length} / ${r}`,emptyText:`정답문항 없음`,items:e,onSelectQuestion:c}),(0,A.jsx)(ct,{label:`오답 수`,ariaLabel:`오답 문항 이동`,summary:`${t.length} / ${r}`,emptyText:`오답문항 없음`,items:t,onSelectQuestion:c})]}),(0,A.jsx)(ut,{orderMode:a,onToggleOrder:o}),(0,A.jsxs)(`div`,{className:`progress-actions`,children:[(0,A.jsx)(`span`,{className:`progress-label`,children:`진행도`}),(0,A.jsx)(`div`,{"aria-label":`진행도 ${l} / ${r}`,"aria-valuemax":r,"aria-valuemin":0,"aria-valuenow":l,className:`bar`,role:`progressbar`,children:(0,A.jsx)(`div`,{style:{width:`${u}%`}})}),(0,A.jsxs)(`div`,{className:`progress-time`,children:[s===void 0?null:(0,A.jsx)(`button`,{"aria-label":`새로고침`,className:`timer-reset`,type:`button`,onClick:s,children:`↻`}),i===void 0?null:(0,A.jsx)(`span`,{className:`timer-chip`,children:i})]})]})]})}function ct({label:e,ariaLabel:t,summary:n,emptyText:r,items:i,onSelectQuestion:a}){return(0,A.jsxs)(`label`,{className:`progress-picker`,children:[(0,A.jsx)(`span`,{children:e}),(0,A.jsxs)(`select`,{"aria-label":t,value:``,onChange:e=>{let{value:t}=e.currentTarget;if(t===``)return;let n=Number(t);Number.isInteger(n)&&a(n)},children:[(0,A.jsx)(`option`,{value:``,children:n}),i.length===0?(0,A.jsx)(`option`,{disabled:!0,children:r}):i.map(e=>(0,A.jsx)(`option`,{value:e.index,children:e.label},e.index))]})]})}function lt({orderMode:e,onToggleOrder:t}){return(0,A.jsx)(`section`,{className:`order-strip`,children:(0,A.jsx)(ut,{orderMode:e,onToggleOrder:t})})}function ut({orderMode:e,onToggleOrder:t}){return(0,A.jsx)(`button`,{className:`order-toggle`,type:`button`,onClick:t,children:dt[e]})}var dt={sequential:`순차`,shuffle:`무작위`,"wrong-only":`오답만`};function ft({file:e,submissionFile:t,attempts:n,examDrafts:r,answerOverrides:i,currentIndex:a,isChromeCollapsed:o,orderMode:s,onToggleOrder:c,onMove:u,onToggleChrome:d,onSaveAttempt:f,onSaveExamDraft:p,onClearExamDraft:m}){let h=pe(n,t.id),g=r.find(e=>e.fileId===t.id)??null,_=s===`wrong-only`||g!==null?null:h,[v,y]=(0,l.useState)(g?.startedAt??Date.now()),[b,x]=(0,l.useState)(Date.now()),[ee,S]=(0,l.useState)(()=>g?.answers??_?.answers??{}),[C,ne]=(0,l.useState)(()=>new Set(Object.keys(g?.answers??_?.answers??{})));(0,l.useEffect)(()=>{if(_!==null)return;let e=window.setInterval(()=>x(Date.now()),1e3);return()=>window.clearInterval(e)},[_]),(0,l.useEffect)(()=>{let e=g?.answers??_?.answers??{};S(e),y(g?.startedAt??_?.startedAt??Date.now()),ne(new Set(Object.keys(e))),x(Date.now())},[g,_]);let w=e.questions[a]??null,T=je(i,t.id),re=at({questions:e.questions,answers:ee,overrideMap:T,savedQuestionIds:C}),ie=vt(_?.durationMs??b-v),ae=_!==null;(0,l.useEffect)(()=>{if(ae)return;function t(t){if(!t.defaultPrevented){if(t.key===`ArrowLeft`){t.preventDefault(),u(Math.max(0,a-1));return}t.key===`ArrowRight`&&(t.preventDefault(),u(Math.min(e.questions.length-1,a+1)))}}return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[a,e.questions.length,ae,u]);function oe(){u(Math.max(0,a-1))}function se(){u(Math.min(e.questions.length-1,a+1))}function ce(){if(w===null)return!1;let n=ee;return p({fileId:t.id,answers:n,startedAt:v}),ne(e=>new Set(e).add(w.id)),a>=e.questions.length-1?le(n):(Ie(n[w.id]??``,Me(w,T))&&a<e.questions.length-1&&u(a+1),!0)}function le(r){if(ae)return window.alert(`이미 제출 완료된 데이터입니다`),!1;if(w===null)return!1;let i=Date.now(),a=s===`wrong-only`?gt({visibleQuestions:e.questions,submissionQuestions:t.questions,answers:r,overrideMap:T}):r,o=He(t.questions,a,T);return f({id:te(`attempt`),fileId:t.id,round:n.filter(e=>e.fileId===t.id).length+1,answers:a,results:o.results,score:o.score,total:o.total,startedAt:v,finishedAt:i,durationMs:i-v}),m(t.id),ne(new Set(t.questions.map(e=>e.id))),window.alert(`저장되었습니다.`),!0}function E(){return le(ee)}function D(){let e=Date.now(),n={};p({fileId:t.id,answers:n,startedAt:e}),y(e),S(n),ne(new Set),u(0),x(e)}return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(st,{correctItems:re.correctItems,failedItems:re.failedItems,isCompact:o,total:e.questions.length,timerText:ie,orderMode:s,onToggleOrder:c,onReset:D,onSelectQuestion:u}),(0,A.jsx)(pt,{isCollapsed:o,onToggle:d}),(0,A.jsx)(`div`,{className:`question-scroll`,children:(0,A.jsx)(`div`,{className:`exam`,children:w===null?(0,A.jsx)(ht,{}):(0,A.jsx)(nt,{question:w,correctAnswer:Me(w,T),reference:`${_t(w,e.name)} · QUESTION ${a+1} / ${e.questions.length}`,answer:ee[w.id]??``,isSaved:ae||C.has(w.id)})})}),(0,A.jsx)(Ue,{question:w,index:a,total:e.questions.length,answer:w===null?``:ee[w.id]??``,disabled:ae,onAnswer:e=>{w!==null&&S(t=>({...t,[w.id]:e}))},onSave:ce,onPrev:oe,onNext:se,onSubmit:E})]})}function pt({isCollapsed:e,onToggle:t}){return(0,A.jsx)(`div`,{className:`chrome-collapse-hover`,children:(0,A.jsx)(`button`,{"aria-label":e?`모바일 상단 메뉴 펼치기`:`모바일 상단 메뉴 접기`,className:e?`mobile-chrome-collapse-toggle collapsed`:`mobile-chrome-collapse-toggle`,type:`button`,onClick:t,children:(0,A.jsx)(mt,{pointsDown:e})})})}function mt({pointsDown:e}){return(0,A.jsx)(`svg`,{"aria-hidden":`true`,fill:`none`,height:`18`,viewBox:`0 0 24 24`,width:`18`,xmlns:`http://www.w3.org/2000/svg`,children:(0,A.jsx)(`path`,{d:e?`m6 9 6 6 6-6`:`m6 15 6-6 6 6`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.8`})})}function ht(){return(0,A.jsx)(`div`,{className:`empty`,children:(0,A.jsx)(`h2`,{children:`시험 볼 문제가 없습니다.`})})}function gt({visibleQuestions:e,submissionQuestions:t,answers:n,overrideMap:r}){let i=new Set(e.map(e=>e.id)),a={};for(let e of t){if(i.has(e.id)){a[e.id]=n[e.id]??``;continue}let t=Me(e,r);t!==null&&(a[e.id]=t)}return a}function _t(e,t){return e.sourceFolderName!==void 0&&e.sourceFileName!==void 0?`${e.sourceFolderName} - ${e.sourceFileName}`:t}function vt(e){let t=Math.floor(e/1e3);return`${Math.floor(t/3600).toString().padStart(2,`0`)}:${Math.floor(t%3600/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}function yt({question:e,answer:t,variant:n,onConceal:r,onEdit:i}){let[a,o]=(0,l.useState)(!1),s=(0,l.useRef)(null);return(0,l.useEffect)(()=>()=>{s.current!==null&&window.clearTimeout(s.current)},[]),t===null?null:(0,A.jsxs)(`div`,{className:a?`answer-editable raw-mode`:`answer-editable`,children:[(0,A.jsx)(`button`,{className:n===`mask`?`mask revealed`:`visible-answer`,type:`button`,onClick:e=>{n!==`mask`||r===void 0||e.detail===1&&(s.current=window.setTimeout(r,180))},onDoubleClick:()=>{s.current!==null&&window.clearTimeout(s.current),o(e=>!e)},children:(0,A.jsx)(Ke,{text:a?e.rawAnswer??t:`정답: ${We(t,e.rawAnswer)}`})}),i===void 0?null:(0,A.jsx)(`button`,{className:`answer-edit`,type:`button`,onClick:()=>{let e=window.prompt(`정답을 수정하세요`,t)?.trim();e===void 0||e.length===0||(i(e),o(!1))},children:`정답 수정`})]})}function bt({question:e,effectiveAnswer:t,revealed:n,onReveal:r,onSaveAnswerOverride:i,reference:a,answerMode:o}){return(0,A.jsxs)(`article`,{className:`question-card`,children:[(0,A.jsxs)(`div`,{className:`question-meta`,children:[(0,A.jsxs)(`span`,{children:[`Question `,e.index.toString().padStart(2,`0`)]}),(0,A.jsx)(`small`,{children:a})]}),(0,A.jsx)(Ge,{text:e.prompt}),o===`mask`?(0,A.jsx)(xt,{question:e,answer:t,revealed:n,onReveal:r,...i===void 0?{}:{onSaveAnswerOverride:i}}):(0,A.jsx)(yt,{question:e,answer:t,variant:`visible`})]})}function xt({question:e,answer:t,revealed:n,onReveal:r,onSaveAnswerOverride:i}){return t===null?null:n?(0,A.jsx)(yt,{question:e,answer:t,variant:`mask`,onConceal:r,...i===void 0?{}:{onEdit:i}}):(0,A.jsx)(`button`,{className:`mask`,type:`button`,onClick:r,children:`정답 보기`})}function St(e,t,n){return e.flatMap(e=>e.questions.map(r=>{let i=t.filter(t=>t.fileId===e.id).filter(e=>e.results[r.id]!==void 0),a=i.filter(e=>e.results[r.id]===!1).length,o=i.length,s=o===0?0:a/o;return{questionId:r.id,fileId:e.id,label:`${e.name} · ${r.index}번`,attempts:o,wrong:a,wrongRate:s,highlighted:o>0&&s>=n}}))}var Ct=.5;function wt({files:e,attempts:t}){let n=(0,l.useMemo)(()=>St(e,t,Ct),[e,t]);return(0,A.jsxs)(`div`,{className:`stats`,children:[(0,A.jsx)(`h2`,{children:`통계`}),t.length===0?(0,A.jsx)(`p`,{children:`저장된 응시 결과가 없습니다.`}):null,n.map(e=>(0,A.jsxs)(`div`,{className:e.highlighted?`stat-row hot`:`stat-row`,children:[(0,A.jsx)(`span`,{children:e.label}),(0,A.jsxs)(`strong`,{children:[`오답률 `,Math.round(e.wrongRate*100),`%`]}),(0,A.jsxs)(`small`,{children:[e.wrong,`/`,e.attempts]})]},`${e.fileId}_${e.questionId}`))]})}function Tt(e){return e.mode===`all`?(0,A.jsx)(Dt,{...e}):e.mode===`exam`?(0,A.jsx)(ft,{file:e.file,submissionFile:e.submissionFile,attempts:e.attempts,examDrafts:e.examDrafts,answerOverrides:e.answerOverrides,currentIndex:e.examIndex,isChromeCollapsed:e.isExamChromeCollapsed,orderMode:e.orderMode,onToggleOrder:e.onToggleOrder,onMove:e.onMoveExam,onToggleChrome:e.onToggleExamChrome,onSaveAttempt:e.onSaveAttempt,onSaveExamDraft:e.onSaveExamDraft,onClearExamDraft:e.onClearExamDraft}):e.mode===`stats`?(0,A.jsx)(wt,{files:[e.submissionFile],attempts:e.attempts}):(0,A.jsx)(Et,{...e})}function Et(e){if((0,l.useEffect)(()=>{function t(t){if(!(t.defaultPrevented||j(t.target))){if(t.key===`ArrowLeft`){t.preventDefault(),e.onMove(Math.max(0,e.currentIndex-1));return}t.key===`ArrowRight`&&(t.preventDefault(),e.onMove(Math.min(e.file.questions.length-1,e.currentIndex+1)))}}return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e.currentIndex,e.file.questions.length,e.onMove]),e.currentQuestion===null)return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(lt,{orderMode:e.orderMode,onToggleOrder:e.onToggleOrder}),(0,A.jsx)(kt,{})]});let t=e.currentQuestion,n=je(e.answerOverrides,e.file.id);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(lt,{orderMode:e.orderMode,onToggleOrder:e.onToggleOrder}),(0,A.jsx)(`div`,{className:`question-scroll`,children:(0,A.jsx)(bt,{question:t,effectiveAnswer:Me(t,n),revealed:e.revealed.has(t.id),onReveal:()=>e.onReveal(t.id),onSaveAnswerOverride:n=>e.onSaveAnswerOverride({fileId:e.file.id,questionId:t.id,answer:n,updatedAt:Date.now()}),reference:`${At(t,e.file.name)} · QUESTION ${e.currentIndex+1} / ${e.file.questions.length}`,answerMode:`mask`})}),(0,A.jsx)(Ot,{index:e.currentIndex,total:e.file.questions.length,onPrev:()=>e.onMove(Math.max(0,e.currentIndex-1)),onNext:()=>e.onMove(Math.min(e.file.questions.length-1,e.currentIndex+1))})]})}function j(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return t===`input`||t===`textarea`||t===`select`||e.isContentEditable}function Dt(e){if(e.file.questions.length===0)return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(lt,{orderMode:e.orderMode,onToggleOrder:e.onToggleOrder}),(0,A.jsx)(kt,{})]});let t=je(e.answerOverrides,e.file.id);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(lt,{orderMode:e.orderMode,onToggleOrder:e.onToggleOrder}),(0,A.jsx)(`div`,{className:`question-scroll`,children:(0,A.jsx)(`div`,{className:`stack`,children:e.file.questions.map(n=>(0,A.jsx)(bt,{question:n,effectiveAnswer:Me(n,t),revealed:!1,onReveal:()=>void 0,reference:At(n,e.file.name),answerMode:`visible`},n.id))})})]})}function Ot({index:e,total:t,onPrev:n,onNext:r}){return(0,A.jsxs)(`footer`,{className:`single-navigation`,children:[(0,A.jsx)(`button`,{type:`button`,onClick:n,children:`이전 문항`}),(0,A.jsxs)(`strong`,{children:[`QUESTION `,t===0?0:e+1,` / `,t]}),(0,A.jsx)(`button`,{type:`button`,onClick:r,children:`다음 문항`})]})}function kt(){return(0,A.jsxs)(`div`,{className:`empty`,children:[(0,A.jsx)(`h2`,{children:`표시할 문제가 없습니다.`}),(0,A.jsx)(`p`,{children:`답: 또는 정답: 구문이 없는 파일도 안전하게 불러올 수 있습니다.`})]})}function At(e,t){return e.sourceFolderName!==void 0&&e.sourceFileName!==void 0?`${e.sourceFolderName} - ${e.sourceFileName}`:t}var jt=ve();function Mt(){let[e,t]=(0,l.useState)(()=>ae(jt.load(),jt.saveLibrary)),[n,r]=(0,l.useState)(()=>e.folders[0]?.id??``),[i,a]=(0,l.useState)(e.files[0]?.id??null),[o,s]=(0,l.useState)(`single`),[c,u]=(0,l.useState)(0),[f,p]=(0,l.useState)(0),[m,h]=(0,l.useState)(new Set),[g,_]=(0,l.useState)(``),[v,y]=(0,l.useState)(`opencode`),[b,x]=(0,l.useState)(!1),[ee,S]=(0,l.useState)(!1),[C,re]=(0,l.useState)(`sequential`),[ie,oe]=(0,l.useState)(0),se=e.files.find(e=>e.id===i)??null,ce=e.folders.find(e=>e.id===n)??e.folders[0],le=(0,l.useMemo)(()=>se??de(ce??null,e.files),[e.files,ce,se]),O=(0,l.useMemo)(()=>le===null?null:pe(e.attempts,le.id),[e.attempts,le]),k=(0,l.useMemo)(()=>fe(le,C,ie,O),[O,C,le,ie]),me=k?.questions[c]??null;(0,l.useEffect)(()=>{if(g.length===0)return;let e=window.setTimeout(()=>_(``),1800);return()=>window.clearTimeout(e)},[g]);function he(e){jt.saveFiles(e),t(t=>({...t,files:e}))}function ge(e){jt.saveAttempts(e),t(t=>({...t,attempts:e}))}function _e(e){jt.saveExamDrafts(e),t(t=>({...t,examDrafts:e}))}function ve(n){let r=d(e.answerOverrides,n);jt.saveAnswerOverrides(r),t(e=>({...e,answerOverrides:r}))}function ye(e){jt.saveLibrary(e),t(e)}function be(t){_e([...e.examDrafts.filter(e=>e.fileId!==t.fileId),t])}function xe(t){_e(e.examDrafts.filter(e=>e.fileId!==t))}function Ce(){let n=window.prompt(`폴더명을 입력하세요`,`새 폴더`)?.trim();if(n===void 0||n.length===0)return;let i={id:te(`folder`),name:n,createdAt:Date.now()},o=[...e.folders,i];jt.saveFolders(o),t(e=>({...e,folders:o})),r(i.id),a(null),u(0),p(0)}async function we(e){let t=await e.text();Te(e.name,t)}function Te(t,n){let r=ce?.id??e.folders[0]?.id;if(r===void 0)return;let i=ne(r,t,n);he([...e.files,i]),a(i.id),u(0),p(0),_(`${t} 불러오기 완료`)}function De(t){let n=w(e,t);ye(n),i===t&&(a(n.files[0]?.id??null),u(0),p(0)),h(n=>D(n,e.files,t))}function Oe(t){let o=new Set(e.files.filter(e=>e.folderId===t).map(e=>e.id)),s=T(e,t,()=>({id:te(`folder`),name:`기본 폴더`,createdAt:Date.now()}));ye(s),n===t&&r(s.folders[0]?.id??``),i!==null&&o.has(i)&&(a(s.files[0]?.id??null),u(0),p(0)),h(t=>ue(t,e.files,o))}return(0,A.jsxs)(`div`,{className:[`app-shell`,o===`exam`&&ee?`exam-chrome-collapsed`:``].filter(Boolean).join(` `),"data-testid":`app-shell`,"data-theme":v,children:[(0,A.jsx)(Se,{folders:e.folders,files:e.files,selectedFolderId:n,selectedFileId:i,onAddFolder:Ce,isDeleteMode:b,onImportFile:we,onDeleteFile:De,onDeleteFolder:Oe,onSelectFolder:e=>{r(e),a(null),u(0),p(0)},onSelectFile:t=>{let n=e.files.find(e=>e.id===t);n!==void 0&&r(n.folderId),a(t),u(0),p(0)},theme:v,onToggleTheme:()=>y(e=>e===`opencode`?`resend`:`opencode`),onToggleDeleteMode:()=>x(e=>!e)}),(0,A.jsxs)(`main`,{className:`main-pane`,children:[(0,A.jsx)(Ee,{mode:o,theme:v,onChangeMode:s,onToggleTheme:()=>y(e=>e===`opencode`?`resend`:`opencode`)}),(0,A.jsx)(`section`,{className:`content-scroll`,children:k===null||le===null?(0,A.jsx)(ke,{}):(0,A.jsx)(Tt,{mode:o,file:k,submissionFile:le,attempts:e.attempts,examDrafts:e.examDrafts,answerOverrides:e.answerOverrides,currentIndex:c,examIndex:f,isExamChromeCollapsed:ee,currentQuestion:me,orderMode:C,revealed:m,onToggleOrder:()=>{let e=Nt(C);e!==`sequential`&&oe(e=>e+1),re(e),u(0),p(0)},onReveal:e=>h(t=>E(t,e)),onMove:u,onMoveExam:p,onToggleExamChrome:()=>S(e=>!e),onSaveAttempt:t=>ge([...e.attempts,t]),onSaveAnswerOverride:ve,onSaveExamDraft:be,onClearExamDraft:xe})}),(0,A.jsx)(Ae,{message:g})]})]})}function Nt(e){switch(e){case`sequential`:return`shuffle`;case`shuffle`:return`wrong-only`;case`wrong-only`:return`sequential`}}var Pt=document.getElementById(`root`);if(Pt===null)throw Error(`Root element #root was not found.`);(0,u.createRoot)(Pt).render((0,A.jsx)(l.StrictMode,{children:(0,A.jsx)(Mt,{})}));