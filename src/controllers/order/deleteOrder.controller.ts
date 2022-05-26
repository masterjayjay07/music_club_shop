import { AppError, handleError } from "../../errors/AppError";
import { Request, Response } from "express";
import orderDeleteService from "../../services/order/deleteOrder.service";

const orderDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await orderDeleteService(id);

    return res.status(204).json({ message: "Order deleted with sucess!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default orderDeleteController;
