import { LitElement, html, css } from 'lit';
import "./badge-list.js"
import "./search-bar.js";

class BadgeApp extends LitElement {
  static get properties() {
    return {
      bobby: { type: String}
    }
  }

  static styles = css`
    :host {
      font-family: var(--badge-app-font-family);
    }
  `;

  constructor() {
    super();

    this.getSearchResults().then((results) => {
      this.shadowRoot.querySelector('badge-list').badges = results;
    })
  }

  async getSearchResults(value = '') {
    const address = `/api/search-data?search=${value}`;
    const results = await fetch(address).then((response) => { 
      if (response.ok) {
        return response.json()
      }
      return [];
     })
      .then((data) => {
        return data;
      });

      return results;
  }

  async handleSearchEvent(e) {
    const term = e.detail.value; //this is the search term
    this.shadowRoot.querySelector('badge-list').badges = await this.getSearchResults(term);
  }

  render() {
    return html`

    <search-bar @input-changed="${this.handleSearchEvent}"></search-bar>
    <!-- Section Tracks Number of Badges Visible -->
    <badge-list></badge-list>
    `;
  }
}

customElements.define('badge-app', BadgeApp);