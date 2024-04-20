(function(_ds){var window=this;var yka=async function(){const a=(await _ds.t()).getStaticPath(!0);return(0,_ds.S)`<img src="${a}/images/cloud-shell-cta-art.png" />`};var zka=async function(){return await (await _ds.t()).getStorage().get("cloudshell","hide_fte_banner")},AU=class extends _ds.mx{constructor(){super(...arguments);this.isDogfood=this.isResizing=!1;this.offset=0;this.YC="";this.cloudtrack=new _ds.iB;this.xj=a=>{this.ax(a)};this.yj=()=>{this.bx()};this.tL=()=>{document.body.setAttribute("no-scroll","")};this.sL=()=>{document.body.hasAttribute("no-scroll")&&document.body.removeAttribute("no-scroll")}}ax(a){this.isResizing&&this.Mg&&(a=Math.floor(this.Mg.bottom-
a.clientY+this.offset).toString(),this.resizer.setAttribute("aria-valuenow",a),this.style.height=a+"px")}bx(){this.isResizing=!1;window.removeEventListener("pointermove",this.xj);window.removeEventListener("pointerup",this.yj);this.style.pointerEvents="auto";this.Rg("pane_resize",{EZ:!0})}Ua(){return this}render(){this.isDogfood||this.setAttribute("height-visual-offset","24");return(0,_ds.S)`
    <div
      class="resizer"
      role="separator"
      aria-valuemin="0"
      aria-valuemax="0"
      @pointerdown="${this.ex}">
      ${this.isDogfood?(0,_ds.S)` <div class="dogfood-notice">
    <a href="http://goto.google.com/cgc-cloud-shell-known-issues">
      <span class="material-icons">pets</span>
      <span class="notice-text">Dogfood Version - Internal Only</span>
    </a>
  </div>`:""}
      <div class="grabber-focus">
        <div class="grabber"></div>
      </div>
    </div>
    <devsite-shell
      @pointerover="${this.tL}"
      @pointerout="${this.sL}"
      @devsite-shell-opened="${this.xL}"
      @devsite-shell-closed="${this.vL}"
      @devsite-shell-resized="${this.yL}"
      @devsite-shell-maximized="${this.wL}">
    </devsite-shell>
    ${(0,_ds.S)` <div class="free-trial-banner">
    <a
      @click="${this.lL}"
      class="close-btn button-white material-icons"
      aria-label="${"Close Cloud Shell"}"
      >close</a
    >
    <div class="banner-text">
      <h3>${"Welcome to Cloud Shell"}</h3>
      <p>${"Cloud Shell is a development environment that you can use in the browser:"}</p>
      <ul>
        <li>${"Activate Cloud Shell to explore Google Cloud with a terminal and an editor"}</li>
        <li>${"Start a free trial to get $300 in free credits"}</li>
      </ul>
      <div class="row">
        <button
          @click="${this.hL}"
          class="button-blue"
          >${"Activate Cloud Shell"}
        </button>
        <button @click="${this.gx}">
          ${"Start a free trial"}</button
        >
      </div>
    </div>
    ${(0,_ds.KG)(yka(),"")}
  </div>`}
  `}yL(a){if(null==a?0:a.detail)a=(a.detail.RK+this.resizer.offsetHeight).toString(),this.resizer.setAttribute("aria-valuenow",a),this.style.height=a+"px",this.removeAttribute("devsite-size"),this.Jr.isMaximized=!1,this.Rg("pane_resize",{isManual:!1})}async xL(){"true"===await zka()&&this.removeAttribute("enable-fte-user-flow");this.classList.add("opened");this.Rg("pane_open")}vL(){this.classList.remove("opened");this.Rg("pane_close");this.hasAttribute("devsite-size")&&(this.removeAttribute("devsite-size"),
this.Jr.isMaximized=!1,this.style.height=this.YC);document.body.hasAttribute("no-scroll")&&document.body.removeAttribute("no-scroll")}wL(){_ds.Ua()&&this.setAttribute("cr-os","");this.YC=this.style.height;this.setAttribute("devsite-size","content-area");this.style.height="100%"}ex(a){this.isResizing=!0;this.Mg=this.getBoundingClientRect();window.addEventListener("pointermove",this.xj);window.addEventListener("pointerup",this.yj);this.offset=a.offsetY;this.style.pointerEvents="none"}Rg(a,b){this.cloudtrack.g({type:"cloudShell",
name:a.toString(),metadata:b})}lL(){if(this.Jr){var a=this.Jr;a.g.isOpen&&a.g.close()}}hL(){this.kA&&this.kA.classList.add("hidden")}gx(){this.Rg("pane_free_trial_click");const a=new URL("https://console.cloud.google.com/freetrial");a.searchParams.set("redirectPath",window.location.href);a.searchParams.set("utm_source","ext");a.searchParams.set("utm_medium","partner");a.searchParams.set("utm_campaign","CDR_cma_gcp_cloudshell_freetrial_020222");a.searchParams.set("utm_content","-");_ds.bf(window.location,
_ds.ye(a.toString()))}};_ds.v([_ds.Lq(".free-trial-banner"),_ds.w("design:type",HTMLElement)],AU.prototype,"kA",void 0);_ds.v([_ds.Lq(".resizer"),_ds.w("design:type",HTMLElement)],AU.prototype,"resizer",void 0);_ds.v([_ds.Lq("devsite-shell"),_ds.w("design:type",_ds.zG)],AU.prototype,"Jr",void 0);_ds.v([_ds.I({Ca:"is-resizing",Ma:!0,type:Boolean}),_ds.w("design:type",Object)],AU.prototype,"isResizing",void 0);
_ds.v([_ds.I({Ca:"cloudshell-dogfood",type:Boolean}),_ds.w("design:type",Object)],AU.prototype,"isDogfood",void 0);try{customElements.define("cloud-shell-pane",AU)}catch(a){console.warn("Unrecognized DevSite custom element - CloudShellPane",a)};})(_ds_www);
