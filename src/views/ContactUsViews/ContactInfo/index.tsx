import styles from "./style.module.scss";
import PhoneDark from "assets/icons/phone-dark.png";
import EmailDark from "assets/icons/email-dark.png";
import RegionDark from "assets/icons/region-dark.png";

const ContactInfo = () => {
  return (
    <div className={styles["info__section"]}>
      <div className={styles["contact__info__container"]}>
        <h2>We are always ready to help you & answer your questions</h2>
        <p>
          If you have any questions, please fill out the form and we will get
          back to you as soon as possible.
        </p>

        <span>Contact Details</span>

        <div className={styles["contact__item"]}>
          <img src={PhoneDark} alt="Phone" />

          <p>04 347 583, 058 645 0292</p>
        </div>

        <div className={styles["contact__item"]}>
          <img src={EmailDark} alt="Email" />
          <p>info@insportzclub.com</p>
        </div>

        <div className={styles["contact__item"]}>
          <img src={RegionDark} alt="Address" />
          <p>Al Quoz Industrial Area 3 - Dubai</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
