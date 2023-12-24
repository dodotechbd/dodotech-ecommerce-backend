"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../../../enums");
const phone_schema_1 = require("./phone.schema");
const ColorSchema = new mongoose_1.Schema({
    color: { type: String, required: true },
    quantity: { type: Number, required: true },
});
const getSpecsSchema = (type) => {
    switch (type) {
        case enums_1.ProductType.PHONE:
            return phone_schema_1.PhoneSpecsSchema;
        default:
            return new mongoose_1.Schema();
    }
};
exports.ProductSchema = new mongoose_1.Schema({
    type: { type: String, required: true, enum: enums_1.ProductType },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    specs: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
        default: function () {
            return getSpecsSchema(this.type);
        },
    },
    colors: { type: [ColorSchema], required: true },
    inventory: { type: Number, required: true },
    madeIn: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)('Product', exports.ProductSchema);
