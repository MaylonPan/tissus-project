import React from 'react'
import Navbar from "../../../../assets/components/Navbar.jsx";
import Footer from '../../../../assets/components/Footer.jsx';
import Allprojectcard from '../../../../assets/components/AllProjectCard.jsx';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

gsap.from("h2,h3,h4,h5,h6,p,input,span,img,Link", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function ProjectCondoHighRise() {
  return (
    <div>
      <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='mt-30 px-10'>
          <h2 className='pb-20 border-b-1'>Our Projects - Condominium - High Rise</h2>
          <div className='pt-20'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/the-astra'>
                  <Allprojectcard
                  imageUrl="/the-astra/Astra-Rooftop.jpg"
                  ProjectName="THE ASTRA CONDOMINUIM"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>

                <Link to='/arise-charoenmuang'>
                  <Allprojectcard
                  imageUrl="/arise-charoenmuang/arise-crm3.jpg"
                  ProjectName="Arise Condominium Charoenmuang"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
    </div>
  )
}

export default ProjectCondoHighRise