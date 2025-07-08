"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoIosList } from "react-icons/io";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 pl-72 top-3   ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-blue-950 shadow-lg rounded-full"><IoIosList /></Button>
          </SheetTrigger>
          <SheetContent className=" bg-purple-100" >
            <SheetHeader>
              <SheetTitle className="bg-blue-950 shadow-xl rounded-lg text-white">Code_jiya</SheetTitle>
              
            </SheetHeader>
            <div className="flex">
         
         <ul className="sm:flex space-y-4 pt-4 w-full h-full ">
           <li>
             <Link href="http://localhost:3000" className="bg-blue-950 shadow-lg w-5 h-7  text-whiter ounded-lg text-white">Home</Link>
           </li>
        
           <li>
             <Link href="Contact" className="bg-blue-950  shadow-lg w-5 h-7   text-white rounded-
             lg">Contact</Link>
           </li>
           <li>
             <Link href="Service" className="bg-blue-950   w-5 h-7   text-white">Service</Link>
           </li>
           <li>
             <Link href="Work" className="bg-blue-950  shadow-lg  w-5 h-7  text-white">Work</Link>
           </li>
           <li>
             <Link href="Skill" className="bg-blue-950  shadow-lg  w-5 h-7  text-white">Skill</Link>
           </li>
           <li>
             <Link href="about" className="bg-blue-950  shadow-lg w-5 h-7  text-white">About</Link>
           </li>
         </ul>
       </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
