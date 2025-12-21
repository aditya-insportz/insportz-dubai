/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import styles from "./style.module.scss";
import SportCard from "./SportCard";
import ChevronLeft from "assets/icons/chevron-left.svg";
import ChevronRight from "assets/icons/chevron-right.svg";
import IndoorCricket from "assets/images/homepage/indoor-cricket.png";
import Football from "assets/images/homepage/football.png";
import Badminton from "assets/images/homepage/badminton.png";
import TableTennis from "assets/images/homepage/table-tennis.png";
import Padel from "assets/images/homepage/padel.png";
import Volleyball from "assets/images/homepage/volleyball.png";

const Sports = () => {
  const isMobile = window.innerWidth < 768;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const data = [
    {
      name: "Indoor Cricket",
      imgUrl: IndoorCricket,
    },
    {
      name: "Football",
      imgUrl: Football,
    },
    {
      name: "Badminton",
      imgUrl: Badminton,
    },
    {
      name: "Table Tennis",
      imgUrl: TableTennis,
    },
    {
      name: "Padel",
      imgUrl: Padel,
    },
    {
      name: "Volleyball",
      imgUrl: Volleyball,
    },
  ];

  const handleNext = () => {
    if (currentIndex < 3) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className={styles["offerings__container"]}>
      <div className={styles["offerings__wrapper"]}>
        <h2>Sports We Cater</h2>
        <div className={styles["offering__content__wrapper"]}>
          {isMobile ? null : (
            <>
              {currentIndex > 0 && (
                <button onClick={handlePrev} className={styles["nav__left"]}>
                  <img src={ChevronLeft} alt="left" />
                </button>
              )}
              {currentIndex < 3 && (
                <button onClick={handleNext} className={styles["nav__right"]}>
                  <img src={ChevronRight} alt="right" />
                </button>
              )}
            </>
          )}
          <div className={styles["offering__content__list"]}>
            <div
              className={styles["offerings__content"]}
              style={{
                transform: `translateX(-${(currentIndex * 100) / 9}%)`,
                transition: "transform 0.4s ease-in-out",
              }}
            >
              {data.map((item, index) => {
                return <SportCard key={`sport-${index}`} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
