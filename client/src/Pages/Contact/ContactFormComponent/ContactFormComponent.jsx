import React from "react";
import styles from "./ContactFormComponent.module.css";

const ContactFormComponent = () => {
  return (
    <div className={styles.contactForm}>
      <p className={styles.smallTitle}>Contact us</p>
      <h2 className={styles.largeTitle}>Get In Touch</h2>

      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="tel" placeholder="Phone Number" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <textarea placeholder="Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.submitButton}>
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default ContactFormComponent;
