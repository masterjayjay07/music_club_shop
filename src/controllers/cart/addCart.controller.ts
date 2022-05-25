import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import addCartService from "../../services/cart/addCart.service";

const addCartController = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    const userId = req.user.id;

    const cartProductCreated = await addCartService({ userId, productId });

    res.status(201).json(cartProductCreated);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default addCartController;
