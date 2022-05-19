import { Request, Response } from "express";
import createProductService from "../../services/product/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const { name, price, img_url, type, quantity_stock, rating, label } =
    req.body;

  const user = await createProductService({
    name,
    price,
    img_url,
    type,
    quantity_stock,
    rating,
    label,
  });

  return res.status(201).json(user);
};

export default createProductController;
