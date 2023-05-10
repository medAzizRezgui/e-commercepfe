import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'teleTab', label: 'Téléphone & Tablette' },
  { value: 'cuisElec', label: 'Cuisine & Électroménager' },
  { value: 'santBeau', label: 'Santé & Beauté' },
  { value: 'electro', label: 'Électroniques' },
  { value: 'mode', label: 'Mode' },
  { value: 'maisBur', label: 'Maison & Bureau' },
  { value: 'info', label: 'Informatique' },
  { value: 'jeux', label: 'Jeux videos & Consoles' },
];

export const Categories = () => (
  <Select
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
