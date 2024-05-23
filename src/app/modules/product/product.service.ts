import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductById = async (id: string) => {
  const result = await ProductModel.find({ _id: id });
  return result;
};

const updateProductById = async (id: string, product: Product) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, product);
  return result;
};

export const ProductServices = {
  createProductDB,
  getAllProductsDB,
  getProductById,
  updateProductById,
};
