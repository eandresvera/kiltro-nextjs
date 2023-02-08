import React from 'react'
import { Navbar } from './ui/Navbar'
import Image from 'next/image';

export const Home = ({ logo }) => {

  return (
    <div className=" min-h-screen bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] relative bg-cover">
      <div className="flex justify-end mr-20 pt-8">
        <Navbar />
      </div>
        <div className='h-screen pt-52 flex flex-col justify-center items-center text-white z-10 relative'>
          {
            logo && <Image className=' ' src={logo} alt="logo kiltro" width='400' height='400'/>
          }
        </div>
    </div>
  )
}
