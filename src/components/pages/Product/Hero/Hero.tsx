import React from 'react';

import { Product } from '../../../../types/Product';

import { CTA } from './CTA';
import { Details } from './Details';
import { Images } from './Images';

type Props = {
  prod: Product;
};
export const Hero = ({ prod }: Props) => (
  <div className="mx-auto flex h-min w-full max-w-[1400px] items-start justify-between bg-white py-40">
    <Images prod={prod} />
    {/*  Details */}
    <Details prod={prod} />
    {/*  CTA */}
    <CTA prod={prod} />
  </div>
);
