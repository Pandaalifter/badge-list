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
      display: inline;
    }
  `;

  constructor() {
    super();
    this.stepIcon = 'My app';
    this.stepDescription = "Create a User Pool in Amazon Cognito"
    this.stepTime = "4.0 hours"
  }

  render() {
    return html`

    `;
  }
}

customElements.define('step-card', StepCard);