(function(_ds){var window=this;var Pva=function(a){let b=a,c;return function(){if(b){const d=b;b=void 0;c=d.apply(this,arguments)}return c}};var C5=function(a,b,c){return a.g.then(function(d){const e=d[b];if(!e)throw Error(`Method not found: ${b}`);return e.apply(d,c)})},Qva=class{constructor(a){this.g=a;a.then((0,_ds.Uf)(function(){},this),()=>{},this)}},Rva=function(a,b,c){const d=Array(arguments.length-2);for(var e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=D5(a,b).then(function(f){return f.apply(null,d)});return new Qva(e)},E5={},D5=function(a,b){var c=E5[b];if(c)return c;c=(c=_ds.Nf(b))?_ds.pn(c):(new _ds.ln(function(d,e){const f=
(new _ds.zk(document)).createElement("SCRIPT");f.async=!0;_ds.Ze(f,_ds.of(_ds.Ge(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){const d=_ds.Nf(b);if(!d)throw Error(`Failed to load ${b} from ${a}`);return d});return E5[b]=c};var Sva={GOOGLE:"https://www.google.com",NX:"https://support.google.com",SW:"https://play.google.com"},Tva=async function(a){for(const b of Object.values(Sva))"granted"!==(await navigator.permissions.query({name:"top-level-storage-access",requestedOrigin:b})).state&&a.g.push(b)};(new class{constructor(){this.g=[];this.h=[];this.j=Pva(async()=>{if("undefined"===typeof document||void 0===document.requestStorageAccessFor||void 0===navigator.permissions||void 0===navigator.permissions.query||location.hostname.match(".+\\.google\\.com$"))return Promise.resolve();await Tva(this);0<this.g.length&&document.addEventListener("click",this.m)});this.m=()=>{if(!(0<this.h.length)){for(const a of this.g)try{this.h.push(document.requestStorageAccessFor(a))}catch(b){}Promise.all(this.h).then(()=>
{}).catch(()=>{}).finally(()=>{this.reset()})}}}reset(){document.removeEventListener("click",this.m)}}).j();var Uva=class{constructor(a){this.g=a}j(a){C5(this.g,"requestSurvey",arguments).v(()=>{},this)}m(a){C5(this.g,"presentSurvey",arguments).v(()=>{},this)}h(a){C5(this.g,"dismissSurvey",arguments).v(()=>{},this)}},F5=_ds.Qi("https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");D5(F5,"help.service.Lazy.create").v(()=>{});var G5=function(){return"devsite-hats-survey"},K5=function(){if(H5){let a;null==(a=I5)||a.h({surveyMetadata:{sessionId:H5}});return J5.promise}return Promise.resolve()},Vva=async function(a){var b=await _ds.t();const c=_ds.x(b.getConfig(),18);var d=a.getAttribute("listnr-id");d?(b={locale:b.getLocale()||"en",apiKey:c},d=Rva(F5,"help.service.Lazy.create",d,{apiKey:b.apiKey||b.apiKey,asxUiUri:b.asxUiUri||b.asxUiUri,environment:b.environment||b.environment,frdProductData:b.frdProductData||b.frdProductData,
frdProductDataSerializedJspb:b.rZ||b.frdProductDataSerializedJspb,helpCenterPath:b.helpCenterPath||b.helpCenterPath,locale:b.locale||b.locale||"en".replace(/-/g,"_"),nonce:b.nonce||b.nonce,productData:b.productData||b.productData,receiverUri:b.receiverUri||b.receiverUri,renderApiUri:b.renderApiUri||b.renderApiUri,theme:b.theme||b.theme,window:b.window||b.window}),I5=new Uva(d),a.g=I5):console.warn('<devsite-hats-survey> missing attribute "listnr-id"')},Wva=function(a,b){let c;null==(c=a.g)||c.m({productData:{customData:{pageUrl:_ds.D().toString()}},
surveyData:b,colorScheme:1,authuser:0,customZIndex:1E4,listener:{surveyPrompted:d=>{H5=d.sessionId||null;J5=new _ds.Af;L5=J5.g},surveyClosed:()=>{H5=M5=null;L5()}}})},O5=class extends _ds.C{constructor(a){super();this.g=null;a&&(this.g=I5=a)}async connectedCallback(){M5=this;const a=this.getAttribute("hats-id");a&&a!==N5&&(await K5(),this.g||await Vva(this),N5=a,await this.Dn(a))}disconnectedCallback(){M5=null;_ds.Jn(Xva,document.body,"devsite-page-changed",()=>{M5||(K5(),N5=null)})}async Dn(a){await _ds.t();
let b;null==(b=this.g)||b.j({triggerId:a,callback:c=>{c.surveyData&&Wva(this,c.surveyData)},authuser:0,enableTestingMode:!1})}};O5.prototype.renderSurvey=O5.prototype.Dn;O5.prototype.disconnectedCallback=O5.prototype.disconnectedCallback;O5.prototype.connectedCallback=O5.prototype.connectedCallback;O5.closeCurrentSurvey=K5;O5.getTagName=G5;var N5=null,H5=null,M5=null,J5=new _ds.Af,L5=J5.g,Xva=new _ds.F,I5=void 0;try{customElements.define(G5(),O5)}catch(a){console.warn("devsite.app.customElement.DevsiteHatsSurvey",a)};})(_ds_www);
