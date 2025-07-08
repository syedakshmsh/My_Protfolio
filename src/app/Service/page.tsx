"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Services = () => {
  const [zoomed, setZoomed] = useState<number | null>(null);
  return (
    <div className='bg-gradient-to-r from-[#e6ccff] to-[#c9c4bb] py-16'>
        <div className='container mx-auto px-6 lg:px-24 text-center'>
            <div className='mb-12'>
            <h3 className='text-base md:text-lg lg:text-lg mb-0 md:mb-2 text-blue-950  '>Servecies </h3>
            <h3 className='text-2xl md:text-xl lg:text-xl my-0 md:my-1 font-bold '>check my servecies</h3>


            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6 '>
            <motion.div
              className={`${zoomed === 0 ? 'bg-purple-200' : 'bg-purple-200'} rounded-lg shadow-lg p-6 cursor-pointer`}
              onClick={() => setZoomed(zoomed === 0 ? null : 0)}
              animate={zoomed === 0 ? { scale: 1.3, zIndex: 10 } : { scale: 1, zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ position: 'relative' }}
            >
            <Image
            src={"/234.png"}
            width={200}
            alt='#'
            height={200}
             className='w-full h-auto object-cover'
            />
            <h3 className='font-bold'>Ecommerce Website</h3>
            <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300">
           <a href={"https://ecommerce-hacatone-qurf.vercel.app/"}>
          Check out
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

            </motion.div>
            <motion.div
              className={`${zoomed === 1 ? 'bg-purple-200' : 'bg-purple-200'} rounded-lg shadow-lg p-6 cursor-pointer`}
              onClick={() => setZoomed(zoomed === 1 ? null : 1)}
              animate={zoomed === 1 ? { scale: 1.3, zIndex: 10 } : { scale: 1, zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ position: 'relative' }}
            >
            <Image
            src={"/work12.png"}
            width={200}
            alt='#'
            height={200}
            className='w-full h-auto object-cover'
            />
            <h3 className='font-bold'>Password Generator</h3>
            <p>With streamlit project</p>
            <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300">
           <a href={"https://project3-sir-zia-apppassword-generator-plltfwzqvpn692pd46ebzb.streamlit.app/"}>
          Check out
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
            </motion.div>

            <motion.div
              className={`${zoomed === 2 ? 'bg-purple-200' : 'bg-purple-200'} rounded-lg shadow-lg p-6 cursor-pointer`}
              onClick={() => setZoomed(zoomed === 2 ? null : 2)}
              animate={zoomed === 2 ? { scale: 1.3, zIndex: 10 } : { scale: 1, zIndex: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ position: 'relative' }}
            >
            <Image
            src={"/work11.png"}
            width={200}
            alt='#'
            height={200}
            className='w-full h-auto object-cover'
            />
            <h3 className='font-bold'>Unit convertor</h3>
            <p>With streamlit project</p>
            <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300">
           <a href={"https://project-unitconverter-afvuvnb4dcgxatca6mm3gn.streamlit.app/"}>
          Check out
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
            </motion.div>
        </div>
    </div>
  )
}

export default Services