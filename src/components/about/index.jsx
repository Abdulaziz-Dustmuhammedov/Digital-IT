import React from "react";

import officeMan from "../../assets/images/office-man.png";
import tabletManImg from "../../assets/images/tablet-man-img.png";
import mobileManImg from "../../assets/images/mobile-man-img.png";

import "./index.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about">
            <h1 className="about-title font-black text-4xl ">
              Агрегатор онлайн-курсов
            </h1>
            <p>
              Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик
              курсов. Выбирайте курсы по отзывам, цене, продолжительности и
              другим критериям!
            </p>
          </div>
          <div className="about-img-wrap">
            <img className="man-img" src={officeMan} alt="officeMan" />
            <img
              className="tablet-man-img"
              src={tabletManImg}
              alt="tabletManImg"
            />
            <img
              className="mobile-man-img"
              src={mobileManImg}
              alt="mobileManImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
