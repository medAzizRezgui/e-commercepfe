import React from 'react';

type Props = {
  title: string;
  desc: string;
};
export const Heading = ({ desc, title }: Props) => (
  <div>
    <h1 className="text-display-xs pb-24">{title}</h1>
    <p className="text-text-sm pb-40 mr-128 text-gray-400 ">{desc}</p>
  </div>
);
