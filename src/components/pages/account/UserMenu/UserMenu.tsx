import { useRouter } from 'next/router';
import React from 'react';
import { BiLogOut, BiPackage } from 'react-icons/bi';

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  activeTab: number;
};
export const UserMenu = ({ activeTab, setActiveTab }: Props) => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    router.push('/');
  };
  return (
    <div className="w-[20%]">
      <ul>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li
          onClick={() => setActiveTab(0)}
          className={` ${
            activeTab === 0
              ? 'border-b-[1px] text-yellow-500 font-medium border-yellow-500'
              : 'border-b-[1px] border-gray-500 font-regular text-dark-500'
          } flex cursor-pointer  items-center justify-between  py-8  px-12`}
        >
          <h1>Orders</h1>
          <BiPackage className="w-[24px] h-[24px]" />
        </li>
      </ul>

      <div
        onClick={handleLogout}
        className="flex cursor-pointer items-center justify-between py-8  px-12"
      >
        <h1>Logout</h1>
        <BiLogOut className="w-[24px] fill-red-500 h-[24px]" />
      </div>
    </div>
  );
};