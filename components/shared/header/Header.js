import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from '../../../assets/logo.png'

const Header = ({ handleDrawer }) => {
  return (
    <div className="header">
      <div className="header__flex">
        <button className="btn-box" onClick={handleDrawer}>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            fill="#62727a"
            data-view-component="true"
            class="octicon octicon-three-bars Button-visual"
          >
            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
          </svg>
        </button>
        <Link href="/" className="header__logo">
          <Image src={Logo} alt="logo" width={30} height={30} />
        </Link>
      </div>
      <div className="header__flex">
        <button className="header__search-btn">
          <div className="header__search-btn-start">Products</div>
          <div className="header__search-btn-middle">Type to search</div>
          <label>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              fill="#62727a"
              data-view-component="true"
              class="octicon octicon-search"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
          </label>
        </button>
        <button className="btn-box search__btn">
        <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              fill="#62727a"
              data-view-component="true"
              class="octicon octicon-search"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
        </button>
        <button className="btn-box header__search-btn-cart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#62727a">
  <path d="M7 18c-1.104 0-2 .897-2 2 0 1.104.896 2 2 2s2-.896 2-2c0-1.103-.896-2-2-2zm0 3c-.552 0-1-.449-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .551-.448 1-1 1zm10-3c-1.104 0-2 .897-2 2 0 1.104.896 2 2 2s2-.896 2-2c0-1.103-.896-2-2-2zm0 3c-.552 0-1-.449-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .551-.448 1-1 1zM7.812 15h10.593c.434 0 .813-.266.938-.676l2.516-7.844c.033-.104.052-.214.052-.326 0-.552-.448-1-1-1H5.586L4.484 2H1v2h2.268l3.477 10.43-1.25 3.531c-.062.175-.094.365-.094.558 0 .552.448 1 1 1h12v-2H7.812l.562-1.5zM20 6l-2 6H8.403l-2-6H20z"/>
</svg>

        </button>
      </div>
    </div>
  );
};

export default Header;
