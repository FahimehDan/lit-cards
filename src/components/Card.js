import { LitElement, html, css } from "lit";

export class CardItem extends LitElement {
  static properties = {
    userName: { type: String },
    name: { type: String },
    description: { type: String },
    id: { type: String },
    modificationDate: { type: Number },
    iconClass: { type: String },
  };

  static styles = css`
    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      box-shadow: none;
      transition: 0.3s;
      width: 280px;
      height: 407px;
      border-radius: 8px;
      font-style: roboto;
    }
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .card-header {
      display: flex;
    }
    .small-icon {
      padding-left: 18px;
      padding-right: 8px;
    }

    .username {
      font-size: 14px;
      font-weight: 500;
    }

    .description {
      font-size: 13px;
      color: #627184;
    }

    .title {
      font-size: 14px;
      padding-bottom: 20px;
      font-weight: 500;
    }

    .text-secondary {
      color: #627184;
      font-size: 12px;
    }

    .card-details {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .card-detail-left {
      align-items: start;
      font-family: roboto;
      font-size: 16px;
      text-align: start;
    }

    .card-detail-left P {
      margin: 8px 0;
      font-size: 12px;
      font-weight: 500;
    }

    .card-detail-right {
      align-items: end;
      font-family: roboto;
      font-size: 16px;
      text-align: end;
    }

    .card-detail-right P {
      margin: 8px 0;
      font-weight: 500;
      font-size: 12px;
    }

    .container {
      padding: 2px 16px;
    }

    .image-bg {
      display: block;
      margin: auto;
      width: 30%;
      height: 30%;
      background-color: #f5f8fa;
      padding: 20px;
    }
    .img-container {
      background-color: #f5f8fa;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      padding-right: 30px;
      padding-left: 30px;
      margin-bottom: 10px;
      padding-top: 15px;
    }

    .card-footer .icon-button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
      border-radius: 50%;
      padding: 3px;
      transition: background 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-button:hover {
      background-color: black;
    }
  `;

  render() {
    return html`

    <div class="card">
      <header class="container">
        <h5 class="card-header">
           <input type="checkbox" id="${this.id}" name="${this.userName}" value="${this.id}">
           <img src="./src/assets/icon-world.svg" alt="Avatar" class="small-icon">
           <label class="username" for="${this.userName}"> ${this.userName}</label><br>
        </h5>
      </header>
       <div class="img-container">
          <img src="./src/assets/icon-world.svg" alt="Avatar" class="image-bg">
       </div>
       <div class="container card-body">
       <div class="card-title">
            <p class="title">${this.name}</p> 
            <p class="description">${this.description}<p>
       </div>
       <div class="card-details">
         <div class="card-detail-left">
             <P>Modifié le</P>
             <p class="text-secondary">${this.modificationDate}<p>
         </div>
          <div class="card-detail-right">
             <P>Application</P>
             <p class="text-secondary">Mon application<p>
          </div>
       </div>
       </div>
  
    <div class="card-footer">
       <button class="icon-button">
          <img src="./src/assets/icon-eye.svg" class="fas fa-heart"></i>
       </button>
       <button class="icon-button">
          <img src="./src/assets/icon-brush.svg" class="fas fa-star"></i>
      </button>
    <button class="icon-button">
          <img src="./src/assets/icon-file-copy.svg" class="fas fa-comment"></i>
     </button>
     <button class="icon-button">
          <img src="./src/assets/icon-delete.svg" class="fas fa-share"></i>
     </button>
     <button class="icon-button">
          <img src="./src/assets/icon-more-horiz.svg" class="fas fa-bookmark"></i>
     </button>
   </div>

</div>
     
    `;
  }
}

customElements.define("card-item", CardItem);
