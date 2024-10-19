import React from "react";
import styles from "./ContactMap.module.css";

const ContactMap = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.520679722534!2d38.83649337478037!3d9.016174891044571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b1ead4cfcf9%3A0xf67af4b7c27ea5d8!2sAl-imran%20islamic%20institute%20CMC!5e0!3m2!1sen!2set!4v1729278813511!5m2!1sen!2set"
        width="100%"
        height="100%" /* Ensures the iframe takes full height and width of the container */
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default ContactMap;
