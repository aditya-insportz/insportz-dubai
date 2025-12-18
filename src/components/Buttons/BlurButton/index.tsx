import styles from "./style.module.scss";

interface BlurButtonProps {
  text: string;
  link: string;
  color?: string;
  padding?: string;
}

const BlurButton = ({
  text,
  link,
  color = "#ffffff",
  padding = "12px 18px",
}: BlurButtonProps) => {
  return (
    <a href={link} className={styles["blur__button"]} style={{ padding }}>
      <span style={{ color }}>{text}</span>
    </a>
  );
};

export default BlurButton;
