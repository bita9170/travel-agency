'use client';

import React from 'react'
import SearchIcon from '@/public/icons/Icon'

function Options() {


  return (
    <div>
      <h1 className='text-center text-7xl font-bold '>Where to</h1>
      
      <div className='text-center mt-12 font-bold'>
        <button className='px-5'>Search All</button>
        <button className='px-5'>Hotels</button>
        <button className='px-10'>Things to Do</button>
        <button>Restaurants</button>
      </div>

      <div className='text-center '>
      <input
  type="text"
  className=" mt-12 pl-0 w-64 h-10 px-4 py-2 rounded-lg text-base text-gray-600 font-medium leading-6"
  placeholder="Place to go, things to do, hotels..."
/>

      </div>
    </div>
  );
}

export default Options;
