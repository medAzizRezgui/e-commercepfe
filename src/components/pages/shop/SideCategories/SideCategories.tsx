import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { SousCategory } from '../../../../types/SousCategory';

type Props = {
  options: { value: string; label: string }[];
  setSelectedCategorie: (val: string | string[]) => void;
  setSelectedSousCategorie: React.Dispatch<
    React.SetStateAction<string | string[]>
  >;
  sousCategories: SousCategory[];
  selectedCategory: string | string[];
  selectedSousCategory: string | string[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export const SideCategories = ({
  options,
  setSelectedCategorie,
  sousCategories,
  setSelectedSousCategorie,
  selectedCategory,
  selectedSousCategory,
  setPage,
}: Props) => {
  const handleSelectedCategory = (id: string) => {
    setSelectedCategorie(id);
    setPage(1);
  };
  const handleSelectSubCategory = (id: string) => {
    setSelectedSousCategorie(id);
    setPage(1);
  };
  const handleSelectAll = () => {
    setSelectedCategorie('all');
    setPage(1);
  };
  return (
    <div className="max-h-min w-full rounded-[12px] border-2 border-gray-500 py-18">
      <h1 className="border-b-2 border-gray-500 px-24 pb-18 text-text-sm">
        Browse Categories
      </h1>
      <div className="w-full px-12">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          onClick={() => handleSelectAll()}
          className="flex w-full cursor-pointer items-center gap-[8px] border-b-[1px] border-gray-500 py-8"
        >
          <BiChevronRight />
          <p className="text-text-sm">All</p>
        </div>
        {options.map((item) => (
          <div
            key={item.value}
            className="flex w-full  flex-col items-start gap-[8px] border-b-[1px] border-gray-500 py-8"
          >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
              onClick={() => handleSelectedCategory(item.value)}
              className="flex cursor-pointer items-center gap-[8px] "
            >
              <BiChevronRight />
              <p
                className={`${
                  item.value === selectedCategory ? 'text-yellow-500' : ''
                } text-text-sm`}
              >
                {item.label}{' '}
              </p>
            </div>
            <div className="flex flex-col pl-12 text-text-sm">
              {sousCategories.map((sousCat) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                <p
                  key={sousCat._id}
                  onClick={() => handleSelectSubCategory(sousCat._id)}
                  className={`${
                    sousCat._id === selectedSousCategory
                      ? 'text-dark-500'
                      : 'text-gray-400'
                  }    ${
                    sousCat.categorie._id === selectedCategory
                      ? 'flex animate-overlayShow '
                      : 'hidden'
                  }        cursor-pointer items-center     `}
                >
                  {sousCat.categorie._id === item.value ? (
                    <BiChevronRight />
                  ) : (
                    ''
                  )}
                  {sousCat.categorie._id === item.value
                    ? `${sousCat.name}`
                    : ''}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
