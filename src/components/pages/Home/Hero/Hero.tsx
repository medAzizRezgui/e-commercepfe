import React from 'react';

import 'swiper/css';

import { HeroSwiper } from '../HeroSwiper';

export const Hero = () => (
  <div className="h-[422px] w-full bg-gray-500">
    <div className="max-w-[1400px] w-full flex h-full mx-auto">
      <div className="w-[20%] px-24 py-12 h-[95%] rounded-b-[8px] bg-white">
        <h1>hh</h1>
      </div>
      {/*  Swiper */}
      <HeroSwiper />
    </div>
  </div>
);
