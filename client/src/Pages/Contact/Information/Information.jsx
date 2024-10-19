import React from 'react';
import style from './Information.module.css'; // Import the CSS Module
import md from './photo_2024-10-19_00-41-23.jpg'; // Image for the photo section

const Information = () => {
  return (
    <div className={style.container}>
      {/* Title Section (Centered) */}
      <div className={style.titleSection}>
        <h1 className={style.title}>Get Information</h1>
        <p className={style.contactDetail}>Contact Details</p>
      </div>

      {/* Content Section */}
      <div className={style.content}>
        {/* First Column (Address and Phone) */}
        <div className={style.column}>
          <div className={style.infoSection}>
            {/* Address Section */}
            <div className={style.iconLabel}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Address:</span>
            </div>
            <p className={style.displayInfo}>Altad cmc, Addis Ababa,</p>

            {/* Phone Section */}
            <div className={style.iconLabel}>
              <i className="fas fa-phone"></i>
              <span>Phone:</span>
            </div>
            <p className={style.displayInfo}>+251956603433</p>
            <p className={style.displayInfo}>+251911464990</p>
          </div>
        </div>

        {/* Second Column (WhatsApp and Email) */}
        <div className={style.column}>
          <div className={style.infoSection}>
            {/* WhatsApp Section */}
            <div className={style.iconLabel}>
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp:</span>
            </div>
            <p className={style.displayInfo}>+251956603433</p>
            <p className={style.displayInfo}>+251911464990</p>

            {/* Email Section */}
            <div className={style.iconLabel}>
              <i className="fas fa-envelope"></i>
              <span>Email:</span>
            </div>
            <p className={style.displayInfo}>alimrancmc@gmail.com</p>
          </div>
        </div>

        {/* Third Column (Display Photo Placeholder) */}
        <div className={style.column}>
          <div className={style.infoSection}>
            <div className={style.photoPlaceholder}>
              <img src={md} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
