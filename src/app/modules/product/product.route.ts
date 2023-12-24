import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './products.controller';
import { ProductValidation } from './validation/product.validation';

const router = express.Router();

router.get('/', ProductController.getProducts);
router.get('/phones', ProductController.getPhones);
router.post(
  '/',
  validateRequest(ProductValidation.addProductZodSchema),
  ProductController.addProduct,
);
router.get('/:id', ProductController.getProduct);
router.post(
  '/:id',
  validateRequest(ProductValidation.addProductZodSchema),
  ProductController.updateProduct,
);
router.delete('/:id', ProductController.deleteProduct);

export const ProductRouter = router;
