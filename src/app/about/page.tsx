import React from 'react'
import Image from 'next/image'
import { FaRegHandshake } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { BsDownload } from 'react-icons/bs'



const About = () => {
  return (
    <div>
        <div className='container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center py-16 bg-gray-50'>
            <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30'>
            <Image
            src={"/about1.png"}
            width={600}
            alt='About Section Image'
            height={400}
            className='w-full h-auto object-cover'
            ></Image>
            </div>
            <div className='w-full md:w-1/2 md:pl-12'>
            <h3 className='text-base md:text-lg lg:text-lg mb-0 md:mb-2 text-yellow-500'>Hey</h3>
            <h3 className='text-2xl md:text-4xl lg:text-6xl my-0 md:my-1 font-bold'>About Me</h3>
            <p className='text-base  font-sans md:text-sm lg:text-sm tracking-tighter'>Creative Web Developer crafting modern, responsive, and high-performance websites.
            Let’s build something amazing together.a passionate Web Developer who turns ideas into stunning digital experiences.
            From sleek user interfaces to powerful backend systems, I build fast, responsive, and user-friendly websites that leave a lasting impression.</p>
            <div className='flex flex-wrap mb-6'>
                <div className='flex items-center w-1/2 mb-4'>
                    <FaRegHandshake className='text-yellow-500 text-5xl mr-4' />
               <div>
                <h4 className='text-gray-700 font-semibold'>5 year</h4>
                <p className='text-gray-700 font-semibold'>Experience</p>
                </div>
                </div>
            </div>
            <div className='flex flex-wrap mb-6'>
                <div className='flex items-center w-1/2 mb-4'>
                    <MdSupportAgent className='text-yellow-500 text-5xl mr-4' />
               <div>
                <h4 className='text-gray-700 font-semibold pt-2'>24/7</h4>
                <p className='text-gray-700 font-semibold'>Customer support</p>
                </div>
                </div>
                </div>
                <div className='flex  items-center gap-2 md:justify-start mt-5'>
            <Button className='bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400 duration-200'>Hire Me</Button>
            <button className="flex items-center bg-yellow-500 border-0  focus:outline-none hover:bg-red-700 rounded text-black  justify-center  transition-colors duration-300">
           <a href={"https://www.linkedin.com/in/hayabyjiya-jiya-0128492ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
          Linkedin
          </a>
          <svg fill='none'
          stroke="CurrentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-6 h-4 ml-2 p-4"
          viewBox="0 0 24 24">
          

            
          </svg>
         
          </button>
        </div>
        
            </div>
        </div>



    </div>
  )
}

export default About