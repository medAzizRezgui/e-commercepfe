import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BiX } from 'react-icons/bi';

import { useCart } from '../../../../context/Cart/CartContext';

export const Cart = ({ openCart }: { openCart: boolean }) => {
  const { cartItems, removeItem } = useCart();
  const router = useRouter();
  return (
    <div
      className={`${
        openCart ? 'absolute' : 'hidden'
      } right-0 top-[50px] z-[100] w-[300px] rounded-b-[12px] rounded-t-[4px] border-t-[3px] border-yellow-500 bg-white px-24 py-12 drop-shadow-md`}
    >
      {cartItems.length <= 0 ? (
        <h1 className="py-18">No products in the cart.</h1>
      ) : (
        cartItems.map((item) => (
          <div className="flex justify-between gap-[20px] ">
            <div className="w-[80%]  ">
              <Image src={item.image} alt="" width={75} height={75} />
            </div>
            <div className="flex">
              <div>
                <h1 className="text-text-sm font-semibold text-blue-500">
                  {item.name}
                </h1>
                <p className="text-text-sm">
                  {(item.quantity * item.price).toFixed(2)} DT
                </p>
              </div>
              <BiX
                onClick={() => removeItem(item.id, item.quantity)}
                className="h-[40px] w-[40px] cursor-pointer fill-red-500"
              />
            </div>
          </div>
        ))
      )}
      <div />
      {cartItems.length > 0 && (
        <div className="flex items-center justify-between gap-[20px]  pt-24">
          <button
            type="button"
            onClick={() => router.push('/cart')}
            className="w-full rounded-full bg-gray-300  px-16 py-12 text-text-sm"
          >
            View Cart
          </button>
          <button
            onClick={() => router.push('/checkout')}
            type="button"
            className="w-full rounded-full bg-yellow-500 px-16 py-12 text-text-sm"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};
