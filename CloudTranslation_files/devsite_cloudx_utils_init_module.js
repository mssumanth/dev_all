(function(_ds){var window=this;var tqa=function(a=""){return a.toLowerCase().trim().replace(/\s+/g,"-").replace(/[!@#\$%\^&\*\(\)\{\}<>\?\\\/'"]+/g,"").trim()},j1=function(a){var b={};return a&&a.displayText?(new uqa(a,b)).render():(0,_ds.S)``},vqa=(0,_ds.S)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="none">
    <path d="M12 15.375 6 9.375 7.4 7.975 12 12.575 16.6 7.975 18 9.375Z" />
  </svg>
`;var wqa=function(a,b={}){for(const c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},xqa=function(a,b={}){a.context=_ds.ft(b,a.m||{})},yqa=class{constructor(){this.context={}}getContext(){return this.context}};var zqa=new Map([["xl","(min-width: 1440px)"],["large","(min-width: 1024px)"],["medium","(min-width: 768px)"]]),Bqa=function(a,b){const c=Aqa(b.zJ,b.BK),d=window.matchMedia(b.media),e=()=>{c(d)};a.fn.set(b.media,{Ar:b,QK:d,callback:c,Rj:e});d.addEventListener("change",e);c(d)},Aqa=function(a,b){return c=>{c.matches?a(c):b&&b(c)}},k1=function(){for(const [a,b]of zqa){const c=a;if(window.matchMedia(b).matches)return c}return"small"},Cqa=class{constructor(a,b=[]){this.rules=b;this.fn=new Map;let c;(null!=
(c=a.Hl)?c:a.Hl=new Set).add(this);if(void 0!==a.Gc&&a.isConnected){let d;null==(d=this.UB)||d.call(this)}}UB(){Array.isArray(this.rules)||(this.rules=[this.rules]);this.rules.forEach(a=>void Bqa(this,a))}hK(){for(const a of this.fn.keys())if(this.fn.has(a)){const b=this.fn.get(a);b.QK.removeEventListener("change",b.Rj)}this.fn.clear()}};var Dqa=[(0,_ds.q)`aria-`,(0,_ds.q)`data-`,(0,_ds.q)`type`,(0,_ds.q)`role`],Eqa=class extends _ds.px{constructor(a){super();if(6!==a.type)throw Error("attributes can only be set in element bindings");}render(){return _ds.xq}update(a,[b]){for(const d of b){var c=d.split("=");const e=c[0];c=c[1];void 0===c&&(c="");_ds.Re(Dqa,a.element,e,c)}return this.render(b)}},Fqa=_ds.ox(Eqa);var l1=_ds.Kw([':root{--cws-accordion-panel-spacer:36px !stv-no-inline}:host{min-width:318px}.cws-accordion__heading{-webkit-box-align:start;-moz-box-align:start;-ms-flex-align:start;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-align-items:flex-start;align-items:flex-start;border-bottom:3px solid #e8eaed;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:12px}.cws-accordion__heading p{margin:12px 0}.cws-accordion__expand{margin-left:auto}.cws-accordion-panel__block{width:100%}.cws-accordion-panel__block .cws-icon{-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";text-rendering:optimizeLegibility;word-wrap:normal;font:normal normal normal 20px/1 Material Icons;font-size:20px;margin-right:8px;text-transform:none}.cws-accordion-panel__block .cws-accordion-panel__header{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:3px solid #e8eaed;color:#1a73e8;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;line-height:28px;outline:none;padding:24px 0;width:100%}.cws-accordion-panel__block .cws-accordion-panel__header .cws-headline--headline-5,.cws-accordion-panel__block .cws-accordion-panel__header .cws-icon{color:inherit}.cws-accordion-panel__block .cws-accordion-panel__header:focus,.cws-accordion-panel__block .cws-accordion-panel__header:focus-visible,.cws-accordion-panel__block .cws-accordion-panel__header:hover{color:#174ea6}.cws-accordion-panel__block .cws-accordion-panel__header:active,.cws-accordion-panel__block .cws-accordion-panel__header:focus,.cws-accordion-panel__block .cws-accordion-panel__header:focus-visible{border-bottom:3px solid #174ea6}.cws-accordion-panel__block .cws-accordion-panel__header:after{-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";text-rendering:optimizeLegibility;word-wrap:normal;content:"keyboard_arrow_down";font:normal normal normal 24px/1 Material Icons;font-size:30px;margin-left:auto;text-transform:none}.cws-accordion-panel__block .cws-accordion-panel__content{display:none}.cws-accordion-panel__block--active .cws-accordion-panel__header:after{content:"keyboard_arrow_up"}.cws-accordion-panel__block--active .cws-accordion-panel__content{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:3px solid #f1f3f4;display:block}.cws-accordion-panel__block--active .cws-accordion-panel__content-wrapper{-moz-box-sizing:border-box;box-sizing:border-box;margin:var(--cws-accordion-panel-spacer,36px) 0}']);var Gqa=new Map([["arrow_drop_down",(0,_ds.S)`
  <svg class="cws-icon" xmlns="http://www.w3.org/2000/svg" height="18">
    <path d="m9 11-5-5h10Z" />
  </svg>
`],["chat",(0,_ds.S)`
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 1.5H3C2.175 1.5 1.5075 2.175 1.5075 3L1.5 16.5L4.5 13.5H15C15.825 13.5 16.5 12.825 16.5 12V3C16.5 2.175 15.825 1.5 15 1.5ZM15 12H3V3H15V12ZM10.5 9H4.5V10.5H10.5V9ZM4.5 6.75H13.5V8.25H4.5V6.75ZM13.5 4.5H4.5V6H13.5V4.5Z"
      fill="white" />
  </svg>
`],["download",(0,_ds.S)`
  <svg
    class="cws-icon"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path
      d="m4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2m11.59-8.41-2.59 2.58v-8.17h-2v8.17l-2.59-2.58-1.41 1.41 5 5 5-5z" />
  </svg>
`],["jump",(0,_ds.S)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
`],["new_tab",(0,_ds.S)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
`],["next",(0,_ds.S)`
  <svg
    class="cws-icon"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path d="m7.59 18.59 1.41 1.41 8-8-8-8-1.41 1.41 6.58 6.59" />
  </svg>
`],["pdf",(0,_ds.S)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M7 11.5h1v-1H7v1zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .83-.67 1.5-1.5 1.5H7v2H5.5V9H8c.83 0 1.5.67 1.5 1.5v1zm10-1H17v1h1.5V13H17v2h-1.5V9h4v1.5zm-5 3c0 .83-.67 1.5-1.5 1.5h-2.5V9H13c.83 0 1.5.67 1.5 1.5v3zm-2.5 0h1v-3h-1v3z" />
  </svg>
`],["phone",(0,_ds.S)`
  <svg
    class="cws-icon"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m0 0h24v24h-24z" fill="none" />
    <path
      d="m16.01 14.46-2.62 2.62c-2.75-1.49-5.01-3.75-6.5-6.5l2.62-2.62c.24-.24.34-.58.27-.9l-.65-3.26c-.09-.46-.5-.8-.98-.8h-4.15c-.56 0-1.03.47-1 1.03.17 2.91 1.04 5.63 2.43 8.01 1.57 2.69 3.81 4.93 6.5 6.5 2.38 1.39 5.1 2.26 8.01 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.26-.65c-.33-.07-.67.04-.9.27z" />
  </svg>
`],["unfold_less",(0,_ds.S)`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="18px"
    width="18px"
    fill="#1A73E8">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
  </svg>
`],["unfold_more",(0,_ds.S)`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="18px"
    width="18px"
    fill="#1A73E8">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
  </svg>
`],["video",(0,_ds.S)`
  <svg
    class="cws-icon"
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    viewBox="0 0 24 24"
    width="18px">
    <path
      d="M23.74 7.1s-.23-1.65-.95-2.37c-.91-.96-1.93-.96-2.4-1.02C17.04 3.47 12 3.5 12 3.5s-5.02-.03-8.37.21c-.46.06-1.48.06-2.39 1.02C.52 5.45.28 7.1.28 7.1S.04 9.05 0 10.98V13c.04 1.94.28 3.87.28 3.87s.24 1.65.96 2.38c.91.95 2.1.92 2.64 1.02 1.88.18 7.91.22 8.12.22 0 0 5.05.01 8.4-.23.46-.06 1.48-.06 2.39-1.02.72-.72.96-2.37.96-2.37s.24-1.94.25-3.87v-2.02c-.02-1.93-.26-3.88-.26-3.88zM9.57 15.5V8.49L16 12.13 9.57 15.5z" />
  </svg>
`]]),m1=function(a){return{"cws-button":!0,"cws-button--high-emphasis":"high-emphasis"===a.fillType,"cws-button--medium-emphasis":"medium-emphasis"===a.fillType,"cws-button--low-emphasis":"low-emphasis"===a.fillType,"cws-button--support":"support"===a.fillType,"cws-button--tonal":"tonal"===a.fillType,"cws-button--reversed":a.reversed&&!a.alternate,"cws-button--reversed-alternate":a.reversed&&a.alternate,"cws-button--icon-left":a.g,"cws-button--icon-right":a.h,"cws-button--align-left":a.textLeftAligned,
"cws-button--full-width":a.isFullWidth,"cloud-smooth-scroll":a.hasSmoothScroll}},n1=function(a){const b=(0,_ds.S)`
      ${a.icon?(0,_ds.S)` <span class="cws-button--icon">
            ${Gqa.get(a.icon)}
          </span>`:""}
    `;return(0,_ds.S)`
      ${a.g?(0,_ds.S)`${b}`:""} ${a.displayText}
      ${a.h?(0,_ds.S)`${b}`:""}
    `},Hqa=function(a){const b=a.standardAttributes?Fqa(a.standardAttributes):(0,_ds.S)``;return(0,_ds.S)`
      <button
        type="button"
        class="${(0,_ds.Pu)(m1(a))}"
        ?disabled="${a.disabled}"
        track="${(0,_ds.Mt)(a.getContext())}"
        @click="${_ds.du(a.clickFn,()=>a.j.bind(a))}"
        ${b}>
        ${n1(a)}
      </button>
    `},uqa=class extends yqa{constructor(a,b={}){super();this.displayText="";this.fillType="high-emphasis";this.isFullWidth=this.textLeftAligned=this.hasSmoothScroll=this.iconAfter=this.alternate=this.reversed=this.disabled=!1;this.m={type:"button"};wqa(this,a);xqa(this,b);this.g=!!this.icon&&!this.iconAfter;this.h=!!this.icon&&this.iconAfter}getContext(){const a=_ds.ft(this.context,{name:this.displayText,metadata:{modifier:this.fillType}});this.href&&"string"===typeof this.href&&(a.metadata.eventDetail=
this.href);this.reversed&&(a.metadata.modifier+="-reversed");this.alternate&&(a.metadata.modifier+="-alternate");this.icon&&(a.metadata.icon=this.icon.replace("_"," "));return a}j(){this.clickFn&&this.clickFn()}render(){if(this.href){if(null==this.href)var a=null;else a="string"===typeof this.href?(0,_ds.Cca)(this.href):this.href,a=(0,_ds.S)`
      <a
        class="${(0,_ds.Pu)(m1(this))}"
        href="${a}"
        track="${(0,_ds.Mt)(this.getContext())}">
        ${n1(this)}
      </a>
    `;a=(0,_ds.S)`${a}`}else a=(0,_ds.S)`${Hqa(this)}`;return(0,_ds.S)`
      ${a}
    `}};var o1=_ds.Kw(['.cws-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;border-radius:4px;border-style:solid;border-width:1px;-moz-box-sizing:border-box;box-sizing:border-box;color:#202124;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-weight:500;-webkit-justify-content:center;justify-content:center;letter-spacing:normal;line-height:20px;min-height:48px;min-width:auto;padding:13px 24px 12px;position:relative;text-align:left;text-decoration:none;text-transform:none;-webkit-transition:background-color .2s,box-shadow .2s,color .2s;transition:background-color .2s,box-shadow .2s,color .2s;vertical-align:inherit}.cws-button:focus{outline:none;text-decoration:none;-webkit-transition:none;transition:none}.cws-button[disabled],.cws-button[disabled]:active,.cws-button[disabled]:focus,.cws-button[disabled]:hover{border-color:transparent;box-shadow:none;cursor:default}.cws-button--high-emphasis{background-color:#1a73e8;border-color:transparent;color:#fff}.cws-button--high-emphasis[disabled],.cws-button--high-emphasis[disabled]:active,.cws-button--high-emphasis[disabled]:focus,.cws-button--high-emphasis[disabled]:hover{background-color:#f8f9fa;color:#9aa0a6}.cws-button--high-emphasis:active,.cws-button--high-emphasis:focus,.cws-button--high-emphasis:hover{background-color:#185abc;color:#fff}.cws-button--high-emphasis:hover{border:1px solid #185abc;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)}.cws-button--high-emphasis:hover .mdc-elevation-overlay{opacity:0}.cws-button--high-emphasis:focus{box-shadow:inset 0 0 0 1px #185abc,inset 0 0 0 2px #fff}.cws-button--high-emphasis:active{border:1px solid #185abc;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)}.cws-button--high-emphasis:active .mdc-elevation-overlay{opacity:0}.cws-button--medium-emphasis{background-color:#fff;border-color:#dadce0;color:#1a73e8;z-index:1}.cws-button--medium-emphasis[disabled],.cws-button--medium-emphasis[disabled]:active,.cws-button--medium-emphasis[disabled]:focus,.cws-button--medium-emphasis[disabled]:hover{background-color:#f8f9fa;border-color:#dadce0;color:#9aa0a6}.cws-button--medium-emphasis[disabled]:active:after,.cws-button--medium-emphasis[disabled]:after,.cws-button--medium-emphasis[disabled]:focus:after,.cws-button--medium-emphasis[disabled]:hover:after{content:none}.cws-button--medium-emphasis:active,.cws-button--medium-emphasis:focus,.cws-button--medium-emphasis:hover{background-color:#fff;border-color:#1a73e8;color:#174ea6}.cws-button--medium-emphasis:active:after,.cws-button--medium-emphasis:focus:after,.cws-button--medium-emphasis:hover:after{background-color:#1a73e8;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--medium-emphasis:hover:after{opacity:.04}.cws-button--medium-emphasis:focus{box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--medium-emphasis:focus:after{opacity:.12}.cws-button--medium-emphasis:active{box-shadow:none}.cws-button--medium-emphasis:active:after{opacity:.1}.cws-button--medium-emphasis.cws-button--reversed:not(:hover):not(:focus):not(:active):not([disabled]){background-color:transparent;border-color:#fff;color:#fff}.cws-button--medium-emphasis.cws-button--reversed[disabled],.cws-button--medium-emphasis.cws-button--reversed[disabled]:active,.cws-button--medium-emphasis.cws-button--reversed[disabled]:focus,.cws-button--medium-emphasis.cws-button--reversed[disabled]:hover{background-color:transparent}.cws-button--low-emphasis{background-color:transparent;border-color:transparent;color:#1a73e8;padding-left:12px;padding-right:12px;z-index:1}.cws-button--low-emphasis[disabled],.cws-button--low-emphasis[disabled]:active,.cws-button--low-emphasis[disabled]:focus,.cws-button--low-emphasis[disabled]:hover{background-color:transparent;border-color:transparent;color:#9aa0a6}.cws-button--low-emphasis[disabled]:active:after,.cws-button--low-emphasis[disabled]:after,.cws-button--low-emphasis[disabled]:focus:after,.cws-button--low-emphasis[disabled]:hover:after{content:none}.cws-button--low-emphasis:active,.cws-button--low-emphasis:focus,.cws-button--low-emphasis:hover{background-color:transparent;color:#174ea6}.cws-button--low-emphasis:active:after,.cws-button--low-emphasis:focus:after,.cws-button--low-emphasis:hover:after{background-color:#1a73e8;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--low-emphasis:hover:after{opacity:.04}.cws-button--low-emphasis:focus{border-color:#1a73e8;box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--low-emphasis:focus:after{opacity:.12}.cws-button--low-emphasis:active:after{opacity:.1}.cws-button--low-emphasis.cws-button--icon-left{padding-left:8px;padding-right:12px}.cws-button--low-emphasis.cws-button--icon-right{padding-left:12px;padding-right:8px}.cws-button--low-emphasis.cws-button--reversed:active,.cws-button--low-emphasis.cws-button--reversed:focus,.cws-button--low-emphasis.cws-button--reversed:hover{background-color:#fff}.cws-button--low-emphasis.cws-button--reversed:not(:hover):not(:focus):not(:active):not([disabled]){color:#8ab4f8}.cws-button--low-emphasis.cws-button--reversed-alternate:active,.cws-button--low-emphasis.cws-button--reversed-alternate:focus,.cws-button--low-emphasis.cws-button--reversed-alternate:hover{background-color:#fff}.cws-button--low-emphasis.cws-button--reversed-alternate:not(:hover):not(:focus):not(:active):not([disabled]){color:#fff}.cws-button--support{background-color:#fff;border-color:#dadce0;color:#202124;z-index:1}.cws-button--support[disabled],.cws-button--support[disabled]:active,.cws-button--support[disabled]:focus,.cws-button--support[disabled]:hover{background-color:#f8f9fa;border-color:#dadce0;color:#9aa0a6}.cws-button--support[disabled]:active:after,.cws-button--support[disabled]:after,.cws-button--support[disabled]:focus:after,.cws-button--support[disabled]:hover:after{content:none}.cws-button--support:active,.cws-button--support:focus,.cws-button--support:hover{background-color:#fff;border-color:#202124;color:#202124}.cws-button--support:active:after,.cws-button--support:focus:after,.cws-button--support:hover:after{background-color:#202124;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:-1}.cws-button--support:hover:after{opacity:.04}.cws-button--support:focus{box-shadow:inset 0 0 0 1px #202124}.cws-button--support:focus:after{opacity:.12}.cws-button--support:active{box-shadow:none}.cws-button--support:active:after{opacity:.1}.cws-button--tonal{background-color:#e8f0fe;border-color:transparent;color:#1967d2}.cws-button--tonal[disabled],.cws-button--tonal[disabled]:active,.cws-button--tonal[disabled]:focus,.cws-button--tonal[disabled]:hover{background-color:#f8f9fa;border-color:transparent;color:#9aa0a6}.cws-button--tonal[disabled]:active:after,.cws-button--tonal[disabled]:after,.cws-button--tonal[disabled]:focus:after,.cws-button--tonal[disabled]:hover:after{content:none}.cws-button--tonal:active,.cws-button--tonal:focus,.cws-button--tonal:hover{background-color:#e8f0fe;color:#174ea6}.cws-button--tonal:active:after,.cws-button--tonal:focus:after,.cws-button--tonal:hover:after{background-color:#1967d2;bottom:0;content:"";left:0;position:absolute;right:0;top:0;-webkit-transition:background-color .2s,opacity .2s;transition:background-color .2s,opacity .2s;z-index:0}.cws-button--tonal:hover{border:1px solid transparent;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15)}.cws-button--tonal:hover .mdc-elevation-overlay{opacity:0}.cws-button--tonal:hover:after{opacity:.04}.cws-button--tonal:focus{border:1px solid #1a73e8;box-shadow:inset 0 0 0 1px #1a73e8}.cws-button--tonal:focus:after{opacity:.12}.cws-button--tonal:active{border:1px solid transparent;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)}.cws-button--tonal:active .mdc-elevation-overlay{opacity:0}.cws-button--tonal:active:after{opacity:.1}.cws-button--icon{-ms-flex-item-align:center;-webkit-align-self:center;align-self:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex}.cws-button--icon svg{fill:currentColor;height:18px;width:18px}.cws-button--icon-left{padding-left:12px;padding-right:16px}.cws-button--icon-left .cws-button--icon{margin-right:8px}.cws-button--icon-right{padding-left:16px;padding-right:12px}.cws-button--icon-right .cws-button--icon{margin-left:8px}.cws-button--align-left{margin-left:-13px}.cws-button--full-width{width:100%}.cws-button+.cws-button{margin-left:16px}@media (max-width:450px){.cws-button{width:100%}}.cws-button__set{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:16px}.cws-button__set .cws-button+.cws-button:not(.cws-button--align-left){margin-left:0}.cws-button__set .cws-button+.cws-button--align-left{margin-left:-13px}.cws-button__set .cws-button--align-left{margin-right:16px}.cws-button__set--with-margin{margin-top:24px}.cws-button__set--centered{-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}']);var p1=class extends _ds.hx{constructor(){super(...arguments);this.icon=this.panelTitle="";this.open=!1;this.h=`panel-${_ds.vk()}`;this.cloudtrack=new _ds.iB}async g(){this.open=!this.open;await this.Wa;this.dispatchEvent(new CustomEvent("cws-accordion-panel-toggle",{bubbles:!0,composed:!0,detail:{open:this.open}}));this.cloudtrack.g({type:"accordion",name:this.panelTitle});_ds.cB(this.cloudtrack,"interaction",{component:"accordion",text:this.panelTitle})}m(a){"Enter"!==a.key&&" "!==a.key||this.g()}Hf(){return(0,_ds.S)`<span class="cws-icon" aria-hidden="true">${this.icon}</span>`}render(){return this.panelTitle?
(0,_ds.S)`
      <div class="${(0,_ds.Pu)({"cws-accordion-panel__block":!0,"cws-accordion-panel__block--active":this.open})}">
        <span
          class="cws-accordion-panel__header"
          role="button"
          @click=${this.g}
          @keypress=${this.m}
          tabindex="0"
          aria-controls="${this.h}"
          aria-expanded="${this.open}">
          ${this.icon?this.Hf():""}
          <h4 class="cws-accordion-panel__text cws-headline--headline-5">
            ${this.panelTitle}
          </h4>
        </span>
        <div class="cws-accordion-panel__content" id="${this.h}">
          <div class="cws-accordion-panel__content-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    `:(0,_ds.S)``}};p1.styles=[_ds.YI,l1];_ds.v([_ds.I({type:String,Ca:"panel-title"}),_ds.w("design:type",String)],p1.prototype,"panelTitle",void 0);_ds.v([_ds.I({type:String,Ca:"icon"}),_ds.w("design:type",String)],p1.prototype,"icon",void 0);_ds.v([_ds.I({type:Boolean,Ma:!0}),_ds.w("design:type",Object)],p1.prototype,"open",void 0);p1=_ds.v([_ds.$x("cws-accordion-panel")],p1);
var q1=class extends _ds.hx{constructor(){super(...arguments);this.accordionTitle="";this.uf=this.expandAll=!1;this.cloudtrack=new _ds.iB}connectedCallback(){super.connectedCallback();this.addEventListener("cws-accordion-panel-toggle",this.g)}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("cws-accordion-panel-toggle",this.g)}h(){this.uf=!this.uf;for(const a of this.Zz){let b;null!=(b=a)&&(b.open=this.uf)}this.cloudtrack.g({type:"button",name:this.uf?"Expand all":"Collapse all"});
_ds.cB(this.cloudtrack,"interaction",{component:"button",text:this.uf?"Expand all":"Collapse all"})}g(){this.uf=this.Zz.every(a=>a.hasAttribute("open"))}render(){return(0,_ds.S)`
      ${this.accordionTitle||this.expandAll?(0,_ds.S)`
      <div class="cws-accordion__heading">
        ${this.accordionTitle?(0,_ds.S)`<p class="cws-eyebrow"> ${this.accordionTitle} </p>`:(0,_ds.S)``}
        ${this.expandAll?(0,_ds.S)`
      <span class="cws-accordion__expand" @click="${this.h}">
        ${j1({displayText:this.uf?"Collapse all":"Expand all",fillType:"low-emphasis",icon:this.uf?"unfold_less":"unfold_more",iconAfter:!0,standardAttributes:["aria-label=Toggle all",`aria-expanded=${this.uf}`]})}
      </span>
    `:""}
      </div>
    `:""}
      <slot name="panel"></slot>
    `}};q1.styles=[_ds.YI,l1,o1];_ds.v([_ds.I({type:String,Ca:"accordion-title"}),_ds.w("design:type",String)],q1.prototype,"accordionTitle",void 0);_ds.v([_ds.I({type:Boolean,Ca:"expand-all"}),_ds.w("design:type",Object)],q1.prototype,"expandAll",void 0);_ds.v([_ds.Jq({slot:"panel",Jn:"cws-accordion-panel"}),_ds.w("design:type",Array)],q1.prototype,"Zz",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],q1.prototype,"uf",void 0);q1=_ds.v([_ds.$x("cws-accordion")],q1);var Jqa=function(a){a.m=new IntersectionObserver(b=>{let c,d=!1,e;for(const f of b)a.ea?f.boundingClientRect.top<=r1(a)&&(e=f.target,d=!0):(c=window.scrollY>=a.ya?"down":"up",a.ya=window.scrollY,e="up"===c?Iqa(a,f):f.target,"down"===c&&f.isIntersecting?d=!0:"up"!==c||f.isIntersecting||(d=!0)),d&&e&&s1(a,e);a.ea&&(0===a.Mh.size&&s1(a,b[0].target),a.ea=!1)},{rootMargin:"0px 0px -75% 0px"});if(a.g.length&&a.m)for(const b of a.g)a.m.observe(b);a.h=new ResizeObserver(()=>{t1(a)});a.h.observe(a);a.h.observe(document.body)},
