import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersDB = async (email: string | undefined) => {
  if (email) {
    return await OrderModel.find({ email: email });
  } else {
    return await OrderModel.find();
  }
};

export const OrderServices = {
  createOrderDB,
  getAllOrdersDB,
};
