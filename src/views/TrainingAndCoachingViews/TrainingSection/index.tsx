import styles from "./style.module.scss";
import Training1 from "assets/images/training-and-coaching/training-1.png";

const TrainingSection = () => {
  return (
    <div className={styles["training__section"]}>
      <h2>Training and Coaching</h2>
      <div className={styles["training__content__wrapper"]}>
        <div className={styles["training__details"]}>
          <p>
            At Insportz Dubai, we turn fun into skill! Our expert coaching and
            exciting training sessions give kids the chance to learn from
            seasoned professionals in a supportive, high-energy environment.
            From tennis and cricket to football, fencing, table tennis,
            badminton, and volleyball – it’s the perfect place to pick up new
            skills, stay active, and make lifelong friends. Whether you’re just
            starting out or dreaming of becoming a star player, our friendly
            coaches are here to guide you every step of the way, helping you
            play, learn, and shine.
          </p>
        </div>
        <img src={Training1} alt="training image" />
      </div>
    </div>
  );
};

export default TrainingSection;
