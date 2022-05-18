import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import addressListOneService from "../../services/address/addressListOne.service";

const addressListOneController = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const userAddress = await addressListOneService(user_id);
    return res.status(200).json(userAddress);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressListOneController;
