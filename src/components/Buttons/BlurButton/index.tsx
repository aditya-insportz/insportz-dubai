import styles from "./style.module.scss";

interface BlurButtonProps {
  text: string;
  link: string;
  color?: string;
  padding?: string;
  target?: string;
}

const BlurButton = ({
  text,
  link,
  color = "#ffffff",
  padding = "12px 18px",
  target = "_self",
}: BlurButtonProps) => {
  return (
    <a href={link} className={styles["blur__button"]} style={{ padding }} target={target}>
      <span style={{ color }}>{text}</span>
    </a>
  );
};

export default BlurButton;
