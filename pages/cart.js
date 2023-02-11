import { useAppContext } from '@/components/context/AppContext';
import { MainLayout } from '@/components/layout/MainLayout';
import React from 'react'

const Cart = () => {

  const { homeData } = useAppContext();
  
  console.log(homeData);
  return (
    <div>asdas</div>
    // <MainLayout>cart</MainLayout>
  )
}

export default Cart;