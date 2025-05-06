import { LitElement, html, css } from "lit";

export class MenuBar extends LitElement {
  static styles = css`
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      background-color: #ecf2f6;
      height: 40px;
      line-height: 0px;
      overflow: hidden;
    }

    .left,
    .right {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .menu-notif {
      padding-inline-end: 5px;
    }

    .home-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: 56px;
      height: 40px;
    }

    .menu-email {
      position: relative;
    }

    .circle-counter {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 16px;
      height: 16px;
      background: #eb6200;
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 16px;
      font-size: 12px;
      font-weight: 500;
      box-sizing: border-box;
      transform: translate(5px, -5px);
    }

    .right.menu-icons {
      padding: 0;
      background-color: #ecf2f6;
    }

    .divider {
      height: 20px;
      width: 1px;
      background-color: #627184;
      margin: 0 10px;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="left">
          <a href="/" class="home-icon"><img src="./src/assets/home.svg" /></a>
        </div>
        <div class="right menu-icons">
          <a href="#" class="menu-star"><img src="./src/assets/star.svg" /></a>
          <div class="divider"></div>
          <a href="#" class="menu-setting"
            ><img src="./src/assets/setting.svg"
          /></a>
          <div class="divider"></div>
          <a href="#" class="menu-support"
            ><img src="./src/assets/support.svg"
          /></a>
          <div class="divider"></div>
          <a href="#" class="menu-email"
            ><img src="./src/assets/email.svg" /><span
              class="circle-counter"
              id="counter"
              >4</span
            ></a
          >

          <div class="divider"></div>
          <a href="#" class="menu-notif"
            ><img src="./src/assets/notif.svg"
          /></a>
          <a href="#" class="menu-avatar"
            ><img src="./src/assets/avatar.png"
          /></a>
        </div>
      </nav>
    `;
  }
}

customElements.define("menu-bar", MenuBar);
