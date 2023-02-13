import { useAppContext } from '@/components/context/AppContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { fetchData } from '@/functions/fetchData';
import React, { useEffect } from 'react'
import { Parallax } from '@/components/Parallax'
import Image from 'next/image';

const Cart = ({ data }) => {

  const { homeData, updateHomeData } = useAppContext();

  useEffect(() => {
    updateHomeData(data);
      
  }, [updateHomeData, data])
  
  if (!homeData) {
    return null;
  }
  
  console.log(homeData);

  return (
    <MainLayout>
      <div className="min-h-screen text-white">
        <div className="h-[300px] md:h-[500px] md:bg-[url('https://admin.kiltrobcn.com/wp-content/uploads/2023/02/kiltro_comida.jpg')] bg-cover bg-no-repeat relative fade-in" >
          <Image className='md:hidden fade-in' src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/kiltro_comida.jpg" alt="" fill/>
        </div>

        <div className='min-h-screen pt-10 flex flex-col  items-center justify-center pb-10 space-y-10'>
          <div className=' w-[90vw] md:w-[800px] h-[1080px] md:h-[1080px] relative'>
            <Image src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/carta_comida1.jpeg" fill alt=""/>
            {/* <Image src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/carta_comida1.jpeg" width="800" height="800" alt=""/> */}
          </div>
          <div className=' w-[90vw] md:w-[800px] h-[1080px] md:h-[1080px] relative'>
            {/* <Image src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/carta_comida1.jpeg" fill alt=""/> */}
            <Image src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/carta_cocktails_29Junio.jpeg" fill alt=""/>
            {/* <Image src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/carta_comida1.jpeg" width="800" height="800" alt=""/> */}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Cart;

export async function getStaticProps (){
    const data = await fetchData();
  
    return {
      props: { data }
    }
  }
  