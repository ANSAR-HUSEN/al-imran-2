import { useState } from "react";

import "./App.css";
import About from './Components/About/About'
import Blogs_events from "./Components/Blogs_events/Blogs_events";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import PrayerTimes from "./Components/Prayer_times/Prayer_time";
import Footer from './Components/Footer/Footer'
import Navbar from "./Components/Navbar/Navbar";
import Scholars from './Components/Scholars/Scholars'
import Donation from './Components/Donation/Donation'


function App() {
  return (
    <>
      <Navbar/>
      <Banner />
      <About/>
      <PrayerTimes />
      <Blogs_events/>
      <Services />
      <Donation/>
      <Scholars/>
      <Footer/>
    </>
  );
}

export default App;
