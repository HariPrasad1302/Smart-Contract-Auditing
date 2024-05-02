import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroScreen from '../../components/LandingPage/HeroScreen';
import Services from '../../components/LandingPage/services';
import Testimonials from '../../components/LandingPage/Testimonials';
import SmartAudits from '../../components/LandingPage/SmartAudits';

const Home = () => {

  return (
    <>
      <Navbar/>

      <HeroScreen/>

      <Services/>

      <SmartAudits/>


      <Testimonials/>
      

      
    </>
  );
};

export default Home;
