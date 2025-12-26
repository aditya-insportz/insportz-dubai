import DarkButton from "@/components/Buttons/DarkButton";
import { BOOK_NOW_LINK, WHATSAPP_LINK } from "@/utils/constants";
import styles from "./style.module.scss";
import BlurButton from "@/components/Buttons/BlurButton";

const CTA = () => {
  return (
    <section className={styles["cta__section"]}>
      <div className={styles["cta__container"]}>
        <DarkButton text="Book Now" link={BOOK_NOW_LINK} target="_blank" />
        <BlurButton text="Enquire for Leagues & Corporate Events" link={WHATSAPP_LINK} target="_blank" />
      </div>
    </section>
  );
};

export default CTA;
