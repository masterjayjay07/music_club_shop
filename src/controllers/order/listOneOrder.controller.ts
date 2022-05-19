import { Request, Response } from "express";
import orderListOneService from "../../services/order/listOneOrder.service";
import { AppError, handleError } from "../../errors/AppError";

const orderListOneController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orders = await orderListOneService(id);

    return res.send(orders);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default orderListOneController;
