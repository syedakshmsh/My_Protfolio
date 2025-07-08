import React from 'react'
import Image from 'next/image'
import { FaRegHandshake } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { BsDownload } from 'react-icons/bs'



const About = () => {
  return (
    <div>
        <div className=' mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center py-16 bg-[#E0BBE4] w-full'>
            <div className='w-68 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30 animate-float'>
            <Image
            src={"/work9.png"}
            width={800}
            alt='About Section Image'
            height={600}
            className='w-full h-auto object-cover rounded-full'
            ></Image>
            </div>
            <div className='w-full md:w-1/2 md:pl-12'>
            <h3 className='text-base md:text-lg lg:text-lg mb-0 md:mb-2 text-blue-950'>Hey</h3>
            <h3 className='text-2xl md:text-4xl lg:text-6xl my-0 md:my-1 font-bold'>About Me</h3>
            <p className='text-base  font-sans md:text-sm lg:text-sm tracking-tighter'>Creative Web Developer crafting modern, responsive, and high-performance websites.
            Let's build something amazing together.a passionate Web Developer who turns ideas into stunning digital experiences.
            From sleek user interfaces to powerful backend systems, I build fast, responsive, and user-friendly websites that leave a lasting impression.</p>
            <div className='flex flex-wrap mb-6'>
                <div className='flex items-center w-1/2 mb-4'>
                    <FaRegHandshake className='text-blue-950 text-5xl mr-4' />
               <div>
                <h4 className='text-gray-700 font-semibold'>5 year</h4>
                <p className='text-gray-700 font-semibold'>Experience</p>
                </div>
                </div>
            </div>
            <div className='flex flex-wrap mb-6'>
                <div className='flex items-center w-1/2 mb-4'>
                    <MdSupportAgent className=' text-blue-950 text-5xl mr-4' />
               <div>
                <h4 className='text-gray-700 font-semibold pt-2'>24/7</h4>
                <p className='text-gray-700 font-semibold'>Customer support</p>
                </div>
                </div>
                </div>
                <div className='flex  items-center gap-2 md:justify-start mt-5'>
            <Button className='bg-blue-950 px-10 py-1 rounded-lg mr-4 hover:bg-blue-900 duration-200'>Hire Me</Button>
            <button className="flex items-center px-10 py-1 bg-blue-950 border-0  focus:outline-none hover:bg-blue-900 rounded text-white  justify-center  transition-colors duration-300">
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