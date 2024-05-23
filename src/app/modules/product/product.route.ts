import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// Create a New Product
router.post("/", ProductControllers.createProduct);
// Retrieve a List of All Products
router.get("/", ProductControllers.getAllProducts);
// Retrieve a Specific Product by ID

export const ProductRoutes = router;
