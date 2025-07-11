import React from 'react'
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'

function MobileNav() {
  return (
    <div className='md:hidden position-fixed'>
        <Sheet>
            <SheetTrigger className='text-white hover:cursor-pointer'>
                <AlignJustify className='size-10 flex h-auto' />
            </SheetTrigger>
            <SheetContent  className='bg-[#333] border-0'>
                <ul className='gap-30 items-center text-2xl flex flex-col mt-50'>
                    <li className='hover:text-white'>
                        <Link to="/">
                        <p>Home</p>
                        </Link>
                    </li>
                    <li className='hover:text-white'>
                        <Link to="/about">
                        <p>About</p>
                        </Link>
                    </li>
                    <li className='hover:text-white'>
                        <Link to="/projectall">
                        <p>Projects</p>
                        </Link>
                    </li>
                    <li className='hover:text-white'>
                        <Link to="/contact">
                        <p>Contacts</p>
                        </Link>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav