import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCartAdd } from 'react-icons/bi';

import { Product } from '../../../types/Product';

export const ProductCardH = ({ prod }: { prod: Product }) => (
  <Link
    href={{
      pathname: '/product',
      // eslint-disable-next-line no-underscore-dangle
      query: { name: prod?.name, id: prod?._id },
    }}
  >
    <div className="flex gap-[20px] group hover:shadow-productCardShadow cursor-pointer hover:border-0 border-r-[1px] border-gray-500 my-12  p-12">
      <Image src={prod?.files[0]} alt="" width={120} height={120} />
      <div className="flex flex-col gap-[10px]">
        <p className="text-gray-400 text-text-xs">{prod?.sousCategorie.name}</p>
        <h1 className="font-semibold text-blue-500 text-text-sm">
          {prod?.name}
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-text-xl font-medium">${prod?.price}</h1>
          <div className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center bg-gray-500 group-hover:bg-yellow-500">
            <BiCartAdd className="fill-white w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  </Link>
);
