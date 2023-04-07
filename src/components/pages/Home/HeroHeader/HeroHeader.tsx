import React from 'react';
import { BiListUl } from 'react-icons/bi';

export const HeroHeader = () => (
  <div className="h-[45px] w-full max-w-[1400px] mx-auto ">
    <div className="flex items-center justify-start px-24 gap-[8px] h-full w-[20%] rounded-t-[8px] bg-yellow-500">
      <BiListUl className="w-[24px] h-[24px] fill-dark-300" />
      <h1 className="text-dark-300 font-medium text-text-md">Categories</h1>
    </div>
  </div>
);
