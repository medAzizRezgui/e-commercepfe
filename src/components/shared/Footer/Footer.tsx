import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiEnvelopeOpen, BiHeadphone } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';

import { Category } from '../../../types/Category';

export const Footer = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get('http://localhost:5000/categorie/getall')
        .then((r) => setCategories(r.data));
    };
    getCategories();
  }, []);

  return (
    <div className="w-full bg-gray-100 pb-32  relative">
      <div className="w-full  bg-yellow-500">
        <div className="w-full py-12 mb-24 mx-auto max-w-[1400px] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <BiEnvelopeOpen className="w-[30px] h-[30px]" />
            <h1 className="text-text-xl">Sign up to Newsletter</h1>
            <p>
              ...and receive{' '}
              <span className="font-semibold">
                $20 coupon for first shopping
              </span>
            </p>
          </div>

          <div className="relative w-[40%]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-24 py-8 rounded-full w-full"
            />
            <button className=" absolute right-[0px]  bg-dark-500 text-white rounded-r-full py-8 px-24">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex max-w-[1400px] justify-between mx-auto">
        {/* Socials */}
        <div>
          <h1 className="uppercase text-display-md font-bold">Logo.</h1>
          <div className="flex items-center gap-[40px]">
            <BiHeadphone className="w-[80px] h-[80px] fill-yellow-500" />
            <div>
              <p className="text-text-sm text-gray-400">
                Got Questions ? Call us 24/7!
              </p>
              <h1 className="text-text-xl">(800) 8001-8588, (0600) 874 548</h1>
            </div>
          </div>

          <div className="mt-40">
            <p className="text-text-sm font-semibold">Contact Info</p>
            <p className="text-text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>

            <div className="py-12 flex items-center gap-[10px]">
              <BsFacebook className="w-[24px] h-[24px]" />
              <BsFacebook className="w-[24px] h-[24px]" />
              <BsFacebook className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
        {/*  Fast Access */}
        <div>
          <h1 className="text-text-lg pb-14 font-semibold">Find It Fast</h1>
          <ul className="flex flex-col gap-[8px]">
            {categories.map((item) => (
              <Link
                href={{
                  pathname: '/shop',
                  query: { category: item._id },
                }}
              >
                <li className="text-text-sm">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        {/*  Customer Care */}
        <div>
          <h1 className="text-text-lg pb-14 font-semibold">Customer Care</h1>
          <ul className="flex flex-col gap-[8px]">
            <Link href="/account">
              <li className="text-text-sm">My Account</li>
            </Link>
            <Link href="/account">
              <li className="text-text-sm">FAQ's</li>
            </Link>
            <Link href="/account">
              <li className="text-text-sm">Customer Service</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-full bg-gray-500 py-8 absolute my-20">
        <div className="w-full max-w-[1400px] justify-between flex items-center mx-auto">
          <h1 className="text-text-sm">Created By ROOT99</h1>
          <h1 className="text-text-sm">© Electro - All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};
