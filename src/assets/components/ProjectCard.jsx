import Project from '@/pages/Project'
import React from 'react'
import { gsap } from "gsap";

gsap.from("h3,p,input", {
    y: 100, // เลื่อนจาก 100px ด้านล่าง
    opacity: 0, // เริ่มจาก opacity 0
    duration: 1, // ใช้เวลา 1 วินาที
    delay: 0.5, // หน่วงเวลา 0.5 วินาที
    ease: "power2.out" // ชนิดของ easing
});

function ProjectCard({imageUrl,ProjectName,Owner,Location}) {
  return (
    <div className='mt-10'>
        <div className='border-b-1'>
            <img src={imageUrl}/>
            <div>
                <p id='projectNameStyling'>{ProjectName}</p>
                <p className='font-semibold my-[5px]'>Owner : <span className='font-thin'>{Owner}</span></p>
                <p className='font-semibold pb-5'>Location : <span className='font-thin'>{Location}</span></p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard