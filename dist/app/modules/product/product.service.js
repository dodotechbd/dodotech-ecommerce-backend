"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const schema_1 = require("./schema");
const addProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const created = new schema_1.Product(product);
    return yield created.save();
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield schema_1.Product.find();
});
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schema_1.Product.findByIdAndUpdate(id, payload, { new: true });
});
const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schema_1.Product.findById(id);
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schema_1.Product.findByIdAndDelete(id);
});
const getProductsByType = (type) => __awaiter(void 0, void 0, void 0, function* () {
    return yield schema_1.Product.find({ type });
});
exports.ProductService = {
    addProduct,
    getProducts,
    updateProduct,
    getProduct,
    getProductsByType,
    deleteProduct,
};
