import { useState } from "react";

import "./App.css";
// import Blogs_events from "./Components/Blogs_events/Blogs_events";
// import Services from "./Components/Services/Services";
// import Banner from "./Components/Banner/Banner";
// import PrayerTimes from "./Components/Prayer_times/Prayer_time";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from './Components/Footer/Footer'
// import About from './Components/About/About'
// import Scholar from './Components/Scholars/Scholars'
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/About/AboutPage";
// import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <>
    {/* <Navbar/>
      <Banner />
      <About/>
      <PrayerTimes />
      <Blogs_events/>
      <Services />
      <Blogs_events/>
      <Scholar/>
      <Footer/> */}
      {/* <Contact/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </>
  );
}

export default App;
