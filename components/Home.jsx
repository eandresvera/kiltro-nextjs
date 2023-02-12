import React, { useEffect } from 'react'
import { Navbar } from './ui/Navbar'
import Image from 'next/image';
import { useAppContext } from './context/AppContext';
import { PrimaryButton } from './ui/PrimaryButton';

export const Home = () => {

  const { lang, homeData } = useAppContext();
  
  // console.log('Home: ', homeData);

  const miniImg = (homeData.nodes[0].firstMiniImg !== null) && homeData.nodes[0].firstMiniImg.node;
  const mainImage = (homeData.nodes[0].firstImg !== null) && homeData.nodes[0].firstImg.node;

  return (
    <div className="md:h-screen relative bg-cover">
      <Image src={mainImage.sourceUrl} fill priority alt={mainImage.title}/>
      {/* MOBILE IMAGE */}
        <div className='md:h-screen h-[50vh] pt-52 flex flex-col justify-center items-center text-white z-10 '>
          {/* {
            miniImg && 
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
          } */}
          <div class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="60" width="320" />
            </svg>
            <div class="text">RESERVAR</div>
          </div>
          {/* <PrimaryButton lang={lang}/> */}
        </div>
    </div>
  )
}
