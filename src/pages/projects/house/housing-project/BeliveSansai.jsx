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

function BeliveSansai() {

  const slidesA = [
    "/belive-sansai/type-bauhinia/belive-sansai-buahinia-4.jpg",
    "/belive-sansai/type-bauhinia/belive-sansai-buahinia-1.jpg",
    "/belive-sansai/type-bauhinia/belive-sansai-buahinia-2.jpg",
    "/belive-sansai/type-bauhinia/belive-sansai-buahinia-3.jpg",
  ];

  const slidesB = [
    "/belive-sansai/type-canna-lilly/belive-sansai-canna-lilly-4.jpg",
    "/belive-sansai/type-canna-lilly/belive-sansai-canna-lilly-1.jpg",
    "/belive-sansai/type-canna-lilly/belive-sansai-canna-lilly-2.jpg",
    "/belive-sansai/type-canna-lilly/belive-sansai-canna-lilly-3.jpg",
  ];

  const slidesC = [
    "/belive-sansai/type-gardenia/belive-sansai-gardenia-4.jpg",
    "/belive-sansai/type-gardenia/belive-sansai-gardenia-1.jpg",
    "/belive-sansai/type-gardenia/belive-sansai-gardenia-2.jpg",
    "/belive-sansai/type-gardenia/belive-sansai-gardenia-3.jpg",
  ];

  const slidesD = [
    "/belive-sansai/type-plumeria/belive-sansai-plumeria-4.jpg",
    "/belive-sansai/type-plumeria/belive-sansai-plumeria-1.jpg",
    "/belive-sansai/type-plumeria/belive-sansai-plumeria-2.jpg",
    "/belive-sansai/type-plumeria/belive-sansai-plumeria-3.jpg",
  ];

  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='flex justify-center '>
          <img src="/belive-sansai/belive-sansai.png"/>
        </div>
        <div className='px-10 mt-30'>
          <div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Belive Sansai Type-Bauhinia</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Ornsirin Group</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesA}/>
                </div>
            </div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Belive Sansai Type-Canna Lilly</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Ornsirin Group</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesB}/>
                </div>
            </div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Belive Sansai Type-Gardenia</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Ornsirin Group</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesC}/>
                </div>
            </div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Belive Sansai Type-Plumeria</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Surrounding Star Company Limited</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Samui</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesD}/>
                </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BeliveSansai