import Image from 'next/image';
import React, { useState } from 'react'
import { useAppContext } from './context/AppContext'
import { Modal } from './Modal';
import { PrimaryButton } from './ui/PrimaryButton'

export const Reserves = () => {

  const [showModal, setShowModal] = useState(false);
  const { lang, homeData } = useAppContext();
  const [localLinkClicked, setLocalLinkClicked] = useState(null);

  const image = homeData.nodes[0].reserveImg.node.sourceUrl;
  const textEsp = homeData.nodes[0].reserveTextEsp;
  const textEng = homeData.nodes[0].reserveTextEng;
  const local1Name = homeData.nodes[0].local1Name;
  const local1Link = homeData.nodes[0].local1Link;
  const local2Name = homeData.nodes[0].local2Name;
  const local2Link = homeData.nodes[0].local2Link;

  const handleOnClick = ( localLink ) => {
    setLocalLinkClicked(`${localLink}spanish`)
    lang === 'esp' && setLocalLinkClicked(`${localLink}spanish`), setShowModal(true)
    lang === 'eng' && setLocalLinkClicked(`${localLink}english`), setShowModal(true)
  }

  return (
    <div className='h-full pb-10 text-white bg-black'>
      <div className='flex justify-center py-5'>
        { image && <Image src={image} width="400" height="400" alt=""/> }
      </div>
      <div className='flex justify-center py-5'>
        <h2 className='text-xl px-5'>
          {lang === 'esp' && textEsp}
          {lang === 'eng' && textEng}
        </h2>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full py-5 flex flex-col justify-center items-center'>
          <div className='space-y-8'>
            <p className='flex justify-center'>{local1Name}</p>
            {/* <PrimaryButton onClick={() => handleOnClick('santantoni')} lang={lang}/> */}
            <PrimaryButton lang={lang} onClick={() => handleOnClick(local1Link)}/>
          </div>
        </div>
        <div className='w-full py-5 flex flex-col justify-center items-center'>
          <div className='space-y-8'>
            <p className='flex justify-center'>{local2Name}</p>
            <PrimaryButton onClick={() => handleOnClick(local2Link)} lang={lang}/>
          </div>
        </div>

      </div>

      { (showModal && localLinkClicked !== null) &&  <Modal setShowModal={setShowModal} localLink={localLinkClicked}/> }
    </div>
  )
}
