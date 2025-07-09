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
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/wolf-house'>
                  <Allprojectcard
                  imageUrl="/wolf-house/wolf1.jpg"
                  ProjectName="Wolf House"
                  Owner="The Crown"
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
                <Link to='/arise-mahidol'>
                  <Allprojectcard
                  imageUrl="/arise-mahidol/arise-mahidol1.jpg"
                  ProjectName="Arise Condominium Mahidol"
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
                <Link to='/pool-villa-samui'>
                  <Allprojectcard
                  imageUrl="/pool-villa-samui/type-b/pool-villa-samui-b-building-1.jpg"
                  ProjectName="Pool Villa Samui"
                  Owner="Surrounding Star Company Limited"
                  Location="Samui"
                  />
                </Link>
                <Link to='/belive-sansai'>
                  <Allprojectcard
                  imageUrl="/belive-sansai/type-plumeria/belive-sansai-plumeria-4.jpg"
                  ProjectName="Belive Sansai-Maejo"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/b2-samoeng/b2-samoeng-building.jpg"
                  ProjectName="B2 Samoeng"
                  Owner="B2"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/the-next-jedyod/next-jedyod-pool.jpg"
                  ProjectName="The Next Jedyod"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/the-next-jedyod-2/The-next-jedyod2-pool.png"
                  ProjectName="The Next Jedyod 2"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="the-next-ruamchok-city-hall/the-next-ruam-chok-pool-2.png"
                  ProjectName="The Next Ruamchok City Mall"
                  Owner="Ornsirin Group"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/moda-condo/moda-building.png"
                  ProjectName="Moda Condominium"
                  Owner="The Crown"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/the-rachawong/rachawong-1.jpg"
                  ProjectName="The Rachawong Hotel"
                  Owner="Mr.Watson Jaowa"
                  Location="Chiangmai"
                  />
                </Link>
                <Link to='/astra-sky-river'>
                  <Allprojectcard
                  imageUrl="/suandok-kaew/suandok-kaew1.png"
                  ProjectName="Suandok Kaew Hotel"
                  Owner="คุณนพนธ์ นิธิธวัชพงค์"
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



