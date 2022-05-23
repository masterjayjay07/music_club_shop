import { Request, Response } from "express";
import cartListProfile from "../../services/cart/cartListProfile.service";
import { AppError, handleError } from "../../errors/AppError";
import jwt from 'jsonwebtoken'
import { IToken } from "../../interfaces";

const cartListProfileController = async (req: Request, res: Response) => {
  try {
    let token = req.headers.authorization || ''
    token = token?.replace('Bearer ','')
    const secretKey = process.env.POSTGRES_SECRET_KEY || ''

    const decoded = jwt.verify(token, secretKey) as IToken
    const { email,sub,is_adm} = decoded;

    const cart = await cartListProfile(sub);

    return res.send(cart);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cartListProfileController;