Kqa=function(a){a.eventHandler.listen(document,"click",b=>{b.target!==a&&a.open&&a.hd()});a.eventHandler.listen(document,"cws-header-height-change",b=>{a.zo=b.Ha.detail.ui});a.eventHandler.listen(document,"cws-footer-enter",b=>{a.ra=b.Ha.detail.bB.target;a.xq=!0;u1(a);a.v=_ds.oi(document,"scroll",()=>{u1(a)})});a.eventHandler.listen(document,"cws-footer-leave",()=>{a.xq=!1;a.v&&(_ds.wi(a.v),a.v=null)})},Lqa=function(a){a.Dp=16;a.hm=32;a.To=!1;a.oa=_ds.oi(window,"scroll",()=>{a.j.fb()},{passive:!0});
a.j.fb()},u1=function(a){if(a.ra&&a.xq){var b=a.ra.getBoundingClientRect();a.style.setProperty("--cws-js-bottom-offset",`${Math.max(0,window.innerHeight-b.top)}px`)}},t1=function(a){u1(a);requestAnimationFrame(async()=>{var b=window.innerHeight;const c=a.Tu.getBoundingClientRect().top;b=b-c-a.Dp;a.Tu.style.maxHeight=0<b?`${b}px`:"0"})},r1=function(a){const b=null==a.zs?void 0:k1();return"large"===b||"xl"===b?a.zo+a.hm:a.zo+a.hm+72},Iqa=function(a,b){const c=a.g.findIndex(d=>d===b.target);return 0===
c?b.target:a.g[c-1]},s1=function(a,b){const c=b.parentNode.closest(".cws-jump-section");a.Mh.clear();a.Mh.add(b.id);c&&a.Mh.add(c.id);_ds.cx(a)},v1=class extends _ds.hx{constructor(){super(...arguments);this.label="";this.disableScroll=this.attached=this.open=!1;this.zo=65;this.hm=32;this.Dp=0;this.xq=this.To=!1;this.Mh=new Set;this.ya=0;this.ea=!0;this.xa=[];this.g=[];this.eventHandler=new _ds.F;this.j=new _ds.Gn(()=>{this.VM.getBoundingClientRect().top<this.zo?this.attached=!0:this.attached=!1},
10);this.Da={type:"jump menu",metadata:{position:"jump menu"}};this.cloudtrack=new _ds.iB}connectedCallback(){super.connectedCallback();this.g=[...document.querySelectorAll(".cws-jump-section")];if(this.g.length){if(this.g.length)for(const b of this.g){const c=b.dataset.cwsMenuText||b.textContent;if(!c)break;const d="cwsIsSubSection"in b.dataset;if(b.id)var a=b.id;else{a=1;let e=`section-${a}`;for(;document.getElementById(e);)e=`section-${a++}`;a=b.id=e}a=tqa(a);this.xa.push({lC:c,ow:d,Nw:a})}Jqa(this);
Kqa(this)}}disconnectedCallback(){super.disconnectedCallback();_ds.H(this.eventHandler);this.m&&this.m.disconnect();this.h&&this.h.disconnect()}eb(){this.zs=new Cqa(this,{media:"(min-width: 1024px)",zJ:()=>{this.oa&&(this.j.stop(),_ds.wi(this.oa),this.oa=null);this.attached=!1;this.Dp=0;this.hm=24;this.To=!0;this.Tu.style.maxHeight="";this.open&&this.hd()},BK:()=>void Lqa(this)})}Ea(){this.open?this.hd():this.Xe()}Xe(){t1(this);this.open=!0;document.body.setAttribute("no-scroll","")}hd(){this.open=
!1;document.body.hasAttribute("no-scroll")&&document.body.removeAttribute("no-scroll")}Fa(a){a.preventDefault();this.hd();var b=a.target;a=b.hash;var c=document.querySelector(`#${a.substring(1)}`);if(c){var d=_ds.Jk(document).y,e=c.getBoundingClientRect().top,f=r1(this),g=null==this.zs?void 0:k1(),h=!0;if(this.disableScroll||"medium"===g||"small"===g)h=!1;window.scrollTo({top:d+e-f,behavior:h?"smooth":"auto"});h||this.Mh.has(a)||s1(this,c);c=b.getAttribute("track-type")||"";d=b.getAttribute("track-name")||
"";b=b.getAttribute("track-metadata-eventdetail")||"";this.cloudtrack.g({type:c,name:d,metadata:{eventDetail:b}});_ds.cB(this.cloudtrack,"interaction",{component:"jump menu",text:d,destination:b});window.history.pushState({path:a},"",a)}}render(){const a=(0,_ds.Pu)({"cws-navigation-rail":!0,"cws-navigation-rail--fixed":this.To});return(0,_ds.S)`
      <span class="cws-sticky-sentinel"></span>
      <div class="cws-navigation-rail__wrapper">
        <nav class="${a}" aria-label="${this.label}">
          <button
            @click="${this.Ea}"
            aria-expanded="${this.open}"
            aria-controls="jump-menu-list"
            class="cws-navigation-rail__toggle">
            ${this.label}
            <span class="cws-navigation-rail__toggle--icon" aria-hidden="true">
              ${vqa}
            </span>
          </button>

          <div class="cws-navigation-rail__content">
            <div class="cws-jump-menu">
              <ul class="cws-jump-menu__items" id="jump-menu-list">
                ${this.xa.map(b=>{const c=(0,_ds.Pu)({"cws-jump-menu__item-secondary":b.ow}),d=(0,_ds.Pu)({"cws-jump-menu__link-primary":!b.ow,"cws-jump-menu__link-secondary":b.ow,"cws-jump-menu__link--active":this.Mh.has(b.Nw)}),e=_ds.ft(this.Da,{name:b.lC.toLowerCase(),metadata:{eventDetail:b.Nw}});return(0,_ds.S)`
      <li class="cws-jump-menu__item ${c}">
        <a
          class="cws-jump-menu__link ${d}"
          href="#${b.Nw}"
          track="${(0,_ds.Mt)(e)}"
          @click="${this.Fa}">
          ${b.lC}
        </a>
      </li>
    `})}
              </ul>
            </div>
            <slot></slot>
          </div>
        </nav>
      </div>
    `}};v1.styles=[_ds.YI,_ds.Kw([':root{--cws-js-bottom-offset:0;--cws-jump-menu-page-offset:16px}:host{display:block}:host(:focus-visible){outline:none}:host([open]) .cws-navigation-rail__toggle--icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([open]) .cws-navigation-rail__toggle:hover{color:#174ea6}:host([open]) .cws-navigation-rail__toggle:hover .cws-navigation-rail__toggle--icon .cws-icon{fill:#174ea6}:host([open]) .cws-navigation-rail__toggle:focus .cws-navigation-rail__toggle--icon{border-color:#1a73e8}:host([open]) .cws-navigation-rail__toggle:focus .cws-navigation-rail__toggle--icon .cws-icon{fill:#174ea6}:host([open]) .cws-navigation-rail__content{display:block}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):hover{border-width:0;box-shadow:0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):hover .mdc-elevation-overlay{opacity:0}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):hover .cws-navigation-rail__toggle{background-color:rgba(60,64,67,.04)}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed) .cws-navigation-rail__toggle:focus-visible:before{border-radius:28px;bottom:0;box-shadow:inset 0 0 0 2px #1a73e8;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):active{border-width:0;box-shadow:0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15)}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):active .mdc-elevation-overlay{opacity:0}:host(:not([open])) .cws-navigation-rail:not(.cws-navigation-rail--fixed):active .cws-navigation-rail__toggle{background-color:rgba(60,64,67,.1)}:host([attached]) .cws-navigation-rail{left:16px;position:fixed;right:16px;top:var(--cws-js-top-offset-height,65px);width:calc(100% - 32px)}::slotted(.cws-jump-menu__slot-content){border-top:1px solid #dadce0}.cws-sticky-sentinel{left:0;min-height:72px;pointer-events:none;position:absolute;width:100%}@media (min-width:1024px){.cws-sticky-sentinel{position:relative}}.cws-navigation-rail{background:#fff;border-radius:28px;border-width:0;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);-moz-box-sizing:border-box;box-sizing:border-box;left:var(--cws-jump-menu-page-offset,16px);margin-top:16px;min-height:56px;overflow-y:auto;position:absolute;right:var(--cws-jump-menu-page-offset,16px);z-index:10}.cws-navigation-rail .mdc-elevation-overlay{opacity:0}.cws-navigation-rail__toggle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;word-wrap:normal;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:#202124;color:#3c4043;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-size:14px;font-weight:500;letter-spacing:normal;line-height:24px;margin:0;outline:0;overflow-wrap:normal;padding:16px 24px;width:100%}.cws-navigation-rail__toggle--icon{border:2px solid transparent;border-radius:3px;-moz-box-sizing:border-box;box-sizing:border-box;height:24px;margin-left:auto;width:24px}.cws-navigation-rail__toggle .cws-icon{fill:#1a73e8;margin-left:-2px;margin-top:-2px}@media (min-width:1024px){.cws-navigation-rail__toggle{display:none}}.cws-navigation-rail__toggle:active,.cws-navigation-rail__toggle:focus,.cws-navigation-rail__toggle:hover{color:#202124}.cws-navigation-rail__content{display:none;padding:0 24px 16px}@media (min-width:1024px){.cws-navigation-rail{border-radius:0;border-right:1px solid #dadce0;bottom:var(--cws-js-bottom-offset,0);box-shadow:none;left:0;margin-top:0;min-height:0;overflow-y:auto;position:fixed;right:auto;top:var(--cws-js-top-offset-height,65px);width:221px}.cws-navigation-rail__content{display:block;padding-left:16px;padding-right:16px}.cws-navigation-rail__wrapper{bottom:0;left:0;position:fixed;width:220px}.cws-navigation-rail__wrapper:after{background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));background:-webkit-linear-gradient(hsla(0,0%,100%,0),#fff);background:linear-gradient(hsla(0,0%,100%,0),#fff);bottom:var(--cws-js-bottom-offset,0);content:"";height:36px;left:0;pointer-events:none;position:absolute;right:0;z-index:11}}@media (min-width:1024px) and (min-width:1440px){.cws-navigation-rail__wrapper{width:234px}}@media (min-width:1440px){.cws-navigation-rail{width:235px}}.cws-jump-menu{margin:0 -16px}.cws-jump-menu__items{list-style:none;margin:0;padding:0}.cws-jump-menu__items-nested{margin-top:8px;padding-left:16px}.cws-jump-menu__item{margin-top:8px}.cws-jump-menu__item:first-child{margin-top:0}.cws-jump-menu__item-secondary{border-left:2px solid #dadce0;margin-left:16px}.cws-jump-menu__item-secondary~.cws-jump-menu__item-secondary{margin-top:0;padding-top:20px}.cws-jump-menu__link{-moz-box-sizing:border-box;box-sizing:border-box;color:#5f6368;display:block;position:relative;text-decoration:none}.cws-jump-menu__link:focus-visible{outline:none}.cws-jump-menu__link:active,.cws-jump-menu__link:focus-visible,.cws-jump-menu__link:hover{background-color:#e8f0fe;color:#174ea6}.cws-jump-menu__link:active:after,.cws-jump-menu__link:focus-visible:after,.cws-jump-menu__link:hover:after{background-color:#1a73e8;border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0}.cws-jump-menu__link:hover:after{opacity:.04}.cws-jump-menu__link:focus-visible:after{opacity:.12}.cws-jump-menu__link:active:after{opacity:.1}.cws-jump-menu__link-primary{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;border-radius:18px;color:#202124;color:#5f6368;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-size:14px;font-weight:500;letter-spacing:normal;line-height:20px;min-height:36px;padding:8px 16px;width:100%}.cws-jump-menu__link-primary.cws-jump-menu__link--active{background-color:#e8f0fe;color:#174ea6}.cws-jump-menu__link-primary:focus-visible{box-shadow:inset 0 0 0 2px #174ea6}.cws-jump-menu__link-secondary{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;border-radius:4px;color:#5f6368;font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:12px;font-weight:400;font-weight:500;letter-spacing:.2px;line-height:20px;margin-left:16px}.cws-jump-menu__link-secondary.cws-jump-menu__link--active{color:#1a73e8}.cws-jump-menu__link-secondary.cws-jump-menu__link--active:before{background:#1a73e8;bottom:0;content:"";left:-18px;position:absolute;top:0;width:2px}@media (min-width:1024px){.cws-jump-menu{margin:0}.cws-jump-menu__item:first-child{margin-top:24px}}'])];
