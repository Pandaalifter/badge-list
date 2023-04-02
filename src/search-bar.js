import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    inputs: { type: String},
    filteredInputs: { reflect: true, type: Array}
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
    .search {
      width: 500px;
    }
  `;

  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.inputs = "";
    this.filteredInputs = [];
  }

  searchInput(e) {
        console.log(e.target);
        this.inputs = e.target.value;
        this.shadowRoot.querySelector('.input').innerText = this.inputs; //Just so I don't need to open console all the time
        console.log(".search");
        this.searchFilter()
  }


  searchFilter() {
    let tempArray = [];
    let contents = this.inputs;
    for (let i = 0; i < contents.length; i++) {
        if (/\s|[\p{P}]/u.test(contents[i])) { 
            if (i > 0 && !(/\s|[\p{P}]/u.test(contents[i-1]))) { 
                let formatContents = contents.slice(0, i).replace(/[^\w]/g, '').toLowerCase();
                tempArray.push(formatContents); 
            }
            contents = contents.slice(i + 1);
            i = -1;
        } else if (i === contents.length - 1) { 
            let formatContents = contents.slice(0, i + 1).replace(/[^\w]/g, '').toLowerCase();
            tempArray.push(formatContents);
        }
    }

    this.filteredInputs = tempArray;
    console.log(tempArray);
    console.log(this.filteredInputs);
}

updated(changedProperties){
  changedProperties.forEach((oldValue, propName)=>{
    if(propName === "inputs"){
      this.dispatchEvent(new CustomEvent('input-changed', {
        composed: true,
        bubbles: true,
        cancelable: false,
        detail:{
          value: this[propName]
        }
      }));
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    }
  });
}
    
  render() {
    return html`
    <div>
      <input type="text" class="search" placeholder="${this.topic}" @input="${this.searchInput}">
    </div>
    <div>
        <label>I cri everytiem</label>
            <div class="input"></div>
        </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);