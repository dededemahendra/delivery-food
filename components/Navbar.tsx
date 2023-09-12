import React from 'react'
import Image from 'next/image'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';

const Navbar = () => {

    const user = false;
  return (
    <nav className="h-12 flex justify-between items-center uppercase text-red-500 border-b-2 border-b-red-500 px-4 md:h-24 lg:px-20 xl:px-40px">
        <div className='hidden md:flex gap-4 flex-1 items-center justify-start'>
            <Link href='/'>Home</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/contact'>Contact</Link>
        </div>
        {/* Logo */}
        <div className=' text-xl md:font-bold flex-1 text-center'>
            <Link href='/'>Massimo</Link>
        </div>
        {/* Mobile Menu */}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/* Right Links */}
        <div className='gap-4 items-center hidden md:flex flex-1 justify-end'>
            <div className='flex gap-2 items-center bg-orange-500 text-white px-3 py-2 rounded-md cursor-pointer md:absolute top-1 right-2 lg:static'>
                <Image src='/phone.png' alt='' width={20} height={20} />
                <span>11 122 3332</span>
            </div>
            {!user ? (
                <Link href='/login'>Login</Link>
            ) : (
                <Link href='/orders'>Order</Link>
            )}
            <CartIcon/>
        </div>
    </nav>
  )
}

export default Navbar