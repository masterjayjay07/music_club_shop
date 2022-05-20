import { Request, Response } from "express";
import cartListService from "../../services/cart/cartList.service";
import { AppError, handleError } from "../../errors/AppError";

const cartListController = async (req: Request, res: Response) => {
  try {
    const carts = await cartListService();

    return res.send(carts);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cartListController;
