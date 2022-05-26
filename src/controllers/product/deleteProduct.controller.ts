import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import deleteProductService from "../../services/product/deleteProduct.service";

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
  
    await deleteProductService({ id });
  
    return res.status(204).json();
    
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default deleteProductController;
