import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import listCartService from "../../services/cart/listCart.service";

const cartListController = async (req: Request, res: Response) => {
  try {
    const carts = await listCartService();

    return res.status(200).json(carts);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
export default cartListController;
