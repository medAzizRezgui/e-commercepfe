import React from 'react';

import { Sort } from './Sort';

export const ShopHeader = ({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="mb-40 flex w-[100%] justify-end rounded-[12px] bg-gray-500 px-24 py-12 ">
    <Sort setSort={setSort} />
  </div>
);
