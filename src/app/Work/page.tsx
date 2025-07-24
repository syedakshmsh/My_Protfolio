// import React from 'react'
// import Heading from '../component/Heading'
// import Card from '../component/Card'


// const data = [

//   {
//     id:0,
//     title: "ShopEase: Modern eCommerce",
//     desc: "An eCommerce website is an online platform where users can browse, buy, and sell products or services through a digital storefront",
//     img:"/project2.png",
//     tags:["React","Next.js","Typescript","Sanity",],
//     highlight: "Seamless shopping for 10k+ products"
//   },
    
   
    
//     {
//       id:1,
//       title: "Smart Data Sync",
//       desc: "The client side refers to everything that runs in the user's browser, The server side handles the backend logic, database operations.",
//       img:"/Work3.png",
//       tags:["React","Next.js","Typescript","Sanity",],
//       highlight: "Real-time data updates"
//     },
//     {
//       id:2,
//       title: "Insightful Blog Platform",
//       desc: "A blog website is an online platform where users can publish and share articles, stories, or opinions on various topics.",
//       img:"/work1.png",
//       tags:["React","Next.js","Typescript","Sanity",],
//       highlight: "Share stories with a global audience"
//     },
//     {
//       id:3,
//       title: "Impactful Landing Pages",
//       desc: "Building Seamless Digital Experiences. From concept to code, we design, develop, and deliver stunning websites that engage and convert.",
//       img:"/work6.png",
//       tags:["React","Next.js","Typescript","Sanity",],
//       highlight: "Boost conversions with stunning design"
//     },
//   ]
  
//   const Work = () => {
//     return (
//       <div  id='Work' className='pt-8 bg-purple-200'>
//         <Heading  title='Work'/>
//         <div className='flex gap-6 justify-between md:flex-row space-x-4 lg:flex-row flex-col  place items place-items-center md:px-8 p pb-4 md:pb-4  items-center'>

//           {data.map((el, idx)=>(<Card 
//           key={el.id}
//           title={el.title}
//           desc ={el.desc}
//           img={el.img}
//           tags={el.tags}
//           highlight={el.highlight}
//           accentIndex={idx}
//           />))}
//         </div>


//       </div>
//     )
//   }
  
//   export default Work
// "use client"

// import React from "react";

// const Work = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       {/* Add your minimal and clean content here */}
//       <h1 className="text-3xl font-bold mb-6">My Work</h1>
//       <p className="text-lg text-gray-700">
//         Here you can find a selection of my recent projects and professional work. More details coming soon.
//       </p>
//     </div>
//   );
// };

// export default Work;

"use client"

import React from "react";

const projects = [
  {
    title: "Creative Portfolio",
    image: "/work1.png",
    description: "A visually stunning portfolio site with interactive animations and seamless navigation.",
  },
  {
    title: "E-Commerce Experience",
    image: "/work4.png",
    description: "A modern e-commerce platform focused on user experience and conversion optimization.",
  },
  {
    title: "Startup Landing Page",
    image: "/2 (2).png",
    description: "A clean, data-driven dashboard with responsive charts and intuitive controls.",
  },
  {
    title: "Startup Landing Page",
    image: "/project2.png",
    description: "A clean, data-driven dashboard with responsive charts and intuitive controls.",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Work Showcase</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
             <div className="aspect-w-16 aspect-h-10 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
