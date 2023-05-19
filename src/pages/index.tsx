import axios from 'axios';
import { random } from 'nanoid';
import Head from 'next/head';
import React from 'react';

import { BestSellers } from '../components/pages/Home/BestSellers';
import { Hero } from '../components/pages/Home/Hero';
import { HeroHeader } from '../components/pages/Home/HeroHeader';
import { SpecialOffer } from '../components/pages/Home/SpecialOffer';
import { TabsComponent } from '../components/pages/Home/Tabs';
import { Header } from '../components/shared/Header';
import { ProductCard } from '../components/shared/ProductCard';
import { Product } from '../types/Product';

const Home = ({ data }: { data: Product[] }) => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <HeroHeader />
      <Hero />
      <div className="flex mt-40 w-full max-w-[1400px] mx-auto gap-[64px]">
        <SpecialOffer
          item={data && data[Math.floor(Math.random() * data.length)]}
        />
        <TabsComponent prods={data} />
      </div>
      <div className="w-full bg-gray-300 py-40">
        <div className="max-w-[1400px] [&>*:nth-child(5n)]:border-r-0  mx-auto grid grid-cols-5 grid-rows-2">
          {data.map((prod) => (
            <ProductCard data={prod} />
          ))}
        </div>
      </div>
      <BestSellers data={data} />
    </main>
  </>
);
Home.getInitialProps = async () => {
  const res = await axios
    .get('http://localhost:5000/Product/getall')
    .catch((error) => {
      console.error(error);
    });

  const data = await res?.data;

  return { data };
};
export default Home;
