import { Request, Response } from "express";
import deleteProductService from "../../services/product/deleteProduct.service";

const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteProductService({ id });

  return res.status(204).json();
};

export default deleteProductController;
