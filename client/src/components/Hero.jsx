import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {
     console.log("assets:", assets)  // ← add this line
     console.log("banner:", assets.main_banner_bg)
  return (
    <div className="relative">
        <img src={assets.main_banner_bg} 
        className='hidden md:block w-full'/>

        <img src={assets.main_banner_bg_sm} 
        className="md:hidden w-full" />   
    </div>
  );
};

export default Hero;

