import React, { useState } from 'react';
import 'swiper/css';

import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCardH } from '../../../shared/ProductCardH';

export const BestSellers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="w-full bg-white">
      <div className="w-full py-40 max-w-[1400px] mx-auto">
        <div className="w-full  ">
          <h1 className="border-b-2 text-text-xl pb-8 mb-8 border-yellow-500 w-min font-medium min-w-[120px]">
            Best Sellers
          </h1>
        </div>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        >
          <SwiperSlide>
            <div className="grid grid-cols-4 ">
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-4 ">
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-4 ">
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
              <ProductCardH />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full mx-auto mt-20 flex justify-center gap-[10px]">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => swiperInstance.slideTo(0)}
            className={`${
              activeIndex === 0
                ? 'bg-yellow-500 h-[10px] w-[50px]'
                : 'bg-gray-400 h-[10px] w-[10px]'
            }  rounded-full  cursor-pointer transition-all ease-in duration-400`}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => swiperInstance.slideTo(1)}
            className={`${
              activeIndex === 1
                ? 'bg-yellow-500 h-[10px] w-[50px]'
                : 'bg-gray-400 h-[10px] w-[10px] '
            }  rounded-full  cursor-pointer transition-all ease-in duration-400`}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => swiperInstance.slideTo(2)}
            className={`${
              activeIndex === 2
                ? 'bg-yellow-500 h-[10px] w-[50px]'
                : 'bg-gray-400 h-[10px] w-[10px] '
            }  rounded-full ]  cursor-pointer transition-all ease-in duration-400`}
          />
        </div>
      </div>
    </div>
  );
};
