import Image from 'next/image';
import React from 'react';

import DescImg1 from '@/images/ForDescription-1.png';
import DescImg from '@/images/ForDescription.jpg';

import { Heading } from './Heading';

export const Description = () => (
  <div className="w-full max-w-[1400px]  drop-shadow-sm pb-80 pt-40  bg-white mx-auto">
    <div className="flex items-center relative mx-80  pb-8 mb-40 gap-[40px] justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-text-xl font-medium">Description</h1>
        <span className="block mt-4 h-[3px] rounded-full w-full  bg-yellow-500" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-text-xl font-[300]">Specifications</h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-text-xl font-[300] ">Reviews</h1>
      </div>
      <span className="w-full absolute h-[1px] bottom-[9px] z-[-1] bg-gray-500" />
    </div>
    <h1 className="text-display-xs pl-80  pb-24">Perfectly Done</h1>
    <p className="text-text-sm pb-40 text-gray-400 pl-80">
      Praesent ornare, ex a interdum consectetur, lectus diam sodales elit,
      vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper
      viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse
      potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit
      facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a
      ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi
      porta diam nisi, id finibus nunc tincidunt eu.
    </p>
    <div className="flex justify-between pl-80 ">
      <div>
        <Heading
          title="Perfectly Done"
          desc="Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis,enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod."
        />
        <Heading
          title="Perfectly Done"
          desc="Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis,enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod."
        />
        <Heading
          title="Perfectly Done"
          desc="Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis,enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod."
        />
      </div>
      <div className="w-[100%]  relative h-full ">
        <Image src={DescImg} alt="" className="absolute top-0 right-0" />
      </div>
    </div>
    <div className="flex pt-64 items-center ">
      <Image src={DescImg1} alt="" className="w-[120%] mr-128" />
      <div className="flex flex-col items-end pr-64">
        <h1 className="text-display-xs pb-24">Perfectly Done</h1>
        <p className="text-text-sm pt-16 text-right pb-40">
          Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis,
          enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras
          finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
        </p>
        <h1 className="text-display-xs pb-24">Perfectly Done</h1>
        <p className="text-text-sm pb-40 text-right">
          Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis,
          enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras
          finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
        </p>
      </div>
    </div>
    <div className="pl-64 pt-64 flex">
      <div className="flex items-center">
        <span className="text-text-sm font-semibold">SKU: </span>
        <p className="text-text-sm"> FW511948218</p>
        <span className="px-24 font-semibold text-gray-400">/</span>
      </div>
      <div className="flex items-center">
        <span className="text-text-sm font-semibold">Category: </span>
        <p className="text-text-sm"> Headphones</p>
        <span className="px-24 font-semibold text-gray-400">/</span>
      </div>
      <div className="flex items-center">
        <span className="text-text-sm font-semibold">Tags: </span>
        <p className="text-text-sm"> Fast, Gaming, Strong</p>
      </div>
    </div>
  </div>
);
