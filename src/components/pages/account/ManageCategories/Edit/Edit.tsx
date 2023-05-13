import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import React, { useState } from 'react';
import { BiEdit, BiX } from 'react-icons/bi';

import { Category } from '../../../../../types/Category';
import { Input } from '../../Input';

type Props = {
  item: Category;
  type: 'categorie' | 'sousCat';
};
export const Edit = ({ item, type }: Props) => {
  const [newCategorieName, setNewCategorieName] = useState(item.name);
  const updateCategorie = async () => {
    await axios
      // eslint-disable-next-line no-underscore-dangle
      .patch(`http://localhost:5000/${type}/${item._id}`, {
        name: newCategorieName,
      })
      .then(() => console.log('done'))
      .catch((e) => {
        console.error(e);
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
            label="Name"
            value={newCategorieName}
            type="text"
            setValue={setNewCategorieName}
            placeholder={item.name}
          />
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                type="button"
                onClick={updateCategorie}
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
