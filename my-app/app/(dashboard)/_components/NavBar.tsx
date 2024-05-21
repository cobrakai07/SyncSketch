"use client";
import React from 'react'
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className='flex items-center gap-x-4 p-5 bg-green-400'>
        <div className='hidden lg:flex lg:flex-1 bg-yellow-400'>
            search
        </div>
        <div>
          //Clerk//
        <UserButton/>
        </div>
    </div>
  )
}

export default NavBar