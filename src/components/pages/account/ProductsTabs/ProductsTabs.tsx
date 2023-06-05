import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import { Product as ProdType } from '../../../../types/Product';
import { Product } from '../ManageProd/Product';
import { ProductInputs } from '../ProductInputs';

type Props = {
  products: ProdType[];
};
export const ProductsTabs = ({ products }: Props) => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Add
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Manage
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      <div className="mt-8">
        <ProductInputs />
      </div>
    </Tabs.Content>
    <Tabs.Content value="tab2">
      {products?.map((item) => (
        <Product key={item._id} item={item} />
      ))}
    </Tabs.Content>
  </Tabs.Root>
);
