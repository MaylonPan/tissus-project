import React, { useState } from 'react'
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";


function Carousel({ slides }) {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    };

  return (
    <div className='overflow-hidden relative'>
        <div className={`flex transition ease-out duration-500 `}
        style={{ transform: `translateX(-${current * 100}%)` }}>

            {slides.map((s) => {
                return <img src={s} className='object-cover max-w-full'/>;
            })}
        </div>

        <div className='absolute top-0 h-full w-full items-center justify-between flex text-white px-10 text-3xl'>
            <button onClick={previousSlide} className='cursor-pointer bg-gray-400 rounded-full w-8 h-8 flex justify-center items-center opacity-70 hover:bg-white hover:text-[#111] hover:duration-200 hover:scale-130'><ChevronLeft/></button>
            <button onClick={nextSlide} className='cursor-pointer bg-gray-400 rounded-full w-8 h-8 flex justify-center items-center opacity-70 hover:bg-white hover:text-[#111] hover:duration-200 hover:scale-130'><ChevronRight/></button>
        </div>
    </div>
  )
}

export default Carousel