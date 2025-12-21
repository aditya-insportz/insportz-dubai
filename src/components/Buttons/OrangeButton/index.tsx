import styles from "./style.module.scss";

interface OrangeButtonProps {
  text: string;
  link: string;
  target?: string;
}

const OrangeButton = ({ text, link, target = "_self" }: OrangeButtonProps) => {
  return (
    <a href={link} className={styles["orange__button"]} target={target}>
      <span>{text}</span>
    </a>
  );
};

export default OrangeButton;
