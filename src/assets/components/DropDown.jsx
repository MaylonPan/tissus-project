import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropDown() {
  return (
    <div className=''>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p className='hover:text-white'>Projects</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#444] z-999" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to="/projectall" className='text-[#dcdcdc] hover:text-[#444]'>
                All
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className='text-[#dcdcdc] hover:text-[#444]'>Condominium</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className='bg-[#444] text-[#dcdcdc]'>
                <DropdownMenuItem asChild>
                  <Link to="/projectcondoall" className='text-[#dcdcdc] hover:text-[#444]'>
                  All
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projectcondolowrise" className='text-[#dcdcdc] hover:text-[#444]'>
                  Low Rise
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projectcondohighrise" className='text-[#dcdcdc] hover:text-[#444]'>
                  High Rise
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className='text-[#dcdcdc] hover:text-[#444]'>House</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className='bg-[#444] text-[#dcdcdc]'>
                <DropdownMenuItem asChild>
                  <Link to="/projecthouseall" className='text-[#dcdcdc] hover:text-[#444]'>
                  All
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projecthouse-housing-project" className='text-[#dcdcdc] hover:text-[#444]'>
                  Housing Project
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/projecthouse-pool-villa" className='text-[#dcdcdc] hover:text-[#444]'>
                  Pool Villa
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem asChild>
              <Link to="/projecthotelall" className='text-[#dcdcdc] hover:text-[#444]'>
                Hotel
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropDown