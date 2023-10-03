import React from 'react';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperItem } from './SwiperItem';
import { SwiperItemSecond } from './SwiperItemSecond';
import { SwiperItemThird } from './SwiperItemThird';

export const HeroSwiper = () => (
  <div className="h-[422px] w-[80%]">
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

      {/* <SwiperSlide> */}
      {/*   <SwiperItemSecond /> */}
      {/* </SwiperSlide> */}
      {/* <SwiperSlide> */}
      {/*   <SwiperItemThird /> */}
      {/* </SwiperSlide> */}
    </Swiper>
  </div>
);
