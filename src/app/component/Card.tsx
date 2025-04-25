import React from 'react'
import Image from 'next/image';

interface propsType{
    title: string;
    desc : string;
    img : string;
    tags : string[];
}

const Card:React.FC<propsType> = ({title,desc,img,tags}) => {
  return (
    <div className='border border-accent w-[200px] sm:w-[250px] rounded-lg shadow-lg'>
    <div>
        <Image
        src={img}
        width={250}
        height={250}
        alt={title}
        className='rounded-lg shadow-lg'>


        </Image>
        </div>
        <div className='p-4 space-y-4'>
            <div className='text-2xl font-bold '>{title}</div>
            <div className='text-sm text-cyan-700'>{desc}</div>
            <div>
            {tags.map((el)=>( 
         <div className='tags font-mono' key={el}
         >
            {el}

         </div>))}
            </div>
        </div>
    </div>
  )
}

export default Card