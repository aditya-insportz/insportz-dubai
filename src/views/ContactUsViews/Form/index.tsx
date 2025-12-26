import { useState } from "react";
import styles from "./style.module.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    address: "",
    enquiryType: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={styles["form"]}>
      <div className={styles["form__container"]}>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Enquiry Type</label>
            <input
              type="text"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Company Name (Optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;