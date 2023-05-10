import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { CartProvider } from '../context/Cart/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      {/* eslint-disable-next-line react/jsx-filename-extension,react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </CartProvider>
  );
}
