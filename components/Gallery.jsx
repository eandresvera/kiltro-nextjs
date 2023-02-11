import Link from 'next/link';
import React from 'react'
import { useAppContext } from './context/AppContext'

export const Gallery = () => {

    const { lang, homeData } = useAppContext();
    const textEng = homeData.nodes[0].galleryTextEng;
    const textEsp = homeData.nodes[0].galleryTextEsp;
    // console.log(homeData.nodes[0]);

    return (
        <section className="overflow-hidden text-white pb-10 pt-10">
            <h2 className='flex justify-center text-xl'>
                { lang === 'esp' && textEsp }
                { lang === 'eng' && textEng }
            </h2>
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                    </div>
                </div>
                </div>
            </div>
        </section>

  )
}
