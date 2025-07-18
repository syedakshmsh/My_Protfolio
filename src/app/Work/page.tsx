import React from 'react'
import Heading from '../component/Heading'
import Card from '../component/Card'


const data = [

  {
    id:0,
    title: "ShopEase: Modern eCommerce",
    desc: "An eCommerce website is an online platform where users can browse, buy, and sell products or services through a digital storefront",
    img:"/project2.png",
    tags:["React","Next.js","Typescript","Sanity",],
    highlight: "Seamless shopping for 10k+ products"
  },
    
   
    
    {
      id:1,
      title: "Smart Data Sync",
      desc: "The client side refers to everything that runs in the user's browser, The server side handles the backend logic, database operations.",
      img:"/Work3.png",
      tags:["React","Next.js","Typescript","Sanity",],
      highlight: "Real-time data updates"
    },
    {
      id:2,
      title: "Insightful Blog Platform",
      desc: "A blog website is an online platform where users can publish and share articles, stories, or opinions on various topics.",
      img:"/work1.png",
      tags:["React","Next.js","Typescript","Sanity",],
      highlight: "Share stories with a global audience"
    },
    {
      id:3,
      title: "Impactful Landing Pages",
      desc: "Building Seamless Digital Experiences. From concept to code, we design, develop, and deliver stunning websites that engage and convert.",
      img:"/work6.png",
      tags:["React","Next.js","Typescript","Sanity",],
      highlight: "Boost conversions with stunning design"
    },
  ]
  
  const Work = () => {
    return (
      <div  id='Work' className='pt-8 bg-purple-200'>
        <Heading  title='Work'/>
        <div className='flex gap-6 justify-between md:flex-row space-x-4 lg:flex-row flex-col  place items place-items-center md:px-8 p pb-4 md:pb-4  items-center'>

          {data.map((el, idx)=>(<Card 
          key={el.id}
          title={el.title}
          desc ={el.desc}
          img={el.img}
          tags={el.tags}
          highlight={el.highlight}
          accentIndex={idx}
          />))}
        </div>


      </div>
    )
  }
  
  export default Work
