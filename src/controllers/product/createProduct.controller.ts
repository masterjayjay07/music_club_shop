import { Request, Response } from "express";

const createProductController = async (req: Request, res: Response) => {
  const { name, price, img_url, type, quantity_stock, rating, label } =
    req.body;

  //const user = await createProduct({ name, price, img_url, type, quantity_stock, rating, label });

  //return res.status(201).json(user);
};

export default createProductController;
