import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCartAdd } from 'react-icons/bi';

import { useCart } from '../../../context/Cart/CartContext';
import { Product } from '../../../types/Product';

type Props = {
  data: Product;
};
export const ProductCard = ({ data }: Props) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(
      {
        image: data?.files[0],
        name: data?.name,
        // eslint-disable-next-line no-underscore-dangle
        id: data?._id,
        price: data.discount
          ? data.price - (data.price / 100) * data.discount
          : data?.price,
        quantity: 1,
      },
      1
    );
  };
  return (
    <div className="pt-20 pb-40 px-24 h-[340px] group bg-white hover:shadow-productCardShadow border-r-[2px] border-b-[2px] hover:z-[20] border-gray-300 hover:border-r-0  w-full relative ">
      <Link
        className="cursor-pointer"
        href={{
          pathname: '/product',
          // eslint-disable-next-line no-underscore-dangle
          query: { name: data?.name, id: data?._id },
        }}
      >
        <p className="text-text-xs text-gray-400 ">
          {data && data.sousCategorie?.name}
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
      </Link>
      <div className="flex items-center  justify-between">
        <div
          className={`  ${data?.discount ? 'flex' : 'hidden'} flex flex-col`}
        >
          <h1 className="font-[500] text-text-sm text-gray-400 line-through  ">
            {data?.price} DT
          </h1>
          <h1 className="font-[500] text-text-lg text-green-400 ">
            {data?.price - (data?.price / 100) * data?.discount} DT
          </h1>
        </div>

        {!data.discount && (
          <h1 className="font-[500] text-text-lg">{data?.price} DT</h1>
        )}
        <div
          onClick={handleAddToCart}
          className="w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center relative z-[99] bg-gray-500 group-hover:bg-yellow-500"
        >
          <BiCartAdd className="fill-white w-[20px] h-[20px]" />
        </div>
      </div>

      <div
        className={`${
          data?.discount ? 'absolute' : 'hidden'
        }   top-0 right-0 bg-green-400 text-white py-4 px-24`}
      >
        Sale
      </div>
    </div>
  );
};
