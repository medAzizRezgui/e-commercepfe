import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BiStar } from 'react-icons/bi';

export const Reviews = () => (
  <div className="w-full max-w-[1400px] my-64  drop-shadow-sm p-64  bg-white mx-auto">
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
        <h1 className="text-text-lg pb-16">Based on 3 reviews</h1>
        <div className="flex items-baseline gap-[4px] pb-8">
          <h1 className="font-bold text-text-xl ">4.4</h1>
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
            <span className="rounded-full bg-gray-400 w-[50%] h-[10px] block " />
          </div>
          <p>1</p>
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
            <span className="rounded-full bg-gray-400 w-[80%] h-[10px] block " />
          </div>
          <p>2</p>
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
            <span className="rounded-full bg-gray-400 w-[0%] h-[10px] block " />
          </div>
          <p>0</p>
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
            <span className="rounded-full bg-gray-400 w-[0%] h-[10px] block " />
          </div>
          <p>0</p>
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
            <span className="rounded-full bg-gray-400 w-[0%] h-[10px] block " />
          </div>
          <p>0</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[24px]">
        <h1 className="text-text-lg pb-16">Add Review</h1>
        <div className="flex gap-[64px]">
          {/* Your Rating */}
          <h1>Your Rating</h1>
          <div className="flex">
            <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
            <BiStar className="fill-yellow-400 w-[20px] h-[20px]" />
          </div>
        </div>

        {/* Your Review */}

        {/* Your Name */}
        <div className="flex justify-between items-center ">
          <h1>Name *</h1>
          <input
            type="text"
            className=" rounded-full w-[80%] outline-0 p-12 border-2 border-gray-500 "
          />
        </div>
        {/* Your Email */}
        <div className="flex justify-between items-center ">
          <h1>Email *</h1>
          <input
            type="email"
            className=" rounded-full w-[80%] outline-0 p-12 border-2 border-gray-500 "
          />
        </div>
        <button
          type="button"
          className="bg-gray-500 max-w-[150px] text-text-sm  font-semibold px-24 py-16 rounded-full"
        >
          Add Review
        </button>
      </div>
    </div>
  </div>
);
