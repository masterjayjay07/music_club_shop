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

  // const decodedVerifyToken

  if (!token) {
    throw new AppError(401, "Missing authorization token");
  }

  token = token.replace("Bearer ", "");
  const secretKey = process.env.POSTGRES_SECRET_KEY || "";

  jwt.verify(token, secretKey, (err) => {
    if (err) {
      throw new AppError(401, "Invalid Token");
    }
  });

  const decoded = jwt.verify(token, secretKey);

  const { sub } = decoded;

  // req.userEmail = { email: sub as string };


  next();
};
export default authTokenMiddleware;
