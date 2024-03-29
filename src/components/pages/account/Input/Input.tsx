import React, { HTMLInputTypeAttribute } from 'react';

type Props = {
  label: string;
  value: string | number | readonly string[] | undefined;
  type: HTMLInputTypeAttribute | undefined;
  setValue: (arg: any) => void;
  placeholder: string;
};
export const Input = ({ label, value, type, setValue, placeholder }: Props) => (
  <div className="flex w-full flex-col gap-[10px] py-4">
    <p className="font-medium">{label}</p>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      className="rounded-full border-[1px] border-gray-400  px-24 py-8"
    />
  </div>
);
