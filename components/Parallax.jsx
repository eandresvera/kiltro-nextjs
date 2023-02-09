import React, { useEffect, useRef, useState } from 'react'

export const Parallax = ({ parallaxImg }) => {
  const [scrollPos, setScrollPos] = useState(0);



    const imageRef = useRef(null);
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setScrollPos(scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      const imageTop = imageRef.current.offsetTop;
      const imageHeight = imageRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
  
      let parallax = (scrollPos - imageTop) / windowHeight * 200;
  
      parallax = Math.min(parallax, 50);
      parallax = Math.max(parallax, -50);
  
      imageRef.current.style.backgroundPositionY = `${parallax}px`;
    }, [scrollPos]);
  
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
          height: '300px',
          width: '100%',
          backgroundRepeat: 'no-repeat',
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
