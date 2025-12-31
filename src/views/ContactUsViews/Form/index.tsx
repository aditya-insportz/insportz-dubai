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
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      setIsLoading(false);
      return;
    }

    // Phone validation (if provided)
    if (formData.mobileNo) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.mobileNo.replace(/\s/g, ""))) {
        setErrorMessage("Please enter a valid phone number.");
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
        setIsLoading(false);
        return;
      }
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxbxXMMT8n36LpT8x2OS6_pjKWmiWDOpxfmTgCFAtHM-MyPaBDHtAYasYHcCQxh42pm/exec",
        {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            secret: "FORM_V1_INSPORTZ_DUBAI",
          }),
        }
      );

      const result = await res.json();

      if (result.success) {
        setFormData({
          fullName: "",
          mobileNo: "",
          email: "",
          address: "",
          enquiryType: "",
          companyName: "",
          message: "",
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (err) {
      setErrorMessage(
        "Submission failed. Please check your connection and try again."
      );
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsLoading(false);
    }
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
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Enquiry Type</label>
            <input
              type="text"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
            />
          </div>
          <div className={styles["form-group"]}>
            <label>Company Name</label>
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
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {showSuccess && (
            <div className={styles["success-message"]}>
              ✓ Form submitted successfully!
            </div>
          )}
          {showError && (
            <div className={styles["error-message"]}>✗ {errorMessage}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Form;
