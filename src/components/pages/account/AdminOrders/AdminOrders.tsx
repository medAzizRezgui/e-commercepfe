import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { axiosPrivate } from '../../../../pages/api/axios';
import type { Order as OrderType } from '../../../../types/Order';
import { useGetUser } from '../../../../utils/hooks/useGetUser';
import { DeleteModal } from '../../../shared/DeleteModal';
import { Toast } from '../../../shared/toast';

import { Order } from './Order';

type Props = {
  orders: OrderType[];
  refetch: boolean;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AdminOrders = ({ orders, setRefetch, refetch }: Props) => {
  const [openDelModal, setOpenDelModal] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const handleDeleteOrder = (selectedId: string, selectedName: string) => {
    setName(selectedName);
    setId(selectedId);
    setOpenDelModal(true);
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { jwt } = useGetUser();
  const deleteOrder = async (orderId: string) => {
    setSuccess(false);
    setError(false);
    await axiosPrivate
      .delete(`/order/delete/${orderId}`, {
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

  return (
    <div className="w-full">
      <Toast
        success={success}
        error={error}
        text="Success"
        errorMsgs={[{ msg: 'Something went wrong' }]}
      />
      <div className="flex items-center justify-between border-b-2 border-gray-500 pb-8">
        <h1 className="w-[150px]">Client</h1>
        <h1 className="w-[400px]">Products</h1>
        <h1 className="w-[100px]">Payment</h1>
        <h1 className="w-[150px]">Status</h1>
        <h1 className="w-[100px]">Coupon</h1>
        <h1 className="w-[100px] ">Price</h1>
      </div>
      {orders?.map((order) => (
        <Order
          setRefetch={setRefetch}
          refetch={refetch}
          setSuccess={setSuccess}
          setError={setError}
          handleDeleteOrder={handleDeleteOrder}
          key={order._id}
          order={order}
        />
      ))}
      <DeleteModal
        open={openDelModal}
        setOpen={setOpenDelModal}
        deleteFn={deleteOrder}
        id={id}
        name={name}
      />
    </div>
  );
};
