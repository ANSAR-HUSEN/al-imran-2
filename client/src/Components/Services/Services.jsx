import React from "react";
import './Services.css'
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <>
      <div className="serivices__title">
        <h4>Our Worldwide</h4>
        <h1>Offerd Services</h1>
      </div>
      <div className="service__card__container">
        
       <ServiceCard title={"Quran Learning"} desc={"learning quran from al imran cmc medresa is the best thing"}/>
       <ServiceCard title={"Sheria"} desc={"learning sheria's low with the fiqih and nehw understanding from ethiopian scholars!!"}/>
       <ServiceCard title={"Terbia"} desc={"learning sunnah and the best way of livng based on the path of resul sellelahu aleyhi weselem"}/>
       <ServiceCard title={"Arebic Lughah"} desc={"nehw,serf,belagha.mentiq,sheikh sherrrif"}/>
      </div>
    </>
  );
}

export default Services;
