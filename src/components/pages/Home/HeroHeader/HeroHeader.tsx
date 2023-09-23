import React from 'react';
import { BiListUl } from 'react-icons/bi';

export const HeroHeader = () => (
  <div className=" h-[45px] w-full bg-white">
    <div className="mx-auto flex h-full w-full max-w-[1400px]">
      <div className="flex h-full w-[20%] items-center justify-start gap-[8px] rounded-t-[8px] bg-yellow-500 px-18">
        <BiListUl className="h-[24px] w-[24px] fill-dark-300" />
        <h1 className="text-text-md font-medium text-dark-300">Categories</h1>
      </div>
      <div className="flex w-[80%] items-center  gap-x-[30px] bg-white pl-32 text-text-sm font-semibold">
        <p>Featured Brands</p>
        <p>Trending Styles</p>
        <p>Gift Cards</p>

        <div className="ml-auto">
          <p>Free Shipping on Orders $50+</p>
        </div>
      </div>
    </div>
  </div>
);
