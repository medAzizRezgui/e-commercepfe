import axios from 'axios';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';
import ReactStars from 'react-stars';

import { Product } from '../../../../types/Product';

type Props = {
  prod: Product;
};
export const Reviews = ({ prod }: Props) => {
  const [starts, setStarts] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSentReview = async () => {
    await axios.patch(`http://localhost:5000/product/update/${prod._id}`, {
      rating: starts,
    });
  };

  const counts = {};

  prod?.rating.forEach((number) => {
    counts[number] = counts[number] ? counts[number] + 1 : 1;
  });

  const numbersLength = prod?.rating.length; // Length of the original array

  const percentages = {};

  for (const number in counts) {
    const count = counts[number];
    const percentage = (count / numbersLength) * 100;
    percentages[number] = percentage;
  }
  console.log('p', percentages);
  console.log('COUNTS', counts);
  return (
    <div className="w-full max-w-[1400px] my-12  drop-shadow-sm p-64  bg-white mx-auto">
      <div className="flex items-center relative mx-80  pb-8 mb-40 gap-[40px] justify-center">
        {/* <div className="flex flex-col items-center"> */}
        {/*  <h1 className="text-text-xl font-[300]">Description</h1> */}
        {/* </div> */}
        <div className="flex flex-col items-center">
          <h1 className="text-text-xl font-[300]">Specifications</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-text-xl font-medium ">Reviews</h1>
          <span className="block mt-4 h-[3px] rounded-full w-full  bg-yellow-500" />
        </div>
        <span className="w-full absolute h-[1px] bottom-[9px] z-[-1] bg-gray-500" />
      </div>
      <div className="flex items-start gap-[128px] justify-between">
        <div>
          <h1 className="text-text-lg pb-16">
            Based on {prod?.rating?.length} reviews
          </h1>
          <div className="flex items-baseline gap-[4px] pb-8">
            <h1 className="font-bold text-text-xl ">
              {prod?.rating.length > 0
                ? (
                    prod?.rating.reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      0
                    ) / prod?.rating?.length
                  ).toFixed(1)
                : 0}
            </h1>
            <p className="text-text-sm l">overall</p>
          </div>

          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
            </div>
            <div className="w-[200px] rounded-full bg-gray-500 h-[10px]">
              <span
                style={{
                  width: `${percentages[5] ? percentages[5] : '0'}%    `,
                }}
                className="rounded-full bg-gray-400  h-[10px] block "
              />
            </div>
            <p>{counts[5] ? counts[5] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            </div>
            <div className="w-[200px] rounded-full bg-gray-500 h-[10px]">
              <span
                style={{
                  width: `${percentages[4] ? percentages[4] : '0'}%    `,
                }}
                className="rounded-full bg-gray-400  h-[10px] block "
              />
            </div>
            <p>{counts[4] ? counts[4] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            </div>
            <div className="w-[200px] rounded-full bg-gray-500 h-[10px]">
              <span
                style={{
                  width: `${percentages[3] ? percentages[3] : '0'}%    `,
                }}
                className="rounded-full bg-gray-400  h-[10px] block "
              />
            </div>
            <p>{counts[3] ? counts[3] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            </div>
            <div className="w-[200px] rounded-full bg-gray-500 h-[10px]">
              <span
                style={{
                  width: `${percentages[2] ? percentages[2] : '0'}%    `,
                }}
                className="rounded-full bg-gray-400  h-[10px] block "
              />
            </div>
            <p>{counts[2] ? counts[2] : '0'}</p>
          </div>
          <div className="flex items-center gap-[48px]">
            <div className="flex items-center gap-[4px]">
              <AiFillStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
              <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            </div>
            <div className="w-[200px] rounded-full bg-gray-500 h-[10px]">
              <span
                style={{
                  width: `${percentages[1] ? percentages[1] : '0'}%`,
                }}
                className="rounded-full bg-gray-400 h-[10px] block "
              />
            </div>
            <p>{counts[1] ? counts[1] : '0'}</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[24px]">
          <h1 className="text-text-lg pb-16">Add Review</h1>
          <div className="flex items-center gap-[64px]">
            {/* Your Rating */}
            <h1>Your Rating</h1>

            <ReactStars
              count={5}
              onChange={(e) => setStarts(e)}
              size={24}
              half={false}
              color2="#ffd700"
            />
          </div>
          {/* Your Review */}

          {/* Your Name */}
          <div className="flex justify-between items-center ">
            <h1>Name *</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className=" rounded-full w-[80%] outline-0 p-12 border-2 border-gray-500 "
            />
          </div>
          {/* Your Email */}
          <div className="flex justify-between items-center ">
            <h1>Email *</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className=" rounded-full w-[80%] outline-0 p-12 border-2 border-gray-500 "
            />
          </div>
          <button
            onClick={handleSentReview}
            type="button"
            className="bg-gray-500 max-w-[150px] text-text-sm  font-semibold px-24 py-16 rounded-full"
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};
