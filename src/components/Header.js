import { LitElement, html, css } from 'lit';

export class Header extends LitElement {
  static styles = css`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #4a90e2;
      color: white;
      padding: 1rem;
    }
    input {
      padding: 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="header">
        <button @click="${() => this.dispatchEvent(new CustomEvent('create-card'))}">Créer</button>
        <input type="text" placeholder="Rechercher..." @input="${e => this.dispatchEvent(new CustomEvent('search-input', { detail: e }))}" />
      </div>
    `;
  }
}

customElements.define('app-header', Header);
