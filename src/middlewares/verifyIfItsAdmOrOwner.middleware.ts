import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";

interface IToken {
  email: string;
  is_adm: boolean;
  sub: string;
}

const verifyIfItsAdmOrOwnerMiddleware = async (
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

  if (id !== userId && decoded.is_adm === false) {
    const errorCatched = new AppError(
      401,
      `You need to have admin permission `
    );
    handleError(errorCatched, res);
  }

  next();
};
export default verifyIfItsAdmOrOwnerMiddleware;
