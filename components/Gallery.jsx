import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useAppContext } from './context/AppContext'

export const Gallery = () => {

    const { lang, homeData } = useAppContext();
    const imgs = homeData.nodes[0].galleryImgs.nodes;
    const textEng = homeData.nodes[0].galleryTextEng;
    const textEsp = homeData.nodes[0].galleryTextEsp;

    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, [])
      

      
    return (
        <section className="overflow-hidden text-white pb-10 pt-10">
            <h2 className='flex justify-center text-xl px-5' data-aos="zoom-out">
                { lang === 'esp' && textEsp }
                { lang === 'eng' && textEng }
            </h2>
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {
                        imgs.map(img => (
                            <div className="flex flex-wrap w-1/3" key={img.title}>
                                <div className="w-full p-1 md:p-2">
                                    <div className='relative h-48 md:h-80 w-full'>
                                        <Image 
                                            className="block  object-cover object-center w-full h-80 rounded-lg"  
                                            src={img.sourceUrl} 
                                            alt={img.title} 
                                            fill
                                            sizes={img.sizes}
                                        /> 
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

  )
}
