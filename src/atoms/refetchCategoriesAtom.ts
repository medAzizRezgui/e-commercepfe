import { atom } from 'recoil';

export const refetchCategoriesState = atom({
  key: 'refetchCategoriesState',
  default: false,
});
