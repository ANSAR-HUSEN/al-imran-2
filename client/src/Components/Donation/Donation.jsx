import React from "react";
import pray from "../../assets/pray.png";
import classes from  "./Donation.module.css";

function Donation() {
  return (
    <div className={classes.Donation}>
      <div className="Donation__left">
        <img src={pray} alt="" />
      </div>
      <div className={classes.Donation__right}>
        <div className={classes.Donation__title}>
          <h3>Give Food & Shelter To Quran Students</h3>
          <h2>Make Your Donation</h2>
        </div>
        <div className={classes.Donation__form}>
          <form action="">
            <div className={classes.top_input}>
              
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              
            </div>
            <div className={classes.bottom_input}>
              <input type="text" placeholder="Your Phone" />
              <input type="text" placeholder="Your Address" />

            </div>
            <div className={classes.Donation__input}><input type="text" placeholder="Your Donation" /></div>
            <button className={classes.Donation__button}>Donate Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donation;
