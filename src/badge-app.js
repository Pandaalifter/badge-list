import { LitElement, html, css } from 'lit';
import "./badge-list.js"
import "./search-bar.js";

class BadgeApp extends LitElement {
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

  //API Fetch Call, deactivates loading screen when finished
  async getSearchResults(value = '') {
    const address = `/api/search-data?search=${value}`;
    const results = await fetch(address).then((response) => { 
      if (response.ok) {
        return response.json()
      }
      return [];
     })
      .then((data) => {
        setTimeout(() => {
            this.shadowRoot.querySelector('badge-list').isLoading = false;
        }, 3000);
        return data;
      });

      return results;
  }

  //Event Listener for input in search bar 
  async handleSearchEvent(e) {
    const term = e.detail.value;

    //Reactivates loading screen after initial render
    if(this.shadowRoot.querySelector('badge-list').badges.length > 0) {
        this.shadowRoot.querySelector('badge-list').isLoading = true;
    }
    this.shadowRoot.querySelector('badge-list').badges = await this.getSearchResults(term);
  }

  render() {
    return html`
    <!-- Component Tracks User Input -->
    <search-bar @input-changed="${this.handleSearchEvent}"></search-bar>

    <!-- Component Tracks Number of Badges Visible -->
    <badge-list></badge-list>
    `;
  }
}

customElements.define('badge-app', BadgeApp);