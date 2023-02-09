import React, { useEffect } from 'react'
import { Navbar } from './ui/Navbar'
import Image from 'next/image';

export const Home = ({ logo }) => {

  
  const mobileSize = logo.sizes[0];
  const mobileImg = {
    src: mobileSize.sourceUrl,
    width: mobileSize.width,
    height: mobileSize.height
  }
  // const desktopSize = logo.sizes[3];
  // const desktopImg = {
  //   src: desktopSize.sourceUrl,
  //   width: desktopSize.width,
  //   height: desktopSize.height
  // }
  

  return (
    <div className=" min-h-screen bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] relative bg-cover">
      <div className="flex">
        <Navbar />
      </div>
      {/* MOBILE IMAGE */}
        <div className='md:hidden h-screen pt-52 flex flex-col justify-center items-center text-white z-10 relative'>
          {
            logo.sizes && 
              <Image  
                src={mobileImg.src} 
                width={mobileImg.width} 
                height={mobileImg.height}
                alt="logo kiltro restobar"
                priority 
              />
          }
        </div>
        {/* DESKTOP IMAGE */}
        <div className='hidden h-screen pt-52 md:flex flex-col justify-center items-center text-white z-10 relative'>
          {
            logo.sizes && 
              <Image 
                src={mobileImg.src} 
                width={mobileImg.width} 
                height={mobileImg.height}
                alt="logo kiltro restobar"
                priority 
              />
          }
        </div>
    </div>
  )
}
