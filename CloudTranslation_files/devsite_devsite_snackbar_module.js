(function(_ds){var window=this;var qAa=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="loading" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Loading</div><div class="devsite-snackbar-action"><devsite-spinner single-color="#ffffff"></devsite-spinner></div></div></div>')},rAa=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="signin-state-changed" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Your signed in state has changed.</div><button class="devsite-snackbar-action devsite-snackbar-action--reload">Reload</button><button class="devsite-snackbar-action devsite-snackbar-action--dismiss">OK</button></div></div>')},
sAa=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="refresh" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">A new version is available</div><button class="devsite-snackbar-action">Refresh</button></div></div>')},tAa=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Something went wrong. Please try again.</div><button class="devsite-snackbar-action">Retry</button></div></div>')},
uAa=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="copied-to-clipboard" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Copied to clipboard</div></div></div>')},vAa=function(a){a=a||{};a=a.uA;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Google uses cookies to deliver its services, to personalize ads, and to analyze traffic. You can adjust your privacy controls anytime in your <a href="//myaccount.google.com/intro/data-and-personalization">Google settings</a>.</div><a href="'+
((a?_ds.V(_ds.W(a)):"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.T)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},g8=function(a){a=a||{};a=a.uA;a='<div class="devsite-snackbar-snack" type="cookie-notification" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">This site uses cookies from Google to deliver its services and to analyze traffic.</div><a href="'+((a?_ds.V(_ds.W(a)):
"//policies.google.com/technologies/cookies")+'" class="devsite-snackbar-link button">');return(0,_ds.T)(a+'More details</a><button class="devsite-snackbar-action">OK</button></div></div>')},wAa=function(){return(0,_ds.T)('<div class="devsite-snackbar-snack" type="support-attachment-error" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">Unsupported file type.</div><button class="devsite-snackbar-action">OK</button></div></div>')},xAa=function(a){const b=a.message,
c=a.link,d=a.GK;a='<div class="devsite-snackbar-snack" type="'+_ds.V(a.hN)+'" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+_ds.U(b)+'</div><button class="devsite-snackbar-action">';a=a+'No, thanks</button><a href="'+(_ds.V(_ds.W(c))+'" class="devsite-snackbar-link button" target="_blank">');a=d?a+_ds.U(d):a+"OK";return(0,_ds.T)(a+"</a></div></div>")},yAa=function(a){const b=a.linkText,c=a.link,d=a.Df,e=a.showClose;a='<div class="devsite-snackbar-snack" type="custom" role="alert"><div class="devsite-snackbar-inner"><div class="devsite-snackbar-message">'+
_ds.U(a.message)+"</div>";e&&(a+='<button class="devsite-snackbar-action">OK</button>');a+=(c&&b?'<a href="'+_ds.V(_ds.W(c))+'"'+(d?' target="_blank"':"")+' class="devsite-snackbar-link button">'+_ds.U(b)+"</a>":"")+"</div></div>";return(0,_ds.T)(a)};var j8=function(a,b,c=null,d=!1){b&&(_ds.ni(b,_ds.Yh,()=>{_ds.Sk(b);a.h=null;if(c)h8(a,c,d);else{const e=a.g.length?a.g.shift():null;null!==e&&i8(a,e)}}),b.removeAttribute("show"))},k8=function(a,b,c=!1){a.appendChild(b);requestAnimationFrame(()=>{h8(a,b,c)})},l8=function(a){j8(a,a.querySelector('*[type^="cookie-notification"]'))},m8=function(a){j8(a,a.querySelector('*[type^="support-attachment-error"]'))},n8=function(a){j8(a,a.querySelector('*[type^="signin-state-changed"]'))},i8=function(a,b){switch(b){case "loading":a.showLoading();
break;case "refresh":zAa(a);break;case "error":a.showError();break;case "copied-to-clipboard":var c=_ds.N(uAa);k8(a,c,!0);break;case "cookie-notification":AAa(a);break;case "support-attachment-error":BAa(a);break;case "signin-state-changed":CAa(a)}if(null==b?0:b.startsWith("notification-")){c=a.getAttribute(`${b}-message`);const d=a.getAttribute(`${b}-link`),e=a.getAttribute(`${b}-link-txt`);o8(a,b,c||"",d||"",e||"",a.hasAttribute(`${b}-store-key`))}},zAa=function(a){const b=_ds.N(sAa);_ds.oi(b.querySelector(".devsite-snackbar-action"),
"click",()=>{_ds.Kk().location.reload()});k8(a,b)},AAa=async function(a){const b=await _ds.t();var c=_ds.Fh(b.getConfig(),30,0);c=4===c||3===c;var d=await b.hasMendelFlagAccess("Analytics","enable_cookie_bar");const e=await b.hasMendelFlagAccess("Analytics","open_cookie_bar");if(!(d&&c||e))if(await b.getStorage().get("devsite-eu-cookie",""))c=a.g.length?a.g.shift():null,null!==c&&i8(a,c);else{c=g8;if(a.hasAttribute("data-cookie-notice"))switch(Number(a.getAttribute("data-cookie-notice"))){case 2:case 4:c=
vAa;break;default:c=g8}a.hasAttribute("data-cookie-policy")?(d=a.getAttribute("data-cookie-policy"),c=_ds.N(c,{uA:d})):c=_ds.N(c);_ds.ni(c.querySelector(".devsite-snackbar-action"),"click",async()=>{await b.getStorage().set("devsite-eu-cookie","","1");l8(a)});k8(a,c)}},BAa=function(a){const b=_ds.N(wAa);k8(a,b);_ds.ni(b.querySelector(".devsite-snackbar-action"),"click",()=>{m8(a)})},CAa=function(a){n8(a);const b=_ds.N(rAa);k8(a,b,!1);_ds.oi(b.querySelector(".devsite-snackbar-action--reload"),"click",
async()=>{await (await _ds.t()).reload();n8(a)});_ds.oi(b.querySelector(".devsite-snackbar-action--dismiss"),"click",async()=>{await (await _ds.t()).reload();n8(a)})},h8=function(a,b,c=!1){clearTimeout(a.v);a.h?j8(a,a.h,b,c):(a.h=b,requestAnimationFrame(()=>{b.setAttribute("show","")}),c&&(a.v=setTimeout(()=>{a.removeAttribute("type");j8(a,b)},5E3)))},o8=async function(a,b,c,d,e,f){if(c&&d){const g=await (await _ds.t()).getStorage().get("devsite-snackbar",d);if(!f||!g){b=_ds.N(xAa,{hN:b,message:c,
link:d,GK:e});k8(a,b);const h=new _ds.F(b);h.listen(b,"click",async k=>{k.stopPropagation();if(k.target.classList.contains("devsite-snackbar-link")||k.target.classList.contains("devsite-snackbar-action"))await (await _ds.t()).getStorage().set("devsite-snackbar",d,"1"),a.j(),_ds.H(h)})}}},p8=class extends _ds.C{static get observedAttributes(){return["type"]}constructor(){super();this.g=[];this.v=-1;this.h=null;this.eventHandler=new _ds.F(this)}connectedCallback(){this.eventHandler.listen(document.body,
"devsite-show-custom-snackbar-msg",this.ea);this.eventHandler.listen(document.body,"devsite-show-notification-snackbar-msg",this.oa);this.eventHandler.listen(document.body,"devsite-hide-notification-snackbar-msg",this.j)}disconnectedCallback(){_ds.H(this.eventHandler)}ea(a){this.setAttribute("type","custom");var b;if(a=null==(b=a.Ha)?void 0:b.detail){b=!!a.showClose;var c=!0;a.href&&(c=(new URL(a.href)).origin!==document.location.origin);var d=_ds.N(yAa,{message:a.msg,linkText:a.linkText,link:a.href,
Df:c,showClose:b});b&&_ds.ni(d.querySelector(".devsite-snackbar-action"),"click",()=>{j8(this,d)});k8(this,d,!b)}}attributeChangedCallback(a,b,c){if("type"===a){switch(b){case "loading":this.hideLoading();break;case "refresh":j8(this,this.querySelector('*[type^="refresh"]'));break;case "error":j8(this,this.querySelector('*[type^="error"]'));break;case "copied-to-clipboard":j8(this,this.querySelector('*[type^="copied-to-clipboard"]'));break;case "cookie-notification":l8(this);break;case "support-attachment-error":m8(this);
break;case "signin-state-changed":n8(this);break;case "custom":j8(this,this.querySelector('*[type^="custom"]'))}null!=b&&b.startsWith("notification-")&&this.j();if(c){let d;if(null==(d=c)?0:d.includes(",")){let e;this.g=null==(e=c)?void 0:e.split(",");c=`${this.g.shift()}`}i8(this,c)}}}showLoading(){if(!this.querySelector('*[type^="loading"]')){var a=_ds.N(qAa);k8(this,a)}}hideLoading(){j8(this,this.querySelector('*[type^="loading"]'))}showError(){const a=_ds.N(tAa);_ds.oi(a.querySelector(".devsite-snackbar-action"),
"click",()=>{_ds.Kk().location.reload()});k8(this,a)}oa(a){let b;(a=null==(b=a.Ha)?void 0:b.detail)&&o8(this,"notification-custom",a.msg,a.href||"",a.linkText||"",!0)}j(){j8(this,this.querySelector('*[type^="notification"]'))}};p8.prototype.attributeChangedCallback=p8.prototype.attributeChangedCallback;p8.prototype.disconnectedCallback=p8.prototype.disconnectedCallback;p8.prototype.connectedCallback=p8.prototype.connectedCallback;try{customElements.define("devsite-snackbar",p8)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSnackBar",a)};})(_ds_www);
