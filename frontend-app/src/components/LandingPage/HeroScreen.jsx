import React, { useEffect } from 'react';
import anime from 'animejs'; // Import anime.js library
import './HeroScreen.css'; // Import CSS file

const HeroScreen = () => {
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
    <div className='min-h-screen'>
    <div className="background bg-black min-h-screen flex items-center justify-center overflow-hidden ">
        <div className="z-10 text-center">
          <div className='z-10 space-y-8'>
            <h1 className='z-10 lg:text-6xl font-bold text-4xl text-white '><span >Emerging Web3 Ventures Trust Our</span></h1>
            <h1 className='z-10 lg:text-7xl text-4xl font-bold text-white'><span >SmartAudit</span></h1>
          </div>

          <div className='lg:flex lg:items-center lg:justify-center z-10 lg:space-x-12  mt-12'>
            <button className='z-10 bg-blue-500 text-white text-xl font-medium py-2 px-4 rounded-lg'>
              Explore Our Audit Process
            </button>

            <button className=' z-10 border-blue-500 border-2 bg-transparent text-white text-xl font-medium py-2 px-4 rounded-lg'>
              Request for new Audit
            </button>
          </div>
        </div>

        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="block opacity-5 " />
        ))}
      </div>
    </div>
    
    </>
  )
}

export default HeroScreen