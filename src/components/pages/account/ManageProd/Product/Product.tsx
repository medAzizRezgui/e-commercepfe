import Image from 'next/image';
import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { useRecoilState } from 'recoil';

import { refetchProdsState } from '../../../../../atoms/refetchProdsAtom';
import axiosProduction from '../../../../../pages/api/axios';
import { Product as ProdType } from '../../../../../types/Product';
import { DeleteModal } from '../../../../shared/DeleteModal';
import Edit from '../Edit/Edit';

type Props = {
  item: ProdType;
};
export const Product = ({ item }: Props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [refetch, setRefetch] = useRecoilState(refetchProdsState);

  const deleteProd = async (id: string) => {
    setDeleteModal(false);
    await axiosProduction
      .delete(`/product/delete/${id}`)
      .then(() => {
        setRefetch(!refetch);
      })
      .catch((error) => {
        // Code to handle errors, if any occur during the DELETE request
        console.log(error);
      });
  };

  return (
    <div className="flex items-center gap-[10px] border-b-[1px] border-gray-500 py-8">
      <Image src={item.files[0]} alt="" width={75} height={75} />
      <div>
        <h1 className="text-text-md font-medium text-blue-500">{item.name}</h1>
        <p className="text-text-sm text-gray-400">
          {item?.categorie?.name} - {item?.sousCategorie?.name}
        </p>
      </div>

      <div className="ml-auto flex items-center gap-[10px]">
        <BiTrash
          className="h-[24px] w-[24px] cursor-pointer fill-red-500"
          onClick={() => setDeleteModal(true)}
        />

        <Edit
          oldCategorie={{
            value: item.categorie._id,
            label: item.categorie.name,
          }}
          oldSousCategorie={{
            value: item.sousCategorie._id,
            label: item.sousCategorie.name,
          }}
          oldFiles={item.files}
          price={item.price}
          stock={item.countInStock}
          name={item.name}
          sku={item.sku}
          id={item._id}
          desc={item.description}
          specifications={item?.specifications}
          oldDiscount={item?.discount}
          oldFeatures={item.features}
        />
      </div>

      {/*  Delete Modal */}
      <DeleteModal
        open={deleteModal}
        setOpen={setDeleteModal}
        deleteFn={deleteProd}
        // eslint-disable-next-line no-underscore-dangle
        id={item._id}
      />
    </div>
  );
};
