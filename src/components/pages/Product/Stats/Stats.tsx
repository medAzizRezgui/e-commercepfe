import React from 'react';

import { Product } from '../../../../types/Product';

type Props = {
  prod: Product;
};
export const Stats = ({ prod }: Props) => (
  <>
    {prod.specifications.length > 5 && (
      <div className="w-full max-w-[1400px] my-12 drop-shadow-sm p-64  bg-white mx-auto">
        {/* Stats */}
        <div className="flex items-center relative mx-80  pb-8 mb-40 gap-[40px] justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-text-xl font-medium">Specifications</h1>
            <span className="block mt-4 h-[3px] rounded-full w-full  bg-yellow-500" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-text-xl font-[300] ">Reviews</h1>
          </div>
          <span className="w-full absolute h-[1px] bottom-[9px] z-[-1] bg-gray-500" />
        </div>
        {JSON.parse(prod?.specifications).map((item) => (
          <div className="flex items-center mb-8  border-b-[1px] border-gray-500 pb-4">
            <h1 className="font-medium w-[350px]">{item.Spec}</h1>
            <p className="text-text-sm">{item.Value}</p>
          </div>
        ))}
      </div>
    )}
  </>
);
