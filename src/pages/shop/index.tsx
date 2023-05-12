import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { Filter } from '../../components/pages/shop/Filter';
import { ShopHeader } from '../../components/pages/shop/Header';
import { SideCategories } from '../../components/pages/shop/SideCategories';
import { Categories } from '../../components/shared/Categories';
import { Header } from '../../components/shared/Header';
import { ProductCard } from '../../components/shared/ProductCard';
import { Product } from '../../types/Product';

const Shop = ({ data }: { data: Product[] }) => {
  const [sort, setSort] = useState('low');
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Categories */}
        <Categories />
        <div className="max-w-[1400px]  text-text-sm gap-[10px] px-16 flex items-center mx-auto py-16">
          <h1>Home</h1>
          <BiChevronRight className="w-[20px] h-[20px]" />
          <h1>Shop</h1>
        </div>
        <div className="w-full flex max-w-[1400px] mx-auto">
          {/* Filter */}
          <div className="w-[20%]">
            <SideCategories />
            <Filter />
          </div>
          <div className="w-[80%] mx-40">
            <ShopHeader setSort={setSort} />

            <div className="grid grid-cols-4 gap-[0px]">
              {data
                .sort((a, b) =>
                  sort === 'low' ? a.price - b.price : b.price - a.price
                )
                .map((prod) => (
                  <ProductCard data={prod} />
                ))}
            </div>
          </div>
        </div>
        {/* Route */}
      </main>
    </>
  );
};
Shop.getInitialProps = async () => {
  const res = await axios
    .get('http://localhost:5000/Product/getall')
    .catch((error) => {
      console.error(error);
    });

  const data = await res?.data;

  return { data };
};
export default Shop;
