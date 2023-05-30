import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';
import { BiEdit, BiX } from 'react-icons/bi';
import { useRecoilState } from 'recoil';

import { refetchProdsState } from '../../../../../atoms/refetchProdsAtom';
import axiosProduction from '../../../../../pages/api/axios';
import { Category } from '../../../../../types/Category';
import { Input } from '../../Input';

type Props = {
  item: Category;

  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'categorie' | 'sousCat';
};
export const Edit = ({
  item,
  type,
  setError,

  setSuccess,
}: Props) => {
  const [newCategorieName, setNewCategorieName] = useState(item.name);
  const [refetch, setRefetch] = useRecoilState(refetchProdsState);

  const updateCategorie = async () => {
    setSuccess(false);
    setError(false);
    await axiosProduction
      // eslint-disable-next-line no-underscore-dangle
      .patch(`/${type}/${item._id}`, {
        name: newCategorieName,
      })
      .then(() => {
        setSuccess(true);
        setError(false);
        setRefetch(!refetch);
      })
      .catch(() => {
        setSuccess(false);
        setError(true);
      });
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BiEdit className="h-[24px] w-[24px] cursor-pointer fill-blue-500" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 top-[-10px] z-[999] bg-dark-500 opacity-90 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium text-blue-500">
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
                className=" inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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
