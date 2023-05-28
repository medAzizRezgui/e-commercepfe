import Image from 'next/image';
import React from 'react';

import { Order } from '../../../../types/Order';

type Props = {
  orders: Order[];
};
export const AdminOrders = ({ orders }: Props) => (
  <div className="w-full">
    <div className="flex items-center justify-between border-b-2 border-gray-500 pb-8">
      <h1 className="w-[150px]">Client</h1>
      <h1 className="w-[400px]">Products</h1>
      <h1 className="w-[100px]">Payment</h1>
      <h1 className="w-[150px]">Delivery</h1>
      <h1 className="w-[100px]">Coupon</h1>
      <h1 className="w-[100px] text-right">Price</h1>
    </div>
    {orders?.map((order) => (
      <div className="flex w-full items-center justify-between border-b-2 border-gray-500 pb-8">
        <h1 className="w-[150px]">{order.fullname}</h1>
        <div>
          {order.Products.map((prod) => (
            <div className="flex w-[400px] items-center justify-start gap-[10px]">
              <Image
                loading="eager"
                src={prod?.image}
                width={50}
                height={50}
                alt=""
              />
              <h1>{prod.name}</h1>
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
          {order.totalPrice.toFixed(2)} DT
        </h1>
      </div>
    ))}
  </div>
);
