/* eslint-disable @typescript-eslint/no-unused-vars */
import { Model } from 'mongoose';
import { ProductType } from '../../../../enums';
import { PhoneSpecs } from './phone.interface';

export type Color = {
  color: string;
  quantity: number;
};

export type Specs = PhoneSpecs;

export type IProduct = {
  type: ProductType;
  brand: string;
  model: string;
  price: number;
  description: string;
  images: string[];
  specs: Specs;
  colors: Color[];
  inventory: number;
  madeIn: string;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
