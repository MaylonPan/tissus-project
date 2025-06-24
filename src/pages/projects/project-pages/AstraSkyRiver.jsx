import React from 'react'
import Navbar from "../../../assets/components/Navbar.jsx";
import Footer from '../../../assets/components/Footer';
import { gsap } from "gsap";

gsap.from("h2,h3,h4,h5,h6,p,input,span,img,Link", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function AstraSkyRiver() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='mt-30'>
          <img src="/" alt="" />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AstraSkyRiver