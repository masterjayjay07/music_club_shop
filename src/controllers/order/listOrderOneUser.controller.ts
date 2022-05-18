import { Request, Response } from "express";
import orderListUserOneService from "../../services/order/listOrderOneUser.service";
import { AppError, handleError } from "../../errors/AppError";

const orderListOneUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const orders = await orderListUserOneService(userId);

    return res.json(orders);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default orderListOneUserController;
