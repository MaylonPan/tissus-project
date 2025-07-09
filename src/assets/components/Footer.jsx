import React from 'react'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

gsap.from("h3,p,input", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function Footer() {
  return (
    <div className=' flex flex-col md:flex-row mt-10 pb-10 pl-10'>
        <div className='mb-5'>
          <h3 className='mb-2'>NEWSLETTER</h3>
          <p className='mb-5'>Subscribe to receive updates, access to exclusive deal and more</p>
          <h3>Email:</h3>
          <input type="text" className='border-b-1 w-2/3 md:w-full mt-5'/>
        </div>
        <div className='flex md:justify-end md:pr-20 w-full mt-[20px] '>
          <div className='flex flex-col gap-5'>
            <Link to='/' className='animated-underline'>HOME</Link>
            <Link to='/about' className='animated-underline'>ABOUT</Link>
            <Link to='/projectall' className='animated-underline'>PROJECTS</Link>
            <Link to='/contact' className='animated-underline'>CONTACTS</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer