import React from 'react';
import { BiSearch, BiHeart, BiUser, BiShoppingBag } from 'react-icons/bi';

import { Categories } from '../Categories';
import Logo from '../Logo';

const Header = () => (
  <div className="max-w-[1400px] my-20 justify-between flex items-center w-full rounded-[50px] mx-auto py-8 px-20 bg-dark-500 ">
    <Logo />

    {/* Input */}
    <div className="flex items-center w-[50%] justify-between rounded-[50px] bg-dark-400">
      <input
        type="text"
        placeholder="Search for Products"
        className=" px-32 py-4 bg-dark-400 text-text-md placeholder-dark-100 rounded-l-[50px] outline-0 text-white"
      />
      <div className="flex gap-[16px] items-center">
        <Categories />

        <div className="rounded-r-[50px] py-8 flex cursor-pointer items-center justify-center  h-full bg-yellow-500 w-[56px]">
          <BiSearch className="text-white w-[28px] h-[28px]" />
        </div>
      </div>
    </div>
    {/* CTA */}
    <div className="flex items-center gap-[24px]">
      <BiHeart className="text-white w-[28px] h-[28px]" />
      <BiUser className="text-white w-[28px] h-[28px]" />
      <div className="flex items-center gap-[4px] ">
        <div className="relative">
          <span className="absolute text-black bottom-[-7px] left-[12px] text-text-xs font-semibold rounded-full bg-yellow-500 w-[18px] flex items-center justify-center h-[18px]">
            0
          </span>
          <BiShoppingBag className="text-white w-[28px] h-[28px]" />
        </div>
        <h1 className="text-white font-medium text-text-md">$0.00</h1>
      </div>
    </div>
  </div>
);

export default Header;
