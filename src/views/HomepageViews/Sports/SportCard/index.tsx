import LightBlurButton from "@/components/Buttons/LightBlurButton";
import styles from "./style.module.scss";

interface SportCardProps {
  name: string;
  imgUrl: string;
}

const SportCard = ({ name, imgUrl }: SportCardProps) => {
  return (
    <div className={styles["sport__card__container"]}>
      <img className={styles["sport__image"]} src={imgUrl} alt="sport image" />
      <div className={styles["sport__details"]}>
        <p className={styles["sport__name"]}>{name}</p>
        <LightBlurButton text="Book Now" link="" />
      </div>
    </div>
  );
};

export default SportCard;
