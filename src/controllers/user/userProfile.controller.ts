import { Request, Response } from "express";
import userListOneService from "../../services/user/userListOne.service";
import { AppError, handleError } from "../../errors/AppError";
import jwt from 'jsonwebtoken'
import { instanceToPlain } from "class-transformer";

const userProfileController = async (req: Request, res: Response) => {
  try {
    // let token = req.headers.authorization || ''
    // token = token?.replace('Bearer ','')
    // const secretKey = process.env.POSTGRES_SECRET_KEY || 'secret'

    // const decoded = jwt.verify(token, secretKey);
    // const { sub } = decoded;

    // const id = sub || ''

    const id =req.user.id
    
    const user = await userListOneService(id);

    return res.status(200).json(instanceToPlain(user) );

  } catch (err) {

    if (err instanceof AppError) {
      
      handleError(err, res);
    }
  }
};

export default userProfileController;