import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../ui/Navbar'

export const MainLayout = ({children}) => {

  return (
    <div className={`bg-black`}>
        <Navbar />
            { children }
        <Footer />
    </div>
  )
}
