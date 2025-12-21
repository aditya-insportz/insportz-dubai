import Arrow from "assets/icons/arrow.svg";
import styles from "./style.module.scss";

interface DarkButtonProps {
  text: string;
  link: string;
  target?: string;
}

const DarkButton = ({ text, link, target = "_self" }: DarkButtonProps) => {
  return (
    <a href={link} className={styles["dark__button"]} target={target}>
      <span>{text}</span>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </a>
  );
};

export default DarkButton;
