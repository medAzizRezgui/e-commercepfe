import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Success = () => {
  const router = useRouter();

  const payOrder = async () => {
    if (router.query.orderId) {
      await axios
        .patch(`http://localhost:5000/order/pay/${router.query.orderId}`)
        .then(() => router.push('/'));
    }
  };

  useEffect(() => {
    payOrder();
  }, [router.query.orderId]);

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-[100vh] flex items-center justify-center">
        Thanks for your Payment !!
      </main>
    </>
  );
};

export default Success;
