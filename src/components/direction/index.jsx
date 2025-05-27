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
            {/* <div className="nav-column"> */}
            <div className="nav-title-wrap">
              <p className="nav-title">Программирование</p>
              <p className="nav-title">Маркетинг</p>
              <p className="nav-title">Дизайн</p>
              <p className="nav-title">Аналитика</p>
              <p className="nav-title">Финансы</p>
              <p className="nav-title">Управление</p>
              <p className="nav-title">Контент-маркетинг</p>
            </div>
            {/* </div> */}

            <div className="row-wrap">
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
                <li className="nav-item">
                  JavaScript-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Java-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Разработка игр <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Создание сайтов <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Системное администрирование <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  QA-тестирование <img src={rightArrow} alt="" />
                </li>
              </ul>
            </div>

            {/*  */}

            <div className="row-wrap">
              <ul className="nav-list">
                <li className="nav-item">
                  Android-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Управление разработкой и IT <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Frontend-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Разработка игр на Unity <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Разработка на C# <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  PHP-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  DevOps <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  IOS-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Верстка на HTML/CSS <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Разработка на C++ <img src={rightArrow} alt="" />
                </li>
              </ul>
            </div>

            {/*  */}

            <div className="row-wrap">
              <ul className="nav-list">
                <li className="nav-item">
                  Разработка игр на Unreal Engine{" "}
                  <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Разработка на Kotlin <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Информационная безопасность <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Golang-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Разработка на Swift <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  1C-разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  VR/AR разработка <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Фреймворк Laravel <img src={rightArrow} alt="" />
                </li>
                {/* <li className="nav-item">
                  Создание сайтов <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  Системное администрирование <img src={rightArrow} alt="" />
                </li>
                <li className="nav-item">
                  QA-тестирование <img src={rightArrow} alt="" />
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
