import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import { IToken } from "../interfaces";

const verifyAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repository = AppDataSource.getRepository(User);

  let token = req.headers.authorization || "";
  token = token.replace("Bearer ", "");
  const secretKey = process.env.POSTGRES_SECRET_KEY || "secret";
  const decoded = jwt.verify(token, secretKey) as IToken;
  const { sub } = decoded;
  const userId = sub;

  const user = await repository.findOne({ where: { id: userId } });

  if (user?.is_adm !== true) {
    const err = new AppError(401, "You need to be admin");
    handleError(err, res);
    return;
  }

  next();
};
export default verifyAdminMiddleware;
