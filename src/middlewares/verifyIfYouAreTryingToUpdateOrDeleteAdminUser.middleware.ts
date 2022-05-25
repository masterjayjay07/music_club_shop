import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

interface IToken {
  email: string;
  is_adm: boolean;
  sub: string;
}

const verifyIfYouAreTryingToUpdateOrDeleteAdminUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  let token: string = req.headers.authorization || "";
  token = token.replace("Bearer ", "");

  const secretKey = process.env.POSTGRES_SECRET_KEY || "secret";
  const decoded = jwt.verify(token, secretKey) as IToken;

  const { sub } = decoded;
  const userId = sub;

  if (id !== userId && user?.is_adm === true) {
    const errorCatched = new AppError(
      401,
      `You can't update or delete another admin user`
    );
    handleError(errorCatched, res);
  }

  next();
};
export default verifyIfYouAreTryingToUpdateOrDeleteAdminUser;
