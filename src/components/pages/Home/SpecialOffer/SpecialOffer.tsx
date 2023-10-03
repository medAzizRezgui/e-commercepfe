import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Product } from '../../../../types/Product';

export const SpecialOffer = ({ item }: { item: Product }) => {
  const router = useRouter();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={() =>
        router.push({
          pathname: '/product',
          query: {
            name: item.name,
            id: item._id,
          },
        })
      }
      className="flex h-min w-[40%] cursor-pointer flex-col items-center rounded-[20px] border-2 border-yellow-500 pb-40 pt-24"
    >
      <h1 className="text-center text-display-xs text-yellow-500">
        Special Offer
      </h1>
      <Image
        src={item?.files[0]}
        alt=""
        width={250}
        height={250}
        className="my-14 max-h-[250px] max-w-[250px] object-contain"
      />
      <h1 className="px-24 text-center text-text-sm font-semibold text-blue-500">
        {item?.name}
      </h1>
      {!item.discount && (
        <h1 className="py-8 text-display-sm font-medium text-dark-500">
          {item.price.toFixed(2)} DT
        </h1>
      )}

      <div
        className={`${item.discount ? 'block' : 'hidden'}  py-8 text-center`}
      >
        <h1 className="text-display-sm text-text-sm font-medium text-gray-400 line-through">
          {item.price.toFixed(2)} DT
        </h1>
        <h1 className=" text-display-sm font-medium text-green-400">
          {(item.price - (item.price / 100) * item.discount).toFixed(2)} DT
        </h1>
      </div>
    </div>
  );
};
