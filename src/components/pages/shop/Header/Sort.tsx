import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'pricehighlow', label: 'Sort By price : high to low' },
  { value: 'pricelowhigh', label: 'Sort By price : low to high' },
  { value: 'latest', label: 'Sort by latest' },
];

export const Sort = () => (
  <Select
    placeholder="Sort by ..."
    styles={{
      control: (base) => ({
        ...base,
        background: 'white',
        border: 'transparent',
        outline: 'none',
        width: '250px',
        boxShadow: 'none',
      }),
      singleValue: (base) => ({
        ...base,
        background: 'white',
        border: 'transparent',
        color: 'black',
        outline: 'none',
        fontSize: '13px',
      }),
      input: (base) => ({
        ...base,
        color: '#D4D4D4',
        outline: 'none',
      }),
      menu: (base) => ({
        ...base,
        background: 'white',
        color: 'black',
        outline: 'none',
      }),
      placeholder: (base) => ({
        ...base,
        background: 'white',
        color: 'black',
        outline: 'none',
      }),
      option: () => ({
        height: '100%',
        padding: '4px',
        outline: 'none',
        color: 'black',
        fontSize: '14px',
      }),
    }}
    options={options}
  />
);
