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
          <h1 className={styles["heading"]}>
            Contact Us
          </h1>
        </div>
        <div className={styles["contact__us__content"]}>
          <div className={styles["content-item"]}>
            <ContactInfo />
          </div>
          <div className={styles["content-item"]}>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
