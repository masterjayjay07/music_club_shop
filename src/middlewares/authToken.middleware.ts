import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { User } from "../entities/user.entity";
import jwt from "jsonwebtoken";

interface DecodedLog {
  email: string;
  is_adm: boolean;
  user_name: string;
}

const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing authorization token");
  }

  token = token.replace("Bearer ", "");
  const secretKey = process.env.POSTGRES_SECRET_KEY;

  jwt.verify(token as string, secretKey as string, (err: any, decoded: any) => {
    if (err) {
      throw new AppError(401, "Invalid Token");
    }

    next();
  });
};
export default authTokenMiddleware;
