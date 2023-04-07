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
    .container{
      margin-top: 10px;
    }
    .search {
      width: 900px;
      height: 32px;
      border: 1px solid #f8f8f7;
      font-family: verdana, sans-serif;
      display: block;
      padding: 9px 10px 9px 40px;
      box-shadow: 1px 1px 5px 0.5px #bbb6b0;
      background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
      background-origin: content-box;
    }
    .search:focus{
      outline: none;
      background-color: #f8f8f7f2;
    }
    .search::placeholder{
      padding-left: 24px;
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
    <div class="container">
      <input type="text" class="search" placeholder="${this.topic}" @input="${this.searchInput}" />
    </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);