import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { Label  } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const  Contact = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-12 px-4  md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50'>
        <div className='flex flex-1 flex-col px-6 mb-14'><h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>Contact us</h2>

        <p className='mb-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div>
            <div className='space-y-4 text-gray-600 py-2'>
                <FiMail  className='text-blue-950 w-6 h-6'/>
                <span>shajiyamalik76@gmail.com</span>

            </div>
            <div className='space-y-4 text-gray-600 py-2'>
                <FiMapPin className='text-blue-950 w-6 h-6' />
                <span>pakistan karachi</span>

            </div>
            <div className='space-y-4 text-gray-600 py-2'>
                <FiPhone className='w-6 h-6 text-blue-950' />
                <span>03312419388</span>

            </div>
            <div>
            <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300">
           <a href={"https://github.com/syedakshmsh"}>
          github
          </a>
          <svg fill='none'
          stroke="CurrentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24">
          

            
          </svg>
         
          </button>

            </div>
        </div>

        </div>
        <div className='flex items-center justify-between w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg space-y-4 px-4'>
        


    <form action={'#'} method='POST' className='w-11/12 space-y-4'>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input  type='text' id="name" name="name"  placeholder="Your Name" />
        
      </div>
   
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email"  placeholder="Your Email" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
         
          className="w-full rounded-md border border-gray-300 p-2"
          rows={4}
          placeholder="Your Message"
        ></textarea>
      </div>
      <Button type="submit" className="w-full bg-blue-950 text-white py-2 font-semibold shadow-lg rounded-lg">Send</Button>
    </form>
  


        </div>
    
    </div>
  )
}

export default Contact
