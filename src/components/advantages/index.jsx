import React from "react";

import playerIcon from "../../assets/icons/player-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import videoPlayer from "../../assets/icons/video-player.svg";

import "./index.css";

const Advantages = () => {
  return (
    <div className="advantages-section">
      <div className="advantages container">
        <div className="advantages-wrapper">
          <h2 className="advantages-title">Наши преимущества</h2>
        </div>

        <div className="content-wrapper">
          <div className="img-wrap">
            <div className="img-box">
              <img src={playerIcon} alt="playerIcon" />
              <p className="advantages-text">Большой выбор онлайн-курсов</p>
            </div>

            <p className="advantages-inner-text">
              Мы аккумулируем большое количество онлайн-курсов по различным
              направлениям, позволяя сравнивать их, и выбирать то, что вам
              нравится
            </p>
          </div>

          <div className="img-wrap">
            <div className="img-box">
              <img src={searchIcon} alt="playerIcon" />
              <p className="advantages-text">Актуальная информация</p>
            </div>

            <p className="advantages-inner-text">
              Мы регулярно обновляем наши базы данных, чтобы предоставлять вам
              только самую свежую информацию о новых курсах, старте обучения,
              скидках и предложениях от онлайн-школ
            </p>
          </div>

          <div className="img-wrap">
            <div className="img-box">
              <img src={videoPlayer} alt="playerIcon" />
              <p className="advantages-text">Скорость поиска</p>
            </div>

            <p className="advantages-inner-text">
              Агрегатор курсов создан для экономии вашего времени. Вы можете с
              легкостью найти подходящий курс в нашем каталоге по различным
              фильтрам
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
