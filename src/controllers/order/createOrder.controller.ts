import { Request, Response } from "express";
import { IToken } from "../../interfaces";
import createOrderService from "../../services/order/createOrder.service";
import jwt from 'jsonwebtoken'

const createOrderController = async (req: Request, res: Response) => {
  const { status } = req.body;

  let token = req.headers.authorization || ''
  token = token.replace("Bearer ", "") 
  const secretKey = process.env.POSTGRES_SECRET_KEY || ''
  const decoded = jwt.verify(token, secretKey) as IToken ;
  const { sub } = decoded;
  const userId =sub 

  const result = await createOrderService({ userId, status });

  return res.status(201).json(result);
};

export default createOrderController;