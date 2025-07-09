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

function TheNextRuamChok() {

  let slides = [
      "/the-next-ruamchok-city-hall/the-next-ruam-chok-inside-1.png",
      "/the-next-ruamchok-city-hall/the-next-ruam-chok-inside-2.png",
      "/the-next-ruamchok-city-hall/the-next-ruam-chok-inside-3.png",
      "/the-next-ruamchok-city-hall/the-next-ruam-chok-fitness-1.png",
      "/the-next-ruamchok-city-hall/the-next-ruam-chok-fitness-2.png",
      "/the-next-ruamchok-city-hall/the-next-ruam-chok-pool-1.png",

  ];

  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='flex justify-center'>
          <img src="/the-next-ruamchok-city-hall/the-next-ruam-chok-pool-1.png"/>
        </div>
        <div className='px-10'>
          <div class="center-container my-10">
            <div className='w-full  video-responsive'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kRTYyaRD5cM?si=veCig0mCV65P69Ca" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
            </div>
          </div>
          <div>
            <p className='text-3xl mb-3'>The Next Ruamchok City Hall</p>
            <p className='font-semibold my-2'>Owner : <span className='font-thin'>Ornsirin Group</span></p>
            <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
            <div className='my-10 w-[60%] m-auto py-11'>
              <Carousel slides={slides}/>
            </div>
            <div className='w-full flex justify-center mt-5'>
              <button className='bg-[#111] border-1 border-[#ccc] w-100 h-15 rounded-4xl text-xl font-semibold hover:cursor-pointer hover:bg-[#ccc] hover:text-[#111] hover:scale-102 duration-200'>
              <a href="https://ornsirin.co.th/property-item/the-next-city-hall/" target="_blank"><p>Go to Website</p></a>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TheNextRuamChok