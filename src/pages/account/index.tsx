import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { refetchProdsState } from '../../atoms/refetchProdsAtom';
import { AdminOrders } from '../../components/pages/account/AdminOrders';
import { CategoriesTabs } from '../../components/pages/account/CategoriesTabs';
import { Menu } from '../../components/pages/account/Menu';
import { ProductsTabs } from '../../components/pages/account/ProductsTabs';
import { UserMenu } from '../../components/pages/account/UserMenu';
import { UserOrders } from '../../components/pages/account/UserOrders';
import { UserProfile } from '../../components/pages/account/UserProfile';
import { Categories } from '../../components/shared/Categories';
import { Header } from '../../components/shared/Header';
import { Category } from '../../types/Category';
import { Order } from '../../types/Order';
import { Product as ProdType } from '../../types/Product';
import { SousCategory } from '../../types/SousCategory';
import { User } from '../../types/User';
import axiosProduction, { axiosDev } from '../api/axios';

const Account = ({
  initialProducts,
  initialCategories,
  initialSousCategories,
  initialOrders,
}: {
  initialProducts: ProdType[];
  initialCategories: any;
  initialSousCategories: any;
  initialOrders: Order[];
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const refetch = useRecoilValue(refetchProdsState);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [sousCategories, setSousCategories] = useState<SousCategory[]>(
    initialSousCategories
  );

  const [orders, setOrders] = useState<Order[]>(initialOrders);
  useEffect(() => {
    const getProds = async () => {
      await axiosProduction
        .get('/Product/getall')
        .then((r) => setProducts(r.data));
    };
    const getCategories = async () => {
      await axiosProduction
        .get('/categorie/getAll')
        .then((r) => setCategories(r.data));
    };
    const getSousCategories = async () => {
      await axiosDev
        .get('/sousCat/getAll')
        .then((r) => setSousCategories(r.data));
    };
    const getOrders = async () => {
      await axiosDev.get('/order/getAll').then((r) => setOrders(r.data));
    };
    getProds();
    getCategories();
    getSousCategories();
    getOrders();
  }, [refetch]);

  // Get user from ls , if not redirect to auth page
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

  if (!user)
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <h1>Loading</h1>
      </div>
    );

  return (
    <>
      <Head>
        <title>My Account</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Categories />

        {user.isAdmin && (
          <div className="mx-auto my-20 mt-112 flex w-full max-w-[1400px] flex-col gap-[10px]">
            <h1 className="text-center text-display-md font-medium">
              My Account
            </h1>
            <div className="flex w-full gap-[40px]">
              <Menu setActiveTab={setActiveTab} activeTab={activeTab} />
              {activeTab === 0 && <ProductsTabs products={products} />}

              {activeTab === 1 && (
                <CategoriesTabs
                  categories={categories}
                  sousCategories={sousCategories}
                />
              )}
              {activeTab === 2 && <AdminOrders orders={orders} />}
            </div>
          </div>
        )}

        {!user.isAdmin && (
          <div className="mx-auto my-20 mt-112 flex w-full max-w-[1400px] flex-col gap-[10px]">
            {/*  Add Prod Form */}
            <h1 className="text-center text-display-md font-medium">
              My Account
            </h1>
            <div className="flex w-full gap-[40px]">
              {/* Menu */}
              <UserMenu setActiveTab={setActiveTab} activeTab={activeTab} />
              {activeTab === 0 && (
                <UserOrders orders={initialOrders} userEmail={user.email} />
              )}
              {activeTab === 1 && <UserProfile />}
            </div>
          </div>
        )}
      </main>
    </>
  );
};
Account.getInitialProps = async () => {
  try {
    const [ProdsRes, CatRes, SousCatRes, OrdersRes] = await Promise.all([
      axiosDev.get('/Product/getall'),
      axiosDev.get('/categorie/getall'),
      axiosDev.get('/sousCat/getall'),
      axiosDev.get('/order/getall'),
    ]);

    const initialProducts = ProdsRes.data;
    const initialCategories = CatRes.data;
    const initialSousCategories = SousCatRes.data;
    const initialOrders = OrdersRes.data;

    return {
      initialProducts,
      initialCategories,
      initialSousCategories,
      initialOrders,
    };
  } catch (error) {
    console.error(error);
    return {
      initialProducts: [],
      initialCategories: [],
      initialSousCategories: [],
      initialOrders: [],
    };
  }
};
export default Account;
