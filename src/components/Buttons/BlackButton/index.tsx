import styles from "./style.module.scss";

interface BlackButtonProps {
  text: string;
  link: string;
  target?: string;
}

const BlackButton = ({ text, link, target = "_self" }: BlackButtonProps) => {
  return (
    <a href={link} className={styles["black__button"]} target={target}>
      <span>{text}</span>
    </a>
  );
};

export default BlackButton;
