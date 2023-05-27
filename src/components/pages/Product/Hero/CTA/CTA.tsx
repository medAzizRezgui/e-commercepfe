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
        price: prod.discount
          ? (prod.price - (prod.price / 100) * prod.discount).toFixed(2)
          : (prod?.price).toFixed(2),
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

      <div className={`${prod.discount ? 'flex' : 'hidden'}    items-baseline`}>
        <h1 className="font-[500] text-display-sm text-green-400">
          {(prod.price - (prod.price / 100) * prod.discount).toFixed(2)} DT
        </h1>
        <h1 className="font-[400] text-text-xl text-gray-400 line-through">
          {prod.price} DT
        </h1>
      </div>

      {!prod.discount && (
        <h1 className="font-[500] text-display-sm">{prod.price} DT</h1>
      )}
      <input
        min={1}
        max={prod?.countInStock}
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
    </div>
  );
};
