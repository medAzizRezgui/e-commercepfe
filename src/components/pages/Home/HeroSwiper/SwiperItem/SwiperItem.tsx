import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HeroSmartWatch from '@/images/watch.png';

export const SwiperItem = () => (
  <div className="mx-auto  flex h-[422px] w-[80%] items-center justify-between gap-[40px] overflow-hidden ">
    {/* Text */}
    <div className="mr-20">
      <h1 className="min-w-[400px]  text-display-lg font-[500] uppercase leading-[50px]">
        Ladies watch collection
      </h1>
      <h1 className=" text-display-lg  font-[500] uppercase leading-[50px]">
        STRAND by OBAKU
      </h1>
      <p className=" text-text-md font-medium uppercase">In Watches</p>
      <p className=" text-text-sm font-[300] uppercase">From</p>
      <h1 className="pb-24  text-display-lg font-medium ">520 DT</h1>
      <Link
        className="cursor-pointer"
        href={{
          pathname: '/product',
          // eslint-disable-next-line no-underscore-dangle
          query: {
            name: "Ladies watch collection STRAND by OBAKU - Magie d'Or",
            id: '64766ba8a8b2fbd9fa7d8f44',
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
    <Image src={HeroSmartWatch} alt="img" className="w-[45%]" />
  </div>
);
