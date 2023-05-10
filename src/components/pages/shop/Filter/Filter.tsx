import * as Slider from '@radix-ui/react-slider';
import React, { useState } from 'react';

export const Filter = () => {
  const [price, setPrice] = useState([0, 100]);
  return (
    <>
      <div className="py-32">
        <h1 className="text-text-lg pb-8">Filters</h1>
        <div className="w-full bg-gray-500 relative h-[2px] rounded-full">
          <div className="w-[70px] absolute bg-yellow-500 h-[2px] rounded-full" />
        </div>
      </div>
      <div className="pb-8 border-b-2 border-gray-500">
        <h1 className="font-semibold py-18 text-text-sm">Brands</h1>
        <div className="flex pb-8 items-center gap-[8px]">
          <input type="checkbox" />
          <p className="text-text-sm">
            Apple <span className="text-text-xs text-gray-400">(4)</span>
          </p>
        </div>
        <div className="flex pb-8 items-center gap-[8px]">
          <input type="checkbox" />
          <p className="text-text-sm">
            Apple <span className="text-text-xs text-gray-400">(4)</span>
          </p>
        </div>
        <div className="flex pb-8 items-center gap-[8px]">
          <input type="checkbox" />
          <p className="text-text-sm">
            Apple <span className="text-text-xs text-gray-400">(4)</span>
          </p>
        </div>
      </div>
      <div className="pb-8 border-b-2 border-gray-500">
        <h1 className="font-semibold py-18 text-text-sm">Colors</h1>
        <div className="flex pb-8 items-center gap-[8px]">
          <input type="checkbox" />
          <p className="text-text-sm">
            Green <span className="text-text-xs text-gray-400">(4)</span>
          </p>
        </div>
        <div className="flex pb-8 items-center gap-[8px]">
          <input type="checkbox" />
          <p className="text-text-sm">
            Red <span className="text-text-xs text-gray-400">(4)</span>
          </p>
        </div>
        <div className="flex pb-8 items-center gap-[8px]">
          <input type="checkbox" />
          <p className="text-text-sm">
            Yellow <span className="text-text-xs text-gray-400">(4)</span>
          </p>
        </div>
      </div>
      <div className="pb-8 border-b-2 border-gray-500">
        <h1 className="font-semibold grow py-18 text-text-sm">Price</h1>
        <Slider.Root
          className="SliderRoot"
          defaultValue={[0, 100]}
          max={100}
          step={5}
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
        <p className="font-medium text-text-sm py-8 text-gray-400">
          Price : ${price[0]} - ${price[1]}
        </p>
      </div>
      <button
        type="button"
        className="block my-20 px-24 py-4 bg-gray-500 font-medium text-text-md rounded-[8px]"
      >
        Filter
      </button>
    </>
  );
};
