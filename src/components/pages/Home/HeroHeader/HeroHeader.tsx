import React from 'react';
import { BiListUl } from 'react-icons/bi';

export const HeroHeader = () => (
  <div className="mx-auto h-[45px] w-full max-w-[1400px] ">
    <div className="flex h-full w-[20%] items-center justify-start gap-[8px] rounded-t-[8px] bg-yellow-500 px-18">
      <BiListUl className="h-[24px] w-[24px] fill-dark-300" />
      <h1 className="text-text-md font-medium text-dark-300">Catégories</h1>
    </div>
  </div>
);
