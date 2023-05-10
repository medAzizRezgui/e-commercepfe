import axios from 'axios';
import React, { useState } from 'react';

import { Input } from '../Input';

import { CategoriesSelect } from './CategoriesSelect';
import { SousCategoriesSelect } from './SousCategoriesSelect';

export const ProductInputs = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedFiles = Array.from(e.target.files);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFiles(selectedFiles);
  };

  const [sousCategories, setSousCategories] = useState([
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categorie, setCategorie] = useState({ value: '', label: '' });
  const [sousCategorie, setSousCategorie] = useState({
    value: '',
    label: '',
  });
  const [description, setDescription] = useState('');

  const [categories, setCategories] = useState([
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]);

  const formData = new FormData();
  formData.append('name', name);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('price', price);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('countInStock', stock);
  formData.append('categorie', categorie.value);
  formData.append('sousCategorie', sousCategorie.value);
  formData.append('description', description);

  files.forEach((value) => {
    formData.append('files', value);
  });

  const addProd = async () => {
    await axios.post('http://localhost:5000/product/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex  flex-col   w-full ">
        <Input
          placeholder="Name..."
          label="Product Name"
          value={name}
          type="text"
          setValue={setName}
        />
        <Input
          placeholder="Price..."
          label="Product Price"
          value={price}
          type="number"
          setValue={setPrice}
        />
        <Input
          placeholder="Count In Stock..."
          label="Product Stock"
          value={stock}
          type="number"
          setValue={setStock}
        />
        <Input
          placeholder="Description..."
          label="Product Description"
          value={description}
          type="text"
          setValue={setDescription}
        />
        {/* Categories Select */}
        <CategoriesSelect
          setCategories={setCategories}
          setCategorie={setCategorie}
          categorie={categorie}
          categories={categories}
        />
        <SousCategoriesSelect
          categorie={categorie}
          setSousCategories={setSousCategories}
          setSousCategorie={setSousCategorie}
          sousCategorie={sousCategorie}
          sousCategories={sousCategories}
        />
        <button
          type="button"
          className="bg-gray-500 w-min px-24 py-4 block my-20 rounded-full"
          onClick={() => addProd()}
        >
          Add
        </button>
      </div>
      <div className=" mx-[20px] flex items-center flex-col justify-center relative w-[50%] border-gray-400 h-[150px] border-2 rounded-[12px] p-14 border-dashed ">
        <input
          className="absolute cursor-pointer opacity-0  w-full h-full"
          type="file"
          multiple
          onChange={(e) => handleFileChange(e)}
        />
        <button
          type="button"
          className="bg-yellow-500 cursor-pointer text-dark-500 font-medium px-24 py-8 rounded-full"
        >
          Add Images
        </button>
        <p>{files.length} images selected</p>
      </div>
    </div>
  );
};
