import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";

const cartUpdateController = async (req: Request, res: Response) => {
  try {
    const { cartProdId } = req.params;
    const {} = req.body;

    res.status(200).json();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default cartUpdateController;
