import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";

const authTokenMiddleware = (req: Request,res: Response,next: NextFunction) => {

  let token = req.headers.authorization;
  if (!token) {
    const errorCatched = new AppError(401, "Missing authorization token");
    handleError(errorCatched,res)
    return
  }
  token = token.replace("Bearer ", "");
  const secretKey = process.env.POSTGRES_SECRET_KEY || "";

  jwt.verify(token, secretKey, (err) => {
    if (err) {
      const errorCatched = new AppError(401, "Invalid Token");
      handleError(errorCatched,res)
      return
    }
  });
  const decoded = jwt.verify(token, secretKey);
  const { sub } = decoded;
  
  next();
};
export default authTokenMiddleware;
