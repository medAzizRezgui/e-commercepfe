import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';

import { Product } from '../../../../../types/Product';

type Props = {
  prod: Product;
};
export const Details = ({ prod }: Props) => (
  <div className="flex flex-col gap-[10px] max-w-[450px] ">
    <p className="text-text-xs text-gray-400">{prod?.sousCategorie?.name}</p>
    <h1 className="font-[400] text-display-sm">{prod?.name}</h1>
    {/*  Rating */}
    <div className="flex items-center gap-[8px]">
      <div className="flex items-center gap-[4px]">
        <AiFillStar className="fill-yellow-400" />
        <AiFillStar className="fill-yellow-400" />
        <AiFillStar className="fill-yellow-400" />
        <AiFillStar className="fill-yellow-400" />
        <BiStar className="fill-yellow-400" />
      </div>
      <p className="text-text-xs text-gray-400">(3 customers reviews)</p>
    </div>
    {/*  Features */}
    <ul className="list-disc pl-24 text-text-sm text-dark-500">
      <li className="text-gray-400">4.5 inch HD Touch Screen (1280 x 720)</li>
      <li className="text-gray-400">4.5 inch HD Touch Screen (1280 x 720)</li>
      <li className="text-gray-400">4.5 inch HD Touch Screen (1280 x 720)</li>
    </ul>
    {/*  desc */}
    <p className="text-gray-400 text-text-sm py-8">{prod?.description}</p>
    {/*  code */}
    <p className="font-[300] text-text-sm">
      <span className="font-medium">SKU: </span>
      FW511948218
    </p>
  </div>
);
