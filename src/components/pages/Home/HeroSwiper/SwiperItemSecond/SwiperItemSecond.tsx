import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Iphone from '@/images/Iphone.png';

export const SwiperItemSecond = () => (
  <div className="mx-auto  flex h-[422px] w-[80%] items-center justify-between gap-[40px] overflow-hidden ">
    {/* Text */}
    <div className="mr-20">
      <h1 className="min-w-[400px]  text-display-lg font-[500] uppercase leading-[50px]">
        Apple Iphone
      </h1>
      <h1 className=" text-display-lg  font-[500] uppercase leading-[50px]">
        14 Pro Max
      </h1>
      <p className=" text-text-md font-medium uppercase">In Smartphones</p>
      <p className=" text-text-sm font-[300] uppercase">From</p>
      <h1 className="pb-24  text-display-lg font-medium ">4500 DT</h1>
      <Link
        className="cursor-pointer"
        href={{
          pathname: '/product',
          // eslint-disable-next-line no-underscore-dangle
          query: {
            name: 'Apple iPhone 14 Pro Max',
            id: '64790dcd8a72b7d5083d4c69',
          },
        }}
      >
        <button
          type="button"
          onClick={() => {}}
          className="rounded-[8px] bg-yellow-500 px-58 py-8 text-text-lg font-[300] text-white"
        >
          Buy
        </button>
      </Link>
    </div>
    {/*  Image */}
    <Image src={Iphone} alt="img" className="w-[65%]" />
  </div>
);
