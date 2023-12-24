import { ProductType } from '../../../enums';
import { IProduct } from './interfaces';
import { Product } from './schema';

const addProduct = async (product: IProduct): Promise<IProduct> => {
  const created = new Product(product);
  return await created.save();
};

const getProducts = async (): Promise<IProduct[]> => {
  return await Product.find();
};

const updateProduct = async (
  id: string,
  payload: IProduct,
): Promise<IProduct | null> => {
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

const getProduct = async (id: string): Promise<IProduct | null> => {
  return await Product.findById(id);
};

const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

const getProductsByType = async (type: ProductType): Promise<IProduct[]> => {
  return await Product.find({ type });
};

export const ProductService = {
  addProduct,
  getProducts,
  updateProduct,
  getProduct,
  getProductsByType,
  deleteProduct,
};
