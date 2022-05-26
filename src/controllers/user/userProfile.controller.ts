import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const userProfileController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;

    const user = await userListOneService(id);

    return res.status(200).json(instanceToPlain(user));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userProfileController;
