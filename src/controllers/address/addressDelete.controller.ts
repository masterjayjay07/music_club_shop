import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import addressDeleteService from "../../services/address/addressDelete.service";

const addressDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await addressDeleteService(id);
    return res.status(204).json({ message: "Address deleted" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressDeleteController;
