
import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <div className='bg-white py-16'>
        <div className='container mx-auto px-6 lg:px-24 text-center'>
            <div className='mb-12'>
            <h3 className='text-base md:text-lg lg:text-lg mb-0 md:mb-2 text-yellow-500 '>Servecies </h3>
            <h3 className='text-2xl md:text-xl lg:text-xl my-0 md:my-1 font-bold '>check my servecies</h3>


            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6 '>
            <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
            <Image
            src={"/234.png"}
            width={200}
            alt='#'
            height={200}
             className='w-full h-auto object-cover'
            ></Image>
            <h3 className='font-bold'>Ecommerce Website</h3>
            <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-black mt-4 md:mt-0  transition-colors duration-300">
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

            </div>
            <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
            <Image
            src={"/180806.png"}
            width={200}
            alt='#'
            height={200}
            className='w-full h-auto object-cover'
            ></Image>
            <h3 className='font-bold'>Password Generator</h3>
            <p>With streamlit project</p>
            <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-black mt-4 md:mt-0  transition-colors duration-300">
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
            </div>

            <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
            <Image
            src={"/gyf.png"}
            width={200}
            alt='#'
            height={200}
            className='w-full h-auto object-cover'
            ></Image>
            <h3 className='font-bold'>Unit convertor</h3>
            <p>With streamlit project</p>
            <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-black mt-4 md:mt-0  transition-colors duration-300">
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
            </div>
        </div>
    </div>
  )
}

export default Services