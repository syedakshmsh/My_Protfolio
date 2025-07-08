import React from 'react'
import Image from 'next/image';
import { FaShoppingCart, FaServer, FaPen, FaRocket } from 'react-icons/fa';

interface propsType{
    title: string;
    desc : string;
    img : string;
    tags : string[];
    highlight?: string;
    accentIndex?: number;
}

const accentColors = [
  'bg-mint-200', // mint green
  'bg-peach-200', // peach
  'bg-purple-200', // light purple
];

const getAccentColor = (index: number = 0) => {
  const tailwindColors = [
    'bg-green-200', // mint green
    'bg-orange-200', // peach
    'bg-purple-200', // light purple
  ];
  return tailwindColors[index % tailwindColors.length];
};

const getIcon = (title: string) => {
  if (title.toLowerCase().includes('ecommerce')) return <FaShoppingCart className="text-xl text-blue-700" />;
  if (title.toLowerCase().includes('data')) return <FaServer className="text-xl text-green-700" />;
  if (title.toLowerCase().includes('blog')) return <FaPen className="text-xl text-pink-700" />;
  if (title.toLowerCase().includes('landing')) return <FaRocket className="text-xl text-purple-700" />;
  return null;
};

const Card:React.FC<propsType> = ({title,desc,img,tags,highlight,accentIndex}) => {
  return (
    <div className={`border border-accent w-[200px] sm:w-[250px] rounded-lg shadow-lg relative bg-pink-100 transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}>
      {/* Accent bar or dot */}
      <div className={`absolute top-0 left-0 w-full h-2 rounded-t-lg ${getAccentColor(accentIndex)}`}></div>
      <div className="relative">
        {/* Icon at top left */}
        <span className="absolute top-2 left-2 z-10 bg-white bg-opacity-80 rounded-full p-1 shadow">
          {getIcon(title)}
        </span>
        <Image
          src={img}
          width={250}
          height={250}
          alt={title}
          className='rounded-lg shadow-lg'
        />
      </div>
      <div className='p-4 space-y-2'>
        <div className='text-2xl font-bold '>{title}</div>
        {highlight && <div className='text-xs font-semibold text-green-600 mb-1'>{highlight}</div>}
        <div className='text-sm text-cyan-700 mb-2'>{desc}</div>
        <div className='flex flex-wrap gap-1 mt-2'>
          {tags.map((el)=>( 
            <span className='px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-mono' key={el}>
              {el}
            </span>))}
        </div>
      </div>
    </div>
  )
}

export default Card