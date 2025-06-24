import React from 'react'
import Navbar from "../../assets/components/Navbar.jsx";
import Footer from '../../assets/components/Footer';
import Allprojectcard from '../../assets/components/AllProjectCard.jsx';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

gsap.from("h2,h3,h4,h5,h6,p,input,span,img,Link", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function ProjectAll() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='mt-30 px-10'>
          <h2 className='pb-20 border-b-1'>Our Projects - All</h2>
          <div className='pt-20'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/wolf-house/wolf1.jpg"
                  ProjectName="Wolf House"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/astra-sky-river/astra-sr5.jpg"
                  ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
                  Owner="Ornsirin"
                  Location="Chiangmai"
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

export default ProjectAll