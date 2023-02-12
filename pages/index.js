import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Home } from '../components/Home';
import { Parallax } from '@/components/Parallax';
import { Reserves } from '@/components/Reserves';
import { fetchData } from '../functions/fetchData'
import { useAppContext } from '@/components/context/AppContext';
import { useEffect } from 'react';
import { Gallery } from '@/components/Gallery';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Index({ data }) {
  // console.log(data.nodes[0])
  const logo = data.nodes[0].logoImg && data.nodes[0].logoImg.node.mediaDetails;
  const parallaxImg = data.nodes[0].parallaxImg ? data.nodes[0].parallaxImg.node.sourceUrl : '';

  const { homeData, updateHomeData } = useAppContext();
  
  // console.log('index: ',data);
  useEffect(() => {
    updateHomeData(data);
    
  }, [updateHomeData, data])
  
  if (!homeData) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Kiltro Restobar</title>
        <meta name="description" content="Kiltro restobar descripcion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout >
        <Home />
        <Parallax text={false}/>
        <Reserves />
        <Gallery />
      </MainLayout>
    </>
  )
}

export async function getStaticProps (){
  const data = await fetchData();

  return {
    props: { data }
  }
}
