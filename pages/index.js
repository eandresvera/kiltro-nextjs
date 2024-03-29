import Head from 'next/head'
import { Josefin_Sans } from '@next/font/google'
import { Home } from '../components/Home';
import { Parallax } from '@/components/Parallax';
import { Reserves } from '@/components/Reserves';
import { fetchData } from '../functions/fetchData'
import { useAppContext } from '@/components/context/AppContext';
import { useEffect } from 'react';
import { Gallery } from '@/components/Gallery';
import { MainLayout } from '@/components/layout/MainLayout';
import { TripadvisorReviws } from '@/components/TripadvisorReviews';

export default function Index({ data }) {

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
        <meta name="description" content="kiltro es un restobar con mucha influencia latinoamericana. cócteles,  infusiones y
    comida latina. Bar latino primer lugar en Barcelona" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout >
        <Home />
        <Parallax text={false}/>
        <Reserves />
        <TripadvisorReviws />
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
