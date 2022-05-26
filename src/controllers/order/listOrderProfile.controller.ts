import { Request, Response } from "express";
import orderListUserOneService from "../../services/order/listOrderOneUser.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const orderListProfileController = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    const orders = await orderListUserOneService(userId);

    return res.json(instanceToPlain(orders));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default orderListProfileController;
