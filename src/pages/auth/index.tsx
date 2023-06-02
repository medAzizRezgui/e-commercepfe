import Head from 'next/head';
import React from 'react';

import { Login } from '../../components/pages/auth/login';
import { Register } from '../../components/pages/auth/register';
import { Categories } from '../../components/shared/Categories';
import { Header } from '../../components/shared/Header';
import { Category } from '../../types/Category';
import { SousCategory } from '../../types/SousCategory';
import { axiosPublic } from '../api/axios';

const Auth = ({
  categories,
  sousCategories,
}: {
  categories: Category[];
  sousCategories: SousCategory[];
}) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      {/* Categories */}
      <Categories categories={categories} sousCategories={sousCategories} />
      <div className="mx-auto mt-128  flex max-w-[1400px] items-center gap-[10px] px-16 py-16 text-text-sm" />
      <div className="mx-auto my-40 flex w-full max-w-[1400px] gap-[20px]">
        {/* Login */}
        <Login />

        <div className="flex h-[500px] w-[2px] items-center justify-center bg-gray-500">
          <div className="flex items-center justify-center rounded-full border-2 border-gray-500 bg-white p-8">
            <p className="text-text-sm">Ou</p>
          </div>
        </div>
        {/* Register */}
        <Register />
      </div>
      {/* Route */}
    </main>
  </>
);

Auth.getInitialProps = async () => {
  const categoriesResponse = await axiosPublic.get('/categorie/getall'); // replace with your API endpoint

  const categories = await categoriesResponse.data;
  const sousCatRes = await axiosPublic.get('/sousCat/getall'); // replace with your API endpoint
  const sousCategories = await sousCatRes?.data;
  return { categories, sousCategories };
};
export default Auth;
