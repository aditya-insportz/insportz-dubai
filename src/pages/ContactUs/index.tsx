import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Form from "@/views/ContactUsViews/Form";
import ContactInfo from "@/views/ContactUsViews/ContactInfo";
import styles from "./style.module.scss";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className={styles["contact__wrapper"]}>
        <div className={styles["hero__section"]}>
          <h1 className={styles["heading"]}>Contact Us</h1>
        </div>
        <div className={styles["contact__us__content"]}>
          <div className={styles["content-item"]}>
            <ContactInfo />
          </div>
          <div className={styles["content-item"]}>
            <Form />
          </div>
        </div>
        <div className={styles["map__wrapper"]}>
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
      <Footer />
    </>
  );
}

export default ContactUs;
