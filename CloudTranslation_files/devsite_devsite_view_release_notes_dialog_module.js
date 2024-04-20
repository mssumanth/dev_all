(function(_ds){var window=this;var GBa=function(a){a.eventHandler.listen(a,"DropdownItemClicked",b=>{FBa(a,b)})},FBa=async function(a,b){const c=b.Ha.detail.id;b=a.querySelector(".devsite-dialog-contents");const d=a.querySelector(`#date-section-${c}`);let e,f,g,h;const k=(null!=(g=null==d?void 0:null==(e=d.getBoundingClientRect())?void 0:e.top)?g:0)-(null!=(h=null==b?void 0:null==(f=b.getBoundingClientRect())?void 0:f.top)?h:0);d&&b&&b.scrollBy({top:k,behavior:"smooth"});let l,m;a.In=null!=(m=null==(l=a.Op.find(r=>r.id===c))?void 0:
l.title)?m:"";a.g.fb(a.In)},IBa=function(a){const b=new IntersectionObserver(c=>{c.forEach(d=>{HBa(a,0<d.intersectionRatio,d)})},{root:a.querySelector(".devsite-dialog-contents")});a.querySelectorAll(".release-note-date-section .release-note").forEach(c=>{b.observe(c)})},HBa=function(a,b,c){let d,e;const f={id:null!=(d=c.target.getAttribute("id"))?d:"",type:null!=(e=c.target.getAttribute("type"))?e:"NOTE_TYPE_UNSPECIFIED"};if(b){let g;a.Jk=[...(null!=(g=a.Jk)?g:[]),f]}else a.Jk=[...a.Jk.filter(g=>
g.id!==f.id)]},JBa=function(a){switch(a){case "NOTE_TYPE_FEATURE":return{title:"Feature",color:"green"};case "NOTE_TYPE_SERVICE_ANNOUNCEMENT":return{title:"Announcement",color:"yellow"};case "NOTE_TYPE_NON_BREAKING_CHANGE":return{title:"Change",color:"yellow"};case "NOTE_TYPE_LIBRARIES":return{title:"Libraries",color:"blue"};case "NOTE_TYPE_FIX":return{title:"Fixed",color:"blue"};case "NOTE_TYPE_BREAKING_CHANGE":return{title:"Breaking",color:"red"};case "NOTE_TYPE_DEPRECATION":return{title:"Deprecated",
color:"red"};case "NOTE_TYPE_ISSUE":return{title:"Issue",color:"red"};case "NOTE_TYPE_SECURITY_BULLETIN":return{title:"Security",color:"orange"};default:return{title:"Unspecified",color:"grey"}}},R8=function(a,b){b=JBa(b);return(0,_ds.S)` <span
      class="release-note-type-chip
          ${a} ${b.color}">
      ${"large"===a?b.title.toUpperCase():b.title}
    </span>`},KBa=function(a,b){let c;return(0,_ds.S)`
      <div
        class="release-note-date-section"
        id="date-section-${b.replace(/,?\s/g,"")}">
        <h3 class="release-note-date-header">${b}</h3>
        ${[...(null!=(c=a.releaseNotes.get(b))?c:[])].map((d,e)=>{let f,g;return(0,_ds.S)` <div
        class="release-note"
        id="${`${b}-${e}`}"
        type="${null!=(f=d.noteType)?f:"NOTE_TYPE_UNSPECIFIED"}">
        ${R8("large",d.noteType)}
        <div class="release-note-content">
          ${d.descriptionHtml?(0,_ds.jI)(_ds.mf(null!=(g=d.descriptionHtml)?g:"")):(0,_ds.S)`<p>${d.description}</p>`}
        </div>
      </div>`})}
      </div>
    `},S8=class extends _ds.mx{constructor(){super(["devsite-dialog","devsite-dropdown-list"]);this.eventHandler=new _ds.F;this.releaseNotes=new Map;this.In="";this.Op=[];this.Jk=[];this.g=new _ds.Gn(async a=>{this.Va({category:"Site-Wide Custom Events",action:"release notes: view old note",label:`${await _ds.us(_ds.D().href)} : ${a}`})},100)}Ua(){return this}async connectedCallback(){super.connectedCallback();this.In=[...this.releaseNotes.keys()][0];this.Op=[...this.releaseNotes.keys()].map(a=>({id:a.replace(/,?\s/g,
""),title:a}));GBa(this)}disconnectedCallback(){super.disconnectedCallback()}eb(a){super.eb(a);IBa(this)}render(){return(0,_ds.S)`
      <div class="devsite-dialog-header">
        <div>
          <h3 class="no-link title">
            Release Notes
          </h3>
          <div class="chip-wrapper">
            ${[...(new Set(this.Jk.map(a=>a.type)))].map(a=>R8("small",a))}
          </div>
        </div>
        <devsite-dropdown-list
            .listItems=${this.Op}>
          <p slot="toggle" class="selected-date-toggle">${this.In}</p>
        </devsite-dropdown-list>
      </div>
      <div class="devsite-dialog-contents">
        ${[...this.releaseNotes.keys()].map(a=>KBa(this,a))}
      </div>
      <div class="devsite-dialog-footer devsite-dialog-buttons">
        <button class="button devsite-dialog-close">
          Close
        </button>
      </div>`}};_ds.v([_ds.I({type:Map}),_ds.w("design:type",Object)],S8.prototype,"releaseNotes",void 0);_ds.v([_ds.K(),_ds.w("design:type",Object)],S8.prototype,"In",void 0);_ds.v([_ds.K(),_ds.w("design:type",Array)],S8.prototype,"Op",void 0);_ds.v([_ds.K(),_ds.w("design:type",Array)],S8.prototype,"Jk",void 0);try{customElements.define("devsite-view-release-notes-dialog",S8)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotesDialog",a)};})(_ds_www);
