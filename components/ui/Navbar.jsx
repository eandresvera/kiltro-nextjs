import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useAppContext } from '../context/AppContext';

export const Navbar = () => {

  const [language, setLanguage] = useState(false);
  const [isMobileButtonClicked, setisMobileButtonClicked] = useState(false);
  const { lang, homeData, updateLang } = useAppContext();

  const logo = homeData.nodes[0].logoImg ? homeData.nodes[0].logoImg.node : false;
  
  const langs = [
    <Image key="eng" className='cursor-pointer' src="/assets/flags/usa-flag.png" width="40" height="40" alt="Bandera USA" onClick={() => updateLang('eng')}/>,
    <Image key="esp" className='cursor-pointer' src="/assets/flags/spain-flag.png" width="40" height="40" alt="Bandera España" onClick={() => updateLang('esp')}/>,
  ]
  
  return (
    <nav className="w-full font-extrabold md:font-normal text-white uppercase absolute">
      <div className="justify-between w-full mx-auto md:bg-black fixed md:items-center md:flex md:px-8">
          <div className="flex items-center px-4 bg-black justify-between py-3 md:py-4 md:block">
            <Link href="/">
              { logo && 
                <Image className=' w-16 md:w-20' src={logo.sourceUrl} sizes={logo.sizes} srcSet={logo.srcSet} width="50" height="50" alt='Kiltro restobar logo'/>
              }
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setisMobileButtonClicked(!isMobileButtonClicked)}
              >
                {isMobileButtonClicked ? (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 20 20"
                      fill="#3fe0c7"
                  >
                      <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                      />
                  </svg>
                ) : (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#3fe0c7"
                      strokeWidth={2}
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                isMobileButtonClicked ? " w-[75vw] h-[100vh] p-10 bg-black nav-links opacity-100 transition-opacity duration-[600ms]" : " hidden md:opacity-100"
              }`}
          >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-14 md:space-y-0" >
                <li className='hover:text-primary-main'>
                  <Link href="/cart">
                    {lang === 'esp' && 'Carta'}
                    {lang === 'eng' && 'Cart'}
                  </Link>
                </li>
                <li className='hover:text-primary-main'>
                  <Link href="/contact">
                    {lang === 'esp' && 'Contacto'}
                    {lang === 'eng' && 'Contact'}
                  </Link>
                </li>
                <li className="hover:text-primary-main flex relative items-center justify-between cursor-pointer"  onClick={() => setLanguage(!language)}>
                  {
                    langs.map( element => ( 
                      element.key === lang && element
                      ))
                  }
                  <svg className="w-5 h-5 ml-1 hover:text-primary-main" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  
                  <div className={`left-0 top-12 ${language ? 'absolute' : 'hidden'}`}>
                    {
                      langs.filter( element => element.key !== lang )
                    }
                  </div>
                </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}
