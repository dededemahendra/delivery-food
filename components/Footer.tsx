import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex w-full h-24 px-20 py-10 justify-between items-center bg-black absolute bottom-0'>
        <Link href='/' className='text-red-500 text-2xl font-bold uppercase' >Massimo</Link>
        <p className='text-gray-100 text-md'>All Right Reserved</p>
    </footer>
  )
}

export default Footer