import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <ul>
        <li className='flex space-x-10 text-white uppercase'>
            <Link href="/">Contacto</Link>
            <Link href="/">Carta</Link>
            <Link href="/">Bandera</Link>
        </li>
    </ul>
  )
}
