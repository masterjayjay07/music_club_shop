import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import removeCartService from "../../services/cart/removeProdCart.service";

const removeCartController = async (req: Request, res: Response) => {
  try {
    const { cartProdId } = req.params;

    const userId = req.user.id;

    await removeCartService(cartProdId, userId);

    res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default removeCartController;
