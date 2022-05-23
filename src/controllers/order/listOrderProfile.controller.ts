import { Request, Response } from "express";
import orderListUserOneService from "../../services/order/listOrderOneUser.service";
import { AppError, handleError } from "../../errors/AppError";
import jwt from 'jsonwebtoken'
import { IToken } from "../../interfaces";
import { instanceToPlain } from "class-transformer";

const orderListProfileController = async (req: Request, res: Response) => {
  try {
    // let token = req.headers.authorization || ''
    // token = token?.replace('Bearer ','')
    // const secretKey = process.env.POSTGRES_SECRET_KEY || 'secret'
    // const decoded = jwt.verify(token, secretKey) as IToken
    // const { email,sub,is_adm} = decoded;
    const userId = req.user.id

    const orders = await orderListUserOneService(userId);

    return res.json(instanceToPlain(orders) );
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default orderListProfileController