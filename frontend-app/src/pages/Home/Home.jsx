import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import HeroScreen from "../../components/LandingPage/HeroScreen";
import Services from "../../components/LandingPage/services";
import Testimonials from "../../components/LandingPage/Testimonials";
import SmartAudits from "../../components/LandingPage/SmartAudits";
import Trusted from "../../components/LandingPage/Trusted";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroScreen />
      <Trusted />
      <Services />
      <SmartAudits />

      <Testimonials />
    </>
  );
};

export default Home;
