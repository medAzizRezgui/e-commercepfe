import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import React, { useState } from 'react';
import { BiEdit, BiX } from 'react-icons/bi';

import { Input } from '../../Input';

type Props = {
  stock: number;
  name: string;
  id: any;
  price: number;
  desc: string;
};
const Edit = ({ stock, name, id, price, desc }: Props) => {
  const [newStock, setNewStock] = useState(stock);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newDesc, setNewDesc] = useState(desc);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const formData = new FormData();
  formData.append('name', newName);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('price', newPrice);
  // formData.append('sousCategorie', 'Category');
  // formData.append('rating', '5');
  formData.append('description', newDesc);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('countInStock', newStock);
  // formData.append('files', file1);
  // formData.append('files', file2);
  // formData.append('files', file3);
  // formData.append('files', file4);
  // formData.append('files', file5);
  // formData.append('files', file6);

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
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] z-[1000] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-blue-500 m-0 text-[17px] font-medium">
            Edit Product
          </Dialog.Title>
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
