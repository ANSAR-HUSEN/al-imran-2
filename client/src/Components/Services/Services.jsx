import React from "react";
import classes from './Services.module.css'
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.serivics__title}>
        <h4>Our Worldwide</h4>
        <h1>Offerd Services</h1>
      </div>
      <div className={classes.service_card__container}>
        
       <ServiceCard title={"Quran Learning"} desc={"learning sunnah and the best way of livng based on the path of resul sellelahu aleyhi weselem"}/>
       <ServiceCard title={"Sheria"} desc={"learning sunnah and the best way of livng based on the path of resul sellelahu aleyhi weselem"}/>
       <ServiceCard title={"Terbia"} desc={"learning sunnah and the best way of livng based on the path of resul sellelahu aleyhi weselem"}/>
       <ServiceCard title={"Arebic Lughah"} desc={"learning sunnah and the best way of livng based on the path of resul sellelahu aleyhi weselem"}/>
      </div>
    </div>
  );
}

export default Services;
