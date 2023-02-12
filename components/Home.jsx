import React, { useEffect } from 'react'
import { Navbar } from './ui/Navbar'
import Image from 'next/image';
import { useAppContext } from './context/AppContext';

export const Home = () => {

  const { homeData } = useAppContext();
  
  console.log('Home: ', homeData);

  const miniImg = (homeData.nodes[0].firstMiniImg !== null) && homeData.nodes[0].firstMiniImg.node;
  const mainImage = (homeData.nodes[0].firstImg !== null) && homeData.nodes[0].firstImg.node;

  return (
    // <div className="h-screen bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] relative bg-cover">
    //   <div className="flex">
    //   </div>
    //   {/* MOBILE IMAGE */}
    //     <div className='h-screen pt-52 flex flex-col justify-center items-center text-white z-10 relative'>
    //       {
    //         miniImg && 
    //           <Image  
    //             src={miniImg.sourceUrl} 
    //             width={300} 
    //             height={300}
    //             alt={miniImg.title}
    //             priority 

    //           />
    //       }
    //     </div>
    // </div>
    <div className="h-screen relative bg-cover">
      <Image src={mainImage.sourceUrl} fill priority alt={mainImage.title}/>
      {/* MOBILE IMAGE */}
        <div className='h-screen pt-52 flex flex-col justify-center items-center text-white z-10 relative'>
          {
            miniImg && 
              <Image  
                src={miniImg.sourceUrl} 
                width={300} 
                height={300}
                alt={miniImg.title}
                priority 

              />
          }
        </div>
    </div>
  )
}
