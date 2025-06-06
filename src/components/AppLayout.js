import { LitElement, html, css } from "lit";
import "./Menu.js";
import "./Card.js";

export class AppLayout extends LitElement {
  static properties = {
    cards: { type: Array },
    searchText: { type: String },
  };

  constructor() {
    super();
    this.cards = [];
    this.searchText = "";
  }

  static styles = css`
    .header {
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: white;
      padding: 5px 24px 24px 24px;
      border-bottom: 1px solid #a3b1c2;
    }

    .header .create-button {
      padding-inline-end: 1rem;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header .create-button .text-header {
      font-size: 12px;
    }

    .header .search-bar {
      padding-inline-end: 1rem;
      justify-content: start;
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-inline-start: 1rem;
    }

    .header .search-bar .search-header {
      font-size: 12px;
      margin: 12px 16px 12px 0px;
    }

    input {
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #a3b1c2;
      box-sizing: border-box;
      border-inline-end: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .btn {
      height: 30px;
      line-height: 30px;
      width: 30px;
      font-size: 20px;
      border-radius: 50%;
      background-color: #1565c0;
      color: white;
      text-align: center;
      cursor: pointer;
      border: none;
    }

    .divider {
      height: 60px;
      width: 1px;
      background-color: #c3d1e1;
      margin: 0 10px;
    }

    .horizental-line {
      width: 100%;
      height: 32px;
      background-color: white;
      border-bottom: 1px solid #a3b1c2;
      border-top: 0;
      border-inline: 0;
      margin: 0;
    }

    .button-search {
      border: none;
      background-color: transparent;
    }

    .search-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      background: white;
      border: none;
      background-color: #1565c0;
    }

    .search-wrapper input {
      flex: 1;
      padding: 0.5rem;
      outline: none;
    }

    .search-wrapper button {
      border: none;
      cursor: pointer;
      height: 100%;
      background-color: #1565c0;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      padding: 25px;
      background-color: #ecf2f6;
    }
  `;

  render() {
    const filteredCards = this.cards.filter((card) =>
      card.name.toLowerCase().includes(this.searchText)
    );

    return html`
      <menu-bar></menu-bar>
      <div class="container">
        <div class="header">
          <div class="create-button">
            <p class="text-header">Créer</p>
            <button @click="${this.createCard}" class="btn">+</button>
          </div>

          <div class="divider"></div>

          <div class="search-bar">
            <label for="search" class="search-header">Rechercher</label>
            <div class="search-wrapper">
              <input
                type="text"
                name="search"
                id="searchBar"
                placeholder="Nom d’une ressource"
                @input=${this.updateSearch}
                .value=${this.searchText}
              />
              <button type="submit" class="button-search">
                <img src="/images/search.svg" alt="Search" />
              </button>
            </div>
          </div>
        </div>
        <hr class="horizental-line" />

        <div class="card-container">
          ${filteredCards.map(
            (card) => html`
              <card-item
                .userName=${card.userName}
                .name=${card.name}
                .description=${card.description}
                .id=${card.id}
                .modificationDate=${card.modificationDate}
                .iconClass=${card.iconClass}
              >
              </card-item>
            `
          )}
        </div>
      </div>
    `;
  }

  updateSearch(e) {
    this.searchText = e.target.value.toLowerCase();
  }

  createCard() {
    const card = {
      userName: "Jane Doe",
      name: "Et voluptate elit dolore elit et nostrud ",
      iconClass: "my-icon-class",
      description:
        "Aliqua voluptate laboris eiusmod sit occaecat. Dolor irure incididunt labor ...",
      id: crypto.randomUUID(),
      modificationDate: Date.now(),
    };
    this.cards = [...this.cards, card];
  }
}

customElements.define("app-layout", AppLayout);
