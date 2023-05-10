import Image from 'next/image';
import React from 'react';

import HeroSmartWatch from '@/images/HeroSmartWatch.png';

export const SwiperItem = () => (
  <div className="h-[422px]  gap-[40px] justify-between items-center w-[80%] overflow-hidden flex mx-auto ">
    {/* Text */}
    <div className="mr-20">
      <h1 className="uppercase min-w-[400px] leading-[65px] font-Roboto text-display-xl font-[300]">
        Le nouveau
      </h1>
      <h1 className="uppercase font-Roboto  leading-[65px] text-display-xl font-[300]">
        Standard
      </h1>
      <p className="font-medium font-Roboto uppercase text-text-md">
        sous smartwatches favorable
      </p>
      <p className="font-[300] font-Roboto uppercase text-text-sm">From</p>
      <h1 className="font-Roboto font-medium pb-24 text-display-lg ">
        $799.99
      </h1>
      <button
        type="button"
        onClick={() => {}}
        className="rounded-[8px] text-text-lg text-white font-[300] bg-yellow-500 text-white px-58 py-8"
      >
        Acheter
      </button>
    </div>
    {/*  Image */}
    <Image src={HeroSmartWatch} alt="img" className="w-[110%]" />
  </div>
);