_ds.v([_ds.Lq(".cws-sticky-sentinel"),_ds.w("design:type",HTMLElement)],v1.prototype,"VM",void 0);_ds.v([_ds.Lq(".cws-navigation-rail"),_ds.w("design:type",HTMLElement)],v1.prototype,"Tu",void 0);_ds.v([_ds.I({type:String}),_ds.w("design:type",Object)],v1.prototype,"label",void 0);_ds.v([_ds.I({type:Boolean,Ma:!0}),_ds.w("design:type",Object)],v1.prototype,"open",void 0);_ds.v([_ds.I({type:Boolean,Ma:!0}),_ds.w("design:type",Object)],v1.prototype,"attached",void 0);
_ds.v([_ds.I({type:Boolean,Ca:"disable-scroll"}),_ds.w("design:type",Object)],v1.prototype,"disableScroll",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],v1.prototype,"zo",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],v1.prototype,"hm",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],v1.prototype,"Dp",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],v1.prototype,"To",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],v1.prototype,"xq",void 0);
_ds.v([_ds.K(),_ds.w("design:type",Object)],v1.prototype,"Mh",void 0);v1=_ds.v([_ds.$x("cws-jump-menu")],v1);var Mqa=function(a){return a.Kr?(0,_ds.S)`<div class="cws-reveal__controls">
      ${j1({clickFn:()=>{const b=a.querySelectorAll(".cws-hidden");for(const c of b)c.classList.remove("cws-hidden"),c.setAttribute("aria-hidden","false");a.Kr=!1;a.cloudtrack.g({type:"button",name:a.label});_ds.cB(a.cloudtrack,"interaction",{component:"button",text:a.label})},displayText:a.label,fillType:"support",icon:"arrow_drop_down",iconAfter:!0})}</div
    > `:_ds.Lt},w1=class extends _ds.hx{constructor(){super(...arguments);this.divider=!1;this.label="";this.maxItems=4;this.vp=0;this.Kr=!1;this.cloudtrack=new _ds.iB}connectedCallback(){super.connectedCallback();const a=[...this.querySelectorAll(".cws-reveal-item")].slice(this.maxItems);if(a.length){for(const b of a)b.classList.add("cws-hidden"),b.setAttribute("aria-hidden","true");this.vp=a.length}this.vp&&(this.label||(this.label="Show "+`${this.vp}`+" more"),this.Kr=!0)}render(){const a=(0,_ds.Pu)({"cws-reveal":!0,
"cws-reveal--divider":this.divider});return(0,_ds.S)`<div class="${a}">
      <slot></slot>
      ${Mqa(this)}
    </div> `}};
