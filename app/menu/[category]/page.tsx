import { pizzas } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const CategoryPage = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-red-500">
      {pizzas.map((item) => (
        <Link
          key={item.id}
          className=" w-full h-[70vh] flex flex-col justify-center items-center border-r-2 border-b-2 border-red-500 p-10 group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
        >
          {/* Image COntainer */}
          {item.img && (
            <div className="relative ">
              <Image
                src={item.img}
                alt=""
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          )}
          {/* Text Container */}
          <div className="flex justify-between items-center w-full mt-5 font-bold">
            <h1 className=" w-1/2 uppercase text-2xl p-2">
              {item.title}
            </h1>
            <h2 className="group-hover:hidden text-xl">
              ${item.price}
            </h2>
            <button className="uppercase hidden group-hover:block bg-red-500 text-white p-3 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
