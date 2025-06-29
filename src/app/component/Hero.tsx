"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BsDownload } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className=" px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center py-32 bg-yellow-50">
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h3 
          className="text-xl md:text-lg lg:text-lg text-yellow-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to my Portfolio
        </motion.h3>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm a <span className="text-yellow-500">Web Developer</span>
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        As a web developer, each line of code is a step towards mastering the craft. Embrace challenges, 
        explore new technologies, and always push the boundaries of what's possible.
         The world of web development is vast, and with each project, you grow stronger, 
         more innovative, and closer to mastering your capabilities."
          I create modern and responsive websites with a focus on user experience and performance.
          Let's turn your ideas into reality.
        </motion.p>
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
            <Button className="bg-yellow-500 px-8 py-2 text-black hover:bg-yellow-400 duration-200">
              Contact Me
            </Button>
          <button className="inline-flex items-center bg-yellow-500 border-0  focus:outline-none hover:bg-red-700 rounded text-black   transition-colors duration-300">
           <a href={"https://www.linkedin.com/in/hayabyjiya-jiya-0128492ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
          Linkedin
          </a>
          <svg fill='none'
          stroke="CurrentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-6 h-4 ml-2"
          viewBox="0 0 24 24">
          

            
          </svg>
         
          </button>
          
        </motion.div>
      </div>
      <motion.div 
        className="w-52 md:w-96 mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/s.png"
          width={500}
          height={500}
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  )
}

export default Hero