import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { BiTrash } from 'react-icons/bi';

import { Product as ProdType } from '../../../../../types/Product';
import Edit from '../Edit/Edit';

type Props = {
  item: ProdType;
};
export const Product = ({ item }: Props) => {
  const deleteProd = async (id: string) => {
    await axios
      .delete(`http://localhost:5000/product/delete/${id}`)
      .then(() => {});
  };

  return (
    <div className="flex gap-[10px] py-8 border-b-[1px] border-gray-500 items-center">
      <Image src={item.files[0]} alt="" width={75} height={75} />
      <div>
        <h1 className="text-blue-500 text-text-md font-medium">{item.name}</h1>
        <p className="text-text-sm text-gray-400">
          {item?.categorie?.name} - {item?.sousCategorie?.name}
        </p>
      </div>

      <div className="flex items-center gap-[10px] ml-auto">
        <BiTrash
          className="w-[24px] h-[24px] fill-red-500"
          // eslint-disable-next-line no-underscore-dangle
          onClick={() => deleteProd(item._id)}
        />
        <Edit
          price={item.price}
          stock={item.countInStock}
          name={item.name}
          // eslint-disable-next-line no-underscore-dangle
          id={item._id}
          desc={item.description}
        />
      </div>
    </div>
  );
};
