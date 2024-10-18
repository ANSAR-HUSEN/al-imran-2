import { useState } from "react";

import "./App.css";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import PrayerTimes from "./Components/Prayer_times/Prayer_time";
import Donation from "./Donation/Donation";

function App() {
  return (
    <>
      <Banner />

      <PrayerTimes />
      <Services />
      <Donation/>
    </>
  );
}

export default App;
