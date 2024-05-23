import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { Product } from "./product.interface";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;

    const { error } = productValidationSchema.validate(product);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await ProductServices.createProductDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm: string | undefined = req.query.searchTerm as
      | string
      | undefined;
    const result = await ProductServices.getAllProductsDB(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getProductByIdDB(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const product: Product = req.body;

    const { error } = productValidationSchema.validate(product);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await ProductServices.updateProductByIdDB(
      productId,
      product
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProductByIdDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
