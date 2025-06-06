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

const allCourses = [
  [
    // activeIndex === 0 (Программирование)
    [
      "Все курсы по программированию",
      "Python-разработка",
      "Web-разработка",
      "Мобильная разработка",
      "JavaScript-разработка",
      "Java-разработка",
      "Разработка игр",
      "Создание сайтов",
      "Системное администрирование",
      "QA-тестирование",
      "Android-разработка",
      "Управление разработкой и IT",
      "Frontend-разработка",
      "Разработка игр на Unity"
    ],
    [
      "Разработка на C#",
      "PHP-разработка",
      "DevOps",
      "IOS-разработка",
      "Верстка на HTML/CSS",
      "Разработка на C++",
      "Разработка игр на Unreal Engine",
      "Разработка на Kotlin",
      "Информационная безопасность",
      "Golang-разработка",
      "Разработка на Swift",
      "1C-разработка",
      "VR/AR разработка",
      "Фреймворк Laravel"
    ]
  ],
  [
    // activeIndex === 1 (Маркетинг)
    [
      "Цифровой маркетинг",
      "Таргетинг в соцсетях",
      "SEO-продвижение",
      "Контекстная реклама",
      "Маркетинговая аналитика"
    ],
    [
      "Брендинг",
      "SMM-стратегии",
      "Email-маркетинг",
      "Influencer маркетинг",
      "Маркетинг-автоматизация"
    ]
  ],
  [
    // activeIndex === 2 (Дизайн)
    [
      "Основы UX/UI дизайна",
      "Figma для начинающих",
      "Motion-дизайн",
      "Графический дизайн",
      "Дизайн мобильных приложений",
      "Типографика",
      "3D-дизайн",
      "Интерактивный дизайн",
      "Прототипирование",
      "Дизайн систем"
    ],
    [
      "Цвет и композиция",
      "Web-дизайн",
      "Анимация в интерфейсах",
      "Продуктовый дизайн",
      "Иллюстрация",
      "Responsive дизайн",
      "UX-исследования",
      "VR/AR-дизайн",
      "Microinteractions",
      "Microinteractions"
    ]
  ]
];

const DirectionTablet = () => {
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

        <div className="course-wrapper fixed-height scrollable">
          {allCourses[activeIndex]?.map((column, columnIndex) => (
            <div className="row-wrap" key={columnIndex}>
              <ul className="nav-list">
                {column.map((course, idx) => (
                  <li className="nav-item" key={idx}>
                    {course} <img src={rightArrow} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* kurslar ro'yxati */}
        {/* {activeIndex === 0 && (
          <div className="course-wrapper">
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
        )} */}
      </div>
    </div>
  );
};

export default DirectionTablet;

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
