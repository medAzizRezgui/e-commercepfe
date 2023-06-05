import React, { Fragment } from 'react';

import { Product } from '../../../../types/Product';

type Props = {
  prod: Product;
};
export const Stats = ({ prod }: Props) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {prod.specifications.length > 5 && (
      <div className="mx-auto my-12 w-full max-w-[1400px] bg-white  p-64 drop-shadow-sm">
        {/* Stats */}
        <div className="relative mx-80 mb-40 flex  items-center justify-center gap-[40px] pb-8">
          <div className="flex flex-col items-center">
            <h1 className="text-text-xl font-medium">Specifications</h1>
            <span className="mt-4 block h-[3px] w-full rounded-full  bg-yellow-500" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-text-xl font-[300] ">Reviews</h1>
          </div>
          <span className="absolute bottom-[9px] z-[-1] h-[1px] w-full bg-gray-500" />
        </div>
        {JSON.parse(prod?.specifications).map(
          (item: { Spec: string; Value: string }) => (
            <div
              key={item.Value}
              className="mb-8 flex items-center  border-b-[1px] border-gray-500 pb-4"
            >
              <h1 className="w-[350px] font-medium">{item.Spec}</h1>
              <p className="text-text-sm">{item.Value}</p>
            </div>
          )
        )}
      </div>
    )}
  </>
);
