import React, { useState } from 'react'
import { useAppContext } from './context/AppContext'
import { Modal } from './Modal';
import { PrimaryButton } from './ui/PrimaryButton'

export const Reserves = () => {

  const [showModal, setShowModal] = useState(false);
  const { lang, homeData } = useAppContext();

  const textEsp = homeData.nodes[0].reserveTextEsp;
  const textEng = homeData.nodes[0].reserveTextEng;
  const local1Name = homeData.nodes[0].local1Name;
  const local1Link = homeData.nodes[0].local1Link;
  const local2Name = homeData.nodes[0].local2Name;
  const local2Link = homeData.nodes[0].local2Link;

  const handleOnClick = ( local ) => {
    console.log(local1Link);
  }

  return (
    <div className='h-screen text-white bg-black'>
      <div className='flex justify-center py-5'>
        <h2>IMAGEN</h2>
      </div>
      <div className='flex justify-center py-5'>
        <h2 className='text-xl'>
          {lang === 'esp' && textEsp}
          {lang === 'eng' && textEng}
        </h2>
      </div>
      <div className='flex'>
        <div className='w-full py-5 flex flex-col justify-center items-center'>
          <div className='space-y-8'>
            <p className='flex justify-center'>{local1Name}</p>
            {/* <PrimaryButton onClick={() => handleOnClick('santantoni')} lang={lang}/> */}
            <PrimaryButton lang={lang} onClick={() => setShowModal(true)}/>
          </div>
        </div>
        <div className='w-full py-5 flex flex-col justify-center items-center'>
          <div className='space-y-8'>
            <p className='flex justify-center'>{local2Name}</p>
            <PrimaryButton onClick={() => handleOnClick('gracia')} lang={lang}/>
          </div>
        </div>

      </div>

      {
        showModal && <Modal setShowModal={setShowModal} local1Link={local1Link}/>
      }
    </div>
  )
}
