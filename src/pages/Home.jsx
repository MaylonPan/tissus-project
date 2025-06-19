import React from 'react';
import Navbar from "../assets/components/Navbar.jsx";
import Footer from '../assets/components/Footer';
import ProjectCard from '../assets/components/ProjectCard.jsx';
import { CircleArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";

gsap.from("h3,h4,h5,h6,p,input,span,img,Link", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function Home() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        {/* Head */}
        <div>
          <div className='relative flex md:hidden'>
            <img src="/astra-sky-river/astra-sr1.jpg" id='headerImg' className='w-screen'/>
            <div className='absolute bottom-0 pl-5'>
              <div className='flex'>
                <h5 className='text-[2rem]'>PROFESSIONAL ADVICE</h5>
              </div>
              <div>
                <h6 className='text-[2rem]'>FROM OUR DESIGNER</h6>
                <p className='text-[1rem] my-8'>Our studio guarantees comfortable cooperation and the development of modern concepts for your home</p>
                {/* <CircleArrowRight className='md:hidden size-10 hover:cursor-pointer'/> */}
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:flex  relative'>
          <div className='w-2/3'>
            <img src="/astra-sky-river/astra-sr1.jpg" id='headerImg'/>
            <div className='absolute bottom-0'>
              <p className='text-[3rem]'>PROFESSIONAL ADVICE</p>
              <div className='flex my-8'>
                <p className='w-80 pl-10 flex items-center'>Our studio guarantees comfortable cooperation and the development of modern concepts for your home</p>
                <p className='ml-30 text-[3rem] flex justify-end'>FROM OUR DESIGNER</p>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <div className='mt-20 md:flex'>
          <div className='md:w-1/3'>
            <p className='text-[3rem] mb-5 pl-5 md:text-[3rem]'>ABOUT US</p>
            <p className='hidden md:flex mb-5 pl-5 text-[1.25rem]'>Our studio specializes in creating concepts of modern interior solutions and their subsequent implementation.</p>
            <p className='hidden md:flex pl-5 text-[1.25rem]'>We have a lot of experience, and it helps to easily solve any issues and keep abreast of trends.</p>
            <div className='md:flex items-center h-20 mt-5 gap-5 pl-5 hidden'>
              <p className='text-[1.5rem]'>LEARN MORE</p>
              <Link to='/about'>
                <CircleArrowRight className='size-10 hover:cursor-pointer'/>
              </Link>
            </div>
          </div>
          <div className='md:w-2/3'>
            <p className='mb-5 pl-5 text-[1.25rem] md:hidden'>Our studio specializes in creating concepts of modern interior solutions and their subsequent implementation.</p>
            <p className='pl-5 text-[1.25rem] md:hidden'>We have a lot of experience, and it helps to easily solve any issues and keep abreast of trends.</p>
            <img src="/astra-sky-river/astra-sr3.jpg" className='mt-5 w-screen'/>
            <div className='flex items-center h-20 mt-5 gap-5 pl-5 md:hidden'>
              <p className='text-[1.5rem]'>LEARN MORE</p>
              <Link to='/about'>
                <CircleArrowRight className='size-10 hover:cursor-pointer'/>
              </Link>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className='mt-20'>
          <div className='grid grid-cols-2 pl-5 gap-10 md:flex md:justify-between'>
            <div className='w-40'>
              <p id='stat'>10+</p>
              <p id='statDesc'>years of work <br/> of our agancy</p>
            </div>
            <div className='w-40'>
              <p id='stat'>30+</p>
              <p id='statDesc'>achitectural projects</p>
            </div>
            <div className='w-40'>
              <p id='stat'>40+</p>
              <p id='statDesc'>reiable suppliers</p>
            </div>
            <div className='w-40'>
              <p id='stat'>200+</p>
              <p id='statDesc'>created unique interiors</p>
            </div>
          </div>
          <img src="/wolf-house/wolf1.jpg" className='w-screen mt-5'/>
        </div>
        {/* Services */}
        <div className='mt-20 pl-5'>
          <div className='mb-5'>
            <h3 className='text-[2rem]'>OUR</h3>
            <p className='text-[3rem]'>SERVICES</p>
          </div>
          <div className='md:flex md:justify-between md:gap-10'>
            <div className='mb-5'>
              <p className='text-[1.5rem] font-semibold mb-3'>Residential design</p>
              <p>Our design studio is ready to help develop a unique, modern and convenient project for your apartment, taking into account your desires, ideas and views</p>
            </div>
            <div className='mb-5'>
              <p className='text-[1.5rem] font-semibold mb-3'>Office design</p>
              <p>The main task of the studio is to make the workspace harmonious and comfortable. It is this kind of environment that encourages employees to work productively</p>
            </div>
            <div className='mb-5'>
              <p className='text-[1.5rem] font-semibold mb-3'>Commercial space design</p>
              <p>Often people like to return to those places where they liked not only the service, but also the pleasant atmosphere of the room, which caused emotions</p>
            </div>
          </div>
        </div>
        {/* Our Work */}
        <div className='mt-20 pl-5'>
          <div>
            <h3>WHAT IS</h3>
            <p className='text-[3rem]'>OUR WORK</p>
          </div>
          <div className='mr-10 md:flex'>
            <img src="/arise-charoenmuang/arise-crm2.jpg" className='md:w-1/2 object-cover'/>
            <div className='mt-5 flex flex-col gap-5 md:w-1/2 md:ml-10'>
              <div className='border-b-1 pb-5 md:flex md:gap-5 h-full'>
                <h4 className='w-1/2'>Measurement</h4>
                <p className='w-1/2'>Measuring a room is a complex of works that is formed for each room using modern equipment. It is on the basis of the received data that all layouts and drawings are created</p>
              </div>
              <div className='border-b-1 pb-5 md:flex md:gap-5'>
                <h4 className='w-1/2'>Concept</h4>
                <p className='w-1/2'>The concept is created taking into account the finishing, design, planning solution. Designers develop up to three solutions to make it easier for the customer to choose the option they like</p>
              </div>
              <div className='border-b-1 pb-5 md:flex md:gap-5'>
                <h4 className='w-1/2'>Visualization</h4>
                <p className='w-1/2'>Visualization is a three-dimensional image of a room with all the details of the future interior included in it. This allows you to assess the situation as accurately as possible and clearly demonstrable to the customer</p>
              </div>
              <div className='border-b-1 pb-5 md:flex md:gap-5'>
                <h4 className='w-1/2'>Construction</h4>
                <p className='w-1/2'>Transfer of the working drawing to the construction department, which will bring the idea to life and bring it to an ideal result</p>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className='mt-20 pl-5 pr-5'>
          <div>
            <h3>OUR</h3>
            <p className='text-[3rem]'>COMPLETED PROJECTS</p>
          </div>
          <div className='mt-10'>
            <ProjectCard
            imageUrl="/astra-sky-river/astra-sr3.jpg"
            ProjectName="THE ASTRA SKY RIVER CONDOMINUIM"
            Owner="Ornsirin"
            Location="Chiangmai"
            />
            <ProjectCard
            imageUrl="/wolf-house/wolf1.jpg"
            ProjectName="PROJECT WOLF HOUSE"
            Owner="The Crown"
            Location="Chiangmai"
            />
            <ProjectCard
            imageUrl="/arise-mahidol/arise-mahidol1.jpg"
            ProjectName="ARISE CONDO @MAHIDOL"
            Owner="Ornsirin"
            Location="Chiangmai"
            />
          </div>
          <div className='flex justify-end mt-10 mb-30 gap-5'>
            <Link to='/project' className='flex items-center gap-5'>
              <p className='text-xl animated-underline'>More</p>
              <CircleArrowRight className='size-10 hover:cursor-pointer'/>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home