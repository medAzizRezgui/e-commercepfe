import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { refetchProdsState } from '../../../../atoms/refetchProdsAtom';
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

  const [refetchGlobal, setRefetchGlobal] = useRecoilState(refetchProdsState);

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
        setRefetchGlobal(!refetchGlobal);
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
        setRefetchGlobal(!refetchGlobal);
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
            label="Category"
            value={categorieName}
            type="text"
            setValue={setCategorieName}
            placeholder="Category Name..."
          />
          <button
            className="mt-12 block h-max rounded-[20px] bg-gray-500 px-24 py-8"
            type="button"
            onClick={() => handleAddCategorie()}
          >
            Add Category
          </button>
        </div>
        <CategoriesSelect
          setCategorie={setCategorie}
          categorie={categorie}
          refetch={refetch}
        />
        <Input
          label="Sub Category"
          value={sousCategorieName}
          type="text"
          setValue={setSousCategorieName}
          placeholder="Sub Category Name..."
        />

        <button
          className="mt-12 block h-max rounded-[20px] bg-gray-500 px-24 py-8"
          type="button"
          onClick={() => handleAddSousCategorie()}
        >
          Add Sub Category
        </button>
      </div>
    </div>
  );
};
