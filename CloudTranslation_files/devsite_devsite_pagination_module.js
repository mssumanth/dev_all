(function(_ds){var window=this;var Jxa=function(a){const b=a.oe;a=a.maxPages;let c='<div class="devsite-pagination-page-numbers-controls">';b>a&&(c=c+'<button class="devsite-pagination-previous-button button-transparent material-icons" title="'+_ds.By("Previous page"),c+='" disabled></button>');c+='<div class="devsite-pagination-page-numbers"></div>';b>a&&(c=c+'<button class="devsite-pagination-next-button button-transparent material-icons" title="'+_ds.By("Next page"),c+='"></button>');return(0,_ds.T)(c+"</div>")},Kxa=function(a){const b=
a.Ub;let c="";a=a.HL;const d=a.length;for(let e=0;e<d;e++){const f=a[e];c+=0>f?'<span class="devsite-pagination-ellipsis">&hellip;</span>':'<a class="devsite-pagination-page-number" href="#" index='+_ds.Jy(f)+(f===b?" selected":"")+">"+_ds.U(f+1)+"</a>"}return(0,_ds.T)(c)};var Lxa={["default"]:function(){return(0,_ds.T)('<button class="button button-with-icon devsite-pagination-less-button" hidden><span class="material-icons" aria-hidden="true">expand_less</span>Less</button><button class="button button-with-icon devsite-pagination-more-button">More<span class="material-icons icon-after" aria-hidden="true">expand_more</span></button>')},filter:function(){return(0,_ds.T)('<button class="button button-with-icon devsite-pagination-less-button" hidden><span class="material-icons" aria-hidden="true">expand_less</span>Less</button><button class="button button-with-icon devsite-pagination-more-button"><span class="material-icons" aria-hidden="true">expand_more</span>More</button>')}},
V6=function(a){if(a.ea){a.g=Array.from(a.ea.querySelectorAll(a.Da));for(var b of a.g)b.removeAttribute("hidden");if(a.g.length>a.ud)if(a.oe=Math.ceil(a.g.length/a.h),a.hasAttribute("buttons")||a.hasAttribute("initial-results")?(b=_ds.Rq(Lxa[a.Ea]),a.appendChild(b),a.v=a.querySelector(".devsite-pagination-more-button"),a.j=a.querySelector(".devsite-pagination-less-button"),a.v&&a.j&&(a.Fa=!0,a.Ga=!1)):(b=_ds.Rq(Jxa,{oe:a.oe,maxPages:a.maxPages}),a.appendChild(b),a.oa=a.querySelector(".devsite-pagination-page-numbers"),
a.ra=a.querySelector(".devsite-pagination-next-button"),a.xa=a.querySelector(".devsite-pagination-previous-button"),a.oa&&(a.Fa=!0)),a.Fa){if(a.hasAttribute("buttons")&&a.hasAttribute("start-expanded"))a.j&&a.v&&(a.j.removeAttribute("hidden"),_ds.Hj(a,"hidden","",a.v));else{for(const c of a.g)_ds.Hj(a,"hidden","",c);U6(a,0)}Mxa(a)}else console.error("An error occurred: the expected clickable pagination elements were not found for devsite-pagination.")}else console.error("An error occurred: a container element was not found for devsite-pagination.")},
U6=function(a,b){a.Ja=a.Ub;a.Ub=b;if(a.Ga){if(a.oa){_ds.Pk(a.oa);b=[...Array.from({length:a.oe}).keys()];var c=Math.max(a.maxPages,7);a.oe>c&&(a.Ub<c-3?b.splice(c-2,a.oe-c+1,-1):a.Ub>a.oe-c+2?b.splice(1,a.oe-c+1,-1):(c=Math.floor((c-5)/2),b.splice(a.Ub+c+1,a.oe-a.Ub-c-2,-1),b.splice(1,a.Ub-c-1,-1)));b=_ds.Rq(Kxa,{HL:b,Ub:a.Ub});a.oa.appendChild(b);a.xa&&a.ra&&(a.xa.disabled=0===a.Ub?!0:!1,a.ra.disabled=a.Ub===a.oe-1?!0:!1)}b=a.Ja*a.h;for(c=b;c<b+a.h;c++)a.g[c]&&_ds.Hj(a,"hidden","",a.g[c])}b=0;c=
a.ud;a.Ub&&(b=a.Ub*a.h-(a.h-a.ud),c=a.h);for(let d=b;d<b+c;d++)a.g[d]&&a.g[d].removeAttribute("hidden")},Mxa=function(a){a.eventHandler.listen(a,"click",b=>{"devsite-pagination-page-number"===b.target.className&&(b.preventDefault(),b.stopPropagation(),U6(a,Number(b.target.getAttribute("index"))),a.dispatchEvent(new CustomEvent("devsite-pagination-new-page")),W6(a,"devsite-pagination-page-number"),a.hasAttribute("scroll-to-container")&&a.Kd());b.target===a.v&&(b.target.blur(),0===a.Ub&&(a.La=_ds.Jk(document).y,
a.Na=!0),U6(a,a.Ub+1),a.j&&a.j.removeAttribute("hidden"),a.v&&a.Ub*a.h+a.ud>=a.g.length&&_ds.Hj(a,"hidden","",a.v),a.dispatchEvent(new CustomEvent("devsite-pagination-new-page")),W6(a,"devsite-pagination-more-button"));if(b.target===a.j){b.target.blur();for(const c of a.g)_ds.Hj(a,"hidden","",c);U6(a,0);a.j&&_ds.Hj(a,"hidden","",a.j);a.v&&a.v.removeAttribute("hidden");a.Na?window.scrollTo(0,a.La):a.Kd();a.dispatchEvent(new CustomEvent("devsite-pagination-new-page"));W6(a,"devsite-pagination-less-button")}b.target===
a.ra&&(b.target.blur(),a.Ub<a.oe-1&&U6(a,a.Ub+1),a.dispatchEvent(new CustomEvent("devsite-pagination-new-page")),W6(a,"devsite-pagination-next-button"),a.hasAttribute("scroll-to-container")&&a.Kd());b.target===a.xa&&(b.target.blur(),0<a.Ub&&U6(a,a.Ub-1),a.dispatchEvent(new CustomEvent("devsite-pagination-new-page")),W6(a,"devsite-pagination-previous-button"),a.hasAttribute("scroll-to-container")&&a.Kd())})},W6=function(a,b){const c={category:"Site-Wide Custom Events",action:"click",label:a.Ba?`${a.getAttribute("container")} `+
`(#${a.Ba}): ${b}`:`${a.getAttribute("container")}: ${b}`};a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:c,bubbles:!0}));b={name:b,type:a.getAttribute("container"),metadata:{pageNumber:a.Ub}};b={eventData:JSON.stringify(b)};a.dispatchEvent(new CustomEvent("devsite-analytics-observation-cloudtrack",{detail:b,bubbles:!0}))},X6=class extends _ds.C{static get observedAttributes(){return["reset"]}constructor(){super();this.eventHandler=new _ds.F;this.Ea="default";this.ya=!1;this.Ba=
"";this.Ja=this.Ub=0;this.Ga=!0;this.oe=this.ud=this.h=0;this.g=[];this.ea=null;this.Da="";this.oa=null;this.Fa=!1;this.maxPages=0;this.xa=this.j=this.ra=this.v=null;this.La=0;this.Na=!1;this.we="";_ds.Gj(this,(0,_ds.q)`hidden`,(0,_ds.q)`selected`)}connectedCallback(){if(!this.ya){a:if(this.hasAttribute("elements")&&this.hasAttribute("container")){this.Da=this.getAttribute("elements");var a=this.getAttribute("container");var b=_ds.nl(this,a)||_ds.nl(this,null,a);if(b)a=b;else{if(!(b=_ds.Dk(a))){b=
document;var c=null;b.getElementsByClassName?c=b.getElementsByClassName(a)[0]:c=_ds.Dk("*",a);b=c||null}a=b}if(a&&a.querySelector(this.Da)){this.ea=a;var d;let f;this.Ba=(null==(d=this.ea)?void 0:null==(f=d.closest("[id]"))?void 0:f.id)||"";this.h=Number(this.getAttribute("elements-per-page"))||10;this.ud=Number(this.getAttribute("initial-results"))||this.h;if(d=this.getAttribute("buttons-style"))try{b:switch(d){case "default":case "filter":var e=d;break b;default:throw Error(`"${d}" is not a supported value of the `+
"buttons-style attribute.");}this.Ea=e}catch(g){console.error("An error occurred:",g);break a}this.maxPages=Number(this.getAttribute("max-pages"))||7;this.hasAttribute("scroll-to-container-behavior")&&(this.we=this.getAttribute("scroll-to-container-behavior"))}!this.hasAttribute("buttons")&&this.hasAttribute("start-expanded")&&console.warn('The "start-expanded" attribute is only supported with the buttons UI and should be removed. To use the buttons UI, set the "buttons" attribute.')}else console.error("An error occurred: one of the required attributes was not found for devsite-pagination.");
V6(this);this.ya=!0}}disconnectedCallback(){_ds.H(this.eventHandler)}Kd(){if(this.ea){var a=Number(window.getComputedStyle(this.ea).marginTop.replace("px",""));a=isNaN(a)?0:a;var b=this.ea.getBoundingClientRect().top+window.pageYOffset;var c=document.querySelector("devsite-header");if(c){var d=Number(c.getAttribute("top-row--height"));c=Number(c.getAttribute("bottom-tabs--height"));d=(isNaN(d)?0:d)+(isNaN(c)?0:c)}else d=0;window.scrollTo({top:b-d-a,behavior:"smooth"===this.we?this.we:"auto"})}}attributeChangedCallback(a){"reset"===
a&&this.ya&&(_ds.H(this.eventHandler),_ds.Pk(this),this.Ub=0,V6(this))}};X6.prototype.attributeChangedCallback=X6.prototype.attributeChangedCallback;X6.prototype.disconnectedCallback=X6.prototype.disconnectedCallback;X6.prototype.connectedCallback=X6.prototype.connectedCallback;try{customElements.define("devsite-pagination",X6)}catch(a){console.warn("Unrecognized DevSite custom element - DevsitePagination",a)};})(_ds_www);