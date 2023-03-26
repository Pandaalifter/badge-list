import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeList extends LitElement {
  static get properties() {
    return {
      badgeCounter: { 
        attribute: "badge-counter",
        type: String },
      title: { type: String },
      icon: { type: String},
      description: { type: String},
      author: { type: String},
      authorIcon: { type: String},
      authorName: { type: String},
      time: { type: String}
    }
  }

  static styles = css`
    :host {
      min-height: 100vh;
      color: #1a2b42;
      max-width: 960px;
      margin: auto;
      text-align: center;
    }
    .badge{
      border: 3px solid #041E42;
      width: 1000px;
      text-align: left;
    }
    details{
      display: inline-block;
      text-align: left;
    }
  `;

  constructor() {
    super();
    this.title = "Amazon Cognito";
    this.icon = "https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png";
    this.description = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools \n https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html"
    this.author = "Badge Creator: "
    this.authorIcon = "https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png"
    this.authorName = "Joshua Hantman"
    this.time = "Approximate time to complete: 4.0 hours"
  }

  render() {
    return html`
        <div class="badge">
          <img src=${this.icon} /> ${this.title}
          <details>
            <summary></summary>
            ${this.description}
            <div>
            ${this.author} <img src=${this.authorIcon} /> ${this.authorName}
            </div>
            ${this.time}
          </details>
        </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);