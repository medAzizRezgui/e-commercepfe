import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import { Product } from '../../../../types/Product';
import { ProductCard } from '../../../shared/ProductCard';

export const TabsComponent = ({ prods }: { prods: Product[] }) => (
  <div className="mx-auto w-full max-w-[1400px]">
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          Featured
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          On Sale
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab3">
          Top Rated
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className="grid grid-cols-4 items-stretch justify-items-stretch ">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {prods.map((prod, i) => {
            if (i < 8) {
              return <ProductCard key={prod._id} data={prod} />;
            }
          })}
        </div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="grid grid-cols-4">
          {prods
            .filter((item) => item.discount > 0)
            .map((prod) => (
              <ProductCard key={prod._id} data={prod} />
            ))}
        </div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="grid grid-cols-4">
          {prods
            .filter(
              (item) =>
                item.rating &&
                item.rating.length > 0 &&
                item.rating.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.rate,
                  0
                ) /
                  item.rating.length >=
                  4
            )
            .map((prod) => (
              <ProductCard key={prod._id} data={prod} />
            ))}
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </div>
);
