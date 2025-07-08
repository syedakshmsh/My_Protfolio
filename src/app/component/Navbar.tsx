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
        {/* <div className="hidden md:flex space-x-6 items-center list-none text-lg">
          {items.map(({ id, text }) => (
            <Link href={"#"}>
            <li
              key={id} 
              className="hover:text-yellow-500 duration-200 cursor-pointer"
            >
              {text}
            </li>
            </Link>
          ))}
        </div>
        <a className="text-lg bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-sm">
          Download
        </a>
      </div>
      <div className="flex w-full justify-between items-center p-2 md:hidden shadow-sm">
        <div className="text-xl font-bold flex items-center gap-2">
        <span className="text-black">@Code</span>
        <span className="text-yellow-500">Jiya</span>
        </div>
        <div className="flex  justify-center itens-center gap-2">
            <div onClick={()=> setMenu(!menu)}>
                {menu ? <GiCancel size={30} className="text-black" /> : <IoMenu   size={30} className="text-black" />}

            </div>
        </div>
      </div>
        {menu && (
            <div className="md:hidden bg-yellow-50 justify-center items-center flex-col flex shadow-sm py-6 list-none text-black text-lg gap-2">
                {items.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:text-yellow-500 duration-200 cursor-pointer border-b w-11/12"
                >
                  {text}
                </li>
              ))}
               <a className="text-lg bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-sm">
          Download
        </a>
                </div>

        )}
        */}
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
