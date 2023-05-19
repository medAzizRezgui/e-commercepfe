import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

export const SideCategories = ({ options, setSelectedCategorie }) => (
  <div className="py-18 w-full border-2 max-h-min border-gray-500 rounded-[12px]">
    <h1 className="text-text-sm px-24 border-b-2 pb-18 border-gray-500">
      Browse Categories
    </h1>
    <div className="px-12 w-full">
      <div
        onClick={() => setSelectedCategorie('all')}
        className="flex cursor-pointer w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]"
      >
        <BiChevronRight />
        <p className="text-text-sm">All</p>
      </div>
      {options.map((item) => (
        <div
          onClick={() => setSelectedCategorie(item.value)}
          className="flex w-full border-b-[1px] cursor-pointer py-8 border-gray-500 items-center gap-[8px]"
        >
          <BiChevronRight />
          <p className="text-text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);
