import React from 'react'
import { gsap } from "gsap";

gsap.from("h3,p,input", {
    y: 100, // เลื่อนจาก 100px ด้านล่าง
    opacity: 0, // เริ่มจาก opacity 0
    duration: 1, // ใช้เวลา 1 วินาที
    delay: 0.5, // หน่วงเวลา 0.5 วินาที
    ease: "power2.out" // ชนิดของ easing
});

function Footer() {
  return (
    <div className='max-w-[1200px] min-w-screen flex flex-col md:flex-row mt-10'>
        <div className='ml-[20px]'>
          <h3 className='mb-2'>NEWSLETTER</h3>
          <p className='mb-5'>Subscribe to receive updates, access to exclusive deal and more</p>
          <h3>Email:</h3>
          <input type="text" className='border-b-1 w-[500px] mt-5'/>
        </div>
        <div className='ml-[20px] mt-[20px] md:mt-0 md:ml-0 md:mr-[20px]'>
          <h3>hello</h3>
        </div>
    </div>
  )
}

export default Footer