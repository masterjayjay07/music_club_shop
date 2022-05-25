import { Request, Response } from "express";
import updateProductService from "../../services/product/updateProduct.service";
import { AppError, handleError } from "../../errors/AppError";

const updateProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, img_url, type, quantity_stock, rating, label,description } =
      req.body;
  
    const user = await updateProductService({
      id,
      name,
      price,
      img_url,
      type,
      quantity_stock,
      rating,
      label,
      description
    });
  
    return res.status(200).json(user);
    
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateProductController;
