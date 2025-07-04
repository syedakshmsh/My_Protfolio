"use client"
import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { PiFileHtmlBold } from "react-icons/pi";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { motion } from 'framer-motion';

const iconVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.2, rotate: 10 },
  whileTap: { scale: 0.95, rotate: -10 },
};

const page = () => {
  return (
    <div className='flex flex-wrap item-center justify-around bg-yellow-50  rounded-lg shadow-xl'>

        <div className='w-auto  md:w-2/5 px-6'><h2 className='font-bold text-4xl pt-8'>Skills</h2>
        <p className='text-sm text-gray-400 pt-4'>Hi, I'm a passionate Web Developer with 1 year of hands-on experience in building modern and responsive web applications.
        I have strong command over TypeScript, Node.js, Next.js, React, HTML, CSS, Python, and Figma. I'm currently expanding my skills in Tailwind CSS to enhance my UI/UX design capabilities. Always eager to learn and grow, I love turning ideas into real, functional digital experiences.</p></div>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 pl-10 md:pl-0 '>
        
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        ><FaFigma color="#A259FF"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        ><SiTypescript color="#61DAFB"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        ><FaPython color="#FFD43B"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        ><FaReact color="#00FFFF"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >< PiFileHtmlBold color="#E44D26"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        ><RiTailwindCssLine  color="#FFFBEB"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >< RiNextjsLine color="#1A202C"  size={50}/></motion.span>
        <motion.span
          className="p-3 bg-zinc-950 flex items-center rounded-2xl"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
        >< FaCss3  color="#2965F1"  size={50}/></motion.span>

        </div>

    </div>
  )
}

export default page