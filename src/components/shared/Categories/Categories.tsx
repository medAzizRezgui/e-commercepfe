import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import HoverComponent from './HoverComponent';

export const Categories = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [sousCat, setSousCat] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/categorie/getall'
      ); // replace with your API endpoint
      const transformedOptions = response.data.map((option: any) => ({
        // eslint-disable-next-line no-underscore-dangle
        value: option._id,
        label: option.name,
      }));
      setOptions(transformedOptions);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSousCat = async () => {
    try {
      const response = await axios
        .get('http://localhost:5000/sousCat/getall')
        .then((r) => setSousCat(r.data)); // replace with your API endpoint
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchSousCat();
  }, []);

  return (
    <div className="w-full absolute top-0 pt-128 pb-8 border-b-2 border-gray-500  bg-gradient-to-t from-yellow-500 to-yellow-100">
      <div className="max-w-[1400px] mx-auto py-12">
        <ul className="flex relative items-center gap-[8px] font-semibold  text-text-xs">
          <Link href="/">
            <li className="border-r-[1px] px-8 flex items-center">
              <p>Home</p>
            </li>
          </Link>

          {options?.map((item) => (
            <HoverComponent
              content={sousCat.map((sousCat) => (
                <h1>
                  {sousCat.categorie._id === item.value ? sousCat.name : ''}
                </h1>
              ))}
              trigger={
                <Link
                  href={{
                    pathname: '/shop',
                    // eslint-disable-next-line no-underscore-dangle
                    query: { category: item.value },
                  }}
                >
                  <li className="border-r-[1px] px-8 flex items-center">
                    <p>{item.label}</p>
                    <BiChevronDown className="w-[24px] h-[24px]" />
                  </li>
                </Link>
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
