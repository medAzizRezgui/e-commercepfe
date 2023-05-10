import React from 'react';
import { BiBookContent, BiPackage } from 'react-icons/bi';

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  activeTab: number;
};
export const Menu = ({ activeTab, setActiveTab }: Props) => (
  <div className="w-[20%]">
    <ul>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <li
        onClick={() => setActiveTab(0)}
        className={` ${
          activeTab === 0
            ? 'border-b-[1px] text-yellow-500 font-medium border-yellow-500'
            : 'border-b-[1px] border-gray-500 font-regular text-dark-500'
        } flex cursor-pointer  items-center justify-between  py-8  px-12`}
      >
        <h1>Products</h1>
        <BiPackage className="w-[24px] h-[24px]" />
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <li
        onClick={() => setActiveTab(1)}
        className={`${
          activeTab === 1
            ? 'border-b-[1px] text-yellow-500 font-medium border-yellow-500'
            : 'border-b-[1px]  font-regular text-dark-500 border-gray-500'
        }   flex cursor-pointer items-center justify-between  py-8  px-12`}
      >
        <h1>Categories</h1>
        <BiBookContent className="w-[24px] h-[24px]" />
      </li>
    </ul>
  </div>
);
