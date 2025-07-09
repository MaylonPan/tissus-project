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

function TheRachawong() {

  let slides = [
      "/the-rachawong/rachawong-4.jpg",
      "/the-rachawong/rachawong-1.jpg",
      "/the-rachawong/rachawong-2.jpg",
      "/the-rachawong/rachawong-3.jpg",
  ];

  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='flex justify-center'>
          <img src="/the-rachawong/rachawong-1.jpg"/>
        </div>
        <div className='px-10 mt-30'>
          <div>
            <p className='text-3xl mb-3'>The Rachawong Hotel</p>
            <p className='font-semibold my-2'>Owner : <span className='font-thin'>Mr.Watson Jaowa</span></p>
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

export default TheRachawong