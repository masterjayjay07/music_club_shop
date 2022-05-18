import { Request, Response, NextFunction } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
import { AppError, handleError } from "../../errors/AppError";

const userUpdateController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, email, user_name, birth_date, password } = request.body;

  try {
    const user = await userUpdateService({
      id,
      name,
      email,
      user_name,
      birth_date,
      password,
    });

    return response.json(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, response);
    }
  }
};

export default userUpdateController;
