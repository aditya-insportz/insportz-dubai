import { useState } from "react";
import Adidas from "assets/images/corporate-and-parties/adidas.png";
import AlAin from "assets/images/corporate-and-parties/al-ain.png";
import DbmscSteel from "assets/images/corporate-and-parties/dbmsc-steel.png";
import EmiratesNbd from "assets/images/corporate-and-parties/emirates-nbd.png";
import Lenovo from "assets/images/corporate-and-parties/lenovo.png";
import Mashreq from "assets/images/corporate-and-parties/mashreq.png";
import StandardChartered from "assets/images/corporate-and-parties/standard-chartered.png";
import Toshiba from "assets/images/corporate-and-parties/toshiba.png";
import ChevronLeft from "assets/icons/chevron-left-dark.svg";
import ChevronRight from "assets/icons/chevron-right-dark.svg";
import styles from "./style.module.scss";

const BRAND_IMAGES = [
  { name: "Standard Chartered", image: StandardChartered },
  { name: "Emirates NBD", image: EmiratesNbd },
  { name: "Mashreq", image: Mashreq },
  { name: "DBMSC Steel", image: DbmscSteel },
  { name: "Lenovo", image: Lenovo },
  { name: "Al Ain", image: AlAin },
  { name: "Adidas", image: Adidas },
  { name: "Toshiba", image: Toshiba },
];

const Brands = () => {
  const [translateX, setTranslateX] = useState(0);
  const slideAmount = 100 / 8; // 1/8 of track width ≈ 12.5%
  const maxSlide = -slideAmount * 4;

  const isAtStart = translateX === 0;
  const isAtEnd = translateX <= maxSlide;

  const nextSlide = () => {
    setTranslateX((prev) => Math.max(prev - slideAmount, maxSlide));
  };

  const prevSlide = () => {
    setTranslateX((prev) => Math.min(prev + slideAmount, 0));
  };

  return (
    <section className={styles["brands"]}>
      <div className={styles["brands__container"]}>
        <div className={styles["heading"]}>
          <h2>Brands that Play at Insportz</h2>
        </div>
        <div className={styles["mobile__wrapper"]}>
          {BRAND_IMAGES.map((brand, index) => (
            <div key={index} className={styles["brand__item"]}>
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
        <div className={styles["brands__wrapper"]}>
          <button
            className={`${styles["nav__btn"]} ${
              isAtStart ? styles["nav__btn--disabled"] : ""
            }`}
            onClick={prevSlide}
          >
            <img src={ChevronLeft} alt="Previous" />
          </button>
          <div className={styles["scroller"]}>
            <div
              className={styles["slider__track"]}
              style={{ transform: `translateX(${translateX}%)` }}
            >
              {BRAND_IMAGES.map((brand, index) => (
                <div key={index} className={styles["brand__item__desktop"]}>
                  <img src={brand.image} alt={brand.name} />
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles["nav__btn"]} ${
              isAtEnd ? styles["nav__btn--disabled"] : ""
            }`}
            onClick={nextSlide}
          >
            <img src={ChevronRight} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
