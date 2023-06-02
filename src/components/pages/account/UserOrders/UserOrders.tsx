import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { Order } from '../../../../types/Order';

type Props = {
  orders: Order[];
  userEmail: string;
};
export const UserOrders = ({ orders, userEmail }: Props) => {
  const router = useRouter();
  const handlePay = (orderId: string) => {
    const url = 'https://www.rezgui-aziz.me/api/generatePayment';

    const requestData = {
      app_token: '955ddff9-f0e3-4e8e-8b74-ab30e3b53edf',
      app_secret: 'da3f95a4-2fd5-4c8c-8c49-7cac799e2433',
      amount: 3000,
      accept_card: true,
      session_timeout_secs: 1200,
      success_link: `https://www.rezgui-aziz.me/success?orderId=${orderId}`,
      fail_link: 'https://www.rezgui-aziz.me/shop',
      developer_tracking_id: 'bgyt529J0Uk',
    };

    axios
      .post(url, requestData, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle the response here
        router.push(response.data.result.link);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b-2 border-gray-500 pb-8">
        <h1 className="w-[400px]">Products</h1>
        <h1 className="w-[100px]">Payment</h1>
        <h1 className="w-[150px]">Delivery</h1>
        <h1 className="w-[100px]">Coupon</h1>
        <h1 className="w-[100px] ">Price</h1>
        <h1 className="w-[100px] text-center">Pay</h1>
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
                  <h1 className="border-l-2 border-gray-500 pl-8">
                    {prod.name}
                  </h1>
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
            <button
              onClick={() => handlePay(order._id)}
              disabled={order.isPaid}
              type="button"
              className="w-[100px] cursor-pointer rounded-[8px] bg-yellow-500 py-8 text-center text-dark-500"
            >
              Pay
            </button>
          </div>
        ))}
    </div>
  );
};
