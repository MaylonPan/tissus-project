import Project from '@/pages/Project'
import React from 'react'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import { CircleArrowRight } from 'lucide-react';


gsap.from("p,input", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function ProjectCard({imageUrl,ProjectName,Owner,Location}) {
  return (
    <div className='mt-10 '>
        <div className='border-b-1 '>
          <div className='md:flex pb-10 hover:cursor-pointer hover:scale-105 ease-in-out duration-200'>
            <img src={imageUrl} className='object-cover md:w-1/2'/>
            <div className='md:w-1/2 md:pl-10'>
                <p id='projectNameStyling'>{ProjectName}</p>
                <p className='font-semibold my-[5px]'>Owner : <span className='font-thin'>{Owner}</span></p>
                <p className='font-semibold pb-5'>Location : <span className='font-thin'>{Location}</span></p>
                <Link to='/project' className='flex items-center gap-5'>
                <p className='text-xl animated-underline'>More</p>
                  <CircleArrowRight className='size-10 hover:cursor-pointer'/>
                </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard