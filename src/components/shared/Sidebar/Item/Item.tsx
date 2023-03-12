import Image from 'next/image';
import React from 'react';

import activeItem from '@/icons/activeItem.svg';

type Props = {
  text: string;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  svgPath: string;
};

const Item = ({ index, setActiveIndex, text, activeIndex, svgPath }: Props) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,react/jsx-filename-extension
  <li
    className={` relative flex items-center ${
      (index + 1) % 3 === 0 ? 'mb-40' : ''
    } 
  `}
    onClick={() => setActiveIndex(index)}
  >
    {activeIndex === index && (
      <Image src={activeItem} alt="icon" className="absolute left-0" />
    )}

    <div
      className={`flex cursor-pointer gap-[10px] items-center ${
        activeIndex === index ? ' shadow-item rounded-[12px]' : ''
      } ml-16 p-16 w-full`}
    >
      <svg width={26} height={26} xmlns="http://www.w3.org/2000/svg">
        {svgPath && (
          <path
            d={svgPath}
            className={`${
              activeIndex === index ? 'fill-blue-500' : 'fill-dark-400'
            }`}
          />
        )}
        {!svgPath && (
          <>
            <path
              d="M17.813 4.5H3.188c-.622 0-1.126.504-1.126 1.125v18c0 .621.504 1.125 1.126 1.125h14.624c.622 0 1.125-.504 1.125-1.125v-18c0-.621-.503-1.125-1.125-1.125Z"
              stroke="#898E97"
              strokeWidth={3}
              strokeLinejoin="round"
              fill="none"
              className={`${
                activeIndex === index ? 'stroke-blue-500 ' : 'stroke-dark-400'
              }`}
            />
            <path
              d="M7.125 2.25v3.375m6.75-3.375v3.375M6 10.688h9m-9 4.5h6.75M6 19.688h4.5"
              stroke="#898E97"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                activeIndex === index ? 'stroke-blue-500 ' : 'stroke-dark-400'
              }`}
            />
          </>
        )}
      </svg>
      <h1
        className={`${
          activeIndex === index
            ? 'font-medium text-text-lg '
            : 'font-regular text-text-lg text-dark-400'
        }`}
      >
        {text}
      </h1>
    </div>
  </li>
);

export default Item;
