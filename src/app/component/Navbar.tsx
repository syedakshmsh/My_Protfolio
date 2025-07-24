"use client"

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import Link from "next/link";
import { SheetSide } from "@/components/sheet";
import { motion } from 'framer-motion'

const Navbar = () => {
//  const [menu,setMenu] = useState(false)
//   const items = [
//     { id: 1, text: "About" },
//     { id: 2, text: "Services" },
//     { id: 3, text: "Work" },
//     { id: 4, text: "Contact" },
//     { id: 4, text: "Skill" },
//   ];
  return (
   

    <div className="fixed top-0 left-0 right-0 z-50 bg-[] text-black w-full shadow-md">
      <div className="container mx-auto p-4  md:flex justify-between items-center">
      <div className="md:hidden">
      <SheetSide />
      </div>
        <div className="text-xl md-text-2xl font-bold flex items-center gap-1">
          <span className="text-blue-950">@Code</span>
          <span className="text-purple-400">Jiya</span>
        </div>
        
        <div className="flex">
         
         <ul className="sm:flex gap-3 pt-4 hidden">
           <li>
             <Link href="http://localhost:3000" className="bg-[#E0BBE4] shadow-lg rounded-lg px-3 py-2 hover:bg-[#C89BCF] transition-colors duration-200">Home</Link>
           </li>
           <li>
             <Link href="about" className=" bg-[#E0BBE4] shadow-lg rounded-lg px-3 py-2 hover:bg-[#C89BCF] transition-colors duration-200">About</Link>
           </li>
           
           <li>
             <Link href="Service" className="bg-[#E0BBE4] shadow-lg rounded-lg px-3 py-2 hover:bg-[#C89BCF] transition-colors duration-200">Service</Link>
           </li>
           <li>
             <Link href="Work" className="bg-[#E0BBE4] shadow-lg rounded-lg px-3 py-2 hover:bg-[#C89BCF] transition-colors duration-200">Work</Link>
           </li>
           <li>
             <Link href="Skill" className="bg-[#E0BBE4] shadow-lg rounded-lg px-3 py-2 hover:bg-[#C89BCF] transition-colors duration-200">Skill</Link>
           </li>
           <li>
             <Link href="Contact" className=" bg-[#E0BBE4] shadow-lg rounded-lg px-3 py-2 hover:bg-[#C89BCF] transition-colors duration-200">Contact</Link>
           </li>
         </ul>
       </div>
    

      </div>
 
    </div>

  );
};

export default Navbar;
