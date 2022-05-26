import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import removeOneCart from "../../services/cart/removeCartOne.service";

const removeCartController = async (req: Request, res: Response) => {
  try {
    const { cartProdId } = req.params;

    const userId = req.user.id;

    await removeOneCart(cartProdId, userId);

    res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default removeCartController;
