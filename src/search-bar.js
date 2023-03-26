import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
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
    .searchbar {
      width: 500px;
    }
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
  }

  render() {
    return html`
    <div>
      <input type="text" class="searchbar" placeholder="${this.topic}">
    </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);