import { ProductType } from '../../../enums';

export type IProduct = {
  type: ProductType;
  brand: string;
  model: string;
  price: number;
};
