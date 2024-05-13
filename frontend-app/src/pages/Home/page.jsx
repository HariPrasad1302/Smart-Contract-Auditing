import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import HeroScreen from "./HeroScreen";
import Services from "./services";
import Testimonials from "./Testimonials";
import SmartAudits from "./SmartAudits";
import Trusted from "./Trusted";
import Footer from "../../components/Layouts/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroScreen />
      <Trusted />
      <Services />
      <SmartAudits />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
