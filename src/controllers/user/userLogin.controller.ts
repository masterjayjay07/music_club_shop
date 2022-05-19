import { Request, Response } from "express";
import userLoginService from "../../services/user/userLogin.service";
import { AppError, handleError } from "../../errors/AppError";

const userLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password, user_name } = req.body;

    const token = await userLoginService({ email, user_name, password });

    // req.userEmail = {
    //   email: email as string,
    // };

    return res.status(201).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userLoginController;
