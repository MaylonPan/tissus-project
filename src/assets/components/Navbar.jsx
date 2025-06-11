import React from 'react'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';


function Navbar() {



  return (
    <div className='flex justify-center'>
        <nav className='container w-full flex justify-between items-center border-b-1 border-[#dcdcdc]'>
          <div className='flex justify-center items-center ml-5 mt-2 pb-2'>
            <Link to="/">
              <img
              className='w-[110px] h-[52px]'
              src="/logo-white.png"/>
            </Link>
          </div>
          <div className=''>
            <ul className=' gap-15 items-center text-[#dcdcdc] hidden md:flex'>
              <li className='hover:text-white'>
                <Link to="/about">
                <p>About</p>
                </Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/project">
                <p>Projects</p>
                </Link>
              </li>
              <li className='hover:text-white'>
                <Link to="/contact">
                <p>Contact</p>
                </Link>
              </li>
            </ul>
              <MobileNav />
          </div>
        </nav>
    </div>
  )
}

export default Navbar