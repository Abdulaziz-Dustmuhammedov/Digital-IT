import React from "react";

import rightArrow from "../../assets/icons/right-arrow.svg";

import "./index.css";

const Direction = () => {
  return (
    <div className="direction-section">
      <div className="container">
        <div className="direction-wrapper">
          <h2 className="direction-title">Направления курсов</h2>

          <div className="navigation-wrapper">
            <div className="nav-column">
              <div className="nav-title-wrap">
                <h3 className="nav-title">Программирование</h3>
              </div>
              <ul className="nav-list">
                <li className="nav-item">
                  Все курсы по программированию <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Python-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Web-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Мобильная разработка <img src={rightArrow} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
