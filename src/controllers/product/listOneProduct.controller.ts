import { Request, Response } from "express";
import listOneProductService from "../../services/product/listOneProduct.service";

const listOneProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await listOneProductService({ id });

  return res.status(200).json(user);
};

export default listOneProductController;
