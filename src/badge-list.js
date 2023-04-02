import { LitElement, html, css } from 'lit';
import "./badge-card.js"
import "./search-bar.js";

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
      display: block;
      align-items: center;
    }
    .counter {
      margin-left: 200px;
    }
  `;

  constructor() {
    super();
    this.badgeCounter = "Badges (0)";
    this.badges = [];
    this.updateDirectory();
    this.filterDirectory();
  }

  updateDirectory(){
    const address = '../api/list-data';
    if (document.querySelector("search-bar").filteredInputs.length === 0){
      fetch(address).then((response) => {
          if(response.ok){
              return response.json();
          }
          return [];
      })
      .then((data) => {
          this.badges = data;
          this.badgeCounter = "Badges (" + this.badges.length + ")";
      });
    }
    else{
      fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
      })
      .then((data) => {
        this.badges = data.filter(item => {
          return document.querySelector("search-bar").filteredInputs.some(input => {
            return item.title.toLowerCase().includes(input);
          }) || document.querySelector("search-bar").filteredInputs.some(input => {
            return item.author.toLowerCase().includes(input);
          })
        })
        console.log(this.badges + "tomato");
      });
    }
  }

  updated(changedProperties){
    if (changedProperties.has('badges')){
      this.updateDirectory();
    }
  }

  filterDirectory(){
    console.log(document.querySelector("search-bar").filteredInputs);
    // this.badges = this.badges.filter(item => {
    //   return Object.values(item).some(value => {
    //     return value.toString().toLowerCase().includes(document.querySelector("search-bar").filteredInputs);
    //   })
    // })
    // this.badges = this.badges.filter(item => {
    //   return item.title.toLowerCase().includes(document.querySelector("search-bar").filteredInputs);
    // })
    this.requestUpdate();
  }

  render() {
    return html`
    <div class="counter">
      ${this.badgeCounter} <button @click="${this.filterDirectory}">Test</button>
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