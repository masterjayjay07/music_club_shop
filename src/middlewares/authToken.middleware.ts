import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";

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
  const secretKey = process.env.POSTGRES_SECRET_KEY || "";

  jwt.verify(token, secretKey, (err) => {
    if (err) {
      throw new AppError(401, "Invalid Token");
    }
  });

  next();
};
export default authTokenMiddleware;
