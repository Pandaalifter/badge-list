import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class StepCard extends LitElement {
  static properties = {
    unitIcon: { attribute: "unit-icon", type: String },
    information: { type: String},
    duration: { type: String}
  }

  static styles = css`
    :host {
      display: block;
      font-family: var(--badge-app-font-family);
      background-color: #f9f9f9;
      font-size: 14px;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #e1e1e1;
      padding: 8px 0px;
      max-height: 30px;
    }
    .left-elements{
      padding-left: 8px;
    }

    .description-spacing {
      display: inline;
      padding-left: 32px;
    }
    .time-spacing {
      padding-right: 120px;
      padding-top: 4.5px;
    }
  `;

  constructor() {
    super();
    this.stepIcon = 'av:play-circle-filled';
    this.stepDescription = "Create a User Pool in Amazon Cognito"
    this.stepTime = "4.0 hours"
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="left-elements">
          <simple-icon icon="${this.stepIcon}" style="--simple-icon-color:#d4d1cc;--simple-icon-width:30px;--simple-icon-height:30px;"></simple-icon> 
          <div class="description-spacing">${this.stepDescription}</div>
        </div> 
        <div class="time-spacing">${this.stepTime}</div>
      </div>
    `;
  }
}

customElements.define('step-card', StepCard);