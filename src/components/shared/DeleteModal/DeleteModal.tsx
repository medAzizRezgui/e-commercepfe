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
        open ? 'fixed' : 'hidden'
      }  left-0 top-0 z-[9000]  flex h-[100vh] w-full items-center justify-center`}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setOpen(false)}
        className="absolute left-0 top-0 h-[100vh]  w-full cursor-pointer bg-gray-400 opacity-25"
      />
      {/* Overlay */}
      <div className=" absolute flex gap-[10px] rounded-[4px] bg-white p-24 ">
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
