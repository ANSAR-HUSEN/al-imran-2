import React from 'react'
import BannerComponent from './BannerComponent/BannerComponent';
import ContactFormComponent from './ContactFormComponent/ContactFormComponent';
import ContactMap from './ContactMap/ContactMap';
import Information from './Information/Information';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Contact = () => {
  return (
    <>
    <Navbar/>
      <BannerComponent />
      <ContactFormComponent />
      <ContactMap />
      <Information />
    <Footer/>
    </>
  );
}

export default Contact