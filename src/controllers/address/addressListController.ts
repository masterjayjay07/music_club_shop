import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import addressListService from "../../services/address/addressList.service";

const addressListController = async (req: Request, res: Response) => {
  try {
    const allAddress = await addressListService();
    return res.status(200).json(allAddress);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressListController;
