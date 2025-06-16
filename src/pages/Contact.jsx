import React from 'react'
import Navbar from "../assets/components/Navbar.jsx";
import Footer from '../assets/components/Footer.jsx';
import { Facebook } from 'lucide-react';

function Contact() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='relative'>
          <img src="/contact.png" id='headerImg' className='relative w-screen'/>
          <div className='absolute bottom-5 pl-5'>
            <div className='flex'>
              <h5>CONTACTS</h5>
            </div>
          </div>
        </div>
        <div className='pl-5 mt-10'>
          <div className='mb-5'>
            <p className='font-semibold my-[5px] text-2xl'>Call us as this number :</p>
            <p>+66 123 456 789</p>
          </div>
          <div className='mb-5'>
            <p className='font-semibold my-[5px] text-2xl'>Location :</p>
            <p>Chiangmai, Thailand</p>
          </div>
          <div className='mb-5'>
            <p className='font-semibold my-[5px] text-2xl'>Contact us by email :</p>
            <p>test@testmail.com</p>
          </div>
          <div className='mb-5'>
            <p className='font-semibold my-[5px] text-2xl'>Follow us on social networks :</p>
            <Facebook className='hover:cursor-pointer'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact