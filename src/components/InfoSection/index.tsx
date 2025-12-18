import DarkButton from "../Buttons/DarkButton";
import styles from "./style.module.scss";

interface InfoSectionProps {
  title: string;
  content: string;
  img1: string;
  img2: string;
  img3: string;
  link: string;
}

const InfoSection = ({
  title,
  content,
  img1,
  img2,
  img3,
  link,
}: InfoSectionProps) => {
  return (
    <section className={styles["info__section"]}>
      <div className={styles["info__section__wrapper"]}>
        <h2>{title}</h2>
        <div className={styles["info__section__container"]}>
          <div className={styles["info__image"]}>
            <img src={img1} alt="Padel" />
          </div>
          <div className={styles["info__content"]}>
            <img src={window.innerWidth > 768 ? img2 : img3} alt="Padel" />
            <p>{content}</p>
            <DarkButton text="Book Now" link={link} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
