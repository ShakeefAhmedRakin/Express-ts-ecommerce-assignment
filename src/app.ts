import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
const app: Application = express();

// PARSERS
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/products", ProductRoutes);

export default app;
