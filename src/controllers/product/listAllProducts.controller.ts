import { Request, Response } from "express";
import listProductsService from "../../services/product/listProducts.service";

const listProductsController = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page);
  const limit: number = Number(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const products = await listProductsService();
  if (!page || !limit || page <= 0 || limit <= 0) {
    return res.status(200).json(products);
  }
  const result = products.slice(startIndex, endIndex);
  return res.status(200).json({
    info: {
      nextPage:
        process.env.NODE_ENV === "production"
          ? `https://api-music-club-shop.herokuapp.com/?page=${page + 1}`
          : `https://localhost:3000/?page=${page + 1}`,
      prevPage:
        page - 1 <= 0
          ? null
          : process.env.NODE_ENV === "production"
          ? `https://api-music-club-shop.herokuapp.com/?page=${page - 1}`
          : `https://localhost:3000/?page=${page - 1}`,
    },
    products: result,
  });
};

export default listProductsController;
