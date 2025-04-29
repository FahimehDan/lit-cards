import { LitElement, html, css } from 'lit';
import './Header.js';
import './Card.js';

export class AppLayout extends LitElement {
  static properties = {
    cards: { type: Array }
  };

  constructor() {
    super();
    this.cards = [];
  }

  static styles = css`
    .container {
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <div class="container">
        <button @click=${this.createCard}>Créer</button>
        <div>
          ${this.cards.map(card => html`
            <card-item
              .userName=${card.userName}
              .name=${card.name}
              .description=${card.description}>
            </card-item>
          `)}
        </div>
      </div>
    `;
  }

  createCard() {
    const card = {
      userName: 'Utilisateur',
      name: 'Titre Aléatoire',
      description: 'Une description de la carte'
    };
    this.cards = [...this.cards, card];
  }
}

customElements.define('app-layout', AppLayout);


