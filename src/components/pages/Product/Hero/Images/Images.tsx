import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Product } from '../../../../../types/Product';

type Props = {
  prod: Product;
};
export const Images = ({ prod }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (i) => {
    swiperInstance.slideTo(i);
    setActiveIndex(i);
  };
  return (
    <div className="w-[500px]">
      {/*  Image */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {prod?.files?.map((img) => (
          <SwiperSlide>
            <Image src={img} alt="" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center w-[80%] mx-auto justify-start ">
        {prod?.files?.map((img, i) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            className={`${
              activeIndex === i
                ? 'border-t-8 border-yellow-500'
                : 'border-t-8 border-white'
            }  w-[75px]  h-[75px] flex items-center justify-center`}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => handleClick(i)}
          >
            <Image src={img} alt="" height={75} width={75} />
          </div>
        ))}
      </div>
    </div>
  );
};
