import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const userListOneController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userListOneService(id);

    return res.status(200).json(instanceToPlain(user) );
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userListOneController;
