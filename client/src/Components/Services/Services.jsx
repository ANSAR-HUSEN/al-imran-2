import React from "react";
import './Services.css'
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className='wrapper'>
      <div className="serivices__title">
        <h4>Our Worldwide</h4>
        <h1>Offerd Services</h1>
      </div>
      <div className="service__card__container"> 
       <ServiceCard/>
       <ServiceCard/>
       <ServiceCard/>
       <ServiceCard/>
      </div>
    </div>
  );
}

export default Services;
