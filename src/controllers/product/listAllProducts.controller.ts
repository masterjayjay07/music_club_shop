import { Request, Response } from "express";
import listProductsService from "../../services/product/listProducts.service";
import { AppError, handleError } from "../../errors/AppError";

const listProductsController = async (req: Request, res: Response) => {
  try {
    const users = await listProductsService();
  
    return res.status(200).json(users);
    
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default listProductsController;
