import React from 'react';

import { Product } from '../../../../../types/Product';
import { StarRating } from '../../../../shared/StarRating';

type Props = {
  prod: Product;
};
export const Details = ({ prod }: Props) => (
  <div className="flex max-w-[450px] flex-col gap-[10px] ">
    <p className="text-text-xs text-gray-400">{prod?.sousCategorie?.name}</p>
    <h1 className="text-display-sm font-[400]">{prod?.name}</h1>
    {/*  Rating */}
    <div className="flex items-center gap-[8px]">
      <StarRating
        rating={
          prod.rating.reduce(
            (accumulator, currentValue) => accumulator + currentValue.rate,
            0
          ) / prod.rating.length
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
    <p className="py-8 text-text-sm text-gray-400">{prod?.description}</p>
    {/*  code */}
    <p className="text-text-sm font-[300]">
      <span className="font-medium">SKU: </span>
      {prod.sku}
    </p>
  </div>
);
