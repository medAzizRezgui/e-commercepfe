import React, { useState } from 'react';

import axiosProduction from '../../../../pages/api/axios';
import { Toast } from '../../../shared/toast';
import { Input } from '../Input';
import { CategoriesSelect } from '../ProductInputs/CategoriesSelect';

export const AddCategories = () => {
  const [categorie, setCategorie] = useState({ value: '', label: '' });
  const [refetch, setRefetch] = useState(false);
  const [categorieName, setCategorieName] = useState('');
  const [sousCategorieName, setSousCategorieName] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleAddCategorie = async () => {
    setError(false);
    setSuccess(false);
    await axiosProduction
      .post('/categorie/add', {
        name: categorieName,
      })
      .then(() => {
        setSuccess(true);
        setRefetch(!refetch);
      })
      .catch(() => setError(true));
  };

  const handleAddSousCategorie = async () => {
    setError(false);
    setSuccess(false);
    await axiosProduction
      .post('/sousCat/add', {
        name: sousCategorieName,
        categorie: categorie.value,
      })
      .then(() => {
        setSuccess(true);
        setRefetch(!refetch);
      })
      .catch(() => setError(true));
  };
  return (
    <div className="mt-8">
      <Toast
        success={success}
        error={error}
        text="Added Successfully"
        errorMsgs={[{ msg: 'Something went wrong' }]}
      />
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
            className="mt-12 block h-max rounded-[20px] bg-gray-500 px-24 py-8"
            type="button"
            onClick={() => handleAddCategorie()}
          >
            Add Categorie
          </button>
        </div>
        <CategoriesSelect
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
          className="mt-12 block h-max rounded-[20px] bg-gray-500 px-24 py-8"
          type="button"
          onClick={() => handleAddSousCategorie()}
        >
          Add Sous Categorie
        </button>
      </div>
    </div>
  );
};
