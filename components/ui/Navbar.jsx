import React, { useState } from 'react'
import Link from 'next/link'
import { DropdownIcon } from './DropdownIcon'
import Image from 'next/image';

export const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [isMobileButtonClicked, setisMobileButtonClicked] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold">LOGO</h2>
            </a>
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
                      fill="currentColor"
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
                      stroke="currentColor"
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
                isMobileButtonClicked ? "block" : "hidden"
              }`}
          >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-600 hover:text-blue-600">
                      <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                      <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                      <a href="javascript:void(0)">About US</a>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                      <a href="javascript:void(0)">Contact US</a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>

    // <nav className="px-2 absolute z-50 text-white uppercase">
    //   <div className="container flex items-center justify-between ">
    //     <button 
    //       type="button" 
    //       className=" p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
    //       onClick={() => setisMobileButtonClicked(!isMobileButtonClicked)}
    //     >
    //       <span className="sr-only">Open main menu</span>
    //       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //     </button>
    //     <div className={`${isMobileButtonClicked ? '' : 'hidden'} w-full md:flex`}>
    //       <ul className="flex flex-col items-center p-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium md:border-0">
    //         <li>
    //           <a href="#" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
    //             Carta
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
    //             Contacto
    //           </a>
    //         </li>
    //         <li>
    //             <button 
    //               data-dropdown-toggle="dropdownNavbar" 
    //               class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
    //               onClick={() => setIsClicked(!isClicked)}
    //               >
    //                 <Image src="/assets/flags/spain-flag.png" width="40" height="40" alt="Bandera España"/>
    //                 <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    //             </button>

    //             <div class={`z-10 ${isClicked ? 'absolute': 'hidden'} font-normal  rounded-lg`}>
    //                 <ul class="py-2 text-sm dark:text-gray-400" aria-labelledby="dropdownLargeButton">
    //                   <li>
    //                     <Image className='cursor-pointer' src="/assets/flags/usa-flag.png" width="40" height="40" alt="Bandera USA"/>
    //                   </li>
    //                 </ul>
    //             </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}
