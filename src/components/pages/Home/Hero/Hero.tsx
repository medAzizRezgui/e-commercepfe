import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import 'swiper/css';
import HeroBg from '@/images/HeroBg.jpg';

import { HeroSwiper } from '../HeroSwiper';

import axios from 'axios';
import Link from 'next/link';

export const Hero = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/categorie/getall'
      ); // replace with your API endpoint
      const transformedOptions = response.data.map((option: any) => ({
        // eslint-disable-next-line no-underscore-dangle
        value: option._id,
        label: option.name,
      }));
      setOptions(transformedOptions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="h-[444px] w-full  bg-cover bg-center">
      <div className="absolute h-[444px] z-[-1] top-0 right-0">
        <Image src={HeroBg} alt="" className="h-[570px] object-cover " />
      </div>
      <div className="max-w-[1400px] w-full flex h-full mx-auto">
        <div className="w-[20%] px-24 py-12 h-min rounded-b-[8px] bg-white">
          <h1 className="font-medium py-8 border-b-[1px] border-gray-500 border-gray-100border-gray-100text-text-sm">
            Valeur de Jour
          </h1>
          {options.map((item) => (
            <Link
              href={{
                pathname: '/shop',
                // eslint-disable-next-line no-underscore-dangle
                query: { category: item.value },
              }}
            >
              <p className="text-text-sm py-8 border-b-[1px] border-gray-500">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        {/*  Swiper */}
        <HeroSwiper />
      </div>
    </div>
  );
};
