import React from 'react'
import Navbar from "../../../../assets/components/Navbar.jsx";
import Footer from '../../../../assets/components/Footer';
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

function ProjectCondoLowRise() {
  return (
    <div>
      <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='mt-30 px-10'>
          <h2 className='pb-20 border-b-1'>Our Projects - Condominium - Low Rise</h2>
          <div className='pt-20'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                <Link to='/arise-mahidol'>
                  <Allprojectcard
                  imageUrl="/arise-mahidol/arise-mahidol1.jpg"
                  ProjectName="Arise Condominium Mahidol"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/the-next-jedyod'>
                  <Allprojectcard
                  imageUrl="/the-next-jedyod/next-jedyod-pool.jpg"
                  ProjectName="The Next Jedyod"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/the-next-jedyod-2'>
                  <Allprojectcard
                  imageUrl="/the-next-jedyod-2/The-next-jedyod2-pool.png"
                  ProjectName="The Next Jedyod 2"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/the-next-ruamchok'>
                  <Allprojectcard
                  imageUrl="the-next-ruamchok-city-hall/the-next-ruam-chok-pool-2.png"
                  ProjectName="The Next Ruamchok City Mall"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/moda'>
                  <Allprojectcard
                  imageUrl="/moda-condo/moda-building.png"
                  ProjectName="Moda Condominium"
                  Owner="The Crown"
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

export default ProjectCondoLowRise