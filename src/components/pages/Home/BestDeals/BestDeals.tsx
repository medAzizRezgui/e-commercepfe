import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Category } from '../../../../types/Category';
import { Product } from '../../../../types/Product';
import { ProductCard } from '../../../shared/ProductCard';

import { HeroItem } from './HeroItem';

type Props = {
  data: Product[];
};
export const BestDeals = ({ data }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('http://localhost:5000/categorie/getall')
        .then((r) => setCategories(r.data));
    };
    getCategories();
  }, []);

  return (
    <div className="w-full bg-gray-300 py-40">
      <div className="w-full relative flex justify-between max-w-[1400px] mx-auto pb-8 border-b-[1px] border-gray-500 mb-24">
        <h1 className="font-semibold">Best Deals</h1>
        {categories.map((item) => (
          <Link
            href={{
              pathname: '/shop',
              query: { category: item._id },
            }}
          >
            <h1 className="text-text-sm">{item.name}</h1>
          </Link>
        ))}

        <span className=" absolute bottom-0 w-[100px] h-[2px] bg-yellow-500" />
      </div>

      <div className="w-full max-w-[1400px] flex mx-auto ">
        <div className="w-[30%]  grid grid-cols-2">
          {data.map((prod, i) => {
            if (i < 4) {
              return <ProductCard data={prod} />;
            }
          })}
        </div>
        <HeroItem item={data[2]} />
        <div className="w-[30%]  grid grid-cols-2">
          {data.map((prod, i) => {
            if (i > 4 && i < 9) {
              return <ProductCard data={prod} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};
