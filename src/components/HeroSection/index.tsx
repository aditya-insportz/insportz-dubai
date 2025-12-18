import styles from "./style.module.scss";
import LightButton from "../Buttons/LightButton";
import BlurButton from "../Buttons/BlurButton";

interface HeroSectionProps {
  title: string;
  description: string;
  btn1: {
    text: string;
    link: string;
  };
  btn2: {
    text: string;
    link: string;
  };
  bgLg: string;
  bgSm: string;
}

const HeroSection = ({
  title,
  description,
  btn1,
  btn2,
  bgLg,
  bgSm,
}: HeroSectionProps) => {
  return (
    <div
      className={styles["hero__section"]}
      style={{
        backgroundImage: `url(${window.innerWidth > 768 ? bgLg : bgSm})`,
      }}
    >
      <div className={styles["hero__wrapper"]}>
        <div className={styles["title"]}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles["hero__cta"]}>
          <LightButton text={btn1.text} link={btn1.link} />
          <BlurButton text={btn2.text} link={btn2.link} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
