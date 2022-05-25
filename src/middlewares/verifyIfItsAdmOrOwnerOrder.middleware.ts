import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import Order from "../entities/order.entity";

interface IToken {
  email: string;
  is_adm: boolean;
  sub: string;
}

const verifyIfItsAdmOrOwnerOrderMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  let token: string = req.headers.authorization || "";
  token = token.replace("Bearer ", "");

  const secretKey = process.env.POSTGRES_SECRET_KEY || "secret";
  const decoded = jwt.verify(token, secretKey) as IToken;

  const { sub } = decoded;
  const userId = sub;

  const orderRepository = AppDataSource.getRepository(Order);
  const order = await orderRepository.findOne({ where: { id } });
  if (!order) {
    const errorCatched = new AppError(404, "Order not found");
    handleError(errorCatched, res);
  }
  if (order?.userId !== userId && decoded.is_adm === false) {
    const errorCatched = new AppError(401, "You need to have admin permission");
    handleError(errorCatched, res);
  }

  next();
};
export default verifyIfItsAdmOrOwnerOrderMiddleware;
