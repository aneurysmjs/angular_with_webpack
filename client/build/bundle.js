/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/assets/63fce6ab0c2579f01053";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var uiRouter = __webpack_require__(3);
	var Components = __webpack_require__(4);
	var AppComponent = __webpack_require__(14);

	angular.module('app', [
	   uiRouter,
	   Components.name
	])

	.directive('app', AppComponent);

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.8
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(S,X,u){'use strict';function G(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function za(a){if(null==a||Xa(a))return!1;if(I(a)||E(a)||B&&a instanceof B)return!0;
	var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||za(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
	b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Td(){return++nb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],r=g[m];d&&H(r)?da(r)?a[m]=new Date(r.valueOf()):Ma(r)?a[m]=new RegExp(r):r.nodeName?a[m]=r.cloneNode(!0):
	Nb(r)?a[m]=r.clone():(H(a[m])||(a[m]=I(r)?[]:{}),Mb(a[m],[r],!0)):a[m]=r}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function M(a){return Mb(a,ra.call(arguments,1),!1)}function Ud(a){return Mb(a,ra.call(arguments,1),!0)}function ea(a){return parseInt(a,10)}function Ob(a,b){return M(Object.create(a),b)}function x(){}function Ya(a){return a}function na(a){return function(){return a}}function qc(a){return z(a.toString)&&a.toString!==sa}function q(a){return"undefined"===typeof a}function y(a){return"undefined"!==
	typeof a}function H(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function E(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function da(a){return"[object Date]"===sa.call(a)}function z(a){return"function"===typeof a}function Ma(a){return"[object RegExp]"===sa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&Q(a.length)&&
	Vd.test(sa.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Wd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return F(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
	(b[e]=c(a[e]));else for(e in a)qa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Aa("cpws");var b=!1,c;I(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):da(a)?c=new Date(a.getTime()):Ma(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):z(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Aa("cpta");
	if(a===b)throw Aa("cpi");I(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function ia(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(I(a)){if(!I(b))return!1;if((d=a.length)==b.length){for(c=
	0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?ma(a.getTime(),b.getTime()):!1;if(Ma(a))return Ma(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||I(b)||da(b)||Ma(b))return!1;d=$();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!z(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(ra.call(b,d))}function tc(a,b){var d=2<arguments.length?ra.call(arguments,2):
	[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Xd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;Q(b)||(b=b?2:null);return JSON.stringify(a,Xd,b)}function uc(a){return E(a)?JSON.parse(a):a}function vc(a,
	b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function ua(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?F(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(c){return F(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
	function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,qa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];n(a,function(a,c){I(a)?n(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
	"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Yd(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,E(d=a.getAttribute(d)))return d;return null}function Zd(a,b){var d,c,e={};n(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
	"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==Yd(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){H(d)||(d={});d=M({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===X?"document":ua(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
	"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(d.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return c();S.name=S.name.replace(f,"");fa.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};z(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function $d(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}
	function ae(a){a=fa.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(be,function(a,c){return(c?b:"")+a.toLowerCase()})}function ce(){var a;if(!Ac){var b=pb();(oa=q(b)?S.jQuery:b?S[b]:u)&&oa.fn.on?(B=oa,M(oa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
	oa._data(f,"events"))&&c.$destroy&&oa(f).triggerHandler("$destroy");a(b)}):B=N;fa.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);qb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
	z(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ra.call(a,0,e))),c.push(b);return c||a}function $(){return Object.create(null)}function de(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
	d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return v}}function b(a,d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return v}}if(!g)throw d("nomod",f);var c=[],e=[],t=[],A=a("$injector","invoke","push",e),v={_invokeQueue:c,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
	"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:A,run:function(a){t.push(a);return this}};h&&A(h);return v})}})}function ee(a){M(a,{bootstrap:yc,copy:bb,extend:M,merge:Ud,equals:ma,element:B,forEach:n,injector:eb,noop:x,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:q,isDefined:y,isString:E,isFunction:z,isObject:H,isNumber:Q,isElement:Nb,isArray:I,
	version:fe,isDate:da,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:G,$$csp:Ba,reloadWithDebugInfo:$d});Sb=de(S);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
	ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
	$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function fb(a){return a.replace(Af,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Bf,"Moz$1")}function Kc(a){a=a.nodeType;
	return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Cf.exec(a)||["",""])[1].toLowerCase();c=ka[c]||ka._default;d.innerHTML=c[1]+a.replace(Df,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function N(a){if(a instanceof N)return a;var b;E(a)&&(a=U(a),
	b=!0);if(!(this instanceof N)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new N(a)}if(b){b=X;var d;a=(d=Ef.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Mc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||vb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)vb(d[c])}function Nc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&ab(c||[],d);y(d)&&c&&0<c.length||
	(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function vb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Nc(a)),delete gb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Ff,d=gb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Kc(a)){var c=y(d),e=!c&&b&&!H(b),f=!b;a=(a=wb(a,
	!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];M(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",U((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(b.split(" "),
	function(a){a=U(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",U(d))}}function Mc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Oc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&
	a.host}}function Pc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Gf(a,b){b=b||S;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Qc(a,b){var d=Cb[b.toLowerCase()];return d&&Rc[ta(a)]&&d}function Hf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(q(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
	c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||If;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function If(a,b,d){d.call(a,b)}function Jf(a,b,d){var c=b.relatedTarget;c&&(c===a||Kf.call(a,c))||d.call(a,b)}function xf(){this.$get=function(){return M(N,
	{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Td)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Lf(a){return(a=a.toString().replace(Sc,"").match(Tc))?
	"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(H(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||I(b))b=t.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(q(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(q(a)||I(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,
	c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(t.invoke(a)):I(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
	k)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,t;m=0;for(l=k.length;m<l;m++){t=k[m];if("string"!==typeof t)throw Da("itkn",t);h.push(f&&f.hasOwnProperty(t)?f[t]:d(t,g))}I(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((I(a)?a[a.length-1]:a).prototype||
	null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return r.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),r={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,na(b),!1)}),constant:d(function(a,b){Ra(a,"constant");r[a]=b;A[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=
	v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},t=r.$injector=h(r,function(a,b){fa.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),A={},v=A.$injector=h(A,function(a,b){var c=t.get(a+"Provider",b);return v.invoke(c.$get,c,u,a)});n(g(a),function(a){a&&v.invoke(a)});return v}function Qe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=
	a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Gf(function(){c.$evalAsync(g)})});
	return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function Mf(a){E(a)&&(a=a.split(" "));var b=$();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ea(a){return H(a)?a:{}}function Nf(a,b,d,c){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(v--,0===v)for(;T.length;)try{T.pop()()}catch(b){d.error(b)}}}function f(){L=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=q(p)?
	null:p;ma(p,J)&&(p=J);J=p}function h(){if(w!==k.url()||C!==p)w=k.url(),C=p,n(aa,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,r=a.setTimeout,t=a.clearTimeout,A={};k.isMock=!1;var v=0,T=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){0===v?a():T.push(a)};var p,C,w=l.href,ga=b.find("base"),L=null;g();C=p;k.url=function(b,d,e){q(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=
	C===e;if(w===b&&(!c.history||f))return k;var h=w&&Fa(w)===Fa(b);w=b;C=e;if(!c.history||h&&f){if(!h||L)L=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(L=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),C=p;return k}return L||l.href.replace(/%27/g,"'")};k.state=function(){return p};var aa=[],D=!1,J=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);D=!0}aa.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",
	f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ga.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;v++;c=r(function(){delete A[c];e(a)},b||0);A[c]=!0;return c};k.defer.cancel=function(a){return A[a]?(delete A[a],t(a),e(x),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Nf(a,c,b,d)}]}function We(){this.$get=function(){function a(a,c){function e(a){a!=r&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,r),r=a,
	r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=M({},c,{id:a}),k=$(),l=c&&c.capacity||Number.MAX_VALUE,m=$(),r=null,t=null;return b[a]={put:function(a,b){if(!q(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(t.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==t&&
	(t=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=$();g=0;m=$();r=t=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return M({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function rf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);
	if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function t(b,f){Ra(b,"directive");
	E(b)?(c(b),qb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);z(h)?h={compile:na(h)}:!h.compile&&h.link&&(h.compile=na(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,t={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(t.bindToController=d(l.scope,
	m,!0),t.isolateScope={}):t.isolateScope=d(l.scope,m,!1));H(l.bindToController)&&(t.bindToController=d(l.bindToController,m,!0));if(H(t.bindToController)){var v=l.controller,R=l.controllerAs;if(!v)throw ha("noctrl",m);var V;a:if(R&&E(R))V=R;else{if(E(v)){var n=Uc.exec(v);if(n){V=n[3];break a}}V=void 0}if(!V)throw ha("noident",m);}var s=k.$$bindings=t;H(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(u){c(u)}});return f}])),e[b].push(f)):n(b,pc(t));
	return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,
	b,c,d,p,C,w,ga,L,aa,D){function J(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e){a instanceof B||(a=B(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);K.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=
	d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Yb(g,B("<div>").append(a).html())):c?Pa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);K.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,t,w,D;if(p)for(D=Array(c.length),m=0;m<h.length;m+=3)f=h[m],D[f]=c[f];else D=c;m=0;for(t=h.length;m<t;)k=D[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),K.$$addScopeInfo(B(k),
	l)):l=a,w=c.transcludeOnThisElement?R(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?R(a,b):null,c(f,l,k,d,w)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,t,p,w=0;w<a.length;w++){k=new fa;l=V(a[w],[],k,0===w?d:u,e);(f=l.length?Z(l,a[w],k,b,c,null,[],[],f):null)&&f.scope&&K.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[w].childNodes)||!m.length?null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(w,f,k),t=!0,p=p||f;f=null}return t?g:null}function R(a,
	b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function V(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:P(b,va(ta(a)),"E",d,e);for(var l,m,t,p=a.attributes,w=0,D=p&&p.length;w<D;w++){var K=!1,A=!1;l=p[w];k=l.name;m=U(l.value);l=va(k);if(t=ka.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(la))&&G(l[1])&&(K=k,A=k.substr(0,k.length-
	5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(t||!c.hasOwnProperty(l))c[l]=m,Qc(a,l)&&(c[l]=!0);W(a,b,m,l,t);P(b,l,"A",d,e,K,A)}a=a.className;H(a)&&(a=a.animVal);if(E(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),P(b,l,"C",d,e)&&(c[l]=U(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);N(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=
	va(k[1]),P(b,l,"M",d,e)&&(c[l]=U(k[2]))}catch(R){}}b.sort(Ia);return b}function Ta(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ta(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,d,e,f,g,h,l,m){function t(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=q.require;a.directiveName=x;if(O===
	q||q.$$isolateScope)a=ca(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=q.require;b.directiveName=x;if(O===q||q.$$isolateScope)b=ca(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;if(E(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||
	null}function w(a,b,c,d,e,f){var g=$(),h;for(h in d){var k=d[h],l={$scope:k===O||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=C(m,l,!0,k.controllerAs);g[k.name]=l;aa||a.data("$"+k.name+"Controller",l.instance)}return g}function D(a,c,e,f,g){function k(a,b,c){var d;Za(a)||(c=b,b=a,a=u);aa&&(d=v);c||(c=aa?V.parent():V);return g(a,b,d,c,Ta)}var m,t,A,v,C,V,Ga;b===e?(f=d,V=d.$$element):(V=B(e),f=new fa(V,d));A=c;O?t=c.$new(!0):R&&(A=c.$parent);g&&(C=k,
	C.$$boundTransclude=g);T&&(v=w(V,f,C,T,t,c));O&&(K.$$addScopeInfo(V,t,!0,!(J&&(J===O||J===O.$$originalDirective))),K.$$addScopeClass(V,!0),t.$$isolateBindings=O.$$isolateBindings,(Ga=ba(c,f,t,t.$$isolateBindings,O))&&t.$on("$destroy",Ga));for(var n in v){Ga=T[n];var ga=v[n],L=Ga.$$bindings.bindToController;ga.identifier&&L&&(m=ba(A,f,ga.instance,L,Ga));var q=ga();q!==ga.instance&&(ga.instance=q,V.data("$"+Ga.name+"Controller",q),m&&m(),m=ba(A,f,ga.instance,L,Ga))}F=0;for(M=h.length;F<M;F++)m=h[F],
	ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C);var Ta=c;O&&(O.template||null===O.templateUrl)&&(Ta=t);a&&a(Ta,e.childNodes,u,g);for(F=l.length-1;0<=F;F--)m=l[F],ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C)}m=m||{};for(var A=-Number.MAX_VALUE,R=m.newScopeDirective,T=m.controllerDirectives,O=m.newIsolateScopeDirective,J=m.templateDirective,n=m.nonTlbTranscludeDirective,ga=!1,L=!1,aa=m.hasElementTranscludeDirective,Z=d.$$element=B(b),q,x,P,Ia=
	e,G,F=0,M=a.length;F<M;F++){q=a[F];var N=q.$$start,Q=q.$$end;N&&(Z=Ta(b,N,Q));P=u;if(A>q.priority)break;if(P=q.scope)q.templateUrl||(H(P)?(Ua("new/isolated scope",O||R,q,Z),O=q):Ua("new/isolated scope",O,q,Z)),R=R||q;x=q.name;!q.templateUrl&&q.controller&&(P=q.controller,T=T||$(),Ua("'"+x+"' controller",T[x],q,Z),T[x]=q);if(P=q.transclude)ga=!0,q.$$tlb||(Ua("transclusion",n,q,Z),n=q),"element"==P?(aa=!0,A=q.priority,P=Z,Z=d.$$element=B(X.createComment(" "+x+": "+d[x]+" ")),b=Z[0],Y(f,ra.call(P,0),
	b),Ia=K(P,e,A,g&&g.name,{nonTlbTranscludeDirective:n})):(P=B(Vb(b)).contents(),Z.empty(),Ia=K(P,e,u,u,{needsNewScope:q.$$isolateScope||q.$$newScope}));if(q.template)if(L=!0,Ua("template",J,q,Z),J=q,P=z(q.template)?q.template(Z,d):q.template,P=ja(P),q.replace){g=q;P=Tb.test(P)?Xc(Yb(q.templateNamespace,U(P))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ha("tplrt",x,"");Y(f,Z,b);P={$attr:{}};var Wc=V(b,[],P),W=a.splice(F+1,a.length-(F+1));(O||R)&&y(Wc,O,R);a=a.concat(Wc).concat(W);S(d,P);M=a.length}else Z.html(P);
	if(q.templateUrl)L=!0,Ua("template",J,q,Z),J=q,q.replace&&(g=q),D=Of(a.splice(F,a.length-F),Z,d,f,ga&&Ia,h,l,{controllerDirectives:T,newScopeDirective:R!==q&&R,newIsolateScopeDirective:O,templateDirective:J,nonTlbTranscludeDirective:n}),M=a.length;else if(q.compile)try{G=q.compile(Z,d,Ia),z(G)?t(null,G,N,Q):G&&t(G.pre,G.post,N,Q)}catch(da){c(da,ua(Z))}q.terminal&&(D.terminal=!0,A=Math.max(A,q.priority))}D.scope=R&&!0===R.scope;D.transcludeOnThisElement=ga;D.templateOnThisElement=L;D.transclude=Ia;
	m.hasElementTranscludeDirective=aa;return D}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function P(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,w=d.length;p<w;p++)try{m=d[p],(q(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Ob(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(D){c(D)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
	c[d],b.multiElement)return!0;return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(J(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Of(a,b,c,e,f,g,h,k){var l=[],m,t,p=b[0],w=a.shift(),D=Ob(w,{templateUrl:null,
	transclude:null,replace:null,$$originalDirective:w}),A=z(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,K=w.templateNamespace;b.empty();d(A).then(function(d){var T,v;d=ja(d);if(w.replace){d=Tb.test(d)?Xc(Yb(K,U(d))):[];T=d[0];if(1!=d.length||1!==T.nodeType)throw ha("tplrt",w.name,A);d={$attr:{}};Y(e,b,T);var C=V(T,[],d);H(w.scope)&&y(C,!0);a=C.concat(a);S(c,d)}else T=p,b.html(d);a.unshift(D);m=Z(a,T,c,f,b,w,g,h,k);n(e,function(a,c){a==T&&(e[c]=b[0])});for(t=O(b[0].childNodes,f);l.length;){d=l.shift();
	v=l.shift();var ga=l.shift(),L=l.shift(),C=b[0];if(!d.$$destroyed){if(v!==p){var q=v.className;k.hasElementTranscludeDirective&&w.replace||(C=Vb(T));Y(ga,B(v),C);J(B(C),q)}v=m.transcludeOnThisElement?R(d,m.transclude,L):L;m(t,d,C,e,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=R(b,m.transclude,e)),m(t,b,c,d,a)))}}function Ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,
	b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function N(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&K.$$addBindingClass(a);return function(a,c){var e=c.parent();b||K.$$addBindingClass(e);K.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");
	c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return L.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function W(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===ta(a))throw ha("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=$());if(l.test(e))throw ha("nodomevents");
	var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);
	B.hasData(d)&&(B.data(c,B.data(d)),oa?(Rb=!0,oa.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ca(a,b){return M(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ba(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,t,w,D;switch(e.mode){case "@":l||qa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){E(a)&&
	(d[h]=a)});c.$$observers[k].$$scope=a;E(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!qa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;t=p(c[k]);D=t.literal?ma:function(a,b){return a===b||a!==a&&b!==b};w=t.assign||function(){m=d[h]=t(a);throw ha("nonassign",c[k],f.name);};m=d[h]=t(a);l=function(b){D(b,d[h])||(D(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,t.literal);g.push(l);break;case "&":t=c.hasOwnProperty(k)?p(c[k]):
	x;if(t===x&&l)break;d[h]=function(b){return t(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var fa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};fa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&aa.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&aa.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Yc(a,b);c&&c.length&&aa.addClass(this.$$element,
	c);(c=Yc(b,a))&&c.length&&aa.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Qc(this.$$element[0],a),g=Zc[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=ta(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<
	k;l++)var m=2*l,f=f+D(U(g[m]),!0),f=f+(" "+U(g[m+1]));g=U(g[2*l]).split(/\s/);f+=D(U(g[0]),!0);2===g.length&&(f+=" "+U(g[1]));this[a]=b=f}!1!==d&&(null===b||q(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=$()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||q(c[a])||b(c[a])});return function(){ab(e,b)}}};var da=b.startSymbol(),
	ia=b.endSymbol(),ja="{{"==da||"}}"==ia?Ya:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ia)},ka=/^ngAttr[A-Z]/,la=/^(.+)Start$/;K.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;K.$$addBindingClass=m?function(a){J(a,"ng-binding")}:x;K.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;K.$$addScopeClass=m?function(a,b){J(a,b?"ng-isolate-scope":"ng-scope")}:x;return K}]}function va(a){return fb(a.replace(Vc,
	""))}function Yc(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Pf.call(a,b,1);return a}function Xe(){var a={},b=!1;this.register=function(b,c){Ra(b,"controller");H(b)?M(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!H(a.$scope))throw G("$controller")("noscp",
	d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,r;h=!0===h;k&&E(k)&&(r=k);if(E(f)){k=f.match(Uc);if(!k)throw Qf("ctrlfmt",f);m=k[1];r=r||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Qa(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),r&&e(g,r,l,m||f.name),M(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,r&&e(g,r,l,m||f.name));return l},{instance:l,identifier:r});l=d.instantiate(f,g,m);r&&e(g,r,l,m||f.name);return l}}]}function Ye(){this.$get=
	["$window",function(a){return B(a.document)}]}function Ze(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return H(a)?da(a)?a.toISOString():db(a):a}function df(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||q(a)||(I(a)?n(a,function(a,d){b.push(ja(c)+"="+ja(Zb(a)))}):b.push(ja(c)+"="+ja(Zb(a))))});return b.join("&")}}}function ef(){this.$get=function(){return function(a){function b(a,e,f){null===a||q(a)||
	(I(a)?n(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!da(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(E(a)){var d=a.replace(Rf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf($c))||(c=(c=d.match(Sf))&&Tf[c[0]].test(d));c&&(a=uc(d))}}return a}function ad(a){var b=$(),d;E(a)?n(a.split("\n"),function(a){d=a.indexOf(":");var e=F(U(a.substr(0,d)));a=U(a.substr(d+1));e&&
	(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&n(a,function(a,d){var f=F(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function bd(a){var b;return function(d){b||(b=ad(a));return d?(d=b[F(d)],void 0===d&&(d=null),d):b}}function cd(a,b,d,c){if(z(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function cf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
	post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a){var b=M({},a);b.data=cd(a.data,a.headers,a.status,f.transformResponse);
	a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!fa.isObject(b))throw G("$http")("badreq",b);var f=M({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=M({},b.headers),f,g,h,c=M({},c.common,c[F(b.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);
	f.method=sb(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=cd(b.data,bd(d),u,b.transformRequest);q(e)&&n(d,function(a,b){"content-type"===F(b)&&delete d[b]});q(b.withCredentials)&&!q(a.withCredentials)&&(b.withCredentials=a.withCredentials);return r(b,e).then(c,c)},u],h=k.when(f);for(n(v,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=
	g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=dd("success"),h.error=dd("error"));return h}function r(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}J&&(200<=a&&300>a?J.put(R,[a,c,ad(d),e]):J.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?n.resolve:
	n.reject)({data:a,status:b,headers:bd(d),config:c,statusText:e})}function r(a){l(a.data,a.status,ia(a.headers()),a.statusText)}function v(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var n=k.defer(),D=n.promise,J,K,O=c.headers,R=t(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);D.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=H(c.cache)?c.cache:H(a.cache)?a.cache:A);J&&(K=J.get(R),y(K)?K&&z(K.then)?K.then(r,r):I(K)?l(K[1],
	K[0],ia(K[2]),K[3]):l(K,200,{},"OK"):J.put(R,D));q(K)&&((K=ed(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||a.xsrfHeaderName]=K),e(c.method,R,d,g,O,c.timeout,c.withCredentials,c.responseType));return D}function t(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var A=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];n(c,function(a){v.unshift(E(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,
	function(a){m[a]=function(b,c){return m(M({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(M({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function gf(){this.$get=function(){return function(){return new S.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Uf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Uf(a,b,d,
	c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,A="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),A=a.type,g="error"===a.type?404:200);d&&d(g,A)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,r,t,A){function v(){C&&C();w&&w.abort()}
	function T(b,c,e,f,g){y(L)&&d.cancel(L);C=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(x)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==F(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var C=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){T(l,a,c[p].data,"",b);c[p]=x})}else{var w=b(e,h);w.open(e,h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
	c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==wa(h).protocol?404:0);T(l,c,b,w.getAllResponseHeaders(),a)};e=function(){T(l,-1,null,null,"")};w.onerror=e;w.onabort=e;t&&(w.withCredentials=!0);if(A)try{w.responseType=A}catch(ga){if("json"!==A)throw ga;}w.send(q(k)?null:k)}if(0<r)var L=d(v,r);else r&&z(r.then)&&r.then(v)}}function af(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
	"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(f,h,m,r){function p(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var d;if(r&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}r=!!r;for(var C,w,n=0,L=[],s=[],D=f.length,J=[],K=[];n<D;)if(-1!=(C=f.indexOf(a,n))&&-1!=(w=f.indexOf(b,C+k)))n!==C&&J.push(g(f.substring(n,C))),n=f.substring(C+
	k,w),L.push(n),s.push(d(n,p)),n=w+l,K.push(J.length),J.push("");else{n!==D&&J.push(g(f.substring(n)));break}m&&1<J.length&&Ja.throwNoconcat(f);if(!h||L.length){var O=function(a){for(var b=0,c=L.length;b<c;b++){if(r&&q(a[b]))return;J[K[b]]=a[b]}return J.join("")};return M(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=s[b](a);return O(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:L,$$watchDelegate:function(a,b){var c;return a.$watchGroup(s,function(d,e){var f=O(d);z(b)&&b.call(this,
	f,d!==e?c:f,a);c=f})}})}}var k=a.length,l=b.length,m=new RegExp(a.replace(/./g,f),"g"),r=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,l){var m=4<arguments.length,r=m?ra.call(arguments,4):[],t=b.setInterval,A=b.clearInterval,v=0,n=y(l)&&!l,p=(n?c:d).defer(),C=p.promise;k=y(k)?k:0;C.then(null,null,m?function(){e.apply(null,r)}:e);C.$$intervalId=
	t(function(){p.notify(v++);0<k&&v>=k&&(p.resolve(v),A(C.$$intervalId),delete f[C.$$intervalId]);n||a.$apply()},h);f[C.$$intervalId]=p;return C}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function fd(a,b){var d=wa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||Vf[d.protocol]||
	null}function gd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=wa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function pa(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Fa(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function ib(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
	fd(a,this);this.$$parse=function(a){var d=pa(b,a);if(!E(d))throw Db("ipthprfx",a,b);gd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=pa(a,c))?(g=f,g=y(f=pa(d,f))?b+(pa("/",f)||f):a+g):y(f=pa(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
	return!!g}}function dc(a,b,d){fd(a,this);this.$$parse=function(c){var e=pa(a,c)||pa(b,c),f;q(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",q(e)&&(a=c,this.replace())):(f=pa(d,e),q(f)&&(f=e));gd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
	d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Fa(a)==Fa(b)?(this.$$parse(b),!0):!1}}function hd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Fa(c)?f=c:(g=pa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Eb(a){return function(){return this[a]}}
	function id(a,b){return function(d){if(q(d))return this[a];this[a]=b(d);this.$$compose();return this}}function hf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):H(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
	function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var r=c.url(),t;if(b.enabled){if(!m&&b.requireBase)throw Db("nobase");t=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?cc:hd}else t=Fa(r),m=dc;var A=t.substr(0,Fa(t).lastIndexOf("/")+1);l=new m(t,A,"#"+a);l.$$parseLinkUrl(r,r);l.$$state=
	c.state();var v=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=wa(h.animVal).href);v.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
	!0))}});ib(l.absUrl())!=ib(r)&&c.url(l.absUrl(),!0);var n=!0;c.onUrlChange(function(a,b){q(pa(A,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=ib(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(n=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=ib(c.url()),b=ib(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(n||
	m)n=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function jf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
	(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
	a||"__proto__"===a)throw ba("isecfld",b);return a}function jd(a,b){a+="";if(!E(a))throw ba("iseccst",b);return a}function xa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function kd(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===Wf||a===Xf||a===Yf)throw ba("isecff",b);}}function ld(a,b){if(a&&(a===(0).constructor||a===
	(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function Zf(a,b){return"undefined"!==typeof a?a:b}function md(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function W(a,b){var d,c;switch(a.type){case s.Program:d=!0;n(a.body,function(a){W(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:W(a.argument,b);a.constant=a.argument.constant;
	a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:W(a.test,b);W(a.alternate,b);W(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
	!1;a.toWatch=[a];break;case s.MemberExpression:W(a.object,b);a.computed&&W(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;
	a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];n(a.elements,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];n(a.properties,function(a){W(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function nd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}
	function od(a){return a.type===s.Identifier||a.type===s.MemberExpression}function pd(a){if(1===a.body.length&&od(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function rd(a,b){this.astBuilder=a;this.$filter=b}function sd(a,
	b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return z(a.valueOf)?a.valueOf():$f.call(a)}function kf(){var a=$(),b=$();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],r=0,n=
	g.length;r<n;r++)l[r]=c,m[r]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
	c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=
	e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Ba().noUnsafeEval,m={csp:l,expensiveChecks:!1},r={csp:l,expensiveChecks:!0};return function(c,l,v){var n,p,q;switch(typeof c){case "string":q=c=c.trim();var w=v?b:a;n=w[q];n||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),v=v?r:m,n=new fc(v),n=(new gc(n,d,v)).parse(c),n.constant?n.$$watchDelegate=h:p?n.$$watchDelegate=n.literal?g:f:n.inputs&&(n.$$watchDelegate=e),w[q]=n);return k(n,l);case "function":return k(c,l);default:return x}}}]}
	function mf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return td(function(b){a.$evalAsync(b)},b)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(a,b){return td(function(b){a.defer(b)},b)}]}function td(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,
	d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);M(c.prototype,{then:function(a,b,c){if(q(a)&&q(b)&&q(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];
	this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});M(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(H(a)||z(a))c=a&&a.then;z(c)?(this.promise.$$state.status=
	-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?
	a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function A(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof A))return new A(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
	r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.resolve=m;r.all=function(a){var b=new g,c=0,d=I(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function wf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
	a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function lf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&
	(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function l(a){a.currentScope.$$destroyed=!0}function m(a){9===Ha&&(a.$$childHead&&m(a.$$childHead),a.$$nextSibling&&m(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function r(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
	!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function t(a){if(w.$$phase)throw d("inprog",w.$$phase);w.$$phase=a}function A(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function v(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function p(){for(;aa.length;)try{aa.shift()()}catch(a){g(a)}e=null}function C(){null===e&&(e=k.defer(function(){w.$apply(p)}))}r.prototype={constructor:r,
	$new:function(b,c){var d;c=c||this;b?(d=new r,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",l);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=x);k||
	(k=g.$$watchers=[]);k.unshift(l);A(this,1);return function(){0<=ab(k,l)&&A(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
	$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!q(e)){if(H(e))if(za(e))for(f!==r&&(f=r,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==t&&(f=t={},n=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)qa.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=
	h(a,c),r=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(za(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)qa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,r,n=b,A,q=[],v,C;t("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),p());c=null;do{r=!1;for(A=this;u.length;){try{C=u.shift(),C.scope.$eval(C.expression,C.locals)}catch(aa){g(aa)}c=null}a:do{if(l=A.$$watchers)for(m=l.length;m--;)try{if(a=
	l[m])if((f=a.get(A))!==(h=a.last)&&!(a.eq?ma(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,c=a,a.last=a.eq?bb(f,null):f,a.fn(f,h===s?f:h,A),5>n&&(v=4-n,q[v]||(q[v]=[]),q[v].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){r=!1;break a}}catch(y){g(y)}if(!(l=A.$$watchersCount&&A.$$childHead||A!==this&&A.$$nextSibling))for(;A!==this&&!(l=A.$$nextSibling);)A=A.$parent}while(A=l);if((r||u.length)&&!n--)throw w.$$phase=null,d("infdig",
	b,q);}while(r||u.length);for(w.$$phase=null;L.length;)try{L.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();A(this,-this.$$watchersCount);for(var b in this.$$listenerCount)v(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
	this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$$nextSibling=null;m(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||u.length||k.defer(function(){u.length&&w.$digest()});u.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){L.push(a)},$apply:function(a){try{t("$apply");
	try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&aa.push(b);C()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,v(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h=
	{name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};
	if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new r,u=w.$$asyncQueue=[],L=w.$$postDigestQueue=[],aa=w.$$applyAsyncQueue=[];return w}]}function ge(){var a=/^\s*(https?|ftp|mailto|tel|file):/,
	b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=wa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ag(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=ud(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Ma(a))return new RegExp("^"+
	a.source+"$");throw ya("imatcher");}function vd(a){var b=[];y(a)&&n(a,function(a){b.push(ag(a))});return b}function pf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=vd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=vd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=
	new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||q(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",
	a);return new c(b)},getTrusted:function(d,e){if(null===e||q(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=wa(e.toString()),r,t,n=!1;r=0;for(t=a.length;r<t;r++)if(c(a[r],g)){n=!0;break}if(n)for(r=0,t=b.length;r<t;r++)if(c(b[r],g)){n=!1;break}if(n)return e;throw ya("insecurl",e.toString());}if(d===la.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
	function of(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw ya("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(la,function(a,
	b){var d=F(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function qf(){this.$get=["$window","$document",function(a,b){var d={},c=ea((/android (\d+)/.exec(F((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var r in k)if(l=h.exec(r)){g=l[0];g=g.substr(0,1).toUpperCase()+
	g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=E(k.webkitTransition),m=E(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(q(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",
	function(a,b,d,c){function e(f,g){e.totalPendingRequests++;E(f)&&a.get(f)||(f=c.getTrustedResourceUrl(f));var h=b.defaults&&b.defaults.transformResponse;I(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ha("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope",
	"$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=fa.element(a).data("$binding");c&&n(c,function(c){d?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},
	setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function uf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=x);var m=ra.call(arguments,3),r=y(l)&&!l,t=(r?c:d).defer(),n=t.promise,q;q=b.defer(function(){try{t.resolve(f.apply(null,m))}catch(b){t.reject(b),e(b)}finally{delete g[n.$$timeoutId]}r||a.$apply()},k);n.$$timeoutId=q;g[q]=t;return n}var g={};
	f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function wa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function ed(a){a=
	E(a)?wa(a):a;return a.protocol===wd.protocol&&a.host===wd.host}function vf(){this.$get=na(S)}function xd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),q(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function zf(){this.$get=xd}function Jc(a){function b(d,c){if(H(d)){var e={};n(d,function(a,c){e[c]=
	b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",yd);b("date",zd);b("filter",bg);b("json",cg);b("limitTo",dg);b("lowercase",eg);b("number",Ad);b("orderBy",Bd);b("uppercase",fg)}function bg(){return function(a,b,d){if(!za(a)){if(null==a)return a;throw G("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=
	gg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function gg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=ma:z(b)||(b=function(a,b){if(q(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(I(a))return a.some(function(a){return Ka(a,b,d,c)});
	switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!q(e)&&(f="$"===h,!Ka(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function yd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){q(c)&&(c=b.CURRENCY_SYM);q(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Cd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,
	e).replace(/\u00A4/g,c)}}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Cd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Cd(a,b,d,c,e){if(H(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;
	q(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",r=0,t=b.lgSize,n=b.gSize;if(h.length>=t+n)for(r=h.length-t,l=0;l<r;l++)0===(r-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=r;l<h.length;l++)0===(h.length-l)%t&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Gb(a,b,d){var c="";
	0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function ca(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=sb(b?"SHORT"+a:a);return c[f][e]}}function Dd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Ed(a){return function(b){var d=Dd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
	+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function zd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));h.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;h=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
	return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=hg.test(c)?ea(c):b(c));Q(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ig.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(b){k=jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function cg(){return function(a,b){q(b)&&(b=2);return db(a,b)}}function dg(){return function(a,
	b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!I(a)&&!E(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Bd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(z(b))h=b;else if(E(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
	descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!za(a))return a;I(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&
	(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return na(a)}function Fd(a,b,d,c,e){var f=this,g=[];f.$error=
	{};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
	f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Ib};Gd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};
	f.$setPristine=function(){c.setClass(a,Wa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=F(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});
	b.on("compositionend",function(){h=!1;k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
	m)}b.on("change",k);c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(da(d))return d;if(E(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(kg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,
	mm:0,ss:0,sss:0},n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)&&!da(a)?d(a)||u:a}Hd(e,f,g,h);jb(e,f,g,h,k,l);var A=h&&h.$options&&h.$options.timezone,v;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,v),A&&(a=Pb(a,A)),a):u});h.$formatters.push(function(a){if(a&&
	!da(a))throw lb("datefmt",a);if(r(a))return(v=a)&&A&&(v=Pb(v,A,!0)),m("date")(a,c,A);v=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!r(a)||q(s)||d(a)>=s};g.$observe("min",function(a){s=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!r(a)||q(p)||d(a)<=p};g.$observe("max",function(a){p=n(a);h.$validate()})}}}function Hd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
	return c.badInput&&!c.typeMismatch?u:a})}function Id(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return I(a)?(n(a,function(a){b=b.concat(e(a))}),b):E(a)?a.split(" "):H(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
	link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||$(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!ma(a,m)){var q=e(m),n=c(l,q),l=c(q,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=ia(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==
	a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Gd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Jd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Jd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){q(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
	h(c.$pending,a,f),Kd(c.$pending)&&(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Ld,!0),c.$valid=c.$invalid=u,d("",null)):(b(Ld,!1),c.$valid=Kd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Kd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var lg=/^\/(.+)\/([a-z]*)$/,
	F=function(a){return E(a)?a.toLowerCase():a},qa=Object.prototype.hasOwnProperty,sb=function(a){return E(a)?a.toUpperCase():a},Ha,B,oa,ra=[].slice,Pf=[].splice,mg=[].push,sa=Object.prototype.toString,rc=Object.getPrototypeOf,Aa=G("ng"),fa=S.angular||(S.angular={}),Sb,nb=0;Ha=X.documentMode;x.$inject=[];Ya.$inject=[];var I=Array.isArray,Vd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,U=function(a){return E(a)?a.trim():a},ud=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
	"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!y(Ba.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},pb=function(){if(y(pb.name_))return pb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<
	d;++b)if(c=Oa[b],a=X.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Rb,Na=3,fe={full:"1.4.8",major:1,minor:4,dot:8,codeName:"ice-manipulation"};N.expando="ng339";var gb=N.cache={},Ff=1;N._data=function(a){return this.cache[a[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=G("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,
	Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Kf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
	16)},Pa=N.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),N(S).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:mg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[F(a)]=a});var Rc={};n("input select option textarea button form details".split(" "),
	function(a){Rc[a]=!0});var Zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:vb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1}},function(a,b){N[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return B.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Oc,injector:function(a){return Bb(a,
	"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=F(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||x).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
	text:function(){function a(a,d){if(q(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(q(b)){if(a.multiple&&"select"===ta(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(q(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Pc},function(a,b){N.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Pc&&q(2==a.length&&a!==yb&&a!==Oc?
	b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=q(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:vb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Kc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Hf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
	b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Jf),h(b,u,!0)):h(b)}},off:Nc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);n(new N(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
	a.nodeType;if(1===d||11===d){b=new N(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new N(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=B(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new N(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
	toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;q(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
	stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:f,target:a},b.type&&(c=M(c,b)),b=ia(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){N.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)q(f)?(f=a(this[g],b,c,e),y(f)&&(f=B(f))):Mc(f,a(this[g],b,c,e));return y(f)?f:this};N.prototype.bind=N.prototype.on;
	N.prototype.unbind=N.prototype.off});Sa.prototype={put:function(a,b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var yf=[function(){this.$get=[function(){return Sa}]}],Tc=/^[^\(]*\(\s*([^\)]*)\)/m,ng=/,/,og=/^\s*(_?)(\S+?)\1\s*$/,Sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=G("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&
	d||(d=a.name||Lf(a)),Da("strictdi",d);b=a.toString().replace(Sc,"");b=b.match(Tc);n(b[1].split(ng),function(a){a.replace(og,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Md=G("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Te=function(){var a=
	new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Mf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:x,on:x,off:x,pin:x,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
	k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Re=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
	a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
	f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ea(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ea(h))},leave:function(b,c){return a.push(b,"leave",Ea(c),function(){b.remove()})},addClass:function(b,c,g){g=Ea(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ea(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ea(h);h.addClass=hb(h.addClass,
	c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ea(k);k.from=k.from?M(k.from,c):c;k.to=k.to?M(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
	b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
	null);var g,h=new d;return{start:f,end:f}}}]},ha=G("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Qf=G("$controller"),Uc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},$c="application/json",ac={"Content-Type":$c+";charset=utf-8"},Sf=/^\[|^\{(?!\{)/,Tf={"[":/]$/,"{":/}$/},Rf=/^\)\]\}',?\n/,pg=G("$http"),dd=function(a){return function(){throw pg("legacy",
	a);}},Ja=fa.$interpolateMinErr=G("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var qg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Vf={http:80,https:443,ftp:21},Db=G("$location"),rg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(q(a))return this.$$url;var b=qg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Eb("$$protocol"),
	host:Eb("$$host"),port:Eb("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(H(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Db("isrcharg");break;default:q(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:id("$$hash",function(a){return null!==
	a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([hd,dc,cc],function(a){a.prototype=Object.create(rg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Db("nostate");this.$$state=q(b)?null:b;return this}});var ba=G("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,Yf=Function.prototype.bind,Lb=$();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var sg={n:"\n",f:"\f",r:"\r",
	t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
	else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
	"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
	if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
	text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=sg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
	value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal=
	"Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,
	body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
	(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,
	operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,
	left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
	this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),
	arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
	a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},
	throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
	var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:u},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
	body:[],own:{}},inputs:[]};W(c,d.$filter);var e="",f;this.stage="assign";if(f=pd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=nd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
	'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,xa,kd,jd,ld,Zf,md,a);this.state=this.stage=u;e.literal=qd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
	"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
	d,c,e,f){var g,h,k=this,l,m;c=c||x;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
	0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
	b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
	a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
	h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
	function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
	function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!od(a.left))throw ba("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
	m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
	this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
	"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
	addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
	a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
	typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;W(c,d.$filter);var e,f;if(e=pd(c))f=this.recurse(e);e=nd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
	e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=qd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
	e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
	f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var r=[],n=0;n<g.length;++n)r.push(g[n](a,c,d,f));a=e.apply(u,r,f);return b?{context:u,name:u,value:a}:a}:function(a,
	c,d,m){var r=e(a,c,d,m),n;if(null!=r.value){xa(r.context,f.expression);kd(r.value,f.expression);n=[];for(var q=0;q<g.length;++q)n.push(xa(g[q](a,c,d,m),f.expression));n=xa(r.value.apply(r.context,n),f.expression)}return b?{value:n}:n};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);xa(n.value,f.expression);ld(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
	function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
	b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=md(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
	b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
	d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
	e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
	g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&xa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=jd(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],xa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Fb(b))&&xa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
	b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,b):new rd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};$();$();var $f=Object.prototype.valueOf,ya=G("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),Y=X.createElement("a"),wd=wa(S.location.href);
	xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var ic=".",jg={yyyy:ca("FullYear",4),yy:ca("FullYear",2,0,!0),y:ca("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,b){return 12>
	a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ig=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,hg=/^\-?\d+$/;zd.$inject=["$locale"];var eg=na(F),fg=na(sb);Bd.$inject=["$parse"];var he=na({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
	b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===sa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});n(Zc,function(a,b){tb[b]=function(){return{priority:100,link:function(a,
	c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(lg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=va("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
	var Ib={$addControl:x,$$renameControl:function(a,b){a.$name=b},$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x,$setSubmitted:x};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||x}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Fd,compile:function(d,f){d.addClass(Wa).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":
	!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):x;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,u),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
	s(a,u);M(n,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),kg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,tg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,ug=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,vg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,
	Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,b){if(da(a))return a;if(E(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Dd(c),e=7*(e-1);b&&(d=b.getHours(),f=
	b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hd(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:vg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
	q(g)||a>=g};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||q(h)||a<=h};d.$observe("max",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||tg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);
	c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||ug.test(d)}},radio:function(a,b,d,c){q(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Id(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Id(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
	a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:x,button:x,submit:x,reset:x,file:x},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Sd[F(g.type)]||Sd.text)(e,f,g,h[0],b,a,d,c)}}}}],wg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,
	b){return wg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=q(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
	b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=q(a)?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Me=na({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
	qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=La({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},xg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
	d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
	rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var s=0,v,u,p,C=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
	b()},u=++s;f?(a(f,!0).then(function(a){if(u===s){var b=c.$new();n.template=a;a=q(b,function(a){C();d.enter(a,null,e).then(m)});v=b;p=a;v.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){u===s&&(C(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(C(),n.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,X).childNodes)(b,function(a){d.append(a)},
	{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],ze=La({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!q(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){return I(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
	!a.length}}}},mb="ng-valid",Jd="ng-invalid",Wa="ng-pristine",Jb="ng-dirty",Ld="ng-pending",lb=G("ngModel"),yg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
	this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Ib;var m=e(d.ngModel),r=m.assign,t=m,s=r,v=null,B,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");t=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!m.assign)throw lb("nonassign",d.ngModel,ua(c));};this.$render=x;this.$isEmpty=
	function(a){return q(a)||""===a||null===a||a!==a};var C=0;Gd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,Jb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=
	!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=
	!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw lb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},x):g(!0)}function f(a,b){h===C&&p.$setValidity(a,b)}function g(a){h===C&&c(a)}C++;var h=C;(function(){var a=p.$$parserName||"parse";if(q(B))f(a,
	null);else return B||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(B=q(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),
	q(b)){B=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=t(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=
	a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=t(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;B=u;for(var c=p.$formatters,
	d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,x))}return b})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:yg,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,
	a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],zg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?
	(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(zg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=La({terminal:!0,priority:1E3}),Ag=G("ngOptions"),Bg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,
	b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&za(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Bg);if(!m)throw Ag("iexp",a,ua(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];c=b(m[2]?m[1]:n);var v=a&&b(a)||c,u=s&&b(s),p=s?function(a,b){return u(d,b)}:function(a){return Ca(a)},C=function(a,b){return p(a,z(a,b))},w=b(m[2]||
	m[1]),y=b(m[3]||""),B=b(m[4]||""),x=b(m[8]),D={},z=q?function(a,b){D[q]=b;D[n]=a;return D}:function(a){D[n]=a;return D};return{trackBy:s,getTrackByValue:C,getWatchables:b(x,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=z(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=B(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=x(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],r=z(c[n],n),q=v(d,r),n=p(q,r),t=w(d,
	r),u=y(d,r),r=B(d,r),q=new e(n,q,t,u,r);a.push(q);b[n]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[C(a)]},getViewValueFromOption:function(a){return s?fa.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=x},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
	b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&F(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function r(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=z&&z[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function s(){var a=D&&u.readValue();D=E.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);D.items.forEach(function(a){var f,h;a.group?
	(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){r(b[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var f=u.readValue();(E.trackBy?ma(a,f):a===f)||(v.$setViewValue(f),v.$render())}}var v=k[1];if(v){var u=k[0];k=
	h.multiple;for(var p,C=0,w=g.children(),y=w.length;C<y;C++)if(""===w[C].value){p=w.eq(C);break}var x=!!p,z=B(c.cloneNode(!1));z.val("?");var D,E=d(h.ngOptions,g,b);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=D.selectValueMap[a])&&!a.disabled&&b.push(D.getViewValueFromOption(a))});
	return b},E.trackBy&&b.$watchCollection(function(){if(I(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var b=D.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(z.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(z.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(z),
	g.val("?"),z.prop("selected",!0),z.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),z.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&b.$watch(function(){return E.getTrackByValue(v.$viewValue)},function(){v.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=B(c.cloneNode(!1));s();b.$watchCollection(E.getWatchables,s)}}}}}],Be=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
	g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,s=f.$eval(m)||{},u={},v=b.startSymbol(),y=b.endSymbol(),p=v+l+"-"+r+y,C=fa.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+F(c[2]),s[c]=g.attr(h.$attr[b]))});n(s,function(a,d){u[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-r));c===w||e&&Q(w)&&isNaN(w)||(C(),e=u[c],q(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
	m),C=x,k()):C=f.$watch(e,k),w=c)})}}}],Ce=["$parse","$animate",function(a,b){var d=G("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
	if(!k)throw d("iexp",g);var l=k[1],m=k[2],r=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var s=k[3]||k[1],v=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var x,p,y,w,z={$id:Ca};q?x=a(q):(y=function(a,b){return Ca(b)},w=function(a){return a});return function(a,e,f,k,l){x&&(p=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=
	d;return x(a,z)});var q=$();a.$watchCollection(m,function(f){var k,m,t=e[0],x,z=$(),D,E,H,F,I,G,J;r&&(a[r]=f);if(za(f))I=f,m=p||y;else for(J in m=p||w,I=[],f)qa.call(f,J)&&"$"!==J.charAt(0)&&I.push(J);D=I.length;J=Array(D);for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],F=m(E,H,k),q[F])G=q[F],delete q[F],z[F]=G,J[k]=G;else{if(z[F])throw n(J,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,H);J[k]={id:F,scope:u,clone:u};z[F]=!0}for(x in q){G=q[x];F=rb(G.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
	m;k++)F[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],G=J[k],G.scope){x=t;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);G.clone[0]!=x&&b.move(rb(G.clone),null,B(t));t=G.clone[G.clone.length-1];c(G.scope,k,s,H,v,E,D)}else l(function(a,d){G.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,B(t));t=e;G.clone=a;z[G.id]=G;c(G.scope,k,s,H,v,E,D)});q=z})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
	"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=La(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
	d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var q=rb(g[c].clone);k[c].$destroy();(h[c]=a.leave(q)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
	Ge=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),He=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Je=La({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw G("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
	b.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Cg={$setViewValue:x,$render:x},Dg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Sa;c.ngModelCtrl=Cg;c.unknownOption=B(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=x});c.removeUnknownOption=
	function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Ra(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=
	!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],ke=function(){return{restrict:"E",
	require:["select","?ngModel"],controller:Dg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==
	e.$viewValue||ma(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],le=na({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",
	require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
	q(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};S.angular.bootstrap?
	console.log("WARNING: Tried to load angular more than once."):(ce(),ee(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
	SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",
	negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(X).ready(function(){Zd(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.15
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:  surroundPattern = ['?(', ')?']; break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
	    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    var param = this.params[paramName];
	    var paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    string: {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    int: {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    bool: {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    date: {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    json: {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    any: { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);
	      return config.type instanceof Type ? config.type : new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
	  function $get(   $location,   $rootScope,   $injector,   $browser) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = extend({}, state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});

	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Re-add the saved hash before we start returning things
	        if (hash) toParams['#'] = hash;

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .value('$stateParams', {})
	  .provider('$state', $StateProvider);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        if (result && options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */
	          $rootScope.$broadcast('$viewContentLoading', options);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          var promise = $animate.enter(element, null, target, cb);
	          if (promise && promise.then) promise.then(cb);
	        },
	        leave: function(element, cb) {
	          var promise = $animate.leave(element, cb);
	          if (promise && promise.then) promise.then(cb);
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope);

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });
	        scope.$on('$viewContentLoading', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            renderer.leave(currentEl, function() {
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          var clone = $transclude(newScope, function(clone) {
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */
	          currentScope.$emit('$viewContentLoaded');
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	          }
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var inherited = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];

	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref = parseStateRef(attrs.uiSref, $state.current.name);
	      var params = null, url = null, base = stateContext(element) || $state.$current;
	      // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	      var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ?
	                 'xlink:href' : 'href';
	      var newHref = null, isAnchor = element.prop("tagName").toUpperCase() === "A";
	      var isForm = element[0].nodeName === "FORM";
	      var attr = isForm ? "action" : hrefKind, nav = true;

	      var options = { relative: base, inherit: true };
	      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

	      angular.forEach(allowedOptions, function(option) {
	        if (option in optionsOverride) {
	          options[option] = optionsOverride[option];
	        }
	      });

	      var update = function(newVal) {
	        if (newVal) params = angular.copy(newVal);
	        if (!nav) return;

	        newHref = $state.href(ref.state, params, options);

	        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
	        if (activeDirective) {
	          activeDirective.$$addStateInfo(ref.state, params);
	        }
	        if (newHref === null) {
	          nav = false;
	          return false;
	        }
	        attrs.$set(attr, newHref);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
	          if (newVal !== params) update(newVal);
	        }, true);
	        params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (isForm) return;

	      element.bind("click", function(e) {
	        var button = e.which || e.button;
	        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
	          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	          var transition = $timeout(function() {
	            $state.go(ref.state, params, options);
	          });
	          e.preventDefault();

	          // if the state has no URL, ignore one preventDefault from the <a> directive.
	          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
	          e.preventDefault = function() {
	            if (ignorePreventDefaultCount-- <= 0)
	              $timeout.cancel(transition);
	          };
	        }
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	      var states = [], activeClass;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        var state = $state.get(newState, stateContext($element));

	        states.push({
	          state: state || { name: newState },
	          params: newParams
	        });

	        update();
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      // Update route state
	      function update() {
	        if (anyMatch()) {
	          $element.addClass(activeClass);
	        } else {
	          $element.removeClass(activeClass);
	        }
	      }

	      function anyMatch() {
	        for (var i = 0; i < states.length; i++) {
	          if (isMatch(states[i].state, states[i].params)) {
	            return true;
	          }
	        }
	        return false;
	      }

	      function isMatch(state, params) {
	        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
	          return $state.is(state.name, params);
	        } else {
	          return $state.includes(state.name, params);
	        }
	      }
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state) {
	    return $state.is(state);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state) {
	    return $state.includes(state);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var Jentoo = __webpack_require__(5);

	var componentModule = angular.module('app.components', [
	   Jentoo.name
	]);

	module.exports = componentModule;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);
	var jentooComponent = __webpack_require__(6);

	var jentooModule = angular.module('jentoo', [])
	   .config(function ($stateProvider, $urlRouterProvider) {

	      //$urlRouterProvider.otherwise('/');

	      $stateProvider
	         .state('jentoo', {
	            url: '/jentoo',
	            template: '<jentoo></jentoo>'
	         });
	   })

	.directive('jentoo', jentooComponent);

	module.exports = jentooModule;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var template = __webpack_require__(7);
	var controller = __webpack_require__(9);
	__webpack_require__(10);

	var jentooComponent = function () {
	  return {
	    restrict: 'E',
	    scope: {},
	    template: template,
	    controller: controller,
	    controllerAs: 'jentooCtrl',
	    bindToController: true
	  };
	};

	module.exports = jentooComponent;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"jero\">\n  <h1>{{ jentooCtrl.name }}</h1>\n   <img src=\"" + __webpack_require__(8) + "\" alt=\"\">\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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CQSQQQCAACQAAQQQQASSQQCQQASQCQQAQCADCCCCSQCCCSaACSCQSCACSCCQCQQQQQASACSACSKAAQSQSSSQACBCIASQCSACQSSAACRACCLCACCAQAQSACASCSSABQCSQQQCAyCAACQAQAAQSSASACQAQKaASSSCASCQACCCAASCQQSAQCQAQCASSQSSSCCSCCCQSCCYBCAIaAASAQCCCACTRICAQQSQSAASACSCSCSACQQSAASCSSTSYCLQACSQSCQCCyQSSAQCCbCCQASAAAACSQCSSQSCAASCCSSQAQCCQbACQCSCAAZTSABAAAAACAQSSCSQQSTQASIQCSQCACARSaCQCBCZCAQCQmWSQSDJISaSCAAACQBCQKQSQSAAASIAACSQSSSSSCQCACCASSRSCYaQQCASQAQAAAQAAQTAACCQQQCQSADJCKBSQACAQCQAQQSAQAZKCZKSSSSSCCAAAQQQACCCQCSSCAAABbZQSSCAASAACCCYCSSCCAAAaSQAQQQCTSJCCQQCQCSQSSASQAQAQCYSCQSQSSSCRQQCCCCSCCSSCCBCCCAQQACQAAASQAQSQQCAQQAQQCCQSCBYICAQCCQQDSQQQASCCASQAASCQQCSCACCCTSACCLQACCLYCSCQQSAASSCSSASASSQQQCQSQDSASARQQASCQSSCSSACCSAAACAQAQAQCZSASSSSASQQAQSAQCAQAQSQQCSSQCQCAAQBZCQCCSASSQCSACSACQQSAAAAABRACSAYSCSICQCQSAASASSQCSQQASCACSQQABQKASAICSCCCQAQCAASCQAQQACSAQQSSDCaATKCACQSQSCQSQSSSAQCSAQQCCSbQTRISCBACSSASSCQAQCASQQQACATSKCQCIQCQbAICACSSSQCASQQSQAACQQACCCQSASSARSKQCSAQQASQQASCSAASQAaACAACAQQSABSSSSSAQACSACCQSSCAQQRRYCbaISSQJTQSQQQSASQAQSSSQSCAAyUSSDCQASCACQQAAASSSACSACACSQQQSQAASSQQQQACSSSASCSSSSCQAQASCQASASASCSQCCSCQAQCACAAQSSCSASCSQSQSCQUQSSCQASSQCCCSCQQASCASSASAQSQQACACCQACAQAQSQQCAAQAACQQCACQCSCSQAAASSSSASQSSQCCCASQCAQQCS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"

/***/ },
/* 9 */
/***/ function(module, exports) {

	function JentooController() {
	   this.name = 'Jentoo';
	}

	module.exports = JentooController;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./jentoo.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./jentoo.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".jentoo {\n  color: #f00;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var template = __webpack_require__(15);
	__webpack_require__(16);

	var appComponent = function() {
	   return {
	      template: template,
	      restrict: 'E'
	   };
	};

	module.exports = appComponent;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"site-wrapper\">\n\n   <div class=\"site-wrapper-inner\">\n\n      <div class=\"cover-container\">\n\n         <div class=\"masthead clearfix\">\n            <div class=\"inner\">\n               <nav>\n                  <ul class=\"nav masthead-nav\">\n                     <li class=\"active\"><a href=\"#\">Home</a></li>\n                     <li><a ui-sref=\"jentoo\">Jentoo</a></li>\n                     <li><a href=\"#\">Contact</a></li>\n                  </ul>\n               </nav>\n            </div>\n         </div>\n\n         <div class=\"inner cover\">\n            <ui-view></ui-view>\n         </div>\n\n      </div>\n\n   </div>\n\n</div>";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }
/******/ ]);