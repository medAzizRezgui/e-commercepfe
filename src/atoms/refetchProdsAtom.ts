import { atom } from 'recoil';

export const refetchProdsState = atom({
  key: 'refetchProdsState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
