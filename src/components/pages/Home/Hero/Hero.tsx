import React from 'react';

import 'swiper/css';

import { HeroSwiper } from '../HeroSwiper';

export const Hero = () => (
  <div className="h-[422px] w-full bg-gray-500">
    <div className="max-w-[1400px] w-full flex h-full mx-auto">
      <div className="w-[20%] px-24 py-12 h-[95%] rounded-b-[8px] bg-white">
        <h1 className="font-medium py-8 border-b-[1px] border-dark-400 border-gray-100border-gray-100text-text-sm">
          Valeur de Jour
        </h1>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-dark-400">
          Téléphone & Tablette
        </p>

        <p className="text-text-sm py-8 ">Téléphone & Tablette</p>
      </div>
      {/*  Swiper */}
      <HeroSwiper />
    </div>
  </div>
);
