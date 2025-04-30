import { LitElement, html, css } from 'lit';

export class CardItem extends LitElement {
  static properties = {
    userName: { type: String },
    name: { type: String },
    description: { type: String },
    id: { type: String },
    modificationDate: {type: Number},
    iconClass: {type: String}

  };

  static styles = css`

    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      box-shadow: none;
      transition: 0.3s;
      width: 280px;
      height: 480px;
      border-radius: 8px;
    }
      .card:hover {
           box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
     }

     .card-details{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; 
      }

   .card-detail-left{
     align-items:start;
    }

  .card-detail-right{
     align-items:end;
      }
           

.container {
  padding: 2px 16px;
}
  .image-bg{
   display: block;
    margin: auto;
    width: 30%;
    height: 30%;
    background-color:#F5F8FA;
    padding: 20px;
  }
    .img-container{
    background-color:#F5F8FA;
    }
  `;

  render() {
    return html`

    <div class="card">
      <header class="container">
        <h4>
           <input type="checkbox" id="${this.id}" name="${this.userName}" value="${this.id}">
           <label for="${this.userName}"> ${this.userName}</label><br>
        </h4>
      </header>
       <div class="img-container">
          <img src="./src/assets/icon-world.svg" alt="Avatar" class="image-bg">
       </div>
       
       <div class="container">
            <p>${this.name}</p> 
            <p>${this.description}<p>
       </div>
       <div class="card-details">
       <div class="card-detail-left">
             <h4>Modifié le</h4>
             <p>${this.modificationDate}<p>
          </div>
          <div class="card-detail-right">
             <h4>Application</h4>
             <p>Mon application<p>
          </div>

       </div>

    <footer class="card-icons">
        <img src="./src/assets/icon-eye.svg" class="fas fa-heart"></i>
        <img src="./src/assets/icon-brush.svg" class="fas fa-star"></i>
        <img src="./src/assets/icon-file-copy.svg" class="fas fa-comment"></i>
        <img src="./src/assets/icon-delete.svg" class="fas fa-share"></i>
        <img src="./src/assets/icon-more-horiz.svg" class="fas fa-bookmark"></i>
    </footer>

</div>


     
    `;
  }
}

customElements.define('card-item', CardItem);

