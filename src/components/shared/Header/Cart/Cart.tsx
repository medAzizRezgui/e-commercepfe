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
      } z-[100] w-[300px] bg-white border-t-[3px] border-yellow-500 top-[50px] right-0 drop-shadow-md py-12 px-24 rounded-t-[4px] rounded-b-[12px]`}
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
                  {item.quantity} × ${item.price}
                </p>
              </div>
              <BiX
                onClick={() => removeItem(item.id, item.quantity)}
                className="w-[40px] h-[40px] fill-red-500 cursor-pointer"
              />
            </div>
          </div>
        ))
      )}
      <div />
      {cartItems.length > 0 && (
        <div className="flex items-center pt-24 gap-[20px]  justify-between">
          <button
            type="button"
            onClick={() => router.push('/cart')}
            className="bg-gray-300 text-text-sm w-full  rounded-full px-16 py-12"
          >
            View Cart
          </button>

          <button
            type="button"
            className="bg-yellow-500 text-text-sm w-full rounded-full px-16 py-12"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};