w1.styles=[_ds.YI,_ds.Kw([':host{display:block}:host .cws-reveal .cws-button{width:100%}@media (min-width:600px){:host .cws-reveal .cws-button{width:auto}}:host .cws-reveal__controls{-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;background:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;position:relative}:host .cws-reveal--divider .cws-reveal__controls:before{border-top:1px solid #dadce0;content:"";position:absolute;top:50%;width:100vw}@media (min-width:600px){:host .cws-reveal--divider .cws-reveal__controls:before{width:100%}}']),o1];
_ds.v([_ds.I({type:Boolean}),_ds.w("design:type",Object)],w1.prototype,"divider",void 0);_ds.v([_ds.I({type:String}),_ds.w("design:type",Object)],w1.prototype,"label",void 0);_ds.v([_ds.I({type:Number}),_ds.w("design:type",Object)],w1.prototype,"maxItems",void 0);_ds.v([_ds.K(),_ds.w("design:type",Number)],w1.prototype,"vp",void 0);_ds.v([_ds.K(),_ds.w("design:type",Boolean)],w1.prototype,"Kr",void 0);w1=_ds.v([_ds.$x("cws-reveal")],w1);var x1=_ds.Kw([':root{--cws-tab-panel-spacer:36px}:host(cws-tab:focus-visible){outline:none}:host(cws-tab:active) .cws-tabs__navigation-text,:host(cws-tab:focus-within) .cws-tabs__navigation-text{background-color:#f1f3f4;color:#202124}:host(cws-tab:active) .cws-tabs__navigation-text:after,:host(cws-tab:focus-within) .cws-tabs__navigation-text:after{border-bottom:3px solid #174ea6}.cws-tabs__navigation{-webkit-box-align:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;-webkit-align-items:stretch;align-items:stretch;border-bottom:3px solid #e8eaed;-moz-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:40px}.cws-tabs__navigation--centered{-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.cws-tabs__page-title .cws-icon{-webkit-font-feature-settings:"liga";-moz-font-feature-settings:"liga";font-feature-settings:"liga";text-rendering:optimizeLegibility;word-wrap:normal;font:normal normal normal 20px/1 Material Icons;margin-right:8px;text-transform:none}.cws-tabs__page-title .cws-tabs__navigation-text{-webkit-box-align:end;-moz-box-align:end;-ms-flex-align:end;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-align-items:flex-end;align-items:flex-end;-moz-box-sizing:border-box;box-sizing:border-box;color:#5f6368;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:100%;-webkit-justify-content:center;justify-content:center;padding-bottom:21px;padding-top:24px;position:relative}.cws-tabs__page-title .cws-tabs__navigation-text--has-icon{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.cws-tabs__page-title .cws-tabs__navigation-text:after{bottom:-3px;content:"";left:0;position:absolute;right:0}.cws-tabs__page-title .cws-tabs__navigation-text:hover,.cws-tabs__page-title--active .cws-tabs__navigation-text{color:#202124}.cws-tabs__page-title--active .cws-tabs__navigation-text:after{border-bottom:3px solid #1a73e8}.cws-tab-panel{display:none}.cws-tab-panel--active{display:block;margin:var(--cws-tab-panel-spacer,36px) 0}']);var y1=class extends _ds.hx{constructor(){super(...arguments);this.icon=this.tabTitle="";this.selected=!1;this.cloudtrack=new _ds.iB}connectedCallback(){super.connectedCallback();this.setAttribute("role","tab");this.hasAttribute("id")||(this.id=`tab-${_ds.vk()}`)}updated(a){a.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("tabindex",this.selected?"0":"-1"))}Hf(a){return(0,_ds.S)`<span class="cws-icon" aria-hidden="true">${a}</span>`}g(){this.cloudtrack.g({type:"tab",
name:this.tabTitle});_ds.cB(this.cloudtrack,"interaction",{component:"tab",text:this.tabTitle})}render(){const a={"cws-tabs__navigation-text":!0,"cws-tabs__navigation-text--has-icon":this.icon,"cws-headline--headline-6":!0};return(0,_ds.S)`
      <span
        class="cws-tabs__page-title ${(0,_ds.Pu)({"cws-tabs__page-title--active":this.selected})}"
        @click=${this.g}>
        <h4 class="${(0,_ds.Pu)(a)}">
          ${this.icon?this.Hf(this.icon):""} ${this.tabTitle}
        </h4>
      </span>
    `}};y1.styles=[_ds.YI,x1];_ds.v([_ds.I({type:String,Ca:"tab-title",Ma:!0}),_ds.w("design:type",Object)],y1.prototype,"tabTitle",void 0);_ds.v([_ds.I({type:String,Ca:"icon",Ma:!0}),_ds.w("design:type",Object)],y1.prototype,"icon",void 0);_ds.v([_ds.I({type:Boolean,Ma:!0}),_ds.w("design:type",Object)],y1.prototype,"selected",void 0);y1=_ds.v([_ds.$x("cws-tab")],y1);
