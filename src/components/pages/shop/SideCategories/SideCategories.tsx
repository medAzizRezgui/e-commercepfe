import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

type Props = {
  options: { value: string; label: string }[];
  setSelectedCategorie: React.Dispatch<React.SetStateAction<string | string[]>>;
};
export const SideCategories = ({ options, setSelectedCategorie }: Props) => (
  <div className="max-h-min w-full rounded-[12px] border-2 border-gray-500 py-18">
    <h1 className="border-b-2 border-gray-500 px-24 pb-18 text-text-sm">
      Browse Categories
    </h1>
    <div className="w-full px-12">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setSelectedCategorie('all')}
        className="flex w-full cursor-pointer items-center gap-[8px] border-b-[1px] border-gray-500 py-8"
      >
        <BiChevronRight />
        <p className="text-text-sm">All</p>
      </div>
      {options.map((item) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          onClick={() => setSelectedCategorie(item.value)}
          className="flex w-full cursor-pointer items-center gap-[8px] border-b-[1px] border-gray-500 py-8"
        >
          <BiChevronRight />
          <p className="text-text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);
