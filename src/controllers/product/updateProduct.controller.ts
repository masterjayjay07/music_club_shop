import { Request, Response } from "express";
import updateProductService from "../../services/product/updateProduct.service";

const updateProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
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

  const product = await updateProductService({
    id,
    name,
    price,
    img_url,
    type,
    quantity_stock,
    rating,
    label,
    description,
  });

  return res.status(200).json(product);
};

export default updateProductController;
