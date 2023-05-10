import React, { useState } from 'react';
import { BiCartAdd, BiHeart } from 'react-icons/bi';

import { useCart } from '../../../../../context/Cart/CartContext';
import { Product } from '../../../../../types/Product';

type Props = {
  prod: Product;
};
export const CTA = ({ prod }: Props) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [popUp, setPopUp] = useState(false);
  const handleAddToCart = () => {
    addItem(
      {
        image: prod?.files[0],
        name: prod?.name,
        // eslint-disable-next-line no-underscore-dangle
        id: prod?._id,
        price: prod?.price,
        quantity: 1,
      },
      quantity
    );
    setPopUp(true);
  };
  return (
    <div className="border-[2px] h-full flex flex-col  gap-[20px]  border-dark-100 rounded-[12px] p-32">
      <p className="border-b-[1px] border-dark-100 text-green-400 font-[600] ">
        <span className="text-text-sm text-gray-400 font-regular">
          Availability:{' '}
        </span>
        {prod?.countInStock} in stock
      </p>
      <h1 className="font-[500] text-display-sm">${prod?.price}</h1>
      <input
        min={1}
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.currentTarget.value, 10))}
        className="block border-[1px] border-gray-400 rounded-full py-4 px-16 max-w-[60%]"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => handleAddToCart()}
        className="bg-yellow-500 flex items-center gap-[12px] text-white px-58 py-18 rounded-full"
      >
        <span>
          <BiCartAdd className="w-[24px] h-[24px]" />
        </span>
        Add to cart
      </button>
      <div className="w-full bg-white">
        <div className="mx-auto   w-[100%] flex items-center  justify-between">
          <div className="flex items-center gap-[4px] w-full cursor-pointer">
            <BiHeart />
            <h1>Wishlist</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
