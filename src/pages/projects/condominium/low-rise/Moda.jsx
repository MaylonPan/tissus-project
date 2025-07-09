import React from 'react'
import Navbar from "../../../../assets/components/Navbar.jsx";
import Footer from '../../../../assets/components/Footer.jsx';
import Carousel from '../../../../components/ui/Carousel.jsx';
import { gsap } from "gsap";

gsap.from("h2,h3,h4,h5,h6,p,input,span,img,Link,button", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function Moda() {

  let slides = [
      "/moda-condo/moda-inside-1.jpg",
      "/moda-condo/moda-inside-2.jpg",
      "/moda-condo/moda-inside-3.jpg",
      "/moda-condo/moda-inside-4.jpg",
      "/moda-condo/moda-building.png",

  ];

  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='flex justify-center'>
          <img src="/moda-condo/moda-building.png"/>
        </div>
        <div className='px-10 mt-30'>
          <div>
            <p className='text-3xl mb-3'>Moda Condominium</p>
            <p className='font-semibold my-2'>Owner : <span className='font-thin'>The Crown</span></p>
            <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
            <div className='my-10 w-[60%] m-auto py-11'>
              <Carousel slides={slides}/>
            </div>
            <div className='w-full flex justify-center mt-5'>
              <button className='bg-[#111] border-1 border-[#ccc] w-100 h-15 rounded-4xl text-xl font-semibold hover:cursor-pointer hover:bg-[#ccc] hover:text-[#111] hover:scale-102 duration-200'>
              <a href="https://www.facebook.com/modacondochiangmai/?locale=th_TH" target="_blank"><p>Go to Website</p></a>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Moda