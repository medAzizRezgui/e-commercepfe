import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

export const Route = () => (
  <div className="max-w-[1400px]  text-text-sm gap-[10px] px-16 flex items-center mx-auto py-16">
    <h1>Home</h1>
    <BiChevronRight className="w-[20px] h-[20px]" />
    <h1 className="bg-gray-300 rounded-[8px] px-16 py-8">Accessories</h1>
    <BiChevronRight className="w-[20px] h-[20px]" />
    <h1 className="bg-gray-300 rounded-[8px] px-16 py-8">Headphones</h1>
    <BiChevronRight className="w-[20px] h-[20px]" />
    <p>Ultra Wireless S50 Headphones S50 with Bluetooth</p>
  </div>
);
