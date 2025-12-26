import styles from "./style.module.scss";
import OrangeButton from "@/components/Buttons/OrangeButton";

const CTASection = () => {
  return (
    <section className={styles["cta__section"]}>
      <div className={styles["cta__container"]}>
        <h2>Watch our live matches</h2>
        <OrangeButton
          text="Click Here"
          link="https://www.youtube.com/@insportzdxb/streams"
          target="_blank"
        />
      </div>
    </section>
  );
};

export default CTASection;
