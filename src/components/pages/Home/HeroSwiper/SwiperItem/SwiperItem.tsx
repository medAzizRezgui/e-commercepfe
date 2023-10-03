import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HeroSmartWatch from '@/images/smartwatch.png';

export const SwiperItem = () => (
  <div className="mx-auto flex h-[430px] w-[100%] items-center justify-center ">
    <div className=" w-full pl-128 ">
      <h1 className=" text-[68px] font-[300] uppercase leading-none">
        <span className="tracking-widest">the new</span> standard
      </h1>
      <p className="font-semibold">Under favorable smartwatches</p>
      <p className="text-text-sm">FROM</p>
      <p className="pt-4 text-display-xl font-[600]">
        <sup>$</sup>749<sup>99</sup>
      </p>

      <button className="mt-24 rounded-md bg-yellow-500 px-64 py-12">
        Start Buying
      </button>
    </div>
    <div className="relative ml-auto flex h-full w-full items-center overflow-hidden  ">
      <Image
        src={HeroSmartWatch}
        alt=""
        className="h-[100%] w-[100%] transform animate-slideIn object-cover"
      />
    </div>
  </div>
);
