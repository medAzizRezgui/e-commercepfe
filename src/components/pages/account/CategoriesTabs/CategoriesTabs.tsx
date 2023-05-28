import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import { Category } from '../../../../types/Category';
import { SousCategory } from '../../../../types/SousCategory';
import { AddCategories } from '../AddCategories';
import { ManageCategories } from '../ManageCategories';

type Props = {
  categories: Category[];
  sousCategories: SousCategory[];
};
export const CategoriesTabs = ({ categories, sousCategories }: Props) => (
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
      <AddCategories />
    </Tabs.Content>
    <Tabs.Content value="tab2">
      {/* Manage Categories */}
      <ManageCategories
        categories={categories}
        sousCategories={sousCategories}
      />
    </Tabs.Content>
  </Tabs.Root>
);
