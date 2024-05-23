import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { Product } from "./product.interface";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = req.body;

    const result = await ProductServices.createProductDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductControllers = {
  createProduct,
};
