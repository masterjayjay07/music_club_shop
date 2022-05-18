import { Request, Response } from "express";
import userDeleteService from "../../services/user/userDeleteSelf.service";

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userDeleteService({ id });

    return res.status(200).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteController;
