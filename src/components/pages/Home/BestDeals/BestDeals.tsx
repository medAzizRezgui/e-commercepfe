import Link from 'next/link';
import React from 'react';

import { Category } from '../../../../types/Category';
import { Product } from '../../../../types/Product';
import { ProductCard } from '../../../shared/ProductCard';

import { HeroItem } from './HeroItem';

type Props = {
  data: Product[];
  categories: Category[];
};
export const BestDeals = ({ data, categories }: Props) => (
  <div className="w-full bg-gray-300 py-40">
    <div className="relative mx-auto mb-24 flex w-full max-w-[1400px] justify-between border-b-[1px] border-gray-500 pb-8">
      <h1 className="font-semibold">Best Deals</h1>
      {categories.map((item) => (
        <Link
          key={item._id}
          href={{
            pathname: '/shop',
            query: { category: item._id },
          }}
        >
          <h1 className="text-text-sm">{item.name}</h1>
        </Link>
      ))}

      <span className=" absolute bottom-0 h-[2px] w-[100px] bg-yellow-500" />
    </div>

    <div className="mx-auto flex w-full max-w-[1400px] ">
      <div className="grid  w-[30%] grid-cols-2">
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {data.map((prod, i) => {
          if (i < 4) {
            return <ProductCard key={prod._id} data={prod} />;
          }
        })}
      </div>
      <HeroItem item={data[11]} />
      <div className="grid  w-[30%] grid-cols-2">
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {data.map((prod, i) => {
          if (i > 4 && i < 9) {
            return <ProductCard key={prod._id} data={prod} />;
          }
        })}
      </div>
    </div>
  </div>
);
