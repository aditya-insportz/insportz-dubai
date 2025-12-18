import BlurButton from "../Buttons/BlurButton";
import DarkButton from "../Buttons/DarkButton";
import styles from "./style.module.scss";

interface InfoBoxProps {
  title: string;
  listItems: string[];
  btn1?: {
    text: string;
    link: string;
  };
  btn2?: {
    text: string;
    link: string;
    color?: string;
    padding?: string;
  };
}

const InfoBox = ({ title, listItems, btn1, btn2 }: InfoBoxProps) => {
  return (
    <article className={styles["infobox"]}>
      <h3>{title}</h3>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {btn1?.text && btn2?.text && (
        <div className={styles["info__cta"]}>
          <DarkButton text={btn1.text} link={btn1.link} />
          <BlurButton
            text={btn2.text}
            link={btn2.link}
            color={btn2.color}
            padding={btn2.padding}
          />
        </div>
      )}
    </article>
  );
};

export default InfoBox;
