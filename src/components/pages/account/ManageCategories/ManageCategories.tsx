import axios from 'axios';
import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';

import { Category } from '../../../../types/Category';
import { SousCategory } from '../../../../types/SousCategory';
import { DeleteModal } from '../../../shared/DeleteModal';

import { Edit } from './Edit/Edit';

type Props = {
  categories: Category[];
  sousCategories: SousCategory[];
};
export const ManageCategories = ({ categories, sousCategories }: Props) => {
  const [openDelModal, setOpenDelModal] = useState(false);
  const deleteCategorie = async (id: string) => {
    await axios
      .delete(`http://localhost:5000/categorie/delete/${id}`)
      .then(() => console.log('done'))
      .catch((e) => {
        console.error(e);
      });
  };
  const deleteSousCategorie = async (id: string) => {
    await axios
      .delete(`http://localhost:5000/sousCat/delete/${id}`)
      .then(() => console.log('done'))
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="mt-8 flex h-full w-full justify-between">
      <div className="w-full ">
        <h1 className="pb-8 text-text-lg  font-medium">Categories</h1>
        {categories.map((item) => (
          <div className="flex w-full items-center justify-between border-b-[1px] border-gray-500 py-8">
            <h1 className="text-text-md font-medium">{item.name}</h1>
            <div className="flex items-center justify-end gap-[10px]">
              {/* Edit */}
              <Edit item={item} type="categorie" />
              <BiTrash
                className="h-[24px] w-[24px] fill-red-500"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => deleteCategorie(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-20 h-full w-[4px] bg-gray-500" />
      <div className="w-full ">
        <h1 className="pb-8 text-text-lg  font-medium">Sous Categories</h1>
        {sousCategories.map((item) => (
          <div className="flex  w-full items-center justify-between border-b-[1px] border-gray-500 py-8">
            <div>
              <h1 className="text-text-md font-medium">{item.name}</h1>
              <p className="text-text-xs text-gray-400">
                {item.categorie.name}
              </p>
            </div>
            <div className="flex items-center justify-end gap-[10px]">
              <Edit item={item} type="sousCat" />
              <BiTrash
                className="h-[24px] w-[24px] fill-red-500"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => setOpenDelModal(true)}
              />
            </div>
            <DeleteModal
              open={openDelModal}
              setOpen={setOpenDelModal}
              deleteFn={deleteSousCategorie}
              id={item._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
