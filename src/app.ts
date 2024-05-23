import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoutes } from "./app/modules/order/order.route";
const app: Application = express();

// PARSERS
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

export default app;
