import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import Select, { OnChangeValue } from 'react-select';

import { axiosPrivate } from '../../../../pages/api/axios';
import { Order } from '../../../../types/Order';
import { useGetUser } from '../../../../utils/hooks/useGetUser';
import { DeleteModal } from '../../../shared/DeleteModal';
import { Toast } from '../../../shared/toast';

type Props = {
  orders: Order[];
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

  const options = [
    {
      value: 0,
      label: 'Not Delivered',
    },
    {
      value: 1,
      label: 'Delivered',
    },
    {
      value: 2,
      label: 'Cancelled',
    },
    {
      value: 3,
      label: 'Returned',
    },
  ];

  const handleStatusChange = async (
    val: OnChangeValue<unknown, false>,
    orderId: string
  ) => {
    setSuccess(false);
    setError(false);
    await axiosPrivate
      .patch(
        `/order/status/${orderId}`,
        { status: val },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
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
        <div className="flex w-full items-center justify-between border-b-2 border-gray-500 pb-8">
          <h1 className="w-[150px]">{order.fullname}</h1>
          <div>
            {order.Products.map((prod) => (
              <div className="flex w-[400px] items-center justify-start gap-[10px]">
                <Image
                  loading="eager"
                  src={prod?.image}
                  width={50}
                  height={50}
                  alt=""
                />
                <h1>{prod.name}</h1>
              </div>
            ))}
          </div>
          <h1
            className={` ${
              order.isPaid ? 'bg-green-500' : ' bg-red-500'
            }  w-[100px] rounded-full py-4 text-center text-white`}
          >
            {order.isPaid ? 'Paid' : 'Not Paid'}
          </h1>

          <div className="w-[150px]">
            <Select
              defaultValue={{
                value: order.status.value,
                label: order.status.label,
              }}
              isSearchable={false}
              options={options}
              onChange={(e) => handleStatusChange(e, order._id)}
            />
          </div>
          <h1 className="w-[100px]">{order.coupon}</h1>
          <h1 className="w-[100px] text-right font-semibold ">
            {order.totalPrice.toFixed(2)} DT
          </h1>
          <BiTrash
            className="h-[20px] w-[20px] cursor-pointer fill-red-500"
            onClick={() => handleDeleteOrder(order._id, order.fullname)}
          />
        </div>
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
