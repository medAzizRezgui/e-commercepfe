import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Pods from '@/images/Pods.png';

export const SwiperItemThird = () => (
  <div className="mx-auto  flex h-[422px] w-[80%] items-center justify-between gap-[40px] overflow-hidden ">
    {/* Text */}
    <div className="mr-20">
      <h1 className="min-w-[400px]  text-display-lg font-[500] uppercase leading-[50px]">
        Inkax Wireless Earphone
      </h1>
      <h1 className=" text-display-lg  font-[500] uppercase leading-[50px]">
        Model T02
      </h1>
      <p className=" text-text-md font-medium uppercase">In Accessories</p>
      <p className=" text-text-sm font-[300] uppercase">From</p>
      <h1 className="pb-24  text-display-lg font-medium ">150 DT</h1>
      <Link
        className="cursor-pointer"
        href={{
          pathname: '/product',
          // eslint-disable-next-line no-underscore-dangle
          query: {
            name: 'Inkax Wireless Earphone - T02 - White',
            id: '647572648145c4ecde05ccfc',
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
    <Image src={Pods} alt="img" className="w-[45%]" />
  </div>
);
