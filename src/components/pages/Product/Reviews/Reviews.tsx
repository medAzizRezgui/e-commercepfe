import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';
import ReactStars from 'react-stars';

import axiosProduction from '../../../../pages/api/axios';
import { Product } from '../../../../types/Product';
import { Toast } from '../../../shared/toast';

type Props = {
  prod: Product;
};
export const Reviews = ({ prod }: Props) => {
  const [starts, setStarts] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSentReview = async () => {
    setError(false);
    setSuccess(false);
    if (!name || !email || starts === 0) {
      setError(true);
      return;
    }
    await axiosProduction
      .patch(`/product/update/${prod._id}`, {
        rating: {
          rate: starts,
          name,
          email,
        },
      })
      .then(() => setSuccess(true));
  };

  const counts: Record<string, number> = {};

  prod?.rating.forEach((number) => {
    counts[number.rate] = counts[number.rate] ? counts[number.rate] + 1 : 1;
  });

  const numbersLength = prod?.rating.length; // Length of the original array
  const percentages: Record<string, number> = {};

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const number in counts) {
    const count = counts[number];
    percentages[number] = (count / numbersLength) * 100;
  }

  return (
    <div className="mx-auto my-12 w-full  max-w-[1400px] bg-white  p-64 drop-shadow-sm">
      <Toast
        success={success}
        error={error}
        text="Review Added!"
        errorMsgs={[{ msg: 'Please fill out the form' }]}
      />
      <div className="relative mx-80 mb-40 flex  items-center justify-center gap-[40px] pb-8">
        {/* <div className="flex flex-col items-center"> */}
        {/*  <h1 className="text-text-xl font-[300]">Description</h1> */}
        {/* </div> */}
        <div className="flex flex-col items-center">
          <h1 className="text-text-xl font-[300]">Specifications</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-text-xl font-medium ">Reviews</h1>
          <span className="mt-4 block h-[3px] w-full rounded-full  bg-yellow-500" />
        </div>
        <span className="absolute bottom-[9px] z-[-1] h-[1px] w-full bg-gray-500" />
      </div>
      <div className="flex items-start justify-between gap-[128px]">
        <div>
          <h1 className="pb-16 text-text-lg">
            Based on {prod?.rating?.length} reviews
          </h1>
          <div className="flex items-baseline gap-[4px] pb-8">
            <h1 className="text-text-xl font-bold">
              {prod?.rating && prod.rating.length > 0
                ? (
                    prod.rating.reduce(
                      (accumulator, currentValue) =>
                        accumulator + (currentValue.rate || 0), // Handle undefined values with default 0
                      0
                    ) / prod.rating.length
                  ).toFixed(1)
                : 0}
            </h1>
            <p className=" text-text-sm">overall</p>
          </div>

          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
            </div>
            <div className="h-[10px] w-[200px] rounded-full bg-gray-500">
              <span
                style={{
                  width: `${percentages[5] ? percentages[5] : '0'}%    `,
                }}
                className="block h-[10px]  rounded-full bg-gray-400 "
              />
            </div>
            <p>{counts[5] ? counts[5] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
            </div>
            <div className="h-[10px] w-[200px] rounded-full bg-gray-500">
              <span
                style={{
                  width: `${percentages[4] ? percentages[4] : '0'}%    `,
                }}
                className="block h-[10px]  rounded-full bg-gray-400 "
              />
            </div>
            <p>{counts[4] ? counts[4] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
            </div>
            <div className="h-[10px] w-[200px] rounded-full bg-gray-500">
              <span
                style={{
                  width: `${percentages[3] ? percentages[3] : '0'}%    `,
                }}
                className="block h-[10px]  rounded-full bg-gray-400 "
              />
            </div>
            <p>{counts[3] ? counts[3] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
            </div>
            <div className="h-[10px] w-[200px] rounded-full bg-gray-500">
              <span
                style={{
                  width: `${percentages[2] ? percentages[2] : '0'}%    `,
                }}
                className="block h-[10px]  rounded-full bg-gray-400 "
              />
            </div>
            <p>{counts[2] ? counts[2] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
              <BiStar className="h-[20px] w-[20px] fill-yellow-400" />
            </div>
            <div className="h-[10px] w-[200px] rounded-full bg-gray-500">
              <span
                style={{
                  width: `${percentages[1] ? percentages[1] : '0'}%`,
                }}
                className="block h-[10px] rounded-full bg-gray-400 "
              />
            </div>
            <p>{counts[1] ? counts[1] : '0'}</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[24px]">
          <h1 className="pb-16 text-text-lg">Add Review</h1>
          <div className="flex items-center gap-[64px]">
            {/* Your Rating */}
            <h1>Your Rating</h1>

            <ReactStars
              value={starts}
              count={5}
              onChange={(e: React.SetStateAction<number>) => setStarts(e)}
              size={24}
              half={false}
              color2="#ffd700"
            />
          </div>
          {/* Your Review */}

          {/* Your Name */}
          <div className="flex items-center justify-between ">
            <h1>Name *</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className=" w-[80%] rounded-full border-2 border-gray-500 p-12 px-24 outline-0 "
            />
          </div>
          {/* Your Email */}
          <div className="flex items-center justify-between ">
            <h1>Email *</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className=" w-[80%] rounded-full border-2 border-gray-500 p-12 px-24 outline-0 "
            />
          </div>
          <button
            onClick={handleSentReview}
            type="button"
            className=" max-w-[150px] rounded-full bg-gray-500 px-24 py-16 text-center text-text-sm font-semibold"
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};
