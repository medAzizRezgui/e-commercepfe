import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'high', label: 'Sort By price : high to low' },
  { value: 'low', label: 'Sort By price : low to high' },
];

export const Sort = ({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <Select
    isSearchable={false}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onChange={(e) => setSort(e?.value)}
    placeholder="Sort by ..."
    defaultValue={options[0]}
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
