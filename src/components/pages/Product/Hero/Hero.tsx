import React from 'react';

import { Product } from '../../../../types/Product';

import { CTA } from './CTA';
import { Details } from './Details';
import { Images } from './Images';

type Props = {
  prod: Product;
};
export const Hero = ({ prod }: Props) => (
  <div className="w-full bg-white flex items-start h-min justify-between max-w-[1400px] mx-auto py-40">
    <Images prod={prod} />
    {/*  Details */}
    <Details prod={prod} />
    {/*  CTA */}
    <CTA prod={prod} />
  </div>
);
