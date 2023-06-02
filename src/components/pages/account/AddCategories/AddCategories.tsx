import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { refetchCategoriesState } from '../../../../atoms/refetchCategoriesAtom';
import { axiosPrivate } from '../../../../pages/api/axios';
import { useGetUser } from '../../../../utils/hooks/useGetUser';
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

  const [refetchCategories, setRefetchCategories] = useRecoilState(
    refetchCategoriesState
  );
  const { jwt } = useGetUser();
  const handleAddCategorie = async () => {
    setError(false);
    setSuccess(false);
    await axiosPrivate
      .post(
        '/categorie/add',
        {
          name: categorieName,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then(() => {
        setSuccess(true);
        setRefetch(!refetch);
        setRefetchCategories(!refetchCategories);
      })
      .catch(() => setError(true));
  };

  const handleAddSousCategorie = async () => {
    setError(false);
    setSuccess(false);
    await axiosPrivate
      .post(
        '/sousCat/add',
        {
          name: sousCategorieName,
          categorie: categorie.value,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then(() => {
        setSuccess(true);
        setRefetch(!refetch);
        setRefetchCategories(!refetchCategories);
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
