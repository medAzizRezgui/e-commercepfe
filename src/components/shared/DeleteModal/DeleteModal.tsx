import React from 'react';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteFn: (id: string) => void;
  id: string;
};
export const DeleteModal = ({ deleteFn, setOpen, open, id }: Props) => {
  const handleDelete = () => {
    deleteFn(id);
    setOpen(false);
  };
  return (
    <div
      className={`${
        open ? 'absolute' : 'hidden'
      }  top-0 left-0 z-[9000]  flex items-center justify-center w-full h-[100vh]`}
    >
      <div
        onClick={() => setOpen(false)}
        className="w-full absolute cursor-pointer top-0  left-0 h-[100vh] bg-gray-400 opacity-25"
      />
      {/* Overlay */}
      <div className=" absolute flex gap-[10px] bg-white p-24 rounded-[4px] ">
        {/* eslint-disable-next-line no-underscore-dangle */}
        <button
          type="button"
          className="cursor-pointer text-white px-12 py-8 rounded-[4px] bg-red-500"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="cursor-pointer text-white px-12 py-8 rounded-[4px] bg-gray-500"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
