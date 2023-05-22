import { Category } from './Category';
import { SousCategory } from './SousCategory';

export type Product = {
  categorie: Category;
  countInStock: never;
  createdAt: string;
  description: string;
  files: string[];
  name: string;
  price: number;
  rating: number[];
  sousCategorie: SousCategory;
  updatedAt: string;
  features: string[];
  sku: string;
  __v: number;
  _id: string;
  discount: number;
  specifications: string;
};
