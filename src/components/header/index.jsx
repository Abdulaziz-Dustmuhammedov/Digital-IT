import React, { useState } from "react";

import MobileHeader from "../mobile-header";

import logo from "../../assets/icons/Logo.svg";
import arrowIcon from "../../assets/icons/arrow-vector.svg";
import searchLogo from "../../assets/icons/search-logo.svg";
import closeImg from "../../assets/icons/close-img.svg";
import hamburgerBtn from "../../assets/icons/hamburger-btn.svg";
import "./index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="header-main-wrap">
        <header className="site-header">
          <div className="container">
            <div className="header-wrap">
              <img src={logo} alt="" />
              {/* <div className="header "> */}
              <nav className="navbar">
                <ul className="header-list flex items-center justify-center gap-10">
                  <li className="header-item bg">Курсы</li>
                  <li className="header-item">Школы</li>
                  <li className="header-item">Отзывы о школах</li>
                  <li className="header-item">Акции школ</li>
                  <li className="header-item">Блог</li>
                </ul>
              </nav>

              <div className="icons-wrap flex items-center gap-5">
                <div className="arrow-wrapper">
                  <img className="arrow-img" src={arrowIcon} alt="" />
                </div>

                <form className="search-form flex items-center" action="">
                  <img className="mr-4" src={searchLogo} alt="" />
                  <input
                    className="font-normal text-base outline-none h-full"
                    type="text"
                    placeholder="Искать курсы"
                  />
                </form>

                <button className="burger-btn">
                  {isOpen ? (
                    <img
                      className="close-img"
                      src={closeImg}
                      alt="close X img"
                      width={20}
                      height={20}
                      onClick={onClose}
                    />
                  ) : (
                    <img
                      className="hamburger-menu"
                      src={hamburgerBtn}
                      alt=""
                      width={20}
                      height={20}
                      onClick={onOpen}
                    />
                  )}
                </button>
              </div>

              {/* </div> */}
            </div>
          </div>
        </header>
      </div>

      {isOpen && <MobileHeader onClose={onClose} />}
    </>
  );
};

export default Header;
