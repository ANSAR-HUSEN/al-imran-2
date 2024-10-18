import React from "react";
import pray from "../assets/pray.png";
import "./Donation.css";

function Donation() {
  return (
    <div className="Donation">
      <div>
        <img src={pray} alt="" />
      </div>
      <div className="Donation__right">
        <div className="Donation__title">
          <h3>Give Food & Shelter To Quran Students</h3>
          <h2>Make Your Donation</h2>
        </div>
        <div className="Donation__form">
          <form action="">
            <div className="top-input">
              
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              
            </div>
            <div className="bottom-input">
              <input type="text" placeholder="Your Phone" />
              <input type="text" placeholder="Your Address" />

            </div>
            <div className="Donation__input"><input type="text" placeholder="Your Donation" /></div>
            <button className="Donation__button">Donate Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donation;
