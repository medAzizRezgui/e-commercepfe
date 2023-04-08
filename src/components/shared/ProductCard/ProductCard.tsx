import Image from 'next/image';
import React from 'react';
import { BiCartAdd } from 'react-icons/bi';

import Product from '@/images/Product.png';

export const ProductCard = () => (
  <div className="py-40 px-24 group hover:drop-shadow-xl w-full relative border-[1px] border-[#f8f9fa]">
    <p className="text-text-xs text-gray-400 ">Laptops</p>
    <h1 className="font-medium text-blue-500 text-text-sm ">
      Laptop Screener CX70 2QF-621XPL 17.3″ 4210
    </h1>
    <Image
      src={Product}
      alt="product"
      width={200}
      height={200}
      className="mx-auto"
    />
    <div className="flex items-center justify-between">
      <h1 className="font-semibold text-text-lg">$2,399.00</h1>
      <div className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center bg-yellow-500">
        <BiCartAdd className="fill-white w-[20px] h-[20px]" />
      </div>
    </div>
    <div className="absolute left-0 h-[50px] z-[10] bottom-[-25px] w-full hidden   group-hover:block  bg-white">
      <div className="px-24 border-t-[2px] border-[#f8f9fa] mx-auto w-[80%] flex items-center  justify-between">
        <h1>Wishlist</h1>
        <h1>Compare</h1>
      </div>
    </div>
  </div>
);
