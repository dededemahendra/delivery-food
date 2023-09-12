'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  { name: 'Home ', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Working Hours', href: '/' },
  { name: 'Contact', href: '/contact' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="flex  flex-col cursor-pointer justify-center items-center text-2xl gap-8 bg-red-500 text-white absolute top-24 left-0 w-full z-10 h-[calc(100vh-6rem)] transition duration-150">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              onClick={() => setOpen(false)}
            >
              Order
            </Link>
          )}
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
