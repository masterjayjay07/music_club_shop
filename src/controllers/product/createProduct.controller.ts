import { Request, Response } from "express";
import createProductService from "../../services/product/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
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

  const product = await createProductService({
    name,
    price,
    img_url,
    type,
    quantity_stock,
    rating,
    label,
    description,
  });

  return res.status(201).json(product);
};

export default createProductController;
