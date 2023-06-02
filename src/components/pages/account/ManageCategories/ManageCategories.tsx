import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useRecoilState } from 'recoil';

import { refetchCategoriesState } from '../../../../atoms/refetchCategoriesAtom';
import { axiosPrivate } from '../../../../pages/api/axios';
import { Category } from '../../../../types/Category';
import { SousCategory } from '../../../../types/SousCategory';
import { useGetUser } from '../../../../utils/hooks/useGetUser';
import { DeleteModal } from '../../../shared/DeleteModal';
import { Toast } from '../../../shared/toast';

import { Edit } from './Edit/Edit';

type Props = {
  categories: Category[];
  sousCategories: SousCategory[];
};
export const ManageCategories = ({ categories, sousCategories }: Props) => {
  const [openSousCategorieModal, setOpenSousCategorieModal] = useState(false);
  const [openCategorieModal, setOpenCategorieModal] = useState(false);

  const [refetch, setRefetch] = useRecoilState(refetchCategoriesState);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { jwt } = useGetUser();
  const deleteCategorie = async (id: string) => {
    setSuccess(false);
    setError(false);
    await axiosPrivate
      .delete(`/categorie/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then(() => {
        setSuccess(true);
        setError(false);
        setRefetch(!refetch);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          router.push('/auth');
        }
        setSuccess(false);
        setError(true);
      });
  };
  const deleteSousCategorie = async (id: string) => {
    setSuccess(false);
    setError(false);
    await axiosPrivate
      .delete(`/sousCat/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then(() => {
        setSuccess(true);
        setError(false);
        setRefetch(!refetch);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          router.push('/auth');
        }
        setSuccess(false);
        setError(true);
      });
  };
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const handleDeleteSousCategorie = (
    selectedId: string,
    selectedName: string
  ) => {
    setName(selectedName);
    setId(selectedId);
    setOpenSousCategorieModal(true);
  };
  const handleDeleteCategorie = (selectedId: string, selectedName: string) => {
    setName(selectedName);
    setId(selectedId);
    setOpenCategorieModal(true);
  };
  return (
    <div className="mt-8 flex h-full w-full justify-between">
      <Toast
        success={success}
        error={error}
        text="Success"
        errorMsgs={[{ msg: 'Something went wrong' }]}
      />
      <div className="w-full ">
        <h1 className="pb-8 text-text-lg  font-medium">Categories</h1>
        {categories.map((item) => (
          <div className="flex w-full items-center justify-between border-b-[1px] border-gray-500 py-8">
            <h1 className="text-text-md font-medium">{item.name}</h1>
            <div className="flex items-center justify-end gap-[10px]">
              {/* Edit */}
              <Edit
                item={item}
                type="categorie"
                setError={setError}
                setSuccess={setSuccess}
              />
              <BiTrash
                className="h-[24px] w-[24px] cursor-pointer fill-red-500"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => handleDeleteCategorie(item._id, item.name)}
              />
            </div>
          </div>
        ))}
        <DeleteModal
          open={openCategorieModal}
          setOpen={setOpenCategorieModal}
          deleteFn={deleteCategorie}
          name={name}
          id={id}
        />
      </div>
      <div className="mx-20 h-full w-[4px] bg-gray-500" />
      <div className="w-full ">
        <h1 className="pb-8 text-text-lg  font-medium">Sub Categories</h1>
        {sousCategories.map((item) => (
          <div className="flex  w-full items-center justify-between border-b-[1px] border-gray-500 py-8">
            <div>
              <h1 className="text-text-md font-medium">{item.name}</h1>
              <p className="text-text-xs text-gray-400">
                {item.categorie.name}
              </p>
            </div>
            <div className="flex items-center justify-end gap-[10px]">
              <Edit
                item={item}
                type="sousCat"
                setError={setError}
                setSuccess={setSuccess}
              />
              <BiTrash
                className="h-[24px] w-[24px] cursor-pointer fill-red-500"
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => handleDeleteSousCategorie(item._id, item.name)}
              />
            </div>
          </div>
        ))}
        <DeleteModal
          open={openSousCategorieModal}
          setOpen={setOpenSousCategorieModal}
          deleteFn={deleteSousCategorie}
          name={name}
          id={id}
        />
      </div>
    </div>
  );
};
