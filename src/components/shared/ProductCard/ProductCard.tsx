import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiCartAdd } from 'react-icons/bi';

import { useCart } from '../../../context/Cart/CartContext';
import { Product } from '../../../types/Product';
import { Toast } from '../toast';

type Props = {
  data: Product;
};
export const ProductCard = ({ data }: Props) => {
  const { addItem } = useCart();
  const [success, setSuccess] = useState(false);
  const handleAddToCart = () => {
    addItem(
      {
        profit: data?.profit,
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
    setSuccess(true);
  };
  return (
    <div className="group relative h-[340px]  w-full overflow-hidden  border-b-[2px] border-r-[2px] border-gray-300 bg-white px-24 pb-40 pt-20 hover:z-[20]  hover:border-r-0 hover:shadow-productCardShadow ">
      <Toast
        success={success}
        error={false}
        text="Item Added to cart"
        errorMsgs={[]}
      />
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
        <h1 className="pb-8 text-text-sm font-semibold text-blue-500 ">
          {data?.name}
        </h1>

        <div className="flex h-[180px] w-[180px] items-center justify-center">
          <Image
            src={data?.files[0]}
            alt="product"
            width={180}
            height={180}
            className="max-h-[180px] max-w-[180px]   object-contain py-8"
          />
        </div>
      </Link>

      <div className="absolute bottom-[10px] w-[80%]">
        <div className=" flex w-full items-center  justify-between">
          <div
            className={`  ${data?.discount ? 'flex' : 'hidden'} flex flex-col`}
          >
            <h1 className="text-text-sm font-[500] text-gray-400 line-through  ">
              {data?.price} DT
            </h1>
            <h1 className="text-text-lg font-[500] text-green-400 ">
              {(data.price - (data.price / 100) * data.discount).toFixed(2)} DT
            </h1>
          </div>

          {!data.discount && (
            <h1 className="text-text-lg font-[500]">{data?.price} DT</h1>
          )}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={handleAddToCart}
            className="relative z-[99] flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-gray-500 group-hover:bg-yellow-500"
          >
            <BiCartAdd className="h-[20px] w-[20px] fill-white" />
          </div>
        </div>
      </div>

      <div
        className={`${
          data?.discount ? 'absolute' : 'hidden'
        }   right-0 top-0 bg-green-400 px-8 py-4 text-white`}
      >
        Sale {data?.discount}%
      </div>
    </div>
  );
};
