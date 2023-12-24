import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ProductType } from '../../../enums';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProduct } from './interfaces';
import { ProductService } from './product.service';

const addProduct = catchAsync(async (req: Request, res: Response) => {
  const product = req.body;
  const result = await ProductService.addProduct(product);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully !',
    data: result,
  });
});

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getProducts();

  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
});

const getProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ProductService.getProduct(id);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await ProductService.updateProduct(id, payload);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products updated successfully!',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  await ProductService.deleteProduct(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products deleted successfully!',
  });
});

const getPhones = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getProductsByType(ProductType.PHONE);

  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products fetched successfully!',
    data: result,
  });
});

export const ProductController = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  getPhones,
  deleteProduct,
};
