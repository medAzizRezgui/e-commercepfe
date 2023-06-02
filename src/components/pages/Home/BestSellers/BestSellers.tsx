import React, { useEffect, useState } from 'react';

import 'swiper/css';

import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { axiosPublic } from '../../../../pages/api/axios';
import { Order } from '../../../../types/Order';
import { Product } from '../../../../types/Product';
import { ProductCardH } from '../../../shared/ProductCardH';

export const BestSellers = ({ data }: { data: Product[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  let slots = 1;

  if (data?.length < 8) {
    slots = 1;
  } else if (data.length >= 8 && data.length <= 16) {
    slots = 2;
  } else {
    slots = 3;
  }

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      await axiosPublic
        .get('order/getAll')
        .then((r) => setOrders(r.data))
        .catch((e) => console.error(e));
    };

    getOrders();
  }, []);

  const [productCounts, setProductCounts] = useState<string[]>([]);

  // Count the products
  const countProducts = () => {
    const productIds: string[] = [];

    // Iterating over orders
    orders.forEach((order) => {
      // Iterating over products in each order
      order.Products.forEach((product) => {
        // Saving product id to the array
        productIds.push(product.id);
      });
    });

    setProductCounts(productIds);
  };

  useEffect(() => {
    countProducts();
  }, [orders, data]);
  console.log(productCounts);
  return (
    <div className="h-full w-full bg-white">
      <div className="mx-auto w-full max-w-[1400px] py-40">
        <div className="w-full">
          <h1 className="mb-8 w-min min-w-[120px] border-b-2 border-yellow-500 pb-8 text-text-xl font-medium">
            Best Sellers
          </h1>
        </div>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        >
          <SwiperSlide className="w-full">
            <div className="grid w-full grid-cols-4 ">
              {/* eslint-disable-next-line array-callback-return,consistent-return */}
              {data
                .filter((product) => productCounts.includes(product._id))
                .map((prod, i) => (
                  <ProductCardH prod={prod} />
                ))}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="w-full"> */}
          {/*  <div className="grid w-full grid-cols-4 "> */}
          {/*    /!* eslint-disable-next-line array-callback-return,consistent-return *!/ */}
          {/*    {data.map((prod, i) => { */}
          {/*      if (i >= 8 && i < 16) { */}
          {/*        return <ProductCardH prod={prod} />; */}
          {/*      } */}
          {/*    })} */}
          {/*  </div> */}
          {/* </SwiperSlide> */}
        </Swiper>
        <div className="mx-auto mt-20 flex w-full justify-center gap-[10px]">
          {slots >= 1 && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onClick={() => swiperInstance.slideTo(0)}
              className={`${
                activeIndex === 0
                  ? 'h-[10px] w-[50px] bg-yellow-500'
                  : 'h-[10px] w-[10px] bg-gray-400'
              }  cursor-pointer  rounded-full transition-all duration-300 ease-in`}
            />
          )}
          {slots >= 2 && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onClick={() => swiperInstance.slideTo(1)}
              className={`${
                activeIndex === 1
                  ? 'h-[10px] w-[50px] bg-yellow-500'
                  : 'h-[10px] w-[10px] bg-gray-400'
              }  cursor-pointer  rounded-full transition-all duration-300 ease-in`}
            />
          )}
          {slots >= 3 && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onClick={() => swiperInstance.slideTo(2)}
              className={`${
                activeIndex === 2
                  ? 'h-[10px] w-[50px] bg-yellow-500'
                  : 'h-[10px] w-[10px] bg-gray-400'
              }  cursor-pointer  rounded-full transition-all duration-300 ease-in`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
