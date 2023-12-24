import { Schema, model } from 'mongoose';
import { ProductType } from '../../../../enums';
import { Color, IProduct, ProductModel } from '../interfaces';
import { PhoneSpecsSchema } from './phone.schema';

const ColorSchema = new Schema<Color>({
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const getSpecsSchema = (type: ProductType) => {
  switch (type) {
    case ProductType.PHONE:
      return PhoneSpecsSchema;
    default:
      return new Schema();
  }
};

export const ProductSchema = new Schema<IProduct, ProductModel>(
  {
    type: { type: String, required: true, enum: ProductType },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    specs: {
      type: Schema.Types.Mixed,
      required: true,
      default: function () {
        return getSpecsSchema(this.type);
      },
    },
    colors: { type: [ColorSchema], required: true },
    inventory: { type: Number, required: true },
    madeIn: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
