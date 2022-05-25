import { Request, Response } from "express";
import { IToken } from "../../interfaces";
import createOrderService from "../../services/order/createOrder.service";
import jwt from "jsonwebtoken";
import { instanceToPlain } from "class-transformer";
import { AppError, handleError } from "../../errors/AppError";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const { 
      status, 
      typeOfPayment,
      street, 
      number, 
      cep, 
      neighborhood, 
      country, 
      complement,
      city
    } =req.body;
  
    // let token = req.headers.authorization || "";
    // token = token.replace("Bearer ", "");
    // const secretKey = process.env.POSTGRES_SECRET_KEY || "secret";
    // const decoded = jwt.verify(token, secretKey) as IToken;
    // const { sub } = decoded;
    // const userId = sub;
    const userId = req.user.id
  
    const result = await createOrderService({
      userId,
      status,
      typeOfPayment,
      street,
      number,
      cep,
      neighborhood,
      country,
      complement,
      city
    });
    return res.status(201).json(instanceToPlain(result) );
    
  } catch (error) {
    if(error instanceof AppError)
     handleError(error,res)
  }

};

export default createOrderController;
