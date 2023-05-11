import axios from 'axios';
import Head from 'next/head';
import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { Login } from '../../components/pages/auth/login';
import { Register } from '../../components/pages/auth/register';
import { Categories } from '../../components/shared/Categories';
import { Header } from '../../components/shared/Header';

const Auth = () => (
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
      <Categories />
      <div className="max-w-[1400px]  text-text-sm gap-[10px] px-16 flex items-center mx-auto py-16">
        <h1>Home</h1>
        <BiChevronRight className="w-[20px] h-[20px]" />
        <h1>My account</h1>
      </div>
      <div className="full my-40 flex gap-[20px] max-w-[1400px] mx-auto">
        {/* Login */}
        <Login />

        <div className="h-[500px] w-[2px] bg-gray-500 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full border-2 border-gray-500 p-8 bg-white">
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
export default Auth;
