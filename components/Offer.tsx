import React from 'react';
import Image from 'next/image';
import CountDown from './CountDown';

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] mt-4">
      {/* TEXT CONTAINER */}
      <div className="flex-1 p-8 flex gap-4 flex-col items-center text-center md:text-start md:justify-center md:items-start xl:w-1/2">
        <h1 className="text-white text-6xl font-bold xl:text-7xl   ">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white text-md xl:text-xl px-10 md:p-0">
          Progressively simplify effective
          e-toilers and process-centric methods of
          empowerment. Quickly pontificate
          parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white py-3 rounded-md w-2/6 ">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Offer Product"
          fill
          className="object-contain  "
        />
      </div>
    </div>
  );
};

export default Offer;
