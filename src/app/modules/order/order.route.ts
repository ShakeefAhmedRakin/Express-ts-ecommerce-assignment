import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// Create a New Order
router.post("/", OrderControllers.createOrder);

export const OrderRoutes = router;
