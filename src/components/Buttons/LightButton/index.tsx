import Arrow from "assets/icons/arrow.svg";
import styles from "./style.module.scss";

interface LightButtonProps {
  text: string;
  link: string;
  target?: string;
}

const LightButton = ({ text, link, target = "_self" }: LightButtonProps) => {
  return (
    <a href={link} className={styles["light__button"]} target={target}>
      <span>{text}</span>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </a>
  );
};

export default LightButton;
