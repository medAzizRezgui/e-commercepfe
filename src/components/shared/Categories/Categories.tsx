import Link from 'next/link';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

import { Category } from '../../../types/Category';
import { SousCategory } from '../../../types/SousCategory';

import HoverComponent from './HoverComponent';

type Props = {
  categories: Category[];
  sousCategories: SousCategory[];
};
export const Categories = ({ sousCategories, categories }: Props) => {
  const options = categories.map((option: any) => ({
    // eslint-disable-next-line no-underscore-dangle
    value: option._id,
    label: option.name,
  }));

  return (
    <div className="absolute top-0 w-full border-b-2 border-gray-500 bg-gradient-to-t from-yellow-500  to-yellow-100 pb-8 pt-128">
      <div className="mx-auto max-w-[1400px] py-12">
        <ul className="relative flex items-center gap-[8px] text-text-xs  font-semibold">
          <Link href="/">
            <li className="flex items-center border-r-[1px] px-8">
              <p>Home</p>
            </li>
          </Link>

          {options?.map((item) => (
            <HoverComponent
              content={sousCategories.map((souscat) => (
                <div>
                  <Link
                    href={{
                      pathname: '/shop',
                      // eslint-disable-next-line no-underscore-dangle
                      query: {
                        sousCategory: souscat._id,
                        category: item.value,
                      },
                    }}
                  >
                    {souscat.categorie._id === item.value && (
                      <h1 className="py-8 text-text-sm"> • {souscat.name}</h1>
                    )}
                  </Link>
                </div>
              ))}
              trigger={
                <Link
                  href={{
                    pathname: '/shop',
                    // eslint-disable-next-line no-underscore-dangle
                    query: { category: item.value },
                  }}
                >
                  <li className="flex items-center border-r-[1px] px-8">
                    <p>{item.label}</p>
                    <BiChevronDown className="h-[24px] w-[24px]" />
                  </li>
                </Link>
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
