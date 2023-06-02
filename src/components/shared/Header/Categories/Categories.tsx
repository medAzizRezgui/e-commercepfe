import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { axiosPublic } from '../../../../pages/api/axios';

type Props = {
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
};
export const Categories = ({ setSearchCategory }: Props) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const fetchCategories = async () => {
    try {
      const response = await axiosPublic.get('/categorie/getall');
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
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Select
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onChange={(e) => setSearchCategory(e?.value)}
      placeholder="Categories..."
      styles={{
        control: (base) => ({
          ...base,
          background: 'transparent',
          border: 'transparent',
          outline: 'none',
          width: '200px',
          boxShadow: 'none',
        }),
        singleValue: (base) => ({
          ...base,
          background: 'transparent',
          border: 'transparent',
          color: '#D4D4D4',
          outline: 'none',
        }),
        input: (base) => ({
          ...base,
          color: '#D4D4D4',
          outline: 'none',
        }),
        menu: (base) => ({
          ...base,
          background: '#4C4C4C',
          color: '#D4D4D4',
          outline: 'none',
          padding: '4px',
        }),
        placeholder: (base) => ({
          ...base,
          background: '#4C4C4C',
          color: '#D4D4D4',
          outline: 'none',
        }),
        option: () => ({
          height: '100%',
          padding: '4px',
          outline: 'none',
          color: '#D4D4D4',
        }),
      }}
      options={options}
    />
  );
};
