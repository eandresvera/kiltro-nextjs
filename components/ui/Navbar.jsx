import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useAppContext } from '../context/AppContext';

export const Navbar = () => {

  const [language, setLanguage] = useState(false);
  const [isMobileButtonClicked, setisMobileButtonClicked] = useState(false);
  const { lang, homeData, updateLang } = useAppContext();
  const logo = homeData.nodes[0].logoImg && homeData.nodes[0].logoImg.node.mediaDetails.sizes[2].sourceUrl;

  const langs = [
    <Image key="eng" className='cursor-pointer' src="/assets/flags/usa-flag.png" width="40" height="40" alt="Bandera USA" onClick={() => updateLang('eng')}/>,
    <Image key="esp" className='cursor-pointer' src="/assets/flags/spain-flag.png" width="40" height="40" alt="Bandera España" onClick={() => updateLang('esp')}/>,
  ]
  
  // console.log(logo);
  return (
    <nav className="w-full text-white shadow z-40 uppercase">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image className=' w-16 md:w-full' src={logo} width="50" height="50" alt='Kiltro restobar logo'/>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setisMobileButtonClicked(!isMobileButtonClicked)}
              >
                {isMobileButtonClicked ? (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="white"
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
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
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
        </div>
        <div>
          <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                isMobileButtonClicked ? "block absolute" : "hidden"
              }`}
          >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" >
                <li className='hover:text-primary-main'>
                  <Link href="/">
                    {lang === 'esp' && 'Carta'}
                    {lang === 'eng' && 'Cart'}
                  </Link>
                </li>
                <li className='hover:text-primary-main'>
                  <Link href="/">
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
      </div>
    </nav>
  )
}
