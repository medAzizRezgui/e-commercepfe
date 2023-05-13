import axios from 'axios';
import React, { useState } from 'react';

import { Input } from '../Input';
import { CategoriesSelect } from '../ProductInputs/CategoriesSelect';

export const AddCategories = () => {
  const [categorie, setCategorie] = useState({ value: '', label: '' });
  const [refetch, setRefetch] = useState(false);
  const [categorieName, setCategorieName] = useState('');
  const [sousCategorieName, setSousCategorieName] = useState('');
  const [selectCategories, setSelectCategories] = useState([
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]);
  const handleAddCategorie = async () => {
    await axios
      .post('http://localhost:5000/categorie/add', {
        name: categorieName,
      })
      .then(() => setRefetch(!refetch));
  };

  const handleAddSousCategorie = async () => {
    await axios.post('http://localhost:5000/sousCat/add', {
      name: sousCategorieName,
      categorie: categorie.value,
    });
  };
  return (
    <div className="mt-8">
      <div className="w-full flex-col">
        <div className="border-b-2 border-gray-500 pb-8">
          <Input
            label="Categorie"
            value={categorieName}
            type="text"
            setValue={setCategorieName}
            placeholder="Categorie Name..."
          />
          <button
            className="bg-gray-500 px-24 py-8 rounded-[20px] block mt-12 h-max"
            type="button"
            onClick={() => handleAddCategorie()}
          >
            Add Categorie
          </button>
        </div>
        <CategoriesSelect
          categories={selectCategories}
          setCategories={setSelectCategories}
          setCategorie={setCategorie}
          categorie={categorie}
          refetch={refetch}
        />
        <Input
          label="Sous Categorie"
          value={sousCategorieName}
          type="text"
          setValue={setSousCategorieName}
          placeholder="Sous Categorie Name..."
        />

        <button
          className="bg-gray-500 px-24 py-8 rounded-[20px] block mt-12 h-max"
          type="button"
          onClick={() => handleAddSousCategorie()}
        >
          Add Sous Categorie
        </button>
      </div>
    </div>
  );
};
