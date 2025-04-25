import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div >
     <div>
        <ul className='h-10 bg-orange-600 flex  justify-between p-2'  >
          <h1 className='font-bold text-xl '>FastBite</h1>
            <a href='#'>Home</a>
            <a href='#'>Menu</a>
            <a href='#'>offer</a>
            <a href='#'>contact</a>
        </ul>
          
        </div>
    </div>

   
  )
}

export default Header