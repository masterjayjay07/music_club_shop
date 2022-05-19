import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import cartAddProdService from "../../services/order/cartAddProducts.service";

const cartAddProdController = async (req: Request, res: Response) => {
  try {
    const { userEmail, product_id } = req.body;

    const cartAdd = await cartAddProdService(product_id, userEmail);

    res.json(cartAdd);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cartAddProdController;
