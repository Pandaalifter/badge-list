import { LitElement, html, css } from 'lit';
import "./badge-card.js"
import "./search-bar.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeList extends LitElement {
  static get properties() {
    return {
      badgeCounter: { 
        attribute: "badge-counter",
        type: String },
      badges: { type: Array },
      loadingMarker: { type: String},
      isLoading: { type: Boolean},
      contentReady: {type: Boolean}
    }
  }

  static styles = css`
    :host {
      display: block;
      font-family: var(--badge-app-font-family);
    }
    .counter {
      display: var(--badge-app-display);
      justify-content: var(--badge-app-justify-content);
      margin-right: 848px;
      margin-bottom: 12px;
      font-size: 28px;
      font-weight: 100;
    }

    .loading-wrapper {
      display: var(--badge-app-display);
      justify-content: var(--badge-app-justify-content);
    }

    .loading-icon {
      width: 160px;
      animation: loading-spin infinite 5s linear;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    @keyframes loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    badge-card::part(step-font) {
      font-size: 22px;
      display: block;
      padding-bottom: 8px;
    }
  `;

  constructor() {
    super();
    this.badgeCounter = "Badges (0)";
    this.badges = [];
    this.loadingMarker = "https://cdn.discordapp.com/attachments/434857360155213827/1094505354391461948/745856610882289665.png";
    this.isLoading = false;
    this.contentReady = false;
  }

  updated(){
    this.badgeCounter = "Badges (" + this.badges.length + ")";
  }

  render() {
    if(this.isLoading){
      return html`
        <div class="loading-wrapper">
          <img src="${this.loadingMarker}" class="loading-icon">
        </div>
      `;
    }

    if(!this.isLoading){
    setTimeout(() => {
      this.contentReady = true;
    }, 2000);
  }

  if(this.contentReady){
    return html`
    <div class="counter">
      ${this.badgeCounter}
    </div>
    <div class="wrapper">
            ${this.badges.map(badge => html`
              <div class="item">
                <badge-card 
                    title="${badge.title}" 
                    icon="${badge.icon}" 
                    description="${badge.description}"
                    document-link="${badge.documentLink}"
                    author-icon="${badge.authorIcon}"
                    author="${badge.author}"
                    time="${badge.time}">   
                </badge-card>
              </div>
            `)}
        </div>
    `;
  }
}
}

customElements.define('badge-list', BadgeList);