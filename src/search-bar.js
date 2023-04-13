import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    value: { type: String},
    inputs: { type: String},
    filteredInputs: { reflect: true, type: Array}
  }

  static styles = css`
    :host {
      display: var(--badge-app-display);
      justify-content: var(--badge-app-justify-content);
    }
    .container{
      margin-top: 10px;
      margin-bottom: 16px;
    }
    .search {
      width: 900px;
      height: 32px;
      border: 1px solid #f8f8f7;
      display: block;
      font-family: var(--badge-app-font-family);
      font-size: var(--badge-app-secondary-font-size);
      padding: 8px 4px 8px 64px;
      box-shadow: 1px 1px 5px 0.5px #bbb6b0;
      background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath fill='%239a9691' d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
      background-position: 24px;
    }
    .search:focus{
      outline: none;
      background-color: var(--badge-app-tertiary-color);
    }

    @media only screen and (max-width: 800px) {
      .search {
        width: 500px;
      }
    }

    @media only screen and (max-width: 500px) {
      .search {
        width: 200px;
        font-size: var(--badge-app-secondary-font-size);
      }
    }
  `;

  constructor() {
    super();
    this.value = "";
    this.topic = 'Search Content and People';
    this.inputs = "";
    this.filteredInputs = [];
  }

  //Triggered by event listener and records initial input
  searchInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('input-changed', {
      detail: {
        value: this.value,
      }
    }));
  }
    
  render() {
    return html`
    <!-- Search Bar Section -->
    <div class="container">
      <input type="text" class="search" placeholder="${this.topic}" value="${this.value}" @input="${this.searchInput}" />
    </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);