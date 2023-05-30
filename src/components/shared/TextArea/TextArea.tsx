import React from 'react';

type Props = {
  label: string;
  value: string | number | readonly string[] | undefined;

  setValue: (arg: any) => void;
  placeholder: string;
};
export const TextArea = ({
  label,
  value,

  setValue,
  placeholder,
}: Props) => (
  <div className="flex w-full flex-col gap-[10px] py-4">
    <p className="font-medium">{label}</p>
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      className=" h-[100px] max-h-[200px] min-h-[100px] rounded-[4px] border-[1px] border-gray-400  px-24 py-8"
    />
  </div>
);
