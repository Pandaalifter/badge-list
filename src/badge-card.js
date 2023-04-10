import { LitElement, html, css } from 'lit';

class BadgeCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      icon: { type: String},
      description: { type: String},
      document: { attribute: "document", type: String},
      documentLink: { 
        attribute: "document-link",
        type: String },
      spacer: { type: String},
      authorInfo: { 
        attribute: "author-info",
        type: String },
      authorIcon: { 
        attribute: "author-icon",
        type: String },
      author: { type: String},
      timeInfo: { 
        attribute: "time-info",
        type: String },
      time: { type: String},
      stepInfo: { 
        attribute: "step-info",
        type: String },
      steps: {
        type: Array
      },
      toggleMarker: {
        type: String
      },
      loadingMarker: {
        type: String
      },
      toggleOpening: {type: Boolean, reflect: true},
      loadingState: {type: Boolean, reflect: true}
    }
  }

  static styles = css`
    :host {
      display: var(--badge-app-display);
      justify-content: var(--badge-app-justify-content);
      font-family: var(--badge-app-font-family);
    }

    :host([toggleOpening]) .summary-marker{
      transform: var(--badge-card-toggleOpening-transform, rotate(180deg));
    }

    .badge{
      border: 1px solid var(--badge-card-accent-color);
      border-left: 15px solid var(--badge-card-accent-color);
      border-radius: 5px;
      width: 1000px;
      text-align: left;
      margin: auto;
      margin-bottom: 5px;
    }

    .title-underline{
      display: inline-block;
      padding-left: 8px;
      cursor: pointer;
    }

    .title-underline:hover{
      text-decoration: underline
    }

    .primary-icon{
      max-height: var(--badge-card-icon-height);
      padding-left: 16px;
      vertical-align: middle;
      padding-top: 2px;
      padding-bottom: 2px;
    }

    .collapse-card {
      background-color: var(--badge-card-summary-color);
      font-size: 16px;
      border-radius: 0px 5px 0px 0px;
      list-style: none;
    }

    .collapse-card::-webkit-details-marker {
      display: none;
    }

    .link-highlight {
      display: block;
      padding-top: 8px;
    }

    .link-highlight:link {
      color: var(--badge-card-accent-color);
      text-decoration: none;
    }

    .link-highlight:hover, .link-highlight:active{
      color: var(--badge-card-summary-color);
      text-decoration: none;
    }

    .link-highlight:visited {
      text-decoration: none;
    }

    .author-icon {
      border-radius: 50%;
      max-width: 40px;
      max-height: var(--badge-card-icon-height);
      vertical-align: middle;
    }

    .step-container {
      display: block;
      padding-top: 32px;
    }

    .summary-marker {
      float: right;
      display: inline-block;
      transition: 0.2s;
      transform-origin: 50% 40%;
      margin-right: 8px;
      margin-top: 14px;
    }

    .spacer-wrapper {
      padding-top: 64px;
    }

    .author-wrapper {
      padding-top: 16px;
    }

    .inner-badge {
      padding: 24px;
      font-size: var(--badge-app-secondary-font-size);
    }

    step-card:nth-child(2n+1){
      background-color: #ffffff;
    }

    .loading-icon {
      width: 80px;
      animation: loading-spin infinite 5s linear;
    }

    .loading-wrapper {
      text-align: center;
    }

    @keyframes loading-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media only screen and (max-width: 800px) {
      .badge {
        width: 600px;
      }
    }

    @media only screen and (max-width: 500px) {
      .badge {
        width: 300px;
      }
      .collapse-card {
        font-size: var(--badge-app-secondary-font-size);
      }
      .inner-badge {
        font-size: var(--badge-app-mobile-secondary-font-size);
      }
    }
  `;

  constructor() {
    super();
    this.title = "FRONTEND TESTING";
    this.toggleMarker = new URL('../assets/chevron-down.svg', import.meta.url).href;
    this.icon = "https://upload.wikimedia.org/wikipedia/commons/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png";
    this.description = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools"
    this.document = "Steve's Dataset"
    this.documentLink = "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html"
    this.spacer = "---------------------------------------"
    this.authorInfo = "Badge Creator: "
    this.authorIcon = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a-kgu4yHL._AC_UF894,1000_QL80_.jpg"
    this.author = "Joshua Hantman"
    this.timeInfo = "Approximate time to complete: "
    this.time = "4.0 hours"
    this.stepInfo = "Steps to Earn This Badge"
    this.steps = []
    this.loadingMarker = "https://cdn.discordapp.com/attachments/434857360155213827/1094505354391461948/745856610882289665.png"
    this.toggleOpening = false;
    this.loadingState = true;
    this.updateSteps()
  }

  updateSteps(e){
    const address = '../api/step-data';
    fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        let filterSteps = data.filter(item => {
          return item.tag.includes(this.title)});
        this.steps=filterSteps; 
        setTimeout(() => {
          this.loadingState=false;
        }, 2000); 
        console.log("Loading Screen is: " + this.loadingState);
    });
  }

    //Changes state of boolean property "toggleOpening" when the details attribute matches
    toggleEvent(e){
      if(this.shadowRoot.querySelector('details').getAttribute('open') == ""){
        this.toggleOpening = true;
        this.updateSteps(this.title);
      }
      else{
        this.toggleOpening = false;
        this.loadingState = true;
      }
    }

    //Creates new event listener to record when the toggleEvent is invoked
    updated(changedProperties){
      changedProperties.forEach((oldValue, propName)=>{
        if(propName === "toggleOpening"){
          this.dispatchEvent(new CustomEvent('opened-changed', {
            composed: true,
            bubbles: true,
            cancelable: false,
            detail:{
              value: this[propName]
            }
          }));
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        }
      });
    }

  render() {
    if(this.loadingState){
      return html`
      <div class="badge">
        <details .open="${this.toggleOpening}" @toggle="${this.toggleEvent}">
          <summary class="collapse-card"><img src=${this.icon} class="primary-icon" /> <div class="title-underline">${this.title}</div> <img src=${this.toggleMarker} class="summary-marker"/></summary>
          <div class="inner-badge">
          ${this.description}
            <a href=${this.documentLink} class="link-highlight">${this.document}</a>
          <div class="spacer-wrapper">
            ${this.spacer}
          </div>
          <div class="author-wrapper">
            ${this.authorInfo} <img src=${this.authorIcon} class="author-icon"/> ${this.author}
          </div>
          ${this.timeInfo} ${this.time}
          <div class="step-container">
            <div part="step-font">
              ${this.stepInfo}
            </div>
            <div class="loading-wrapper">
             <img class="loading-icon" src="${this.loadingMarker}"></div>
          </div>
        </div>
        </details>
      </div>
  `;
}

    return html`
        <div class="badge">
          <details .open="${this.toggleOpening}" @toggle="${this.toggleEvent}">
            <summary class="collapse-card"><img src=${this.icon} class="primary-icon" /> <div class="title-underline">${this.title}</div> <img src=${this.toggleMarker} class="summary-marker"/></summary>
            <div class="inner-badge">
            ${this.description}
              <a href=${this.documentLink} class="link-highlight">${this.document}</a>
            <div class="spacer-wrapper">
              ${this.spacer}
            </div>
            <div class="author-wrapper">
              ${this.authorInfo} <img src=${this.authorIcon} class="author-icon"/> ${this.author}
            </div>
            ${this.timeInfo} ${this.time}
            <div class="step-container">
              <div part="step-font">
                ${this.stepInfo}
              </div>
              ${this.steps.map(step => html`
                <step-card unit-icon="${step.unitIcon}" information="${step.information}" duration="${step.duration}">
                </step-card>
              `)}
            </div>
          </div>
          </details>
        </div>
    `;
  }
}

customElements.define('badge-card', BadgeCard);