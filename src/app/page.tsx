import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './about/page'
import Services from './Service/page'
import Work from './Work/page'
import Contact from './Contact/page'
import Skill from './Skill/page'
import { Footer } from './component/Footer'

function page() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Skill />
      <Work />
      <Contact />
     
      
    </div>
  )
}

export default page
