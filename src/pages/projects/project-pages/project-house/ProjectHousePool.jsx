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

function ProjectHousePool() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='mt-30 px-10'>
          <h2 className='pb-20 border-b-1'>Our Projects - House - Pool Villa</h2>
          <div className='pt-20'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                <Link to='/pool-villa-samui'>
                  <Allprojectcard
                  imageUrl="/pool-villa-samui/type-b/pool-villa-samui-b-building-1.jpg"
                  ProjectName="Pool Villa Samui"
                  Owner="Surrounding Star Company Limited"
                  Location="Samui"
                  />
                </Link>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default ProjectHousePool