import React from 'react'
import { BiSearch , BiCurrentLocation } from 'react-icons/bi'

function Inputs() {
  return (
    <div className='flex flex-row my-6 justify-center'>
      <div className=' flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none' type="text" placeholder='Search City Name'/>

        <BiSearch size={30} color='white' className=' cursor-pointer transition ease-out hover:scale-125'/>
        <BiCurrentLocation color='white' size={30} className=' cursor-pointer transition ease-out hover:scale-125'/>
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button className=' text-2xl transition ease-out font-medium hover:scale-125'>°C</button>
        <p className='text-2xl font-medium mx-1'>|</p>
        <button className=' text-2xl transition ease-out font-medium hover:scale-125'>°F</button>
      </div>
    </div>
  )
}

export default Inputs
