import { z } from 'zod';
import { ProductType } from '../../../../enums';
import { PhoneSpecsSchema } from './phone.validation';

// Validation schema for the Color type
const ColorSchema = z.object({
  color: z.string(),
  quantity: z.number(),
});

// Validation schema for the Specs union type
const SpecsSchema = z.union([PhoneSpecsSchema, PhoneSpecsSchema]);

// Validation schema for the IProduct interface
const addProductZodSchema = z.object({
  body: z.object({
    type: z.nativeEnum(ProductType),
    brand: z.string(),
    model: z.string(),
    price: z.number(),
    description: z.string(),
    images: z.array(z.string()),
    specs: SpecsSchema,
    colors: z.array(ColorSchema),
    inventory: z.number(),
    madeIn: z.string(),
  }),
});

export const ProductValidation = {
  addProductZodSchema,
};
