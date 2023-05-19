import Image from 'next/image';
import React from 'react';

import { Product } from '../../../../types/Product';

export const SpecialOffer = ({ item }: { item: Product }) => (
  <div className="border-2 h-min pb-40 pt-24 border-yellow-500 flex flex-col items-center rounded-[20px] w-[40%]">
    <h1 className="text-display-xs">Special Offer</h1>
    <Image src={item?.files[0]} alt="" width={250} height={250} />
    <h1 className="font-medium text-blue-500 text-text-md">{item?.name}</h1>
    <h1 className="font-medium text-display-sm py-40">${item?.price}</h1>
  </div>
);
