import React from 'react'
import Navbar from "../../../../assets/components/Navbar.jsx";
import Footer from '../../../../assets/components/Footer.jsx';
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
        <div className=''>
          <img src="/public/astra-sky-river/astra-sr3.jpg"/>
        </div>
        <div className='px-10'>
          <div class="center-container my-10">
            <div className='w-full  video-responsive'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/gwIc7HFhal4?si=mO8SeMtTsP-vZVQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <div>
            <p className='text-3xl'>Astra Sky River Condominium</p>
            <p className='font-semibold'>Owner : <span className='font-thin'>Ornsirin</span></p>
            <p className='font-semibold'>Location : <span className='font-thin'>Chiangmai</span></p>
            <a href="https://ornsirin.co.th/property-item/the-astra-sky-river-changklan/"><p>Go to Website</p></a>
          </div>
          <div className='my-10'>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
          </div>
          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, explicabo amet excepturi laudantium iusto vero, iure soluta dolores atque blanditiis velit cumque modi. Exercitationem saepe hic iste deleniti nostrum aut, laborum esse, harum praesentium inventore neque ut ab, quo illo necessitatibus officia natus illum quam voluptas impedit nesciunt amet! Officia.</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default AstraSkyRiver