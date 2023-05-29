import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Input } from '../../components/pages/account/Input';
import { Categories } from '../../components/shared/Categories';
import { Header } from '../../components/shared/Header';
import { useCart } from '../../context/Cart/CartContext';
import { User } from '../../types/User';
import axiosProduction from '../api/axios';

const Checkout = () => {
  const [user, setUser] = useState<User>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [region, setRegion] = useState('');
  const [town, setTown] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState<number>();
  const [street, setStreet] = useState('');

  const { cartItems } = useCart();
  const router = useRouter();

  function calculateTotal() {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    return total.toFixed(2);
  }

  const handlePay = (orderId: string) => {
    const url = 'https://www.rezgui-aziz.me/api/generatePayment';

    const requestData = {
      app_token: '955ddff9-f0e3-4e8e-8b74-ab30e3b53edf',
      app_secret: 'da3f95a4-2fd5-4c8c-8c49-7cac799e2433',
      amount: '350',
      accept_card: true,
      session_timeout_secs: 1200,
      success_link: `https://www.rezgui-aziz.me/success?orderId=${orderId}`,
      fail_link: 'https://www.rezgui-aziz.me/shop',
      developer_tracking_id: 'bgyt529J0Uk',
    };

    axios
      .post(url, requestData, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle the response here
        router.push(response.data.result.link);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  const handleAddOrder = async () => {
    await axiosProduction
      .post('/order/addOrder', {
        fullname: `${firstName} ${lastName}`,
        email: user?.email,
        shippingAddress: {
          region,
          city: town,
          postalCode: zipCode,
          street,
        },
        phoneNumber,
        Products: cartItems.map((item) => ({
          name: item.name,
          qty: item.quantity,
          item_price: item.price,
          image: item.image,
        })),
        totalPrice: calculateTotal(),
        coupon: router.query.coupon,
      })
      .then((r) => handlePay(r.data._id));
  };
  useEffect(() => {
    const getUser = () => {
      const res = window.localStorage.getItem('user');
      if (res) {
        setUser(JSON.parse(res));
      }
      if (!res) {
        router.push('/auth');
      }
    };
    getUser();
  }, []);

  if (!user) return <h1>Loading...</h1>;
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* Categories */}
        <Categories />
        <div className="mt-112  w-full" />

        <h1 className="py-40 text-center text-display-md">Checkout</h1>

        <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between ">
          {/* INPUTS */}
          <div className="w-[60%] p-24 ">
            <h1 className="w-full border-b-2 border-gray-500 pb-8 text-display-sm">
              Billing Details
            </h1>

            <div className="my-20 flex items-center justify-between gap-[20px]">
              <Input
                label="First Name*"
                value={firstName}
                type="text"
                setValue={setFirstName}
                placeholder="Name..."
              />
              <Input
                label="Last Name*"
                value={lastName}
                type="text"
                setValue={setLastName}
                placeholder="Name..."
              />
            </div>

            <p className="py-8">Region</p>
            <select
              onChange={(e) => setRegion(e.currentTarget.value)}
              className="mb-8 w-full rounded-full border-[1px] border-gray-400 px-24 py-8 "
            >
              <option value="select" selected>
                Sélectioner
              </option>
              <option value="Ariana">Ariana</option>
              <option value="Béja">Béja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabes">Gabes</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Kebili">Kebili</option>
              <option value="La Manouba">La Manouba</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Médenine">Médenine</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
            <Input
              label="Ville *"
              value={town}
              type="text"
              setValue={setTown}
              placeholder="Name..."
            />
            <Input
              label="Street address *"
              value={street}
              type="text"
              setValue={setStreet}
              placeholder="Last Name..."
            />
            <Input
              label="ZipCode*"
              value={zipCode}
              type="number"
              setValue={setZipCode}
              placeholder="ZipCode..."
            />
            <Input
              label="Phone*"
              value={phoneNumber}
              type="number"
              setValue={setPhoneNumber}
              placeholder="Num Tel..."
            />
            <Input
              label="Email*"
              value={user?.email}
              type="email"
              setValue={() => {}}
              placeholder="Email..."
            />
          </div>

          {/* Details */}
          <div className="w-[40%] rounded-[4px] bg-gray-300  p-24">
            <h1 className="w-full border-b-2 border-gray-500 pb-8 text-display-sm">
              Your order
            </h1>

            <div className="flex w-full items-center justify-between border-b-2 border-gray-500 pb-8 pt-24 font-semibold">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            <div className="flex w-full  flex-col items-center justify-between border-b-2 border-gray-500 pb-8 pt-24">
              {cartItems?.map((item) => (
                <div className="flex w-full justify-between">
                  <p>
                    {item.name}{' '}
                    <span className="font-semibold">x {item.quantity}</span>
                  </p>
                  <p>{(item.price * item.quantity).toFixed(2)} DT</p>
                </div>
              ))}
            </div>

            <div className="flex  w-full items-center justify-between border-b-2 border-gray-500 pb-8 pt-24">
              <p className="font-semibold">Subtotal</p>
              <p>{calculateTotal()} DT</p>
            </div>

            <div className="flex w-full  items-center justify-between border-b-2 border-gray-400 pb-8 pt-24 font-semibold">
              <p>Total</p>
              <p>{calculateTotal()} DT</p>
            </div>

            <button
              type="button"
              onClick={handleAddOrder}
              className="my-20 w-full rounded-full bg-yellow-500 py-8 text-center text-display-xs font-semibold text-dark-500"
            >
              Place Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
