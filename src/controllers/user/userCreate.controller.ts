import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";
import "express-async-errors";
import { AppError, handleError } from "../../errors/AppError";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, user_name, birth_date, password, is_adm } = req.body;

    const newUser = await userCreateService({
      name,
      email,
      user_name,
      is_adm,
      birth_date,
      password,
    });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userCreateController;
