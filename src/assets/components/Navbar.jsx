import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-center'>
        <nav className='max-w-[1200px] w-full flex justify-between pb-2 border-b-1 border-[#dcdcdc]'>
          <div className='flex justify-center items-center ml-5 mt-2'>
            <Link to="/">
              <img
              className='w-[110px] h-[52px]'
              src="/logo-white.png"/>
            </Link>
          </div>
          <div className='flex md:hidden'>
            <img
            className='w-15 h-15'
            src="/burger-menu.svg"/>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex gap-15 items-center text-[#dcdcdc] '>
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
          </div>
        </nav>
    </div>
  )
}

export default Navbar