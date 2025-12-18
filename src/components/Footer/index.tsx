import styles from "./style.module.scss";
import Logo from "assets/icons/insportz-logo-white.png";
import Phone from "assets/icons/phone.png";
import Email from "assets/icons/email.png";
import Region from "assets/icons/region.png";

const QUICK_LINKS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Facility",
    link: "/facility",
  },
  {
    label: "Leagues & Tournaments",
    link: "/leagues-and-tournaments",
  },
  {
    label: "Training & Coaching",
    link: "/training-and-coaching",
  },
  {
    label: "Corporate & Parties",
    link: "/corporate-and-parties",
  },
  {
    label: "Contact",
    link: "/contact-us",
  },
];

const Footer = () => {
  return (
    <section className={styles["footer"]}>
      <div className={styles["footer__wrapper"]}>
        <div className={styles["logo__wrapper"]}>
          <img src={Logo} alt="Insportz Logo" />
        </div>
        <div className={styles["footer__links"]}>
          <h4>Quick Links</h4>
          {QUICK_LINKS.map((item) => (
            <a href={item.link} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
        <div className={styles["address"]}>
          <h4>CONNECT</h4>
          <span>Contact us</span>
          <div className={styles["address__item"]}>
            <img src={Phone} alt="Phone" />
            <span>04 347 5833 | 058 645 0292</span>
          </div>
          <div className={styles["address__item"]}>
            <img src={Email} alt="Email" />
            <span>info@insportzclub.com</span>
          </div>
          <div className={styles["address__item"]}>
            <img src={Region} alt="Region" />
            <span>Al Quoz Industrial Area 3 - Dubai</span>
          </div>
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        © 2024 INSPORTZ. ALL RIGHTS RESERVED.
      </div>
    </section>
  );
};

export default Footer;
