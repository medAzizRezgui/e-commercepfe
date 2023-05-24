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
    <div className="w-[40%] p-24 relative bg-white border-r-[1px] flex flex-col justify-between border-gray-500">
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
          <h1 className="font-semibold text-blue-500 text-text-lg ">
            {item.name}
          </h1>
        </div>

        <div>
          <Image
            src={item.files[0]}
            alt=""
            width={100}
            height={100}
            className="w-[70%] mx-auto my-40 "
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
      <div className="w-full  flex items-center justify-between">
        <h1 className="text-text-xl font-semibold">90 DT</h1>
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 text-white font-medium px-24 py-8 rounded-full"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
