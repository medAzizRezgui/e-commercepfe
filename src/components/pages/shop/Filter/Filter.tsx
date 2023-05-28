import * as Slider from '@radix-ui/react-slider';
import React from 'react';

import { Product } from '../../../../types/Product';

type Props = {
  data: Product[];
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
};
export const Filter = ({ data, setPrice, price }: Props) => (
  <>
    <div className="py-32">
      <h1 className="pb-8 text-text-lg">Filters</h1>
      <div className="relative h-[2px] w-full rounded-full bg-gray-500">
        <div className="absolute h-[2px] w-[70px] rounded-full bg-yellow-500" />
      </div>
    </div>
    <div className="border-b-2 border-gray-500 pb-8">
      <h1 className="grow py-18 text-text-sm font-semibold">Price</h1>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[
          data.reduce((min, item) => (item.price < min.price ? item : min))
            .price,
          data.reduce((max, item) => (item.price > max.price ? item : max))
            .price,
        ]}
        max={
          data.reduce((max, item) => (item.price > max.price ? item : max))
            .price
        }
        min={
          data.reduce((min, item) => (item.price < min.price ? item : min))
            .price
        }
        step={10}
        value={price}
        minStepsBetweenThumbs={1}
        onValueChange={(e) => setPrice(e)}
        aria-label="Volume"
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb min" />
        <Slider.Thumb className="SliderThumb max" />
      </Slider.Root>
      <p className="py-8 text-text-sm font-medium text-gray-400">
        Price : ${price[0]} - ${price[1]}
      </p>
    </div>
  </>
);
