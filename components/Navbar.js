import React from 'react';
import { FiBell } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';



export default function Navbar() {
  return (
    <div className='shadow-md p-4'> 
      <div className='flex justify-between text-xl'>
        <h1 className='font-serif flex gap-2 font-bold md:text-2xl '> <FaSearch/> SwamiNarayan,Pune</h1>
      
        <div className='text-end flex md:gap-14 gap-2 sm:text-sm '>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1 className='hover:opacity-50 lg'><FiBell /></h1>
        </div>
      </div>
    </div>
  );
}
