import Arrow from "assets/icons/arrow.svg";
import styles from "./style.module.scss";

interface DarkButtonProps {
  text: string;
  link: string;
}

const DarkButton = ({ text, link }: DarkButtonProps) => {
  return (
    <a href={link} className={styles["dark__button"]}>
      <span>{text}</span>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </a>
  );
};

export default DarkButton;
