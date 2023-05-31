import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiSearch, BiShoppingBag, BiUser } from 'react-icons/bi';

import { useCart } from '../../../context/Cart/CartContext';
import Logo from '../Logo';

import { Cart } from './Cart';
import { Categories } from './Categories';

export const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCart();
  const router = useRouter();

  function calculateTotal() {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    return total.toFixed(2);
  }

  function calculateTotalItems() {
    return cartItems.reduce((acc) => acc + 1, 0);
  }

  const [searchWord, setSearchWord] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const handleSearch = () => {
    router.push({
      pathname: '/shop',
      query: {
        word: searchWord,
        category: searchCategory,
      },
    });
  };
  return (
    <div className="relative z-[20] mx-auto my-20 flex w-full max-w-[1400px] items-center justify-between rounded-[50px] bg-dark-500 px-20 py-8 ">
      <Link href="/">
        <h1 className="text-display-md font-semibold text-white">
          LOGO <span className="text-yellow-500">.</span>
        </h1>
      </Link>

      {/* Input */}
      <div className="flex w-[50%] items-center justify-between rounded-[50px] bg-dark-400">
        <input
          value={searchWord}
          onChange={(event) => setSearchWord(event.currentTarget.value)}
          type="text"
          placeholder="Search for Products"
          className=" rounded-l-[50px] bg-dark-400 px-32 py-4 text-text-md text-white placeholder-dark-100 outline-0"
        />
        <div className="relative z-[999] flex items-center gap-[16px]">
          <Categories setSearchCategory={setSearchCategory} />

          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={handleSearch}
            className="flex h-full w-[56px] cursor-pointer items-center justify-center  rounded-r-[50px] bg-yellow-500 py-8"
          >
            <BiSearch className="h-[28px] w-[28px] text-white" />
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="flex items-center gap-[24px]">
        <Link href="/shop">
          <h1 className="font-medium text-white">Shop</h1>
        </Link>
        <Link href="/account">
          <BiUser className="h-[28px] w-[28px] text-white" />
        </Link>
        <div className="relative">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => setOpenCart(!openCart)}
            className="relative flex cursor-pointer  items-center gap-[4px] "
          >
            <div className="relative ">
              <span className="absolute bottom-[-7px] left-[12px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-yellow-500 text-text-xs font-semibold text-dark-500">
                {calculateTotalItems()}
              </span>
              <BiShoppingBag className="h-[28px] w-[28px] text-white" />
            </div>
            <h1 className="text-text-md font-medium text-white">
              {calculateTotal()} DT
            </h1>
          </div>

          {/* Cart */}
          <Cart openCart={openCart} />
        </div>
      </div>
    </div>
  );
};
