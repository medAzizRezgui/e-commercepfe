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
  <div className="w-[50%]">
    <div className="grid grid-cols-3 mb-12 w-full">
      {oldFiles.map((img, i) => (
        <div className=" flex cursor-pointer group items-center justify-center">
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
            <BiTrash className="fill-red-500 w-[20px] h-[20px]" />
          </div>
        </div>
      ))}
    </div>
    <div className="  flex items-center flex-col justify-center relative  border-gray-400 h-[150px] border-2 rounded-[12px] p-14 border-dashed w-full ">
      <input
        className="absolute cursor-pointer opacity-0  w-full h-full"
        type="file"
        multiple
        onChange={(e) => handleFileChange(e)}
      />

      <button
        type="button"
        className="bg-yellow-500 cursor-pointer text-dark-500 font-medium px-24 py-8 rounded-full"
      >
        Add Images
      </button>
      <p>{files.length} images selected</p>
      <p className="text-text-xs text-center pt-24">
        Please note that the first selected image will be used as the
        product&apos;s main image
      </p>
    </div>
  </div>
);
