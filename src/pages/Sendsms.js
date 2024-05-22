import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaCircle } from 'react-icons/fa';
import { FaSquare } from 'react-icons/fa';

const Sendsms = () => {
  return (
    <div className=" mt-16 pt-3 ">
    <div className=" justify-center h">
    <h className='flex justify-center items-center text-center bg-gray-600 text-white'>flex SMS</h>
  <div
    className="grid gap-16 grid-cols-fluid  bg-white dark:bg-gray-600  rounded-xl w-full lg:w-auto 
   bg-no-repeat mb-3 p-7 border-gray shadow-2xl"
  >
          <div className='border-black border h-96 w-60 rounded-sm bg-black'>
            <div className='bg-gray-300 w-12 h-3 flex justify-center items-center text-center ml-24 '></div>
     <div className=' ml-2 border-black border h-80 w-56 bg-white'>
            <input type='text' placeholder='Typing' className='bg-gray-300 outline-none flex justify-end items-center ml-4 mt-72 rounded-lg pl-1 text-white' />
            </div>  
            
            <div className='flex gap-11 ml-14 mt-5'>
              <FaSquare className='bg-gray-300'/>
              <FaCircle className='bg-gray-300'/>
              <FaPlay className='bg-gray-300'/>
            </div>
    </div>

  </div>
</div>
</div>
  )
}

export default Sendsms
