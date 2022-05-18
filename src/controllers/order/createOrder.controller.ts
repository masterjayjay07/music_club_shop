import { Request, Response } from "express";
import createOrderService from "../../services/order/createOrder.service";

const createOrderController = async (req: Request, res: Response) => {
  const { userId } = req.body;

  const result = await createOrderService({ userId });

  return res.status(201).json(result);
};

export default createOrderController;
