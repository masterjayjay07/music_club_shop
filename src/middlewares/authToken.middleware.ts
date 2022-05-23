import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import { IToken } from "../interfaces";
const authTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  if (!token) {
    const errorCatched = new AppError(401, "Missing authorization token");
    return handleError(errorCatched, res);
  }
  token = token.replace("Bearer ", "");
  const secretKey = process.env.POSTGRES_SECRET_KEY || 'secret';

  jwt.verify(token as string, secretKey as string, (err: any, decoded: any) => {
    if (err) {
      const errorCatched = new AppError(401, "Invalid Token");
      handleError(errorCatched, res);
      return;
    }
  });
  const decoded = jwt.verify(token, secretKey) as IToken;
  const { sub } = decoded;
  
  req.user = {
    id:sub as string,
    email:decoded.email 
  }
  

  next();
};
export default authTokenMiddleware;
