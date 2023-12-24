"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../../../enums");
const phone_validation_1 = require("./phone.validation");
// Validation schema for the Color type
const ColorSchema = zod_1.z.object({
    color: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
// Validation schema for the Specs union type
const SpecsSchema = zod_1.z.union([phone_validation_1.PhoneSpecsSchema, phone_validation_1.PhoneSpecsSchema]);
// Validation schema for the IProduct interface
const addProductZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        type: zod_1.z.nativeEnum(enums_1.ProductType),
        brand: zod_1.z.string(),
        model: zod_1.z.string(),
        price: zod_1.z.number(),
        description: zod_1.z.string(),
        images: zod_1.z.array(zod_1.z.string()),
        specs: SpecsSchema,
        colors: zod_1.z.array(ColorSchema),
        inventory: zod_1.z.number(),
        madeIn: zod_1.z.string(),
    }),
});
exports.ProductValidation = {
    addProductZodSchema,
};
