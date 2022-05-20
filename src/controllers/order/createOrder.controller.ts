import { Request, Response } from "express";
import createOrderService from "../../services/order/createOrder.service";

const createOrderController = async (req: Request, res: Response) => {
  const { userId, status } = req.body;

  const result = await createOrderService({ userId, status });

  return res.status(201).json(result);
};

export default createOrderController;