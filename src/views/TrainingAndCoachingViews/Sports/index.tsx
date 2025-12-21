import { useState } from "react";
import Cricket from "assets/images/training-and-coaching/cricket.png";
import Tennis from "assets/images/training-and-coaching/tennis.png";
import Badminton from "assets/images/training-and-coaching/badminton.png";
import Volleyball from "assets/images/training-and-coaching/volleyball.png";
import Football from "assets/images/training-and-coaching/football.png";
import TableTennis from "assets/images/training-and-coaching/table-tennis.png";
import Fencing from "assets/images/training-and-coaching/fencing.png";
import ChevronLeft from "assets/icons/chevron-left-dark.svg";
import ChevronRight from "assets/icons/chevron-right-dark.svg";
import styles from "./style.module.scss";

const SPORTS_IMAGES = [
  { name: "Cricket", image: Cricket },
  { name: "Football", image: Football },
  { name: "Badminton", image: Badminton },
  { name: "Tennis", image: Tennis },
  { name: "Volleyball", image: Volleyball },
  { name: "Table Tennis", image: TableTennis },
  { name: "Fencing", image: Fencing },
];

const Sports = () => {
  const [translateX, setTranslateX] = useState(0);
  const slideAmount = 100 / 7; // 1/7 of track width ≈ 14.29%
  const maxSlide = -slideAmount * 3;

  const isAtStart = translateX === 0;
  const isAtEnd = translateX <= maxSlide;

  const nextSlide = () => {
    setTranslateX(prev => Math.max(prev - slideAmount, maxSlide));
  };

  const prevSlide = () => {
    setTranslateX(prev => Math.min(prev + slideAmount, 0));
  };
  return (
    <section className={styles["sports"]}>
      <div className={styles["sports__container"]}>
        <div className={styles["mobile__wrapper"]}>
          {SPORTS_IMAGES.map((sport, index) => (
            <div key={index} className={styles["sport__item"]}>
              <img src={sport.image} alt={sport.name} />
            </div>
          ))}
        </div>
        <div className={styles["sports__wrapper"]}>
          <button 
            className={`${styles["nav__btn"]} ${isAtStart ? styles["nav__btn--disabled"] : ""}`}
            onClick={prevSlide}
          >
            <img src={ChevronLeft} alt="Previous" />
          </button>
          <div className={styles["scroller"]}>
            <div
              className={styles["slider__track"]}
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {SPORTS_IMAGES.map((sport, index) => (
                <div key={index} className={styles["sport__item__desktop"]}>
                  <img src={sport.image} alt={sport.name} />
                </div>
              ))}
            </div>
          </div>
          <button 
            className={`${styles["nav__btn"]} ${isAtEnd ? styles["nav__btn--disabled"] : ""}`}
            onClick={nextSlide}
          >
            <img src={ChevronRight} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sports;
