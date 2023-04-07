import React from 'react';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperItem } from './SwiperItem';

export const HeroSwiper = () => (
  <div className="w-[80%] h-[422px]">
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <SwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem />
      </SwiperSlide>
    </Swiper>
  </div>
);
