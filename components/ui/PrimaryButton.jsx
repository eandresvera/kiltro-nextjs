import React from 'react'

export const PrimaryButton = ({ onClick, lang }) => {
  return (
    <button 
      className='bg-primary-dark transition duration-200 hover:bg-primary-darkest py-4 px-10 text-white' 
      onClick={onClick}
    >
        { lang === 'esp' && 'RESERVAR' }
        { lang === 'eng' && 'RESERVE' }
    </button>
  )
}
