import styles from "./style.module.scss";
import Corporate1 from "assets/images/corporate-and-parties/corporate-1.png";

const CorporateSection = () => {
  return (
    <div className={styles["corporate__section"]}>
      <h2>A one stop facility for all your corporate sports events</h2>
      <div className={styles["corporate__content__wrapper"]}>
        <div className={styles["corporate__details"]}>
          <p>
            At Insportz Club, we redefine corporate engagement by offering a
            dynamic space where companies can seamlessly blend work and
            wellness. Elevate your team-building initiatives and promote
            employee well-being with our tailor-made Corporate Sports Days,
            Corporate Olympics, and various sports tournaments. Our
            state-of-the-art facilities provide the perfect backdrop for
            fostering teamwork, camaraderie, and a healthy competitive spirit
            among your colleagues. Whether it's the adrenaline rush of a
            friendly match or the strategic challenges of team-building
            activities, Insportz Club offers a refreshing break from the
            routine, invigorating both the body and mind. Embrace a positive
            corporate culture, boost morale, and create lasting memories with
            your team at Insportz.
          </p>
        </div>
        <img src={Corporate1} alt="corporate image" />
      </div>
    </div>
  );
};

export default CorporateSection;
