import React, { useEffect, useRef, useState } from 'react'

export const Parallax = ({ parallaxImg }) => {

  const [scrollPos, setScrollPos] = useState(0);


    const imageRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setScrollPos(scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll, true);
      return () => window.removeEventListener('scroll', handleScroll, true);
    }, []);
  
    useEffect(() => {
      const imageTop = imageRef.current.offsetTop;
      const imageHeight = imageRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
  
      let parallax = (scrollPos - imageTop) / windowHeight * 300;
  
      parallax = Math.min(parallax, 10);
      parallax = Math.max(parallax, -10);
  
      imageRef.current.style.backgroundPositionY = `${parallax}px`;
    }, [scrollPos]);
  
    return (
      <div
        ref={imageRef}
        style={{
          backgroundImage: 'url(https://admin.kiltrobcn.com/wp-content/uploads/2023/02/pisco_sour-2.jpeg)',
          backgroundSize: 'cover',
          height: '300px',
          width: '100%',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
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
