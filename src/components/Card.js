import { LitElement, html, css } from 'lit';

export class CardItem extends LitElement {
  static properties = {
    userName: { type: String },
    name: { type: String },
    description: { type: String }
  };

  static styles = css`
    .card {
      background: white;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
  `;

  render() {
    return html`
      <div class="card">
        <h3>${this.name}</h3>
        <p><strong>${this.userName}</strong></p>
        <p>${this.description}</p>
      </div>
    `;
  }
}

customElements.define('card-item', CardItem);

