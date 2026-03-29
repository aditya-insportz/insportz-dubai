import { useState, useEffect } from "react";
import styles from "./style.module.scss";

interface HeroImageSectionProps {
  imageLg: string;
  imageSm: string;
  alt: string;
  heading?: string;
}

const HeroImageSection = ({ imageLg, imageSm, alt, heading }: HeroImageSectionProps) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["hero__section"]}>
      <img
        src={isDesktop ? imageLg : imageSm}
        alt={alt}
      />
      {heading && (
        <div className={styles["hero__overlay"]}>
          <div className={styles["hero__overlay__inner"]}>
            <h1 className={styles["hero__heading"]}>{heading}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroImageSection;