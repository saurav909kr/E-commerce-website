import React from "react";
import Hero from "../component/Hero";
import Latestcollection from "../component/Latestcollection";
import BestSeller from "../component/BestSeller";
import OurPolicy from "../component/OurPolicy";
import NewLatterBox from "../component/NewLatterBox";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Latestcollection />
      <BestSeller />
      <OurPolicy />
      <NewLatterBox />
    </div>
  );
};

export default Home;
