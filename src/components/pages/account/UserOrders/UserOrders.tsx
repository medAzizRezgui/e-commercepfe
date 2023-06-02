import Image from 'next/image';
import React from 'react';

import { Order } from '../../../../types/Order';

type Props = {
  orders: Order[];
  userEmail: string;
};
export const UserOrders = ({ orders, userEmail }: Props) => (
  <div className="w-full">
    <div className="flex items-center justify-between border-b-2 border-gray-500 pb-8">
      <h1 className="w-[400px]">Products</h1>
      <h1 className="w-[100px]">Payment</h1>
      <h1 className="w-[150px]">Delivery</h1>
      <h1 className="w-[100px]">Coupon</h1>
      <h1 className="w-[100px] text-right">Price</h1>
    </div>
    {orders
      ?.filter((order) => order.email === userEmail)
      .map((order) => (
        <div className="flex w-full items-center justify-between border-b-2 border-gray-500 pb-8">
          <div>
            {order.Products.map((prod) => (
              <div className="flex w-[400px] items-center justify-start">
                <Image
                  loading="eager"
                  src={prod?.image}
                  width={50}
                  height={50}
                  alt=""
                  className="m-8 max-h-[50px] max-w-[50px] object-contain"
                />
                <h1 className="border-l-2 border-gray-500 pl-8">{prod.name}</h1>
              </div>
            ))}
          </div>
          <h1
            className={` ${
              order.isPaid ? 'bg-green-500' : ' bg-red-500'
            }  w-[100px] rounded-full py-4 text-center text-white`}
          >
            {order.isPaid ? 'Paid' : 'Not Paid'}
          </h1>
          <h1 className="w-[150px] rounded-full bg-red-500 py-4 text-center text-white">
            {order.isDelivered ? 'Delivered' : 'Not Delivered'}
          </h1>
          <h1 className="w-[100px]">{order.coupon}</h1>
          <h1 className="w-[100px] text-right font-semibold ">
            {order.totalPrice} DT
          </h1>
        </div>
      ))}
  </div>
);
