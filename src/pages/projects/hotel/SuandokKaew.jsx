import React from 'react'
import Navbar from "../../../assets/components/Navbar.jsx";
import Footer from '../../../assets/components/Footer.jsx';
import Carousel from '../../../components/ui/Carousel.jsx';
import { gsap } from "gsap";

gsap.from("h2,h3,h4,h5,h6,p,input,span,img,Link,button", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function SuandokKaew() {

  let slides = [
      "/suandok-kaew/suandok-kaew1.png",
      "/suandok-kaew/suandok-kaew2.png",
      "/suandok-kaew/suandok-kaew3.png",
      "/suandok-kaew/suandok-kaew4.png",
  ];

  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='flex justify-center'>
          <img src="/suandok-kaew/suandok-kaew4.png"/>
        </div>
        <div className='px-10 mt-30'>
          <div>
            <p className='text-3xl mb-3'>Suandok Kaew Hotel</p>
            <p className='font-semibold my-2'>Owner : <span className='font-thin'>คุณนพนธ์ นิธิธวัชพงค์</span></p>
            <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
            <div className='my-10 w-[60%] m-auto py-11'>
              <Carousel slides={slides}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SuandokKaew