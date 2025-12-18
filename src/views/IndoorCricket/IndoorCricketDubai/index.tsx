import DarkButton from "@/components/Buttons/DarkButton";
import DubaiImage from "@/assets/images/indoor-cricket/indoor-cricket-dubai-1.png";
import styles from "./style.module.scss";

const IndoorCricketDubai = () => {
  return (
    <section className={styles["indoor__cricket__dubai"]}>
      <div className={styles["indoor__cricket__dubai__container"]}>
        <h2>Your Cricket, Anytime, Rain or Shine</h2>
        <div className={styles["indoor__cricket__dubai__content"]}>
          <div className={styles["content"]}>
            <p>
              Insportz Dubai is synonymous with indoor cricket in the UAE. Our
              world-class pitches have hosted thousands of matches, from casual
              games to international tournaments.
            </p>
            <DarkButton text="Book Now" link="" />
          </div>
          <div className={styles["image__wrapper"]}>
            <img src={DubaiImage} alt="Indoor Cricket Dubai" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndoorCricketDubai;
