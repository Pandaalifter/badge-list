import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class BadgeList extends LitElement {
  static get properties() {
    return {
      badgeCounter: { 
        attribute: "badge-counter",
        type: String },
      badges: { type: Array }
    }
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
    }
  `;

  constructor() {
    super();
    this.badgeCounter = "Badges (0)";
    this.badges = [];
    this.updateDirectory();
  }

  updateDirectory(){
    const address = '../api/list-data';
    fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        this.badges = data;
        this.badgeCounter = "Badges (" + data.length + ")";
    });
  }

  render() {
    return html`
    <div>
      ${this.badgeCounter}
    </div>
    <div class="wrapper">
            ${this.badges.map(badge => html`
            <div class="item">
                <badge-card 
                    title="${badge.title}" 
                    icon="${badge.icon}" 
                    description="${badge.description}"
                    document-link="${badge.documentLink}"
                    author-icon="${badge.authorIcon}"
                    author="${badge.author}"
                    time="${badge.time}">   
                </badge-card>
            </div>
            `)}
        </div>
    `;
  }
}

customElements.define('badge-list', BadgeList);