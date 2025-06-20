import React from 'react'
import { Button } from "@/components/ui/button"

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
          <p className='animated-underline'>Projects</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#444]" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem className='text-[#dcdcdc]'>
              Comdominium
            </DropdownMenuItem>
            <DropdownMenuItem className='text-[#dcdcdc]'>
              House
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropDown