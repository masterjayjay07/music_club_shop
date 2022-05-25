import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import userDeleteService from "../../services/user/userDeleteSelf.service";

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await userDeleteService({ id });

    return res.status(204).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userDeleteController;
