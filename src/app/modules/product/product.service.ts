import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsDB = async (searchTerm: string | undefined) => {
  if (searchTerm) {
    return await ProductModel.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
      ],
    });
  } else {
    return await ProductModel.find();
  }
};

const getProductByIdDB = async (id: string) => {
  const result = await ProductModel.find({ _id: id });
  return result;
};

const updateProductByIdDB = async (id: string, product: Product) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, product);
  return result;
};

const deleteProductByIdDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductDB,
  getAllProductsDB,
  getProductByIdDB,
  updateProductByIdDB,
  deleteProductByIdDB,
};
