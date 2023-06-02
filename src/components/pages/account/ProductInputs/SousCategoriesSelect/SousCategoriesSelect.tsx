import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { axiosPublic } from '../../../../../pages/api/axios';

type Props = {
  setSousCategorie: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }>
  >;
  categorie: { value: string; label: string };
  sousCategorie: { value: string; label: string };
};
export const SousCategoriesSelect = ({
  setSousCategorie,
  sousCategorie,
  categorie,
}: Props) => {
  const defaultValue = { value: '', label: 'Empty' };
  const handleSousCategorieChange = (option: any) => {
    setSousCategorie(option);
  };

  const [sousCategories, setSousCategories] = useState<
    { value: string; label: string }[]
  >([]);
  const fetchSousCategories = async () => {
    try {
      const response = await axiosPublic.get('/sousCat/getall');

      const res = response.data;

      setSousCategories(
        res
          .filter((item: any) => item.categorie.name === categorie.label)
          .map((option: any) => ({
            // eslint-disable-next-line no-underscore-dangle
            value: option._id,
            label: option.name,
          }))
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSousCategories();
  }, [categorie]);
  return (
    <div className="flex flex-col gap-[10px] py-4">
      <p className="font-medium">Sub Category</p>
      <Select
        value={sousCategorie || defaultValue}
        onChange={handleSousCategorieChange}
        options={sousCategories}
      />
    </div>
  );
};
