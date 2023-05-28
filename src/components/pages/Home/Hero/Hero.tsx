import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import 'swiper/css';
import HeroBg from '@/images/HeroBg.jpg';

import axiosProduction from '../../../../pages/api/axios';
import { HeroSwiper } from '../HeroSwiper';

export const Hero = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const fetchCategories = async () => {
    try {
      const response = await axiosProduction.get('/categorie/getall'); //
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
      <div className="absolute right-0 top-0 z-[-1] h-[444px]">
        <Image src={HeroBg} alt="" className="h-[570px] object-cover " />
      </div>
      <div className="mx-auto flex h-full w-full max-w-[1400px]">
        <div className="h-min w-[20%] rounded-b-[8px] bg-white px-24 py-12">
          {options.map((item) => (
            <Link
              href={{
                pathname: '/shop',
                // eslint-disable-next-line no-underscore-dangle
                query: { category: item.value },
              }}
            >
              <p className="border-b-[1px] border-gray-500 py-8 text-text-sm">
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
