import React, { useState } from 'react';
import { BiCartAdd } from 'react-icons/bi';

import { useCart } from '../../../../../context/Cart/CartContext';
import { Product } from '../../../../../types/Product';
import { Toast } from '../../../../shared/toast';

type Props = {
  prod: Product;
};
export const CTA = ({ prod }: Props) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);
  const handleAddToCart = () => {
    addItem(
      {
        image: prod?.files[0],
        profit: prod?.profit,
        name: prod?.name,
        // eslint-disable-next-line no-underscore-dangle
        id: prod?._id,
        price: prod.discount
          ? prod.price - (prod.price / 100) * prod.discount
          : prod?.price,
        quantity: 1,
      },
      quantity
    );
    setSuccess(true);
  };
  return (
    <div className="flex h-full flex-col gap-[20px]  rounded-[12px]  border-[2px] border-dark-100 p-32">
      <Toast
        success={success}
        error={false}
        text="Item Added to cart"
        errorMsgs={[]}
      />
      <p className="border-b-[1px] border-dark-100 font-[600] text-green-400 ">
        <span className="text-text-sm font-regular text-gray-400">
          Availability:{' '}
        </span>
        {prod?.countInStock} in stock
      </p>

      <div className={`${prod.discount ? 'flex' : 'hidden'}    items-baseline`}>
        <h1 className="text-display-sm font-[500] text-green-400">
          {(prod.price - (prod.price / 100) * prod.discount).toFixed(2)} DT
        </h1>
        <h1 className="text-text-xl font-[400] text-gray-400 line-through">
          {prod.price} DT
        </h1>
      </div>

      {!prod.discount && (
        <h1 className="text-display-sm font-[500]">{prod.price} DT</h1>
      )}
      <input
        min={1}
        max={prod?.countInStock}
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.currentTarget.value, 10))}
        className="block max-w-[60%] rounded-full border-[1px] border-gray-400 px-16 py-4"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => handleAddToCart()}
        className="flex cursor-pointer items-center gap-[12px] rounded-full bg-yellow-500 px-58 py-18 text-white"
      >
        <span>
          <BiCartAdd className="h-[24px] w-[24px]" />
        </span>
        Add to cart
      </button>
    </div>
  );
};
