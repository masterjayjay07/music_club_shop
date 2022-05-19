import { Request, Response } from "express";
import listProductsService from "../../services/product/listProducts.service";

const listProductsController = async (req: Request, res: Response) => {
  const users = await listProductsService();

  return res.status(200).json(users);
};

export default listProductsController;
