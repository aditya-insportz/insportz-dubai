import DarkButton from "@/components/Buttons/DarkButton";
import styles from "./style.module.scss";
import BlurButton from "@/components/Buttons/BlurButton";

const CTA = () => {
  return (
    <section className={styles["cta__section"]}>
      <div className={styles["cta__container"]}>
        <DarkButton text="Book Now" link="https://z34v4.app.goo.gl/9vwF" />
        <BlurButton text="Enquire for Leagues & Corporate Events" link="" />
      </div>
    </section>
  );
};

export default CTA;
