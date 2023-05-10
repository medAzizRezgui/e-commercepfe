import axios from 'axios';
import React, { useEffect } from 'react';
import Select from 'react-select';

type Props = {
  setCategories: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }[]>
  >;
  setCategorie: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }>
  >;
  categorie: { value: string; label: string };
  categories: { value: string; label: string }[];
};
export const CategoriesSelect = ({
  setCategories,
  categorie,
  setCategorie,
  categories,
}: Props) => {
  const defaultValue = { value: '', label: 'Empty' };
  const handleCategoriesChange = (option: any) => {
    setCategorie(option);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/categorie/getall'
      ); // replace with your API endpoint
      const transformedOptions = response.data.map((option: any) => ({
        value: option.name,
        label: option.name,
      }));
      setCategories(transformedOptions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col gap-[10px] py-4">
      <p className="font-medium">Categorie</p>
      <Select
        value={categorie || defaultValue}
        onChange={(e) => handleCategoriesChange(e)}
        options={categories}
      />
    </div>
  );
};
