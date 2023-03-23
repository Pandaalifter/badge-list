import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--badge-list-background-color);
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <input type="text" placeholder="Search Content, Topics, and People">
    `;
  }
}

customElements.define('search-bar', SearchBar);