import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { CartProvider } from '../context/Cart/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CartProvider>
        <main className={`${inter.variable}  font-inter `}>
          {/* eslint-disable-next-line react/jsx-filename-extension,react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </RecoilRoot>
  );
}
