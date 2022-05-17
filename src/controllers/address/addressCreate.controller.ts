import { Request, Response } from "express";
import AppError from "../../errors/AppError";

const addressCreateController = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(err.message, err.statusCode);
    }
  }
};

export default addressCreateController;
