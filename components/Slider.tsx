'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slider = [
  {
    id: 1,
    title:
      'always fresh & always crispy & always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title:
      'we deliver your order wherever you are in bali',
    image: '/slide2.png',
  },
  {
    id: 3,
    title:
      'the best pizza to share with your family',
    image: '/slide3.jpg',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev: number) =>
          prev === slider.length - 1
            ? 0
            : prev + 1
        ),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50 lg:flex-row">
      {/* Text Container */}
      <div className="h-1/2  flex flex-col justify-center items-center gap-8 text-red-500 font-bold md:h-full lg:w-1/2 lg:h-full ">
        <h1 className="text-4xl text-center uppercase p-5 md:text-5xl lg:text-7xl">
          {slider[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white px-7 py-5 rounded-md font-normal transition-shadow duration-200 hover:shadow hover:shadow-red-400">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full h-1/2 md:h-full lg:h-full lg:w-1/2 relative">
        <Image
          src={slider[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Slider;
