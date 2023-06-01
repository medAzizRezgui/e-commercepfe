import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Product } from '../../../../../types/Product';

type Props = {
  prod: Product;
};
export const Images = ({ prod }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (i: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
            <div className="flex h-[400px] max-h-[400px] w-[400px] max-w-[400px] items-center justify-center ">
              <Image
                src={img}
                alt=""
                width={350}
                height={350}
                className="max-h-[350px] max-w-[350px]  object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto flex w-[80%] items-center justify-start ">
        {prod?.files?.map((img, i) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            className={`${
              activeIndex === i
                ? 'border-t-8 border-yellow-500'
                : 'border-t-8 border-white'
            }  flex  h-[75px] w-[75px] cursor-pointer items-center justify-center`}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => handleClick(i)}
          >
            <Image
              src={img}
              alt=""
              height={50}
              width={50}
              className="max-h-[50px] max-w-[50px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
