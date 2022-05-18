import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";
import { AppError, handleError } from "../../errors/AppError";

const userListOneController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userListOneService(id);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userListOneController;
