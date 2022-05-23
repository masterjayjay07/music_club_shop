import { Request, Response, NextFunction } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
import { AppError, handleError } from "../../errors/AppError";
import { instanceToPlain } from "class-transformer";

const userUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, user_name, birth_date, password, is_adm } = req.body;
  console.log(req.body);

  try {
    const user = await userUpdateService({
      id,
      name,
      email,
      user_name,
      birth_date,
      password,
      is_adm,
    });

    return res.json(instanceToPlain(user));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userUpdateController;
