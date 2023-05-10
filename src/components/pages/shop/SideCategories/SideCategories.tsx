import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

export const SideCategories = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="py-18 w-full border-2 max-h-min border-gray-500 rounded-[12px]">
      <h1 className="text-text-sm px-24 border-b-2 pb-18 border-gray-500">
        Browse Categories
      </h1>
      <div className="px-12 w-full">
        <div className="w-full border-b-[1px] py-8 border-gray-500 ">
          <div className="flex items-center gap-[8px]">
            <BiChevronRight onClick={() => setShow(!show)} />
            <p className="text-text-sm">
              Téléphone & Tablette{' '}
              <span className="text-text-xs text-gray-400">(11)</span>
            </p>
          </div>
          <div
            className={`px-32 ${
              show ? 'flex flex-col' : 'hidden'
            }  pt-12  gap-[8px]`}
          >
            <div className="flex items-center gap-[8px]">
              <p className="text-text-sm">
                Accessories{' '}
                <span className="text-text-xs text-gray-400">(11)</span>
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="text-text-sm">
                Accessories{' '}
                <span className="text-text-xs text-gray-400">(11)</span>
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="text-text-sm">
                Accessories{' '}
                <span className="text-text-xs text-gray-400">(11)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Cuisine & Électroménager{' '}
            <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Santé & Beauté
            <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Électroniques{' '}
            <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Mode <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Maison & Bureau{' '}
            <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Informatique{' '}
            <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
        <div className="flex w-full border-b-[1px] py-8 border-gray-500 items-center gap-[8px]">
          <BiChevronRight />
          <p className="text-text-sm">
            Jeux videos & Consoles{' '}
            <span className="text-text-xs text-gray-400">(11)</span>
          </p>
        </div>
      </div>
    </div>
  );
};
