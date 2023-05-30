import React from 'react';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteFn: (id: string) => void;
  id: string;
  name: string;
};
export const DeleteModal = ({ deleteFn, setOpen, name, open, id }: Props) => {
  const handleDelete = () => {
    deleteFn(id);
    setOpen(false);
  };
  return (
    <div
      className={`${
        open ? 'fixed' : 'hidden'
      }  left-0 top-0 z-[9000]  flex h-[100vh] w-full items-center justify-center`}
    >
      {/* Overlay */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setOpen(false)}
        className="absolute left-0 top-0 h-[100vh]  w-full cursor-pointer bg-dark-500 opacity-10"
      />
      <div className=" absolute flex flex-col gap-[10px] rounded-[4px] bg-white p-24 opacity-100 ">
        <h1>You want to delete : {name} ?</h1>
        {/* eslint-disable-next-line no-underscore-dangle */}
        <button
          type="button"
          className="cursor-pointer rounded-[4px] bg-red-500 px-12 py-8 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="cursor-pointer rounded-[4px] bg-gray-500 px-12 py-8 text-white"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