var z1=class extends _ds.hx{constructor(){super(...arguments);this.selected=!1}connectedCallback(){super.connectedCallback();this.setAttribute("role","tabpanel");this.hasAttribute("id")||(this.id=`tabpanel-${_ds.vk()}`)}updated(a){a.has("selected")&&this.setAttribute("tabindex",this.selected?"0":"-1")}render(){const a=(0,_ds.Pu)({"cws-tab-panel--active":this.selected});return(0,_ds.S)`
      <div class="cws-tab-panel ${a}">
        <slot></slot>
      </div>
    `}};z1.styles=[_ds.YI,x1];_ds.v([_ds.I({type:Boolean,Ma:!0}),_ds.w("design:type",Object)],z1.prototype,"selected",void 0);z1=_ds.v([_ds.$x("cws-tab-panel")],z1);
var Nqa=function(a){return a.ef.find(b=>b.selected)},A1=function(a,b,c=!0){a.ef.forEach(e=>{e.selected=!1});a.WC.forEach(e=>{e.selected=!1});const d=b.getAttribute("aria-controls");a=a.querySelector(`#${d}`);b.selected=!0;c&&b.focus();a&&(a.selected=!0)},B1=class extends _ds.hx{constructor(){super(...arguments);this.centeredNav=!1}eb(){if(this.ef.length){this.g();var a,b=null!=(a=Nqa(this))?a:this.ef[0];A1(this,b,!1)}}g(){for(const [a,b]of this.ef.entries()){const c=b,d=this.WC[a];if(!d)break;c.setAttribute("aria-controls",
d.id);d.setAttribute("aria-labelledby",c.id)}}h(a){(a=a.target.closest("cws-tab"))&&A1(this,a)}m(a){if(a.target.closest("cws-tab")){var b=this.ef.findIndex(c=>c.selected);switch(a.key){case "ArrowLeft":b--;break;case "ArrowRight":b++;break;case "Home":b=0;break;case "End":b=this.ef.length-1}0>b&&(b=this.ef.length-1);b>=this.ef.length&&(b=0);A1(this,this.ef[b])}}render(){return(0,_ds.S)`
      <div
        class="cws-tabs"
        @click="${this.h}"
        @keyup="${this.m}">
        <nav role="tablist" class="${(0,_ds.Pu)({"cws-tabs__navigation":!0,"cws-tabs__navigation--centered":this.centeredNav})}">
          <slot name="tab" @slotchange="${this.g}"></slot>
        </nav>

        <slot name="panel" @slotchange="${this.g}"></slot>
      </div>
    `}};B1.styles=[_ds.YI,x1];_ds.v([_ds.I({type:Boolean,Ca:"centered-nav"}),_ds.w("design:type",Boolean)],B1.prototype,"centeredNav",void 0);_ds.v([_ds.Jq({slot:"tab",Jn:"cws-tab"}),_ds.w("design:type",Array)],B1.prototype,"ef",void 0);_ds.v([_ds.Jq({slot:"panel",Jn:"cws-tab-panel"}),_ds.w("design:type",Array)],B1.prototype,"WC",void 0);B1=_ds.v([_ds.$x("cws-tabs")],B1);var C1=function(a,b,c=!0){const d=b.getAttribute("title")||b.getAttribute("data-title"),e=b.getAttribute("icon"),f=b.hasAttribute("open");a=a.getContent(b);b=document.createElement("div");for(const g of a)b.appendChild(g);return c?(0,_ds.S)`
        <cws-tab
          slot="tab"
          tab-title="${_ds.eI(d?d:"")}"
          icon="${_ds.eI(e?e:void 0)}">
        </cws-tab>
        <cws-tab-panel slot="panel"> ${b} </cws-tab-panel>
      `:(0,_ds.S)`
        <cws-accordion-panel
          slot="panel"
          panel-title="${_ds.eI(d?d:"")}"
          icon="${_ds.eI(e?e:void 0)}"
          ?open="${f}">
          ${b}
        </cws-accordion-panel>
      `},D1=class extends _ds.hx{constructor(){super(...arguments);this.disableAccordion=this.centeredNav=!1;this.g=[]}Ua(){return this}connectedCallback(){super.connectedCallback();this.g=[...this.querySelectorAll(".cws-tab-group")];if(this.g.length)for(const a of this.g)a.setAttribute("hidden","true")}getContent(a){return[...a.children].map(b=>b.cloneNode(!0))}render(){const a=(0,_ds.Pu)({"cws-tabs-group":!0,"cws-tabs-group--enable-accordion":!this.disableAccordion});return this.g.length?(0,_ds.S)`
      <div class="${a}">
        <cws-tabs ?centered-nav=${this.centeredNav}>
          ${this.g.map(b=>C1(this,b))}
        </cws-tabs>
        <cws-accordion class="cws-tabs-group__accordion">
          ${this.g.map(b=>C1(this,b,!1))}
        </cws-accordion>
      </div>
    `:(0,_ds.S)``}};_ds.v([_ds.I({type:Boolean,Ca:"centered-nav"}),_ds.w("design:type",Boolean)],D1.prototype,"centeredNav",void 0);_ds.v([_ds.I({type:Boolean,Ca:"disable-accordion"}),_ds.w("design:type",Boolean)],D1.prototype,"disableAccordion",void 0);D1=_ds.v([_ds.$x("cws-tabs-group")],D1);var Pqa=function(a){Oqa(a);a.h.listen(window,"unload",()=>{a.dispose()})},Oqa=function(a){a.g.setAttribute("href","#");a.h.listen(a.g,"click",b=>{b.preventDefault();b=a.properties.hash;const c=document.querySelector(b);if(c){var d=a.m?a.m.getBoundingClientRect().bottom:0;_ds.WI(c,d);_ds.hm(b)}})},Qqa=class{constructor(a){this.g=a;this.properties={hash:this.g.hash};this.m=null;this.h=new _ds.F;Pqa(this)}dispose(){_ds.H(this.h)}};var Rqa=async function(){await DevsiteApp.whenReady();var a=document.querySelectorAll(".cloud-smooth-scroll");if(0!==a.length){var b=document.querySelector(".devsite-header");for(const c of a)a=new Qqa(c),b&&(a.m=b)}},Sqa=class extends _ds.mx{connectedCallback(){super.connectedCallback();Rqa()}};try{customElements.define("cloudx-utils-init",Sqa)}catch(a){console.warn("devsite.app.customElement.CloudxUtilsInit",a)};})(_ds_www);
