import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create a New Product
router.post("/", ProductControllers.createProduct);
// Retrieve a List of All Products
router.get("/", ProductControllers.getAllProducts);
// Retrieve a Specific Product by ID
router.get("/:productId", ProductControllers.getProductById);

export const ProductRoutes = router;
