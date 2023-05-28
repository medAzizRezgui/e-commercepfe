import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useCart } from '../../../../../context/Cart/CartContext';
import { Product } from '../../../../../types/Product';

type Props = {
  item: Product;
};
export const HeroItem = ({ item }: Props) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(
      {
        image: item?.files[0],
        name: item?.name,
        // eslint-disable-next-line no-underscore-dangle
        id: item?._id,
        price: item.discount
          ? item.price - (item.price / 100) * item.discount
          : item?.price,
        quantity: 1,
      },
      1
    );
  };

  return (
    <div className="relative flex w-[40%] flex-col justify-between border-r-[1px] border-gray-500 bg-white p-24">
      <Link
        className="cursor-pointer"
        href={{
          pathname: '/product',
          // eslint-disable-next-line no-underscore-dangle
          query: { name: item.name, id: item._id },
        }}
      >
        <div>
          <p className="text-text-xs text-gray-400 ">
            {item.sousCategorie.name}
          </p>
          <h1 className="text-text-lg font-semibold text-blue-500 ">
            {item.name}
          </h1>
        </div>

        <div>
          <Image
            src={item.files[0]}
            alt=""
            width={100}
            height={100}
            className="mx-auto my-40 w-[70%] "
          />

          <div className="flex gap-[10px]">
            {item.files.map((img) => (
              <Image
                src={img}
                alt=""
                width={100}
                height={100}
                className="border-[1px] border-gray-500"
              />
            ))}
          </div>
        </div>
      </Link>
      <div className="flex  w-full items-center justify-between">
        <h1 className="text-text-xl font-semibold">90 DT</h1>
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-full bg-yellow-500 px-24 py-8 font-medium text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
