import Link from 'next/link';
import React, { useState } from 'react';
import { BiHeart, BiSearch, BiShoppingBag, BiUser } from 'react-icons/bi';

import { useCart } from '../../../context/Cart/CartContext';
import Logo from '../Logo';

import { Cart } from './Cart';
import { Categories } from './Categories';

export const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCart();

  function calculateTotal() {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    return total.toFixed(2);
  }

  function calculateTotalItems() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <div className="max-w-[1400px] my-20 justify-between flex items-center w-full rounded-[50px] mx-auto py-8 px-20 bg-dark-500 ">
      <Link href="/">
        <Logo />
      </Link>

      {/* Input */}
      <div className="flex items-center w-[50%] justify-between rounded-[50px] bg-dark-400">
        <input
          type="text"
          placeholder="Search for Products"
          className=" px-32 py-4 bg-dark-400 text-text-md placeholder-dark-100 rounded-l-[50px] outline-0 text-white"
        />
        <div className="flex gap-[16px] relative z-[999] items-center">
          <Categories />

          <div className="rounded-r-[50px] py-8 flex cursor-pointer items-center justify-center  h-full bg-yellow-500 w-[56px]">
            <BiSearch className="text-white w-[28px] h-[28px]" />
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="flex items-center gap-[24px]">
        <Link href="/shop">
          <h1 className="font-medium text-white">Shop</h1>
        </Link>
        <BiHeart className="text-white w-[28px] h-[28px]" />
        <Link href="/account">
          <BiUser className="text-white w-[28px] h-[28px]" />
        </Link>
        <div className="relative">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => setOpenCart(!openCart)}
            className="flex items-center cursor-pointer  gap-[4px] relative "
          >
            <div className="relative ">
              <span className="absolute text-black bottom-[-7px] left-[12px] text-text-xs font-semibold rounded-full bg-yellow-500 w-[18px] flex items-center justify-center h-[18px]">
                {calculateTotalItems()}
              </span>
              <BiShoppingBag className="text-white w-[28px] h-[28px]" />
            </div>
            <h1 className="text-white font-medium text-text-md">
              ${calculateTotal()}
            </h1>
          </div>

          {/* Cart */}
          <Cart openCart={openCart} />
        </div>
      </div>
    </div>
  );
};
