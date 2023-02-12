import React, { useEffect, useRef, useState } from 'react'

export const Parallax = ({ parallaxImg, text=true }) => {

    const imageRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const imageTop = imageRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        let parallax = windowWidth < 768 ? (scrollTop - imageTop) / windowHeight * 50 : (scrollTop - imageTop) / windowHeight * 150
  
        imageRef.current.style.backgroundPositionY = `${parallax}px`;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <div 
      className={`parallax1 h-[150px] lg:h-[400px] bg-[url('https://admin.kiltrobcn.com/wp-content/uploads/2023/02/pisco_sour-2.jpeg')] bg-cover  bg bg-no-repeat`}
      ref={imageRef}
      >
      <div className='text-white h-full font-bold text-xl lg:text-4xl flex justify-center items-center mx-5'>
        { text && 'Lorem ipsum, dolor sit amet consec adipisicing elit.' }
      </div>
    </div>
  )
}
