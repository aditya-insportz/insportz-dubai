import LightBlurButton from "@/components/Buttons/LightBlurButton";
import { BOOK_NOW_LINK } from "@/utils/constants";
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
        <LightBlurButton text="Book Now" link={BOOK_NOW_LINK} target="_blank" />
      </div>
    </div>
  );
};

export default SportCard;
