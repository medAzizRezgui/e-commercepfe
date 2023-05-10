import Image from 'next/image';
import React from 'react';
import { BiCartAdd } from 'react-icons/bi';

import Prod from '@/images/Controller.png';

export const ProductCardH = () => (
  <div className="flex gap-[20px] group hover:shadow-productCardShadow cursor-pointer hover:border-0 border-r-[1px] border-gray-500 my-12  p-12">
    <Image src={Prod} alt="" className="w-[120px]" />
    <div className="flex flex-col gap-[10px]">
      <p className="text-gray-400 text-text-xs">Game Consoles</p>
      <h1 className="font-semibold text-blue-500 text-text-sm">
        Game Console Controller + USB 3.0
      </h1>
      <div className="flex justify-between items-center">
        <h1 className="text-text-xl font-medium">$99.00</h1>
        <div className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center bg-gray-500 group-hover:bg-yellow-500">
          <BiCartAdd className="fill-white w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  </div>
);
