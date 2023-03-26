import { LitElement, html, css } from 'lit';

class StepCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: inline;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    `;
  }
}

customElements.define('step-card', StepCard);