import Image from 'next/image';
import React from 'react';
import { BiTrash } from 'react-icons/bi';

type Props = {
  handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void;
  oldFiles: string[];
  deleteImg(imgId: number): void;
  files: File[];
};
export const EditImages = ({
  handleFileChange,
  oldFiles,
  deleteImg,
  files,
}: Props) => (
  <div className="w-[100%]">
    <div className="mb-12 grid w-full grid-cols-3">
      {oldFiles.map((img, i) => (
        <div className=" group flex cursor-pointer items-center justify-center">
          <Image
            className="group-hover:opacity-50 "
            src={img}
            alt=""
            width={150}
            height={150}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={() => deleteImg(i)}
            className="absolute opacity-0 group-hover:opacity-100"
          >
            <BiTrash className="h-[20px] w-[20px] fill-red-500" />
          </div>
        </div>
      ))}
    </div>
    <div className="  relative flex h-[150px] w-full flex-col  items-center justify-center rounded-[12px] border-2 border-dashed border-gray-400 p-14 ">
      <input
        className="absolute h-full w-full  cursor-pointer opacity-0"
        type="file"
        multiple
        onChange={(e) => handleFileChange(e)}
      />

      <button
        type="button"
        className="cursor-pointer rounded-full bg-yellow-500 px-24 py-8 font-medium text-dark-500"
      >
        Add Images
      </button>
      <p>{files.length} images selected</p>
      <p className="pt-24 text-center text-text-xs">
        Please note that the first selected image will be used as the
        product&apos;s main image
      </p>
    </div>
  </div>
);
