import React from 'react'

function AllProjectCard({imageUrl,ProjectName,Owner,Location}) {
  return (
    <div>
        <div className='px-5 mb-20 overflow-hidden hover:cursor-pointer hover:scale-105 ease-in-out duration-200 '>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img src={imageUrl} className='mb-5 w-full h-full object-cover'/>
          </div>
            <div>
                <p className='projectcard text-2xl pb-3'>{ProjectName}</p>
                <p className='projectcard'>Owner : <span className='font-thin'>{Owner}</span></p>
                <p className='projectcard'>Location : <span className='font-thin'>{Location}</span></p>
            </div>
        </div>
    </div>
  )
}

export default AllProjectCard