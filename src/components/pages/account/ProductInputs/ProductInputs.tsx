import axios from 'axios';
import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import { useRecoilState } from 'recoil';

import { refetchProdsState } from '../../../../atoms/refetchProdsAtom';
import { Toast } from '../../../shared/toast';
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
  const [features, setFeatures] = useState([]);
  const [SKU, setSKU] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categorie, setCategorie] = useState({ value: '', label: '' });
  const [sousCategorie, setSousCategorie] = useState({
    value: '',
    label: '',
  });
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [specs, setSpecs] = useState([]);

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
  formData.append('sku', SKU);
  tags.forEach((value) => {
    formData.append('features', value);
  });

  formData.append('specifications', JSON.stringify(features));

  files.forEach((value) => {
    formData.append('files', value);
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useRecoilState(refetchProdsState);

  function parseArray(arr: string[]) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const [key, value] = item.split(':');

      if (key && value) {
        const obj = { Spec: key.trim(), Value: value.trim() };
        result.push(obj);
      }
    }

    return result;
  }

  const handleSpecChange = (val: string[]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setSpecs(val);
    const f = parseArray(specs);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFeatures(f);
  };
  const addProd = async () => {
    setLoading(true);
    await axios
      .post('http://localhost:5000/product/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => setSuccess(true))
      .then(() => setRefetch(!refetch))
      .catch(() => setError(true));
    setLoading(false);
  };

  const inputProps = {
    placeholder: 'Ajouter...',
    maxLength: 200,
    // Add any other props you want to pass down
  };
  return (
    <div className="flex justify-between items-center w-full">
      <Toast
        success={success}
        error={error}
        text="Done"
        errorMsgs={[{ msg: 'Error, try again' }]}
      />

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
        <Input
          placeholder="SKU..."
          label="SKU"
          value={SKU}
          type="text"
          setValue={setSKU}
        />

        <div className="flex flex-col gap-[10px] py-4">
          <p className="font-medium">Points Forts</p>
          <TagsInput
            inputProps={inputProps}
            value={tags}
            onChange={(e) => setTags(e)}
          />
        </div>
        <div className="flex flex-col gap-[10px] py-4">
          <p className="font-medium">Specifications</p>
          <TagsInput
            inputProps={inputProps}
            value={specs}
            onChange={handleSpecChange}
          />
        </div>
        {/* Categories Select */}
        <CategoriesSelect setCategorie={setCategorie} categorie={categorie} />
        <SousCategoriesSelect
          categorie={categorie}
          setSousCategorie={setSousCategorie}
          sousCategorie={sousCategorie}
        />
        <button
          disabled={loading}
          type="button"
          className="bg-gray-500 w-min px-24 py-4 block my-20 rounded-full"
          onClick={() => addProd()}
        >
          {loading ? 'Loading' : 'Add'}
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
