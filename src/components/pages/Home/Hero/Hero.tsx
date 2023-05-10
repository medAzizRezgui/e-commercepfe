import Image from 'next/image';
import React from 'react';

import 'swiper/css';
import HeroBg from '@/images/HeroBg.jpg';

import { HeroSwiper } from '../HeroSwiper';

export const Hero = () => (
  <div className="h-[422px] relative w-full bg-hero bg-cover bg-center">
    <div className="absolute h-[422px] z-[-1] right-0">
      <Image src={HeroBg} alt="" className="h-[422px] object-cover " />
    </div>
    <div className="max-w-[1400px] w-full flex h-full mx-auto">
      <div className="w-[20%] px-24 py-12 h-min rounded-b-[8px] bg-white">
        <h1 className="font-medium py-8 border-b-[1px] border-gray-500 border-gray-100border-gray-100text-text-sm">
          Valeur de Jour
        </h1>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Téléphone & Tablette
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Cuisine & Électroménager
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Santé & Beauté
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Électroniques
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">Mode</p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Maison & Bureau
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Informatique
        </p>
        <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
          Jeux videos & Consoles{' '}
        </p>
      </div>
      {/*  Swiper */}
      <HeroSwiper />
    </div>
  </div>
);
