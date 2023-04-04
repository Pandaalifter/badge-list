import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

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
      toggleOpening: {type: Boolean, reflect: true}
    }
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
    }
    .badge{
      border: 1px solid #3e98d3;
      border-left: 15px solid #3e98d3;
      border-radius: 5px;
      width: 1000px;
      text-align: left;
      margin: auto;
      margin-bottom: 5px;
      font-family: "effra", sans-serif;
    }

   

    .primary-icon{
      max-height: 40px;
    }

    .collapse-card {
      background-color: #cfe6f4;
      border-radius: 0px 5px 0px 0px;
      padding-top: 4px;
    }

    .link-test:link {
      color: red;
    }

    .author-icon {
      border-radius: 50%;
    }

    .steparations {
      display: block;
    }

  `;

  constructor() {
    super();
    this.title = "FRONTEND TESTING";
    this.icon = "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png";
    this.description = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools"
    this.documentLink = "https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html"
    this.spacer = "--------------------------------------------------------------"
    this.authorInfo = "Badge Creator: "
    this.authorIcon = "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png"
    this.author = "Joshua Hantman"
    this.timeInfo = "Approximate time to complete: "
    this.time = "4.0 hours"
    this.stepInfo = "Steps to Earn This Badge"
    this.steps = []
    this.toggleOpening = false;
    this.updateSteps()
  }

  updateSteps(title){
    const address = '../api/step-data';
    fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        let filterSteps = data.filter(item => {
          return item.tag === title});
        this.steps=filterSteps; 
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
              value: this[propName],
              name: this.title,
              testArray: this.steps
            }
          }));
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        }
      });
    }

  render() {
    return html`
        <div class="badge">
          <details .open="${this.toggleOpening}" @toggle="${this.toggleEvent}">
            <summary class="collapse-card"><img src=${this.icon} class="primary-icon" /> ${this.title}</summary>
            ${this.description}
            <div class="link-test">
              <a href=${this.documentLink}>${this.documentLink}</a>
            </div>
            <div>
              ${this.spacer} ${this.name}
            </div>
            <div>
              ${this.authorInfo} <img src=${this.authorIcon} class="author-icon"/> ${this.author}
            </div>
            ${this.timeInfo} ${this.time}
            <div class="steparations">
              ${this.stepInfo}
              <div>
              ${this.steps.map(step => html`
                <step-card stepIcon="${step.stepIcon}" stepDescription="${step.stepDescription}" stepTime="${step.stepTime}">
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