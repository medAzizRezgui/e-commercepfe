import React from 'react';

import { Sort } from './Sort';

export const ShopHeader = ({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="w-[100%] mb-40 py-12 flex justify-end px-24 rounded-[12px] bg-gray-500 ">
    <Sort setSort={setSort} />
  </div>
);
