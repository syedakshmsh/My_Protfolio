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
            <Button className="bg-yellow-500 shadow-lg rounded-full"><IoIosList /></Button>
          </SheetTrigger>
          <SheetContent className=" bg-yellow-100" >
            <SheetHeader>
              <SheetTitle className="bg-yellow-300 shadow-xl rounded-lg">Code_jiya</SheetTitle>
              
            </SheetHeader>
            <div className="flex">
         
         <ul className="sm:flex space-y-4 pt-4 ">
           <li>
             <Link href="http://localhost:3000" className="bg-yellow-500 shadow-lg rounded-lg">Home</Link>
           </li>
        
           <li>
             <Link href="Contact" className="bg-yellow-500 mx-2 shadow-lg rounded-
             lg">Contact</Link>
           </li>
           <li>
             <Link href="Service" className="bg-yellow-500 shadow-lg rounded-lg">Service</Link>
           </li>
           <li>
             <Link href="Work" className="bg-yellow-500 shadow-lg rounded-lg">Work</Link>
           </li>
           <li>
             <Link href="Skill" className="bg-yellow-500 shadow-lg rounded-lg">Skill</Link>
           </li>
           <li>
             <Link href="about" className="bg-yellow-500 shadow-lg rounded-lg">About</Link>
           </li>
         </ul>
       </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
