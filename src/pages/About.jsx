import React from 'react';
import Navbar from "../assets/components/Navbar.jsx";
import Footer from '../assets/components/Footer.jsx';

function About() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <div className='pb-10'>
          <div className='relative md:hidden'>
            <img src="/astra-sky-river/astra-sr4.png" id='headerImg' className='relative w-screen'/>
            <div className='absolute bottom-5 pl-5'>
              <div className='flex'>
                <h5>ABOUT</h5>
              </div>
            </div>
          </div>
          <div className='hidden md:flex'>
            <div className=' w-1/2 flex flex-col justify-center'>
              <p className='text-[4rem] pl-5'>ABOUT</p>
              <div className='pl-5 mt-10 w-100'>
                <p>Our studio specializes in creating concepts of modern interior solutions and  their subsequent implementation.</p>
                <p>We have a lot of experience, and it helps to easily solve any issues and keep abreast of trends.</p>
              </div>
            </div>
            <img src="/astra-sky-river/astra-sr4.png" id='headerImg' className='w-2/3'/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About