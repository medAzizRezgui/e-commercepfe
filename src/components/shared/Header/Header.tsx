import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineUser,
} from 'react-icons/ai';

import { useCart } from '../../../context/Cart/CartContext';

import { Cart } from './Cart';
import { Categories } from './Categories';

export const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCart();
  const router = useRouter();

  // Used To Calculate the total price of cart items
  function calculateTotal() {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    return total.toFixed(2);
  }

  // Used To Calculate How Many items in the cart
  function calculateTotalItems() {
    return cartItems.reduce((acc) => acc + 1, 0);
  }

  const [searchWord, setSearchWord] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  // Link to shop page with search params in the query
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
    <div className="relative z-[20] flex h-[90px] w-full items-center bg-white">
      <div className="mx-auto flex  w-full max-w-[1400px]  items-center justify-between rounded-[50px] bg-white px-20 py-8 ">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-display-md font-bold text-dark-500 ">
            electro<span className="text-yellow-500">.</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex w-[55%] items-center justify-between rounded-[50px] border-2 border-yellow-500 bg-white">
          {/* Search Input */}
          <input
            value={searchWord}
            onChange={(event) => setSearchWord(event.currentTarget.value)}
            type="text"
            placeholder="Search for Products"
            className="rounded-l-[50px] bg-white px-32 py-4 text-text-sm text-dark-300 placeholder-gray-400 outline-0"
          />
          <div className="relative z-[999] flex items-center gap-[16px]">
            <Categories setSearchCategory={setSearchCategory} />
            <button
              type="button"
              onClick={handleSearch}
              className="flex h-full w-[60px] cursor-pointer items-center justify-center  rounded-r-[50px] bg-yellow-500 py-8"
            >
              <AiOutlineSearch className="h-[28px] w-[28px] text-dark-300" />
            </button>
          </div>
        </div>
        {/* CTA */}
        <div className="flex items-center gap-[40px]">
          <Link href="/shop">
            <AiOutlineShop className="h-[22px] w-[22px] text-dark-500" />
          </Link>
          <AiOutlineHeart className="h-[22px] w-[22px] text-dark-500" />
          <Link href="/account">
            <AiOutlineUser className="h-[22px] w-[22px] text-dark-500" />
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenCart(!openCart)}
              className="relative flex cursor-pointer  items-center gap-[4px] "
            >
              <div className="relative ">
                <span className="absolute bottom-[-7px] left-[12px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-yellow-500 text-text-xs font-semibold text-dark-500">
                  {calculateTotalItems()}
                </span>
                <AiOutlineShopping className="h-[28px] w-[28px] text-dark-500" />
              </div>
              <h1 className="text-text-md font-semibold text-dark-500">
                ${calculateTotal()}
              </h1>
            </button>

            {/* Cart */}
            <Cart openCart={openCart} />
          </div>
        </div>
      </div>
    </div>
  );
};
