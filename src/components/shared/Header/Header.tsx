import Image from 'next/image';
import React from 'react';

import calendar from '@/icons/calendar.svg';
import coupon from '@/icons/coupon.svg';
import hand from '@/icons/hand.svg';
import reputation from '@/icons/reputation.svg';

const Header = () => (
  <div className="w-[80%] px-32 flex items-center justify-between  h-min  py-24">
    {/*   Date */}
    <div className="flex items-center gap-[10px]">
      <Image src={calendar} alt="icon" width={32} height={32} />
      <h1 className="font-medium uppercase  font-bold text-blue-500 text-text-xl">
        {new Date().getDate()}{' '}
        {new Date().toLocaleString('default', { month: 'long' })}
      </h1>
      {/*    Test */}
    </div>
    <div className="flex items-center gap-[36px]">
      {/*   Coupon */}
      <div className="rounded-[200px] bg-white p-4 pr-24 flex gap-[10px] items-center">
        <Image src={coupon} alt="icon" width={60} height={60} />
        <h1 className="font-medium ">Micheal15</h1>
      </div>
      {/*   Reputation  */}
      <div className="rounded-[200px] bg-white p-4 pr-24 flex gap-[10px] items-center">
        <Image src={reputation} alt="icon" width={60} height={60} />
        <div>
          <h1 className="font-medium ">Reputation</h1>
          <p className="text-blue-500 font-medium">
            40 <span>points</span>
          </p>
        </div>
      </div>
    </div>
    {/*   Welcome */}
    <div className="flex items-center gap-[10px]">
      <h1 className="font-bold text-display-xs">Welcome, back [name]!</h1>
      <Image src={hand} alt="icon" />
    </div>
  </div>
);

export default Header;
