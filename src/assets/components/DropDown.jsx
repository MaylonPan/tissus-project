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
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Low Rise</DropdownMenuItem>
              <DropdownMenuItem>High Rise</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
            <DropdownMenuItem asChild>
              <Link to="/projecthouse" className='text-[#dcdcdc] hover:text-[#444]'>
                House
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropDown