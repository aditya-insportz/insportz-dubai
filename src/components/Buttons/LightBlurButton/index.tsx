import Arrow from "assets/icons/arrow.svg";
import styles from "./style.module.scss";

interface LightButtonProps {
  text: string;
  link: string;
  color?: string;
  target?: string;
}

const LightBlurButton = ({
  text,
  link,
  color = "#ffffff",
  target = "_self",
}: LightButtonProps) => {
  return (
    <a href={link} target={target} className={styles["light__button"]}>
      <span style={{ color }}>{text}</span>
      <div>
        <img src={Arrow} alt="arrow" />
      </div>
    </a>
  );
};

export default LightBlurButton;
