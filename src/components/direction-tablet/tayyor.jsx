import React from "react";
import rightArrow from "../../assets/icons/right-arrow.svg";

import "./index.css";

import { useState } from "react";

const directions = [
  "Программирование",
  "Маркетинг",
  "Дизайн",
  "Аналитика",
  "Финансы",
  "Управление",
  "Контент-маркетинг"
];

const DirectionTabletTayyor = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="direction-tablet-section">
      <div className="direction-tablet-wrapper">
        <h2 className="direction-tablet-title">Направления курсов</h2>

        <div className="direction-tablet-wrap">
          <ul className="direction-tablet-list">
            {directions.map((direction, index) => (
              <li
                key={index}
                className={`direction-tablet-item ${
                  activeIndex === index ? "tabletItemClicked" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <p>{direction}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* kurslar ro'yxati */}
        {activeIndex === 0 && (
          <div className="course-wrapper">
            <div className="row-wrap">
              <ul className="nav-list">
                <li className="nav-item">
                  aaa <img src={rightArrow} alt="" />
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
              </ul>
            </div>

            <div className="row-wrap">
              <ul className="nav-list">
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
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectionTabletTayyor;

//
//
//
//
/*






*/

// const DirectionTablet = () => {
//   return (
//     <div className="direction-tablet-section">
//       <div className="direction-tablet-wrapper">
//         <h2 className="direction-tablet-title">Направления курсов</h2>

//         <div className="direction-tablet-wrap">
//           <ul className="direction-tablet-list">
//             <li className="direction-tablet-item tabletItemClicked">
//               <a href="#">Программирование</a>
//             </li>
//             <li className="direction-tablet-item">
//               <a href="#">Маркетинг</a>
//             </li>
//             <li className="direction-tablet-item">
//               <a href="#">Дизайн</a>
//             </li>
//             <li className="direction-tablet-item">
//               <a href="#">Аналитика</a>
//             </li>
//             <li className="direction-tablet-item">
//               <a href="#">Финансы</a>
//             </li>
//             <li className="direction-tablet-item">
//               <a href="#">Управление</a>
//             </li>
//             <li className="direction-tablet-item">
//               <a href="#">Контент-маркетинг</a>
//             </li>
//           </ul>
//         </div>

{
  /* <div className="course-wrapper">
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
    </ul>
  </div>

  <div className="row-wrap">
    <ul className="nav-list">
      //
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
      // 
      //
      <li className="nav-item">
        Разработка игр на Unreal Engine <img src={rightArrow} alt="" />
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
    </ul>
  </div>
</div>; */
}
