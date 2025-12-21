import LightBlurButton from "@/components/Buttons/LightBlurButton";
import Phone from "assets/icons/phone-dark.png";
import Email from "assets/icons/email-dark.png";
import Region from "assets/icons/region-dark.png";
import styles from "./style.module.scss";

const contactDetails = [
  { icon: Phone, text: "04 347 5833" },
  { icon: Email, text: "info@insportzclub.com" },
  {
    icon: Region,
    text: "Al Quoz Industrial Area 3 - Dubai",
  },
];

const Location = () => {
  return (
    <section className={styles["location__section"]}>
      <div className={styles["location__wrapper"]}>
        <div className={styles["address"]}>
          <h3>Contact Us</h3>
          <div>
            {contactDetails.map((item, index) => {
              return (
                <div key={index} className={styles["contact__details"]}>
                  <img src={item.icon} alt="" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
          <LightBlurButton
            text="Get Direction"
            link="https://maps.app.goo.gl/HPrTD5RoVPHQXUmY9"
            color="#000000"
            target="_blank"
          />
        </div>
        <div className={styles["map"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.850520752622!2d55.21063659853021!3d25.128270259722562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bc5433aa705%3A0x2d447f74e758f757!2sInsportz%20Club!5e0!3m2!1sen!2sin!4v1766300067335!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
