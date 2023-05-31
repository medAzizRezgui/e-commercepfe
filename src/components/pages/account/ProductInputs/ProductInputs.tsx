import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import { useRecoilState } from 'recoil';

import { refetchProdsState } from '../../../../atoms/refetchProdsAtom';
import axiosProduction from '../../../../pages/api/axios';
import { TextArea } from '../../../shared/TextArea';
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
  const [profit, setProfit] = useState(0);

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

  formData.append('specifications', JSON.stringify(parseArray(specs)));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('profit', profit);
  files.forEach((value) => {
    formData.append('files', value);
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useRecoilState(refetchProdsState);

  const addProd = async () => {
    setLoading(true);
    await axiosProduction
      .post('/product/add', formData, {
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
    placeholder: 'Add...',
    maxLength: 200,
    // Add any other props you want to pass down
  };
  return (
    <div className="flex w-full items-center justify-between">
      <Toast
        success={success}
        error={error}
        text="Done"
        errorMsgs={[{ msg: 'Error, try again' }]}
      />

      <div className="flex  w-full   flex-col ">
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

        <TextArea
          placeholder="Description..."
          label="Product Description"
          value={description}
          setValue={setDescription}
        />

        <Input
          placeholder="SKU..."
          label="SKU"
          value={SKU}
          type="text"
          setValue={setSKU}
        />
        <Input
          placeholder="Profit"
          label="Profit"
          value={profit}
          type="number"
          setValue={setProfit}
        />
        <div className="flex flex-col gap-[10px] py-4">
          <p className="font-medium">Featuress</p>
          <TagsInput
            className="border-2 border-gray-500 p-8"
            inputProps={inputProps}
            value={tags}
            onChange={(e) => setTags(e)}
          />
        </div>
        <div className="flex flex-col gap-[10px] py-4">
          <p className="font-medium">Specifications</p>
          <TagsInput
            className="border-2 border-gray-500 p-8"
            inputProps={inputProps}
            value={specs}
            onChange={(e) => setSpecs(e)}
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
          className="my-20 block w-min rounded-full bg-gray-500 px-24 py-4"
          onClick={() => addProd()}
        >
          {loading ? 'Loading' : 'Add'}
        </button>
      </div>
      <div className=" relative mx-[20px] flex h-[150px] w-[50%] flex-col items-center justify-center rounded-[12px] border-2 border-dashed border-gray-400 p-14 ">
        <input
          className="absolute h-full w-full  cursor-pointer opacity-0"
          type="file"
          multiple
          onChange={(e) => handleFileChange(e)}
        />
        <button
          type="button"
          className="cursor-pointer rounded-full bg-yellow-500 px-24 py-8 font-medium text-dark-500"
        >
          Add Images
        </button>
        <p>{files.length} images selected</p>
      </div>
    </div>
  );
};
