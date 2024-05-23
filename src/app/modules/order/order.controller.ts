import { Request, Response } from "express";
import { Order } from "./order.interface";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order: Order = req.body;

    const { error } = orderValidationSchema.validate(order);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await OrderServices.createOrderDB(order);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
