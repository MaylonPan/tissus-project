import React from 'react';
import Navbar from "../assets/components/Navbar.jsx";
import Footer from '../assets/components/Footer';
import { CircleArrowRight } from 'lucide-react';
import { gsap } from "gsap";

gsap.from("h3,h5,h6,p,input", {
    y: 100, // เลื่อนจาก 100px ด้านล่าง
    opacity: 0, // เริ่มจาก opacity 0
    duration: 1, // ใช้เวลา 1 วินาที
    delay: 0.5, // หน่วงเวลา 0.5 วินาที
    ease: "power2.out" // ชนิดของ easing
});

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <img src="/astra-sky-river/astra-sr1.jpg" id='landingImg'/>
          <div>
            <div className='flex'>
              <h5 className='text-[3rem]'>PROFESSIONAL ADVICE</h5>
              <CircleArrowRight className='sm:hidden'/>
            </div>
            <div>
              <h6 className='text-[3rem]'>FROM OUR DESIGNER</h6>
              <p className='text-[1.5rem] my-10'>Our studio guarantees comfortable cooperation and the development of modern concepts for your home</p>
              <CircleArrowRight className='md:hidden size-17'/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home