// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import anime from 'animejs'; // Import anime.js library
import './Home.css'; // Import CSS file
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  useEffect(() => {
    const animateBlocks = () => {
      anime({
        targets: ".block",
        translateX: () => anime.random(-window.innerWidth / 2, window.innerWidth / 2),
translateY: () => anime.random(-window.innerHeight / 2, window.innerHeight / 2),
        scale: () => anime.random(1, 5),
        easing: "linear",
        duration: 3000,
        delay: anime.stagger(30),
        complete: animateBlocks
      });
    };

    animateBlocks();
  }, []);

  return (
    <>
    
    <Navbar/>

    <div className="background bg-black min-h-screen flex items-center justify-center overflow-hidden ">

        
      <div className=" text-center">
        <div className='z-10 space-y-8'>
        <h1 className='z-10 text-5xl  text-white'><span >Emerging Web3 Ventures Trust Our</span></h1>
        <h1 className='z-10 text-5xl  text-white'><span >SmartAudit</span></h1>

        </div>
      </div>
      
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="block opacity-5" />
      ))}
    </div>
    </>
  );
};

export default Home;
