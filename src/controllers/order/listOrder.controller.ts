import { Request, Response } from "express";
import orderListService from "../../services/order/listOrder.service";
import { AppError, handleError } from "../../errors/AppError";

const orderListController = async (req: Request, res: Response) => {
  try {
    const orders = await orderListService();

    return res.send(orders);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default orderListController