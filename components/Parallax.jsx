import React, { useEffect, useRef, useState } from 'react'

export const Parallax = ({ parallaxImg }) => {




    const imageRef = useRef(null);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollTop = window.pageYOffset;
    //     const imageTop = imageRef.current.offsetTop;
    //     const imageHeight = imageRef.current.offsetHeight;
    //     const windowHeight = window.innerHeight;
  
    //     let parallax = (scrollTop - imageTop) / windowHeight * 200;
  
    //     imageRef.current.style.backgroundPositionY = `${parallax}px`;
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
  
  
    return (
      <div
        ref={imageRef}
        style={{
          backgroundImage: 'url(https://admin.kiltrobcn.com/wp-content/uploads/2023/02/pisco_sour-2.jpeg)',
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',       
          webkitBackgroundSize: 'cover',
          backgroundSize: 'cover',  
          height:'300px',
        }}
      />
    );

  

  
  // return (
  //   <div 
  //     className={`parallax1 h-[50vh] bg-[url('https://admin.kiltrobcn.com/wp-content/uploads/2023/02/pisco_sour-2.jpeg')] bg-cover relative bg-no-repeat`}
  //     ref={imageRef}
  //     >
  //     <div className='text-white h-full font-bold text-4xl flex justify-center items-center'>
  //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
  //     </div>
  //   </div>
  // )
}
