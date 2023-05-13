import axios from 'axios';
import React, { useEffect } from 'react';
import Select from 'react-select';

type Props = {
  setSousCategories: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }[]>
  >;
  setSousCategorie: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }>
  >;
  categorie: { value: string; label: string };
  sousCategorie: { value: string; label: string };
  sousCategories: { value: string; label: string }[];
};
export const SousCategoriesSelect = ({
  sousCategories,
  setSousCategories,
  setSousCategorie,
  sousCategorie,
  categorie,
}: Props) => {
  const defaultValue = { value: '', label: 'Empty' };
  const handleSousCategorieChange = (option: any) => {
    setSousCategorie(option);
  };

  console.log('cat', categorie);
  const fetchSousCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/sousCat/getall');

      const res = response.data;
      console.log(res);

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
      <p className="font-medium">Sous Categorie</p>
      <Select
        value={sousCategorie || defaultValue}
        onChange={handleSousCategorieChange}
        options={sousCategories}
      />
    </div>
  );
};
