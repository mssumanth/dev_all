(function(){var n=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}},q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,f){if(a==Array.prototype||a==Object.prototype)return a;a[c]=f.value;return a},t=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object");
},u=t(this),v=function(a,c){if(c)a:{var f=u;a=a.split(".");for(var g=0;g<a.length-1;g++){var e=a[g];if(!(e in f))break a;f=f[e]}a=a[a.length-1];g=f[a];c=c(g);c!=g&&null!=c&&q(f,a,{configurable:!0,writable:!0,value:c})}},z=function(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(c)return c.call(a);if("number"==typeof a.length)return{next:n(a)};throw Error(String(a)+" is not an iterable or ArrayLike");};
v("Promise",function(a){function c(){this.g=null}function f(b){return b instanceof e?b:new e(function(d){d(b)})}if(a)return a;c.prototype.u=function(b){if(null==this.g){this.g=[];var d=this;this.v(function(){d.M()})}this.g.push(b)};var g=u.setTimeout;c.prototype.v=function(b){g(b,0)};c.prototype.M=function(){for(;this.g&&this.g.length;){var b=this.g;this.g=[];for(var d=0;d<b.length;++d){var h=b[d];b[d]=null;try{h()}catch(k){this.L(k)}}}this.g=null};c.prototype.L=function(b){this.v(function(){throw b;
})};var e=function(b){this.i=0;this.j=void 0;this.h=[];this.F=!1;var d=this.o();try{b(d.resolve,d.reject)}catch(h){d.reject(h)}};e.prototype.o=function(){function b(k){return function(l){h||(h=!0,k.call(d,l))}}var d=this,h=!1;return{resolve:b(this.V),reject:b(this.s)}};e.prototype.V=function(b){if(b===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof e)this.X(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;break a;default:d=!1}d?
this.U(b):this.D(b)}};e.prototype.U=function(b){var d=void 0;try{d=b.then}catch(h){this.s(h);return}"function"==typeof d?this.Y(d,b):this.D(b)};e.prototype.s=function(b){this.I(2,b)};e.prototype.D=function(b){this.I(1,b)};e.prototype.I=function(b,d){if(0!=this.i)throw Error("Cannot settle("+b+", "+d+"): Promise already settled in state"+this.i);this.i=b;this.j=d;2===this.i&&this.W();this.N()};e.prototype.W=function(){var b=this;g(function(){if(b.O()){var d=u.console;"undefined"!==typeof d&&d.error(b.j)}},
1)};e.prototype.O=function(){if(this.F)return!1;var b=u.CustomEvent,d=u.Event,h=u.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof b?b=new b("unhandledrejection",{cancelable:!0}):"function"===typeof d?b=new d("unhandledrejection",{cancelable:!0}):(b=u.document.createEvent("CustomEvent"),b.initCustomEvent("unhandledrejection",!1,!0,b));b.promise=this;b.reason=this.j;return h(b)};e.prototype.N=function(){if(null!=this.h){for(var b=0;b<this.h.length;++b)r.u(this.h[b]);this.h=null}};
var r=new c;e.prototype.X=function(b){var d=this.o();b.l(d.resolve,d.reject)};e.prototype.Y=function(b,d){var h=this.o();try{b.call(d,h.resolve,h.reject)}catch(k){h.reject(k)}};e.prototype.then=function(b,d){function h(m,p){return"function"==typeof m?function(w){try{k(m(w))}catch(x){l(x)}}:p}var k,l,y=new e(function(m,p){k=m;l=p});this.l(h(b,k),h(d,l));return y};e.prototype.catch=function(b){return this.then(void 0,b)};e.prototype.l=function(b,d){function h(){switch(k.i){case 1:b(k.j);break;case 2:d(k.j);
break;default:throw Error("Unexpected state: "+k.i);}}var k=this;null==this.h?r.u(h):this.h.push(h);this.F=!0};e.resolve=f;e.reject=function(b){return new e(function(d,h){h(b)})};e.race=function(b){return new e(function(d,h){for(var k=z(b),l=k.next();!l.done;l=k.next())f(l.value).l(d,h)})};e.all=function(b){var d=z(b),h=d.next();return h.done?f([]):new e(function(k,l){function y(w){return function(x){m[w]=x;p--;0==p&&k(m)}}var m=[],p=0;do m.push(void 0),p++,f(h.value).l(y(m.length-1),l),h=d.next();
while(!h.done)})};return e});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var A=this||self,B=function(a,c){a=a.split(".");var f=A;a[0]in f||"undefined"==typeof f.execScript||f.execScript("var "+a[0]);for(var g;a.length&&(g=a.shift());)a.length||void 0===c?f=f[g]&&f[g]!==Object.prototype[g]?f[g]:f[g]={}:f[g]=c},C=function(a,c){function f(){}f.prototype=c.prototype;a.ca=c.prototype;a.prototype=new f;a.prototype.constructor=a;a.ba=function(g,e,r){for(var b=Array(arguments.length-2),d=2;d<arguments.length;d++)b[d-2]=arguments[d];return c.prototype[e].apply(g,b)}},D=function(a){return a};function E(a,c){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var f=Error().stack;f&&(this.stack=f)}a&&(this.message=String(a));void 0!==c&&(this.cause=c)}C(E,Error);E.prototype.name="CustomError";function F(a,c){a=a.split("%s");for(var f="",g=a.length-1,e=0;e<g;e++)f+=a[e]+(e<c.length?c[e]:"%s");E.call(this,f+a[g])}C(F,E);F.prototype.name="AssertionError";var G=function(a,c){throw new F("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var H;var K=function(a,c){this.J=a===I&&c||"";this.K=J};K.prototype.toString=function(){return this.J};var J={},I={};var M=function(a,c){if(c!==L)throw Error("TrustedResourceUrl is not meant to be built directly");this.H=a};M.prototype.toString=function(){return this.H+""};var L={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var N={};var O=function(a){if(N!==N)throw Error("Bad secret");this.T=a};O.prototype.toString=function(){return this.T};new O("about:blank");new O("about:invalid#zClosurez");var P=[],Q=function(a){console.warn("A URL with content '"+a+"' was sanitized away.")};-1===P.indexOf(Q)&&P.push(Q);var R={},S=function(){if(R!==R)throw Error("SafeStyle is not meant to be built directly");this.S=""};S.prototype.toString=function(){return this.S.toString()};new S;var T={},U=function(){if(T!==T)throw Error("SafeStyleSheet is not meant to be built directly");this.R=""};U.prototype.toString=function(){return this.R.toString()};new U;var V={},W=function(){var a=A.trustedTypes&&A.trustedTypes.emptyHTML||"";if(V!==V)throw Error("SafeHtml is not meant to be built directly");this.P=a};W.prototype.toString=function(){return this.P.toString()};new W;function aa(a,c){if(c instanceof M&&c.constructor===M)c=c.H;else{var f=typeof c;G("expected object of type TrustedResourceUrl, got '%s' of type %s",c,"object"!=f?f:c?Array.isArray(c)?"array":f:"null");c="type_error:TrustedResourceUrl"}a.src=c;var g,e;(g=(c=null==(e=(g=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:e.call(g,"script[nonce]"))?c.nonce||c.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",g)};var X=function(a){var c;this.aa=c=void 0===c?window:c;a instanceof K&&a.constructor===K&&a.K===J?a=a.J:(G("expected object of type Const, got '"+a+"'"),a="type_error:Const");if(void 0===H){c=null;var f=A.trustedTypes;if(f&&f.createPolicy)try{c=f.createPolicy("goog#html",{createHTML:D,createScript:D,createScriptURL:D})}catch(g){A.console&&A.console.error(g.message)}H=c}a=(c=H)?c.createScriptURL(a):a;this.Z=new M(a,L);this.A=[];this.B=[];this.G=this.C=!1},Y=function(a){a.m.onload=function(){};a.m.onerror=
function(){};a.m.onreadystatechange=function(){}},ba=function(a){var c=a.aa.document,f=c.head||c.documentElement,g=c.createElement("script");a.m=g;g.async=!0;g.defer=!0;aa(g,a.Z);g.onload=g.onreadystatechange=function(){g.readyState&&"loaded"!=g.readyState&&"complete"!=g.readyState||(a.G=!0,Y(a),a.A.forEach(function(e){return e()}))};g.onerror=function(){a.C=!0;Y(a);a.B.forEach(function(e){return e()})};f.appendChild(g)};
X.prototype.load=function(a,c){this.G?a():this.A.push(a);this.C?c():this.B.push(c);this.m||ba(this)};function Z(a,c){var f=new X(a);B(c,function(g,e){g=void 0===g?function(){}:g;e=void 0===e?function(){}:e;return new Promise(function(r,b){f.load(function(){r();g()},function(){b();e()})})})}Z(new K(I,"https://www.gstatic.com/devops/connect/releases/devops-learning-tool-library_20240415_00_RC00/cloudshell/cloudshell.js"),"google.devops.tools.loadCloudShell");Z(new K(I,"https://www.gstatic.com/devops/connect/releases/devops-learning-tool-library_20240415_00_RC00/walkthrough/walkthrough.js"),"google.devops.tools.loadWalkthrough");}).call(this);