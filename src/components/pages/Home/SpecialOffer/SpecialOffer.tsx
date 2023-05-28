import Image from 'next/image';
import React from 'react';

import { Product } from '../../../../types/Product';

export const SpecialOffer = ({ item }: { item: Product }) => (
  <div className="flex h-min w-[40%] flex-col items-center rounded-[20px] border-2 border-yellow-500 pb-40 pt-24">
    <h1 className="text-center text-display-xs">Special Offer</h1>
    <Image src={item?.files[0]} alt="" width={250} height={250} />
    <h1 className="px-24 text-center text-text-md font-medium text-blue-500">
      {item?.name}
    </h1>
    {!item.discount && (
      <h1 className="py-8 text-display-sm font-medium text-dark-500">
        {item.price.toFixed(2)} DT
      </h1>
    )}

    <div className={`${item.discount ? 'block' : 'hidden'}  py-8 text-center`}>
      <h1 className="text-display-sm text-text-sm font-medium text-gray-400 line-through">
        {item.price.toFixed(2)} DT
      </h1>
      <h1 className=" text-display-sm font-medium text-green-400">
        {(item.price - (item.price / 100) * item.discount).toFixed(2)} DT
      </h1>
    </div>
  </div>
);
