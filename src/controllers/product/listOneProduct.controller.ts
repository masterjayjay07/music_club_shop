import { Request, Response } from "express";
import listOneProductService from "../../services/product/listOneProduct.service";

const listOneProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await listOneProductService({ id });

  return res.status(200).json(product);
};

export default listOneProductController;
