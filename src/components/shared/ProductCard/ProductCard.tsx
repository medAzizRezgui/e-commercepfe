import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCartAdd, BiHeart } from 'react-icons/bi';

import { Product } from '../../../types/Product';

type Props = {
  data: Product;
};
export const ProductCard = ({ data }: Props) => (
  <Link
    href={{
      pathname: '/product',
      // eslint-disable-next-line no-underscore-dangle
      query: { name: data?.name, id: data?._id },
    }}
  >
    <div className="pt-20 pb-40 px-24 group bg-white hover:shadow-productCardShadow border-r-[2px] border-b-[2px] hover:z-[20] border-gray-300 hover:border-r-0 cursor-pointer w-full relative ">
      <p className="text-text-xs text-gray-400 ">
        {data && data.sousCategorie}
      </p>
      <h1 className="font-semibold text-blue-500 text-text-sm ">
        {data?.name}
      </h1>

      <Image
        src={data?.files[0]}
        alt="product"
        width={200}
        height={200}
        className="mx-auto"
      />
      <div className="flex items-center  justify-between">
        <h1 className="font-[500] text-text-lg">${data?.price}</h1>
        <div className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center bg-gray-500 group-hover:bg-yellow-500">
          <BiCartAdd className="fill-white w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="absolute left-0 h-[70px] z-[10]  bottom-[-30px]  group-hover:shadow-productCardShadowTop pt-20 w-full hidden group-hover:block bg-white">
        <div className="mx-auto px-24  w-[100%] flex items-center  justify-between">
          <div className="flex items-center gap-[4px]  border-t-[1px] py-12 border-gray-300   w-full cursor-pointer">
            <BiHeart />
            <h1>Wishlist</h1>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
