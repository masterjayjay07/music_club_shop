import { Request, Response } from "express";
import listUsersService from "../../services/user/userList.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const userListController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService();

    return res.send(instanceToPlain(users) );
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userListController;
