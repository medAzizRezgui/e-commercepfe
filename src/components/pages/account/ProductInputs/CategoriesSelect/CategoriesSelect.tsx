import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

type Props = {
  setCategorie: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }>
  >;
  categorie: { value: string; label: string };
  refetch?: boolean;
};
export const CategoriesSelect = ({
  categorie,
  setCategorie,
  refetch,
}: Props) => {
  const defaultValue = { value: '', label: 'Empty' };
  const handleCategoriesChange = (option: any) => {
    setCategorie(option);
  };
  const [categories, setCategories] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/categorie/getall'
      ); // replace with your API endpoint
      const transformedOptions = response.data.map((option: any) => ({
        // eslint-disable-next-line no-underscore-dangle
        value: option._id,
        label: option.name,
      }));
      setCategories(transformedOptions);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [refetch]);
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
CategoriesSelect.defaultProps = {
  refetch: false,
};
