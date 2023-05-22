import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';

import { Product } from '../../../../../types/Product';
import { StarRating } from '../../../../shared/StarRating';

type Props = {
  prod: Product;
};
export const Details = ({ prod }: Props) => (
  <div className="flex flex-col gap-[10px] max-w-[450px] ">
    <p className="text-text-xs text-gray-400">{prod?.sousCategorie?.name}</p>
    <h1 className="font-[400] text-display-sm">{prod?.name}</h1>
    {/*  Rating */}
    <div className="flex items-center gap-[8px]">
      <StarRating
        rating={
          prod?.rating.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) / prod?.rating?.length
        }
      />
      <p className="text-text-xs text-gray-400">
        ({prod?.rating?.length} customers reviews)
      </p>
    </div>
    {/*  Features */}
    {prod?.features.length > 0 && (
      <ul className="list-disc pl-24 text-text-sm text-dark-500">
        {prod?.features?.map((item) => (
          <li className="text-gray-400">{item}</li>
        ))}
      </ul>
    )}
    {/*  desc */}
    <p className="text-gray-400 text-text-sm py-8">{prod?.description}</p>
    {/*  code */}
    <p className="font-[300] text-text-sm">
      <span className="font-medium">SKU: </span>
      {prod.sku}
    </p>
  </div>
);
