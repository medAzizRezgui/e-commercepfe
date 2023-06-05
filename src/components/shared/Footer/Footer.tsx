import Link from 'next/link';
import React from 'react';
import { BiHeadphone } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

import { Category } from '../../../types/Category';

export const Footer = ({ categories }: { categories: Category[] }) => (
  <div className="relative w-full bg-gray-100 pb-32  pt-24">
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
            <h1 className="text-text-xl">+216 98 765 432</h1>
          </div>
        </div>

        <div className="mt-40">
          <p className="text-text-sm font-semibold">Contact Info</p>
          <p className="text-text-sm">admin@example.com</p>

          <div className="flex items-center gap-[10px] py-12">
            <BsFacebook className="h-[24px] w-[24px]" />
            <BsTwitter className="h-[24px] w-[24px]" />
            <BsInstagram className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
      {/*  Fast Access */}
      <div>
        <h1 className="pb-14 text-text-lg font-semibold">Find It Fast</h1>
        <ul className="flex flex-col gap-[8px]">
          {categories.map((item) => (
            <Link
              key={item._id}
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
          {/* <Link href="/account"> */}
          {/*  <li className="text-text-sm">FAQ&apos;s</li> */}
          {/* </Link> */}
          {/* <Link href="/account"> */}
          {/*  <li className="text-text-sm">Customer Service</li> */}
          {/* </Link> */}
        </ul>
      </div>
    </div>
    <div className="absolute my-20 w-full bg-gray-500 py-8">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        <h1 className="text-text-sm">Created By Rezgui med Aziz</h1>
        <h1 className="text-text-sm">© Logo - All Rights Reserved</h1>
      </div>
    </div>
  </div>
);
