"use client";
import React from "react";
import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/nextjs";
import SearchInput from "./search-input";
import InviteButton from "./invite-button";

function NavBar() {
  const { organization }=useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5 ">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
      <OrganizationSwitcher hidePersonal 
      appearance={{
        elements:{
          rootBox:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            maxWidth:"376px",
          },
          organiszationSwitcherTrigger:{
            padding:'6px',
            width:"100px",
            borderRadius:"8px",
            border:"1px solid #E5E7EB",
            justifyContent:"space-between",
            backgroundColor:"white",
          }
        }
      }
      }/>
      </div>
      <div>
        
        {
          // organization && (<InviteButton />)

        //=====giving errors====//
        }
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
