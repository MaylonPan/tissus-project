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

function PoolVillaSamui() {

  const slidesA = [
    "/pool-villa-samui/type-a/pool-villa-samui-a-building-1.jpg",
    "/pool-villa-samui/type-a/pool-villa-samui-a-building-2.jpg",
    "/pool-villa-samui/type-a/pool-villa-samui-a-building-3.jpg",
  ];

  const slidesB = [
    "/pool-villa-samui/type-b/pool-villa-samui-b-building-1.jpg",
    "/pool-villa-samui/type-b/pool-villa-samui-b-building-2.jpg",
    "/pool-villa-samui/type-b/pool-villa-samui-b-building-3.jpg",
  ];

  const slidesC = [
    "/pool-villa-samui/type-c/pool-villa-samui-c-building-1.jpg",
    "/pool-villa-samui/type-c/pool-villa-samui-c-building-2.jpg",
    "/pool-villa-samui/type-c/pool-villa-samui-c-building-3.jpg",
  ];

  const slidesD = [
    "/pool-villa-samui/type-d-and-e/pool-villa-samui-d-and-e-building-1.jpg",
    "/pool-villa-samui/type-d-and-e/pool-villa-samui-d-and-e-building-2.jpg",
    "/pool-villa-samui/type-d-and-e/pool-villa-samui-d-and-e-building-3.jpg",
  ];

  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='flex justify-center'>
          <img src="/pool-villa-samui/type-b/pool-villa-samui-b-building-1.jpg"/>
        </div>
        <div className='px-10 mt-30'>
          <div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Pool Villa Samui Type-A</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Surrounding Star Company Limited</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Samui</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesA}/>
                </div>
            </div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Pool Villa Samui Type-B</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Surrounding Star Company Limited</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Samui</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesB}/>
                </div>
            </div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Pool Villa Samui Type-C</p>
                <p className='font-semibold my-2'>Owner : <span className='font-thin'>Surrounding Star Company Limited</span></p>
                <p className='font-semibold'>Location : <span className='font-thin'>Samui</span></p>
                <div className='my-10 w-[60%] m-auto py-11'>
                <Carousel slides={slidesC}/>
                </div>
            </div>
            <div className='mt-50 border-b-1 border-[#ccc]'>
                <p className='text-3xl mb-3'>Pool Villa Samui Type-D and E</p>
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

export default PoolVillaSamui