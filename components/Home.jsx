import React, { useEffect, useRef } from 'react'
import { Navbar } from './ui/Navbar'
import Image from 'next/image';
import { useAppContext } from './context/AppContext';
import { PrimaryButton } from './ui/PrimaryButton';

export const Home = (props) => {

  const { lang, homeData } = useAppContext();
  
  // console.log('Home: ', homeData);

  const miniImg = (homeData.nodes[0].firstMiniImg !== null) && homeData.nodes[0].firstMiniImg.node;
  const mainImage = (homeData.nodes[0].firstImg !== null) && homeData.nodes[0].firstImg.node;

  const handleOnClick = () => {
    const id = document.getElementById('reserves');
    id.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="md:h-screen relative bg-cover opacity-80 fade-in">
      <Image src={mainImage.sourceUrl} fill priority alt={mainImage.title}/>
      {/* MOBILE IMAGE */}
        <div className='md:h-screen h-[50vh] pt-52 flex flex-col justify-center items-center text-white z-10 relative'>
          {
            miniImg ?
            <>
              <div className='md:hidden'>
                <Image  
                  src={miniImg.sourceUrl} 
                  width={150} 
                  height={150}
                  alt={miniImg.title}
                  priority 

                />
              </div>
              <div className='hidden md:block'>
                <Image  
                  src={miniImg.sourceUrl} 
                  width={300} 
                  height={300}
                  alt={miniImg.title}
                  priority 

                />
              </div>
            </>
            :
            <div className='border-b-2 md:border-b-[6px] text-2xl md:text-3xl text-animation text-white border-primary-main tracking-[6px] font-bold transition duration-200 hover:text-primary-main cursor-pointer py-2' onClick={handleOnClick}>
              <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>R</span>
              <span>V</span>
              <span>A</span>
              <span>R</span>
            </div>
            // <PrimaryButton lang={lang} onClick={handleOnClick}/>
          }
        </div>
    </div>
  )
}
