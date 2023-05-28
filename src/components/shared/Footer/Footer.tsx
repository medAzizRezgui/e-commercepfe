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
    <div className="relative w-full bg-gray-100  pb-32">
      <div className="w-full  bg-yellow-500">
        <div className="mx-auto mb-24 flex w-full max-w-[1400px] items-center justify-between py-12">
          <div className="flex items-center gap-[10px]">
            <BiEnvelopeOpen className="h-[30px] w-[30px]" />
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
              className="w-full rounded-full px-24 py-8"
            />
            <button
              type="button"
              className=" absolute right-[0px]  rounded-r-full bg-dark-500 px-24 py-8 text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1400px] justify-between">
        {/* Socials */}
        <div>
          <h1 className="text-display-md font-bold uppercase">Logo.</h1>
          <div className="flex items-center gap-[40px]">
            <BiHeadphone className="h-[80px] w-[80px] fill-yellow-500" />
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

            <div className="flex items-center gap-[10px] py-12">
              <BsFacebook className="h-[24px] w-[24px]" />
              <BsFacebook className="h-[24px] w-[24px]" />
              <BsFacebook className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
        {/*  Fast Access */}
        <div>
          <h1 className="pb-14 text-text-lg font-semibold">Find It Fast</h1>
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
          <h1 className="pb-14 text-text-lg font-semibold">Customer Care</h1>
          <ul className="flex flex-col gap-[8px]">
            <Link href="/account">
              <li className="text-text-sm">My Account</li>
            </Link>
            <Link href="/account">
              <li className="text-text-sm">FAQ&apos;s</li>
            </Link>
            <Link href="/account">
              <li className="text-text-sm">Customer Service</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="absolute my-20 w-full bg-gray-500 py-8">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
          <h1 className="text-text-sm">Created By ROOT99</h1>
          <h1 className="text-text-sm">© Electro - All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};
