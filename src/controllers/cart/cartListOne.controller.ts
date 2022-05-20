import { Request, Response } from "express";
import cartListOneService from "../../services/cart/cartListOne.service";
import { AppError, handleError } from "../../errors/AppError";

const cartListOneController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cart = await cartListOneService(id);

    return res.send(cart);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cartListOneController;
