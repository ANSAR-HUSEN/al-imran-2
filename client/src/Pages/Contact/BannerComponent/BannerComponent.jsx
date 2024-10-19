import React from "react";
import styles from "./BannerComponent.module.css"; // CSS module

const BannerComponent = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.breadcrumb}>
          <a href="/" className={styles.homeLink}>
            Home
          </a>
          {" /"}
          <span>Contact Us</span>
        </p>
      </div>
    </div>
  );
};

export default BannerComponent;
