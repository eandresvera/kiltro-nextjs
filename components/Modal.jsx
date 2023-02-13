import React, { useEffect, useState } from 'react'
import { Spinner } from './ui/Spinner';

export const Modal = ({ setShowModal, localLink }) => {

    const [iFrameIsReady, setIFrameIsReady] = useState(false);
  
  return (
    <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-full">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-2 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold"></h3>
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                                x
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">

                        { !iFrameIsReady && <Spinner /> }
                        {<iframe className='h-[70vh]' src={localLink} onLoad={() => setIFrameIsReady(true)}></iframe>}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
