import Link from 'next/link';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

import HoverComponent from './HoverComponent';

export const Categories = () => (
  <div className="w-full  bg-yellow-500">
    <div className="max-w-[1400px] mx-auto py-12">
      <ul className="flex relative items-center gap-[8px] font-semibold  text-text-xs">
        <Link href="/">
          <li className="border-r-[1px] px-8 flex items-center">
            <p>Home</p>
          </li>
        </Link>
        <HoverComponent
          content={<p>Content</p>}
          trigger={
            <li className="border-r-[1px] px-8 flex items-center">
              <p>Téléphone & Tablette</p>
              <BiChevronDown className="w-[24px] h-[24px]" />
            </li>
          }
        />
        <HoverComponent
          content={<p>Content</p>}
          trigger={
            <li className="border-r-[1px] px-8 flex items-center">
              <p>Cuisine & Électroménager</p>
              <BiChevronDown className="w-[24px] h-[24px]" />
            </li>
          }
        />
        <li className="border-r-[1px] px-8 flex items-center">
          <p>Santé & Beauté</p>
          <BiChevronDown className="w-[24px] h-[24px]" />
        </li>
        <li className="border-r-[1px] px-8 flex items-center">
          <p>Électroniques</p>
          <BiChevronDown className="w-[24px] h-[24px]" />
        </li>
        <li className="border-r-[1px] px-8 flex items-center">
          <p>Mode</p>
          <BiChevronDown className="w-[24px] h-[24px]" />
        </li>
        <li className="border-r-[1px] px-8 flex items-center">
          <p>Maison & Bureau</p>
          <BiChevronDown className="w-[24px] h-[24px]" />
        </li>
        <li className="border-r-[1px] px-8 flex items-center">
          <p>Informatique</p>
          <BiChevronDown className="w-[24px] h-[24px]" />
        </li>
        <li className="border-r-[1px] px-8 flex items-center">
          <p>Jeux videos & Consoles</p>
          <BiChevronDown className="w-[24px] h-[24px]" />
        </li>
      </ul>
    </div>
  </div>
);
