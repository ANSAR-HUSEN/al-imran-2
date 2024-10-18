import { useState } from "react";

import "./App.css";
import Blogs_events from "./Components/Blogs_events/Blogs_events";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import PrayerTimes from "./Components/Prayer_times/Prayer_time";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'


function App() {
  return (
    <>
    <Navbar/>
      <Banner />
      <About/>
      <PrayerTimes />
      {/* <Services /> */}
      <Blogs_events/>
      <Footer/>
    </>
  );
}

export default App;
