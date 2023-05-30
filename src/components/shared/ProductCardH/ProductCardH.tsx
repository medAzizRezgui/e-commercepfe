import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiCartAdd } from 'react-icons/bi';

import { useCart } from '../../../context/Cart/CartContext';
import { Product } from '../../../types/Product';
import { Toast } from '../toast';

export const ProductCardH = ({ prod }: { prod: Product }) => {
  const { addItem } = useCart();
  const [success, setSuccess] = useState(false);
  const handleAddToCart = async () => {
    await setSuccess(true);
    await addItem(
      {
        image: prod?.files[0],
        name: prod?.name,
        // eslint-disable-next-line no-underscore-dangle
        id: prod?._id,
        price: prod.discount
          ? prod.price - (prod.price / 100) * prod.discount
          : prod?.price,
        quantity: 1,
      },
      1
    );
  };
  return (
    <>
      <Toast
        success={success}
        error={false}
        text="Item Added to cart"
        errorMsgs={[]}
      />
      <div className="group my-12 flex cursor-pointer gap-[20px] border-r-[1px] border-gray-500 p-12 hover:border-0  hover:shadow-productCardShadow">
        <Image src={prod?.files[0]} alt="" width={120} height={120} />
        <div className="flex flex-col gap-[10px]">
          <Link
            href={{
              pathname: '/product',
              // eslint-disable-next-line no-underscore-dangle
              query: { name: prod?.name, id: prod?._id },
            }}
          >
            <div>
              <p className="text-text-xs text-gray-400">
                {prod?.sousCategorie?.name || ''}
              </p>
              <h1 className="text-text-sm font-semibold text-blue-500">
                {prod?.name}
              </h1>
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-text-xl font-medium">${prod?.price}</h1>
            <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-gray-500 group-hover:bg-yellow-500">
              <BiCartAdd
                onClick={handleAddToCart}
                className="relative z-[9999] h-[20px] w-[20px] fill-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
