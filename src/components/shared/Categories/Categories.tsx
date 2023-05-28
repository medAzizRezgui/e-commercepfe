import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import { SousCategory } from '../../../types/SousCategory';

import HoverComponent from './HoverComponent';

export const Categories = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [sousCat, setSousCat] = useState<SousCategory[]>([]);
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
      await axios
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
    <div className="absolute top-0 w-full border-b-2 border-gray-500 bg-gradient-to-t from-yellow-500  to-yellow-100 pb-8 pt-128">
      <div className="mx-auto max-w-[1400px] py-12">
        <ul className="relative flex items-center gap-[8px] text-text-xs  font-semibold">
          <Link href="/">
            <li className="flex items-center border-r-[1px] px-8">
              <p>Home</p>
            </li>
          </Link>

          {options?.map((item) => (
            <HoverComponent
              content={sousCat.map((souscat) => (
                <h1>
                  {souscat.categorie._id === item.value ? souscat.name : ''}
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
                  <li className="flex items-center border-r-[1px] px-8">
                    <p>{item.label}</p>
                    <BiChevronDown className="h-[24px] w-[24px]" />
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
