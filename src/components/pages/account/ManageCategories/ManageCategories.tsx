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
    <div className="w-full h-full flex mt-8 justify-between">
      <div className="w-full ">
        <h1 className="text-text-lg pb-8  font-medium">Categories</h1>
        {categories.map((item) => (
          <div className="flex border-b-[1px] border-gray-500 py-8 items-center w-full justify-between">
            <h1 className="font-medium text-text-md">{item.name}</h1>
            <div className="flex items-center gap-[10px] justify-end">
              {/* Edit */}
              <Edit item={item} type="categorie" />
              <BiTrash
                className="w-[24px] h-[24px] fill-red-500"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => deleteCategorie(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="h-full w-[4px] mx-20 bg-gray-500" />
      <div className="w-full ">
        <h1 className="text-text-lg pb-8  font-medium">Sous Categories</h1>
        {sousCategories.map((item) => (
          <div className="flex  border-b-[1px] border-gray-500 py-8 items-center w-full justify-between">
            <div>
              <h1 className="text-text-md font-medium">{item.name}</h1>
              <p className="text-text-xs text-gray-400">
                {item.categorie.name}
              </p>
            </div>
            <div className="flex items-center gap-[10px] justify-end">
              <Edit item={item} type="sousCat" />
              <BiTrash
                className="w-[24px] h-[24px] fill-red-500"
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
