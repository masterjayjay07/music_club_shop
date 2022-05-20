import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import cartDelProdService from "../../services/cart/cartDeleteProducts.service";

const cartDeleteProdController = async (req: Request, res: Response) => {
  try {
    const { product_id } = req.params;

    const { userEmail } = req.body;

    await cartDelProdService(userEmail, product_id);

    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cartDeleteProdController;
