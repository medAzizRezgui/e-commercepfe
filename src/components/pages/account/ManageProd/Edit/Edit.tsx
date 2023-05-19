import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiEdit, BiX } from 'react-icons/bi';

import { Input } from '../../Input';
import { CategoriesSelect } from '../../ProductInputs/CategoriesSelect';
import { SousCategoriesSelect } from '../../ProductInputs/SousCategoriesSelect';

type Props = {
  stock: number;
  name: string;
  id: any;
  price: number;
  desc: string;
  oldFiles: string[];
};
const Edit = ({ stock, name, id, price, desc, oldFiles }: Props) => {
  const [newStock, setNewStock] = useState(stock);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newDesc, setNewDesc] = useState(desc);
  const [categorie, setCategorie] = useState({ value: '', label: '' });
  const [sousCategorie, setSousCategorie] = useState({
    value: '',
    label: '',
  });
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const [files, setFiles] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedFiles = Array.from(e.target.files);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFiles(selectedFiles);
  };
  const formData = new FormData();
  formData.append('name', newName);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('price', newPrice);
  formData.append('categorie', categorie.value);
  formData.append('sousCategorie', sousCategorie.value);
  formData.append('description', newDesc);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('countInStock', newStock);
  files.forEach((value) => {
    formData.append('files', value);
  });
  oldFiles.forEach((value) => {
    formData.append('files', value);
  });

  const updatedProd = async () => {
    axios
      .patch(`http://localhost:5000/product/update/${id}`, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BiEdit className="w-[24px] h-[24px] fill-blue-500 cursor-pointer" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-dark-500 opacity-90 data-[state=open]:animate-overlayShow z-[999] top-[-10px] fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] z-[1000] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-blue-500 m-0 text-[17px] font-medium">
            Edit Product
          </Dialog.Title>
          <div className="flex  gap-[15px]">
            <div className="w-[50%]">
              <Input
                placeholder="Name..."
                label="Product Name"
                value={newName}
                type="text"
                setValue={setNewName}
              />
              <Input
                placeholder="Price..."
                label="Product Price"
                value={newPrice}
                type="number"
                setValue={setNewPrice}
              />
              <Input
                placeholder="Count In Stock..."
                label="Product Stock"
                value={newStock}
                type="number"
                setValue={setNewStock}
              />
              <Input
                placeholder="Description..."
                label="Product Description"
                value={newDesc}
                type="text"
                setValue={setNewDesc}
              />
              <CategoriesSelect
                setCategorie={setCategorie}
                categorie={categorie}
              />
              <SousCategoriesSelect
                setSousCategorie={setSousCategorie}
                categorie={categorie}
                sousCategorie={sousCategorie}
              />
            </div>

            <div className="w-[50%]">
              <div className="grid grid-cols-3 w-full">
                {oldFiles.map((img) => (
                  <Image src={img} alt="" width={150} height={150} />
                ))}
              </div>
              <div className=" mx-[20px] flex items-center flex-col justify-center relative  border-gray-400 h-[150px] border-2 rounded-[12px] p-14 border-dashed w-full ">
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
          </div>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                type="button"
                onClick={updatedProd}
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              type="button"
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <BiX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Edit;
