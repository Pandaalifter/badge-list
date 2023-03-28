import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class StepCard extends LitElement {
  static properties = {
    stepIcon: { type: String },
    stepDescription: { type: String},
    stepTime: { type: String}
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.stepIcon = 'https://public.lionpath.psu.edu/cs/CSPRD/cache/PE_LP_LOGO_WHITE_MD_PNG_1.PNG';
    this.stepDescription = "Create a User Pool in Amazon Cognito"
    this.stepTime = "4.0 hours"
  }

  render() {
    return html`
      <img src=${this.stepIcon}> ${this.stepDescription} ${this.stepTime}
    `;
  }
}

customElements.define('step-card', StepCard);