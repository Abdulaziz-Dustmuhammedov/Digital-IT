import React from "react";

import downArrowIcon from "../../assets/icons/down-arrow.svg";
import "./index.css";

const DirectionMobile = () => {
  return (
    <div className="direction-mobile-section">
      <div className="direction-mobile-wrapper">
        <h3 className="direction-mobile-title">Направления курсов</h3>

        <div className="direction-mobile-btn-wrapper">
          <button className="direction-mobile-btn flex items-center">
            <p>
              Программирование <img src={downArrowIcon} alt="" />{" "}
            </p>
            <p>
              Маркетинг <img src={downArrowIcon} alt="" />
            </p>
            <p>
              Дизайн <img src={downArrowIcon} alt="" />
            </p>
            <p>
              Аналитика <img src={downArrowIcon} alt="" />
            </p>
            <p>
              Финансы <img src={downArrowIcon} alt="" />
            </p>
            <p>
              Управление <img src={downArrowIcon} alt="" />
            </p>
            <p>
              Контент-маркетинг <img src={downArrowIcon} alt="" />
            </p>
            <img src={downArrowIcon} alt="" />
          </button>
        </div>

        <div className="course-mm"></div>
      </div>
    </div>
  );
};

export default DirectionMobile;
