import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import DropDown from './DropDown';


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='flex justify-center'>
        <nav className={`
          container w-full flex justify-between items-center fixed z-50
          ${isScrolled ? 'scrolled-nav' : 'border-b border-[#dcdcdc]'}
        `}>
          <div className='flex justify-center items-center ml-5 mt-2 pb-2'>
            <Link to="/">
              <img
              className='w-[110px] h-[52px]'
              src="/logo-white.png"/>
            </Link>
          </div>
          <div>
            <ul className='gap-20 items-center hidden md:flex'>
              <li className='hover:text-white animated-underline'>
                <Link to="/about">
                <p>About</p>
                </Link>
              </li>
              <li className='hover:text-white animated-underline'>
                <DropDown/>
              </li>
              <li className='hover:text-white animated-underline'>
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