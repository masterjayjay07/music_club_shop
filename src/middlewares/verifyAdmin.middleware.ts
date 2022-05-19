import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { errorMiddleware } from "./error.middleware";

const verifyAdminMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repository = AppDataSource.getRepository(User);

  const userEmail = req.userEmail;

  const user = await repository.findOne({ where: { email: userEmail.email } });

  if (user?.is_adm === false) {
    const err = new AppError(401, "You need to be admin");
    errorMiddleware(err, req, res, next);
  }

  next();
};
export default verifyAdminMiddleware;
