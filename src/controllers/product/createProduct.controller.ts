import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import createProductService from "../../services/product/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  try {
    const {
      name,
      price,
      img_url,
      type,
      quantity_stock,
      rating,
      label,
      description,
    } = req.body;

    const user = await createProductService({
      name,
      price,
      img_url,
      type,
      quantity_stock,
      rating,
      label,
      description,
    });

    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default createProductController;
