import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { BestDeals } from '../components/pages/Home/BestDeals';
import { BestSellers } from '../components/pages/Home/BestSellers';
import { Hero } from '../components/pages/Home/Hero';
import { HeroHeader } from '../components/pages/Home/HeroHeader';
import { SpecialOffer } from '../components/pages/Home/SpecialOffer';
import { TabsComponent } from '../components/pages/Home/Tabs';
import { Footer } from '../components/shared/Footer';
import { Header } from '../components/shared/Header';
import { Product } from '../types/Product';

import axiosProduction from './api/axios';

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
      <div className="mx-auto mt-40 flex w-full max-w-[1400px] gap-[64px]">
        <SpecialOffer
          item={data && data[Math.floor(Math.random() * data.length)]}
        />
        <TabsComponent prods={data} />
      </div>
      <BestDeals data={data} />
      <BestSellers data={data} />
      <Footer />
    </main>
  </>
);
Home.getInitialProps = async () => {
  try {
    const res = await axiosProduction.get('/Product/getall');
    const { data } = res;
    return { data };
  } catch (error) {
    console.error(error);
    return { data: null };
  }
};
export default Home;
