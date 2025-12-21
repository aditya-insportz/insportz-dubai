import styles from "./style.module.scss";
import ChevronLeft from "assets/icons/chevron-left-dark.svg";
import ChevronRight from "assets/icons/chevron-right-dark.svg";
import { useState } from "react";

interface GallerySectionProps {
  title: string;
  images: string[];
}

const GallerySection = ({ title, images }: GallerySectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = images.length - 2;

  const handleLeftClick = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };
  return (
    <section className={styles["gallery__section"]}>
      <div className={styles["gallery__wrapper"]}>
        <h2>{title}</h2>
        <div className={styles["gallery__container"]}>
          <button
            className={styles["nav__left"]}
            onClick={handleLeftClick}
            style={{
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              opacity: currentIndex === 0 ? 0.5 : 1,
            }}
          >
            <img src={ChevronLeft} alt="chevron left" />
          </button>
          <button
            className={styles["nav__right"]}
            onClick={handleRightClick}
            style={{
              cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
              opacity: currentIndex === maxIndex ? 0.5 : 1,
            }}
          >
            <img src={ChevronRight} alt="chevron left" />
          </button>
          <div
            className={styles["gallery__image__wrapper"]}
            style={{
              transform: `translateX(-${currentIndex * 634}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            {images.map((img, index) => (
              <img key={index} src={img} alt={`${title} ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
