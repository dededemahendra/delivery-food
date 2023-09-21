import Link from 'next/link';
import React from 'react';
import { menu } from '@/data/data';

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-16 xl:px-24 h-[calc(100vh-3rem)] md:h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center ">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className='w-full md:h-4/6  bg-cover p-8'
          style={{backgroundImage:`url(${category.img})`}}
        >
          <div className={`text-${category.color} w-1/2 relative`}>
            <h1 className="font-bold text-3xl md:text-4xl xl:text-6xl ">{category.title}</h1>
            <p className="mt-3 tex-xl">{category.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
