import { useState } from "react";

import "./App.css";
import Blogs_events from "./Components/Blogs_events/Blogs_events";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import PrayerTimes from "./Components/Prayer_times/Prayer_time";

function App() {
  return (
    <>
      <Banner />
      <PrayerTimes />
      {/* <Services /> */}
      <Blogs_events/>
    </>
  );
}

export default App;
