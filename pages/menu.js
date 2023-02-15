import { useAppContext } from '@/components/context/AppContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { fetchData } from '@/functions/fetchData';
import React, { useEffect } from 'react'
import Image from 'next/image';

const Menu = () => {

  // const { homeData, updateHomeData } = useAppContext();
  
  // useEffect(() => {
  //   updateHomeData(data);
    
  // }, [updateHomeData, data])
  
  // if (!homeData) {
  //   return null;
  // }

  // const cartImgs = homeData.nodes[0].cartImgs.nodes;
  
  // console.log(cartImgs);

  return (
    <div></div>
    // <MainLayout>
    //   <div className="min-h-screen text-white">
    //     <div className="h-[300px] md:h-[500px] md:bg-[url('https://admin.kiltrobcn.com/wp-content/uploads/2023/02/kiltro_comida.jpg')] bg-cover bg-no-repeat relative fade-in" >
    //       <Image className='md:hidden fade-in' priority src="https://admin.kiltrobcn.com/wp-content/uploads/2023/02/kiltro_comida.jpg" alt="" fill/>
    //     </div>

    //     <div className='min-h-screen mx-10 pt-10 flex flex-col items-center justify-center pb-10 space-y-10 relative'>
    //       {
    //         cartImgs.map( img => (
              
    //           <Image 
    //             key={img.sourceUrl} 
    //             src={img.sourceUrl} 
    //             width="800" 
    //             height="800" 
    //             alt="Carta kiltro 1"/>
    //         ) )
            
    //       }
    //     </div>
    //   </div>
    // </MainLayout>
  )
}

// export default Menu;

// export async function getStaticProps (){
//     const data = await fetchData();
  
//     return {
//       props: { data }
//     }
//   }
  