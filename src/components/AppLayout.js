import { LitElement, html, css } from "lit";
import "./Header.js";
import "./Card.js";

export class AppLayout extends LitElement {
  static properties = {
    cards: { type: Array },
  };

  constructor() {
    super();
    this.cards = [];
  }

  static styles = css`
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      padding: 25px;
      background-color: #ecf2f6;
    }
  `;

  render() {
    return html`
      <div class="container">
        <button @click=${this.createCard}>Créer</button>
        <input />
        <div class="card-container">
          ${this.cards.map(
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

  createCard() {
    const card = {
      userName: "Jane Doe",
      name: "Et voluptate elit dolore elit et nostrud ",
      iconClass: "my-icon-class",
      description:
        "Aliqua voluptate laboris eiusmod sit occaecat. Dolor irure incididunt labor ...",
      id: "056a3b1b-0ce7-11ed-81fc-71bc641d1d18",
      modificationDate: "1658843778707",
    };
    this.cards = [...this.cards, card];
  }
}

customElements.define("app-layout", AppLayout);
