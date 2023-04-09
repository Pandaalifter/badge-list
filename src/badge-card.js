import { LitElement, html, css } from 'lit';

// let marker = new URL('../assets/chevron-down.svg', import.meta.url).href;

class BadgeCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      icon: { type: String},
      description: { type: String},
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
      isLoading: {type: Boolean, reflect: true}
    }
  }

  static styles = css`
    :host {
      display: flex;
      font-family: var(--badge-app-font-family);
    }

    :host([toggleOpening]) .summary-marker{
      transform: var(--badge-card-toggleOpening-transform, rotate(180deg));
    }

    .badge{
      border: 1px solid #3e98d3;
      border-left: 15px solid #3e98d3;
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
      max-height: 40px;
      padding-left: 2ch;
      vertical-align: middle;
      padding-top: 2px;
      padding-bottom: 2px;
    }

    .collapse-card {
      background-color: #cfe6f4;
      border-radius: 0px 5px 0px 0px;
      list-style: none;
    }

    .collapse-spacing {
      display: flex;
      justify-content: space-between;
    }

    .collapse-spacing:focus-within {
      display: flex;
      justify-content: space-between;
    }

    .link-test {
      padding-top: 8px;
    }

    .link-test:link {
      color: #cfe6f4;
    }

    .link-test:visited{
      color: #3e98d3;
    }

    .author-icon {
      border-radius: 50%;
      max-width: 40px;
      max-height: 40px;
      vertical-align: middle;
      object-fit: cover;
    }

    .steparations {
      display: block;
    }

    .step-size {
      font-size: 22px;
    }

    .summary-marker {
      transition: 0.2s;
      margin-right: 8px;
    }

    .spacer-padding {
      padding-top: 64px;
    }

    .heightening-my-lines {
      padding: 24px;
    }

    step-card:nth-child(2n){
      background-color: #ffffff;
    }

    .loading-icon {
      width: 80px;
      animation: loading-spin infinite 5s linear;
    }

    .loading-padding {
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
  `;

  constructor() {
    super();
    this.title = "FRONTEND TESTING";
    this.toggleMarker = new URL('../assets/chevron-down.svg', import.meta.url).href;
    this.icon = "https://upload.wikimedia.org/wikipedia/commons/8/85/Solo-a-star-wars-story-tall-A_%28cropped%29.png";
    this.description = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools"
    this.documentLink = "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html"
    this.spacer = "--------------------------------------------------------------"
    this.authorInfo = "Badge Creator: "
    this.authorIcon = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71a-kgu4yHL._AC_UF894,1000_QL80_.jpg"
    this.author = "Joshua Hantman"
    this.timeInfo = "Approximate time to complete: "
    this.time = "4.0 hours"
    this.stepInfo = "Steps to Earn This Badge"
    this.steps = []
    this.loadingMarker = "https://cdn.discordapp.com/attachments/434857360155213827/1094505354391461948/745856610882289665.png"
    this.toggleOpening = false;
    this.isLoading = true;
    this.updateSteps()
  }

  updateSteps(){
    const address = '../api/step-data';
    fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        console.log(data + " data checker")
        let filterSteps = data.filter(item => {
          return item.tag.includes(this.title)});
        this.steps=filterSteps; 
        this.isLoading=false;
        console.log("Loading Screen is: " + this.isLoading);
    });
  }

    //Changes state of boolean property "toggleOpening" when the details attribute matches
    toggleEvent(){
      if(this.shadowRoot.querySelector('details').getAttribute('open') == ""){
        this.toggleOpening = true;
        this.updateSteps(this.title);
      }
      else{
        this.toggleOpening = false;
        this.isLoading = true;
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
    if(this.isLoading){
      return html`
              <div class="badge">
          <details .open="${this.toggleOpening}" @toggle="${this.toggleEvent}">
            <summary class="collapse-card"><div class="collapse-spacing"><div><img src=${this.icon} class="primary-icon" /> <div class="title-underline">${this.title}</div> </div><img src=${this.toggleMarker} class="summary-marker"/></div></summary>
            <div class="heightening-my-lines">
            ${this.description}
            <div class="link-test">
              <a href=${this.documentLink}>${this.documentLink}</a>
            </div>
            <div class="spacer-padding">
              ${this.spacer}
            </div>
            <div>
              ${this.authorInfo} <img src=${this.authorIcon} class="author-icon"/> ${this.author}
            </div>
            ${this.timeInfo} ${this.time}
            <div class="steparations">
              <div class="step-size">
                ${this.stepInfo}
              </div>
              <div class="loading-padding">
              <img class="loading-icon" src="${this.loadingMarker}"></div>
              </div>
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
            <div class="heightening-my-lines">
            ${this.description}
            <div class="link-test">
              <a href=${this.documentLink}>${this.documentLink}</a>
            </div>
            <div class="spacer-padding">
              ${this.spacer}
            </div>
            <div>
              ${this.authorInfo} <img src=${this.authorIcon} class="author-icon"/> ${this.author}
            </div>
            ${this.timeInfo} ${this.time}
            <div class="steparations">
              <div class="step-size">
                ${this.stepInfo}
              </div>
              <div class="step-color">
              ${this.steps.map(step => html`
                <step-card unit-icon="${step.unitIcon}" information="${step.information}" duration="${step.duration}">
                </step-card>
              `)}
              </div>
            </div>
          </div>
          </details>
        </div>
    `;
  }
}

customElements.define('badge-card', BadgeCard);