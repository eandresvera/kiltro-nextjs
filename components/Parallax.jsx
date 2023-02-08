import React from 'react'

export const Parallax = ({ parallaxImg }) => {
  console.log(parallaxImg);
  return (
    <div className={`h-1/2 bg-[url('https://admin.kiltrobcn.com/wp-content/uploads/2023/02/pisco_sour-2.jpeg')] bg-cover bg-fixed relative`}>
      <div className='text-white h-full font-bold text-4xl flex justify-center items-center'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      </div>
    </div>
  )
}
