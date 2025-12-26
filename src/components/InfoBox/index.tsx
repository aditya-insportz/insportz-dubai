import BlurButton from "../Buttons/BlurButton";
import DarkButton from "../Buttons/DarkButton";
import styles from "./style.module.scss";

interface InfoBoxProps {
  title: string;
  listItems?: string[];
  content?: string;
  btn1?: {
    text: string;
    link: string;
    target?: string;
  };
  btn2?: {
    text: string;
    link: string;
    target?: string;
    color?: string;
    padding?: string;
  };
}

const InfoBox = ({ title, listItems, content, btn1, btn2 }: InfoBoxProps) => {
  return (
    <article className={styles["infobox"]}>
      <h3>{title}</h3>
      {listItems && listItems.length > 0 && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {content && (
        <div
          className={styles["content"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {(btn1?.text || btn2?.text) && (
        <div className={styles["info__cta"]}>
          {btn1?.text && (
            <DarkButton
              text={btn1.text}
              link={btn1.link}
              target={btn1.target}
            />
          )}
          {btn2?.text && (
            <BlurButton
              text={btn2.text}
              link={btn2.link}
              target={btn2.target}
              color={btn2.color}
              padding={btn2.padding}
            />
          )}
        </div>
      )}
    </article>
  );
};

export default InfoBox;
