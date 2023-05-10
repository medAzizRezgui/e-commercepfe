import Image from 'next/image';
import React from 'react';

import Prod from '@/images/Controller.png';

export const SpecialOffer = () => (
  <div className="border-2 h-min pb-40 pt-24 border-yellow-500 flex flex-col items-center rounded-[20px] w-[40%]">
    <h1 className="text-display-xs">Special Offer</h1>
    <Image src={Prod} alt="" />
    <h1 className="font-medium text-blue-500 text-text-md">
      Game Console Controller + USB 3.0 Cable
    </h1>
    <h1 className="font-medium text-display-sm py-40">$99.00</h1>
  </div>
);
