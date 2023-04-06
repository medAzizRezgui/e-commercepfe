import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Categories = () => (
  <Select
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
