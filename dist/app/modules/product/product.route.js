"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const products_controller_1 = require("./products.controller");
const product_validation_1 = require("./validation/product.validation");
const router = express_1.default.Router();
router.get('/', products_controller_1.ProductController.getProducts);
router.get('/phones', products_controller_1.ProductController.getPhones);
router.post('/', (0, validateRequest_1.default)(product_validation_1.ProductValidation.addProductZodSchema), products_controller_1.ProductController.addProduct);
router.get('/:id', products_controller_1.ProductController.getProduct);
router.post('/:id', (0, validateRequest_1.default)(product_validation_1.ProductValidation.addProductZodSchema), products_controller_1.ProductController.updateProduct);
router.delete('/:id', products_controller_1.ProductController.deleteProduct);
exports.ProductRouter = router;